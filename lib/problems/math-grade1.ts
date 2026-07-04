import type { Problem } from "../types";

// 数学・中1（教科書準拠・定期テスト対策レベル）。
// 単元は前期〜後期の学習順に対応: 正負の数 → 加法と減法 → 乗法と除法 → 数の集合と素数の積
// → 文字式ときまり → 文字式の計算 → 方程式 → 方程式の利用 → 比例 → 比例とグラフ → 反比例
// → 平面図形 → 空間図形 → 立体の体積と表面積
// 各問題の正答はプログラムで計算式から導出しており、手動転記による誤りを避けている。
export const mathGrade1: Problem[] = [
  {
    "id": "math-g1-seifu-001",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "大小比較"
    ],
    "question": "次の2つの数の大小を、不等号を使って表しなさい。\n-18, -6",
    "answerType": "text",
    "correctAnswers": [
      "-18<-6"
    ],
    "explanation": "負の数は正の数より必ず小さくなります。負の数どうしでは、絶対値が大きいほうが小さい数になります。-18と-6を数直線で考えると、-18 < -6 となります。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-002",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "絶対値"
    ],
    "question": "18 の絶対値を答えなさい。",
    "answerType": "text",
    "correctAnswers": [
      "18"
    ],
    "explanation": "絶対値は、数直線上で0からその数までの距離です。0から18までの距離は18なので、絶対値は18です。符号はつけません。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-003",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "反対の数"
    ],
    "question": "数直線上で、0を中心にして 10 と反対側に同じ距離だけはなれている数（反対の数）を答えなさい。",
    "answerType": "text",
    "correctAnswers": [
      "-10"
    ],
    "explanation": "0から見て反対側に同じ距離にある数は、符号を入れかえた数です。10 の反対の数は -10 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-004",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "大小比較"
    ],
    "question": "次の数の中で、最も大きい数を選びなさい。",
    "answerType": "choice",
    "choices": [
      "8",
      "-18",
      "20",
      "14"
    ],
    "correctAnswers": [
      "20"
    ],
    "explanation": "数直線で右にある数ほど大きい数です。-18、14、20、8 の中では 20 がいちばん右にあるので、最大です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-seifu-005",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "符号の意味"
    ],
    "question": "気温が5℃下がることを、正の数か負の数を使って表しなさい。（+か-をつけて数字で答えなさい）",
    "answerType": "text",
    "correctAnswers": [
      "-5"
    ],
    "explanation": "基準（0）から見て「減る」ことは、負の数（−）で表します。5℃下がることは -5 と表せます。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-006",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "順序"
    ],
    "question": "次の数を小さい順に並べたものを選びなさい。\n-10、11、9",
    "answerType": "choice",
    "choices": [
      "9、-10、11",
      "-10、11、9",
      "-10、9、11",
      "11、9、-10"
    ],
    "correctAnswers": [
      "-10、9、11"
    ],
    "explanation": "負の数は正の数より小さく、負の数どうしは絶対値が大きいほうが小さくなります。小さい順に並べると -10、9、11 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-seifu-007",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "大小比較"
    ],
    "question": "次の2つの数の大小を、不等号を使って表しなさい。\n-11, 9",
    "answerType": "text",
    "correctAnswers": [
      "-11<9"
    ],
    "explanation": "負の数は正の数より必ず小さくなります。-11と9を数直線で考えると、-11 < 9 となります。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-008",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "絶対値"
    ],
    "question": "-7 の絶対値を答えなさい。",
    "answerType": "text",
    "correctAnswers": [
      "7"
    ],
    "explanation": "絶対値は、数直線上で0からその数までの距離です。0から-7までの距離は7なので、絶対値は7です。符号はつけません。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-009",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "反対の数"
    ],
    "question": "数直線上で、0を中心にして -14 と反対側に同じ距離だけはなれている数（反対の数）を答えなさい。",
    "answerType": "text",
    "correctAnswers": [
      "14"
    ],
    "explanation": "0から見て反対側に同じ距離にある数は、符号を入れかえた数です。-14 の反対の数は 14 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-010",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "符号の意味"
    ],
    "question": "気温が2℃上がることを、正の数か負の数を使って表しなさい。（+か-をつけて数字で答えなさい）",
    "answerType": "text",
    "correctAnswers": [
      "+2"
    ],
    "explanation": "基準（0）から見て「増える」ことは、正の数（+）で表します。2℃上がることは +2 と表せます。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-011",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "順序"
    ],
    "question": "次の数を小さい順に並べたものを選びなさい。\n-3、15、-2",
    "answerType": "choice",
    "choices": [
      "-2、15、-3",
      "-3、15、-2",
      "-3、-2、15",
      "15、-2、-3"
    ],
    "correctAnswers": [
      "-3、-2、15"
    ],
    "explanation": "負の数は正の数より小さく、負の数どうしは絶対値が大きいほうが小さくなります。小さい順に並べると -3、-2、15 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-seifu-012",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "大小比較"
    ],
    "question": "次の2つの数の大小を、不等号を使って表しなさい。\n-4, 11",
    "answerType": "text",
    "correctAnswers": [
      "-4<11"
    ],
    "explanation": "負の数は正の数より必ず小さくなります。-4と11を数直線で考えると、-4 < 11 となります。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-013",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "絶対値"
    ],
    "question": "24 の絶対値を答えなさい。",
    "answerType": "text",
    "correctAnswers": [
      "24"
    ],
    "explanation": "絶対値は、数直線上で0からその数までの距離です。0から24までの距離は24なので、絶対値は24です。符号はつけません。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-014",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "反対の数"
    ],
    "question": "数直線上で、0を中心にして 21 と反対側に同じ距離だけはなれている数（反対の数）を答えなさい。",
    "answerType": "text",
    "correctAnswers": [
      "-21"
    ],
    "explanation": "0から見て反対側に同じ距離にある数は、符号を入れかえた数です。21 の反対の数は -21 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-015",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "符号の意味"
    ],
    "question": "気温が2℃下がることを、正の数か負の数を使って表しなさい。（+か-をつけて数字で答えなさい）",
    "answerType": "text",
    "correctAnswers": [
      "-2"
    ],
    "explanation": "基準（0）から見て「減る」ことは、負の数（−）で表します。2℃下がることは -2 と表せます。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-016",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "順序"
    ],
    "question": "次の数を小さい順に並べたものを選びなさい。\n-9、-7、8",
    "answerType": "choice",
    "choices": [
      "-9、-7、8",
      "8、-9、-7",
      "-7、-9、8",
      "8、-7、-9"
    ],
    "correctAnswers": [
      "-9、-7、8"
    ],
    "explanation": "負の数は正の数より小さく、負の数どうしは絶対値が大きいほうが小さくなります。小さい順に並べると -9、-7、8 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-seifu-017",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "大小比較"
    ],
    "question": "次の2つの数の大小を、不等号を使って表しなさい。\n-15, 10",
    "answerType": "text",
    "correctAnswers": [
      "-15<10"
    ],
    "explanation": "負の数は正の数より必ず小さくなります。-15と10を数直線で考えると、-15 < 10 となります。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-018",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "絶対値"
    ],
    "question": "-23 の絶対値を答えなさい。",
    "answerType": "text",
    "correctAnswers": [
      "23"
    ],
    "explanation": "絶対値は、数直線上で0からその数までの距離です。0から-23までの距離は23なので、絶対値は23です。符号はつけません。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-019",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "反対の数"
    ],
    "question": "数直線上で、0を中心にして 1 と反対側に同じ距離だけはなれている数（反対の数）を答えなさい。",
    "answerType": "text",
    "correctAnswers": [
      "-1"
    ],
    "explanation": "0から見て反対側に同じ距離にある数は、符号を入れかえた数です。1 の反対の数は -1 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-020",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "符号の意味"
    ],
    "question": "気温が15℃下がることを、正の数か負の数を使って表しなさい。（+か-をつけて数字で答えなさい）",
    "answerType": "text",
    "correctAnswers": [
      "-15"
    ],
    "explanation": "基準（0）から見て「減る」ことは、負の数（−）で表します。15℃下がることは -15 と表せます。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-021",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "順序"
    ],
    "question": "次の数を小さい順に並べたものを選びなさい。\n-4、12、14",
    "answerType": "choice",
    "choices": [
      "14、-4、12",
      "-4、12、14",
      "12、14、-4",
      "12、-4、14"
    ],
    "correctAnswers": [
      "-4、12、14"
    ],
    "explanation": "負の数は正の数より小さく、負の数どうしは絶対値が大きいほうが小さくなります。小さい順に並べると -4、12、14 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-seifu-022",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "大小比較"
    ],
    "question": "次の2つの数の大小を、不等号を使って表しなさい。\n-18, -15",
    "answerType": "text",
    "correctAnswers": [
      "-18<-15"
    ],
    "explanation": "負の数は正の数より必ず小さくなります。負の数どうしでは、絶対値が大きいほうが小さい数になります。-18と-15を数直線で考えると、-18 < -15 となります。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-023",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "絶対値"
    ],
    "question": "27 の絶対値を答えなさい。",
    "answerType": "text",
    "correctAnswers": [
      "27"
    ],
    "explanation": "絶対値は、数直線上で0からその数までの距離です。0から27までの距離は27なので、絶対値は27です。符号はつけません。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-024",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "符号の意味"
    ],
    "question": "気温が7℃下がることを、正の数か負の数を使って表しなさい。（+か-をつけて数字で答えなさい）",
    "answerType": "text",
    "correctAnswers": [
      "-7"
    ],
    "explanation": "基準（0）から見て「減る」ことは、負の数（−）で表します。7℃下がることは -7 と表せます。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-025",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "順序"
    ],
    "question": "次の数を小さい順に並べたものを選びなさい。\n-6、6、15",
    "answerType": "choice",
    "choices": [
      "-6、15、6",
      "15、-6、6",
      "-6、6、15",
      "6、15、-6"
    ],
    "correctAnswers": [
      "-6、6、15"
    ],
    "explanation": "負の数は正の数より小さく、負の数どうしは絶対値が大きいほうが小さくなります。小さい順に並べると -6、6、15 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-seifu-026",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "大小比較"
    ],
    "question": "次の2つの数の大小を、不等号を使って表しなさい。\n-3, -16",
    "answerType": "text",
    "correctAnswers": [
      "-3>-16"
    ],
    "explanation": "負の数は正の数より必ず小さくなります。負の数どうしでは、絶対値が大きいほうが小さい数になります。-3と-16を数直線で考えると、-3 > -16 となります。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-027",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "絶対値"
    ],
    "question": "-29 の絶対値を答えなさい。",
    "answerType": "text",
    "correctAnswers": [
      "29"
    ],
    "explanation": "絶対値は、数直線上で0からその数までの距離です。0から-29までの距離は29なので、絶対値は29です。符号はつけません。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-028",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "反対の数"
    ],
    "question": "数直線上で、0を中心にして -4 と反対側に同じ距離だけはなれている数（反対の数）を答えなさい。",
    "answerType": "text",
    "correctAnswers": [
      "4"
    ],
    "explanation": "0から見て反対側に同じ距離にある数は、符号を入れかえた数です。-4 の反対の数は 4 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-029",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "符号の意味"
    ],
    "question": "気温が14℃下がることを、正の数か負の数を使って表しなさい。（+か-をつけて数字で答えなさい）",
    "answerType": "text",
    "correctAnswers": [
      "-14"
    ],
    "explanation": "基準（0）から見て「減る」ことは、負の数（−）で表します。14℃下がることは -14 と表せます。",
    "difficulty": 1
  },
  {
    "id": "math-g1-seifu-030",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "seifu",
      "name": "正負の数"
    },
    "tags": [
      "順序"
    ],
    "question": "次の数を小さい順に並べたものを選びなさい。\n-15、14、4",
    "answerType": "choice",
    "choices": [
      "14、4、-15",
      "4、-15、14",
      "4、14、-15",
      "-15、4、14"
    ],
    "correctAnswers": [
      "-15、4、14"
    ],
    "explanation": "負の数は正の数より小さく、負の数どうしは絶対値が大きいほうが小さくなります。小さい順に並べると -15、4、14 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kahougenpou-001",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加法"
    ],
    "question": "次の計算をしなさい。\n(-15) + (+14)",
    "answerType": "text",
    "correctAnswers": [
      "-1"
    ],
    "explanation": "符号がちがう2つの数の和は、絶対値の大きいほうから小さいほうをひき、絶対値が大きいほうの符号をつけます。15 − 14 = 1、絶対値が大きいのは-15のほうなので、答えは -1 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-002",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "減法"
    ],
    "question": "次の計算をしなさい。\n(+14) − (-16)",
    "answerType": "text",
    "correctAnswers": [
      "30"
    ],
    "explanation": "ひき算は、ひく数の符号を変えてたし算に直します。(14) − (-16) = (14) + (16) と考えると、答えは 30 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-003",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加減の混合"
    ],
    "question": "次の計算をしなさい。\n(+1) + (+3) - (+4)",
    "answerType": "text",
    "correctAnswers": [
      "0"
    ],
    "explanation": "前から順に、符号のきまりにしたがって計算していきます。(+1) + (+3) = 4、さらに - (+4) を計算すると 0 になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kahougenpou-004",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加法"
    ],
    "question": "次の計算をしなさい。\n(-5) + (-14)",
    "answerType": "text",
    "correctAnswers": [
      "-19"
    ],
    "explanation": "符号が同じ2つの数の和は、絶対値どうしをたして、共通の符号をつけます。5 + 14 = 19、符号は負なので、答えは -19 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-005",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "減法"
    ],
    "question": "次の計算をしなさい。\n(+10) − (-6)",
    "answerType": "text",
    "correctAnswers": [
      "16"
    ],
    "explanation": "ひき算は、ひく数の符号を変えてたし算に直します。(10) − (-6) = (10) + (6) と考えると、答えは 16 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-006",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加減の混合"
    ],
    "question": "次の計算をしなさい。\n(-15) - (+1) + (-1)",
    "answerType": "text",
    "correctAnswers": [
      "-17"
    ],
    "explanation": "前から順に、符号のきまりにしたがって計算していきます。(-15) - (+1) = -16、さらに + (-1) を計算すると -17 になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kahougenpou-007",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加法"
    ],
    "question": "次の計算をしなさい。\n(-20) + (-10)",
    "answerType": "text",
    "correctAnswers": [
      "-30"
    ],
    "explanation": "符号が同じ2つの数の和は、絶対値どうしをたして、共通の符号をつけます。20 + 10 = 30、符号は負なので、答えは -30 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-008",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "減法"
    ],
    "question": "次の計算をしなさい。\n(+18) − (-18)",
    "answerType": "text",
    "correctAnswers": [
      "36"
    ],
    "explanation": "ひき算は、ひく数の符号を変えてたし算に直します。(18) − (-18) = (18) + (18) と考えると、答えは 36 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-009",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加減の混合"
    ],
    "question": "次の計算をしなさい。\n(-10) + (+15) - (-3)",
    "answerType": "text",
    "correctAnswers": [
      "8"
    ],
    "explanation": "前から順に、符号のきまりにしたがって計算していきます。(-10) + (+15) = 5、さらに - (-3) を計算すると 8 になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kahougenpou-010",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加法"
    ],
    "question": "次の計算をしなさい。\n(-1) + (+17)",
    "answerType": "text",
    "correctAnswers": [
      "16"
    ],
    "explanation": "符号がちがう2つの数の和は、絶対値の大きいほうから小さいほうをひき、絶対値が大きいほうの符号をつけます。17 − 1 = 16、絶対値が大きいのは17のほうなので、答えは 16 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-011",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "減法"
    ],
    "question": "次の計算をしなさい。\n(+11) − (+4)",
    "answerType": "text",
    "correctAnswers": [
      "7"
    ],
    "explanation": "ひき算は、ひく数の符号を変えてたし算に直します。(11) − (4) = (11) + (-4) と考えると、答えは 7 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-012",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加減の混合"
    ],
    "question": "次の計算をしなさい。\n(+14) - (+15) - (-1)",
    "answerType": "text",
    "correctAnswers": [
      "0"
    ],
    "explanation": "前から順に、符号のきまりにしたがって計算していきます。(+14) - (+15) = -1、さらに - (-1) を計算すると 0 になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kahougenpou-013",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加法"
    ],
    "question": "次の計算をしなさい。\n(-4) + (-6)",
    "answerType": "text",
    "correctAnswers": [
      "-10"
    ],
    "explanation": "符号が同じ2つの数の和は、絶対値どうしをたして、共通の符号をつけます。4 + 6 = 10、符号は負なので、答えは -10 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-014",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "減法"
    ],
    "question": "次の計算をしなさい。\n(-15) − (-5)",
    "answerType": "text",
    "correctAnswers": [
      "-10"
    ],
    "explanation": "ひき算は、ひく数の符号を変えてたし算に直します。(-15) − (-5) = (-15) + (5) と考えると、答えは -10 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-015",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加減の混合"
    ],
    "question": "次の計算をしなさい。\n(-4) + (+15) + (+3)",
    "answerType": "text",
    "correctAnswers": [
      "14"
    ],
    "explanation": "前から順に、符号のきまりにしたがって計算していきます。(-4) + (+15) = 11、さらに + (+3) を計算すると 14 になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kahougenpou-016",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加法"
    ],
    "question": "次の計算をしなさい。\n(+10) + (-3)",
    "answerType": "text",
    "correctAnswers": [
      "7"
    ],
    "explanation": "符号がちがう2つの数の和は、絶対値の大きいほうから小さいほうをひき、絶対値が大きいほうの符号をつけます。10 − 3 = 7、絶対値が大きいのは10のほうなので、答えは 7 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-017",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "減法"
    ],
    "question": "次の計算をしなさい。\n(-1) − (-15)",
    "answerType": "text",
    "correctAnswers": [
      "14"
    ],
    "explanation": "ひき算は、ひく数の符号を変えてたし算に直します。(-1) − (-15) = (-1) + (15) と考えると、答えは 14 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-018",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加減の混合"
    ],
    "question": "次の計算をしなさい。\n(-10) - (+1) + (+1)",
    "answerType": "text",
    "correctAnswers": [
      "-10"
    ],
    "explanation": "前から順に、符号のきまりにしたがって計算していきます。(-10) - (+1) = -11、さらに + (+1) を計算すると -10 になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kahougenpou-019",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加法"
    ],
    "question": "次の計算をしなさい。\n(-9) + (-2)",
    "answerType": "text",
    "correctAnswers": [
      "-11"
    ],
    "explanation": "符号が同じ2つの数の和は、絶対値どうしをたして、共通の符号をつけます。9 + 2 = 11、符号は負なので、答えは -11 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-020",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "減法"
    ],
    "question": "次の計算をしなさい。\n(+4) − (+14)",
    "answerType": "text",
    "correctAnswers": [
      "-10"
    ],
    "explanation": "ひき算は、ひく数の符号を変えてたし算に直します。(4) − (14) = (4) + (-14) と考えると、答えは -10 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-021",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加減の混合"
    ],
    "question": "次の計算をしなさい。\n(+14) + (-2) + (-5)",
    "answerType": "text",
    "correctAnswers": [
      "7"
    ],
    "explanation": "前から順に、符号のきまりにしたがって計算していきます。(+14) + (-2) = 12、さらに + (-5) を計算すると 7 になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kahougenpou-022",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加法"
    ],
    "question": "次の計算をしなさい。\n(-6) + (-7)",
    "answerType": "text",
    "correctAnswers": [
      "-13"
    ],
    "explanation": "符号が同じ2つの数の和は、絶対値どうしをたして、共通の符号をつけます。6 + 7 = 13、符号は負なので、答えは -13 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-023",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "減法"
    ],
    "question": "次の計算をしなさい。\n(-7) − (-19)",
    "answerType": "text",
    "correctAnswers": [
      "12"
    ],
    "explanation": "ひき算は、ひく数の符号を変えてたし算に直します。(-7) − (-19) = (-7) + (19) と考えると、答えは 12 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-024",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加減の混合"
    ],
    "question": "次の計算をしなさい。\n(+1) - (+13) - (-8)",
    "answerType": "text",
    "correctAnswers": [
      "-4"
    ],
    "explanation": "前から順に、符号のきまりにしたがって計算していきます。(+1) - (+13) = -12、さらに - (-8) を計算すると -4 になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kahougenpou-025",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加法"
    ],
    "question": "次の計算をしなさい。\n(+7) + (-13)",
    "answerType": "text",
    "correctAnswers": [
      "-6"
    ],
    "explanation": "符号がちがう2つの数の和は、絶対値の大きいほうから小さいほうをひき、絶対値が大きいほうの符号をつけます。13 − 7 = 6、絶対値が大きいのは-13のほうなので、答えは -6 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-026",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "減法"
    ],
    "question": "次の計算をしなさい。\n(+6) − (-2)",
    "answerType": "text",
    "correctAnswers": [
      "8"
    ],
    "explanation": "ひき算は、ひく数の符号を変えてたし算に直します。(6) − (-2) = (6) + (2) と考えると、答えは 8 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-027",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加減の混合"
    ],
    "question": "次の計算をしなさい。\n(-10) - (-12) - (-8)",
    "answerType": "text",
    "correctAnswers": [
      "10"
    ],
    "explanation": "前から順に、符号のきまりにしたがって計算していきます。(-10) - (-12) = 2、さらに - (-8) を計算すると 10 になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kahougenpou-028",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加法"
    ],
    "question": "次の計算をしなさい。\n(-4) + (-12)",
    "answerType": "text",
    "correctAnswers": [
      "-16"
    ],
    "explanation": "符号が同じ2つの数の和は、絶対値どうしをたして、共通の符号をつけます。4 + 12 = 16、符号は負なので、答えは -16 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-029",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "減法"
    ],
    "question": "次の計算をしなさい。\n(+9) − (+10)",
    "answerType": "text",
    "correctAnswers": [
      "-1"
    ],
    "explanation": "ひき算は、ひく数の符号を変えてたし算に直します。(9) − (10) = (9) + (-10) と考えると、答えは -1 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kahougenpou-030",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kahougenpou",
      "name": "加法と減法"
    },
    "tags": [
      "加減の混合"
    ],
    "question": "次の計算をしなさい。\n(-11) - (-6) + (+14)",
    "answerType": "text",
    "correctAnswers": [
      "9"
    ],
    "explanation": "前から順に、符号のきまりにしたがって計算していきます。(-11) - (-6) = -5、さらに + (+14) を計算すると 9 になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-001",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "乗法"
    ],
    "question": "次の計算をしなさい。\n(+11) × (+3)",
    "answerType": "text",
    "correctAnswers": [
      "33"
    ],
    "explanation": "同じ符号どうしのかけ算の答えは正（＋）になります。11 × 3 = 33 なので、答えは 33 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-jouhoujohou-002",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "除法"
    ],
    "question": "次の計算をしなさい。\n(-15) ÷ (+3)",
    "answerType": "text",
    "correctAnswers": [
      "-5"
    ],
    "explanation": "わり算は、わる数の逆数をかけると考えることもできますが、まず符号を決めます。異なる符号どうしのわり算の答えは負（−）になります。15 ÷ 3 = 5 なので、答えは -5 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-jouhoujohou-003",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "累乗"
    ],
    "question": "次の計算をしなさい。\n(-4)²",
    "answerType": "text",
    "correctAnswers": [
      "16"
    ],
    "explanation": "(-4)² は (-4) × (-4) という意味です。負の数を偶数回かけるので答えは正の数になります。計算すると 16 です。かっこの有無で意味が変わる（例: −16 と (−4)² はちがう）ことに注意しましょう。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-004",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "乗除の混合"
    ],
    "question": "次の計算をしなさい。\n-18 ÷ 3 × 2",
    "answerType": "text",
    "correctAnswers": [
      "-12"
    ],
    "explanation": "乗法と除法だけの式は、前から順に計算します。-18 ÷ 3 = -6、-6 × 2 = -12 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-005",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "四則混合"
    ],
    "question": "次の計算をしなさい。\n7 + 3 × (-5)",
    "answerType": "text",
    "correctAnswers": [
      "-8"
    ],
    "explanation": "たし算とかけ算がまじった式では、かけ算を先に計算します。3 × (-5) = -15、次に 7 + (-15) = -8 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-006",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "乗法"
    ],
    "question": "次の計算をしなさい。\n(+10) × (+7)",
    "answerType": "text",
    "correctAnswers": [
      "70"
    ],
    "explanation": "同じ符号どうしのかけ算の答えは正（＋）になります。10 × 7 = 70 なので、答えは 70 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-jouhoujohou-007",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "除法"
    ],
    "question": "次の計算をしなさい。\n(-24) ÷ (+6)",
    "answerType": "text",
    "correctAnswers": [
      "-4"
    ],
    "explanation": "わり算は、わる数の逆数をかけると考えることもできますが、まず符号を決めます。異なる符号どうしのわり算の答えは負（−）になります。24 ÷ 6 = 4 なので、答えは -4 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-jouhoujohou-008",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "累乗"
    ],
    "question": "次の計算をしなさい。\n(-5)³",
    "answerType": "text",
    "correctAnswers": [
      "-125"
    ],
    "explanation": "(-5)³ は (-5) × (-5) × (-5) という意味です。負の数を奇数回かけるので答えは負の数になります。計算すると -125 です。かっこの有無で意味が変わる（例: −25 と (−5)² はちがう）ことに注意しましょう。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-009",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "乗除の混合"
    ],
    "question": "次の計算をしなさい。\n-84 ÷ 7 × 6",
    "answerType": "text",
    "correctAnswers": [
      "-72"
    ],
    "explanation": "乗法と除法だけの式は、前から順に計算します。-84 ÷ 7 = -12、-12 × 6 = -72 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-010",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "四則混合"
    ],
    "question": "次の計算をしなさい。\n7 + 7 × (-7)",
    "answerType": "text",
    "correctAnswers": [
      "-42"
    ],
    "explanation": "たし算とかけ算がまじった式では、かけ算を先に計算します。7 × (-7) = -49、次に 7 + (-49) = -42 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-011",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "乗法"
    ],
    "question": "次の計算をしなさい。\n(+9) × (+8)",
    "answerType": "text",
    "correctAnswers": [
      "72"
    ],
    "explanation": "同じ符号どうしのかけ算の答えは正（＋）になります。9 × 8 = 72 なので、答えは 72 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-jouhoujohou-012",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "除法"
    ],
    "question": "次の計算をしなさい。\n(-35) ÷ (-7)",
    "answerType": "text",
    "correctAnswers": [
      "5"
    ],
    "explanation": "わり算は、わる数の逆数をかけると考えることもできますが、まず符号を決めます。同じ符号どうしのわり算の答えは正（＋）になります。35 ÷ 7 = 5 なので、答えは 5 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-jouhoujohou-013",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "累乗"
    ],
    "question": "次の計算をしなさい。\n(-3)²",
    "answerType": "text",
    "correctAnswers": [
      "9"
    ],
    "explanation": "(-3)² は (-3) × (-3) という意味です。負の数を偶数回かけるので答えは正の数になります。計算すると 9 です。かっこの有無で意味が変わる（例: −9 と (−3)² はちがう）ことに注意しましょう。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-014",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "乗除の混合"
    ],
    "question": "次の計算をしなさい。\n54 ÷ 6 × 3",
    "answerType": "text",
    "correctAnswers": [
      "27"
    ],
    "explanation": "乗法と除法だけの式は、前から順に計算します。54 ÷ 6 = 9、9 × 3 = 27 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-015",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "四則混合"
    ],
    "question": "次の計算をしなさい。\n5 + 2 × (-5)",
    "answerType": "text",
    "correctAnswers": [
      "-5"
    ],
    "explanation": "たし算とかけ算がまじった式では、かけ算を先に計算します。2 × (-5) = -10、次に 5 + (-10) = -5 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-016",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "乗法"
    ],
    "question": "次の計算をしなさい。\n(-2) × (+7)",
    "answerType": "text",
    "correctAnswers": [
      "-14"
    ],
    "explanation": "異なる符号どうしのかけ算の答えは負（−）になります。2 × 7 = 14 なので、答えは -14 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-jouhoujohou-017",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "除法"
    ],
    "question": "次の計算をしなさい。\n(+14) ÷ (-7)",
    "answerType": "text",
    "correctAnswers": [
      "-2"
    ],
    "explanation": "わり算は、わる数の逆数をかけると考えることもできますが、まず符号を決めます。異なる符号どうしのわり算の答えは負（−）になります。14 ÷ 7 = 2 なので、答えは -2 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-jouhoujohou-018",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "累乗"
    ],
    "question": "次の計算をしなさい。\n(2)³",
    "answerType": "text",
    "correctAnswers": [
      "8"
    ],
    "explanation": "(2)³ は (2) × (2) × (2) という意味です。計算すると 8 です。かっこの有無で意味が変わる（例: −4 と (−2)² はちがう）ことに注意しましょう。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-019",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "乗除の混合"
    ],
    "question": "次の計算をしなさい。\n25 ÷ 5 × 5",
    "answerType": "text",
    "correctAnswers": [
      "25"
    ],
    "explanation": "乗法と除法だけの式は、前から順に計算します。25 ÷ 5 = 5、5 × 5 = 25 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-020",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "四則混合"
    ],
    "question": "次の計算をしなさい。\n-10 + 5 × (-3)",
    "answerType": "text",
    "correctAnswers": [
      "-25"
    ],
    "explanation": "たし算とかけ算がまじった式では、かけ算を先に計算します。5 × (-3) = -15、次に -10 + (-15) = -25 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-021",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "乗法"
    ],
    "question": "次の計算をしなさい。\n(+2) × (+11)",
    "answerType": "text",
    "correctAnswers": [
      "22"
    ],
    "explanation": "同じ符号どうしのかけ算の答えは正（＋）になります。2 × 11 = 22 なので、答えは 22 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-jouhoujohou-022",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "除法"
    ],
    "question": "次の計算をしなさい。\n(+56) ÷ (-7)",
    "answerType": "text",
    "correctAnswers": [
      "-8"
    ],
    "explanation": "わり算は、わる数の逆数をかけると考えることもできますが、まず符号を決めます。異なる符号どうしのわり算の答えは負（−）になります。56 ÷ 7 = 8 なので、答えは -8 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-jouhoujohou-023",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "累乗"
    ],
    "question": "次の計算をしなさい。\n(-5)²",
    "answerType": "text",
    "correctAnswers": [
      "25"
    ],
    "explanation": "(-5)² は (-5) × (-5) という意味です。負の数を偶数回かけるので答えは正の数になります。計算すると 25 です。かっこの有無で意味が変わる（例: −25 と (−5)² はちがう）ことに注意しましょう。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-024",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "乗除の混合"
    ],
    "question": "次の計算をしなさい。\n-240 ÷ 6 × 8",
    "answerType": "text",
    "correctAnswers": [
      "-320"
    ],
    "explanation": "乗法と除法だけの式は、前から順に計算します。-240 ÷ 6 = -40、-40 × 8 = -320 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-025",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "四則混合"
    ],
    "question": "次の計算をしなさい。\n-1 + 4 × (4)",
    "answerType": "text",
    "correctAnswers": [
      "15"
    ],
    "explanation": "たし算とかけ算がまじった式では、かけ算を先に計算します。4 × (4) = 16、次に -1 + (16) = 15 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-026",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "乗法"
    ],
    "question": "次の計算をしなさい。\n(-11) × (-10)",
    "answerType": "text",
    "correctAnswers": [
      "110"
    ],
    "explanation": "同じ符号どうしのかけ算の答えは正（＋）になります。11 × 10 = 110 なので、答えは 110 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-jouhoujohou-027",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "除法"
    ],
    "question": "次の計算をしなさい。\n(-33) ÷ (-11)",
    "answerType": "text",
    "correctAnswers": [
      "3"
    ],
    "explanation": "わり算は、わる数の逆数をかけると考えることもできますが、まず符号を決めます。同じ符号どうしのわり算の答えは正（＋）になります。33 ÷ 11 = 3 なので、答えは 3 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-jouhoujohou-028",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "累乗"
    ],
    "question": "次の計算をしなさい。\n(-6)²",
    "answerType": "text",
    "correctAnswers": [
      "36"
    ],
    "explanation": "(-6)² は (-6) × (-6) という意味です。負の数を偶数回かけるので答えは正の数になります。計算すると 36 です。かっこの有無で意味が変わる（例: −36 と (−6)² はちがう）ことに注意しましょう。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-029",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "乗除の混合"
    ],
    "question": "次の計算をしなさい。\n48 ÷ 2 × 8",
    "answerType": "text",
    "correctAnswers": [
      "192"
    ],
    "explanation": "乗法と除法だけの式は、前から順に計算します。48 ÷ 2 = 24、24 × 8 = 192 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-jouhoujohou-030",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "jouhoujohou",
      "name": "乗法と除法"
    },
    "tags": [
      "四則混合"
    ],
    "question": "次の計算をしなさい。\n14 + 7 × (-6)",
    "answerType": "text",
    "correctAnswers": [
      "-28"
    ],
    "explanation": "たし算とかけ算がまじった式では、かけ算を先に計算します。7 × (-6) = -42、次に 14 + (-42) = -28 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-001",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "素数"
    ],
    "question": "30 は素数ですか、合成数ですか。",
    "answerType": "choice",
    "choices": [
      "素数",
      "合成数"
    ],
    "correctAnswers": [
      "合成数"
    ],
    "explanation": "30 は 1 と 30 自身以外にも約数を持つので、合成数です（例: 2 で割り切れます）。",
    "difficulty": 1
  },
  {
    "id": "math-g1-sosuu-002",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "素因数"
    ],
    "question": "68 を割り切ることができる素数のうち、最も小さいものを答えなさい。",
    "answerType": "text",
    "correctAnswers": [
      "2"
    ],
    "explanation": "小さい素数（2, 3, 5, 7…）から順に割り切れるか調べます。68 は 2 で割り切れる（68 ÷ 2 = 34）ので、最小の素因数は 2 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-003",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "素因数分解"
    ],
    "question": "48 を素因数分解したものとして正しいものを選びなさい。（例: 2^2×3 は 2×2×3 の意味）",
    "answerType": "choice",
    "choices": [
      "2^2×13",
      "2^4×3",
      "2×5^2",
      "2^5×3"
    ],
    "correctAnswers": [
      "2^4×3"
    ],
    "explanation": "48 を小さい素数から順にわっていくと、2^4×3 と素因数分解できます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-004",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "自然数"
    ],
    "question": "次の数のうち、自然数であるものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "0",
      "-13",
      "6",
      "17.5"
    ],
    "correctAnswers": [
      "6"
    ],
    "explanation": "自然数は 1, 2, 3, … のように数えるときに使う正の整数です。0や負の数、小数・分数は自然数にふくまれません。この中で自然数なのは 6 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-sosuu-005",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "最大公約数"
    ],
    "question": "28 と 12 の最大公約数を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "4"
    ],
    "explanation": "2つの数を素因数分解し、共通する素因数をすべてかけ合わせると最大公約数になります。28 = 2^2×7、12 = 2^2×3 より、最大公約数は 4 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-006",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "最小公倍数"
    ],
    "question": "17 と 20 の最小公倍数を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "340"
    ],
    "explanation": "最小公倍数は、2つの数の共通な倍数の中でいちばん小さいものです。17 の倍数と 20 の倍数を並べて比べると、最小公倍数は 340 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-007",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "約数の個数"
    ],
    "question": "39 の約数は全部で何個ありますか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "4"
    ],
    "explanation": "39 を素因数分解すると 3×13 です。素因数分解した各素数の指数に1を足してかけ合わせると、約数の個数が求められます。39 の約数の個数は 4 個です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-sosuu-008",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "素数"
    ],
    "question": "39 は素数ですか、合成数ですか。",
    "answerType": "choice",
    "choices": [
      "素数",
      "合成数"
    ],
    "correctAnswers": [
      "合成数"
    ],
    "explanation": "39 は 1 と 39 自身以外にも約数を持つので、合成数です（例: 3 で割り切れます）。",
    "difficulty": 1
  },
  {
    "id": "math-g1-sosuu-009",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "素因数"
    ],
    "question": "36 を割り切ることができる素数のうち、最も小さいものを答えなさい。",
    "answerType": "text",
    "correctAnswers": [
      "2"
    ],
    "explanation": "小さい素数（2, 3, 5, 7…）から順に割り切れるか調べます。36 は 2 で割り切れる（36 ÷ 2 = 18）ので、最小の素因数は 2 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-010",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "素因数分解"
    ],
    "question": "29 を素因数分解したものとして正しいものを選びなさい。（例: 2^2×3 は 2×2×3 の意味）",
    "answerType": "choice",
    "choices": [
      "29^2",
      "29",
      "3^3",
      "31"
    ],
    "correctAnswers": [
      "29"
    ],
    "explanation": "29 を小さい素数から順にわっていくと、29 と素因数分解できます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-011",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "最大公約数"
    ],
    "question": "15 と 12 の最大公約数を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "3"
    ],
    "explanation": "2つの数を素因数分解し、共通する素因数をすべてかけ合わせると最大公約数になります。15 = 3×5、12 = 2^2×3 より、最大公約数は 3 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-012",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "最小公倍数"
    ],
    "question": "20 と 3 の最小公倍数を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "60"
    ],
    "explanation": "最小公倍数は、2つの数の共通な倍数の中でいちばん小さいものです。20 の倍数と 3 の倍数を並べて比べると、最小公倍数は 60 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-013",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "約数の個数"
    ],
    "question": "48 の約数は全部で何個ありますか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "10"
    ],
    "explanation": "48 を素因数分解すると 2^4×3 です。素因数分解した各素数の指数に1を足してかけ合わせると、約数の個数が求められます。48 の約数の個数は 10 個です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-sosuu-014",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "素数"
    ],
    "question": "38 は素数ですか、合成数ですか。",
    "answerType": "choice",
    "choices": [
      "素数",
      "合成数"
    ],
    "correctAnswers": [
      "合成数"
    ],
    "explanation": "38 は 1 と 38 自身以外にも約数を持つので、合成数です（例: 2 で割り切れます）。",
    "difficulty": 1
  },
  {
    "id": "math-g1-sosuu-015",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "素因数"
    ],
    "question": "24 を割り切ることができる素数のうち、最も小さいものを答えなさい。",
    "answerType": "text",
    "correctAnswers": [
      "2"
    ],
    "explanation": "小さい素数（2, 3, 5, 7…）から順に割り切れるか調べます。24 は 2 で割り切れる（24 ÷ 2 = 12）ので、最小の素因数は 2 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-016",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "素因数分解"
    ],
    "question": "49 を素因数分解したものとして正しいものを選びなさい。（例: 2^2×3 は 2×2×3 の意味）",
    "answerType": "choice",
    "choices": [
      "7",
      "47",
      "3×17",
      "7^2"
    ],
    "correctAnswers": [
      "7^2"
    ],
    "explanation": "49 を小さい素数から順にわっていくと、7^2 と素因数分解できます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-017",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "最大公約数"
    ],
    "question": "33 と 22 の最大公約数を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "11"
    ],
    "explanation": "2つの数を素因数分解し、共通する素因数をすべてかけ合わせると最大公約数になります。33 = 3×11、22 = 2×11 より、最大公約数は 11 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-018",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "最小公倍数"
    ],
    "question": "2 と 6 の最小公倍数を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "6"
    ],
    "explanation": "最小公倍数は、2つの数の共通な倍数の中でいちばん小さいものです。2 の倍数と 6 の倍数を並べて比べると、最小公倍数は 6 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-019",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "約数の個数"
    ],
    "question": "19 の約数は全部で何個ありますか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "2"
    ],
    "explanation": "19 を素因数分解すると 19 です。素因数分解した各素数の指数に1を足してかけ合わせると、約数の個数が求められます。19 の約数の個数は 2 個です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-sosuu-020",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "素数"
    ],
    "question": "36 は素数ですか、合成数ですか。",
    "answerType": "choice",
    "choices": [
      "素数",
      "合成数"
    ],
    "correctAnswers": [
      "合成数"
    ],
    "explanation": "36 は 1 と 36 自身以外にも約数を持つので、合成数です（例: 2 で割り切れます）。",
    "difficulty": 1
  },
  {
    "id": "math-g1-sosuu-021",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "素因数"
    ],
    "question": "48 を割り切ることができる素数のうち、最も小さいものを答えなさい。",
    "answerType": "text",
    "correctAnswers": [
      "2"
    ],
    "explanation": "小さい素数（2, 3, 5, 7…）から順に割り切れるか調べます。48 は 2 で割り切れる（48 ÷ 2 = 24）ので、最小の素因数は 2 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-022",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "素因数分解"
    ],
    "question": "30 を素因数分解したものとして正しいものを選びなさい。（例: 2^2×3 は 2×2×3 の意味）",
    "answerType": "choice",
    "choices": [
      "2^5",
      "2×17",
      "2^2×7",
      "2×3×5"
    ],
    "correctAnswers": [
      "2×3×5"
    ],
    "explanation": "30 を小さい素数から順にわっていくと、2×3×5 と素因数分解できます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-023",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "最大公約数"
    ],
    "question": "20 と 16 の最大公約数を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "4"
    ],
    "explanation": "2つの数を素因数分解し、共通する素因数をすべてかけ合わせると最大公約数になります。20 = 2^2×5、16 = 2^4 より、最大公約数は 4 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-024",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "最小公倍数"
    ],
    "question": "10 と 6 の最小公倍数を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "30"
    ],
    "explanation": "最小公倍数は、2つの数の共通な倍数の中でいちばん小さいものです。10 の倍数と 6 の倍数を並べて比べると、最小公倍数は 30 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-025",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "素数"
    ],
    "question": "48 は素数ですか、合成数ですか。",
    "answerType": "choice",
    "choices": [
      "素数",
      "合成数"
    ],
    "correctAnswers": [
      "合成数"
    ],
    "explanation": "48 は 1 と 48 自身以外にも約数を持つので、合成数です（例: 2 で割り切れます）。",
    "difficulty": 1
  },
  {
    "id": "math-g1-sosuu-026",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "素因数"
    ],
    "question": "56 を割り切ることができる素数のうち、最も小さいものを答えなさい。",
    "answerType": "text",
    "correctAnswers": [
      "2"
    ],
    "explanation": "小さい素数（2, 3, 5, 7…）から順に割り切れるか調べます。56 は 2 で割り切れる（56 ÷ 2 = 28）ので、最小の素因数は 2 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-027",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "素因数分解"
    ],
    "question": "22 を素因数分解したものとして正しいものを選びなさい。（例: 2^2×3 は 2×2×3 の意味）",
    "answerType": "choice",
    "choices": [
      "2×13",
      "2^3×3",
      "2×11",
      "2^2×11"
    ],
    "correctAnswers": [
      "2×11"
    ],
    "explanation": "22 を小さい素数から順にわっていくと、2×11 と素因数分解できます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-028",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "最大公約数"
    ],
    "question": "21 と 18 の最大公約数を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "3"
    ],
    "explanation": "2つの数を素因数分解し、共通する素因数をすべてかけ合わせると最大公約数になります。21 = 3×7、18 = 2×3^2 より、最大公約数は 3 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-029",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "最小公倍数"
    ],
    "question": "2 と 16 の最小公倍数を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "16"
    ],
    "explanation": "最小公倍数は、2つの数の共通な倍数の中でいちばん小さいものです。2 の倍数と 16 の倍数を並べて比べると、最小公倍数は 16 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-sosuu-030",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "sosuu",
      "name": "数の集合と素数の積"
    },
    "tags": [
      "約数の個数"
    ],
    "question": "47 の約数は全部で何個ありますか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "2"
    ],
    "explanation": "47 を素因数分解すると 47 です。素因数分解した各素数の指数に1を足してかけ合わせると、約数の個数が求められます。47 の約数の個数は 2 個です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-mojikimari-001",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "次の式を、文字式の表し方にしたがって表しなさい。\nx × (-2) + y × 3",
    "answerType": "text",
    "correctAnswers": [
      "-2x+3y"
    ],
    "explanation": "かけ算の記号「×」は省略し、数は文字の前に書きます。x × (-2) は -2x、y × 3 は 3y となるので、まとめると -2x+3y です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikimari-002",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "次の式を、記号 × や ÷ を使わずに表しなさい。\na ÷ 2",
    "answerType": "text",
    "correctAnswers": [
      "a/2"
    ],
    "explanation": "わり算は分数の形で表します。a ÷ 2 は、aを分子、2を分母にした分数 a/2 と書きます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikimari-003",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式のきまり"
    ],
    "question": "次の式の表し方として、文字式のきまりに正しくしたがっているものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "x3",
      "5a+b",
      "x*3",
      "3×x"
    ],
    "correctAnswers": [
      "5a+b"
    ],
    "explanation": "文字式では、かけ算の記号「×」を省略し、数を文字の前に書きます。「5a+b」が正しい表し方です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikimari-004",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "a を 5 個と、b を 4 個たし合わせた数を表す式を書きなさい。",
    "answerType": "text",
    "correctAnswers": [
      "5a+4b"
    ],
    "explanation": "a を 5 個たすと 5a、b を 4 個たすと 4b になります。合わせると 5a+4b です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikimari-005",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "係数"
    ],
    "question": "次の式の係数を答えなさい。\n-11y",
    "answerType": "text",
    "correctAnswers": [
      "-11"
    ],
    "explanation": "文字の前についている数を係数といいます。-11y の係数は -11 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikimari-006",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "係数の省略"
    ],
    "question": "次の式を、文字式の表し方にしたがって表しなさい。\ny × (-1)",
    "answerType": "text",
    "correctAnswers": [
      "-y"
    ],
    "explanation": "係数が1のときは1を省略し、係数が−1のときは−だけを書きます。y × (-1) は -y と表します。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikimari-007",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "次の式を、文字式の表し方にしたがって表しなさい。\nx × 7 + y × 4",
    "answerType": "text",
    "correctAnswers": [
      "7x+4y"
    ],
    "explanation": "かけ算の記号「×」は省略し、数は文字の前に書きます。x × 7 は 7x、y × 4 は 4y となるので、まとめると 7x+4y です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikimari-008",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "次の式を、記号 × や ÷ を使わずに表しなさい。\na ÷ 8",
    "answerType": "text",
    "correctAnswers": [
      "a/8"
    ],
    "explanation": "わり算は分数の形で表します。a ÷ 8 は、aを分子、8を分母にした分数 a/8 と書きます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikimari-009",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "a を 9 個と、b を 7 個たし合わせた数を表す式を書きなさい。",
    "answerType": "text",
    "correctAnswers": [
      "9a+7b"
    ],
    "explanation": "a を 9 個たすと 9a、b を 7 個たすと 7b になります。合わせると 9a+7b です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikimari-010",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "係数"
    ],
    "question": "次の式の係数を答えなさい。\n9x",
    "answerType": "text",
    "correctAnswers": [
      "9"
    ],
    "explanation": "文字の前についている数を係数といいます。9x の係数は 9 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikimari-011",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "次の式を、文字式の表し方にしたがって表しなさい。\nx × 1 + y × (-2)",
    "answerType": "text",
    "correctAnswers": [
      "x-2y"
    ],
    "explanation": "かけ算の記号「×」は省略し、数は文字の前に書きます。x × 1 は x、y × (-2) は -2y となるので、まとめると x-2y です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikimari-012",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "次の式を、記号 × や ÷ を使わずに表しなさい。\na ÷ 5",
    "answerType": "text",
    "correctAnswers": [
      "a/5"
    ],
    "explanation": "わり算は分数の形で表します。a ÷ 5 は、aを分子、5を分母にした分数 a/5 と書きます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikimari-013",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "a を 4 個と、b を 9 個たし合わせた数を表す式を書きなさい。",
    "answerType": "text",
    "correctAnswers": [
      "4a+9b"
    ],
    "explanation": "a を 4 個たすと 4a、b を 9 個たすと 9b になります。合わせると 4a+9b です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikimari-014",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "係数"
    ],
    "question": "次の式の係数を答えなさい。\n-3x",
    "answerType": "text",
    "correctAnswers": [
      "-3"
    ],
    "explanation": "文字の前についている数を係数といいます。-3x の係数は -3 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikimari-015",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "係数の省略"
    ],
    "question": "次の式を、文字式の表し方にしたがって表しなさい。\nx × 1",
    "answerType": "text",
    "correctAnswers": [
      "x"
    ],
    "explanation": "係数が1のときは1を省略し、係数が−1のときは−だけを書きます。x × 1 は x と表します。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikimari-016",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "次の式を、文字式の表し方にしたがって表しなさい。\nx × (-2) + y × (-6)",
    "answerType": "text",
    "correctAnswers": [
      "-2x-6y"
    ],
    "explanation": "かけ算の記号「×」は省略し、数は文字の前に書きます。x × (-2) は -2x、y × (-6) は -6y となるので、まとめると -2x-6y です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikimari-017",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "次の式を、記号 × や ÷ を使わずに表しなさい。\na ÷ 7",
    "answerType": "text",
    "correctAnswers": [
      "a/7"
    ],
    "explanation": "わり算は分数の形で表します。a ÷ 7 は、aを分子、7を分母にした分数 a/7 と書きます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikimari-018",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "a を 3 個と、b を 8 個たし合わせた数を表す式を書きなさい。",
    "answerType": "text",
    "correctAnswers": [
      "3a+8b"
    ],
    "explanation": "a を 3 個たすと 3a、b を 8 個たすと 8b になります。合わせると 3a+8b です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikimari-019",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "係数"
    ],
    "question": "次の式の係数を答えなさい。\n3x",
    "answerType": "text",
    "correctAnswers": [
      "3"
    ],
    "explanation": "文字の前についている数を係数といいます。3x の係数は 3 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikimari-020",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "係数の省略"
    ],
    "question": "次の式を、文字式の表し方にしたがって表しなさい。\nx × (-1)",
    "answerType": "text",
    "correctAnswers": [
      "-x"
    ],
    "explanation": "係数が1のときは1を省略し、係数が−1のときは−だけを書きます。x × (-1) は -x と表します。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikimari-021",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "次の式を、文字式の表し方にしたがって表しなさい。\nx × (-6) + y × 7",
    "answerType": "text",
    "correctAnswers": [
      "-6x+7y"
    ],
    "explanation": "かけ算の記号「×」は省略し、数は文字の前に書きます。x × (-6) は -6x、y × 7 は 7y となるので、まとめると -6x+7y です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikimari-022",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "a を 5 個と、b を 6 個たし合わせた数を表す式を書きなさい。",
    "answerType": "text",
    "correctAnswers": [
      "5a+6b"
    ],
    "explanation": "a を 5 個たすと 5a、b を 6 個たすと 6b になります。合わせると 5a+6b です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikimari-023",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "係数"
    ],
    "question": "次の式の係数を答えなさい。\n-2x",
    "answerType": "text",
    "correctAnswers": [
      "-2"
    ],
    "explanation": "文字の前についている数を係数といいます。-2x の係数は -2 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikimari-024",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "係数の省略"
    ],
    "question": "次の式を、文字式の表し方にしたがって表しなさい。\na × (-1)",
    "answerType": "text",
    "correctAnswers": [
      "-a"
    ],
    "explanation": "係数が1のときは1を省略し、係数が−1のときは−だけを書きます。a × (-1) は -a と表します。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikimari-025",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "次の式を、文字式の表し方にしたがって表しなさい。\nx × (-5) + y × (-6)",
    "answerType": "text",
    "correctAnswers": [
      "-5x-6y"
    ],
    "explanation": "かけ算の記号「×」は省略し、数は文字の前に書きます。x × (-5) は -5x、y × (-6) は -6y となるので、まとめると -5x-6y です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikimari-026",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "次の式を、記号 × や ÷ を使わずに表しなさい。\na ÷ 6",
    "answerType": "text",
    "correctAnswers": [
      "a/6"
    ],
    "explanation": "わり算は分数の形で表します。a ÷ 6 は、aを分子、6を分母にした分数 a/6 と書きます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikimari-027",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "a を 2 個と、b を 4 個たし合わせた数を表す式を書きなさい。",
    "answerType": "text",
    "correctAnswers": [
      "2a+4b"
    ],
    "explanation": "a を 2 個たすと 2a、b を 4 個たすと 4b になります。合わせると 2a+4b です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikimari-028",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "係数"
    ],
    "question": "次の式の係数を答えなさい。\n-6y",
    "answerType": "text",
    "correctAnswers": [
      "-6"
    ],
    "explanation": "文字の前についている数を係数といいます。-6y の係数は -6 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikimari-029",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "次の式を、文字式の表し方にしたがって表しなさい。\nx × 2 + y × 6",
    "answerType": "text",
    "correctAnswers": [
      "2x+6y"
    ],
    "explanation": "かけ算の記号「×」は省略し、数は文字の前に書きます。x × 2 は 2x、y × 6 は 6y となるので、まとめると 2x+6y です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikimari-030",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikimari",
      "name": "文字式ときまり"
    },
    "tags": [
      "文字式の表し方"
    ],
    "question": "a を 6 個と、b を 4 個たし合わせた数を表す式を書きなさい。",
    "answerType": "text",
    "correctAnswers": [
      "6a+4b"
    ],
    "explanation": "a を 6 個たすと 6a、b を 4 個たすと 4b になります。合わせると 6a+4b です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikeisan-001",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "式の値"
    ],
    "question": "x = 7 のとき、式 -5x-7 の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "-42"
    ],
    "explanation": "x に 7 を代入します。-5×(7)-7 を計算すると、-5 × (7) = -35、-35-7 = -42 です。負の数を代入するときはかっこをつけて計算しましょう。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikeisan-002",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "同類項"
    ],
    "question": "次の計算をしなさい。\n(7x-8) + (8x+11)",
    "answerType": "text",
    "correctAnswers": [
      "15x+3"
    ],
    "explanation": "xの項どうし、数の項どうしをそれぞれまとめます。xの項は 7x と 8x を合わせて 15x、数の項は -8 と 11 を合わせて 3。まとめると 15x+3 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikeisan-003",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "かっこと同類項"
    ],
    "question": "次の計算をしなさい。\n(-4x+6) − (2x-10)",
    "answerType": "text",
    "correctAnswers": [
      "-6x+16"
    ],
    "explanation": "かっこの前が「−」なので、かっこの中の符号をすべて変えてから同類項をまとめます。(-4x+6) − (2x-10) = -4x+6-2x+10。xの項は -6x、数の項は 16 なので、答えは -6x+16 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikeisan-004",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "分配法則"
    ],
    "question": "次の計算をしなさい。\n2(6x+4)",
    "answerType": "text",
    "correctAnswers": [
      "12x+8"
    ],
    "explanation": "分配法則を使って、かっこの外の数をかっこの中のすべての項にかけます。2 × 6x = 12x、2 × (4) = 8。まとめると 12x+8 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikeisan-005",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "同類項"
    ],
    "question": "次の計算をしなさい。\n9x - 7x",
    "answerType": "text",
    "correctAnswers": [
      "2x"
    ],
    "explanation": "同類項（同じ文字の項）は、係数どうしをたし算・ひき算してまとめます。9 - 7 = 2 なので、答えは 2x です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikeisan-006",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "かっこと同類項"
    ],
    "question": "次の計算をしなさい。\n9x-6 − (6x-3)",
    "answerType": "text",
    "correctAnswers": [
      "3x-3"
    ],
    "explanation": "かっこの前が「−」のときは、かっこの中の符号をすべて変えてから計算します。6x-3 の符号を変えると -6x+3。もとの式に足すと、xの項は 3x、数の項は -3 となり、答えは 3x-3 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-mojikeisan-007",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "式の値"
    ],
    "question": "x = 1 のとき、式 -6x+5 の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "-1"
    ],
    "explanation": "x に 1 を代入します。-6×(1)+5 を計算すると、-6 × (1) = -6、-6+5 = -1 です。負の数を代入するときはかっこをつけて計算しましょう。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikeisan-008",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "同類項"
    ],
    "question": "次の計算をしなさい。\n(-9x-6) + (4x-4)",
    "answerType": "text",
    "correctAnswers": [
      "-5x-10"
    ],
    "explanation": "xの項どうし、数の項どうしをそれぞれまとめます。xの項は -9x と 4x を合わせて -5x、数の項は -6 と -4 を合わせて -10。まとめると -5x-10 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikeisan-009",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "かっこと同類項"
    ],
    "question": "次の計算をしなさい。\n(8x+10) − (-4x-2)",
    "answerType": "text",
    "correctAnswers": [
      "12x+12"
    ],
    "explanation": "かっこの前が「−」なので、かっこの中の符号をすべて変えてから同類項をまとめます。(8x+10) − (-4x-2) = 8x+10+4x+2。xの項は 12x、数の項は 12 なので、答えは 12x+12 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikeisan-010",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "分配法則"
    ],
    "question": "次の計算をしなさい。\n2(8x+3)",
    "answerType": "text",
    "correctAnswers": [
      "16x+6"
    ],
    "explanation": "分配法則を使って、かっこの外の数をかっこの中のすべての項にかけます。2 × 8x = 16x、2 × (3) = 6。まとめると 16x+6 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikeisan-011",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "同類項"
    ],
    "question": "次の計算をしなさい。\n7x - 7x",
    "answerType": "text",
    "correctAnswers": [
      "0"
    ],
    "explanation": "同類項（同じ文字の項）は、係数どうしをたし算・ひき算してまとめます。7 - 7 = 0 なので、答えは 0 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikeisan-012",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "かっこと同類項"
    ],
    "question": "次の計算をしなさい。\n9x+3 − (4x-1)",
    "answerType": "text",
    "correctAnswers": [
      "5x+4"
    ],
    "explanation": "かっこの前が「−」のときは、かっこの中の符号をすべて変えてから計算します。4x-1 の符号を変えると -4x+1。もとの式に足すと、xの項は 5x、数の項は 4 となり、答えは 5x+4 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-mojikeisan-013",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "式の値"
    ],
    "question": "x = -7 のとき、式 -9x-15 の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "48"
    ],
    "explanation": "x に -7 を代入します。-9×(-7)-15 を計算すると、-9 × (-7) = 63、63-15 = 48 です。負の数を代入するときはかっこをつけて計算しましょう。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikeisan-014",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "同類項"
    ],
    "question": "次の計算をしなさい。\n(2x+10) + (9x-5)",
    "answerType": "text",
    "correctAnswers": [
      "11x+5"
    ],
    "explanation": "xの項どうし、数の項どうしをそれぞれまとめます。xの項は 2x と 9x を合わせて 11x、数の項は 10 と -5 を合わせて 5。まとめると 11x+5 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikeisan-015",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "かっこと同類項"
    ],
    "question": "次の計算をしなさい。\n(-5x-4) − (-3x+10)",
    "answerType": "text",
    "correctAnswers": [
      "-2x-14"
    ],
    "explanation": "かっこの前が「−」なので、かっこの中の符号をすべて変えてから同類項をまとめます。(-5x-4) − (-3x+10) = -5x-4+3x-10。xの項は -2x、数の項は -14 なので、答えは -2x-14 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikeisan-016",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "分配法則"
    ],
    "question": "次の計算をしなさい。\n-4(x-2)",
    "answerType": "text",
    "correctAnswers": [
      "-4x+8"
    ],
    "explanation": "分配法則を使って、かっこの外の数をかっこの中のすべての項にかけます。-4 × x = -4x、-4 × (-2) = 8。まとめると -4x+8 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikeisan-017",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "同類項"
    ],
    "question": "次の計算をしなさい。\n-6x + 2x",
    "answerType": "text",
    "correctAnswers": [
      "-4x"
    ],
    "explanation": "同類項（同じ文字の項）は、係数どうしをたし算・ひき算してまとめます。-6 + 2 = -4 なので、答えは -4x です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikeisan-018",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "かっこと同類項"
    ],
    "question": "次の計算をしなさい。\n9x-10 − (3x-4)",
    "answerType": "text",
    "correctAnswers": [
      "6x-6"
    ],
    "explanation": "かっこの前が「−」のときは、かっこの中の符号をすべて変えてから計算します。3x-4 の符号を変えると -3x+4。もとの式に足すと、xの項は 6x、数の項は -6 となり、答えは 6x-6 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-mojikeisan-019",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "式の値"
    ],
    "question": "x = 1 のとき、式 -6x+11 の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "5"
    ],
    "explanation": "x に 1 を代入します。-6×(1)+11 を計算すると、-6 × (1) = -6、-6+11 = 5 です。負の数を代入するときはかっこをつけて計算しましょう。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikeisan-020",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "同類項"
    ],
    "question": "次の計算をしなさい。\n(-5x-4) + (6x-15)",
    "answerType": "text",
    "correctAnswers": [
      "x-19"
    ],
    "explanation": "xの項どうし、数の項どうしをそれぞれまとめます。xの項は -5x と 6x を合わせて x、数の項は -4 と -15 を合わせて -19。まとめると x-19 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikeisan-021",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "かっこと同類項"
    ],
    "question": "次の計算をしなさい。\n(-x-6) − (x-6)",
    "answerType": "text",
    "correctAnswers": [
      "-2x"
    ],
    "explanation": "かっこの前が「−」なので、かっこの中の符号をすべて変えてから同類項をまとめます。(-x-6) − (x-6) = -x-6-x+6。xの項は -2x、数の項は 0 なので、答えは -2x です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikeisan-022",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "分配法則"
    ],
    "question": "次の計算をしなさい。\n-5(-6x-4)",
    "answerType": "text",
    "correctAnswers": [
      "30x+20"
    ],
    "explanation": "分配法則を使って、かっこの外の数をかっこの中のすべての項にかけます。-5 × -6x = 30x、-5 × (-4) = 20。まとめると 30x+20 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikeisan-023",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "同類項"
    ],
    "question": "次の計算をしなさい。\n-2x - 6x",
    "answerType": "text",
    "correctAnswers": [
      "-8x"
    ],
    "explanation": "同類項（同じ文字の項）は、係数どうしをたし算・ひき算してまとめます。-2 - 6 = -8 なので、答えは -8x です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikeisan-024",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "かっこと同類項"
    ],
    "question": "次の計算をしなさい。\n7x+5 − (7x+1)",
    "answerType": "text",
    "correctAnswers": [
      "4"
    ],
    "explanation": "かっこの前が「−」のときは、かっこの中の符号をすべて変えてから計算します。7x+1 の符号を変えると -7x-1。もとの式に足すと、xの項は 0、数の項は 4 となり、答えは 4 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-mojikeisan-025",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "式の値"
    ],
    "question": "x = 6 のとき、式 9x+4 の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "58"
    ],
    "explanation": "x に 6 を代入します。9×(6)+4 を計算すると、9 × (6) = 54、54+4 = 58 です。負の数を代入するときはかっこをつけて計算しましょう。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikeisan-026",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "同類項"
    ],
    "question": "次の計算をしなさい。\n(5x-1) + (8x+7)",
    "answerType": "text",
    "correctAnswers": [
      "13x+6"
    ],
    "explanation": "xの項どうし、数の項どうしをそれぞれまとめます。xの項は 5x と 8x を合わせて 13x、数の項は -1 と 7 を合わせて 6。まとめると 13x+6 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikeisan-027",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "かっこと同類項"
    ],
    "question": "次の計算をしなさい。\n(8x-5) − (-7x-14)",
    "answerType": "text",
    "correctAnswers": [
      "15x+9"
    ],
    "explanation": "かっこの前が「−」なので、かっこの中の符号をすべて変えてから同類項をまとめます。(8x-5) − (-7x-14) = 8x-5+7x+14。xの項は 15x、数の項は 9 なので、答えは 15x+9 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikeisan-028",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "分配法則"
    ],
    "question": "次の計算をしなさい。\n-2(4x+2)",
    "answerType": "text",
    "correctAnswers": [
      "-8x-4"
    ],
    "explanation": "分配法則を使って、かっこの外の数をかっこの中のすべての項にかけます。-2 × 4x = -8x、-2 × (2) = -4。まとめると -8x-4 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-mojikeisan-029",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "同類項"
    ],
    "question": "次の計算をしなさい。\n4x - 9x",
    "answerType": "text",
    "correctAnswers": [
      "-5x"
    ],
    "explanation": "同類項（同じ文字の項）は、係数どうしをたし算・ひき算してまとめます。4 - 9 = -5 なので、答えは -5x です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-mojikeisan-030",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "mojikeisan",
      "name": "文字式の計算（１年）"
    },
    "tags": [
      "かっこと同類項"
    ],
    "question": "次の計算をしなさい。\n9x+2 − (4x+7)",
    "answerType": "text",
    "correctAnswers": [
      "5x-5"
    ],
    "explanation": "かっこの前が「−」のときは、かっこの中の符号をすべて変えてから計算します。4x+7 の符号を変えると -4x-7。もとの式に足すと、xの項は 5x、数の項は -5 となり、答えは 5x-5 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishiki-001",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く"
    ],
    "question": "次の方程式を解きなさい。\nx + (-15) = -8",
    "answerType": "text",
    "correctAnswers": [
      "x=7",
      "7"
    ],
    "explanation": "両辺から -15 をひくと、x = -8 − (-15) = 7 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-houteishiki-002",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く"
    ],
    "question": "次の方程式を解きなさい。\n6x = -18",
    "answerType": "text",
    "correctAnswers": [
      "x=-3",
      "-3"
    ],
    "explanation": "両辺を 6 でわると、x = -18 ÷ 6 = -3 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-houteishiki-003",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く",
      "移項"
    ],
    "question": "次の方程式を解きなさい。\n6x + 9 = -21",
    "answerType": "text",
    "correctAnswers": [
      "x=-5",
      "-5"
    ],
    "explanation": "まず数の項を右辺に移項します（符号が変わります）。6x = -21 - 9 = -30。次に両辺を 6 でわると、x = -5 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishiki-004",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く",
      "移項"
    ],
    "question": "次の方程式を解きなさい。\n9x+6 = -x+36",
    "answerType": "text",
    "correctAnswers": [
      "x=3",
      "3"
    ],
    "explanation": "xをふくむ項を左辺に、数の項を右辺に移項します。9x − (-x) = 36 − (6) となり、10x = 30。両辺を 10 でわると x = 3 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishiki-005",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く",
      "かっこ"
    ],
    "question": "次の方程式を解きなさい。\n9(x + 9) = 162",
    "answerType": "text",
    "correctAnswers": [
      "x=9",
      "9"
    ],
    "explanation": "まずかっこをはずします（分配法則）。9 を（x + 9）の両方の項にかけると、9x+81 = 162 になります。数の項を移項すると 9x = 81。両辺を 9 でわると x = 9 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishiki-006",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く",
      "分数"
    ],
    "question": "次の方程式を解きなさい。\nx/9 - 10 = -4",
    "answerType": "text",
    "correctAnswers": [
      "x=54",
      "54"
    ],
    "explanation": "まず数の項を移項します。x/9 = -4 + 10 = 6。次に両辺に 9 をかけると、x = 54 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishiki-007",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "比例式"
    ],
    "question": "次の比例式を解きなさい。\nx : 10 = 1 : 10",
    "answerType": "text",
    "correctAnswers": [
      "x=1",
      "1"
    ],
    "explanation": "比例式では「外側どうしの積 = 内側どうしの積」が成り立ちます。x × 10 = 10 × 1 なので、10x = 10。両辺を 10 でわると x = 1 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishiki-008",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く"
    ],
    "question": "次の方程式を解きなさい。\nx + (-15) = -6",
    "answerType": "text",
    "correctAnswers": [
      "x=9",
      "9"
    ],
    "explanation": "両辺から -15 をひくと、x = -6 − (-15) = 9 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-houteishiki-009",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く"
    ],
    "question": "次の方程式を解きなさい。\n12x = -72",
    "answerType": "text",
    "correctAnswers": [
      "x=-6",
      "-6"
    ],
    "explanation": "両辺を 12 でわると、x = -72 ÷ 12 = -6 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-houteishiki-010",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く",
      "移項"
    ],
    "question": "次の方程式を解きなさい。\n7x + 1 = 43",
    "answerType": "text",
    "correctAnswers": [
      "x=6",
      "6"
    ],
    "explanation": "まず数の項を右辺に移項します（符号が変わります）。7x = 43 - 1 = 42。次に両辺を 7 でわると、x = 6 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishiki-011",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く",
      "移項"
    ],
    "question": "次の方程式を解きなさい。\n-8x+14 = 9x-20",
    "answerType": "text",
    "correctAnswers": [
      "x=2",
      "2"
    ],
    "explanation": "xをふくむ項を左辺に、数の項を右辺に移項します。-8x − 9x = -20 − (14) となり、-17x = -34。両辺を -17 でわると x = 2 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishiki-012",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く",
      "かっこ"
    ],
    "question": "次の方程式を解きなさい。\n6(x + 7) = 96",
    "answerType": "text",
    "correctAnswers": [
      "x=9",
      "9"
    ],
    "explanation": "まずかっこをはずします（分配法則）。6 を（x + 7）の両方の項にかけると、6x+42 = 96 になります。数の項を移項すると 6x = 54。両辺を 6 でわると x = 9 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishiki-013",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く",
      "分数"
    ],
    "question": "次の方程式を解きなさい。\nx/6 - 2 = 3",
    "answerType": "text",
    "correctAnswers": [
      "x=30",
      "30"
    ],
    "explanation": "まず数の項を移項します。x/6 = 3 + 2 = 5。次に両辺に 6 をかけると、x = 30 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishiki-014",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "比例式"
    ],
    "question": "次の比例式を解きなさい。\nx : 5 = 6 : 6",
    "answerType": "text",
    "correctAnswers": [
      "x=5",
      "5"
    ],
    "explanation": "比例式では「外側どうしの積 = 内側どうしの積」が成り立ちます。x × 6 = 5 × 6 なので、6x = 30。両辺を 6 でわると x = 5 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishiki-015",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く"
    ],
    "question": "次の方程式を解きなさい。\nx + (12) = -3",
    "answerType": "text",
    "correctAnswers": [
      "x=-15",
      "-15"
    ],
    "explanation": "両辺から 12 をひくと、x = -3 − (12) = -15 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-houteishiki-016",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く"
    ],
    "question": "次の方程式を解きなさい。\n9x = -126",
    "answerType": "text",
    "correctAnswers": [
      "x=-14",
      "-14"
    ],
    "explanation": "両辺を 9 でわると、x = -126 ÷ 9 = -14 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-houteishiki-017",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く",
      "移項"
    ],
    "question": "次の方程式を解きなさい。\n4x - 4 = 36",
    "answerType": "text",
    "correctAnswers": [
      "x=10",
      "10"
    ],
    "explanation": "まず数の項を右辺に移項します（符号が変わります）。4x = 36 + 4 = 40。次に両辺を 4 でわると、x = 10 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishiki-018",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く",
      "移項"
    ],
    "question": "次の方程式を解きなさい。\n3x-2 = x-14",
    "answerType": "text",
    "correctAnswers": [
      "x=-6",
      "-6"
    ],
    "explanation": "xをふくむ項を左辺に、数の項を右辺に移項します。3x − x = -14 − (-2) となり、2x = -12。両辺を 2 でわると x = -6 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishiki-019",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く",
      "かっこ"
    ],
    "question": "次の方程式を解きなさい。\n8(x + 2) = 32",
    "answerType": "text",
    "correctAnswers": [
      "x=2",
      "2"
    ],
    "explanation": "まずかっこをはずします（分配法則）。8 を（x + 2）の両方の項にかけると、8x+16 = 32 になります。数の項を移項すると 8x = 16。両辺を 8 でわると x = 2 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishiki-020",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く",
      "分数"
    ],
    "question": "次の方程式を解きなさい。\nx/3 - 8 = -3",
    "answerType": "text",
    "correctAnswers": [
      "x=15",
      "15"
    ],
    "explanation": "まず数の項を移項します。x/3 = -3 + 8 = 5。次に両辺に 3 をかけると、x = 15 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishiki-021",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "比例式"
    ],
    "question": "次の比例式を解きなさい。\nx : 9 = 9 : 9",
    "answerType": "text",
    "correctAnswers": [
      "x=9",
      "9"
    ],
    "explanation": "比例式では「外側どうしの積 = 内側どうしの積」が成り立ちます。x × 9 = 9 × 9 なので、9x = 81。両辺を 9 でわると x = 9 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishiki-022",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く"
    ],
    "question": "次の方程式を解きなさい。\nx + (-4) = -3",
    "answerType": "text",
    "correctAnswers": [
      "x=1",
      "1"
    ],
    "explanation": "両辺から -4 をひくと、x = -3 − (-4) = 1 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-houteishiki-023",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く"
    ],
    "question": "次の方程式を解きなさい。\n13x = 78",
    "answerType": "text",
    "correctAnswers": [
      "x=6",
      "6"
    ],
    "explanation": "両辺を 13 でわると、x = 78 ÷ 13 = 6 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-houteishiki-024",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く",
      "移項"
    ],
    "question": "次の方程式を解きなさい。\n5x + 3 = -7",
    "answerType": "text",
    "correctAnswers": [
      "x=-2",
      "-2"
    ],
    "explanation": "まず数の項を右辺に移項します（符号が変わります）。5x = -7 - 3 = -10。次に両辺を 5 でわると、x = -2 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishiki-025",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く",
      "移項"
    ],
    "question": "次の方程式を解きなさい。\n-3x+13 = -5x+29",
    "answerType": "text",
    "correctAnswers": [
      "x=8",
      "8"
    ],
    "explanation": "xをふくむ項を左辺に、数の項を右辺に移項します。-3x − (-5x) = 29 − (13) となり、2x = 16。両辺を 2 でわると x = 8 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishiki-026",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く",
      "かっこ"
    ],
    "question": "次の方程式を解きなさい。\n2(x - 3) = 6",
    "answerType": "text",
    "correctAnswers": [
      "x=6",
      "6"
    ],
    "explanation": "まずかっこをはずします（分配法則）。2 を（x - 3）の両方の項にかけると、2x-6 = 6 になります。数の項を移項すると 2x = 12。両辺を 2 でわると x = 6 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishiki-027",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く",
      "分数"
    ],
    "question": "次の方程式を解きなさい。\nx/8 + 3 = 7",
    "answerType": "text",
    "correctAnswers": [
      "x=32",
      "32"
    ],
    "explanation": "まず数の項を移項します。x/8 = 7 - 3 = 4。次に両辺に 8 をかけると、x = 32 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishiki-028",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "比例式"
    ],
    "question": "次の比例式を解きなさい。\nx : 3 = 1 : 3",
    "answerType": "text",
    "correctAnswers": [
      "x=1",
      "1"
    ],
    "explanation": "比例式では「外側どうしの積 = 内側どうしの積」が成り立ちます。x × 3 = 3 × 1 なので、3x = 3。両辺を 3 でわると x = 1 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishiki-029",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く"
    ],
    "question": "次の方程式を解きなさい。\nx + (-11) = -24",
    "answerType": "text",
    "correctAnswers": [
      "x=-13",
      "-13"
    ],
    "explanation": "両辺から -11 をひくと、x = -24 − (-11) = -13 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-houteishiki-030",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishiki",
      "name": "方程式"
    },
    "tags": [
      "方程式を解く"
    ],
    "question": "次の方程式を解きなさい。\n14x = -28",
    "answerType": "text",
    "correctAnswers": [
      "x=-2",
      "-2"
    ],
    "explanation": "両辺を 14 でわると、x = -28 ÷ 14 = -2 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-houteishikiriyou-001",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "代金"
    ],
    "question": "1本50円の鉛筆を何本かと、189円のノートを1冊買ったところ、代金の合計は589円でした。鉛筆を何本買いましたか。（本数だけを数字で答えなさい）",
    "answerType": "text",
    "correctAnswers": [
      "8",
      "8本"
    ],
    "explanation": "鉛筆の本数をx本とすると、50x + 189 = 589 という方程式が立てられます。50x = 400 より x = 8。よって鉛筆は8本です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishikiriyou-002",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "連続する整数"
    ],
    "question": "連続する3つの整数の和が 72 になるとき、まん中の整数を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "24"
    ],
    "explanation": "まん中の整数をxとすると、3つの整数は x−1, x, x+1 と表せます。その和は (x−1) + x + (x+1) = 3x なので、3x = 72、x = 24 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishikiriyou-003",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "過不足"
    ],
    "question": "何人かの子どもにあめを配ります。1人5個ずつ配ると6個余り、1人7個ずつ配ると8個たりません。子どもの人数を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "7",
      "7人"
    ],
    "explanation": "子どもの人数をx人とすると、あめの個数は「5個ずつ配って6個余る場合」と「7個ずつ配って8個たりない場合」で等しくなります。5x + 6 = 7x − 8 という方程式を解くと、x = 7 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishikiriyou-004",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "年齢"
    ],
    "question": "現在、父の年齢は子の年齢の3倍です。13年後には父の年齢が子の年齢の2倍になります。子の現在の年齢を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "13",
      "13歳"
    ],
    "explanation": "子の現在の年齢をx歳とすると、父の年齢は3x歳です。13年後、子は(x+13)歳、父は(3x+13)歳で、父は子の2倍になるので、3x+13 = 2(x+13) という方程式が立てられます。これを解くと x = 13 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishikiriyou-005",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "代金"
    ],
    "question": "1本113円の鉛筆を何本かと、101円のノートを1冊買ったところ、代金の合計は666円でした。鉛筆を何本買いましたか。（本数だけを数字で答えなさい）",
    "answerType": "text",
    "correctAnswers": [
      "5",
      "5本"
    ],
    "explanation": "鉛筆の本数をx本とすると、113x + 101 = 666 という方程式が立てられます。113x = 565 より x = 5。よって鉛筆は5本です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishikiriyou-006",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "連続する整数"
    ],
    "question": "連続する3つの整数の和が 39 になるとき、まん中の整数を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "13"
    ],
    "explanation": "まん中の整数をxとすると、3つの整数は x−1, x, x+1 と表せます。その和は (x−1) + x + (x+1) = 3x なので、3x = 39、x = 13 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishikiriyou-007",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "過不足"
    ],
    "question": "何人かの子どもにあめを配ります。1人8個ずつ配ると1個余り、1人11個ずつ配ると26個たりません。子どもの人数を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "9",
      "9人"
    ],
    "explanation": "子どもの人数をx人とすると、あめの個数は「8個ずつ配って1個余る場合」と「11個ずつ配って26個たりない場合」で等しくなります。8x + 1 = 11x − 26 という方程式を解くと、x = 9 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishikiriyou-008",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "年齢"
    ],
    "question": "現在、父の年齢は子の年齢の5倍です。13年後には父の年齢が子の年齢の3倍になります。子の現在の年齢を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "13",
      "13歳"
    ],
    "explanation": "子の現在の年齢をx歳とすると、父の年齢は5x歳です。13年後、子は(x+13)歳、父は(5x+13)歳で、父は子の3倍になるので、5x+13 = 3(x+13) という方程式が立てられます。これを解くと x = 13 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishikiriyou-009",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "代金"
    ],
    "question": "1本83円の鉛筆を何本かと、161円のノートを1冊買ったところ、代金の合計は493円でした。鉛筆を何本買いましたか。（本数だけを数字で答えなさい）",
    "answerType": "text",
    "correctAnswers": [
      "4",
      "4本"
    ],
    "explanation": "鉛筆の本数をx本とすると、83x + 161 = 493 という方程式が立てられます。83x = 332 より x = 4。よって鉛筆は4本です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishikiriyou-010",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "連続する整数"
    ],
    "question": "連続する3つの整数の和が 117 になるとき、まん中の整数を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "39"
    ],
    "explanation": "まん中の整数をxとすると、3つの整数は x−1, x, x+1 と表せます。その和は (x−1) + x + (x+1) = 3x なので、3x = 117、x = 39 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishikiriyou-011",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "過不足"
    ],
    "question": "何人かの子どもにあめを配ります。1人4個ずつ配ると2個余り、1人7個ずつ配ると16個たりません。子どもの人数を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "6",
      "6人"
    ],
    "explanation": "子どもの人数をx人とすると、あめの個数は「4個ずつ配って2個余る場合」と「7個ずつ配って16個たりない場合」で等しくなります。4x + 2 = 7x − 16 という方程式を解くと、x = 6 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishikiriyou-012",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "年齢"
    ],
    "question": "現在、父の年齢は子の年齢の3倍です。8年後には父の年齢が子の年齢の2倍になります。子の現在の年齢を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "8",
      "8歳"
    ],
    "explanation": "子の現在の年齢をx歳とすると、父の年齢は3x歳です。8年後、子は(x+8)歳、父は(3x+8)歳で、父は子の2倍になるので、3x+8 = 2(x+8) という方程式が立てられます。これを解くと x = 8 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishikiriyou-013",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "代金"
    ],
    "question": "1本108円の鉛筆を何本かと、158円のノートを1冊買ったところ、代金の合計は914円でした。鉛筆を何本買いましたか。（本数だけを数字で答えなさい）",
    "answerType": "text",
    "correctAnswers": [
      "7",
      "7本"
    ],
    "explanation": "鉛筆の本数をx本とすると、108x + 158 = 914 という方程式が立てられます。108x = 756 より x = 7。よって鉛筆は7本です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishikiriyou-014",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "連続する整数"
    ],
    "question": "連続する3つの整数の和が 45 になるとき、まん中の整数を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "15"
    ],
    "explanation": "まん中の整数をxとすると、3つの整数は x−1, x, x+1 と表せます。その和は (x−1) + x + (x+1) = 3x なので、3x = 45、x = 15 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishikiriyou-015",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "過不足"
    ],
    "question": "何人かの子どもにあめを配ります。1人7個ずつ配ると2個余り、1人10個ずつ配ると19個たりません。子どもの人数を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "7",
      "7人"
    ],
    "explanation": "子どもの人数をx人とすると、あめの個数は「7個ずつ配って2個余る場合」と「10個ずつ配って19個たりない場合」で等しくなります。7x + 2 = 10x − 19 という方程式を解くと、x = 7 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishikiriyou-016",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "年齢"
    ],
    "question": "現在、父の年齢は子の年齢の4倍です。18年後には父の年齢が子の年齢の2倍になります。子の現在の年齢を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "9",
      "9歳"
    ],
    "explanation": "子の現在の年齢をx歳とすると、父の年齢は4x歳です。18年後、子は(x+18)歳、父は(4x+18)歳で、父は子の2倍になるので、4x+18 = 2(x+18) という方程式が立てられます。これを解くと x = 9 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishikiriyou-017",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "代金"
    ],
    "question": "1本96円の鉛筆を何本かと、148円のノートを1冊買ったところ、代金の合計は724円でした。鉛筆を何本買いましたか。（本数だけを数字で答えなさい）",
    "answerType": "text",
    "correctAnswers": [
      "6",
      "6本"
    ],
    "explanation": "鉛筆の本数をx本とすると、96x + 148 = 724 という方程式が立てられます。96x = 576 より x = 6。よって鉛筆は6本です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishikiriyou-018",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "連続する整数"
    ],
    "question": "連続する3つの整数の和が 54 になるとき、まん中の整数を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "18"
    ],
    "explanation": "まん中の整数をxとすると、3つの整数は x−1, x, x+1 と表せます。その和は (x−1) + x + (x+1) = 3x なので、3x = 54、x = 18 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishikiriyou-019",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "過不足"
    ],
    "question": "何人かの子どもにあめを配ります。1人5個ずつ配ると6個余り、1人6個ずつ配ると2個たりません。子どもの人数を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "8",
      "8人"
    ],
    "explanation": "子どもの人数をx人とすると、あめの個数は「5個ずつ配って6個余る場合」と「6個ずつ配って2個たりない場合」で等しくなります。5x + 6 = 6x − 2 という方程式を解くと、x = 8 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishikiriyou-020",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "代金"
    ],
    "question": "1本106円の鉛筆を何本かと、159円のノートを1冊買ったところ、代金の合計は795円でした。鉛筆を何本買いましたか。（本数だけを数字で答えなさい）",
    "answerType": "text",
    "correctAnswers": [
      "6",
      "6本"
    ],
    "explanation": "鉛筆の本数をx本とすると、106x + 159 = 795 という方程式が立てられます。106x = 636 より x = 6。よって鉛筆は6本です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishikiriyou-021",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "連続する整数"
    ],
    "question": "連続する3つの整数の和が 144 になるとき、まん中の整数を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "48"
    ],
    "explanation": "まん中の整数をxとすると、3つの整数は x−1, x, x+1 と表せます。その和は (x−1) + x + (x+1) = 3x なので、3x = 144、x = 48 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishikiriyou-022",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "過不足"
    ],
    "question": "何人かの子どもにあめを配ります。1人8個ずつ配ると2個余り、1人11個ずつ配ると28個たりません。子どもの人数を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "10",
      "10人"
    ],
    "explanation": "子どもの人数をx人とすると、あめの個数は「8個ずつ配って2個余る場合」と「11個ずつ配って28個たりない場合」で等しくなります。8x + 2 = 11x − 28 という方程式を解くと、x = 10 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishikiriyou-023",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "代金"
    ],
    "question": "1本99円の鉛筆を何本かと、142円のノートを1冊買ったところ、代金の合計は934円でした。鉛筆を何本買いましたか。（本数だけを数字で答えなさい）",
    "answerType": "text",
    "correctAnswers": [
      "8",
      "8本"
    ],
    "explanation": "鉛筆の本数をx本とすると、99x + 142 = 934 という方程式が立てられます。99x = 792 より x = 8。よって鉛筆は8本です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishikiriyou-024",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "連続する整数"
    ],
    "question": "連続する3つの整数の和が 30 になるとき、まん中の整数を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "10"
    ],
    "explanation": "まん中の整数をxとすると、3つの整数は x−1, x, x+1 と表せます。その和は (x−1) + x + (x+1) = 3x なので、3x = 30、x = 10 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishikiriyou-025",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "過不足"
    ],
    "question": "何人かの子どもにあめを配ります。1人5個ずつ配ると5個余り、1人6個ずつ配ると3個たりません。子どもの人数を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "8",
      "8人"
    ],
    "explanation": "子どもの人数をx人とすると、あめの個数は「5個ずつ配って5個余る場合」と「6個ずつ配って3個たりない場合」で等しくなります。5x + 5 = 6x − 3 という方程式を解くと、x = 8 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishikiriyou-026",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "年齢"
    ],
    "question": "現在、父の年齢は子の年齢の4倍です。5年後には父の年齢が子の年齢の3倍になります。子の現在の年齢を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "10",
      "10歳"
    ],
    "explanation": "子の現在の年齢をx歳とすると、父の年齢は4x歳です。5年後、子は(x+5)歳、父は(4x+5)歳で、父は子の3倍になるので、4x+5 = 3(x+5) という方程式が立てられます。これを解くと x = 10 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishikiriyou-027",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "代金"
    ],
    "question": "1本88円の鉛筆を何本かと、97円のノートを1冊買ったところ、代金の合計は625円でした。鉛筆を何本買いましたか。（本数だけを数字で答えなさい）",
    "answerType": "text",
    "correctAnswers": [
      "6",
      "6本"
    ],
    "explanation": "鉛筆の本数をx本とすると、88x + 97 = 625 という方程式が立てられます。88x = 528 より x = 6。よって鉛筆は6本です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishikiriyou-028",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "連続する整数"
    ],
    "question": "連続する3つの整数の和が 99 になるとき、まん中の整数を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "33"
    ],
    "explanation": "まん中の整数をxとすると、3つの整数は x−1, x, x+1 と表せます。その和は (x−1) + x + (x+1) = 3x なので、3x = 99、x = 33 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-houteishikiriyou-029",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "過不足"
    ],
    "question": "何人かの子どもにあめを配ります。1人6個ずつ配ると4個余り、1人9個ずつ配ると29個たりません。子どもの人数を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "11",
      "11人"
    ],
    "explanation": "子どもの人数をx人とすると、あめの個数は「6個ずつ配って4個余る場合」と「9個ずつ配って29個たりない場合」で等しくなります。6x + 4 = 9x − 29 という方程式を解くと、x = 11 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-houteishikiriyou-030",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "houteishikiriyou",
      "name": "方程式の利用"
    },
    "tags": [
      "文章題",
      "年齢"
    ],
    "question": "現在、父の年齢は子の年齢の5倍です。3年後には父の年齢が子の年齢の4倍になります。子の現在の年齢を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "9",
      "9歳"
    ],
    "explanation": "子の現在の年齢をx歳とすると、父の年齢は5x歳です。3年後、子は(x+3)歳、父は(5x+3)歳で、父は子の4倍になるので、5x+3 = 4(x+3) という方程式が立てられます。これを解くと x = 9 です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-hirei-001",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式"
    ],
    "question": "y は x に比例し、x = -5 のとき y = -20 です。y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=4x"
    ],
    "explanation": "比例の式は y = ax と表せます。x = -5, y = -20 を代入すると -20 = a×(-5) となり、a = -20÷(-5) = 4。よって y=4x です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-002",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "代入"
    ],
    "question": "y = 9x のとき、x = 6 のときの y の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "54"
    ],
    "explanation": "式に x = 6 を代入します。y = 9 × (6) = 54 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hirei-003",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "逆算"
    ],
    "question": "y = -2x のとき、y = -14 になる x の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "7"
    ],
    "explanation": "式に y = -14 を代入すると -14 = -2 × x となるので、x = -14 ÷ -2 = 7 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-004",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の見分け方"
    ],
    "question": "次の表は、y が x に比例していますか。\nx: 1, 2, 3\ny: 3, 6, 9",
    "answerType": "choice",
    "choices": [
      "比例している",
      "比例していない"
    ],
    "correctAnswers": [
      "比例している"
    ],
    "explanation": "x の値が2倍、3倍になると、y の値も2倍、3倍になっています（y ÷ x がつねに 3 で一定）。これは比例の関係です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-005",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "文章題"
    ],
    "question": "1個109円の品物を x 個買うときの代金 y 円を、y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=109x"
    ],
    "explanation": "個数が2倍、3倍になれば代金も2倍、3倍になるので、これは比例の関係です。1個あたり109円なので、y = 109x と表せます。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hirei-006",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式"
    ],
    "question": "y は x に比例し、x = -7 のとき y = 21 です。y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=-3x"
    ],
    "explanation": "比例の式は y = ax と表せます。x = -7, y = 21 を代入すると 21 = a×(-7) となり、a = 21÷(-7) = -3。よって y=-3x です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-007",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "代入"
    ],
    "question": "y = -5x のとき、x = -5 のときの y の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "25"
    ],
    "explanation": "式に x = -5 を代入します。y = -5 × (-5) = 25 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hirei-008",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "逆算"
    ],
    "question": "y = 5x のとき、y = 40 になる x の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "8"
    ],
    "explanation": "式に y = 40 を代入すると 40 = 5 × x となるので、x = 40 ÷ 5 = 8 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-009",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の見分け方"
    ],
    "question": "次の表は、y が x に比例していますか。\nx: 1, 2, 3\ny: 11, 19, 28",
    "answerType": "choice",
    "choices": [
      "比例している",
      "比例していない"
    ],
    "correctAnswers": [
      "比例していない"
    ],
    "explanation": "y ÷ x の値を計算すると一定になりません（比例ならつねに同じ値になるはずです）。よってこの表は比例の関係ではありません。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-010",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "文章題"
    ],
    "question": "1個124円の品物を x 個買うときの代金 y 円を、y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=124x"
    ],
    "explanation": "個数が2倍、3倍になれば代金も2倍、3倍になるので、これは比例の関係です。1個あたり124円なので、y = 124x と表せます。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hirei-011",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式"
    ],
    "question": "y は x に比例し、x = 4 のとき y = -12 です。y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=-3x"
    ],
    "explanation": "比例の式は y = ax と表せます。x = 4, y = -12 を代入すると -12 = a×(4) となり、a = -12÷(4) = -3。よって y=-3x です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-012",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "代入"
    ],
    "question": "y = 7x のとき、x = -9 のときの y の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "-63"
    ],
    "explanation": "式に x = -9 を代入します。y = 7 × (-9) = -63 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hirei-013",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "逆算"
    ],
    "question": "y = x のとき、y = 7 になる x の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "7"
    ],
    "explanation": "式に y = 7 を代入すると 7 = 1 × x となるので、x = 7 ÷ 1 = 7 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-014",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の見分け方"
    ],
    "question": "次の表は、y が x に比例していますか。\nx: 1, 2, 3\ny: 7, 15, 23",
    "answerType": "choice",
    "choices": [
      "比例している",
      "比例していない"
    ],
    "correctAnswers": [
      "比例していない"
    ],
    "explanation": "y ÷ x の値を計算すると一定になりません（比例ならつねに同じ値になるはずです）。よってこの表は比例の関係ではありません。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-015",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "文章題"
    ],
    "question": "1個144円の品物を x 個買うときの代金 y 円を、y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=144x"
    ],
    "explanation": "個数が2倍、3倍になれば代金も2倍、3倍になるので、これは比例の関係です。1個あたり144円なので、y = 144x と表せます。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hirei-016",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式"
    ],
    "question": "y は x に比例し、x = -4 のとき y = -20 です。y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=5x"
    ],
    "explanation": "比例の式は y = ax と表せます。x = -4, y = -20 を代入すると -20 = a×(-4) となり、a = -20÷(-4) = 5。よって y=5x です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-017",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "代入"
    ],
    "question": "y = -x のとき、x = -5 のときの y の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "5"
    ],
    "explanation": "式に x = -5 を代入します。y = -1 × (-5) = 5 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hirei-018",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "逆算"
    ],
    "question": "y = -6x のとき、y = -12 になる x の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "2"
    ],
    "explanation": "式に y = -12 を代入すると -12 = -6 × x となるので、x = -12 ÷ -6 = 2 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-019",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の見分け方"
    ],
    "question": "次の表は、y が x に比例していますか。\nx: 1, 2, 3\ny: 4, 5, 7",
    "answerType": "choice",
    "choices": [
      "比例している",
      "比例していない"
    ],
    "correctAnswers": [
      "比例していない"
    ],
    "explanation": "y ÷ x の値を計算すると一定になりません（比例ならつねに同じ値になるはずです）。よってこの表は比例の関係ではありません。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-020",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "文章題"
    ],
    "question": "1個60円の品物を x 個買うときの代金 y 円を、y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=60x"
    ],
    "explanation": "個数が2倍、3倍になれば代金も2倍、3倍になるので、これは比例の関係です。1個あたり60円なので、y = 60x と表せます。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hirei-021",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式"
    ],
    "question": "y は x に比例し、x = -6 のとき y = -6 です。y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=x"
    ],
    "explanation": "比例の式は y = ax と表せます。x = -6, y = -6 を代入すると -6 = a×(-6) となり、a = -6÷(-6) = 1。よって y=x です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-022",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "逆算"
    ],
    "question": "y = -2x のとき、y = -6 になる x の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "3"
    ],
    "explanation": "式に y = -6 を代入すると -6 = -2 × x となるので、x = -6 ÷ -2 = 3 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-023",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の見分け方"
    ],
    "question": "次の表は、y が x に比例していますか。\nx: 1, 2, 3\ny: 11, 21, 29",
    "answerType": "choice",
    "choices": [
      "比例している",
      "比例していない"
    ],
    "correctAnswers": [
      "比例していない"
    ],
    "explanation": "y ÷ x の値を計算すると一定になりません（比例ならつねに同じ値になるはずです）。よってこの表は比例の関係ではありません。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-024",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "文章題"
    ],
    "question": "1個197円の品物を x 個買うときの代金 y 円を、y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=197x"
    ],
    "explanation": "個数が2倍、3倍になれば代金も2倍、3倍になるので、これは比例の関係です。1個あたり197円なので、y = 197x と表せます。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hirei-025",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式"
    ],
    "question": "y は x に比例し、x = -8 のとき y = 56 です。y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=-7x"
    ],
    "explanation": "比例の式は y = ax と表せます。x = -8, y = 56 を代入すると 56 = a×(-8) となり、a = 56÷(-8) = -7。よって y=-7x です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-026",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "代入"
    ],
    "question": "y = 6x のとき、x = -6 のときの y の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "-36"
    ],
    "explanation": "式に x = -6 を代入します。y = 6 × (-6) = -36 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hirei-027",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "逆算"
    ],
    "question": "y = -3x のとき、y = -27 になる x の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "9"
    ],
    "explanation": "式に y = -27 を代入すると -27 = -3 × x となるので、x = -27 ÷ -3 = 9 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-028",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の見分け方"
    ],
    "question": "次の表は、y が x に比例していますか。\nx: 1, 2, 3\ny: 8, 13, 14",
    "answerType": "choice",
    "choices": [
      "比例している",
      "比例していない"
    ],
    "correctAnswers": [
      "比例していない"
    ],
    "explanation": "y ÷ x の値を計算すると一定になりません（比例ならつねに同じ値になるはずです）。よってこの表は比例の関係ではありません。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hirei-029",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式",
      "文章題"
    ],
    "question": "1個66円の品物を x 個買うときの代金 y 円を、y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=66x"
    ],
    "explanation": "個数が2倍、3倍になれば代金も2倍、3倍になるので、これは比例の関係です。1個あたり66円なので、y = 66x と表せます。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hirei-030",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hirei",
      "name": "比例"
    },
    "tags": [
      "比例の式"
    ],
    "question": "y は x に比例し、x = 7 のとき y = 14 です。y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=2x"
    ],
    "explanation": "比例の式は y = ax と表せます。x = 7, y = 14 を代入すると 14 = a×(7) となり、a = 14÷(7) = 2。よって y=2x です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hireigraph-001",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ"
    ],
    "question": "比例 y = -6x のグラフの特徴として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "原点を通る右上がりの直線",
      "原点を通る右下がりの直線",
      "原点を通らない直線",
      "なめらかな曲線（双曲線）"
    ],
    "correctAnswers": [
      "原点を通る右下がりの直線"
    ],
    "explanation": "比例のグラフは必ず原点（0,0）を通る直線です。比例定数が負なので、xが増えるとyが減る右下がりの直線になります。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hireigraph-002",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "点の判定"
    ],
    "question": "比例 y = -9x のグラフは、点 (2, -17) を通りますか。",
    "answerType": "choice",
    "choices": [
      "通る",
      "通らない"
    ],
    "correctAnswers": [
      "通らない"
    ],
    "explanation": "x = 2 を式に代入すると y = -9 × (2) = -18 になります。これが -17 と一致しないので、グラフはこの点を通りません。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hireigraph-003",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "傾き"
    ],
    "question": "y = 4x のグラフと y = 7x のグラフのうち、原点からより急な傾きになっているのはどちらですか。",
    "answerType": "choice",
    "choices": [
      "y = 4x",
      "y = 7x"
    ],
    "correctAnswers": [
      "y = 7x"
    ],
    "explanation": "比例定数（xの係数）の絶対値が大きいほど、グラフの傾きは急になります。|4| < |7| なので、y = 7x のほうが急な傾きです。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hireigraph-004",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "符号"
    ],
    "question": "y = -7x について、x の値が正のとき、y の値は正・負のどちらになりますか。",
    "answerType": "choice",
    "choices": [
      "正になる",
      "負になる"
    ],
    "correctAnswers": [
      "負になる"
    ],
    "explanation": "比例定数が負のとき、xが正の値であればyは負の値になります。（例: x=1のとき y=-7）",
    "difficulty": 1
  },
  {
    "id": "math-g1-hireigraph-005",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ"
    ],
    "question": "比例 y = -7x のグラフの特徴として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "原点を通る右上がりの直線",
      "原点を通る右下がりの直線",
      "原点を通らない直線",
      "なめらかな曲線（双曲線）"
    ],
    "correctAnswers": [
      "原点を通る右下がりの直線"
    ],
    "explanation": "比例のグラフは必ず原点（0,0）を通る直線です。比例定数が負なので、xが増えるとyが減る右下がりの直線になります。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hireigraph-006",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "点の判定"
    ],
    "question": "比例 y = x のグラフは、点 (6, 6) を通りますか。",
    "answerType": "choice",
    "choices": [
      "通る",
      "通らない"
    ],
    "correctAnswers": [
      "通る"
    ],
    "explanation": "x = 6 を式に代入すると y = 1 × (6) = 6 になります。これが 6 と一致するので、グラフはこの点を通ります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hireigraph-007",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "傾き"
    ],
    "question": "y = 4x のグラフと y = 6x のグラフのうち、原点からより急な傾きになっているのはどちらですか。",
    "answerType": "choice",
    "choices": [
      "y = 4x",
      "y = 6x"
    ],
    "correctAnswers": [
      "y = 6x"
    ],
    "explanation": "比例定数（xの係数）の絶対値が大きいほど、グラフの傾きは急になります。|4| < |6| なので、y = 6x のほうが急な傾きです。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hireigraph-008",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "符号"
    ],
    "question": "y = 9x について、x の値が正のとき、y の値は正・負のどちらになりますか。",
    "answerType": "choice",
    "choices": [
      "正になる",
      "負になる"
    ],
    "correctAnswers": [
      "正になる"
    ],
    "explanation": "比例定数が正のとき、xが正の値であればyは正の値になります。（例: x=1のとき y=9）",
    "difficulty": 1
  },
  {
    "id": "math-g1-hireigraph-009",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ"
    ],
    "question": "比例 y = 4x のグラフの特徴として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "原点を通る右上がりの直線",
      "原点を通る右下がりの直線",
      "原点を通らない直線",
      "なめらかな曲線（双曲線）"
    ],
    "correctAnswers": [
      "原点を通る右上がりの直線"
    ],
    "explanation": "比例のグラフは必ず原点（0,0）を通る直線です。比例定数が正なので、xが増えるとyも増える右上がりの直線になります。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hireigraph-010",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "点の判定"
    ],
    "question": "比例 y = 9x のグラフは、点 (-5, -44) を通りますか。",
    "answerType": "choice",
    "choices": [
      "通る",
      "通らない"
    ],
    "correctAnswers": [
      "通らない"
    ],
    "explanation": "x = -5 を式に代入すると y = 9 × (-5) = -45 になります。これが -44 と一致しないので、グラフはこの点を通りません。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hireigraph-011",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "傾き"
    ],
    "question": "y = 5x のグラフと y = 6x のグラフのうち、原点からより急な傾きになっているのはどちらですか。",
    "answerType": "choice",
    "choices": [
      "y = 5x",
      "y = 6x"
    ],
    "correctAnswers": [
      "y = 6x"
    ],
    "explanation": "比例定数（xの係数）の絶対値が大きいほど、グラフの傾きは急になります。|5| < |6| なので、y = 6x のほうが急な傾きです。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hireigraph-012",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "符号"
    ],
    "question": "y = 6x について、x の値が正のとき、y の値は正・負のどちらになりますか。",
    "answerType": "choice",
    "choices": [
      "正になる",
      "負になる"
    ],
    "correctAnswers": [
      "正になる"
    ],
    "explanation": "比例定数が正のとき、xが正の値であればyは正の値になります。（例: x=1のとき y=6）",
    "difficulty": 1
  },
  {
    "id": "math-g1-hireigraph-013",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ"
    ],
    "question": "比例 y = 5x のグラフの特徴として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "原点を通る右上がりの直線",
      "原点を通る右下がりの直線",
      "原点を通らない直線",
      "なめらかな曲線（双曲線）"
    ],
    "correctAnswers": [
      "原点を通る右上がりの直線"
    ],
    "explanation": "比例のグラフは必ず原点（0,0）を通る直線です。比例定数が正なので、xが増えるとyも増える右上がりの直線になります。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hireigraph-014",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "傾き"
    ],
    "question": "y = 6x のグラフと y = 2x のグラフのうち、原点からより急な傾きになっているのはどちらですか。",
    "answerType": "choice",
    "choices": [
      "y = 6x",
      "y = 2x"
    ],
    "correctAnswers": [
      "y = 6x"
    ],
    "explanation": "比例定数（xの係数）の絶対値が大きいほど、グラフの傾きは急になります。|6| > |2| なので、y = 6x のほうが急な傾きです。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hireigraph-015",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "符号"
    ],
    "question": "y = 3x について、x の値が正のとき、y の値は正・負のどちらになりますか。",
    "answerType": "choice",
    "choices": [
      "正になる",
      "負になる"
    ],
    "correctAnswers": [
      "正になる"
    ],
    "explanation": "比例定数が正のとき、xが正の値であればyは正の値になります。（例: x=1のとき y=3）",
    "difficulty": 1
  },
  {
    "id": "math-g1-hireigraph-016",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ"
    ],
    "question": "比例 y = 2x のグラフの特徴として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "原点を通る右上がりの直線",
      "原点を通る右下がりの直線",
      "原点を通らない直線",
      "なめらかな曲線（双曲線）"
    ],
    "correctAnswers": [
      "原点を通る右上がりの直線"
    ],
    "explanation": "比例のグラフは必ず原点（0,0）を通る直線です。比例定数が正なので、xが増えるとyも増える右上がりの直線になります。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hireigraph-017",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "点の判定"
    ],
    "question": "比例 y = -2x のグラフは、点 (-8, 18) を通りますか。",
    "answerType": "choice",
    "choices": [
      "通る",
      "通らない"
    ],
    "correctAnswers": [
      "通らない"
    ],
    "explanation": "x = -8 を式に代入すると y = -2 × (-8) = 16 になります。これが 18 と一致しないので、グラフはこの点を通りません。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hireigraph-018",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "傾き"
    ],
    "question": "y = 8x のグラフと y = 3x のグラフのうち、原点からより急な傾きになっているのはどちらですか。",
    "answerType": "choice",
    "choices": [
      "y = 8x",
      "y = 3x"
    ],
    "correctAnswers": [
      "y = 8x"
    ],
    "explanation": "比例定数（xの係数）の絶対値が大きいほど、グラフの傾きは急になります。|8| > |3| なので、y = 8x のほうが急な傾きです。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hireigraph-019",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "符号"
    ],
    "question": "y = -9x について、x の値が正のとき、y の値は正・負のどちらになりますか。",
    "answerType": "choice",
    "choices": [
      "正になる",
      "負になる"
    ],
    "correctAnswers": [
      "負になる"
    ],
    "explanation": "比例定数が負のとき、xが正の値であればyは負の値になります。（例: x=1のとき y=-9）",
    "difficulty": 1
  },
  {
    "id": "math-g1-hireigraph-020",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ"
    ],
    "question": "比例 y = 7x のグラフの特徴として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "原点を通る右上がりの直線",
      "原点を通る右下がりの直線",
      "原点を通らない直線",
      "なめらかな曲線（双曲線）"
    ],
    "correctAnswers": [
      "原点を通る右上がりの直線"
    ],
    "explanation": "比例のグラフは必ず原点（0,0）を通る直線です。比例定数が正なので、xが増えるとyも増える右上がりの直線になります。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hireigraph-021",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "点の判定"
    ],
    "question": "比例 y = -3x のグラフは、点 (8, -24) を通りますか。",
    "answerType": "choice",
    "choices": [
      "通る",
      "通らない"
    ],
    "correctAnswers": [
      "通る"
    ],
    "explanation": "x = 8 を式に代入すると y = -3 × (8) = -24 になります。これが -24 と一致するので、グラフはこの点を通ります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hireigraph-022",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "傾き"
    ],
    "question": "y = 6x のグラフと y = 7x のグラフのうち、原点からより急な傾きになっているのはどちらですか。",
    "answerType": "choice",
    "choices": [
      "y = 6x",
      "y = 7x"
    ],
    "correctAnswers": [
      "y = 7x"
    ],
    "explanation": "比例定数（xの係数）の絶対値が大きいほど、グラフの傾きは急になります。|6| < |7| なので、y = 7x のほうが急な傾きです。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hireigraph-023",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ"
    ],
    "question": "比例 y = 3x のグラフの特徴として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "原点を通る右上がりの直線",
      "原点を通る右下がりの直線",
      "原点を通らない直線",
      "なめらかな曲線（双曲線）"
    ],
    "correctAnswers": [
      "原点を通る右上がりの直線"
    ],
    "explanation": "比例のグラフは必ず原点（0,0）を通る直線です。比例定数が正なので、xが増えるとyも増える右上がりの直線になります。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hireigraph-024",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "点の判定"
    ],
    "question": "比例 y = -8x のグラフは、点 (-4, 32) を通りますか。",
    "answerType": "choice",
    "choices": [
      "通る",
      "通らない"
    ],
    "correctAnswers": [
      "通る"
    ],
    "explanation": "x = -4 を式に代入すると y = -8 × (-4) = 32 になります。これが 32 と一致するので、グラフはこの点を通ります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hireigraph-025",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "符号"
    ],
    "question": "y = -8x について、x の値が正のとき、y の値は正・負のどちらになりますか。",
    "answerType": "choice",
    "choices": [
      "正になる",
      "負になる"
    ],
    "correctAnswers": [
      "負になる"
    ],
    "explanation": "比例定数が負のとき、xが正の値であればyは負の値になります。（例: x=1のとき y=-8）",
    "difficulty": 1
  },
  {
    "id": "math-g1-hireigraph-026",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "点の判定"
    ],
    "question": "比例 y = -2x のグラフは、点 (-6, 12) を通りますか。",
    "answerType": "choice",
    "choices": [
      "通る",
      "通らない"
    ],
    "correctAnswers": [
      "通る"
    ],
    "explanation": "x = -6 を式に代入すると y = -2 × (-6) = 12 になります。これが 12 と一致するので、グラフはこの点を通ります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hireigraph-027",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "傾き"
    ],
    "question": "y = 3x のグラフと y = 7x のグラフのうち、原点からより急な傾きになっているのはどちらですか。",
    "answerType": "choice",
    "choices": [
      "y = 3x",
      "y = 7x"
    ],
    "correctAnswers": [
      "y = 7x"
    ],
    "explanation": "比例定数（xの係数）の絶対値が大きいほど、グラフの傾きは急になります。|3| < |7| なので、y = 7x のほうが急な傾きです。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hireigraph-028",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "符号"
    ],
    "question": "y = -5x について、x の値が正のとき、y の値は正・負のどちらになりますか。",
    "answerType": "choice",
    "choices": [
      "正になる",
      "負になる"
    ],
    "correctAnswers": [
      "負になる"
    ],
    "explanation": "比例定数が負のとき、xが正の値であればyは負の値になります。（例: x=1のとき y=-5）",
    "difficulty": 1
  },
  {
    "id": "math-g1-hireigraph-029",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ"
    ],
    "question": "比例 y = 8x のグラフの特徴として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "原点を通る右上がりの直線",
      "原点を通る右下がりの直線",
      "原点を通らない直線",
      "なめらかな曲線（双曲線）"
    ],
    "correctAnswers": [
      "原点を通る右上がりの直線"
    ],
    "explanation": "比例のグラフは必ず原点（0,0）を通る直線です。比例定数が正なので、xが増えるとyも増える右上がりの直線になります。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hireigraph-030",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hireigraph",
      "name": "比例とグラフ"
    },
    "tags": [
      "比例のグラフ",
      "点の判定"
    ],
    "question": "比例 y = 8x のグラフは、点 (-3, -24) を通りますか。",
    "answerType": "choice",
    "choices": [
      "通る",
      "通らない"
    ],
    "correctAnswers": [
      "通る"
    ],
    "explanation": "x = -3 を式に代入すると y = 8 × (-3) = -24 になります。これが -24 と一致するので、グラフはこの点を通ります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-001",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式"
    ],
    "question": "y は x に反比例し、x = 5 のとき y = 5 です。y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=25/x"
    ],
    "explanation": "反比例の式は y = a/x と表せます。x = 5, y = 5 を代入すると 5 = a/5 となり、a = 25。よって y=25/x です。反比例では x × y の値（=a）がいつも一定になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-002",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式",
      "代入"
    ],
    "question": "y = 48/x のとき、x = 8 のときの y の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "6"
    ],
    "explanation": "式に x = 8 を代入します。y = 48 ÷ 8 = 6 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hanpirei-003",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式",
      "逆算"
    ],
    "question": "y = 36/x のとき、y = 4 になる x の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "9"
    ],
    "explanation": "式に y = 4 を代入すると 4 = 36/x となるので、x = 36 ÷ 4 = 9 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-004",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の見分け方"
    ],
    "question": "次の表は、y が x に反比例していますか。\nx: 1, 2, 4\ny: 23, 21, 17",
    "answerType": "choice",
    "choices": [
      "反比例している",
      "反比例していない"
    ],
    "correctAnswers": [
      "反比例していない"
    ],
    "explanation": "x と y の積を計算すると一定になりません（反比例ならつねに同じ値になるはずです）。よってこの表は反比例の関係ではありません。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-005",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例",
      "文章題"
    ],
    "question": "面積が 24 cm² で一定の長方形があります。縦の長さが x cm、横の長さが y cm のとき、縦が 4 cm なら横は何cmですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "6"
    ],
    "explanation": "縦 × 横 = 面積 なので、x × y = 24 という反比例の関係です。縦が4cmのとき、横は 24 ÷ 4 = 6 cm です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-006",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式"
    ],
    "question": "y は x に反比例し、x = 11 のとき y = 2 です。y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=22/x"
    ],
    "explanation": "反比例の式は y = a/x と表せます。x = 11, y = 2 を代入すると 2 = a/11 となり、a = 22。よって y=22/x です。反比例では x × y の値（=a）がいつも一定になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-007",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式",
      "代入"
    ],
    "question": "y = 12/x のとき、x = 2 のときの y の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "6"
    ],
    "explanation": "式に x = 2 を代入します。y = 12 ÷ 2 = 6 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hanpirei-008",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式",
      "逆算"
    ],
    "question": "y = 10/x のとき、y = 2 になる x の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "5"
    ],
    "explanation": "式に y = 2 を代入すると 2 = 10/x となるので、x = 10 ÷ 2 = 5 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-009",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の見分け方"
    ],
    "question": "次の表は、y が x に反比例していますか。\nx: 1, 2, 4\ny: 5, 3, -1",
    "answerType": "choice",
    "choices": [
      "反比例している",
      "反比例していない"
    ],
    "correctAnswers": [
      "反比例していない"
    ],
    "explanation": "x と y の積を計算すると一定になりません（反比例ならつねに同じ値になるはずです）。よってこの表は反比例の関係ではありません。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-010",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例",
      "文章題"
    ],
    "question": "面積が 10 cm² で一定の長方形があります。縦の長さが x cm、横の長さが y cm のとき、縦が 2 cm なら横は何cmですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "5"
    ],
    "explanation": "縦 × 横 = 面積 なので、x × y = 10 という反比例の関係です。縦が2cmのとき、横は 10 ÷ 2 = 5 cm です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-011",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式"
    ],
    "question": "y は x に反比例し、x = 6 のとき y = 3 です。y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=18/x"
    ],
    "explanation": "反比例の式は y = a/x と表せます。x = 6, y = 3 を代入すると 3 = a/6 となり、a = 18。よって y=18/x です。反比例では x × y の値（=a）がいつも一定になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-012",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式",
      "代入"
    ],
    "question": "y = 18/x のとき、x = 3 のときの y の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "6"
    ],
    "explanation": "式に x = 3 を代入します。y = 18 ÷ 3 = 6 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hanpirei-013",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式",
      "逆算"
    ],
    "question": "y = 42/x のとき、y = 7 になる x の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "6"
    ],
    "explanation": "式に y = 7 を代入すると 7 = 42/x となるので、x = 42 ÷ 7 = 6 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-014",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例",
      "文章題"
    ],
    "question": "面積が 21 cm² で一定の長方形があります。縦の長さが x cm、横の長さが y cm のとき、縦が 7 cm なら横は何cmですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "3"
    ],
    "explanation": "縦 × 横 = 面積 なので、x × y = 21 という反比例の関係です。縦が7cmのとき、横は 21 ÷ 7 = 3 cm です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-015",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式"
    ],
    "question": "y は x に反比例し、x = 10 のとき y = 5 です。y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=50/x"
    ],
    "explanation": "反比例の式は y = a/x と表せます。x = 10, y = 5 を代入すると 5 = a/10 となり、a = 50。よって y=50/x です。反比例では x × y の値（=a）がいつも一定になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-016",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式",
      "代入"
    ],
    "question": "y = 36/x のとき、x = 9 のときの y の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "4"
    ],
    "explanation": "式に x = 9 を代入します。y = 36 ÷ 9 = 4 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hanpirei-017",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式",
      "逆算"
    ],
    "question": "y = 9/x のとき、y = 1 になる x の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "9"
    ],
    "explanation": "式に y = 1 を代入すると 1 = 9/x となるので、x = 9 ÷ 1 = 9 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-018",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の見分け方"
    ],
    "question": "次の表は、y が x に反比例していますか。\nx: 1, 2, 4\ny: 8, 4, 2",
    "answerType": "choice",
    "choices": [
      "反比例している",
      "反比例していない"
    ],
    "correctAnswers": [
      "反比例している"
    ],
    "explanation": "x と y の積（x × y）を計算すると、どれも 8 で一定になっています。これは反比例の関係です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-019",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例",
      "文章題"
    ],
    "question": "面積が 44 cm² で一定の長方形があります。縦の長さが x cm、横の長さが y cm のとき、縦が 4 cm なら横は何cmですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "11"
    ],
    "explanation": "縦 × 横 = 面積 なので、x × y = 44 という反比例の関係です。縦が4cmのとき、横は 44 ÷ 4 = 11 cm です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-020",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式"
    ],
    "question": "y は x に反比例し、x = 12 のとき y = 6 です。y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=72/x"
    ],
    "explanation": "反比例の式は y = a/x と表せます。x = 12, y = 6 を代入すると 6 = a/12 となり、a = 72。よって y=72/x です。反比例では x × y の値（=a）がいつも一定になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-021",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式",
      "代入"
    ],
    "question": "y = 18/x のとき、x = 2 のときの y の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "9"
    ],
    "explanation": "式に x = 2 を代入します。y = 18 ÷ 2 = 9 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hanpirei-022",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式",
      "逆算"
    ],
    "question": "y = 16/x のとき、y = 4 になる x の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "4"
    ],
    "explanation": "式に y = 4 を代入すると 4 = 16/x となるので、x = 16 ÷ 4 = 4 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-023",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例",
      "文章題"
    ],
    "question": "面積が 20 cm² で一定の長方形があります。縦の長さが x cm、横の長さが y cm のとき、縦が 4 cm なら横は何cmですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "5"
    ],
    "explanation": "縦 × 横 = 面積 なので、x × y = 20 という反比例の関係です。縦が4cmのとき、横は 20 ÷ 4 = 5 cm です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-024",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式"
    ],
    "question": "y は x に反比例し、x = 1 のとき y = 3 です。y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=3/x"
    ],
    "explanation": "反比例の式は y = a/x と表せます。x = 1, y = 3 を代入すると 3 = a/1 となり、a = 3。よって y=3/x です。反比例では x × y の値（=a）がいつも一定になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-025",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式",
      "代入"
    ],
    "question": "y = 45/x のとき、x = 5 のときの y の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "9"
    ],
    "explanation": "式に x = 5 を代入します。y = 45 ÷ 5 = 9 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hanpirei-026",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式",
      "逆算"
    ],
    "question": "y = 25/x のとき、y = 5 になる x の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "5"
    ],
    "explanation": "式に y = 5 を代入すると 5 = 25/x となるので、x = 25 ÷ 5 = 5 です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-027",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例",
      "文章題"
    ],
    "question": "面積が 48 cm² で一定の長方形があります。縦の長さが x cm、横の長さが y cm のとき、縦が 8 cm なら横は何cmですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "6"
    ],
    "explanation": "縦 × 横 = 面積 なので、x × y = 48 という反比例の関係です。縦が8cmのとき、横は 48 ÷ 8 = 6 cm です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-028",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式"
    ],
    "question": "y は x に反比例し、x = 3 のとき y = 4 です。y を x の式で表しなさい。",
    "answerType": "text",
    "correctAnswers": [
      "y=12/x"
    ],
    "explanation": "反比例の式は y = a/x と表せます。x = 3, y = 4 を代入すると 4 = a/3 となり、a = 12。よって y=12/x です。反比例では x × y の値（=a）がいつも一定になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-hanpirei-029",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の式",
      "代入"
    ],
    "question": "y = 3/x のとき、x = 3 のときの y の値を求めなさい。",
    "answerType": "text",
    "correctAnswers": [
      "1"
    ],
    "explanation": "式に x = 3 を代入します。y = 3 ÷ 3 = 1 です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-hanpirei-030",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "hanpirei",
      "name": "反比例"
    },
    "tags": [
      "反比例の見分け方"
    ],
    "question": "次の表は、y が x に反比例していますか。\nx: 1, 2, 4\ny: 43, 41, 37",
    "answerType": "choice",
    "choices": [
      "反比例している",
      "反比例していない"
    ],
    "correctAnswers": [
      "反比例していない"
    ],
    "explanation": "x と y の積を計算すると一定になりません（反比例ならつねに同じ値になるはずです）。よってこの表は反比例の関係ではありません。",
    "difficulty": 2
  },
  {
    "id": "math-g1-heimenzukei-001",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "対頂角"
    ],
    "question": "2つの直線が交わってできる角のうち、1つの角が136°のとき、その対頂角の大きさを答えなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "136",
      "136°",
      "136度"
    ],
    "explanation": "対頂角（向かい合う角）は、いつでも等しくなります。したがって136°の対頂角も136°です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-heimenzukei-002",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "平行線と角",
      "同位角"
    ],
    "question": "2直線が平行であるとき、∠a = 119° です。∠aの同位角の関係にある角の大きさを求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "119",
      "119°",
      "119度"
    ],
    "explanation": "2直線が平行なとき、同位角は等しくなります。したがって求める角も 119° です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-heimenzukei-003",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "角の性質"
    ],
    "question": "一直線上にある角で、隣り合う∠aと∠bの和は180°です。∠a = 46° のとき、∠bの大きさを求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "134"
    ],
    "explanation": "一直線上にできる隣り合う角の和は180°です（これを平角といいます）。∠b = 180° − 46° = 134° です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-heimenzukei-004",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "円周"
    ],
    "question": "半径 6cm の円の円周の長さを選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "18π cm",
      "12π cm",
      "6π cm",
      "24π cm"
    ],
    "correctAnswers": [
      "12π cm"
    ],
    "explanation": "円周の長さは「直径 × 円周率」または「2 × 半径 × 円周率」で求めます。2 × 6 × π = 12π cm です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-heimenzukei-005",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "円の面積"
    ],
    "question": "半径 5cm の円の面積を選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "30π cm²",
      "35π cm²",
      "25π cm²",
      "20π cm²"
    ],
    "correctAnswers": [
      "25π cm²"
    ],
    "explanation": "円の面積は「半径 × 半径 × 円周率」で求めます。5 × 5 × π = 25π cm² です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-heimenzukei-006",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "作図",
      "垂直二等分線"
    ],
    "question": "線分ABの垂直二等分線上にある点について、いつでも正しくいえることを選びなさい。",
    "answerType": "choice",
    "choices": [
      "点Aと点Bから等しい距離にある",
      "点Aに点Bより近い",
      "線分AB上にある",
      "点Aからの距離がいつも同じ値になる"
    ],
    "correctAnswers": [
      "点Aと点Bから等しい距離にある"
    ],
    "explanation": "垂直二等分線は「線分の真ん中を垂直に通る直線」で、その上のどの点をとっても、両はしの点A・Bからの距離が等しくなります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-heimenzukei-007",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "図形の移動"
    ],
    "question": "「回転移動」の説明として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "ある直線を折り目として、図形を折り返して移す移動",
      "ある点を中心として、図形を一定の角度だけまわして移す移動",
      "図形を、形も向きも変えずに一定の方向に一定の距離だけずらして移す移動"
    ],
    "correctAnswers": [
      "ある点を中心として、図形を一定の角度だけまわして移す移動"
    ],
    "explanation": "回転移動は「ある点を中心として、図形を一定の角度だけまわして移す移動」のことです。図形の移動には、平行移動・対称移動・回転移動の3種類があります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-heimenzukei-008",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "対頂角"
    ],
    "question": "2つの直線が交わってできる角のうち、1つの角が131°のとき、その対頂角の大きさを答えなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "131",
      "131°",
      "131度"
    ],
    "explanation": "対頂角（向かい合う角）は、いつでも等しくなります。したがって131°の対頂角も131°です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-heimenzukei-009",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "平行線と角",
      "同位角"
    ],
    "question": "2直線が平行であるとき、∠a = 138° です。∠aの同位角の関係にある角の大きさを求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "138",
      "138°",
      "138度"
    ],
    "explanation": "2直線が平行なとき、同位角は等しくなります。したがって求める角も 138° です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-heimenzukei-010",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "角の性質"
    ],
    "question": "一直線上にある角で、隣り合う∠aと∠bの和は180°です。∠a = 23° のとき、∠bの大きさを求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "157"
    ],
    "explanation": "一直線上にできる隣り合う角の和は180°です（これを平角といいます）。∠b = 180° − 23° = 157° です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-heimenzukei-011",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "円周"
    ],
    "question": "半径 12cm の円の円周の長さを選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "48π cm",
      "12π cm",
      "24π cm",
      "36π cm"
    ],
    "correctAnswers": [
      "24π cm"
    ],
    "explanation": "円周の長さは「直径 × 円周率」または「2 × 半径 × 円周率」で求めます。2 × 12 × π = 24π cm です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-heimenzukei-012",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "円の面積"
    ],
    "question": "半径 4cm の円の面積を選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "20π cm²",
      "12π cm²",
      "16π cm²",
      "24π cm²"
    ],
    "correctAnswers": [
      "16π cm²"
    ],
    "explanation": "円の面積は「半径 × 半径 × 円周率」で求めます。4 × 4 × π = 16π cm² です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-heimenzukei-013",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "おうぎ形",
      "面積"
    ],
    "question": "半径 6cm、中心角 30° のおうぎ形の面積を選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "5π cm²",
      "2π cm²",
      "3π cm²",
      "6π cm²"
    ],
    "correctAnswers": [
      "3π cm²"
    ],
    "explanation": "おうぎ形の面積は「円の面積 × 中心角/360°」で求めます。円の面積は π × 6² = 36π cm²。中心角30°は円全体の 30/360 なので、36π × 30/360 = 3π cm² です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-heimenzukei-014",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "図形の移動"
    ],
    "question": "「対称移動」の説明として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "図形を、形も向きも変えずに一定の方向に一定の距離だけずらして移す移動",
      "ある直線を折り目として、図形を折り返して移す移動",
      "ある点を中心として、図形を一定の角度だけまわして移す移動"
    ],
    "correctAnswers": [
      "ある直線を折り目として、図形を折り返して移す移動"
    ],
    "explanation": "対称移動は「ある直線を折り目として、図形を折り返して移す移動」のことです。図形の移動には、平行移動・対称移動・回転移動の3種類があります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-heimenzukei-015",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "対頂角"
    ],
    "question": "2つの直線が交わってできる角のうち、1つの角が66°のとき、その対頂角の大きさを答えなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "66",
      "66°",
      "66度"
    ],
    "explanation": "対頂角（向かい合う角）は、いつでも等しくなります。したがって66°の対頂角も66°です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-heimenzukei-016",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "平行線と角",
      "錯角"
    ],
    "question": "2直線が平行であるとき、∠a = 51° です。∠aの錯角の関係にある角の大きさを求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "51",
      "51°",
      "51度"
    ],
    "explanation": "2直線が平行なとき、錯角は等しくなります。したがって求める角も 51° です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-heimenzukei-017",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "角の性質"
    ],
    "question": "一直線上にある角で、隣り合う∠aと∠bの和は180°です。∠a = 141° のとき、∠bの大きさを求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "39"
    ],
    "explanation": "一直線上にできる隣り合う角の和は180°です（これを平角といいます）。∠b = 180° − 141° = 39° です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-heimenzukei-018",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "円周"
    ],
    "question": "半径 9cm の円の円周の長さを選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "27π cm",
      "18π cm",
      "9π cm",
      "36π cm"
    ],
    "correctAnswers": [
      "18π cm"
    ],
    "explanation": "円周の長さは「直径 × 円周率」または「2 × 半径 × 円周率」で求めます。2 × 9 × π = 18π cm です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-heimenzukei-019",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "円の面積"
    ],
    "question": "半径 2cm の円の面積を選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "8π cm²",
      "6π cm²",
      "4π cm²",
      "2π cm²"
    ],
    "correctAnswers": [
      "4π cm²"
    ],
    "explanation": "円の面積は「半径 × 半径 × 円周率」で求めます。2 × 2 × π = 4π cm² です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-heimenzukei-020",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "おうぎ形",
      "弧の長さ"
    ],
    "question": "半径 3cm、中心角 120° のおうぎ形の弧の長さを選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "3π cm",
      "2π cm",
      "4π cm",
      "π cm"
    ],
    "correctAnswers": [
      "2π cm"
    ],
    "explanation": "おうぎ形の弧の長さは「円周 × 中心角/360°」で求めます。円周は 2π × 3 = 6π cm。中心角120°は円全体の 120/360 なので、6π × 120/360 = 2π cm です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-heimenzukei-021",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "おうぎ形",
      "面積"
    ],
    "question": "半径 6cm、中心角 180° のおうぎ形の面積を選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "36π cm²",
      "12π cm²",
      "18π cm²",
      "27π cm²"
    ],
    "correctAnswers": [
      "18π cm²"
    ],
    "explanation": "おうぎ形の面積は「円の面積 × 中心角/360°」で求めます。円の面積は π × 6² = 36π cm²。中心角180°は円全体の 180/360 なので、36π × 180/360 = 18π cm² です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-heimenzukei-022",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "作図",
      "角の二等分線"
    ],
    "question": "角の二等分線上にある点について、いつでも正しくいえることを選びなさい。",
    "answerType": "choice",
    "choices": [
      "角をつくる2辺までの距離が等しい",
      "角の頂点からの距離がいつも同じ値になる",
      "2辺のどちらか一方にだけ近づく",
      "角の外側にある"
    ],
    "correctAnswers": [
      "角をつくる2辺までの距離が等しい"
    ],
    "explanation": "角の二等分線は、角を半分に分ける直線で、その上のどの点をとっても、角をつくる2辺までの距離（垂線の長さ）が等しくなります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-heimenzukei-023",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "図形の移動"
    ],
    "question": "「平行移動」の説明として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "図形を、形も向きも変えずに一定の方向に一定の距離だけずらして移す移動",
      "ある点を中心として、図形を一定の角度だけまわして移す移動",
      "ある直線を折り目として、図形を折り返して移す移動"
    ],
    "correctAnswers": [
      "図形を、形も向きも変えずに一定の方向に一定の距離だけずらして移す移動"
    ],
    "explanation": "平行移動は「図形を、形も向きも変えずに一定の方向に一定の距離だけずらして移す移動」のことです。図形の移動には、平行移動・対称移動・回転移動の3種類があります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-heimenzukei-024",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "対頂角"
    ],
    "question": "2つの直線が交わってできる角のうち、1つの角が129°のとき、その対頂角の大きさを答えなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "129",
      "129°",
      "129度"
    ],
    "explanation": "対頂角（向かい合う角）は、いつでも等しくなります。したがって129°の対頂角も129°です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-heimenzukei-025",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "平行線と角",
      "同位角"
    ],
    "question": "2直線が平行であるとき、∠a = 30° です。∠aの同位角の関係にある角の大きさを求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "30",
      "30°",
      "30度"
    ],
    "explanation": "2直線が平行なとき、同位角は等しくなります。したがって求める角も 30° です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-heimenzukei-026",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "角の性質"
    ],
    "question": "一直線上にある角で、隣り合う∠aと∠bの和は180°です。∠a = 108° のとき、∠bの大きさを求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "72"
    ],
    "explanation": "一直線上にできる隣り合う角の和は180°です（これを平角といいます）。∠b = 180° − 108° = 72° です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-heimenzukei-027",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "円周"
    ],
    "question": "半径 3cm の円の円周の長さを選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "9π cm",
      "12π cm",
      "6π cm",
      "3π cm"
    ],
    "correctAnswers": [
      "6π cm"
    ],
    "explanation": "円周の長さは「直径 × 円周率」または「2 × 半径 × 円周率」で求めます。2 × 3 × π = 6π cm です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-heimenzukei-028",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "おうぎ形",
      "弧の長さ"
    ],
    "question": "半径 6cm、中心角 240° のおうぎ形の弧の長さを選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "8π cm",
      "16π cm",
      "5π cm",
      "12π cm"
    ],
    "correctAnswers": [
      "8π cm"
    ],
    "explanation": "おうぎ形の弧の長さは「円周 × 中心角/360°」で求めます。円周は 2π × 6 = 12π cm。中心角240°は円全体の 240/360 なので、12π × 240/360 = 8π cm です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-heimenzukei-029",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "おうぎ形",
      "面積"
    ],
    "question": "半径 6cm、中心角 60° のおうぎ形の面積を選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "6π cm²",
      "9π cm²",
      "12π cm²",
      "4π cm²"
    ],
    "correctAnswers": [
      "6π cm²"
    ],
    "explanation": "おうぎ形の面積は「円の面積 × 中心角/360°」で求めます。円の面積は π × 6² = 36π cm²。中心角60°は円全体の 60/360 なので、36π × 60/360 = 6π cm² です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-heimenzukei-030",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "heimenzukei",
      "name": "平面図形"
    },
    "tags": [
      "対頂角"
    ],
    "question": "2つの直線が交わってできる角のうち、1つの角が93°のとき、その対頂角の大きさを答えなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "93",
      "93°",
      "93度"
    ],
    "explanation": "対頂角（向かい合う角）は、いつでも等しくなります。したがって93°の対頂角も93°です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kuukanzukei-001",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "展開図",
      "角柱"
    ],
    "question": "三角柱の展開図には、側面の長方形がいくつ必要ですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "3"
    ],
    "explanation": "角柱の側面の数は、底面の辺の数と同じになります。三角柱の底面は3角形なので、側面の長方形は3枚必要です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kuukanzukei-002",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "展開図",
      "角錐"
    ],
    "question": "四角錐の展開図には、側面の三角形がいくつ必要ですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "4"
    ],
    "explanation": "角錐の側面の数は、底面の辺の数と同じになります。四角錐の底面は4角形なので、側面の三角形は4枚必要です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kuukanzukei-003",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "直線の位置関係"
    ],
    "question": "次の説明に当てはまる位置関係の名前を答えなさい。「2つの直線が平行でなく、また交わることもない。」",
    "answerType": "text",
    "correctAnswers": [
      "ねじれの位置"
    ],
    "explanation": "空間内の2直線の位置関係には「平行」「交わる」「ねじれの位置」の3種類があります。平行でも交わりもしない関係を「ねじれの位置」といいます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-004",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "正多面体"
    ],
    "question": "正四面体の辺の数はいくつですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "6"
    ],
    "explanation": "正多面体は5種類しかなく、それぞれの面・頂点・辺の数が決まっています。正四面体の辺の数は6です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-005",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "直線と平面の垂直"
    ],
    "question": "直線ℓが平面Pに垂直であるとき、直線ℓと平面P上のすべての直線との関係として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "平面P上のすべての直線と垂直に交わる",
      "平面P上のすべての直線と平行になる",
      "平面P上のある直線とだけ垂直になる",
      "平面Pとは交わらない"
    ],
    "correctAnswers": [
      "平面P上のすべての直線と垂直に交わる"
    ],
    "explanation": "直線が平面に垂直であるとは、その直線が平面上のすべての直線と垂直に交わることをいいます。",
    "difficulty": 3
  },
  {
    "id": "math-g1-kuukanzukei-006",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "面の位置関係"
    ],
    "question": "立方体において、1つの面に垂直な面はいくつありますか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "4"
    ],
    "explanation": "立方体の1つの面に対して、向かい合う面以外の4つの面はすべて垂直になっています。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-007",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "回転体"
    ],
    "question": "半円を、直径を軸として1回転させてできる立体を選びなさい。",
    "answerType": "choice",
    "choices": [
      "円柱",
      "球",
      "直方体",
      "円錐"
    ],
    "correctAnswers": [
      "球"
    ],
    "explanation": "半円を直径を軸に1回転させると「回転体」ができ、この場合は球になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-008",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "投影図"
    ],
    "question": "球の投影図で、平面図（真上から見た図）の形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "三角形",
      "正方形",
      "円",
      "長方形"
    ],
    "correctAnswers": [
      "円"
    ],
    "explanation": "投影図は、立体を真上や正面などから見たときの形を表したものです。球を真上から見ると「円」に見えます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-009",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "展開図",
      "角錐"
    ],
    "question": "三角錐の展開図には、側面の三角形がいくつ必要ですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "3"
    ],
    "explanation": "角錐の側面の数は、底面の辺の数と同じになります。三角錐の底面は3角形なので、側面の三角形は3枚必要です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kuukanzukei-010",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "正多面体"
    ],
    "question": "正十二面体の面の数はいくつですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "12"
    ],
    "explanation": "正多面体は5種類しかなく、それぞれの面・頂点・辺の数が決まっています。正十二面体の面の数は12です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-011",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "面の位置関係"
    ],
    "question": "立方体において、1つの面に平行な面はいくつありますか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "1"
    ],
    "explanation": "立方体には6つの面があり、1つの面に平行なのは向かい合う面（1つ）だけです。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-012",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "投影図"
    ],
    "question": "円柱の投影図で、平面図（真上から見た図）の形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "円",
      "長方形",
      "正方形",
      "三角形"
    ],
    "correctAnswers": [
      "円"
    ],
    "explanation": "投影図は、立体を真上や正面などから見たときの形を表したものです。円柱を真上から見ると「円」に見えます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-013",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "展開図",
      "角柱"
    ],
    "question": "六角柱の展開図には、側面の長方形がいくつ必要ですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "6"
    ],
    "explanation": "角柱の側面の数は、底面の辺の数と同じになります。六角柱の底面は6角形なので、側面の長方形は6枚必要です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kuukanzukei-014",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "展開図",
      "角錐"
    ],
    "question": "六角錐の展開図には、側面の三角形がいくつ必要ですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "6"
    ],
    "explanation": "角錐の側面の数は、底面の辺の数と同じになります。六角錐の底面は6角形なので、側面の三角形は6枚必要です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kuukanzukei-015",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "直線の位置関係"
    ],
    "question": "空間内で、2つの直線が平行でもなく、交わりもしない位置関係を何といいますか。",
    "answerType": "text",
    "correctAnswers": [
      "ねじれの位置"
    ],
    "explanation": "空間内の2直線の位置関係には「平行」「交わる」「ねじれの位置」の3種類があります。平行でも交わりもしない関係を「ねじれの位置」といいます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-016",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "正多面体"
    ],
    "question": "正八面体の頂点の数はいくつですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "6"
    ],
    "explanation": "正多面体は5種類しかなく、それぞれの面・頂点・辺の数が決まっています。正八面体の頂点の数は6です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-017",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "回転体"
    ],
    "question": "直角三角形を、直角をはさむ1辺を軸として1回転させてできる立体を選びなさい。",
    "answerType": "choice",
    "choices": [
      "直方体",
      "円柱",
      "円錐",
      "球"
    ],
    "correctAnswers": [
      "円錐"
    ],
    "explanation": "直角三角形を直角をはさむ1辺を軸に1回転させると「回転体」ができ、この場合は円錐になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-018",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "投影図"
    ],
    "question": "円柱の投影図で、立面図（正面から見た図）の形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "正方形",
      "円",
      "三角形",
      "長方形"
    ],
    "correctAnswers": [
      "長方形"
    ],
    "explanation": "投影図は、立体を真上や正面などから見たときの形を表したものです。円柱を正面から見ると「長方形」に見えます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-019",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "展開図",
      "角柱"
    ],
    "question": "五角柱の展開図には、側面の長方形がいくつ必要ですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "5"
    ],
    "explanation": "角柱の側面の数は、底面の辺の数と同じになります。五角柱の底面は5角形なので、側面の長方形は5枚必要です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kuukanzukei-020",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "正多面体"
    ],
    "question": "正六面体（立方体）の頂点の数はいくつですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "8"
    ],
    "explanation": "正多面体は5種類しかなく、それぞれの面・頂点・辺の数が決まっています。正六面体（立方体）の頂点の数は8です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-021",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "投影図"
    ],
    "question": "円錐の投影図で、平面図（真上から見た図）の形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "正方形",
      "長方形",
      "三角形",
      "円"
    ],
    "correctAnswers": [
      "円"
    ],
    "explanation": "投影図は、立体を真上や正面などから見たときの形を表したものです。円錐を真上から見ると「円」に見えます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-022",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "正多面体"
    ],
    "question": "正四面体の頂点の数はいくつですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "4"
    ],
    "explanation": "正多面体は5種類しかなく、それぞれの面・頂点・辺の数が決まっています。正四面体の頂点の数は4です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-023",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "投影図"
    ],
    "question": "直方体の投影図で、立面図（正面から見た図）の形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "長方形",
      "三角形",
      "円",
      "正方形"
    ],
    "correctAnswers": [
      "長方形"
    ],
    "explanation": "投影図は、立体を真上や正面などから見たときの形を表したものです。直方体を正面から見ると「長方形」に見えます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-024",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "展開図",
      "角錐"
    ],
    "question": "五角錐の展開図には、側面の三角形がいくつ必要ですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "5"
    ],
    "explanation": "角錐の側面の数は、底面の辺の数と同じになります。五角錐の底面は5角形なので、側面の三角形は5枚必要です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-kuukanzukei-025",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "正多面体"
    ],
    "question": "正二十面体の面の数はいくつですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "20"
    ],
    "explanation": "正多面体は5種類しかなく、それぞれの面・頂点・辺の数が決まっています。正二十面体の面の数は20です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-026",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "正多面体"
    ],
    "question": "正二十面体の頂点の数はいくつですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "12"
    ],
    "explanation": "正多面体は5種類しかなく、それぞれの面・頂点・辺の数が決まっています。正二十面体の頂点の数は12です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-027",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "正多面体"
    ],
    "question": "正十二面体の頂点の数はいくつですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "20"
    ],
    "explanation": "正多面体は5種類しかなく、それぞれの面・頂点・辺の数が決まっています。正十二面体の頂点の数は20です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-028",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "投影図"
    ],
    "question": "球の投影図で、立面図（正面から見た図）の形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "正方形",
      "三角形",
      "円",
      "長方形"
    ],
    "correctAnswers": [
      "円"
    ],
    "explanation": "投影図は、立体を真上や正面などから見たときの形を表したものです。球を正面から見ると「円」に見えます。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-029",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "回転体"
    ],
    "question": "長方形を、1辺を軸として1回転させてできる立体を選びなさい。",
    "answerType": "choice",
    "choices": [
      "直方体",
      "球",
      "円錐",
      "円柱"
    ],
    "correctAnswers": [
      "円柱"
    ],
    "explanation": "長方形を1辺を軸に1回転させると「回転体」ができ、この場合は円柱になります。",
    "difficulty": 2
  },
  {
    "id": "math-g1-kuukanzukei-030",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "kuukanzukei",
      "name": "空間図形"
    },
    "tags": [
      "正多面体"
    ],
    "question": "正六面体（立方体）の辺の数はいくつですか。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "12"
    ],
    "explanation": "正多面体は5種類しかなく、それぞれの面・頂点・辺の数が決まっています。正六面体（立方体）の辺の数は12です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-taisekihyoumenseki-001",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "柱体の体積"
    ],
    "question": "底面積 17cm²、高さ 10cm の角柱の体積を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "170",
      "170cm3",
      "170cm³"
    ],
    "explanation": "角柱・円柱の体積は「底面積 × 高さ」で求めます。17 × 10 = 170 cm³ です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-taisekihyoumenseki-002",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "円柱の体積"
    ],
    "question": "底面の半径 2cm、高さ 7cm の円柱の体積を選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "14π cm³",
      "42π cm³",
      "56π cm³",
      "28π cm³"
    ],
    "correctAnswers": [
      "28π cm³"
    ],
    "explanation": "円柱の体積は「底面積 × 高さ」です。底面積は π × 2² = 4π cm²、高さは7cmなので、4π × 7 = 28π cm³ です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-taisekihyoumenseki-003",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "すい体の体積"
    ],
    "question": "底面積 9cm²、高さ 3cm の四角錐の体積を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "9",
      "9cm3",
      "9cm³"
    ],
    "explanation": "角錐・円錐の体積は「底面積 × 高さ × 1/3」です。9 × 3 × 1/3 = 9 cm³ となります。同じ底面積・高さの角柱の体積の1/3になるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "math-g1-taisekihyoumenseki-004",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "円錐の体積"
    ],
    "question": "底面の半径 6cm、高さ 4cm の円錐の体積を選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "48π cm³",
      "96π cm³",
      "72π cm³",
      "32π cm³"
    ],
    "correctAnswers": [
      "48π cm³"
    ],
    "explanation": "円錐の体積は「底面積 × 高さ × 1/3」です。底面積は π × 6² = 36π cm²。36π × 4 × 1/3 = 48π cm³ です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-taisekihyoumenseki-005",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "球の体積"
    ],
    "question": "半径 3cm の球の体積を選びなさい。（円周率はπ、公式「4/3 × π × 半径³」を使ってよい）",
    "answerType": "choice",
    "choices": [
      "36π cm³",
      "54π cm³",
      "27π cm³",
      "72π cm³"
    ],
    "correctAnswers": [
      "36π cm³"
    ],
    "explanation": "球の体積は「4/3 × π × 半径³」の公式で求めます。4/3 × π × 3³ = 4/3 × π × 27 = 36π cm³ です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-taisekihyoumenseki-006",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "立方体の表面積"
    ],
    "question": "1辺が 3cm の立方体の表面積を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "54",
      "54cm2",
      "54cm²"
    ],
    "explanation": "立方体の表面積は、合同な正方形の面が6つ分です。1つの面の面積は 3 × 3 = 9 cm²、6面分なので 9 × 6 = 54 cm² です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-taisekihyoumenseki-007",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "直方体の表面積"
    ],
    "question": "縦3cm、横10cm、高さ6cm の直方体の表面積を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "216",
      "216cm2",
      "216cm²"
    ],
    "explanation": "直方体の表面積は、3種類の合同な長方形が2面ずつです。(縦×横 + 横×高さ + 高さ×縦) × 2 で求められます。(3×10 + 10×6 + 6×3) × 2 = (30+60+18) × 2 = 216 cm² です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-taisekihyoumenseki-008",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "円柱の表面積"
    ],
    "question": "底面の半径 3cm、高さ 11cm の円柱の表面積を選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "81π cm²",
      "84π cm²",
      "90π cm²",
      "87π cm²"
    ],
    "correctAnswers": [
      "84π cm²"
    ],
    "explanation": "円柱の表面積は「底面2つ分の面積 + 側面積」です。底面2つ分は 2 × π × 3² = 18π cm²、側面積は（底面の円周）×高さ = 2π×3×11 = 66π cm²。合わせると 84π cm² です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-taisekihyoumenseki-009",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "円錐の側面積"
    ],
    "question": "底面の半径 2cm、母線の長さ 7cm の円錐の側面積を選びなさい。（円周率はπ、公式「π × 半径 × 母線」を使ってよい）",
    "answerType": "choice",
    "choices": [
      "12π cm²",
      "16π cm²",
      "21π cm²",
      "14π cm²"
    ],
    "correctAnswers": [
      "14π cm²"
    ],
    "explanation": "円錐の側面積は「π × 半径 × 母線の長さ」で求められます。π × 2 × 7 = 14π cm² です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-taisekihyoumenseki-010",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "角錐の表面積"
    ],
    "question": "1辺5cmの正方形を底面とし、側面が1つ7cm²の合同な三角形4枚でできている正四角錐の表面積を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "53",
      "53cm2",
      "53cm²"
    ],
    "explanation": "表面積は「底面積 + 側面積の合計」です。底面積は 5 × 5 = 25 cm²、側面積の合計は 7 × 4 = 28 cm²。合わせると 25 + 28 = 53 cm² です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-taisekihyoumenseki-011",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "柱体の体積"
    ],
    "question": "底面積 40cm²、高さ 6cm の角柱の体積を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "240",
      "240cm3",
      "240cm³"
    ],
    "explanation": "角柱・円柱の体積は「底面積 × 高さ」で求めます。40 × 6 = 240 cm³ です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-taisekihyoumenseki-012",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "円柱の体積"
    ],
    "question": "底面の半径 4cm、高さ 5cm の円柱の体積を選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "100π cm³",
      "80π cm³",
      "60π cm³",
      "160π cm³"
    ],
    "correctAnswers": [
      "80π cm³"
    ],
    "explanation": "円柱の体積は「底面積 × 高さ」です。底面積は π × 4² = 16π cm²、高さは5cmなので、16π × 5 = 80π cm³ です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-taisekihyoumenseki-013",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "すい体の体積"
    ],
    "question": "底面積 27cm²、高さ 10cm の四角錐の体積を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "90",
      "90cm3",
      "90cm³"
    ],
    "explanation": "角錐・円錐の体積は「底面積 × 高さ × 1/3」です。27 × 10 × 1/3 = 90 cm³ となります。同じ底面積・高さの角柱の体積の1/3になるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "math-g1-taisekihyoumenseki-014",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "円錐の体積"
    ],
    "question": "底面の半径 6cm、高さ 12cm の円錐の体積を選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "216π cm³",
      "288π cm³",
      "144π cm³",
      "96π cm³"
    ],
    "correctAnswers": [
      "144π cm³"
    ],
    "explanation": "円錐の体積は「底面積 × 高さ × 1/3」です。底面積は π × 6² = 36π cm²。36π × 12 × 1/3 = 144π cm³ です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-taisekihyoumenseki-015",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "立方体の表面積"
    ],
    "question": "1辺が 8cm の立方体の表面積を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "384",
      "384cm2",
      "384cm²"
    ],
    "explanation": "立方体の表面積は、合同な正方形の面が6つ分です。1つの面の面積は 8 × 8 = 64 cm²、6面分なので 64 × 6 = 384 cm² です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-taisekihyoumenseki-016",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "直方体の表面積"
    ],
    "question": "縦9cm、横6cm、高さ2cm の直方体の表面積を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "168",
      "168cm2",
      "168cm²"
    ],
    "explanation": "直方体の表面積は、3種類の合同な長方形が2面ずつです。(縦×横 + 横×高さ + 高さ×縦) × 2 で求められます。(9×6 + 6×2 + 2×9) × 2 = (54+12+18) × 2 = 168 cm² です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-taisekihyoumenseki-017",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "円柱の表面積"
    ],
    "question": "底面の半径 6cm、高さ 8cm の円柱の表面積を選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "174π cm²",
      "168π cm²",
      "162π cm²",
      "180π cm²"
    ],
    "correctAnswers": [
      "168π cm²"
    ],
    "explanation": "円柱の表面積は「底面2つ分の面積 + 側面積」です。底面2つ分は 2 × π × 6² = 72π cm²、側面積は（底面の円周）×高さ = 2π×6×8 = 96π cm²。合わせると 168π cm² です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-taisekihyoumenseki-018",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "円錐の側面積"
    ],
    "question": "底面の半径 3cm、母線の長さ 11cm の円錐の側面積を選びなさい。（円周率はπ、公式「π × 半径 × 母線」を使ってよい）",
    "answerType": "choice",
    "choices": [
      "44π cm²",
      "36π cm²",
      "33π cm²",
      "30π cm²"
    ],
    "correctAnswers": [
      "33π cm²"
    ],
    "explanation": "円錐の側面積は「π × 半径 × 母線の長さ」で求められます。π × 3 × 11 = 33π cm² です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-taisekihyoumenseki-019",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "角錐の表面積"
    ],
    "question": "1辺11cmの正方形を底面とし、側面が1つ22cm²の合同な三角形4枚でできている正四角錐の表面積を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "209",
      "209cm2",
      "209cm²"
    ],
    "explanation": "表面積は「底面積 + 側面積の合計」です。底面積は 11 × 11 = 121 cm²、側面積の合計は 22 × 4 = 88 cm²。合わせると 121 + 88 = 209 cm² です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-taisekihyoumenseki-020",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "柱体の体積"
    ],
    "question": "底面積 23cm²、高さ 3cm の角柱の体積を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "69",
      "69cm3",
      "69cm³"
    ],
    "explanation": "角柱・円柱の体積は「底面積 × 高さ」で求めます。23 × 3 = 69 cm³ です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-taisekihyoumenseki-021",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "円柱の体積"
    ],
    "question": "底面の半径 3cm、高さ 9cm の円柱の体積を選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "108π cm³",
      "162π cm³",
      "54π cm³",
      "81π cm³"
    ],
    "correctAnswers": [
      "81π cm³"
    ],
    "explanation": "円柱の体積は「底面積 × 高さ」です。底面積は π × 3² = 9π cm²、高さは9cmなので、9π × 9 = 81π cm³ です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-taisekihyoumenseki-022",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "すい体の体積"
    ],
    "question": "底面積 21cm²、高さ 8cm の四角錐の体積を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "56",
      "56cm3",
      "56cm³"
    ],
    "explanation": "角錐・円錐の体積は「底面積 × 高さ × 1/3」です。21 × 8 × 1/3 = 56 cm³ となります。同じ底面積・高さの角柱の体積の1/3になるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "math-g1-taisekihyoumenseki-023",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "円錐の体積"
    ],
    "question": "底面の半径 3cm、高さ 9cm の円錐の体積を選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "54π cm³",
      "27π cm³",
      "41π cm³",
      "18π cm³"
    ],
    "correctAnswers": [
      "27π cm³"
    ],
    "explanation": "円錐の体積は「底面積 × 高さ × 1/3」です。底面積は π × 3² = 9π cm²。9π × 9 × 1/3 = 27π cm³ です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-taisekihyoumenseki-024",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "球の体積"
    ],
    "question": "半径 9cm の球の体積を選びなさい。（円周率はπ、公式「4/3 × π × 半径³」を使ってよい）",
    "answerType": "choice",
    "choices": [
      "729π cm³",
      "972π cm³",
      "1944π cm³",
      "1458π cm³"
    ],
    "correctAnswers": [
      "972π cm³"
    ],
    "explanation": "球の体積は「4/3 × π × 半径³」の公式で求めます。4/3 × π × 9³ = 4/3 × π × 729 = 972π cm³ です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-taisekihyoumenseki-025",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "立方体の表面積"
    ],
    "question": "1辺が 11cm の立方体の表面積を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "726",
      "726cm2",
      "726cm²"
    ],
    "explanation": "立方体の表面積は、合同な正方形の面が6つ分です。1つの面の面積は 11 × 11 = 121 cm²、6面分なので 121 × 6 = 726 cm² です。",
    "difficulty": 1
  },
  {
    "id": "math-g1-taisekihyoumenseki-026",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "直方体の表面積"
    ],
    "question": "縦11cm、横7cm、高さ7cm の直方体の表面積を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "406",
      "406cm2",
      "406cm²"
    ],
    "explanation": "直方体の表面積は、3種類の合同な長方形が2面ずつです。(縦×横 + 横×高さ + 高さ×縦) × 2 で求められます。(11×7 + 7×7 + 7×11) × 2 = (77+49+77) × 2 = 406 cm² です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-taisekihyoumenseki-027",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "円柱の表面積"
    ],
    "question": "底面の半径 3cm、高さ 7cm の円柱の表面積を選びなさい。（円周率はπとする）",
    "answerType": "choice",
    "choices": [
      "57π cm²",
      "63π cm²",
      "60π cm²",
      "66π cm²"
    ],
    "correctAnswers": [
      "60π cm²"
    ],
    "explanation": "円柱の表面積は「底面2つ分の面積 + 側面積」です。底面2つ分は 2 × π × 3² = 18π cm²、側面積は（底面の円周）×高さ = 2π×3×7 = 42π cm²。合わせると 60π cm² です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-taisekihyoumenseki-028",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "円錐の側面積"
    ],
    "question": "底面の半径 2cm、母線の長さ 6cm の円錐の側面積を選びなさい。（円周率はπ、公式「π × 半径 × 母線」を使ってよい）",
    "answerType": "choice",
    "choices": [
      "12π cm²",
      "14π cm²",
      "18π cm²",
      "10π cm²"
    ],
    "correctAnswers": [
      "12π cm²"
    ],
    "explanation": "円錐の側面積は「π × 半径 × 母線の長さ」で求められます。π × 2 × 6 = 12π cm² です。",
    "difficulty": 3
  },
  {
    "id": "math-g1-taisekihyoumenseki-029",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "角錐の表面積"
    ],
    "question": "1辺6cmの正方形を底面とし、側面が1つ19cm²の合同な三角形4枚でできている正四角錐の表面積を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "112",
      "112cm2",
      "112cm²"
    ],
    "explanation": "表面積は「底面積 + 側面積の合計」です。底面積は 6 × 6 = 36 cm²、側面積の合計は 19 × 4 = 76 cm²。合わせると 36 + 76 = 112 cm² です。",
    "difficulty": 2
  },
  {
    "id": "math-g1-taisekihyoumenseki-030",
    "subject": "math",
    "grade": 1,
    "unit": {
      "id": "taisekihyoumenseki",
      "name": "立体の体積と表面積"
    },
    "tags": [
      "柱体の体積"
    ],
    "question": "底面積 6cm²、高さ 4cm の角柱の体積を求めなさい。（数字だけでよい）",
    "answerType": "text",
    "correctAnswers": [
      "24",
      "24cm3",
      "24cm³"
    ],
    "explanation": "角柱・円柱の体積は「底面積 × 高さ」で求めます。6 × 4 = 24 cm³ です。",
    "difficulty": 1
  }
];
