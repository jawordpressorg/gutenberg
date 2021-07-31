<!--
# Create a block theme
 -->
# ブロックテーマの作成

<!--
The purpose of this tutorial is to show how to create a block theme and help theme developers transition to full site editing.
 -->
このチュートリアルではブロックテーマの作り方を紹介し、テーマ開発者の「フルサイト編集 (full site editing)」への移行を支援します。

<!--
It is recommended that you first read the [block theme overview](/docs/how-to-guides/themes/block-theme-overview.md).
 -->
まず、はじめに「[ブロックテーマの概要](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/block-theme-overview/)」を読むことをお勧めします。

<!--
You will learn about the required files, how to combine templates and template parts, how to add presets for global styles, and how to add blocks and export the templates in the site editor.
 -->
このチュートリアルでは、ブロックベーステーマに必要なファイルの一覧、テンプレートとテンプレートパーツの組み合わせ、グローバルスタイルへのプリセットの追加、サイトエディターでのブロックの追加とテンプレートのエクスポートについて学びます。

<!--
Full site editing is an experimental feature, and the workflow in this tutorial is likely to change.
 -->
「フルサイト編集」は実験中の機能のため、以下の手順も変わる可能性があります。

<!--
This tutorial is up to date with Gutenberg version 11.0.0.
 -->
このチュートリアルは Gutenberg Version 11.0 時点の最新です。

<!--
## Table of Contents
 -->
## 目次

<!--
1.  [What is needed to create a block-theme?](#what-is-needed-to-create-a-block-theme)
2.  [Theme setup](#theme-setup)
3.  [Creating the templates and template parts](#creating-the-templates-and-template-parts)
4.  [Theme.json - Global styles](#themejson---global-styles)
5.  [Custom templates](#custom-templates)
6.  [Example themes](#example-themes)
 -->
1. ブロックベーステーマを作成するには何が必要か ?
2. テーマのセットアップ
3. テンプレートとテンプレートパーツの作成
4. theme.json - グローバルスタイル
5. テンプレートの作成
6. テーマの例

<!--
## What is needed to create a block theme?
 -->
## ブロックテーマを作成するには何が必要か ?

<!--
To use a block theme, you first need to activate the Gutenberg plugin.
 -->
ブロックテーマを使用するには Gutenberg プラグインを使用する必要があります。

<!--
### Required files and file structure
 -->
### 必要なファイルとファイル構造

<!--
There are two files that are required to activate any theme: `index.php` and `style.css`.
For the plugin to recognize that a block theme is active, the theme must also include an `index.html` template
inside a folder called `block-templates`.
 -->
任意のテーマを有効化するには2つのファイル、`index.php` と `style.css` が必要です。ブロックテーマが有効だとプラグインに知らせるには、テーマはフォルダー `block-templates` 内にテンプレート `index.html` を含める必要があります。

<!--
The theme may optionally include a `functions.php` file and a [theme.json file](/docs/how-to-guides/themes/theme-json.md) to manage global styles.
 -->
テーマはオプションで `functions.php` ファイルや、グローバルなスタイルを管理する [theme.json ファイル](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/)を含むこともできます。

<!--
Template parts are optional. If they are included they must be placed inside a `block-template-parts` folder.
 -->
テンプレートパーツはオプションです。含める場合は、`block-template-parts` フォルダーに置く必要があります。

<!--
File structure:
 -->
ファイル構造
```
theme
|__ style.css
|__ functions.php
|__ index.php
|__ theme.json
|__ block-templates
	|__ index.html
	|__ ...
|__ block-template-parts
	|__ header.html
	|__ footer.html
	|__ ...
```

<!--
## Theme setup
 -->
## テーマのセットアップ

<!--
In this example, the folder name is `fse-tutorial`.
 -->
この例でのフォルダー名は `fse-tutorial` です。

<!--
Inside the theme folder, create the `block-templates` and `block-template-parts` folders.
 -->
テーマフォルダー内に、`block-templates` フォルダーと `block-template-parts` フォルダーを作成してください。

<!--
Create a `style.css` file. The file header in the `style.css` file has [the same items you would use in a classic theme](https://developer.wordpress.org/themes/basics/main-stylesheet-style-css/#explanations).
 -->
`style.css` ファイルを作成してください。style.css ファイルのヘッダーには[クラシックテーマ (従来のテーマ) と同じ要素を記述します](https://developer.wordpress.org/themes/basics/main-stylesheet-style-css/#explanations)。

```CSS
/*
Theme Name: FSE Tutorial
Theme URI:
Author: The WordPress team
Author URI: https://wordpress.org/
Description:
Tags: full-site-editing, blog
Version: 1.0.0
Requires at least: 5.0
Tested up to: 5.7
Requires PHP: 7.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: fse-tutorial

This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.
*/
```

<!--
Create a blank `index.php` file. This file is used as a fallback if the theme is activated without Gutenberg.
 -->
ブランクの `index.php` ファイルを作成してください。このファイルは、テーマが Gutenberg なしで有効化された際のフォールバックとして使用されます。

<!--
Inside the `block-templates` folder, create a blank `index.html` file.
 -->
`block-templates` フォルダー内に、ブランクの `index.html` ファイルを作成してください。

<!--
Optionally, create a `functions.php` file.
 -->
オプションで、`functions.php` ファイルを作成してください。
<!--
In this file, you can enqueue `style.css`, include additional files, enable an editor stylesheet and add theme support.
 -->
このファイルで `style.css` ファイルをエンキューし、追加のファイルを含め、エディターのスタイルシートを有効化し、テーマサポートを追加できます。

<!--
<div class="callout callout-tip">
You will add most of the theme support in the `theme.json` file. The title tag is already enabled for all block themes, and it is no longer necessarry to enqueue the comment reply script because it is included with the comments block.
</div>
 -->
> テーマサポートのほとんどは `theme.json`ファイルに追加します。title タグはすでにすべてのブロックテーマで有効です。また、コメントリプライスクリプトはコメントブロックに含まれているため、エンキューする必要はありません。

```php
<?php
if ( ! function_exists( 'fse_tutorial_theme_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which runs
	 * before the init hook. The init hook is too late for some features, such as indicating
	 * support for post thumbnails.
	 */
	function fse_tutorial_theme_setup() {
		/**
		 * Add default posts and comments RSS feed links to <head>.
		 */
		add_theme_support( 'automatic-feed-links' );

		/**
		 * Enable support for post thumbnails and featured images.
		 */
		add_theme_support( 'post-thumbnails' );

		add_theme_support( 'editor-styles' );

		add_theme_support( 'wp-block-styles' );
	}
endif;
add_action( 'after_setup_theme', 'fse_tutorial_theme_setup' );

/**
 * Enqueue theme scripts and styles.
 */
function fse_tutorial_theme_scripts() {
	wp_enqueue_style( 'fse-tutorial-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'fse_tutorial_theme_scripts' );
```
<!--
Your theme should now include the following files and folders:
 -->
この段階でテーマには次のようなファイルとフォルダーがあります。

```
theme
 |__ style.css
 |__ functions.php (optional)
 |__ index.php
 |__ block-templates
 	|__ index.html
 |__ block-template-parts
 	|__ (empty folder)
```

<!--
## Creating the templates and template parts
 -->
## テンプレートとテンプレートパーツの作成

<!--
Before continuing, install and activate your theme.
 -->
手順を進める前に、テーマをインストールし、有効化してください。

<!--
There are several ways to create templates and template parts:
 -->
テンプレートとテンプレートパーツの作成にはいくつかの方法があります。

<!--
- Manually, by creating HTML files containing block markup.
- Using the site editor.
- Using the template editing mode in the block editor.
 -->
- 手動で、ブロックマークアップを含む HTML ファイルを作成する。
- サイトエディターを使用する。
- ブロックエディターのテンプレート編集モードを使用する。

<!--
The fourth way is temporary and involves going to the Appearance menu > Templates, and is not recommended because of its limitations.
 -->
4番目の方法は一時的で、「外観」 > 「テンプレート」でアクセスしますが、制限があるため推奨されません。

<!--
### Manual template creation
 -->
### 手動でのテンプレート作成

<!--
Create two template part files called `header.html` and `footer.html` and place them inside the `block-template-parts` folder.
 -->
2つのテンプレートパーツファイル `header.html` と `footer.html` を作成し、`block-template-parts` フォルダー内に保存します。

<!--
When you add blocks manually to your HTML files, start with an HTML comment that includes the block name prefixed with `wp:`.
There are both self-closing and multi-line blocks as shown in the example below.
 -->
手動で HTML ファイルにブロックを追加する場合、接頭辞 `wp:` を付けたブロック名を含む HTML コメントで始めてください。
以下の例にあるように自己終了タグ、複数行ブロックの両方があります。

<!--
Add the site title block to `header.html`:
 -->
`header.html` にサイトタイトルブロックを追加してください。

```html
<!-- wp:site-title /-->
```

<!--
Add a credit text to `footer.html`:
 -->
著作権表示を `footer.html` に追加します。

```html
<!-- wp:paragraph -->
<p>Proudly powered by <a href="https://wordpress.org/">WordPress</a>.</p>
<!-- /wp:paragraph -->
```

<!--
Blocks are self-containing; the opening tag and the closing tag must be in the same template.
You would not be able to place an opening tag for a group block in a header template and close it in a footer template.
 -->
ブロックは自己完結型です。開始タグと囚虜タグは同じテンプレートにある必要があります。
たとえば、ヘッダーテンプレート内にグループブロックの開始タグを置き、終了タグをフッターテンプレートに置くことはできません。

<!--
Open `index.html` and include the template parts by adding two HTML comments.
The HTML comments start with `wp:template-part`, which is the name of the template part block.
Each template part is identified by the slug, the name of the file without the file extension.
 -->
`index.html` を開き、2つの HTML コメントを追加することで、テンプレートパーツを含めます。
HTML コメントは `wp:template-part` で始まります。これはテンプレートパーツブロックの名前です。
各テンプレートパーツはスラッグ、拡張子のないファイル名で識別されます。

<!--
Inside the HTML comment, add two curly brackets and the key, `slug`, together with the name of the template part:
 -->
HTML コメント内には、中括弧、キー `slug`、テンプレートパーツの名前を追加してください。

```html
<!-- wp:template-part {"slug":"header"} /-->

<!-- wp:template-part {"slug":"footer"} /-->
```

<!--
Template parts use a `<div>` tag by default. Add the `tagName` attribute to change the HTML element to `<header>` and `<footer>`:
 -->
テンプレートパーツはデフォルトで `<div>` タグを使用します。`tagName` 属性を追加して、HTML 要素を `<header>` と `<footer>` に変更してください。

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

<!--
All block attributes are placed inside these curly brackets. If you wanted the paragraph in `footer.html` to be centered, you would use the `align` attribute:
 -->
すべてのブロック属性は中括弧内に置きます。`footer.html` 内に中央揃えで段落を配置したければ、`align` 属性を使用します。

```html
<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">Proudly powered by <a href="https://wordpress.org/">WordPress</a>.</p>
<!-- /wp:paragraph -->
```

<!--
The HTML element that wraps the block content also uses the corresponding CSS class: `has-text-align-center`.
 -->
ブロックコンテンツをラップする HTML 要素も、対応する CSS クラス `has-text-align-center` を使用します。

<!--
<div class="callout callout-tip">
If you are not sure what the correct block markup is, you can add the block in the block editor
and copy the block markup from the code editor mode to your theme files.
</div>
 -->
> 正しいブロックマークアップが何か分からない場合は、ブロックエディターでブロックを追加し、コードエディターモードにしてからブロックマークアップをテーマファイルにコピーします。

<!--
### Template creation in the site editor
 -->
### サイトエディターでのテンプレート作成

<!--
Open the Site Editor from the WordPress admin menu. The default view is the blank index template.
 -->
WordPressの管理画面から「サイトエディター」を開いてください。デフォルトでは、空白のインデックステンプレートが表示されます。

<!--
Insert a new template part block. The block will have the default name "Untitled Template Part".
Open the **Advanced** section of the block settings sidebar and make the following changes:
Change the title and area to Header, and the HTML element to `<header>`.
 -->
新規テンプレートパーツブロックを挿入してください。デフォルトのブロック名は「Untitled Template Part」です。
ブロック設定サイドバーの「高度な設定」を開き、以下の変更を行います。
「タイトル」と「エリア」を「ヘッダー」に、HTML要素を `<header>` に変更します。

<!--
Repeat the process for the site footer: Change the title and area to Footer, and the HTML element to `<footer>`.
 -->
サイトのフッターにも同様の作業を行います。タイトルとエリアを「フッター」に変更し、HTML要素を `<footer>` に変更します。

<!--
Add a site title block to the header template part, and a paragraph to the footer.
Save the changes. You will be asked if you want to save the two template parts, the index template, or all three.
Confirm that the checkboxes are correct and save all three.
 -->
ヘッダーのテンプレートパーツにサイトタイトルブロックを、フッターに段落ブロックを追加します。
変更内容を保存します。2つのテンプレートパーツを保存するのか、インデックステンプレートを保存するのか、3つすべてを保存するのかを尋ねられます。
チェックボックスが正しいことを確認し、3つすべてを保存します。

<!--
### Template editing mode
 -->
### テンプレート編集モード

<!--
The template editing mode is a way to edit the website without the complexity of the site editor interface.
It is more limited than the site editor because you can not select or navigate between templates in this view.
 -->
テンプレート編集モードは、サイトエディターの複雑なインターフェースを使わずにサイトを編集する方法です。
このモードはサイトエディターよりも制限され、テンプレートの選択、テンプレート間の移動ができません。

<!--
You access the template editing mode via the block editor.
Create a new post or page. Next, open the document settings sidebar and locate the **Template** panel below **Status & visibility**.
Here you will find information about the current template and a list of existing templates to choose from.
Create a new template by selecting the **New** link.
Edit and save the template in the same way as in the site editor.
 -->
テンプレート編集モードは、ブロックエディターからアクセスします。
新しい投稿または固定ページを作成します。次に、ドキュメント設定サイドバーを開き、「ステータスと公開状態」の下にある「テンプレート」セクションに移動します。
ここには、現在のテンプレートに関する情報と、選択可能な既存テンプレートのリストが表示されます。
「新規」リンクを選択して、新しいテンプレートを作成します。
サイトエディタと同じ方法でテンプレートを編集、保存します。

<!--
### Exporting
 -->
### エクスポート

<!--
Templates and template parts that have been created or edited in the site editor or template editing mode
are saved to the database as custom post types. To export them as theme files, follow these steps:
 -->
サイトエディターまたはテンプレート編集モードで作成、編集されたテンプレートやテンプレートパーツは、カスタム投稿タイプとしてデータベースに保存されます。
これらをテーマファイルとしてエクスポートするには、以下の手順に従ってください。

<!--
- In the site editor, open the **More tools and options** menu.
- Select the **Export** option to download a zip file containing the files. Unpack the files.
- Copy the updated `index.html` file from `theme/block-templates/` to your theme's `block-templates` folder.
- Copy template part one and two from `theme/block-template-parts/` to your theme's `block-template-parts` folder.
- Rename the template parts to `header.html` and `footer.html`, respectively.
- Open `index.html` and update the template part slugs in the block markup.
 -->
- サイトエディターで右サイドバーの「オプション」メニュー (3点リーダーアイコン) を開く。
- 「エクスポート」オプションを選択して、ファイルを含む zip ファイルをダウンロードする。ファイルを解凍する。
- 更新された `index.html` ファイルを `theme/block-templates/` からテーマの `block-templates` フォルダにコピーする。
- `theme/block-templates/`からテンプレートパーツ1と2をテーマの`block-template-parts`フォルダにコピーする。
- それぞれのテンプレートパーツの名前を、`header.html` と `footer.html` に変更する。
- `index.html`を開き、ブロックマークアップ内のテンプレートパーツのスラッグを更新する。

<!--
Saved templates have precedence over theme files. To use the updated theme files, go to **Appearance > Templates** and
**Appearance > Template parts** and delete the saved templates.
 -->
保存されたテンプレートは、テーマファイルよりも優先されます。更新されたテーマファイルを使用するには、「外観」 > 「テンプレート」と、「外観」 > 「テンプレートパーツ」で保存したテンプレートを削除してください。

<!--
### Additional templates
 -->
### 追加テンプレート

<!--
#### Blog
 -->
#### ブログ

<!--
Now the theme has a basic site header and footer, but it does not display any content.
To create a list of posts, you will use the query loop and post template blocks.
 -->
これで、テーマに基本的なサイトのヘッダーとフッターができましたが、コンテンツは表示されません。
投稿のリストを作成するには、クエリループブロックと投稿テンプレートブロックを使用します。

<!--
Whether you are using the site editor or editing theme files directly, open the index template.
 -->
サイトエディターを使用している場合でも、テーマファイルを直接編集している場合でも、インデックステンプレートを開きます。

<!--
First, add a group block that will work as a container for the posts.
Next, enable the width options for the blocks inside this group using `"layout":{"inherit":true}`.
 -->
まず、投稿のコンテナとして機能するグループブロックを追加します。
次に、`"layout":{"inherit":true}` を使用して、このグループ内のブロックの幅のオプションを有効にします。

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:group {"layout":{"inherit":true}} -->
<div class="wp-block-group"></div>
<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

<!--
Change the `<div>` in the group block to a `<main>` element using the `tagName` attribute:
 -->
グループブロック内の `<div>` を、`tagName` 属性を使用して `<main>` 要素に変更します。

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:group {"layout":{"inherit":true},"tagName":"main"} -->
<main class="wp-block-group"></main>
<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

<!--
If you are using one of the editors, change the element from `<div>` to `<main>` under **Advanced** in the block setting sidebar.
 -->
エディターを使用している場合は、ブロック設定のサイドバーにある「高度な設定」で、要素を `<div>` から `<main>` に変更してください。

<!--
Add a query loop block inside the group.
When you place a query loop block in the editor, the post template is used as an inner block and you have the option to start with an empty loop or include selected post blocks like a post title and featured image.
 -->
グループ内にクエリループブロックを追加します。
エディタでクエリループブロックを配置すると、投稿テンプレートが内側のブロックとして使用され、空のループから始めるか、記事タイトルやアイキャッチ画像などの選択した記事ブロックを含めるかを選択できます。

<!--
Example markup:
 -->
マークアップ例

```html
<!-- wp:query -->
<div class="wp-block-query"><!-- wp:post-template -->
<!-- wp:post-title /-->
<!-- wp:post-date /-->
<!-- wp:post-excerpt /-->
<!-- /wp:post-template --></div>
<!-- /wp:query -->
```

<!--
The query pagination block can only be used inside the query loop. Place it inside the query, but outside the post template:
 -->
クエリページネーションブロックは、クエリループの内部でのみ使用できます。クエリの内側、投稿テンプレートの外側に配置してください。

```html
<!-- wp:query -->
<div class="wp-block-query"><!-- wp:post-template -->
<!-- wp:post-title /-->
<!-- wp:post-date /-->
<!-- wp:post-excerpt /-->
<!-- /wp:post-template -->

<!-- wp:query-pagination -->
<div class="wp-block-query-pagination">
<!-- wp:query-pagination-previous /-->
<!-- wp:query-pagination-numbers /-->
<!-- wp:query-pagination-next /--></div>
<!-- /wp:query-pagination -->

</div>
<!-- /wp:query -->
```

<!--
#### Posts and pages
 -->
#### 投稿と固定ページ

<!--
Next, create a new template for displaying single posts.
If you are editing theme files directly, create a file called `single.html` inside the block-templates folder.
 -->
次に、単一の投稿を表示する新しいテンプレートを作成します。
テーマファイルを直接編集している場合は、block-templates フォルダ内にファイル `single.html` を作成します。

<!--
Add the site header and site footer template parts:
 -->
サイトヘッダーとサイトフッターのテンプレートパーツを追加します。

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

<!--
Add a group block that will work as a container for your post:
 -->
投稿のコンテナとして機能するグループブロックを追加します。

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:group {"tagName":"main"} -->
<main class="wp-block-group"></main>
<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

<!--
Add your preferred blocks inside the group block. Some new blocks that are available are:
 -->
グループブロックの中に自由にブロックを追加してください。いくつかの新しいブロックを利用可能です。

- Post content: `<!-- wp:post-content /-->`
- Post title: `<!-- wp:post-title /-->`
- Post author: `<!-- wp:post-author /-->`
- Post date: `<!-- wp:post-date /-->`
- Post featured image: `<!-- wp:post-featured-image /-->`
- Post tags: `<!-- wp:post-terms {"term":"post_tag"} /-->`
- Post categories: `<!-- wp:post-terms {"term":"category"} /-->`
- Next and previous post: `<!-- wp:post-navigation-link /--><!-- wp:post-navigation-link {"type":"previous"} /-->`

<!--
Save the HTML file, or save and export the post template if you are working in the site editor.
 -->
HTML ファイルを保存するか、サイトエディターで作業している場合は、投稿テンプレートを保存してエクスポートします。

<!--
Copy all the blocks and create a template for displaying pages.
Optionally, save a copy of `single.html` as `page.html` inside the block-templates folder.
Adjust the blocks for the page template, and save.
 -->
すべてのブロックをコピーして、ページを表示するテンプレートを作成します。
オプションで、block-templates フォルダ内で `single.html` を `page.html` としてコピーします。
固定ページテンプレート用にブロックを調整して、保存します。

<!--
#### Archives
 -->
#### アーカイブ

<!--
If a theme does not have an archive or search result template, the index template will be used as a fallback.
To make sure that the query block shows the correct results, it has an attribute called `inherit`.
Inherit is enabled by default and filters the query depending on the page that you are viewing.
 -->
テーマにアーカイブテンプレートや検索結果テンプレートがない場合、インデックステンプレートがフォールバックとして使用されます。
クエリブロックが正しい結果を表示するように、`inherit`という属性があります。
`inherit` はデフォルトで有効になっており、表示しているページに応じてクエリをフィルタリングします。

<!--
If you like you can continue creating an archive or category template by copying the index file and
adding a title using the archive title block. This is a variation of the query title block:
 -->
必要に応じてアーカイブカテゴリーテンプレートを作成してください。インデックスファイルをコピーし、アーカイブタイトルブロックを使用してタイトルを追加できます。これは、クエリタイトルブロックのバリエーションです。
`<!-- wp:query-title {"type":"archive"} /-->`

<!--
## Theme.json - Global styles
 -->
## theme.json - グローバルスタイル

<!--
`theme.json` is a configuration file used to enable or disable features and set default styles for both the website and blocks.
 -->
`theme.json`は、ウェブサイトとブロックの両方で、機能を有効化、無効化したり、デフォルトスタイルの設定に使用する構成ファイルです。

<!--
Style settings are converted to CSS custom properties and enqueued for the editor and the front,
reducing the need for the theme to enqueue block styles.
 -->
スタイル設定は、CSSカスタムプロパティに変換され、エディターとフロントにエンキューされます。
これにより、テーマがブロックスタイルをエンキューする必要性が減ります。
<!--
To make the most out of this tutorial, read the [documentation for global styles](/docs/how-to-guides/themes/theme-json.md).
 -->
このチュートリアルを最大限に活用するには、[グローバルスタイルのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/) を参照してください。

<!--
[Learn more about the JSON format (external link)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
 -->
[JSON フォーマットについて学習する (外部リンク)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)

<!--
Create a file called `theme.json` and save it inside the main theme folder.
 -->
メインのテーマフォルダー内に `theme.json` ファイルを作成してください。

<!--
Start by adding two curly brackets to the file:
 -->
まずファイルに中括弧を追加してください。

```json
{

}
```

<!--
Add the version number for the theme.json format. For Gutenberg 10.6, the version number is 1:
 -->
theme.jsonフォーマットのバージョン番号を追加します。Gutenberg 10.6の場合、バージョン番号は1です。

```json
{
	"version": 1,
}
```

<!--
Next, add three main sections:
 -->
次に、3つのメインセクションを追加します。

<!--
- Settings -Where you will enable features and create presets for styles.
- Styles -Where you apply styles to the website, elements, and blocks.
- templateParts -For assigning template part files to template areas.
 -->
- settinngs - 機能を有効化し、スタイルのプリセットを作成する。
- styles - サイト、要素、ブロックにスタイルを適用する。
- templateParts - テンプレートエリアにテンプレートパーツファイルを割り当てる。

```json
{
	"version": 1,
	"settings": {
	},
	"styles": {
	},
	"templateParts": [
	]
}
```

<!--
Remember to separate the objects with a comma.
 -->
コンマでオブジェクトを区切ることを忘れないでください。

<!--
### Enabling and disabling features
 -->
### 機能の有効化と無効化

<!--
For a list of features that can be enabled or disabled, see the [documentation for theme.json](https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json/#settings).
 -->
 有効化または無効化できる機能の一覧は、[theme.json のドキュメント](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/)を参照してください。

<!--
There are two different ways that a block can support a feature:
 -->
ブロックが機能をサポートする方法には2種類あります。

<!--
- By displaying a control in the block settings sidebar.
- By allowing defaults to be set using `theme.json`.
 -->
- ブロック設定サイドバーにコントロールを表示する。
- `theme.json`を使用してデフォルトを設定する。

<!--
<div class="callout callout-tip">
It is not possible to add controls to a block that does not support them by using theme.json.
</div>
 -->
> コントロールをサポートしていないブロックに、theme.jsonを使ってコントロールを追加することはできません。

<!--
Example:
A block that does not have support for border controls, can have a default border set inside the `theme.json` file,
as long as the border feature is enabled.
 -->
例:
ボーダーコントロールをサポートしていないブロックでも、ボーダー機能が有効な限り、`theme.json`ファイルの中にデフォルトのボーダーを設定できます。

<!--
To enable border styles, add a `border` object under `settings` with the following attributes and values:
 -->
ボーダースタイルを有効にするには、`settings` の下に、以下の属性と値を持つ`border` オブジェクトを追加します。

```json
{
	"version": 1,
	"settings": {
		"border": {
			"customColor": true,
			"customRadius": true,
			"customStyle": true,
			"customWidth": true
		}
	}
}
```

<!--
To enable link colors, add a `color` setting and set `link` to true:
 -->
リンク色を有効にするには、`color` 設定を追加し、`link` をtrueに設定します。

```json
{
	"version": 1,
	"settings": {
		"border": {
			"customColor": true,
			"customRadius": true,
			"customStyle": true,
			"customWidth": true
		},
		"color": {
			"link": true,
		}
	}
}
```

<!--
To enable padding, margin and custom spacing units, include a setting for spacing:
 -->
パディングやマージン、カスタムスペーシングユニットを有効にするには、spacing の設定を含めます。

```json
{
	"version": 1,
	"settings": {
		"border": {
			"customColor": true,
			"customRadius": true,
			"customStyle": true,
			"customWidth": true
		},
		"color": {
			"link": true
		},
		"spacing": {
			"customPadding": true,
			"customMargin": true,
			"units": [ "px", "em", "rem", "vh", "vw" ]
		}
	}
}
```

<!--
#### Disabling features
 -->
#### 機能の無効化

<!--
If you want to disable gradients, which are enabled by default, set `gradient` to false:
 -->
デフォルトで有効なグラデーションを無効にするには、`gradient` を false にします。

```json
{
	"version": 1,
	"settings": {
		"border": {
			"customColor": true,
			"customRadius": true,
			"customStyle": true,
			"customWidth": true
		},
		"color": {
			"link": true,
			"gradient": false
		}
		...
	}
}
```
<!--
CSS variables for font sizes are generated using the `editor-font-sizes` theme support or by adding a global preset.

https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#block-font-sizes
 -->
<!--
フォントサイズ用の CSS 変数は、`editor-font-sizes` テーマサポートを使用するか、グローバルプリセットに追加することで生成されます。
https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#block-font-sizes
 -->
<!--
If the theme does not add any custom font sizes, variables are created using the default sizes.
This example adds the default medium font size to the paragraph block.

The font sizes are unitless, which is why calc is used: https://developer.mozilla.org/en-US/docs/Web/CSS/calc
 -->
<!--
テーマがカスタムフォントサイズを追加しない場合、変数はデフォルトサイズを使用して作成されます。
この例では段落ブロックにデフォルトの medium フォントサイズを追加します。

フォントサイズに単位は指定しません。calc が使用されるのはこのためです。https://developer.mozilla.org/en-US/docs/Web/CSS/calc
 -->

<!--
### Content width and theme support for wide and full-width blocks
 -->
### コンテンツ幅と、幅広ブロック、全幅ブロックのテーマサポート

<!--
The `layout` setting enables width settings for group blocks and template parts
and replaces `add_theme_support( 'align-wide' );`.
 -->
`layout` 設定は、グループブロックやテンプレートパーツの幅を設定可能にし、`add_theme_support( 'align-wide' );` を置き換えます。

<!--
The benefit of enabling the layout setting in `theme.json` is that you no longer need to add extra CSS for
block alignments or widths. You can also set more precise widths to blocks inside containers.
 -->
`theme.json` でのレイアウト設定の利点は、ブロックの配置や幅のための余分なCSSの削減です。また、コンテナ内のブロックに、より正確な幅を設定できます。

<!--
The keys used by `layout` are:
 -->
`layout` で使用されるキー:

<!--
- `contentSize` Default width for the blocks.
- `wideSize` Wide width.
 -->
- `contentSize` ブロックのデフォルト幅
- `wideSize` ワイド幅

<!--
The example uses pixels, but you can use any valid CSS value and unit.
(The code example is truncated to illustrate where to add the option.)
 -->
この例ではピクセルを使用していますが、有効な CSS 値や単位を使用できます。
(コードは、オプションを追加する場所を明示するために省略しています)。

```json
{
	"version": 1,
	"settings": {
		...
		"layout": {
			"contentSize": "840px",
			"wideSize": "1100px"
		}
	}
}
```

<!--
Using the CSS variables is optional. In this example, the default background color for the group block is changed to white using a color code:
 -->
<!--
CSS 変数の仕様はオプションです。この例ではグループブロックのデフォルトの背景色をカラーコードを使用して白に変更します。
 -->
<!--
### Color palette
 -->
### カラーパレット

<!--
This is the equivalent of `add_theme_support( 'editor-color-palette' )`.
You can add multiple color palettes: a default palette for all blocks, and color palettes specific to a block type.
 -->
これは、`add_theme_support( 'editor-color-palette' )` に相当します。
複数のカラーパレットを追加できます。すべてのブロックのためのデフォルトパレットと、ブロックタイプに固有のカラーパレットです。

<!--
The keys used by `palette` are:
 -->
`palette` で使用されるキー:

<!--
- `slug` A unique identifier for the color.
- `color` The hex color value.
- `name` The visible name in the editor. Optional.
 -->
- `slug` 色の一意の識別子
- `color` 色の16進値
- `name` エディターで表示される名前。オプション

<!--
Multiple colors are added as an array using square brackets: `[]`.
Add a default color palette inside `settings`, under `color`:
 -->
複数の色は、角括弧 `[]` を使った配列として追加します。
`settings` 内の `color` にデフォルトのカラーパレットを 追加します。

```json
{
	"version": 1,
	"settings": {
		...
		"color": {
			"palette": [
				{
					"slug": "white",
					"color": "#fff",
					"name": "White"
				},
				{
					"slug": "blue",
					"color": "#0073AA",
					"name": "WordPress blue"
				},
				{
					"slug": "dark-grey",
					"color": "#23282D",
					"name": "Dark grey"
				}
			]
		}
	}
}
```

<!--
Next, add a trailing comma after `color`, and add a new palette for the heading block.
This palette will override the default theme palette.
 -->
次に、`color` の後にコンマを追加して、見出しブロックに新しいパレットを追加します。
このパレットは、デフォルトのテーマパレットを上書きします。

```json
"blocks": {
	"core/heading": {
		"color": {
			"palette": [
				{
					"slug": "white",
					"color": "#fff",
					"name": "White"
				},
				{
					"slug": "medium-blue",
					"color": "#00A0D2",
					"name": "Medium blue"
				}
			]
		}
	}
}
```
<!--
Below are the presets and styles combined:
 -->
<!--
以下はプリセットとスタイルを組み合わせた結果です。
 -->

<!--
Presets are created under `settings` and applied under `styles`.
Apply the white color to the body background by adding `color` followed by the `background` key and value:
 -->
プリセットは `settings` の下で作成され、`styles` で適用されます。
`color` の後に `background` キーと値を追加して、body の背景に白色を適用します。

```json
"styles": {
	"color": {
		"background": "var(--wp--preset--color--white)"
	}
}
```

<!--
### Typography
 -->
### タイポグラフィ

<!--
To add custom font sizes, create a new section called `typography` under `settings`.
`fontSizes` is the equivalent of `add_theme_support( 'editor-font-sizes' )`.
 -->
カスタムフォントサイズを追加するには、`settings`の下に新しいセクション `typography` を作成します。
`fontSizes` は `add_theme_support( 'editor-font-sizes' )` と同等です。

```json
"typograhy": {
	"fontSizes": [
	]
}
```

<!--
The keys used by `fontSizes` are:
 -->
`fontSizes` で使用されるキー:

<!--
- `slug` A unique identifier for the size.
- `size` The size value. This can be unitless or use any valid CSS value.
- `name` The visible name in the editor.
 -->
- `slug` サイズの一意の識別子
- `size` サイズの値。単位を指定しない数値、または有効な CSS 値
- `name` エディターで表示される名前

```json
"typograhy": {
	"fontSizes": [
		{
			"slug": "normal",
			"size": "20px",
			"name": "normal"
		},
		{
			"slug": "extra-small",
			"size": "16px",
			"name": "Extra small"
		},
		{
			"slug": "large",
			"size": "24px",
			"name": "Large"
		}
	]
}
```

<!--
To apply a size to a block, follow these steps:
Create a new section called `blocks` under `styles`
 -->
ブロックにサイズを適用するには、以下の手順で行います。
`styles` の下に新しいセクション `blocks` を作成します。

```json
"blocks": {

}
```

<!--
Add the names of the blocks that you want to set defaults for
 -->
デフォルトにする、ブロックの名前を追加します

```json
"blocks": {
	"core/paragraph": {
	},
	"core/post-terms": {
	},
	"core/post-title": {
	}
}
```

<!--
Add the `typography` setting, and set the `fontSize` value to the preset that you created
 -->
`typography` 設定を追加し、作成したプリセットに `fontSize` 値を設定します。

```json
"blocks": {
	"core/paragraph": {
		"typography": {
			"fontSize": "var(--wp--preset--font-size--normal)"
		}
	},
	"core/post-terms": {
		"typography": {
			"fontSize": "var(--wp--preset--font-size--extra-small)"
		}
	},
	"core/post-title": {
		"typography": {
			"fontSize": "var(--wp--preset--font-size--large)"
		}
	}
}
```

<!--
### Elements
 -->
### 要素

<!--
With the `elements` setting, you can set defaults for links and headings on the website and inside blocks.
 -->
`elements` 設定では、サイトやブロック内のリンクや見出しのデフォルトを設定できます。

<!--
#### Elements on the website
 -->
#### サイトの要素

<!--
Set a font color to all `<H2>` headings, regardless of if the heading is a site title, post title, or heading block:
 -->
すべての `<H2>` 見出しにフォント色を設定します。その見出しが、サイトタイトル、投稿タイトル、見出しブロックのいずれかは問いません。

```json
"styles": {
	"elements": {
		"h2": {
			"color": {
				"text": "var(--wp--preset--color--medium-blue)"
			}
		}
	}
}
```

<!--
Add a default link text color:
 -->
デフォルトのリンクテキスト色を追加します。

```json
"styles": {
	"elements": {
		"h2": {
			"color": {
				"text": "var(--wp--preset--color--medium-blue)"
			}
		},
		"link": {
			"color": {
				"text": "var(--wp--preset--color--dark-grey)"
			}
		}
	}
}
```

<!--
#### Elements inside blocks
 -->
#### ブロック内の要素

<!--
Some blocks have more than one element, or have different elements depending on settings.
 -->
ブロックによっては複数の要素を持ったり、設定によって異なる要素を持つものがあります。

<!--
Example: If you set a background color to a post excerpt block, that background affects the entire block.
You can set a background to the optional "read more" link in the post excerpt block using elements:
`Styles > blocks > the name of the block > elements > element > attribute`
 -->
例: 投稿の抜粋ブロックに背景色を設定した場合、その背景はブロック全体に影響します。
要素を使って、記事の抜粋ブロックにあるオプションの「続きを読む」リンクに背景を
`スタイル > ブロック > ブロック名 > 要素 > 属性`で設定できます。

<!--
Since the theme has custom padding enabled, you can add `padding` within the `spacing` attribute to make the background color more visible:
 -->
テーマではカスタムパディングが有効なため、`spacing` 属性内に `padding` を追加することで、背景色をより見やすくすることができます。

```JSON
"styles": {
	"blocks": {
		"core/post-excerpt": {
			"elements": {
				"link": {
					"color": {
						"text": "var(--wp--preset--color--white)",
						"background": "var(--wp--preset--color--blue)"
					},
					"spacing": {
						"padding": {
							"top": "1em",
							"right": "1em",
							"bottom": "1em",
							"left": "1em"
						}
					}
				}
			}
		}
	}
}
```
<!--
## [Adding blocks](/docs/how-to-guides/block-based-theme/block-based-themes-2-adding-blocks.md)
 -->
<!--
## [ブロックの追加](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-based-themes/block-based-themes-2-adding-blocks/)
 -->

<!--
### Template parts
 -->
### テンプレートパーツ

<!--
In the templeParts section, assign the two template parts that you created to their template areas.
Add two keys:
 -->
templeParts」セクションでは、作成した2つのテンプレートパーツをそれぞれのテンプレートエリアに割り当てます。
2つのキーを追加します。
<!--
-`name`, the file name of the template part file without the file extension,
-`area`, the name of the template area.
 -->
-`name`: テンプレートパーツのファイル名から拡張子を除いたもの
-`area`: テンプレートエリアの名前

<!--
There are three template areas to choose from: Header, footer, and general.
 -->
テンプレートは、header、footer、general の3つのエリアから選択できます。

```json
"templateParts": [
	{
		"name": "header",
		"area": "header"
	},
	{
		"name": "footer",
		"area": "footer"
	}
]
```

<!--
## Custom templates
 -->
## カスタムテンプレート

<!--
Custom templates for posts, pages, and custom post types are created by adding additional HTML files inside the
`block-templates` folder.
In a classic theme, templates are identified with a file header. In a block theme, you list templates in the `theme.json` file.
 -->
投稿、ページ、カスタム投稿タイプ用のカスタムテンプレートは、`block-templates` フォルダ内に追加のHTMLファイルを追加して作成します。
クラシックテーマでは、テンプレートはファイルヘッダで識別されます。ブロックテーマでは、`theme.json` ファイルでテンプレートをリストアップします。

<!--
All templates that are listed in the `customTemplates` section of `theme.json` are selectable in the site editor.
 -->
`theme.json` の `customTemplates` セクションにリストアップされたすべてのテンプレートは、サイトエディタで選択できます。

<!--
For templates to be editable in the template editing mode, the template's file name needs to be prefixed with either `post-` or `page-`.
 -->
テンプレート編集モードでテンプレートを編集できるようにするには、テンプレートのファイル名の前に `post-` または `page-` のいずれかを付ける必要があります。

<!--
First, create a section called `customTemplates` at the root level of `theme.json`.
This section has two required keys:
`Name`, which is the name of the template file without the file ending.
`title`, which is the visible title of the template in the editors.
 -->
まず、`theme.json`のルートレベルにセクション `customTemplates` を作成します。
このセクションには2つの必須キーがあります。
`name`: テンプレートファイルの名前から拡張子を取り除いたもの
`title`: エディタで表示されるテンプレートのタイトルです。

```json
"customTemplates": [
	{
		"name": "page-home",
		"title": "Page without title"
	}
]
```

<!--
There is also an optional setting where you decide which post types that can use the template.
The key is `postTypes`, followed by the name of the post type:
 -->
また、このテンプレートを使用できる投稿タイプを定義するオプション設定もあります。
`postTypes` キーの後に投稿タイプの名前を続けます。

```json
"customTemplates": [
	{
		"name": "page-home",
		"title": "Page without title"
	},
	{
		"name": "page-contact",
		"title": "Contact",
		"postTypes": [
			"page"
		]
	}
]
```

<!--
## Example themes
 -->
## テーマの例

<!--
You can find a basic starter theme called "emptytheme" and other example themes
on the [Experimental themes GitHub repository](https://github.com/WordPress/theme-experiments).
When using a theme as reference, take note of which Gutenberg version the theme is built for,
because the experimental features are updated frequently.
 -->
基本的なスターターテーマ「emptytheme」やその他のサンプルテーマが、[実験的テーマ GitHub リポジトリ](https://github.com/WordPress/theme-experiments)にあります。
テーマを参考にする際は、そのテーマがどのGutenbergバージョン用に作られているかに注意してください。実験的な機能は頻繁に更新されるためです。

<!--
The theme directory lists block themes under the tag [full site editing](https://wordpress.org/themes/tags/full-site-editing/).
 -->
テーマディレクトリでは、タグ [full site editing](https://wordpress.org/themes/tags/full-site-editing/)でブロックテーマをリストアップできます。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/block-based-theme/README.md)
