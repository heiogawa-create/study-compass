import type { Problem } from "../types";

// 理科・中1（教科書準拠・定期テスト対策レベル）
// 単元: 植物の世界 / 身のまわりの物質 / 光・音・力 / 大地の変化
const UNIT_SHOKUBUTSU = { id: "shokubutsu", name: "植物の世界" };
const UNIT_BUSSHITSU = { id: "busshitsu", name: "身のまわりの物質" };
const UNIT_HIKARI = { id: "hikari", name: "光・音・力" };
const UNIT_DAICHI = { id: "daichi", name: "大地の変化" };

export const scienceGrade1: Problem[] = [
  {
    id: "sci-g1-shokubutsu-001",
    subject: "science",
    grade: 1,
    unit: UNIT_SHOKUBUTSU,
    tags: ["花のつくり"],
    question: "めしべの先端の、花粉がつく部分を何といいますか。選びなさい。",
    answerType: "choice",
    choices: ["柱頭", "子房", "胚珠", "やく"],
    correctAnswers: ["柱頭"],
    explanation:
      "めしべの先端は「柱頭（ちゅうとう）」といい、ここに花粉がつくことを受粉といいます。めしべの根もとのふくらみが子房、その中にあるのが胚珠です。「やく」はおしべの先端で花粉が入っています。",
    difficulty: 1,
  },
  {
    id: "sci-g1-shokubutsu-002",
    subject: "science",
    grade: 1,
    unit: UNIT_SHOKUBUTSU,
    tags: ["光合成"],
    question:
      "植物が光合成を行うとき、デンプンなどの養分とともにできる気体は何ですか。",
    answerType: "text",
    correctAnswers: ["酸素", "さんそ"],
    explanation:
      "光合成は、光のエネルギーを使って水と二酸化炭素からデンプンなどの養分をつくるはたらきで、このとき酸素ができます。二酸化炭素を取り入れて酸素を出す、という出入りの向きをおさえましょう。",
    difficulty: 1,
  },
  {
    id: "sci-g1-shokubutsu-003",
    subject: "science",
    grade: 1,
    unit: UNIT_SHOKUBUTSU,
    tags: ["植物の分類"],
    question: "種子植物のうち、胚珠が子房の中にある植物のなかまを何といいますか。",
    answerType: "text",
    correctAnswers: ["被子植物", "ひししょくぶつ"],
    explanation:
      "胚珠が子房に包まれている植物を「被子植物」といいます（例: サクラ、アブラナ）。いっぽう、子房がなく胚珠がむき出しの植物は「裸子植物」です（例: マツ、イチョウ）。",
    difficulty: 2,
  },
  {
    id: "sci-g1-shokubutsu-004",
    subject: "science",
    grade: 1,
    unit: UNIT_SHOKUBUTSU,
    tags: ["葉のはたらき"],
    question:
      "植物の体の中の水が、水蒸気となって気孔から出ていく現象を何といいますか。",
    answerType: "text",
    correctAnswers: ["蒸散", "じょうさん"],
    explanation:
      "「蒸散（じょうさん）」は、葉の気孔から水が水蒸気として出ていく現象です。蒸散が起こることで、根からの水の吸い上げがさかんになります。気孔は葉の裏側に多いこともあわせて覚えましょう。",
    difficulty: 2,
  },
  {
    id: "sci-g1-busshitsu-001",
    subject: "science",
    grade: 1,
    unit: UNIT_BUSSHITSU,
    tags: ["密度", "計算"],
    question:
      "質量54g、体積20cm³の物質の密度は何g/cm³ですか。（数字だけでよい）",
    answerType: "text",
    correctAnswers: ["2.7", "2.7g/cm3", "2.7g/cm³"],
    explanation:
      "密度は「質量 ÷ 体積」で求めます。54 ÷ 20 = 2.7 g/cm³ です。密度は物質の種類によって決まっているので、物質を見分ける手がかりになります。",
    difficulty: 2,
  },
  {
    id: "sci-g1-busshitsu-002",
    subject: "science",
    grade: 1,
    unit: UNIT_BUSSHITSU,
    tags: ["気体の性質"],
    question: "石灰水に通すと、石灰水を白くにごらせる気体を選びなさい。",
    answerType: "choice",
    choices: ["二酸化炭素", "酸素", "水素", "アンモニア"],
    correctAnswers: ["二酸化炭素"],
    explanation:
      "石灰水を白くにごらせるのは二酸化炭素の代表的な性質で、気体の見分け方として最重要です。酸素は「ものを燃やすはたらき」、水素は「火を近づけるとポンと音を立てて燃える」で見分けます。",
    difficulty: 1,
  },
  {
    id: "sci-g1-busshitsu-003",
    subject: "science",
    grade: 1,
    unit: UNIT_BUSSHITSU,
    tags: ["状態変化"],
    question: "固体がとけて液体に変化するときの温度を何といいますか。",
    answerType: "text",
    correctAnswers: ["融点", "ゆうてん"],
    explanation:
      "固体がとけて液体になる温度を「融点（ゆうてん）」といいます。逆に液体が沸騰して気体になる温度は「沸点」です。純粋な物質では、融点・沸点は物質ごとに決まった温度になります。",
    difficulty: 1,
  },
  {
    id: "sci-g1-busshitsu-004",
    subject: "science",
    grade: 1,
    unit: UNIT_BUSSHITSU,
    tags: ["水溶液", "計算"],
    question:
      "水100gに食塩25gをとかしました。この食塩水の質量パーセント濃度は何%ですか。（数字だけでよい）",
    answerType: "text",
    correctAnswers: ["20", "20%"],
    explanation:
      "質量パーセント濃度は「とけている物質の質量 ÷ 水溶液全体の質量 × 100」です。全体の質量は水100g + 食塩25g = 125g なので、25 ÷ 125 × 100 = 20% です。分母が「水」ではなく「全体」であることに注意しましょう。",
    difficulty: 3,
  },
  {
    id: "sci-g1-busshitsu-005",
    subject: "science",
    grade: 1,
    unit: UNIT_BUSSHITSU,
    tags: ["気体の性質"],
    question:
      "水に非常にとけやすく、空気より軽く、鼻をさすようなにおい（刺激臭）のある気体は何ですか。",
    answerType: "text",
    correctAnswers: ["アンモニア"],
    explanation:
      "アンモニアは「水に非常にとけやすい」「空気より軽い」「刺激臭」の3つの特徴で見分けます。水にとけやすいので水上置換では集められず、上方置換法で集めることもセットで覚えましょう。",
    difficulty: 2,
  },
  {
    id: "sci-g1-hikari-001",
    subject: "science",
    grade: 1,
    unit: UNIT_HIKARI,
    tags: ["光の反射"],
    question:
      "鏡に光を当てたところ、入射角が40°でした。反射角は何度ですか。（数字だけでよい）",
    answerType: "text",
    correctAnswers: ["40", "40°", "40度"],
    explanation:
      "光が反射するとき、「入射角 = 反射角」が成り立ちます（反射の法則）。よって反射角も40°です。入射角・反射角は、鏡の面ではなく鏡に垂直な線からはかることに注意しましょう。",
    difficulty: 1,
  },
  {
    id: "sci-g1-hikari-002",
    subject: "science",
    grade: 1,
    unit: UNIT_HIKARI,
    tags: ["凸レンズ"],
    question:
      "物体を凸レンズの焦点距離の2倍の位置に置いたとき、できる像として正しいものを選びなさい。",
    answerType: "choice",
    choices: [
      "物体と同じ大きさの実像（上下左右が逆）",
      "物体より大きい実像（上下左右が逆）",
      "物体より小さい実像（向きは同じ）",
      "物体より大きい虚像（向きは同じ）",
    ],
    correctAnswers: ["物体と同じ大きさの実像（上下左右が逆）"],
    explanation:
      "焦点距離の2倍の位置に物体を置くと、反対側の焦点距離の2倍の位置に「物体と同じ大きさの実像」ができます。実像は上下左右が逆向きになります。物体を焦点より内側に置いたときだけ、大きな虚像が見えます。",
    difficulty: 3,
  },
  {
    id: "sci-g1-hikari-003",
    subject: "science",
    grade: 1,
    unit: UNIT_HIKARI,
    tags: ["音"],
    question:
      "音の高さは、音源が1秒間に振動する回数で決まります。この回数を何といいますか。",
    answerType: "text",
    correctAnswers: ["振動数", "しんどうすう"],
    explanation:
      "1秒間に振動する回数を「振動数」といい、単位はHz（ヘルツ）です。振動数が多いほど高い音になります。音の大きさのほうは「振幅（振れはば）」で決まる、と区別して覚えましょう。",
    difficulty: 2,
  },
  {
    id: "sci-g1-hikari-004",
    subject: "science",
    grade: 1,
    unit: UNIT_HIKARI,
    tags: ["力", "計算"],
    question:
      "100gの物体にはたらく重力の大きさを1Nとするとき、300gの物体にはたらく重力は何Nですか。（数字だけでよい）",
    answerType: "text",
    correctAnswers: ["3", "3N"],
    explanation:
      "100gあたり1Nなので、300gの物体には 300 ÷ 100 = 3N の重力がはたらきます。質量（g）と重力の大きさ（N）の関係をおさえておくと、ばねの問題でも使えます。",
    difficulty: 1,
  },
  {
    id: "sci-g1-hikari-005",
    subject: "science",
    grade: 1,
    unit: UNIT_HIKARI,
    tags: ["ばね", "計算"],
    question:
      "あるばねに8Nの力を加えると4cmのびました。このばねに12Nの力を加えると何cmのびますか。（数字だけでよい）",
    answerType: "text",
    correctAnswers: ["6", "6cm"],
    explanation:
      "ばねののびは、加えた力の大きさに比例します（フックの法則）。8Nで4cmのびるので、1Nあたり0.5cm。12Nなら 0.5 × 12 = 6cm のびます。",
    difficulty: 2,
  },
  {
    id: "sci-g1-daichi-001",
    subject: "science",
    grade: 1,
    unit: UNIT_DAICHI,
    tags: ["地震"],
    question:
      "地震のゆれのうち、はじめの小さなゆれ（初期微動）を伝える波を何といいますか。",
    answerType: "text",
    correctAnswers: ["P波", "p波", "ピー波"],
    explanation:
      "初期微動を伝えるのは伝わる速さが速い「P波」です。あとから来る大きなゆれ（主要動）を伝えるのが「S波」。P波とS波の到着時刻の差が「初期微動継続時間」で、震源から遠いほど長くなります。",
    difficulty: 1,
  },
  {
    id: "sci-g1-daichi-002",
    subject: "science",
    grade: 1,
    unit: UNIT_DAICHI,
    tags: ["火山"],
    question:
      "マグマのねばりけが強い火山の形として正しいものを選びなさい。",
    answerType: "choice",
    choices: [
      "盛り上がったドーム状の形",
      "傾斜がゆるやかで平たい形",
      "きれいな円すい形",
      "地下にもぐりこんで山にならない",
    ],
    correctAnswers: ["盛り上がったドーム状の形"],
    explanation:
      "ねばりけが強いマグマは流れにくいため、盛り上がったドーム状の火山になります（例: 昭和新山）。ねばりけが弱いと傾斜のゆるやかな形（例: マウナロア）になります。ねばりけが強い火山ほど噴火が激しく、溶岩の色は白っぽくなります。",
    difficulty: 2,
  },
  {
    id: "sci-g1-daichi-003",
    subject: "science",
    grade: 1,
    unit: UNIT_DAICHI,
    tags: ["地層・岩石"],
    question:
      "生物の死がいなどが堆積してできた岩石で、うすい塩酸をかけると気体（二酸化炭素）が発生するものは何ですか。",
    answerType: "text",
    correctAnswers: ["石灰岩", "せっかいがん"],
    explanation:
      "石灰岩は、サンゴや貝殻など生物の死がいが堆積してできた岩石で、うすい塩酸をかけると二酸化炭素が発生します。同じ生物由来でも、塩酸と反応せず鉄くぎで傷がつかないほどかたいのは「チャート」です。",
    difficulty: 2,
  },
  {
    id: "sci-g1-daichi-004",
    subject: "science",
    grade: 1,
    unit: UNIT_DAICHI,
    tags: ["化石"],
    question:
      "地層からサンゴの化石が見つかったとき、その地層が堆積した当時の環境としてわかることを選びなさい。",
    answerType: "choice",
    choices: [
      "あたたかくて浅い海だった",
      "冷たくて深い海だった",
      "湖や河口だった",
      "陸上の砂漠だった",
    ],
    correctAnswers: ["あたたかくて浅い海だった"],
    explanation:
      "サンゴはあたたかくて浅いきれいな海にすむ生物なので、その化石は当時の環境を教えてくれる「示相化石」です。ほかに、シジミの化石なら湖や河口だったことがわかります。年代がわかる化石は「示準化石」と区別しましょう。",
    difficulty: 2,
  },
];
