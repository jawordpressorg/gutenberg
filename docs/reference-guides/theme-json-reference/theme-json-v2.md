<!-- 
# Theme.json Version 2 Reference
 -->
# theme.json バージョン2 リファレンス

<!-- 
> This is the specification for  **version 2** of `theme.json`. This version works with WordPress 5.9 or later.
 -->
> これは `theme.json` **バージョン 2**の仕様です。このバージョンは WordPress 5.9以降で動作します。

<!-- 
<div class="callout callout-alert">

Theme.json version 3 has been released with WordPress 6.6. WordPress will continue to support theme.json version 2. However new features will only be added to [new versions](/docs/reference-guides/theme-json-reference/theme-json-living.md).

When you are ready to upgrade, see the [theme.json migration guide](/docs/reference-guides/theme-json-reference/theme-json-migrations.md#migrating-from-v2-to-v3) for details on updating to the latest version.

</div>
 -->
> theme.json バージョン 3が WordPress 6.6でリリースされました。WordPress は 引き続き theme.json version 2をサポートしますが、新機能は [新しいバージョン](https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/) にのみ追加されます。
> 
> アップグレードの準備ができたら、[theme.json 移行ガイド](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-migrations/#migrating-from-v2-to-v3) で最新版へのアップデートの詳細を参照してください。

<!-- 
This reference guide lists the settings and style properties defined in the `theme.json` schema. See the [theme.json how to guide](/docs/how-to-guides/themes/global-settings-and-styles.md) for examples and guidance on how to use the `theme.json` file in your theme.
 -->
このリファレンスガイドでは `theme.json` スキーマで定義されている設定とスタイルのプロパティを列挙します。テーマで `theme.json` ファイルを使用する方法については、[theme.json 利用ガイド](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/global-settings-and-styles/)を参照してください。

<!-- 
## JSON Schema
 -->
## JSON スキーマ

<!-- 
The last schema for version 2 is available at `https://schemas.wp.org/wp/6.5/theme.json`.
 -->
バージョン2の最後のスキーマは `https://schemas.wp.org/wp/6.5/theme.json` にあります。

<!-- 
Theme.json schemas for each WordPress version are available at `https://schemas.wp.org/wp/{{version}}/theme.json`. For example a schema for WordPress 5.8 is available at `https://schemas.wp.org/wp/5.8/theme.json`.
 -->
各 WordPress バージョンの theme.json スキーマは、`https://schemas.wp.org/wp/{{version}}/theme.json` から利用できます。例えば、WordPress 5.9用のスキーマは `https://schemas.wp.org/wp/5.9/theme.json` にあります。

<!-- 
See [Developing with theme.json](/docs/how-to-guides/themes/global-settings-and-styles.md#developing-with-themejson) for how to use the JSON schema in your editor.
 -->
お使いのエディターで JSON スキーマを使用する方法については [theme.json を使用した開発](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/global-settings-and-styles/)を参照してください。

<!--
## Settings
-->
## settings

### appearanceTools

<!--
Setting that enables the following UI tools:
-->
以下のUIツールを有効にする設定。

- background: backgroundImage, backgroundSize
- border: color, radius, style, width
- color: link
- dimensions: aspectRatio, minHeight
- position: sticky
- spacing: blockGap, margin, padding
- typography: lineHeight

---

### useRootPaddingAwareAlignments

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
ボーダー関連の設定。


| Property  | Type   | Default | Props  |
| ---    | ---    | ---    |---   |
| color | boolean | false |  |
| radius | boolean | false |  |
| style | boolean | false |  |
| width | boolean | false |  |

---

### shadow

<!-- 
Settings related to shadows.
 -->
シャドー関連の設定。

| Property  | Type   | Default | Props  |
| ---    | ---    | ---    |---   |
| defaultPresets | boolean | true |  |
| presets | array |  | name, shadow, slug |

---

### color

<!--
Settings related to colors.
-->
色関連の設定。

| Property  | Type   | Default | Props  |
| ---    | ---    | ---    |---   |
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
| heading | boolean | true |  |
| button | boolean | true |  |

---

### background

<!-- 
Settings related to background.
 -->
背景関連の設定。

| Property  | Type   | Default | Props  |
| ---    | ---    | ---    |---   |
| backgroundImage | boolean | false |  |

---

### dimensions

<!-- 
Settings related to dimensions.
 -->
寸法関連の設定。

| Property  | Type   | Default | Props  |
| ---    | ---    | ---    |---   |
| aspectRatio | boolean | false |  |
| minHeight | boolean | false |  |

---

### layout

<!--
Settings related to layout.
-->
レイアウト関連の設定。

| Property  | Type   | Default | Props  |
| ---    | ---    | ---    |---   |
| contentSize | string |  |  |
| wideSize | string |  |  |
| allowEditing | boolean | true |  |
| allowCustomContentAndWideSize | boolean | true |  |

---

### lightbox

<!-- 
Settings related to the lightbox.
 -->
lightbox 関連の設定。

| Property  | Type   | Default | Props  |
| ---    | ---    | ---    |---   |
| enabled | boolean |  |  |
| allowEditing | boolean |  |  |

---

### position

<!-- 
Settings related to position.
 -->
位置関連の設定。

| Property  | Type   | Default | Props  |
| ---    | ---    | ---    |---   |
| sticky | boolean | false |  |

---

### spacing

<!--
Settings related to spacing.
-->
スペース関連の設定。

| Property  | Type   | Default | Props  |
| ---    | ---    | ---    |---   |
| blockGap | boolean, null | null |   |
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
タイポグラフィ関連の設定。

| Property  | Type   | Default | Props  |
| ---    | ---    | ---    |---   |
| customFontSize | boolean | true |  |
| fontStyle | boolean | true |  |
| fontWeight | boolean | true |  |
| fluid | object, boolean | false | _{maxViewportWidth, minFontSize, minViewportWidth}_  |
| letterSpacing | boolean | true |  |
| lineHeight | boolean | false |  |
| textColumns | boolean | false |  |
| textDecoration | boolean | true |  |
| writingMode | boolean | false |  |
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

## Styles

### border

<!--
Border styles.
-->
ボーダーのスタイル。

| Property  | Type   |  Props  |
| ---       | ---    |---   |
| color | string, object |  |
| radius | string, object |  |
| style | string, object |  |
| width | string, object |  |
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
| background | string, object |  |
| gradient | string, object |  |
| text | string, object |  |

---

### dimensions

<!-- 
Dimensions styles
 -->
寸法のスタイル

| Property  | Type   |  Props  |
| ---       | ---    |---   |
| aspectRatio | string, object |  |
| minHeight | string, object |  |

---

### spacing

<!--
Spacing styles.
-->
スペースのスタイル。

| Property  | Type   |  Props  |
| ---       | ---    |---   |
| blockGap | string, object |  |
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
| fontFamily | string, object |  |
| fontSize | string, object |  |
| fontStyle | string, object |  |
| fontWeight | string, object |  |
| letterSpacing | string, object |  |
| lineHeight | string, object |  |
| textColumns | string |  |
| textDecoration | string, object |  |
| writingMode | string, object |  |
| textTransform | string, object |  |

---

### filter

<!-- 
CSS and SVG filter styles.
 -->
CSS と SVG フィルターのスタイル。

| Property  | Type   |  Props  |
| ---       | ---    |---   |
| duotone | string, object |  |

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
| color | string, object |  |
| offset | string, object |  |
| style | string, object |  |
| width | string, object |  |

---

### css

<!-- 
Sets custom CSS to apply styling not covered by other theme.json properties.
 -->
カスタム CSS を設定します。他の theme.json プロパティではカバーされないスタイルを適用できます。

---

## customTemplates

<!-- 
Additional metadata for custom templates defined in the templates folder.
 -->
テンプレートフォルダで定義されるカスタムテンプレートの追加メタデータ

Type: `object`.

<!-- 
| Property | Description | Type |
| ---      | ---         | ---  |
| name | Filename, without extension, of the template in the templates folder. | string |
| title | Title of the template, translatable. | string |
| postTypes | List of post types that can use this custom template. | array |
 -->

| Property | 説明 | Type |
| ---      | ---         | ---  |
| name | テンプレートフォルダ内のテンプレートのファイル名。拡張子なし。 | string |
| title | テンプレートのタイトル。翻訳可。 | string |
| postTypes | このカスタムテンプレートを使える投稿タイプのリスト。 | array |


## templateParts

<!-- 
Additional metadata for template parts defined in the parts folder.
 -->
パーツフォルダで定義されるテンプレートパーツの追加メタデータ。

Type: `object`.

<!-- 
| Property | Description | Type |
| ---      | ---         | ---  |
| name | Filename, without extension, of the template in the parts folder. | string |
| title | Title of the template, translatable. | string |
| area | The area the template part is used for. Block variations for `header` and `footer` values exist and will be used when the area is set to one of those. | string |
 -->
| Property | 説明 | Type |
| ---      | ---         | ---  |
| name | パーツフォルダ内のテンプレートのファイル名。拡張子なし。 | string |
| title | テンプレートのタイトル。翻訳可。 | string |
| area | テンプレートパーツが使用されるエリア。`header` 値と `footer` 値のブロックバリエーションが存在し、エリアがそのどちらかと設定された際に使用される。 | string |

## Patterns

<!-- 
An array of pattern slugs to be registered from the Pattern Directory.
 -->
パターンディレクトリから登録されるパターンのスラッグの配列。

Type: `array`.

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/theme-json-reference/theme-json-v2.md)