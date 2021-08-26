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
WordPress 5.8 comes with [a new mechanism](https://make.wordpress.org/core/2021/06/25/introducing-theme-json-in-wordpress-5-8/) to configure the editor that enables a finer-grained control and introduces the first step in managing styles for future WordPress releases: the `theme.json` file. This page documents its format.
 -->
WordPress 5.8では、エディタを構成する[新しいメカニズム](https://make.wordpress.org/core/2021/06/25/introducing-theme-json-in-wordpress-5-8/)が搭載されます。このメカニズムは、きめ細かい制御を可能にし、将来の WordPress リリースでのスタイル管理の、最初のステップとなる `theme.json` ファイルを導入します。このページでは、`theme.json` ファイルのフォーマットについて説明します。

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
    - customTemplates
    - templateParts
- FAQ
    - The naming schema of CSS Custom Properties
    - Why using -- as a separator?
    - How settings under "custom" create new CSS Custom Properties

 -->
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

<!--
## Rationale
 -->
## 論拠

<!--
The Block Editor API has evolved at different velocities and there are some growing pains, specially in areas that affect themes. Examples of this are: the ability to [control the editor programmatically](https://make.wordpress.org/core/2020/01/23/controlling-the-block-editor/), or [a block style system](https://github.com/WordPress/gutenberg/issues/9534) that facilitates user, theme, and core style preferences.
 -->
ブロックエディター API は、さまざまな速度で進化しているため、苦痛に感じられる部分が大きくなってきました。これは特にテーマに影響する部分で顕著です。たとえば、[エディターのプログラム的な制御](https://make.wordpress.org/core/2020/01/23/controlling-the-block-editor/)や、ユーザー、テーマ、コアスタイルの好みを取りまとめる[ブロックスタイルシステム](https://github.com/WordPress/gutenberg/issues/9534) などです。

<!--
This describes the current efforts to consolidate the various APIs related to styles into a single point – a `theme.json` file that should be located inside the root of the theme directory.
 -->
この文書では、現在行われている、スタイルに関連するさまざまな API を一箇所に集める努力について、すなわち、テーマディレクトリのルートに配置する `theme.json` ファイルについて説明します。

<!--
### Settings for the block editor
 -->
### ブロックエディターの設定

<!--
Instead of the proliferation of theme support flags or alternative methods, the `theme.json` files provides a canonical way to define the settings of the block editor. These settings includes things like:
 -->
ブロックエディターの設定を定義する際、ネズミ算式に増えるテーマサポートフラグや代替方式の代わりに、`theme.json` ファイルでは理想の正しい方法が提供されます。例えば以下の設定が可能です。

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
`theme.json` ファイルを使用して、構造化した形式のブロックスタイルプロパティを設定することで、ブロックエディターは異なるソース (ユーザー、テーマ、コア) から来る CSS を「管理」できます。たとえば、テーマとユーザーが段落にフォントサイズを設定すると、ユーザーから来たスタイルのみをエンキューします。

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
サイト内で一度に変更できる共有の値があることで便利になる、スタイリングの領域があります。

<!--
To address this need, we've started to experiment with CSS Custom Properties, aka CSS Variables, in some places:
 -->
このニーズを満たすためいくつかの場所で CSS カスタムプロパティの実験を始めました。なお、CSS カスタムプロパティは CSS 変数とも呼ばれます。

<!--
- **Presets**: [color palettes](/docs/how-to-guides/themes/theme-support.md#block-color-palettes), [font sizes](/docs/how-to-guides/themes/theme-support.md#block-font-sizes), or [gradients](/docs/how-to-guides/themes/theme-support.md#block-gradient-presets) declared by the theme are converted to CSS Custom Properties and enqueued both the front-end and the editors.
 -->
- **プリセット**: [カラーパレット](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#block-color-palettes)、[フォントサイズ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#block-font-sizes)、[グラデーション](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#block-gradient-presets) をテーマで宣言すると、CSS カスタムプロパティに変換され、フロントエンドとエディターの両方にエンキューされます。

**入力**
{% codetabs %}
{% Input %}

```json
{
	"version": 1,
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

**出力**
{% Output %}

```css
body {
	--wp--preset--color--black: #000000;
	--wp--preset--color--white: #ffffff;
}
```

{% end %}

<!--
-   **Custom properties**: there's also a mechanism to create your own CSS Custom Properties.
 -->
- **カスタムプロパティ**: 自身の CSS カスタムプロパティを作成する仕組みもあります。

**入力**
{% codetabs %}
{% Input %}

```json
{
	"version": 1,
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

**出力**
{% Output %}

```css
body {
	--wp--custom--line-height--body: 1.7;
	--wp--custom--line-height--heading: 1.3;
}
```

{% end %}

<!--
## Specification
 -->
## 仕様

<!--
This specification is the same for the three different origins that use this format: core, themes, and users. Themes can override core's defaults by creating a file called `theme.json`. Users, via the site editor, will also be also to override theme's or core's preferences via an user interface that is being worked on.
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
	"version": 1,
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
 -->
<!--
Additionally, there are two other block selectors: `root` and `defaults`. The `root` block selector represents the root of the site. The `defaults` block selector represents the defaults to be used by blocks if they don't declare anything.
 -->
また、さらに2つの別のブロックセレクタ `root` と `defaults` があります。`root` ブロックセレクタは、サイトのルートを表します。`defaults` ブロックセレクタは、何もせんげされなかった場合にブロックで使用されるデフォルトを表します。

<!--
### Version
 -->
### version

<!--
This field describes the format of the `theme.json` file. The current and only version is 1.
 -->
このフィールドは、`theme.json` ファイルのフォーマットを表します。現在の唯一のバージョンは1です。

<!--
WordPress 5.8 will ignore the contents of any `theme.json` whose version is not equals to the current. Should the Gutenberg plugin need it, it'll update the version and will add the corresponding migration mechanisms from older versions.
 -->
WordPress 5.8 は、現行バージョンと異なる `theme.json` の内容を無視します。Gutenberg プラグインは必要があれば、バージョンを更新し、古いバージョンからの移行メカニズムを追加します。

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
**WordPress**

```json
{
	"version": 1,
	"settings": {
		"color": {
			"custom": true,
			"customDuotone": true,
			"customGradient": true,
			"duotone": [],
			"gradients": [],
			"link": false,
			"palette": []
		},
		"custom": {},
		"layout": {
			"contentSize": "800px",
			"wideSize": "1000px"
		},
		"spacing": {
			"customMargin": false,
			"customPadding": false,
			"units": [ "px", "em", "rem", "vh", "vw" ]
		},
		"typography": {
			"customFontSize": true,
			"customLineHeight": false,
			"dropCap": true,
			"fontSizes": []
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
**Gutenberg**

```json
{
	"version": 1,
	"settings": {
		"border": {
			"customColor": false,
			"customRadius": false,
			"customStyle": false,
			"customWidth": false
		},
		"color": {
			"custom": true,
			"customDuotone": true,
			"customGradient": true,
			"duotone": [],
			"gradients": [],
			"link": false,
			"palette": []
		},
		"custom": {},
		"layout": {
			"contentSize": "800px",
			"wideSize": "1000px"
		},
		"spacing": {
			"customMargin": false,
			"customPadding": false,
			"units": [ "px", "em", "rem", "vh", "vw" ]
		},
		"typography": {
			"customFontSize": true,
			"customFontStyle": true,
			"customFontWeight": true,
			"customLineHeight": false,
			"customTextDecorations": true,
			"customTextTransforms": true,
			"dropCap": true,
			"fontFamilies": [],
			"fontSizes": []
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
| `custom-line-height`        | Set `typography.customLineHeight` to `false`.             |
| `custom-spacing`            | Set `spacing.customPadding` to `true`.                    |
| `custom-units`              | Provide the list of units via `spacing.units`.            |
| `disable-custom-colors`     | Set `color.custom` to `false`.                            |
| `disable-custom-font-sizes` | Set `typography.customFontSize` to `false`.               |
| `disable-custom-gradients`  | Set `color.customGradient` to `false`.                    |
| `editor-color-palette`      | Provide the list of colors via `color.palette`.           |
| `editor-font-sizes`         | Provide the list of font size via `typography.fontSizes`. |
| `editor-gradient-presets`   | Provide the list of gradients via `color.gradients`.      |
| `experimental-link-color`   | Set `color.link` to `true`.                               |
 -->
| add_theme_support           | theme.json 設定                                        |
| --------------------------- | --------------------------------------------------------- |
| `custom-line-height`        | `typography.customLineHeight` に `false` を設定       |
| `custom-spacing`            | `spacing.customPadding` に `true` を設定            |
| `custom-units`              | `spacing.units` で単位のリストを渡す            |
| `disable-custom-colors`     | `color.custom` に `false` を設定                       |
| `disable-custom-font-sizes` | `typography.customFontSize` に `false` を設定           |
| `disable-custom-gradients`  | `color.customGradient` に `false` を設定               |
| `editor-color-palette`      | `color.palette` で色のリストを渡す     |
| `editor-font-sizes`         | `typography.fontSizes` でフォントサイズのリストを渡す |
| `editor-gradient-presets`   | `color.gradients` でグラデーションのリストを渡す      |
| `experimental-link-color`   | `color.link` に `true` を設定                  |

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
    - generates a single custom property per preset value
- `typography.fontSizes`: generates a single class and custom property per preset value.
- `typography.fontFamilies`: generates a single custom property per preset value.
 -->
- `color.duotone`: クラスやカスタムプロパティを生成しません。
- `color.gradients`: プリセット値ごとに1つのクラスとカスタムプロパティを生成します。
- `color.palette`:
    - プリセット値ごとに3つのクラスを生成します: color、background-color、border-color
    - プリセット値ごとに1つのカスタムプロパティを生成します。
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

**入力**
{% codetabs %}
{% Input %}

```json
{
	"version": 1,
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
					"slug": "normal",
					"size": 16,
					"name": "Normal"
				},
				{
					"slug": "big",
					"size": 32,
					"name": "Big"
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
						},
					]
				}
			}
		}
	}
}
```

**出力**
{% Output %}

```css
/* Top-level custom properties */
body {
	--wp--preset--color--strong-magenta: #a156b4;
	--wp--preset--color--very-dark-grey: #444;
	--wp--preset--gradient--blush-bordeaux: linear-gradient( 135deg, rgb( 254, 205, 165 ) 0%, rgb( 254, 45, 45 ) 50%, rgb( 107, 0, 62 ) 100% );
	--wp--preset--gradient--blush-light-purple: linear-gradient( 135deg, rgb( 255, 206, 236 ) 0%, rgb( 152, 150, 240 ) 100% );
	--wp--preset--font-size--big: 32;
	--wp--preset--font-size--normal: 16;
	--wp--preset--font-family--helvetica-arial: Helvetica Neue, Helvetica, Arial, sans-serif;
	--wp--preset--font-family--system: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell, \"Helvetica Neue\",sans-serif;
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
{% end %}

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

**入力**
{% codetabs %}
{% Input %}

```json
{
	"version": 1,
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

**出力**
{% Output %}

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

{% end %}

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

- ボタンブロックの枠の角丸を無効化 (現在、枠はプラグインでのみ利用可能)

```json
{
	"version": 1,
	"settings": {
		"blocks": {
			"core/button": {
				"border": {
					"customRadius": false
				}
			}
		}
	}
}
```

- グループブロックのみに他と異なるパレットを設定

```json
{
	"version": 1,
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

<!--
{% codetabs %}
{% WordPress %}
 -->
**WordPress**

```json
{
	"version": 1,
	"styles": {
		"color": {
			"background": "value",
			"gradient": "value",
			"text": "value"
		},
		"spacing": {
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
			"fontSize": "value",
			"lineHeight": "value"
		},
		"elements": {
			"link": {
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
**Gutenberg**

```json
{
	"version": 1,
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

{% codetabs %}
{% Input %}

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

{% Output %}

```css
body {
	color: var( --wp--preset--color--primary );
}
```

{% end %}

<!--
### Block styles
 -->
### ブロックスタイル

<!--
Styles found within a block will be enqueued using the block selector.
 -->
ブロック内のスタイルは、ブロックセレクタを使用してエンキューされます。

<!--
By default, the block selector is generated based on its name such as `.wp-block-<blockname-without-namespace>`. For example, `.wp-block-group` for the `core/group` block. There are some blocks that want to opt-out from this default behavior. They can do so by explicitely telling the system which selector to use for them via the `__experimentalSelector` key within the `supports` section of its `block.json` file.
 -->
デフォルトでは、ブロックセレクタは `.wp-block-<blockname-without-namespace>` のような名前を基にして生成されます。たとえば、`core/group` ブロックの `.wp-block-group` です。このデフォルトの動作をオプトアウトしたいブロックもあります。これには明示的にシステムに対してどのセレクタを使用するかを、`block.json` ファイルの `supports` セクション内の `__experimentalSelector` キーで指定します。

{% codetabs %}
{% Input %}

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

{% Output %}

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

{% end %}

<!--
#### Element styles
 -->
#### 要素スタイル

<!--
In addition to top-level and block-level styles, there's the concept of elements that can used in both places. There's a closed set of them:
 -->
トップレベル、ブロックレベルのスタイルに加えて、両方の場所で使用できる要素のコンセプトがあります。

<!--
- `link`: maps to the `a` CSS selector.
- `h1`: maps to the `h1` CSS selector.
- `h2`: maps to the `h2` CSS selector.
- `h3`: maps to the `h3` CSS selector.
- `h4`: maps to the `h4` CSS selector.
- `h5`: maps to the `h5` CSS selector.
- `h6`: maps to the `h6` CSS selector.
 -->
- `link`: `a` CSS セレクタにマップ
- `h1`: `h1` CSS セレクタにマップ
- `h2`: `h2` CSS セレクタにマップ
- `h3`: `h3` CSS セレクタにマップ
- `h4`: `h4` CSS セレクタにマップ
- `h5`: `h5` CSS セレクタにマップ
- `h6`: `h6` CSS セレクタにマップ

<!--
If they're found in the top-level the element selector will be used. If they're found within a block, the selector to be used will be the element's appended to the corresponding block.
 -->
トップレベルにあれば、要素セレクタが使用されます。ブロック内にあれば、使用されるセレクタは、対応するブロックに追加された形の要素セレクタになります。

{% codetabs %}
{% Input %}

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

**出力**
{% Output %}

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

{% end %}

<!--
The `defaults` block selector can't be part of the `styles` section and will be ignored if it's present. The `root` block selector will generate a style rule with the `:root` CSS selector.
 -->
`defaults` ブロックセレクタは、`styles` セクションの一部にはなれず、あっても無視されます。`root` ブロックセレクタはなることはできず、`:root` CSS セレクタと共にスタイルルールを生成します。

<!--
### Other theme metadata
 -->
### その他のテーマのメタデータ

<!--
There's a growing need to add more theme metadata to the theme.json. This section lists those other fields:
 -->
theme.json にはさらに多くのテーマのメタデータを追加するニーズがあります。このセクションでは、それら他のフィールドを挙げます。

<!--
**customTemplates**: within this field themes can list the custom templates present in the `block-templates` folder. For example, for a custom template named `my-custom-template.html`, the `theme.json` can declare what post types can use it and what's the title to show the user:
 -->
**customTemplates**: このフィールド内にテーマは、`block-templates` フォルダー内にあるカスタムテンプレートをリストできます。たとえば、カスタムテンプレート `my-custom-template.html` に対して、`theme.json` はどの投稿タイプが使用でき、ユーザーにどのようなタイトルを表示するか宣言できます。

### customTemplates

<!--
<div class="callout callout-alert">
This field is only allowed when the Gutenberg plugin is active. In WordPress 5.8 will be ignored.
</div>
 -->
> このフィールドは、Gutenberg プラグインが有効な場合にのみ許可されます。WordPress 5.8では無視されます。

<!--
Within this field themes can list the custom templates present in the `block-templates` folder. For example, for a custom template named `my-custom-template.html`, the `theme.json` can declare what post types can use it and what's the title to show the user:
 -->
このフィールド内にテーマは、`block-templates` フォルダー内にあるカスタムテンプレートをリストできます。たとえば、カスタムテンプレート `my-custom-template.html` に対して、`theme.json` はどの投稿タイプが使用でき、ユーザーにどのようなタイトルを表示するか宣言できます。

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
    "version": 1,
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
<div class="callout callout-alert">
This field is only allowed when the Gutenberg plugin is active. In WordPress 5.8 will be ignored.
</div>
 -->
> このフィールドは、Gutenberg プラグインが有効な場合にのみ許可されます。WordPress 5.8では無視されます。

<!--
Within this field themes can list the template parts present in the `block-template-parts` folder. For example, for a template part named `my-template-part.html`, the `theme.json` can declare the area term for the template part entity which is responsible for rendering the corresponding block variation (Header block, Footer block, etc.) in the editor. Defining this area term in the json will allow the setting to persist across all uses of that template part entity, as opposed to a block attribute that would only affect one block. Defining area as a block attribute is not recommended as this is only used 'behind the scenes' to aid in bridging the gap between placeholder flows and entity creation.
 -->
このフィールド内にテーマは、`block-template-parts` フォルダーにあるテンプレートパーツをリストできます。たとえば、テンプレートパーツ `my-template-part.html` に対して、`theme.json` は、テンプレートパーツのエンティティのための area タームを宣言できます。エンティティはエディター内で、対応するブロックバリエーション (ヘッダーブロック、フッターブロックなど) をレンダリングする責任があります。json 内で area タームを定義するとテンプレートパーツエンティティのすべての使用において設定を永続化できます。これは、ブロック属性が1つのブロックのみに影響するのとは対照的です。ブロック属性としての area 定義は推奨されません。これは「表舞台の裏側」で使用され、プレースホルダーフローとエンティティ作成のギャップの橋渡しを支援します。

<!--
Currently block variations exist for "header" and "footer" values of the area term, any other values and template parts not defined in the json will default to the general template part block. Variations will be denoted by specific icons within the editor's interface, will default to the corresponding semantic HTML element for the wrapper (this can also be overridden by the `tagName` attribute set on the template part block), and will contextualize the template part allowing more custom flows in future editor improvements.
 -->
現在、ブロックバリエーションは、area タームの header と footer の値に対して存在し、その他の値や json で定義されていないテンプレートパーツは、一般のテンプレートパーツブロックがデフォルトとなります。バリエーションはエディターのインターフェース内で特定のアイコンで示され、デフォルトでラッパーの対応するセマンティック HTML 要素となり (これも、テンプレートパーツブロック上の `tagName` 属性セットで上書きできます)、将来のエディターの改良でカスタムフローの実現のためテンプレートパーツをコンテキスト化します。

<!--
- name: mandatory.
- area: optional, will be set to `uncategorized` by default and trigger no block variation.
 -->
- name: 必須
- area: オプション。デフォルトでは `uncategorized` に設定され、ブロックバリエーションをトリガーしない

```json
{
    "version": 1,
	"templateParts": [
		{
			"name": "my-template-part",
			"area": "header"
		}
	]
}
```

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

- Readibility, for human understanding. It can be thought as similar to the BEM naming schema, it separates "categories".
- Parseability, for machine understanding. Using a defined structure allows machines to understand the meaning of the property `--wp--preset--color--black`: it's a value bounded to the color preset whose slug is "black", which then gives us room to do more things with them.
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

**入力**
{% codetabs %}
{% Input %}

```json
{
	"version": 1,
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

**出力**
{% Output %}

```css
body {
	--wp--custom--line-height--body: 1.7;
	--wp--custom--font-primary: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif";
}
```

{% end %}

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
	"version": 1,
	"settings": {
		"custom": {
			"line--height": { // DO NOT DO THIS
				"body": 1.7
			}
		}
	}
}
```

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/themes/theme-json.md)
