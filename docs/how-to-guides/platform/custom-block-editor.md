<!-- 
# Building a custom block editor
 -->
# カスタムブロックエディターの構築

<!-- 
The WordPress block editor is a powerful tool that allows you to create and format content in various ways. It is powered, in part, by the [`@wordpress/block-editor`](/packages/block-editor/README.md) package, which is a JavaScript library that provides the core functionality of the editor.
 -->
WordPress のブロックエディターはパワフルなツールです。様々な方法でコンテンツを作成し、フォーマットできます。ブロックエディター (の一部) は、エディターのコア機能を提供する JavaScript ライブラリ [`@wordpress/block-editor`](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/README.md) パッケージによって実装されています。

<!-- 
This package can also be used to create custom block editors for virtually any other web application. This means that you can use the same blocks and block editing experience outside of WordPress.
 -->
このパッケージは事実上あらゆるウェブアプリケーション用の独自ブロックエディター作成にも使用できます。つまり WordPress の外でも同じ、ブロックとブロック編集体験を利用できます。

<!-- 
![alt text](https://developer.wordpress.org/files/2023/07/custom-block-editor.png 'The Standalone Editor instance populated with example Blocks within a custom WordPress admin page.')
 -->
![alt text](https://developer.wordpress.org/files/2023/07/custom-block-editor.png 'スタンドアロンエディターインスタンス。カスタム WordPress 管理ページ内にサンプルのブロックがある。')

<!-- 
This flexibility and interoperability makes blocks a powerful tool for building and managing content across multiple applications. It also makes it simpler for developers to create content editors that work best for their users.

This guide covers the basics of creating your first custom block editor.
 -->
この柔軟性と相互運用性によりブロックは、複数のアプリケーションに渡ってコンテンツを構築、管理できる強力なツールとなります。また開発者は、ユーザーにとって最適なコンテンツエディターを簡単に作成できます。

このガイドでは、はじめてのカスタムブロックエディターを作成するための、基礎を紹介します。

<!-- 
## Introduction
 -->
## はじめに

<!-- 
With its many packages and components, the Gutenberg codebase can be daunting at first. But at its core, it's all about managing and editing blocks. So if you want to work on the editor, it's essential to understand how block editing works at a fundamental level.
 -->
多くのパッケージやコンポーネントが介在する Gutenberg のコードベースは、最初はとっつきにくく感じられるかもしれません。しかしその中核は、ブロックの管理と編集に過ぎません。そのため、エディターで開発したいのであれば、ブロックの編集がどのように行われているのか、基礎レベルで理解することが重要です。

<!-- 
This guide will walk you through building a fully functioning, custom block editor "instance" within WordPress. Along the way, we'll introduce you to the key packages and components, so you can see how the block editor works under the hood.
 -->
このガイドでは、WordPress 内で完全に機能するカスタムブロックエディターの「インスタンス」を構築する方法を説明します。その過程で、主要なパッケージやコンポーネントを紹介し、ブロックエディターがどのように動作するのかを見ていきます。

<!-- 
By the end of this article, you will have a solid understanding of the block editor's inner workings and be well on your way to creating your own block editor instances.
 -->
この記事を読み終える頃には、ブロックエディターの内部動作を確実に理解し、独自のブロックエディターインスタンスを作成する準備ができていることでしょう。

<!-- 
<div class="callout callout-tip">
	The code used throughout this guide is available for download in the <a href="https://github.com/getdave/standalone-block-editor">accompanying WordPress plugin</a>. The demo code in this plugin as an essential resource.
</div>
 -->
**注意**: このガイドで使用しているコードは、<a href="https://github.com/getdave/standalone-block-editor">付属の WordPress プラグイン</a>からダウンロードできます。このプラグインのデモコードは重要な情報源です。

<!-- 
## Code syntax
 -->
## コード構文
<!-- 
The code snippets in this guide use JSX syntax. However, you could use plain JavaScript if you prefer. However, once familiar with JSX, many developers find it easier to read and write, so all code examples in the Block Editor Handbook use this syntax.
 -->
このガイドのコードスニペットでは JSX 構文を使用します。そちらの方が好みであれば、プレーンな JavaScript も使えますが、一度 JSX に慣れると、多くの開発者が、JSX の方が読みやすく書きやすいと感じます。このため、ブロックエディターハンドブックのすべてのコード例では、JSX 構文を使用しています。

<!-- 
## What you're going to be building
 -->
## 何を構築するのか

<!-- 
Throughout this guide, you will create an (almost) fully functioning block editor instance. The result will look something like this:
 -->
このガイドを通して、(ほぼ) 完全に機能するブロックエディターインスタンスを作成します。結果は以下のようになります。

<!-- 
![The Standalone Editor instance populated with example Blocks within a custom WordPress admin page](https://developer.wordpress.org/files/2023/07/custom-block-editor.png)
 -->
![スタンドアロンエディターインスタンス。カスタム WordPress 管理ページ内にサンプルのブロックがある。](https://developer.wordpress.org/files/2023/07/custom-block-editor.png)

<!-- 
While it looks similar, this editor will not be the same _Block Editor_ you are familiar with when creating posts and pages in WordPress. Instead, it will be an entirely custom instance that will live within a custom WordPress admin page called "Block Editor."
 -->
見た目は似ていますが、このエディターは WordPress で投稿やページを作成する際におなじみの _ブロックエディター_ ではありません。WordPress のカスタム管理ページ内に設置される、完全なカスタムインスタンス「ブロックエディター」です。

<!-- 
The editor will have the following features:
 -->
このエディターには次の機能があります。

<!-- 
-   Ability to add and edit all Core blocks.
-   Familiar visual styles and main/sidebar layout.
-   _Basic_ block persistence between page reloads.
 -->
- すべてのコアブロックを追加、編集可能
- おなじみのビジュアルスタイルとメイン & サイドバーレイアウト
- ページリロード間での _基本的な_ ブロックの永続性

<!-- 
## Plugin setup and organization
 -->
## プラグインのセットアップと構造

<!-- 
The custom editor is going to be built as a WordPress plugin. To keep things simple, the plugin will be named `Standalone Block Editor Demo` because that is what it does.

The plugin file structure will look like this:
 -->
カスタムエディターは WordPress プラグインとして構築します。簡便のため、プラグインの目的に合わせて「スタンドアロンブロックエディターデモ」と名付けます。

プラグインのファイル構造は以下のようになります。

<!-- 
![alt text](https://wordpress.org/gutenberg/files/2020/03/repo-files.png 'Screenshot showing file structure of the Plugin at https://github.com/getdave/standalone-block-editor.')
 -->
![alt text](https://wordpress.org/gutenberg/files/2020/03/repo-files.png 'プラグイン https://github.com/getdave/standalone-block-editor のファイル構造を示すスクリーンショット。')

<!-- 
Here is a brief summary of what's going on:
 -->
ファイルを簡単に紹介します。

<!-- 
-   `plugin.php` – Standard plugin "entry" file with comment meta data, which requires `init.php`.
-   `init.php` - Handles the initialization of the main plugin logic.
-   `src/` (directory) - This is where the JavaScript and CSS source files will live. These files are _not_ directly enqueued by the plugin.
-   `webpack.config.js` - A custom Webpack config extending the defaults provided by the [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) npm package to allow for custom CSS styles (via Sass).
 -->
- `plugin.php` – コメントメタデータの付いた標準的なプラグインの「入り口」ファイル。`init.php` が必要。
- `init.php` - プラグインのメインロジックの初期化を処理する。
- `src/` (ディレクトリ) - JavaScript と CSS ファイルの置き場所。これらのファイルはプラグインによって直接 _エンキューされない_ 。
- `webpack.config.js` - カスタム Webpack 構成。[`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) npm パッケージよって提供されるデフォルトを拡張し、Sass 経由のカスタム CSS スタイルをサポートする。

<!-- 
The only item not shown above is the `build/` directory, which is where the _compiled_ JS and CSS files are outputted by `@wordpress/scripts`. These files are enqueued by the plugin separately.
 -->
上で紹介していない唯一の要素が `build/` ディレクトリです。ここには `@wordpress/scripts` で _コンパイルした_ JS と CSS ファイルが出力されます。ファイルは個別にプラグインがエンキューします。

<!-- 
<div class="callout callout-info">
	Throughout this guide, filename references will be placed in a comment at the top of each code snippet so you can follow along.
</div>
 -->
**注意:** このチュートリアルを通してコードの先頭にはファイル名を記述したコメントがあります。適宜、参照してください。

<!-- 
With the basic file structure in place, let's look at what packages will be needed.
 -->
ファイル構造を準備できたところで次に、必要なパッケージを見ていきます。

<!-- 
## The "Core" of the editor
 -->
## エディターの「コア」

<!-- 
While the WordPress Editor is comprised of many moving parts, at its core is the [`@wordpress/block-editor`](/packages/block-editor/README.md) package, which is best summarized by its own `README` file:
 -->
Gutenberg エディターは多くの動作パーツから構成されますが、中核は [`@wordpress/block-editor`](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/README.md) パッケージです。その概要は `README` ファイルにもっとも上手く表現されています。

<!-- 
> This module allows you to create and use standalone block editors.
 -->
> このモジュールを使用してスタンドアロンのブロックエディターを作成し、使用できます。

<!-- 
Perfect, this is the main package you will use to create the custom block editor instance. But first, you need to create a home for the editor.
 -->
完璧です。これがカスタムブロックエディターのインスタンスを作成で使用するメインのパッケージです。しかしその前に、エディターのホームを作成する必要があります。
<!-- 
## Creating the custom "Block Editor" page
 -->
## カスタムページ「ブロックエディター」の作成

<!-- 
Let's begin by creating a custom page within WordPress admin that will house the custom block editor instance.
 -->
まずWordPress の管理画面内に、カスタムブロックエディターのインスタンスを格納する、カスタムページを作成しましょう。

<!-- 
<div class="callout callout-info">
	If you're already comfortable with the process of creating custom admin pages in WordPress, you might want to <a href="#registering-and-rendering-our-custom-block-editor">skip ahead</a>.
</div>
 -->
**注意**: すでに WordPress 管理画面のカスタムページ作成について詳しい方は、この節をスキップしても構いません。

<!-- 
### Registering the page
 -->
### ページの登録

<!-- 
To do this, you need to [register a custom admin page](https://developer.wordpress.org/reference/functions/add_menu_page/) using the standard WordPress [`add_menu_page()`](https://developer.wordpress.org/reference/functions/add_menu_page/) helper:
 -->
ページの登録には標準の WordPress ヘルパー関数 [`add_menu_page()`](https://developer.wordpress.org/reference/functions/add_menu_page/) を使用して、[管理画面カスタムページを登録](https://developer.wordpress.org/reference/functions/add_menu_page/) します。

<!-- 
```php
// File: init.php

add_menu_page(
    'Standalone Block Editor',         // Visible page name
    'Block Editor',                    // Menu label
    'edit_posts',                      // Required capability
    'getdavesbe',                      // Hook/slug of page
    'getdave_sbe_render_block_editor', // Function to render the page
    'dashicons-welcome-widgets-menus'  // Custom icon
);
```
 -->
```php
// File: init.php

add_menu_page(
    'Standalone Block Editor',         // 表示されるページ名
    'Block Editor',                    // メニューのラベル
    'edit_posts',                      // 必要な権限
    'getdavesbe',                      // ページのフック / スラッグ
    'getdave_sbe_render_block_editor', // ページをレンダーする関数
    'dashicons-welcome-widgets-menus'  // カスタムアイコン
);
```
<!-- 
The `getdave_sbe_render_block_editor` function will be used to render the contents of the admin page. As a reminder, the source code for each step is available in the [accompanying plugin](https://github.com/getdave/standalone-block-editor).
 -->
`getdave_sbe_render_block_editor` 関数を使用して、管理画面のコンテンツをレンダーします。なお繰り返しになりますが、各ステップのソースコードは[付属プラグイン](https://github.com/getdave/standalone-block-editor)にあります。

<!-- 
### Adding the target HTML
 -->
### ターゲット HTML の追加
<!-- 
Since the block editor is a React-powered application, you need to output some HTML into the custom page where JavaScript can render the block editor.

Let's use the `getdave_sbe_render_block_editor` function referenced in the step above.
 -->
ブロックエディターは React で動作するアプリケーションですので、JavaScript がブロックエディターをレンダーするカスタムページ内に HTML を出力する必要があります。

上の手順で参照した `getdave_sbe_render_block_editor` 関数を使用します。

```php
// File: init.php

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
The function outputs some basic placeholder HTML. Note the `id` attribute `getdave-sbe-block-editor`, which will be used shortly.
 -->
この関数は基本的なプレースホルダ HTML を出力します。`id` 属性 `getdave-sbe-block-editor` はすぐ後で使います。

<!-- 
### Enqueuing JavaScript and CSS
 -->
### JavaScript と CSS のエンキュー

<!-- 
With the target HTML in place, you can now enqueue some JavaScript and CSS so that they will run on the custom admin page.

To do this, let's hook into [`admin_enqueue_scripts`](https://developer.wordpress.org/reference/hooks/admin_enqueue_scripts/).

First, you must ensure the custom code is only run on the custom admin page. So, at the top of the callback function, exit early if the page doesn't match the page's identifier:
 -->
ターゲットのHTMLを配置したら、カスタム管理ページで実行できるように JavaScript と CSS をエンキューします。

これには [`admin_enqueue_scripts`](https://developer.wordpress.org/reference/hooks/admin_enqueue_scripts/) にフックします。

まずカスタムコードが、カスタム管理ページでのみ実行されるようにしなければなりません。そこで、コールバック関数の先頭で、ページがページの識別子と一致しない場合はすぐに終了します。

<!-- 
```php
// File: init.php

function getdave_sbe_block_editor_init( $hook ) {

    // Exit if not the correct page.
	if ( 'toplevel_page_getdavesbe' !== $hook ) {
		return;
    }
}

add_action( 'admin_enqueue_scripts', 'getdave_sbe_block_editor_init' );
```
 -->
```php
// File: init.php

function getdave_sbe_block_editor_init( $hook ) {

    // 正しいページでなければ終了。
	if ( 'toplevel_page_getdavesbe' !== $hook ) {
		return;
    }
}

add_action( 'admin_enqueue_scripts', 'getdave_sbe_block_editor_init' );
```

<!-- 
With this in place, you can then safely register the main JavaScript file using the standard WordPress [`wp_enqueue_script()`](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) function:
 -->
これでメインの JavaScript ファイルを安全に登録できます。WordPress 標準の [`wp_enqueue_script()`](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) 関数を使用します。

```php
// File: init.php

wp_enqueue_script( $script_handle, $script_url, $script_asset['dependencies'], $script_asset['version'] );
```

<!-- 
To save time and space, the `$script_` variables assignment has been omitted. You can [review these here](https://github.com/getdave/standalone-block-editor/blob/974a59dcbc539a0595e8fa34670e75ec541853ab/init.php#L19).
 -->
時間とスペースの節約のため、`$script_` 変数の代入は省略しました。詳細は[ここで参照](https://github.com/getdave/standalone-block-editor/blob/974a59dcbc539a0595e8fa34670e75ec541853ab/init.php#L19)してください。

<!-- 
Note the third argument for script dependencies, `$script_asset['dependencies']`. These dependencies are
dynamically generated using [@wordpress/dependency-extraction-webpack-plugin](https://developer.wordpress.org/block-editor/packages/packages-dependency-extraction-webpack-plugin/) which will
[ensure that](https://developer.wordpress.org/block-editor/packages/packages-scripts/#default-webpack-config) WordPress provided scripts are not included in the built
bundle.
 -->
スクリプトの依存関係の3番目の引数 `$script_asset['dependencies']` に注意してください。この依存関係は
[wordpress/dependency-extraction-webpack-plugin](https://developer.wordpress.org/block-editor/packages/packages-dependency-extraction-webpack-plugin/) を使用して動的に生成されます。これで WordPress 提供のスクリプトが、ビルドされたバンドルに含まれないことが[保証されます](https://developer.wordpress.org/block-editor/packages/packages-scripts/#default-webpack-config)。 

<!-- 
You also need to register both your custom CSS styles and the WordPress default formatting library to take advantage of some nice default styling:
 -->
またデフォルトの美しいスタイルを利用するには、カスタム CSS スタイルと、WordPress デフォルトの書式設定ライブラリの両方を登録する必要があります。

<!-- 
```php
// File: init.php

// Enqueue default editor styles.
wp_enqueue_style( 'wp-format-library' );

// Enqueue custom styles.
wp_enqueue_style(
    'getdave-sbe-styles',                       // Handle
    plugins_url( 'build/index.css', __FILE__ ), // Block editor CSS
    array( 'wp-edit-blocks' ),                  // Dependency to include the CSS after it
    filemtime( __DIR__ . '/build/index.css' )
);
```
 -->
```php
// File: init.php

// デフォルトのエディタースタイルをエンキュー
wp_enqueue_style( 'wp-format-library' );

// カスタムスタイルをエンキュー
wp_enqueue_style(
    'getdave-sbe-styles',                       // ハンドル
    plugins_url( 'build/index.css', __FILE__ ), // ブロックエディター CSS
    array( 'wp-edit-blocks' ),                  // この下に CSS を含むための依存
    filemtime( __DIR__ . '/build/index.css' )
);
```
<!-- 
### Inlining the editor settings
 -->
### エディター設定のインライン化
<!-- 
Looking at the `@wordpress/block-editor` package, you can see that it accepts a [settings object](https://github.com/WordPress/gutenberg/tree/4c472c3443513d070a50ba1e96f3a476861447b3/packages/block-editor#SETTINGS_DEFAULTS) to configure the default settings for the editor. These are available on the server side, so you need to expose them for use within JavaScript.

To do this, let's [inline the settings object as JSON](https://github.com/getdave/standalone-block-editor/blob/974a59dcbc539a0595e8fa34670e75ec541853ab/init.php#L48) assigned to the global `window.getdaveSbeSettings` object:
 -->
`wordpress/block-editor` パッケージを見ると、エディターのデフォルト設定の構成に [settingsオブジェクト](https://github.com/WordPress/gutenberg/tree/4c472c3443513d070a50ba1e96f3a476861447b3/packages/block-editor#SETTINGS_DEFAULTS)を受け取ります。これらはサーバーサイドで利用できるため、JavaScript 内で使用できるようにエクスポーズする必要があります。

それには、グローバルな `window.getdaveSbeSettings` オブジェクトに割り当てられた設定オブジェクトを [JSON としてインライン化](https://github.com/getdave/standalone-block-editor/blob/974a59dcbc539a0595e8fa34670e75ec541853ab/init.php#L48)します。

<!-- 
```php
// File: init.php

// Get custom editor settings.
$settings = getdave_sbe_get_block_editor_settings();

// Inline all settings.
wp_add_inline_script( $script_handle, 'window.getdaveSbeSettings = ' . wp_json_encode( $settings ) . ';' );
```
 -->
```php
// File: init.php

// カスタムエディター設定を取得。
$settings = getdave_sbe_get_block_editor_settings();

// すべての設定をインライン化。
wp_add_inline_script( $script_handle, 'window.getdaveSbeSettings = ' . wp_json_encode( $settings ) . ';' );
```

<!-- 
## Registering and rendering the custom block editor
 -->
## カスタムブロックエディターの登録とレンダー

<!-- 
With the PHP above in place to create the admin page, you’re now finally ready to use JavaScript to render a block editor into the page’s HTML.

Begin by opening the main `src/index.js` file. Then pull in the required JavaScript packages and import the CSS styles. Note that using Sass requires [extending](https://github.com/getdave/standalone-block-editor/blob/974a59dcbc539a0595e8fa34670e75ec541853ab/webpack.config.js#L13) the default `@wordpress/scripts` Webpack config.
 -->
上の PHP で管理ページが作成できたので、ようやく JavaScript を使用してページの HTML の中にブロックエディターをレンダーできます。

まずメインの `src/index.js` ファイルを開きます。次に、必要な JavaScript パッケージを取り込み、CSS スタイルをインポートします。Sass を使用するには、デフォルトの `@wordpress/scripts` Webpack 構成を [拡張](https://github.com/getdave/standalone-block-editor/blob/974a59dcbc539a0595e8fa34670e75ec541853ab/webpack.config.js#L13) する必要があることに注意してください。

<!-- 
```js
// File: src/index.js

// External dependencies.
import { createRoot } from 'react-dom';

// WordPress dependencies.
import domReady from '@wordpress/dom-ready';
import { registerCoreBlocks } from '@wordpress/block-library';

// Internal dependencies.
import Editor from './editor';
import './styles.scss';
```
 -->
```js
// File: src/index.js

// WordPress の依存。
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';
import { registerCoreBlocks } from '@wordpress/block-library';

// 内部の依存。
import Editor from './editor';
import './styles.scss';
```

<!-- 
Next, once the DOM is ready you will need to run a function which:
 -->
次に、DOM の準備ができた後で、以下を行う関数を実行する必要があります。

<!-- 
- Grabs the editor settings from `window.getdaveSbeSettings` (previously inlined from PHP).
- Registers all the Core WordPress blocks using `registerCoreBlocks`.
- Renders an `<Editor>` component into the waiting `<div>` on the custom admin page.
 -->
- `window.getdaveSbeSettings` からエディターの設定を取得する (以前、PHPでインライン化された）。
- `RegisterCoreBlocks` を使用してすべての WordPress のコアブロックを登録する。
- カスタム管理ページで待機中の `<div>` 内に `<Editor>` コンポーネントをレンダーする。

```jsx
domReady( function () {
	const root = createRoot( document.getElementById( 'getdave-sbe-block-editor' ) );
	const settings = window.getdaveSbeSettings || {};
	registerCoreBlocks();
	root.render(
		<Editor settings={ settings } />
	);
} );
```
<!-- 
<div class="callout callout-info">
	It is possible to render the editor from PHP without creating an unnecessary JS global. Check out the <a href="https://href.li/?https://github.com/WordPress/gutenberg/blob/c6821d7e64a54eb322583a35daedc6c192ece850/lib/edit-site-page.php#L135">Edit Site</a> package in the Gutenberg plugin for an example of this.
</div>
 -->
**注意**: 不要な JS グローバルを作成しなくても PHP からエディターをレンダーできます。例として、Gutenberg プラグイン内の [Edit Site](https://href.li/?https://github.com/WordPress/gutenberg/blob/c6821d7e64a54eb322583a35daedc6c192ece850/lib/edit-site-page.php#L135) パッケージを参照してください。

<!-- 
## Reviewing the `<Editor>` component
 -->
## `<Editor>` コンポーネントのレビュー

<!-- 
Let's take a closer look at the `<Editor>` component that was used in the code above and lives in `src/editor.js` of the [companion plugin](https://github.com/getdave/standalone-block-editor).

Despite its name, this is not the actual core of the block editor. Rather, it is a _wrapper_ component that will contain the components that form the custom editor's main body.
 -->
上のコードで使用された `<Editor>` コンポーネントを見ていきます。このコンポーネントは[関連するプラグイン](https://github.com/getdave/standalone-block-editor)の `src/editor.js` 内にあります。

名前とは裏腹に、これはブロックエディターの実際のコアではありません。むしろ、カスタムエディターの本体を形成するコンポーネントを含む _ラッパー_ コンポーネントです。

<!-- 
### Dependencies
 -->
### 依存

<!-- 
The first thing to do inside `<Editor>` is to pull in some dependencies.
 -->
`<Editor>` 内部ではまず、いくつかの依存関係を取り込みます。

```jsx
// File: src/editor.js

import Notices from 'components/notices';
import Header from 'components/header';
import Sidebar from 'components/sidebar';
import BlockEditor from 'components/block-editor';
```
<!-- 
The most important of these are the internal components `BlockEditor` and `Sidebar`, which will be covered shortly.

The remaining components consist mostly of static elements that form the editor's layout and surrounding user interface (UI). These elements include the header and notice areas, among others.
 -->
これらの中で最も重要なものが内部コンポーネントの `BlockEditor` と `Sidebar` です。すぐ後で説明します。

残りのコンポーネントは、ほぼエディターのレイアウトと周辺のユーザーインターフェース (UI) を形成する、静的な要素で構成されます。これらの要素には、ヘッダーや通知エリア等があります。

<!-- 
### Editor render
 -->
### Editor のレンダー

<!-- 
With these components available, you can define the `<Editor>` component.
 -->
これらのコンポーネントを利用することで、`<Editor>` コンポーネントを定義できます。

```jsx
// File: src/editor.js

function Editor( { settings } ) {
	return (
		<DropZoneProvider>
			<div className="getdavesbe-block-editor-layout">
				<Notices />
				<Header />
				<Sidebar />
				<BlockEditor settings={ settings } />
			</div>
		</DropZoneProvider>
	);
}
```
<!-- 
In this process, the core of the editor's layout is being scaffolded, along with a few specialized [context providers](https://react.dev/reference/react/createContext#provider) that make specific functionality available throughout the component hierarchy.

Let's examine these in more detail:
 -->
このプロセスでは、エディターのレイアウトの核となる部分を自動生成します。同時にいくつかの特殊な[コンテキストプロバイダー](https://react.dev/reference/react/createContext#provider)も出力し、コンポーネントの階層全体で利用可能な特定の機能を作成します。

詳しく見ていきます。

<!-- 
-   `<DropZoneProvider>` – Enables the use of [dropzones for drag and drop functionality](https://github.com/WordPress/gutenberg/tree/e38dbe958c04d8089695eb686d4f5caff2707505/packages/components/src/drop-zone)
-   `<Notices>` – Provides a "snack bar" Notice that will be rendered if any messages are dispatched to the `core/notices` store
-   `<Header>` – Renders the static title "Standalone Block Editor" at the top of the editor UI
-   `<BlockEditor>` – The custom block editor component
 -->
- `<DropZoneProvider>` – [ドラッグアンドドロップのためドロップゾーン機能](https://github.com/WordPress/gutenberg/tree/e38dbe958c04d8089695eb686d4f5caff2707505/packages/components/src/drop-zone) の使用を有効化します。
- `<Notices>` – 「スナックバー」型通知 (一瞬出てきて、すぐに消える通知) を提供します。`core/notices` ストアにメッセージがディスパッチされるとレンダーされます。
- `<Header>` – エディター UI の先頭に静的なタイトル「Standalone Block Editor」をレンダーします。
- `<BlockEditor>` – カスタムブロックエディターコンポーネント。

<!-- 
### Keyboard navigation
 -->
### キーボードナビゲーション
<!-- 
With this basic component structure in place, the only remaining thing left to do
is wrap everything in the [`navigateRegions` HOC](https://github.com/WordPress/gutenberg/tree/e38dbe958c04d8089695eb686d4f5caff2707505/packages/components/src/higher-order/navigate-regions) to provide keyboard navigation between the different "regions" in the layout.
 -->
基本的なコンポーネント構造が整ったため、あとはすべてを 
[`navigateRegions` HOC](https://github.com/WordPress/gutenberg/tree/e38dbe958c04d8089695eb686d4f5caff2707505/packages/components/src/higher-order/navigate-regions)でラップして、レイアウト内の異なる「リージョン」間のキーボードナビゲーションを提供します。

```jsx
// File: src/editor.js

export default navigateRegions( Editor );
```
<!-- 
## The custom `<BlockEditor>`
 -->
## カスタム `<BlockEditor>`

<!-- 
Now the core layouts and components are in place. It's time to explore the custom implementation of the block editor itself.

The component for this is called `<BlockEditor>`, and this is where the magic happens.

Opening `src/components/block-editor/index.js` reveals that it's the most complex component encountered thus far. A lot going on, so start by focusing on what is being rendered by the `<BlockEditor>` component:
 -->
これでコアとなるレイアウトとコンポーネントが揃いました。次は、いよいよブロックエディターそのもののカスタム実装を探索します。

このためのコンポーネントが `<BlockEditor>`であり、こここそが魔法が起きる場所です。

`src/components/block-editor/index.js` を開くと、これまでに見てきた中でもっとも複雑なコンポーネントであることがわかります。多くのことが起きていますので、まず `<BlockEditor>` コンポーネントによってレンダーされるものに集中します

```js
// File: src/components/block-editor/index.js

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
			<BlockCanvas height="400px" />
		</BlockEditorProvider>
	</div>
);
```
<!-- 
The key components are `<BlockEditorProvider>` and `<BlockList>`. Let's examine these.
 -->
キーとなるコンポーネントが `<BlockEditorProvider>` と `<BlockList>` です。調べていきましょう。 

<!-- 
### Understanding the `<BlockEditorProvider>` component
 -->
### `<BlockEditorProvider>` コンポーネントの理解
<!-- 
[`<BlockEditorProvider>`](https://github.com/WordPress/gutenberg/tree/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/provider) is one of the most important components in the hierarchy. It establishes a new block editing context for a new block editor.
 -->
[`<BlockEditorProvider>`](https://github.com/WordPress/gutenberg/tree/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/provider)は階層の中で最も重要なコンポーネントの1つです。新しいブロックエディターのために、新しいブロック編集コンテキストを確立します。

<!-- 
As a result, it is _fundamental_ to the entire goal of this project.

The children of `<BlockEditorProvider>` comprise the UI for the block editor. These components then have access to data (via `Context`), enabling them to _render_ and _manage_ the blocks and their behaviors within the editor.
 -->
結果として、これがこのプロジェクトの最終ゴールの _基礎_ となります。

`<BlockEditorProvider>` の子コンポーネントはブロックエディターの UI を構成します。これらのコンポーネントは`Context` を介してデータにアクセスし、エディター内でのブロックとその動作の _レンダー_ および _管理_ を可能にします。

<!-- ```jsx
// File: src/components/block-editor/index.js

<BlockEditorProvider
	value={ blocks }           // Array of block objects
	onInput={ updateBlocks }   // Handler to manage Block updates
	onChange={ persistBlocks } // Handler to manage Block updates/persistence
	settings={ settings }      // Editor "settings" object
/>
```
 -->
```jsx
// File: src/components/block-editor/index.js

<BlockEditorProvider
	value={ blocks }           // ブロックオブジェクトの配列
	onInput={ updateBlocks }   // ブロック更新を管理するハンドラ
	onChange={ persistBlocks } // ブロック更新 / 永続化を管理するハンドラ
	settings={ settings }      // エディター settings オブジェクト
/>
```
<!-- 
#### `BlockEditor` props
 -->
#### BlockEditor props

<!-- 
You can see that `<BlockEditorProvider>` accepts an array of (parsed) block objects as its `value` prop and, when there's a change detected within the editor, calls the `onChange` and/or `onInput` handler prop (passing the new Blocks as an argument).
 -->
上で見るように `<BlockEditorProvider>`は (パースされた) ブロックオブジェクトの配列を `value` プロパティとして受け取り、エディター内で変更が検出されると、(新しいブロックを引数として渡して) `onChange` ハンドラプロパティと `onInput` ハンドラプロパティを呼び出します。

<!-- 
Internally it does this by subscribing to the provided `registry` (via the [`withRegistryProvider` HOC](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/provider/index.js#L158)), listening to block change events, determining whether the block changing was persistent, and then calling the appropriate `onChange|Input` handler accordingly.
 -->
内部的には、与えられた `registry` を [`withRegistryProvider` HOC](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/provider/index.js#L158) を介してサブスクライブし、ブロック変更イベントをリッスンし、変更されたブロックが永続的かどうかを判断し、それに応じて適切な `onChange|Input` ハンドラを呼び出します。

<!-- 
For the purposes of this simple project, these features allow you to:
 -->
このシンプルなプロジェクトの目的のため、これらの機能により以下が可能です。

<!-- 
-   Store the array of current blocks in state as `blocks`.
-   Update the `blocks` state in memory on `onInput` by calling the hook setter
    `updateBlocks(blocks)`.
-   Handle basic persistence of blocks into `localStorage` using `onChange`. This is [fired when block updates are considered "committed"](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-editor/src/components/provider#onchange).
 -->
- 現在のブロックの配列を `blocks` としてステートに格納する。
- フックセッター `updateBlocks(blocks)` を呼び出して、`onInput` でメモリー内の `blocks` のステートを更新する。
- `onChange` を使用して `localStorage` 内へのブロックの基本的な永続化を処理する。これは[ブロックの更新が 「コミット」されたとみなされたときに発火します](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-editor/src/components/provider#onchange)。

<!-- 
It's also worth recalling that the component accepts a `settings` property. This is where you will add the editor settings inlined earlier as JSON within `init.php`. You can use these settings to configure features such as custom colors, available image sizes, and [much more](https://github.com/WordPress/gutenberg/tree/4c472c3443513d070a50ba1e96f3a476861447b3/packages/block-editor#SETTINGS_DEFAULTS).
 -->
コンポーネントが `settings` プロパティを受け取ることも思い出してください。このプロパティに、先ほど  `init.php` 内で JSON としてインライン化したエディタ設定を追加します。これらの設定を使用して、カスタム色、使用可能な画像サイズ、[その他](https://github.com/WordPress/gutenberg/tree/4c472c3443513d070a50ba1e96f3a476861447b3/packages/block-editor#SETTINGS_DEFAULTS)の機能を設定できます。
<!-- 
### Understanding the `<BlockList>` component
 -->
### <BlockList> コンポーネントの理解

<!-- 
Alongside `<BlockEditorProvider>` the next most interesting component is [`<BlockList>`](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/block-list/index.js).

This is one of the most important components as it's role is to **render a list of blocks into the editor**.

It does this in part thanks to being placed as a child of `<BlockEditorProvider>`, which affords it full access to all information about the state of the current blocks in the editor.
 -->
`<BlockEditorProvider>` と並んで次に興味深いコンポーネントが [`<BlockList>`](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/block-list/index.js) です。

最も重要なコンポーネントのひとつであり、**エディター内でのブロックのリストのレンダー**を担います。

`<BlockEditorProvider>` の子として配置されているため、エディター内の現行ブロックのすべてのステート情報にフルアクセスできます。

<!-- 
#### How does `BlockList` work?
 -->
#### BlockList はどのように動作するか ?

<!-- 
Under the hood, `<BlockList>` relies on several other lower-level components in order to render the list of blocks.

The hierarchy of these components can be _approximated_ as follows:
 -->
ブロックリストのレンダーに、`<BlockList>` は内部でいくつかの他の低レベルコンポーネントに依存しています。

これらのコンポーネントの階層は _おおよそ_ 次のとおりです。

<!-- 
```jsx
// Pseudo code for example purposes only.

<BlockList>
	/* renders a list of blocks from the rootClientId. */
	<BlockListBlock>
		/* renders a single block from the BlockList. */
		<BlockEdit>
			/* renders the standard editable area of a block. */
			<Component /> /* renders the block UI as defined by its `edit()` implementation.
			*/
		</BlockEdit>
	</BlockListBlock>
</BlockList>
```
 -->
```jsx
// 説明を目的とした擬似コード

<BlockList>
	/* rootClientId からブロックのリストをレンダーする。 */
	<BlockListBlock>
		/* BlockList から単一ブロックをレンダーする。 */
		<BlockEdit>
			/* ブロックの標準の編集可能領域をレンダーする。 */
			<Component /> /* edit() 実装で定義されたようにブロック UI をレンダーする。
			*/
		</BlockEdit>
	</BlockListBlock>
</BlockList>
```

<!-- 
Here is roughly how this works together to render the list of blocks:
 -->
これらが一緒に動作して、ブロックリストをレンダーする様子を簡単に説明します。

<!-- 
-   `<BlockList>` loops over all the block `clientIds` and
    renders each via [`<BlockListBlock />`](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/block-list/block.js).
-   `<BlockListBlock />`, in turn, renders the individual block
    using its own subcomponent [`<BlockEdit>`](https://github.com/WordPress/gutenberg/blob/def076809d25e2ad680beda8b9205ab9dea45a0f/packages/block-editor/src/components/block-edit/index.js).
-   Finally, the [block itself](https://github.com/WordPress/gutenberg/blob/def076809d25e2ad680beda8b9205ab9dea45a0f/packages/block-editor/src/components/block-edit/edit.js) is rendered using the `Component` placeholder component.
 -->
- `<BlockList>` はすべてのブロックの clientId をループし、それぞれを [`<BlockListBlock />`](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/block-list/block.js) でレンダーします。
- 次に `<BlockListBlock />` は、個々のブロックを自身のサブコンポーネント [`<BlockEdit>`](https://github.com/WordPress/gutenberg/blob/def076809d25e2ad680beda8b9205ab9dea45a0f/packages/block-editor/src/components/block-edit/index.js) でレンダーします。
- 最後に [ブロック自身](https://github.com/WordPress/gutenberg/blob/def076809d25e2ad680beda8b9205ab9dea45a0f/packages/block-editor/src/components/block-edit/edit.js)が、`Component` プレースホルダーコンポーネントを使用してレンダーされます。

<!-- 
The `@wordpress/block-editor` package components are among the most complex and involved. Understanding them is crucial if you want to grasp how the editor functions at a fundamental level. Studying these components is strongly advised.
 -->
`@wordpress/block-editor` パッケージのコンポーネントは、最も複雑で、中核に存在します。エディターがどのように機能するのかを基本的なレベルで把握したいのであれば、これらのコンポーネントの理解は非常に重要です。コンポーネントの学習を強く推奨します。

<!-- 
### Utility components in the custom block editor
 -->
<!-- 
### カスタムブロックエディター内のユーティリティコンポーネント
 -->
<!-- 
Jumping back to your custom `<BlockEditor>` component, it is also worth noting the following "utility" components:
 -->
<!-- 
カスタム `<BlockEditor>` コンポーネントに話しを戻すと、次の「ユーティリティ」コンポーネントにも注意してください。
 -->
<!-- 
```js
// File: src/components/block-editor/index.js

<div className="editor-styles-wrapper">
	<BlockEditorKeyboardShortcuts /> /* 1. */
	<WritingFlow>
		/* 2. */
		<BlockList className="getdavesbe-block-editor__block-list" />
	</WritingFlow>
</div>
```
 -->
<!-- 
These provide other important elements of functionality for the editor instance.
 -->
<!-- 
これらはエディターインスタンスの機能の他の重要な要素を提供します。
 -->
<!-- 
1. [`<BlockEditorKeyboardShortcuts />`](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/keyboard-shortcuts/index.js) – Enables and usage of keyboard shortcuts within the editor
2. [`<WritingFlow>`](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/writing-flow/index.js) – Handles selection, focus management, and navigation across blocks
 -->
<!-- 
1. [`<BlockEditorKeyboardShortcuts />`](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/keyboard-shortcuts/index.js) – エディター内でキーボードショートカットを有効化し、使用する。
2. [`<WritingFlow>`](https://github.com/WordPress/gutenberg/blob/e38dbe958c04d8089695eb686d4f5caff2707505/packages/block-editor/src/components/writing-flow/index.js) – ブロック間の選択、フォーカス管理、ナビゲーションを処理する。
 -->

<!-- 
## Reviewing the sidebar
 -->
## サイドバーのレビュー
<!-- 
Also within the render of the `<BlockEditor>`, is the `<Sidebar>` component.
 -->
また、`<BlockEditor>` のレンダー内には、`<Sidebar>` コンポーネントがあります。

```jsx
// File: src/components/block-editor/index.js

return (
    <div className="getdavesbe-block-editor">
        <BlockEditorProvider>
            <Sidebar.InspectorFill> /* <-- SIDEBAR */
                <BlockInspector />
            </Sidebar.InspectorFill>
            <BlockCanvas height="400px" />
        </BlockEditorProvider>
    </div>
);
```

<!-- 
This is used, in part, to display advanced block settings via the `<BlockInspector>` component.
 -->
これは (ある部分)、`<BlockInspector>` コンポーネントを介した高度なブロック設定の表示に使用されます。

```jsx
<Sidebar.InspectorFill>
	<BlockInspector />
</Sidebar.InspectorFill>
```
<!-- 
However, the keen-eyed readers amongst you will have already noted the presence of a `<Sidebar>` component within the `<Editor>` (`src/editor.js`) component's
layout:
 -->
しかし、注意深い読者であれば、すでに `<Editor>` (`src/editor.js`) コンポーネントのレイアウト内の `<Sidebar>` コンポーネントの存在に気づいたかもしれません。

<!-- 
```jsx
// File: src/editor.js
<Notices />
<Header />
<Sidebar /> // <-- What's this?
<BlockEditor settings={ settings } />

```
 -->
```jsx
// File: src/editor.js
<Notices />
<Header />
<Sidebar /> // <-- これは何 ?
<BlockEditor settings={ settings } />

```

<!-- 
Opening the `src/components/sidebar/index.js` file, you can see that this is, in fact, the component rendered within `<Editor>` above. However, the implementation utilises
Slot/Fill to expose a `Fill` (`<Sidebar.InspectorFill>`), which is subsequently imported and rendered inside of the `<BlockEditor>` component (see above).
 -->
`src/components/sidebar/index.js` ファイルを開くと、確かにこれが上の `<Editor>` 内でレンダーされているコンポーネントだとわかります。しかし、この実装では Slot/Fill を利用して `Fill` (`<Sidebar.InspectorFill>`) をエスポーズし、その後、`<BlockEditor>`コンポーネントの内部でレンダーします (上の説明を参照)。

<!-- 
With this in place, you then can render `<BlockInspector />` as a child of the `Sidebar.InspectorFill`. This has the result of allowing you to keep `<BlockInspector>` within the React context of `<BlockEditorProvider>` whilst allowing it to be rendered into the DOM in a separate location (i.e. in the `<Sidebar>`).
 -->
これで、`<BlockInspector />` を `Sidebar.InspectorFill` の子としてレンダーできます。これにより、`<BlockEditorProvider>` の React コンテキスト内に `<BlockInspector>` を保持しながら、別の場所 (つまり `<Sidebar>` 内) で DOM にレンダーできます。

<!-- 
This might seem overly complex, but it is required in order for `<BlockInspector>` to have access to information about the current block. Without Slot/Fill, this setup would be extremely difficult to achieve.

And with that you have covered the render of you custom `<BlockEditor>`.
 -->
過度に複雑に見えるかもしれませんが、`<BlockInspector>` が現在のブロックの情報にアクセスするには必要です。Slot/Fill がなければ、この設定の実現は非常に難しかったと思います。

これでカスタム `<BlockEditor>` のレンダーは完了です。

<!-- 
<div class="callout callout-tip">
<a href="https://github.com/WordPress/gutenberg/blob/def076809d25e2ad680beda8b9205ab9dea45a0f/packages/block-editor/src/components/block-inspector/index.js"><code>&lt;BlockInspector&gt;</code></a>
itself actually renders a <code>Slot</code> for <a href="https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-editor/src/components/inspector-controls"><code>&lt;InspectorControls&gt;</code></a>. This is what allows you <a href="https://github.com/WordPress/gutenberg/blob/def076809d25e2ad680beda8b9205ab9dea45a0f/packages/block-library/src/paragraph/edit.js#L127">render</a> a <code>&lt;InspectorControls>&gt;</code> component inside
the <code>edit()</code> definition for your block and have
it display within the editor's sidebar. Exploring this component in more detail is recommended.
</div>
 -->
なお、[`<BlockInspector>`](https://github.com/WordPress/gutenberg/blob/def076809d25e2ad680beda8b9205ab9dea45a0f/packages/block-editor/src/components/block-inspector/index.js) 自体は、実際には [`<InspectorControls>`](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-editor/src/components/inspector-controls) 用の `Slot` をレンダーします。これでブロックの `edit()` 定義の中で <InspectorControls> コンポーネントを[レンダー](https://github.com/WordPress/gutenberg/blob/def076809d25e2ad680beda8b9205ab9dea45a0f/packages/block-library/src/paragraph/edit.js#L127)し、エディターのサイドバー内に表示できます。このコンポーネントを詳細に調べることを推奨します。
<!-- 
## Block Persistence
 -->
## ブロックの永続性

<!-- 
You have come a long way on your journey to create a custom block editor. But there is one major area left to touch upon - block persistence. In other words, having your
blocks saved and available _between_ page refreshes.
 -->
ここまでカスタムブロックエディターを作成する長い旅を続けてきました。しかし、まだ触れなければならない大きなエリアが1つ残っています。ブロックの永続性です。言い換えれば、ブロックの保存と、ページの更新の _間_ での利用を実現します。

<!-- 
![alt text](https://developer.wordpress.org/files/2023/07/custom-block-editor-persistance.gif 'Screencapture showing blocks being restored between page refreshes.')
 -->
![alt text](https://developer.wordpress.org/files/2023/07/custom-block-editor-persistance.gif 'ベージ更新の間でリストアされるブロックを示すスクリーンキャプチャ。')

<!-- 
As this is only an _experiment_, this guide has opted to utilize the browser's `localStorage` API to handle saving block data. In a real-world scenario, you would likely choose a more reliable and robust system (e.g. a database).

That said, let's take a closer look at how to handle save blocks.
 -->
このガイドはあくまで「実験」ですので、ブロックデータの保存に処理に、ブラウザの `localStorage` API を利用します。実際のシナリオでは、より信頼性が高く堅牢なシステム (データベースなど) を選択することになるでしょう。

ブロックを保存する処理を見ていきます。

<!-- 
### Storing blocks in state
 -->
### ステートへのブロックの保存

<!-- 
Looking at the `src/components/block-editor/index.js` file, you will notice that some state has been created to store the blocks as an array:
 -->
`src/components/block-editor/index.js` ファイルを見ると、ブロックを配列として保存するためのステートが作成されていることに気づきます。

```jsx
// File: src/components/block-editor/index.js

const [ blocks, updateBlocks ] = useState( [] );
```
<!-- 
As mentioned earlier, `blocks` is passed to the "controlled" component `<BlockEditorProvider>` as its `value` prop. This "hydrates" it with an initial set of blocks. Similarly, the `updateBlocks` setter is hooked up to the `onInput` callback on `<BlockEditorProvider>`, which ensures that the block state is kept in sync with changes made to blocks within the editor.
 -->
前述したように `blocks` は、「コントロールされた」コンポーネント `<BlockEditorProvider>` に `value` prop として渡され、ブロックの初期セットを与えます。同様に `updateBlocks` セッターは `<BlockEditorProvider>` の `onInput` コールバックにフックされ、ブロックのステートと、エディター内でのブロックの変更との同期が保たれることを保証します。

<!-- 
### Saving block data
 -->
### ブロックデータの保存

<!-- 
If you now turn your attention to the `onChange` handler, you will notice it is hooked up to a function `persistBlocks()` which is defined as follows:
 -->
ここで注意を `onChange` ハンドラーに向けると、以下のように定義される関数 `persistBlocks()` に紐付いていることがわかります。

```js
// File: src/components/block-editor/index.js

function persistBlocks( newBlocks ) {
	updateBlocks( newBlocks );
	window.localStorage.setItem( 'getdavesbeBlocks', serialize( newBlocks ) );
}
```
<!-- 
This function accepts an array of "committed" block changes and calls the state setter `updateBlocks`. It also stores the blocks within LocalStorage under the key `getdavesbeBlocks`. In order to achieve this, the block data is serialized into [Gutenberg "Block Grammar"](https://developer.wordpress.org/block-editor/principles/key-concepts/#blocks) format, meaning it can be safely stored as a string.
 -->
この関数は「コミットされた」ブロックの変更の配列を受け取り、ステートセッター `updateBlocks` を呼び出します。またそのブロックを LocalStorage 内にキー `getdavesbeBlocks` で格納します。この実現のために、ブロックデータは [Gutenberg 「ブロックグラマー」](https://developer.wordpress.org/block-editor/principles/key-concepts/#blocks) 形式でシリアライズされ、文字列として安全に保存されます。

<!-- 
If you open DeveloperTools and inspect the LocalStorage you will see serialized block data stored and updated as changes occur within the editor. Below is an example of the format:
 -->
開発者ツールを開いて LocalStorage を調べると、シリアライズされたブロックデータが保存され、エディター内で変更が発生すると更新されることがわかります。以下はこの形式の例です。

```
<!-- wp:heading -->
<h2>An experiment with a standalone Block Editor in the WordPress admin</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This is an experiment to discover how easy (or otherwise) it is to create a standalone instance of the Block Editor in the WordPress admin.</p>
<!-- /wp:paragraph -->
```
<!-- 
### Retrieving previous block data
 -->
### 以前のブロックデータの取得
<!-- 
Having persistence in place is all well and good, but it's only useful if that data is retrieved and _restored_ within the editor upon each full page reload.

Accessing data is a side effect, so you must use the `useEffect` hook to handle this.
 -->
永続化自体はこれで良いのですが、ページをリロードするたびにエディター内でデータが取得され、_リストア_ されて初めて有用になります。

データへのアクセスは副作用ですので、これを処理するには `useEffect` フックを使用する必要があります。

```jsx
// File: src/components/block-editor/index.js

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
This handler:
 -->
このハンドラは、

<!-- 
-   Grabs the serialized block data from local storage.
-   Converts the serialized blocks back to JavaScript objects using the `parse()` utility.
-   Calls the state setter `updateBlocks` causing the `blocks` value to be updated in state to reflect the blocks retrieved from LocalStorage.
 -->
- ローカルストレージからシリアライズされたブロックデータを取得する。
- `parse()` ユーティリティを使用してシリアライズされたブロックを JavaScript オブジェクトに変換し直す。
-  ステートセッター `updateBlocks` を呼び出して、ステート内の `blocks` 値を更新し、LocalStorage から取り出したブロックを反映する。

<!-- 
As a result of these operations, the controlled `<BlockEditorProvider>` component is updated with the blocks restored from LocalStorage, causing the editor to show these blocks.

Finally, you will want to generate a notice - which will display in the `<Notice>` component as a "snackbar" notice - to indicate that the blocks have been restored.
 -->
この操作の結果、コントロールされた `<BlockEditorProvider>` コンポーネントは LocalStorage からリストアされたブロックで更新され、エディターにブロックが表示されます。

最後に、通知を生成します。ブロックがリストアされたことを示すために、`<Notice>` コンポーネントに「スナックバー」通知として表示します。

<!-- 
## Wrapping up
 -->
## まとめ

<!-- 
Congratulations for completing this guide. You should now have a better understanding of how the block editor works under the hood. 
 -->
このガイドの完了、おめでとうございます。これでブロックエディター内部がどのように動作しているのかをよく理解できたと思います。

<!-- 
The full code for the custom block editor you have just built is [available on GitHub](https://github.com/getdave/standalone-block-editor). Download and try it out for yourself. Experiment, then and take things even further.
 -->
ここで構築したカスタムブロックエディターの完全なコードは、[GitHub から利用可能](https://github.com/getdave/standalone-block-editor)です。ダウンロードし、自分で動かしてみてください。実験し、更にその先まで進んでみてください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/platform/custom-block-editor.md)
