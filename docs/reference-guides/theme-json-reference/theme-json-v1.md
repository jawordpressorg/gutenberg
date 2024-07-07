<!-- 
# Theme.json Version 1 Reference
 -->
# theme.json バージョン1 リファレンス

<!-- 
> This is the specification for  **version 1** of `theme.json`. This version works with WordPress 5.8 or later.
 -->
> これは `theme.json` **バージョン 1**の仕様です。このバージョンは WordPress 5.8以降で動作します。

<!-- 
<div class="callout callout-alert">

Theme.json version 2 has been released with WordPress 5.9. WordPress will continue to support theme.json version 1. However new features will only be added to [new versions](/docs/reference-guides/theme-json-reference/theme-json-living.md).

When you are ready to upgrade, see the [theme.json migration guide](/docs/reference-guides/theme-json-reference/theme-json-migrations.md#migrating-from-v1-to-v2) for details on updating to the latest version.

</div>
 -->
> theme.json バージョン 2が WordPress 5.9でリリースされました。WordPress は 引き続き theme.json version 1をサポートしますが、新機能は [新しいバージョン](https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/) にのみ追加されます。
> 
> アップグレードの準備ができたら、[theme.json 移行ガイド](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-migrations/#migrating-from-v1-to-v2) で最新版へのアップデートの詳細を参照してください。

<!-- 
This reference guide lists the settings and style properties defined in the `theme.json` schema. See the [theme.json how to guide](/docs/how-to-guides/themes/global-settings-and-styles.md) for examples and guidance on how to use the `theme.json` file in your theme.
 -->
このリファレンスガイドでは `theme.json` スキーマで定義されている設定とスタイルのプロパティを列挙します。テーマで `theme.json` ファイルを使用する方法については、[theme.json 利用ガイド](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/global-settings-and-styles/)を参照してください。

<!-- 
## JSON Schema
 -->
## JSON スキーマ

<!-- 
The last schema for version 1 is available at `https://schemas.wp.org/wp/5.8/theme.json`.
 -->
バージョン1の最後のスキーマは `https://schemas.wp.org/wp/5.8/theme.json` にあります。

<!-- 
Theme.json schemas for each WordPress version are available at `https://schemas.wp.org/wp/{{version}}/theme.json`. For example a schema for WordPress 5.8 is available at `https://schemas.wp.org/wp/5.8/theme.json`.
 -->
各 WordPress バージョンの theme.json スキーマは、`https://schemas.wp.org/wp/{{version}}/theme.json` から利用できます。例えば、WordPress 5.8用のスキーマは `https://schemas.wp.org/wp/5.8/theme.json` にあります。

<!-- 
See [Developing with theme.json](/docs/how-to-guides/themes/global-settings-and-styles.md#developing-with-themejson) for how to use the JSON schema in your editor.
 -->
お使いのエディターで JSON スキーマを使用する方法については [theme.json を使用した開発](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/global-settings-and-styles/)を参照してください。


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