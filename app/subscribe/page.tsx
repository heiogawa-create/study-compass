"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function SubscribeContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST" });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        setError(data.error ?? "決済ページの作成に失敗しました");
      } else {
        window.location.href = data.url;
      }
    } catch {
      setError("通信エラーが起きました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-lg space-y-6 text-center">
      <h1 className="text-2xl font-bold">プラン（保護者の方向け）</h1>

      {status === "success" && (
        <p className="rounded-2xl bg-emerald-50 p-4 text-emerald-700">
          ご登録ありがとうございます！引き続きすべての機能をご利用いただけます。
        </p>
      )}
      {status === "cancelled" && (
        <p className="rounded-2xl bg-amber-50 p-4 text-amber-700">
          お手続きは完了していません。いつでも再開できます。
        </p>
      )}

      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <div className="text-lg font-bold">スタディコンパス 月額プラン</div>
        <p className="mt-2 text-sm text-ink/60">
          AIヒント・全教科の問題・保護者ダッシュボードが使い放題。
          <br />
          価格はリリース時に確定します（Stripeで安全に決済）。
        </p>
        <button
          onClick={startCheckout}
          disabled={loading}
          className="mt-6 w-full rounded-2xl bg-ink px-6 py-3 font-bold text-white transition hover:opacity-80 disabled:opacity-40"
        >
          {loading ? "決済ページを準備中…" : "月額プランに申し込む"}
        </button>
        {error && <p className="mt-3 text-sm text-rose-600">{error}</p>}
        <p className="mt-4 text-xs text-ink/50">
          ※ 開発中は決済なしでもすべての機能をお試しいただけます。
        </p>
      </div>
    </div>
  );
}

export default function SubscribePage() {
  return (
    <Suspense>
      <SubscribeContent />
    </Suspense>
  );
}
