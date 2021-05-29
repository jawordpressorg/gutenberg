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
まず、「[ブロックテーマの概要](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/block-theme-overview/)」を読むことをお勧めします。

<!--
You will learn about the required files, how to combine templates and template parts, how to add presets for global styles, and how to add blocks and export the templates in the site editor.
 -->
このチュートリアルでは、ブロックベーステーマに必要なファイルの一覧、テンプレートとテンプレートパーツの組み合わせ、グローバルスタイルへのプリセットの追加、サイトエディターでのブロックの追加とテンプレートのエクスポートについて学びます。

<!--
Full site editing is an experimental feature, and the workflow in this tutorial is likely to change.
 -->
「フルサイト編集」は実験中の機能のため、以下の手順も変わる可能性があります。

<!--
This tutorial is up to date as of Gutenberg version 10.6.
 -->
このチュートリアルは Gutenberg Version 10.6 時点の最新です。

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
ブロックテーマを使用するには、まず Gutenberg プラグインを使用する必要があります。

<!--
A block theme is built using HTML templates and template parts. Templates are the main files used in the [template hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/), for example index, single or archive. Templates can optionally include structural template parts, for example a header, footer or sidebar.
 -->
<!--
ブロックテーマは HTML テンプレートとテンプレートパーツから構成されています。テンプレートは[テンプレート階層](https://developer.wordpress.org/themes/basics/template-hierarchy/)内で使用されるメインのファイルで、たとえば index、single、archive などがあります。テンプレートはオプションで、ヘッダー、フッター、サイドバーなどの構造化テンプレートパーツを含むことができます。
 -->
<!--
Each template or template part contains the [block grammar](/docs/explanations/architecture/key-concepts/), the HTML, for the selected blocks. The block HTML is generated in and exported from the **site editor**. It can also be added to the theme's HTML files manually.
 -->
<!--
各テンプレート、テンプレートパーツは、選択したブロックの [ブロック文法](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/key-concepts/)、すなわち HTML を含みます。ブロック HTML は **サイトエディター** で生成し、エクスポートします。手動でテーマの HTML ファイルに追加することもできます。
 -->

<!--
### Required files and file structure
 -->
### 必要なファイルとファイル構造

<!--
There are two files that are required to activate any theme: `index.php` and `style.css`.
For the plugin to recognize that a block theme is active, the theme must also include an `index.html` template
inside a folder called `block-templates`.
 -->
任意のテーマを有効化するには2つのファイル、`index.php` と `style.css` が必要です。ブロックテーマが有効だとプラグインが認識するには、テーマはフォルダー `block-templates` 内にテンプレート `index.html` を含める必要があります。

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
この例では、フォルダー名は `fse-tutorial` です。

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
_You no longer need to add theme support for the title tag. It is already enabled with full site editing._

https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/
 -->
<!--
_タイトルタグのテーマサポートの追加は不要です。すでにフルサイト編集では有効化されています。_

[What is functions.php?](https://developer.wordpress.org/themes/basics/theme-functions/#what-is-functions-php)

[テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/)
 -->

<!--
<div class="callout callout-tip">
You will add most of the theme support in the `theme.json` file. The title tag is already enabled for all block themes, and it is no longer necessarry to enqueue the comment reply script because it is included with the comments block.
</div>
 -->
> テーマサポートのほとんどは `theme.json`ファイルに追加します。title タグはすでにすべてのブロックテーマで有効です。また、コメントリプライスクリプトはコメントブロックに含まれているため、もうエンキューする必要はありません。

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
進める前に、テーマをインストールし、有効化してください。

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
2つのテンプレートパーツファイル `header.html` と `footer.html`、 を作成し、`block-template-parts` フォルダー内に保存してください。

<!--
Create two template parts called `footer.html` and `header.html` and place them inside the `block-template-parts` folder. You can leave the files empty for now.
 -->
<!--
2つのテンプレートパーツ `footer.html`、`header.html` を作成し、`block-template-parts` フォルダー内に保存してください。
ファイルの中身は空で構いません。
 -->

<!--
Inside the block-templates folder, create an `index.html` file.
 -->
<!--
block-templates フォルダー内に `index.html` ファイルを作成してください。
 -->
<!--
In `index.html`, include the template parts by adding two HTML comments.
 -->
<!--
2つの HTML コメントを追加することで `index.html` にテンプレートパーツを含めます。
 -->

<!--
The HTML comments starts with `wp:template-part` which is the name of the template-part block type. Inside the curly brackets are two keys and their values: The slug of the template part, and the theme text domain.
 -->
<!--
HTML コメントは `wp:template-part` で始めます。これは template-part ブロックタイプの名前です。中括弧の中には2つのキーと値、テンプレートパーツのスラッグとテーマのテキストドメインを含めます。
 -->

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
クレジットを `footer.html` に追加してください。

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
If you used a different theme name, adjust the value for the theme text domain.

Eventually, you will be able to create and combine templates and template parts directly in the site editor.
 -->
<!--
テーマ名を変えるにはテーマのテキストドメインの値に指定してください。

将来的にはテンプレートやテンプレートパーツを直接サイトエディターで作成し、組み合わせできるようになります。
 -->

<!--
The HTML element that wraps the block content also uses the corresponding CSS class: `has-text-align-center`.
 -->
The HTML element that wraps the block content also uses the corresponding CSS class: `has-text-align-center`.

<!--
<div class="callout callout-tip">
If you are not sure what the correct block markup is, you can add the block in the block editor
and copy the block markup from the code editor mode to your theme files.
</div>
 -->
<div class="callout callout-tip">
If you are not sure what the correct block markup is, you can add the block in the block editor
and copy the block markup from the code editor mode to your theme files.
</div>

<!--
### Template creation in the site editor
 -->
### Template creation in the site editor

<!--
Open the Site Editor from the WordPress admin menu. The default view is the blank index template.
 -->
Open the Site Editor from the WordPress admin menu. The default view is the blank index template.

<!--
Insert a new template part block. The block will have the default name "Untitled Template Part".
Open the **Advanced** section of the block settings sidebar and make the following changes:
Change the title and area to Header, and the HTML element to `<header>`.
 -->
Insert a new template part block. The block will have the default name "Untitled Template Part".
Open the **Advanced** section of the block settings sidebar and make the following changes:
Change the title and area to Header, and the HTML element to `<header>`.

<!--
Repeat the process for the site footer: Change the title and area to Footer, and the HTML element to `<footer>`.
 -->
Repeat the process for the site footer: Change the title and area to Footer, and the HTML element to `<footer>`.

<!--
Add a site title block to the header template part, and a paragraph to the footer.
Save the changes. You will be asked if you want to save the two template parts, the index template, or all three.
Confirm that the checkboxes are correct and save all three.
 -->
Add a site title block to the header template part, and a paragraph to the footer.
Save the changes. You will be asked if you want to save the two template parts, the index template, or all three.
Confirm that the checkboxes are correct and save all three.

<!--
### Template editing mode
 -->
### Template editing mode

<!--
The template editing mode is a way to edit the website without the complexity of the site editor interface.
It is more limited than the site editor because you can not create, select or navigate between templates in this view.
 -->
The template editing mode is a way to edit the website without the complexity of the site editor interface.
It is more limited than the site editor because you can not create, select or navigate between templates in this view.

<!--
You access the template editing mode via the block editor.
Create a new post or page. Next, open the document settings sidebar and locate the **Template** panel below **Status & visibility**.
Here you will find information about the current template and a list of existing templates to choose from.
Create a new template by selecting the **New** link.
Edit and save the template in the same way as in the site editor.
 -->
You access the template editing mode via the block editor.
Create a new post or page. Next, open the document settings sidebar and locate the **Template** panel below **Status & visibility**.
Here you will find information about the current template and a list of existing templates to choose from.
Create a new template by selecting the **New** link.
Edit and save the template in the same way as in the site editor.

<!--
### Exporting
 -->
### Exporting

<!--
Templates and template parts that have been created or edited in the site editor or template editing mode
are saved to the database as custom post types. To export them as theme files, follow these steps:
 -->
Templates and template parts that have been created or edited in the site editor or template editing mode
are saved to the database as custom post types. To export them as theme files, follow these steps:

<!--
- In the site editor, open the **More tools and options** menu.
- Select the **Export** option to download a zip file containing the files. Unpack the files.
- Copy the updated `index.html` file from `theme/block-templates/` to your theme's `block-templates` folder.
- Copy template part one and two from `theme/block-template-parts/` to your theme's `block-template-parts` folder.
- Rename the template parts to `header.html` and `footer.html`, respectively.
- Open `index.html` and update the template part slugs in the block markup.
 -->
- In the site editor, open the **More tools and options** menu.
- Select the **Export** option to download a zip file containing the files. Unpack the files.
- Copy the updated `index.html` file from `theme/block-templates/` to your theme's `block-templates` folder.
- Copy template part one and two from `theme/block-template-parts/` to your theme's `block-template-parts` folder.
- Rename the template parts to `header.html` and `footer.html`, respectively.
- Open `index.html` and update the template part slugs in the block markup.

<!--
Saved templates have precedence over theme files. To use the updated theme files, go to **Appearance > Templates** and
**Appearance > Template parts** and delete the saved templates.
 -->
Saved templates have precedence over theme files. To use the updated theme files, go to **Appearance > Templates** and
**Appearance > Template parts** and delete the saved templates.

<!--
### Additional templates
 -->
### Additional templates
<!--
#### Blog
 -->
#### Blog

<!--
Now the theme has a basic site header and footer, but it does not display any content.
To create a list of posts, you will use the query and query loop blocks.
 -->
Now the theme has a basic site header and footer, but it does not display any content.
To create a list of posts, you will use the query and query loop blocks.

<!--
Whether you are using the site editor or editing theme files directly, open the index template.
 -->
Whether you are using the site editor or editing theme files directly, open the index template.

<!--
First, add a group block that will work as a container for the posts.
Next, enable the width options for the blocks inside this group using `"layout":{"inherit":true}`.
 -->
First, add a group block that will work as a container for the posts.
Next, enable the width options for the blocks inside this group using `"layout":{"inherit":true}`.

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
Change the `<div>` in the group block to a `<main>` element using the `tagName` attribute:

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
If you are using one of the editors, change the element from `<div>` to `<main>` under **Advanced** in the block setting sidebar.

<!--
Add a query block inside the group.
When you place a query block in the editor, the query loop is used as an inner block and you have the option to start with an empty loop or include selected post blocks like a post title and featured image.
 -->
Add a query block inside the group.
When you place a query block in the editor, the query loop is used as an inner block and you have the option to start with an empty loop or include selected post blocks like a post title and featured image.

<!--
Example markup:
 -->
Example markup:

```html
<!-- wp:query -->
<div class="wp-block-query"><!-- wp:query-loop -->
<!-- wp:post-title /-->
<!-- wp:post-date /-->
<!-- wp:post-excerpt /-->
<!-- /wp:query-loop --></div>
<!-- /wp:query -->
```

<!--
The query pagination block can only be used inside the query. Place it inside the query, but outside the loop:
 -->
The query pagination block can only be used inside the query. Place it inside the query, but outside the loop:

```html
<!-- wp:query -->
<div class="wp-block-query"><!-- wp:query-loop -->
<!-- wp:post-title /-->
<!-- wp:post-date /-->
<!-- wp:post-excerpt /-->
<!-- /wp:query-loop -->

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
#### Posts and pages

<!--
Next, create a new template for displaying single posts.
If you are editing theme files directly, create a file called `single.html` inside the block-templates folder.
 -->
Next, create a new template for displaying single posts.
If you are editing theme files directly, create a file called `single.html` inside the block-templates folder.

<!--
Add the site header and site footer template parts:
 -->
Add the site header and site footer template parts:

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

<!--
Add a group block that will work as a container for your post:
 -->
Add a group block that will work as a container for your post:

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
Add your preferred blocks inside the group block. Some new blocks that are available are:

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
Save the HTML file, or save and export the post template if you are working in the site editor.

<!--
Copy all the blocks and create a template for displaying pages.
Optionally, save a copy of `single.html` as `page.html` inside the block-templates folder.
Adjust the blocks for the page template, and save.
 -->
Copy all the blocks and create a template for displaying pages.
Optionally, save a copy of `single.html` as `page.html` inside the block-templates folder.
Adjust the blocks for the page template, and save.

<!--
#### Archives
 -->
#### Archives

<!--
If a theme does not have an archive or search result template, the index template will be used as a fallback.
To make sure that the query block shows the correct results, it has an attribute called `inherit`.
Inherit is enabled by default and filters the query depending on the page that you are viewing.
 -->
If a theme does not have an archive or search result template, the index template will be used as a fallback.
To make sure that the query block shows the correct results, it has an attribute called `inherit`.
Inherit is enabled by default and filters the query depending on the page that you are viewing.

<!--
If you like you can continue creating an archive or category template by copying the index file and
adding a title using the archive title block. This is a variation of the query title block:
 -->
If you like you can continue creating an archive or category template by copying the index file and
adding a title using the archive title block. This is a variation of the query title block:
`<!-- wp:query-title {"type":"archive"} /-->`

<!--
## Theme.json - Global styles
 -->
## theme.json - グローバルスタイル

<!--
The purpose of the `theme.json` file is to make it easier to style blocks by setting defaults.
 -->
<!--
`theme.json` ファイルはブロックのスタイルにデフォルトを設定し、ブロックのスタイルを支援します。
 -->
<!--
It is used to:
-   Create CSS variables (also called CSS custom properties) that can be used to style blocks both on the front and in the editor.
-   Set global styles.
-   Set styles for individual block types.
 -->
<!--
theme.json ファイルを使用することで以下が可能です。
- CSS 変数 (または CSS カスタムプロパティとも呼ばれる) の作成。CSS 変数はフロントエンドでも、エディター内でもブロックのスタイルに使用されます。
- グローバルスタイルの設定
- 個別ブロックタイプのスタイルの設定
 -->
<!--
[The documentation for global styles contains a list of available block and style combinations.](/docs/how-to-guides/themes/theme-json.md)

Create a file called `theme.json` and save it inside the main folder.
 -->
<!--
[グローバルスタイルのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/)には利用可能なスタイルとスタイルの組み合わせの一覧があります。

メインのフォルダー内に `theme.json` ファイルを作成してください。
 -->
<!--
CSS variables are generated using **Global presets**. The variables are added to the `:root` on the front, and to the `.editor-styles-wrapper` class in the editor.
 -->
<!--
CSS 変数は **グローバルプリセット** を使用して生成されます。変数は、フロント表示時の `:root` と、エディター表示時の `.editor-styles-wrapper` クラスに追加されます。
 -->
<!--
Styles that are added to the themes `style.css` file or an editor style sheet are loaded after global styles.

Add the following global presets to the `theme.json` file:
 -->
<!--
テーマの `style.css` やエディターのスタイルシートに追加されたスタイルは、グローバルスタイルの後でロードされます。

`theme.json` ファイルに次のグローバルプリセットを追加してください。
 -->


<!--
`theme.json` is a configuration file used to enable or disable features and set default styles for both the website and blocks.
 -->
`theme.json` is a configuration file used to enable or disable features and set default styles for both the website and blocks.

<!--
Style settings are converted to CSS custom properties and enqueued for the editor and the front,
reducing the need for the theme to enqueue block styles.
 -->
Style settings are converted to CSS custom properties and enqueued for the editor and the front,
reducing the need for the theme to enqueue block styles.

<!--
To make the most out of this tutorial, read the [documentation for global styles](/docs/how-to-guides/themes/theme-json.md).
 -->
To make the most out of this tutorial, read the [documentation for global styles](/docs/how-to-guides/themes/theme-json.md).

<!--
[Learn more about the JSON format (external link)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
 -->
[Learn more about the JSON format (external link)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)

<!--
Create a file called `theme.json` and save it inside the main theme folder.
 -->
Create a file called `theme.json` and save it inside the main theme folder.

<!--
Start by adding two curly brackets to the file:
 -->
Start by adding two curly brackets to the file:

```json
{

}
```
<!--
This code generates the following variables:
 -->
<!--
このコードは次の変数を生成します。
 -->

<!--
Add the version number for the theme.json format. For Gutenberg 10.6, the version number is 1:
 -->
Add the version number for the theme.json format. For Gutenberg 10.6, the version number is 1:

```json
{
	"version": 1,
}
```

<!--
Next, add three main sections:
 -->
Next, add three main sections:

<!--
- Settings -Where you will enable features and create presets for styles.
- Styles -Where you apply styles to the website, elements, and blocks.
- templateParts -For assigning template part files to template areas.
 -->
- Settings -Where you will enable features and create presets for styles.
- Styles -Where you apply styles to the website, elements, and blocks.
- templateParts -For assigning template part files to template areas.

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
**Global styles** are used to set default values for the website and for the blocks.

This example will add the dark grey color as the website background color.
Add the code inside the globals, after the presets:
 -->
<!--
**グローバルスタイル** を使用すると Web サイトとブロックのデフォルト値を設定できます。

この例では Web サイトの背景色としてダークグレイを追加します。
globals の中、presets の下にこのコードを追加してください。
 -->
<!--
Remember to separate the objects with a comma.
 -->
Remember to separate the objects with a comma.

<!--
### Enabling and disabling features
 -->
### Enabling and disabling features

<!--
For a list of features that can be enabled or disabled, see the [documentation for theme.json](https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json/#settings).
 -->
For a list of features that can be enabled or disabled, see the [documentation for theme.json](https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json/#settings).

<!--
There are two different ways that a block can support a feature:
 -->
There are two different ways that a block can support a feature:

<!--
- By displaying a control in the block settings sidebar.
- By allowing defaults to be set using `theme.json`.
 -->
- By displaying a control in the block settings sidebar.
- By allowing defaults to be set using `theme.json`.

<!--
<div class="callout callout-tip">
It is not possible to add controls to a block that does not support them by using theme.json.
</div>
 -->
<div class="callout callout-tip">
It is not possible to add controls to a block that does not support them by using theme.json.
</div>

<!--
Example:
A block that does not have support for border controls, can have a default border set inside the `theme.json` file,
as long as the border feature is enabled.
 -->
Example:
A block that does not have support for border controls, can have a default border set inside the `theme.json` file,
as long as the border feature is enabled.

<!--
To enable border styles, add a `border` object under `settings` with the following attributes and values:
 -->
To enable border styles, add a `border` object under `settings` with the following attributes and values:

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
To enable link colors, add a `color` setting and set `link` to true:

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
**Block styles** sets default values for all blocks of a specific type.

This example uses the CSS variables to add text color and line height to the H2 heading block,
in combination with a custom font size.
 -->
<!--
**ブロックスタイル** は特定のタイプのすべてのブロックにデフォルト値を設定します。

この例では CSS 変数を使用して h2 見出しブロックに、カスタムフォントサイズと組み合わせてテキスト色と行高を追加します。
 -->
<!--
When adding styles for the headings block, include the heading level, h1 to h6.

Block styles are separate from global styles. Add the code after the globals, but before the closing brace.
 -->
<!--
見出しブロックにスタイルを追加する際は、h1 から h6 の見出しレベルを含めてください。

ブロックスタイルをグローバルスタイルから分離します。globals の下、閉じる括弧の前に次のコードを追加してください。
 -->



<!--
To enable padding and custom spacing units, include a setting for spacing:
 -->
To enable padding and custom spacing units, include a setting for spacing:

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
			"units": [ "px", "em", "rem", "vh", "vw" ]
		}
	}
}
```

<!--
#### Disabling features
 -->
#### Disabling features

<!--
If you want to disable gradients, which are enabled by default, set `gradient` to false:
 -->
If you want to disable gradients, which are enabled by default, set `gradient` to false:

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
### Content width and theme support for wide and full-width blocks

<!--
The `layout` setting enables width settings for group blocks and template parts
and replaces `add_theme_support( 'align-wide' );`.
 -->
The `layout` setting enables width settings for group blocks and template parts
and replaces `add_theme_support( 'align-wide' );`.

<!--
The benefit of enabling the layout setting in `theme.json` is that you no longer need to add extra CSS for
block alignments or widths. You can also set more precise widths to blocks inside containers.
 -->
The benefit of enabling the layout setting in `theme.json` is that you no longer need to add extra CSS for
block alignments or widths. You can also set more precise widths to blocks inside containers.

<!--
The keys used by `layout` are:
 -->
The keys used by `layout` are:

<!--
- `contentSize` Default width for the blocks.
- `wideSize` Wide width.
 -->
- `contentSize` Default width for the blocks.
- `wideSize` Wide width.

<!--
The example uses pixels, but you can use any valid CSS value and unit.
(The code example is truncated to illustrate where to add the option.)
 -->
The example uses pixels, but you can use any valid CSS value and unit.
(The code example is truncated to illustrate where to add the option.)

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
### Color palette

<!--
This is the equivalent of `add_theme_support( 'editor-color-palette' )`.
You can add multiple color palettes: a default palette for all blocks, and color palettes specific to a block type.
 -->
This is the equivalent of `add_theme_support( 'editor-color-palette' )`.
You can add multiple color palettes: a default palette for all blocks, and color palettes specific to a block type.

<!--
The keys used by `palette` are:
 -->
The keys used by `palette` are:

<!--
- `slug` A unique identifier for the color.
- `color` The hex color value.
- `name` The visible name in the editor. Optional.
 -->
- `slug` A unique identifier for the color.
- `color` The hex color value.
- `name` The visible name in the editor. Optional.

<!--
Multiple colors are added as an array using square brackets: `[]`.
Add a default color palette inside `settings`, under `color`:
 -->
Multiple colors are added as an array using square brackets: `[]`.
Add a default color palette inside `settings`, under `color`:

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
Next, add a trailing comma after `color`, and add a new palette for the heading block.
This palette will override the default theme palette.

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
Presets are created under `settings` and applied under `styles`.
Apply the white color to the body background by adding `color` followed by the `background` key and value:

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
### Typography

<!--
To add custom font sizes, create a new section called `typography` under `settings`.
`fontSizes` is the equivalent of `add_theme_support( 'editor-font-sizes' )`.
 -->
To add custom font sizes, create a new section called `typography` under `settings`.
`fontSizes` is the equivalent of `add_theme_support( 'editor-font-sizes' )`.

```json
"typograhy": {
	"fontSizes": [
	]
}
```

<!--
The keys used by `fontSizes` are:
 -->
The keys used by `fontSizes` are:

<!--
- `slug` A unique identifier for the size.
- `size` The size value. This can be unitless or use any valid CSS value.
- `name` The visible name in the editor.
 -->
- `slug` A unique identifier for the size.
- `size` The size value. This can be unitless or use any valid CSS value.
- `name` The visible name in the editor.

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
To apply a size to a block, follow these steps:
Create a new section called `blocks` under `styles`

```json
"blocks": {

}
```

<!--
Add the names of the blocks that you want to set defaults for
 -->
Add the names of the blocks that you want to set defaults for

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
Add the `typography` setting, and set the `fontSize` value to the preset that you created

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
### Elements

<!--
With the `elements` setting, you can set defaults for links and headings on the website and inside blocks.
 -->
With the `elements` setting, you can set defaults for links and headings on the website and inside blocks.

<!--
#### Elements on the website
 -->
#### Elements on the website

<!--
Set a font color to all `<H2>` headings, regardless of if the heading is a site title, post title, or heading block:
 -->
Set a font color to all `<H2>` headings, regardless of if the heading is a site title, post title, or heading block:

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
Add a default link text color:

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
#### Elements inside blocks

<!--
Some blocks have more than one element, or have different elements depending on settings.
 -->
Some blocks have more than one element, or have different elements depending on settings.

<!--
Example: If you set a background color to a post excerpt block, that background affects the entire block.
You can set a background to the optional "read more" link in the post excerpt block using elements:
 -->
Example: If you set a background color to a post excerpt block, that background affects the entire block.
You can set a background to the optional "read more" link in the post excerpt block using elements:
`Styles > blocks > the name of the block > elements > element > attribute`

<!--
Since the theme has custom padding enabled, you can add `padding` within the `spacing` attribute to make the background color more visible:
 -->
Since the theme has custom padding enabled, you can add `padding` within the `spacing` attribute to make the background color more visible:

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
### Template parts

<!--
In the templeParts section, assign the two template parts that you created to their template areas.
Add two keys:
 -->
In the templeParts section, assign the two template parts that you created to their template areas.
Add two keys:
<!--
-`name`, the file name of the template part file without the file extension,
-`area`, the name of the template area.
 -->
-`name`, the file name of the template part file without the file extension,
-`area`, the name of the template area.

<!--
There are three template areas to choose from: Header, footer, and general.
 -->
There are three template areas to choose from: Header, footer, and general.

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
## Custom templates

<!--
Custom templates for posts, pages, and custom post types are created by adding additional HTML files inside the
`block-templates` folder.
In a classic theme, templates are identified with a file header. In a block theme, you list templates in the `theme.json` file.
 -->
Custom templates for posts, pages, and custom post types are created by adding additional HTML files inside the
`block-templates` folder.
In a classic theme, templates are identified with a file header. In a block theme, you list templates in the `theme.json` file.

<!--
All templates that are listed in the `customTemplates` section of `theme.json` are selectable in the site editor.
 -->
All templates that are listed in the `customTemplates` section of `theme.json` are selectable in the site editor.

<!--
For templates to be editable in the template editing mode, the template's file name needs to be prefixed with either `post-` or `page-`.
 -->
For templates to be editable in the template editing mode, the template's file name needs to be prefixed with either `post-` or `page-`.

<!--
First, create a section called `customTemplates` at the root level of `theme.json`.
This section has two required keys:
`Name`, which is the name of the template file without the file ending.
`title`, which is the visible title of the template in the editors.
 -->
First, create a section called `customTemplates` at the root level of `theme.json`.
This section has two required keys:
`Name`, which is the name of the template file without the file ending.
`title`, which is the visible title of the template in the editors.

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
There is also an optional setting where you decide which post types that can use the template.
The key is `postTypes`, followed by the name of the post type:

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
## Example themes

<!--
You can find a basic starter theme called "emptytheme" and other example themes
on the [Experimental themes GitHub repository](https://github.com/WordPress/theme-experiments).
When using a theme as reference, take note of which Gutenberg version the theme is built for,
because the experimental features are updated frequently.
 -->
You can find a basic starter theme called "emptytheme" and other example themes
on the [Experimental themes GitHub repository](https://github.com/WordPress/theme-experiments).
When using a theme as reference, take note of which Gutenberg version the theme is built for,
because the experimental features are updated frequently.

<!--
The theme directory lists block themes under the tag [full site editing](https://wordpress.org/themes/tags/full-site-editing/).
 -->
The theme directory lists block themes under the tag [full site editing](https://wordpress.org/themes/tags/full-site-editing/).

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/block-based-theme/README.md)
