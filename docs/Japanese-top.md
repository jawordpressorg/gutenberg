# ブロックエディターハンドブック

「ブロックエディターハンドブック」はデザイナーや開発者向けのドキュメントです。エディターの拡張方法やプロジェクトへの貢献方法について解説します。まず、「[はじめに](https://ja.wordpress.org/team/handbook/block-editor/handbook/)」からお読みください。

ブロックエディターの使い方については、[サポート内のブロックエディターに関する文書](https://ja.wordpress.org/support/article/wordpress-editor/)を参照してください。

## 更新履歴
翻訳の進捗や、最新の英語版で同期した際に気づいたことをメモします。

2021/8/26
- [@wordpress/e2e-tests](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-e2e-tests/) - debug in vscode [#29788](https://github.com/WordPress/gutenberg/pull/29788)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - block spacing gap 追加 [#33812](https://github.com/WordPress/gutenberg/pull/33812)
- 以下、未訳分で変更に気がついたもの
- [The Block Editor’s Data](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/data/data-core-block-editor.md) - 非推奨 receiveBlocks [#34241](https://github.com/WordPress/gutenberg/pull/34241) & [#34326](https://github.com/WordPress/gutenberg/pull/34326)
- [The Editor’s UI Data](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/data/data-core-edit-post.md) -  修正 togglePinnedPluginItem [#34155](https://github.com/WordPress/gutenberg/pull/34155)、toggleFeature [#34154](https://github.com/WordPress/gutenberg/pull/34154)
- [Block Editor](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/README.md) - unstableGalleryWithImageBlocks 追加 [#25940](https://github.com/WordPress/gutenberg/pull/25940)
- [InspectorControls](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/inspector-controls/README.md) - blockツールバーのグループ [#34069](https://github.com/WordPress/gutenberg/pull/34069)
- [MediaPlaceHolder](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/media-placeholder/README.md) - handleUpload 追加 [#25940](https://github.com/WordPress/gutenberg/pull/25940)
- [MoreMenuDropdown](https://github.com/WordPress/gutenberg/blob/trunk/packages/interface/src/components/more-menu-dropdown/README.md) - as 追加 [#34135](https://github.com/WordPress/gutenberg/pull/34135)

2021/8/19
- [属性](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-attributes/) - 概要、デフォルト値、例の追加 [#33880](https://github.com/WordPress/gutenberg/pull/33880)
- [サポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) - axial padding [#33859](https://github.com/WordPress/gutenberg/pull/33859)
- [ブロックの属性](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/attributes/) - block.json で書き換え [#33978](https://github.com/WordPress/gutenberg/pull/33978)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - Settings のバグ修正 [#34084](https://github.com/WordPress/gutenberg/pull/34084)
- 以下、未訳分で変更に気がついたもの
- [Editor Filters](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/filters/editor-filters.md) - should_load_remote_block_patterns 追加 [#33930](https://github.com/WordPress/gutenberg/pull/33930)
- [Blocks](https://github.com/WordPress/gutenberg/tree/trunk/packages/blocks) - WPBlock -> WPBlockType [#33903](https://github.com/WordPress/gutenberg/pull/33903)
- [CustomSelectControl](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/custom-select-control/README.md) - describedBy 追加 [#33941](https://github.com/WordPress/gutenberg/pull/33941)
- [Mobile Components](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/mobile) - 新規
- [SegementedControl](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/segmented-control) - hideLabelFromVision 追加 [#34017](https://github.com/WordPress/gutenberg/pull/34017)
- [ToolsPanelHeader](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/tools-panel/tools-panel-header) - 新規
- [ToolsPanelItem](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/tools-panel/tools-panel-item) - 新規
- [ToolsPanel](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/tools-panel/tools-panel) - 新規
- [ColorPicker](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/ui/color-picker) - 新規
- [Data](https://github.com/WordPress/gutenberg/tree/trunk/packages/data) - batch 追加 [#34046](https://github.com/WordPress/gutenberg/pull/34046)
- [MoreMenuDropdown](https://github.com/WordPress/gutenberg/tree/trunk/packages/interface/src/components/more-menu-dropdown) - 新規
- [MoreMenuFeatureToggle](https://github.com/WordPress/gutenberg/tree/trunk/packages/interface/src/components/more-menu-feature-toggle) - 新規

[以前の変更履歴](https://ja.wordpress.org/team/handbook/block-editor/handbook/block-editor-changelog/)

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
| @ixkaito | @ixkaito |
| @ryo-utsunomiya | |
| @mypacecreator | @mypacecreator |
| @atachibana | @atachibana |
| @miminari | @mimitips |
| @shizumi | @Shizumi |
| @arm-band | @armband |
| @kurudrive | @kurudrive |
