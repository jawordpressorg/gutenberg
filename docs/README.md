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

### 主な変更

詳細な変更履歴は、[こちら](https://ja.wordpress.org/team/handbook/block-editor/handbook/block-editor-changelog/)を参照してください。

2022/8/13

- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - blockGap の値 [#42447](https://github.com/WordPress/gutenberg/pull/42447)、新要素と疑似セレクタ[#42412](https://github.com/WordPress/gutenberg/pull/42412)
- [theme.json V2](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-living/) - typography に fluid 追加 [#39529](https://github.com/WordPress/gutenberg/pull/39529)
- [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/) - disable-layout-styles追加 [#42544](https://github.com/WordPress/gutenberg/pull/42544)
- [メタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) - Valiation [#425639](https://github.com/WordPress/gutenberg/pull/42539)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - コメント legacy 追加、投稿コメント削除 [#41807](https://github.com/WordPress/gutenberg/pull/41807)、投稿のアイキャッチ画像 linkTarget, rel 追加 [#42853](https://github.com/WordPress/gutenberg/pull/42853), クエリータイトル showSearchTerm 追加 [#42662](https://github.com/WordPress/gutenberg/pull/42662)、アーカイブ showLabel 追加 [#43025](https://github.com/WordPress/gutenberg/pull/43025)、投稿日 displayType 追加 [#42312](https://github.com/WordPress/gutenberg/pull/42312)、見出しと段落 gradients 追加 [#43119](https://github.com/WordPress/gutenberg/pull/43119)
- [フックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/filters/) - フィルターリファrンスから改名
- [@wordpress/create-block](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/)、[@wordpress/e2e-tests](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-e2e-tests/) - Node 14 以上 [#43141](https://github.com/WordPress/gutenberg/pull/43141)
- [@wordpress/env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) - PHPUnit [#41780](https://github.com/WordPress/gutenberg/pull/41780)、WordPress を git から取得 [#42826](https://github.com/WordPress/gutenberg/pull/42826)
- [Gutenberg Release Process](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/release/) - cherry-picking [#42932](https://github.com/WordPress/gutenberg/pull/42932)

2022/7/18

- [基本的なブロックの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/) - 依存関係の追加 [#41511](https://github.com/WordPress/gutenberg/pull/41511)
- [Curating the Editor Experience](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/) - 新規
- [セットアップ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/1-data-basics-setup/) - CSS の変更 [#40940](https://github.com/WordPress/gutenberg/pull/40940)
- [編集フォームの構築](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/3-building-an-edit-form/) - 「キャンセル」ボタンの追加 [#39261](https://github.com/WordPress/gutenberg/pull/39261)
- [Part 4: Building a Create page form](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/4-building-a-create-page-form/) - 新規
- [Adding a delete button](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/5-adding-a-delete-button/) - 新規
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - スタイルの変更に時間がかかる問題の回避方法 [#42346](https://github.com/WordPress/gutenberg/pull/42346)
- [パターン](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-patterns/) - postTypes 追加 [#41791](https://github.com/WordPress/gutenberg/pull/41791)
- [サポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) - blockGap 追加 [#41225](https://github.com/WordPress/gutenberg/pull/41225)
- [変換](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-transforms/) - shortcode に transform 追加 [#42001](https://github.com/WordPress/gutenberg/pull/42001)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - カテゴリー -> カテゴリー一覧 [#39837](https://github.com/WordPress/gutenberg/pull/39837)、コメントの投稿者名、コメント日付、コメント編集リンク、コメント返信リンク fontSize 削除 [#41627](https://github.com/WordPress/gutenberg/pull/41627)、コメントクエリーリープ -> コメント [#40763](https://github.com/WordPress/gutenberg/pull/40763)、コメントタイトル multipleCommentsLabel, singleCommentLabel 削除 [#40817](https://github.com/WordPress/gutenberg/pull/40817)、カバー spacing (margin) 追加 [#41963](https://github.com/WordPress/gutenberg/pull/41963)、グループ ariaLabel 追加 [#41744](https://github.com/WordPress/gutenberg/pull/41744)、ナビゲーションエリア削除 [#40645](https://github.com/WordPress/gutenberg/pull/40645)、投稿ナビゲーションリンク color (background, link, text) 追加 [#41378](https://github.com/WordPress/gutenberg/pull/41378)、投稿タグ prefix 追加、検索 query 追加 [#40585](https://github.com/WordPress/gutenberg/pull/40585)、目次 headings 追加 [#29739](https://github.com/WordPress/gutenberg/pull/29739)
- [非推奨プロセス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-deprecation/) - サンプルに supports 追加 [#41589](https://github.com/WordPress/gutenberg/pull/41589)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-living/) - typography の fontFamilies に fontFace [#41844](https://github.com/WordPress/gutenberg/pull/41844)、filter 追加 [#41920](https://github.com/WordPress/gutenberg/pull/41920)、fontSizes に fluid 追加 [#39529](https://github.com/WordPress/gutenberg/pull/39529)、spacing に customSpacingSize, spacingSizes, spacingScale 追加 [#41527](https://github.com/WordPress/gutenberg/pull/41527)
- [パッケージリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/) - WordPress の特定のメジャーバージョンでの JavaScript コードのテスト追加 [#42390](https://github.com/WordPress/gutenberg/pull/42390)
- [@wordpress/env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) - SSH リポジトリ [#40451](https://github.com/WordPress/gutenberg/pull/40451)、引数の渡し方 [#41179](https://github.com/WordPress/gutenberg/pull/41179)

2022/4/30
- [ネストしたブロック: InnerBlocks の使用](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/) - ancestors 追記 [#40027](https://github.com/WordPress/gutenberg/pull/40027)
- [テーマ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/) - フルサイト編集追記 [#39662](https://github.com/WordPress/gutenberg/pull/39662)
- [ブロックテーマ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/block-theme-overview/) - グローバルスタイルプリセット追記 [#38800](https://github.com/WordPress/gutenberg/pull/38800)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - グローバルスタイルシート [#40005](https://github.com/WordPress/gutenberg/pull/40005)
- [block.json のメタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) - ancestor 追加 [#40027](https://github.com/WordPress/gutenberg/pull/40027)
- [パターン](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-patterns/) - inserterプロパティ追加 [#40425](https://github.com/WordPress/gutenberg/pull/40425)
- [サポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports) - lock 追加 [#40145](https://github.com/WordPress/gutenberg/pull/40145)
- [テンプレート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-templates/) - 個別ロックのサンプル追加 [#40372](https://github.com/WordPress/gutenberg/pull/40372)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - No Result [#38806](https://github.com/WordPress/gutenberg/pull/38806)、Avatar [#38591](https://github.com/WordPress/gutenberg/pull/38591)、Tag Cloudの属性 [#37311](https://github.com/WordPress/gutenberg/pull/37311)、Comments Query Loopの属性 [#39664](https://github.com/WordPress/gutenberg/pull/39664)、Read Moreのサポート [#39796](https://github.com/WordPress/gutenberg/pull/39796)、Page Numbersのサポート [#39835](https://github.com/WordPress/gutenberg/pull/39835)、Quoteのサポート [#39899](https://github.com/WordPress/gutenberg/pull/39899)、Archivesの属性 [#38440](https://github.com/WordPress/gutenberg/pull/38440)、Navigationの属性 [#38621](https://github.com/WordPress/gutenberg/pull/38621)、カバーの属性 [#39658](https://github.com/WordPress/gutenberg/pull/39658)、Columnのサポート [#40122](https://github.com/WordPress/gutenberg/pull/40122)、Comment Author Avatar 非推奨 [#40186](https://github.com/WordPress/gutenberg/pull/40186)、Comment Author Name、Comment Date、Comment Edit Link、Comment Reply Linkの属性 [#40165](https://github.com/WordPress/gutenberg/pull/40165)、Post Comments非推奨 [#40167](https://github.com/WordPress/gutenberg/pull/40167)、Categoriesの属性 [#39426](https://github.com/WordPress/gutenberg/pull/39426)、Comments Title追加 [#40419](https://github.com/WordPress/gutenberg/pull/40419)、Separatorのサポート [#40551](https://github.com/WordPress/gutenberg/pull/40551)
- [theme.json V2](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-living/) - border の変更 [#37770](https://github.com/WordPress/gutenberg/pull/37770)、スキーマの説明 [#40599](https://github.com/WordPress/gutenberg/pull/40599)
- [コンポーネントリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/components/) - Popover と Tooltip の注意 [#39709](https://github.com/WordPress/gutenberg/pull/39709)
- [@wordpress/create-block](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/) - npmDevDependencies 追加 [#39723](https://github.com/WordPress/gutenberg/pull/39723)
- [@wordpress/e2e-tests](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-e2e-tests/) - Playwright に移行のため非推奨 [#38570](https://github.com/WordPress/gutenberg/pull/38570)
- [@wordpress/env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) - 環境変数 `WP_ENV_CORE` への言及 [#40407](https://github.com/WordPress/gutenberg/pull/40407)

2022/3/26
- [ページリストの構築](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/2-building-a-list-of-pages/) - 翻訳
- [編集フォームの構築](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/building-an-edit-form/) - 翻訳

2022/3/22
- [テーマ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/) - クラシックテーマとブロックテーマ [#39562](https://github.com/WordPress/gutenberg/pull/39562)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - リスト項目ブロック追加 [#39487](https://github.com/WordPress/gutenberg/pull/39487)、ギャラリーブロックのサポートに spacing と units [#38164](https://github.com/WordPress/gutenberg/pull/38164)、区切りブロックのサポートにcolor、属性はopacity [#38428](https://github.com/WordPress/gutenberg/pull/38428)
- [Deprecations](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/deprecations/) - Unreleased [#38794](https://github.com/WordPress/gutenberg/pull/38794)
- [Gutenberg Release Process](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/release/) - npm 公開 [#39389](https://github.com/WordPress/gutenberg/pull/39389)
- [Testing Overview](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/testing-overview/) - User interactions 追加 [#39360](https://github.com/WordPress/gutenberg/pull/39360)

2022/3/16
- [セットアップ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/1-data-basics-setup/) - 翻訳

2022/3/13
- [Gutenberg Release Process](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/release/) - npm 公開の自動化 [#39259](https://github.com/WordPress/gutenberg/pull/39259)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - Gallery から html 削除 [#39318](https://github.com/WordPress/gutenberg/pull/39318)
- [バージョン 2 (現在のリファレンス)](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-living/) - color に defaultDuotone 追加 [#38681](https://github.com/WordPress/gutenberg/pull/38681)

2022/3/12
- [ダイナミックブロック内のブロックサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/block-supports-in-dynamic-blocks/) - 翻訳
- [Gutenberg のデータを使用したアプリの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/) - 翻訳

2022/3/6
- [ブロックの作成 チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/getting-started/create-block/) - カスタムプロジェクトテンプレートで書き換え [#39049](https://github.com/WordPress/gutenberg/pull/39049)
- [執筆エクスペリエンス](https://ja.wordpress.org/team/handbook/block-editor/getting-started/create-block/author-experience/) - useBlockProps 追加 [#39072](https://github.com/WordPress/gutenberg/pull/39072)、[#39049](https://github.com/WordPress/gutenberg/pull/39049)
- [ブロックの詳細](https://ja.wordpress.org/team/handbook/block-editor/getting-started/create-block/block-anatomy/) - カスタムプロジェクトテンプレート [#39049](https://github.com/WordPress/gutenberg/pull/39049)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - version v2 [#38937](https://github.com/WordPress/gutenberg/pull/38937)、experimental-link-color は 5.9 以上で削除 [#38711](https://github.com/WordPress/gutenberg/pull/38711)
- [Building an edit form](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/data-basics/3-building-an-edit-form.md) - 新規
- [Gutenberg Release Process](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/release/) - cherry-picking 自動化 [#38977](https://github.com/WordPress/gutenberg/pull/38977)
- [@wordpress/create_block](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/) - 全面改訂 [#39049](https://github.com/WordPress/gutenberg/pull/39049)、[#39096](https://github.com/WordPress/gutenberg/pull/39096)
- [@wordpress/env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) - xdebug への追記 [#38882](https://github.com/WordPress/gutenberg/pull/38882)、run での引用符 [#39101](https://github.com/WordPress/gutenberg/pull/39101)

2022/2/17
- [はじめに](https://ja.wordpress.org/team/handbook/block-editor/getting-started/) - 最初の指針を追加 [#38682](https://github.com/WordPress/gutenberg/pull/38682)
- [キーコンセプト](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/key-concepts/) - グローバルスタイルの記述変更 [#38208](https://github.com/WordPress/gutenberg/pull/38208)
- [フィーチャーフラグ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/feature-flags/) - IS_GUTENBERG_PLUGIN の導入 [#38202](https://github.com/WordPress/gutenberg/pull/38202)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - patterns 追加 [#38700](https://github.com/WordPress/gutenberg/pull/38700)
- [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/) - 5.9 からのコアの色、グラデーション、フォントサイズの上書きについての記述の追加 [#38514](https://github.com/WordPress/gutenberg/pull/38514)
- [非推奨プロセス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-deprecation/) - 流れの書き換え [#38683](https://github.com/WordPress/gutenberg/pull/38683)
- [パターン](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-patterns/) - コンテキストやセマンティックの追加 [#38809](https://github.com/WordPress/gutenberg/pull/38809)
- [変換](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-transforms/) - schema 追加 [#36839](https://github.com/WordPress/gutenberg/pull/36839)
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - 投稿者の経歴ブロック [#38269](https://github.com/WordPress/gutenberg/pull/38269)、続きを読むブロック [#37649](https://github.com/WordPress/gutenberg/pull/37649)、コメントクエリーループブロックに defaultPage 追加 [#38187](https://github.com/WordPress/gutenberg/pull/38187)
minor
- [create-block](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/) - wpEnvの説明 [#38530](https://github.com/WordPress/gutenberg/pull/38530)、customScripts の追加 [#38535](https://github.com/WordPress/gutenberg/pull/38535)
- [CONTRIBUTING](https://github.com/WordPress/gutenberg/blob/trunk/CONTRIBUTING.md) - GPLv2 から GPLv2 と MPLv2 へ [#38303](https://github.com/WordPress/gutenberg/pull/38303)
- [後方互換性](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/backward-compatibility/) - 「コントリビューターガイド」章に移動
- [Gutenberg Release Process](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/release/) - ポイントリリースの追記 [#38565](https://github.com/WordPress/gutenberg/pull/38565)、[#38631](https://github.com/WordPress/gutenberg/pull/38631)
- [Styles](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/styles/) - 新規
- [ユーザーインターフェース](https://ja.wordpress.org/team/handbook/block-editor/explanations/user-interface/) - 既存文書からの再編成 [#37807](https://github.com/WordPress/gutenberg/pull/37807)
- [Data Tutorial](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/) - 新規 [#38581](https://github.com/WordPress/gutenberg/pull/38581)
- [thunk](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/thunks/) - 新規 [#36051](https://github.com/WordPress/gutenberg/pull/36051)


2022/1/29
- ブロックサポート
  - [サポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) - 概要説明の更新 [#37847](https://github.com/WordPress/gutenberg/pull/37847)
  - [Block Supports in dynamic blocks](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/block-supports-in-dynamic-blocks/) - 新規
  - Block Supports - 新規
  - [ブロックコントロール: ブロックツールバーと設定サイドバー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/block-controls-toolbar-and-sidebar/)、[ダイナミックブロックの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/) - block supports 追加 [#38210](https://github.com/WordPress/gutenberg/pull/38210)
- [ブロックテーマの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/create-block-theme/) - グローバルスタイルプリセット追加 [#38129](https://github.com/WordPress/gutenberg/pull/38129)
- [@wordpress/env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) - install-path 追加 [#35638](https://github.com/WordPress/gutenberg/pull/35638)

2022/1/17
- [基本的なブロックの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/) - 全面改訂 [#37674](https://github.com/WordPress/gutenberg/pull/37674)
- [バージョン 1 リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-v1/) - 新規、翻訳
- [新しいバージョンへの移行](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-migrations/) - 新規、翻訳
- [@wordpress/create-block](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/) - カスタムフォルダーのサポート [#37612](https://github.com/WordPress/gutenberg/pull/37612)
- [Gutenberg Release Process](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/release/) - WordPress との同期について追加 [#37898](https://github.com/WordPress/gutenberg/pull/37898)
- 以下、未訳分で変更に気がついたもの
- [Block Editor](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/README.md) - useBlockEditContext 追加 [#36299](https://github.com/WordPress/gutenberg/pull/36299)
- [Scripts](https://github.com/WordPress/gutenberg/blob/trunk/packages/scripts/README.md) - エントリーポイントのために block.json をスキャン [#37661](https://github.com/WordPress/gutenberg/pull/37661)

2022/1/15
- [コアブロックリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/) - 翻訳
- [theme.json リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/) - 翻訳


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
| @tecking | @tecking |
| @s56bouya | @s56bouya |

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/README.md)
