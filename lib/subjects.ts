import type { SubjectId } from "./types";

export interface SubjectMeta {
  id: SubjectId;
  name: string;
  emoji: string;
  /** カードの背景色（Tailwindクラス） */
  color: string;
  /** 問題データ・プロンプトを実装済みか。未実装教科は「準備中」表示 */
  implemented: boolean;
}

// 5教科のレジストリ。教科追加時はここの implemented を true にし、
// lib/problems と lib/prompts に対応ファイルを追加する。
export const SUBJECTS: SubjectMeta[] = [
  { id: "math", name: "数学", emoji: "🔢", color: "bg-sky-100", implemented: true },
  { id: "english", name: "英語", emoji: "🔤", color: "bg-amber-100", implemented: true },
  { id: "japanese", name: "国語", emoji: "📖", color: "bg-rose-100", implemented: false },
  { id: "science", name: "理科", emoji: "🔬", color: "bg-emerald-100", implemented: false },
  { id: "social", name: "社会", emoji: "🗾", color: "bg-violet-100", implemented: false },
];

export function getSubject(id: string): SubjectMeta | undefined {
  return SUBJECTS.find((s) => s.id === id);
}
