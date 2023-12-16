<!-- 
# Block Editor Handbook
 -->
# ブロックエディターハンドブック

_日本語版の情報については末尾を参照してください。_

<!--
**Gutenberg** is a codename for a whole new paradigm in WordPress site building and publishing, that aims to revolutionize the entire publishing experience as much as Gutenberg did the printed word. Right now, the project is in the second phase of a four-phase process that will touch every piece of WordPress -- Editing, **Customization** (which includes Full Site Editing, Block Patterns, Block Directory and Block based themes), Collaboration, and Multilingual -- and is focused on a new editing experience, the block editor (which is the topic of the current documentation).
 -->
<!-- 
**Gutenberg** は WordPress サイト構築およびパブリッシングにおけるまったく新しいパラダイムのコードネームです。Gutenberg プロジェクトは、[グーテンベルク](https://ja.wikipedia.org/wiki/%E3%83%A8%E3%83%8F%E3%83%8D%E3%82%B9%E3%83%BB%E3%82%B0%E3%83%BC%E3%83%86%E3%83%B3%E3%83%99%E3%83%AB%E3%82%AF)が印刷業界に果たした影響と同じように、パブリッシング体験全体の革新を目的とします。プロジェクトは現在、WordPress のあらゆる部分を対象とする4つのフェーズ、「編集」「**カスタマイゼーション**」(これにはフルサイト編集、ブロックパターン、ブロックディレクトリ、ブロックベーステーマが含まれます)「コラボレーション」「マルチリンガル」のうち2番めのフェーズにあり、新しい編集体験、「ブロックエディター」にフォーカスしています。
 -->
<!--
![Quick view of the block editor](https://raw.githubusercontent.com/WordPress/gutenberg/trunk/docs/assets/quick-view-of-the-block-editor.png)
 -->
<!-- 
Hi! 👋 Welcome to the Block Editor Handbook.
 -->
こんにちは 👋 ブロックエディターハンドブックへようこそ。

<!-- 
The [**Block editor**](https://wordpress.org/gutenberg/) is a modern and up-to-date paradigm for WordPress site building and publishing. It uses a modular system of **Blocks** to compose and format content, and is designed to create rich and flexible layouts for websites and digital products.
 -->
[**ブロックエディター**](https://wordpress.org/gutenberg/)は、WordPress のサイト構築と公開のためのモダンな最新パラダイムです。コンテンツの構成とフォーマットに**ブロック**によるモジュラーシステムを採用し、ウェブサイトやデジタル製品用のリッチでフレキシブルなレイアウトを作成できるようにデザインしました。

<!-- 
The editor consists of several primary elements, as shown in the following figure:
 -->
エディターは下図に示すいくつかの主要な要素で構成されています。

<!--
1. Block inserter
2. Block editor content area
3. Settings sidebar
 -->
<!-- 
![ブロックエディターのクイックビュー](https://raw.githubusercontent.com/WordPress/gutenberg/trunk/docs/assets/quick-view-of-the-block-editor.png)

**凡例 :**
1. ブロックインサーター
2. ブロックエディターコンテンツ領域
3. 設定サイドバー
 -->
<!--
Using a system of Blocks to compose and format content, the new block-based editor is designed to create rich, flexible layouts for websites and digital products. Content is created using blocks instead of freeform text with inserted media, embeds and Shortcodes (there's a Shortcode block, though).
-->
<!-- 
新しいブロックエディターは「ブロック」システムを採用し、コンテンツを組み合わせて整形していきます。ブロックエディターは、Web サイトやデジタル製品用にリッチでフレキシブルなレイアウトを作成できるようデザインされています。コンテンツはブロックを使用して作成し、これまでのフリーフォームテキストにメディアやオブジェクトやショートコードを埋め込む方法とは異なります(念のため伝えておくと「ショートコード」ブロックがあります)。
 -->
<!--
Blocks treat Paragraphs, Headings, Media, and Embeds all as components that, when strung together, make up the content stored in the WordPress database, replacing the traditional concept of freeform text with embedded media and shortcodes. The new editor is designed with progressive enhancement, meaning that it is backward compatible with all legacy content. It also offers a process to try to convert and split a Classic block into equivalent blocks using client-side parsing. Finally, the blocks offer enhanced editing and format controls.
-->
<!-- 
ブロックは、段落、見出し、メディア、埋め込みオブジェクトなどすべてをコンポーネントとして扱い、互いを接続してコンテンツを作成し、WordPress データベース内に保存します。従来のフリーテキストにメディアやショートコードを埋め込むコンセプトは置き換えられした。新しいエディターは漸進的な拡張で設計されていて、すべてのレガシーなコンテンツに対して後方互換性があり、さらにクライアントサイドのパーシングを使用して単純に移行し Classic ブロックに対して、同等のブロックに変換、分割するプロセスを提供します。
 -->
<!--
The Editor offers rich new value to users by offering visual, drag-and-drop creation tools and powerful developer enhancements including modern vendor packages, reusable components, rich APIs and hooks to modify and extend the editor through Custom Blocks, Custom Block Styles and Plugins.
-->
<!-- 
ブロックエディターはユーザーにリッチで新しい価値を届けます。ブロックエディターの機能としては、ビジュアルでドラッグアンドドロップ対応の作成ツール、最新のベンダーパッケージを使用したパワフルな開発拡張、再利用可能コンポーネント、カスタムブロックやカスタムブロックスタイル、プラグインを通じたエディターの変更、拡張が可能なリッチな API とフックがあります。
 -->
<!--
[Learn to use the block editor](https://wordpress.org/support/article/wordpress-editor/) to create media-rich posts and pages.
 -->
<!--  
[ブロックエディターの使い方を学ぶ](https://ja.wordpress.org/support/article/wordpress-editor/) では、メディアリッチな投稿やページを作成できます。
 -->

<!--
## Quick links
 -->
<!-- 
## クイックリンク
 -->
<!--  
![Quick view of the block editor](https://raw.githubusercontent.com/WordPress/gutenberg/trunk/docs/assets/overview-block-editor-2023.png)
 --> 
![ブロックエディターの外観](https://raw.githubusercontent.com/WordPress/gutenberg/trunk/docs/assets/overview-block-editor-2023.png)

<!-- 
The elements highlighted in the figure are:
 -->
図中にハイライトされている要素は、

<!-- 
1. **Inserter**: A panel for inserting blocks into the content canvas
2. **Content canvas**: The content editor, which holds content created with blocks
3. **Settings sidebar**: A sidebar panel for configuring a block’s settings (among other things)
 -->
1. **インサーター**: コンテンツキャンバス内にブロックを挿入するためのパネル
2. **コンテンツキャンバス**: コンテンツエディター。ブロックで作成されたコンテンツを保持
3. **設定サイドバー**: ブロックの設定を構成するサイドバーパネルなど

<!-- 
Through the Block editor, you create content modularly using Blocks. There are a number of [core blocks](https://developer.wordpress.org/block-editor/reference-guides/core-blocks/) ready to be used, and you can also [create your own custom block](https://developer.wordpress.org/block-editor/getting-started/create-block/).
 -->
ブロックエディターではブロックを使用して、モジュール的にコンテンツを作成します。すぐに使用できる多くの[コアブロック](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/)があり、自分でも[オリジナルのブロックを作成](https://ja.wordpress.org/team/handbook/block-editor/getting-started/create-block/)できます。

<!-- 
A [Block](https://developer.wordpress.org/block-editor/explanations/architecture/key-concepts/#blocks) is a discrete element such as a Paragraph, Heading, Media element, or Embed. Each block is treated as a separate element with individual editing and format controls. When all these components are pieced together, they make up the content that is then [stored in the WordPress database](https://developer.wordpress.org/block-editor/explanations/architecture/data-flow/#serialization-and-parsing).
 -->
[ブロック](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/key-concepts/#%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF)は、段落、見出し、メディア要素、埋め込みなどの個別の要素です。各ブロックは独立した要素として扱われ、個別の編集や書式の制御が可能です。これらの要素をすべてつなぎ合わせてコンテンツとなり、[WordPress のデータベースに保存されます](https://developer.wordpress.org/block-editor/explanations/architecture/data-flow/#serialization-and-parsing)。

<!-- 
The Block Editor is the result of the [work done on the **Gutenberg project**](https://developer.wordpress.org/block-editor/getting-started/faq/#what-is-gutenberg) which is aimed to revolutionize the WordPress editing experience.
 -->
ブロックエディターは、WordPress の編集体験に革命を起こすことを目的とした [**Gutenberg プロジェクト**で行われた作業](https://ja.wordpress.org/team/handbook/block-editor/getting-started/faq/#gutenberg-%e3%82%b0%e3%83%bc%e3%83%86%e3%83%b3%e3%83%99%e3%83%ab%e3%82%af-%e3%81%a8%e3%81%af)の成果です。

<!-- 
Besides offering an [enhanced editing experience](https://wordpress.org/gutenberg/) through visual content creation tools, the Block Editor is also a powerful developer platform with a [rich feature set of APIs](https://developer.wordpress.org/block-editor/reference-guides/) that allow it to be manipulated and extended in a multitude of different ways.
 -->
ブロックエディターはビジュアルコンテンツ作成ツールを介して、[拡張された編集体験](https://wordpress.org/gutenberg/)を提供するだけでなく、[豊富な API 機能セット](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/)によって、さまざまな方法で操作、拡張できる強力な開発者プラットフォームです。

<!-- 
## Navigating this handbook
 -->
## ハンドブックの歩き方

<!-- 
This handbook is focused on block development and is divided into five sections, each serving a different purpose.
 -->
このハンドブックはブロック開発に焦点を当てています。5つのセクションに分かれていて、それぞれに異なる目的があります。
<!-- 
**[Getting Started](https://developer.wordpress.org/block-editor/getting-started/)**
 -->
**[はじめに](https://ja.wordpress.org/team/handbook/block-editor/getting-started/)**

<!-- 
For those just starting out with block development this is where you can get set up with a [development environment](https://developer.wordpress.org/block-editor/getting-started/devenv/) and learn the [fundamentals of block development](https://developer.wordpress.org/block-editor/getting-started/create-block/). Its [Glossary of terms](https://developer.wordpress.org/block-editor/getting-started/glossary/) and [FAQs](https://developer.wordpress.org/block-editor/getting-started/faq/) should answer any outstanding questions you may have.
 -->
これからブロック開発を始める方はこのセクションで[開発環境](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/)をセットアップし、[ブロック開発の基礎](https://ja.wordpress.org/team/handbook/block-editor/getting-started/create-block/)を学習できます。また、[用語集](https://ja.wordpress.org/team/handbook/block-editor/getting-started/glossary/)や [よくある質問](https://ja.wordpress.org/team/handbook/block-editor/getting-started/faq/)では、頻出の質問に対する答えを得られます。

<!-- 
**[How-to Guides](https://developer.wordpress.org/block-editor/how-to-guides/)**
 -->
**[開発ガイド](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/)**
<!-- 
Here you can build on what you learned in the Getting Started section and learn how to solve particular problems that you might encounter. You can also get tutorials, and example code that you can reuse, for projects such as [building a full-featured block](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/) or [working with WordPress’ data](https://developer.wordpress.org/block-editor/how-to-guides/data-basics/). In addition you can learn [How to use JavaScript with the Block Editor](https://developer.wordpress.org/block-editor/how-to-guides/javascript/).
 -->
「はじめに」のセクションで学んだことをベースに、開発中に出会うさまざまな問題の解決方法を学びます。またチュートリアルや再利用可能なサンプルコードも取得できます。例えば、[フル機能のブロックの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/)、[WordPress のデータの操作](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/)など。さらに、[ブロックエディターでJavaScriptを使用する方法](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/)も学べます。

<!-- 
**[Reference Guides](https://developer.wordpress.org/block-editor/reference-guides/)**
 -->
**[リファレンスガイド](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/)**
<!-- 
This section is the heart of the handbook and is where you can get down to the nitty-gritty and look up the details of the particular API that you’re working with or need information on. Among other things, the [Block API Reference](https://developer.wordpress.org/block-editor/reference-guides/block-api/) covers most of what you will want to do with a block, and each [component](https://developer.wordpress.org/block-editor/reference-guides/components/) and [package](https://developer.wordpress.org/block-editor/reference-guides/packages/) is also documented here. _Components are also documented via [Storybook](https://wordpress.github.io/gutenberg/?path=/story/docs-introduction--page)._
 -->
このセクションがこのハンドブックの心臓部です。作業中あるいは調査中に細かな部分まで調べたり、特定の API の詳細を調べる際に利用できます。[ブロック API リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/) は、ブロックで実行したいほぼすべてのトピックをカバーしています。また、各 [コンポーネント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/components/) と [パッケージ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/) もここでドキュメント化されています。_なおコンポーネントは、[Storybook](https://wordpress.github.io/gutenberg/?path=/story/docs-introduction--page)経由でもドキュメント化されています。_

<!-- 
**[Explanations](https://developer.wordpress.org/block-editor/explanations/)**
 -->
**[概説](https://ja.wordpress.org/team/handbook/block-editor/explanations/)**

<!-- 
This section enables you to go deeper and reinforce your practical knowledge with a theoretical understanding of the [Architecture](https://developer.wordpress.org/block-editor/explanations/architecture/) of the block editor.

 -->
このセクションではさらに深く、ブロックエディター[アーキテクチャ](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/)の理論的な理解により、実践的な知識を強化できます。

<!-- 
**[Contributor Guide](https://developer.wordpress.org/block-editor/contributors/)**
 -->
**[コントリビュータガイド](https://ja.wordpress.org/team/handbook/block-editor/contributors/)**
<!-- 
Gutenberg is open source software and anyone is welcome to contribute to the project. This section details how to contribute and can help you choose in which way you want to contribute, whether that be with [code](https://developer.wordpress.org/block-editor/contributors/code/), with [design](https://developer.wordpress.org/block-editor/contributors/design/), with [documentation](https://developer.wordpress.org/block-editor/contributors/documentation/), or in some other way.
 -->
Gutenbergはオープンソースソフトウェアであり、誰でもこのプロジェクトに貢献できます。このセクションでは、どの領域に貢献するかを選択できるよう、[コード](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/)、[デザイン](https://ja.wordpress.org/team/handbook/block-editor/contributors/design/)、[ドキュメント](https://ja.wordpress.org/team/handbook/block-editor/contributors/documentation/)、その他の貢献方法を詳しく説明します。

<!-- 
## Further resources
 -->
## その他のリソース

<!-- 
This handbook should be considered the canonical resource for all things related to block development. However there are other resources that can help you.
 -->
このハンドブックは、ブロック開発に関連するすべての情報の正規のリソースです。しかし、他にも参考になる資料があります。

<!-- 
- [**WordPress Developer Blog**](https://developer.wordpress.org/news/) - An ever-growing resource of technical articles covering specific topics related to block development and a wide variety of use cases. The blog is also an excellent way to [keep up with the latest developments in WordPress](https://developer.wordpress.org/news/tag/roundup/).
- [**Learn WordPress**](https://learn.wordpress.org/) - The WordPress hub for learning resources where you can find courses like [Introduction to Block Development: Build your first custom block](https://learn.wordpress.org/course/introduction-to-block-development-build-your-first-custom-block/), [Converting a Shortcode to a Block](https://learn.wordpress.org/course/converting-a-shortcode-to-a-block/) or [Using the WordPress Data Layer](https://learn.wordpress.org/course/using-the-wordpress-data-layer/)
- [**WordPress.tv**](https://wordpress.tv/) - A hub of WordPress-related videos (from talks at WordCamps to recordings of online workshops) curated and moderated by the WordPress.org community. You’re sure to find something to aid your learning about [block development](https://wordpress.tv/?s=block%20development&sort=newest) or the [block-editor](https://wordpress.tv/?s=block%20editor&sort=relevance) here.
- [**Gutenberg repository**](https://github.com/WordPress/gutenberg/) - Development of the block editor project is carried out in this GitHub repository. It contains the code of interesting packages such as [`block-library`](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-library/src) (core blocks) or [`components`](https://github.com/WordPress/gutenberg/tree/trunk/packages/components) (common UI elements). _The [gutenberg-examples](https://github.com/WordPress/gutenberg-examples) repository is another useful reference._
- [**End User Documentation**](https://wordpress.org/documentation/) - Documentation site targeted to the end user (not developers) where you can also find documentation about the [Block Editor](https://wordpress.org/documentation/category/block-editor/) and [working with blocks](https://wordpress.org/documentation/article/work-with-blocks/).
 -->
- [**WordPress 開発者ブログ**](https://developer.wordpress.org/news/) - ここにはブロック開発に関連する特定のトピックやさまざまなユースケースをカバーする技術記事が日々アップされています。また [WordPress の最新動向を知る](https://developer.wordpress.org/news/tag/roundup/)ための優れたリソースでもあります。
- [**Learn WordPress**](https://learn.wordpress.org/?locale=ja) - 学習リソースのための WordPress ハブです。コースには「[Introduction to Block Development: Build your first custom block (ブロック開発入門: 最初のカスタムブロックを構築する)](https://learn.wordpress.org/course/introduction-to-block-development-build-your-first-custom-block/)」、「[Converting a Shortcode to a Block (ショートコードをブロックに変換する)](https://learn.wordpress.org/course/converting-a-shortcode-to-a-block/)」、「[Using the WordPress Data Layer (WordPress データレイヤーの使用)](https://learn.wordpress.org/course/using-the-wordpress-data-layer/)」など。
- [**WordPress.tv**](https://wordpress.tv/) - WordPress.org コミュニティが監修した WordPress 関連動画のハブです。WordCamp でのセッションからオンラインワークショップの録画まで。[ブロック開発](https://wordpress.tv/?s=block%20development&sort=newest)や[ブロック編集](https://wordpress.tv/?s=block%20editor&sort=relevance)の学習に役立つ情報も見つかるはず。
- [**Gutenberg リポジトリ**](https://github.com/WordPress/gutenberg/) - ブロックエディタープロジェクトの開発は、このGitHubリポジトリで行われています。このリポジトリには [`block-library`](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-library/src) (コアブロック) や [`components`](https://github.com/WordPress/gutenberg/tree/trunk/packages/components) (共通 UI 要素) などの興味深いパッケージのコードが含まれています。_[gutenberg-examples](https://github.com/WordPress/gutenberg-examples) リポジトリも有用なリファレンスです。_
- [**エンドユーザードキュメント**](https://wordpress.org/documentation/) - エンドユーザー (開発者でなく) をターゲットとしたドキュメントサイト。ここには[ブロックエディター](https://wordpress.org/documentation/category/block-editor/)や[ブロックの操作](https://wordpress.org/documentation/article/work-with-blocks/)に関するドキュメントがあります。

<!-- 
## Are you in the right place?
 -->
## 正しいハンドブックを観ていますか ?

<!-- 
[This handbook](https://developer.wordpress.org/block-editor) is targeted at those seeking to develop for the block editor, but several other handbooks exist for WordPress developers under [developer.wordpress.org](http://developer.wordpress.org/):
 -->
[このハンドブック](https://ja.wordpress.org/team/handbook/block-editor/)はブロックエディター関連の開発を目指す方を対象としています。[developer.wordpress.org](http://developer.wordpress.org/) にはこの他にもいくつかの WordPress 開発者向けのハンドブックがあります。 

<!-- 
- [/themes](https://developer.wordpress.org/themes) - Theme Handbook
- [/plugins](https://developer.wordpress.org/plugins) - Plugin Handbook
- [/apis](https://developer.wordpress.org/apis) - Common APIs Handbook
- [/advanced-administration](https://developer.wordpress.org/advanced-administration) - WP Advanced Administration Handbook
- [/rest-api](https://developer.wordpress.org/rest-api/) - REST API Handbook
- [/coding-standards](https://developer.wordpress.org/coding-standards) - Best practices for WordPress developers
 -->
- [/themes](https://developer.wordpress.org/themes) - テーマハンドブック
- [/plugins](https://developer.wordpress.org/plugins) - プラグインハンドブック
- [/apis](https://developer.wordpress.org/apis) - 共通 API ハンドブック
- [/advanced-administration](https://developer.wordpress.org/advanced-administration) - 高度な管理ハンドブック
- [/rest-api](https://developer.wordpress.org/rest-api/) - REST API ハンドブック
- [/coding-standards](https://developer.wordpress.org/coding-standards) - WordPress 開発者向けのベストプラクティス

<!--
### Create a Block Tutorial
 -->
<!-- 
### ブロックの作成 チュートリアル
 -->
<!--
[Learn how to create your first block](/docs/getting-started/create-block/README.md) for the WordPress block editor. From setting up your development environment, tools, and getting comfortable with the new development model, this tutorial covers all you need to know to get started with creating blocks.
 -->
<!-- 
WordPress ブロックエディター用の[初めてのブロックの作成方法を学習します](https://ja.wordpress.org/team/handbook/block-editor/getting-started/create-block/)。開発環境の構築から、ツール、新しい開発モデルの説明まで、このチュートリアルはブロックの作成に必要なすべてをカバーします。
 -->
<!--
### Develop for the block editor
 -->
<!-- 
### ブロックエディターでの開発
 -->
<!--
Whether you want to extend the functionality of the block editor, or create a plugin based on it, [see our how-to guides](/docs/how-to-guides/README.md) to find all the information about the basic concepts you need to get started, the block editor APIs and its architecture.
 -->
<!-- 
ブロックエディターの機能の拡張やプラグインの開発で必要となる基本コンセプト、ブロック API、アーキテクチャに関するすべての情報については、[開発ガイド](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/)を参照してください。
 -->
<!--
-   [Gutenberg Architecture](/docs/explanations/architecture/README.md)
-   [Block Styles](/docs/reference-guides/block-api/block-styles.md)
-   [Creating Block Patterns](/docs/reference-guides/block-api/block-patterns.md)
-   [Theming for the Block Editor](/docs/how-to-guides/themes/README.md)
-   [Block API Reference](/docs/reference-guides/block-api/README.md)
-   [Block Editor Accessibility](/docs/how-to-guides/accessibility.md)
-   [Internationalization](/docs/how-to-guides/internationalization.md)
 -->
<!-- 
- [Gutenberg アーキテクチャ](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/)
- [ブロックスタイル](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-styles/)
- [ブロックパターンの作成](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-patterns/)
- [ブロックエディター対応のテーマ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/)
- [ブロック API リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/)
- [ブロックエディターのアクセシビリティ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/accessibility/)
- [国際化](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/internationalization/)
 -->
<!--
### Contribute to the block editor
 -->
<!-- 
### ブロックエディターへの貢献
 -->
<!--
Everything you need to know to [start contributing to the block editor](/docs/contributors/README.md) . Whether you are interested in the design, code, triage, documentation, support or internationalization of the block editor, you will find guides to help you here.
 -->
<!-- 
[ブロックエディターへの貢献を始める](https://ja.wordpress.org/team/handbook/block-editor/contributors/)場合に必要な情報です。ブロックエディターのデザイン、コード、トリアージュ、ドキュメント、サポート、国際化のどれに興味があっても必要なガイドを入手できます。
 -->



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

2023/12/16
- [ユーザーインターフェースの制限](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/) - 翻訳

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

2023/6/24
- [パターン](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-patterns/) - source 追加 [#51672](https://github.com/WordPress/gutenberg/pull/51672)
- [サポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) - anchor ダイナミックブロックでは未サポート [#51288](https://github.com/WordPress/gutenberg/pull/51288)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - 投稿の抜粋 -> 抜粋 [#50167](https://github.com/WordPress/gutenberg/pull/50167)、画像 lightbox [#51232](https://github.com/WordPress/gutenberg/pull/51232)、多数 anchor 削除 [#51288](https://github.com/WordPress/gutenberg/pull/51288)、多数 layout 追加 [#51434](https://github.com/WordPress/gutenberg/pull/51434)、再利用ブロック -> パターン、パターン -> パターンプレースホルダー [#51144](https://github.com/WordPress/gutenberg/pull/51144)、パターンプレースホルダー syncStatus 削除 [#51719](https://github.com/WordPress/gutenberg/pull/51719)、画像 aspectRatio、scale 追加 [#51545](https://github.com/WordPress/gutenberg/pull/51545)、脚注 追加 [#51201](https://github.com/WordPress/gutenberg/pull/51201)
- [Coding Guidelines](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/coding-guidelines/) - lock-unlock [#51322](https://github.com/WordPress/gutenberg/pull/51322)
- [React Native Integration Test Guide](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/react-native/integration-test-guide/) - waitfor -> findxxx [#46735](https://github.com/WordPress/gutenberg/pull/46735)

2023/6/4
- 多数 - apiVersion: 3 [#48286](https://github.com/WordPress/gutenberg/pull/48286)
- Block Grammer - 削除
- Upcoming Projects & Roadmap - 削除
- [Entities and Undo/Redo.](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/entities/) - 新規
- [スタイルとスタイルシートの利用](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/applying-styles-with-stylesheets/) - iframe の注意 [#50091](https://github.com/WordPress/gutenberg/pull/50091)、iframe [#48286](https://github.com/WordPress/gutenberg/pull/48286)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - カラム design に [#46048](https://github.com/WordPress/gutenberg/pull/46048)、parent、experimental 追加 [#48269](https://github.com/WordPress/gutenberg/pull/48269)、画像 behaviors [#49972](https://github.com/WordPress/gutenberg/pull/49972)、詳細 experimental 削除 [#50997](https://github.com/WordPress/gutenberg/pull/50997)、ページネーション showLabel [#50779](https://github.com/WordPress/gutenberg/pull/50779)、タイトル [#50147](https://github.com/WordPress/gutenberg/pull/50147)、投稿テンプレート blockGap、クエリーループ displayLayout 削除 [#49050](https://github.com/WordPress/gutenberg/pull/49050)、検索 buttonBehavior、isSearchFieldHidden [#50487](https://github.com/WordPress/gutenberg/pull/50487)
- [@wordpress/env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) - ライフサイクルスクリプト [#50570](https://github.com/WordPress/gutenberg/pull/50570)、run の整理 [#50559](https://github.com/WordPress/gutenberg/pull/50559)、ローカルパッケージの使用 [#50980](https://github.com/WordPress/gutenberg/pull/50980)


2023/05/23
- [変換](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-transforms/) - ungroup 追加 [#50385](https://github.com/WordPress/gutenberg/pull/50385)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - ログイン / ログアウト typography [#49160](https://github.com/WordPress/gutenberg/pull/49160)、パターン syncStatus [#50533](https://github.com/WordPress/gutenberg/pull/50533)、コード align (wide) [#50710](https://github.com/WordPress/gutenberg/pull/50710)
- [@wordpress/env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) - composer、phpunit、wp-cli、.htaccess [#50490](https://github.com/WordPress/gutenberg/pull/50490)

2023/05/03
- [トップ](https://ja.wordpress.org/team/handbook/block-editor/) - 全面改訂
- [キーコンセプト](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/key-concepts/) - 全面改訂 [#49184](https://github.com/WordPress/gutenberg/pull/49184)
- [プラグイン用サイドバー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/plugin-sidebar-0/) - カスタムフィールド表示時の注意 [#49622](https://github.com/WordPress/gutenberg/pull/49622)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - variations 追加 [#49826](https://github.com/WordPress/gutenberg/pull/49826)
- [block.json のメタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) - editorStyle 削除 [#49393](https://github.com/WordPress/gutenberg/pull/49393)
- [サポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) - color.__experimentalDuotone -> filter.duotone [#49423](https://github.com/WordPress/gutenberg/pull/49423)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - 所要時間 multiple: false の削除 [#49253](https://github.com/WordPress/gutenberg/pull/49253)、spacing 追加 [#49392](https://github.com/WordPress/gutenberg/pull/49392)、color 追加 [#49496](https://github.com/WordPress/gutenberg/pull/49496)、引用 html 削除 [#49426](https://github.com/WordPress/gutenberg/pull/49426)、投稿テンプレート full、wide 追加 [#49411](https://github.com/WordPress/gutenberg/pull/49411)、画像 duotone [#49423](https://github.com/WordPress/gutenberg/pull/49423)、詳細、詳細コンテンツ、詳細要約追加 [#45055](https://github.com/WordPress/gutenberg/pull/45055)、埋め込み spacing 追加 [#39384](https://github.com/WordPress/gutenberg/pull/39384)、グループ allowedBlocks 追加 [#49128](https://github.com/WordPress/gutenberg/pull/49128)、メディアとテキスト allowedBlocks 追加 [#49981](https://github.com/WordPress/gutenberg/pull/49981)
 - [バージョン 2 (現在のリファレンス)](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-living/) - customTemplates、templateParts、Pattern 追加 [#48250](https://github.com/WordPress/gutenberg/pull/48250)
- [@wordpress/env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) -  --env-cwd 追加 [#49908](https://github.com/WordPress/gutenberg/pull/49908)、afterSetup 追加 [#50196](https://github.com/WordPress/gutenberg/pull/50196)、パーマリンクの変更 [#50251](https://github.com/WordPress/gutenberg/pull/50251)

2023/03/25
- [Gutenberg Release Process](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/release/) - NPMへの発行 [#46555](https://github.com/WordPress/gutenberg/pull/46555)、RCパッチ作成 [#47372](https://github.com/WordPress/gutenberg/pull/47372)
- [End-to-End Testing](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/testing-overview/e2e/) - 新規
- [Migration guide](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/testing-overview/e2e/migration/) - 新規
- [Overusing snapshots](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/testing-overview/e2e/overusing-snapshots/) - 新規
- [よくある質問](https://ja.wordpress.org/team/handbook/block-editor/explanations/faq/) - IE削除 [#46296](https://github.com/WordPress/gutenberg/pull/46296)、複数選択削除のショートカット追加 [#44968](https://github.com/WordPress/gutenberg/pull/44968)
- [スタイルとスタイルシートの利用](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/applying-styles-with-stylesheets/) - 依存関係を追加 [#45604](https://github.com/WordPress/gutenberg/pull/45604)
- [ネストしたブロック: InnerBlocks の使用](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/) - react フックの使用 [#46407](https://github.com/WordPress/gutenberg/pull/46407)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - typography に fluid 追加 [#45705](https://github.com/WordPress/gutenberg/pull/45705)、dimensions.minHeight 追加 [#47475](https://github.com/WordPress/gutenberg/pull/47475)、typography に textColumns 追加 [#33587](https://github.com/WordPress/gutenberg/pull/33587)、appearanceTools に position 追加 [#48763](https://github.com/WordPress/gutenberg/pull/48763)、pseudo-selectors に :active、:link、:any-link 追加 [#49202](https://github.com/WordPress/gutenberg/pull/49202)
- [非推奨プロセス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-deprecation/) - omit 削除 [#46674](https://github.com/WordPress/gutenberg/pull/46674)、isEligible に追加 [#48815](https://github.com/WordPress/gutenberg/pull/48815)
- [block.json のメタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) - Selectors、Editor Selectors 追加 [#46496](https://github.com/WordPress/gutenberg/pull/46496)
- [登録](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/) - ancestor 追加 [#45832](https://github.com/WordPress/gutenberg/pull/45832)
- [サポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) - リンクの色の修正 [#46405](https://github.com/WordPress/gutenberg/pull/46405)、dimensions、position [#48057](https://github.com/WordPress/gutenberg/pull/48057)
- [パターン](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-patterns/) - templateType 追加 [#45814](https://github.com/WordPress/gutenberg/pull/45814)
- [Selectors](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-selectors/) - 新規
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - 複数ブロック anchor 追加 [#44771](https://github.com/WordPress/gutenberg/pull/44771)、ボタン align 削除 [#45663](https://github.com/WordPress/gutenberg/pull/45663)、shadow 追加 [#46502]、html 削除 [#49097](https://github.com/WordPress/gutenberg/pull/49097)、(https://github.com/WordPress/gutenberg/pull/46502)、最近の投稿 color 追加 [#41874](https://github.com/WordPress/gutenberg/pull/41874)、固定ページリスト parentPageID 追加 [#45967](https://github.com/WordPress/gutenberg/pull/45967)、typography 追加 [#43316](https://github.com/WordPress/gutenberg/pull/43316)、isNested 追加 [#46414](https://github.com/WordPress/gutenberg/pull/46414)、ページリスト項目 追加 [#45776](https://github.com/WordPress/gutenberg/pull/45776)、投稿テンプレート color 追加 [#46147](https://github.com/WordPress/gutenberg/pull/46147)、クエリーループ color 削除 [#46147](https://github.com/WordPress/gutenberg/pull/46147)、グループ position 追加 [#46142](https://github.com/WordPress/gutenberg/pull/46142)、カバー tagName 追加 [#46969]、blockGap 追加 [#47952](https://github.com/WordPress/gutenberg/pull/47952)、text color 追加 [#41572](https://github.com/WordPress/gutenberg/pull/41572)、(https://github.com/WordPress/gutenberg/pull/46969)、ファイル color 追加 [#41870](https://github.com/WordPress/gutenberg/pull/41870)、投稿の抜粋 excerptLength 追加 [#44964](https://github.com/WordPress/gutenberg/pull/44964)、投稿のアイキャッチ画像 aspectRatio 追加 [#47854](https://github.com/WordPress/gutenberg/pull/47854)、最新のコメント typography 追加 [#43310](https://github.com/WordPress/gutenberg/pull/43310)、所要時間 追加 [#43403](https://github.com/WordPress/gutenberg/pull/43403)、typography 追加 [#49257](https://github.com/WordPress/gutenberg/pull/49257)、カラム templateLock 追加 [#49132](https://github.com/WordPress/gutenberg/pull/49132)、
- [Available Styles Options](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/styles-versions/) - 新規
- [バージョン 2 (現在のリファレンス)](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-living/) - CSS 追加 [#46255](https://github.com/WordPress/gutenberg/pull/46255)、fluid undefined/false [#42489](https://github.com/WordPress/gutenberg/pull/42489)、border radius [#46375](https://github.com/WordPress/gutenberg/pull/46375)、Object タイプ [#45897](https://github.com/WordPress/gutenberg/pull/45897)、shadow 追加 [#46813](https://github.com/WordPress/gutenberg/pull/46813)、[#47272](https://github.com/WordPress/gutenberg/pull/47272)、[#49204](https://github.com/WordPress/gutenberg/pull/49204)、dimensions 追加 [#47475](https://github.com/WordPress/gutenberg/pull/47475)、position 追加 [#48057](https://github.com/WordPress/gutenberg/pull/48057)、textColumns 追加 [#33587](https://github.com/WordPress/gutenberg/pull/33587)、position と dimensions 追加 [#48948]
- [@wordpress/create-block](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/) - 使用可能なコマンドの整理 [#45636](https://github.com/WordPress/gutenberg/pull/45636)、全体的な更新 [#45676](https://github.com/WordPress/gutenberg/pull/45676)
- [@wordpress/env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) - データベース認証情報 [#47940](https://github.com/WordPress/gutenberg/pull/47940)

2022/11/4
- [ページリストの構築](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/2-building-a-list-of-pages/) - サンプルの修正 [#43633](https://github.com/WordPress/gutenberg/pull/43633)
- [書式ツールバー API](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/format-api/) - ステップ5 ドロップダウン外へのボタンの追加 [#43581](https://github.com/WordPress/gutenberg/pull/43581)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - spacing プリセット [#43349](https://github.com/WordPress/gutenberg/pull/43349)、appearance-tools [#43337](https://github.com/WordPress/gutenberg/pull/43337)
- [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/) - 外観ツール [#43337](https://github.com/WordPress/gutenberg/pull/43337)、ブロックテンプレートパーツ [#44009](https://github.com/WordPress/gutenberg/pull/44009)
- [block.json のメタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) - render の追加 [#42430](https://github.com/WordPress/gutenberg/pull/42430)、複数スクリプトのサポート [#44155](https://github.com/WordPress/gutenberg/pull/44155)、アセットに渡せるものの説明の追加 [#44199](https://github.com/WordPress/gutenberg/pull/44199)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - カラム typography 追加 [#43253](https://github.com/WordPress/gutenberg/pull/43253)、[#43252](https://github.com/WordPress/gutenberg/pull/43252)、カテゴリー一覧 typography 追加 [#43254](https://github.com/WordPress/gutenberg/pull/43254)、アーカイブ spacing、typography 追加 [#43350](https://github.com/WordPress/gutenberg/pull/43350)、[#43935](https://github.com/WordPress/gutenberg/pull/43935)、音声 spacing 追加 [#43351](https://github.com/WordPress/gutenberg/pull/43351)、ページ番号 typography 追加 [#43289](https://github.com/WordPress/gutenberg/pull/43289)、ページネーション typography 追加 [#43287](https://github.com/WordPress/gutenberg/pull/43287)、[#43552](https://github.com/WordPress/gutenberg/pull/43552)、カバー typography 追加 [#43298](https://github.com/WordPress/gutenberg/pull/43298)、コメントテンプレート typography、spacing 追加 [#43266](https://github.com/WordPress/gutenberg/pull/43266)、[#45101](https://github.com/WordPress/gutenberg/pull/45101)、ギャラリー color、margin、padding 追加 [#43294](https://github.com/WordPress/gutenberg/pull/43294)、[#43965](https://github.com/WordPress/gutenberg/pull/43965)、目次 color、spacing、typography 追加 [#43363](https://github.com/WordPress/gutenberg/pull/43363)、[#43368](https://github.com/WordPress/gutenberg/pull/43368)、[#43509](https://github.com/WordPress/gutenberg/pull/43509)、スペーサー spacing 追加 [#43366](https://github.com/WordPress/gutenberg/pull/43366)、クエリータイトル showPrefix、padding 追加 [#42594](https://github.com/WordPress/gutenberg/pull/42594)、[#43458](https://github.com/WordPress/gutenberg/pull/43458)、コメント typography、spacing 追加 [#43286](https://github.com/WordPress/gutenberg/pull/43286)、[#45102](https://github.com/WordPress/gutenberg/pull/45102)、投稿テンプレート typography 追加 [#43342](https://github.com/WordPress/gutenberg/pull/43342)、テーブル spacing 追加 [#43370](https://github.com/WordPress/gutenberg/pull/43370)、タームの説明 spacing 追加 [#43372](https://github.com/WordPress/gutenberg/pull/43372)、タグクラウド spacing、typography 追加 [#43367](https://github.com/WordPress/gutenberg/pull/43367)、[#43452](https://github.com/WordPress/gutenberg/pull/43452)、メディアとテキスト typography、spacing 追加 [#43314](https://github.com/WordPress/gutenberg/pull/43314)、 [#43456](https://github.com/WordPress/gutenberg/pull/43456)、段落 spacing 追加 [#43455](https://github.com/WordPress/gutenberg/pull/43455)、見出し padding 追加 [#43454]、(https://github.com/WordPress/gutenberg/pull/43454)、 投稿日 spacing 追加 [#43406](https://github.com/WordPress/gutenberg/pull/43406)、動画 spacing 追加 [#43365](https://github.com/WordPress/gutenberg/pull/43365)、詩 margin 追加 [#43461](https://github.com/WordPress/gutenberg/pull/43461)、区切り enableContrastChecker 無効 [#43357](https://github.com/WordPress/gutenberg/pull/43357)、投稿タイトル padding 追加 [#43457](https://github.com/WordPress/gutenberg/pull/43457)、ソーシャルアイコン color、padding、rel 追加 [#43293](https://github.com/WordPress/gutenberg/pull/43293)、[#43885](https://github.com/WordPress/gutenberg/pull/43885)、[#45469](https://github.com/WordPress/gutenberg/pull/45469)、リスト spacing 追加 [#43402](https://github.com/WordPress/gutenberg/pull/43402)、結果なし typography 追加 [#43551](https://github.com/WordPress/gutenberg/pull/43551)、ホームへのリンク typography 追加 [#43307](https://github.com/WordPress/gutenberg/pull/43307)、最新の投稿 typography、spacing 追加 [#43540](https://github.com/WordPress/gutenberg/pull/43540)、[#45110](https://github.com/WordPress/gutenberg/pull/45110)、ペジネーション typography 追加 [#43552](https://github.com/WordPress/gutenberg/pull/43552)、コメント返信リンク spacing 追加 [#43658](https://github.com/WordPress/gutenberg/pull/43658)、コメント日付 spacing 追加 [#43656](https://github.com/WordPress/gutenberg/pull/43656)、コメント編集リンク spacing 追加 [#43657](https://github.com/WordPress/gutenberg/pull/43657)、ナビゲーション icon、templateLock 追加、anchor 削除 [#43654](https://github.com/WordPress/gutenberg/pull/43654)、 [#44739](https://github.com/WordPress/gutenberg/pull/44739)、[#44721](https://github.com/WordPress/gutenberg/pull/44721)、投稿コンテンツ typography、dimensions 追加 [#43339](https://github.com/WordPress/gutenberg/pull/43339)、[#45300](https://github.com/WordPress/gutenberg/pull/45300)、アバター padding 追加 [#43519](https://github.com/WordPress/gutenberg/pull/43519)、カテゴリー spacing 追加 [#43647](https://github.com/WordPress/gutenberg/pull/43647)、サイトロゴ spacing 追加 [#43520](https://github.com/WordPress/gutenberg/pull/43520)、ボタン typography 追加 [#43934](https://github.com/WordPress/gutenberg/pull/43934)、カレンダー typography、color 追加 [#43969](https://github.com/WordPress/gutenberg/pull/43969)、[#42029](https://github.com/WordPress/gutenberg/pull/42029)、検索 typography 追加 [#43499](https://github.com/WordPress/gutenberg/pull/43499)、カスタムリンク typography 追加 [#44005](https://github.com/WordPress/gutenberg/pull/44005)、投稿のアイキャッチ画像 gradient overlay 等追加 [#43838](https://github.com/WordPress/gutenberg/pull/43838)、クエリーループ namespace 追加 [#43632](https://github.com/WordPress/gutenberg/pull/43632)、投稿ナビゲーションリンク arrow 追加 [#40684](https://github.com/WordPress/gutenberg/pull/40684)、コメントの前ページ、ページ番号、次ページの名前変更 [#44287](https://github.com/WordPress/gutenberg/pull/44287)、コメントのページ番号 color、spacing 追加 [#43902](https://github.com/WordPress/gutenberg/pull/43902)、[#45150](https://github.com/WordPress/gutenberg/pull/45150)、投稿タグ spacing 追加 [#43646](https://github.com/WordPress/gutenberg/pull/43646)、投稿者 isLink, linkTarget 追加 [#42670](https://github.com/WordPress/gutenberg/pull/42670)、固定ページリスト  __unstableMaxPages 削除 [#44415](https://github.com/WordPress/gutenberg/pull/44415)、リスト項目 typography 追加 [#43312](https://github.com/WordPress/gutenberg/pull/43312)、投稿コメントリンク spacing 追加 [#45184](https://github.com/WordPress/gutenberg/pull/45184)、投稿コメントフォーム spacing 追加 [#45091](https://github.com/WordPress/gutenberg/pull/45091)、最新のコメント spacing 追加 [#45110](https://github.com/WordPress/gutenberg/pull/45110)、グループ dimensions 追加 [#45300](https://github.com/WordPress/gutenberg/pull/45300)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - fluid 追加 [#39529](https://github.com/WordPress/gutenberg/pull/39529)、useRootPaddingAwareAlignments 追加 [#43463](https://github.com/WordPress/gutenberg/pull/43463)、shadow 追加 [#41972](https://github.com/WordPress/gutenberg/pull/41972)、outline 追加 [#43526](https://github.com/WordPress/gutenberg/pull/43526)、border 変更 [#44252](https://github.com/WordPress/gutenberg/pull/44252)
- [@wordpress/create-block](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/) - --no-plugin 追加 [#41642](https://github.com/WordPress/gutenberg/pull/41642)、--variant 追加 [#41289](https://github.com/WordPress/gutenberg/pull/41289)
- [外部プロジェクトテンプレート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/packages-create-block-external-template/) - 新規作成
[React Native Integration Test Guide](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/react-native/integration-test-guide/) - getByA11yLabel -> getByA11yText [#45454](https://github.com/WordPress/gutenberg/pull/45454)
- [Testing Overview](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/testing-overview/) - .firstChild 削除 [#45419](https://github.com/WordPress/gutenberg/pull/45419)
[Documentation Contributions](https://ja.wordpress.org/team/handbook/block-editor/contributors/document/) - Documenting Packages 追加 [#43750](https://github.com/WordPress/gutenberg/pull/43750)
[Styles](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/styles/) - Layout 追加 [#42619](https://github.com/WordPress/gutenberg/pull/42619)
- [執筆エクスペリエンス](https://ja.wordpress.org/team/handbook/block-editor/getting-started/create-block/author-experience/) - useBlockProps 追加 [#44607](https://github.com/WordPress/gutenberg/pull/44607)
- [ブロックコントロール: ブロックツールバーと設定サイドバー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/block-controls-toolbar-and-sidebar/) - source: 'children' -> 'html' [#44265](https://github.com/WordPress/gutenberg/pull/44265)
- [ブロックサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/block-supports-in-static-blocks/) - source: 'children' -> 'html' [#44265](https://github.com/WordPress/gutenberg/pull/44265)
- [Extending the Query Loop Block](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/extending-the-query-loop-block/) - 新規
- [属性と編集可能フィールド](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields/) - source: 'children' -> 'html' [#44265](https://github.com/WordPress/gutenberg/pull/44265)
- [Curating the Editor Experience](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/) - コンテンツのみ編集 [#44908](https://github.com/WordPress/gutenberg/pull/44908)
- [Propagating updates for block types](https://developer.wordpress.org/block-editor/how-to-guides/propagating-updates/) - 新規
- [サポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) - ariaLabel 追加 [#45006](https://github.com/WordPress/gutenberg/pull/45006)
- [ブロックテンプレート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-templates/) - template_lock=contentOnly 追加 [#43977](https://github.com/WordPress/gutenberg/pull/43977)、[#44131](https://github.com/WordPress/gutenberg/pull/44131)

[以前の変更履歴](https://ja.wordpress.org/team/handbook/block-editor/handbook/block-editor-changelog/)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/README.md)
