# ブロックエディターハンドブック

「ブロックエディターハンドブック」はデザイナーや開発者向けのドキュメントです。エディターの拡張方法やプロジェクトへの貢献方法について解説します。まず、「[はじめに](https://ja.wordpress.org/team/handbook/block-editor/handbook/)」からお読みください。

ブロックエディターの使い方については、[サポート内のブロックエディターに関する文書](https://ja.wordpress.org/support/article/wordpress-editor/)を参照してください。

## 更新履歴
翻訳の進捗や、最新の英語版で同期した際に気づいたことをメモします。

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
