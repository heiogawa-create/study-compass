# スタディコンパス（Study Compass）設計書

中学生向け学習支援Webアプリ。答えを直接教えず、段階的なヒントで生徒の自力での気づきを支援する。

- フェーズ1ゴール: 定期テスト対策（教科書準拠レベル）
- 収録範囲: 数学・英語・国語・理科・社会 × 中1範囲。他学年は同じデータ構造で追加可能にする
- 数学は中1の教科書進度に沿って14単元（正負の数・加法と減法・乗法と除法・数の集合と素数の積・
  文字式ときまり・文字式の計算・方程式・方程式の利用・比例・比例とグラフ・反比例・平面図形・
  空間図形・立体の体積と表面積）に分割し、各単元30問を収録。パラメータ化した問題テンプレートを
  スクリプトで展開し、正答は問題生成と同じ計算式から導出することで転記ミスを防いでいる
  （生成スクリプトは使い捨てのため本リポジトリには含めず、`lib/problems/math-grade1.ts` に
  生成結果のみをコミットしている）

## 1. 技術構成

| 領域 | 採用技術 | 備考 |
|---|---|---|
| フロント/サーバー | Next.js 14 (App Router, TypeScript) | UIとAPIを単一リポジトリで管理 |
| スタイル | Tailwind CSS | 子供向けに圧迫感のない配色・大きめ文字 |
| AI | Claude API (`@anthropic-ai/sdk`) | 既定モデル `claude-sonnet-5`（`ANTHROPIC_MODEL` で変更可） |
| 決済 | Stripe（月額サブスクリプション） | Checkout + Webhook の仕組みのみ実装。価格は `STRIPE_PRICE_ID` で後決め |
| ホスティング | Netlify | `@netlify/plugin-nextjs` |
| 進捗データ | localStorage（MVP） | `lib/progress.ts` に集約。後述の通りDBへ差し替え可能な構造 |

### MVPでの進捗データの持ち方について

MVPでは認証・DBを導入せず、生徒の解答履歴（Attempt）をブラウザの localStorage に保存する。
保存・集計ロジックはすべて `lib/progress.ts` に閉じ込めてあり、インターフェース（`saveAttempt` / `loadAttempts`）を維持したまま
将来 Supabase / Postgres 等のAPI実装へ差し替えられる。保護者画面は同一端末の履歴を集計して表示する。

## 2. ディレクトリ構成

```
study-compass/
├── app/
│   ├── layout.tsx / page.tsx        # トップ（学年・教科選択）
│   ├── globals.css
│   ├── study/[subject]/
│   │   ├── page.tsx                 # 単元一覧（カード表示。教科横断で同一実装）
│   │   ├── unit/[unitId]/page.tsx   # 単元内の問題一覧（1教科が数百問になったため単元単位でページを分割）
│   │   └── [problemId]/page.tsx     # 問題演習画面（ヒント・解答・解説）
│   ├── camera/page.tsx              # 写真でしつもん（撮影→AI解析）
│   ├── parent/page.tsx              # 保護者ダッシュボード（週次/月次）
│   ├── subscribe/page.tsx           # 課金導線（Stripe Checkoutへ）
│   └── api/
│       ├── hint/route.ts            # 段階ヒント生成（Claude）
│       ├── explain/route.ts         # 正誤後の解説生成（Claude）
│       └── stripe/
│           ├── checkout/route.ts    # Checkoutセッション作成
│           └── webhook/route.ts     # サブスク状態のWebhook受信
├── components/
│   ├── ProblemWorkspace.tsx         # 演習画面本体（クライアント）
│   └── charts.tsx                   # ダッシュボード用の軽量SVGチャート
├── lib/
│   ├── types.ts                     # 共有型（Problem / Attempt / Subject / Grade）
│   ├── subjects.ts                  # 教科レジストリ（5教科定義・実装済みフラグ）
│   ├── problems/                    # 問題データ（教科×学年で1ファイル）
│   │   ├── math-grade1.ts
│   │   ├── english-grade1.ts
│   │   └── index.ts                 # 検索・取得API（教科/学年/単元でフィルタ）
│   ├── prompts/                     # ★プロンプトテンプレート（教科ごとに調整可能）
│   │   ├── guardrails.ts            # 全教科共通の安全ガードレール
│   │   ├── math.ts                  # 数学のヒント方針・用語制約
│   │   ├── english.ts               # 英語のヒント方針・用語制約
│   │   └── index.ts                 # テンプレート合成（教科×学年→system prompt）
│   ├── anthropic.ts                 # Claudeクライアント・呼び出し共通処理
│   ├── grading.ts                   # 正誤判定（アプリ側で決定論的に判定）
│   └── progress.ts                  # 解答履歴の保存・集計（localStorage）
├── docs/DESIGN.md
├── netlify.toml
└── .env.example
```

### 拡張の仕方（他教科・他学年）

1. `lib/problems/<subject>-grade<N>.ts` を追加し `problems/index.ts` に登録
2. `lib/prompts/<subject>.ts` を追加し `prompts/index.ts` に登録
3. `lib/subjects.ts` の該当教科を `implemented: true` にする

UI（一覧・演習画面・ダッシュボード）は教科非依存の共通実装のため変更不要。

## 3. データモデル

### Problem（問題）

```ts
type Grade = 1 | 2 | 3;                       // 中1〜中3
type SubjectId = "math" | "english" | "japanese" | "science" | "social";

interface Problem {
  id: string;                // 例 "math-g1-seifu-001"
  subject: SubjectId;
  grade: Grade;              // 出題学年タグ（学年をまたぐ復習はこのタグで検索）
  unit: { id: string; name: string };  // 単元タグ 例 { id: "seifu", name: "正負の数" }
  tags: string[];            // 補助タグ（"計算", "文章題" など）
  question: string;          // 問題文
  answerType: "text" | "choice";
  choices?: string[];
  correctAnswers: string[];  // 正答（表記ゆれを列挙。正規化後に比較）
  explanation: string;       // 静的解説（AI不通時のフォールバック兼グラウンディング）
  difficulty: 1 | 2 | 3;     // 定期テスト基礎〜応用
}
```

- **学年をまたぐ復習**: 生徒プロフィールの学年とは独立に、問題は `grade` + `unit` タグで検索する。
  中3の生徒が中1範囲を選ぶ、はクエリの違いだけで実現できる。

### Attempt（解答履歴 = 進捗の元データ）

```ts
interface Attempt {
  id: string;
  problemId: string;
  subject: SubjectId;
  grade: Grade;              // 問題側の学年
  unitId: string;
  answeredAt: string;        // ISO 8601
  answer: string;
  isCorrect: boolean;
  hintLevelUsed: 0 | 1 | 2 | 3;  // どの段階までヒントを使ったか（理解度の参考データ）
  askedQuestion: boolean;    // 自由質問を使ったか
}
```

保護者ダッシュボードの「取り組んだ教科」「ヒント使用率」「正答率の推移」はすべて Attempt の集計で導出する
（`lib/progress.ts` の `aggregate(attempts, range)`）。集計値は保存しない（元データから常に再計算）。

### StudentProfile

```ts
interface StudentProfile { grade: Grade; nickname?: string }
```

## 3.5 写真でしつもん（カメラ機能）

- `/camera`: 生徒がワーク・プリントのわからない問題を撮影（またはファイル選択）する。
  クライアント側で長辺1400pxに縮小したJPEG（base64）を `/api/photo` に送る。
- `/api/photo`: 画像 + ヒントレベル + 学年を受け取り、Claudeのビジョン機能で問題を読み取って
  アプリ内問題と同じ3段階方式のヒントを生成する。
- アプリ内問題とちがい正答データがないため、プロンプトで以下を強制する
  （`lib/prompts/index.ts` の `buildPhotoHintSystemPrompt`）:
  - 最初にどの問題を読み取ったかを一言で確認する
  - 解説前に頭の中で解いて検算し、不確かなら断定を避ける
  - 不鮮明なら推測せず撮り直しを依頼 / 勉強以外の写真は学習に戻す / 高校範囲は扱わない

## 4. ヒントシステム（コア機能）

- 演習画面の「わからない」ボタンで `/api/hint` を呼ぶ。レベルは 1→2→3 の順にのみ開放。
- サーバー側で問題データ（問題文・正答・単元）を参照し、Claudeに system prompt として
  「共通ガードレール + 教科別方針 + 学年別の語彙指示 + 当該問題のコンテキスト」を渡す。
- レベル別の生成方針:
  - **ヒント1**: 着眼点のみ（解法・答えの方向は出さない）
  - **ヒント2**: 解法プロセスの一部（最初のステップまで）
  - **ヒント3**: ほぼ答えに近い誘導（最終の答えそのものは絶対に書かない）
- 自由入力の質問欄（任意）: 学習と無関係な内容はガードレールにより優しく学習に戻す。

### 正誤判定はAIに任せない

誤判定リスクを避けるため、正誤判定はアプリ側の決定論的な正規化比較（`lib/grading.ts`）で行う。
AIの役割は「ヒント生成」と「判定後の解説生成」に限定し、解説生成時も正答・静的解説をコンテキストとして渡して
グラウンディングする（AIが誤った答えを提示しない）。API不通時は静的解説にフォールバック。

## 5. 安全設計（ガードレール）

`lib/prompts/guardrails.ts` にて全リクエスト共通で指示:

1. 中学校学習指導要領の範囲を逸脱しない（高校範囲の概念・用語を使わない。教科別ファイルに禁止用語例を列挙）
2. 最終的な答えは絶対に書かない（ヒント3でも）
3. 学習に関係ない話題（悩み相談・雑談など）には共感を一言示した上で優しく学習に戻す
4. 学年に応じた語彙・言い回し（中1は特に平易に）
5. 出力は短く（2〜4文）、励ましの一言を添える

## 6. Claude API 呼び出し

- モデル: `ANTHROPIC_MODEL`（既定 `claude-sonnet-5`）
- ヒント・解説とも短文出力のため非ストリーミング、`max_tokens: 1024`
- 低レイテンシ優先で `output_config: { effort: "low" }`（adaptive thinking は既定のまま）
- エラー時（429/5xx等）は日本語の親切なメッセージを返す

## 7. Stripe（仕組みのみ）

- `/api/stripe/checkout`: `STRIPE_PRICE_ID` の月額サブスクリプションで Checkout セッション作成
- `/api/stripe/webhook`: 署名検証の上、`checkout.session.completed` / `customer.subscription.*` を受信
  （MVPではログ出力まで。DB導入時に契約状態の永続化を追加）
- 環境変数未設定時は 503 を返し、アプリ本体は課金なしで動作する（開発モード）

## 8. 環境変数

| 変数 | 用途 |
|---|---|
| `ANTHROPIC_API_KEY` | Claude API キー（必須：ヒント/解説機能） |
| `ANTHROPIC_MODEL` | 使用モデル（省略時 `claude-sonnet-5`） |
| `STRIPE_SECRET_KEY` / `STRIPE_PRICE_ID` / `STRIPE_WEBHOOK_SECRET` | 決済（任意） |
| `NEXT_PUBLIC_APP_URL` | Checkoutのリダイレクト先 |
