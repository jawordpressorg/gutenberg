<!-- 
# Glossary
 -->
# 用語集

<!--
*** a href="# に注意すること !
-->

<!-- 
## Attribute sources
 -->
## Attribute sources / 属性ソース

<!-- 
An object describing the attributes shape of a block. The keys can be named as most appropriate to describe the state of a block type. The value for each key is a function which describes the strategy by which the attribute value should be extracted from the content of a saved post's content. When processed, a new object is created, taking the form of the keys defined in the attribute sources, where each value is the result of the attribute source function.
 -->
ブロックの属性の形状を記述するオブジェクト。キーには、ブロックタイプの状態を適切に記述する名前を付けます。各キーの値は関数で、保存された投稿のコンテンツから属性値を抽出するストラテジーが記述されます。処理すると属性ソースで定義されたキーの形を取る新しいオブジェクトが作成され、各値は属性ソース関数の結果になります。

<!-- 
## Attributes
 -->
## Attributes / 属性

<!-- 
The object representation of the current state of a block in post content. When loading a saved post, this is determined by the attribute sources for the block type. These values can change over time during an editing session when the user modifies a block, and are used when determining how to serialize the block.
 -->
投稿コンテンツ内のブロックの現在の状態を表すオブジェクト表現。保存された投稿をロードすると、属性はブロックタイプの属性ソースによって決定されます。属性の値は、編集セッション中にユーザがブロックを変更すると、変更される可能性があります。属性はまた、ブロックのシリアライズ方法の決定に使用されます。

<!-- 
## Block
 -->
## Block / ブロック

<!-- 
The abstract term used to describe units of markup that, composed together, form the content or layout of a webpage. The idea combines concepts of what in WordPress today we achieve with shortcodes, custom HTML, and embed discovery into a single consistent API and user experience.
 -->
ウェブページのコンテンツやレイアウトを構成するマークアップのユニットを表す抽象的な用語。ベースの考えは、今日のWordPress で実現しているショートコード、カスタム HTML、埋め込みディスカバリの概念と、単一の一貫した API やユーザー体験との組み合わせです。

<!-- 
## Block Styles
 -->
## Block Styles / ブロックスタイル

<!-- 
The CSS styles that are part of the block, either via its stylesheet or via the block markup itself. For example, a class attached to the block markup is considered block styles.
 -->
ブロックの一部であるCSSスタイル。ブロックのスタイルシート、またはブロックマークアップ自体を介して提供されます。例えば、ブロックマークアップに付加されたクラスはブロックスタイルとみなされます。

<!-- 
Compare to <a href="#global-styles">Global Styles</a>. In contraposition to Global Styles, block styles are sometimes referred to as <a href="#local-styles">Local Styles</a>.
 -->
「グローバルスタイル」と比較してください。ブロックスタイルをグローバルスタイルと対比して、「ローカルスタイル」と呼ぶこともあります。

<!-- 
Learn more about [Block Styles](/docs/explanations/architecture/styles.md#block-styles).
 -->
詳細については、[ブロックスタイル](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/styles/#Block-styles)を参照してください。

<!-- 
## Block Supports
 -->
## Block Supports / ブロックサポート

<!-- 
An API for blocks to declare what features they support. By declaring support for a feature, the API would add additional <a href="#attributes">attributes</a> to the block and matching UI controls for most of the existing block supports.
 -->
ブロックがサポートする機能を宣言する API。機能のサポートの宣言により、API はブロックに追加「属性」と、既存のブロックのほとんどにマッチする UI コントロールを追加します。

<!-- 
See <a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/">Block Supports reference documentation</a> for a deep dive into the API.
 -->
API の詳細については、<a href="https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/">ブロックサポートのリファレンスドキュメント</a>を参照してください。

<!-- 
## Block Theme
 -->
## Block Theme / ブロックテーマ

<!-- 
A theme built in block forward way that allows Full Site Editing to work. The core of a block theme are its block templates and block template parts. To date, block theme templates have been HTML files of block markup that map to templates from the standard WordPress template hierarchy.
 -->
フルサイト編集を可能にする、ブロック優先の形で構築されたテーマ。ブロックテーマの核はブロックテンプレートとブロックテンプレートパーツです。現在のところ、ブロックテーマのテンプレートはブロックマークアップの HTML ファイルで、標準的な WordPress テンプレート階層のテンプレートにマッピングされます。

<!-- 
## Block categories
 -->
## Block categories / ブロックカテゴリー

<!-- 
These are not a WordPress taxonomy, but instead used internally to sort blocks in the Block Library.
 -->
WordPress のタクソノミーではなく、内部的にブロックライブラリ内でのブロックのソートに使用されます。

<!-- 
## Block ~Inserter~ Library
 -->
## Block ~Inserter~ Library / ブロック ~インサーター~ ライブラリ

<!-- 
Primary interface for selecting from the available blocks, triggered by plus icon buttons on Blocks or in the top-left of the editor interface.
 -->
利用可能なブロックを選択するメインのインターフェース。ブロックのプラスアイコンボタン、またはエディターインターフェースの左上にあります。

<!-- 
## Block name
 -->
## Block name / ブロック名

<!-- 
A unique identifier for a block type, consisting of a plugin-specific namespace and a short label describing the block's intent. e.g. <code>core/image</code>
 -->
ブロックタイプの一意の識別子。プラグイン固有の名前空間と、ブロックの目的を記述する短いラベルで構成されます。例 `core/image`

<!-- 
## Block Templates
 -->
## Block Templates / ブロックテンプレート

<!-- 
A template is a pre-defined arrangement of blocks, possibly with predefined attributes or placeholder content. You can provide a template for a post type, to give users a starting point when creating a new piece of content, or inside a custom block with the <code>InnerBlocks</code> component. At their core, templates are simply HTML files of block markup that map to templates from the standard WordPress template hierarchy, for example index, single or archive. This helps control the front-end defaults of a site that are not edited via the Page Editor or the Post Editor. See the <a href="../../developers/block-api/block-templates/">templates documentation</a> for more information.
 -->
事前に定義されたブロックの配置。通常は定義済みの属性やプレースホルダーのコンテンツを含みます。投稿タイプにテンプレートを提供して、ユーザーが新しいコンテンツを作成する際の出発点としたり、`InnerBlocks` コンポーネントを使用してカスタムブロック内部で使用できます。テンプレートそのものはブロックマークアップのシンプルな HTML ファイルで、標準的な WordPress テンプレート階層のテンプレートにマップされます。例えば、index、single、archive。これはページエディターや投稿エディターでは編集できない、サイトのフロントエンドのデフォルトを制御します。詳細は <a href="https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-templates/">テンプレートのドキュメント</a> を参照してください。

<!-- 
## Block Template Parts
 -->
## Block Template Parts / ブロックテンプレートパーツ

<!-- 
Building on Block Templates, these parts help set structure for reusable items like a Footer or Header that one typically sees in a WordPress site. They are primarily site structure and are never to be mixed with the post content editor. With Full Site Editing and block based themes, users can create their own arbitrary Template Parts, save those in the database for their site, and re-use them throughout their site. Template parts are equivalent – in blocks – of theme template parts. They are generally defined by a theme first, carry some semantic meaning (could be swapped between themes such as a header), and can only be inserted in the site editor context (within “templates”).
 -->
ブロックテンプレートの上に構築され、WordPress で一般的に見られるフッターやヘッダーのような再利用可能なアイテムの構造の設定を支援します。基本的にサイトの構造であり、投稿コンテンツエディターとは決して混在されません。フルサイト編集やブロックベースのテーマでは、ユーザーは任意のテンプレートパーツを作成でき、サイトのデータベースに保存してサイト全体で再利用できます。テンプレートパーツは、テーマのテンプレートパーツのブロック版に相当します。一般的に最初にテーマによって定義され、何らかの意味を持ち (テーマ間で入れ替え可能。例: ヘッダー)、サイトエディターのコンテキスト内 (「テンプレート」内) にのみ挿入できます。

<!-- 
## Block type
 -->
## Block type / ブロックタイプ

<!-- 
In contrast with the blocks composing a particular post, a block type describes the blueprint by which any block of that type should behave. So while there may be many images within a post, each behaves consistent with a unified image block type definition.
 -->
特定の投稿を構成するブロックとは対照的に、ブロックタイプは、そのタイプの任意のブロックがどのように振る舞うかという青写真を記述します。そのため、1つの投稿の中に多くの画像があっても、それぞれの画像は統一された画像ブロックタイプの定義に従って動作します。

<!-- 
## Classic block
 -->
## Classic block / クラシックブロック

<!-- 
A block which embeds the TinyMCE editor as a block, TinyMCE was the base of the previous core editor. Older content created prior to the block editor will be loaded in to a single Classic block.
 -->
TinyMCE エディターをブロックとして埋め込むブロック。TinyMCE は以前のコアエディターのベースです。ブロックエディター以前に作成された古いコンテンツは、単一のクラシックブロックに読み込まれます。

<!-- 
## Dynamic block
 -->
## Dynamic block / ダイナミックブロック

<!-- 
A type of block where the content of which may change and cannot be determined at the time of saving a post, instead calculated any time the post is shown on the front of a site. These blocks may save fallback content or no content at all in their JavaScript implementation, instead deferring to a PHP block implementation for runtime rendering.
 -->
ブロックのコンテンツが変わる可能性があり、投稿の保存時にはコンテンツを決定できないタイプのブロック。代わりにサイトのフロントで投稿が表示されるたびに計算されます。これらのブロックの JavaScript の実装はフォールバックのコンテンツを保存するか、まったくコンテンツを保存せず、実行時のレンダリングは、ブロックの PHP 実装に委ねられます。

<!-- 
## Full Site Editing
 -->
## Full Site Editing / フルサイト編集

<!-- 
This refers to a collection of features that ultimately allows users to edit their entire website using blocks as the starting point. This feature set includes everything from block patterns to global styles to templates to design tools for blocks (and more). First released in WordPress 5.9.
 -->
究極的にはユーザーが、最初からブロックを使用してサイト全体を編集できるようにする機能の集合体を指します。これにはブロックパターン、グローバルスタイル、テンプレート、ブロック用のデザインツール等々が含まれます。WordPress 5.9で初めてリリースされました。

<!-- 
## Global Styles
 -->
## Global Styles / グローバルスタイル

<!-- 
The CSS styles generated by WordPress and enqueued as an embedded stylesheet in the front end of the site. The stylesheet ID is `global-styles-inline-css`. The contents of this stylesheet come from the default `theme.json` of WordPress, the theme's `theme.json`, and the styles provided by the user via the global styles sidebar in the site editor.
 -->
WordPress によって生成され、サイトのフロントエンドの埋め込みスタイルシートとしてエンキューされる CSS スタイル。スタイルシート ID は `global-styles-inline-css`。このスタイルシートのコンテンツは、WordPress のデフォルトの `theme.json`、テーマの `theme.json`、サイトエディターのグローバルスタイルサイドバーでユーザーが設定したスタイルから構成されます。

<!-- 
See [theme.json reference docs](/docs/reference-guides/theme-json-reference/README.md)</a>, the [how to guide](/docs/how-to-guides/themes/global-settings-and-styles.md), and an introduction to [styles in the block editor](/docs/explanations/architecture/styles.md).
 -->
[theme.json リファレンスドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/)、[開発ガイド](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/global-settings-and-styles/)、[ブロックエディターのスタイル](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/styles/)の紹介を参照してください。

<!-- 
Compare to <a href="#block-styles">block styles</a>.
 -->
「ブロックスタイル」と比較してください。

<!-- 
## Inspector
 -->
## Inspector / インスペクター

<!-- 
Deprecated term. See <a href="#settings-sidebar">Settings Sidebar.</a>
 -->
非推奨用語。「設定サイドバー」を参照。

<!-- 
## Local Styles
 -->
## Local Styles / ローカルスタイル
<!-- 
See <a href="#block-styles">Block Styles</a>.
 -->
「ブロックスタイル」参照。

<!-- 
## Navigation Block
 -->
## Navigation Block / ナビゲーションブロック

<!-- 
A block that allows you to edit a site's navigation menu, both in terms of structure and design.</a>
 -->
サイトのナビゲーションメニューを構造とデザインの両面から編集できるブロック。

<!-- 
## Patterns
 -->
## Patterns / パターン

<!-- 
Patterns are predefined layouts of blocks that can be inserted as starter content that are meant to be changed by the user every time. Once inserted, they exist as a local save and are not global.
 -->
定義済みのブロックのレイアウト。スターターコンテンツとして挿入でき、毎回変更されることを想定しています。一度挿入するとローカルに保存されて存在し、グローバルではありません。

<!-- 
## Post settings
 -->
## Post settings / 投稿設定
<!-- 
A sidebar region containing metadata fields for the post, including scheduling, visibility, terms, and featured image.
 -->
投稿のメタデータフィールドを含むサイドバー領域。予約投稿、公開状態、ターム、アイキャッチ画像等を含みます。

<!-- 
## Query Block
 -->
## Query Block / クエリーブロック

<!-- 
A block that replicates the classic WP_Query and allows for further customization with additional functionality.
 -->
古典的な WP_Query を複製したブロック。追加機能で、さらにカスタマイズできます。

<!-- 
## Reusable block
 -->
## Reusable block / 再利用ブロック

<!-- 
A block that is saved and then can be shared as a reusable, repeatable piece of content.
 -->
保存して、繰り返し再利用可能なコンテンツ部品のブロック。

## RichText

<!-- 
A common component enabling rich content editing including bold, italics, hyperlinks, etc.
 -->
太字、斜体、ハイパーリンクなどのリッチコンテンツ編集を可能にする共通コンポーネント。

<!-- 
## Serialization
 -->
## Serialization / シリアライゼーション

<!-- 
The process of converting a block's attributes object into HTML markup, which occurs each time a block is edited.
 -->
ブロックの属性オブジェクトを HTML マークアップに変換するプロセス。ブロックを編集するたびに発生します。

<!-- 
## Settings Sidebar
 -->
## Settings Sidebar / 設定サイドバー

<!-- 
The panel on the right that contains the document and block settings. The sidebar is toggled using the Settings gear icon. Block settings are shown when a block is selected, otherwise document settings are shown.
 -->
ドキュメントとブロックの設定を含む右側のパネル。サイドバーは、設定の歯車アイコンで切り替えられます。ブロックの設定はブロックを選択すると表示され、そうでなければドキュメントの設定が表示されます。

<!-- 
## Site Editor
 -->
## Site Editor / サイトエディター
<!-- 
The cohesive experience that allows you to directly edit and navigate between various templates, template parts, styling options, and more.
 -->
様々なテンプレート、テンプレートパーツ、スタイリングオプションなどを直接、編集、ナビゲートする、統合体験。

<!-- 
## Static block
 -->
## Static block / 静的ブロック

<!-- 
A type of block where the content of which is known at the time of saving a post. A static block will be saved with HTML markup directly in post content.
 -->
投稿の保存時にコンテンツが分かっているタイプのブロック。静的ブロックは、投稿コンテンツ内に直接 HTML マークアップされて保存されます。

<!-- 
## Template Editing Mode
 -->
## Template Editing Mode / テンプレート編集モード

<!-- 
A scaled down direct editing experience allowing you to edit/change/create the template a post/page uses.
 -->
スケールダウンした直接編集体験。投稿やページで使用するテンプレートを編集、変更、作成できます。

<!-- 
## Theme Blocks
 -->
## Theme Blocks / テーマブロック
<!-- 
Blocks that accomplish everything possible in traditional templates using template tags (ex: Post Author Block). A full list can be found [here](https://github.com/WordPress/gutenberg/issues/22724).
 -->
従来のテンプレートがテンプレートタグを使用して実現していたすべてを行うブロック (例: 投稿者ブロック)。完全なリストは[こちら](https://github.com/WordPress/gutenberg/issues/22724)にあります。

## TinyMCE
<!-- 
<a href="https://www.tinymce.com/">TinyMCE</a> is a web-based JavaScript WYSIWYG (What You See Is What You Get) editor.
 -->
<a href="https://www.tinymce.com/">TinyMCE</a>。ウェブベースの JavaScript WYSIWYG (What You See Is What You Get) エディター。

<!-- 
## Toolbar
 -->
## Toolbar / ツールバー

<!-- 
A set of button controls. In the context of a block, usually referring to the toolbar of block controls shown above the selected block.
 -->
ボタンコントロールの集合。ブロックのコンテキストでは通常、選択したブロックの上に表示されるブロックコントロールのツールバーを指します。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/glossary.md)
