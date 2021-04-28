<!--
# Themes & Block Editor: experimental theme.json
 -->
<!--
# テーマとブロックエディター: theme.json (実験レベル)
 -->
<!--
> **These features are still experimental**. “Experimental” means this is an early implementation subject to drastic and breaking changes.
>
> Documentation has been shared early to surface what’s being worked on and invite feedback from those experimenting with the APIs. Please, be welcomed to share yours in the weekly #core-editor chats as well as async via the Github issues and Pull Requests.
 -->
<!--
> **この機能は現在、実験中です**。初期の実装であり、将来、大規模で後方互換性のない変更があるという意味で、「実験中」です。
>
> 現在何を行っているのかを明らかにし、API を使用した実験からフィードバックを得るため、早い段階でドキュメントを共有します。フィードバックを歓迎します。意見のある方は週次の #core-editor 会議で共有するか、GitHub で issue やプルリクを作成してください。
 -->
<!--
# Global Settings (theme.json)
 -->
# グローバル設定 (theme.json)

<!--
<div class="callout callout-alert">
 -->
<!--
These features are still experimental. “Experimental” means this is an early implementation subject to drastic and breaking changes.
 -->
> この機能は現在、実験中です。初期の実装であり、将来、大規模で後方互換性のない変更があるという意味で、「実験中」です。

<!--
Documentation has been shared early to surface what’s being worked on and invite feedback from those experimenting with the APIs. Please share your feedback in the weekly #core-editor or #fse-outreach-experiment channels in Slack, or async in GitHub issues.
 -->
> 現在何を行っているのかを明らかにし、API を使用した実験からフィードバックを得るため、早い段階でドキュメントを共有します。フィードバックを Slack の週次の #core-editor または #fse-outreach-experiment チャンネルで共有するか、非同期に GitHub で issue を作成してください。

<!--
</div>
 -->

<!--
This is documentation for the current direction and work in progress about how themes can hook into the various sub-systems that the Block Editor provides.
 -->
この文書ではテーマがブロックエディターの提供するさまざまなサブシステムとどのように連携するのか、その方向性と現在進行中の作業について記述します。

<!--
-   Rationale
    -   Settings can be controlled per block
    -   Some block styles are managed
    -   CSS Custom Properties: presets & custom
-   Specification
    -   Settings
    -   Styles
    -   Other theme metadata
-   FAQ
    -   The naming schema of CSS Custom Properties
    -   Why using -- as a separator?
    -   How settings under "custom" create new CSS Custom Properties

 -->
- 論拠
    - 設定をブロックごとに制御できる
    - いくつかのブロックスタイルは管理できる
    - CSS カスタムプロパティ: プリセット & カスタム
- 仕様
    - settings
    - styles
    - その他のテーマのメタデータ
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
This describes the current efforts to consolidate the various APIs related to styles into a single point – a `experimental-theme.json` file that should be located inside the root of the theme directory.
 -->
この文書では、現在行われている、スタイルに関連するさまざまな API を一箇所に集める努力について、すなわち、テーマディレクトリのルートに配置する `experimental-theme.json` ファイルについて説明します。

<!--
### Global settings for the block editor
 -->
### ブロックエディターのグローバル設定

<!--
Instead of the proliferation of theme support flags or alternative methods, the `experimental-theme.json` files provides a canonical way to define the settings of the block editor. These settings includes things like:
 -->
ブロックエディターの設定を定義する際、ネズミ算式に増えるテーマサポートフラグや代替方式の代わりに、`experimental-theme.json` ファイルでは理想の正しい方法が提供されます。例えば以下の設定が可能です。

<!--
-   What customization options should be made available or hidden from the user.
-   What are the default colors, font sizes... available to the user.
-   Defines the default layout of the editor. (widths and available alignments).
 -->
-   ユーザーが利用可能なカスタマイズオプション。隠すカスタマイズオプション。
-   ユーザーが利用可能なデフォルトの色、フォントサイズ、等々
-   エディターのデフォルトレイアウトの定義。幅、利用可能な配置

<!--
### Settings can be controlled per block
 -->
### 設定をブロックごとに制御できる

<!--
The Block Editor already allows the control of specific settings such as alignment, drop cap, presets available, etc. All of these work at the block level. By using the `experimental-theme.json` we aim to allow themes to control these at a block level.
 -->
<!--
ブロックエディターはすでに、配置、ドロップキャップ (先頭の文字を大きくする)、プリセット可能かどうかなどの特定の設定を制御できます。これらはすべてブロックレベルで動作します。`experimental-theme.json` を使用することで、これらの機能をテーマからでもブロックレベルで制御できるようにすることを目標としています。
 -->
<!--
For more granularity, these settings also work at the block level in `experimental-theme.json`.
 -->
より詳細のため、これらの設定は `experimental-theme.json` 内のブロックレベルでも動作します。

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
### Some block styles are managed
 -->
### いくつかのブロックスタイルを管理できる

<!--
By using the `experimental-theme.json` file to set style properties in a structured way, the Block Editor can "manage" the CSS that comes from different origins (user, theme, and core CSS). For example, if a theme and a user set the font size for paragraphs, we only enqueue the style coming from the user and not the theme's.
 -->
`experimental-theme.json` ファイルを使用して、構造化した形式のブロックスタイルプロパティを設定することで、ブロックエディターは異なるソース (ユーザー、テーマ、コア) から来る CSS を「管理」できます。たとえば、テーマとユーザーが段落にフォントサイズを設定すると、ユーザーから来たスタイルのみをエンキューします。

<!--
Some of the advantages are:
 -->
この方法の利点:

<!--
-   Reduce the amount of CSS enqueued.
-   Prevent specificity wars.
 -->
- エンキューされる CSS の量を減らす。
- 「CSS 詳細度の戦い」を抑止する。

<!--
### CSS Custom Properties
 -->
### CSS カスタムプロパティ

<!--
There are some areas of styling that would benefit from having shared values that can change across a site instantly.
 -->
サイト内で一度に変更できる共有の値があることで便利になる、スタイリングの領域があります。

<!--
To address this need, we've started to experiment with CSS Custom Properties, aka CSS Variables, in some places:
 -->
このニーズを満たすためいくつかの場所で CSS カスタムプロパティの実験を始めました。なお、CSS カスタムプロパティは CSS 変数とも呼ばれます。

<!--
-   **Presets**: [color palettes](/docs/how-to-guides/themes/theme-support.md#block-color-palettes), [font sizes](/docs/how-to-guides/themes/theme-support.md#block-font-sizes), or [gradients](/docs/how-to-guides/themes/theme-support.md#block-gradient-presets) declared by the theme are converted to CSS Custom Properties and enqueued both the front-end and the editors.
 -->
- **プリセット**: [カラーパレット](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#block-color-palettes)、[フォントサイズ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#block-font-sizes)、[グラデーション](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#block-gradient-presets) をテーマで宣言すると、CSS カスタムプロパティに変換され、フロントエンドとエディターの両方にエンキューされます。

**入力**
{% codetabs %}
{% Input %}

```json
{
	"settings": {
		"defaults": {
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
}
```

**出力**
{% Output %}

```css
:root {
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
	"settings": {
		"defaults": {
			"custom": {
				"line-height": {
					"body": 1.7,
					"heading": 1.3
				}
			}
		}
	}
}
```

**出力**
{% Output %}

```css
:root {
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
This specification is the same for the three different origins that use this format: core, themes, and users. Themes can override core's defaults by creating a file called `experimental-theme.json`. Users, via the site editor, will also be also to override theme's or core's preferences via an user interface that is being worked on.
 -->
この仕様は、同じフォーマットを仕様する3つの異なる主体、「コア」「テーマ」「ユーザー」で共通です。テーマは、ファイル `experimental-theme.json` を作成することでコアのデフォルトを上書きできます。ユーザーもまた、開発中のユーザーインターフェース、サイトエディターを介して、テーマやコアの設定を上書きできます。

<!--
The `experimental-theme.json` file declares how a theme wants the editor configured (`settings`) as well as the style properties it sets (`styles`).
 -->
`experimental-theme.json` ファイルでは、テーマがどのようにエディターを構成したいか (`settings`)、そして、設定するスタイルプロパティ (`styles`) を宣言します。

```
{
  "settings": { ... },
  "styles": { ... }
}
```
<!--
Both settings and styles can contain subsections for any registered block. As a general rule, the names of these subsections will be the block names ― we call them "block selectors". For example, the paragraph block ―whose name is `core/paragraph`― can be addressed in the settings using the key (or "block selector") `core/paragraph`:
 -->
任意の登録ブロックに対して settings も styles もサブセクションを含むことができます。一般的なルールとしてサブセクションの名前はブロック名で、これは「ブロックセレクタ」と呼ばれます。たとえば段落ブロック (名前は `core/paragraph`)は、settings 内ではキー (あるいは「ブロックセレクタ」) `core/paragraph` として処理されます。

```
{
  "settings": {
    "core/paragraph": { ... }
  }
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
また、さらに2つの別のブロックセレクタ `root` と `defaults` があります。`root` ブロックセレクタは、サイトのルートを表します。`defaults` ブロックセレクタは、何もせんげされなかった場合にブロックで使用されるデフォルトを表します。

<!--
### Settings
 -->
### settings
<!--
The settings section has the following structure and default values:
 -->
settings セクションは以下の構造とデフォルト値を持ちます。

```
{
  "settings": {
    "defaults": {
      "layout": { /* Default layout to be used in the post editor */
        "contentSize": "800px",
        "wideSize": "1000px",
      }
      "border": {
        "customColor": false, /* true to opt-in */
        "customRadius": false,
        "customStyle": false,
        "customWidth": false
      },
      "color": {
        "custom": true, /* false to opt-out, as in add_theme_support('disable-custom-colors') */
        "customGradient": true, /* false to opt-out, as in add_theme_support('disable-custom-gradients') */
        "duotone": [ ... ], /* duotone presets, a list of { "colors": [ "#000", "#FFF" ], "slug": "black-and-white", "name": "Black and White" } */
        "gradients": [ ... ], /* gradient presets, as in add_theme_support('editor-gradient-presets', ... ) */
        "link": false, /* true to opt-in, as in add_theme_support('experimental-link-color') */
        "palette": [ ... ], /* color presets, as in add_theme_support('editor-color-palette', ... ) */
      },
      "custom": { ... },
      "spacing": {
        "customPadding": false, /* true to opt-in, as in add_theme_support('custom-spacing') */
        "units": [ "px", "em", "rem", "vh", "vw" ], /* filter values, as in add_theme_support('custom-units', ... ) */
      },
      "typography": {
        "customFontSize": true, /* false to opt-out, as in add_theme_support( 'disable-custom-font-sizes' ) */
        "customFontWeight": true, /* false to opt-out */
        "customFontStyle": true, /* false to opt-out */
        "customLineHeight": false, /* true to opt-in, as in add_theme_support( 'custom-line-height' ) */
        "dropCap": true, /* false to opt-out */
        "fontFamilies": [ ... ], /* font family presets */
        "fontSizes": [ ... ], /* font size presets, as in add_theme_support('editor-font-sizes', ... ) */
      }
    }
  }
}
```

<!--
Each block can configure any of these settings separately, providing a more fine-grained control over what exists via `add_theme_support`.
 -->
それぞれのブロックは個別にこれらの設定を構成でき、既存の `add_theme_support` を介したものよりも、詳細な制御を行えます。

<!--
The block settings declared under the `defaults` block selector affect to all blocks, unless a particular block overwrites it. It's a way to provide inheritance and quickly configure all blocks at once. To retain backward compatibility, the existing `add_theme_support` declarations that configure the block editor are retrofit in the proper categories for the `defaults` section. If a theme uses `add_theme_support('disable-custom-colors')`, it'll be the same as set `settings.defaults.color.custom` to `false`. If the `experimental-theme.json` contains any settings, these will take precedence over the values declared via `add_theme_support`.
 -->
`defaults` ブロックセレクタの下で宣言されたブロック設定は、個別に上書きしない限り、すべてのブロックに影響します。継承のコンセプトを導入し、すべてのブロックを一度に迅速に構成できます。後方互換性のため、ブロックエディターを構成する既存の `add_theme_support` の宣言は、`defaults` セクションの適切なカテゴリーに割り当てられます。テーマが `add_theme_support('disable-custom-colors')` を使用している場合、これは `settings.defaults.color.custom` に `false` を設定したことと同じです。`experimental-theme.json` 内に設定があれば、 `add_theme_support` を介して宣言された値に優先します。

<!--
Let's say a theme author wants to enable custom colors only for the paragraph block. This is how it can be done:
 -->
テーマ作者が段落ブロックのみにカスタムカラーを有効化したいとします。この場合、イカのようになります。

<!--
```
{
  "settings": {
    "defaults": {
      "color": {
        "custom": false // Disable it for all blocks.
      }
    },
    "core/paragraph": {
      "color": {
        "custom": true // Paragraph overrides the setting.
      }
    }
  }
}
```
 -->
```
{
  "settings": {
    "defaults": {
      "color": {
        "custom": false // すべてのブロックで無効化
      }
    },
    "core/paragraph": {
      "color": {
        "custom": true // 段落ブロックは設定を上書き
      }
    }
  }
}
```

<!--
Note, however, that not all settings are relevant for all blocks. The settings section provides an opt-in/opt-out mechanism for themes, but it's the block's responsibility to add support for the features that are relevant to it. For example, if a block doesn't implement the `dropCap` feature, a theme can't enable it for such a block through `experimental-theme.json`.
 -->
注意: ただし、すべての設定がすべてのブロックに関連するわけではありません。settings セクションはテーマに対してオプトイン、オプトアウトの仕組みを提供しますが、関連する機能のサポートの追加はブロックの責任です。たとえばブロックが `dropCap` 機能を実装しなければ、テーマは `experimental-theme.json` を介して有効化できません。

<!--
#### Presets
 -->
#### プリセット
<!--
Presets are part of the settings section. Each preset value will generate a CSS Custom Property that will be added to the new stylesheet, which follow this naming schema: `--wp--preset--{preset-category}--{preset-slug}`.
 -->
プリセットは settings セクションの一部です。各プリセット値は新しいスタイルシートに追加される CSS カスタムプロパティを生成します。CSS カスタムプロパティは命名スキーマ `--wp--preset--{preset-category}--{preset-slug}` に従います。


<!--
For example:
 -->
例:

**入力**
{% codetabs %}
{% Input %}

```json
{
	"settings": {
		"defaults": {
			"color": {
				"palette": [
					{
						"slug": "strong-magenta",
						"color": "#a156b4"
					},
					{
						"slug": "very-dark-grey",
						"color": "rgb(131, 12, 8)"
					}
				],
				"gradients": [
					{
						"slug": "blush-bordeaux",
						"gradient": "linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%)"
					},
					{
						"slug": "blush-light-purple",
						"gradient": "linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%)"
					}
				]
			},
			"typography": {
				"fontSizes": [
					{
						"slug": "normal",
						"size": 16
					},
					{
						"slug": "big",
						"size": 32
					}
				]
			}
		}
	}
}
```

**出力**
{% Output %}

```css
:root {
	--wp--preset--color--strong-magenta: #a156b4;
	--wp--preset--color--very-dark-gray: #444;
	--wp--preset--font-size--big: 32;
	--wp--preset--font-size--normal: 16;
	--wp--preset--gradient--blush-bordeaux: linear-gradient(
		135deg,
		rgb( 254, 205, 165 ) 0%,
		rgb( 254, 45, 45 ) 50%,
		rgb( 107, 0, 62 ) 100%
	);
	--wp--preset--gradient--blush-light-purple: linear-gradient(
		135deg,
		rgb( 255, 206, 236 ) 0%,
		rgb( 152, 150, 240 ) 100%
	);
}
```

{% end %}

<!--
To maintain backward compatibility, the presets declared via `add_theme_support` will also generate the CSS Custom Properties. If the `experimental-theme.json` contains any presets, these will take precedence over the ones declared via `add_theme_support`.
 -->
後方互換性のため、`add_theme_support` を介して宣言されたプリセットもまた CSS カスタムプロパティを生成します。`experimental-theme.json` に含まれるプリセットは `add_theme_support` を介して宣言されたプリセットに優先します。

<!--
#### Free-form CSS Custom Properties
 -->
#### 自由形式の CSS カスタムプロパティ

<!--
In addition to create CSS Custom Properties for the presets, the `experimental-theme.json` also allows for themes to create their own, so they don't have to be enqueued separately. Any values declared within the `settings.<some/block>.custom` section will be transformed to CSS Custom Properties following this naming schema: `--wp--custom--<variable-name>`.
 -->
プリセット用の CSS カスタムプロパティの作成に加えてテーマは `experimental-theme.json` を使用して独自のプロパティを作成できます。別々にエンキューする必要はありません。`settings.<some/block>.custom` セクション内に定義された任意の値は、命名スキーマ `--wp--custom--<variable-name>` を持つ CSS カスタムプロパティに変換されます。

<!--
For example:
 -->
例:

**入力**
{% codetabs %}
{% Input %}

```json
{
	"settings": {
		"defaults": {
			"custom": {
				"base-font": 16,
				"line-height": {
					"small": 1.2,
					"medium": 1.4,
					"large": 1.8
				}
			}
		}
	}
}
```

**出力**
{% Output %}

```css
:root {
	--wp--custom--base-font: 16;
	--wp--custom--line-height--small: 1.2;
	--wp--custom--line-height--medium: 1.4;
	--wp--custom--line-height--large: 1.8;
}
```

{% end %}

<!--
Note that, the name of the variable is created by adding `--` in between each nesting level.
 -->
注意: 変数名は各ネストレベルの間に `--` を追加して作成されます。

<!--
### Styles
 -->
### styles

<!--
Each block declares which style properties it exposes via the [block supports mechanism](../block-api/block-supports.md). The support declarations are used to automatically generate the UI controls for the block in the editor. Themes can use any style property via the `experimental-theme.json` for any block ― it's the theme's responsibility to verify that it works properly according to the block markup, etc.
 -->
各ブロックは[ブロックサポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/)を介して、どのスタイルプロパティを公開するかを宣言します。サポートの宣言はエディター内でのブロックの UI コントロールを自動的に生成するために使用されます。テーマは `experimental-theme.json` を介して、任意のブロックのために、任意のスタイルプロパティを使用できます。ブロックマークアップ等に関して正しく動作するかどうかの検証は、テーマの責任です。


```json
{
	"styles": {
		"some/block/selector": {
			"border": {
				"color": "value",
				"radius": "value",
				"style": "value",
				"width": "value"
			},
			"color": {
				"background": "value",
				"gradient": "value",
				"link": "value",
				"text": "value"
			},
			"spacing": {
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
			}
		}
	}
}
```
<!--
For example:
 -->
例:

{% codetabs %}
{% Input %}

```json
{
	"styles": {
		"root": {
			"color": {
				"text": "var(--wp--preset--color--primary)"
			}
		},
		"core/heading/h1": {
			"color": {
				"text": "var(--wp--preset--color--primary)"
			},
			"typography": {
				"fontSize": "calc(1px * var(--wp--preset--font-size--huge))"
			}
		},
		"core/heading/h4": {
			"color": {
				"text": "var(--wp--preset--color--secondary)"
			},
			"typography": {
				"fontSize": "var(--wp--preset--font-size--normal)"
			}
		}
	}
}
```

**出力**
{% Output %}

```css
:root {
	color: var( --wp--preset--color--primary );
}
h1 {
	color: var( --wp--preset--color--primary );
	font-size: calc( 1px * var( --wp--preset--font-size--huge ) );
}
h4 {
	color: var( --wp--preset--color--secondary );
	font-size: calc( 1px * var( --wp--preset--font-size--normal ) );
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

<!--
```json
{
	"customTemplates": [
		{
			"name": "my-custom-template" /* Mandatory */,
			"title": "The template title" /* Mandatory, translatable */,
			"postTypes": [
				"page",
				"post",
				"my-cpt"
			] /* Optional, will only apply to "page" by default. */
		}
	]
}
```
 -->
```json
{
	"customTemplates": [
		{
			"name": "my-custom-template" /* 必須 */,
			"title": "The template title" /* 必須、翻訳可能 */,
			"postTypes": [
				"page",
				"post",
				"my-cpt"
			] /* オプション。デフォルトでは page のみに適用する。 */
		}
	]
}
```
<!--
**templateParts**: within this field themes can list the template parts present in the `block-template-parts` folder. For example, for a template part named `my-template-part.html`, the `theme.json` can declare the area term for the template part entity which is responsible for rendering the corresponding block variation (Header block, Footer block, etc.) in the editor. Defining this area term in the json will allow the setting to persist across all uses of that template part entity, as opposed to a block attribute that would only affect one block. Defining area as a block attribute is not recommended as this is only used 'behind the scenes' to aid in bridging the gap between placeholder flows and entity creation.
 -->
**templateParts**: このフィールド内にテーマは、`block-template-parts` フォルダーにあるテンプレートパーツをリストできます。たとえば、テンプレートパーツ `my-template-part.html` に対して、`theme.json` は、テンプレートパーツのエンティティのための area タームを宣言できます。エンティティはエディター内で、対応するブロックバリエーション (ヘッダーブロック、フッターブロックなど) をレンダリングする責任があります。json 内で area タームを定義するとテンプレートパーツエンティティのすべての使用において設定を永続化できます。これは、ブロック属性が1つのブロックのみに影響するのとは対照的です。ブロック属性としての area 定義は推奨されません。これは「表舞台の裏側」で使用され、プレースホルダーフローとエンティティ作成のギャップの橋渡しを支援します。

<!--
Currently block variations exist for "header" and "footer" values of the area term, any other values and template parts not defined in the json will default to the general template part block. Variations will be denoted by specific icons within the editor's interface, will default to the corresponding semantic HTML element for the wrapper (this can also be overridden by the `tagName` attribute set on the template part block), and will contextualize the template part allowing more custom flows in future editor improvements.
 -->
現在、ブロックバリエーションは、area タームの header と footer の値に対して存在し、その他の値や json で定義されていないテンプレートパーツは、一般のテンプレートパーツブロックがデフォルトとなります。バリエーションはエディターのインターフェース内で特定のアイコンで示され、デフォルトでラッパーの対応するセマンティック HTML 要素となり (これも、テンプレートパーツブロック上の `tagName` 属性セットで上書きできます)、将来のエディターの改良でカスタムフローの実現のためテンプレートパーツをコンテキスト化します。



<!--
```json
{
	"templateParts": [
		{
			"name": "my-template-part" /* Mandatory */,
			"area": "header" /* Optional, will be set to 'uncategorized' by default and trigger no block variation */
		}
	]
}
```
 -->
```json
{
	"templateParts": [
		{
			"name": "my-template-part" /* 必須 */,
			"area": "header" /* オプション。デフォルトでは 'uncategorized' に設定され、ブロックバリエーションをトリガーしない */,
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
-   `--wp`: prefix to namespace the CSS variable.
-   `preset `: indicates is a CSS variable that belongs to the presets.
-   `color`: indicates which preset category the variable belongs to. It can be `color`, `font-size`, `gradients`.
-   `black`: the `slug` of the particular preset value.
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
-   `--wp`: prefix to namespace the CSS variable.
-   `custom`: indicates is a "free-form" CSS variable created by the theme.
-   `line-height--body`: the result of converting the "custom" object keys into a string.
 -->
- `--wp`: CSS 変数の名前空間の接頭辞。
- `custom`: テーマに作成された「自由形式」の CSS 変数であることを示す。
- `line-height--body`: 「カスタム」オブジェクトキーを文字列に変換した結果。

<!--
The `--` as a separator has two functions:

-   Readibility, for human understanding. It can be thought as similar to the BEM naming schema, it separates "categories".
-   Parseability, for machine understanding. Using a defined structure allows machines to understand the meaning of the property `--wp--preset--color--black`: it's a value bounded to the color preset whose slug is "black", which then gives us room to do more things with them.
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
	"settings": {
		"defaults": {
			"custom": {
				"lineHeight": {
					"body": 1.7
				},
				"font-primary": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
			}
		}
	}
}
```

**出力**
{% Output %}

```css
:root {
	--wp--custom--line-height--body: 1.7;
	--wp--custom--font-primary: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif";
}
```

{% end %}

<!--
A few notes about this process:

-   `camelCased` keys are transformed into its `kebab-case` form, as to follow the CSS property naming schema. Example: `lineHeight` is transformed into `line-height`.
-   Keys at different depth levels are separated by `--`. That's why `line-height` and `body` are separated by `--`.
-   You shouldn't use `--` in the names of the keys within the `custom` object. Example, **don't do** this:
 -->
このプロセスに対する注意:

- `camelCased` キーはその `kebab-case` フォームに変換し、CSS プロパティ命名体系に従います。例: `lineHeight` は `line-height` に変換されます。
- 異なる深さレベルのキーは `--` で分割されます。`line-height` と `body` が `--` で分かれている理由です。
- You shouldn't use `--` in the names of the keys within the `custom` オブジェクト内のキー名で `--` を使用しないでください。例: 次のような命名は**止めてください**。

```json
{
	"settings": {
		"defaults": {
			"custom": {
				"line--height": {
					"body": 1.7
				}
			}
		}
	}
}
```

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/themes/theme-json.md)
