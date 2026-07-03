import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

// Stripe Webhook 受信。署名を検証し、サブスクリプションの状態変化を受け取る。
// MVPではログ出力まで。DB導入時に契約状態（有効/解約）の永続化を追加する。
export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secretKey || !webhookSecret) {
    return NextResponse.json({ error: "Stripe未設定" }, { status: 503 });
  }

  const stripe = new Stripe(secretKey);
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "署名がありません" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    const payload = await request.text();
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (error) {
    console.error("stripe webhook signature error:", error);
    return NextResponse.json({ error: "署名の検証に失敗しました" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      // TODO(DB導入時): session.customer / subscription を保護者アカウントに紐づけて保存
      console.log("subscription started:", event.data.object.id);
      break;
    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      // TODO(DB導入時): 契約状態を更新
      console.log("subscription changed:", event.type, event.data.object.id);
      break;
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
