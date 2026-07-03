import type { Grade, Problem, SubjectId, Unit } from "../types";
import { mathGrade1 } from "./math-grade1";
import { englishGrade1 } from "./english-grade1";
import { japaneseGrade1 } from "./japanese-grade1";
import { scienceGrade1 } from "./science-grade1";
import { socialGrade1 } from "./social-grade1";

// 教科・学年を追加するときは、問題ファイルを作ってこの配列に足すだけでよい。
const ALL_PROBLEMS: Problem[] = [
  ...mathGrade1,
  ...englishGrade1,
  ...japaneseGrade1,
  ...scienceGrade1,
  ...socialGrade1,
];

export function findProblems(filter: {
  subject?: SubjectId;
  grade?: Grade;
  unitId?: string;
}): Problem[] {
  return ALL_PROBLEMS.filter(
    (p) =>
      (filter.subject === undefined || p.subject === filter.subject) &&
      (filter.grade === undefined || p.grade === filter.grade) &&
      (filter.unitId === undefined || p.unit.id === filter.unitId)
  );
}

export function getProblem(id: string): Problem | undefined {
  return ALL_PROBLEMS.find((p) => p.id === id);
}

/** 指定教科・学年の単元一覧（出現順） */
export function listUnits(subject: SubjectId, grade: Grade): Unit[] {
  const units: Unit[] = [];
  for (const p of findProblems({ subject, grade })) {
    if (!units.some((u) => u.id === p.unit.id)) units.push(p.unit);
  }
  return units;
}

/** 指定教科で問題が存在する学年一覧（学年をまたいだ復習用） */
export function listGrades(subject: SubjectId): Grade[] {
  const grades = new Set<Grade>();
  for (const p of ALL_PROBLEMS) {
    if (p.subject === subject) grades.add(p.grade);
  }
  return [...grades].sort();
}
