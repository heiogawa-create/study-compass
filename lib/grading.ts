import type { Problem } from "./types";

// 正誤判定はAIに任せず、決定論的な正規化比較で行う（誤判定・誤答提示の防止）。

/** 全角英数字・記号を半角へ、マイナス類を "-" へそろえる */
function toHalfWidth(s: string): string {
  return s
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(/[＋]/g, "+")
    .replace(/[−ーｰ―–—]/g, "-")
    .replace(/[×]/g, "*")
    .replace(/[÷]/g, "/")
    .replace(/[＝]/g, "=")
    .replace(/[？]/g, "?")
    .replace(/[．]/g, ".")
    .replace(/[，、]/g, ",");
}

/** 数学向け: 空白をすべて除去し、先頭の "+" を落とす */
function normalizeMath(s: string): string {
  let t = toHalfWidth(s).replace(/\s+/g, "").toLowerCase();
  if (t.startsWith("+")) t = t.slice(1);
  t = t.replace(/=\+/g, "=");
  return t;
}

/** 英語向け: 小文字化・空白圧縮・末尾ピリオド無視（? は残す） */
function normalizeEnglish(s: string): string {
  return toHalfWidth(s)
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\.+$/, "");
}

/** 国語・理科・社会向け: 空白除去・末尾の句点や「です」を無視 */
function normalizeJapanese(s: string): string {
  return toHalfWidth(s)
    .replace(/\s+/g, "")
    .replace(/[。．.]+$/, "")
    .replace(/です$/, "")
    .toLowerCase();
}

export function normalizeAnswer(subject: Problem["subject"], s: string): string {
  if (subject === "math") return normalizeMath(s);
  if (subject === "english") return normalizeEnglish(s);
  return normalizeJapanese(s);
}

export function judge(problem: Problem, studentAnswer: string): boolean {
  const normalized = normalizeAnswer(problem.subject, studentAnswer);
  if (!normalized) return false;
  return problem.correctAnswers.some(
    (correct) => normalizeAnswer(problem.subject, correct) === normalized
  );
}
