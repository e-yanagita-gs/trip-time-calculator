# ✈️ trip-time-calculator

**出発地・到着地・出発日時・フライト時間から、到着日時と時差を計算できる CLI アプリケーションです。**  
[Luxon](https://moment.github.io/luxon/) と [Enquirer](https://www.npmjs.com/package/enquirer) を使用して、タイムゾーンも考慮した正確な時間計算を行います。

---

## 📦 インストール

```bash
npm install -g trip-time-calculator
```

> グローバルにインストールすることで、`trip-time-calculator` コマンドがどこでも使えるようになります。

---

## 🚀 使い方

```bash
trip-time-calculator
```

実行すると、以下のようなステップで操作できます：

1. 出発地を選択（都市名）
2. 到着地を選択（出発地と同じ都市は除外されます）
3. 出発日時を入力（形式：`YYYY/MM/DD HH:mm`）
4. フライト時間の入力（わかる場合のみ。わからない場合は自動推定されます）
5. 到着日時・フライト時間・時差を表示！

---

## 🖥️ 出力例

```text
出発: 東京 - 2025/04/17 10:00 ※現地時間
到着: フロリダ - 2025/04/17 14:00 ※現地時間
フライト時間: 17時間0分
時差(東京 → フロリダ): -13時間
```

---

## 🛠 開発用スクリプト

```bash
npm run lint   # Prettier + ESLint でコードチェック
npm run fix    # 自動修正（Prettier & ESLint）
```

---

## 📁 ディレクトリ構成

```
.
├── index.js                # エントリポイント（CLIアプリ本体）
├── user_input.js           # ユーザー入力関連の処理
├── time_calculator.js      # 到着時刻＆時差計算ロジック
├── cities_list.js          # 都市とタイムゾーンのマッピング
├── flight_times_list.js    # 都市間のフライト時間定義
├── package.json
└── README.md
```

---

## ✅ 必須ライブラリ

- [luxon](https://www.npmjs.com/package/luxon) — 日時操作ライブラリ
- [enquirer](https://www.npmjs.com/package/enquirer) — CLIプロンプトライブラリ

---

## 👤 作者

[GitHub: @e-yanagita-gs](https://github.com/e-yanagita-gs)

```

```
