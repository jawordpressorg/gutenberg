<!-- 
# WordPress Plugin
 -->
# WordPress プラグイン
<!-- 
A block is added to the block editor using a WordPress plugin. You can create your own plugin, and after installing and activating the plugin use the block. Let's first look at what makes up a WordPress plugin.
 -->
ブロックは、WordPress プラグインを使用してブロックエディターに追加されます。ユーザーは自分のプラグインを作成し、インストール、有効化してブロックを使用できます。まずここでは最初に、WordPress プラグインの構成を見ていきます。

<!-- 
## Plugin Details
 -->
## プラグインの詳細
<!-- 
A WordPress plugin is a set of files within the site's `wp-content/plugins` directory. For our tutorial, we will use the `@wordpress/create-block` package to generate the necessary plugin files.
 -->
「WordPress プラグイン」の実体は Web サイトの `wp-content/plugins` ディレクトリ内にあるファイルの集合体です。このチュートリアルでは `@wordpress/create-block` パッケージを使用して必要とされるプラグインファイルを生成します。

<!-- 
### Switch to Working Directory
 -->
### ワーキングディレクトリへの切り替え
<!-- 
(1A) If you do not plan to use `wp-env`, change to your local WordPress plugin directory. For example in Local it is: `~\Local Sites\mywp\wp-content\plugins`

-or-

(1B) If using `wp-env start`, you can work from any directory for your project; `wp-env` will map it as a plugin directory for your site.
 -->
(1A) `wp-env` を使う予定がなければ、ローカルの WordPress プラグインディレクトリに移動してください。たとえば [Local by Flywheel](https://localbyflywheel.com/) (以下、Local) であれば `~\Local Sites\mywp\wp-content\plugins` です。

または

(1B) `wp-env start` を使う場合、任意のプロジェクト用ディレクトリから始めることができます。`wp-env` がサイトのプラグインディレクトリにマッピングしてくれます。
<!-- 
### Generate Plugin Files
 -->
### プラグインファイルの生成
<!-- 
(2) Once in the right directory for your environment, the next step is to run the following command to generate plugin files:
 -->
(2) 環境の適切なディレクトリに移動後、次のコマンドを実行してプラグインファイルを生成します。

```sh
npx @wordpress/create-block gutenpride
cd gutenpride
```
<!-- 
A new directory `gutenpride` is created with all the necessary plugin files. This tutorial will walk through and explain the plugin files, please explore and become familiar with them also.

The main plugin file created is the PHP file `gutenpride.php`, at the top of this file is the Plugin Header comment block that defines the plugin.
 -->
新しいディレクトリ `gutenpride` とすべての必要なプラグインファイルが作成されます。以下、プラグインファイルを見ながら説明を加えていきます。一緒にファイルを確認し内容に親しんでください。

作成されるメインのプラグインファイルは PHP ファイル `gutenpride.php` です。このファイルの先頭部分には、プラグインを定義するプラグインヘッダーコメントブロックがあります。

```php
/**
 * Plugin Name:     Gutenpride
 * Description:     Example block
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     gutenpride
 *
 * @package         create-block
 */
```
<!-- 
### Start WordPress
 -->
### WordPress の起動
<!-- 
Let's confirm the plugin is loaded and working.

(3A) If you are using Local, or other environment confirm your WordPress site is started.

-or-

(3B) If you are using `wp-env`, see [Development Environment setup](/docs/getting-started/tutorials/devenv/README.md), then you should now run from inside the `gutenpride` directory:
 -->
プラグインがロードでき、動作することを確認します。

(3A) Local や他の環境であれば WordPress サイトが起動していることを確認してください。

または

(3B) `wp-env` を使用する場合は、まず[開発環境のセットアップ](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/devenv/) を参照してください。次に `gutenpride` ディレクトリ內部から以下を実行します。

```sh
wp-env start
```
<!-- 
This will start your local WordPress site and use the current directory as your plugin directory. In your browser, go to http://localhost:8888/wp-admin/ and login, the default username is "admin" and password is "password", no quotes.
 -->
ローカルで WordPress を起動し、カレントディレクトリをプラグインディレクトリとして使用します。ブラウザから http://localhost:8888/wp-admin/ にアクセスしてログインします。デフォルトユーザー名は「admin」、パスワードは「password」です。


<!-- 
### Confirm Plugin Installed
 -->
### Plugin のインストールの確認

<!-- 
The generated plugin should now be listed on the Plugins admin page in your WordPress install. Switch WorPress to the plugins page and activate.

For more on creating a WordPress plugin see [Plugin Basics](https://developer.wordpress.org/plugins/plugin-basics/), and [Plugin Header requirements](https://developer.wordpress.org/plugins/plugin-basics/header-requirements/) for explanation and additional fields you can include in your plugin header.
 -->
生成されたプラグインは WordPress 管理画面の「プラグイン」ページのリストに表示されます。プラグインを有効化してください。

WordPress プラグイン作成の詳細については [Plugin Basics](https://developer.wordpress.org/plugins/plugin-basics/) を参照してください。またプラグインヘッダーのフィールドの説明、追加可能なフィールドについては [Plugin Header requirements](https://developer.wordpress.org/plugins/plugin-basics/header-requirements/) を参照してください。

<!-- 
## package.json
 -->
## package.json
<!-- 
The `package.json` file defines the JavaScript properties for your project. This is a standard file used by NPM for defining properties and scripts it can run, the file and process is not specific to WordPress.

A `package.json` file was created with the create script, this defines the dependecies and scripts needed. You can install dependencies. The only initial dependency is the `@wordpress/scripts` package that bundles the tools and configurations needed to build blocks.

In `package.json`, there is a `scripts` property that defines what command to run when using `npm run (cmd)`. In our generated `package.json` file, the two main scripts point to the commands in the `wp-scripts` package:
 -->
`package.json` ファイルはプロジェクトの JavaScript プロパティを定義します。これは NPM で使用される標準ファイルでプロパティや実行可能なスクリプトを含みます。ファイルやプロセスは WordPress 固有のものではありません。

`package.json` ファイルは create スクリプトで作成され、依存性と必要なスクリプトを定義します。最初からある依存性は `@wordpress/scripts` パッケージだけでブロック構築に必要なツールと構成をバンドルします。

`package.json` には `scripts` プロパティがあり、`npm run (cmd)` を使用した際に実行されるコマンドが定義されています。生成された `package.json` ファイルでは、2つのメインのスクリプトが `wp-scripts` パッケージ内のコマンドを指しています。

```json
  "scripts": {
    "build": "wp-scripts build",
    "start": "wp-scripts start"
  },
```
<!-- 
These scripts are run by using: `npm run build` or `npm run start`

Use `npm run build` for running once to create a "production" build. This compresses the code down so it downloads faster, but makes it harder to read using browser tools—good for final deployment but not while developing.
 -->
これらのスクリプトは `npm run build` または `npm run start` で実行されます。

`npm run build` は1度実行すると「production ビルド」(製品ビルド) を作成します。コードを圧縮しダウンロード時間を短くしますが、このためにブラウザツールを使用してコードを読むことが難しくなります。最終の配布用としては有用ですが開発では適しません。
<!-- 
Use `npm run start` for creating a "development" build, this does not compress the code so it is easier to read using browser tools, plus [source maps](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_a_source_map) that make debugging easier. Additionally, development build will start a watch process that waits and watches for changes to the file and will rebuild each time it is saved; so you don't have to run the command for each change.

By default, the build scripts looks for `src/index.js` for the JavaScript file to build and will save the built file to `build/index.js`. In the upcoming sections, we will look closer at that script, but first let's make sure it is loaded in WordPress.
 -->
`npm run start` を使用すると「development ビルド」(開発ビルド) が作成されます。コードは圧縮されないため、ブラウザツールを使用しても読みやすく、[source maps](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_a_source_map) でデバッグも容易になります。さらに development ビルドは watch プロセスを開始します。待機してファイルの変更を監視し、ファイルが更新されるたびにリビルドします。変更ごとにコマンドを実行する必要はありません。

デフォルトではビルドスクリプトはビルドする JavaScript ファイルとして `src/index.js` を探し、ビルドしたファイルを `build/index.js` に保存します。次のセクションではスクリプトの詳細を確認しますが、まず WordPress にロードされていることを確認しましょう。

<!-- 
## Plugin to Load Script
 -->
## スクリプトをロードするプラグイン
<!-- 
To load the built script, so it is run within the editor, you need to tell WordPress about the script. This done in the init action in the `gutenpride.php` file.
 -->
エディター内で動作するようビルドしたスクリプトをロードするには、WordPress に対してスクリプトにことを伝える必要があります。これは `gutenpride.php` ファイル内の init アクションで行います。

```php
function create_block_gutenpride_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'create_block_gutenpride_block_init' );
```

<!-- 
The `register_block_type_from_metadata` function registers the block we are going to create and specifies the `editor_script` file handle registered from the metadata provided in `block.json` file. So now when the editor loads it will load this script.
 -->
`register_block_type_from_metadata` 関数は、これから作成するブロックを登録し、`block.json` ファイルで提供されたメタデータから登録された `editor_script` ファイルハンドルを指定します。エディターがブロックをロードすると、このスクリプトをロードします。

```json
{
	"apiVersion": 2,
	"name": "create-block/gutenpride",
	"title": "Gutenpride",
	"editorScript": "file:./build/index.js"
}
```
<!-- 
For the `editorScript` provided in the block metadata, the build process creates a secondary asset file that contains the list of dependencies and a file version based on the timestamp, this is the `index.asset.php` file.
 -->
ブロックメタデータで提供される `editorScript` に対して、ビルドプロセスは2つ目のアセットファイル `index.asset.php` を作成します。ファイルには依存性とタイムスタンプに基づくファイルバージョンのリストが含まれています。

<!-- 
The `wp_register_script` function used internally registers a name, called the handle, and relates that name to the script file. The dependencies are used to specify if the script requires including other libraries. The version is specified so the browser will reload if the file changed.
 -->
内部で使用される `wp_register_script` は「ハンドル」と呼ばれる名前を登録し、その名前をスクリプトファイルと関連付けます。他のライブラリーを含めスクリプトが必要であれば、指定に依存性が使用されます。ファイルが更新された場合にブラウザがリロードするよう、バージョンが指定されます。

<!-- 
The `wp_set_script_translations` function tells WordPress to load translations for this script, if they  exist. See more about [translations & internationalization.](/docs/how-to-guides/internationalization.md)
 -->
`wp_set_script_translations` 関数は WordPress に、もし存在するならスクリプトの翻訳をロードするよう伝えます。詳細については[翻訳と国際化](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/internationalization/)を参照してください。

<!-- 
With the above in place, create a new post to load the editor and check your plugin is in the inserter. You can use `/` to search, or click the box with the [+] and search for "Gutenpride" to find the block.
 -->
すべてを終えたら新しい投稿を作成してエディターを開始し、インサーターにブロックが追加されていることを確認してください。検索には `/` を使うか、[+] のボックスをクリックして「Gutenpride」を検索し、ブロックを見つけてください。

<!-- 
## Troubleshooting
 -->
## トラブルシューティング
<!-- 
It is a good skill to learn and get comfortable using the web console. This is where JavaScript errors are shown and a nice way to test out snippets of JavaScript. See [Firefox Developer Tools documentation](https://developer.mozilla.org/en-US/docs/Tools).

To open the developer tools in Firefox, use the menu selecting Web Developer : Toggle Tools, on Chrome, select More Tools -> Developers Tools. For both browsers, the keyboard shortcut on Windows is Ctrl+Shift+I, or on Mac Cmd+Shift+I. On Windows & Linux, the F12 key also works. You can then click Console to view logs.
 -->
Web コンソールの使い方を学び親しみましょう。Web コンソールでは JavaScript のエラーを表示したり、JavaScript のスニペットをテストできます。[Firefox 開発ツールドキュメント](https://developer.mozilla.org/ja/docs/Tools)を参照してください。

FireFox で開発ツールを開くにはメニューの「Web 開発」>「開発ツールを表示」を選択してください。Chrome では「その他のツール」>「デベロッパーツール」です。両方のブラウザともキーボードショートカットは Windows では Ctrl+Shift+I、Mac では Cmd+Shift+I です。Windows や Linux であれば F12 キーでも開きます。ログを参照するには「コンソール」をクリックしてください。
<!-- 
Try running `npm run start` that will start the watch process for automatic rebuilds. If you then make an update to `src/index.js` file, you will see the build run, and if you reload the WordPress editor you'll see the change.

For more info, see the build section of the [Getting Started with JavaScript tutorial](/docs/how-to-guides/javascript/js-build-setup.md) in the Block Editor Handbook.
 -->
`npm run start` を実行してください。watch プロセスが始まり、自動リビルドが行われます。`src/index.js` ファイルを更新するとビルドが始まります。ブロックエディターをリロードすると変更が反映されます。

詳細についてはブロックエディターハンドブックの [JavaScript 入門チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/js-build-setup/)のビルドセクションを参照してください。
<!-- 
## Summary
 -->
## まとめ
<!-- 
Hopefully, at this point, you have your plugin created and activated. We have the package.json with the `@wordpress/scripts` dependency, that defines the build and start scripts. The basic block is in place and can be added to the editor.

Next Section: [Anatomy of a Block](/docs/getting-started/tutorials/create-block/block-anatomy.md)
 -->
この時点でプラグインを作成し有効化できました。`@wordpress/scripts` への依存性を含む package.json ではビルドとスクリプトの開始を定義しています。基本的なブロックが完成しエディターに追加できました。

次のセクション: [ブロックの詳細](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/block-anatomy/)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/tutorials/create-block/wp-plugin.md)
