<!-- 
# Version 1 Reference
 -->
# バージョン 1 リファレンス

<!-- 
Theme.json version 2 has been released, see the [theme.json migration guide](/docs/reference-guides/theme-json-reference/theme-json-migrations.md#migrating-from-v1-to-v2) for updating to the latest version.
 -->
theme.json バージョン 2 がリリースされました。最新バージョンに移行するには [theme.json 移行ガイド](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-migrations/) を参照してください。

<!-- 
## Settings
 -->
## settings

### border

<!-- 
Settings related to borders.
 -->
ボーダー関連の設定です。

| Property     | Type    | Default | Props |
| ------------ | ------- | ------- | ----- |
| customRadius | boolean | false   |       |

---

### color
<!-- 
Settings related to colors.
 -->
色関連の設定です。

| Property       | Type    | Default | Props                |
| -------------- | ------- | ------- | -------------------- |
| custom         | boolean | true    |                      |
| customDuotone  | boolean | true    |                      |
| customGradient | boolean | true    |                      |
| duotone        | array   |         | colors, name, slug   |
| gradients      | array   |         | gradient, name, slug |
| link           | boolean | false   |                      |
| palette        | array   |         | color, name, slug    |

---

### layout
<!-- 
Settings related to layout.
 -->
レイアウト関連の設定です。

| Property    | Type   | Default | Props |
| ----------- | ------ | ------- | ----- |
| contentSize | string |         |       |
| wideSize    | string |         |       |

---

### spacing

<!-- 
Settings related to spacing.
 -->
スペース関連の設定です。

| Property      | Type    | Default           | Props |
| ------------- | ------- | ----------------- | ----- |
| customMargin  | boolean | false             |       |
| customPadding | boolean | false             |       |
| units         | array   | px,em,rem,vh,vw,% |       |

---

### typography

<!-- 
Settings related to typography.
 -->
タイポグラフィ関連の設定です。

| Property         | Type    | Default | Props            |
| ---------------- | ------- | ------- | ---------------- |
| customFontSize   | boolean | true    |                  |
| customLineHeight | boolean | false   |                  |
| dropCap          | boolean | true    |                  |
| fontSizes        | array   |         | name, size, slug |

---

### custom

<!-- 
Generate custom CSS custom properties of the form `--wp--custom--{key}--{nested-key}: {value};`. `camelCased` keys are transformed to `kebab-case` as to follow the CSS property naming schema. Keys at different depth levels are separated by `--`, so keys should not include `--` in the name.
 -->
「`--wp--custom--{key}--{nested-key}: {value};`」形式のカスタム CSS カスタムプロパティを生成します。`camelCased` のキーは、CSSプロパティ命名スキーマに従うために、 `kebab-case` に変換されます。異なる深さのレベルのキーは `--` で区切られるため、キーの名前に `--` を含めないでください。

---
<!-- 
## Styles
 -->
## styles

### border
<!-- 
Border styles.
 -->
ボーダーのスタイル。

| Property | Type   | Props |
| -------- | ------ | ----- |
| radius   | string |       |

---

### color
<!-- 
Color styles.
 -->
色のスタイル。

| Property   | Type   | Props |
| ---------- | ------ | ----- |
| background | string |       |
| gradient   | string |       |
| text       | string |       |

---

### spacing

<!-- 
Spacing styles.
 -->
スペースのスタイル。

| Property | Type   | Props                    |
| -------- | ------ | ------------------------ |
| margin   | object | bottom, left, right, top |
| padding  | object | bottom, left, right, top |

---

### typography
<!-- 
Typography styles.
 -->
タイポグラフィのスタイル。

| Property   | Type   | Props |
| ---------- | ------ | ----- |
| fontSize   | string |       |
| lineHeight | string |       |

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/theme-json-reference/theme-json-v1.md)