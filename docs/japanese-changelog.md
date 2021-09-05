# 変更履歴

翻訳の進捗や、最新の英語版で同期した際に気づいた箇所をメモしています。

2021/9/5
- [バリエーション](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-variations/) - scope の block に BlockVariationPicker のコメント [#34455](https://github.com/WordPress/gutenberg/pull/34455)
- 以下、未訳分で変更に気がついたもの
- [Testing Overview](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/testing-overview/) - React Testing Library 使用 [#34423](https://github.com/WordPress/gutenberg/pull/34423)
- [The Editor’s UI Data](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/data/data-core-edit-post.md) - initializeMetaBoxes 追加 [#30617](https://github.com/WordPress/gutenberg/pull/30617)
- [Block Variation Picker](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/block-variation-picker/README.md) - block スコープの記述 [#34455](https://github.com/WordPress/gutenberg/pull/34455)
- [Navigation](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/navigation/README.md) - CSS class の記述追加 [#34344](https://github.com/WordPress/gutenberg/pull/34344)
- [Edit navigation](https://github.com/WordPress/gutenberg/blob/trunk/packages/edit-navigation/README.md) - block-based モードは一時無効化 [#34444](https://github.com/WordPress/gutenberg/pull/34444)
- [URL](https://github.com/WordPress/gutenberg/blob/trunk/packages/url/README.md) - getFilename 追加 [#34313](https://github.com/WordPress/gutenberg/pull/34313)

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

2021/8/9
- 以下、未訳分で変更に気がついたもの
- [Testing Overview](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/testing-overview/) - モバイルテストとの統合 [#33657](https://github.com/WordPress/gutenberg/pull/33657)、[#33833](https://github.com/WordPress/gutenberg/pull/33833)
- [Compose](https://github.com/WordPress/gutenberg/tree/trunk/packages/compose) - インサーターでのブロック検索の改良 [#33868](https://github.com/WordPress/gutenberg/pull/33868)
- [ServerSideRender](https://github.com/WordPress/gutenberg/tree/trunk/packages/server-side-render) - 例の追加 [#33738](https://github.com/WordPress/gutenberg/pull/33738)
- [React Native 統合テストガイド](https://github.com/jawordpressorg/gutenberg/tree/trunk/docs/contributors/code/native-mobile-integration-test-guide.md) - 新規


2021/8/2
- [Git ワークフロー](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/git-workflow/) - 翻訳

2021/7/31
- [ブロックテーマの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/create-block-theme/) - ブロック名の変更 query -> query loop[#33382](https://github.com/WordPress/gutenberg/pull/33382)
- 以下、未訳分で変更に気がついたもの
- [ItemGroup](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/item-group/item-group), [Item](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/item-group/item): 新規
- [NumberControl](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/number-control) - 空の許可 [#33485](https://github.com/WordPress/gutenberg/pull/33485)
- [WordPress Core Data](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/data/data-core.md) - 非推奨 getAuthors [#33725](https://github.com/WordPress/gutenberg/pull/33725)

2021/7/21
- [コードによるコントリビューション入門](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/getting-started-with-code-contribution/) - 翻訳
- 以下、未訳分で変更に気がついたもの
- [Gutenberg Release Process](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/release/) - ポイントリリースの記述追加 [#33546](https://github.com/WordPress/gutenberg/pull/33546)

2021/7/17
- [コードによるコントリビューション](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/) - 翻訳

2021/7/16
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - customDuotone 追加 [#33295](https://github.com/WordPress/gutenberg/pull/33295)、add_theme_support との後方互換性、settings 例の追加 [#33421](https://github.com/WordPress/gutenberg/pull/33421)
- [メタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) - version 追加 [#33075](https://github.com/WordPress/gutenberg/pull/33075)
- 以下、未訳分で変更に気がついたもの
- [Gutenberg Release Process](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/release/) - リリース後のワークフロー追加 [#33328](https://github.com/WordPress/gutenberg/pull/33328)
- [Folder Structure](https://ja.wordpress.org/team/handbook/block-editor/contributors/folder-structure/) - tools フォルダー追加 [#33281](https://github.com/WordPress/gutenberg/pull/33281)
- [Block Filters](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/filters/block-filters.md) - allowed_block_types_all 追加 [#33262](https://github.com/WordPress/gutenberg/pull/33262)
- [Editor Filters](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/filters/editor-filters.md) - block_editor_settings -> block_editor_settings_all [#33262](https://github.com/WordPress/gutenberg/pull/33262)
- [SegementedControl](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/segmented-control/README.md) - SegmentedControl 追加 [#31937](https://github.com/WordPress/gutenberg/pull/31937)

2021/7/9
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - 「実験」を削除。5.8コアと Gutenberg プラグインの違いを明記  [#33131](https://github.com/WordPress/gutenberg/pull/33131)
- [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/) - リンク色の変更 [#33162](https://github.com/WordPress/gutenberg/pull/33162)
- [WordPress プラグイン](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/wp-plugin/) - register_block_type_from_metadata -> register_block_type [#33252](https://github.com/WordPress/gutenberg/pull/33252)
- [メタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) - apiVersion [#33249](https://github.com/WordPress/gutenberg/pull/33249), クライアント側の登録 [#33252](https://github.com/WordPress/gutenberg/pull/33252)
- [コードの実装](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/block-code/) - register_block_type_from_metadata -> register_block_type [#33252](https://github.com/WordPress/gutenberg/pull/33252)
- 以下、未訳分で変更に気がついたもの
- [Block Filters](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/filters/block-filters.md) - Registration 追加、media.crossOrigin 削除  [#33252](https://github.com/WordPress/gutenberg/pull/33252)
- [Editor Filters](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/filters/editor-filters.md) - media.crossOrigin 追加 [#33252](https://github.com/WordPress/gutenberg/pull/33252)
- [Admin Manifest](https://github.com/WordPress/gutenberg/tree/trunk/packages/admin-manifest) - 新規
- [InspectorControls](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/inspector-controls) - PanelBody 追加 [#33227](https://github.com/WordPress/gutenberg/pull/33227)
- [Blocks](https://github.com/WordPress/gutenberg/tree/trunk/packages/blocks) - registerBlockTypeFromMetadata 削除 [#33258](https://github.com/WordPress/gutenberg/pull/33258)
- [ColorPicker](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/color-picker) など - withState 削除 [#33259](https://github.com/WordPress/gutenberg/pull/33259)
- [Flyout](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/flyout/flyout/README.md) - 新規
- [BottomSheetSelectControl](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/mobile/bottom-sheet-select-control) - icon 追加 [#31963](https://github.com/WordPress/gutenberg/pull/31963)
- [SearchControl](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/search-control) - 新規


2021/7/2
- [モジュール性](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/modularity/) - パッケージの関連図追加 [#32921](https://github.com/WordPress/gutenberg/pull/32921)
- [ブロックサポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) - color.link 追加 [#32936](https://github.com/WordPress/gutenberg/pull/32936)
- --- 以下、未訳分で変更に気がついたもの
- [Link Control](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/link-control) - Unlinkボタンの追加 [#32541](https://github.com/WordPress/gutenberg/pull/32541)
- [Block library](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-library) - block view scripts 処理の統一 [#32814](https://github.com/WordPress/gutenberg/pull/32814)
- [Customize Widgets](https://github.com/WordPress/gutenberg/tree/trunk/packages/customize-widgets) - 技術実装詳細追加 [#33026](https://github.com/WordPress/gutenberg/pull/33026)
- [E2E Test Utils](https://github.com/WordPress/gutenberg/tree/trunk/packages/e2e-test-utils) - createUser, deleteUser 拡張 [#33067](https://github.com/WordPress/gutenberg/pull/33067)
- [redux-routine](https://github.com/WordPress/gutenberg/tree/trunk/packages/redux-routine) - 型追加 [#21313](https://github.com/WordPress/gutenberg/pull/21313)
- [ServerSideRender](https://github.com/WordPress/gutenberg/tree/trunk/packages/server-side-render) - placeholder props 変更 [#33030](https://github.com/WordPress/gutenberg/pull/33030)

2021/6/22
- [ブロックコントロール: ブロックツールバーと設定サイドバー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/block-controls-toolbar-and-sidebar/) - ESnext コード更新 [#32422](https://github.com/WordPress/gutenberg/pull/32422)
- [従来のウィジェットエディターに戻す](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/widgets/opting-out/) - フィルター 'gutenberg_use_widgets_block_editor' -> 'use_widgets_block_editor'[#32759](https://github.com/WordPress/gutenberg/pull/32759)
- --- 以下、未訳分で変更に気がついたもの
- [Testing Overview](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/testing-overview/) - wp-env のあるなしを追記
- [Card](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/card/card) など - g2 実装への更新 [#32566](https://github.com/WordPress/gutenberg/pull/32566)

2021/6/18
- [自動化テスト](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/automated-testing/) - 翻訳
- [レガシーウィジェットブロック](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/widgets/legacy-widget-block/) - show_instance_in_rest の変更 [#32726](https://github.com/WordPress/gutenberg/pull/32726), 他のブロックエディターでの利用 [#32501](https://github.com/WordPress/gutenberg/pull/32501)
- --- 以下、未訳分で変更に気がついたもの
- [Gutenberg Release Process](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/release/) - Performance Audit セクションの改良 [#32770](https://github.com/WordPress/gutenberg/pull/32770)
- [API Fetch](https://github.com/WordPress/gutenberg/blob/trunk/packages/api-fetch/README.md) - Abort 処理の修正 [#32530](https://github.com/WordPress/gutenberg/pull/32530)
- [BoxControl](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/box-control/README.md) - splitOnAxis [#32610](https://github.com/WordPress/gutenberg/pull/32610)
- [RadioControl](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/radio-control/README.md) - hideLabelFromVision [#32414](https://github.com/WordPress/gutenberg/pull/32414)
- [Compose](https://github.com/WordPress/gutenberg/blob/trunk/packages/compose/README.md) - Add types to useDialog, useFocusOnMount [#32676](https://github.com/WordPress/gutenberg/pull/32676), withSafeTimeout [#32674](https://github.com/WordPress/gutenberg/pull/32674)
- [E2E Test Utils](https://github.com/WordPress/gutenberg/tree/trunk/packages/e2e-test-utils) - user mention テスト [#32697](https://github.com/WordPress/gutenberg/pull/32697)
- [Readable JS assets WebPack Plugin](https://github.com/WordPress/gutenberg/blob/trunk/packages/readable-js-assets-webpack-plugin/README.md) - 新規

2021/6/16
- [パフォーマンス](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/performance/) - 翻訳

2021/6/14
- [フルサイト編集テンプレート](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/full-site-editing-templates/) - 翻訳

2021/6/11
- [メタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) - register_block_type_from_metadata -> registerBlockType [#32582](https://github.com/WordPress/gutenberg/pull/32582)
- [ブロックサポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) - color.duotone -> color.__experimentalDuotone [#32440](https://github.com/WordPress/gutenberg/pull/32440)
- --- 以下、未訳分で変更に気がついたもの
- [Getting Started for the React Native based Mobile Gutenberg](https://ja.wordpress.org/team/handbook/block-editor/contributors/develop/getting-started-native-mobile/) - iOS シミュレータ更新 [#32383](https://github.com/WordPress/gutenberg/pull/32383)
- [Gutenberg Release Process](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/release/) - リリース記事プロセス更新 [#32429](https://github.com/WordPress/gutenberg/pull/32429)
- [Block Editor](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor) - preset スラッグからのクラス生成 (#32352)(https://github.com/WordPress/gutenberg/pull/32352)
- [Block Breadcrumb](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/block-breadcrumb) - rootLabelText prop 追加 [#32528](https://github.com/WordPress/gutenberg/pull/32528)
- [BoxControl](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/box-control) - allowReset, resetValues [#32345](https://github.com/WordPress/gutenberg/pull/32345)
- [Notice](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/notice) - createInfoNotice の onDismiss オプション [#32338](https://github.com/WordPress/gutenberg/pull/32338)
- [Compose](https://github.com/WordPress/gutenberg/tree/trunk/packages/compose) - useThrottle に types、typecheck に useFocusOutside [#32170](https://github.com/WordPress/gutenberg/pull/32170)

2021/6/10
- [ブロックテーマの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/create-block-theme/) - 翻訳

2021/5/29
- [ブロックテーマの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/create-block-theme/) - 改定 [#31269](https://github.com/WordPress/gutenberg/pull/31269)
- [RickText](https://github.com/WordPress/gutenberg/tree/trunk/packages/rich-text) - 削除 inline display warning [#32013](https://github.com/WordPress/gutenberg/pull/32013)
- --- 以下、未訳分で変更に気がついたもの
- [Babel Preset Default](https://github.com/WordPress/gutenberg/tree/trunk/packages/babel-preset-default) - 追加 polyfill [#31279](https://github.com/WordPress/gutenberg/pull/31279)
- [Color Higher-Order Component and Hook](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/colors) - 削除 __experimentalUseColors hook [#31438](https://github.com/WordPress/gutenberg/pull/31438)
- [BaseField](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/base-field) - 新規
- [BoxControl](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/box-control)など多数 - Mark all experimental components [#32147](https://github.com/WordPress/gutenberg/pull/32147)
- [ButtonGroup](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/button-group)など多数 - deprecate isPrimary, isSecondary, isTertiary and isLink [#31713](https://github.com/WordPress/gutenberg/pull/31713)
- [Tooltip](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/tooltip) - 追加 native block inserter onboarding tooltip [#32001](https://github.com/WordPress/gutenberg/pull/32001)
- [E2E Test Utils](https://github.com/WordPress/gutenberg/tree/trunk/packages/e2e-test-utils) - errors caused by adding widgets to core [#32176](https://github.com/WordPress/gutenberg/pull/32176)
- [Edit navigation](https://github.com/WordPress/gutenberg/tree/trunk/packages/edit-navigation) - ドキュメントの改良 [#31891](https://github.com/WordPress/gutenberg/pull/31891)


2021/5/23
- [@wordpress/e2e-tests](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-e2e-tests/) - 翻訳
- [fixtures/blocks](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-e2e-tests/fixtures-blocks/) - 翻訳

2021/5/22
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - add_theme_supportとの対応表追加 [#32040](https://github.com/WordPress/gutenberg/pull/32040)
- [メタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) - registerBlockTypeFromMetadata 削除 [#32030](https://github.com/WordPress/gutenberg/pull/32030)
- --- 以下、未訳分で変更に気がついたもの
- [コードコントリビューション](https://ja.wordpress.org/team/handbook/block-editor/contributors/develop/getting-started-with-code-contribution/) - wp-env での MySQL 接続 [#31975](https://github.com/WordPress/gutenberg/pull/31975)
- [VisuallyHidden](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/ui/visually-hidden) - 新規
- [RickText](https://github.com/WordPress/gutenberg/tree/trunk/packages/rich-text) - e2e test fix [#31864](https://github.com/WordPress/gutenberg/pull/31864)

2021/5/19
- [ブロックスタイル](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-styles/) - 翻訳
- [フルサイト編集](https://ja.wordpress.org/team/handbook/block-editor/handbook/full-site-editing/) - 翻訳


2021/5/13
- 「[ウィジェット](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/widgets/)」セクション以下 - 新規
- [ブロックスタイル](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-styles/) - 新規
- [ブロックサポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/)、[theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - margin block サポート追加 [#30608](https://github.com/WordPress/gutenberg/pull/30608)
- [Glossary](https://ja.wordpress.org/team/handbook/block-editor/handbook/glossary/) - フルサイト編集系追加
- --- 以下、未訳分で変更に気がついたもの
- [Spacer](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/spacer) - 新規
- [ToolbarDropdownMenu](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/toolbar-dropdown-menu) - 新規
- [block-editor](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor) - useSetting [#31587](https://github.com/WordPress/gutenberg/pull/31587)
- [compose](https://github.com/WordPress/gutenberg/tree/trunk/packages/compose) - Add types useAsyncList [#31523](https://github.com/WordPress/gutenberg/pull/31523)
- [dom](https://github.com/WordPress/gutenberg/tree/trunk/packages/dom) - Add types useConstrainedTabbing [#31548](https://github.com/WordPress/gutenberg/pull/31548)

2021/5/9
- 全体 - IE11 非サポートと Node.js >=12 [#31270](https://github.com/WordPress/gutenberg/pull/31270)
- 「[テーマ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/)」セクション以下 - experimental-theme.json を theme.json に [#29981](https://github.com/WordPress/gutenberg/pull/29981)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - ドキュメント改定 [#31507](https://github.com/WordPress/gutenberg/pull/31507)
- [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/) - 要素レベルスタイル等 [#29891](https://github.com/WordPress/gutenberg/issues/29891)
- [メタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) - registerBlockTypeFromMetadata API  [#30293](https://github.com/WordPress/gutenberg/pull/30293)
- [ブロックパターン](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-patterns/) - ドキュメント改定 [#31060](https://github.com/WordPress/gutenberg/pull/31060)
- [ブロックサポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) - spacing の sides サポート [#30607](https://github.com/WordPress/gutenberg/pull/30607)

2021/4/29
- [モジュール性](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/modularity/) - 翻訳

2021/4/28
- 「[テーマ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/)」セクション以下 - 再編。ブロックベーステーマ(block based theme) を ブロックテーマ (block theme) に。[#31167](https://github.com/WordPress/gutenberg/pull/31167)
- [Full Site Editing](https://ja.wordpress.org/team/handbook/block-editor/handbook/full-site-editing/) - 新規追加
- --- 以下、未訳分で変更に気がついたもの
- [The Block Editor’s Data](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/data/data-core-block-editor.md) - Simplify Insertion point [#30301](https://github.com/WordPress/gutenberg/pull/30301)
- [Block Editor](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor) - Apply a StyleProvider around fills that can be used inside the iframe [#31073](https://github.com/WordPress/gutenberg/pull/31073)
- [DOM](https://github.com/WordPress/gutenberg/blob/trunk/packages/dom/README.md) - Fix RTL issues [#31159](https://github.com/WordPress/gutenberg/pull/31159)
- 削除 - packages/components/src/ui 下の button, button-group, tooltip-button

2021/4/23
- [API リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/) 以下 - 文書タイトルを整理し、アルファベット順に [#30980](https://github.com/WordPress/gutenberg/pull/30980)
- [サポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) - color.background, color.__experimentalDuotone, color.gradients, color.text 追加 [#26752](https://github.com/WordPress/gutenberg/pull/26752)
- [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) - border style [#31040](https://github.com/WordPress/gutenberg/pull/31040)、border settings [#31039](https://github.com/WordPress/gutenberg/pull/31039)、duotone [#26752](https://github.com/WordPress/gutenberg/pull/26752) 追加
- [登録](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/) - block.json の使用を推奨
- [バリエーション](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-variations/) - isActive に属性の配列も [#30913](https://github.com/WordPress/gutenberg/pull/30913)
- --- 以下、未訳分で変更に気がついたもの
- [MediaPlaceholder](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/media-placeholder/README.md) - autoOpenMediaUpload 追加 [#29546](https://github.com/WordPress/gutenberg/pull/29546)
- [MediaUpload](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/media-upload/README.md) - autoOpen 追加 [#29546](https://github.com/WordPress/gutenberg/pull/29546)
- [BoxControl](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/box-control/README.md) - sides 追加 [#31029](https://github.com/WordPress/gutenberg/pull/31029)
- [DuotonePicker & DuotoneSwatch](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/duotone-picker/README.md) - 新規
- [Badge](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/mobile/badge/README.md) - 新規
- [Data](https://github.com/WordPress/gutenberg/blob/trunk/packages/data/README.md) - useSelect でのセレクター取得の正規化 [#31078](https://github.com/WordPress/gutenberg/pull/31078)


2021/4/21
- 全体 - prettier による文書整形。[#30715](https://github.com/WordPress/gutenberg/pull/30715)
- [git workflow](https://ja.wordpress.org/team/handbook/block-editor/contributors/develop/git-workflow/) - ブランチ名の推奨プレフィックスに fix を追加 [#30953](https://github.com/WordPress/gutenberg/pull/30953)
- [release](https://ja.wordpress.org/team/handbook/block-editor/contributors/develop/release/) - prod -> latest [#30866](https://github.com/WordPress/gutenberg/pull/30866)
- [readme](https://ja.wordpress.org/team/handbook/block-editor/handbook/)、[ブロックバリエーション](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-variations/) など - ブロックスタイルバリエーション -> ブロックスタイル [#30911](https://github.com/WordPress/gutenberg/pull/30911)
- [開発環境](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/devenv/) - その他の Windows での docker 入手元
- [create-block など](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/) - wp-scripts format-js -> wp-scripts format [#30240](https://github.com/WordPress/gutenberg/pull/30240)
- [env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) - Xdebug は PHP 7.2 以上のみ [#30651](https://github.com/WordPress/gutenberg/pull/30651)
- [i18n](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-i18n/) - resetLocaleData追加 [#30419](https://github.com/WordPress/gutenberg/pull/30419)

2021/4/13
- 「[データフローとデータフォーマット](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/data-flow/)」 - 翻訳
- 「[ブロックベーステーマ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/block-based-themes/)」 - 「クラシックテーマ」追加
- --- 以下、未訳分で変更に気がついたもの
- [LICENSE](https://github.com/WordPress/gutenberg/blob/trunk/LICENSE.md) - GPL と Mozilla Public License のデュアルライセンスにする準備 [#30383](https://github.com/WordPress/gutenberg/pull/30383)
- [release.md](https://github.com/WordPress/gutenberg/blob/trunk/docs/contributors/code/release.md) - npm publishing process の整理
- [create-compiler](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/ui/create-styles/create-compiler/README.md) - 新規追加。新スタイルシステム用 [#30503](https://github.com/WordPress/gutenberg/issues/30503)
- [create-style-system](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/ui/create-styles/create-style-system/README.md) - 同上

2021/4/9
- 「[ブロックのデザイン](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/designers/block-design/)」 - ブロックツールバー追加 [#29816](https://github.com/WordPress/gutenberg/pull/29816)

2021/4/8
- 最新版と同期。タイポ、リンクの修正等
- --- 以下、未訳分で変更に気がついたもの
- [Block library](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/README.md) - `frontend.js` 追加 [#30341](https://github.com/WordPress/gutenberg/pull/30341)
- [Panel](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/panel/README.md) - PanelRow の ref [#30298](https://github.com/WordPress/gutenberg/pull/30298)
- [DOM](https://github.com/WordPress/gutenberg/blob/trunk/packages/dom/README.md) - Element -> Node [#30412](https://github.com/WordPress/gutenberg/pull/30412)
- [Scripts](https://github.com/WordPress/gutenberg/blob/trunk/packages/scripts/README.md) - bundle CSS modules [#29182](https://github.com/WordPress/gutenberg/pull/29182)

2021/4/3
- 「[ブロックの作成チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/)」 - コード部分の更新。block.json の使用など ([#30353](https://github.com/WordPress/gutenberg/pull/30353))
- 「[後方互換性](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/backward-compatibility/)」 - since と plugin 追加
- 「[ブロックコントロール: ブロックツールバーと設定サイドバー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/block-controls-toolbar-and-sidebar/)」 - 設定サイドバーのサンプル追加
- 「[edit と save](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/)」 - ブロックラッパー props に注記を追加 ([#30315](https://github.com/WordPress/gutenberg/pull/30315))
- 「[テンプレート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-templates/)」 - 「ブロック属性」追加
- 「[RickText](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/richtext/)」 - 「エディター内で特定のフォーマットを無効化する」追加

2021/3/28
- 「[ブロックバリエーション](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-variations/)」 - 翻訳

2021/3/27
- 「[ブロックの登録](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/)」 - カテゴリーに「theme」を追加。「Block Variations」の説明の大部分を[新規ページ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-variations/)に移動し、記述を追加
- 「[RichText](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/richtext/)」 - [タグ名を変える表記を削除](https://github.com/WordPress/gutenberg/pull/30193)
- 「[theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/)」 - [翻訳用に書き方変更](https://github.com/WordPress/gutenberg/pull/29828)、[templateParts](https://github.com/WordPress/gutenberg/pull/30118) を追加

2021/3/21
- 「[theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/)」 -  [supports の概念を変更し、規定を削除](https://github.com/WordPress/gutenberg/pull/29941)

2021/3/16
- 全体 - [ハンドブックの再構成](https://make.wordpress.org/core/2021/03/12/block-editor-handbook-restructuring-project-update-march-12/) を日本語版にも反映
- 全体 - GitHub リポジトリのメインブランチ名が[「master」から「trunk」に](https://github.com/WordPress/gutenberg/issues/27741)
