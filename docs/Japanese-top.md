# ブロックエディターハンドブック

「ブロックエディターハンドブック」はデザイナーや開発者向けのドキュメントです。エディターの拡張方法やプロジェクトへの貢献方法について解説します。まず、「[はじめに](https://ja.wordpress.org/team/handbook/block-editor/handbook/)」からお読みください。

ブロックエディターの使い方については、[サポート内のブロックエディターに関する文書](https://ja.wordpress.org/support/article/wordpress-editor/)を参照してください。

## 更新履歴
翻訳の進捗や、最新の英語版で同期した際に気づいたことをメモします。

2021/9/16
- withSelect -> useSelect [#34549](https://github.com/WordPress/gutenberg/pull/34549)
  - [ツールバーへのボタンの追加](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/format-api/2-toolbar-button/)
  - [入力コントロールの初期化](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/plugin-sidebar-0/plugin-sidebar-4-initialize-input/)
  - [入力コントロールの変更でメタフィールドを更新する](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/plugin-sidebar-0/plugin-sidebar-5-update-meta/)
  - [ダイナミックブロックの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/)
- [サイドバー - 最後の仕上げ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/plugin-sidebar-0/plugin-sidebar-6-finishing-touches/) - 削除
- 個別ブロックのロック [#32457](https://github.com/WordPress/gutenberg/pull/32457)
  - [テンプレート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-templates/)
  - [The Block Editor’s Data](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/data/data-core-block-editor.md)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - text 追加 [#34420](https://github.com/WordPress/gutenberg/pull/34420)
- 以下、未訳分で変更に気がついたもの
- [Raw Handling (Paste)](https://github.com/WordPress/gutenberg/blob/trunk/packages/blocks/src/api/raw-handling/readme.md) - 貼り付けてもリンク内のIDを保持 [#31107](https://github.com/WordPress/gutenberg/pull/31107)
- [Components Contributing](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/CONTRIBUTING.md) - 改定 [#33960](https://github.com/WordPress/gutenberg/pull/33960)
- [BottomSheet Header](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/mobile/bottom-sheet/nav-bar) - 新規
- [BottomSheetSubSheet](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/mobile/bottom-sheet/sub-sheet) - ナビゲーションヘッダーのリファクタリング [#34309](https://github.com/WordPress/gutenberg/pull/34309)
- injection サポート [#34632](https://github.com/WordPress/gutenberg/pull/34632)
  - [ToolsPanelHeader](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/tools-panel/tools-panel-header/README.md)
  - [ToolsPanelItem](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/tools-panel/tools-panel-item/README.md)
  - [ToolsPanelHeader](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/tools-panel/tools-panel-header/README.md)
- [DOM](https://github.com/WordPress/gutenberg/blob/trunk/packages/dom/README.md) - mayUseScroll 削除
- [Keyboard Shortcuts](https://github.com/WordPress/gutenberg/tree/trunk/packages/keyboard-shortcuts) - ShortcutProvider 追加 [#34539](https://github.com/WordPress/gutenberg/pull/34539)
- [Keycodes](https://github.com/WordPress/gutenberg/tree/trunk/packages/keycodes) - HOME、END、PAGEUP、PAGEDOWN 追加 [#34508](https://github.com/WordPress/gutenberg/pull/34508)

2021/9/5
- [バリエーション](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-variations/) - scope の block に BlockVariationPicker のコメント [#34455](https://github.com/WordPress/gutenberg/pull/34455)
- 以下、未訳分で変更に気がついたもの
- [Testing Overview](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/testing-overview/) - React Testing Library 使用 [#34423](https://github.com/WordPress/gutenberg/pull/34423)
- [The Editor’s UI Data](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/data/data-core-edit-post.md) - initializeMetaBoxes 追加 [#30617](https://github.com/WordPress/gutenberg/pull/30617)
- [Block Variation Picker](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/block-variation-picker/README.md) - block スコープの記述 [#34455](https://github.com/WordPress/gutenberg/pull/34455)
- [Navigation](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/navigation/README.md) - CSS class の記述追加 [#34344](https://github.com/WordPress/gutenberg/pull/34344)
- [Edit navigation](https://github.com/WordPress/gutenberg/blob/trunk/packages/edit-navigation/README.md) - block-based モードは一時無効化 [#34444](https://github.com/WordPress/gutenberg/pull/34444)
- [URL](https://github.com/WordPress/gutenberg/blob/trunk/packages/url/README.md) - getFilename 追加 [#34313](https://github.com/WordPress/gutenberg/pull/34313)

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
| @takepo | @taisuke |
| @atachibana | @atachibana |
| @miminari | @mimitips |
| @shizumi | @Shizumi |
| @arm-band | @armband |
| @kurudrive | @kurudrive |
