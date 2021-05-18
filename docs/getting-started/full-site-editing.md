<!--
# Full Site Editing
 -->
# フルサイト編集

<!--
At the highest level, the vision of Full Site Editing is to provide a collection of features that bring the familiar experience and extendability of blocks to all parts of your site rather than just post and pages. You can think of Full Site Editing as the umbrella project name for various sub-projects within Gutenberg that make this vision possible. Projects under Full Site Editing (FSE) include everything from the Site Editor, Global Styles, numerous Site/Post/Page specific blocks, Query block, Navigation block, Templates, and block themes. What follows are brief descriptions of the major pieces with more details found [here](https://github.com/WordPress/gutenberg/issues/24551):
 -->
「フルサイト編集」(Full Site Editing、FSEとも) の大きな目標として、投稿やページだけでなくサイト内のあらゆる部分に、ブロックの使い慣れた体験と拡張性をもたらす機能を提供します。フルサイト編集は、このビジョンを実現する Gutenberg 内の様々なサブプロジェクトを包括するプロジェクト名とも考えられます。フルサイト編集プロジェクトには、サイトエディター、グローバルスタイル、多数のサイト、投稿、ページ固有のブロック、クエリブロック、ナビゲーションブロック、テンプレート、ブロックテーマなどがあります。主要な機能を簡単に説明します。詳細については、[こちら](https://github.com/WordPress/gutenberg/issues/24551)を参照してください。

<!--
- Site Editor: the cohesive experience that allows you to directly edit and navigate between various templates, template parts, styling options, and more.
- Template Editing: a scaled down direct editing experience allowing you to edit/change/create the template a post/page uses.
- Block Theme: work to allow for a theme that's built using templates composed using blocks that works with full site editing. More below.
- Styling: the feature that enables styling modifications across three levels (local blocks, theme defaults, and global modifications).
- Theme Blocks: new blocks that accomplish everything possible in traditional templates using template tags (ex: Post Author Block).
- Browsing: the feature that unlocks the ability to navigate between various entities in the site editing experience including templates, pages, etc.
- Navigation Block: a new block that allows you to edit a site's navigation menu, both in terms of structure and design.
- Query Block: a new block that replicates the classic WP_Query and allows for further customization with additional functionality.
 -->
- サイトエディター: 様々なテンプレート、テンプレートパーツ、スタイルオプションなどを直接編集し、ナビゲートする、一体化した体験
- テンプレート編集: 投稿やページが使用するテンプレートを編集、変更、作成できる、規模を小さくしたダイレクト編集体験
- ブロックテーマ: ブロックで構成されたテンプレートを使用して構築されたテーマのフルサイト編集対応。詳細は後述。
- スタイリング: 3つのレベル (「ローカルブロック」、「テーマのデフォルト」、「グローバルな変更」)でスタイルの変更を可能にする機能
- テーマブロック: テンプレートタグを使用した従来のテンプレートで可能なすべてを実現する新しいブロック (例: 投稿者ブロック)
- ブラウジング: テンプレートやページなどサイト編集体験における様々なエンティティ間を移動する機能
- ナビゲーションブロック: 構造、デザインの療法でサイトナビゲーションメニューを編集できる新しいブロック
- クエリブロック: 従来の WP_Query を再現した新しいブロック。機能が追加され、さらにカスタマイズも可能

<!--
There are other projects, like the Navigation Editor and Widget Editor, that are meant to specifically help classic themes begin adapting more to the block framework and to act as a stepping stone of sorts to Full Site Editing. These are separate projects from Full Site Editing though but are worth being aware of as they ultimately help the cause of getting more people adjusted to using blocks in more places.
 -->
その他にもナビゲーションエディターやウィジェットエディターのようプロジェクトもあります。これらは従来のテーマをブロックフレームワークに適応し、フルサイト編集への足がかりとして機能することを目的とします。フルサイト編集とは別のプロジェクトですが、最終的により多くの人がより多くの場所でブロックを使用できるようにする目的は同じですので、注目の価値があります。

<!--
**Jump in:**
 -->
**試してみる**

<!--
The best way to learn something is start playing with it. So jump in by installing the Gutenberg plugin from the plugins directory and activating a block theme on a test site. We recommend the [TT1 Blocks theme](https://wordpress.org/themes/tt1-blocks/), it is listed in the theme diretory and our development reference theme. You can find other themes in the directory using the [full-site-editing feature tag](https://wordpress.org/themes/tags/full-site-editing/).
 -->
何かを学ぶための最良の方法は、まず遊んでみることです。プラグインディレクトリから Gutenberg プラグインをインストールし、テストサイトでブロックテーマを有効にしてください。[TT1 Blocks テーマ](https://wordpress.org/themes/tt1-blocks/)をお勧めします。このテーマは、テーマディレクトリにある、開発チームが参照しているテーマです。その他のテーマを見つけるには、[full-site-editing feature タグ](https://wordpress.org/themes/tags/full-site-editing/)を使用してディレクトリを検索してください。

<!--
## Get Involved
 -->
## 参加する

<!--
An ongoing [FSE Outreach program](https://make.wordpress.org/test/handbook/full-site-editing-outreach-experiment/) is in place with calls for testing and is a great way to get involved and learn about the new features.
 -->
現在実行中の [FSE アウトリーチプログラム](https://make.wordpress.org/test/handbook/full-site-editing-outreach-experiment/) でテストの呼びかけが行われています。フルサイト編集をテストし、新機能を学習するには最良の方法です。

<!--
- Join in on [WordPress Slack](https://make.wordpress.org/chat/) at [#fse-outreach-experiment](https://wordpress.slack.com/archives/C015GUFFC00)
- Participate in the [Calls for Testing](https://make.wordpress.org/test/tag/fse-testing-call/) by testing and giving feedback.
- See detailed [How to Test FSE instructions](https://make.wordpress.org/test/handbook/full-site-editing-outreach-experiment/how-to-test-fse/) to get setup to test FSE features.
 -->
- [WordPress Slack](https://make.wordpress.org/chat/) の [#fse-outreach-experiment](https://wordpress.slack.com/archives/C015GUFFC00) に参加してください。
- [テスト募集](https://make.wordpress.org/test/tag/fse-testing-call/) に参加し、テスト結果をフィードバックしてください。
- フルサイト編集機能のセットアップとテストの詳細については、[FSE テスト手順](https://make.wordpress.org/test/handbook/full-site-editing-outreach-experiment/how-to-test-fse/) を参照してください。

<!--
## Block Themes
 -->
## ブロックテーマ

<!--
If you are using the Gutenberg plugin you can run, test, and develop block themes. Block themes are themes built using templates composed using blocks. See [block theme overview](/docs/how-to-guides/themes/block-theme-overview.md) for additional details.
 -->
Gutenberg プラグインを使用していれば、ブロックテーマを実行、テスト、開発できます。ブロックテーマは、ブロックから構成されたテンプレートを使用して構築されたテーマです。追加の詳細については[ブロックテーマの概要](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/block-theme-overview/) を参照してください。

<!--
- See the [Create a Block Theme](/docs/how-to-guides/themes/create-block-theme.md) tutorial for a walk-through of the pieces of a block theme.
 -->
- ブロックテーマの内容を確認するには、[ブロックテーマの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/create-block-theme/) チュートリアルを参照してください。

<!--
- For examples, see the [WordPress/theme-experiments](https://github.com/WordPress/theme-experiments/) repository with several block themes there including the source for the above mentioned TT1 Blocks.
 -->
- たとえば、[WordPress/theme-experiments](https://github.com/WordPress/theme-experiments/) リポジトリを参照すると、上述した TT1 Blocks のソースコードを含む、いくつかのブロックテーマがあります。
<!--
- Use the `empty-theme.php` script from theme-experiments repo to generate a starter block theme, it will prompt you with a few questions and create a theme.
 -->
- ブロックテーマの雛形を作成するには、theme-experiments リポジトリの `empty-theme.php` スクリプトを使用してください。実行し、いくつかの質問に答えると、テーマを作成できます。

```
❯ git clone https://github.com/WordPress/theme-experiments
❯ cd theme-experiments
❯ php new-empty-theme.php
Please provide the following information:
Theme name: TestTheme
Description: A theme to test
Author: Marcus Kazmierczak
Theme URI: https://github.com/mkaz

Your new theme is ready!
```

<!--
You can then copy the generated directory to your `wp-content/themes` directory and start playing with the Site Editor to build and extend the theme.
 -->
生成したディレクトリを `wp-content/themes` ディレクトリにコピーすると、サイトエディターを使用してテーマを構築し、拡張できます。

<!--
### Template and Template Parts
 -->
### テンプレートとテンプレートパーツ

<!--
See the [architecture document on templates](/docs/explanations/architecture/full-site-editing-templates.md) for an explanation on the internals of how templates and templates parts are rendered in the frontend and edited in the backend.
 -->
テンプレートとテンプレートパーツに関する、フロントエンドでのレンダーや、バックエンドでの編集の内部詳細については、[テンプレートのアーキテクチャドキュメント](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/full-site-editing-templates/) を参照してください。

<!--
### theme.json
 -->
### theme.json

<!--
Instead of the proliferation of theme support flags or alternative methods, a new `theme.json` file is being used to define theme settings.
 -->
テーマ設定の定義においては、テーマのサポートフラグや代替手段を増やす代わりに、新しく `theme.json` ファイルが使用されています。

[theme.json のドキュメント](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) を参照してください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/full-site-editing.md)
