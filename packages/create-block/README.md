<!--
# Create Block
 -->
# @wordpress/create-block

<!-- 
Create Block is an officially supported tool for scaffolding WordPress plugins with blocks. It generates PHP, JS, CSS code, and everything you need to start the project. It integrates a modern build setup with no configuration.

Create Block is an **officially supported tool for scaffolding a WordPress plugin that registers a block**. It generates PHP, JS, CSS code, and everything you need to start the project. It also integrates a modern build setup with no configuration.
 -->
Create Block は、**ブロックを登録する WordPress プラグインのひな形を作成する公式サポートツール**です。PHP、JS、CSS コード、その他、プロジェクトの開始に必要なすべてのファイルを生成します。また構成不要で、モダンなビルド設定を統合します。

<!-- 
_It is largely inspired by [create-react-app](https://create-react-app.dev/docs/getting-started). Major kudos to [@gaearon](https://github.com/gaearon), the whole Facebook team, and the React community._
 -->
_Create Block は [create-react-app](https://create-react-app.dev/docs/getting-started) から多大な影響を受けました。称賛を [@gaearon](https://github.com/gaearon)、Facebook チーム全員、そして React コミュニティに。_

<!--
## Description
 -->
<!-- 
## 説明
 -->
<!-- 
> **Blocks are the fundamental elements of modern WordPress sites**. Introduced in [WordPress 5.0](https://wordpress.org/news/2018/12/bebo/), they allow [page and post builder-like functionality](https://wordpress.org/gutenberg/) to every up-to-date WordPress website.
 -->
> **「ブロック」は、モダンな WordPress サイトの基本要素です**。[WordPress 5.0](https://wordpress.org/news/2018/12/bebo/)で導入され、すべての最新の WordPress サイトで[ページビルダーライクな機能](https://wordpress.org/gutenberg/)を実現しています。

<!-- 
> _Learn more about the [Block API at the Gutenberg HandBook](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/)._
 -->
> _詳細については [Gutenberg ハンドブックのブロック API](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/) を参照してください。_

<!--
## Quick start
 -->
## クイックスタート
<!--
You only need to provide the `slug` – the target location for scaffolded plugin files and the internal block name.
 -->
<!-- 
`slug` を指定するだけで作成できます。`slug` は、ひな形プラグインファイルの保管場所と、内部のブロック名になります。
 -->
```bash
$ npx @wordpress/create-block@latest todo-list
$ cd todo-list
$ npm start
```

<!--
The `slug` provided (`todo-list` in the example) defines the folder name for the scaffolded plugin and the internal block name. The WordPress plugin generated must [be installed manually](https://wordpress.org/documentation/article/manage-plugins/#manual-plugin-installation-1).
 -->
指定した `slug` (この例では `todo-list`) は、ひな形プラグインのフォルダ名と内部のブロック名を定義します。生成された WordPress プラグインは、[手動でインストールする](https://wordpress.org/documentation/article/manage-plugins/#manual-plugin-installation-1)必要があります。

<!--
_(requires `node` version `20.10.0` or above, and `npm` version `10.2.3` or above)_

It creates a WordPress plugin that you need to [install manually](https://wordpress.org/support/article/managing-plugins/#manual-plugin-installation).
 -->
<!-- 
[手動でのインストール](https://wordpress.org/support/article/managing-plugins/#manual-plugin-installation)が必要な WordPress プラグインを作成します。
 -->
<!--
[Watch a video introduction to create-block on Learn.wordpress.org](https://learn.wordpress.org/tutorial/using-the-create-block-tool/)
 -->

<!-- 
_(requires `node` version `14.0.0` or above, and `npm` version `6.14.4` or above)_
 -->
_(`node` version `20.10.0` 以上、`npm` version `10.2.3` 以上が必要です)_

<!-- 
> [Watch a video introduction to create-block on Learn.wordpress.org](https://learn.wordpress.org/tutorial/using-the-create-block-tool/)
 -->
> [Learn.wordpress.org で動画による create-block 入門を視聴ください](https://learn.wordpress.org/tutorial/using-the-create-block-tool/)。

<!-- 
## Usage
 -->
## 使用方法

<!-- 
The following command generates a project with PHP, JS, and CSS code for registering a block with a WordPress plugin.
 -->
<!-- 
次のコマンドは、WordPress プラグインでブロックを登録する PHP、JS、CSS コードのプロジェクトを生成します。
 -->
<!-- 
The `create-block` command generates a project with PHP, JS, and CSS code for registering a block with a WordPress plugin.
 -->
`create-block` コマンドは、WordPress プラグインでブロックを登録する PHP、JS、CSS コードのプロジェクトを生成します。

```bash
$ npx @wordpress/create-block@latest [options] [slug]
```

<!--
![Demo](https://user-images.githubusercontent.com/699132/103872910-4de15f00-50cf-11eb-8c74-67ca91a8c1a4.gif)
 -->
![デモ](https://user-images.githubusercontent.com/699132/103872910-4de15f00-50cf-11eb-8c74-67ca91a8c1a4.gif)

<!-- 
`[slug]` is optional. When provided, it triggers the quick mode where it is used as the block slug used for its identification, the output location for scaffolded files, and the name of the WordPress plugin. The rest of the configuration is set to all default values unless overridden with some options listed below.
 -->
<!-- 
`[slug]` はオプションです。指定するとクイックモードとなり、ブロックの slug として識別子、ひな形ファイルの出力先、WordPress プラグインの名前に使用されます。構成の残りは以下に挙げるオプションで上書きしない限り、すべてデフォルト値が設定されます。
 -->

<!-- 
> The name for a block is a unique string that identifies a block. Block Names are structured as `namespace`/`slug`, where namespace is the name of your plugin or theme.

> In most cases, we recommended pairing blocks with WordPress plugins rather than themes, because only using plugin ensures that all blocks still work when your theme changes.
 -->
> ブロック名は、ブロックを識別する一意の文字列です。ブロック名の構造は `namespace`/`slug` で、namespace はプラグイン、またはテーマの名前です。

> ほとんどの場合、ブロックはテーマではなく WordPress のプラグインと組み合わせることを推奨します。プラグインを使用していれば、テーマが変わっても、すべてのブロックが動作することが保証されるためです。

<!-- 
### Interactive Mode
 -->
### 対話モード

<!-- 
When no `slug` is provided, the script will run in interactive mode and will start prompting for the input required (`slug`, title, namespace...) to scaffold the project.
 -->
`slug`を指定しなければスクリプトは対話モードで実行され、ひな形プロジェクトに必要な入力 (`slug`、title、namespace...）を求めるプロンプトが表示されます。

<!-- 
### `slug`
 -->
### slug

<!-- 
The use of `slug` is optional.

When provided it triggers the _quick mode_, where this `slug` is used:
- as the block slug (required for its identification)
- as the output location (folder name) for scaffolded files
- as the name of the WordPress plugin.

The rest of the configuration is set to all default values unless overridden with some options listed below.
 -->
`slug` の使用はオプションです。 

指定すると _クイックモード_ で実行され、以下で`slug` が使用されます。
- ブロックの slug (ブロックの識別に必要)
- ひな形ファイルの出力先 (フォルダ名)
- WordPress プラグインの名前 

構成の残りは以下に挙げるオプションで上書きしない限り、すべてデフォルト値が設定されます。

<!-- 
### `options`
 -->
### オプション

<!--
```bash
-V, --version                output the version number
-t, --template <name>        project template type name; allowed values: "static" (default), "es5", the name of an external npm package, or the path to a local directory
--no-plugin                  scaffold block files only
--namespace <value>          internal namespace for the block name
--title <value>              display title for the block and the WordPress plugin
--short-description <value>  short description for the block and the WordPress plugin
--category <name>            category name for the block
--wp-scripts                 enable integration with `@wordpress/scripts` package
--no-wp-scripts              disable integration with `@wordpress/scripts` package
--wp-env                     enable integration with `@wordpress/env` package
-h, --help                   output usage information
--variant                    choose a block variant as defined by the template
```
 -->
```bash
-V, --version                バージョン番号の出力
-t, --template <name>        プロジェクトテンプレートタイプ名。指定可能な値: "static" (デフォルト)、"es5"、外部 npm パッケージ名、ローカルディレクトリへのパス
--no-plugin                  ひな形ブロックファイルのみ
--namespace <value>          ブロック名の内部名前空間
--title <value>              ブロックと WordPress プラグインの表示タイトル
--short-description <value>  ブロックと WordPress プラグインの短い説明
--category <name>            ブロックのカテゴリー名
--wp-scripts                 `@wordpress/scripts` パッケージとの統合を有効化
--no-wp-scripts              `@wordpress/scripts` パッケージとの統合を無効化
--wp-env                     `@wordpress/env` パッケージとの統合を有効化
-h, --help                   使用方法の出力
--variant                    テンプレートで定義されたブロックのバリエーションを選択
```

<!--
More examples:
 -->
<!-- 
サンプル:
 -->
<!--
1. Interactive mode - without giving a project name, the script will run in interactive mode giving a chance to customize the important options before generating the files.

```bash
$ npx @wordpress/create-block
```

2. External npm package – it is also possible to select an external npm package as a template.
 -->
<!-- 
#### `--template`
 -->
#### --template
<!-- 
This argument specifies an _external npm package_ as a template.
 -->
この引数はテンプレートとして、_外部 npm パッケージ_ を指定します。

```bash
$ npx @wordpress/create-block@latest --template my-template-package
```

<!-- 
This argument also allows to pick a _local directory_ as a template.
 -->
この引数を使用するとまたテンプレートとして _ローカルディレクトリ_ も選択できます。

```bash
$ npx @wordpress/create-block@latest --template ./path/to/template-directory
```

<!-- 
#### `--variant`
 -->
#### --variant

<!-- 
With this argument, `create-block` will generate a [dynamic block](https://developer.wordpress.org/block-editor/getting-started/glossary/#dynamic-block) based on the built-in template.

 -->
この引数を使用すると、`create-block` は組み込みのテンプレートを基に、[ダイナミックブロック](https://developer.wordpress.org/block-editor/getting-started/glossary/#dynamic-block)を生成します。

```bash
$ npx @wordpress/create-block@latest --variant dynamic
```
<!-- 
#### `--help`
 -->
#### --help
<!-- 
With this argument, the `create-block` package outputs usage information.
 -->
この引数を指定すると、`create-block` パッケージは使用方法の情報を表示します。

```bash
$ npx @wordpress/create-block@latest --help
```
<!-- 
#### `--no-plugin`
 -->
#### --no-plugin
<!-- 
With this argument, the `create-block` package runs in _No plugin mode_ which only scaffolds block files into the current directory.
 -->
この引数を指定すると、`create-block` パッケージは _プラグインなしモード_ で実行されます。現行ディレクトリにひな形ブロックファイルのみを作成します。

```bash
$ npx @wordpress/create-block@latest --no-plugin
```

<!-- 
1. 対話モード - プロジェクト名を指定しなければスクリプトは対話モードで動作します。コードが生成される前に、もっとも重要なオプションのいくつかをカスタマイズする機会が得られます。

```bash
$ npx @wordpress/create-block
```
2. 外部 npm パッケージ - また、テンプレートとして外部 npm パッケージも選択できます。

```bash
$ npx @wordpress/create-block --template my-template-package
```

3. ローカルテンプレートディレクトリ - また、テンプレートとしてローカルディレクトリを取ることもできます。

```bash
$ npx @wordpress/create-block --template ./path/to/template-directory
```

4. 構築済みテンプレートを元に、ダイナミックブロックを生成

```bash
$ npx @wordpress/create-block@latest --variant dynamic
```

5. ヘルプ – 使用例の情報を出力する場合は `npx` が必要です。

```bash
$ npx @wordpress/create-block@latest --help
```

6. プラグインなしのモード - また現行ディレクトリに、ひな形のブロックファイルのみを生成できます。

```bash
$ npx @wordpress/create-block@latest --no-plugin
```
 -->
<!--
When you scaffold a block, you must provide at least a `slug` name, the `namespace` which usually corresponds to either the `theme` or `plugin` name. In most cases, we recommended pairing blocks with WordPress plugins rather than themes, because only using plugin ensures that all blocks still work when your theme changes.
 -->
<!-- 
ブロックのひな形を生成する際、少なくとも `slug` 名、通常は `theme` 名や `puglin` 名のどちらかと関連する `namespace` を指定する必要があります。多くの場合ブロックは、テーマでなく、WordPress プラグインとペアにすることを推奨します。プラグインを使用していればテーマを変更されてもすべてのブロックが稼働するからです。
 -->
<!--
## Available Commands
 -->
<!--  
## 使用可能なコマンド
 -->

<!--
When bootstrapped with the `static` template (or any other project template with `wpScripts` flag enabled), you can run several commands inside the directory:
 -->
<!-- 
`static` テンプレート、または `wpScripts` フラグを有効化した他のプロジェクトテンプレートからブロックの作成を始めた場合、作成されたディレクトリの中で以下のコマンドを実行できます。
 -->
<!-- 
#### `--wp-env`
 -->
#### --wp-env

<!-- 
With this argument, the `create-block` package will add to the generated plugin the configuration and the script to run [`wp-env` package](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/) within the plugin. This will allow you to easily set up a local WordPress environment (via Docker) for building and testing the generated plugin.
 -->
この引数を指定すると、`create-block` パッケージは生成されたプラグインに、プラグイン内で [`wp-env` パッケージ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/)を実行するための構成やスクリプトを追加します。生成されたプラグインをビルド、テストする、Docker 利用のローカル WordPress 環境を簡単にセットアップできます。

```bash
$ npx @wordpress/create-block@latest --wp-env
```

<!--
Starts the build for development. [Learn more](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#start).
 -->
<!-- 
開発用のビルドを開始。[詳細](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#start)

```bash
$ npm run build
```
 -->
<!--
Builds the code for production. [Learn more](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#build).
 -->
<!-- 
本番用にコードをビルド。[詳細](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#build)

```bash
$ npm run format
```
 -->
<!--
Formats files. [Learn more](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#format).
 -->
<!-- 
ファイルをフォーマット。[詳細](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#format)

```bash
$ npm run lint:css
```
 -->
<!--
Lints CSS files. [Learn more](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#lint-style).
 -->
<!-- 
CSS ファイルを lint。[詳細](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#lint-style)

```bash
$ npm run lint:js
```
 -->
<!--
Lints JavaScript files. [Learn more](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#lint-js).
 -->
<!-- 
JavaScript ファイルを lint。[詳細](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#lint-js)

```bash
$ npm run plugin-zip
```
 -->
<!-- 
Creates a zip file for a WordPress plugin. [Learn more](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#plugin-zip).
 -->
<!-- 
WordPress プラグインの zip ファイルを作成。[詳細](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#plugin-zip).

```bash
$ npm run packages-update
```
 -->
<!--
Updates WordPress packages to the latest version. [Learn more](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#packages-update).
 -->
<!-- 
WordPress パッケージを最新版に更新。[詳細](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#packages-update)
 -->

<!-- 
## Available commands in the scaffolded project
 -->
## ひな形プロジェクト内で利用可能なコマンド

<!-- 
The plugin folder created when executing this command, is a node package with a modern build setup that requires no configuration.

A set of scripts is available from inside that folder (provided by the `scripts` package) to make your work easier. [Click here](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#available-scripts) for a full description of these commands.
 -->
このコマンドを実行して作成される plugin フォルダは、モダンなビルド環境が設定された node パッケージです。追加の構成を必要ありません。

このフォルダの中には作業を助ける複数のスクリプトが準備されています (`scripts` パッケージで提供されます)。コマンドの詳細については、[ここをクリック](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#available-scripts)してください。

<!--
_Note: You don’t need to install or configure tools like [webpack](https://webpack.js.org), [Babel](https://babeljs.io) or [ESLint](https://eslint.org) yourself. They are preconfigured and hidden so that you can focus on coding._
 -->
_注意: [webpack](https://webpack.js.org) や [Babel](https://babeljs.io) や [ESLint](https://eslint.org) などのツールのインストールや構成は必要ありません。これらは裏側で自動的に構成されるため、ユーザーはコードに集中できます。_

<!-- 
For example, running the `start` script from inside the generated folder (`npm start`) would automatically start the build for development.
 -->
例えば、生成されたフォルダ内から `start` スクリプトを実行 (`npm start`) すると、開発用のビルドが自動的に始まります。

<!--
## External Project Templates
 -->
## 外部プロジェクトテンプレート

<!-- 
[Click here](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/packages-create-block-external-template/) for information on External Project Templates

 -->
外部プロジェクトテンプレートの情報については、[こちらをクリック](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/packages-create-block-external-template/)してください。


<!--
## WP-CLI

Another way of making a developer’s life easier is to use [WP-CLI](https://wp-cli.org), which provides a command-line interface for many actions you might perform on the WordPress instance. One of the commands `wp scaffold block` was used as the baseline for this tool and ES5 template in particular.
 -->
<!--
## WP-CLI

もう1つの開発者をラクにしてくれる方法が [WP-CLI](https://wp-cli.org) です。WP-CLI は WordPress に対する多くの操作をコマンドラインから実行できますが、その中の1つ `wp scaffold block` はこのツール、特に ES5 テンプレートの開始ラインとして使用されました。
 -->

<!--
## Contributing to this package
 -->
## このパッケージへのコントリビュート

<!-- 
This is an individual package that's part of the Gutenberg project. The project is organized as a monorepo. It's made up of multiple self-contained software packages, each with a specific purpose. The packages in this monorepo are published to [npm](https://www.npmjs.com/) and used by [WordPress](https://make.wordpress.org/core/) as well as other software projects.
 -->
これは、Gutenberg プロジェクトの一部である、個別パッケージです。このプロジェクトは、monorepo として構成されています。複数の自己完結型ソフトウェアパッケージで構成されており、それぞれが特定の目的を持ちます。この monorepo のパッケージは [npm](https://www.npmjs.com/) で公開され、[WordPress](https://make.wordpress.org/core/) や他のソフトウェアプロジェクトで利用されています。

<!-- 
To find out more about contributing to this package or Gutenberg as a whole, please read the project's main [contributor guide](https://github.com/WordPress/gutenberg/tree/HEAD/CONTRIBUTING.md).
 -->
このパッケージや Gutenberg 全体へのコントリビュートの詳細については、プロジェクトのメインの[コントリビューターガイド](https://ja.wordpress.org/team/handbook/block-editor/contributors/)を参照ください。


<br /><br /><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>

[原文](https://github.com/WordPress/gutenberg/blob/trunk/packages/create-block/README.md)