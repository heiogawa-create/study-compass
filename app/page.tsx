"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SUBJECTS } from "@/lib/subjects";
import { GRADE_LABELS, type Grade } from "@/lib/types";
import { loadProfile, saveProfile } from "@/lib/progress";

// トップページ: 学年を選んで教科を選ぶ。
// 選んだ学年はプロフィールとして保存し、ヒントの語彙調整・出題の初期値に使う。
export default function HomePage() {
  const [grade, setGrade] = useState<Grade>(1);

  useEffect(() => {
    const profile = loadProfile();
    if (profile) setGrade(profile.grade);
  }, []);

  function selectGrade(g: Grade) {
    setGrade(g);
    saveProfile({ grade: g });
  }

  return (
    <div className="space-y-10">
      <section className="space-y-3 text-center">
        <h1 className="text-3xl font-bold leading-relaxed">
          答えは教えない。
          <br className="sm:hidden" />
          「わかった！」まで案内する。
        </h1>
        <p className="text-ink/70">
          わからないときは「わからない」ボタン。AIの先生が3段階のヒントで、
          きみが自分で答えにたどり着けるように導くよ。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-bold">きみの学年は？</h2>
        <div className="flex gap-3">
          {([1, 2, 3] as Grade[]).map((g) => (
            <button
              key={g}
              onClick={() => selectGrade(g)}
              className={`flex-1 rounded-2xl border-2 px-4 py-3 text-lg font-bold transition ${
                grade === g
                  ? "border-ink bg-ink text-white"
                  : "border-ink/15 bg-white hover:border-ink/40"
              }`}
            >
              {GRADE_LABELS[g]}
            </button>
          ))}
        </div>
        <p className="text-sm text-ink/60">
          ※ どの学年を選んでも、下の教科からほかの学年の単元を復習できるよ。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-bold">教科をえらぼう</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {SUBJECTS.map((subject) =>
            subject.implemented ? (
              <Link
                key={subject.id}
                href={`/study/${subject.id}`}
                className={`${subject.color} rounded-2xl p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow`}
              >
                <div className="text-4xl">{subject.emoji}</div>
                <div className="mt-2 text-lg font-bold">{subject.name}</div>
              </Link>
            ) : (
              <div
                key={subject.id}
                className="rounded-2xl bg-ink/5 p-6 text-center text-ink/40"
              >
                <div className="text-4xl grayscale">{subject.emoji}</div>
                <div className="mt-2 text-lg font-bold">{subject.name}</div>
                <div className="text-xs">準備中</div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
