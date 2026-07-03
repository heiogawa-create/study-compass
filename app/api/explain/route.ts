import { NextResponse } from "next/server";
import { getProblem } from "@/lib/problems";
import { buildExplainSystemPrompt, hasPromptTemplate } from "@/lib/prompts";
import { generateText, isAnthropicConfigured, toFriendlyErrorMessage } from "@/lib/anthropic";

export const runtime = "nodejs";

interface ExplainRequest {
  problemId: string;
  studentAnswer: string;
  isCorrect: boolean;
}

// 正誤判定はクライアント側（lib/grading.ts）で決定論的に行い、
// このAPIは判定結果を踏まえた「解説文」の生成だけを担当する。
// AI不通時はクライアントが問題の静的解説へフォールバックする。
export async function POST(request: Request) {
  let body: ExplainRequest;
  try {
    body = (await request.json()) as ExplainRequest;
  } catch {
    return NextResponse.json({ error: "リクエストの形式が正しくありません" }, { status: 400 });
  }

  const problem = body.problemId ? getProblem(body.problemId) : undefined;
  if (!problem) {
    return NextResponse.json({ error: "問題が見つかりません" }, { status: 404 });
  }
  if (!hasPromptTemplate(problem.subject) || !isAnthropicConfigured()) {
    // フォールバック: 静的解説をそのまま返す
    return NextResponse.json({ explanation: problem.explanation, source: "static" });
  }

  const answer = String(body.studentAnswer ?? "").slice(0, 200);
  try {
    const explanation = await generateText(
      buildExplainSystemPrompt(problem, answer, Boolean(body.isCorrect)),
      "この問題の解説をお願いします。"
    );
    return NextResponse.json({ explanation, source: "ai" });
  } catch (error) {
    // 解説はフォールバック可能なので、エラー時も静的解説で応答する
    console.error("explain API error:", toFriendlyErrorMessage(error).message);
    return NextResponse.json({ explanation: problem.explanation, source: "static" });
  }
}
