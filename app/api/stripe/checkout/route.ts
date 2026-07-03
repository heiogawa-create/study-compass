import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

// 月額サブスクリプションの Checkout セッションを作成する。
// 価格設計は未確定のため、価格は STRIPE_PRICE_ID（Stripeダッシュボードで作成）で差し替える。
export async function POST() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;
  if (!secretKey || !priceId) {
    return NextResponse.json(
      { error: "決済は現在準備中です（Stripeの環境変数が未設定です）" },
      { status: 503 }
    );
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const stripe = new Stripe(secretKey);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${appUrl}/subscribe?status=success`,
      cancel_url: `${appUrl}/subscribe?status=cancelled`,
      // MVPでは匿名。認証導入後に client_reference_id / customer を紐づける
    });
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("stripe checkout error:", error);
    return NextResponse.json({ error: "決済ページの作成に失敗しました" }, { status: 502 });
  }
}
