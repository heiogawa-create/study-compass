import Anthropic from "@anthropic-ai/sdk";

// ヒント生成に使うモデル。ユーザー要件によりSonnet系を既定とする。
export const MODEL = process.env.ANTHROPIC_MODEL ?? "claude-sonnet-5";

let client: Anthropic | null = null;

export function isAnthropicConfigured(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY);
}

function getClient(): Anthropic {
  if (!client) client = new Anthropic();
  return client;
}

/**
 * system prompt + 単発のユーザーメッセージでテキストを生成する共通処理。
 * ヒント・解説とも短文出力のため非ストリーミングで呼ぶ。
 */
export async function generateText(system: string, userMessage: string): Promise<string> {
  const response = await getClient().messages.create({
    model: MODEL,
    max_tokens: 1024,
    system,
    // 短文・低レイテンシ優先。adaptive thinking（既定）のまま effort を下げる
    output_config: { effort: "low" },
    messages: [{ role: "user", content: userMessage }],
  });

  const text = response.content
    .filter((block): block is Anthropic.TextBlock => block.type === "text")
    .map((block) => block.text)
    .join("")
    .trim();

  if (!text) throw new Error("AIからの応答が空でした");
  return text;
}

/** SDKの典型エラーを日本語メッセージへ変換する */
export function toFriendlyErrorMessage(error: unknown): { status: number; message: string } {
  if (error instanceof Anthropic.RateLimitError) {
    return { status: 429, message: "アクセスが集中しています。少し待ってからもう一度ためしてね。" };
  }
  if (error instanceof Anthropic.AuthenticationError) {
    return { status: 500, message: "AIの設定に問題があります（APIキーを確認してください）。" };
  }
  if (error instanceof Anthropic.APIConnectionError) {
    return { status: 502, message: "AIに接続できませんでした。通信状態を確認してもう一度ためしてね。" };
  }
  if (error instanceof Anthropic.APIError) {
    return { status: 502, message: "AIの応答でエラーが起きました。少し待ってからもう一度ためしてね。" };
  }
  return { status: 500, message: "予期しないエラーが起きました。もう一度ためしてね。" };
}
