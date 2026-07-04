import { notFound } from "next/navigation";
import { findProblems, getProblem } from "@/lib/problems";
import ProblemWorkspace from "@/components/ProblemWorkspace";

export function generateStaticParams() {
  return findProblems({}).map((p) => ({ subject: p.subject, problemId: p.id }));
}

export default function ProblemPage({
  params,
}: {
  params: { subject: string; problemId: string };
}) {
  const problem = getProblem(params.problemId);
  if (!problem || problem.subject !== params.subject) notFound();

  // 同一単元内での「次の問題」ナビゲーション用
  const siblings = findProblems({
    subject: problem.subject,
    grade: problem.grade,
    unitId: problem.unit.id,
  });
  const index = siblings.findIndex((p) => p.id === problem.id);
  const nextId = index >= 0 && index + 1 < siblings.length ? siblings[index + 1].id : null;

  return <ProblemWorkspace problem={problem} nextProblemId={nextId} backHref={`/study/${problem.subject}/unit/${problem.unit.id}?grade=${problem.grade}`} />;
}
