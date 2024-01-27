<!--
# Global Settings & Styles (theme.json)
 -->
# グローバル設定とスタイル (theme.json)

<!--
<div class="callout callout-alert">
 -->
<!--
These features are still experimental. “Experimental” means this is an early implementation subject to drastic and breaking changes.
 -->
<!--
> この機能は現在、実験中です。初期の実装であり、将来、大規模で後方互換性のない変更があるという意味で、「実験中」です。
 -->
<!--
Documentation has been shared early to surface what’s being worked on and invite feedback from those experimenting with the APIs. Please share your feedback in the weekly #core-editor or #fse-outreach-experiment channels in Slack, or async in GitHub issues.
 -->
<!--
> 現在何を行っているのかを明らかにし、API を使用した実験からフィードバックを得るため、早い段階でドキュメントを共有します。フィードバックを Slack の週次の #core-editor または #fse-outreach-experiment チャンネルで共有するか、非同期に GitHub で issue を作成してください。
 -->
<!--
</div>
 -->

<!--
This is documentation for the current direction and work in progress about how themes can hook into the various sub-systems that the Block Editor provides.
 -->
<!--
この文書ではテーマがブロックエディターの提供するさまざまなサブシステムとどのように連携するのか、その方向性と現在進行中の作業について記述します。
 -->
<!--
WordPress 5.8 comes with [a new mechanism](https://make.wordpress.org/core/2021/06/25/introducing-theme-json-in-wordpress-5-8/) to configure the editor that enables a finer-grained control and introduces the first step in managing styles for future WordPress releases: the `theme.json` file. Then `theme.json` [evolved to a v2](https://make.wordpress.org/core/2022/01/08/updates-for-settings-styles-and-theme-json/) with WordPress 5.9 release. This page documents its format.
 -->
WordPress 5.8ではエディターを構成する[新しいメカニズム](https://make.wordpress.org/core/2021/06/25/introducing-theme-json-in-wordpress-5-8/)が搭載されました。きめ細かな制御を可能にし、将来の WordPress リリースにおけるスタイル管理の最初のステップとなる `theme.json` ファイルです。その後、WordPress 5.9のリリースに伴い `theme.json` も [v2へと進化](https://make.wordpress.org/core/2022/01/08/updates-for-settings-styles-and-theme-json/)しました。このページでは、`theme.json` ファイルのフォーマットについて説明します。

<!--
- Rationale
    - Settings for the block editor
    - Settings can be controlled per block
    - Styles are managed
    - CSS Custom Properties: presets & custom
- Specification
    - version
    - settings
        - Backward compatibility with add_theme_support
        - Presets
        - Custom
        - Setting examples
    - styles
        - Top-level
        - Block-level
        - Elements
        - Variations
    - customTemplates
    - templateParts
    - patterns
- FAQ
    - The naming schema of CSS Custom Properties
    - Why using -- as a separator?
    - How settings under "custom" create new CSS Custom Properties
    - Why does it take so long to update the styles in the browser?

 -->
<!-- 
- 論拠
    - ブロックエディターのための設定
    - 設定をブロックごとに制御できる
    - スタイルは管理できる
    - CSS カスタムプロパティ: プリセット & カスタム
- 仕様
    - version
    - settings
	    - add_theme_support との後方互換性
        - プリセット
        - カスタム
		- 例
    - styles
        - トップレベル
        - ブロックレベル
        - 要素
    - customTemplates
    - templateParts
- FAQ
  - CSS カスタムプロパティの命名体系
  - なぜ、セパレータとして、「--」を使用するのか ?
  - 「custom」下の設定は、どのように新しい CSS カスタムプロパティとなるのか ?
 -->
<!--
## Rationale
 -->
## 論拠

<!--
The Block Editor API has evolved at different velocities and there are some growing pains, specially in areas that affect themes. Examples of this are: the ability to [control the editor programmatically](https://make.wordpress.org/core/2020/01/23/controlling-the-block-editor/), or [a block style system](https://github.com/WordPress/gutenberg/issues/9534) that facilitates user, theme, and core style preferences.
 -->
ブロックエディター API はさまざまな速度で進化しているため、苦痛に感じられる部分が大きくなってきました。これは特にテーマに影響する部分で顕著です。たとえば、[エディターのプログラム的な制御](https://make.wordpress.org/core/2020/01/23/controlling-the-block-editor/)や、ユーザー、テーマ、コアスタイルの好みを取りまとめる[ブロックスタイルシステム](https://github.com/WordPress/gutenberg/issues/9534) などです。

<!--
This describes the current efforts to consolidate the various APIs related to styles into a single point – a `theme.json` file that should be located inside the root of the theme directory.
 -->
この文書では現在行われている、スタイルに関連するさまざまな API を一箇所に集める努力について、すなわち、テーマディレクトリのルートに配置する `theme.json` ファイルについて説明します。

<!--
### Settings for the block editor
 -->
### ブロックエディターの設定

<!--
Instead of the proliferation of theme support flags or alternative methods, the `theme.json` files provides a canonical way to define the settings of the block editor. These settings includes things like:
 -->
ブロックエディターの設定を定義する際、ねずみ算式に増えるテーマサポートフラグや代替方式の代わりに `theme.json` ファイルは正規の方法を提供します。例えば以下の設定が可能です。

<!--
-   What customization options should be made available or hidden from the user.
-   What are the default colors, font sizes... available to the user.
-   Defines the default layout of the editor (widths and available alignments).
 -->
-   ユーザーが利用可能なカスタマイズオプション。隠すカスタマイズオプション。
-   ユーザーが利用可能なデフォルトの色、フォントサイズ、等々
-   エディターのデフォルトレイアウトの定義。幅、利用可能な配置

<!--
### Settings can be controlled per block
 -->
### 設定をブロックごとに制御できる

<!--
For more granularity, these settings also work at the block level in `theme.json`.
 -->
より詳細のため、これらの設定は `theme.json` 内のブロックレベルでも動作します。

<!--
Examples of what can be achieved are:
 -->
達成できることの例:

<!--
-   Use a particular preset for a block (e.g.: table) but the common one for the rest of blocks.
-   Enable font size UI controls for all blocks but the headings block.
-   etc.
 -->
- あるブロック(例: テーブル)に対して特定のプリセットを使用するが、残りのブロックでは一般的なものを使用する。
- サポートするすべてのブロックでフォントサイズ UI コントロールを有効化するが、見出しブロックは除く。
- など。

<!--
### Styles are managed
 -->
### スタイルを管理できる

<!--
By using the `theme.json` file to set style properties in a structured way, the Block Editor can "manage" the CSS that comes from different origins (user, theme, and core CSS). For example, if a theme and a user set the font size for paragraphs, we only enqueue the style coming from the user and not the theme's.
 -->
`theme.json` ファイルを使用して、構造化された形でスタイルプロパティを設定することで、ブロックエディターは異なるソース (ユーザー、テーマ、コア) から来る CSS を「管理」できます。たとえば、テーマとユーザーが段落にフォントサイズを設定しても、ユーザーのスタイルのみをエンキューし、テーマから来たスタイルをエンキューしない等。

<!--
Some of the advantages are:
 -->
この方法の利点:

<!--
- Reduce the amount of CSS enqueued.
- Prevent specificity wars.
 -->
- エンキューされる CSS の量を減らす。
- 「CSS 詳細度の戦い」を抑止する。

<!--
### CSS Custom Properties: presets & custom
 -->
### CSS カスタムプロパティ: プリセットとカスタム

<!--
There are some areas of styling that would benefit from having shared values that can change across a site.
 -->
スタイリングの領域には、サイト内で一度に変更できる共有の値があると便利な場合があります。

<!--
To address this need, we've started to experiment with CSS Custom Properties, aka CSS Variables, in some places:
 -->
このニーズを満たすためいくつかの場所で、「CSS 変数」とも呼ばれる、CSS カスタムプロパティの実験を始めました。

<!--
- **Presets**: [color palettes](/docs/how-to-guides/themes/theme-support.md#block-color-palettes), [font sizes](/docs/how-to-guides/themes/theme-support.md#block-font-sizes), or [gradients](/docs/how-to-guides/themes/theme-support.md#block-gradient-presets) declared by the theme are converted to CSS Custom Properties and enqueued both the front-end and the editors.
 -->
- **プリセット**: [カラーパレット](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#block-color-palettes)、[フォントサイズ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#block-font-sizes)、[グラデーション](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#block-gradient-presets) をテーマで宣言すると、CSS カスタムプロパティに変換され、フロントエンドとエディターの両方にエンキューされます。

<!-- 
#### Input
 -->
#### 入力
<!-- 
{% codetabs %}
{% Input %}
 -->
```json
{
	"version": 2,
	"settings": {
		"color": {
			"palette": [
				{
					"name": "Black",
					"slug": "black",
					"color": "#000000"
				},
				{
					"name": "White",
					"slug": "white",
					"color": "#ffffff"
				}
			]
		}
	}
}
```

<!-- 
#### Output
 -->
#### 出力
<!-- 
{% Output %}
 -->
```css
body {
	--wp--preset--color--black: #000000;
	--wp--preset--color--white: #ffffff;
}
```
<!--
{% end %}

-   **Custom properties**: there's also a mechanism to create your own CSS Custom Properties.
 -->
- **カスタムプロパティ**: 自身の CSS カスタムプロパティを作成する仕組みもあります。

<!-- 
#### Input
 -->
#### 入力
<!-- 

{% codetabs %}
{% Input %}
 -->
```json
{
	"version": 2,
	"settings": {
		"custom": {
			"line-height": {
				"body": 1.7,
				"heading": 1.3
			}
		}
	}
}
```

<!-- 
#### Output
 -->
#### 出力
<!-- 
{% Output %}
 -->
```css
body {
	--wp--custom--line-height--body: 1.7;
	--wp--custom--line-height--heading: 1.3;
}
```

<!--
{% end %}
 -->
<!--
## Specification
 -->
## 仕様

<!--
This specification is the same for the three different origins that use this format: core, themes, and users. Themes can override core's defaults by creating a file called `theme.json`. Users, via the site editor, will also be able to override theme's or core's preferences via an user interface that is being worked on.
 -->
この仕様は、同じフォーマットを仕様する3つの異なる主体、「コア」「テーマ」「ユーザー」で共通です。テーマは、ファイル `theme.json` を作成することでコアのデフォルトを上書きできます。ユーザーもまた、開発中のユーザーインターフェース、サイトエディターを介して、テーマやコアの設定を上書きできます。

<!--
The `experimental-theme.json` file declares how a theme wants the editor configured (`settings`) as well as the style properties it sets (`styles`).
 -->
<!--
`experimental-theme.json` ファイルでは、テーマがどのようにエディターを構成したいか (`settings`)、そして、設定するスタイルプロパティ (`styles`) を宣言します。

```
{
  "settings": { ... },
  "styles": { ... }
}
```
 -->
<!--
Both settings and styles can contain subsections for any registered block. As a general rule, the names of these subsections will be the block names ― we call them "block selectors". For example, the paragraph block ―whose name is `core/paragraph`― can be addressed in the settings using the key (or "block selector") `core/paragraph`:
 -->
任意の登録ブロックに対して settings も styles もサブセクションを含むことができます。一般的なルールとしてサブセクションの名前はブロック名で、これは「ブロックセレクタ」と呼ばれます。たとえば段落ブロック (名前は `core/paragraph`)は、settings 内ではキー (あるいは「ブロックセレクタ」) `core/paragraph` として処理されます。

```json
{
	"version": 2,
	"settings": {},
	"styles": {},
	"customTemplates": {},
	"templateParts": {}
}
```

<!--
There are a few cases in whiche a single block can represent different HTML markup. The heading block is one of these, as it represents h1 to h6 HTML elements. In these cases, the block will have as many block selectors as different markup variations ― `core/heading/h1`, `core/heading/h2`, etc, so they can be addressed separately:
 -->
単一ブロックが異なる HTML マークアップを表すケースがいくつかあります。見出しブロックはその一例で、h1 から h6 の HTML 要素を表します。この場合、見出しブロックは異なるマークアップ `core/heading/h1`、`core/heading/h2`、... と同じ数のブロックセレクタを持ち、それぞれ個別に処理します。

```
{
  "styles": {
    "core/heading/h1": { ... },
    // ...
    "core/heading/h6": { ... },
  }
}
```

<!--
Additionally, there are two other block selectors: `root` and `defaults`. The `root` block selector represents the root of the site. The `defaults` block selector represents the defaults to be used by blocks if they don't declare anything.
 -->
また、さらに2つの別のブロックセレクタ `root` と `defaults` があります。`root` ブロックセレクタは、サイトのルートを表します。`defaults` ブロックセレクタは、何も宣言されなかった場合にブロックで使用されるデフォルトを表します。

<!--
### Version
 -->
### version

<!--
This field describes the format of the `theme.json` file. The current and only version is 1.
 -->
<!--  
このフィールドは、`theme.json` ファイルのフォーマットを表します。現在の唯一のバージョンは1です。
 -->
<!-- 

This field describes the format of the `theme.json` file. The current version is [v2](https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/), [introduced in WordPress 5.9](https://make.wordpress.org/core/2022/01/08/updates-for-settings-styles-and-theme-json/). It also works with the current Gutenberg plugin.
 -->
このフィールドは、`theme.json` ファイルのフォーマットを表します。現在のバージョンは [v2](https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/) で、[WordPress 5.9 で導入されました](https://make.wordpress.org/core/2022/01/08/updates-for-settings-styles-and-theme-json/)。現行の Gutenberg プラグインでも動作します。

<!-- 
If you have used [v1](https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-v1/) previously, you don’t need to update the version in the v1 file to v2, as it’ll be [migrated](https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-migrations/) into v2 at runtime for you.
 -->
過去に [v1](https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-v1/) を使っていた場合、v1 ファイルの version を v2 に更新する必要はありません。実行時に v2 に [移行](https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-migrations/) されます。

<!--
WordPress 5.8 will ignore the contents of any `theme.json` whose version is not equals to the current. Should the Gutenberg plugin need it, it'll update the version and will add the corresponding migration mechanisms from older versions.
 -->
<!-- 
WordPress 5.8 は、現行バージョンと異なる `theme.json` の内容を無視します。Gutenberg プラグインは必要があれば、バージョンを更新し、古いバージョンからの移行メカニズムを追加します。
 -->

<!--
### Settings
 -->
### settings

<!--
<div class="callout callout-alert">
The Gutenberg plugin extends the settings available from WordPress 5.8, so they can be used with other WordPress versions and they go through a maturation process before being ported to core.

The tabs below show WordPress 5.8 supported settings and the ones supported by the Gutenberg plugin.
</div>
 -->
> Gutenberg プラグインは、WordPress 5.8で利用可能な設定を拡張しています。このため、他のバージョンの WordPress でも利用でき、コアに移植される前に機能の成熟プロセスを経ます。
>
> 次のセクションでは、WordPress 5.8でサポートされる設定と、Gutenberg プラグインでサポートされる設定を示します。

<!--
The settings section has the following structure:
 -->
settings セクションは以下の構造を持ちます。
<!-- 
{% codetabs %}
{% WordPress %}
 -->
#### WordPress

```json
{
	"version": 2,
	"settings": {
		"border": {
			"radius": false,
			"color": false,
			"style": false,
			"width": false
		},
		"color": {
			"custom": true,
			"customDuotone": true,
			"customGradient": true,
			"duotone": [],
			"gradients": [],
			"link": false,
			"palette": [],
			"text": true,
			"background": true,
			"defaultGradients": true,
			"defaultPalette": true
		},
		"custom": {},
		"layout": {
			"contentSize": "800px",
			"wideSize": "1000px"
		},
		"spacing": {
			"margin": false,
			"padding": false,
			"blockGap": null,
			"units": [ "px", "em", "rem", "vh", "vw" ]
		},
		"typography": {
			"customFontSize": true,
			"lineHeight": false,
			"dropCap": true,
			"fluid": false,
			"fontStyle": true,
			"fontWeight": true,
			"letterSpacing": true,
			"textDecoration": true,
			"textTransform": true,
			"fontSizes": [],
			"fontFamilies": []
		},
		"blocks": {
			"core/paragraph": {
				"color": {},
				"custom": {},
				"layout": {},
				"spacing": {},
				"typography": {}
			},
			"core/heading": {},
			"etc": {}
		}
	}
}
```
<!-- 
{% Gutenberg %}
 -->
#### Gutenberg

```json
{
	"version": 2,
	"settings": {
		"appearanceTools": false,
		"border": {
			"color": false,
			"radius": false,
			"style": false,
			"width": false
		},
		"color": {
			"background": true,
			"custom": true,
			"customDuotone": true,
			"customGradient": true,
			"defaultGradients": true,
			"defaultPalette": true,
			"duotone": [],
			"gradients": [],
			"link": false,
			"palette": [],
			"text": true
		},
		"custom": {},
		"dimensions": {
			"aspectRatio": false,
			"minHeight": false,
		},
		"layout": {
			"contentSize": "800px",
			"wideSize": "1000px"
		},
		"spacing": {
			"blockGap": null,
			"margin": false,
			"padding": false,
			"customSpacingSize": true,
			"units": [ "px", "em", "rem", "vh", "vw" ],
			"spacingScale": {
				"operator": "*",
				"increment": 1.5,
				"steps": 7,
				"mediumStep": 1.5,
				"unit": "rem"
			},
			"spacingSizes": []
		},
		"typography": {
			"customFontSize": true,
			"dropCap": true,
			"fluid": false,
			"fontFamilies": [],
			"fontSizes": [],
			"fontStyle": true,
			"fontWeight": true,
			"letterSpacing": true,
			"lineHeight": false,
			"textColumns": false,
			"textDecoration": true,
			"textTransform": true
		},
		"blocks": {
			"core/paragraph": {
				"border": {},
				"color": {},
				"custom": {},
				"layout": {},
				"spacing": {},
				"typography": {}
			},
			"core/heading": {},
			"etc": {}
		}
	}
}
```
<!-- 
{% end %}
 -->

<!--
Each block can configure any of these settings separately, providing a more fine-grained control over what exists via `add_theme_support`. The settings declared at the top-level affect to all blocks, unless a particular block overwrites it. It's a way to provide inheritance and configure all blocks at once.
 -->
それぞれのブロックは個別にこれらの設定を構成でき、既存の `add_theme_support` を介したものよりも、詳細な制御を行えます。トップレベルで宣言されたブロック設定は、個別に上書きしない限り、すべてのブロックに影響します。継承のコンセプトを導入し、すべてのブロックを一度に構成できます。

<!--
Note, however, that not all settings are relevant for all blocks. The settings section provides an opt-in/opt-out mechanism for themes, but it's the block's responsibility to add support for the features that are relevant to it. For example, if a block doesn't implement the `dropCap` feature, a theme can't enable it for such a block through `theme.json`.
 -->
注意: ただし、すべての設定がすべてのブロックに関連するわけではありません。settings セクションはテーマに対してオプトイン、オプトアウトの仕組みを提供しますが、関連する機能のサポートの追加はブロックの責任です。たとえばブロックが `dropCap` 機能を実装しなければ、テーマは `theme.json` を介して有効化できません。

<!-- 
### Opt-in into UI controls
 -->
### UI コントロールへのオプトイン

<!-- 
There's one special setting property, `appearanceTools`, which is a boolean and its default value is false. Themes can use this setting to enable the following ones:
 -->
特別な設定プロパティとして `appearanceTools` があります。ブール値で、デフォルト値は false です。テーマはこの設定を使用して、以下を有効化できます。

- background: backgroundImage
- border: color, radius, style, width
- color: link
- dimensions: minHeight
- position: sticky
- spacing: blockGap, margin, padding
- typography: lineHeight

<!--
#### Backward compatibility with add_theme_support
 -->
#### add_theme_support との後方互換性

<!--
To retain backward compatibility, the existing `add_theme_support` declarations that configure the block editor are retrofit in the proper categories for the top-level section. For example, if a theme uses `add_theme_support('disable-custom-colors')`, it'll be the same as setting `settings.color.custom` to `false`. If the `theme.json` contains any settings, these will take precedence over the values declared via `add_theme_support`. This is the complete list of equivalences:
 -->
後方互換性のため、ブロックエディターを構成する既存の `add_theme_support` の宣言は、トップレベルのセクションの適切なカテゴリーに割り当てられます。たとえば、テーマが `add_theme_support('disable-custom-colors')` を使用している場合、これは `settings.color.custom` に `false` を設定したことと同じです。`theme.json` 内に設定があれば、 `add_theme_support` を介して宣言された値に優先します。以下は、完全な対応リストです。

<!--
| add_theme_support           | theme.json setting                                        |
| --------------------------- | --------------------------------------------------------- |
| `custom-line-height`        | Set `typography.lineHeight` to `true`.              |
| `custom-spacing`            | Set `spacing.padding` to `true`.                    |
| `custom-units`              | Provide the list of units via `spacing.units`.            |
| `disable-custom-colors`     | Set `color.custom` to `false`.                            |
| `disable-custom-font-sizes` | Set `typography.customFontSize` to `false`.               |
| `disable-custom-gradients`  | Set `color.customGradient` to `false`.                    |
| `editor-color-palette`      | Provide the list of colors via `color.palette`.           |
| `editor-font-sizes`         | Provide the list of font size via `typography.fontSizes`. |
| `editor-gradient-presets`   | Provide the list of gradients via `color.gradients`.      |
| `appearance-tools`          | Set `appearanceTools` to `true`.                          |
| `border`                    | Set `border: color, radius, style, width` to `true`.      |
| `link-color `               | Set `color.link` to `true`.                               |
 -->
| add_theme_support           | theme.json 設定                                        |
| --------------------------- | --------------------------------------------------------- |
| `custom-line-height`        | `typography.lineHeight` に `true` を設定       |
| `custom-spacing`            | `spacing.padding` に `true` を設定            |
| `custom-units`              | `spacing.units` で単位のリストを渡す            |
| `disable-custom-colors`     | `color.custom` に `false` を設定                       |
| `disable-custom-font-sizes` | `typography.customFontSize` に `false` を設定           |
| `disable-custom-gradients`  | `color.customGradient` に `false` を設定               |
| `editor-color-palette`      | `color.palette` で色のリストを渡す     |
| `editor-font-sizes`         | `typography.fontSizes` でフォントサイズのリストを渡す |
| `editor-gradient-presets`   | `color.gradients` でグラデーションのリストを渡す      |
| `appearance-tools`          | `appearanceTools` に `true` を設定                          |
| `border`                    | `border: color, radius, style, width` に `true` を設定      |
| `link-color `               | `color.link` に `true` を設定                               |

<!--
Let's say a theme author wants to enable custom colors only for the paragraph block. This is how it can be done:
 -->
<!--
テーマ作者が段落ブロックのみにカスタムカラーを有効化したいとします。この場合、以下のようになります。
 -->
<!--
```json
{
	"version": 1,
	"settings": {
		"color": {
			"custom": false
		},
		"blocks": {
			"core/paragraph": {
				"color": {
					"custom": true
				}
			}
		}
	}
}
```
 -->

<!--
#### Presets
 -->
#### プリセット
<!--
Presets are part of the settings section. Each preset value will generate a CSS Custom Property that will be added to the new stylesheet, which follow this naming schema: `--wp--preset--{preset-category}--{preset-slug}`.
 -->
プリセットは settings セクションの一部です。各プリセット値は新しいスタイルシートに追加される CSS カスタムプロパティを生成します。CSS カスタムプロパティは命名スキーマ `--wp--preset--{preset-category}--{preset-slug}` に従います。

<!--
Presets are part of the settings section. They are values that are shown to the user via some UI controls. By defining them via `theme.json` the engine can do more for themes, such as automatically translate the preset name or enqueue the corresponding CSS classes and custom properties.
 -->
プリセットは settings セクションの一部で、UI コントロールを介してユーザーに表示される値です。`theme.json` で定義することでエンジンは、自動的にプリセット名を翻訳したり、対応する CSS クラスやカスタムプロパティをエンキューするなどテーマに対して多くを実行します。

<!--
The following presets can be defined via `theme.json`:
 -->
以下のプリセットを `theme.json` で定義できます。

<!--
- `color.duotone`: doesn't generate classes or custom properties.
- `color.gradients`: generates a single class and custom property per preset value.
- `color.palette`:
    - generates 3 classes per preset value: color, background-color, and border-color.
    - generates a single custom property per preset value.
- `spacing.spacingScale`: used to generate an array of spacing preset sizes for use with padding, margin, and gap settings.
    - `operator`: specifies how to calculate the steps with either `*` for multiplier, or `+` for sum.
    - `increment`: the amount to increment each step by. Core by default uses a 'perfect 5th' multiplier of `1.5`.
    - `steps`: the number of steps to generate in the spacing scale. The default is 7. To prevent the generation of the spacing presets, and to disable the related UI, this can be set to `0`.
    - `mediumStep`: the steps in the scale are generated descending and ascending from a medium step, so this should be the size value of the medium space, without the unit. The default medium step is `1.5rem` so the mediumStep value is `1.5`.
    - `unit`: the unit the scale uses, eg. `px, rem, em, %`. The default is `rem`.
- `spacing.spacingSizes`: themes can choose to include a static `spacing.spacingSizes` array of spacing preset sizes if they have a sequence of sizes that can't be generated via an increment or multiplier.
    - `name`: a human readable name for the size, eg. `Small, Medium, Large`.
    - `slug`: the machine readable name. In order to provide the best cross site/theme compatibility the slugs should be in the format, "10","20","30","40","50","60", with "50" representing the `Medium` size value.
    - `size`: the size, including the unit, eg. `1.5rem`. It is possible to include fluid values like `clamp(2rem, 10vw, 20rem)`.
- `typography.fontSizes`: generates a single class and custom property per preset value.
- `typography.fontFamilies`: generates a single custom property per preset value.
 -->
- `color.duotone`: クラスやカスタムプロパティを生成しません。
- `color.gradients`: プリセット値ごとに1つのクラスとカスタムプロパティを生成します。
- `color.palette`:
    - プリセット値ごとに3つのクラスを生成します: color、background-color、border-color
    - プリセット値ごとに1つのカスタムプロパティを生成します。
- `spacing.spacingScale`: padding、margin、gap の設定に使用する、spacing プリセットサイズの配列の生成に使用されます。
    - `operator`: ステップを掛け算で計算するか(`*`)、足し算で計算するか(`+`)を指定します。
    - `increment`: 各ステップの増加量。コアはデフォルトで `1.5` の掛け算、「完全五度」を使用します。
    - `steps`: spacing スケールを生成するステップ数。デフォルトは7。spacing プリセットを生成せず、関連する UI を無効にするには、`0`に設定します。
    - `mediumStep`: スケールのステップは、中間のステップから減少、増加の2方向に生成されるため、これは中間の space のサイズ値でなければならず、単位を含みません。デフォルトの中間のステップは `1.5rem` のため、mediumStep の値は `1.5` です。
    - `unit`: スケールの使用する単位。例えば、`px, rem, em, %`。デフォルトは `rem`。
- `spacing.spacingSizes`: 足し算や掛け算で生成できないサイズの並びがある場合、テーマは spacing プリセットサイズの静的配列 `spacing.spacingSizes` を含めることを選択できます。
    - `name`: 人が読めるサイズの名前。例: `Small, Medium, Large`。
    - `slug`: 機械が読める名前。サイトやテーマ間の互換性を保つため、slug は "10", "20", "30", "40", "50", "60" の形式で、"50"は `Medium` サイズの値を表してください。
    - `size`: 単位を含むサイズ。例: `1.5rem`. fluid 値を含むことも可能。例: `clamp(2rem, 10vw, 20rem)`
- `typography.fontSizes`: プリセット値ごとに1つのクラスとカスタムプロパティを生成します。
- `typography.fontFamilies`: プリセット値ごとに1つのカスタムプロパティを生成します。

<!--
The naming schema for the classes and the custom properties is as follows:
 -->
クラスとカスタムプロパティは次の命名スキーマに従います。

<!--
- Custom Properties: `--wp--preset--{preset-category}--{preset-slug}` such as `--wp--preset--color--black`
- Classes: `.has-{preset-slug}-{preset-category}` such as `.has-black-color`.
 -->
- カスタムプロパティ: `--wp--preset--{preset-category}--{preset-slug}` 例: `--wp--preset--color--black`
- クラス: `.has-{preset-slug}-{preset-category}` 例: `.has-black-color`.

<!-- 
#### Input
 -->
#### 入力

<!-- 
{% codetabs %}
{% Input %}
 -->
```json
{
	"version": 2,
	"settings": {
		"color": {
			"duotone": [
				{
					"colors": [ "#000", "#FFF" ],
					"slug": "black-and-white",
					"name": "Black and White"
				}
			],
			"gradients": [
				{
					"slug": "blush-bordeaux",
					"gradient": "linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%)",
					"name": "Blush bordeaux"
				},
				{
					"slug": "blush-light-purple",
					"gradient": "linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%)",
					"name": "Blush light purple"
				}
			],
			"palette": [
				{
					"slug": "strong-magenta",
					"color": "#a156b4",
					"name": "Strong magenta"
				},
				{
					"slug": "very-dark-grey",
					"color": "rgb(131, 12, 8)",
					"name": "Very dark grey"
				}
			]
		},
		"typography": {
			"fontFamilies": [
				{
					"fontFamily": "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell, \"Helvetica Neue\",sans-serif",
					"slug": "system-font",
					"name": "System Font"
				},
				{
					"fontFamily": "Helvetica Neue, Helvetica, Arial, sans-serif",
					"slug": "helvetica-arial",
					"name": "Helvetica or Arial"
				}
			],
			"fontSizes": [
				{
					"slug": "big",
					"size": 32,
					"name": "Big"
				},
				{
					"slug": "x-large",
					"size": 46,
					"name": "Large"
				}
			]
		},
		"spacing": {
			"spacingScale": {
				"operator": "*",
				"increment": 1.5,
				"steps": 7,
				"mediumStep": 1.5,
				"unit": "rem"
			},
			"spacingSizes": [
				{
					"slug": "40",
					"size": "1rem",
					"name": "Small"
				},
				{
					"slug": "50",
					"size": "1.5rem",
					"name": "Medium"
				},
				{
					"slug": "60",
					"size": "2rem",
					"name": "Large"
				}
			]
		},
		"blocks": {
			"core/group": {
				"color": {
					"palette": [
						{
							"slug": "black",
							"color": "#000000",
							"name": "Black"
						},
						{
							"slug": "white",
							"color": "#ffffff",
							"name": "White"
						}
					]
				}
			}
		}
	}
}
```

<!-- 
#### Output
 -->
#### 出力
<!-- 
{% Output %}
 -->
```css
/* Top-level custom properties */
body {
	--wp--preset--color--strong-magenta: #a156b4;
	--wp--preset--color--very-dark-grey: #444;
	--wp--preset--gradient--blush-bordeaux: linear-gradient( 135deg, rgb( 254, 205, 165 ) 0%, rgb( 254, 45, 45 ) 50%, rgb( 107, 0, 62 ) 100% );
	--wp--preset--gradient--blush-light-purple: linear-gradient( 135deg, rgb( 255, 206, 236 ) 0%, rgb( 152, 150, 240 ) 100% );
	--wp--preset--font-size--x-large: 46;
	--wp--preset--font-size--big: 32;
	--wp--preset--font-family--helvetica-arial: Helvetica Neue, Helvetica, Arial, sans-serif;
	--wp--preset--font-family--system: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell, \"Helvetica Neue\",sans-serif;
	--wp--preset--spacing--20: 0.44rem;
	--wp--preset--spacing--30: 0.67rem;
	--wp--preset--spacing--40: 1rem;
	--wp--preset--spacing--50: 1.5rem;
	--wp--preset--spacing--60: 2.25rem;
	--wp--preset--spacing--70: 3.38rem;
	--wp--preset--spacing--80: 5.06rem;
}

/* Block-level custom properties (bounded to the group block) */
.wp-block-group {
	--wp--preset--color--black: #000000;
	--wp--preset--color--white: #ffffff;
}

/* Top-level classes */
.has-strong-magenta-color { color: #a156b4 !important; }
.has-strong-magenta-background-color { background-color: #a156b4 !important; }
.has-strong-magenta-border-color { border-color: #a156b4 !important; }
.has-very-dark-grey-color { color: #444 !important; }
.has-very-dark-grey-background-color { background-color: #444 !important; }
.has-very-dark-grey-border-color { border-color: #444 !important; }
.has-blush-bordeaux-background { background: linear-gradient( 135deg, rgb( 254, 205, 165 ) 0%, rgb( 254, 45, 45 ) 50%, rgb( 107, 0, 62 ) 100% ) !important; }
.has-blush-light-purple-background { background: linear-gradient( 135deg, rgb( 255, 206, 236 ) 0%, rgb( 152, 150, 240 ) 100% ) !important; }
.has-big-font-size { font-size: 32; }
.has-normal-font-size { font-size: 16; }

/* Block-level classes (bounded to the group block) */
.wp-block-group.has-black-color { color: #a156b4 !important; }
.wp-block-group.has-black-background-color { background-color: #a156b4 !important; }
.wp-block-group.has-black-border-color { border-color: #a156b4 !important; }
.wp-block-group.has-white-color { color: #444 !important; }
.wp-block-group.has-white-background-color { background-color: #444 !important; }
.wp-block-group.has-white-border-color { border-color: #444 !important; }

```
<!-- 
{% end %}
 -->

<!--
To maintain backward compatibility, the presets declared via `add_theme_support` will also generate the CSS Custom Properties. If the `theme.json` contains any presets, these will take precedence over the ones declared via `add_theme_support`.
 -->
後方互換性のため、`add_theme_support` を介して宣言されたプリセットもまた CSS カスタムプロパティを生成します。`theme.json` に含まれるプリセットは `add_theme_support` を介して宣言されたプリセットに優先します。

<!--
Preset classes are attached to the content of a post by some user action. That's why the engine will add `!important` to these, because user styles should take precedence over theme styles.
 -->
プリセットクラスは、ユーザーアクションにより、投稿のコンテンツに付加されます。ユーザーのスタイルをテーマのスタイルに優先させるため、エンジンは `!important` を追加します。

<!--
#### Custom
 -->
#### カスタム

<!--
In addition to create CSS Custom Properties for the presets, the `theme.json` also allows for themes to create their own, so they don't have to be enqueued separately. Any values declared within the `custom` field will be transformed to CSS Custom Properties following this naming schema: `--wp--custom--<variable-name>`.
 -->
プリセット用の CSS カスタムプロパティの作成に加えてテーマは `theme.json` を使用して独自のプロパティを作成できます。別々にエンキューする必要はありません。`custom` フィールド内に定義された任意の値は、命名スキーマ `--wp--custom--<variable-name>` を持つ CSS カスタムプロパティに変換されます。

<!--
For example:
 -->
例:

<!-- 
#### Input
 -->
#### 入力
<!-- 
{% codetabs %}
{% Input %}
 -->
```json
{
	"version": 2,
	"settings": {
		"custom": {
			"baseFont": 16,
			"lineHeight": {
				"small": 1.2,
				"medium": 1.4,
				"large": 1.8
			}
		},
		"blocks": {
			"core/group": {
				"custom": {
					"baseFont": 32
				}
			}
		}
	}
}
```
<!-- 
#### Output
 -->
#### 出力
<!-- 
{% Output %}
 -->
```css
body {
	--wp--custom--base-font: 16;
	--wp--custom--line-height--small: 1.2;
	--wp--custom--line-height--medium: 1.4;
	--wp--custom--line-height--large: 1.8;
}
.wp-block-group {
	--wp--custom--base-font: 32;
}
```
<!-- 
{% end %}
 -->
<!--
Note that the name of the variable is created by adding `--` in between each nesting level and `camelCase` fields are transformed to `kebab-case`.
 -->
注意: 変数名は各ネストレベルの間に `--` を追加し、`camelCase` フィールドは `kebab-case` に変換して作成されます。

<!--
#### Settings examples
 -->
#### settings の例

<!--
- Enable custom colors only for the paragraph block:
 -->
- 段落ブロックのみにカスタム色を有効化

```json
{
	"version": 2,
	"settings": {
		"color": {
			"custom": false
		},
		"blocks": {
			"core/paragraph": {
				"color": {
					"custom": true
				}
			}
		}
	}
}
```
<!--
- Disable border radius for the button block:
 -->
- ボタンブロックの枠の角丸を無効化

```json
{
	"version": 2,
	"settings": {
		"blocks": {
			"core/button": {
				"border": {
					"radius": false
				}
			}
		}
	}
}
```

- グループブロックのみに他と異なるパレットを設定

```json
{
	"version": 2,
	"settings": {
		"color": {
			"palette": [
				{
					"slug": "black",
					"color": "#000000",
					"name": "Black"
				},
				{
					"slug": "white",
					"color": "#FFFFFF",
					"name": "White"
				},
				{
					"slug": "red",
					"color": "#FF0000",
					"name": "Red"
				},
				{
					"slug": "green",
					"color": "#00FF00",
					"name": "Green"
				},
				{
					"slug": "blue",
					"color": "#0000FF",
					"name": "Blue"
				}
			]
		},
		"blocks": {
			"core/group": {
				"color": {
					"palette": [
						{
							"slug": "black",
							"color": "#000000",
							"name": "Black"
						},
						{
							"slug": "white",
							"color": "#FFF",
							"name": "White"
						}
					]
				}
			}
		}
	}
}
```

<!--
### Styles
 -->
### styles

<!--
<div class="callout callout-alert">
The Gutenberg plugin extends the styles available from WordPress 5.8, so they can be used with other WordPress versions and they go through a maturation process before being ported to core.

The tabs below show WordPress 5.8 supported styles and the ones supported by the Gutenberg plugin.
</div>
-->
> Gutenberg プラグインは、WordPress 5.8で利用可能なスタイルを拡張しています。このため、他のバージョンの WordPress でも利用でき、コアに移植される前に機能の成熟プロセスを経ます。
>
> 次のセクションでは、WordPress 5.8でサポートされるスタイルと、Gutenberg プラグインでサポートされるスタイルを示します。

<!--
Each block declares which style properties it exposes via the [block supports mechanism](/docs/reference-guides/block-api/block-supports.md). The support declarations are used to automatically generate the UI controls for the block in the editor. Themes can use any style property via the `theme.json` for any block ― it's the theme's responsibility to verify that it works properly according to the block markup, etc.
 -->
各ブロックは[ブロックサポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/)を介して、どのスタイルプロパティを公開するかを宣言します。サポートの宣言はエディター内でのブロックの UI コントロールを自動的に生成するために使用されます。テーマは `theme.json` を介して、任意のブロックのために、任意のスタイルプロパティを使用できます。ブロックマークアップ等に関して正しく動作するかどうかの検証は、テーマの責任です。

#### WordPress
<!-- 
{% codetabs %}
{% WordPress %}
 -->
```json
{
	"version": 2,
	"styles": {
		"border": {
			"radius": "value",
			"color": "value",
			"style": "value",
			"width": "value"
		},
		"filter": {
			"duotone": "value"
		},
		"color": {
			"background": "value",
			"gradient": "value",
			"text": "value"
		},
		"spacing": {
			"blockGap": "value",
			"margin": {
				"top": "value",
				"right": "value",
				"bottom": "value",
				"left": "value",
			},
			"padding": {
				"top": "value",
				"right": "value",
				"bottom": "value",
				"left": "value"
			}
		},
		"typography": {
			"fontSize": "value",
			"fontStyle": "value",
			"fontWeight": "value",
			"letterSpacing": "value",
			"lineHeight": "value",
			"textDecoration": "value",
			"textTransform": "value"
		},
		"elements": {
			"link": {
				"border": {},
				"color": {},
				"spacing": {},
				"typography": {}
			},
			"h1": {},
			"h2": {},
			"h3": {},
			"h4": {},
			"h5": {},
			"h6": {}
		},
		"blocks": {
			"core/group": {
				"border": {},
				"color": {},
				"spacing": {},
				"typography": {},
				"elements": {
					"link": {},
					"h1": {},
					"h2": {},
					"h3": {},
					"h4": {},
					"h5": {},
					"h6": {}
				}
			},
			"etc": {}
		}
	}
}
```
<!-- 
{% Gutenberg %}
 -->
#### Gutenberg

```json
{
	"version": 2,
	"styles": {
		"border": {
			"color": "value",
			"radius": "value",
			"style": "value",
			"width": "value"
		},
		"color": {
			"background": "value",
			"gradient": "value",
			"text": "value"
		},
		"dimensions": {
			"aspectRatio": "value",
			"minHeight": "value"
		},
		"filter": {
			"duotone": "value"
		},
		"spacing": {
			"blockGap": "value",
			"margin": {
				"top": "value",
				"right": "value",
				"bottom": "value",
				"left": "value"
			},
			"padding": {
				"top": "value",
				"right": "value",
				"bottom": "value",
				"left": "value"
			}
		},
		"typography": {
			"fontFamily": "value",
			"fontSize": "value",
			"fontStyle": "value",
			"fontWeight": "value",
			"letterSpacing": "value",
			"lineHeight": "value",
			"textColumns": "value",
			"textDecoration": "value",
			"textTransform": "value"
		},
		"elements": {
			"link": {
				"border": {},
				"color": {},
				"spacing": {},
				"typography": {}
			},
			"h1": {},
			"h2": {},
			"h3": {},
			"h4": {},
			"h5": {},
			"h6": {},
			"heading": {},
			"button": {},
			"caption": {}
		},
		"blocks": {
			"core/group": {
				"border": {},
				"color": {},
				"dimensions": {},
				"spacing": {},
				"typography": {},
				"elements": {
					"link": {},
					"h1": {},
					"h2": {},
					"h3": {},
					"h4": {},
					"h5": {},
					"h6": {}
				}
			},
			"etc": {}
		}
	}
}
```
<!-- 
{% end %}
 -->

<!--
### Top-level styles
 -->
### トップレベルスタイル

<!--
Styles found at the top-level will be enqueued using the `body` selector.
 -->
トップレベルのスタイルは `body` セレクタを使用してエンキューされます。

<!-- 
#### Input
 -->
#### 入力
<!-- 
{% codetabs %}
{% Input %}
 -->
```json
{
	"version": 1,
	"styles": {
		"color": {
			"text": "var(--wp--preset--color--primary)"
		}
	}
}
```

<!-- 
#### Output
 -->
#### 出力
<!-- 
{% Output %}
 -->
```css
body {
	color: var( --wp--preset--color--primary );
}
```

<!-- 
{% end %}
 -->
<!--
### Block styles
 -->
### ブロックスタイル

<!--
Styles found within a block will be enqueued using the block selector.
 -->
ブロック内のスタイルは、ブロックセレクタを使用してエンキューされます。

<!--
By default, the block selector is generated based on its name such as `.wp-block-<blockname-without-namespace>`. For example, `.wp-block-group` for the `core/group` block. There are some blocks that want to opt-out from this default behavior. They can do so by explicitly telling the system which selector to use for them via the `__experimentalSelector` key within the `supports` section of its `block.json` file. Note that the block needs to be registered server-side for the `__experimentalSelector` field to be available to the style engine.
 -->
デフォルトでは、ブロックセレクタは `.wp-block-<blockname-without-namespace>` のような名前を基にして生成されます。たとえば、`core/group` ブロックの `.wp-block-group` です。このデフォルトの動作をオプトアウトしたいブロックもあります。これには明示的にシステムに対してどのセレクタを使用するか、`block.json` ファイルの `supports` セクション内の `__experimentalSelector` キーで指定します。注意: スタイルエンジンが `__experimentalSelector` フィールドを利用できるようにするには、このブロックをサーバーサイドで登録する必要があります。

<!-- 
#### Input
 -->
#### 入力
<!-- 
{% codetabs %}
{% Input %}
 -->
```json
{
	"version": 1,
	"styles": {
		"color": {
			"text": "var(--wp--preset--color--primary)"
		},
		"blocks": {
			"core/paragraph": {
				"color": {
					"text": "var(--wp--preset--color--secondary)"
				}
			},
			"core/group": {
				"color": {
					"text": "var(--wp--preset--color--tertiary)"
				}
			}
		}
	}
}
```

<!-- 
#### Output
 -->
#### 出力
<!-- 
{% Output %}
 -->
```css
body {
	color: var( --wp--preset--color--primary );
}
p { /* The core/paragraph opts out from the default behaviour and uses p as a selector. */
	color: var( --wp--preset--color--secondary );
}
.wp-block-group {
	color: var( --wp--preset--color--tertiary );
}
```
<!-- 
{% end %}
 -->
<!-- 
#### Referencing a style
 -->
#### スタイルの参照

<!-- 
A block can be styled using a reference to a root level style. This feature is supported by Gutenberg.
If you register a background color for the root using styles.color.background:
 -->
ブロックは、ルートレベルのスタイルへの参照を使用して、スタイルを設定できます。この機能は Gutenberg でサポートされています。
ルートの背景色を styles.color.background を使用して登録すると、

```JSON
"styles": {
		"color": {
			"background": "var(--wp--preset--color--primary)"
		}
	}
```
<!-- 
You can use `ref: "styles.color.background"`  to re-use the style for a block:
 -->
`ref: "styles.color.background"` を使用して、ブロックにスタイルを再利用できます。

```JSON
{
	"color": {
		"text": { "ref": "styles.color.background" }
	}
}
```

<!--
#### Element styles
 -->
#### 要素スタイル

<!--
In addition to top-level and block-level styles, there's the concept of elements that can be used in both places. There's a closed set of them:
 -->
トップレベル、ブロックレベルのスタイルに加えて、両方の場所で使用できる要素のコンセプトがあります。

<!-- 
Supported by Gutenberg:

- `button`: maps to the `wp-element-button` CSS class. Also maps to `wp-block-button__link` for backwards compatibility.
- `caption`: maps to the `.wp-element-caption, .wp-block-audio figcaption, .wp-block-embed figcaption, .wp-block-gallery figcaption, .wp-block-image figcaption, .wp-block-table figcaption, .wp-block-video figcaption` CSS classes.
- `heading`: maps to all headings, the `h1 to h6` CSS selectors.

Supported by WordPress:
 -->
Gutenberg によるサポート

- `button`: `wp-element-button` CSS クラスにマップ。後方互換性のため、`wp-block-button__link` にもマップ
- `caption`: `.wp-element-caption, .wp-block-audio figcaption, .wp-block-embed figcaption, .wp-block-gallery figcaption, .wp-block-image figcaption, .wp-block-table figcaption, .wp-block-video figcaption` CSS クラスにマップ
- `heading`: すべての見出し、`h1` から `h6` CSS セレクタにマップ

<!--
Supported by WordPress:
 -->
WordPress によるサポート

<!--
- `h1`: maps to the `h1` CSS selector.
- `h2`: maps to the `h2` CSS selector.
- `h3`: maps to the `h3` CSS selector.
- `h4`: maps to the `h4` CSS selector.
- `h5`: maps to the `h5` CSS selector.
- `h6`: maps to the `h6` CSS selector.
- `link`: maps to the `a` CSS selector.
 -->
- `h1`: `h1` CSS セレクタにマップ
- `h2`: `h2` CSS セレクタにマップ
- `h3`: `h3` CSS セレクタにマップ
- `h4`: `h4` CSS セレクタにマップ
- `h5`: `h5` CSS セレクタにマップ
- `h6`: `h6` CSS セレクタにマップ
- `link`: `a` CSS セレクタにマップ

<!--
If they're found in the top-level the element selector will be used. If they're found within a block, the selector to be used will be the element's appended to the corresponding block.
 -->
トップレベルにあれば、要素セレクタが使用されます。ブロック内にあれば、使用されるセレクタは、対応するブロックに追加された形の要素セレクタになります。

<!-- 
#### Input
 -->
#### 入力

<!-- 
{% codetabs %}
{% Input %}
 -->
```json
{
	"version": 1,
	"styles": {
		"typography": {
			"fontSize": "var(--wp--preset--font-size--normal)"
		},
		"elements": {
			"h1": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--huge)"
				}
			},
			"h2": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--big)"
				}
			},
			"h3": {
				"typography": {
					"fontSize": "var(--wp--preset--font-size--medium)"
				}
			}
		},
		"blocks": {
			"core/group": {
				"elements": {
					"h2": {
						"typography": {
							"fontSize": "var(--wp--preset--font-size--small)"
						}
					},
					"h3": {
						"typography": {
							"fontSize": "var(--wp--preset--font-size--smaller)"
						}
					}
				}
			}
		}
	}
}
```

<!-- 
#### Output
 -->
#### 出力
<!-- 
{% Output %}
 -->
```css
body {
	font-size: var( --wp--preset--font-size--normal );
}
h1 {
	font-size: var( --wp--preset--font-size--huge );
}
h2 {
	font-size: var( --wp--preset--font-size--big );
}
h3 {
	font-size: var( --wp--preset--font-size--medium );
}
.wp-block-group h2 {
	font-size: var( --wp--preset--font-size--small );
}
.wp-block-group h3 {
	font-size: var( --wp--preset--font-size--smaller );
}
```

<!-- 
{% end %}
 -->
<!-- 
##### Element pseudo selectors
 -->
##### 要素疑似セレクタ
<!-- 
Pseudo selectors `:hover`, `:focus`, `:visited`, `:active`, `:link`, `:any-link` are supported by Gutenberg.
 -->
疑似セレクタ `:hover`、`:focus`、`:visited`、`:active`、`:link`、`:any-link` を Gutenberg はサポートします。

```json
"elements": {
		"link": {
			"color": {
				"text": "green"
			},
			":hover": {
				"color": {
					"text": "hotpink"
				}
			}
		}
	}
```

#### Variations

<!-- 
A block can have a "style variation", as defined per the [block.json specification](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/#styles-optional). Theme authors can define the style attributes for an existing style variation using the theme.json file. Styles for unregistered style variations will be ignored.

Note that variations are a "block concept", they only exist bound to blocks. The `theme.json` specification respects that distinction by only allowing `variations` at the block-level but not at the top-level. It's also worth highlighting that only variations defined in the `block.json` file of the block are considered "registered": so far, the style variations added via `register_block_style` or in the client are ignored, see [this issue](https://github.com/WordPress/gutenberg/issues/49602) for more information.

For example, this is how to provide styles for the existing `plain` variation for the `core/quote` block:
 -->
ブロックは、[block.json の仕様](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/#styles-%e3%82%aa%e3%83%97%e3%82%b7%e3%83%a7%e3%83%b3)で定義されているように「スタイルのバリエーション」を持つことができます。テーマ作成者は、theme.json ファイルを使用して、既存のスタイルバリエーションのスタイル属性を定義できます。登録されていないスタイルバリエーションのスタイルは、無視されます。

ここでバリエーションは「ブロックの概念」であり、ブロックと関連してのみ存在することに注意してください。`theme.json` の仕様は、ブロックレベルでのみ `バリエーション`を許可し、トップレベルでは許可しないことでこの区別を大切にしています。また、ブロックの `block.json` ファイルで定義されたバリエーションのみを「登録」されたとものとしてみなすことも強調しておきます。現在 `register_block_style` やクライアントで追加されたスタイルバリエーションは無視されます。詳しくは [この issue](https://github.com/WordPress/gutenberg/issues/49602) を参照してください。

例えば、`core/quote` ブロックの既存の `plain` バリエーションにスタイルを当てる方法です。

```json
{
	"version": 2,
	"styles":{
		"blocks": {
			"core/quote": {
				"variations": {
					"plain": {
						"color": {
							"background": "red"
						}
					}
				}
			}
		}
	}
}
```
<!-- 
The resulting CSS output is this:
 -->
結果の CSS 出力は以下です。

```css
.wp-block-quote.is-style-plain {
	background-color: red;
}
```

### customTemplates

<!-- 
<div class="callout callout-alert">Supported in WordPress from version 5.9.</div>
 -->
> WordPress Version 5.9 以降でサポートされます。

<!--
Within this field themes can list the custom templates present in the `templates` folder. For example, for a custom template named `my-custom-template.html`, the `theme.json` can declare what post types can use it and what's the title to show the user:
 -->
このフィールド内にテーマは、`templates` フォルダー内にあるカスタムテンプレートをリストできます。たとえば、カスタムテンプレート `my-custom-template.html` に対して、`theme.json` はどの投稿タイプが使用でき、ユーザーにどのようなタイトルを表示するか宣言できます。

<!--
- name: mandatory.
- title: mandatory, translatable.
- postTypes: optional, only applies to the `page` by default.
 -->
- name: 必須
- title: 必須。翻訳可能
- postTypes: オプション。デフォルトでは `page` のみに適用

```json
{
    "version": 2,
	"customTemplates": [
		{
			"name": "my-custom-template",
			"title": "The template title",
			"postTypes": [
				"page",
				"post",
				"my-cpt"
			]
		}
	]
}
```

### templateParts

<!-- 
<div class="callout callout-alert">Supported in WordPress from version 5.9.</div>
 -->
> WordPress Version 5.9 以降でサポートされます。

<!--
Within this field themes can list the template parts present in the `parts` folder. For example, for a template part named `my-template-part.html`, the `theme.json` can declare the area term for the template part entity which is responsible for rendering the corresponding block variation (Header block, Footer block, etc.) in the editor. Defining this area term in the json will allow the setting to persist across all uses of that template part entity, as opposed to a block attribute that would only affect one block. Defining area as a block attribute is not recommended as this is only used 'behind the scenes' to aid in bridging the gap between placeholder flows and entity creation.
 -->
このフィールド内にテーマは、`parts` フォルダーにあるテンプレートパーツをリストできます。たとえば、テンプレートパーツ `my-template-part.html` に対して、`theme.json` は、テンプレートパーツのエンティティのための area タームを宣言できます。エンティティはエディター内で、対応するブロックバリエーション (ヘッダーブロック、フッターブロックなど) をレンダリングする責任があります。json 内で area タームを定義するとテンプレートパーツエンティティのすべての使用において設定を永続化できます。これは、ブロック属性が1つのブロックのみに影響するのとは対照的です。ブロック属性としての area 定義は推奨されません。これは「表舞台の裏側」で使用され、プレースホルダーフローとエンティティ作成のギャップの橋渡しを支援します。

<!--
Currently block variations exist for "header" and "footer" values of the area term, any other values and template parts not defined in the json will default to the general template part block. Variations will be denoted by specific icons within the editor's interface, will default to the corresponding semantic HTML element for the wrapper (this can also be overridden by the `tagName` attribute set on the template part block), and will contextualize the template part allowing more custom flows in future editor improvements.
 -->
現在、ブロックバリエーションは、area タームの header と footer の値に対して存在し、その他の値や json で定義されていないテンプレートパーツは、一般のテンプレートパーツブロックがデフォルトとなります。バリエーションはエディターのインターフェース内で特定のアイコンで示され、デフォルトでラッパーの対応するセマンティック HTML 要素となり (これも、テンプレートパーツブロック上の `tagName` 属性セットで上書きできます)、将来のエディターの改良でカスタムフローの実現のためテンプレートパーツをコンテキスト化します。

<!--
- name: mandatory.
- title: optional, translatable.
- area: optional, will be set to `uncategorized` by default and trigger no block variation.
 -->
- name: 必須
- title: オプション、翻訳可能
- area: オプション。デフォルトでは `uncategorized` に設定され、ブロックバリエーションをトリガーしない

```json
{
    "version": 2,
	"templateParts": [
		{
			"name": "my-template-part",
			"title": "Header",
			"area": "header"
		}
	]
}
```
### patterns

<!-- 
<div class="callout callout-alert">
This field requires the Gutenberg plugin active and using the [version 2](https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/) of `theme.json`.
</div>
 -->
<!-- 
注意: このフィールドは、Gutenberg プラグインが有効で、`theme.json`の [version 2](https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/) が必要です。
 -->
<!-- 
<div class="callout callout-alert">Supported in WordPress from version 6.0 using <a href="https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/">version 2</a> of <code>theme.json</code>.</div>
 -->
> `theme.json` の [version 2](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-living/) を使用して、WordPress Version 6.0 からサポートされます。

<!-- 
Within this field themes can list patterns to register from [Pattern Directory](https://wordpress.org/patterns/). The `patterns` field is an array of pattern `slugs` from the Pattern Directory. Pattern slugs can be extracted by the `url` in single pattern view at the Pattern Directory. For example in this url `https://wordpress.org/patterns/pattern/partner-logos` the slug is `partner-logos`.
 -->
このフィールドには、[パターンディレクトリ](https://ja.wordpress.org/patterns/)から登録するパターンをリストアップできます。`patterns` フィールドはパターンディレクトリに登録されているパターンの `slugs` の配列です。パターンのスラッグは、パターンディレクトリの単一のパターンビューで `url` から抽出できます。例えば、URL `https://wordpress.org/patterns/pattern/partner-logos` でのスラッグは `partner-logos` です。

```json
{
	"version": 2,
	"patterns": [ "short-text-surrounded-by-round-images", "partner-logos" ]
}
```

<!-- 
## Developing with theme.json
 -->
## theme.json を使用した開発

<!-- 
It can be difficult to remember the theme.json settings and properties while you develop, so a JSON scheme was created to help. The schema is available at https://schemas.wp.org/trunk/theme.json

Code editors can pick up the schema and can provide help like tooltips, autocomplete, or schema validation in the editor. To use the schema in Visual Studio Code, add `"$schema": "https://schemas.wp.org/trunk/theme.json"` to the beginning of your theme.json file.
 -->
開発中に theme.json の設定やプロパティを覚えておくのは困難です。そのため、 JSON スキーマが作成されました。このスキーマは https://schemas.wp.org/trunk/theme.json で利用可能です。

コードエディターはスキーマを取り、ツールチップやオートコンプリート、エディタ内でのスキーマ検証などの支援機能を提供できます。Visual Studio Code でスキーマを使用するには、`"$schema": "https://schemas.wp.org/trunk/theme.json"` を theme.json ファイルの先頭に追加します。

<!-- 
![Example using validation with schema](https://developer.wordpress.org/files/2021/11/theme-json-schema-updated.gif)
 -->
![スキーマを使用した検証の例](https://developer.wordpress.org/files/2021/11/theme-json-schema-updated.gif)

<!--
## Frequently Asked Questions
 -->
## FAQ よくある質問と答え

<!--
### The naming schema of CSS Custom Properties
 -->
### CSS カスタムプロパティの命名体系

<!--
One thing you may have noticed is the naming schema used for the CSS Custom Properties the system creates, including the use of double hyphen, `--`, to separate the different "concepts". Take the following examples.
 -->
システムが作成する CSS カスタムプロパティの命名体系に気づいたかもしれません。ダブルハイフン `--` が異なる「コンセプト」を分離しています。以下に例を見ます。

<!--
**Presets** such as `--wp--preset--color--black` can be divided into the following chunks:
 -->
**プリセット** たとえば `--wp--preset--color--black` は次のように分割できます。

<!--
- `--wp`: prefix to namespace the CSS variable.
- `preset `: indicates is a CSS variable that belongs to the presets.
- `color`: indicates which preset category the variable belongs to. It can be `color`, `font-size`, `gradients`.
- `black`: the `slug` of the particular preset value.
 -->
- `--wp`: CSS 変数の名前空間の接頭辞。
- `preset`: プリセットに属する CSS 変数であることを示す。
- `color`: 変数がどのプリセットカテゴリーに属するかを示す。`color`、`font-size`、`gradients` を指定可。
- `black`: 特定のプリセット値の `slug` 。

<!--
**Custom** properties such as `--wp--custom--line-height--body`, which can be divided into the following chunks:
 -->
**Custom** プロパティ `--wp--custom--line-height--body` は次のように分割できます。

<!--
- `--wp`: prefix to namespace the CSS variable.
- `custom`: indicates is a "free-form" CSS variable created by the theme.
- `line-height--body`: the result of converting the "custom" object keys into a string.
 -->
- `--wp`: CSS 変数の名前空間の接頭辞。
- `custom`: テーマに作成された「自由形式」の CSS 変数であることを示す。
- `line-height--body`: 「カスタム」オブジェクトキーを文字列に変換した結果。

<!--
The `--` as a separator has two functions:

- Readability, for human understanding. It can be thought as similar to the BEM naming schema, it separates "categories".
- Parsability, for machine understanding. Using a defined structure allows machines to understand the meaning of the property `--wp--preset--color--black`: it's a value bounded to the color preset whose slug is "black", which then gives us room to do more things with them.
 -->
セパレータとしての `--` には2つの機能があります。

- 人間の理解を助ける可読性。「カテゴリー」を分ける、BEM 命名規約と同じと考えられます。
- 機械の理解を助けるパース容易性 (Parseability)。定義された構造を使用することで、機械もプロパティ `--wp--preset--color--black` の意味を理解でき、これがスラッグ「black」のカラープリセットに紐付いた値と分かり、ユーザーが更なる操作を行う余地を与えます。

<!--
### Why using `--` as a separator?
 -->
### なぜ、セパレータとして、`--` (2つのハイフン) を使用するのですか ?
<!--
We could have used any other separator, such as a single `-`.

However, that'd have been problematic, as it'd have been impossible to tell how `--wp-custom-line-height-template-header` should be converted back into an object, unless we force theme authors not to use `-` in their variable names.

By reserving `--` as a category separator and let theme authors use `-` for word-boundaries, the naming is clearer: `--wp--custom--line-height--template-header`.
 -->
他のセパレータ、たとえば `-` (単一のハイフン)を使うこともできました。

しかし、これは問題で、例えば `--wp-custom-line-height-template-header` をどのように変換してオブジェクトに戻すのか伝えることは不可能です。変数名に `-` を使わないよう作者に強制するしかありません。

カテゴリーセパレータとして `--` を予約し、作者は単語の境界に `-` を使えることで、命名も `--wp--custom--line-height--template-header` と、クリアになります。

<!--
### How settings under "custom" create new CSS Custom Properties
 -->
### 「custom」下の設定は、どのように新しい CSS カスタムプロパティを作成しますか ?

<!--
The algorithm to create CSS Variables out of the settings under the "custom" key works this way:

This is for clarity, but also because we want a mechanism to parse back a variable name such `--wp--custom--line-height--body` to its object form in theme.json. We use the same separation for presets.

For example:
 -->
「カスタム」キー下の設定から CSS 変数を作成するアルゴリズムは次のように動作します。

これは明快さのためですが、`--wp--custom--line-height--body` のような変数名をパースして theme.json 内のオブジェクト形式に戻す仕組みも必要なためです。プリセットにも同じセパレータを使用します。

例:

<!-- 
#### Input
 -->
#### 入力
<!-- 
{% codetabs %}
{% Input %}
 -->
```json
{
	"version": 2,
	"settings": {
		"custom": {
			"lineHeight": {
				"body": 1.7
			},
			"font-primary": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
		}
	}
}
```

<!-- 
#### Output
 -->
#### 出力
<!-- 
{% Output %}
 -->
```css
body {
	--wp--custom--line-height--body: 1.7;
	--wp--custom--font-primary: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif";
}
```
<!-- 
{% end %}
 -->
<!--
A few notes about this process:

- `camelCased` keys are transformed into its `kebab-case` form, as to follow the CSS property naming schema. Example: `lineHeight` is transformed into `line-height`.
- Keys at different depth levels are separated by `--`. That's why `line-height` and `body` are separated by `--`.
- You shouldn't use `--` in the names of the keys within the `custom` object. Example, **don't do** this:
 -->
このプロセスに対する注意:

- `camelCased` キーはその `kebab-case` フォームに変換し、CSS プロパティ命名体系に従います。例: `lineHeight` は `line-height` に変換されます。
- 異なる深さレベルのキーは `--` で分割されます。`line-height` と `body` が `--` で分かれている理由です。
- You shouldn't use `--` in the names of the keys within the `custom` オブジェクト内のキー名で `--` を使用しないでください。例: 次のような命名は**止めてください**。

```json
{
	"version": 2,
	"settings": {
		"custom": {
			"line--height": { // DO NOT DO THIS
				"body": 1.7
			}
		}
	}
}
```
<!-- 
### Global Stylesheet
 -->
### グローバルスタイルシート

<!-- 
In WordPress 5.8, the CSS for some of the presets defined by WordPress (font sizes, colors, and gradients) was loaded twice for most themes: in the block-library stylesheet plus in the global stylesheet. Additionally, there were slight differences in the CSS in both places.
 -->
WordPress 5.8では、WordPress が定義するプリセットの一部 (フォントサイズ、色、グラデーション) の CSS が、ほとんどのテーマで2回、ブロックライブラリのスタイルシートとグローバルスタイルシートで読み込まれていました。さらに、両方の CSS にわずかな違いがありました。

<!-- 
In WordPress 5.9 release, CSS of presets are consolidated into the global stylesheet, that is now loaded for all themes. Each preset value generates a single CSS Custom Property and a class, as in:
 -->
WordPress 5.9 リリースでは、プリセットの CSS はグローバルスタイルシートに統合され、すべてのテーマで読み込まれるようになりました。各プリセットの値は、次のように、単一のCSSカスタムプロパティとクラスを生成します。

```css
/* CSS Custom Properties for the preset values */
body {
  --wp--preset--<PRESET_TYPE>--<PRESET_SLUG>: <DEFAULT_VALUE>;
  --wp--preset--color--pale-pink: #f78da7;
  --wp--preset--font-size--large: 36px;
  /* etc. */
}

/* CSS classes for the preset values */
.has-<PRESET_SLUG>-<PRESET_TYPE> { ... }
.has-pale-pink-color { color: var(--wp--preset--color--pale-pink) !important; }
.has-large-font-size { font-size: var(--wp--preset--font-size--large) !important; }
```
<!-- 
For themes to override the default values they can use the `theme.json` and provide the same slug. Themes that do not use a `theme.json` can still override the default values by enqueuing some CSS that sets the corresponding CSS Custom Property.
 -->
テーマがデフォルト値をオーバーライドするには、`theme.json` を使用し、同じスラッグを提供します。`theme.json` を使用しないテーマでデフォルト値をオーバーライドするには、対応する CSS カスタムプロパティを設定する CSS をエンキューします。

<!-- 
`Example` (sets a new value for the default large font size):
 -->
`例` (デフォルトの large フォントサイズに新しい値を設定する):

```css
body {
 --wp--preset--font-size--large: <NEW_VALUE>;
}
```
<!-- 
### Specificity for link colors provided by the user
 -->
### ユーザーから提供されるリンクカラーの詳細度

<!-- 
In v1, when a user selected a link color for a specific block we attached a class to that block in the form of `.wp-element-<ID>` and then enqueued the following style:
 -->
v1 では、ユーザーが特定のブロックのリンク色を選択すると、そのブロックに `.wp-element-<ID>` という形でクラスをアタッチし、次のスタイルをキューに入れました。

```css
.wp-element-<ID> a { color: <USER_COLOR_VALUE> !important; }
```
<!-- 
While this preserved user preferences at all times, the specificity was too strong and conflicted with some blocks with legit uses of an HTML element that shouldn’t be considered links. To [address this issue](https://github.com/WordPress/gutenberg/pull/34689), in WordPress 5.9 release, the `!important` was removed and updated the corresponding blocks to style the a elements with a specificity higher than the user link color, which now is:
 -->
これは常にユーザーの好みを維持しますが、詳細度が強すぎて、リンクとみなせない HTML 要素を正当に使用している一部のブロックと衝突していました。[この問題に対処する](https://github.com/WordPress/gutenberg/pull/34689)ため、WordPress 5.9 リリースでは `!important` を削除し、対応するブロックを更新して、ユーザーのリンク色よりも高い詳細度で、a 要素をスタイルするようにしました。現在の様子です。

```css
.wp-element-<ID> a { color: <USER_COLOR_VALUE>; }
```
<!-- 
As a result of this change, it’s now the block author and theme author’s responsibility to make sure the user choices are respected at all times and that the link color provided by the user (specificity 011) is not overridden.
 -->
この変更により、ユーザーの選択を常に尊重し、ユーザーが提供したリンク色 (詳細度011) が上書きされないようにすることは、ブロック作成者とテーマ作成者の責任になりました。

<!-- 
### What is blockGap and how can I use it?
 -->
### blockGap とは何か、どう使うのか ?

<!-- 
For blocks that contain inner blocks, such as Group, Columns, Buttons, and Social Icons, `blockGap` controls the spacing between inner blocks. For `blockGap` to work, the block must also opt in to the [`layout` block support](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/#layout), which provides layout styles that can be adjusted via the block spacing controls. Depending on the layout of the block, the `blockGap` value will be output as either a vertical margin or a `gap` value. In the editor, the control for the `blockGap` value is called _Block spacing_, located in the Dimensions panel.
 -->
グループ、カラム、ボタン、ソーシャルアイコンなどのインナーブロックを含むブロックでは、 `blockGap` は、インナーブロック間の間隔を制御します。`blockGap` が機能するには、ブロックも [`layout` ブロックサポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/#layout)をオプトインする必要があります。これにより「ブロックスペース」コントロールで調整可能なレイアウトスタイルが提供されます。ブロックのレイアウトによって、 `blockGap` 値は垂直方向のマージンか `gap` 値として出力されます。エディター内で `blockGap`値のコントロールは「ブロックスペース」と呼ばれ、「寸法」パネル内にあります。

```json
{
	"version": 2,
	"settings": {
		"spacing": {
			"blockGap": true,
		}
	},
	"styles": {
		"spacing": {
			"blockGap": "1.5rem"
		}
	}
}
```

<!-- 
The setting for `blockGap` is either a boolean or `null` value and is `null` by default. This allows an extra level of control over style output. The `settings.spacing.blockGap` setting in a `theme.json` file accepts the following values:

- `true`: Opt into displaying _Block spacing_ controls in the editor UI and output `blockGap` styles.
- `false`: Opt out of displaying _Block spacing_ controls in the editor UI, with `blockGap` styles stored in `theme.json` still being rendered. This allows themes to use `blockGap` values without allowing users to make changes within the editor.
- `null` (default): Opt out of displaying _Block spacing_ controls, _and_ prevent the output of `blockGap` styles.

The value defined for the root `styles.spacing.blockGap` style is also output as a CSS property, named `--wp--style--block-gap`.
 -->
`blockGap` の設定は boolean か `null` 値で、デフォルトでは `null` です。この設定により、スタイル出力をより細かく制御できます。`theme.json` ファイル内の `settings.spacing.blockGap` 設定は、以下の値を受け取ります。

- `true`: エディター UI に_ブロックスペース_コントロールを表示し、`blockGap` スタイルを出力することを許可します。
- `false`: エディター UI で_ブロックスペース_コントロールを表示せず、`theme.json` に保存された `blockGap` スタイルをそのままレンダーします。この結果、テーマは、エディタ内でのユーザーの変更を禁止して、`blockGap` 値を使用できます。
- `null` (デフォルト): ブロック間隔コントロールの表示と、 `blockGap` スタイルの出力を停止します。

ルートの `styles.spacing.blockGap` スタイルに定義された値は、CSSプロパティ `--wp--style--block-gap` として出力されます。

<!-- 
### Why does it take so long to update the styles in the browser?
 -->
### なぜ、ブラウザのスタイルの更新に長い時間がかかるのか ?

<!-- 
When you are actively developing with theme.json you may notice it takes 30+ seconds for your changes to show up in the browser, this is because `theme.json` is cached. To remove this caching issue, set either [`WP_DEBUG`](https://wordpress.org/documentation/article/debugging-in-wordpress/#wp_debug) or [`SCRIPT_DEBUG`](https://wordpress.org/documentation/article/debugging-in-wordpress/#script_debug) to 'true' in your [`wp-config.php`](https://wordpress.org/documentation/article/editing-wp-config-php/). This tells WordPress to skip the cache and always use fresh data.

 -->
theme.json を使用して開発を行っていると、変更内容がブラウザに表示されるまでに30秒以上かかることに気がつくかもしれません。これは、`theme.json` がキャッシュされているためです。このキャッシュの問題を解決するには、[`wp-config.php`](https://wordpress.org/documentation/article/editing-wp-config-php/) の [`WP_DEBUG`](https://wordpress.org/documentation/article/debugging-in-wordpress/#wp_debug) または [`SCRIPT_DEBUG`](https://wordpress.org/documentation/article/debugging-in-wordpress/#script_debug) を 'true' に設定します。これにより、WordPress はキャッシュをスキップし、常に新しいデータを使用します。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/themes/theme-json.md)
