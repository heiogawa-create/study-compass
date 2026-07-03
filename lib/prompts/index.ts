import type { Grade, HintLevel, Problem, SubjectId } from "../types";
import { commonGuardrails, HINT_LEVEL_POLICY } from "./guardrails";
import { mathSubjectPolicy } from "./math";
import { englishSubjectPolicy } from "./english";

// 教科を追加するときは、教科別ポリシー関数を作ってここに登録する。
const SUBJECT_POLICIES: Partial<Record<SubjectId, (grade: Grade) => string>> = {
  math: mathSubjectPolicy,
  english: englishSubjectPolicy,
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
