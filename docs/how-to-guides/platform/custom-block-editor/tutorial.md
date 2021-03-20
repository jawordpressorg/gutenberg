<!-- 
# Tutorial: building a custom block editor
 -->
# チュートリアル: カスタムブロックエディターの構築

<!-- 
This tutorial will step through the fundamentals of creating a custom instance
of a "block editor" using the `@wordpress/block-editor` package.
 -->
このチュートリアルでは `@wordpress/block-editor` パッケージを使用して「ブロックエディター」のカスタムインスタンスを作成する基礎を順に説明します。

<!-- 
## Table of Contents
 -->
## 目次

<!-- 
* [Introduction](#introduction).
* [What we're going to be building](#what-were-going-to-be-building).
* [Plugin setup and organization](#plugin-setup-and-organization).
* [The "Core" of the Editor](#the-core-of-the-editor).
* [Creating the custom "Block Editor" page in WP Admin](#creating-the-custom-block-editor-page-in-wp-admin).
* [Registering and Rendering our custom block editor](#registering-and-rendering-our-custom-block-editor).
* [Reviewing the `<Editor>` component](#reviewing-the-editor-component).
* [The custom `<BlockEditor>`](#the-custom-blockeditor).
* [Reviewing the Sidebar](#reviewing-the-sidebar).
* [Block Persistence](#block-persistence).
* [Wrapping up](#wrapping-up).
 -->
* [はじめに](https://ja.wordpress.org/team/handbook/block-editor/developers/platform/custom-block-editor/tutorial/#はじめに)
* [何を構築するのか](https://ja.wordpress.org/team/handbook/block-editor/developers/platform/custom-block-editor/tutorial/#何を構築するのか)
* [プラグインのセットアップと構造](https://ja.wordpress.org/team/handbook/block-editor/developers/platform/custom-block-editor/tutorial/#プラグインのセットアップと構造)
* [エディターの「コア」](https://ja.wordpress.org/team/handbook/block-editor/developers/platform/custom-block-editor/tutorial/#エディターの「コア」)
* [管理画面のカスタムページ「ブロックエディター」の作成](https://ja.wordpress.org/team/handbook/block-editor/developers/platform/custom-block-editor/tutorial/#管理画面のカスタムページ「ブロックエディター」の作成)
* [カスタムブロックエディターの登録とレンダー](https://ja.wordpress.org/team/handbook/block-editor/developers/platform/custom-block-editor/tutorial/#カスタムブロックエディターの登録とレンダー)
* [`<Editor>` コンポーネントのレビュー](https://ja.wordpress.org/team/handbook/block-editor/developers/platform/custom-block-editor/tutorial/#%3Ceditor%3E-%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC)
* [カスタム `<BlockEditor>`](https://ja.wordpress.org/team/handbook/block-editor/developers/platform/custom-block-editor/tutorial/#%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0-%3Cblockeditor%3E)
* [サイドバーのレビュー](https://ja.wordpress.org/team/handbook/block-editor/developers/platform/custom-block-editor/tutorial/#サイドバーのレビュー)
* [ブロックの永続性](https://ja.wordpress.org/team/handbook/block-editor/developers/platform/custom-block-editor/tutorial/#ブロックの永続性)
* [まとめ](https://ja.wordpress.org/team/handbook/block-editor/developers/platform/custom-block-editor/tutorial/#まとめ)

<!-- 
## Introduction
 -->
## はじめに
<!-- 
The Gutenberg codebase is complex, with many packages and components, but at its core it is a tool for managing and editing blocks. Therefore, when working on the editor it is important to gain a better understanding of how block editing works at a _fundamental_ level.
 -->
Gutenberg のコードには多くのコンポーネントやパッケージが含まれていて複雑ですが、その中心はブロックを管理、編集するツールです。このためエディター上で作業する際、ブロックの編集がどのように行われているのかを _基礎_ レベルで理解することは重要です。

<!-- 
To do this, this tutorial will walk you through building a **fully functioning, __custom__ block editor "instance"** within WordPress, introducing you to the key packages and components along the way.
 -->
このチュートリアルでは理解の助けになるよう、WordPress 内で **完全に機能するカスタムブロックエディター「インスタンス」** の構築手順を説明しながら、同時に主要なパッケージやコンポーネントを紹介します。
<!-- 
By the end of this article, you should have gained a good understanding of how the block editor works and some of the knowledge required to put together your own block editor instances.
 -->
この記事を読み終える頃にはブロックエディターの動作原理に対する深い理解と、ブロックエディターインスタンスを作成する際に必要な知識を得ているでしょう。

<!-- 
## What we're going to be building
 -->
## 何を構築するのか

<!-- 
We're going to be creating an (almost) fully functioning Block Editor instance.

![alt text](https://wordpress.org/gutenberg/files/2020/03/editor.png "The Standalone Editor instance populated with example Blocks within a custom WP Admin page.")
 -->
今から (ほぼ) 完全に機能するブロックエディターインスタンスを作成します。

![alt text](https://wordpress.org/gutenberg/files/2020/03/editor.png "カスタム WordPress 管理画面の中にサンプルのブロックを持つ、スタンドアロンエディターインスタンス")
<!-- 
This block editor will not be the same _Block Editor_ you are familiar with when creating `Post`s in WP Admin. Rather it will be an entirely custom instance which will live within a custom WP Admin page called (imaginatively) "Block Editor".
 -->
このブロックエディターは、WordPress 内で `投稿` を作成する際に見慣れた「ブロックエディター」と同じものではありません。WordPress 管理画面のカスタムページ (想像力豊かにも「ブロックエディター」という名前です) 内で動作する完全なるカスタムインスタンスです。

<!-- 
Our editor will have the following features:

* Ability to add and edit all Core Blocks.
* Familiar visual styles and main/sidebar layout.
* _Basic_ block persistence between page reloads.

With that in mind, let's start taking our first steps towards building this.
 -->
このエディターには次の機能があります。

* すべてのコアブロックを追加、編集可能
* おなじみのビジュアルスタイルとメイン & サイドバーレイアウト
* ページリロード間での _基本的な_ ブロックの永続性

以上のゴールを念頭に、エディターの構築を目指して最初のステップに進みましょう。

<!-- 
## Plugin setup and organization
 -->
## プラグインのセットアップと構造

<!-- 
Our custom editor is going to be built as a WordPress Plugin. To keep things simple. we'll call this `Standalone Block Editor Demo` because that is what it does. Nice!
 -->
カスタムエディターは WordPress プラグインとして構築します。このプラグインをシンプルに `スタンドアロンブロックエディターデモ` と呼びましょう。名は体を現していますね、素晴らしい !

<!-- 
Let's take a look at our Plugin file structure:

![alt text](https://wordpress.org/gutenberg/files/2020/03/repo-files.png "Screenshot showing file structure of the Plugin at https://github.com/getdave/standalone-block-editor.")
 -->
プラグインファイルの構造を見てみます。

![alt text](https://wordpress.org/gutenberg/files/2020/03/repo-files.png "プラグイン https://github.com/getdave/standalone-block-editor のファイル構造を示すスクリーンショット。")

<!-- 
Here's a brief summary of what's going on:
 -->
ファイルを簡単に紹介すると

<!-- 
* `plugin.php` - standard Plugin "entry" file with comment meta data. Requires `init.php`.
* `init.php` - handles the initialization of the main Plugin logic. We'll be spending a lot of time here.
* `src/` (directory) - this is where our JavaScript (and CSS) source files will live. These files are _not_ directly enqueued by the Plugin.
* `webpack.config.js` - a custom Webpack config extending the defaults provided by the `@wordpress/scripts` npm package to allow for custom CSS styles (via Sass).
 -->
* `plugin.php` - コメントメタデータの付いた標準的なプラグインの「入り口」ファイル。`init.php` が必要。
* `init.php` - プラグインのメインロジックの初期化を処理する。ここで多くの時間を費やす。
* `src/` (ディレクトリ) - JavaScript と CSS ファイルの置き場所。これらのファイルはプラグインによって直接 _エンキューされない_ 。
* `webpack.config.js` - カスタム Webpack 構成。`@wordpress/scripts` npm パッケージによって提供されるデフォルトを拡張し、Sass 経由のカスタム CSS スタイルを実現する。

<!-- 
The only item not shown above is the `build/` directory, which is where our _compiled_ JS and CSS files will be outputted by `@wordpress/scripts` ready to be enqueued by our Plugin.
 -->
上で紹介していない唯一の要素が `build/` ディレクトリです。ここには `@wordpress/scripts` で _コンパイルした_ JS と CSS ファイルが出力されプラグインからのエンキューを待ちます。

<!-- 
**Note:** throughout this tutorial, filename references will be placed in a comment at the top of each code snippet so you can follow along.

With our basic file structure in place, we can now start looking at what package we're going to need.
 -->
**注意:** このチュートリアルを通してコードの先頭にはファイル名を記述したコメントがあります。適宜参照してください。

ファイル構造を準備できたところで次に、必要なパッケージを見ていきましょう。

<!-- 
## The "Core" of the Editor
 -->
## エディターの「コア」

<!-- 
Whilst the Gutenberg Editor is comprised of many moving parts, at it's core is the `@wordpress/block-editor` package.

It's role is perhaps best summarized by its own `README` file:
 -->
Gutenberg エディターは多くの動作パーツから構成されますが、中核は `@wordpress/block-editor` です。

その役割をもっともよく表しているのが `README` ファイルでしょう。

<!-- 
> This module allows you to create and use standalone block editors.
 -->
> このモジュールを使用してスタンドアロンのブロックエディターを作成し、使用することができます。

<!-- 
This is great and exactly what we need! Indeed, it is the main package we'll be using to create our custom block editor instance.

However, before we can get to working with this package in code, we're going to need to create a home for our editor within WP Admin.
 -->
素晴らしい、まさにわたしたちが必要としていたものです ! 実際、この `@wordpress/block-editor` パッケージが、これからカスタムブロックエディターインスタンスの作成で使用するメインのパッケージです。

しかし、パッケージにコードレベルで取りかかる前に、管理画面内にエディター用のスペースを作成する必要があります。

<!-- 
## Creating the custom "Block Editor" page in WP Admin
 -->
## 管理画面のカスタムページ「ブロックエディター」の作成

<!-- 
As a first step, we need to create a custom page within WP Admin.
 -->
最初のステップとして WordPress の管理画面内にカスタムページを作る必要があります。

<!-- 
**Note**: if you're already comfortable with the process of creating custom Admin pages in WordPress you might want to [skip ahead](#registering-and-rendering-our-custom-block-editor).
 -->
**注意**: すでに WordPress 管理画面のカスタムページ作成について詳しい方は、[この節をスキップ](#registering-and-rendering-our-custom-block-editor) してください。

<!-- 
### Registering the Page
-->
### ページの登録

<!-- 
To do this we [register our custom admin page](https://developer.wordpress.org/reference/functions/add_menu_page/) using the standard WP `add_menu_page()` helper:
 -->
ページの登録には標準の WordPress ヘルパー関数 `add_menu_page()` を使用して [管理画面カスタムページを登録](https://developer.wordpress.org/reference/functions/add_menu_page/) します。
<!-- 
```php
// init.php

add_menu_page(
    'Standalone Block Editor', // visible page name
    'Block Editor', // menu label
    'edit_posts', // required capability
    'getdavesbe', // hook/slug of page
    'getdave_sbe_render_block_editor', // function to render the page
    'dashicons-welcome-widgets-menus' // custom icon
);
```
 --> 
```php
// init.php

add_menu_page(
    'Standalone Block Editor', // 表示されるページ名
    'Block Editor', // メニューのラベル
    'edit_posts', // 必要な権限
    'getdavesbe', // ページのフック / スラッグ
    'getdave_sbe_render_block_editor', // ページをレンダーする関数
    'dashicons-welcome-widgets-menus' // カスタムアイコン
);
```

 <!-- 
Note the reference to a function `getdave_sbe_render_block_editor` which is the function which we will use to render the contents of the admin page.
 -->
関数 `getdave_sbe_render_block_editor` への参照に注意してください。管理画面カスタムページのコンテンツをレンダーする際にこの関数を使用します。

<!-- 
### Adding the target HTML
 -->
### ターゲット HTML の追加
<!-- 
As the block editor is a React powered application, we now need to output some HTML into our custom page into which the JavaScript can render the block editor.

To do this we need to look at our `getdave_sbe_render_block_editor` function referenced in the step above.
 -->
ブロックエディターは React を使用したアプリケーションですので、中に JavaScript がブロックエディターをレンダーできるよう、カスタムページに HTML を出力する必要があります。

上のステップで参照した `getdave_sbe_render_block_editor` を確認します。

```php
// init.php

function getdave_sbe_render_block_editor() {
	?>
	<div
		id="getdave-sbe-block-editor"
		class="getdave-sbe-block-editor"
	>
		Loading Editor...
	</div>
	<?php
}
```
<!-- 
Here we simply output some basic placeholder HTML.

Note that we've included an `id` attribute `getdave-sbe-block-editor`. Keep a note of that, a we'll be using it shortly.
 -->
ここでは単純に基本的なプレースホルダー HTML を出力します。

`id` 属性  `getdave-sbe-block-editor` を加えました。すぐに使いますので覚えておいてください。

<!-- 
### Enqueuing JavaScript and CSS
 -->
### JavaScript と CSS のエンキュー

<!-- 
With our target HTML in place we can now enqueue some JavaScript (as well as some CSS styles) so that they will run on our custom Admin page.

To do this we hook into `admin_enqueue_scripts`.

First, we need to make sure we only run our custom code on our own admin page, so at the top of our callback function let's exit early if the page doesn't match our page's identifier:
 -->
ターゲット HTML を準備できたので、管理画面カスタムページで動作する JavaScript と CSS スタイルをエンキューできます。 

これには `admin_enqueue_scripts` にフックします。

まず該当の管理画面ページでのみカスタムコードが動作するよう確認します。コールバック関数の先頭でページの識別子に合致しなければすぐに終了します。

<!-- 
```php
// init.php

function getdave_sbe_block_editor_init( $hook ) {

    // Exit if not the correct page
	if ( 'toplevel_page_getdavesbe' !== $hook ) {
		return;
    }
}

add_action( 'admin_enqueue_scripts', 'getdave_sbe_block_editor_init' );
```
 -->
```php
// init.php

function getdave_sbe_block_editor_init( $hook ) {

    // 正しいページでなければ終了
	if ( 'toplevel_page_getdavesbe' !== $hook ) {
		return;
    }
}

add_action( 'admin_enqueue_scripts', 'getdave_sbe_block_editor_init' );
```

これで安全にメインの JavaScript ファイルを登録できます。標準の WordPress 関数 `wp_enqueue_script` を使用します。

```php
// init.php

wp_enqueue_script( $script_handle, $script_url, $script_asset['dependencies'], $script_asset['version'] );
```
<!-- 
To save time and space, the assignment of the `$script_` variables has been omitted. You can [review these here](https://github.com/getdave/standalone-block-editor/blob/974a59dcbc539a0595e8fa34670e75ec541853ab/init.php#L19).
 -->
時間とスペースの節約のため、`$script_` 変数の割り当ては省略しました。詳細は [ここを参照](https://github.com/getdave/standalone-block-editor/blob/974a59dcbc539a0595e8fa34670e75ec541853ab/init.php#L19) してください。

<!-- 
Note that we register our script dependencies (`$script_asset['dependencies']`) as the 3rd argument - these deps are being
dynamically generated using [@wordpress/dependency-extraction-webpack-plugin](https://developer.wordpress.org/block-editor/packages/packages-dependency-extraction-webpack-plugin/) which will
[ensure that WordPress provided scripts are not included in the built
bundle](https://developer.wordpress.org/block-editor/packages/packages-scripts/#default-webpack-config).
 -->
3番目の引数にスクリプトの依存 (`$script_asset['dependencies']`) を登録したことに注意してください。この依存は [@wordpress/dependency-extraction-webpack-plugin](https://developer.wordpress.org/block-editor/packages/packages-dependency-extraction-webpack-plugin/) を使用して動的に生成され、[WordPress 提供のスクリプトがビルドに含まれないことを保証します](https://developer.wordpress.org/block-editor/packages/packages-scripts/#default-webpack-config)。

<!-- 
We also need to register both our custom CSS styles and the WordPress default formatting library in order take advantage of some nice default styling:
 -->
またデフォルトスタイルの希望する部分を取り込むため、カスタム CSSスタイルと WordPress デフォルトフォーマットライブラリーの両方も登録する必要があります。

<!-- 
```php
// init.php

// Editor default styles
wp_enqueue_style( 'wp-format-library' );

// Custom styles
wp_enqueue_style(
    'getdave-sbe-styles', // Handle.
    plugins_url( 'build/index.css', __FILE__ ), // Block editor CSS.
    array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
    filemtime( __DIR__ . '/build/index.css' )
);
```
 -->
```php
// init.php

// エディターデフォルトスタイル
wp_enqueue_style( 'wp-format-library' );

// カスタムスタイル
wp_enqueue_style(
    'getdave-sbe-styles', // ハンドル
    plugins_url( 'build/index.css', __FILE__ ), // ブロックエディター CSS.
    array( 'wp-edit-blocks' ), // この下に CSS を含むための依存
    filemtime( __DIR__ . '/build/index.css' )
);
```

<!-- 
### Inlining the editor settings
 -->
### エディター設定のインライン化
<!-- 
Looking at the `@wordpress/block-editor` package, we can see that it [accepts a settings object to configure the default settings for the editor](https://github.com/WordPress/gutenberg/tree/4c472c3443513d070a50ba1e96f3a476861447b3/packages/block-editor#SETTINGS_DEFAULTS). These are available on the server side so we need to expose them for use within the JavaScript.

To do this we [inline the settings object as JSON](https://github.com/getdave/standalone-block-editor/blob/974a59dcbc539a0595e8fa34670e75ec541853ab/init.php#L48) assigned to the global `window.getdaveSbeSettings` object:
 -->
`@wordpress/block-editor` パッケージを見ると、[エディターのデフォルト設定の構成に settings オブジェクトを受け取ります](https://github.com/WordPress/gutenberg/tree/4c472c3443513d070a50ba1e96f3a476861447b3/packages/block-editor#SETTINGS_DEFAULTS)。これらはサーバー側で利用されるため、JavaScript 内での使用のためエクスポーズする必要があります。

これには [settings オブジェクトを JSON としてインライン化](https://github.com/getdave/standalone-block-editor/blob/974a59dcbc539a0595e8fa34670e75ec541853ab/init.php#L48) し、グローバルオブジェクト `window.getdaveSbeSettings` に割り当てます。

<!-- 
```php
// init.php

// Inline the Editor Settings
$settings = getdave_sbe_get_block_editor_settings();
wp_add_inline_script( $script_handle, 'window.getdaveSbeSettings = ' . wp_json_encode( $settings ) . ';' );
```
 -->
```php
// init.php

// エディター設定のインライン化
$settings = getdave_sbe_get_block_editor_settings();
wp_add_inline_script( $script_handle, 'window.getdaveSbeSettings = ' . wp_json_encode( $settings ) . ';' );
```

<!-- 
## Registering and Rendering our custom block editor
 -->
## カスタムブロックエディターの登録とレンダー

<!-- 
With the PHP above in place to create our admin page, we’re now finally ready to use JavaScript to render a Block Editor into the page’s HTML.

Let's open up our main `src/index.js` file.

Here we first pull in required JS packages and import our CSS styles (note using Sass requires [extending the default `@wordpress/scripts` Webpack config](https://github.com/getdave/standalone-block-editor/blob/974a59dcbc539a0595e8fa34670e75ec541853ab/webpack.config.js#L13)).
 -->
上の PHP で管理画面のページが作成できたので、ついに JavaScript を使用してページの HTML の中にブロックエディターをレンダーできます。

メインの `src/index.js` ファイルを開きましょう。

ここではまず必要な JS パッケージと CSS スタイルをインポートします。Sass を使用するには [デフォルトの `@wordpress/scripts` Webpack 構成の拡張](https://github.com/getdave/standalone-block-editor/blob/974a59dcbc539a0595e8fa34670e75ec541853ab/webpack.config.js#L13)) が必要なことに注意してください。

```js
// src/index.js

import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';
import { registerCoreBlocks } from '@wordpress/block-library';
import Editor from './editor';

import './styles.scss';
```
<!-- 
Next, once the DOM is ready we run a function which:
 -->
次に、DOM の準備ができたら、以下を行う関数を実行します。

<!-- 
* Grabs our editor settings from `window.getdaveSbeSettings` (inlined from PHP -
  see above).
* Registers all the Core Gutenberg Blocks using `registerCoreBlocks`.
* Renders an `<Editor>` component into the waiting `<div>` on our custom Admin page.
 -->
* `window.getdaveSbeSettings` からエディターの設定を取得 (PHP からインラインで。上の例を参照)
* `registerCoreBlocks` を使用してすべての Gutenberg コアブロックを登録
* 管理画面カスタムページで待っている `<div>` 内に `<Editor>` コンポーネントをレンダー

```jsx
domReady( function() {
	const settings = window.getdaveSbeSettings || {};
	registerCoreBlocks();
	render( <Editor settings={ settings } />, document.getElementById( 'getdave-sbe-block-editor' ) );
} );
```

<!-- 
**Note**: it is possible to render the editor from PHP without creating an unnecessary JS global. Check out [the Edit Site package in Gutenberg Core for an example of this](https://href.li/?https://github.com/WordPress/gutenberg/blob/c6821d7e64a54eb322583a35daedc6c192ece850/lib/edit-site-page.php#L135).
 -->
**注意**: 不要な JS グローバルを作成しなくても PHP からエディターをレンダーできます。[Gutenberg コアの Edit Site パッケージ](https://href.li/?https://github.com/WordPress/gutenberg/blob/c6821d7e64a54eb322583a35daedc6c192ece850/lib/edit-site-page.php#L135) を参照してください。

<!-- 
## Reviewing the `<Editor>` component
 -->
## `<Editor>` コンポーネントのレビュー

<!-- 
Let's take a closer look at the `<Editor>` component we saw being used above.

Despite its name, this _is not_ the actual core of the block editor. Rather it is a _wrapper_ component we've created to contain the components which form the main body of our custom editor.
 -->
上で使用した `<Editor>` コンポーネントを詳しく見ていきます。

名前からはブロックエディターの実際の中核に思えますが、_違います_。むしろ、カスタムエディター本体を形づくるコンポーネントを含む _ラッパー_ コンポーネントです。

<!-- 
### Dependencies
 -->
### 依存

<!-- 
The first thing we do inside `<Editor>` is to pull in some dependencies.
 -->
`<Editor>` ではまず最初に依存をインポートします。

```jsx
// src/editor.js

import Notices from 'components/notices';
import Header from 'components/header';
import Sidebar from 'components/sidebar';
import BlockEditor from 'components/block-editor';
```
<!-- 
The most important of these are the internal components `BlockEditor` and `Sidebar`, which we will explore in greater detail shortly.

The remaining components are largely static elements which form the layout and surrounding UI of the editor (eg: header and notice areas).
 -->
もっとも重要なものは内部コンポーネント `BlockEditor` と `Sidebar` です。これらについてはすぐに詳しく見ていきます。

残りのコンポーネントはほぼエディターのレイアウトと周辺の UI を形作る静的要素です (例: ヘッダーや通知エリア)。

<!-- 
### Editor Render
 -->
### Editor のレンダー
<!-- 
With these components available we can proceed to define our `<Editor>` component.
 -->
コンポーネントが利用できるようになったので、`<Editor>` コンポーネントを定義できます。

```jsx
// src/editor.js

function Editor( { settings } ) {
	return (
		<SlotFillProvider>
			<DropZoneProvider>
				<div className="getdavesbe-block-editor-layout">
					<Notices />
					<Header />
					<Sidebar />
					<BlockEditor settings={ settings } />
				</div>
				<Popover.Slot />
			</DropZoneProvider>
		</SlotFillProvider>
	);
}
```
<!-- 
Here we are scaffolding the core of the editor's layout alongside a few specialised [context providers](https://reactjs.org/docs/context.html#contextprovider) which make particular functionality available throughout the component hierarchy.

Let's examine these in more detail:
 -->
ここではエディターレイアウトの中核の雛形を自動生成しています。同時に、いくつかの特殊化した [コンテキストプロバイダ](https://reactjs.org/docs/context.html#contextprovider) も作成しており、これらはコンポーネント階層を介して特定の機能を実現します。

詳細に見ていきます。

<!-- 
* `<SlotFillProvider>` - enables the use of the ["Slot/Fill"
  pattern](/docs/reference-guides/slotfills/README.md) through our component tree.
* `<DropZoneProvider>` - enables the use of [dropzones for drag and drop functionality](https://github.com/WordPress/gutenberg/tree/e38dbe958c04d8089695eb686d4f5caff2707505/packages/components/src/drop-zone).
* `<Notices>` - custom component. Provides a "snack bar" Notice that will be rendered if any messages are dispatched to `core/notices` store.
* `<Header>` - renders the static title "Standalone Block Editor" at the top of the
  editor UI.
* `<BlockEditor>` - our custom block editor component. This is where things get
  interesting. We'll focus a little more on this in a moment.
* `<Popover.Slot />` - renders a slot into which `<Popover>`s can be rendered
  using the Slot/Fill mechanic.
 -->
* `<SlotFillProvider>` - コンポーネントツリーを介して [「Slot/Fill」
  pattern](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/docs/designers-developers/developers/slotfills/README.md) を利用可能にします。
* `<DropZoneProvider>` - [ドラッグアンドドロップのためドロップゾーン機能](https://github.com/WordPress/gutenberg/tree/e38dbe958c04d8089695eb686d4f5caff2707505/packages/components/src/drop-zone) の使用を有効化します。
* `<Notices>` - カスタムコンポーネント。「スナックバー」型通知 (一瞬出てきて、すぐに消える通知) を提供します。`core/notices` ストアにメッセージがディスパッチされるとレンダーされます。
* `<Header>` - エディター UI の先頭に静的なタイトル「Standalone Block Editor」をレンダーします。
* `<BlockEditor>` - カスタムブロックエディターコンポーネント。ここが面白い場所です。すぐにもう少し詳しく見ます。
* `<Popover.Slot />` - Slot/Fill の仕組みを使用して `<Popover>` をレンダーできるスロットをレンダーします。

<!-- 
### Keyboard Navigation
 -->
### キーボードナビゲーション

<!-- 
With this basic component structure in place the only remaining thing left to do
is wrap everything in [the `navigateRegions` HOC](https://github.com/WordPress/gutenberg/tree/e38dbe958c04d8089695eb686d4f5caff2707505/packages/components/src/higher-order/navigate-regions) to provide keyboard navigation between the different "regions" in the layout.
 -->
基本的なコンポーネント構造ができたので、残るはすべてを [`navigateRegions` HOC](https://github.com/WordPress/gutenberg/tree/e38dbe958c04d8089695eb686d4f5caff2707505/packages/components/src/higher-order/navigate-regions) でラップし、レイアウト内の異なる「リージョン」間でのキーボードナビゲーションを提供します。

```jsx
// src/editor.js

export default navigateRegions( Editor );
```

<!-- 
## The custom `<BlockEditor>`
 -->
## カスタム `<BlockEditor>`

<!-- 
Now we have a our core layouts and components in place, it's time to explore our
custom implementation of the block editor itself.

The component for this is called `<BlockEditor>` and this is where the magic happens.

Opening `src/components/block-editor/index.js` we see that this is the most
complex of the components we have encountered thus far.

There's a lot going on so let's break this down!
 -->
レイアウトとコンポーネントの中核ができたので、いよいよブロックエディターそのもののカスタム実装を探索します。

このためのコンポーネントが `<BlockEditor>`、魔法が起きる場所です。

`src/components/block-editor/index.js` を開くと、これまでに見てきた中で、もっとも複雑なコンポーネントであることがわかります。

多くのことが起きていますので、分解して見ていきましょう。

<!-- 
### Understanding the render
 -->
### レンダーの理解
<!-- 
To start, let's focus on what is being rendered by the `<BlockEditor>` component:
 -->
まずはじめに `<BlockEditor>` コンポーネントで何がレンダーされるのかに焦点を当てます。

```js
// src/components/block-editor/index.js

return (
    <div className="getdavesbe-block-editor">
        <BlockEditorProvider
            value={ blocks }
            onInput={ updateBlocks }
            onChange={ persistBlocks }
            settings={ settings }
        >
            <Sidebar.InspectorFill>
                <BlockInspector />
            </Sidebar.InspectorFill>
            <div className="editor-styles-wrapper">
                <BlockEditorKeyboardShortcuts />
                <WritingFlow>
                    <ObserveTyping>
                        <BlockList className="getdavesbe-block-editor__block-list" />
                    </ObserveTyping>
                </WritingFlow>
            </div>
        </BlockEditorProvider>

    </div>
);
```
<!-- 
The key components to focus on here are `<BlockEditorProvider>` and `<BlockList>`. Let's examine these.
 -->
ここで注目するコンポーネントは `<BlockEditorProvider>` と `<BlockList>` です。調べてみましょう。

<!-- 
### Understanding the `<BlockEditorProvider>` component
 -->
### `<BlockEditorProvider>` コンポーネントの理解

<!-- 
[`<BlockEditorProvider>`](https://github.com/WordPress/gutenberg/tree/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/provider) is one of the most important components in the hierarchy. As we learnt earlier, it establishes a new block editing context for a new block editor.

As a result, it is _fundamental_ to the entire goal of our project.

The children of `<BlockEditorProvider>` comprise the UI for the block
editor. These components then have access to data (via `Context`) which enables
them to _render_ and _manage_ the Blocks and their behaviors within the editor.
 -->
[`<BlockEditorProvider>`](https://github.com/WordPress/gutenberg/tree/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/provider) は階層の中でもっとも重要なコンポーネントの1つです。上で学んだように、ブロックエディターのために新しいブロック編集コンテキストを確立します。

結果として、これがプロジェクトの最終ゴールの _基礎_ となります。

`<BlockEditorProvider>` の子はブロックエディターの UI を含みます。これらのコンポーネントは `Context` 経由でデータにアクセスし、エディター内でのブロックとその動作の _レンダー_ と _管理_ を可能にします。

<!-- 
```jsx
// src/components/block-editor/index.js

<BlockEditorProvider
    value={ blocks } // array of block objects
    onInput={ updateBlocks } // handler to manage Block updates
    onChange={ persistBlocks } // handler to manage Block updates/persistence
    settings={ settings } // editor "settings" object
/>
```
 -->
```jsx
// src/components/block-editor/index.js

<BlockEditorProvider
    value={ blocks } // ブロックオブジェクトの配列
    onInput={ updateBlocks } // ブロック更新を管理するハンドラ
    onChange={ persistBlocks } // ブロック更新/永続化を管理するハンドラ
    settings={ settings } // エディター settings オブジェクト
/>
```

<!-- 
#### `BlockEditor` props
 -->
#### `BlockEditor` props

<!-- 
We can see that `<BlockEditorProvider>` accepts array of (parsed) block objects as its `value` prop and, when there's a change detected within the editor, calls the `onChange` and/or `onInput` handler prop (passing the new Blocks as a argument).

Internally it does this by subscribing to the provided `registry` (via the [`withRegistryProvider` HOC](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/provider/index.js#L158)), listening to block change events, determining whether Block changing was persistent, and then calling the appropriate `onChange|Input` handler accordingly.
 -->
上で見たように `<BlockEditorProvider>` は、`value` prop としてパースされたブロックオブジェクトの配列を受け取ります。そして、エディター内で変更が検知されると、新しいブロックを引数に `onChange` または `onInput` ハンドラー prop を呼び出します。

内部的には、与えられた `registry` を [`withRegistryProvider` HOC](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/provider/index.js#L158)) 経由でサブスクライブして、ブロック変更イベントをリッスンし、ブロックの変更が永続的かどうか判断し、適切な `onChange`、`onInput` ハンドラーをそれぞれ呼び出します。

<!-- 
For the purposes of our simple project these features allow us to:

* Store the array of current blocks in state as `blocks`.
* Update the `blocks` state in memory on `onInput` by calling the hook setter
  `updateBlocks(blocks)`.
* Handle basic persistence of blocks into `localStorage` using `onChange`. This is [fired when block updates are considered
  "committed"](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-editor/src/components/provider#onchange).
 -->
今回のシンプルなプロジェクトの目的のため、これらの機能により以下が可能です。

* `blocks` として現行のブロックの配列を state に保存する
* フックセッター `updateBlocks(blocks)` を呼び出して `onInput` でメモリー内の `blocks` state を更新する。
* `onChange` を使用して `localStorage` 内にブロックの基本的な永続性を処理する。これは[ブロックの更新が「コミットされた」と考えられるときに発火します](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-editor/src/components/provider#onchange)。
<!-- 
It's also worth recalling that the component accepts a `settings` prop. This accepts the editor settings which we inlined as JSON within `init.php` earlier. This configures features such as custom colors, available image sizes and [much more](https://github.com/WordPress/gutenberg/tree/4c472c3443513d070a50ba1e96f3a476861447b3/packages/block-editor#SETTINGS_DEFAULTS).
 -->
コンポーネントが `settings` prop を受け取ることを思い出してください。これは先に  `init.php` で JSON としてインライン化したエディター設定を受け取ります。カスタム色や、利用可能な画像サイズ、[等々](https://github.com/WordPress/gutenberg/tree/4c472c3443513d070a50ba1e96f3a476861447b3/packages/block-editor#SETTINGS_DEFAULTS) の機能が構成されます。
<!-- 
### Understanding the `<BlockList>` component
 -->
### `<BlockList>` コンポーネントの理解
<!-- 
Alongside `<BlockEditorProvider>` the next most interesting component is [`<BlockList>`](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/block-list/index.js).
 -->
`<BlockEditorProvider>` と共にもっとも興味深いコンポーネントが [`<BlockList>`](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/block-list/index.js) です。
<!-- 
This is one of the most important components as it's role is to **render a list of Blocks into the editor**.

It does this in part thanks to being placed as a child of `<BlockEditorProvider>` which affords it full access to all information about the state of the current Blocks in the editor.
 -->

このコンポーネントはもっとも重要なコンポーネントの1つで、**エディター内のブロックのリストのレンダー** を担います。

`<BlockEditorProvider>` の子として配置されているため、エディター内の現行ブロックのすべての state 情報に対してフルアクセスできます。

<!-- 
#### How does `BlockList` work?
 -->
#### `BlockList` はどのように動作するか ?
<!-- 
Under the hood `<BlockList>` relies on several other lower-level components in order to render the list of Blocks.

The hierarchy of these components can be _approximated_ as follows:
 -->
`<BlockList>` はブロックのリストのレンダーに、内部でいくつかの他の低レベルコンポーネントに依存しています。 

これらのコンポーネントの階層は _おおよそ_ 次のとおりです。

<!-- 
```jsx
// Pseudo code - example purposes only

<BlockList> /* renders a list of Blocks from the rootClientId. */
    <BlockListBlock> /* renders a single "Block" from the BlockList. */
        <BlockEdit> /* renders the standard editable area of a Block. */
            <Component /> /* renders the Block UI as defined by its `edit()` implementation. */
        </BlockEdit>
    </BlockListBlock>
</BlockList>
```
 -->
```jsx
// 説明を目的とした擬似コード

<BlockList> /* rootClientId からブロックのリストをレンダーする。 */
    <BlockListBlock> /* BlockList から単一の「ブロック」をレンダーする。 */
        <BlockEdit> /* ブロックの標準の編集可能領域をレンダーする。 */
            <Component /> /* edit() 実装で定義されたようにブロック UI をレンダーする。 */
        </BlockEdit>
    </BlockListBlock>
</BlockList>
```


<!-- 
Here's roughly how this works together to render our list of blocks:
 -->
これらがどのように一緒に動作してブロックのリストをレンダーするか簡単に説明します。

<!-- 
* `<BlockList>` loops over all the Block clientIds and
renders each via [`<BlockListBlock />`](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/block-list/block.js).
* `<BlockListBlock />` in turn renders the individual "Block"
via it's own subcomponent [`<BlockEdit>`](https://github.com/WordPress/gutenberg/blob/def076809d25e2ad680beda8b9205ab9dea45a0f/packages/block-editor/src/components/block-edit/index.js).
* Finally [the Block itself](https://github.com/WordPress/gutenberg/blob/def076809d25e2ad680beda8b9205ab9dea45a0f/packages/block-editor/src/components/block-edit/edit.js) is rendered using the `Component` placeholder component.
 -->
* `<BlockList>` はすべてのブロックの clientId をループし、それぞれを [`<BlockListBlock />`](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/block-list/block.js) でレンダーします。
* `<BlockListBlock />` は個々のブロックを自身のコンポーネント [`<BlockEdit>`](https://github.com/WordPress/gutenberg/blob/def076809d25e2ad680beda8b9205ab9dea45a0f/packages/block-editor/src/components/block-edit/index.js) でレンダーします。
* 最後に [ブロック自身が](https://github.com/WordPress/gutenberg/blob/def076809d25e2ad680beda8b9205ab9dea45a0f/packages/block-editor/src/components/block-edit/edit.js) `Component` placeholderコンポーネントを使用してレンダーされます。

<!-- 
These are some of the most complex and involved components within the `@wordpress/block-editor` package. That said, if you want to have a strong grasp of how the editor works at a fundamental level, I strongly advise making a study of these components. I leave this as an exercise for the reader!
 -->
これらは `@wordpress/block-editor` パッケージ内でもっとも複雑で、深く関与しているコンポーネントです。エディターがどのように動作しているのかを基本レベルから知りたければ、これらのコンポーネントを調べることをお勧めしますが、ここでは読者の宿題とします。

<!-- 
### Utility components in our custom block editor
 -->
### カスタムブロックエディターのユーティリティコンポーネント
<!-- 
Jumping back to our own custom `<BlockEditor>` component, it is also worth noting the following "utility" components:
 -->
カスタム `<BlockEditor>` コンポーネントに話しを戻すと、次の「ユーティリティ」コンポーネントにも注意してください。

```js
// src/components/block-editor/index.js

<div className="editor-styles-wrapper">
    <BlockEditorKeyboardShortcuts /> /* 1. */
    <WritingFlow> /* 2. */
        <ObserveTyping> /* 3. */
            <BlockList className="getdavesbe-block-editor__block-list" />
        </ObserveTyping>
    </WritingFlow>
</div>
```
<!-- 
These provide other important elements of functionality for our editor instance.
 -->
これらはエディターインスタンスに対して重要な機能要素を提供します。

<!-- 
1. [`<BlockEditorKeyboardShortcuts />`](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/keyboard-shortcuts/index.js) - enables and usage of keyboard shortcuts within the editor.
2. [`<WritingFlow>`](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/writing-flow/index.js) - handles selection, focus management and navigation across blocks.
3. [`<ObserveTyping>`](https://github.com/WordPress/gutenberg/tree/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/observe-typing)- used to manage the editor's internal `isTyping` flag. This is used in various places, most commonly to show/hide the Block toolbar in response to typing.
 -->
1. [`<BlockEditorKeyboardShortcuts />`](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/keyboard-shortcuts/index.js) - エディター内でキーボードショートカットを有効化し、使用する。
2. [`<WritingFlow>`](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/writing-flow/index.js) - ブロック間の選択、フォーカス管理、ナビゲーションを処理する。
3. [`<ObserveTyping>`](https://github.com/WordPress/gutenberg/tree/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/observe-typing)- エディター内部の `isTyping` フラグを管理する。さまざまな場所で使用されていて、一番目にするのはキーボードの入力に応じてブロックツールバーを表示、隠す機能。

<!-- 
## Reviewing the Sidebar
 -->
## サイドバーのレビュー
<!-- 
Also within the render of our `<BlockEditor>`, is our `<Sidebar>` component.
 -->
`<BlockEditor>` のレンダーの中に `<Sidebar>` コンポーネントがあります。

```jsx
// src/components/block-editor/index.js

return (
    <div className="getdavesbe-block-editor">
        <BlockEditorProvider>
            <Sidebar.InspectorFill> /* <-- SIDEBAR */
                <BlockInspector />
            </Sidebar.InspectorFill>
            <div className="editor-styles-wrapper">
                // snip
            </div>
        </BlockEditorProvider>
    </div>
);
```
<!-- 
This is used - alongside other things - to display advanced Block settings via the `<BlockInspector>` component.
 -->
これは他と同じように、`<BlockInspector>` コンポーネントを介した高度なブロック設定の表示に使用されます。

```jsx
<Sidebar.InspectorFill>
    <BlockInspector />
</Sidebar.InspectorFill>
```
<!-- 
However, the keen-eyed readers amongst you will have already noted the presence
of a `<Sidebar>` component within our `<Editor>` (`src/editor.js`) component's
layout:
 -->
しかし、注意深い読者であれば、すでに `<Editor>` (`src/editor.js`) コンポーネントのレイアウト内の `<Sidebar>` コンポーネントの存在に気づいたかもしれません。

<!-- 
```jsx
// src/editor.js
<Notices />
<Header />
<Sidebar /> // <-- eh!?
<BlockEditor settings={ settings } />

```
 -->
```jsx
// src/editor.js
<Notices />
<Header />
<Sidebar /> // <-- ん!?
<BlockEditor settings={ settings } />

```

<!-- 
Opening `src/components/sidebar/index.js` we see that this is in fact the
component rendered within `<Editor>` above. However, the implementation utilises
Slot/Fill to expose a `Fill` (`<Sidebar.InspectorFill>`) which we subsequently
`import` and render inside of our `<BlockEditor>` component (see above).
 -->
`src/components/sidebar/index.js` を開くと、たしかにコンポーネントが上の `<Editor>` 内でレンダーされるのがわかります。しかし、その実装は Slot/Fill を利用して `Fill` (`<Sidebar.InspectorFill>`) をエクスポーズし、その後、上で見たように `<BlockEditor>` コンポーネント内で `import`し、レンダーします。

<!-- 
With this in place, we then render `<BlockInspector />` as a child of the
`Sidebar.InspectorFill`. This has the result of allowing us to keep
`<BlockInspector>` within the React context of `<BlockEditorProvider>` whilst
allowing it to be rendered into the DOM in a separate location (ie: in the `<Sidebar>`).
 -->
次に `Sidebar.InspectorFill` の子として `<BlockInspector />` をレンダーします。この結果、離れた場所の DOM 内、すなわち `<Sidebar>` 内にレンダーされながら、`<BlockEditorProvider>` の React コンテキスト内で `<BlockInspector>` を保持できます。

<!-- 
This might seem overly complex, but it is required in order that
`<BlockInspector>` can have access to information about the current Block.
Without Slot/Fill this setup would be extremely difficult to achieve.
 -->
過度に複雑に見えるかもしれませんが、`<BlockInspector>` が現行ブロックの情報にアクセスするには必要です。Slot/Fill がなければ、この設定の実現は非常に難しかったでしょう。

<!-- 
Aside:
[`<BlockInspector>`](https://github.com/WordPress/gutenberg/blob/def076809d25e2ad680beda8b9205ab9dea45a0f/packages/block-editor/src/components/block-inspector/index.js)
 itself actually renders a `Slot` for [`<InspectorControls>`](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-editor/src/components/inspector-controls
). This is what allows you [render a `<InspectorControls>` component inside
the `edit()` definition for your block](https://github.com/WordPress/gutenberg/blob/def076809d25e2ad680beda8b9205ab9dea45a0f/packages/block-library/src/paragraph/edit.js#L127) and have
it display within Gutenberg's sidebar. I recommend looking into this component
in more detail.
 -->
ところで [`<BlockInspector>`](https://github.com/WordPress/gutenberg/blob/def076809d25e2ad680beda8b9205ab9dea45a0f/packages/block-editor/src/components/block-inspector/index.js) 自身は実際に [`<InspectorControls>`](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-editor/src/components/inspector-controls) のために `Slot` をレンダーします。これで [ブロックの `edit()` 定義の中で `<InspectorControls>` コンポーネントをレンダーし](https://github.com/WordPress/gutenberg/blob/def076809d25e2ad680beda8b9205ab9dea45a0f/packages/block-library/src/paragraph/edit.js#L127)、Gutenberg のサイドバーに表示できます。このコンポーネントを詳細に調べることを推奨します。

<!-- 
And with that we have covered the render of our custom `<BlockEditor>`!
 -->
以上で、私たちのカスタム `<BlockEditor>` のレンダーについてすべて説明しました !

<!-- 
## Block Persistence
 -->
## ブロックの永続性
<!-- 
We've come a long way on our journey to create a custom block editor. But there is
one major area left to touch upon - Block persistance; that is the act of having our
Blocks saved and **available _between_ page refreshes**.

![alt text](https://wordpress.org/gutenberg/files/2020/03/block-persistance.gif "Screencapture showing added Blocks being restored between page refreshes.")
 -->
ここまでカスタムブロックエディターを作成する長い旅を続けてきました。しかし、まだ1つ大きな領域が残っています。ブロックの永続性です。永続性はブロックを保存し、**ページの更新の _間_ も利用可能** にします。

![alt text](https://wordpress.org/gutenberg/files/2020/03/block-persistance.gif "ベージ更新の間で追加したブロックがリストアされる様子を示すスクリーンキャプチャ。")

<!-- 
As this is only an _experiment_ we've opted to utilise the browser's
`localStorage` API to handle saving Block data. In a real-world scenario however
you'd like choose a more reliable and robust system (eg: a database).

That said, let's take a closer look at how we're handling saving our Blocks.
 -->
このチュートリアルは _実験_ ですので、ブロックデータの保存の処理にブラウザーの `localStorage` API を利用します。しかし実世界のシナリオでは、より信頼できる堅固なシステム、たとえばデータベースを利用することになるでしょう。

ブロックを保存する処理を詳細に見ていきます。

<!-- 
### Storing blocks in state
 -->
### ブロックの state への保存
<!-- 
Opening `src/components/block-editor/index.js` we will notice we have created
some state to store our Blocks as an array:
 -->
`src/components/block-editor/index.js` を開くと、ブロックを配列として保存するいくつかの state を作成していることに気づきます。

```jsx
// src/components/block-editor/index.js

const [ blocks, updateBlocks ] = useState( [] );
```
<!-- 
As mentioned earlier, `blocks` is passed to the "controlled" component `<BlockEditorProvider>` as its `value` prop. This "hydrates" it with an initial set of Blocks. Similarly, the `updateBlocks` setter is hooked up to the `onInput` callback on `<BlockEditorProvider>` which ensures that our block state is kept in sync with changes made to blocks within the editor.
 -->
上で述べたように `blocks` は、「コントローラー」コンポーネント `<BlockEditorProvider>` に `value` prop として渡され、ブロックの初期セットを与えます。同様に `updateBlocks` セッターは `<BlockEditorProvider>` の `onInput` コールバックに紐付けられ、ブロックの state とエディター内でのブロックの変更との同期を保ちます。

<!-- 
### Saving Block data
 -->
### ブロックデータの保存

<!-- 
If we now turn our attention to the `onChange` handler, we will notice it is
hooked up to a function `persistBlocks()` which is defined as follows:
 -->
ここで注意を `onChange` ハンドラーに向けると、以下のように定義される関数 `persistBlocks()` に紐付いていることがわかります。

```js
// src/components/block-editor/index.js

function persistBlocks( newBlocks ) {
    updateBlocks( newBlocks );
    window.localStorage.setItem( 'getdavesbeBlocks', serialize( newBlocks ) );
}
```
<!-- 
This function accepts an array of "committed" block changes and calls the state
setter `updateBlocks`. In addition to this however, it also stores the blocks
within LocalStorage under the key `getdavesbeBlocks`. In order to achieve this
the Block data is serialized into [Gutenberg "Block Grammar"](https://developer.wordpress.org/block-editor/principles/key-concepts/#blocks) format, meaning it can be safely stored as a string.
 -->
この関数は「コミットされた」ブロックの変更の配列を受け取り、state セッター `updateBlocks` を呼び出します。しかしまたこれに加えて LocalStorage 内にキー `getdavesbeBlocks` でブロックを保存します。そのためブロックデータは、安全に文字列として保存できるよう [Gutenberg 「ブロックグラマー」](https://developer.wordpress.org/block-editor/principles/key-concepts/#blocks) 形式でシリアライズされます。

<!-- 
If we open DeveloperTools and inspect our LocalStorage we will see serialized
Block data stored and updated as changes occur within the editor. Below is an
example of the format:
 -->
DeveloperTools を開き、LocalStorage を見ると、シリアライズされたブロックデータが保存されており、エディター内の変更に応じて更新されることがわかります。以下はこの形式の例です。

```
<!-- wp:heading -->
<h2>An experiment with a standalone Block Editor in WPAdmin</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This is an experiment to discover how easy (or otherwise) it is to create a standalone instance of the Block Editor in WPAdmin.</p>
<!-- /wp:paragraph -->
```

<!-- 
### Retrieving previous block data
 -->
### 以前のブロックデータの取得

<!-- 
Having persistence in place is all well and good, but it's useless unless that
data is retrieved and _restored_ within the editor upon each full page reload.

Accessing data is a side effect, so naturally we reach for our old (new!?)
friend the `useEffect` hook to handle this.
 -->
永続性を実現できたのはよいことですが、ページがリロードされた際にデータを再取得し、エディター内に _リストア_ できなければ使いものになりません。

データへのアクセスはサイドエフェクトであり、自然とこの処理に古い友人(あるいは新しい !?) `useEffect` フックを使用します。

```jsx
// src/components/block-editor/index.js

useEffect( () => {
    const storedBlocks = window.localStorage.getItem( 'getdavesbeBlocks' );

    if ( storedBlocks && storedBlocks.length ) {
        updateBlocks( () => parse( storedBlocks ) );
        createInfoNotice( 'Blocks loaded', {
            type: 'snackbar',
            isDismissible: true,
        } );
    }
}, [] );
```
<!-- 
In this handler, we:

* Grab the serialized block data from local storage.
* Convert the serialized blocks back to JavaScript objects using the `parse()`
  utility.
* Call the state setter `updateBlocks` causing the `blocks` value to be updated
  in state to reflect the blocks retrieved from LocalStorage.
 -->
このハンドラーでは、

* ローカルストレージからシリアライズされたブロックデータを取得する。
* `parse()` ユーティリティを使用してシリアライズされたブロックを JavaScript オブジェクトに変換し直す。
* state セッター `updateBlocks` を呼び出して state 内の `blocks` 値を更新し、LocalStorage から取り出したブロックを反映する。

<!-- 
As a result of these operations the controlled `<BlockEditorProvider>` component
is updated with the blocks restored from LocalStorage causing the editor to
show these blocks.

Finally, for good measure we generate a notice - which will display in our `<Notice>` component as a "snackbar" notice - to indicate that the blocks have been restored.
 -->
この一連の操作の結果、コントロールされた `<BlockEditorProvider>` コンポーネントは LocalStorage からリストアされたブロックで更新され、エディターはこのブロックを表示します。

最後に、ついでとして通知を生成します。`<Notice>` コンポーネントに「スナックバー」通知としてブロックがリストアされたことを示します。

<!-- 
## Wrapping up
 -->
## まとめ

<!-- 
If you've made it this far then congratulations! I hope you now have a better understanding of how the block editor works under the hood.

In addition, you've reviewed an working example of the code required to implement your own custom functioning block editor. This information should prove useful, especially as Gutenberg expands beyond editing just the `Post` and into Widgets, Full Site Editing and beyond!

The full code for the custom functioning block editor we've just built is [available on Github](https://github.com/getdave/standalone-block-editor). I encourage you to download and try it out for yourself. Experiment, then and take things even further!
 -->
ここまでお付き合いいただいた方、おめでとうございます ! ブロックエディター内部がどのように動作しているのかを理解できるようになったとと思います。

加えて、カスタムで機能するブロックエディターを実装する際に必要な動くコード例をレビューしてきました。この情報は特に、Gutenberg が単なる `Post` の編集からウィジェットやフルサイト編集、さらにその先まで拡張されている今、必ず役に立つはずです。

これまで構築したカスタムで機能するブロックエディターの完全なコードは [Github から取得可能](https://github.com/getdave/standalone-block-editor) です。ダウンロードし、自分で動かしてみることをお勧めします。実験し、更にその先まで進みましょう !

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/designers-developers/developers/platform/custom-block-editor/tutorial.md)
