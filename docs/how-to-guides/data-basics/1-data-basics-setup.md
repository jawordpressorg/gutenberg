<!--
# Setup
-->
# セットアップ

<!--
We will build the application as a WordPress plugin, which means you need to have WordPress itself installed. One way to do this is by following the instructions on the [Getting Started](/docs/contributors/code/getting-started-with-code-contribution.md) page. Once your setup is complete, you can follow along with the rest of this tutorial.
-->
WordPress のプラグインとしてアプリケーションを構築します。このため、WordPress 本体のインストールが必要です。方法はさまざまですが、1つの方法として、[コードによるコントリビューション入門](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/getting-started-with-code-contribution) の指示に従ってください。セットアップの完了後は、このチュートリアルの残りの部分を進められます。

<!--
Also, this tutorial will lean heavily on Redux concepts such as state, actions, and selectors. If you are not familiar with them, you may want to start by reviewing [Getting Started With Redux](https://redux.js.org/introduction/getting-started).
-->
また、このチュートリアルでは、ステート、アクション、セレクタなど、Redux の概念に激しく依存します。もしそれらに馴染みがなければ、[Getting Started With Redux](https://redux.js.org/introduction/getting-started) の復習から始めるとよいでしょう。

<!--
## Creating a plugin
-->
## プラグインの作成

<!--
We'll do all the development inside of a WordPress plugin. Let's start by creating a `wp-content/plugins/my-first-gutenberg-app` directory in your local WordPress environment. We will need to create three files inside that directory:
-->
開発はすべて WordPress のプラグイン内で行います。まず、ローカルの WordPress 環境に `wp-content/plugins/my-first-gutenberg-app` ディレクトリを作成します。そのディレクトリの中に、4つのファイルを作成してください。

<!--
* my-first-gutenberg-app.php – to create a new admin page
* src/index.js – for our JavaScript application
* style.css – for the minimal stylesheet
* package.json – for the build process
-->
* my-first-gutenberg-app.php – 新しい管理ページの作成
* src/index.js – メインの JavaScript アプリケーション
* style.css – 最低限のスタイルシート
* package.json – ビルドプロセス用

<!--
Go ahead and create these files using the following snippets:
-->
以下のスニペットを使って、これらのファイルを作成してください。

**src/index.js:**

```js
import { render } from '@wordpress/element';

function MyFirstApp() {
	return <span>Hello from JavaScript!</span>;
}

window.addEventListener( 'load', function() {
	render(
		<MyFirstApp />,
		document.querySelector( '#my-first-gutenberg-app' )
	);
}, false );
```

**style.css:**
```css
.toplevel_page_my-first-gutenberg-app #wpcontent {
	background: #FFF;
	height: 1000px;
}
#my-first-gutenberg-app {
	max-width: 500px;
}
#my-first-gutenberg-app ul,
#my-first-gutenberg-app ul li {
	list-style-type: disc;
}
.my-gutenberg-form .form-buttons {
	display: flex;
	margin-top: 20px;
	margin-left: 1px;
}
.my-gutenberg-form .form-error {
	color: #cc1818;
}
.my-gutenberg-form .form-buttons button {
	margin-right: 4px;
}
.my-gutenberg-form .form-buttons .components-spinner {
	margin-top: 0;
}
#my-first-gutenberg-app ul {
	padding-left: 20px;
}
#my-first-gutenberg-app .components-search-control__input {
	height: 36px;
	margin-left: 0;
}
```

**my-first-gutenberg-app.php:**

```php
<?php
/**
 * Plugin Name: My first Gutenberg App
 *
 */

function my_admin_menu() {
	// Create a new admin page for our app.
	add_menu_page(
		__( 'My first Gutenberg app', 'gutenberg' ),
		__( 'My first Gutenberg app', 'gutenberg' ),
		'manage_options',
		'my-first-gutenberg-app',
		function () {
			echo '
			<h2>Pages</h2>
			<div id="my-first-gutenberg-app"></div>
		';
		},
		'dashicons-schedule',
		3
	);
}

add_action( 'admin_menu', 'my_admin_menu' );

function load_custom_wp_admin_scripts( $hook ) {
	// Load only on ?page=my-first-gutenberg-app.
	if ( 'toplevel_page_my-first-gutenberg-app' !== $hook ) {
		return;
	}

	// Load the required WordPress packages.

	// Automatically load imported dependencies and assets version.
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	// Enqueue CSS dependencies.
	foreach ( $asset_file['dependencies'] as $style ) {
		wp_enqueue_style( $style );
	}

	// Load our app.js.
	wp_register_script(
		'my-first-gutenberg-app',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
	wp_enqueue_script( 'my-first-gutenberg-app' );

	// Load our style.css.
	wp_register_style(
		'my-first-gutenberg-app',
		plugins_url( 'style.css', __FILE__ ),
		array(),
		$asset_file['version']
	);
	wp_enqueue_style( 'my-first-gutenberg-app' );
}

add_action( 'admin_enqueue_scripts', 'load_custom_wp_admin_scripts' );
```

**package.json:**

```json
{
	"name": "05-recipe-card-esnext",
	"version": "1.1.0",
	"private": true,
	"description": "Example: Recipe Card (ESNext).",
	"author": "The WordPress Contributors",
	"license": "GPL-2.0-or-later",
	"keywords": [
		"WordPress",
		"block"
	],
	"homepage": "https://github.com/WordPress/gutenberg-examples/",
	"repository": "git+https://github.com/WordPress/gutenberg-examples.git",
	"bugs": {
		"url": "https://github.com/WordPress/gutenberg-examples/issues"
	},
	"main": "build/index.js",
	"devDependencies": {
		"@wordpress/scripts": "^18.0.1"
	},
	"scripts": {
		"build": "wp-scripts build",
		"format:js": "wp-scripts format-js",
		"lint:js": "wp-scripts lint-js",
		"packages-update": "wp-scripts packages-update",
		"start": "wp-scripts start"
	}
}
```

<!--
## Setting up the build pipeline
-->
## ビルドパイプラインのセットアップ

<!--
This tutorial will proceed assuming the reader is familiar with ESNext syntax and the concept of build tools (like webpack). If that sounds confusing, you may want to review the [Getting started with JavaScript Build Setup](/how-to-guides/javascript/js-build-setup.md) first.
-->
このチュートリアルは、読者が ESNext の構文と、 webpack などのビルドツールの概念に慣れていることを前提とします。もし分からないところがあれば、まず、[JavaScript ビルド環境のセットアップ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/js-build-setup/) を復習してください。

<!--
To install the build tool, navigate to the plugin directory using your terminal and run `npm install`.
-->
ビルドツールをインストールするには、ターミナルでプラグインのディレクトリに移動し、 `npm install` を実行してください。

<!--
Once all the dependencies are in place, all that's left is to run `npm start` and voila! A watcher will run in the terminal. You can then edit away in your text editor; after each save, it will automatically build.
-->
依存関係がすべて解決すれば、あとは `npm start` を実行するだけで完成です。ターミナルで Watcher が実行されます。テキストエディタでコードを書くと、保存するたびに、自動的にビルドされます。

<!--
## Testing if it worked
-->
## 動作のテスト

<!--
If you now go to the Plugins page, you should see a plugin called **My first Gutenberg App**. Go ahead and activate it. A new menu item labeled _My first Gutenberg app_ should show up. Once you click it, you will see a page that says _Hello from JavaScript!_:
-->
管理画面の「プラグイン」を開くと、「**My first Gutenberg App**」プラグインが表示されているはずです。これを有効化すると、新しいメニュー項目「My first Gutenberg app」が表示されます。クリックすると、「Hello from JavaScript!」と書かれたページが表示されます。

<!--
![](/docs/how-to-guides/data-basics/media/setup/hello-from-js.jpg)
-->
![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/setup/hello-from-js.jpg)

<!--
Congratulations! You are now ready to start building the app!
-->
おめでとうございます ! これでアプリケーション構築の準備ができました !

<!--
## What's next?
-->
## 次のステップ

<!--
* Previous part: [Introduction](/docs/how-to-guides/data-basics/README.md)
* Next part: [Building a basic list of pages](/docs/how-to-guides/data-basics/2-building-a-list-of-pages.md)
* (optional) Review the [finished app](https://github.com/WordPress/gutenberg-examples/tree/trunk/09-code-data-basics-esnext) in the gutenberg-examples repository
-->
* 前のステップ: [はじめに](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/)
* 次のステップ: [基本的なページ一覧の構築](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/2-building-a-list-of-pages)
* (オプション) gutenberg-examples リポジトリ内の [完成したアプリ](https://github.com/WordPress/gutenberg-examples/tree/trunk/09-code-data-basics-esnext) を参照

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/data-basics/1-data-basics-setup.md)