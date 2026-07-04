import Link from "next/link";
import { notFound } from "next/navigation";
import { findProblems, listGrades, listUnits } from "@/lib/problems";
import { getSubject, SUBJECTS } from "@/lib/subjects";
import { GRADE_LABELS, type Grade } from "@/lib/types";

export function generateStaticParams() {
  return SUBJECTS.filter((s) => s.implemented).map((s) => ({ subject: s.id }));
}

// 単元一覧ページ。学年は ?grade= で切り替え可能（学年をまたいだ復習）。
// 個々の問題一覧は単元を選んだ先の /study/[subject]/unit/[unitId] に分離している
// （1教科あたり数百問になったため、1ページに全問並べるとスクロールが長すぎるため）。
export default function SubjectPage({
  params,
  searchParams,
}: {
  params: { subject: string };
  searchParams: { grade?: string };
}) {
  const subject = getSubject(params.subject);
  if (!subject || !subject.implemented) notFound();

  const grades = listGrades(subject.id);
  const requested = Number(searchParams.grade);
  const grade: Grade = grades.includes(requested as Grade) ? (requested as Grade) : grades[0];
  const units = listUnits(subject.id, grade);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <span className="text-4xl">{subject.emoji}</span>
        <div>
          <h1 className="text-2xl font-bold">{subject.name}</h1>
          <p className="text-sm text-ink/60">単元をえらんで問題にちょうせん！</p>
        </div>
      </div>

      <div className="flex gap-2">
        {grades.map((g) => (
          <Link
            key={g}
            href={`/study/${subject.id}?grade=${g}`}
            className={`rounded-full px-4 py-1.5 text-sm font-bold ${
              g === grade ? "bg-ink text-white" : "bg-white border border-ink/15 hover:border-ink/40"
            }`}
          >
            {GRADE_LABELS[g]}範囲
          </Link>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {units.map((unit) => {
          const problems = findProblems({ subject: subject.id, grade, unitId: unit.id });
          const solvedRange =
            problems.length > 0
              ? `★${Math.min(...problems.map((p) => p.difficulty))}〜★${Math.max(...problems.map((p) => p.difficulty))}`
              : "";
          return (
            <Link
              key={unit.id}
              href={`/study/${subject.id}/unit/${unit.id}?grade=${grade}`}
              className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <span className="font-bold">{unit.name}</span>
              <span className="shrink-0 text-sm text-ink/50">
                {problems.length}問・{solvedRange}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
