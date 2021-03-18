<!--
# Frequently Asked Questions
 -->
# よくある質問

<!-- 
What follows is a set of questions that have come up from the last few years of Gutenberg development. If you have any questions you’d like to have answered and included here, [just open up a GitHub issue](https://github.com/WordPress/gutenberg/issues) with your question. We’d love the chance to answer and provide clarity to questions we might not have thought to answer. For a look back historically, please see Matt's November 2018 post [WordPress 5.0: A Gutenberg FAQ](https://ma.tt/2018/11/a-gutenberg-faq/).
 -->
この記事では Gutenberg 開発においてこの2年間に受けた質問と回答をまとめました。さらに追加した方がよい質問がある場合には [GitHub issue](https://github.com/WordPress/gutenberg/issues) を作成し質問してください。喜んでお答えし疑問を解消したいと思います。歴史を振り返り返るには Matt の 2018年11月の投稿 [WordPress 5.0: A Gutenberg FAQ](https://ma.tt/2018/11/a-gutenberg-faq/) を参照してください。

<!-- 
## What is Gutenberg?
 -->
## Gutenberg (グーテンベルク) とは ?

<!-- 
“Gutenberg” is the name of the project to create a new editor experience for WordPress  — contributors have been working on it since January 2017 and it’s one of the most significant changes to WordPress in years. It’s built on the idea of using “blocks” to write and design posts and pages. This will serve as the foundation for future improvements to WordPress, including blocks as a way not just to design posts and pages, but also entire sites. The overall goal is to simplify the first-time user experience of WordPress — for those who are writing, editing, publishing, and designing web pages. The editing experience is intended to give users a better visual representation of what their post or page will look like when they hit publish. Originally, this was the kickoff goal:
 -->
「Gutenberg」は、WordPress で新しい編集エクスペリエンスを作り出すプロジェクトの名称です。2017年1月にコントリビューションが始まり、この数年の WordPress でもっとも大きな変化の1つとなりました。Gutenberg は投稿やページの執筆やデザインに「ブロック」を使用するというアイデアの上に構築されています。これは投稿やぺーじだけでなく、Web サイト全体のデザインにブロックを使用するという WordPress の未来の改良の基礎となります。最終的なゴールは WordPress の最初のユーザーエクスペリエンス、たとえば執筆、編集、発行、Web ページのデザイン等の簡素化です。編集エクスペリエンスではユーザーに対して、実際の投稿やページの表示と同じように見えるビジュアルな表現を与えることを目的とします。以下は、最初のキックオフ時のゴールです。

<!-- 
> The editor will endeavour to create a new page and post building experience that makes writing rich posts effortless, and has “blocks” to make it easy what today might take shortcodes, custom HTML, or “mystery meat” embed discovery.
 -->
> このエディターは、投稿や固定ページの編集における新しい体験の創造に努めます。ユーザーはリッチな投稿を楽に書くことができ、現在、ショートコードやカスタム HTML、「謎に包まれた」埋め込みの検知が担っている部分を「ブロック」で実現します。

<!-- 
Key takeaways include the following points:

- Authoring richly laid-out posts is a key strength of WordPress.
- By embracing blocks as an interaction paradigm, we can unify multiple different interfaces into one. Instead of learning how to write shortcodes and custom HTML, or pasting URLs to embed media, there's a common, reliable flow for inserting any kind of content.
- “Mystery meat” refers to hidden features in software, features that you have to discover. WordPress already supports a large number of blocks and 30+ embeds, so let's surface them.
 -->
重要な点として、以下が挙げられます。

- リッチなレイアウトの投稿を作成できることは WordPress の大きな強みです。
- ブロックをインタラクションのための枠組みとして採用することにより、複数の異なるインターフェースをひとつに統合できます。ショートコードやカスタム HTML の書き方を覚えたり、メディアを埋め込むために URL を貼り付けたりする代わりに、あらゆる種類のコンテンツを挿入できる共通で安定したフローを確立します。
- 「謎に包まれた」とは、ユーザーが発見する必要があるソフトウェアにおける隠し機能のことを指しています。WordPress はすでに多数のブロックと30種類以上の埋め込みをサポートしていますので、これらを表に出していきましょう。

<!-- 
Gutenberg is developed on [GitHub](https://github.com/WordPress/gutenberg) under the WordPress organization. The block editor has been available in core WordPress since 5.0. If you want to test upcoming features from Gutenberg project, it is [available in the plugin repository](https://wordpress.org/plugins/gutenberg/).
 -->
Gutenberg WordPress オーガナイゼーションの下、[GitHub](https://github.com/WordPress/gutenberg) で開発されています。ブロックエディターは WordPress 5.0 から本体で利用可能です。Gutenberg プロジェクトの予定新機能を試すには[プラグインリポジトリーから利用可能](https://wordpress.org/plugins/gutenberg/)です。

<!-- 
## What’s on the roadmap long term?
 -->
## 長期のロードマップはありますか ?
<!-- 
There are four phases of Gutenberg which you can see on the [official WordPress roadmap](https://wordpress.org/about/roadmap/). As of writing this, we’re currently in phase 2:

1. Easier Editing — Already available in WordPress since 5.0, with ongoing improvements.
2. Customization — Full Site editing, Block Patterns, Block Directory, Block based themes.
3. Collaboration — A more intuitive way to co-author content
4. Multi-lingual — Core implementation for Multi-lingual sites
 -->

[公式 WordPress ロードマップ](https://wordpress.org/about/roadmap/)によれば Gutenberg には4つのフェーズがあります。この記事を執筆中の現在はフェーズ2にいます。

1. 編集の簡素化 — すでに WordPress 5.0 のリリース以来利用可能で、今も実装中です。
2. カスタマイゼーション — フルサイト編集、ブロックパターン、ブロックディレクトリ、ブロックベーステーマ
3. コラボレーション — より直感的なコンテンツの共同作業
4. 多言語化 — コアの実装による多言語化サイト

<!--
## When was Gutenberg started? 
 -->
## いつ Gutenberg は始まりましたか ? 

<!-- 
The editor focus started in early 2017 with the first three months spent designing, planning, prototyping, and testing prototypes, to help us inform how to approach this project. The first plugin was launched during WordCamp Europe in June 2017.
 -->
このプロジェクトへのアプローチ方法を知らせるため、デザイン、計画、プロトタイプ作成そしてテストに焦点を当てて、2017年の初めに3ヶ月かけて開始されました。リポジトリからインストールできる実際のプラグインは、6月の WordCamp Europeで提供が開始されました。
<!-- 
## When was Gutenberg merged into WordPress?
 -->
## いつ Gutenberg は WordPress に組み込まれましたか ?
<!-- 
Gutenberg was first merged into [WordPress 5.0](https://wordpress.org/news/2018/12/bebo/) in December 2018. See [the versions in WordPress page](https://developer.wordpress.org/block-editor/principles/versions-in-wordpress/) for a complete list of Gutenberg plugin versions merged into WordPress core releases.
 -->
Gutenberg は2018年12月にリリースされた [WordPress 5.0](https://wordpress.org/news/2018/12/bebo/) で初めて組み込まれました。WordPress 本体リリースに組み込まれた Gutenberg プラグインのバージョンの完全なリストについては「[Versions in WordPress](https://ja.wordpress.org/team/handbook/block-editor/contributors/versions-in-wordpress/)」を参照してください。

<!-- 
## What are “blocks” and why are we using them?
 -->
##「ブロック」とはなんですか ? なぜこれを使うのですか ?

<!-- 
The classic WordPress editor is an open text window—it’s always been a wonderful blank canvas for writing, but when it comes to building posts and pages with images, multimedia, embedded content from social media, polls, and other elements, it required a mix of different approaches that were not always intuitive:
 -->
従来の WordPress 編集画面はオープンなテキストウィンドウでした。ある時点まで、それは執筆向けのすばらしい空白のキャンバスでしたが、画像やマルチメディア、ソーシャルメディアからの埋め込みコンテンツ、投票、その他の要素を含むブログ投稿や固定ページを作る場面では、必ずしも直感的とは言えない異なるアプローチの混在が必要でした。

<!-- 
- Media library/HTML for images, multimedia and approved files.
- Pasted links for embeds.
- Shortcodes for specialized assets from plugins.
- Featured images for the image at the top of a post or page.
- Excerpts for subheadings.
- Widgets for content on the side of a page.
 -->
- 画像、マルチメディア、承認された種類のファイルに対しては、メディアライブラリや HTML。
- 埋め込みにはリンクのペースト。
- プラグインからの特別なアセットには ショートコード。
- 投稿やページ上部の画像にはアイキャッチ画像。
- 副見出しには抜粋。
- ページのサイドにあるコンテンツにはウィジェット。

<!-- 
As we thought about these uses and how to make them obvious and consistent, we began to embrace the concept of “blocks.” All of the above items could be blocks: easy to search and understand, and easy to dynamically shift around the page. The block concept is very powerful, and when designed thoughtfully, can offer an outstanding editing and publishing experience. Ultimately, the idea with blocks is to create a new common language across WordPress, a new way to connect users to plugins, and replace a number of older content types — things like shortcodes and widgets — that one usually has to be well-versed in the idiosyncrasies of WordPress to understand.
 -->
これらを分かりやすく一貫性のあるものにするにはどうすればよいか考える過程で、「ブロック」というコンセプトを抱くようになりました。上のすべての項目はブロックにできる可能性があり、結果、検索しやすく理解しやすくページ内を動的に移動しやすくなります。ブロックの概念はとても強力で、よく考えて設計すれば、優れた編集と公開のエクスペリエンスを提供できます。最終的にはブロックを用いたアイデアは WordPress を横断する新しい共通言語の作成につながります。ブロックはユーザーとプラグインを結びつける新しい方法です。従来の、理解するには WordPress 固有の概念に精通しなければならないショートコードやウィジェットのような多くの古いコンテンツタイプを置き換えます。

<!-- 
## What is the writing experience like?
 -->
執筆エクスペリエンスはどのようなものですか ?
<!-- 
Our goal with Gutenberg is not just to create a seamless post- and page-building experience. We also want to ensure that it provides a seamless writing experience. To test this out yourself, [head to this demo and give it a try](https://wordpress.org/gutenberg/)!
 -->
Gutenberg のゴールはシームレスな投稿やページ構築エクスペリエンスを作り出すだけではありません。同時に、シームレスな執筆エクスペリエンスも提供したいと考えています。[是非、デモを試してみてください](https://wordpress.org/gutenberg/) !

<!-- 
## Are there Keyboard Shortcuts for Gutenberg?
 -->
## Gutenberg 用のキーボードショートカットはありますか ?

<!-- 
Yes. There are a lot! There is a help modal showing all available keyboard shortcuts.

You can see the whole list going to the top right corner menu of the new editor and clicking on “Keyboard Shortcuts” (or by using the keyboard shortcut <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>H</kbd> on Linux/Windows and <kbd>⌃</kbd><kbd>⌥</kbd><kbd>H</kbd> on macOS).

This is the canonical list of keyboard shortcuts:
 -->
あります。たくさんあります ! 利用可能なすべてのキーボードショートカットを表示するヘルプのモーダル画面があります。

エディターの右上にあるメニューで「キーボードショートカット」をクリックすると、完全なリストが表示されます。または、Linux / Windowsでは <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>H</kbd>、macOS では <kbd>⌃</kbd><kbd>⌥</kbd><kbd>H</kbd> のキーボードショートカットでも表示できます。

キーボードショートカットの標準的なリストを示します。

<!-- 
### Editor shortcuts

<table>
	<thead>
		<tr>
			<th></th>
			<th>Linux/Windows shortcut</th>
			<th>macOS shortcut</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Display keyboard shortcuts.</td>
			<td><kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>H</kbd></td>
			<td><kbd>⌃</kbd><kbd>⌥</kbd><kbd>H</kbd></td>
		</tr>
		<tr>
			<td>Save your changes.</td>
			<td><kbd>Ctrl</kbd>+<kbd>S</kbd></td>
			<td><kbd>⌘</kbd><kbd>S</kbd></td>
		</tr>
		<tr>
			<td>Undo your last changes.</td>
			<td><kbd>Ctrl</kbd>+<kbd>Z</kbd></td>
			<td><kbd>⌘</kbd><kbd>Z</kbd></td>
		</tr>
		<tr>
			<td>Redo your last undo.</td>
			<td><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd></td>
			<td><kbd>⇧</kbd><kbd>⌘</kbd><kbd>Z</kbd></td>
		</tr>
		<tr>
			<td>Show or hide the settings sidebar.</td>
			<td><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>,</kbd></td>
			<td><kbd>⇧</kbd><kbd>⌘</kbd><kbd>,</kbd></td>
		</tr>
		<tr>
			<td>Open the block navigation menu.</td>
			<td><kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>O</kbd></td>
			<td><kbd>⌃</kbd><kbd>⌥</kbd><kbd>O</kbd></td>
		</tr>
		<tr>
			<td>Navigate to the next part of the editor.</td>
			<td><kbd>Ctrl</kbd>+<kbd>`</kbd></td>
			<td><kbd>⌃</kbd><kbd>`</kbd></td>
		</tr>
		<tr>
			<td>Navigate to the previous part of the editor.</td>
			<td><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>`</kbd></td>
			<td><kbd>⌃</kbd><kbd>⇧</kbd><kbd>`</kbd></td>
		</tr>
		<tr>
			<td>Navigate to the next part of the editor (alternative).</td>
			<td><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>N</kbd></td>
			<td><kbd>⌃</kbd><kbd>⌥</kbd><kbd>N</kbd></td>
		</tr>
		<tr>
			<td>Navigate to the previous part of the editor (alternative).</td>
			<td><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>P</kbd></td>
			<td><kbd>⌃</kbd><kbd>⌥</kbd><kbd>P</kbd></td>
		</tr>
		<tr>
			<td>Navigate to the nearest toolbar.</td>
			<td><kbd>Alt</kbd>+<kbd>F10</kbd></td>
			<td><kbd>⌥</kbd><kbd>F10</kbd></td>
		</tr>
		<tr>
			<td>Switch between visual editor and code editor.</td>
			<td><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>M</kbd></td>
			<td><kbd>⇧</kbd><kbd>⌥</kbd><kbd>⌘</kbd><kbd>M</kbd></td>
		</tr>
		<tr>
			<td>Toggle fullscreen mode.</td>
			<td><kbd>CMD</kbd>+<kbd>Option</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd></td>
			<td><kbd>⇧</kbd><kbd>⌥</kbd><kbd>⌘</kbd><kbd>F</kbd></td>
		</tr>
	</tbody>
</table>
 -->
### エディターショートカット

<table>
	<thead>
		<tr>
			<th>機能説明</th>
			<th>Linux/Windows</th>
			<th>macOS</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>キーボードショートカットを表示</td>
			<td><kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>H</kbd></td>
			<td><kbd>⌃</kbd><kbd>⌥</kbd><kbd>H</kbd></td>
		</tr>
		<tr>
			<td>変更を保存</td>
			<td><kbd>Ctrl</kbd>+<kbd>S</kbd></td>
			<td><kbd>⌘</kbd><kbd>S</kbd></td>
		</tr>
		<tr>
			<td>最後の変更を取り消す</td>
			<td><kbd>Ctrl</kbd>+<kbd>Z</kbd></td>
			<td><kbd>⌘</kbd><kbd>Z</kbd></td>
		</tr>
		<tr>
			<td>最後の取り消しをやり直す</td>
			<td><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd></td>
			<td><kbd>⇧</kbd><kbd>⌘</kbd><kbd>Z</kbd></td>
		</tr>
		<tr>
			<td>設定サイドバーの表示、非表示</td>
			<td><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>,</kbd></td>
			<td><kbd>⇧</kbd><kbd>⌘</kbd><kbd>,</kbd></td>
		</tr>
		<tr>
			<td>ブロック移動メニュー表示</td>
			<td><kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>O</kbd></td>
			<td><kbd>⌃</kbd><kbd>⌥</kbd><kbd>O</kbd></td>
		</tr>
		<tr>
			<td>エディターの次の部分へ移動</td>
			<td><kbd>Ctrl</kbd>+<kbd>`</kbd></td>
			<td><kbd>⌃</kbd><kbd>`</kbd></td>
		</tr>
		<tr>
			<td>エディターの前の部分へ移動</td>
			<td><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>`</kbd></td>
			<td><kbd>⌃</kbd><kbd>⇧</kbd><kbd>`</kbd></td>
		</tr>
		<tr>
			<td>エディターの次の部分へ移動 (別の方法)</td>
			<td><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>N</kbd></td>
			<td><kbd>⌃</kbd><kbd>⌥</kbd><kbd>N</kbd></td>
		</tr>
		<tr>
			<td>エディターの前の部分へ移動 (別の方法)</td>
			<td><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>P</kbd></td>
			<td><kbd>⌃</kbd><kbd>⌥</kbd><kbd>P</kbd></td>
		</tr>
		<tr>
			<td>最も近いツールバーへ移動</td>
			<td><kbd>Alt</kbd>+<kbd>F10</kbd></td>
			<td><kbd>⌥</kbd><kbd>F10</kbd></td>
		</tr>
		<tr>
			<td>ビジュアールエディターとコードエディターの切り替え</td>
			<td><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>M</kbd></td>
			<td><kbd>⇧</kbd><kbd>⌥</kbd><kbd>⌘</kbd><kbd>M</kbd></td>
		</tr>
		<tr>
			<td>フルスクリーンモードの切り替え</td>
			<td><kbd>CMD</kbd>+<kbd>Option</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd></td>
			<td><kbd>⇧</kbd><kbd>⌥</kbd><kbd>⌘</kbd><kbd>F</kbd></td>
		</tr>
	</tbody>
</table>

<!-- 
### Selection shortcuts

<!-- 
<table>
	<thead>
		<tr>
			<th>Shortcut description</th>
			<th>Linux/Windows shortcut</th>
			<th>macOS shortcut</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Select all text when typing. Press again to select all blocks.</td>
			<td><kbd>Ctrl</kbd>+<kbd>A</kbd></td>
			<td><kbd>⌘</kbd><kbd>A</kbd></td>
		</tr>
		<tr>
			<td>Clear selection.</td>
			<td><kbd>Esc</kbd></td>
			<td><kbd>Esc</kbd></td>
		</tr>
	</tbody>
</table>
 -->

### 選択ショートカット

<table>
	<thead>
		<tr>
			<th>機能説明</th>
			<th>Linux/Windows</th>
			<th>macOS</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>入力時、すべてのテキストを選択。もう一度押すと、すべてのブロックを選択</td>
			<td><kbd>Ctrl</kbd>+<kbd>A</kbd></td>
			<td><kbd>⌘</kbd><kbd>A</kbd></td>
		</tr>
		<tr>
			<td>選択を解除</td>
			<td><kbd>Esc</kbd></td>
			<td><kbd>Esc</kbd></td>
		</tr>
	</tbody>
</table>

<!-- 
### Block shortcuts

<table>
	<thead>
		<tr>
			<th>Shortcut description</th>
			<th>Linux/Windows shortcut</th>
			<th>macOS shortcut</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Duplicate the selected block(s).</td>
			<td><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd></td>
			<td><kbd>⇧</kbd><kbd>⌘</kbd><kbd>D</kbd></td>
		</tr>
		<tr>
			<td>Remove the selected block(s).</td>
			<td><kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>Z</kbd></td>
			<td><kbd>⌃</kbd><kbd>⌥</kbd><kbd>Z</kbd></td>
		</tr>
		<tr>
			<td>Insert a new block before the selected block(s).</td>
			<td><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd></td>
			<td><kbd>⌥</kbd><kbd>⌘</kbd><kbd>T</kbd></td>
		</tr>
		<tr>
			<td>Insert a new block after the selected block(s).</td>
			<td><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Y</kbd></td>
			<td><kbd>⌥</kbd><kbd>⌘</kbd><kbd>Y</kbd></td>
		</tr>
		<tr>
			<td>Move the selected block(s) up.</td>
			<td><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>T</kbd></td>
			<td><kbd>⌥</kbd><kbd>⌘</kbd><kbd>⇧</kbd><kbd>T</kbd></td>
		</tr>
		<tr>
			<td>Move the selected block(s) down.</td>
			<td><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>Y</kbd></td>
			<td><kbd>⌥</kbd><kbd>⌘</kbd><kbd>⇧</kbd><kbd>Y</kbd></td>
		</tr>
		<tr>
			<td>Change the block type after adding a new paragraph.</td>
			<td><kbd>/</kbd></td>
			<td><kbd>/</kbd></td>
		</tr>
		<tr>
			<td>Remove multiple selected blocks.</td>
			<td></td>
			<td><kbd>del</kbd><kbd>backspace</kbd></td>
		</tr>
	</tbody>
</table>
 -->

### ブロック用のショートカット

<table>
	<thead>
		<tr>
			<th>機能説明</th>
			<th>Linux/Windows</th>
			<th>macOS</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>選択したブロックの複製</td>
			<td><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd></td>
			<td><kbd>⇧</kbd><kbd>⌘</kbd><kbd>D</kbd></td>
		</tr>
		<tr>
			<td>選択したブロックの削除</td>
			<td><kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>Z</kbd></td>
			<td><kbd>⌃</kbd><kbd>⌥</kbd><kbd>Z</kbd></td>
		</tr>
		<tr>
			<td>選択したブロックの前に新規ブロックを挿入</td>
			<td><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd></td>
			<td><kbd>⌥</kbd><kbd>⌘</kbd><kbd>T</kbd></td>
		</tr>
		<tr>
			<td>選択したブロックの後に新規ブロックを挿入</td>
			<td><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Y</kbd></td>
			<td><kbd>⌥</kbd><kbd>⌘</kbd><kbd>Y</kbd></td>
		</tr>
		<tr>
			<td>選択したブロックの上への移動</td>
			<td><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>T</kbd></td>
			<td><kbd>⌥</kbd><kbd>⌘</kbd><kbd>⇧</kbd><kbd>T</kbd></td>
		</tr>
		<tr>
			<td>選択したブロックの下への移動</td>
			<td><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>Y</kbd></td>
			<td><kbd>⌥</kbd><kbd>⌘</kbd><kbd>⇧</kbd><kbd>Y</kbd></td>
		</tr>
		<tr>
			<td>新規段落追加後のブロックタイプ変更</td>
			<td><kbd>/</kbd></td>
			<td><kbd>/</kbd></td>
		</tr>
		<tr>
			<td>選択した複数のブロックの削除</td>
			<td></td>
			<td><kbd>del</kbd><kbd>backspace</kbd></td>
		</tr>
	</tbody>
</table>

<!-- 
### Text formatting

<table>
	<thead>
		<tr>
			<th>Shortcut description</th>
			<th>Linux/Windows shortcut</th>
			<th>macOS shortcut</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Make the selected text bold.</td>
			<td><kbd>Ctrl</kbd>+<kbd>B</kbd></td>
			<td><kbd>⌘</kbd><kbd>B</kbd></td>
		</tr>
		<tr>
			<td>Make the selected text italic.</td>
			<td><kbd>Ctrl</kbd>+<kbd>I</kbd></td>
			<td><kbd>⌘</kbd><kbd>I</kbd></td>
		</tr>
		<tr>
			<td>Underline the selected text.</td>
			<td><kbd>Ctrl</kbd>+<kbd>U</kbd></td>
			<td><kbd>⌘</kbd><kbd>U</kbd></td>
		</tr>
		<tr>
			<td>Convert the selected text into a link.</td>
			<td><kbd>Ctrl</kbd>+<kbd>K</kbd></td>
			<td><kbd>⌘</kbd><kbd>K</kbd></td>
		</tr>
		<tr>
			<td>Remove a link.</td>
			<td><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd></td>
			<td><kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd></td>
		</tr>
		<tr>
			<td>Add a strikethrough to the selected text.</td>
			<td><kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>D</kbd></td>
			<td><kbd>⌃</kbd><kbd>⌥</kbd><kbd>D</kbd></td>
		</tr>
		<tr>
			<td>Display the selected text in a monospaced font.</td>
			<td><kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>X</kbd></td>
			<td><kbd>⌃</kbd><kbd>⌥</kbd><kbd>X</kbd></td>
		</tr>
	</tbody>
</table>
 -->
### テキスト書式

<table>
	<thead>
		<tr>
			<th>機能説明</th>
			<th>Linux/Windows</th>
			<th>macOS</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>選択したテキストを太字に</td>
			<td><kbd>Ctrl</kbd>+<kbd>B</kbd></td>
			<td><kbd>⌘</kbd><kbd>B</kbd></td>
		</tr>
		<tr>
			<td>選択したテキストを斜体に</td>
			<td><kbd>Ctrl</kbd>+<kbd>I</kbd></td>
			<td><kbd>⌘</kbd><kbd>I</kbd></td>
		</tr>
		<tr>
			<td>選択したテキストに下線</td>
			<td><kbd>Ctrl</kbd>+<kbd>U</kbd></td>
			<td><kbd>⌘</kbd><kbd>U</kbd></td>
		</tr>
		<tr>
			<td>選択したテキストをリンクに</td>
			<td><kbd>Ctrl</kbd>+<kbd>K</kbd></td>
			<td><kbd>⌘</kbd><kbd>K</kbd></td>
		</tr>
		<tr>
			<td>リンクを削除</td>
			<td><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd></td>
			<td><kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd></td>
		</tr>
		<tr>
			<td>選択したテキストに取消し線</td>
			<td><kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>D</kbd></td>
			<td><kbd>⌃</kbd><kbd>⌥</kbd><kbd>D</kbd></td>
		</tr>
		<tr>
			<td>選択したテキストをモノスペースフォントに</td>
			<td><kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>X</kbd></td>
			<td><kbd>⌃</kbd><kbd>⌥</kbd><kbd>X</kbd></td>
		</tr>
	</tbody>
</table>

<!-- 
Here is a brief animation illustrating how to find and use the keyboard shortcuts:

![GIF showing how to access keyboard shortcuts](https://make.wordpress.org/core/files/2020/07/keyboard-shortcuts.gif)
 -->
キーボードショートカットを見つけて利用する方法を示した簡単なアニメーションを用意しました:

![GIF showing how to access keyboard shortcuts](https://make.wordpress.org/core/files/2020/07/keyboard-shortcuts.gif)

### Markdown 記法

キーボードショートカットとは異なりますが、編集画面で以下の文字列を入力した後にスペースを入力、または Enter キーを押すと自動的に対応するブロックに変換されます。

<table>
	<thead>
		<tr>
			<th>文字列</th>
			<th>ブロック</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>##</td>
			<td>見出し H2</td>
		</tr>
		<tr>
			<td>###</td>
			<td>見出し H3</td>
		</tr>
		<tr>
			<td>####</td>
			<td>見出し H4</td>
		</tr>
		<tr>
			<td>- (マイナス) または *</td>
			<td>箇条書きのリスト</td>
		</tr>
		<tr>
			<td>1.</td>
			<td>番号付きのリスト</td>
		</tr>
		<tr>
			<td>></td>
			<td>引用</td>
		</tr>
		<tr>
			<td>` と ` で囲む</td>
			<td>インラインのコード</td>
		</tr>
		<tr>
			<td>``` に続けて Enter</td>
			<td>ソースコード</td>
		</tr>
		<tr>
			<td>--- に続けて Enter</td>
			<td>区切り線</td>
		</tr>
	</tbody>
</table>

<!-- 
## Is Gutenberg built on top of TinyMCE?

No. [TinyMCE](https://www.tinymce.com/) is only used for the "Classic" block.
 -->
## Gutenberg は TinyMCE 上で構築されていますか ?

いいえ。[TinyMCE](https://www.tinymce.com/) は「クラシック」ブロックでのみ使用されます。

<!-- 
## What browsers does Gutenberg support?

Gutenberg works in modern browsers, and Internet Explorer 11.

Our [list of supported browsers can be found in the Make WordPress handbook](https://make.wordpress.org/core/handbook/best-practices/browser-support/). By “modern browsers” we generally mean the *current and past two versions* of each major browser.
 -->
## Gutenberg はどのブラウザをサポートしていますか ?

Gutenberg はモダンブラウザーおよび Internet Explorer 11 で動作します。

[Make WordPress handbook に対応ブラウザーの一覧があります](https://make.wordpress.org/core/handbook/best-practices/browser-support/)。「モダンブラウザー」とは、一般にメジャーなブラウザーの最新および過去の2バージョンを意味します。

<!-- 
## How do I make my own block?

The best place to start is the [Create a Block Tutorial](https://developer.wordpress.org/block-editor/tutorials/create-block/). 
 -->
## 自分のブロックを作るには、どうすればよいですか ?

もっとも良いスタート地点は [ブロックの作成 チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/) です。

<!-- 
## Does Gutenberg involve editing posts/pages in the front-end?

No, we are designing Gutenberg primarily as a replacement for the post and page editing screens. That said, front-end editing is often confused with an editor that looks exactly like the front end. And that is something that Gutenberg will allow as themes customize individual blocks and provide those styles to the editor. Since content is designed to be distributed across so many different experiences—from desktop and mobile to full-text feeds and syndicated article platforms—we believe it's not ideal to create or design posts from just one front-end experience.
 -->
## Gutenberg にはフロントエンドからの投稿やページの編集も含まれますか ?

いいえ。Gutenberg は主として投稿やページの編集画面の代替としてデザインされています。「フロントエンド編集」はしばしば「フロントエンドとまったく同じように見えるエディター」と混同されます。Gutenberg ではテーマが個々のブロックをカスタマイズしてエディターをスタイリングできます。コンテンツは、デスクトップやモバイル、全文フィード、配信記事プラットフォームなど多くの異なるエクスペリエンス用に配布されるため、1つのフロントエンドエクスペリエンスから投稿を作成したりデザインすることは理想的ではありません。

<!-- 
## Given Gutenberg is built in JavaScript, how do old meta boxes (PHP) work?

See the [Meta Box Tutorial](https://developer.wordpress.org/block-editor/tutorials/metabox/) for more information on using Meta boxes with the new block editor.
 -->
## Gutenberg は JavaScript で構築されていますが、過去のメタボックス (PHP) はどのように作動しますか ?

新しいブロックエディターでのメタボックスの使用についての詳細は [メタボックスチュートリアル](https://ja.wordpress.org/team/handbook/block-editor/tutorials/metabox/  https://developer.wordpress.org/block-editor/how-to-guides/metabox/) を参照してください。

<!-- 
## How can plugins extend the Gutenberg UI?

The main extension point we want to emphasize is creating new blocks. Blocks are added to the block editor using plugins, see the [Create a Block Tutorial](https://developer.wordpress.org/block-editor/tutorials/create-block/) to get started.
 -->
## プラグインは Gutenberg UI をどうやって拡張できますか ?

強調したいメインの拡張ポイントは新しいブロックの作成です。ブロックはプラグインを使用してブロックエディターに追加されます。入門としては [ブロックの作成 チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/tutorials/handbook/create-block/) を参照してください。

<!-- 
## Are Custom Post Types still supported?

Indeed. There are multiple ways in which custom post types can leverage Gutenberg. The plan is to allow them to specify the blocks they support, as well as defining a default block for the post type. It's not currently the case, but if a post type disables the content field, the “advanced” section at the bottom would fill the page.
 -->
## カスタム投稿タイプはまだサポートされますか ?

もちろんです。カスタム投稿タイプが Gutenberg を活用できる方法には複数あります。計画では、カスタム投稿タイプでサポートするブロックを指定したり、デフォルトのブロックを定義できるようにします。現在はまだ未実装ですが、投稿タイプがコンテンツフィールドを無効にすれば、下部の「上級者向け」セクションがページを埋めるようになります。

<!-- 
## Does Gutenberg support columns?

Yes, a columns block is available in Gutenberg.
 -->
## Gutenberg はカラムをサポートしますか ?

はい。「カラム」ブロックを利用可能です。

<!-- ## Does Gutenberg support nested blocks?

Yes, it is supported. You can have multiple levels of nesting – blocks within blocks within blocks. See the [Nested Block Tutorial](https://developer.wordpress.org/block-editor/tutorials/block-tutorial/nested-blocks-inner-blocks/) for more information.
 -->
## Gutenberg は入れ子のブロックをサポートしますか ?

はい、サポートします。複数レベルの入れ子もサポートします。たとえばブロックの中のブロックの中のブロック。詳細については [チュートリアルのネストしたブロック](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/) を参照してください。

<!-- 
## Does drag and drop work for rearranging blocks?

Yes, you can drag and drop blocks to rearrange their order.
 -->
## ドラッグ & ドロップでブロックを並べ替えられますか ?

はい。ブロックをドラッグ & ドロップして並べ替えることができます。

<!-- 
## Can themes _style_ blocks?

Yes. Blocks can provide their own styles, which themes can add to or override, or they can provide no styles at all and rely fully on what the theme provides.
 -->
## テーマからブロックに_スタイル_を当てられますか ?

はい。ブロックは自身のスタイルを提供でき、テーマはここに追加したり上書きできます。または、ブロック側ではスタイルをまったく提供せず、テーマが用意したスタイルに完全に依存することもできます。

<!-- 
## How do block styles work in both the front-end and back-end?

Blocks are able to provide base structural CSS styles, and themes can add styles on top of this. Some blocks, like a Separator (`<hr/>`), likely don't need any front-end styles, while others, like a Gallery, need a few.

Other features, like the new _wide_ and _full-wide_ alignment options, are simply CSS classes applied to blocks that offer this alignment. We are looking at how a theme can opt in to this feature, for example using `add_theme_support`.

This is currently a work in progress and we recommend reviewing the [block based theme documentation](/docs/how-to-guides/block-based-theme/README.md) to learn more.
 -->
## ブロックスタイルはフロントエンドとバックエンドの両方でどのように動作しますか ?

ブロックはベースの構造的 CSS スタイルを提供することができ、テーマはその上にスタイルを追加できます。たとえば区切り線 (`<hr/>`) のようなブロックではフロントエンドスタイルは必要ありませんが、ギャラリーなどではいくらか必要になるでしょう。

その他の機能、例えば新しい_幅広_と_全幅_配置オプションは、ブロックに適用されて配置するだけの単純な CSS クラスです。現在、例えば `add_theme_support` を使ってテーマがこの機能にオプトインする方法を模索中です。

現在も作業中です。詳細については[ブロックベーステーマのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-based-themes/)のレビューを推奨します。

<!-- 
## What are block variations? Are they the same as block styles?
 -->
## ブロックバリエーションとは何ですか ? ブロックスタイルと同じものですか ?

<!-- 
No, [block variations](/docs/reference-guides/block-api/block-variations.md) are different versions of a single base block, sharing a similar functionality, but with slight differences in their implementation, or settings (attributes, InnerBlocks,etc). Block variations are transparent for users, and once there is a registered block variation, it will appear as a new block. For example, the `embed` block registers different block variations to embed content from specific providers.
 -->
違います。[ブロックバリエーション](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-variations/)は、単一のベースとなるブロックの異なるバージョンです。同じような機能を共有しますが、実装や設定 (属性、InnerBlock 等) は、かなり異なります。ブロックバリエーションをユーザーが意識することはなく、登録されたブロックバリエーションは新しいブロックとして出現します。たとえば `embed` ブロックは、複数の特定プロバイダーからのコンテンツを埋め込むために、異なるブロックバリエーションを登録します。

<!-- 
Meanwhile, [block styles](/docs/reference-guides/filters/block-filters.md#block-style-variations) allow you to provide alternative styles to existing blocks, and they work by adding a className to the block’s wrapper. Once a block has registered block styles, a block style selector will appear in its sidebar so that users can choose among the different registered styles.
 -->
一方、[ブロックスタイル](https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#block-style-variations) を使用すると既存のブロックに代替のスタイルを提供できます。これは、ブロックのラッパーに classsName を追加することで動作します。ブロックに登録済みのブロックスタイルがあると、サイドバーにブロックスタイルセレクタが表示され、ユーザーは異なる登録済みスタイルを選択できます。

<!-- 
## How do editor styles work?

Regular editor styles are opt-in and work as is in most cases. Themes can also load extra stylesheets by using the following hook:
 -->
## エディタースタイルはどのように動作しますか ?

通常のエディタースタイルはオプトイン方式であり、ほとんどのケースで動作します。テーマはまた以下のフックを使用して追加のスタイルシートを読み込むこともできます。

```php
function gutenbergtheme_editor_styles() {
    wp_enqueue_style( 'gutenbergtheme-blocks-style', get_template_directory_uri() . '/blocks.css');
}
add_action( 'enqueue_block_editor_assets', 'gutenbergtheme_editor_styles' );
```
<!-- 
*See:* [Editor Styles](/docs/how-to-guides/themes/theme-support.md#editor-styles)
 -->
*参照:* [エディタースタイル](https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#editor-styles)

<!-- 
## Should I be concerned that Gutenberg will make my plugin obsolete?

The goal of Gutenberg is not to put anyone out of business. It's to evolve WordPress so there's more business to be had in the future, for everyone.

Aside from enabling a rich post and page building experience, a meta goal is to _move WordPress forward_ as a platform. Not only by modernizing the UI, but by modernizing the foundation.

We realize it's a big change. We also think there will be many new opportunities for plugins. WordPress is likely to ship with a range of basic blocks, but there will be plenty of room for highly tailored premium plugins to augment existing blocks or add new blocks to the mix.
 -->
## Gutenberg が私のプラグインを時代遅れにするかもしれない、と心配すべきですか ?

Gutenberg のゴールは、誰かを失職させることではありません。ゴールは、WordPress を進化させ、将来的にすべての人に対してより多くの仕事を生み出すことです。

リッチな投稿とページ構築体験を可能にすること以外に、メタ的なゴールはプラットフォームとしての「WordPress を前進させること」です。UI をモダン化するだけではなく、基盤もモダンなものにすることによってです。

これが大きな変化であることは認識しています。同時に、プラグインに多くの新しい機会がもたらされるだろうとも思います。WordPress には様々な基本的なブロックが含まれる見込みですが、特定の状況に高度に対応したプレミアムプラグインが既存のブロックを拡張したり、新しいブロックを追加したりするための余地もあるでしょう。

<!-- 
## Is it possible to opt out of Gutenberg for my site?

There is a “Classic” block, which is virtually the same as the current editor, except in block form.

There is also the [Classic Editor plugin](https://wordpress.org/plugins/classic-editor/) which restores the previous editor, see the plugin for more information. The WordPress Core team has committed to supporting the Classic Editor plugin [until December 2021](https://make.wordpress.org/core/2018/11/07/classic-editor-plugin-support-window/).
 -->
## 自分のサイトで Gutenberg を使わないようにすることはできますか ?

「クラシック」ブロックがあります。ブロックの形式であること以外、事実上従来のエディターと同じです。

従来のエディターに戻す [Classic Editor プラグイン](https://wordpress.org/plugins/classic-editor/) もあります。詳細についてはプラグインのページを参照してください。WordPress コアチームは Classic Editor プラグインを[2021年12月まで](https://make.wordpress.org/core/2018/11/07/classic-editor-plugin-support-window/)サポートすることをコミットしました。

<!-- 
## How do custom TinyMCE buttons work in Gutenberg?

Custom TinyMCE buttons still work in the “Classic” block, which is a block version of the classic editor you know today.

Gutenberg comes with a new universal inserter tool, which gives you access to every block available, searchable, sorted by recency and categories. This inserter tool levels the playing field for every plugin that adds content to the editor, and provides a single interface to learn how to use.
 -->
## カスタム TinyMCE ボタンは Gutenberg 内で動作しますか ?

カスタム TinyMCE ボタンは「クラシック」ブロックで動作します。「クラシック」ブロックは従来のクラシックエディターのブロック版です。

Gutenberg には新しい共通の挿入ツールが含まれます。利用可能なすべてのブロックにアクセスしたり、検索して最近の利用やカテゴリーでソートできます。この挿入ツールはエディターにコンテンツを追加するすべてのプラグインに対して条件を平等にし、使い方を習得するただ1つのインターフェイスを提供します。

<!-- 
## How do shortcodes work in Gutenberg?

Shortcodes continue to work as they do now.

However we see the block as an evolution of the `[shortcode]`. Instead of having to type out code, you can use the universal inserter tray to pick a block and get a richer interface for both configuring the block and previewing it. We would recommend people eventually upgrade their shortcodes to be blocks.
 -->
## Gutenberg ではショートコードはどのように動作しますか ?

ショートコードはこれまでと同じように動作し続けます。

ただし、私たちはブロックを `[shortcode]` の進化系として見ています。コードをタイプする代わりに、全体で共通の挿入ツールのトレーを使ってブロックを選択し、設定やプレビューが可能なリッチな UI を手に入れることができます。最終的には、ショートコードをブロックにアップグレードすることを推奨します。

<!-- 
## Should I move shortcodes to content blocks?

We think so for a variety of reasons including but not limited to:

- Blocks have visual editing built-in which creates a more rich, dynamic experience for building your site.
- Blocks are simply html and don’t persist things the browser doesn't understand on the frontend. In comparison, if you disable a plugin that powers a shortcode, you end up with strange visuals on the frontend (often just showing the shortcode in plain text).
- Blocks will be discovered more readily with the launch of the block directory in a way shortcodes never could be allowing for more people to get more functionality. 

Ultimately, Blocks are designed to be visually representative of the final look, and, with the launch of the Block Directory in 5.5, they will become the expected way in which users will discover and insert content in WordPress.
 -->
## ショートコードをコンテンツブロックに移行すべきですか ?

さまざまな理由により移行すべきと考えます。理由は以下に限りません。

- ブロックには組み込みのビジュアルな編集機能があり、サイトの構築においてよりリッチで動的なエクスペリエンスを作成します。
- ブロックは単純な HTML であり、ブラウザーが理解できないフロントエンド上の何かを求めません。一方、ショートコードは実装するプラグインを無効化するとフロントエンドに奇妙なビジュアル、一般にはプレインテキストで記述されたショートコードが表示されます。
- ブロックディレクトリーがサポートされると機能を追加したいユーザーはブロックをより簡単に見つけられます。ショートコードでは決して実現できない方法です。

最終的には、ブロックは見た目のビジュアルな表現となるようデザインされています。バージョン 5.5 でサポートされるブロックディレクトリーはユーザーが WordPress でコンテンツを発見し、挿入する際の通常の方法となるでしょう。

<!-- 
## Is Gutenberg made to be properly accessible?

Accessibility is not an afterthought. Not every aspect of Gutenberg is accessible at the moment. You can check logged issues [here](https://github.com/WordPress/gutenberg/labels/Accessibility%20%28a11y%29). We understand that WordPress is for everyone, and that accessibility is about inclusion. This is a key value for us.

If you would like to contribute to the accessibility of Gutenberg, we can always use more people to test and contribute.
 -->
## Gutenberg は適切にアクセシビリティに対応して作成されていますか ?

アクセシビリティは後から付け足すものではありません。現在、Gutenberg のすべてがアクセシブルであるとは言えず、イシューの記録は[こちら](https://github.com/WordPress/gutenberg/labels/Accessibility%20%28a11y%29)で確認できます。WordPress はすべての人のためのものであることを理解しており、アクセシビリティとはインクルージョンのことです。これは私たちにとって重要な価値観です。

Gutenberg のアクセシビリティに貢献したい方は、テストの実施をしたりコードを書いてくれる人を常に募集していますのでぜひご参加ください。

<!-- 
## How is data stored? I've seen HTML comments, what is their purpose?

Our approach—as outlined in [the technical overview introduction](https://make.wordpress.org/core/2017/01/17/editor-technical-overview/)—is to augment the existing data format in a way that doesn’t break the decade-and-a-half-fabric of content WordPress provides. In other terms, this optimizes for a format that prioritizes human readability (the HTML document of the web) and easy-to-render-anywhere over a machine convenient file (JSON in post-meta) that benefits the editing context primarily.

This also [gives us the flexibility](https://github.com/WordPress/gutenberg/issues/1516) to store those blocks that are inherently separate from the content stream (reusable pieces like widgets or small post type elements) elsewhere, and just keep token references for their placement.

We suggest you look at the [Gutenberg key concepts](/docs/getting-started/architecture/key-concepts.md) to learn more about how this aspect of the project works.
 -->
## データはどのように保存されますか ? HTML コメントを見かけましたが、この目的はなんでしょう ?

[技術概要のイントロダクション](https://make.wordpress.org/core/2017/01/17/editor-technical-overview/)で解説したように私たちのアプローチは、15年間 WordPress で積み重ねられてきたコンテンツを壊さない方法で既存のデータ形式を拡張します。つまり、主に編集コンテキストで利点のある投稿メタ内の JSON のような機械的に便利なファイルよりも、Web の HTML 文書のように人間の可読性やレンダリングの容易性を優先した形式で最適化します。

これはまた、ウィジェットや小さな投稿タイプ要素の再利用可能なパーツであるコンテンツストリームから本質的にブロックを分離してどこかに保存し、代わりにその場所へトークンリファレンスのみを保持するという[柔軟性を与えます](https://github.com/WordPress/gutenberg/issues/1516)。

プロジェクトのこの部分がどのように動作するかをより深く理解するには、[Gutenberg キーコンセプト](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/key-concepts/)を参照してください。

<!-- 
## How can I parse the post content back out into blocks in PHP or JS?
In JS:
 -->
## 投稿コンテンツを PHP または JS でパースして返すにはどうすればよいですか ?

JS の場合:

```js
var blocks = wp.blocks.parse( postContent );
```
<!-- 
In PHP:
 -->
PHP の場合:

```php
$blocks = parse_blocks( $post_content );
```
<!-- 
## WordPress is already the world's most popular publishing platform. Why change the editor at all?

The Editor is where most of the action happens in WordPress’s daily use, and it was a place where we could polish and perfect the block experience in a contained environment. Further, as an open-source project, we believe that it is critical for WordPress to continue to innovate and keep working to make the core experience intuitive and enjoyable for all users. As a community project, Gutenberg has the potential to do just that, and we’re excited to pursue this goal together. If you’d like to test, contribute, or offer feedback, we welcome you to [share what you find on GitHub](https://github.com/WordPress/gutenberg/issues). 
 -->
## WordPress は既に、世界で最も人気のあるパブリッシングプラットフォームです。エディターをどうして変えなくてはならなかったのですか ?

エディターは日々の WordPress の使用においてもっとも多くの操作が行われる場所であり、環境としてブロックエクスペリエンスを改良し、完璧なものにできる場所です。またオープンソースプロジェクトとして、WordPress は革新を続け、すべてのユーザーにとってコアエクスペリエンスを直感的で楽しめるものにするために努力し続けることが重要であると考えています。コミュニティプロジェクトとして、Gutenberg はまさにそれを実行できる可能性があり、この目標を一緒に追求することにワクワクしています。テスト、貢献、フィードバックがあれば、[GitHub での共有](https://github.com/WordPress/gutenberg/issues)を歓迎します。

## 問い合わせ先
ブロックエディターハンドブックへのコメントは [WordPress の 日本語 Slack](https://ja.wordpress.org/support/article/slack/) 内の #docs チャンネル、[フォーラム > その他](https://ja.wordpress.org/support/forum/miscellaneous/)、または以下のリポジトリへお願いします。

### 参照
- [英語版ブロックエディターハンドブック](https://developer.wordpress.org/block-editor/)
- [英語版リポジトリ](https://github.com/WordPress/gutenberg)
- [日本語版リポジトリ](https://github.com/jawordpressorg/gutenberg)

[原文](https://github.com/WordPress/gutenberg/blob/HEAD/docs/getting-started/faq.md)
