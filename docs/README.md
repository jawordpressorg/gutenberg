<!-- 
# Block Editor Handbook
 -->
# ブロックエディターハンドブック

_日本語翻訳に関する情報については後半を参照してください。_

<!-- 
Welcome to the Block Editor Handbook.
 -->
ブロックエディターハンドブックへようこそ。

<!-- 
The [**Block Editor**](https://wordpress.org/gutenberg/) is a modern paradigm for WordPress site building and publishing. It uses a modular system of **blocks** to compose and format content and is designed to create rich and flexible layouts for websites and digital products.
 -->
[**ブロックエディター**](https://wordpress.org/gutenberg/)は、WordPress のサイト構築と公開のためのモダンなパラダイムです。コンテンツの構成とフォーマットに、「**ブロック**」によるモジュラーシステムを採用し、ウェブサイトやデジタル製品用の、リッチでフレキシブルなレイアウト作成を念頭に設計されています。

<!-- 
The Block Editor consists of several primary elements, as shown in the following figure:
 -->
ブロックエディターは下図に示すいくつかの主要な要素で構成されています。

<!--  
![Quick view of the Block Editor](https://raw.githubusercontent.com/WordPress/gutenberg/trunk/docs/assets/overview-block-editor-2023.png)
 --> 
![ブロックエディターの外観](https://raw.githubusercontent.com/WordPress/gutenberg/trunk/docs/assets/overview-block-editor-2023.png)

<!-- 
The elements highlighted are:
 -->
ハイライトされている要素は、

<!-- 
1. **Inserter:** A panel for inserting blocks into the content canvas
2. **Content canvas:** The content editor, which holds content created with blocks
3. **Settings Panel** A panel for configuring a block’s settings when selected or the settings of the post
 -->
1. **インサーター:** コンテンツキャンバス内にブロックを挿入するためのパネル
2. **コンテンツキャンバス:** コンテンツエディター。ブロックで作成されたコンテンツを保持
3. **設定パネル:** ブロックが選択された際のブロックの設定や、投稿の設定を構成するパネル

<!-- 
Through the Block Editor, you create content modularly using blocks. Many [blocks](https://developer.wordpress.org/block-editor/reference-guides/core-blocks/) are available in WordPress by default, and you can also [create your own](https://developer.wordpress.org/block-editor/getting-started/create-block/).
 -->
ブロックエディターではブロックを使用して、モジュール的にコンテンツを作成します。WordPress ではデフォルトで多くの[ブロック](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/)を利用でき、また[自分でも作成](https://ja.wordpress.org/team/handbook/block-editor/getting-started/create-block/)できます。

<!-- 
A [block](https://developer.wordpress.org/block-editor/explanations/architecture/key-concepts/#blocks) is a discrete element such as a Paragraph, Heading, Media, or Embed. Each block is treated as a separate element with individual editing and format controls. When all these components are pieced together, they make up the content of the page or post, which is then [stored in the WordPress database](https://developer.wordpress.org/block-editor/explanations/architecture/data-flow/#serialization-and-parsing).
 -->
[ブロック](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/key-concepts/#%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF)は、段落、見出し、メディア、埋め込みなどの個別の要素です。各ブロックは独立した要素として扱われ、個別の編集や書式の制御が可能です。これらの要素をすべてつなぎ合わせて固定ページや投稿のコンテンツとなり、[WordPress のデータベースに保存されます](https://developer.wordpress.org/block-editor/explanations/architecture/data-flow/#serialization-and-parsing)。

<!-- 
The Block Editor is the result of the work done on the [**Gutenberg project**](https://developer.wordpress.org/block-editor/getting-started/faq/#what-is-gutenberg), which aims to revolutionize the WordPress editing experience.
 -->
ブロックエディターは、WordPress の編集体験に革命を起こすことを目的とした [**Gutenberg プロジェクト**で行われた作業](https://ja.wordpress.org/team/handbook/block-editor/getting-started/faq/#gutenberg-%e3%82%b0%e3%83%bc%e3%83%86%e3%83%b3%e3%83%99%e3%83%ab%e3%82%af-%e3%81%a8%e3%81%af)の成果です。

<!-- 
Besides offering an [enhanced editing experience](https://wordpress.org/gutenberg/) through visual content creation tools, the Block Editor is also a powerful developer platform with a [rich feature set of APIs](https://developer.wordpress.org/block-editor/reference-guides/) that allow it to be manipulated and extended in countless ways.
 -->
ブロックエディターはビジュアルコンテンツ作成ツールを介して、[拡張された編集体験](https://wordpress.org/gutenberg/)を提供するだけでなく、[豊富な API 機能セット](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/)によって、無数の方法で操作、拡張できる強力な開発者プラットフォームです。


<!-- 
## Navigating this handbook
 -->
## ハンドブックの歩き方

<!-- 
This handbook is focused on block development and is divided into five major sections.
 -->
このハンドブックはブロック開発に焦点を当てていて、大きく5つのセクションに分かれます。

<!-- 
- **[Getting Started](https://developer.wordpress.org/block-editor/getting-started/):** For those just starting out with block development, this is where you can get set up with a [development environment](https://developer.wordpress.org/block-editor/getting-started/devenv/) and learn the [fundamentals of block development](https://developer.wordpress.org/block-editor/getting-started/fundamentals/). Its [Quick Start Guide](https://developer.wordpress.org/block-editor/getting-started/quick-start-guide/) and [Tutorial: Build your first block](https://developer.wordpress.org/block-editor/getting-started/tutorial/) are great places to start learning block development.
 -->
- **[はじめに](https://ja.wordpress.org/team/handbook/block-editor/getting-started/):** これからブロック開発を始める方はこのセクションで[開発環境](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/)をセットアップし、[ブロック開発の基本原理](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/) を学習できます。[クイックスタートガイド](https://ja.wordpress.org/team/handbook/block-editor/getting-started/quick-start-guide/)、および[チュートリアル: はじめてのブロック作成](https://ja.wordpress.org/team/handbook/block-editor/getting-started/tutorial/)は、ブロック開発の学習を始めるにあたっての素晴らしいスタート地点です。

<!-- 
- **[How-to Guides](https://developer.wordpress.org/block-editor/how-to-guides/):** Here, you can build on what you learned in the Getting Started section and learn how to solve particular problems. You will also find tutorials and example code to reuse in your own projects, such as [working with WordPress data](https://developer.wordpress.org/block-editor/how-to-guides/data-basics/) or [Curating the Editor Experience](https://developer.wordpress.org/block-editor/how-to-guides/curating-the-editor-experience/).
 -->
- **[開発ガイド](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/):** 「はじめに」のセクションで学んだことをベースに、特定の問題の解決方法を学びます。チュートリアルやプロジェクト内で再利用可能なサンプルコードも含まれます。例えば、[WordPress のデータの操作](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/) や [ユーザーインターフェースの制限](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/) など。

<!-- 
- **[Reference Guides](https://developer.wordpress.org/block-editor/reference-guides/):** This section is the heart of the handbook and is where you can get down to the nitty-gritty and look up the details of the particular API you’re working with or need information on. Among other things, the [Block API Reference](https://developer.wordpress.org/block-editor/reference-guides/block-api/) covers most of what you will want to do with a block, and each [component](https://developer.wordpress.org/block-editor/reference-guides/components/) and [package](https://developer.wordpress.org/block-editor/reference-guides/packages/) is also documented here. _Components are also documented via [Storybook](https://wordpress.github.io/gutenberg/?path=/story/docs-introduction--page)._
 -->
- **[リファレンスガイド](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/):** このセクションがこのハンドブックの心臓部です。作業中あるいは調査中に細かな部分まで調べたり、特定の API の詳細を調べる際に利用できます。[ブロック API リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/) は、ブロックで実行したいほぼすべてのトピックをカバーしています。また、各 [コンポーネント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/components/) と [パッケージ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/) もここでドキュメント化されています。_なおコンポーネントは、[Storybook](https://wordpress.github.io/gutenberg/?path=/story/docs-introduction--page) 経由でもドキュメント化されています。_

<!-- 
- **[Explanations](https://developer.wordpress.org/block-editor/explanations/):** This section enables you to go deeper and reinforce your practical knowledge with a theoretical understanding of the [Architecture](https://developer.wordpress.org/block-editor/explanations/architecture/) of the Block Editor.
 -->
- **[概説](https://ja.wordpress.org/team/handbook/block-editor/explanations/):** このセクションではさらに深く、ブロックエディター[アーキテクチャ](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/)の理論的な理解により、実践的な知識を強化できます。

<!-- 
- [**Contributor Guide**](https://developer.wordpress.org/block-editor/contributors/) - Gutenberg is open source software, and anyone is welcome to contribute to the project. This section details how to contribute and can help you choose in which way you want to contribute, whether with [code](https://developer.wordpress.org/block-editor/contributors/code/), [design](https://developer.wordpress.org/block-editor/contributors/design/), [documentation](https://developer.wordpress.org/block-editor/contributors/documentation/), or in some other way.

- **[Contributor Guide](https://developer.wordpress.org/block-editor/contributors/):** Gutenberg is open-source software, and everyone is welcome to contribute to the project. This section details how to contribute, whether with [code](https://developer.wordpress.org/block-editor/contributors/code/), [design](https://developer.wordpress.org/block-editor/contributors/design/), [documentation](https://developer.wordpress.org/block-editor/contributors/documentation/), or in some other way.

 -->
- **[コントリビュータガイド](https://ja.wordpress.org/team/handbook/block-editor/contributors/):** Gutenbergはオープンソースソフトウェアであり、誰でもこのプロジェクトに貢献できます。このセクションでは[コード](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/)、[デザイン](https://ja.wordpress.org/team/handbook/block-editor/contributors/design/)、[ドキュメント](https://ja.wordpress.org/team/handbook/block-editor/contributors/documentation/)、その他の貢献方法を詳しく説明します。

<!-- 
## Further resources
 -->
## その他の情報

<!-- 
This handbook should be considered the canonical resource for all things related to block development. However, there are other resources that can help you.
 -->
このハンドブックは、ブロック開発に関連するすべての情報の正規のリソースです。しかし、他にも参考になる資料があります。

<!-- 
- **[WordPress Developer Blog](https://developer.wordpress.org/news/):** An ever-growing resource of technical articles covering specific topics related to block development and a wide variety of use cases. The blog is also an excellent way to [keep up with the latest developments in WordPress](https://developer.wordpress.org/news/tag/roundup/).
- **[Learn WordPress](https://learn.wordpress.org/):** The WordPress hub for learning resources where you can find courses like [Introduction to Block Development: Build your first custom block](https://learn.wordpress.org/course/introduction-to-block-development-build-your-first-custom-block/), [Converting a Shortcode to a Block](https://learn.wordpress.org/course/converting-a-shortcode-to-a-block/), or [Using the WordPress Data Layer](https://learn.wordpress.org/course/using-the-wordpress-data-layer/)
- **[WordPress.tv](https://wordpress.tv/):** A hub of WordPress-related videos (from talks at WordCamps to recordings of online workshops) curated and moderated by the WordPress community. You’re sure to find something to aid your learning about [block development](https://wordpress.tv/?s=block%20development&sort=newest) or the [Block Editor](https://wordpress.tv/?s=block%20editor&sort=relevance) here.
- **[Gutenberg repository](https://github.com/WordPress/gutenberg/):** Development of the Block Editor takes place on GitHub. The repository contains the code of interesting packages such as [`block-library`](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-library/src) (core blocks) or [`components`](https://github.com/WordPress/gutenberg/tree/trunk/packages/components) (common UI elements). _The [block-development-examples](https://github.com/WordPress/block-development-examples) repository is another useful reference._
- **[End User Documentation](https://wordpress.org/documentation/):** This documentation site is targeted to the end user (not developers), where you can also find documentation about the [Block Editor](https://wordpress.org/documentation/category/block-editor/) and [working with blocks](https://wordpress.org/documentation/article/work-with-blocks/).
 -->
- **[WordPress 開発者ブログ](https://developer.wordpress.org/news/):** ここにはブロック開発に関連する特定のトピックやさまざまなユースケースをカバーする技術記事が日々アップされています。また [WordPress の最新動向を知る](https://developer.wordpress.org/news/tag/roundup/)ための優れたリソースでもあります。
- **[Learn WordPress](https://learn.wordpress.org/?locale=ja):** 学習リソースのための WordPress ハブです。コースには「[Introduction to Block Development: Build your first custom block (ブロック開発入門: 最初のカスタムブロックを構築する)](https://learn.wordpress.org/course/introduction-to-block-development-build-your-first-custom-block/)」、「[Converting a Shortcode to a Block (ショートコードをブロックに変換する)](https://learn.wordpress.org/course/converting-a-shortcode-to-a-block/)」、「[Using the WordPress Data Layer (WordPress データレイヤーの使用)](https://learn.wordpress.org/course/using-the-wordpress-data-layer/)」など。
- **[WordPress.tv](https://wordpress.tv/):** WordPress コミュニティが監修した WordPress 関連動画のハブです。WordCamp でのセッションからオンラインワークショップの録画まで。[ブロック開発](https://wordpress.tv/?s=block%20development&sort=newest)や[ブロックエディター](https://wordpress.tv/?s=block%20editor&sort=relevance)の学習に役立つ情報も見つかるはずです。
- **[Gutenberg リポジトリ](https://github.com/WordPress/gutenberg/):** ブロックエディタープロジェクトの開発は、この GitHub リポジトリで行われています。このリポジトリには [`block-library`](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-library/src) (コアブロック) や [`components`](https://github.com/WordPress/gutenberg/tree/trunk/packages/components) (共通 UI 要素) などの興味深いパッケージのコードが含まれています。_[block-development-examples](https://github.com/WordPress/block-development-examples) リポジトリも有用なリファレンスです。_
- **[エンドユーザードキュメント](https://wordpress.org/documentation/):** エンドユーザー (開発者でなく) をターゲットとしたドキュメントサイト。ここには[ブロックエディター](https://wordpress.org/documentation/category/block-editor/)や[ブロックの操作](https://wordpress.org/documentation/article/work-with-blocks/)に関するドキュメントがあります。

<!-- 
## Are you in the right place?
 -->
## 正しいハンドブックを見ていますか ?

<!-- 
The Block Editor Handbook is designed for those looking to create and develop for the Block Editor. However, it's important to note that there are multiple other handbooks available within the [Developer Resources](http://developer.wordpress.org/) that you may find beneficial:
 -->
ブロックエディターハンドブックは、ブロックエディター用の作成、開発を目指しているしかし、[Developer Resources](http://developer.wordpress.org/)には、他にも複数の有益なハンドブックが用意されていることに留意してください：

- [Theme Handbook](https://developer.wordpress.org/themes)
- [Plugin Handbook](https://developer.wordpress.org/plugins)
- [Common APIs Handbook](https://developer.wordpress.org/apis)
- [Advanced Administration Handbook](https://developer.wordpress.org/advanced-administration)
- [REST API Handbook](https://developer.wordpress.org/rest-api/)
- [Coding Standards Handbook](https://developer.wordpress.org/coding-standards)

<br />
<hr />
<br />

## ブロックエディターハンドブック日本語版


### 問い合わせ先

ブロックエディターハンドブックの内容やサンプルへのコメント、問題報告は [Gutenberg GitHub リポジトリ](https://github.com/WordPress/gutenberg) へお願いします。

日本語訳については [日本語版リポジトリ](https://github.com/jawordpressorg/gutenberg)、または [WordPress の 日本語 Slack](https://ja.wordpress.org/support/article/slack/) 内の #docs チャンネルへお願いします。

### 参照

- [英語版ブロックエディターハンドブック](https://developer.wordpress.org/block-editor/)
- [英語版リポジトリ](https://github.com/WordPress/gutenberg)
- [日本語版リポジトリ](https://github.com/jawordpressorg/gutenberg)

### ブロックエディターハンドブック日本語版翻訳者

| GitHub Username | WordPress.org Username|
| --------------- | --------------------- |
| @naokomc | @nao |
| @ixkaito | @ixkaito |
| @ryo-utsunomiya | |
| @mypacecreator | @mypacecreator |
| @takepo | @taisuke |
| @atachibana | @atachibana |
| @miminari | @mimitips |
| @shizumi | @Shizumi |
| @arm-band | @armband |
| @kurudrive | @kurudrive |
| @t-hamano | @wildworks |
| @tecking | @tecking |
| @s56bouya | @s56bouya |
| @qoorus | @qoorus |

### 主な変更

2024/10/18

- [リアクティブと宣言型の考え方](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/core-concepts/the-reactive-and-declarative-mindset/) - 翻訳

2024/10/11

- [Interactivity API について](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/iapi-about/) - 翻訳
- [よくある質問](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/iapi-faq/) - 翻訳
- [コアコンセプト](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/core-concepts/) - 翻訳

2024/9/29
- [スタイルとスタイルシートの利用](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/applying-styles-with-stylesheets/) - css/scss のインポートの注記 [#61252](https://github.com/WordPress/gutenberg/pull/61252)
- [API バージョン](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-api-versions/) - iframe の条件 [#65375](https://github.com/WordPress/gutenberg/pull/65375)
- [block.json のメタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) - PHPによるバリエーションリスト [#62092](https://github.com/WordPress/gutenberg/pull/62092)
[コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - 画像 blob [#63076](https://github.com/WordPress/gutenberg/pull/63076)、margin [#63546](https://github.com/WordPress/gutenberg/pull/63546)、動画 blob [#63238](https://github.com/WordPress/gutenberg/pull/63238)、音声 blob [#63257](https://github.com/WordPress/gutenberg/pull/63257)、ファイル blob [#63282](https://github.com/WordPress/gutenberg/pull/63282)、グループ shadow [#63295](https://github.com/WordPress/gutenberg/pull/63295)、ターム一覧 label, showLabel [#56364](https://github.com/WordPress/gutenberg/pull/56364)、引用 margin, padding [#63545](https://github.com/WordPress/gutenberg/pull/63545)、align [#64188](https://github.com/WordPress/gutenberg/pull/64188)、ボタン color, padding [#63538](https://github.com/WordPress/gutenberg/pull/63538)、検索 margin [#63547](https://github.com/WordPress/gutenberg/pull/63547)、最新のコメント color [#63419](https://github.com/WordPress/gutenberg/pull/63419)、見出し levelOptions [#63535](https://github.com/WordPress/gutenberg/pull/63535)、ログイン / ログアウト color [#63550](https://github.com/WordPress/gutenberg/pull/63550)、サイトのキャッチフレーズ levelOptions [#64113](https://github.com/WordPress/gutenberg/pull/64113)、サイトのタイトル levelOptions [#64111](https://github.com/WordPress/gutenberg/pull/64111)、クエリータイトル levelOptions [#64107](https://github.com/WordPress/gutenberg/pull/64107)、コメントタイトル levelOptions [#64103](https://github.com/WordPress/gutenberg/pull/64103)、タイトル levelOptions [#64106](https://github.com/WordPress/gutenberg/pull/64106)、リスト 説明 [#64025](https://github.com/WordPress/gutenberg/pull/64025)、リスト項目 説明 [#64025](https://github.com/WordPress/gutenberg/pull/64025)、anchor [#48758](https://github.com/WordPress/gutenberg/pull/48758)、タグクラウド 説明 [#64151](https://github.com/WordPress/gutenberg/pull/64151)、 サブメニュー typography [#65060](https://github.com/WordPress/gutenberg/pull/65060)、カテゴリー一覧 -> ターム一覧 [#65272](https://github.com/WordPress/gutenberg/pull/65272)
- [Interactivity API リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/) - interactivity の追加 [#64061](https://github.com/WordPress/gutenberg/pull/64061)
- [Core Concepts](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/core-concepts/) - 新規
- [Server-side rendering: Processing directives on the server](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/core-concepts/server-side-rendering/) - 新規
- [The Reactive and Declarative mindset](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/core-concepts/the-reactive-and-declarative-mindset/) - 新規
- [Understanding global state, local context and derived state](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/core-concepts/undestanding-global-state-local-context-and-derived-state/) - 新規
- [Using TypeScript](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/core-concepts/using-typescript/) - 新規
- [Interactivity API FAQ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/iapi-faq/) - Alpine vs Prect [#63593](https://github.com/WordPress/gutenberg/pull/63593)
- [API リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/api-reference/) - getContext の名前空間引数 [#63411](https://github.com/WordPress/gutenberg/pull/63411)、wp_interactivity_state [#64356](https://github.com/WordPress/gutenberg/pull/64356)
- [SlotFill リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/slotfills/) - 条件付きのレンダー [#64807](https://github.com/WordPress/gutenberg/pull/64807)
- [theme.json リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-living/) - background backgroundAttachment [#61382](https://github.com/WordPress/gutenberg/pull/61382)、構成変更 [#63591](https://github.com/WordPress/gutenberg/pull/63591)、[#63868](https://github.com/WordPress/gutenberg/pull/63868)

2024/7/7
- [エディター機能の無効化](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/disable-editor-functionality/) - RichText の例 [#63065](https://github.com/WordPress/gutenberg/pull/63065)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/global-settings-and-styles/) - spacing の説明の削除 [#61842](https://github.com/WordPress/gutenberg/pull/61842)、editor-spacing-sizes [#62252](https://github.com/WordPress/gutenberg/pull/62252)
- [サポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) - splitting [#63016](https://github.com/WordPress/gutenberg/pull/63016)
- [バリエーション](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-variations/) - isActive でのドット表記 [#62088](https://github.com/WordPress/gutenberg/pull/62088)、getActiveBlockVariation の戻り値 [#62031](https://github.com/WordPress/gutenberg/pull/62031)、Version 6.6の変更明記 [#62399](https://github.com/WordPress/gutenberg/pull/62399)
- [SlotFill リフレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/slotfills/) - サンプル更新 [#62271](https://github.com/WordPress/gutenberg/pull/62271)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - 詩 background, dimensions [#62498](https://github.com/WordPress/gutenberg/pull/62498)、引用 background, dimensions [#62497](https://github.com/WordPress/gutenberg/pull/62497)、 投稿コンテンツ background [#62499](https://github.com/WordPress/gutenberg/pull/62499)、 リスト項目 color [#59892](https://github.com/WordPress/gutenberg/pull/59892)
- [Interactivity API Reference](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/) - API の追加方法 [#63493](https://github.com/WordPress/gutenberg/pull/63439)
- [API Reference](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/api-reference/) - wp-on-async [#62663](https://github.com/WordPress/gutenberg/pull/62663)、toMainThread -> splitTask [#62665](https://github.com/WordPress/gutenberg/pull/62665) [#62759](https://github.com/WordPress/gutenberg/pull/62759)、data-wp-run の ref [#62835](https://github.com/WordPress/gutenberg/pull/62835)、data-wp-class ではケバブ [#62817](https://github.com/WordPress/gutenberg/pull/62817)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-living/) - defaultSpacingSizes [#61842](https://github.com/WordPress/gutenberg/pull/61842)、グローバルスタイル background [#60100](https://github.com/WordPress/gutenberg/pull/60100)
- [theme.json の新しいバージョンへの移行](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-migrations/) - defaultSpacingSizes [#61842](https://github.com/WordPress/gutenberg/pull/61842)
- [@wordpress/env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) - mysqlPort [#61057](https://github.com/WordPress/gutenberg/pull/61057)

2024/5/26
- [TOP](https://ja.wordpress.org/team/handbook/block-editor/) - 全面改訂 [#58652](https://github.com/WordPress/gutenberg/pull/58652)、sidebar -> panel [#57546](https://github.com/WordPress/gutenberg/issues/57546)
- [Coding Guidelines](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/coding-guidelines/) - className -> clsx [#61138](https://github.com/WordPress/gutenberg/pull/61138)、process.env -> globalThis [#61486](https://github.com/WordPress/gutenberg/pull/61486)
- [End-to-End Testing](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/testing-overview/e2e/) - playwright キーワード削除 [#60376](https://github.com/WordPress/gutenberg/pull/60376)
- [パフォーマンス](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/performance/) - コードバイタルとリファレンスコミット追記 [#58927](https://github.com/WordPress/gutenberg/pull/58927)
- [はじめに](https://ja.wordpress.org/team/handbook/block-editor/getting-started/) - 全面改訂 [#58624](https://github.com/WordPress/gutenberg/pull/58624)
- [よくある質問](https://ja.wordpress.org/team/handbook/block-editor/getting-started/faq/) - キーボードショートカットのリスト削除 [#61591](https://github.com/WordPress/gutenberg/pull/61591)
- [Static or Dynamic rendering of a block](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/static-dynamic-rendering/) - 校正 [#58681](https://github.com/WordPress/gutenberg/pull/58681)
- [ブロックコントロール: ブロックツールバーと設定サイドバー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/block-controls-toolbar-and-sidebar/) - 削除
- [ネストしたブロック: InnerBlocks の使用](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/) - allowedBlocks 追加 [#58262](https://github.com/WordPress/gutenberg/pull/58262)
- [基本的なブロックの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/) - 削除
- [フィルターとフック](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/filters-and-hooks/) - エディター設定 [#61597](https://github.com/WordPress/gutenberg/pull/61597)、ブロックフィルター [#61771](https://github.com/WordPress/gutenberg/pull/61771)
- [パターン](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/patterns/) - theme.json v3 対応 [#58409](https://github.com/WordPress/gutenberg/pull/58409)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/theme-json/) - Version 3 [#61221](https://github.com/WordPress/gutenberg/pull/61221)
- [フィーチャーフラグ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/feature-flags/) - process.env -> globalThis [#61486](https://github.com/WordPress/gutenberg/pull/61486)
- [プラグイン用サイドバー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/plugin-sidebar-0/) - PluginSidebar を @wordpress/editor に移動 [#60815](https://github.com/WordPress/gutenberg/pull/60815)
- [Propagating updates for block types](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/propagating-updates/) - reusable block -> synched pattern [#58633](https://github.com/WordPress/gutenberg/pull/58633)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/global-settings-and-styles/) - aspectRatio [#56897](https://github.com/WordPress/gutenberg/pull/56897)、backgroundSize [#59165](https://github.com/WordPress/gutenberg/pull/59165)、textAlign [#59531](https://github.com/WordPress/gutenberg/pull/59531)、Version 3 [#61221](https://github.com/WordPress/gutenberg/pull/61221)、defaultSpacingSizes [#61842](https://github.com/WordPress/gutenberg/pull/61842)、editor-spacing-sizes [#62252](https://github.com/WordPress/gutenberg/pull/62252)
- [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/) - wp-block-styles の明確化 [#58915](https://github.com/WordPress/gutenberg/pull/58915)、Version 3 [#61221](https://github.com/WordPress/gutenberg/pull/61221)
- [block.json のメタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) - allowedBlocks [#58262](https://github.com/WordPress/gutenberg/pull/58262)、viewStyle [#56492](https://github.com/WordPress/gutenberg/pull/55492)、viewScriptModule [#58731](https://github.com/WordPress/gutenberg/pull/58731)
[登録](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/) - allowedBlocks [#58262](https://github.com/WordPress/gutenberg/pull/58262)
- [サポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) - defaultStylePicker 削除 [#58930]、interactivity [#59152](https://github.com/WordPress/gutenberg/pull/59152)、background, color.button, color.enableContrastChecker, color.heading, renaming, shadow [#59862](https://github.com/WordPress/gutenberg/pull/59862)、textAlign [#59531](https://github.com/WordPress/gutenberg/pull/59531)
- [バリエーション](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-variations/) - isActive 補筆 [#60801](https://github.com/WordPress/gutenberg/pull/60801) [#62088](https://github.com/WordPress/gutenberg/pull/62088)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - グループ aspectRatio 削除 [#58414](https://github.com/WordPress/gutenberg/pull/58414)、ページネーション parent 削除 [#58602](https://github.com/WordPress/gutenberg/pull/58602)、interactivity [#58132](https://github.com/WordPress/gutenberg/pull/58132)、パターン overrides -> content [#58596](https://github.com/WordPress/gutenberg/pull/58596)、カラム、画像 shadow [#57982](https://github.com/WordPress/gutenberg/pull/57982)、ancestor [#59390](https://github.com/WordPress/gutenberg/pull/59390)、Allowed Blocks [#59424](https://github.com/WordPress/gutenberg/pull/59424)、引用 align -> textAlign、メディアとテキスト useFeaturedImage [#51491](https://github.com/WordPress/gutenberg/pull/51491)、アイキャッチ画像 shadow [#59616](https://github.com/WordPress/gutenberg/pull/59616)、filter [#60184](https://github.com/WordPress/gutenberg/pull/60184)、サイトのキャッチコピー label [#59654](https://github.com/WordPress/gutenberg/pull/59654)、リスト html 無効化 [#55656](https://github.com/WordPress/gutenberg/pull/55656)、ボタン、見出し、リスト項目、段落 splitting [#54543](https://github.com/WordPress/gutenberg/pull/54543)、リスト className [#56469](https://github.com/WordPress/gutenberg/pull/56469)、カバー shadow [#61883](https://github.com/WordPress/gutenberg/pull/61883)
- [Interactivity API Reference](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/) - 新規
- [Quick start guide](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/iapi-quick-start-guide/) - 新規
- [API Reference](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/api-reference/) - 新規
- [About the Interactivity API](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/iapi-about/) - 新規
- [Frequently Asked Questions](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/iapi-faq/) - 新規
- [SlotFill リフレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/slotfills/) - PluginPostStatusInfo を edit-post から editor へ [#60814](https://github.com/WordPress/gutenberg/pull/60814)
- [theme.json リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/) - Version 3 追加 [#61221](https://github.com/WordPress/gutenberg/pull/61221)
[theme.json バージョン2 リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-v2/) - 新規
- [theme.json v3](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-living/) - fontFamilies preview 削除 [#58395](https://github.com/WordPress/gutenberg/pull/58395)、defaultFontSizes 削除 [#58456](https://github.com/WordPress/gutenberg/pull/58456)、backgroundSize [#59127](https://github.com/WordPress/gutenberg/pull/59127) [#59165](https://github.com/WordPress/gutenberg/pull/59165)、appearanceTools 説明 [#59499](https://github.com/WordPress/gutenberg/pull/59499)、color.caption [#60017](https://github.com/WordPress/gutenberg/pull/60017)、textAlign [#59531](https://github.com/WordPress/gutenberg/pull/59531)、blockGap & fluid [#61024](https://github.com/WordPress/gutenberg/pull/61024)、defaultFontSizes & V3 [#58409](https://github.com/WordPress/gutenberg/pull/58409) [#61221](https://github.com/WordPress/gutenberg/pull/61221)、aspectRatios [#47271](https://github.com/WordPress/gutenberg/pull/47271)
- [theme.json の新しいバージョンへの移行](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-migrations/) - defaultFontSizes [#58409](https://github.com/WordPress/gutenberg/pull/58409)、V3 [#61221](https://github.com/WordPress/gutenberg/pull/61221)
- [コンポーネントリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/components/) - TypeScript [#60350](https://github.com/WordPress/gutenberg/pull/60350)
- [@wordpress/create-block](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/) - node 20.10.0、npm 10.2.3 [#61430](https://github.com/WordPress/gutenberg/pull/61430)
- [外部プロジェクトテンプレート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/packages-create-block-external-template/) - variants [#60095](https://github.com/WordPress/gutenberg/pull/60095)、transformer [#60445](https://github.com/WordPress/gutenberg/pull/60445)

2024/1/27

- [Documentation Contributions](https://ja.wordpress.org/team/handbook/block-editor/contributors/documentation/) - 動画の追加方法 [#58029](https://github.com/WordPress/gutenberg/pull/58029)
- [クイックスタートガイド](https://ja.wordpress.org/team/handbook/block-editor/getting-started/quick-start-guide/) - wp-env セクション追加 [#57559](https://github.com/WordPress/gutenberg/pull/57559)、動画追加 [#57834](https://github.com/WordPress/gutenberg/pull/57834)
- [Static or Dynamic rendering of a block](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/static-dynamic-rendering/) - 新規
- [クエリーループブロックの拡張](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/extending-the-query-loop-block/) - key の追加 [#58119](https://github.com/WordPress/gutenberg/pull/58119)
- [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/) - 外観ツール aspectRatio [#56897](https://github.com/WordPress/gutenberg/pull/56897)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - ギャラリー randomOrder [#57477](https://github.com/WordPress/gutenberg/pull/57477)、アイキャッチ画像 useFirstImageFromPost [#56573](https://github.com/WordPress/gutenberg/pull/56573)、検索 buttonBehavior 削除 [#53467](https://github.com/WordPress/gutenberg/pull/53467)、投稿ナビゲーションリンク taxonomy [#48912](https://github.com/WordPress/gutenberg/pull/48912)、プルクオート spacing [#45731](https://github.com/WordPress/gutenberg/pull/45731)、パターン overrides [#58102](https://github.com/WordPress/gutenberg/pull/58102)、カバー、グループ aspectRatio [#56897](https://github.com/WordPress/gutenberg/pull/56897)、クエリーループ interactivity [#58316](https://github.com/WordPress/gutenberg/pull/58316)
- [theme.json バージョン2](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-living/) - typography defaultFontSizes [#56661](https://github.com/WordPress/gutenberg/pull/56661)、appearanceTools、dimensions aspectRatio [#56897](https://github.com/WordPress/gutenberg/pull/56897)

2024/1/26
- [用語集](https://ja.wordpress.org/team/handbook/block-editor/getting-started/glossary/) - 翻訳

2024/1/24
- [チュートリアル: はじめてのブロック作成](https://ja.wordpress.org/team/handbook/block-editor/getting-started/tutorial/) - 翻訳
- [エディター内のブロック](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-in-the-editor/) - 翻訳
- [ブロックのマークアップ表現](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/markup-representation-block/) - 翻訳

2023/12/29
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - グループ backgroundSize [#57005](https://github.com/WordPress/gutenberg/pull/57005)
- [ユーザーインターフェースのカスタマイズ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/) - 以下のファイルに分割 [#57289](https://github.com/WordPress/gutenberg/pull/57289)
- [Block Locking API](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/block-locking) - 新規
- [パターン](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/patterns) - 新規
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/theme-json) - 新規
- [フィルターとフック](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/filters-and-hooks) - 新規
- [エディター機能の無効化](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/disable-editor-functionality) - 新規

2023/12/24
- [コードによるコントリビューション入門](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/getting-started-with-code-contribution/) - Node.js v20 と npm v10 [#56331](https://github.com/WordPress/gutenberg/pull/56331)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - グループ backgroundSize [#57005](https://github.com/WordPress/gutenberg/pull/57005)
- [The block in the Editor](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-in-the-editor/) - 新規
- [Markup representation of a block](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/markup-representation-block/) - 新規
- [Tutorial: Build your first block](https://ja.wordpress.org/team/handbook/block-editor/getting-started/tutorial/) - 新規
- [ブロックの作成 チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/getting-started/create-block/) - ディレクトリ以下削除 [#56931](https://github.com/WordPress/gutenberg/pull/56931)
- [属性と編集可能フィールド](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields/) - 削除 [#57120](https://github.com/WordPress/gutenberg/pull/57120)
- [ブロックサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/block-supports-in-static-blocks/) - 削除 [#57120](https://github.com/WordPress/gutenberg/pull/57120)
- [ダイナミックブロック内のブロックサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/block-supports-in-dynamic-blocks/) - 削除 [#57120](https://github.com/WordPress/gutenberg/pull/57120)
- [WP-CLI を使用したブロックの生成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/generate-blocks-with-wp-cli/) - 削除 [#57120](https://github.com/WordPress/gutenberg/pull/57120)
- [ブロックエディターでの JavaScript の使用方法](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/) - ディレクトリ以下削除 [#57166](https://github.com/WordPress/gutenberg/pull/57166)

2023/12/22
- [ユーザーインターフェースの制限](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/) - 翻訳
- [エディターでのアセットのエンキュー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/enqueueing-assets-in-the-editor/) - 翻訳

2023/12/2
- [Gutenberg Release Process](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/release/) - 対象ブランチの説明 [#56183](https://github.com/WordPress/gutenberg/pull/56183)、トラブルシューティング [#56436](https://github.com/WordPress/gutenberg/pull/56436)
- [wp-scripts 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/) - 例の追加 [#56298](https://github.com/WordPress/gutenberg/pull/56298)
- [ブロック開発の基本原理](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/) - 翻訳
- [ブロックのファイル構成](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/file-structure-of-a-block/) - 翻訳
- [block.json](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-json/) - 翻訳
- [ブロックの登録](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/registration-of-a-block/) - 翻訳
- [ブロックラッパー](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-wrapper/) - 翻訳
- [ブロックエディターでの JavaScript の利用](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/javascript-in-the-block-editor/) - 翻訳
- [Gutenberg Dataを使用したアプリの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/) - Playgrond のデモ [#56292](https://github.com/WordPress/gutenberg/pull/56292)
- [サポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) - allowCustomContentAndWideSize [#56236](https://github.com/WordPress/gutenberg/pull/56236)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - 引用 blockGap [#56064](https://github.com/WordPress/gutenberg/pull/56064)、allowEditing 削除 [#55240](https://github.com/WordPress/gutenberg/pull/55240)、画像 align [#55954](https://github.com/WordPress/gutenberg/pull/55954)、interactivity [#56143](https://github.com/WordPress/gutenberg/pull/56143)、カスタムリンク renaming 削除 [#56425](https://github.com/WordPress/gutenberg/pull/56425)、リスト項目 magin, padding [#55874](https://github.com/WordPress/gutenberg/pull/55874)

2023/11/21
- [削除ボタンの追加](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/5-adding-a-delete-button/) - 翻訳
- [ブロックサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/block-supports-in-static-blocks/) - 翻訳
- [クイックスタートガイド](https://ja.wordpress.org/team/handbook/block-editor/getting-started/quick-start-guide/) - 翻訳
- [クエリーループブロックの拡張](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/extending-the-query-loop-block/) - 翻訳
- [セレクタ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-selectors/) - 翻訳

2023/11/11
- 多数 - JSXを使用しないサンプルの削除
- 多数 - サンプルリポジトリを変更 [block-development-examples](https://github.com/WordPress/block-development-examples)
- [ブロックの作成チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/getting-started/create-block/) - クイックスタート部分を「[クイックスタートガイド](https://ja.wordpress.org/team/handbook/block-editor/getting-started/quick-start-guide/)」に移動
- [クイックスタートガイド](https://ja.wordpress.org/team/handbook/block-editor/getting-started/quick-start-guide/) - 新規
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - フォーム内のコンポーネントの自由度を上げる [#55758](https://github.com/WordPress/gutenberg/pull/55758)、引用 blockGap [#56064](https://github.com/WordPress/gutenberg/pull/56064)、allowEditing 削除 [#55240](https://github.com/WordPress/gutenberg/pull/55240)

2023/11/4
- [create-block 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-create-block/) - 翻訳
- [wp-scripts 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/) - 翻訳

2023/11/2
- [React Native mobile editor](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/react-native/) - Appium 2 移行 [#55166](https://github.com/WordPress/gutenberg/pull/55166)
- [Getting Started for the React Native based Mobile Gutenberg](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/react-native/getting-started-react-native/) - Appium 2 移行 [#55166](https://github.com/WordPress/gutenberg/pull/55166)
- [wp-env 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-env/) - ダイアグラム追加 [#55381](https://github.com/WordPress/gutenberg/pull/55381)
- [Get started with create-block](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-create-block/) - 新規
- [Get started with wp-scripts](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/) - 新規
- [ネストしたブロック: InnerBlocks の使用](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/) - デフォルトブロック [#55375](https://github.com/WordPress/gutenberg/pull/55375)
- [ページ作成フォームの構築](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/4-building-a-create-page-form/) - 翻訳
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - background: backgroundImage [#55376](https://github.com/WordPress/gutenberg/pull/55376)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - パターン、ナビゲーション、パターンプレースホルダー、テンプレートパーツ renaming 削除 [#54426](https://github.com/WordPress/gutenberg/pull/54426)、フォーム、フォーム入力フィールド、フォーム送信通知、フォーム送信ボタン experimental [#55187](https://github.com/WordPress/gutenberg/pull/55187)、タームの説明 コアでも利用可 [#55669](https://github.com/WordPress/gutenberg/pull/55669)

2023/10/8
- [Getting Started for the React Native based Mobile Gutenberg](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/react-native/getting-started-react-native/) - Demo editor setup [#54957](https://github.com/WordPress/gutenberg/pull/54957)
- [ブロック開発環境](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/) - 全面改定 [#54395](https://github.com/WordPress/gutenberg/pull/54395)
- [Node.js 開発環境](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/nodejs-development-environment/) - 「開発環境」から分離、補筆 [#54395](https://github.com/WordPress/gutenberg/pull/54395)
- [wp-env 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-env/) - 「開発環境」から分離、補筆 [#54395](https://github.com/WordPress/gutenberg/pull/54395)
- [How to setup local WordPress environment on Ubuntu](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/docker-ubuntu/) - 削除
- [フルサイト編集](https://ja.wordpress.org/team/handbook/block-editor/getting-started/full-site-editing/) - 削除
- [プラグイン用サイドバー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/plugin-sidebar-0/) - @wordpress/element を react で置換 [#54908](https://github.com/WordPress/gutenberg/pull/54908)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - ナビゲーション ariaLabel [#54418](https://github.com/WordPress/gutenberg/pull/54418)、見出し __unstablePasteTextInline [#54301](https://github.com/WordPress/gutenberg/pull/54301)、カバー isUserOverlayColor [#54054](https://github.com/WordPress/gutenberg/pull/54054)、ログイン / アウト spacing [#45147](https://github.com/WordPress/gutenberg/pull/45147)、フォーム、入力フィールド、フォーム送信通知、フォーム送信ボタン [#44214](https://github.com/WordPress/gutenberg/pull/44214)、脚注 inserter 削除 [#55058](https://github.com/WordPress/gutenberg/pull/55058)
- [コンポーネントリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/components/) - tooltip は popver を使わない [#54707](https://github.com/WordPress/gutenberg/pull/54707)

2023/9/19
- [トップページ](https://ja.wordpress.org/team/handbook/block-editor/) - よくある質問、Glossary の位置をはじめにに [#54117](https://github.com/WordPress/gutenberg/pull/54117)、[#54120](https://github.com/WordPress/gutenberg/pull/54120)
- [デザインのコントリビューション](https://ja.wordpress.org/team/handbook/block-editor/contributors/design/) - ロゴ追加、Future Opportunities 削除 [#51065](https://github.com/WordPress/gutenberg/pull/51065)
- [Design > Reference](https://ja.wordpress.org/team/handbook/block-editor/contributors/design/reference/) - 削除
[Triage](https://ja.wordpress.org/team/handbook/block-editor/contributors/triage/) - 全面改訂 [#54258](https://github.com/WordPress/gutenberg/pull/54258)
- [History](https://ja.wordpress.org/team/handbook/block-editor/explanations/history/) - 改訂 [#54314](https://github.com/WordPress/gutenberg/pull/54314)
- [はじめに](https://ja.wordpress.org/team/handbook/block-editor/getting-started/) - 改定 [#54314](https://github.com/WordPress/gutenberg/pull/54314)
- [カスタムブロックエディターの構築](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/platform/custom-block-editor/) - BlockCanvas 追加 [#54149](https://github.com/WordPress/gutenberg/pull/54149)
- [Enqueueing assets in the Editor](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/enqueueing-assets-in-the-editor/) - 全面改訂 [#54125](https://github.com/WordPress/gutenberg/pull/54125)
- [属性](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-attributes/) - multiline 削除 [#54310](https://github.com/WordPress/gutenberg/pull/54310)
- [block.json のメタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) - ブロックフック [#54293](https://github.com/WordPress/gutenberg/pull/54293)
- [登録](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/) - ブロックフック [#54293](https://github.com/WordPress/gutenberg/pull/54293)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - ボタン tagName, type [#54206](https://github.com/WordPress/gutenberg/pull/54206)、ファイル、ナビゲーション、検索 interactivity [#54297](https://github.com/WordPress/gutenberg/pull/54297)、[#53343](https://github.com/WordPress/gutenberg/pull/53343)、グループ background [#53934](https://github.com/WordPress/gutenberg/pull/53934)、コンテンツ blockGap [#54282](https://github.com/WordPress/gutenberg/pull/54282)、画像 behaviors 削除 [#53851](https://github.com/WordPress/gutenberg/pull/53851)、lightbox [#54509](https://github.com/WordPress/gutenberg/pull/54509)、見出し __unstablePasteTextInline [#54301](https://github.com/WordPress/gutenberg/pull/54301)、ナビゲーション ariaLabel [#54418](https://github.com/WordPress/gutenberg/pull/54418)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-living/) - background [#53934](https://github.com/WordPress/gutenberg/pull/53934)、behaviors 削除 [#538551](https://github.com/WordPress/gutenberg/pull/53851)、lightbox [#54509](https://github.com/WordPress/gutenberg/pull/54509)

2023/9/4
- [コードによるコントリビューション入門](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/getting-started-with-code-contribution/) - Node v16 & npm v8 [#53912](https://github.com/WordPress/gutenberg/pull/53912)
- [ネストしたブロック: InnerBlocks の使用](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/) - parent、ancester の説明を改定 [#53855](https://github.com/WordPress/gutenberg/pull/53855)
- [基本的なブロックの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/) - プロジェクトの作成を追加 [#53689](https://github.com/WordPress/gutenberg/pull/53689)
- [カスタムブロックエディターの構築](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/platform/custom-block-editor/) - Popover.Slot 削除 [#53889](https://github.com/WordPress/gutenberg/pull/53889)、ObserveTyping 削除 [#53875](https://github.com/WordPress/gutenberg/pull/53875)、SlotFillProvider 削除 [#53940](https://github.com/WordPress/gutenberg/pull/53940)
- [Enqueueing assets in the Editor](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/enqueueing-assets-in-the-editor/) - 新規
- [block.json のメタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) - render.php の例 [#53973](https://github.com/WordPress/gutenberg/pull/53973)
- [バリエーション](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-variations/) - 全面改訂 [#53817](https://github.com/WordPress/gutenberg/pull/53817)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - ブロック名から post 削除 [#53492](https://github.com/WordPress/gutenberg/pull/53492/files)、ページ番号 midSize [#51216](https://github.com/WordPress/gutenberg/pull/51216)、クエリーループ enhancedPagination [#53812](https://github.com/WordPress/gutenberg/pull/53812)、グループ button [#53667](https://github.com/WordPress/gutenberg/pull/53667)、カラム button、heading [#54104](https://github.com/WordPress/gutenberg/pull/54104)

2023/8/14
- [Gutenberg Release Process](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/release/) - 全面改訂 [#52955](https://github.com/WordPress/gutenberg/pull/52955)
- [よくある質問](https://ja.wordpress.org/team/handbook/block-editor/explanations/faq/) - 複数ブロックにわたるテキスト選択のショートカット Shift + 矢印 [#43164](https://github.com/WordPress/gutenberg/pull/43164)
- [開発環境](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/) - Node v14 -> v16 [#53523](https://github.com/WordPress/gutenberg/pull/53523)
- [カスタムブロックエディターの構築](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/platform/custom-block-editor/) - 全面改訂 [#53159](https://github.com/WordPress/gutenberg/pull/53159)
- [Curating the Editor Experience](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/) - スターターパターン [#53398](https://github.com/WordPress/gutenberg/pull/53398)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - blockGap のサポート要件を明確化 [#53254](https://github.com/WordPress/gutenberg/pull/53254)
- [API バージョン](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/versions/) - バージョン3 [#53046](https://github.com/WordPress/gutenberg/pull/53046)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - 脚注 color [#52897](https://github.com/WordPress/gutenberg/pull/52897)、カバー enableContrastChecker 削除 [#53080](https://github.com/WordPress/gutenberg/pull/53080)、見出し __unstablePasteTextInline 削除 [#48254](https://github.com/WordPress/gutenberg/pull/48254)、ファイル spacing [#45107](https://github.com/WordPress/gutenberg/pull/45107)、詳細 layout、blockGap [#53282](https://github.com/WordPress/gutenberg/pull/53282)、脚注 spacing, typography [#53044](https://github.com/WordPress/gutenberg/pull/53044)、投稿コンテンツ color [#51326](https://github.com/WordPress/gutenberg/pull/51326)
- [theme.json バージョン2](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-living/) - layout allowEditing [#53378](https://github.com/WordPress/gutenberg/pull/53378)

2023/7/29
- [Getting Started for the React Native based Mobile Gutenberg](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/react-native/getting-started-react-native/) - npm run test:native [#51869](https://github.com/WordPress/gutenberg/pull/51869)
- [Setup guide for React Native development (macOS)](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/react-native/osx-setup-guide/) - 同上
- [Gutenberg Release Process](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/release/) - Creating a minor release for previous stable releases 追加 [#49968](https://github.com/WordPress/gutenberg/pull/49968)
- [Scripts](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/scripts/) - nux [#52455](https://github.com/WordPress/gutenberg/pull/52455)
- [Testing Overview](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/testing-overview/) - npm run test:native [#51869](https://github.com/WordPress/gutenberg/pull/51869)
[WordPress に組み込まれたバージョン](https://ja.wordpress.org/team/handbook/block-editor/contributors/versions-in-wordpress/) - 6.3 [#51984](https://github.com/WordPress/gutenberg/pull/51984)
[Entities and Undo/Redo.](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/entities/) - Transient -> Cached [#51644](https://github.com/WordPress/gutenberg/pull/51644)
- [Styles](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/styles/) - layout 更新 [#52316](https://github.com/WordPress/gutenberg/pull/52316)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - link-color [#51775](https://github.com/WordPress/gutenberg/pull/51775)、border [#51777](https://github.com/WordPress/gutenberg/pull/51777)
- [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/) - link-color [#51775](https://github.com/WordPress/gutenberg/pull/51775)、border [#51777](https://github.com/WordPress/gutenberg/pull/51777)、外観ツールの dimensions、position [#52785](https://github.com/WordPress/gutenberg/pull/52785)
- [リファレンスガイド](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/) - nux [#52455](https://github.com/WordPress/gutenberg/pull/52455)
- [サポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) - layout [#52673](https://github.com/WordPress/gutenberg/pull/52673)
- [データモジュールリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/data/) - nux [#52455](https://github.com/WordPress/gutenberg/pull/52455)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - タームの説明 fse [#51053](https://github.com/WordPress/gutenberg/pull/51053)、多数 color - heading [#49131](https://github.com/WordPress/gutenberg/pull/49131)、脚注 inserter [#52445](https://github.com/WordPress/gutenberg/pull/52445)、パターン reusable block -> pattern [#52010](https://github.com/WordPress/gutenberg/pull/52010)、整形済みテキスト spacing [#45196](https://github.com/WordPress/gutenberg/pull/45196)
- [theme.json バージョン2](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-living/) - typography writingMode [#50822](https://github.com/WordPress/gutenberg/pull/50822)、behaviors [#51156](https://github.com/WordPress/gutenberg/pull/51156)

[以前の変更履歴](https://ja.wordpress.org/team/handbook/block-editor/handbook/block-editor-changelog/)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/README.md)
