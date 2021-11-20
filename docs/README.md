<!-- 
# Block Editor Handbook
 -->
# ブロックエディターハンドブック

_日本語版の情報については末尾を参照してください。_

<!--
**Gutenberg** is a codename for a whole new paradigm in WordPress site building and publishing, that aims to revolutionize the entire publishing experience as much as Gutenberg did the printed word. The project is right now in the second phase of a four-phase process that will touch every piece of WordPress -- Editing, **Customization** (which includes Full Site Editing, Block Patterns, Block Directory and Block based themes), Collaboration, and Multilingual -- and is focused on a new editing experience, the block editor (which is the topic of the current documentation).
 -->
**Gutenberg** は WordPress サイト構築およびパブリッシングにおけるまったく新しいパラダイムのコードネームです。Gutenberg プロジェクトは、[グーテンベルク](https://ja.wikipedia.org/wiki/%E3%83%A8%E3%83%8F%E3%83%8D%E3%82%B9%E3%83%BB%E3%82%B0%E3%83%BC%E3%83%86%E3%83%B3%E3%83%99%E3%83%AB%E3%82%AF)が印刷業界に果たした影響と同じように、パブリッシング体験全体の革新を目的とします。プロジェクトは現在、WordPress のあらゆる部分を対象とする4つのフェーズ、「編集」「**カスタマイゼーション**」(これにはフルサイト編集、ブロックパターン、ブロックディレクトリ、ブロックベーステーマが含まれます)「コラボレーション」「マルチリンガル」のうち2番めのフェーズにあり、新しい編集体験、「ブロックエディター」にフォーカスしています。

<!--
![Quick view of the block editor](https://raw.githubusercontent.com/WordPress/gutenberg/trunk/docs/assets/quick-view-of-the-block-editor.png)

**Legend :**

1. Block Inserter
2. Block editor content area
3. Settings Sidebar
 -->
![ブロックエディターのクイックビュー](https://raw.githubusercontent.com/WordPress/gutenberg/trunk/docs/assets/quick-view-of-the-block-editor.png)

**凡例 :**
1. ブロックインスペクター
2. ブロックエディターコンテンツ領域
3. 設定サイドバー

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
[Learn to use the block editor](https://wordpress.org/support/article/wordpress-editor/) to create media-rich posts and pages.
 -->
[ブロックエディターの使い方を学ぶ](https://ja.wordpress.org/support/article/wordpress-editor/) では、メディアリッチな投稿やページを作成できます。

<!--
## Quick links
 -->
## クイックリンク

<!--
### Create a Block Tutorial
 -->
### ブロックの作成 チュートリアル

<!--
[Learn how to create your first block](/docs/getting-started/create-block/README.md) for the WordPress block editor. From setting up your development environment, tools, and getting comfortable with the new development model, this tutorial covers all what you need to know to get started with the block editor.
 -->
WordPress ブロックエディター用の[初めてのブロックの作成方法を学習します](https://ja.wordpress.org/team/handbook/block-editor/getting-started/create-block/)。開発環境の構築から、ツール、新しい開発モデルの説明まで、このチュートリアルはブロックエディターでの開発に必要なすべてをカバーします。

<!--
### Develop for the block editor
 -->
### ブロックエディターでの開発

<!--
Whether you want to extend the functionality of the block editor, or create a plugin based on it, [see the developer documentation](/docs/how-to-guides/README.md) to find all the information about the basic concepts you need to get started, the block editor APIs and its architecture.
 -->
ブロックエディターの機能の拡張やプラグインの開発で必要となる基本コンセプト、ブロック API、アーキテクチャに関するすべての情報については、[開発者ドキュメント](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/)を参照してください。

<!--
-   [Gutenberg Architecture](/docs/explanations/architecture/README.md)
-   [Block Styles](/docs/reference-guides/filters/block-filters.md#block-styles)
-   [Creating Block Patterns](/docs/reference-guides/block-api/block-patterns.md)
-   [Theming for the Block Editor](/docs/how-to-guides/themes/README.md)
-   [Block API Reference](/docs/reference-guides/block-api/README.md)
-   [Block Editor Accessibility](/docs/how-to-guides/accessibility.md)
-   [Internationalization](/docs/how-to-guides/internationalization.md)
 -->
- [Gutenberg アーキテクチャ](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/)
- [ブロックスタイル](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/filters/block-filters/#block-styles)
- [ブロックパターンの作成](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-patterns/)
- [ブロックエディター対応のテーマ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/)
- [ブロック API リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/)
- [ブロックエディターのアクセシビリティ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/accessibility/)
- [国際化](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/internationalization/)

<!--
### Contribute to the block editor
 -->
### ブロックエディターへの貢献

<!--
Everything you need to know to [start contributing to the block editor](/docs/contributors/README.md) . Whether you are interested in the design, code, triage, documentation, support or internationalization of the block editor, you will find here guides to help you.
 -->
[ブロックエディターへの貢献を始める](https://ja.wordpress.org/team/handbook/block-editor/contributors/)場合に必要な情報です。ブロックエディターのデザイン、コード、トリアージュ、ドキュメント、サポート、国際化のどれに興味があっても必要なガイドを入手できます。

<br />
<hr />
<br />

## ブロックエディターハンドブック日本語版

### 更新履歴

翻訳の進捗や、最新の英語版で同期した際に気づいたことをメモします。

2021/11/21
- タイトルの変更 [#35904](https://github.com/WordPress/gutenberg/pull/35904)
  - [フォーマットツールバー API](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/format-api/)
  - [通知](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/notices/)
  - [開発プラットフォーム](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/platform/)
  - [プラグイン用サイドバー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/plugin-sidebar-0/)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - defaultPalette と defaultGradients [#36622](https://github.com/WordPress/gutenberg/pull/36622)
- 以下、未訳分で変更に気がついたもの
- [Dependency Extraction Webpack Plugin](https://github.com/WordPress/gutenberg/blob/trunk/packages/dependency-extraction-webpack-plugin/README.md) - externalizedReport 追加 [#35106](https://github.com/WordPress/gutenberg/pull/35106)

2021/11/19
- ページの移動 [#34091](https://github.com/WordPress/gutenberg/pull/34091)
  - [開発環境](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/) と [ブロックの作成 チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/getting-started/create-block/) を [はじめに](https://ja.wordpress.org/team/handbook/block-editor/getting-started/) 直下に。
  - [よくある質問](https://ja.wordpress.org/team/handbook/block-editor/explanations/faq/)、「Glossary](https://ja.wordpress.org/team/handbook/block-editor/explanations/glossary/)、[History](https://ja.wordpress.org/team/handbook/block-editor/explanations/history/) を [概説](https://ja.wordpress.org/team/handbook/block-editor/explanations/) に移動
- [ネストしたブロック](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/) - orientation の説明を修正 [#35712](https://github.com/WordPress/gutenberg/pull/35712)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - スキーマの追加[#35739](https://github.com/WordPress/gutenberg/pull/35739)、custom プレフィックスの削除 [#34485](https://github.com/WordPress/gutenberg/pull/34485)、設定とスタイルの追加 [#36137](https://github.com/WordPress/gutenberg/pull/36137)、v1 から v2 に [#36155](https://github.com/WordPress/gutenberg/pull/36155)、コアのカラーパレットのオプトアウト [#36492](https://github.com/WordPress/gutenberg/pull/36492)
- [メタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) - スキーマの追加[#35835](https://github.com/WordPress/gutenberg/pull/35835)、category はオプションに [#35998](https://github.com/WordPress/gutenberg/pull/35998)、view script とフロンエンドでのエンキュー [#36175](https://github.com/WordPress/gutenberg/pull/36175)、複数スタイルを渡せる [#36218](https://github.com/WordPress/gutenberg/pull/36218)
- [@wordpress/create-block](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/) - 生成ファイルに $scheme 追加 [#35843](https://github.com/WordPress/gutenberg/pull/35843)
- [@wordpress/env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) - core で wordpress-develop を指定する例 [#35978](https://github.com/WordPress/gutenberg/pull/35978)
- 以下、未訳分で変更に気がついたもの
- [WordPress Core Data](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/data/data-core.md) - receiveThemeSupports 非推奨 [#36044](https://github.com/WordPress/gutenberg/pull/36044)
- [Block filters](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/filters/block-filters.md) - wrapperProps 使い方 [#26961](https://github.com/WordPress/gutenberg/pull/26961)
- [Block Editor](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/README.md) - useInnerBlocksProps 追加 [#26031](https://github.com/WordPress/gutenberg/pull/26031)、useCachedTruthy 追加 [#36263](https://github.com/WordPress/gutenberg/pull/36263)、BlockStyles [#34522](https://github.com/WordPress/gutenberg/pull/34522)
- [Link Control](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/link-control/README.md) - renderControlBottom 追加 [#35857](https://github.com/WordPress/gutenberg/pull/35857)
- [SkipToSelectedBlock](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/skip-to-selected-block/README.md) - 新規
- [ComboboxControl](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/combobox-control) - 例の修正 [#36413](https://github.com/WordPress/gutenberg/pull/36413)
- [Modal](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/modal/README.md) - isFullScreen 追加 [#35773](https://github.com/WordPress/gutenberg/pull/35773)
- [SelectControl](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/select-control/README.md) - optgroup の追加 [#29540](https://github.com/WordPress/gutenberg/pull/29540)
- [ToolsPanel](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/tools-panel/tools-panel/README.md) - パネルへの項目の追加 [#36557](https://github.com/WordPress/gutenberg/pull/36557)
- [Core Data](https://github.com/WordPress/gutenberg/blob/trunk/packages/core-data/README.md) - receiveThemeSupports 非推奨 [#36044](https://github.com/WordPress/gutenberg/pull/36044)
- [Data](https://github.com/WordPress/gutenberg/blob/trunk/packages/data/README.md) - 非推奨登録の削除 [#36344](https://github.com/WordPress/gutenberg/pull/36344)
- [E2E Test Utils](https://github.com/WordPress/gutenberg/blob/trunk/packages/e2e-test-utils/README.md) - openTypographyToolsPanelMenu 追加 [#36344](https://github.com/WordPress/gutenberg/pull/36334)
- [Rich Text](https://github.com/WordPress/gutenberg/blob/trunk/packages/rich-text/README.md) - 使用方法の追加 [#35885](https://github.com/WordPress/gutenberg/pull/35885)
- [URL](https://github.com/WordPress/gutenberg/blob/trunk/packages/url/README.md) - normalizePath 追加 [#35992](https://github.com/WordPress/gutenberg/pull/35992)


[以前の変更履歴](https://ja.wordpress.org/team/handbook/block-editor/handbook/block-editor-changelog/)

### 問い合わせ先

ブロックエディターハンドブックへのコメントは [Gutenberg GitHub リポジトリ](https://github.com/WordPress/gutenberg) へお願いします。

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

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/README.md)
