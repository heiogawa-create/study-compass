"use client";

import Link from "next/link";
import { useState } from "react";
import type { HintLevel, Problem } from "@/lib/types";
import { GRADE_LABELS } from "@/lib/types";
import { judge } from "@/lib/grading";
import { newAttemptId, saveAttempt } from "@/lib/progress";

const HINT_TITLES: Record<HintLevel, string> = {
  1: "ヒント1：ここに注目！",
  2: "ヒント2：解き方の入り口",
  3: "ヒント3：あと一歩！",
};

interface Props {
  problem: Problem;
  nextProblemId: string | null;
}

// 問題演習画面。ヒントは1→2→3の順にのみ開放し、使った段階を記録する。
export default function ProblemWorkspace({ problem, nextProblemId }: Props) {
  const [answer, setAnswer] = useState("");
  const [hints, setHints] = useState<string[]>([]);
  const [hintLoading, setHintLoading] = useState(false);
  const [hintError, setHintError] = useState<string | null>(null);
  const [question, setQuestion] = useState("");
  const [askedQuestion, setAskedQuestion] = useState(false);
  const [result, setResult] = useState<null | { isCorrect: boolean }>(null);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [explaining, setExplaining] = useState(false);

  const nextHintLevel = (hints.length + 1) as HintLevel;
  const hintsExhausted = hints.length >= 3;

  async function requestHint(studentQuestion?: string) {
    if (hintLoading || hintsExhausted || result) return;
    setHintLoading(true);
    setHintError(null);
    try {
      const res = await fetch("/api/hint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          problemId: problem.id,
          level: nextHintLevel,
          studentQuestion,
        }),
      });
      const data = (await res.json()) as { hint?: string; error?: string };
      if (!res.ok || !data.hint) {
        setHintError(data.error ?? "ヒントを取得できませんでした");
      } else {
        setHints((prev) => [...prev, data.hint!]);
        if (studentQuestion) setAskedQuestion(true);
        setQuestion("");
      }
    } catch {
      setHintError("通信エラーが起きました。もう一度ためしてね。");
    } finally {
      setHintLoading(false);
    }
  }

  async function submitAnswer() {
    if (!answer.trim() || result) return;
    const isCorrect = judge(problem, answer);
    setResult({ isCorrect });

    // 進捗データを記録（どの段階までヒントを使ったかを含む）
    saveAttempt({
      id: newAttemptId(),
      problemId: problem.id,
      subject: problem.subject,
      grade: problem.grade,
      unitId: problem.unit.id,
      answeredAt: new Date().toISOString(),
      answer: answer.trim(),
      isCorrect,
      hintLevelUsed: hints.length as 0 | HintLevel,
      askedQuestion,
    });

    // 解説を取得（AI不通時はサーバー側が静的解説にフォールバック）
    setExplaining(true);
    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          problemId: problem.id,
          studentAnswer: answer.trim(),
          isCorrect,
        }),
      });
      const data = (await res.json()) as { explanation?: string };
      setExplanation(data.explanation ?? problem.explanation);
    } catch {
      setExplanation(problem.explanation);
    } finally {
      setExplaining(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="text-sm text-ink/60">
        <Link href={`/study/${problem.subject}`} className="underline hover:no-underline">
          ← 問題一覧にもどる
        </Link>
        <span className="ml-3">
          {GRADE_LABELS[problem.grade]}・{problem.unit.name}・{"★".repeat(problem.difficulty)}
        </span>
      </div>

      {/* 問題文 */}
      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="whitespace-pre-wrap text-lg font-bold leading-relaxed">
          {problem.question}
        </h1>
      </section>

      {/* ヒント表示 */}
      {hints.map((hint, i) => (
        <section key={i} className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-4">
          <div className="mb-1 text-sm font-bold text-amber-700">
            💡 {HINT_TITLES[(i + 1) as HintLevel]}
          </div>
          <p className="leading-relaxed">{hint}</p>
        </section>
      ))}
      {hintError && (
        <p className="rounded-2xl bg-rose-50 p-3 text-sm text-rose-700">{hintError}</p>
      )}

      {/* 解答前の操作 */}
      {!result && (
        <section className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submitAnswer()}
              placeholder="ここに答えを書こう"
              className="flex-1 rounded-2xl border-2 border-ink/15 bg-white px-4 py-3 text-lg outline-none focus:border-sky-400"
            />
            <button
              onClick={submitAnswer}
              disabled={!answer.trim()}
              className="rounded-2xl bg-sky-600 px-6 py-3 font-bold text-white transition hover:bg-sky-700 disabled:opacity-40"
            >
              答え合わせ
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => requestHint()}
              disabled={hintLoading || hintsExhausted}
              className="rounded-2xl border-2 border-amber-400 bg-amber-100 px-5 py-2.5 font-bold text-amber-800 transition hover:bg-amber-200 disabled:opacity-40"
            >
              {hintLoading
                ? "先生が考え中…"
                : hintsExhausted
                  ? "ヒントは全部見たよ"
                  : `わからない（ヒント${nextHintLevel}をもらう）`}
            </button>
            <span className="text-xs text-ink/50">ヒントは3段階。少しずつ深くなるよ</span>
          </div>

          <details className="rounded-2xl bg-white p-4 shadow-sm">
            <summary className="cursor-pointer text-sm font-bold text-ink/70">
              先生に質問してみる（この問題について）
            </summary>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="例：「移項」ってなんだっけ？"
                className="flex-1 rounded-2xl border-2 border-ink/15 px-4 py-2 outline-none focus:border-sky-400"
              />
              <button
                onClick={() => question.trim() && requestHint(question.trim())}
                disabled={hintLoading || hintsExhausted || !question.trim()}
                className="rounded-2xl bg-ink px-4 py-2 text-sm font-bold text-white disabled:opacity-40"
              >
                質問する
              </button>
            </div>
            <p className="mt-2 text-xs text-ink/50">
              ※ 質問するとヒント1回分を使うよ。答えそのものは教えられないんだ。
            </p>
          </details>
        </section>
      )}

      {/* 判定と解説 */}
      {result && (
        <section
          className={`space-y-3 rounded-2xl border-2 p-6 ${
            result.isCorrect ? "border-emerald-300 bg-emerald-50" : "border-rose-200 bg-rose-50"
          }`}
        >
          <div className="text-2xl font-bold">
            {result.isCorrect ? "🎉 正解！すごい！" : "😌 おしい！もう少し！"}
          </div>
          <div className="text-sm text-ink/60">
            きみの答え: <span className="font-bold">{answer}</span>
            {!result.isCorrect && (
              <>
                {" ／ 正解: "}
                <span className="font-bold">{problem.correctAnswers[0]}</span>
              </>
            )}
          </div>
          <div className="rounded-xl bg-white/70 p-4 leading-relaxed">
            {explaining ? "先生が解説を書いているよ…" : explanation}
          </div>
          <div className="flex gap-3 pt-2">
            {nextProblemId ? (
              <Link
                href={`/study/${problem.subject}/${nextProblemId}`}
                className="rounded-2xl bg-sky-600 px-6 py-3 font-bold text-white hover:bg-sky-700"
              >
                つぎの問題へ →
              </Link>
            ) : (
              <Link
                href={`/study/${problem.subject}`}
                className="rounded-2xl bg-sky-600 px-6 py-3 font-bold text-white hover:bg-sky-700"
              >
                問題一覧へもどる
              </Link>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
