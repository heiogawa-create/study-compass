import type { Problem } from "../types";

// 数学・中1（教科書準拠・定期テスト対策レベル）
// 単元: 正負の数 / 文字と式 / 一次方程式 / 比例と反比例
const UNIT_SEIFU = { id: "seifu", name: "正負の数" };
const UNIT_MOJI = { id: "moji", name: "文字と式" };
const UNIT_HOUTEISHIKI = { id: "houteishiki", name: "一次方程式" };
const UNIT_HIREI = { id: "hirei", name: "比例と反比例" };
const UNIT_HEIMEN = { id: "heimen", name: "平面図形" };
const UNIT_KUKAN = { id: "kukan", name: "空間図形" };
const UNIT_DATA = { id: "data", name: "データの活用" };

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
  {
    id: "math-g1-seifu-004",
    subject: "math",
    grade: 1,
    unit: UNIT_SEIFU,
    tags: ["計算", "減法"],
    question: "次の計算をしなさい。\n(−2) − (+5)",
    answerType: "text",
    correctAnswers: ["-7", "−7"],
    explanation:
      "ひき算は、ひく数の符号を変えてたし算に直します。(−2) − (+5) = (−2) + (−5) = −7 です。",
    difficulty: 1,
  },
  {
    id: "math-g1-seifu-005",
    subject: "math",
    grade: 1,
    unit: UNIT_SEIFU,
    tags: ["絶対値"],
    question: "−5 の絶対値を答えなさい。",
    answerType: "text",
    correctAnswers: ["5", "+5"],
    explanation:
      "絶対値とは、数直線上で 0 からその数までの距離のことです。−5 は 0 から 5 だけはなれているので、絶対値は 5 です。符号はつけません。",
    difficulty: 1,
  },
  {
    id: "math-g1-seifu-006",
    subject: "math",
    grade: 1,
    unit: UNIT_SEIFU,
    tags: ["累乗"],
    question: "次の計算をしなさい。\n(−3)²",
    answerType: "text",
    correctAnswers: ["9", "+9"],
    explanation:
      "(−3)² は (−3) × (−3) のことです。負の数どうしのかけ算なので答えの符号は正になり、3 × 3 = 9。よって +9 です。−3² との違い（かっこの有無）に注意しましょう。",
    difficulty: 2,
  },
  {
    id: "math-g1-moji-004",
    subject: "math",
    grade: 1,
    unit: UNIT_MOJI,
    tags: ["数量の表現", "文章題"],
    question:
      "1個 a 円のりんごを3個買って、1000円札を出しました。おつりを a を使った式で表しなさい。（単位はつけなくてよい）",
    answerType: "text",
    correctAnswers: ["1000-3a", "1000−3a", "1000-3a円", "(1000-3a)円"],
    explanation:
      "りんご3個の代金は a × 3 = 3a（円）です。おつりは「出した金額 − 代金」なので、1000 − 3a（円）と表せます。",
    difficulty: 2,
  },
  {
    id: "math-g1-moji-005",
    subject: "math",
    grade: 1,
    unit: UNIT_MOJI,
    tags: ["関係を表す式"],
    question:
      "「a の3倍から b をひいた数は 20 になる」という関係を、等式で表しなさい。",
    answerType: "text",
    correctAnswers: ["3a-b=20", "3a−b=20"],
    explanation:
      "a の3倍は 3a、そこから b をひくと 3a − b。これが 20 になるので、等式は 3a − b = 20 です。",
    difficulty: 2,
  },
  {
    id: "math-g1-houteishiki-004",
    subject: "math",
    grade: 1,
    unit: UNIT_HOUTEISHIKI,
    tags: ["方程式を解く", "分数"],
    question: "次の方程式を解きなさい。\nx/2 + 1 = 4",
    answerType: "text",
    correctAnswers: ["x=6", "6"],
    explanation:
      "まず両辺から 1 をひいて x/2 = 3。次に両辺に 2 をかけると x = 6 です。分数があるときは、両辺に分母の数をかけて分数をなくすと計算しやすくなります。",
    difficulty: 2,
  },
  {
    id: "math-g1-houteishiki-005",
    subject: "math",
    grade: 1,
    unit: UNIT_HOUTEISHIKI,
    tags: ["比例式"],
    question: "次の比例式を解きなさい。\nx : 6 = 2 : 3",
    answerType: "text",
    correctAnswers: ["x=4", "4"],
    explanation:
      "比例式では「外側どうしの積 = 内側どうしの積」が成り立ちます。x × 3 = 6 × 2 なので 3x = 12、x = 4 です。",
    difficulty: 2,
  },
  {
    id: "math-g1-hirei-002",
    subject: "math",
    grade: 1,
    unit: UNIT_HIREI,
    tags: ["反比例の式"],
    question:
      "y は x に反比例し、x = 3 のとき y = 4 です。y を x の式で表しなさい。",
    answerType: "text",
    correctAnswers: ["y=12/x", "y=12÷x"],
    explanation:
      "反比例の式は y = a/x と表せます。x = 3, y = 4 を代入すると 4 = a/3 となり、a = 12。よって y = 12/x です。反比例では x × y の値（= a）がいつも一定になります。",
    difficulty: 2,
  },
  {
    id: "math-g1-hirei-003",
    subject: "math",
    grade: 1,
    unit: UNIT_HIREI,
    tags: ["グラフ"],
    question: "比例 y = 2x のグラフの説明として正しいものを選びなさい。",
    answerType: "choice",
    choices: [
      "原点を通る右上がりの直線",
      "原点を通る右下がりの直線",
      "原点を通らない直線",
      "なめらかな曲線（双曲線）",
    ],
    correctAnswers: ["原点を通る右上がりの直線"],
    explanation:
      "比例のグラフは必ず原点（0, 0）を通る直線です。y = 2x は比例定数が正（+2）なので、x が増えると y も増える右上がりの直線になります。双曲線になるのは反比例のグラフです。",
    difficulty: 1,
  },
  {
    id: "math-g1-heimen-001",
    subject: "math",
    grade: 1,
    unit: UNIT_HEIMEN,
    tags: ["角度"],
    question:
      "2つの直線が交わってできる角のうち、1つの角が 70° のとき、その対頂角の大きさを答えなさい。（数字だけでよい）",
    answerType: "text",
    correctAnswers: ["70", "70°", "70度"],
    explanation:
      "対頂角（向かい合う角）は、いつでも等しくなります。したがって 70° の対頂角も 70° です。",
    difficulty: 1,
  },
  {
    id: "math-g1-heimen-002",
    subject: "math",
    grade: 1,
    unit: UNIT_HEIMEN,
    tags: ["作図"],
    question:
      "線分ABの垂直二等分線上にある点について、いつでも正しくいえることを選びなさい。",
    answerType: "choice",
    choices: [
      "点Aと点Bから等しい距離にある",
      "点Aに点Bより近い",
      "線分AB上にある",
      "点Aからの距離がいつも同じ値になる",
    ],
    correctAnswers: ["点Aと点Bから等しい距離にある"],
    explanation:
      "垂直二等分線は「線分の真ん中を垂直に通る直線」で、その上のどの点をとっても、両はしの点A・Bからの距離が等しくなります。この性質は作図の問題でよく使われます。",
    difficulty: 2,
  },
  {
    id: "math-g1-heimen-003",
    subject: "math",
    grade: 1,
    unit: UNIT_HEIMEN,
    tags: ["おうぎ形"],
    question:
      "半径 6cm、中心角 60° のおうぎ形の弧の長さを選びなさい。（円周率はπとする）",
    answerType: "choice",
    choices: ["π cm", "2π cm", "3π cm", "6π cm"],
    correctAnswers: ["2π cm"],
    explanation:
      "おうぎ形の弧の長さは「円周 × 中心角/360°」で求めます。円周は 2π × 6 = 12π cm。中心角60°は円全体の 60/360 = 1/6 なので、12π × 1/6 = 2π cm です。",
    difficulty: 3,
  },
  {
    id: "math-g1-kukan-001",
    subject: "math",
    grade: 1,
    unit: UNIT_KUKAN,
    tags: ["体積"],
    question:
      "底面の半径が 3cm、高さが 5cm の円柱の体積を選びなさい。（円周率はπとする）",
    answerType: "choice",
    choices: ["15π cm³", "30π cm³", "45π cm³", "90π cm³"],
    correctAnswers: ["45π cm³"],
    explanation:
      "円柱の体積は「底面積 × 高さ」です。底面積は π × 3² = 9π cm²、高さは 5cm なので、9π × 5 = 45π cm³ です。",
    difficulty: 2,
  },
  {
    id: "math-g1-kukan-002",
    subject: "math",
    grade: 1,
    unit: UNIT_KUKAN,
    tags: ["体積"],
    question:
      "底面積が 12cm²、高さが 6cm の四角錐の体積を求めなさい。（数字だけでよい）",
    answerType: "text",
    correctAnswers: ["24", "24cm3", "24cm³"],
    explanation:
      "角錐（すい）の体積は「底面積 × 高さ × 1/3」です。12 × 6 × 1/3 = 24 cm³ となります。同じ底面積・高さの角柱の 1/3 になるのがポイントです。",
    difficulty: 2,
  },
  {
    id: "math-g1-data-001",
    subject: "math",
    grade: 1,
    unit: UNIT_DATA,
    tags: ["相対度数"],
    question:
      "40人のクラスで、通学時間が10分未満の生徒は8人でした。この階級の相対度数を求めなさい。",
    answerType: "text",
    correctAnswers: ["0.2", "0.20"],
    explanation:
      "相対度数は「その階級の度数 ÷ 度数の合計」で求めます。8 ÷ 40 = 0.2 です。相対度数を使うと、人数のちがう集団どうしでも割合で比べられます。",
    difficulty: 2,
  },
  {
    id: "math-g1-data-002",
    subject: "math",
    grade: 1,
    unit: UNIT_DATA,
    tags: ["代表値"],
    question:
      "次のデータの中央値（メジアン）を求めなさい。\n3, 5, 7, 9, 11",
    answerType: "text",
    correctAnswers: ["7"],
    explanation:
      "中央値は、データを小さい順に並べたときの真ん中の値です。データは5個なので、小さい方から3番目の 7 が中央値です。",
    difficulty: 1,
  },
];
