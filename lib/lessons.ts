import type { SubjectId } from "./types";

// 単元ページで問題一覧の前に表示する「今日学ぶこと」レッスン文。
// ヒントと同じやさしいトーンで、その単元の核となるルールだけを短く説明する。
// キーは `${subject}:${unitId}`。
const LESSONS: Record<string, string> = {};

export function registerLessons(subject: SubjectId, lessons: Record<string, string>) {
  for (const [unitId, text] of Object.entries(lessons)) {
    LESSONS[`${subject}:${unitId}`] = text;
  }
}

export function getLesson(subject: SubjectId, unitId: string): string | undefined {
  return LESSONS[`${subject}:${unitId}`];
}
