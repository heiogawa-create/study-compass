"use client";

import { useEffect, useState } from "react";
import { aggregate, loadAttempts, type Aggregation, type Range } from "@/lib/progress";
import { AccuracyTrend, StatTile, SubjectBars } from "@/components/charts";

// 保護者ダッシュボード。週次/月次で「取り組んだ教科」「ヒント使用率」「正答率の推移」を表示。
// MVPでは同一端末に保存された学習記録（localStorage）を集計する。
export default function ParentPage() {
  const [range, setRange] = useState<Range>("week");
  const [agg, setAgg] = useState<Aggregation | null>(null);

  useEffect(() => {
    setAgg(aggregate(loadAttempts(), range));
  }, [range]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">保護者ダッシュボード</h1>
        <p className="mt-1 text-sm text-ink/60">
          お子さまの学習のようすを確認できます（この端末での学習記録を表示しています）。
        </p>
      </div>

      {/* 期間フィルタ */}
      <div className="flex gap-2">
        {(
          [
            ["week", "直近1週間"],
            ["month", "直近1か月"],
          ] as [Range, string][]
        ).map(([r, label]) => (
          <button
            key={r}
            onClick={() => setRange(r)}
            className={`rounded-full px-4 py-1.5 text-sm font-bold ${
              range === r ? "bg-ink text-white" : "border border-ink/15 bg-white hover:border-ink/40"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {agg && (
        <>
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatTile label="解いた問題数" value={`${agg.total}問`} />
            <StatTile
              label="正答率"
              value={agg.total ? `${Math.round(agg.accuracy * 100)}%` : "—"}
              note={agg.total ? `${agg.correct} / ${agg.total} 問正解` : "記録がありません"}
            />
            <StatTile
              label="ヒント使用率"
              value={agg.total ? `${Math.round(agg.hintRate * 100)}%` : "—"}
              note="ヒントを使って解いた問題の割合。高い単元は理解の途中かもしれません"
            />
          </section>

          <section className="space-y-3 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="font-bold">取り組んだ教科</h2>
            <SubjectBars data={agg.bySubject} />
          </section>

          <section className="space-y-3 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="font-bold">
              正答率の推移
              <span className="ml-2 text-xs font-normal text-ink/50">
                （{range === "week" ? "日ごと" : "週ごと"}・点にカーソルを合わせると詳細）
              </span>
            </h2>
            <AccuracyTrend data={agg.trend} />
          </section>

          {/* 表ビュー（アクセシビリティ: チャートと同じデータを表でも提供） */}
          <details className="rounded-2xl bg-white p-4 shadow-sm">
            <summary className="cursor-pointer text-sm font-bold text-ink/70">
              データを表で見る
            </summary>
            <table className="mt-3 w-full text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-left text-ink/60">
                  <th className="py-1">期間</th>
                  <th className="py-1">解いた数</th>
                  <th className="py-1">正解数</th>
                  <th className="py-1">正答率</th>
                </tr>
              </thead>
              <tbody>
                {agg.trend.map((t, i) => (
                  <tr key={i} className="border-b border-ink/5">
                    <td className="py-1">{t.label}</td>
                    <td className="py-1">{t.attempts}</td>
                    <td className="py-1">{t.correct}</td>
                    <td className="py-1">
                      {t.attempts ? `${Math.round((t.correct / t.attempts) * 100)}%` : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>
        </>
      )}
    </div>
  );
}
