import Link from "next/link";
import { notFound } from "next/navigation";
import { findProblems, listGrades, listUnits } from "@/lib/problems";
import { getSubject, SUBJECTS } from "@/lib/subjects";
import { GRADE_LABELS, type Grade } from "@/lib/types";
import { getLesson } from "@/lib/lessons/index";
import { SolvedMark, UnitProgressChip } from "@/components/ProgressMarks";

export function generateStaticParams() {
  const params: { subject: string; unitId: string }[] = [];
  for (const subject of SUBJECTS.filter((s) => s.implemented)) {
    const seen = new Set<string>();
    for (const grade of listGrades(subject.id)) {
      for (const unit of listUnits(subject.id, grade)) {
        if (seen.has(unit.id)) continue;
        seen.add(unit.id);
        params.push({ subject: subject.id, unitId: unit.id });
      }
    }
  }
  return params;
}

// 単元内の問題一覧。学年は ?grade= で指定する。
export default function UnitPage({
  params,
  searchParams,
}: {
  params: { subject: string; unitId: string };
  searchParams: { grade?: string };
}) {
  const subject = getSubject(params.subject);
  if (!subject || !subject.implemented) notFound();

  const grades = listGrades(subject.id);
  const requested = Number(searchParams.grade);
  const grade: Grade = grades.includes(requested as Grade) ? (requested as Grade) : grades[0];
  const problems = findProblems({ subject: subject.id, grade, unitId: params.unitId });
  if (problems.length === 0) notFound();
  const unitName = problems[0].unit.name;
  const lesson = getLesson(subject.id, params.unitId);

  return (
    <div className="space-y-6">
      <div>
        <Link
          href={`/study/${subject.id}?grade=${grade}`}
          className="text-sm text-ink/60 underline hover:no-underline"
        >
          ← {subject.name}の単元一覧にもどる
        </Link>
        <h1 className="mt-2 text-2xl font-bold">
          {unitName}
          <span className="ml-2 text-sm font-normal text-ink/50">
            {GRADE_LABELS[grade]}・{problems.length}問
          </span>
          <span className="ml-2 align-middle">
            <UnitProgressChip problemIds={problems.map((p) => p.id)} />
          </span>
        </h1>
      </div>

      {lesson && (
        <section className="rounded-2xl border-2 border-sky-200 bg-sky-50 p-5">
          <div className="mb-2 text-sm font-bold text-sky-700">📘 今日学ぶこと</div>
          <p className="whitespace-pre-wrap leading-relaxed">{lesson}</p>
        </section>
      )}

      <ul className="space-y-2">
        {problems.map((p, i) => (
          <li key={p.id}>
            <Link
              href={`/study/${subject.id}/${p.id}`}
              className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <span className="flex min-w-0 items-center">
                <SolvedMark problemId={p.id} />
                <span className="line-clamp-1">
                  <span className="mr-2 font-bold text-ink/40">Q{i + 1}</span>
                  {/* 「次の計算をしなさい」のような指示文だけだと問題どうしの見分けがつかないため、
                      改行区切りの中身（実際の式・数値）もつなげて表示する */}
                  {p.question.replace(/\n/g, "　")}
                </span>
              </span>
              <span className="ml-3 shrink-0 text-sm text-ink/50">{"★".repeat(p.difficulty)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
