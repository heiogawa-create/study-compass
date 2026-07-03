import Link from "next/link";
import { notFound } from "next/navigation";
import { findProblems, listGrades, listUnits } from "@/lib/problems";
import { getSubject, SUBJECTS } from "@/lib/subjects";
import { GRADE_LABELS, type Grade } from "@/lib/types";

export function generateStaticParams() {
  return SUBJECTS.filter((s) => s.implemented).map((s) => ({ subject: s.id }));
}

// 単元・問題一覧。学年は ?grade= で切り替え可能（学年をまたいだ復習）。
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

      {units.map((unit) => {
        const problems = findProblems({ subject: subject.id, grade, unitId: unit.id });
        return (
          <section key={unit.id} className="space-y-3">
            <h2 className="font-bold">
              {unit.name}
              <span className="ml-2 text-sm font-normal text-ink/50">
                {problems.length}問
              </span>
            </h2>
            <ul className="space-y-2">
              {problems.map((p, i) => (
                <li key={p.id}>
                  <Link
                    href={`/study/${subject.id}/${p.id}`}
                    className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
                  >
                    <span className="line-clamp-1">
                      <span className="mr-2 font-bold text-ink/40">Q{i + 1}</span>
                      {p.question.split("\n")[0]}
                    </span>
                    <span className="ml-3 shrink-0 text-sm text-ink/50">
                      {"★".repeat(p.difficulty)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
