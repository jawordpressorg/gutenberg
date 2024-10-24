<!-- 
# Theme.json Version 3 Reference (latest)
 -->
# theme.json Version 3 リファレンス (最新)

<!-- 
> This is the living specification for  **version 3** of `theme.json`. This version works with WordPress 6.6 or later, and the latest Gutenberg plugin.
>
> There are some related documents that you may be interested in: 
> - the [theme.json v1](/docs/reference-guides/theme-json-reference/theme-json-v1.md) specification,
> - the [theme.json v2](/docs/reference-guides/theme-json-reference/theme-json-v2.md) specification, and
> - the [reference to migrate from older theme.json versions](/docs/reference-guides/theme-json-reference/theme-json-migrations.md).
 -->
> この文書は `theme.json` **バージョン3**の現在の仕様です。このバージョンは、WordPress 6.6以降と最新の Gutenberg プラグインで動作します。
> 
> 関連ドキュメントとして以下があります。 
> - [theme.json v1](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-v1/) 仕様 
> - [theme.json v2](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-v1/) 仕様 
> - [古いバージョンの theme.json からの移行リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-migrations/)

<!-- 
This reference guide lists the settings and style properties defined in the `theme.json` schema. See the [theme.json how to guide](/docs/how-to-guides/themes/theme-json.md) for examples and guidance on how to use the `theme.json` file in your theme.
This reference guide lists the settings and style properties defined in the `theme.json` schema. See the [theme.json how to guide](/docs/how-to-guides/themes/global-settings-and-styles.md) for examples and guidance on how to use the `theme.json` file in your theme.
 -->
このリファレンスガイドは、`theme.json` スキーマで定義された設定 (settings) とスタイル (styles) プロパティの一覧です。テーマ内での `theme.json` で使用する例や指針については、[theme.json ガイド](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/global-settings-and-styles) を参照してください。

<!-- 
## Schema
 -->
<!-- 
## スキーマ
 -->
<!-- 
Remembering the `theme.json` settings and properties while you develop can be difficult, so a [JSON schema](https://schemas.wp.org/trunk/theme.json) was created to help.
 -->
<!-- 
開発中に theme.json の設定やプロパティを覚えておくのは難しいため、[JSON スキーマ](https://schemas.wp.org/trunk/theme.json) が作成されました。
 -->

<!-- 
Code editors can pick up the schema and can provide helpful hints and suggestions such as tooltips, autocomplete, or schema validation in the editor. To use the schema in Visual Studio Code, add `$schema`: "https://schemas.wp.org/trunk/theme.json" to the beginning of your theme.json file together with a `version` corresponding to the version you wish to use, e.g.:
 -->
<!-- 
コードエディターはスキーマを読み込み、エディター内でツールチップ、オートコンプリート、スキーマ検証などの有用なヒントや推奨を提供します。Visual Studio Code でスキーマを使用するには、theme.json ファイルの先頭に、`$schema`: "https://schemas.wp.org/trunk/theme.json" を追加し、使用するバージョンを `version` に記述します。例:
 -->
<!-- 
## JSON Schema
 -->
## JSON スキーマ

<!-- 
This documentation was generated from the JSON schema for theme.json.
 -->
このドキュメントは theme.json の JSON スキーマから生成されました。

<!-- 
The latest schema for version 3, including all the latest changes from the Gutenberg plugin, is available at <code>https://schemas.wp.org/trunk/theme.json</code>.
 -->
Gutenberg プラグインの最新の変更を含むバージョン3の最新のスキーマは、<code>https://schemas.wp.org/trunk/theme.json</code> にあります。

<!-- 
Theme.json schemas for each WordPress version are available at <code>https://schemas.wp.org/wp/{{version}}/theme.json</code>.  
For example, a schema for WordPress 5.8 is available at <code>https://schemas.wp.org/wp/5.8/theme.json</code>.
 -->
各 WordPress バージョンの theme.json スキーマは、`https://schemas.wp.org/wp/{{version}}/theme.json` から利用できます。例えば、WordPress 5.8用のスキーマは `https://schemas.wp.org/wp/5.8/theme.json` にあります。

<!-- 
See [Developing with theme.json](/docs/how-to-guides/themes/global-settings-and-styles.md#developing-with-themejson) for how to use the JSON schema in your editor.
 -->
お使いのエディターで JSON スキーマを使用する方法については [theme.json を使用した開発](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/global-settings-and-styles/)を参照してください。

<!-- START TOKEN Autogenerated - DO NOT EDIT -->

## settings

<!-- 
Settings for the block editor and individual blocks. These include things like:
- Which customization options should be available to the user. 
- The default colors, font sizes... available to the user. 
- CSS custom properties and class names used in styles.
- And the default layout of the editor (widths and available alignments).
 -->
ブロックエディターと個々のブロックの設定。以下が含まれます。
- ユーザーが利用できるカスタマイズオプション。
- ユーザーが利用できるデフォルトの色、フォントサイズ ...。
- スタイルで使用される CSS カスタムプロパティとクラス名。
- エディターのデフォルトレイアウト (幅と利用可能な配置)。

### useRootPaddingAwareAlignments

<!-- 
Enables root padding (the values from `styles.spacing.padding`) to be applied to the contents of full-width blocks instead of the root block.
 -->
ルートブロックの代わりに全幅ブロックのコンテンツに、ルートパディング (`styles.spacing.padding` の値) を適用することを可能にします。

<!-- 
Please note that when using this setting, `styles.spacing.padding` should always be set as an object with `top`, `right`, `bottom`, `left` values declared separately.
 -->
注意: この設定を使用する場合は `styles.spacing.padding`は常に `top`、`right`、`bottom`、`left` の値を個別に宣言したオブジェクトとして設定してください。

<!-- 
**Note:** Top-level only property. Not available in blocks.
 -->
**注意:** 最上位レベルのプロパティ。ブロックでは利用不可。

---

### appearanceTools

<!--
Setting that enables the following UI tools:
-->
以下のUIツールを有効にする設定。

- background: backgroundImage, backgroundSize
- border: color, radius, style, width
- color: link, heading, button, caption
- dimensions: aspectRatio, minHeight
- position: sticky
- spacing: blockGap, margin, padding
- typography: lineHeight

---

### background

<!-- 
Settings related to background.
 -->
背景関連の設定。

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| backgroundImage | 背景画像の設定 | `boolean` | `false` |
| backgroundSize | 背景画像のサイズに関する値、サイズ、位置、リピートコントロールなどの設定 | `boolean` | `false` |

---

### border

<!--
Settings related to borders.
-->
ボーダー関連の設定。

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| color | カスタムボーダー色の設定 | `boolean` | `false` |
| radius | カスタムボーダー角丸半径の設定 | `boolean` | `false` |
| style | カスタムボーダースタイルの設定 | `boolean` | `false` |
| width | カスタムボーダー幅の設定 | `boolean` | `false` |

---

### color

<!--
Settings related to colors.
-->
色関連の設定。

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| background | 背景色の設定 | `boolean` | `true` |
| custom | カスタム色の選択 | `boolean` | `true` |
| customDuotone | カスタムデュオトーンフィルターの作成 | `boolean` | `true` |
| customGradient | カスタムグラデーションの作成 | `boolean` | `true` |
| defaultDuotone | デフォルトデュオトーンフィルタープリセットからフィルターを選択 | `boolean` | `true` |
| defaultGradients | デフォルトグラデーションから色を選択 | `boolean` | `true` |
| defaultPalette | デフォルトパレットから色を選択 | `boolean` | `true` |
| duotone | デュオトーンピッカーのデュオトーンプリセット | `[ { name, slug, colors } ]` |  |
| gradients | グラデーションピッカーのグラデーションプリセット | `[ { name, slug, gradient } ]` |  |
| link | ブロック内のリンク色の設定 | `boolean` | `false` |
| palette | カラーピッカーのカラーパレットプリセット | `[ { name, slug, color } ]` |  |
| text | ブロック内のテキスト色の設定 | `boolean` | `true` |
| heading | ブロック内の見出し色の設定 | `boolean` | `true` |
| button | ブロック内のボタン色の設定 | `boolean` | `true` |
| caption | ブロック内のキャプション色の設定 | `boolean` | `true` |

---

### dimensions
<!-- 
Settings related to dimensions.
 -->
寸法関連の設定。

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| aspectRatio | アスペクト比の設定 | `boolean` | `false` |
| defaultAspectRatios | アスペクト比のデフォルトセットからアスペクト比を選択 | `boolean` | `true` |
| aspectRatios | いくつかのブロックでアスペクト比を定義 | `[ { name, slug, ratio } ]` |  |
| minHeight | カスタム最小高を設定 | `boolean` | `false` |

---

### layout

<!--
Settings related to layout.
-->
レイアウト関連の設定。

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| contentSize | コンテンツの max-width を設定 | `string` |  |
| wideSize | 幅広 (`.alignwide`) コンテンツの max-width の設定。フルードフォントサイズ計算時の maximum viewport としても使用される | `string` |  |
| allowEditing | レイアウト UI コントロールの無効化 | `boolean` | `true` |
| allowCustomContentAndWideSize | カスタムコンテントとサイズコントロールの有効化、無効化 | `boolean` | `true` |

---

### lightbox

<!-- 
Settings related to the lightbox.
 -->
lightbox 関連の設定。

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| enabled | lightbox が有効化されているかどうかの定義 | `boolean` |  |
| allowEditing | ブロックエディター内で Lightbox UI を表示するかどうかの定義。`false` に設定すると、ユーザーはブロックエディター内で lightbox の設定を変更できない | `boolean` |  |

---

### position

<!-- 
Settings related to position.
 -->
位置関連の設定。

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| sticky | 位置固定の設定 | `boolean` | `false` |

---

### shadow

<!-- 
Settings related to shadows.
 -->
シャドー関連の設定

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| defaultPresets | デフォルトシャドープリセットからシャドーを選択 | `boolean` | `true` |
| presets | シャドーピッカーのシャドープリセット | `[ { name, slug, shadow } ]` |  |

---

### spacing

<!--
Settings related to spacing.
-->
スペース関連の設定。

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| blockGap | styles.spacing.blockGap から `--wp--style--block-gap` の生成を有効化 | `boolean`, `null` | `null` |
| margin | カスタムマージンの設定 | `boolean` | `false` |
| padding | カスタムパディングの設定 | `boolean` | `false` |
| units | スペース値に利用可能な単位のリスト | `[ string ]` | `["px","em","rem","vh","vw","%"]` |
| customSpacingSize | カスタムスペースサイズの設定 | `boolean` | `true` |
| defaultSpacingSizes | デフォルトスペースサイズプリセットからスペースサイズを選択 | `boolean` | `true` |
| spacingSizes | スペースサイズセレクタのスペースサイズプリセット | `[ { name, slug, size } ]` |  |
| spacingScale | スペースサイズセレクタの自動生成スペースサイズプリセットの設定 | `{ operator, increment, steps, mediumStep, unit }` |  |

---

### typography

<!--
Settings related to typography.
-->
タイポグラフィ関連の設定。

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| defaultFontSizes | デフォルトのフォントサイズプリセットからフォントサイズを選択 | `boolean` | `true` |
| customFontSize | カスタムフォントサイズを設定 | `boolean` | `true` |
| fontStyle | カスタムフォントスタイルを設定 | `boolean` | `true` |
| fontWeight | カスタムフォントウエイトを設定 | `boolean` | `true` |
| fluid | フルードタイポグラフィの有効化とグローバルフルードタイポグラフィパラメータの設定 | `boolean`, `{ minFontSize, maxViewportWidth, minViewportWidth }` | `false` |
| letterSpacing | カスタム文字スペースの設定 | `boolean` | `true` |
| lineHeight | カスタム行高の設定 | `boolean` | `false` |
| textAlign | テキスト配置の設定 | `boolean` | `true` |
| textColumns | テキストカラム数の設定 | `boolean` | `false` |
| textDecoration | カスタムテキスト装飾の設定 | `boolean` | `true` |
| writingMode | 執筆モードの設定 | `boolean` | `false` |
| textTransform | カスタムテキスト変換の設定 | `boolean` | `true` |
| dropCap | ドロップキャップの有効化 | `boolean` | `true` |
| fontSizes | フォントサイズセレクタのフォントサイズプリセット | `[ { name, slug, size, fluid } ]` |  |
| fontFamilies | フォントファミリーセレクタのフォントファミリープリセット | `[ { name, slug, fontFamily, fontFace } ]` |  |

---

### custom

<!--
Generate custom CSS custom properties of the form `--wp--custom--{key}--{nested-key}: {value};`. `camelCased` keys are transformed to `kebab-case` as to follow the CSS property naming schema. Keys at different depth levels are separated by `--`, so keys should not include `--` in the name.
-->
「`--wp--custom--{key}--{nested-key}: {value};`」形式のカスタム CSS カスタムプロパティを生成します。`camelCased` のキーは、CSSプロパティ命名スキーマに従うために、 `kebab-case` に変換されます。異なる深さのレベルのキーは `--` で区切られるため、キーの名前に `--` を含めないでください。

---

## styles

<!-- 
Organized way to set CSS properties. Styles in the top-level will be added in the `body` selector.
 -->
CSS プロパティを設定する整理された方法。トップレベルのスタイルは `body` セレクタに追加されます。

### background
<!-- 
Background styles.
 -->
背景のスタイル。

| Property | Description | Type |
| -------- | ----------- | ---- |
| backgroundImage | `background-image` CSS プロパティの設定 | `string`, `{ ref }`, `{ url }` |
| backgroundPosition | `background-position` CSS プロパティの設定 | `string`, `{ ref }` |
| backgroundRepeat | `background-repeat` CSS プロパティの設定 | `string`, `{ ref }` |
| backgroundSize | `background-size` CSS プロパティの設定 | `string`, `{ ref }` |
| backgroundAttachment | `background-attachment` CSS プロパティの設定 | `string`, `{ ref }` |

---

### border

<!--
Border styles.
-->
ボーダーのスタイル。

| Property | Description | Type |
| -------- | ----------- | ---- |
| color | `border-color` CSS プロパティの設定 | `string`, `{ ref }` |
| radius | `border-radius` CSS プロパティの設定 | `string`, `{ ref }`, `{ topLeft, topRight, bottomLeft, bottomRight }` |
| style | `border-style` CSS プロパティの設定 | `string`, `{ ref }` |
| width | `border-width` CSS プロパティの設定 | `string`, `{ ref }` |
| top |  | `{ color, style, width }` |
| right |  | `{ color, style, width }` |
| bottom |  | `{ color, style, width }` |
| left |  | `{ color, style, width }` |

---

### color

<!--
Color styles.
-->
色のスタイル。

| Property | Description | Type |
| -------- | ----------- | ---- |
| background | `background-color` CSS プロパティの設定 | `string`, `{ ref }` |
| gradient | `background` CSS プロパティの設定 | `string`, `{ ref }` |
| text | `color` CSS プロパティの設定 | `string`, `{ ref }` |

---

### css
<!-- 
Sets custom CSS to apply styling not covered by other theme.json properties.
 -->
カスタム CSS を設定します。他の theme.json プロパティではカバーされないスタイルを適用できます。

---

### dimensions

<!-- 
Dimensions styles.
 -->
寸法のスタイル。

| Property | Description | Type |
| -------- | ----------- | ---- |
| aspectRatio | `aspect-ratio` CSS プロパティの設定 | `string`, `{ ref }` |
| minHeight | `min-height` CSS プロパティの設定 | `string`, `{ ref }` |

---

### filter

<!-- 
CSS and SVG filter styles.
 -->
CSS と SVG フィルターのスタイル。

| Property | Description | Type |
| -------- | ----------- | ---- |
| duotone | デュオトーンフィルターの設定 | `string`, `{ ref }` |

---

### outline

<!-- 
Outline styles.
 -->
アウトラインのスタイル。

| Property | Description | Type |
| -------- | ----------- | ---- |
| color | `outline-color` CSS プロパティの設定 | `string`, `{ ref }` |
| offset | `outline-offset` CSS プロパティの設定 | `string`, `{ ref }` |
| style | `outline-style` CSS プロパティの設定 | `string`, `{ ref }` |
| width | `outline-width` CSS プロパティの設定 | `string`, `{ ref }` |

---

### shadow

<!-- 
Box shadow styles.
 -->
ボックスシャドーのスタイル。

---

### spacing

<!-- 
Spacing styles.
 -->
スペースのスタイル。


| Property | Description | Type |
| -------- | ----------- | ---- |
| blockGap | settings.spacing.blockGap が true のときの `--wp--style--block-gap` CSS プロパティの設定 | `string`, `{ ref }` |
| margin | マージンスタイル | `{ top, right, bottom, left }` |
| padding | パディングスタイル | `{ top, right, bottom, left }` |

---

### typography

<!-- 
Typography styles.
 -->
タイポグラフィのスタイル。

| Property | Description | Type |
| -------- | ----------- | ---- |
| fontFamily | `font-family` CSS プロパティの設定 | `string`, `{ ref }` |
| fontSize | `font-size` CSS プロパティの設定 | `string`, `{ ref }` |
| fontStyle | `font-style` CSS プロパティの設定 | `string`, `{ ref }` |
| fontWeight | `font-weight` CSS プロパティの設定 | `string`, `{ ref }` |
| letterSpacing | `letter-spacing` CSS プロパティの設定 | `string`, `{ ref }` |
| lineHeight | `line-height` CSS プロパティの設定 | `string`, `{ ref }` |
| textAlign | `text-align` CSS プロパティの設定 | `string`, `{ ref }` |
| textColumns | `column-count` CSS プロパティの設定 | `string`, `{ ref }` |
| textDecoration | `text-decoration` CSS プロパティの設定 | `string`, `{ ref }` |
| writingMode | `writing-mode` CSS プロパティの設定 | `string`, `{ ref }` |
| textTransform | `text-transform` CSS プロパティの設定 | `string`, `{ ref }` |

---

## customTemplates

<!-- 
Additional metadata for custom templates defined in the templates folder.
 -->
テンプレートフォルダで定義されるカスタムテンプレートの追加メタデータ

<!-- 
| Property | Description | Type |
| -------- | ----------- | ---- |
| name | Filename, without extension, of the template in the templates folder. | `string` |
| title | Title of the template, translatable. | `string` |
| postTypes | List of post types that can use this custom template. | `[ string ]` |
 -->
| Property | Description | Type |
| -------- | ----------- | ---- |
| name | テンプレートフォルダ内のテンプレートのファイル名。拡張子なし | `string` |
| title | テンプレートのタイトル。翻訳可 | `string` |
| postTypes | このカスタムテンプレートを使える投稿タイプのリスト | `[ string ]` |



## templateParts

<!-- 
Additional metadata for template parts defined in the parts folder.
 -->
パーツフォルダで定義されるテンプレートパーツの追加メタデータ

| Property | Description | Type |
| -------- | ----------- | ---- |
| name | パーツフォルダ内のテンプレートのファイル名。拡張子なし | `string` |
| title | テンプレートのタイトル。翻訳可 | `string` |
| area | テンプレートパーツが使用されるエリア。`header` 値と `footer` 値のブロックバリエーションが存在し、エリアがそのどちらかと設定された際に使用される | `string` |

## patterns

<!-- 
An array of pattern slugs to be registered from the Pattern Directory.
 -->
パターンディレクトリから登録されるパターンのスラッグの配列。

型: `[ string ]`。

<!-- END TOKEN Autogenerated - DO NOT EDIT -->

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/theme-json-reference/theme-json-living.md)