"use client";

import type { Attempt, Grade, StudentProfile, SubjectId } from "./types";

// 解答履歴の保存・集計。MVPでは localStorage に保存する。
// このファイルのインターフェース（saveAttempt / loadAttempts / aggregate）を
// 維持したまま、将来DBバックエンドのAPI呼び出しへ差し替える。

const ATTEMPTS_KEY = "studycompass:attempts:v1";
const PROFILE_KEY = "studycompass:profile:v1";

export function loadAttempts(): Attempt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(ATTEMPTS_KEY);
    return raw ? (JSON.parse(raw) as Attempt[]) : [];
  } catch {
    return [];
  }
}

export function saveAttempt(attempt: Attempt): void {
  const attempts = loadAttempts();
  attempts.push(attempt);
  window.localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts));
}

export function loadProfile(): StudentProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(PROFILE_KEY);
    return raw ? (JSON.parse(raw) as StudentProfile) : null;
  } catch {
    return null;
  }
}

export function saveProfile(profile: StudentProfile): void {
  window.localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

// ---- 保護者ダッシュボード用の集計 ----

export type Range = "week" | "month";

export interface SubjectSummary {
  subject: SubjectId;
  attempts: number;
  correct: number;
  hintUsed: number; // ヒントを1回以上使った解答数
}

export interface TrendPoint {
  label: string; // "7/1" など
  attempts: number;
  correct: number;
}

export interface Aggregation {
  total: number;
  correct: number;
  hintUsed: number;
  /** ヒント使用率（0-1）。解答のうちヒントを使った割合 */
  hintRate: number;
  /** 正答率（0-1） */
  accuracy: number;
  bySubject: SubjectSummary[];
  /** 日別（週）または週別（月）の正答率推移 */
  trend: TrendPoint[];
}

function startOf(range: Range, now: Date): Date {
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - (range === "week" ? 6 : 27));
  return d;
}

export function aggregate(attempts: Attempt[], range: Range, now = new Date()): Aggregation {
  const from = startOf(range, now);
  const inRange = attempts.filter((a) => new Date(a.answeredAt) >= from);

  const bySubjectMap = new Map<SubjectId, SubjectSummary>();
  for (const a of inRange) {
    const s =
      bySubjectMap.get(a.subject) ??
      ({ subject: a.subject, attempts: 0, correct: 0, hintUsed: 0 } as SubjectSummary);
    s.attempts += 1;
    if (a.isCorrect) s.correct += 1;
    if (a.hintLevelUsed > 0) s.hintUsed += 1;
    bySubjectMap.set(a.subject, s);
  }

  // 推移: 週表示は日別7点、月表示は7日ごと4点
  const bucketDays = range === "week" ? 1 : 7;
  const bucketCount = range === "week" ? 7 : 4;
  const trend: TrendPoint[] = [];
  for (let i = 0; i < bucketCount; i++) {
    const bucketStart = new Date(from);
    bucketStart.setDate(from.getDate() + i * bucketDays);
    const bucketEnd = new Date(bucketStart);
    bucketEnd.setDate(bucketStart.getDate() + bucketDays);
    const bucket = inRange.filter((a) => {
      const t = new Date(a.answeredAt);
      return t >= bucketStart && t < bucketEnd;
    });
    trend.push({
      label: `${bucketStart.getMonth() + 1}/${bucketStart.getDate()}${bucketDays > 1 ? "〜" : ""}`,
      attempts: bucket.length,
      correct: bucket.filter((a) => a.isCorrect).length,
    });
  }

  const total = inRange.length;
  const correct = inRange.filter((a) => a.isCorrect).length;
  const hintUsed = inRange.filter((a) => a.hintLevelUsed > 0).length;

  return {
    total,
    correct,
    hintUsed,
    hintRate: total ? hintUsed / total : 0,
    accuracy: total ? correct / total : 0,
    bySubject: [...bySubjectMap.values()],
    trend,
  };
}

export function newAttemptId(): string {
  return `att-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export type { Attempt, Grade, StudentProfile };
