# ブロックエディターハンドブック

「ブロックエディターハンドブック」はデザイナーや開発者向けのドキュメントです。エディターの拡張方法やプロジェクトへの貢献方法について解説します。まず、「[はじめに](https://ja.wordpress.org/team/handbook/block-editor/handbook/)」からお読みください。

ブロックエディターの使い方については、[サポート内のブロックエディターに関する文書](https://ja.wordpress.org/support/article/wordpress-editor/)を参照してください。

## 更新履歴
翻訳の進捗や、最新の英語版で同期した際に気づいたことをメモします。

2021/10/15
- [パフォーマンス](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/performance/) - ロード時間の詳細を追加。[#32237](https://github.com/WordPress/gutenberg/pull/32237)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - templateParts に title 追加 [#35626](https://github.com/WordPress/gutenberg/pull/35626)、ボタンブロックの枠の角丸がプラグインでのみ有効という記述を削除 [#35582](https://github.com/WordPress/gutenberg/pull/35582)
- [登録](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/) - カテゴリーの更新 [#35523](https://github.com/WordPress/gutenberg/pull/35523)
- [コンポーネントリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/components/) - storybookへのリンク追加 [#35493](https://github.com/WordPress/gutenberg/pull/35493)
- 以下、未訳分で変更に気がついたもの
- [BlockPreview](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/block-preview/README.md) - viewportWidth 700 -> 1200 [#35659](https://github.com/WordPress/gutenberg/pull/35659)
- [Media replace flow](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/media-replace-flow/README.md) - children 追加 [#35372](https://github.com/WordPress/gutenberg/pull/35372)
- [ColorPicker](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/color-picker/README.md) - 新バージョンで置換 [#35220](https://github.com/WordPress/gutenberg/pull/35220)
- [DateTimePicker](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/date-time/README.md) - isDayHighlighted 削除 [#35363](https://github.com/WordPress/gutenberg/pull/35363)
- [FontSizePicker](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/font-size-picker/README.md) - withReset 追加 [#35395](https://github.com/WordPress/gutenberg/pull/35395)
- [Navigation](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/navigation/README.md) - クラス名を変更 [#35358](https://github.com/WordPress/gutenberg/pull/35358)
- [NumberControl](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/number-control/README.md) - max、min 追加 [#34542](https://github.com/WordPress/gutenberg/pull/34542)
- [RangeControl](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/range-control/README.md) - "any" ステップサポート [#34542](https://github.com/WordPress/gutenberg/pull/34542)
- [ToggleGroupControlOption](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/toggle-group-control/toggle-group-control-option/README.md) - 新規
- [ToggleGroupControl](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/toggle-group-control/toggle-group-control/README.md) - 名称変更
- [ToolsPanel](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/tools-panel/tools-panel/README.md) - hasInnerWrapper、shouldRenderPlaceholderItems 追加 [#34725](https://github.com/WordPress/gutenberg/pull/34725)
- [Tooltip](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/tooltip/README.md) - delay 追加 [#35246](https://github.com/WordPress/gutenberg/pull/35246)
- ColorPicker - 削除
- [Global Styles](https://github.com/WordPress/gutenberg/blob/trunk/packages/edit-site/src/components/global-styles/README.md) - 新規
- [Scripts](https://github.com/WordPress/gutenberg/blob/trunk/packages/scripts/README.md) - Failed Test Artifacts 追加 [#35371](https://github.com/WordPress/gutenberg/pull/35371)

2021/10/2
- [開発環境](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/devenv/) - Node と nvm のバージョンを更新 [#35125](https://github.com/WordPress/gutenberg/pull/35125)
- [@wordpress/env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) - development インスタンスでのプラグイン、テーマのインストール方法追加 [#35064](https://github.com/WordPress/gutenberg/pull/35064)
- [E2E Tests](https://github.com/WordPress/gutenberg/blob/trunk/packages/e2e-tests/README.md) - workspaceRoot -> workspaceFolder [#34887](https://github.com/WordPress/gutenberg/pull/34887)
- 以下、未訳分で変更に気がついたもの
- [ClipboardButton](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/clipboard-button/README.md) - 改定 [#34711](https://github.com/WordPress/gutenberg/pull/34711)
- [The Post Editor’s Data](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/data/data-core-editor.md) - Autosave系とgetBlocksForSerialization 削除 [#34537](https://github.com/WordPress/gutenberg/pull/34537)
- [Block Editor](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/README.md) - getPxFromCssUnit 追加 [#34720](https://github.com/WordPress/gutenberg/pull/34720)
- [Link Control](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/link-control/README.md) - 文書改定 [#35199](https://github.com/WordPress/gutenberg/pull/35199)
- [Components Contributing](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/CONTRIBUTING.md) - README サンプル追加 [#34847](https://github.com/WordPress/gutenberg/pull/34847)
- [Dropdown](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/dropdown/README.md) - 文書改定 [#34861](https://github.com/WordPress/gutenberg/pull/34861)
- [Item](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/item-group/item/README.md) - isActive 削除、onClick 使用 [#35152](https://github.com/WordPress/gutenberg/pull/35152)
- [MenuItem](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/menu-item/README.md) - iconPosition 追加 [#34710](https://github.com/WordPress/gutenberg/pull/34710)
- [BottomSheet NavBar](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/mobile/bottom-sheet/nav-bar/README.md) - 文書改定 [#34751](https://github.com/WordPress/gutenberg/pull/34751)
- [NavigatorProvider](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/navigator/navigator-provider/README.md) - 新規
- [NavigatorScreen](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/navigator/navigator-screen/README.md) - 新規
- [RangeControl](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/range-control/README.md) - shiftStep 追加 [#35020](https://github.com/WordPress/gutenberg/pull/35020)
- [E2E Test Utils](https://github.com/WordPress/gutenberg/blob/trunk/packages/e2e-test-utils/README.md) - createMenu, deleteAllMenus 追加 [#34869](https://github.com/WordPress/gutenberg/pull/34869)
- [Edit navigation](https://github.com/WordPress/gutenberg/blob/trunk/packages/edit-navigation/README.md) - 修正と改定 [#34682](https://github.com/WordPress/gutenberg/pull/34682)、[#35035](https://github.com/WordPress/gutenberg/pull/35035)
- [Block-based navigation editor](https://github.com/WordPress/gutenberg/blob/trunk/packages/edit-navigation/docs/user-documentation.md) - 新規

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
| @t-hamano | @wildworks |
