# growi-plugin-input-replace

A Growi plugin that dynamically replaces placeholders in the page with user input.  
ページ内の `[input name="…"]` で入力した値を、`{{…}}` プレースホルダーに反映させます。  
コードブロックだけでなく、ページ全体のテキストに適用されます。

---

## Features

- `[input name="…"]` を使った入力欄の自動生成
- `{{…}}` プレースホルダーを入力値で動的置換
- ページ内全体に対応（コードブロックや通常テキストも置換）
- リアルタイム更新（入力値変更で即反映）

---

## Usage

### 1. ページに入力欄とプレースホルダーを記述

```markdown
[input name="domain" placeholder="example.com"]
[input name="ip" placeholder="192.168.0.1"]

```bash
ping {{domain}}
ssh user@{{ip}}
```

このように [input name="…"] を使うと、プラグインが自動で <input> に変換し、
{{…}} の部分を入力値で置換します。

### 2. プラグインのインストール

1. Growi のプラグイン管理画面で `growi-plugin-input-replace` を読み込む
2. `dist/client.js` を指定して有効化

---

## Example

- 入力: `domain = example.com`, `ip = 192.168.0.1`  
- 表示・コピーされるコード:

```bash
ping example.com
ssh user@192.168.0.1
```
コードブロックだけでなく、ページ中の {{domain}} や {{ip}} も同様に更新されます

Development
```bash
# 依存関係インストール
pnpm install

# ビルド
pnpm run build
```

ビルド後、dist/client.js を Growi プラグインとして使用

Notes
[input name="…"] のショートコードは、プラグインが自動で <input> に変換します

複数ページや複数ブロックでも同時に動作可能

