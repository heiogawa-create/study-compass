"use client";

import type { SubjectSummary, TrendPoint } from "@/lib/progress";
import { getSubject } from "@/lib/subjects";

// ダッシュボード用の軽量SVGチャート。
// 配色は検証済みカテゴリカルパレット（教科に固定割当・ランクで塗り替えない）。
// アクア(#1baf7a)は淡色面でコントラストが弱いため、値の直接ラベルを必ず添える。
const SUBJECT_COLORS: Record<string, string> = {
  math: "#2a78d6",
  english: "#1baf7a",
  japanese: "#e87ba4",
  science: "#008300",
  social: "#4a3aa7",
};

/** 教科別の取り組み数バー（値ラベル付き） */
export function SubjectBars({ data }: { data: SubjectSummary[] }) {
  if (data.length === 0) {
    return <p className="text-sm text-ink/50">この期間の学習記録はまだありません。</p>;
  }
  const max = Math.max(...data.map((d) => d.attempts), 1);
  return (
    <div className="space-y-2">
      {data.map((d) => {
        const meta = getSubject(d.subject);
        const width = (d.attempts / max) * 100;
        return (
          <div key={d.subject} className="flex items-center gap-2 text-sm">
            <span className="w-12 shrink-0 font-bold">{meta?.name ?? d.subject}</span>
            <div className="h-5 flex-1 rounded bg-ink/5">
              <div
                className="flex h-5 items-center rounded pl-2 text-xs font-bold text-white"
                style={{
                  width: `${Math.max(width, 8)}%`,
                  backgroundColor: SUBJECT_COLORS[d.subject] ?? "#2a78d6",
                }}
                title={`${meta?.name}: ${d.attempts}問（正解 ${d.correct}）`}
              >
                {d.attempts}問
              </div>
            </div>
            <span className="w-40 shrink-0 whitespace-nowrap text-right text-xs text-ink/60">
              正答率 {d.attempts ? Math.round((d.correct / d.attempts) * 100) : 0}%・ヒント
              {d.attempts ? Math.round((d.hintUsed / d.attempts) * 100) : 0}%
            </span>
          </div>
        );
      })}
    </div>
  );
}

/** 正答率の推移（単一系列の折れ線 + 点。ホバーで値を表示） */
export function AccuracyTrend({ data }: { data: TrendPoint[] }) {
  const W = 560;
  const H = 180;
  const PAD = { top: 16, right: 16, bottom: 28, left: 40 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  const points = data.map((d, i) => {
    const accuracy = d.attempts ? d.correct / d.attempts : null;
    return {
      ...d,
      accuracy,
      x: PAD.left + (data.length === 1 ? innerW / 2 : (i / (data.length - 1)) * innerW),
      y: accuracy === null ? null : PAD.top + (1 - accuracy) * innerH,
    };
  });
  const path = points
    .filter((p) => p.y !== null)
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y!.toFixed(1)}`)
    .join(" ");

  if (points.every((p) => p.accuracy === null)) {
    return <p className="text-sm text-ink/50">この期間の学習記録はまだありません。</p>;
  }

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full min-w-[320px]"
        role="img"
        aria-label="正答率の推移"
      >
        {/* 目盛り（控えめなグリッド） */}
        {[0, 0.5, 1].map((v) => {
          const y = PAD.top + (1 - v) * innerH;
          return (
            <g key={v}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={y}
                y2={y}
                stroke="#3D3A34"
                strokeOpacity={0.1}
              />
              <text x={PAD.left - 6} y={y + 4} textAnchor="end" fontSize={11} fill="#3D3A34" fillOpacity={0.6}>
                {Math.round(v * 100)}%
              </text>
            </g>
          );
        })}
        {/* 折れ線 */}
        {path && <path d={path} fill="none" stroke="#2a78d6" strokeWidth={2} />}
        {/* データ点（ホバーで値） */}
        {points.map(
          (p, i) =>
            p.y !== null && (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r={4.5} fill="#2a78d6" stroke="#FBF8F1" strokeWidth={2}>
                  <title>{`${p.label}: 正答率 ${Math.round((p.accuracy ?? 0) * 100)}%（${p.correct}/${p.attempts}問）`}</title>
                </circle>
              </g>
            )
        )}
        {/* X軸ラベル */}
        {points.map((p, i) => (
          <text
            key={i}
            x={p.x}
            y={H - 8}
            textAnchor="middle"
            fontSize={11}
            fill="#3D3A34"
            fillOpacity={0.6}
          >
            {p.label}
          </text>
        ))}
      </svg>
    </div>
  );
}

/** ヒント使用率などの数値タイル */
export function StatTile({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="text-xs text-ink/60">{label}</div>
      <div className="mt-1 text-3xl font-bold">{value}</div>
      {note && <div className="mt-1 text-xs text-ink/50">{note}</div>}
    </div>
  );
}
