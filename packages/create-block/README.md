<!-- 
# Create Block
 -->
# @wordpress/create-block

<!-- 
Create Block is an officially supported way to create blocks for registering a block for a WordPress plugin. It offers a modern build setup with no configuration. It generates PHP, JS, CSS code, and everything else you need to start the project.

It is largely inspired by [create-react-app](https://create-react-app.dev/docs/getting-started). Major kudos to [@gaearon](https://github.com/gaearon), the whole Facebook team, and the React community.
 -->
Create Block は公式でサポートされるブロック作成方法です。WordPress プラグインを使用してブロックを登録します。Create Block はモダンなビルド設定を提供します。構成は必要ありません。PHP、JS、CSS コード、その他、プロジェクトの開始に必要なすべてのファイルを生成します。

Create Block は [create-react-app](https://create-react-app.dev/docs/getting-started) から多大な影響を受けました。称賛を [@gaearon](https://github.com/gaearon)、Facebook チーム全員、そして React コミュニティに。

<!-- 
## Description

Blocks are the fundamental element of the WordPress block editor. They are the primary way in which plugins and themes can register their own functionality and extend the capabilities of the editor.

Visit the [Gutenberg handbook](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/) to learn more about Block API.
 -->
## 説明

WordPress ブロックエディターの基本的な要素は「ブロック」です。ブロックは、プラグインやテーマが自身の機能を登録しエディターの機能を拡張する際に使用されるメインの手段です。

Block API の詳細については [ブロックエディターハンドブック](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/) を参照してください。

<!-- 
## Quick start

You just need to provide the `slug` which is the target location for scaffolded files and the internal block name.
 -->
## クイックスタート

ひな形ファイルの保管場所となる `slug` と内部のブロック名を指定するだけで作成できます。

```bash
$ npx @wordpress/create-block todo-list
$ cd todo-list
$ npm start
```

<!-- 
_(requires `node` version `12.0.0` or above, and `npm` version `6.9.0` or above)_

It creates a WordPress plugin that you need to [install manually](https://wordpress.org/support/article/managing-plugins/#manual-plugin-installation).
 -->
_(`node` version `12.0.0` 以上、`npm` version `6.9.0` 以上が必要です)_

[手動でのインストール](https://wordpress.org/support/article/managing-plugins/#manual-plugin-installation)が必要な WordPress プラグインを作成します。

<!-- 
## Usage

The following command generates PHP, JS and CSS code for registering a block.
 -->
## 使用方法

次のコマンドはブロックを登録する PHP、JS、CSS コードを生成します。

```bash
$ npx @wordpress/create-block [options] [slug]
```

<!-- 
![Demo](https://user-images.githubusercontent.com/699132/103872910-4de15f00-50cf-11eb-8c74-67ca91a8c1a4.gif)

`[slug]` is optional. When provided it triggers the quick mode where it is used as the block slug used for its identification, the output location for scaffolded files, and the name of the WordPress plugin. The rest of the configuration is set to all default values unless overridden with some of the options listed below.
-->
![デモ](https://user-images.githubusercontent.com/699132/103872910-4de15f00-50cf-11eb-8c74-67ca91a8c1a4.gif)

`[slug]` はオプションです。指定するとクイックモードとなり、ブロックの slug として識別子、ひな形ファイルの出力先、WordPress プラグインの名前に使用されます。構成の残りは以下に挙げるオプションで上書きしない限り、すべてデフォルト値が設定されます。

<!--
Options:

```bash
-V, --version                output the version number
-t, --template <name>        block template type name, allowed values: "es5", "esnext", or the name of an external npm package (default: "esnext")
--namespace <value>          internal namespace for the block name
--title <value>              display title for the block
--short-description <value>  short description for the block
--category <name>            category name for the block
--wp-scripts                 enable integration with `@wordpress/scripts` package
--no-wp-scripts              disable integration with `@wordpress/scripts` package
-h, --help                   output usage information
```
 -->
オプション:
```
-V, --version                バージョン番号の出力
-t, --template <name>        テンプレートタイプ名。指定可能な値: "es5", "esnext" (デフォルト: "esnext")
--namespace <value>          ブロック名の内部名前空間
--title <value>              ブロックの表示タイトル
--short-description <value>  ブロックの短い説明
--category <name>            ブロックのカテゴリー名
--wp-scripts                 `@wordpress/scripts` パッケージとの統合を有効化
--no-wp-scripts              `@wordpress/scripts` パッケージとの統合を無効化
-h, --help                   使用方法の出力
```

<!-- 
More examples:
 -->
サンプル:

<!-- 
1. Interactive mode - without giving a project name, the script will run in interactive mode giving a chance to customize the important options before generating the files.

```bash
$ npx @wordpress/create-block
```

2. ES5 template – it is also possible to pick ES5 template when you don't want to deal with a build step (`npm start`) which enables ESNext and JSX support.

```bash
$ npx @wordpress/create-block --template es5
```

3. Help – you need to use `npx` to output usage information.
```bash
$ npx @wordpress/create-block --help
```
 -->
1. 対話モード - プロジェクト名を指定しなければスクリプトは対話モードで動作します。コードが生成される前に、もっとも重要なオプションのいくつかをカスタマイズする機会が得られます。

```bash
$ npx @wordpress/create-block
```

2. ES5 テンプレート – ESNext や JSX サポートを有効化するビルド手順 (`npm start`) を実行したくない場合は ES5 テンプレートを選択できます。

```bash
$ npm init @wordpress/block --template es5
```

3. ヘルプ – 使用例の情報を出力する場合は `npx` が必要です。
```bash
$ npx @wordpress/create-block --help
```

<!-- 
When you scaffold a block, you must provide at least a `slug` name, the `namespace` which usually corresponds to either the `theme` or `plugin` name, and the `category`. In most cases, we recommended pairing blocks with plugins rather than themes, because only using plugin ensures that all blocks still work when your theme changes.
 -->
ブロックのひな形を生成する際、少なくとも `slug` 名、通常は `theme` 名や `puglin` 名のどちらかと関連する `namespace`、そして `category` を指定する必要があります。多くの場合ブロックは、テーマでなくプラグインとペアにすることを推奨します。プラグインを使用していればテーマを変更されてもすべてのブロックが稼働するからです。

<!-- 
## Available Commands
 -->
## 使用可能なコマンド

<!-- 
When bootstrapped with the `esnext` template (or any external template with `wpScripts` flag enabled), you can run several commands inside the directory:
 -->
`esnext` テンプレート、または `wpScripts` フラグを有効化した外部テンプレートからブロックの作成を始めた場合、作成されたディレクトリの中で以下のコマンドを実行できます。

```bash
$ npm start
```
<!-- 
Starts the build for development. [Learn more](/packages/scripts#start).
 -->
開発用のビルドを開始 [詳細](https://developer.wordpress.org/block-editor/packages/packages-scripts/#start)

```bash
$ npm run build
```
<!-- 
Builds the code for production. [Learn more](/packages/scripts#build).
 -->
本番用にコードをビルド [詳細](https://developer.wordpress.org/block-editor/packages/packages-scripts/#build)

```bash
$ npm run format:js
```
<!-- 
Formats JavaScript files. [Learn more](/packages/scripts#format-js).
 -->
JavaScript ファイルをフォーマット [詳細](https://developer.wordpress.org/block-editor/packages/scripts#format-js)

```bash
$ npm run lint:css
```
<!-- 
Lints CSS files. [Learn more](/packages/scripts#lint-style).
 -->
CSS ファイルを lint [詳細](https://developer.wordpress.org/block-editor/packages/scripts#lint-style)

```bash
$ npm run lint:js
```
<!-- 
Lints JavaScript files. [Learn more](/packages/scripts#lint-js).
 -->
JavaScript ファイルを lint [詳細](https://developer.wordpress.org/block-editor/packages/scripts#lint-js)

```bash
$ npm run packages-update
```
<!-- 
Updates WordPress packages to the latest version. [Learn more](/packages/scripts#packages-update).
 -->
WordPress パッケージを最新版に更新 [詳細](https://developer.wordpress.org/block-editor/packages/scripts#packages-update)

<!-- 
_Note: You don’t need to install or configure tools like [webpack](https://webpack.js.org), [Babel](https://babeljs.io) or [ESLint](https://eslint.org) yourself. They are preconfigured and hidden so that you can focus on coding._
 -->
_注意: [webpack](https://webpack.js.org) や [Babel](https://babeljs.io) や [ESLint](https://eslint.org) などのツールのインストールや構成は必要ありません。これらは裏側で自動的に構成されるため、ユーザーはコードに集中できます。_

<!-- 
## External Templates
 -->
## 外部テンプレート

<!-- 
Since version `0.19.0` it is possible to use external templates hosted on npm. These packages need to contain `.mustache` files that will be used during the block scaffolding process.
 -->
バージョン `0.19.0` からは npm でホストされた外部テンプレートを使用できます。パッケージはブロックのひな形生成プロセスで使用される `.mustache` ファイルを含む必要があります。

<!-- 
### Template Configuration
 -->
### テンプレート構成

<!-- 
It is mandatory to provide the main file for the package that returns a configuration object. It must containing at least `templatesPath` field with the path pointing to the location where template files live (nested folders are also supported).

It is mandatory to provide the main file (`index.js` by default) for the package that returns a configuration object. It must contain at least the `templatesPath` field.
 -->
構成オブジェクトを返すパッケージのメインファイル (デフォルトでは `index.js`) が必須です。少なくとも `templatesPath` フィールドを含む必要があります。

<!-- 
#### `templatesPath`
 -->
#### templatesPath

<!-- 
A mandatory field with the path pointing to the location where template files live (nested folders are also supported). All files without the `.mustache` extension will be ignored.
 -->
テンプレートファイルの場所を示すパスを指定する必須フィールド。ネストしたフォルダーもサポートされます。`.mustache` 拡張子のないすべてのファイルは無視されます。

<!-- 
_Example:_
 -->
_例:_

```js
const { join } = require( 'path' );

module.exports = {
	templatesPath: join( __dirname, 'templates' ),
};
```
<!-- 
#### `assetsPath`
 -->
#### assetsPath

<!-- 
This setting is useful when your template scaffolds a block that uses static assets like images or fonts, which should not be processed. It provides the path pointing to the location where assets are located. They will be copied to the `assets` subfolder in the generated plugin.
 -->
この設定はテンプレートから雛形の生成時、ブロックが使用する画像やフォントなどの処理の必要のない静的なアセットを準備する場合に便利です。アセットのある場所を指すパスを指定します。アセットは生成されたプラグインの `assets` サブフォルダーにコピーされます。

<!-- 
_Example:_
 -->
_例:_

```js
const { join } = require( 'path' );

module.exports = {
	assetsPath: join( __dirname, 'assets' ),
};
```
<!-- 
#### `defaultValues`
 -->
#### defaultValues

<!-- 
It is possible to override the default template configuration using the `defaultValues` field.

_Example:_
 -->
`defaultValues` フィールドを使用してデフォルトのテンプレート構成を上書きできます。

_例:_

```js
module.exports = {
	defaultValues: {
		slug: 'my-fantastic-block',
		title: 'My fantastic block',
		dashicon: 'palmtree',
		version: '1.2.3',
	},
	templatesPath: __dirname,
};
```
<!-- 
The following configurable variables are used with the template files. Template authors can change default values to use when users don't provide their data:
 -->
テンプレートファイルでは以下の構成可能変数が使用されます。テンプレートの作者は、ユーザーが指定しない場合に使用されるデフォルト値を変更できます。

<!-- 
-   `apiVersion` (default: `2`)
-   `slug` (no default)
-   `namespace` (default: `'create-block'`)
-   `title` (no default)
-   `description` (no default)
-   `dashicon` (no default)
-   `category` (default: `'widgets'`)
-   `author` (default: `'The WordPress Contributors'`)
-   `license` (default: `'GPL-2.0-or-later'`)
-   `licenseURI` (default: `'https://www.gnu.org/licenses/gpl-2.0.html'`)
-   `version` (default: `'0.1.0'`)
-   `wpScripts` (default: `true`)
-   `npmDependencies` (default: `[]`) – the list of remote npm packages to be installed in the project with [`npm install`](https://docs.npmjs.com/cli/v6/commands/npm-install).
-   `editorScript` (default: `'file:./build/index.js'`)
-   `editorStyle` (default: `'file:./build/index.css'`)
-   `style` (default: `'file:./build/style-index.css'`)
 -->
-   `apiVersion` (デフォルト: `2`)
-   `slug` (デフォルトなし)
-   `namespace` (デフォルト: `'create-block'`)
-   `title` (デフォルトなし)
-   `description` (デフォルトなし)
-   `dashicon` (デフォルトなし)
-   `category` (デフォルト: `'widgets'`)
-   `author` (デフォルト: `'The WordPress Contributors'`)
-   `license` (デフォルト: `'GPL-2.0-or-later'`)
-   `licenseURI` (デフォルト: `'https://www.gnu.org/licenses/gpl-2.0.html'`)
-   `version` (デフォルト: `'0.1.0'`)
-   `wpScripts` (デフォルト: `true`)
-   `npmDependencies` (デフォルト: `[]`) – [`npm install`](https://docs.npmjs.com/cli/v6/commands/npm-install) でプロジェクトにインストールされるリモート npm パッケージのリスト
-   `editorScript` (デフォルト: `'file:./build/index.js'`)
-   `editorStyle` (デフォルト: `'file:./build/index.css'`)
-   `style` (デフォルト: `'file:./build/style-index.css'`)

<!-- 
## WP-CLI

Another way of making a developer’s life easier is to use [WP-CLI](https://wp-cli.org), which provides a command-line interface for many actions you might perform on the WordPress instance. One of the commands `wp scaffold block` was used as the baseline for this tool and ES5 template in particular.
 -->
## WP-CLI

もう1つの開発者をラクにしてくれる方法が [WP-CLI](https://wp-cli.org) です。WP-CLI は WordPress に対する多くの操作をコマンドラインから実行できますが、その中の1つ `wp scaffold block` はこのツール、特に ES5 テンプレートの開始ラインとして使用されました。

[原文](https://github.com/WordPress/gutenberg/tree/master/packages/create-block)

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
