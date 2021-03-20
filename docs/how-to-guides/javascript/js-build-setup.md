<!-- 
# JavaScript Build Setup
 -->
# JavaScript ビルド環境のセットアップ

<!-- 
ESNext is JavaScript written using syntax and features only available in a version newer than browser support—the support browser versions is referred to as ECMAScript 5 (ES5). [JSX](https://reactjs.org/docs/introducing-jsx.html) is a custom syntax extension to JavaScript, created by React project, that allows you to write JavaScript using a familiar HTML tag-like syntax.
 -->
ESNext はブラウザーのサポートする JavaScript よりも新しいバージョンで利用可能な構文や機能を使用して書かれた JavaScript です。サポートするブラウザーのバージョンは ECMAScript 5 (ES5) と参照されます。[JSX](https://reactjs.org/docs/introducing-jsx.html) は React プロジェクトで作成された JavaScript に対するカスタム構文拡張です。馴染みのある HTML タグに似た構文を使用して JavaScript を書くことができます。

<!-- 
See the [ESNext syntax documentation](/docs/how-to-guides/javascript/esnext-js.md) for explanation and examples about common code differences between standard JavaScript and ESNext.
 -->
標準の JavaScript と ESNext との一般的なコードの違いに関する説明と例については [ESNext 構文ドキュメント](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/esnext-js/) を参照してください。

<!-- 
Let's set up your development environment to use these syntaxes, we'll cover development for your plugin to work with the Gutenberg project (ie: the block editor). If you want to develop on Gutenberg itself, see the [Getting Started](/docs/contributors/code/getting-started-with-code-contribution.md) documentation.
 -->
これらの構文を使用する開発環境をセットアップしましょう。このドキュメントではブロックエディターを始めとする Gutenberg プロジェクトと一緒に動作するプラグインの開発方法について説明します。Gutenberg 自身の開発については [入門](https://ja.wordpress.org/team/handbook/block-editor/contributors/develop/getting-started-with-code-contribution/) を参照してください。

<!-- 
Browsers cannot interpret or run ESNext and JSX syntaxes, so we must use a transformation step to convert these syntaxes to code that browsers can understand.
 -->
ブラウザーは ESNext や JSX 構文を解釈したり実行することはできません。変換ステップを使用してすべてのブラウザが理解できるよう構文を変換する必要があります。

<!--
There are a few reasons to use ESNext and this extra step of transformation:

-   It makes for simpler code that is easier to read and write.
-   Using a transformation step allows for tools to optimize the code to work on the widest variety of browsers.
-   By using a build step you can organize your code into smaller modules and files that can be bundled together into a single download.

There are different tools that can perform this transformation or build step; WordPress uses webpack and Babel.

[webpack](https://webpack.js.org/) is a pluggable tool that processes JavaScript and creates a compiled bundle that runs in a browser. [Babel](https://babeljs.io/) transforms JavaScript from one format to another. You use Babel as a plugin to webpack to transform both ESNext and JSX to JavaScript.

The [@wordpress/scripts](https://www.npmjs.com/package/@wordpress/scripts) package abstracts these libraries away to standardize and simplify development, so you won't need to handle the details for configuring webpack or babel. See the [@wordpress/scripts package documentation](https://developer.wordpress.org/block-editor/packages/packages-scripts/) for configuration details.
 -->
ESNext を使用し、さらに追加の変換手順を実行するのにはいくつかの理由があります。

- コードがシンプルになり、読みやすく、そして書きやすくなります。 
- 変換ステップの途中で可能な限り多くのブラウザーをサポートするようにコードを最適化できます。
- ビルドステップを使用することで、コードを小さなモジュールやファイルに整理し、かつ、1つのダウンロードモジュールにバンドリングできます。

変換を実行するツールにはいくつかありますが WordPress では webpack と Babel を使用します。

[webpack](https://webpack.js.org/) は JavaScript を処理するプラガブルなツールで、ブラウザー上で動作するコンパイル済みバンドルを作成します。[Babel](https://babeljs.io/) は JavaScript をある形式から別の形式に変換します。webpack のプラグインとして Babel を使用することで ESNext と JSX の両方を JavaScript に変換します。

[@wordpress/scripts](https://www.npmjs.com/package/@wordpress/scripts) パッケージはこれらのライブラリーを標準化されたシンプルな開発に抽象化します。このため webpack や babel を細かく構成する必要はありません。構成の詳細については [@wordpress/scripts パッケージのドキュメント](https://developer.wordpress.org/block-editor/packages/packages-scripts/)を参照してください。

<!-- 
## Quick Start

If you prefer a quick start, you can use one of the examples from the [Gutenberg Examples repository](https://github.com/wordpress/gutenberg-examples/) and skip below. Each one of the `-esnext` directories in the examples repository contain the necessary files for working with ESNext and JSX.
 -->
## クイックスタート

すぐに始めたいという方は以下の手順を省略し、[Gutenberg Examples リポジトリー](https://github.com/wordpress/gutenberg-examples/) のサンプルを使用してください。Examples リポジトリーのそれぞれのサンプルの `-esnext` ディレクトリ下に ESNext や JSX の動作に必要なファイルが含まれています。

<!-- 
## Setup

Both webpack and Babel are tools written in JavaScript and run using [Node.js](https://nodejs.org/) (node). Node.js is a runtime environment for JavaScript outside of a browser. Simply put, node allows you to run JavaScript code on the command-line.

First, you need to set up Node.js for your development environment. The steps required depend on your operating system, if you have a package manager installed, setup can be as straightforward as:
 -->
## セットアップ

webpack も Babel も JavaScript で書かれており [Node.js](https://nodejs.org/) (node) を使用して動作します。Node.js はブラウザーの外での JavaScript 実行環境です。必要なファイルをコピーするだけでコマンドラインから JavaScript コードを実行できます。

はじめに開発環境に Node.js をセットアップする必要があります。手順はオペレーティングシステムによって異なりますが、パッケージマネージャーをインストールしていればセットアップは単純です。

-   Ubuntu: `apt install nodejs npm`
-   macOS: `brew install node`
-   Windows: `choco install node`

<!-- 
If you are not using a package manager, see the [developer environment setup documentation](/docs/getting-started/tutorials/devenv/README.md) for setting up Node using nvm, or see the official [Node.js download page](https://nodejs.org/en/download/) for installers and binaries.

**Note:** The build tools and process occur on the command-line, so basic familiarity using a terminal application is required. Some text editors have a terminal built-in that is fine to use; Visual Studio Code and PhpStorm are two popular options.
 -->
パッケージマネージャーをインストールしていない場合は、nvm を使用した Node のセットアップについて [開発環境セットアップドキュメント](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/devenv/) を参照するか、または公式 [Node.js ダウンロードページ](https://nodejs.org/en/download/) を参照してインストーラーとバイナリーを入手してください。

**注意:** ビルドツールやプロセスはコマンドライン上で動作するため、ターミナルアプリケーションの基本的な使い方は覚える必要があります。テキストエディターの中には便利なビルトインターミナル機能があるものもあります。Visual Studio Code と PhpStorm は人気のあるエディターです。

<!-- 
### Node Package Manager (npm)

The Node Package Manager (npm) is a tool included with node. npm allows you to install and manage JavaScript packages. npm can also generate and process a special file called `package.json`, that contains information about your project and the packages your project uses.

To start a new node project, first create a directory to work in:
 -->
### node パッケージマネージャー (npm)

node パッケージマネージャー (npm) は node に含まれる、JavaScript パッケージをインストールしたり管理するツールです。npm は専用のファイル `package.json` を生成し、処理します。`package.json` にはプロジェクトやプロジェクトの使用するパッケージ情報が含まれます。

新しい node プロジェクトを開始するには、まず作業用のディレクトリを作成します。

```sh
mkdir myguten-block
cd myguten-block
```

<!-- 
You create a new package.json running `npm init` in your terminal. This will walk you through creating your package.json file:
 -->
次に、ターミナルで `npm init` を実行して新しい package.json を作成します。出力される画面の指示に従ってください。

```sh
npm init

package name: (myguten-block) myguten-block
version: (1.0.0)
description: Test block
entry point: (index.js) build/index.js
test command:
git repository:
keywords:
author: mkaz
license: (ISC) GPL-2.0-only
About to write to /home/mkaz/src/wp/scratch/package.json:

{
  "name": "myguten-block",
  "version": "1.0.0",
  "description": "Test block",
  "main": "block.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "mkaz",
  "license": "GPL-2.0-only"
}


Is this OK? (yes) yes
```

<!-- 
### Using npm to install packages

The next step is to install the packages required. You can install packages using the npm command `npm install`. If you pass the `--save-dev` parameter, npm will write the package as a dev dependency in the package.json file. The `--save-exact` parameter instructs npm to save an exact version of a dependency, not a range of valid versions. See [npm install documentation](https://docs.npmjs.com/cli/install) for more details.

Run `npm install --save-dev --save-exact @wordpress/scripts`

After installing, a `node_modules` directory is created with the modules and their dependencies.

Also, if you look at package.json file it will include a new section:
 -->
### npm を使用したパッケージのインストール

次に必要なパッケージをインストールします。パッケージは npm コマンド `npm install` を使用してインストールします。コマンドにパラメータ `--save-dev` を指定すると package.json ファイル内に依存性のあるパッケージを書き出します。`--save-exact` パラメーターを指定すると npm は互換性のある複数のバージョンを含む範囲ではなく、正確なバージョンのみを依存の対象として書き出します。詳細については [npm install ドキュメント](https://docs.npmjs.com/cli/install)を参照してください。

`npm install --save-dev --save-exact @wordpress/scripts` を実行してください。

インストール後、`node_modules` ディレクトリが作成され、モジュールと依存するパッケージがコピーされます。

package.json ファイルを参照すると次の新しいセクションが追加されています。

```json
"devDependencies": {
  "@wordpress/scripts": "6.0.0"
}
```

<!-- 
## Setting Up wp-scripts build

The `@wordpress/scripts` package handles the dependencies and default configuration for webpack and Babel. The scripts package expects the source file to compile to be found at `src/index.js`, and will save the compiled output to `build/index.js`.

With that in mind, let's set up a basic block. Create a file at `src/index.js` with the following content:
 -->
## wp-scripts ビルドのセットアップ

`@wordpress/scripts` パッケージは webpack や Babel の依存性やデフォルトの構成を処理します。scripts パッケージはコンパイル対象のファイルが `src/index.js` にあることを期待し、コンパイルした結果を `build/index.js` に出力します。

以上を念頭に基本的なブロックを構成しましょう。以下の内容のファイル `src/index.js` を作成してください。

```js
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'myguten/test-block', {
	title: 'Basic Example',
	icon: 'smiley',
	category: 'design',
	edit: () => <div>Hola, mundo!</div>,
	save: () => <div>Hola, mundo!</div>,
} );
```
<!-- 
To configure npm to run a script, you use the scripts section in `package.json` webpack:
 -->
スクリプトを実行するよう npm を構成するには、`package.json` の scripts セクションを使用します。

```json
  "scripts": {
    "build": "wp-scripts build"
  },
```

<!-- 
You can then run the build using: `npm run build`.

After the build finishes, you will see the built file created at `build/index.js`. Enqueue this file in the admin screen as you would any JavaScript in WordPress, see [loading JavaScript step in this tutorial](/docs/how-to-guides/javascript/loading-javascript.md), and the block will load in the editor.
 -->
これで次のコマンドでビルドを実行できます。 `npm run build`

ビルドが終わるとファイル `build/index.js` が作成されます。このファイルは、通常の WordPress での JavaScript ファイルと同様に管理画面にエンキューできます。[このチュートリアルの JavaScript のロード](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/loading-javascript/)を参照してください。エディターにブロックがロードされます。

<!-- 
## Development Mode

The **build** command in `@wordpress/scripts` runs in "production" mode. This shrinks the code down so it downloads faster, but makes it difficult to read in the process. You can use the **start** command which runs in development mode that does not shrink the code, and additionally continues a running process to watch the source file for more changes and rebuilds as you develop.

The start command can be added to the same scripts section of `package.json`:
 -->
## 開発モード

`@wordpress/scripts` の **build** コマンドは本番モードで動作します。コードはダウンロード時間が短くなるよう圧縮されますが、結果、コードは読むことが難しくなります。**start** コマンドは開発モードで動作しコードを圧縮しません。プロセスは動作し続け、ソースファイルを変更するたびに再ビルドされます。

`package.json` の同じ scripts セクションに start コマンドを追加できます。

```json
  "scripts": {
    "start": "wp-scripts start",
    "build": "wp-scripts build"
  },
```

<!-- 
Now, when you run `npm start` a watcher will run in the terminal. You can then edit away in your text editor; after each save, it will automatically build. You can then use the familiar edit/save/reload development process.

**Note:** keep an eye on your terminal for any errors. If you make a typo or syntax error, the build will fail and the error will be in the terminal.
 -->
`npm start` を実行するとターミナルでウオッチャーが動作します。以降はテキストエディターでコードを編集し保管するごとに自動でビルドが実行されるため、編集、保存、リロードという通常の開発プロセスを回すことが出来ます。

**注意:** ターミナルに表示されるエラーには注意してください。編集ミスや構文のエラーがあるとビルドは失敗し、ターミナルにエラーが表示されます。

<!-- 
## Source Control

Because a typical `node_modules` folder will contain thousands of files that change with every software update, you should exclude `node_modules/` from your source control. If you ever start from a fresh clone, simply run `npm install` in the same folder your `package.json` is located to pull your required packages.

Likewise, you do not need to include `node_modules` or any of the above configuration files in your plugin because they will be bundled inside the file that webpack builds. **Be sure to enqueue the `build/index.js` file** in your plugin PHP. This is the main JavaScript file needed for your block to run.
 -->
## ソースコントロール

一般に `node_modules` フォルダーには大量のファイルが含まれ、バージョンが上がるたびにファイルが更新されるため `node_modules/` はソースコントロールの対象から外します。リポジトリーのクローンから始める場合でも、`package.json` のあるフォルダーで `npm install` を実行すれば必要なパッケージがダウンロードされます。

同様に `node_modules` や構成ファイルをプラグインに含める必要はありません。webpack ビルド内部にバンドリングされます。プラグイン PHP の中では **`build/index.js` ファイルを必ずエンキューしてください**。このファイルが、ブロックの実行に必要なメインの JavaScript ファイルになります。

<!-- 
## Dependency Management

Using `wp-scripts` ver 5.0.0+ build step will also produce an `index.asset.php` file that contains an array of dependencies and a version number for your block. For our simple example above, it is something like:
`array('dependencies' => array('wp-element', 'wp-polyfill'), 'version' => 'fc93c4a9675c108725227db345898bcc');`

Here is how to use this asset file to automatically set the dependency list for enqueuing the script. This prevents having to manually update the dependencies, it will be created based on the package imports used within your block.
 -->
## 依存性の管理

`wp-scripts` Version 5.0.0 以降を使用したビルドステップでは `index.asset.php` ファイルが生成され、中に依存性の配列とブロックのバージョンが記述されます。上のサンプルでは次のような内容になります。
```
array('dependencies' => array('wp-element', 'wp-polyfill'), 'version' => 'fc93c4a9675c108725227db345898bcc');
```
このアセットファイルを使用すると、エンキューするスクリプトの依存リストを自動で設定できます。手動で更新する必要はなくなり、依存性はブロック内で使用されるパッケージのインポートによって作成されます。 

```php
$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

wp_register_script(
	'myguten-block',
	plugins_url( 'build/index.js', __FILE__ ),
	$asset_file['dependencies'],
	$asset_file['version']
);
```

<!-- 
See [ESNext blocks in gutenberg-examples repo](https://github.com/WordPress/gutenberg-examples) for full examples.
 -->
完全なサンプルについては [gutenberg-examples リポジトリー内の ESNext ブロック](https://github.com/WordPress/gutenberg-examples) を参照してください。

<!-- 
## Summary

Yes, the initial setup is a bit more involved, but the additional features and benefits are usually worth the trade off in setup time.

With a setup in place, the standard workflow is:

1. Install dependencies: `npm install`
2. Start development builds: `npm start`
3. Develop. Test. Repeat.
4. Create production build: `npm run build`
 -->
## まとめ

最初のセットアップは少々大変で時間がかかりますが、その後の機能や手間を考えれば十分、元は取れると思います。

セットアップを終えると、標準的なワークフローは以下のようになります。

1. 依存性のインストール: `npm install`
2. 開発ビルドの開始: `npm start`
3. 開発とテストの繰り返し
4. リリースビルドの作成: `npm run build`

[参照](https://github.com/WordPress/gutenberg/blob/HEAD/docs/how-to-guides/javascript/js-build-setup.md)
