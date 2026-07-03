"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { HintLevel } from "@/lib/types";
import { loadProfile } from "@/lib/progress";

const HINT_TITLES: Record<HintLevel, string> = {
  1: "ヒント1：ここに注目！",
  2: "ヒント2：解き方の入り口",
  3: "ヒント3：あと一歩！",
};

const MAX_DIMENSION = 1400;

/** 撮影/選択した画像を縮小してJPEGのbase64（プレフィックスなし）に変換する */
async function toResizedBase64(
  file: File
): Promise<{ base64: string; dataUrl: string }> {
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("読み込みに失敗しました"));
    reader.readAsDataURL(file);
  });

  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const el = new Image();
    el.onload = () => resolve(el);
    el.onerror = () => reject(new Error("画像を開けませんでした"));
    el.src = dataUrl;
  });

  const scale = Math.min(1, MAX_DIMENSION / Math.max(img.width, img.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(img.width * scale);
  canvas.height = Math.round(img.height * scale);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("画像の処理に失敗しました");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const resized = canvas.toDataURL("image/jpeg", 0.85);
  return { base64: resized.split(",")[1], dataUrl: resized };
}

// 写真で質問するページ。ワークやプリントのわからない問題を撮影すると、
// アプリ内の問題と同じ3段階方式でAIがヒントを出す（答えは出さない）。
export default function CameraPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const [hints, setHints] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const nextLevel = (hints.length + 1) as HintLevel;
  const exhausted = hints.length >= 3;

  async function onSelectFile(file: File | undefined) {
    if (!file) return;
    setError(null);
    setHints([]);
    try {
      const { base64, dataUrl } = await toResizedBase64(file);
      setImageBase64(base64);
      setPreview(dataUrl);
    } catch (e) {
      setError(e instanceof Error ? e.message : "画像の読み込みに失敗しました");
    }
  }

  async function requestHint() {
    if (!imageBase64 || loading || exhausted) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/photo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: imageBase64,
          mediaType: "image/jpeg",
          level: nextLevel,
          grade: loadProfile()?.grade ?? 1,
          studentQuestion: note.trim() || undefined,
        }),
      });
      const data = (await res.json()) as { hint?: string; error?: string };
      if (!res.ok || !data.hint) {
        setError(data.error ?? "ヒントを取得できませんでした");
      } else {
        setHints((prev) => [...prev, data.hint!]);
      }
    } catch {
      setError("通信エラーが起きました。もう一度ためしてね。");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setPreview(null);
    setImageBase64(null);
    setHints([]);
    setNote("");
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">📷 写真でしつもん</h1>
        <p className="mt-1 text-sm text-ink/60">
          ワークやプリントのわからない問題を撮ってみよう。AIの先生が3段階のヒントで導くよ（答えは教えないよ）。
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => onSelectFile(e.target.files?.[0])}
      />

      {!preview ? (
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex w-full flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-ink/25 bg-white px-6 py-14 transition hover:border-ink/50"
        >
          <span className="text-5xl">📷</span>
          <span className="font-bold">問題を撮影する / 写真をえらぶ</span>
          <span className="text-xs text-ink/50">
            問題文がはっきり写るように、明るいところで撮ってね
          </span>
        </button>
      ) : (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview} alt="撮影した問題" className="mx-auto max-h-96 rounded-xl" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <button onClick={reset} className="text-ink/60 underline hover:no-underline">
              べつの写真にする
            </button>
          </div>

          {hints.length === 0 && (
            <input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="補足があれば（例：(2)がわかりません）"
              className="w-full rounded-2xl border-2 border-ink/15 bg-white px-4 py-2 outline-none focus:border-sky-400"
            />
          )}

          {hints.map((hint, i) => (
            <section key={i} className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-4">
              <div className="mb-1 text-sm font-bold text-amber-700">
                💡 {HINT_TITLES[(i + 1) as HintLevel]}
              </div>
              <p className="whitespace-pre-wrap leading-relaxed">{hint}</p>
            </section>
          ))}

          {error && <p className="rounded-2xl bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}

          <button
            onClick={requestHint}
            disabled={loading || exhausted}
            className="w-full rounded-2xl border-2 border-amber-400 bg-amber-100 px-5 py-3 font-bold text-amber-800 transition hover:bg-amber-200 disabled:opacity-40"
          >
            {loading
              ? "先生が写真を見ているよ…"
              : exhausted
                ? "ヒントは全部見たよ。あとは自分で仕上げよう！"
                : hints.length === 0
                  ? "この問題のヒントをもらう"
                  : `もっとヒント（ヒント${nextLevel}）`}
          </button>
        </div>
      )}

      <p className="text-center text-xs text-ink/50">
        アプリの中の問題は{" "}
        <Link href="/" className="underline hover:no-underline">
          教科をえらんで
        </Link>{" "}
        解けるよ。
      </p>
    </div>
  );
}
