import { NextResponse } from "next/server";
import { getProblem } from "@/lib/problems";
import { buildHintSystemPrompt, hasPromptTemplate } from "@/lib/prompts";
import { generateText, isAnthropicConfigured, toFriendlyErrorMessage } from "@/lib/anthropic";
import type { HintLevel } from "@/lib/types";

export const runtime = "nodejs";

interface HintRequest {
  problemId: string;
  level: HintLevel;
  /** 生徒の自由質問（任意）。学習と無関係な場合はガードレールが学習に戻す */
  studentQuestion?: string;
}

export async function POST(request: Request) {
  let body: HintRequest;
  try {
    body = (await request.json()) as HintRequest;
  } catch {
    return NextResponse.json({ error: "リクエストの形式が正しくありません" }, { status: 400 });
  }

  const problem = body.problemId ? getProblem(body.problemId) : undefined;
  if (!problem) {
    return NextResponse.json({ error: "問題が見つかりません" }, { status: 404 });
  }
  if (body.level !== 1 && body.level !== 2 && body.level !== 3) {
    return NextResponse.json({ error: "ヒントのレベルが正しくありません" }, { status: 400 });
  }
  if (!hasPromptTemplate(problem.subject)) {
    return NextResponse.json({ error: "この教科はまだ準備中です" }, { status: 400 });
  }
  if (!isAnthropicConfigured()) {
    return NextResponse.json(
      { error: "AIヒントは現在利用できません（ANTHROPIC_API_KEY 未設定）" },
      { status: 503 }
    );
  }

  const question = (body.studentQuestion ?? "").trim().slice(0, 500);
  const userMessage = question
    ? `生徒からの質問・つぶやき: 「${question}」\nこの内容が学習に関係あれば答えの範囲内でふれつつ、指定された深さのヒントを出してください。学習と関係なければ、ルールにしたがってやさしく学習に戻してください。`
    : `ヒントレベル${body.level}のヒントをお願いします。`;

  try {
    const hint = await generateText(buildHintSystemPrompt(problem, body.level), userMessage);
    return NextResponse.json({ hint });
  } catch (error) {
    const { status, message } = toFriendlyErrorMessage(error);
    return NextResponse.json({ error: message }, { status });
  }
}
