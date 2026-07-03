// アプリ全体で共有する型定義。
// 教科・学年を追加するときはこのファイルを変更せずに済む設計にしている。

export type Grade = 1 | 2 | 3;

export type SubjectId = "math" | "english" | "japanese" | "science" | "social";

export type HintLevel = 1 | 2 | 3;

export interface Unit {
  id: string;
  name: string;
}

export interface Problem {
  id: string;
  subject: SubjectId;
  grade: Grade;
  unit: Unit;
  tags: string[];
  question: string;
  answerType: "text" | "choice";
  choices?: string[];
  /** 正答。表記ゆれを列挙し、正規化後に比較する */
  correctAnswers: string[];
  /** 静的解説。AI不通時のフォールバック兼、AI解説生成時のグラウンディング元 */
  explanation: string;
  difficulty: 1 | 2 | 3;
}

export interface Attempt {
  id: string;
  problemId: string;
  subject: SubjectId;
  grade: Grade;
  unitId: string;
  answeredAt: string; // ISO 8601
  answer: string;
  isCorrect: boolean;
  /** どの段階までヒントを使ったか（0 = 未使用）。理解度の参考データとして蓄積する */
  hintLevelUsed: 0 | HintLevel;
  askedQuestion: boolean;
}

export interface StudentProfile {
  grade: Grade;
  nickname?: string;
}

export const GRADE_LABELS: Record<Grade, string> = {
  1: "中学1年",
  2: "中学2年",
  3: "中学3年",
};
