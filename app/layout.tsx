import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "スタディコンパス",
  description: "答えを教えず、気づきを導く。中学生のためのAI学習アプリ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen">
        <header className="border-b border-ink/10 bg-white/70 backdrop-blur">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-lg font-bold">
              🧭 スタディコンパス
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/parent" className="rounded-full px-3 py-1.5 hover:bg-ink/5">
                保護者の方へ
              </Link>
              <Link
                href="/subscribe"
                className="rounded-full bg-ink px-3 py-1.5 text-white hover:opacity-80"
              >
                プラン
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-4xl px-4 py-8 text-center text-xs text-ink/50">
          スタディコンパス — 答えを教えず、気づきを導く
        </footer>
      </body>
    </html>
  );
}
