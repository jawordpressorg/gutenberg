<!-- 
# Project Overview
 -->
# プロジェクト概要

<!-- 
The Gutenberg project is transforming the way content is created on WordPress. A block editor was the first product launched creating a new methodology for working with content.
-->
Gutenberg プロジェクトは WordPress 上でのコンテンツの作り方を大きく変革します。その最初のリリース製品「ブロックエディター」では、コンテンツの操作に新しい方法論を展開します。 

<!--
The Block Editor handbook provides documentation for designers and developers on how to extend the editor, and also how you can start contributing to the project. For authors, writers, and users of the block editor see the [block editor support documentation](https://wordpress.org/support/article/wordpress-editor/).
-->
「ブロックエディターハンドブック」はデザイナーや開発者向けのドキュメントです。エディターの拡張方法やプロジェクトへの貢献方法を解説します。ブロックエディターの使い方については [サポート内のブロックエディターに関する文書](https://ja.wordpress.org/support/article/wordpress-editor/) を参照してください。

<!--
![Screenshot of the Gutenberg Editor, editing a post in WordPress](https://user-images.githubusercontent.com/1204802/100067796-fc3e8700-2e36-11eb-993b-6b80b4310b87.png)
-->
![Gutenberg エディターのスクリーンショット。WordPress で投稿を編集している](https://user-images.githubusercontent.com/1204802/100067796-fc3e8700-2e36-11eb-993b-6b80b4310b87.png)

<!--
Using a system of Blocks to compose and format content, the new block-based editor is designed to create rich, flexible layouts for websites and digital products. Content is created in the unit of blocks instead of freeform text with inserted media, embeds and Shortcodes (there's a Shortcode block though).
-->
新しいブロックエディターは「ブロック」システムを採用し、コンテンツを組み合わせて整形していきます。ブロックエディターは、Web サイトやデジタル製品用にリッチでフレキシブルなレイアウトを作成できるようデザインされています。コンテンツはブロックのユニットとして作成し、これまでのフリーフォームテキストにメディアやオブジェクトやショートコードを埋め込む方法とは異なります(念のため伝えておくと「ショートコード」ブロックがあります)。

<!--
Blocks treat Paragraphs, Headings, Media, and Embeds all as components that, when strung together, make up the content stored in the WordPress database, replacing the traditional concept of freeform text with embedded media and shortcodes. The new editor is designed with progressive enhancement, meaning that it is back-compatible with all legacy content, and it also offers a process to try to convert and split a Classic block into equivalent blocks using client-side parsing. Finally, the blocks offer enhanced editing and format controls.
-->
ブロックは、段落、見出し、メディア、埋め込みオブジェクトなどすべてをコンポーネントとして扱い、互いを接続してコンテンツを作成し、WordPress データベース内に保存します。従来のフリーテキストにメディアやショートコードを埋め込むコンセプトは置き換えられした。新しいエディターは漸進的な拡張で設計されていて、すべてのレガシーなコンテンツに対して後方互換性があり、さらにクライアントサイドのパーシングを使用して単純に移行し Classic ブロックに対して、同等のブロックに変換、分割するプロセスを提供します。

<!--
The Editor offers rich new value to users with visual, drag-and-drop creation tools and powerful developer enhancements with modern vendor packages, reusable components, rich APIs and hooks to modify and extend the editor through Custom Blocks, Custom Block Styles and Plugins.
-->
ブロックエディターはユーザーにリッチで新しい価値を届けます。ブロックエディターの機能としては、ビジュアルでドラッグアンドドロップ対応の作成ツール、最新のベンダーパッケージを使用したパワフルな開発拡張、再利用可能コンポーネント、カスタムブロックやカスタムブロックスタイル、プラグインを通じたエディターの変更、拡張が可能なリッチな API とフックがあります。

<!-- 
## Quick Links
 -->
## リンク

<!-- 
-   Beginners: The [Create a Block Tutorial](/docs/designers-developers/developers/tutorials/create-block/readme.md) walks through creating a block plugin using the `@wordpress/create-block` package; a quick and easy way to start creating your own block.

-   [Gutenberg Architecture](/docs/architecture/readme.md) covers the conceptual and tool choices going into the Gutenberg project, from repository structure to packages and tools.

-   [Block API Reference](/docs/designers-developers/developers/block-api/README.md)

-   [Contributors Guide](/docs/contributors/readme.md) covers how **you** can help; be it code, design, documentation, language, or triage, we need you to help make Gutenberg.
 -->
-   初心者向け: [ブロックの作成 チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/tutorials/create-block/) では `@wordpress/create-block` パッケージを使用してブロックプラグインを作成します。ブロックを素早く簡単に作成できます。

-   [Gutenberg アーキテクチャー](https://developer.wordpress.org/block-editor/principles/architecture/) では Gutenberg プロジェクトのコンセプトとツールの選択について、リポジトリー構造からパッケージやツールまで説明します。

-   [ブロック API リファレンス](https://ja.wordpress.org/team/handbook/block-editor/developers/block-api/)

-   [コントリビューションガイド](https://ja.wordpress.org/team/handbook/block-editor/contributors/) では **あなた** がどのような方法で Gutenberg プロジェクトを支援できるかを説明します。コード、デザイン、ドキュメント、翻訳、問題管理等々、さまざまな支援が可能です。

## 問い合わせ先
ブロックエディターハンドブックへのコメントは [Gutenberg GitHub リポジトリ](https://github.com/WordPress/gutenberg) へお願いします。

日本語訳については [日本語版リポジトリ](https://github.com/jawordpressorg/gutenberg)、または [WordPress の 日本語 Slack](https://ja.wordpress.org/support/article/slack/) 内の #docs チャンネルへお願いします。

## 参照
- [英語版ブロックエディターハンドブック](https://developer.wordpress.org/block-editor/)
- [英語版リポジトリ](https://github.com/WordPress/gutenberg)
- [日本語版リポジトリ](https://github.com/jawordpressorg/gutenberg)

## ブロックエディターハンドブック日本語版翻訳者

| GitHub Username | WordPress.org Username|
| --------------- | --------------------- |
| @naokomc | @nao |
| @ryo-utsunomiya | |
| @mypacecreator | @mypacecreator |
| @atachibana | @atachibana |
| @miminari | @mimitips |
| @shizumi | @Shizumi |
| @arm-band | @armband |

[原文](https://github.com/WordPress/gutenberg/tree/master/docs)