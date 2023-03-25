<!--
# Theme.json Reference
-->
<!-- 
# theme.json リファレンス
 -->
<!-- 
# Version 2 (living reference)
 -->
# バージョン 2 (現在のリファレンス)

<!-- 
> This is the living specification for the **version 2** of theme.json. This version works with WordPress 5.9 or later, and the latest Gutenberg plugin.
>
> There're related documents you may be interested in: the [theme.json v1](/docs/reference-guides/theme-json-reference/theme-json-v1.md) specification and the [reference to migrate from theme.json v1 to v2](/docs/reference-guides/theme-json-reference/theme-json-migrations.md).
 -->
> これは、theme.json **バージョン2**の現在の仕様です。このバージョンは、WordPress 5.9以降と最新のGutenberg プラグインで動作します。
>
> 関連するドキュメントとして、[theme.json v1](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-v1/) 仕様と [theme.json v1 から v2 への移行リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-migrations/) があります。

<!--
This reference guide lists the settings and style properties defined in the theme.json schema. See the [theme.json how to guide](/docs/how-to-guides/themes/theme-json.md) for examples and guide on how to use the theme.json file in your theme.
-->
このリファレンスガイドは、theme.json スキーマで定義された設定 (settings) とスタイル (styles) プロパティの一覧です。theme.jsonの使用方法については、[theme.json ガイド](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json) を参照してください。

<!-- 
## Schema
 -->
## スキーマ

<!-- 
It can be difficult to remember the theme.json settings and properties while you develop, so a JSON scheme was created to help. The schema is available at https://schemas.wp.org/trunk/theme.json
 -->
開発中に theme.json の設定やプロパティを覚えておくのは難しいため、JSON スキーマが作成されました。スキーマは https://schemas.wp.org/trunk/theme.json で公開されています。

<!-- 
Code editors can pick up the schema and can provide help like tooltips, autocomplete, or schema validation in the editor. To use the schema in Visual Studio Code, add "$schema": "https://schemas.wp.org/trunk/theme.json" to the beginning of your theme.json file.
 -->
コードエディターはスキーマを読み込み、エディター内でツールチップ、オートコンプリート、スキーマ検証のような支援を提供できます。Visual Studio Code でスキーマを使用するには、theme.json ファイルの先頭に、"$schema": "https://schemas.wp.org/trunk/theme.json” を追加してください。

<!-- START TOKEN Autogenerated - DO NOT EDIT -->

<!--
## Settings
-->
## settings

### appearanceTools

<!--
Setting that enables the following UI tools:
-->
以下のUIツールを有効にする設定です。

<!--
- border: color, radius, style, width
- color: link
- spacing: blockGap, margin, padding
- typography: lineHeight
-->
- border: color, radius, style, width
- color: link
- spacing: blockGap, margin, padding
- typography: lineHeight


---

### useRootPaddingAwareAlignments
<!-- 
_**Note:** Since WordPress 6.1._
 -->
_**注意:** WordPress 6.1以降_

<!-- 
Enables root padding (the values from `styles.spacing.padding`) to be applied to the contents of full-width blocks instead of the root block.

Please note that when using this setting, `styles.spacing.padding` should always be set as an object with `top`, `right`, `bottom`, `left` values declared separately.
 -->
ルートブロックの代わりに全幅ブロックの内容に、ルートパディング (`styles.spacing.padding` の値) を適用することを可能にします。

注意: この設定を使用する場合、`styles.spacing.padding` は常にオブジェクトとして設定し、`top`, `right`, `bottom`, `left`の値は別々に宣言する必要があります。

---

### border

<!--
Settings related to borders.
-->
ボーダー関連の設定です。

| Property  | Type   | Default | Props  |
| ---       | ---    | ---    |---   |
| color | boolean | false |  |
| radius | boolean | false |  |
| style | boolean | false |  |
| width | boolean | false |  |

---

### color

<!--
Settings related to colors.
-->
色関連の設定です。

| Property  | Type   | Default | Props  |
| ---       | ---    | ---    |---   |
| background | boolean | true |  |
| custom | boolean | true |  |
| customDuotone | boolean | true |  |
| customGradient | boolean | true |  |
| defaultDuotone | boolean | true |  |
| defaultGradients | boolean | true |  |
| defaultPalette | boolean | true |  |
| duotone | array |  | colors, name, slug |
| gradients | array |  | gradient, name, slug |
| link | boolean | false |  |
| palette | array |  | color, name, slug |
| text | boolean | true |  |

---

### dimensions
<!-- 
Settings related to dimensions.
 -->
寸法関連の設定です。

| Property  | Type   | Default | Props  |
| ---       | ---    | ---    |---   |
| minHeight | boolean | false |  |

---

### layout

<!--
Settings related to layout.
-->
レイアウト関連の設定です。

| Property  | Type   | Default | Props  |
| ---       | ---    | ---    |---   |
| contentSize | string |  |  |
| wideSize | string |  |  |

---

### spacing

<!--
Settings related to spacing.
-->
スペース関連の設定です。

| Property  | Type   | Default | Props  |
| ---       | ---    | ---    |---   |
| blockGap | undefined | null |  |
| margin | boolean | false |  |
| padding | boolean | false |  |
| units | array | px,em,rem,vh,vw,% |  |
| customSpacingSize | boolean | true |  |
| spacingSizes | array |  | name, size, slug |
| spacingScale | object |  |  |

---

### typography

<!--
Settings related to typography.
-->
タイポグラフィ関連の設定です。

| Property  | Type   | Default | Props  |
| ---       | ---    | ---    |---   |
| customFontSize | boolean | true |  |
| fontStyle | boolean | true |  |
| fontWeight | boolean | true |  |
| fluid | boolean |  |  |
| letterSpacing | boolean | true |  |
| lineHeight | boolean | false |  |
| textDecoration | boolean | true |  |
| textTransform | boolean | true |  |
| dropCap | boolean | true |  |
| fontSizes | array |  | fluid, name, size, slug |
| fontFamilies | array |  | fontFace, fontFamily, name, slug |

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

| Property  | Type   |  Props  |
| ---       | ---    |---   |
| color | string |  |
| radius | undefined |  |
| style | string |  |
| width | string |  |
| top | object | color, style, width |
| right | object | color, style, width |
| bottom | object | color, style, width |
| left | object | color, style, width |

---

### color

<!--
Color styles.
-->
色のスタイル。

| Property  | Type   |  Props  |
| ---       | ---    |---   |
| background | string |  |
| gradient | string |  |
| text | string |  |

---

### spacing

<!--
Spacing styles.
-->
スペースのスタイル。

| Property  | Type   |  Props  |
| ---       | ---    |---   |
| blockGap | string |  |
| margin | object | bottom, left, right, top |
| padding | object | bottom, left, right, top |

---

### typography

<!--
Typography styles.
-->
タイポグラフィのスタイル。

| Property  | Type   |  Props  |
| ---       | ---    |---   |
| fontFamily | string |  |
| fontSize | string |  |
| fontStyle | string |  |
| fontWeight | string |  |
| letterSpacing | string |  |
| lineHeight | string |  |
| textDecoration | string |  |
| textTransform | string |  |

---

### filter
<!-- 
CSS and SVG filter styles.
 -->
CSS と SVG フィルターのスタイル。

| Property  | Type   |  Props  |
| ---       | ---    |---   |
| duotone | string |  |

---

### shadow
<!-- 
Box shadow styles.
 -->
ボックスシャドーのスタイル。


---

### outline
<!-- 
Outline styles.
 -->
アウトラインのスタイル。

| Property  | Type   |  Props  |
| ---       | ---    |---   |
| color | string |  |
| offset | string |  |
| style | string |  |
| width | string |  |

---

<!-- END TOKEN Autogenerated - DO NOT EDIT -->

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/theme-json-reference/theme-json-living.md)