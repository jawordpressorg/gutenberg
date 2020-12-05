<!-- 
# Creating a block-based theme
 -->
# ブロックベーステーマの作成
<!-- 
The purpose of this tutorial is to show how to create a basic block based theme
and help theme developers transition to full site editing.

You will learn about the required files, how to combine templates and template parts,
how to add presets for global styles, and how to add blocks and export the templates in the site editor.
 -->
このチュートリアルの目的は基本的なブロックベーステーマの作り方の紹介と、テーマ開発者の「フルサイト編集 (full site editing)」への移行の支援です。

このチュートリアルでは、ブロックベーステーマに必要なファイルの一覧、テンプレートとテンプレートパーツの組み合わせ、グローバルスタイルへのプリセットの追加、サイトエディターでのブロックの追加とテンプレートのエクスポートについて学びます。
<!-- 
Full site editing is an experimental feature and the workflow in this tutorial is likely to change.
 -->
「フルサイト編集」は実験中の機能のため、以下の手順も変わる可能性があります。

<!-- 
This tutorial is up to date as of Gutenberg version 9.1.
 -->
このチュートリアルは Gutenberg Version 9.1 時点の最新です。

<!-- 
## Table of Contents
 -->
## 目次

<!-- 
 1. [What is needed to create a block-based theme?](/docs/designers-developers/developers/tutorials/block-based-themes/README.md#what-is-needed-to-create-a-block-based-theme)
 2. [Creating the theme](/docs/designers-developers/developers/tutorials/block-based-themes/README.md#creating-the-theme)
 3. [Creating the templates and template parts](/docs/designers-developers/developers/tutorials/block-based-themes/README.md#creating-the-templates-and-template-parts)
 4. [Experimental-theme.json - Global styles](/docs/designers-developers/developers/tutorials/block-based-themes/README.md#experimental-theme-json-global-styles)
 5. [Adding blocks](/docs/designers-developers/developers/tutorials/block-based-themes/block-based-themes-2-adding-blocks.md)
 -->
 1. ブロックベーステーマを作成するには何が必要か ?
 2. テーマの作成
 3. テンプレートとテンプレートパーツの作成
 4. experimental-theme.json - グローバルスタイル
 5. [ブロックの追加](https://ja.wordpress.org/team/handbook/block-editor/tutorials/block-based-themes/block-based-themes-2-adding-blocks/)

<!-- 
## What is needed to create a block-based theme?
 -->
## ブロックベーステーマを作成するには何が必要か ?
<!-- 
To use a block based theme you need to have Gutenberg installed and full site editing must be enabled.

Full site editing can be enabled from the Gutenberg experiments menu in the WordPress admin area.
 -->
ブロックベーステーマを使用するには Gutenberg をインストールし、「フルサイト編集」を有効化する必要があります。「フルサイト編集」は WordPress 管理画面の「Gutenberg」->「実験中」メニューから有効化できます。

<!-- 
A block-based theme is built using HTML templates and template parts. Templates are the main files used in the [template hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/), for example index, single or archive. Templates can optionally include structural template parts, for example a header, footer or sidebar.
 -->
ブロックベーステーマは HTML テンプレートとテンプレートパーツから構成されています。テンプレートは[テンプレート階層](https://developer.wordpress.org/themes/basics/template-hierarchy/)内で使用されるメインのファイルで、たとえば index、single、archive などがあります。テンプレートはオプションで、ヘッダー、フッター、サイドバーなどの構造化テンプレートパーツを含むことができます。

<!-- 
Each template or template part contains the [block grammar](https://developer.wordpress.org/block-editor/principles/key-concepts/#blocks), the HTML, for the selected blocks. The block HTML is generated in and exported from the **site editor**. It can also be added to the theme's HTML files manually.
 -->
各テンプレート、テンプレートパーツは、選択したブロックの HTML、[ブロック文法](https://developer.wordpress.org/block-editor/principles/key-concepts/#blocks)を含みます。ブロック HTML は **サイトエディター** で生成し、エクスポートします。手動でテーマの HTML ファイルに追加することもできます。

<!-- 
### Required files and file structure
 -->
### 必要なファイルとファイル構造

<!-- 
A block based theme requires an `index.php` file, an index template file, a `style.css` file, and a `functions.php` file.
 -->
ブロックベーステーマには index テンプレートファイルの `index.php` ファイル、スタイル用 `style.css` ファイル、`functions.php` ファイルが必要です。

<!-- 
The theme may optionally include an [experimental-theme.json file](/docs/designers-developers/developers/themes/theme-json.md) to manage global styles. You decide what additional templates and template parts to include in your theme.
 -->
テーマはグローバルなスタイルを管理する experimental-theme.json ファイルをオプションで含むこともできます。さらにテーマには追加のテンプレートやテンプレートパーツを含めることができます。

<!-- 
Templates are placed inside the `block-templates` folder, and template parts are placed inside the `block-template-parts` folder:
 -->
テンプレートは `block-templates` フォルダー内に、テンプレートパーツは `block-template-parts` フォルダー内に配置します。

```
theme
|__ style.css
|__ functions.php
|__ index.php
|__ experimental-theme.json
|__ block-templates
	|__ index.html
	|__ single.html
	|__ archive.html
	|__ ...
|__ block-template-parts
	|__ header.html
	|__ footer.html
	|__ sidebar.html
	|__ ...
```

<!-- 
## Creating the theme
 -->
## テーマの作成

<!-- 
Create a new folder for your theme in `/wp-content/themes/`.
Inside this folder, create the `block-templates` and `block-template-parts` folders.
 -->
`/wp-content/themes/` 下にテーマ用の新しいフォルダーを作成してください。
フォルダーの中に `block-templates` フォルダーと `block-template-parts` フォルダーを作成します。

<!-- 
Create a `style.css` file. The file header in the `style.css` file has [the same items that you would use in a traditional theme](https://developer.wordpress.org/themes/basics/main-stylesheet-style-css/#explanations).
 -->
`style.css` ファイルを作成してください。style.css ファイルのヘッダーには[通常のテーマと同じ要素を記述します](https://developer.wordpress.org/themes/basics/main-stylesheet-style-css/#explanations)。


```
/*
Theme Name: My first theme
Theme URI: 
Author: The WordPress team
Author URI: https://wordpress.org/
Description: 
Tags:
Version: 1.0.0
Requires at least: 5.0
Tested up to: 5.4
Requires PHP: 7.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: myfirsttheme

This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.
*/
```
<!-- 
Create a `functions.php` file.
 -->
`functions.php` ファイルを作成してください。

<!-- 
In this file, you will enqueue the `style.css` file and add any theme support that you want to use. For example colors, wide blocks and featured images.
 -->
このファイルで `style.css` ファイルをエンキューし、色、幅広ブロック、アイキャッチ画像など使用したいテーマサポートを追加します。

<!-- 
_You no longer need to add theme support for the title tag. It is already enabled with full site editing._

https://developer.wordpress.org/themes/basics/theme-functions/#what-is-functions-php

https://developer.wordpress.org/block-editor/developers/themes/theme-support/
 -->
_タイトルタグのテーマサポートの追加は不要です。すでにフルサイト編集では有効化されています。_

[What is functions.php?](https://developer.wordpress.org/themes/basics/theme-functions/#what-is-functions-php)

[Theme Support](https://developer.wordpress.org/block-editor/developers/themes/theme-support/)

```php
<?php
if ( ! function_exists( 'myfirsttheme_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which runs
 * before the init hook. The init hook is too late for some features, such as indicating
 * support post thumbnails.
 */
function myfirsttheme_setup() {
 
	/**
	 * Add default posts and comments RSS feed links to <head>.
	 */
	add_theme_support( 'automatic-feed-links' );
 
	/**
	 * Enable support for post thumbnails and featured images.
	 */
	add_theme_support( 'post-thumbnails' );

	add_theme_support( 'editor-color-palette', array(
		array(
			'name' => __( 'strong magenta', 'myfirsttheme' ),
			'slug' => 'strong-magenta',
			'color' => '#a156b4',
		),
		array(
			'name' => __( 'very dark gray', 'myfirsttheme' ),
			'slug' => 'very-dark-gray',
			'color' => '#444',
		),
	) );

	add_theme_support( 'wp-block-styles' );

	add_theme_support( 'align-wide' );
}
endif; // myfirsttheme_setup
add_action( 'after_setup_theme', 'myfirsttheme_setup' );

/**
 * Enqueue theme scripts and styles.
 */
function myfirsttheme_scripts() {
	wp_enqueue_style( 'myfirsttheme-style', get_stylesheet_uri() );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'myfirsttheme_scripts' );
```
<!-- 
Create an `index.php` file.
This file is used as a fallback if the theme is activated when full site editing is not enabled. 
You may leave the file empty for this tutorial.

Your theme should now include the following files and folders:
 -->
`index.php` ファイルを作成してください。
このファイルはテーマは有効化されたものの、「フルサイト編集」が有効化されていない場合のフォールバックとして使用されます。このチュートリアルでは空のままで構いません。

この段階でテーマには次のようなファイルとフォルダーがあります。

```
theme
 |__ style.css
 |__ functions.php
 |__ index.php
 |__ block-templates
 	|__ (empty folder)
 |__ block-template-parts
 	|__ (empty folder)
```
<!-- 
### Creating the templates and template parts
 -->
### テンプレートとテンプレートパーツの作成

<!-- 
Create two template parts called `footer.html` and `header.html` and place them inside the `block-template-parts` folder. You can leave the files empty for now.
 -->
2つのテンプレートパーツ `footer.html`、`header.html` を作成し、`block-template-parts` フォルダー内に保存してください。
ファイルの中身は空で構いません。

<!-- 
Inside the block-templates folder, create an `index.html` file.
 -->
block-templates フォルダー内に `index.html` ファイルを作成してください。

<!-- 
In `index.html`, include the template parts by adding two HTML comments.
 -->
2つの HTML コメントを追加することで `index.html` にテンプレートパーツを含めます。

<!-- 
The HTML comments starts with `wp:template-part` which is the name of the template-part block type. Inside the curly brackets are two keys and their values: The slug of the template part, and the theme name.
 -->
HTML コメントは `wp:template-part` で始めます。これは template-part ブロックタイプの名前です。中括弧の中には2つのキーと値、テンプレートパーツのスラッグとテーマ名を含めます。

```
<!-- wp:template-part {"slug":"header","theme":"myfirsttheme"} /-->

<!-- wp:template-part {"slug":"footer","theme":"myfirsttheme"} /-->
```
<!-- 
If you used a different theme name, adjust the value for the theme key.

Eventually, you will be able to create and combine templates and template parts directly in the site editor.
 -->
テーマ名を変えるには theme キーの値に指定してください。

将来的にはテンプレートやテンプレートパーツを直接サイトエディターで作成し、組み合わせできるようになります。

<!-- 
### Experimental-theme.json - Global styles
 -->
### experimental-theme.json - グローバルスタイル

<!-- 
The purpose of the `experimental-theme.json` file is to make it easier to style blocks by setting defaults.
 -->
`experimental-theme.json` ファイルはブロックのスタイルにデフォルトを設定し、ブロックのスタイルを支援します。

<!-- 
It is used to:
 * Create CSS variables (also called CSS custom properties) that can be used to style blocks both on the front and in the editor.
 * Set global styles.
 * Set styles for individual block types.
 -->
experimental-theme.json ファイルを使用することで以下が可能です。
 * CSS 変数 (または CSS カスタムプロパティとも呼ばれる) の作成。CSS 変数はフロントエンドでも、エディター内でもブロックのスタイルに使用されます。
 * グローバルスタイルの設定
 * 個別ブロックタイプのスタイルの設定

<!-- 
[The documentation for global styles contains a list of available block and style combinations.](https://developer.wordpress.org/block-editor/developers/themes/theme-json/)

Create a file called `experimental-theme.json` and save it inside the main folder.
 -->
[グローバルスタイルのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/developers/themes/theme-json/)には利用可能なスタイルとスタイルの組み合わせの一覧があります。

メインのフォルダー内に `experimental-theme.json` ファイルを作成してください。

<!-- 
CSS variables are generated using **Global presets**. The variables are added to the `:root` on the front, and to the `.editor-styles-wrapper` class in the editor.
 -->
CSS 変数は **グローバルプリセット** を使用して生成されます。変数は、フロント表示時の `:root` と、エディター表示時の `.editor-styles-wrapper` クラスに追加されます。

<!-- 
Styles that are added to the themes `style.css` file or an editor style sheet are loaded after global styles.

Add the following global presets to the `experimental-theme.json` file:
 -->
テーマの `style.css` やエディターのスタイルシートに追加されたスタイルは、グローバルスタイルの後でロードされます。

`experimental-theme.json` ファイルに次のグローバルプリセットを追加してください。

```
{
	"global": {
		"settings": {
			"color": {
				"palette": [
					{
						"slug": "strong-magenta",
						"color": "#a156b4"
					},
					{
						"slug": "very-dark-gray",
						"color": "#444"
					},
				]
			},
			"custom": {
				"line-height": [
					{
						"small": "1.3"
					},
					{
						"medium": "2"
					},
					{
						"large": "2.5"
					}
				]
			}
		}
	}
}
```
<!-- 
This code generates the following variables:
 -->
このコードは次の変数を生成します。

```
	--wp--preset--color--strong-magenta: #a156b4;
	--wp--preset--color--very-dark-gray: #444;
	
	--wp--custom--line-height--small: 1.3;
	--wp--custom--line-height--medium: 2;
	--wp--custom--line-height--large: 2.5;
```
<!-- 
**Global styles** are used to set default values for the website and for the blocks.

This example will add the dark grey color as the website background color.
Add the code inside the globals, after the presets:
 -->
**グローバルスタイル** を使用すると Web サイトとブロックのデフォルト値を設定できます。

この例では Web サイトの背景色としてダークグレイを追加します。
globals の中、presets の下にこのコードを追加してください。

```
	"styles": {
		"color": {
			"background": "var(--wp--preset--color--very-dark-gray)"
		}
	}
```
<!-- 
**Block styles** sets default values for all blocks of a specific type.

This example uses the CSS variables to add text color and line height to the H2 heading block,
in combination with a custom font size.
 -->
**ブロックスタイル** は特定のタイプのすべてのブロックにデフォルト値を設定します。

この例では CSS 変数を使用して h2 見出しブロックに、カスタムフォントサイズと組み合わせてテキスト色と行高を追加します。

<!-- 
When adding styles for the headings block, include the heading level, h1 to h6.

Block styles are separate from global styles. Add the code after the globals, but before the closing brace.
 -->
見出しブロックにスタイルを追加する際は、h1 から h6 の見出しレベルを含めてください。

ブロックスタイルをグローバルスタイルから分離します。globals の下、閉じる括弧の前に次のコードを追加してください。

```
"core/heading/h2": {
	"styles": {
		"color": {
			"text": "var( --wp--preset--color--strong-magenta )"
		},
		"typography": {
			"fontSize": "2.5rem",
			"lineHeight": "var(--wp--custom--line-height--medium)"
		}
	}
},
```
<!-- 
CSS variables for font sizes are generated using the `editor-font-sizes` theme support or by adding a global preset.

https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-font-sizes
 -->
フォントサイズ用の CSS 変数は、`editor-font-sizes` テーマサポートを使用するか、グローバルプリセットに追加することで生成されます。
https://ja.wordpress.org/team/handbook/block-editor/developers/themes/theme-support/#block-font-sizes

<!-- 
If the theme does not add any custom font sizes, variables are created using the default sizes.
This example adds the default medium font size to the paragraph block.

The font sizes are unitless, which is why calc is used: https://developer.mozilla.org/en-US/docs/Web/CSS/calc
 -->
テーマがカスタムフォントサイズを追加しない場合、変数はデフォルトサイズを使用して作成されます。
この例では段落ブロックにデフォルトの medium フォントサイズを追加します。

フォントサイズに単位は指定しません。calc が使用されるのはこのためです。https://developer.mozilla.org/en-US/docs/Web/CSS/calc

```
"core/paragraph": {
	"styles": {
		"typography": {
			"fontSize": "calc(1px * var( --wp--preset--font-size--medium ))"
		}
	}
},
```

<!-- 
Using the CSS variables is optional. In this example, the default background color for the group block is changed to white using a color code:
 -->
CSS 変数の仕様はオプションです。この例ではグループブロックのデフォルトの背景色をカラーコードを使用して白に変更します。

```
"core/group": {
	"styles": {
		"color": {
			"background": "#ffffff"
		}
	}
}
```
<!-- 
Below are the presets and styles combined:
 -->
以下はプリセットとスタイルを組み合わせた結果です。

```
{
	"global": {
		"settings": {
			"color": {
				"palette": [
					{
						"slug": "strong-magenta",
						"color": "#a156b4"
					},
					{
						"slug": "very-dark-gray",
						"color": "#444"
					},
				]
			},
			"custom": {
				"line-height": [
					{
						"small": "1.3"
					},
					{
						"medium": "2"
					},
					{
						"large": "2.5"
					}
				]
			}
		}
	},

	"core/heading/h2": {
		"styles": {
			"color": {
				"text": "var( --wp--preset--color--strong-magenta )"
			},
			"typography": {
				"fontSize": "2.5rem",
				"lineHeight": "var(--wp--custom--line-height--medium)"
			}
		}
	},

	"core/paragraph": {
		"styles": {
			"typography": {
				"fontSize": "calc(1px * var( --wp--preset--font-size--medium ))"
			}
		}
	},

	"core/group": {
		"styles": {
			"color": {
				"background": "#ffffff"
			}
		}
	}
}
```
<!-- 
## [Adding blocks](/docs/designers-developers/developers/tutorials/block-based-themes/block-based-themes-2-adding-blocks.md)
 -->
## [ブロックの追加](https://ja.wordpress.org/team/handbook/block-editor/tutorials/block-based-themes/block-based-themes-2-adding-blocks/)

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/tutorials/block-based-themes/README.md)