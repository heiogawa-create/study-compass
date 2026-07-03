import type { Grade, HintLevel, Problem, SubjectId } from "../types";
import { commonGuardrails, HINT_LEVEL_POLICY } from "./guardrails";
import { mathSubjectPolicy } from "./math";
import { englishSubjectPolicy } from "./english";
import { japaneseSubjectPolicy } from "./japanese";
import { scienceSubjectPolicy } from "./science";
import { socialSubjectPolicy } from "./social";

// 教科を追加するときは、教科別ポリシー関数を作ってここに登録する。
const SUBJECT_POLICIES: Partial<Record<SubjectId, (grade: Grade) => string>> = {
  math: mathSubjectPolicy,
  english: englishSubjectPolicy,
  japanese: japaneseSubjectPolicy,
  science: scienceSubjectPolicy,
  social: socialSubjectPolicy,
};

export function hasPromptTemplate(subject: SubjectId): boolean {
  return subject in SUBJECT_POLICIES;
}

function problemContext(problem: Problem): string {
  return `【いま生徒が解いている問題】
単元: ${problem.unit.name}（中${problem.grade}・${problem.tags.join("、")}）
問題文: ${problem.question}
正答（生徒には絶対に見せない・書かない）: ${problem.correctAnswers[0]}
模範解説（考え方の参考。丸写しせず、指示された深さまでに留める）: ${problem.explanation}`;
}

/** 段階ヒント生成用の system prompt を合成する */
export function buildHintSystemPrompt(problem: Problem, level: HintLevel): string {
  const subjectPolicy = SUBJECT_POLICIES[problem.subject];
  if (!subjectPolicy) {
    throw new Error(`教科 ${problem.subject} のプロンプトテンプレートが未実装です`);
  }
  return [
    commonGuardrails(problem.grade),
    subjectPolicy(problem.grade),
    problemContext(problem),
    HINT_LEVEL_POLICY[level],
  ].join("\n\n");
}

/**
 * 写真で送られた問題への段階ヒント用の system prompt を合成する。
 * アプリ内の問題とちがい正答データがないため、読み取り・自己検算・安全側の姿勢を強く指示する。
 */
export function buildPhotoHintSystemPrompt(grade: Grade, level: HintLevel): string {
  return [
    commonGuardrails(grade),
    `【今回の役割: 写真の問題へのヒント】
生徒が、わからない問題を写真に撮って送ってきた。次の手順で対応する。
1. まず写真の問題文を注意深く読み取る。教科と単元を判断し、その教科・学年の範囲で答える。
2. ヒントの最初に「『◯◯』の問題だね。」のように、どの問題について話しているかを一言で確認する（写真に複数の問題があるときは、生徒の指定がなければいちばん上の問題を選び、どれを選んだか伝える）。
3. そのうえで、指示された深さのヒントを出す。答えそのものは絶対に書かない。
4. 解き方を導く前に頭の中で一度自分で解いて検算し、確信が持てない場合は断定を避けて「先生や教科書でも確かめてみてね」と添える。
5. 写真が不鮮明で読み取れないときは、その部分を推測で補わず、「もう少し近くで撮り直してみてね」とお願いする。
6. 写真が勉強の問題でないとき（自撮り・ゲーム画面・風景など）は、感想を一言だけ添えて、やさしく学習に戻す。
7. 学習指導要領の範囲（中学校）を超える問題（高校以上の内容）だったときは、無理に解説せず「これは高校で習う内容みたいだよ」と伝える。`,
    HINT_LEVEL_POLICY[level],
  ].join("\n\n");
}

/** 正誤判定後の解説生成用の system prompt を合成する */
export function buildExplainSystemPrompt(
  problem: Problem,
  studentAnswer: string,
  isCorrect: boolean
): string {
  const subjectPolicy = SUBJECT_POLICIES[problem.subject];
  if (!subjectPolicy) {
    throw new Error(`教科 ${problem.subject} のプロンプトテンプレートが未実装です`);
  }
  return [
    commonGuardrails(problem.grade),
    subjectPolicy(problem.grade),
    problemContext(problem),
    `【今回の役割: 解説】
生徒はすでに解答を終え、正誤判定も済んでいる（この場面に限り、正答や解き方の全体を説明してよい）。
生徒の解答: ${studentAnswer}
判定: ${isCorrect ? "正解" : "不正解"}
${
  isCorrect
    ? "なぜその答えになるのかの筋道を短く確認し、しっかりほめる。"
    : "生徒の解答のどこでつまずいた可能性が高いかにふれながら、正しい考え方の筋道をやさしく説明する。責める言い方はしない。"
}模範解説の内容から逸脱しないこと。`,
  ].join("\n\n");
}
