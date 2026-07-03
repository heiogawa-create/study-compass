import { NextResponse } from "next/server";
import { buildPhotoHintSystemPrompt } from "@/lib/prompts";
import {
  generateVisionText,
  isAnthropicConfigured,
  toFriendlyErrorMessage,
  type ImageMediaType,
} from "@/lib/anthropic";
import type { Grade, HintLevel } from "@/lib/types";

export const runtime = "nodejs";

const ALLOWED_MEDIA_TYPES: ImageMediaType[] = ["image/jpeg", "image/png", "image/webp"];
// クライアント側で縮小してから送る想定（それでも上限として ~3MB 相当のbase64を許容）
const MAX_BASE64_LENGTH = 4 * 1024 * 1024;

interface PhotoRequest {
  /** data:プレフィックスなしの base64 文字列 */
  image: string;
  mediaType: ImageMediaType;
  level: HintLevel;
  grade?: Grade;
  /** 生徒の補足（「(2)がわからない」など。任意） */
  studentQuestion?: string;
}

// 写真に撮った問題への段階ヒント生成。
// アプリ内の問題とちがい正答データを持たないため、プロンプト側で
// 読み取り確認・自己検算・答えを書かない、を強く指示している（lib/prompts/index.ts）。
export async function POST(request: Request) {
  let body: PhotoRequest;
  try {
    body = (await request.json()) as PhotoRequest;
  } catch {
    return NextResponse.json({ error: "リクエストの形式が正しくありません" }, { status: 400 });
  }

  if (typeof body.image !== "string" || body.image.length === 0) {
    return NextResponse.json({ error: "画像がありません" }, { status: 400 });
  }
  if (body.image.length > MAX_BASE64_LENGTH) {
    return NextResponse.json(
      { error: "画像が大きすぎます。もう一度撮り直してみてね。" },
      { status: 413 }
    );
  }
  if (!ALLOWED_MEDIA_TYPES.includes(body.mediaType)) {
    return NextResponse.json({ error: "対応していない画像形式です" }, { status: 400 });
  }
  if (body.level !== 1 && body.level !== 2 && body.level !== 3) {
    return NextResponse.json({ error: "ヒントのレベルが正しくありません" }, { status: 400 });
  }
  if (!isAnthropicConfigured()) {
    return NextResponse.json(
      { error: "写真での質問は現在利用できません（ANTHROPIC_API_KEY 未設定）" },
      { status: 503 }
    );
  }

  const grade: Grade = body.grade === 2 || body.grade === 3 ? body.grade : 1;
  const question = (body.studentQuestion ?? "").trim().slice(0, 500);
  const userMessage = question
    ? `この写真の問題がわかりません。補足: 「${question}」\nヒントレベル${body.level}のヒントをお願いします。`
    : `この写真の問題がわかりません。ヒントレベル${body.level}のヒントをお願いします。`;

  try {
    const hint = await generateVisionText(
      buildPhotoHintSystemPrompt(grade, body.level),
      body.image,
      body.mediaType,
      userMessage
    );
    return NextResponse.json({ hint });
  } catch (error) {
    const { status, message } = toFriendlyErrorMessage(error);
    return NextResponse.json({ error: message }, { status });
  }
}
