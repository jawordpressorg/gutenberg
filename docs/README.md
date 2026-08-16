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
3. **Settings Panel:** A panel for configuring a block’s settings when selected or the settings of the post
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
The Block Editor Handbook is designed for those looking to create and develop for the Block Editor. However, it's important to note that there are multiple other handbooks available within the [Developer Resources](https://developer.wordpress.org/) that you may find beneficial:
 -->
ブロックエディターハンドブックは、ブロックエディター用の作成、開発をしている方向けにデザインされています。しかし、[Developer Resources](https://developer.wordpress.org/)には、他にも複数の有益なハンドブックが用意されていることに留意してください：

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
| @fumikito | @takahashi_fumiki |

### 日本語版変更履歴

[日本語版変更履歴](https://ja.wordpress.org/team/handbook/block-editor/handbook/block-editor-changelog/)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/README.md)
