<!-- 
# Themes & Block Editor: experimental theme.json
 -->
# テーマとブロックエディター: theme.json (実験レベル)

<!-- 
> **These features are still experimental**. “Experimental” means this is an early implementation subject to drastic and breaking changes.
>
> Documentation has been shared early to surface what’s being worked on and invite feedback from those experimenting with the APIs. Please, be welcome to share yours in the weekly #core-editor chats as well as async via the Github issues and Pull Requests.
 -->
> **この機能は現在、実験中です**。「実験中」とは初期の実装であり、将来、大規模で後方互換性のない変更があることを意味します。
>
> 現在何が行われているかを明らかにし、API を使用した実験からフィードバックを得るため、早い段階でドキュメントを共有します。わたしたちはフィードバックを歓迎します。意見のある方は週次の #core-editor 会議で共有するか、非同期が良ければ GitHub で issue やプルリクを作成してください。

<!-- 
This is documentation for the current direction and work in progress about how themes can hook into the various sub-systems that the Block Editor provides.
 -->
この文書ではテーマがブロックエディターの提供するさまざまなサブシステムとどのように連携するのか、その方向性と現在進行中の作業について記述します。

<!-- 
- Rationale
    - Settings can be controlled per block
    - CSS Custom Properties: presets & custom
    - Some block styles are managed
- Specification
    - Settings
    - Styles
 -->
- 論拠
    - 設定をブロックごとに制御できる
    - CSS カスタムプロパティ: プリセット & カスタム
    - いくつかのブロックスタイルは管理できる
- 仕様
    - settings
    - styles

<!-- 
## Rationale
 -->
## 論拠

<!-- 
The Block Editor surface API has evolved at different velocities, and it's now at a point where is showing some growing pains, specially in areas that affect themes. Examples of this are: the ability to [control the editor programmatically](https://make.wordpress.org/core/2020/01/23/controlling-the-block-editor/), or [a block style system](https://github.com/WordPress/gutenberg/issues/9534) that facilitates user, theme, and core style preferences.
 -->
ブロックエディター周辺の API は異なる速度で進化しており、今やこのことから生じる苦労は、特にテーマに影響を与える部分で大きくなっています。例として [エディターのプログラム的な制御](https://make.wordpress.org/core/2020/01/23/controlling-the-block-editor/)や、ユーザー、テーマ、コアスタイルの好みを取りまとめる[ブロックスタイルシステム](https://github.com/WordPress/gutenberg/issues/9534) があります。

<!-- 
This describes the current efforts to consolidate the various APIs into a single point – a `experimental-theme.json` file that should be located inside the root of the theme directory.
 -->
この文書では現在行われている、さざまな API を一箇所に集める努力、テーマディレクトリのルートに配置する `experimental-theme.json` ファイルについて説明します。

<!-- 
### Settings can be controlled per block
 -->
### 設定をブロックごとに制御できる

<!-- 
The Block Editor already allows the control of specific settings such as alignment, drop cap, whether it's present in the inserter, etc at the block level. The goal is to surface these for themes to control at a block level.
 -->
ブロックエディターはすでに、配置、ドロップキャップ (先頭の文字を大きくする)、インサーター内での表示の有無など、特定の設定をブロックレベルで実行できます。目標として、これらの機能をテーマからでもブロックレベルで制御できるようにします。

<!-- 
### CSS Custom Properties
 -->
### CSS カスタムプロパティ

<!-- 
Presets such as [color palettes](https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-color-palettes), [font sizes](https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-font-sizes), and [gradients](https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-gradient-presets) become CSS Custom Properties, and will be enqueued by the system for themes to use in both the front-end and the editors. There's also a mechanism to create your own CSS Custom Properties.
 -->
[カラーパレット](https://ja.wordpress.org/team/handbook/block-editor/developers/themes/theme-support/#block-color-palettes)、[フォントサイズ](https://ja.wordpress.org/team/handbook/block-editor/developers/themes/theme-support/#block-font-sizes)、[グラデーション](https://ja.wordpress.org/team/handbook/block-editor/developers/themes/theme-support/#block-gradient-presets) などのプリセットは CSS カスタムプロパティとなり、システムでエンキューされるため、テーマはフロントエンドとエディターの両方で使うことができます。また独自の CSS カスタムプロパティを作成する仕組みもあります。

<!-- 
### Some block styles are managed
 -->
### いくつかのブロックスタイルを管理できる

<!-- 
By providing the block style properties in a structured way, the Block Editor can "manage" the CSS that comes from different origins (user, theme, and core CSS), reducing the amount of CSS loaded in the page and preventing specificity wars due to the competing needs of the components involved (themes, blocks, plugins).
 -->
ブロックエディターは構造化した形式のブロックスタイルプロパティを提供することで、異なるソース (ユーザー、テーマ、コア) から来る CSS を「管理」し、ページにロードする CSS の量を減らし、テーマ、ブロック、プラグインなど関与するコンポーネントの競合したニーズによる「CSS 詳細度の戦い」を抑止します。

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
    "some/block": {
      "border": {
        "customRadius": false /* true to opt-in */
      },
      "color": {
        "custom": true, /* false to opt-out, as in add_theme_support('disable-custom-colors') */
        "customGradient": true, /* false to opt-out, as in add_theme_support('disable-custom-gradients') */
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
        "fontStyles": [ ... ], /* font style presets */
        "fontWeights": [ ... ], /* font weight presets */
        "textDecorations": [ ... ], /* text decoration presets */
        "textTransforms": [ ... ] /* text transform presets */
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
For example, for this input:
 -->
たとえば次の入力に対して

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
          },
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
<!-- 
The output will be:
 -->
出力は次のようになります。


```css
:root {
  --wp--preset--color--strong-magenta: #a156b4;
  --wp--preset--color--very-dark-gray: #444;
  --wp--preset--font-size--big: 32;
  --wp--preset--font-size--normal: 16;
  --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
  --wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
}
```
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
For example, for this input:
 -->
たとえば次の入力に対して、

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
<!-- 
The output will be:
 -->
出力は次のようになります。

```css
:root {
  --wp--custom--base-font: 16;
  --wp--custom--line-height--small: 1.2;
  --wp--custom--line-height--medium: 1.4;
  --wp--custom--line-height--large: 1.8;
}
```
<!-- 
Note that, the name of the variable is created by adding `--` in between each nesting level.
 -->
注意: 変数名は各ネストレベルの間に `--` を追加して作成されます。

<!-- 
### Styles
 -->
### styles

<!-- 
Each block declares which style properties it exposes via the [block supports mechanism](../block-api/block-supports.md). The support declarations are used to automatically generate the UI controls for the block in the editor, as well as being available through the `experimental-theme.json` file for themes to target.
 -->
各ブロックは[ブロックサポート](https://ja.wordpress.org/team/handbook/block-editor/developers/block-api/block-supports/)を介して、どのスタイルプロパティを公開するかを宣言します。サポートの宣言はエディター内でのブロックの UI コントロールを自動的に生成するために使用され、また `experimental-theme.json` ファイルを介してターゲットのテーマで利用できます。
 
```json
{
  "styles": {
    "some/block/selector": {
      "border": {
        "radius": "value"
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
          "left": "value",
        },
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
For example, an input like this:
 -->
たとえば次のような入力は、

```json
{
  "styles": {
    "root": {
      "color": {
        "text": "var(--wp--preset--color--primary)"
      },
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
<!-- 
will append the following style rules to the stylesheet:
 -->
次のスタイルルールをスタイルシート末尾に追加します。

```css
:root {
  color: var(--wp--preset--color--primary);
}
h1 {
  color: var(--wp--preset--color--primary);
  font-size: calc(1px * var(--wp--preset--font-size--huge));
}
h4 {
  color: var(--wp--preset--color--secondary);
  font-size: calc(1px * var(--wp--preset--font-size--normal));
}
```
<!-- 
The `defaults` block selector can't be part of the `styles` section and will be ignored if it's present. The `root` block selector will generate a style rule with the `:root` CSS selector.
 -->
`defaults` ブロックセレクタは、`styles` セクションの一部にはなれず、あっても無視されます。`root` ブロックセレクタはなることはできず、`:root` CSS セレクタと共にスタイルルールを生成します。

<!-- 
#### Border Properties
 -->
#### ボーダープロパティ

| Block | Radius |
| --- | --- |
| Group | Yes |
| Image | Yes |

<!-- 
#### Color Properties
 -->
#### カラープロパティ
<!-- 
These are the current color properties supported by blocks:
 -->
以下は現在、ブロックでサポートされる色プロパティです。

| Block | Background | Gradient | Link | Text |
| --- | --- | --- | --- | --- |
| Global | Yes | Yes | Yes | Yes |
| Columns | Yes | Yes | Yes | Yes |
| Group | Yes | Yes | Yes | Yes |
| Heading [1] | Yes | - | Yes | Yes |
| List | Yes | Yes | - | Yes |
| Media & text | Yes | Yes | Yes | Yes |
| Navigation | Yes | - | - | Yes |
| Paragraph | Yes | - | Yes | Yes |
| Post Author | Yes | Yes | Yes | Yes |
| Post Comments | Yes | Yes | Yes | Yes |
| Post Comments Count | Yes | Yes | - | Yes |
| Post Comments Form | Yes | Yes | Yes | Yes |
| Post Date | Yes | Yes | - | Yes |
| Post Excerpt | Yes | Yes | Yes | Yes |
| Post Hierarchical Terms | Yes | Yes | Yes | Yes |
| Post Tags | Yes | Yes | Yes | Yes |
| Post Title | Yes | Yes | - | Yes |
| Site Tagline | Yes | Yes | - | Yes |
| Site Title | Yes | Yes | - | Yes |
| Social Links | Yes | - | - | Yes |
| Template Part | Yes | Yes | Yes | Yes |
<!-- 
[1] The heading block represents 6 distinct HTML elements: H1-H6. It comes with selectors to target each individual element (ex: core/heading/h1 for H1, etc).
 -->
[1] 「見出し」ブロックは6つの異なる HTML 要素、H1 から H6 を表します。それぞれ個別の要素をターゲットとするセレクタも付きます。たとえば H1 に対して core/heading/h1 等。
<!-- 
#### Spacing Properties
 -->
#### スペース関連のプラパティ

| Block | Padding |
| --- | --- |
| Cover | Yes |
| Group | Yes |

<!-- 
#### Typography Properties
 -->
#### タイポグラフィプロパティ
<!-- 
These are the current typography properties supported by blocks:
 -->
以下は現在、ブロックでサポートされるタイポグラフィプロパティです。

| Block | Font Family | Font Size | Font Style | Font Weight | Line Height | Text Decoration | Text Transform |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Global | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Code | - | Yes | - | - | - | - | - |
| Heading [1] | - | Yes | - | - | Yes | - | - |
| List | - | Yes | - | - | - | - | - |
| Navigation | Yes | Yes | Yes | Yes | - | Yes | Yes |
| Paragraph | - | Yes | - | - | Yes | - | - |
| Post Author | - | Yes | - | - | Yes | - | - |
| Post Comments | - | Yes | - | - | Yes | - | - |
| Post Comments Count | - | Yes | - | - | Yes | - | - |
| Post Comments Form | - | Yes | - | - | Yes | - | - |
| Post Date | - | Yes | - | - | Yes | - | - |
| Post Excerpt | - | Yes | - | - | Yes | - | - |
| Post Hierarchical Terms | - | Yes | - | - | Yes | - | - |
| Post Tags | - | Yes | - | - | Yes | - | - |
| Post Title | Yes | Yes | - | - | Yes | - | - |
| Preformatted | - | Yes | - | - | - | - | - |
| Site Tagline | Yes | Yes | - | - | Yes | - | - |
| Site Title | Yes | Yes | - | - | Yes | - | - |
| Verse | Yes | Yes | - | - | - | - | - |

<!-- 
[1] The heading block represents 6 distinct HTML elements: H1-H6. It comes with selectors to target each individual element (ex: core/heading/h1 for H1, etc).
 -->
[1] 「見出し」ブロックは6つの異なる HTML 要素、H1 から H6 を表します。それぞれ個別の要素をターゲットとするセレクタも付きます。たとえば H1 に対して core/heading/h1 等。

[原文](https://github.com/WordPress/gutenberg/blob/HEAD/docs/designers-developers/developers/themes/theme-json.md)
