<!--
# Frequently Asked Questions

This initial set of questions was created when the Gutenberg project was relatively new, for a more recent set of questions, please see Matt's November 2018 post [WordPress 5.0: A Gutenberg FAQ](https://ma.tt/2018/11/a-gutenberg-faq/).

## What is Gutenberg?

“Gutenberg” is the name of the project to create a new editor experience for WordPress. The goal is to create a new post and page editing experience that makes it easy for anyone to create rich post layouts. This was the kickoff goal:

> The editor will endeavour to create a new page and post building experience that makes writing rich posts effortless, and has “blocks” to make it easy what today might take shortcodes, custom HTML, or “mystery meat” embed discovery.

Key takeaways include the following points:

- Authoring richly laid-out posts is a key strength of WordPress.
- By embracing blocks as an interaction paradigm, we can unify multiple different interfaces into one. Instead of learning how to write shortcodes and custom HTML, or pasting URLs to embed media, there's a common, reliable flow for inserting any kind of content.
- “Mystery meat” refers to hidden features in software, features that you have to discover. WordPress already supports a large number of blocks and 30+ embeds, so let's surface them.

Gutenberg is being developed on [GitHub](https://github.com/WordPress/gutenberg) under the WordPress organization, and you can use it today — [available in the plugin repository](https://wordpress.org/plugins/gutenberg/).

## When will Gutenberg be merged into WordPress?

Gutenberg was merged into [WordPress 5.0](https://wordpress.org/news/2018/12/bebo/) that was released in December 2018.

The editor focus started in early 2017 with the first three months spent designing, planning, prototyping, and testing prototypes, to help us inform how to approach this project. The actual plugin, which you can install from the repository, was launched during WordCamp Europe in June.

## What are “blocks” and why are we using them?

The current WordPress editor is an open text window—it’s always been a wonderful blank canvas for writing, but when it comes to building posts and pages with images, multimedia, embedded content from social media, polls, and other elements, it required a mix of different approaches that were not always intuitive:

- Media library/HTML for images, multimedia and approved files.
- Pasted links for embeds.
- `Shortcodes` for specialized assets from plugins.
- Featured images for the image at the top of a post or page.
- Excerpts for subheadings.
- Widgets for content on the side of a page.

As we thought about these uses and how to make them obvious and consistent, we began to embrace the concept of “blocks.” All of the above items could be blocks: easy to search and understand, and easy to dynamically shift around the page. The block concept is very powerful, and if designed thoughtfully, can offer an outstanding editing and publishing experience.

## What is the writing experience like?

Our goal with Gutenberg is not just to create a seamless post- and page-building experience. We also want to ensure that it provides a seamless writing experience. Though individual paragraphs of text become their own “blocks,” the creation and editing of these blocks are being designed in a way that could be just as simple—if not more so—than the current WordPress editor experience. Here is a brief animation illustrating the Gutenberg writing experience:

![Typing](https://make.wordpress.org/core/files/2017/10/gutenberg-typing-1_6.gif)

## Are there Keyboard Shortcuts for Gutenberg?

Yes. There are a lot! There is a help modal showing all available keyboard shortcuts.

You can see the whole list going to the top right corner menu of the new editor and clicking on “Keyboard Shortcuts” (or by using the keyboard shortcut <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>H</kbd> on Linux/Windows and <kbd>⌃</kbd><kbd>⌥</kbd><kbd>H</kbd> on macOS).

This is the canonical list of keyboard shortcuts:

### Editor shortcuts

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
			<td>Navigate to a the next part of the editor.</td>
			<td><kbd>Ctrl</kbd>+<kbd>`</kbd></td>
			<td><kbd>⌃</kbd><kbd>`</kbd></td>
		</tr>
		<tr>
			<td>Navigate to the previous part of the editor.</td>
			<td><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>`</kbd></td>
			<td><kbd>⌃</kbd><kbd>⇧</kbd><kbd>`</kbd></td>
		</tr>
		<tr>
			<td>Navigate to a the next part of the editor (alternative).</td>
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
	</tbody>
</table>

### Selection shortcuts

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
			<td>Change the block type after adding a new paragraph.</td>
			<td><kbd>/</kbd></td>
			<td><kbd>/</kbd></td>
		</tr>
	</tbody>
</table>

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

Here is a brief animation illustrating how to find and use the keyboard shortcuts:

![GIF showing how to access keyboard shortcuts](https://make.wordpress.org/community/files/2018/08/gutenberg-keyboard-shortcuts.gif)

## Is Gutenberg built on top of TinyMCE?

No. [TinyMCE](https://www.tinymce.com/) is only used for the "Classic" block.

## What browsers does Gutenberg support?

Gutenberg works in modern browsers, and Internet Explorer 11.

Our [list of supported browsers can be found in the Make WordPress handbook](https://make.wordpress.org/core/handbook/best-practices/browser-support/). By “modern browsers” we generally mean the *current and past two versions* of each major browser.

## How do I make my own block?

The API for creating blocks is a crucial aspect of the project. We are working on improved documentation and tutorials. Check out the [Creating Block Types](/docs/designers-developers/developers/tutorials/block-tutorial/readme.md) section to get started.

## Does Gutenberg involve editing posts/pages in the front-end?

No, we are designing Gutenberg primarily as a replacement for the post and page editing screens. That said, front-end editing is often confused with an editor that looks exactly like the front end. And that is something that Gutenberg will allow as themes customize individual blocks and provide those styles to the editor. Since content is designed to be distributed across so many different experiences—from desktop and mobile to full-text feeds and syndicated article platforms—we believe it's not ideal to create or design posts from just one front-end experience.

## Given Gutenberg is built in JavaScript, how do old meta boxes (PHP) work?

We plan to continue supporting existing meta boxes while providing new ways to extend the interface.

*See:* [Pull request #2804](https://github.com/WordPress/gutenberg/pull/2804)

## How can plugins extend the Gutenberg UI?

The main extension point we want to emphasize is creating new blocks. We are still working on how to extend the rest of the UI that is built in JS. We are tracking it here: [Issue #1352](https://github.com/WordPress/gutenberg/issues/1352)

## Are Custom Post Types still supported?

Indeed. There are multiple ways in which custom post types can leverage Gutenberg. The plan is to allow them to specify the blocks they support, as well as defining a default block for the post type. It's not currently the case, but if a post type disables the content field, the “advanced” section at the bottom would fill the page.

## Does Gutenberg support columns?

Yes, a columns block is available in Gutenberg.

## Does Gutenberg support nested blocks?

Yes, it is supported. You can have multiple levels of nesting – blocks within blocks within blocks.

## Does drag and drop work for rearranging blocks?

Yes, you can drag and drop blocks to rearrange their order.

## Can themes _style_ blocks?

Yes. Blocks can provide their own styles, which themes can add to or override, or they can provide no styles at all and rely fully on what the theme provides.

## How do block styles work in both the front-end and back-end?

Blocks are able to provide base structural CSS styles, and themes can add styles on top of this. Some blocks, like a Separator (`<hr/>`), likely don't need any front-end styles, while others, like a Gallery, need a few.

Other features, like the new _wide_ and _full-wide_ alignment options, are simply CSS classes applied to blocks that offer this alignment. We are looking at how a theme can opt in to this feature, for example using `add_theme_support`.

*See:* [Theme Support](/docs/designers-developers/developers/themes/theme-support.md)

## How do editor styles work?

Regular editor styles are opt-in and work as is in most cases. Themes can also load extra stylesheets by using the following hook:

```php
function gutenbergtheme_editor_styles() {
    wp_enqueue_style( 'gutenbergtheme-blocks-style', get_template_directory_uri() . '/blocks.css');
}
add_action( 'enqueue_block_editor_assets', 'gutenbergtheme_editor_styles' );
```

*See:* [Editor Styles](/docs/designers-developers/developers/themes/theme-support.md#editor-styles)

## Should I be concerned that Gutenberg will make my plugin obsolete?

The goal of Gutenberg is not to put anyone out of business. It's to evolve WordPress so there's more business to be had in the future, for everyone.

Aside from enabling a rich post and page building experience, a meta goal is to _move WordPress forward_ as a platform. Not only by modernizing the UI, but by modernizing the foundation.

We realize it's a big change. We also think there will be many new opportunities for plugins. WordPress is likely to ship with a range of basic blocks, but there will be plenty of room for highly tailored premium plugins to augment existing blocks or add new blocks to the mix.

## Is it possible to opt out of Gutenberg for my site?

There is a “Classic” block, which is virtually the same as the current editor, except in block form.

There is also the [Classic Editor plugin](https://wordpress.org/plugins/classic-editor/) which restores the previous editor, see the plugin for more information. The WordPress Core team has committed to supporting the Classic Editor plugin [until December 2021](https://make.wordpress.org/core/2018/11/07/classic-editor-plugin-support-window/).


## How do custom TinyMCE buttons work in Gutenberg?

Custom TinyMCE buttons still work in the “Classic” block, which is a block version of the classic editor you know today.

(Gutenberg comes with a new universal inserter tool, which gives you access to every block available, searchable, sorted by recency and categories. This inserter tool levels the playing field for every plugin that adds content to the editor, and provides a single interface to learn how to use.)

## How do shortcodes work in Gutenberg?

Shortcodes continue to work as they do now.

However we see the block as an evolution of the `[shortcode]`. Instead of having to type out code, you can use the universal inserter tray to pick a block and get a richer interface for both configuring the block and previewing it. We would recommend people eventually upgrade their shortcodes to be blocks.

## Should I move shortcodes to content blocks?

We think so. Blocks are designed to be visually representative of the final look, and they will likely become the expected way in which users will discover and insert content in WordPress.

## Is Gutenberg made to be properly accessible?

Accessibility is not an afterthought. Not every aspect of Gutenberg is accessible at the moment. You can check logged issues [here](https://github.com/WordPress/gutenberg/labels/Accessibility). We understand that WordPress is for everyone, and that accessibility is about inclusion. This is a key value for us.

If you would like to contribute to the accessibility of Gutenberg, we can always use more people to test and contribute.

## How is data stored? I've seen HTML comments, what is their purpose?

Our approach—as outlined in [the technical overview introduction](https://make.wordpress.org/core/2017/01/17/editor-technical-overview/)—is to augment the existing data format in a way that doesn’t break the decade-and-a-half-fabric of content WordPress provides. In other terms, this optimizes for a format that prioritizes human readability (the HTML document of the web) and easy-to-render-anywhere over a machine convenient file (JSON in post-meta) that benefits the editing context primarily.

This also [gives us the flexibility](https://github.com/WordPress/gutenberg/issues/1516) to store those blocks that are inherently separate from the content stream (reusable pieces like widgets or small post type elements) elsewhere, and just keep token references for their placement.

We suggest you look at the [Gutenberg key concepts](/docs/designers-developers/key-concepts.md) to learn more about how this aspect of the project works.

## How can I parse the post content back out into blocks in PHP or JS?
In JS:

```js
var blocks = wp.blocks.parse( postContent );
```

In PHP:

```php
$blocks = parse_blocks( $post_content );
```

## Why should I start using this once released?
Blocks are likely to become the main way users interact with content. Users are going to be discovering functionality in the new universal inserter tool, with a richer block interface that provides more layout opportunities.

## What features will be available at launch? What does the post-launch roadmap look like?
As part of the focus on the editor in 2017, a focus on customization and sitebuilding is next. From [the kickoff post](https://make.wordpress.org/core/2017/01/04/focus-tech-and-design-leads/):

> The customizer will help out the editor at first, then shift to bring those fundamental building blocks into something that could allow customization “outside of the box” of post_content, including sidebars and possibly even an entire theme.

With the editor, we lay the foundation for bigger things when it comes to page building and customization.

A lot of features are planned, too many to list here. You can check [Gutenberg's roadmap](https://github.com/WordPress/gutenberg/blob/master/docs/roadmap.md) for more details.

## WordPress is already the world's most popular publishing platform. Why change the editor at all?
As an open-source project, we believe that it is critical for WordPress to continue to innovate and keep working to make the core experience intuitive and enjoyable for all users. As a community project, Gutenberg has the potential to do just that, and we're excited to pursue this goal together. If you'd like to test, contribute, or offer feedback, [we welcome it here](http://wordpressdotorg.polldaddy.com/s/gutenberg-support).
-->

 よくある質問
Topics

    最新英語版
    問い合わせ先

この質問の最初の版は Gutenberg プロジェクトがまだ初期の段階で作られました。その後の質問については Matt の 2018年11月の投稿を参照してください。WordPress 5.0: Gutenberg FAQ
Gutenberg (グーテンベルク) とは ?

「Gutenberg」は、WordPress で新しい編集エクスペリエンスを作り出すためのプロジェクトの名称です。このプロジェクトのゴールとして、投稿や固定ページの編集において新しい体験を作り、誰もがリッチな投稿のレイアウトを作成できるようにします。以下はキックオフ時のゴールです。

    このエディターは、投稿や固定ページの編集における新しい体験の創造に努めます。ユーザーはリッチな投稿を楽に書くことができ、現在、ショートコードやカスタム HTML、「謎に包まれた」埋め込みの検知が担っている部分を「ブロック」で実現します。

重要な点として、以下が挙げられます。

    リッチなレイアウトの投稿を作成できることは WordPress の大きな強みです。
    ブロックをインタラクションのための枠組みとして採用することにより、複数の異なるインターフェースをひとつに統合できます。ショートコードとカスタム HTML の記述方法や、メディアを埋め込むための URL を貼り付けたりする方法を学ぶ代わりに、あらゆる種類のコンテンツを挿入するための共通で安定したフローが確立されます。
    「謎に包まれた」とは、ユーザーが発見する必要があるソフトウェアにおける隠し機能のことを指しています。WordPress はすでに多数のブロックと30種類以上の埋め込みをサポートしていますので、これらを表に出していきましょう。

Gutenberg は GitHub で WordPress organization のプロジェクトとして開発されており、今すぐ使うことができます。プラグインディレクトリで入手できます。
いつ Gutenberg は WordPress に取り込まれますか ?

Gutenberg は2018年12月にリリースされた WordPress 5.0 で取り込まれました。

このプロジェクトへのアプローチ方法を知らせるため、デザイン、計画、プロトタイプ作成そしてテストに焦点を当てて、2017年の初めに3ヶ月かけて開始されました。リポジトリからインストールできる実際のプラグインは、6月の WordCamp Europeで提供が開始されました。
「ブロック」とはなんですか ? なぜこれを使うのですか ?

現在の WordPress 編集画面はオープンなテキストウィンドウです。これまではずっと、執筆向けのすばらしい空白のキャンバスでしたが、画像やマルチメディア、ソーシャルメディアからの埋め込みコンテンツ、投票、その他の要素を含むブログ投稿や固定ページを作る場面では、必ずしも直感的とは言えない異なるアプローチの混在が必要でした。

    画像、マルチメディア、承認された種類のファイルに対しては、メディアライブラリや HTML。
    埋め込みにはリンクのペースト。
    プラグインからの特別なアセットには ショートコード。
    投稿やページ上部の画像にはアイキャッチ画像。
    副見出しには抜粋。
    ページのサイドにあるコンテンツにはウィジェット。

これらを分かりやすく一貫性のあるものにするにはどうすればよいかを考える過程で、「ブロック」というコンセプトを擁するようになりました。ブロックの概念はとても強力であり、よく考えて設計しさえすれば、優れた編集と公開のエクスペリエンスを提供できます。
執筆はどのように行いますか ?

私たちにとっての Gutenberg のゴールは、シームレスな投稿、ページ構築の体験を作り出すことだけではありません。同時に、執筆もシームレスにできるようにしたいのです。個別の文章 (パラグラフ) はそれぞれ「ブロック」になりますが、これらのブロックの作成や編集は従来の WordPress エディターの使い心地と同じか、それ以上にシンプルなものになるようデザインしています。これは、Gutenberg での執筆体験を示す短いアニメーションです。
入力
Gutenberg 用のキーボードショートカットはありますか ?

あります。たくさんあります ! 利用できるすべてのキーボードショートカットを表示するヘルプのモーダル画面も用意しています。

新エディターの右上にあるメニューに行って「キーボードショートカット」をクリックすれば、全一覧を見ることができます (または、Linux/WindowsではShift+Alt+Hキー、macOSでは ⌃⌥Hのキーボードショートカットで表示することもできます)。

こちらが、キーボードショートカットの標準的な一覧です。
エディターショートカット
機能説明	Linux/Windows	macOS
キーボードショートカットを表示	Shift+Alt+H	⌃⌥H
変更を保存	Ctrl+S	⌘S
最後の変更を取り消す	Ctrl+Z	⌘Z
最後の取り消しをやり直す	Ctrl+Shift+Z	⇧⌘Z
設定サイドバーの表示・非表示	Ctrl+Shift+,	⇧⌘,
ブロック移動メニュー表示	Shift+Alt+O	⌃⌥O
エディターの次の部分へ移動	Ctrl+`	⌃`
エディターの前の部分へ移動	Ctrl+Shift+`	⌃⇧`
エディターの次の部分へ移動（別の方法）	Ctrl+Alt+N	⌃⌥N
エディターの前の部分へ移動（別の方法）	Ctrl+Alt+P	⌃⌥P
最も近いツールバーへの移動	Alt+F10	⌥F10
ビジュアールエディターとコードエディター間の切替	Ctrl+Shift+Alt+M	⇧⌥⌘M
選択ショートカット
機能説明	Linux/Windows	macOS
入力時、全てのテキストを選択。もう一度押すと、全てのブロックを選択	Ctrl+A	⌘A
選択を解除	Esc	Esc
ブロック用のショートカット
機能説明	Linux/Windows	macOS
選択したブロックの複製	Ctrl+Shift+D	⇧⌘D
選択したブロックの削除	Shift+Alt+Z	⌃⌥Z
選択したブロックの前に新規ブロックを挿入	Ctrl+Alt+T	⌥⌘T
選択したブロックの後に新規ブロックを挿入	Ctrl+Alt+Y	⌥⌘Y
新規段落追加後のブロックタイプ変更	/	/
テキスト書式
機能説明	Linux/Windows	macOS
選択したテキストを太字に	Ctrl+B	⌘B
選択したテキストを斜体に	Ctrl+I	⌘I
選択したテキストに下線	Ctrl+U	⌘U
選択したテキストをリンクに	Ctrl+K	⌘K
リンクを削除	Ctrl+Shift+K	⇧⌘K
選択したテキストに取消し線	Shift+Alt+D	⌃⌥D
選択したテキストをモノスペースフォントに	Shift+Alt+X	⌃⌥X

キーボードショートカットを見つけて利用する方法を示した簡単なアニメーションを用意しました:
GIF showing how to access keyboard shortcuts
Markdown 記法

キーボードショートカットとは異なりますが、編集画面で以下の文字列を入力した後にスペースを入力、または Enter キーを押すと自動的に対応するブロックに変換されます。
文字列	ブロック
##	見出し H2
###	見出し H3
####	見出し H4
- (マイナス) または *	箇条書きのリスト
1.	番号付きのリスト
>	引用
` と ` で囲む	インラインのコード
``` に続けて Enter	ソースコード
--- に続けて Enter	区切り線
Gutenberg は TinyMCE 上で構築されていますか ?

いいえ。TinyMCE は「クラシック」ブロックのみで使用されます。
Gutenberg はどのブラウザをサポートしていますか ?

Gutenberg はモダンブラウザーおよび Internet Explorer 11 で動作します。

Make WordPress handbook に対応ブラウザーの一覧があります「モダンブラウザー」とは、一般にメジャーなブラウザーの最新および過去の2バージョンを意味します。
自分のブロックを作るには、どうすればよいですか ?

ブロック作成用の API は、このプロジェクトの重要な側面です。ドキュメンテーションとチュートリアルの改善に努めています。スタートするには、ブロックタイプの作成 セクションをご覧ください。
Gutenberg にはフロントエンドからの投稿やページの編集も含まれますか ?

いいえ。当面は投稿やページの編集画面の代替として Gutenberg をデザインしています。とは言え、フロントエンド編集は、フロントエンドとまったく同じに見えるエディターとよく混同されます。将来的にはテーマが個々のブロックをカスタマイズし、エディターにスタイルを提供することで、Gutenberg でもそうした編集が可能になるでしょう。コンテンツはデスクトップやモバイルから全文フィード、配信記事プラットフォームまで多くの異なるエクスペリエンスにわたって配布できるよう設計されています。このため、ただ1つのフロントエンドでの編集から種々の投稿を作成、デザインできるはずだと考えています。
Gutenberg は JavaScript で構築されていますが、過去のメタボックス (PHP) はどのように作動しますか ?

インターフェースを拡張する新しい方法を提供すると同時に、既存のメタボックスのサポートも継続していく予定です。

参照: PR #2804
プラグインは Gutenberg UI をどうやって拡張できますか ?

現在力を入れている主な拡張ポイントは、新規ブロックの作成です。その他の JavaScript で構築された UI を拡張する方法についてはまだ作業中です。こちらでトラッキングしています。Issue #1352
カスタム投稿タイプには対応予定ですか ?

もちろんです。カスタム投稿タイプが Gutenberg を活用できる方法には複数あります。計画では、カスタム投稿タイプでサポートするブロックを指定したり、デフォルトのブロックを定義できるようにします。現在はまだ未実装ですが、投稿タイプがコンテンツフィールドを無効にすれば、下部の「上級者向け」セクションがページを埋めるようになります。
Gutenberg はカラムをサポートしますか ?

はい。「カラム」ブロックを利用可能です。
Gutenberg は入れ子のブロックをサポートしますか ?

はい、サポートします。複数レベルの入れ子もサポートします。たとえばブロックの中のブロックの中のブロック。
ドラッグ & ドロップでブロックを並べ替えられますか ?

はい。ブロックをドラッグ & ドロップして並べ替えることができます。
テーマからブロックに_スタイル_を当てられますか ?

はい。ブロックは自身のスタイルを提供でき、テーマはそこにスタイルを追加したり、上書きできます。または、ブロック側ではスタイルをまったく提供せず、テーマが用意したスタイルに完全に依存することもできます。
ブロックスタイルはフロントエンドとバックエンドでどう動作しますか ?

ブロックはベースの構造的 CSS スタイルを提供することができ、テーマはそこにスタイルを追加できます。ブロックによりたとえば区切り線 (<hr/>) ではフロントエンドスタイルは必要ないでしょうが、ギャラリーではいくらか必要になるでしょう。

その他の機能、例えば新しい_幅広_と_全幅_配置オプションは、ブロックに適用されて配置するだけの単純な CSS クラスです。現在、例えば add_theme_support を使ってテーマがこの機能にオプトインする方法を模索中です。

参照: テーマサポート
エディタースタイルはどう動作しますか ?

常のエディタースタイルはオプトイン方式であり、ほとんどのケースで動作するでしょう。テーマはまた以下のフックを使用して追加のスタイルシートを読み込むこともできます。

function gutenbergtheme_editor_styles() {
    wp_enqueue_style( 'gutenbergtheme-blocks-style', get_template_directory_uri() . '/blocks.css');
}
add_action( 'enqueue_block_editor_assets', 'gutenbergtheme_editor_styles' );

参照: エディタースタイル
Gutenberg が自分のプラグインを時代遅れにするかもしれない、と心配をすべきですか ?

Gutenberg のゴールは、誰かを失職させることではありません。ゴールは、WordPress を進化させ、将来的にすべての人に対してより多くの仕事を生み出すことです。

リッチな投稿とページ構築体験を可能にすること以外に、メタ的なゴールはプラットフォームとしての「WordPress を前進させること」です。UI をモダン化するだけではなく、基盤もモダンなものにすることによってです。

これが大きな変化であることは認識しています。同時に、プラグインに多くの新しい機会がもたらされるだろうとも思います。WordPress には様々な基本的なブロックが含まれる見込みですが、特定の状況に高度に対応したプレミアムプラグインが既存のブロックを拡張したり、新しいブロックを追加したりするための余地もあるでしょう。
自分のサイトで Gutenberg を使わないようにすることはできますか ?

ブロック形式であること以外、事実上従来のエディターと同じ「クラシック」ブロックがあります。

従来のエディターに戻す Classic Editor プラグイン もあります。詳細についてはプラグインのページを参照してください。WordPress コアチームは Classic Editor プラグインを2021年12月までサポートすることをコミットしました。
カスタム TinyMCE ボタンは Gutenberg 内で動作しますか ?

カスタム TinyMCE ボタンは「クラシック」ブロックで動作します。「クラシック」ブロックは従来のクラシックエディターのブロック版です。

Gutenberg には新しい共通の挿入ツールが含まれます。利用可能なすべてのブロックにアクセスしたり、検索して最近の利用やカテゴリーでソートできます。この挿入ツールはエディターにコンテンツを追加するすべてのプラグインに対して条件を平等にし、使い方を習得する単一のインターフェイスを提供します)
Gutenberg ではショートコードはどう動作しますか ?

ショートコードはこれまでと同じように動作し続けます。

ただし、私たちはブロックを [shortcode] の進化系として見ています。コードをタイピングする代わりに、全体共通の挿入ツールのトレーを使ってブロックを選び、ブロック設定やプレビューができるリッチな UI を手に入れられます。将来的には開発者の皆さんがショートコードをブロックにアップグレードすることをおすすめします。
ショートコードをコンテンツブロックに移行すべきですか ?

そうすべきだと思います。ブロックは最終的な外観を描写するものとして設計されています。これが、ユーザーがコンテンツを発見したり挿入したりする際に期待する形となる可能性が高いでしょう。
Gutenberg は適切にアクセシビリティに対応する予定ですか ?

アクセシビリティは後から付け足すものではありません。現在、Gutenberg のすべての側面がアクセシブルであるとは言えず、イシューの記録はこちらで確認できます。WordPress はすべての人のためのものであることを理解しており、アクセシビリティとはインクルージョンのことです。これは、私たちにとって重要な価値観です。

Gutenberg のアクセシビリティに貢献したい方は、テストの実施をしたりコードを書いてくれる人を常に募集していますのでぜひご参加ください。
データはどのように保存されていますか ? HTML コメントを見かけましたが、この目的はなんでしょう ?

技術概要のイントロで概説したとおり、私たちのアプローチは、15年間 WordPress で積み重ねられてきたコンテンツを壊さない方法で既存のデータ形式を拡張することです。つまり、人間の可読性 (web 上の HTML ドキュメント) とどこでも簡単にレンダリングできることを優先し、編集のコンテキストに主にメリットがある機械が容易に読み取れるファイル (post-meta 内の JSON) の優先度を下げる形式が最適となることを意味しています。

このことにより、コンテンツストリームからは本質的に切り離されたブロック (ウィジェットや小さな投稿タイプの要素) を他の場所に保存し、配置用のトークンリファレンスのみを保っておくという柔軟性が可能になります。

プロジェクトのこの部分のことをより深く理解するには、Gutenberg キーコンセプトに目を通すことをおすすめします。
投稿コンテンツを PHP または JS でパースして返すにはどうすればよいですか ?

JS の場合:

var blocks = wp.blocks.parse( postContent );

PHP の場合:

$blocks = parse_blocks( $post_content );

リリース後、なぜ使うべきなのですか ?

ブロックはおそらく、ユーザーの皆さんがコンテンツの操作をする主な方法になるでしょう。ユーザーの方は、新しい共通挿入ツールを使って機能を発見することになるはずです。このツールには、レイアウトをさらに拡張できるこれまでよりリッチなブロック UI が含まれます。
ローンチ時にはどういった機能が利用できる予定ですか ? ローンチ後のロードマップは ?

2017年のエディターのフォーカスの一部として、カスタマイズとサイト構築が次のステップです。キックオフ時の投稿より:

    このカスタマイザーでは最初にエディターを支援します。次にこれらの基本的な構築ブロックを、サイドバーや場合によってはテーマ全体を含む post_content などの「(枠にとらわれない) ボックスの外」のカスタマイズを可能にするために移行します。

このエディターによって、ページの構築とカスタマイズにおけるより大きなものの基礎を築きます。

多くの機能が計画中ですが、ここにすべて書くには多すぎます。詳しくは Gutenberg のロードマップをご覧ください。
WordPress は既に、世界で最も人気のあるパブリッシングプラットフォームです。エディターをどうして変えなくてはならなかったのですか ?

オープンソースプロジェクトとして、WordPress は革新を続け、すべてのユーザーにとってコアエクスペリエンスを直感的で楽しめるものにするために努力し続けることが重要であると考えています。コミュニティプロジェクトとして、Gutenberg はまさにそれを実行できる可能性があり、この目標を一緒に追求することにワクワクしています。テスト、貢献、フィードバックなどをここへどうぞ！
最新英語版 #最新英語版

    https://developer.wordpress.org/block-editor/contributors/faq/

Top ↑
問い合わせ先 #問い合わせ先

ハンドブックへのコメントは WordPress の 日本語 Slack 内の #docs チャンネル、または フォーラム > その他 へお願いします。
