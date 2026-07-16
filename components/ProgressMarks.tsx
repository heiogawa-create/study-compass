"use client";

import { useEffect, useState } from "react";
import { loadAttempts } from "@/lib/progress";

// 解答履歴（localStorage）から「正解ずみ」「挑戦したがまだ正解していない」問題の集合を作る。
// 一覧ページでは1画面に数十個のマークを描画するため、同一描画内での再パースを避ける短いキャッシュを持つ。
let cache: { at: number; solved: Set<string>; tried: Set<string> } | null = null;
function getStatus() {
  const now = Date.now();
  if (!cache || now - cache.at > 1000) {
    const solved = new Set<string>();
    const tried = new Set<string>();
    for (const a of loadAttempts()) {
      tried.add(a.problemId);
      if (a.isCorrect) solved.add(a.problemId);
    }
    cache = { at: now, solved, tried };
  }
  return cache;
}

/** 問題一覧の各行に出す小さなマーク。✅=正解ずみ / 🔸=挑戦したけどまだ正解していない */
export function SolvedMark({ problemId }: { problemId: string }) {
  // SSRとの不一致を避けるため、マウント後にlocalStorageを読んでから表示する
  const [state, setState] = useState<"solved" | "tried" | "none" | null>(null);
  useEffect(() => {
    const s = getStatus();
    setState(s.solved.has(problemId) ? "solved" : s.tried.has(problemId) ? "tried" : "none");
  }, [problemId]);

  return (
    <span className="inline-block w-6 shrink-0 text-center" aria-hidden={state === "none" || state === null}>
      {state === "solved" && (
        <span title="正解ずみ" role="img" aria-label="正解ずみ">
          ✅
        </span>
      )}
      {state === "tried" && (
        <span title="ちょうせん中（まだ正解していない）" role="img" aria-label="ちょうせん中">
          🔸
        </span>
      )}
    </span>
  );
}

/** 単元カード・単元ヘッダーに出す「n/30問クリア」チップ。未着手（0問）のときは何も出さない */
export function UnitProgressChip({ problemIds }: { problemIds: string[] }) {
  const [solvedCount, setSolvedCount] = useState<number | null>(null);
  useEffect(() => {
    const s = getStatus();
    setSolvedCount(problemIds.filter((id) => s.solved.has(id)).length);
  }, [problemIds]);

  if (!solvedCount) return null;
  const complete = solvedCount === problemIds.length;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${
        complete ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
      }`}
    >
      {complete ? "🏆 全問クリア！" : `✅ ${solvedCount}/${problemIds.length}問クリア`}
    </span>
  );
}
