import type { Problem } from "../types";

// 数学・中1（教科書準拠・定期テスト対策レベル）
// 単元: 正負の数 / 文字と式 / 一次方程式 / 比例と反比例
const UNIT_SEIFU = { id: "seifu", name: "正負の数" };
const UNIT_MOJI = { id: "moji", name: "文字と式" };
const UNIT_HOUTEISHIKI = { id: "houteishiki", name: "一次方程式" };
const UNIT_HIREI = { id: "hirei", name: "比例と反比例" };

export const mathGrade1: Problem[] = [
  {
    id: "math-g1-seifu-001",
    subject: "math",
    grade: 1,
    unit: UNIT_SEIFU,
    tags: ["計算"],
    question: "次の計算をしなさい。\n(−3) + (+7)",
    answerType: "text",
    correctAnswers: ["4", "+4"],
    explanation:
      "符号がちがう2つの数の和は、絶対値の大きいほうから小さいほうをひき、絶対値の大きいほうの符号をつけます。7 − 3 = 4 で、絶対値が大きいのは +7 なので、答えは +4 です。",
    difficulty: 1,
  },
  {
    id: "math-g1-seifu-002",
    subject: "math",
    grade: 1,
    unit: UNIT_SEIFU,
    tags: ["計算"],
    question: "次の計算をしなさい。\n(−6) × (−4)",
    answerType: "text",
    correctAnswers: ["24", "+24"],
    explanation:
      "負の数どうしのかけ算では、答えの符号は正（＋）になります。6 × 4 = 24 なので、答えは +24 です。",
    difficulty: 1,
  },
  {
    id: "math-g1-seifu-003",
    subject: "math",
    grade: 1,
    unit: UNIT_SEIFU,
    tags: ["計算", "四則混合"],
    question: "次の計算をしなさい。\n5 + (−2) × 3",
    answerType: "text",
    correctAnswers: ["-1", "−1"],
    explanation:
      "たし算とかけ算がまじった式では、かけ算を先に計算します。(−2) × 3 = −6 なので、5 + (−6) = −1 です。",
    difficulty: 2,
  },
  {
    id: "math-g1-moji-001",
    subject: "math",
    grade: 1,
    unit: UNIT_MOJI,
    tags: ["文字式の表し方"],
    question:
      "次の式を、文字式の表し方にしたがって表しなさい。\nx × 3 + y × (−1)",
    answerType: "text",
    correctAnswers: ["3x-y", "3x−y", "3x-1y"],
    explanation:
      "かけ算の記号 × は省き、数は文字の前に書きます。x × 3 は 3x、y × (−1) は −y となるので、答えは 3x − y です。",
    difficulty: 1,
  },
  {
    id: "math-g1-moji-002",
    subject: "math",
    grade: 1,
    unit: UNIT_MOJI,
    tags: ["式の値"],
    question: "x = −2 のとき、式 3x + 5 の値を求めなさい。",
    answerType: "text",
    correctAnswers: ["-1", "−1"],
    explanation:
      "x に −2 を代入します。3 × (−2) + 5 = −6 + 5 = −1 です。負の数を代入するときはかっこをつけて計算するとまちがえにくくなります。",
    difficulty: 1,
  },
  {
    id: "math-g1-moji-003",
    subject: "math",
    grade: 1,
    unit: UNIT_MOJI,
    tags: ["式の計算"],
    question: "次の計算をしなさい。\n2(3x − 1) − (x + 4)",
    answerType: "text",
    correctAnswers: ["5x-6", "5x−6"],
    explanation:
      "分配法則でかっこを外します。2(3x − 1) = 6x − 2、−(x + 4) = −x − 4。まとめると 6x − 2 − x − 4 = 5x − 6 です。",
    difficulty: 2,
  },
  {
    id: "math-g1-houteishiki-001",
    subject: "math",
    grade: 1,
    unit: UNIT_HOUTEISHIKI,
    tags: ["方程式を解く"],
    question: "次の方程式を解きなさい。\nx + 5 = 12",
    answerType: "text",
    correctAnswers: ["x=7", "7"],
    explanation:
      "両辺から 5 をひくと x = 12 − 5 = 7 です。「+5」を右辺に移項すると符号が変わって −5 になる、と考えることもできます。",
    difficulty: 1,
  },
  {
    id: "math-g1-houteishiki-002",
    subject: "math",
    grade: 1,
    unit: UNIT_HOUTEISHIKI,
    tags: ["方程式を解く", "移項"],
    question: "次の方程式を解きなさい。\n4x − 3 = 2x + 7",
    answerType: "text",
    correctAnswers: ["x=5", "5"],
    explanation:
      "x をふくむ項を左辺に、数の項を右辺に移項します。4x − 2x = 7 + 3 となり、2x = 10、x = 5 です。移項すると符号が変わることに注意しましょう。",
    difficulty: 2,
  },
  {
    id: "math-g1-houteishiki-003",
    subject: "math",
    grade: 1,
    unit: UNIT_HOUTEISHIKI,
    tags: ["文章題"],
    question:
      "1本80円の鉛筆を何本かと、100円のノートを1冊買ったところ、代金の合計は500円でした。鉛筆を何本買いましたか。（本数だけを数字で答えなさい）",
    answerType: "text",
    correctAnswers: ["5", "5本"],
    explanation:
      "鉛筆の本数を x 本とすると、80x + 100 = 500 という方程式が立てられます。80x = 400 より x = 5。よって鉛筆は 5本です。",
    difficulty: 2,
  },
  {
    id: "math-g1-hirei-001",
    subject: "math",
    grade: 1,
    unit: UNIT_HIREI,
    tags: ["比例の式"],
    question:
      "y は x に比例し、x = 2 のとき y = −6 です。y を x の式で表しなさい。",
    answerType: "text",
    correctAnswers: ["y=-3x", "y=−3x"],
    explanation:
      "比例の式は y = ax と表せます。x = 2, y = −6 を代入すると −6 = 2a となり、a = −3。よって y = −3x です。",
    difficulty: 2,
  },
];
