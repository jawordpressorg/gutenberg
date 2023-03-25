<!--
# Create Block
 -->
# @wordpress/create-block

<!--
Create Block is an officially supported way to create blocks for registering a block for a WordPress plugin. It offers a modern build setup with no configuration. It generates PHP, JS, CSS code, and everything else you need to start the project.
 -->
<!--  
Create Block は公式でサポートされるブロック作成方法です。WordPress プラグインを使用してブロックを登録します。Create Block はモダンなビルド設定を提供します。構成は必要ありません。PHP、JS、CSS コード、その他、プロジェクトの開始に必要なすべてのファイルを生成します。
 -->
<!-- 
Create Block is an officially supported tool for scaffolding WordPress plugins with blocks. It generates PHP, JS, CSS code, and everything you need to start the project. It integrates a modern build setup with no configuration.
 -->
Create Block は、ブロックの WordPress プラグインのひな形を作成する、公式サポートツールです。PHP、JS、CSS コード、その他、プロジェクトの開始に必要なすべてのファイルを生成します。構成不要で、モダンなビルド設定を統合します。

<!-- 
It is largely inspired by [create-react-app](https://create-react-app.dev/docs/getting-started). Major kudos to [@gaearon](https://github.com/gaearon), the whole Facebook team, and the React community.
 -->
Create Block は [create-react-app](https://create-react-app.dev/docs/getting-started) から多大な影響を受けました。称賛を [@gaearon](https://github.com/gaearon)、Facebook チーム全員、そして React コミュニティに。

<!--
## Description

Blocks are the fundamental element of the WordPress block editor. They are the primary way in which plugins can register their functionality and extend the editor's capabilities.

Visit the [Gutenberg handbook](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/) to learn more about Block API.
 -->
## 説明

WordPress ブロックエディターの基本的な要素は「ブロック」です。ブロックは、プラグインが機能を登録し、エディターの機能を拡張する際に使用するメインの手段です。

Block API の詳細については [ブロックエディターハンドブック](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/) を参照してください。

<!--
## Quick start

You only need to provide the `slug` – the target location for scaffolded plugin files and the internal block name.
 -->
## クイックスタート

`slug` を指定するだけで作成できます。`slug` は、ひな形プラグインファイルの保管場所と、内部のブロック名になります。

```bash
$ npx @wordpress/create-block todo-list
$ cd todo-list
$ npm start
```

<!--
_(requires `node` version `14.0.0` or above, and `npm` version `6.14.4` or above)_

It creates a WordPress plugin that you need to [install manually](https://wordpress.org/support/article/managing-plugins/#manual-plugin-installation).
 -->
_(`node` version `14.0.0` 以上、`npm` version `6.14.4` 以上が必要です)_

<<<<<<< HEAD
[手動でのインストール](https://wordpress.org/support/article/managing-plugins/#manual-plugin-installation)が必要な WordPress プラグインを作成します。

<!--
=======
[Watch a video introduction to create-block on Learn.wordpress.org](https://learn.wordpress.org/tutorial/using-the-create-block-tool/)

>>>>>>> upstream/trunk
## Usage

The following command generates a project with PHP, JS, and CSS code for registering a block with a WordPress plugin.
 -->
## 使用方法

次のコマンドは、WordPress プラグインでブロックを登録する PHP、JS、CSS コードのプロジェクトを生成します。

```bash
$ npx @wordpress/create-block [options] [slug]
```

<!--
![Demo](https://user-images.githubusercontent.com/699132/103872910-4de15f00-50cf-11eb-8c74-67ca91a8c1a4.gif)

`[slug]` is optional. When provided, it triggers the quick mode where it is used as the block slug used for its identification, the output location for scaffolded files, and the name of the WordPress plugin. The rest of the configuration is set to all default values unless overridden with some options listed below.
-->
![デモ](https://user-images.githubusercontent.com/699132/103872910-4de15f00-50cf-11eb-8c74-67ca91a8c1a4.gif)

`[slug]` はオプションです。指定するとクイックモードとなり、ブロックの slug として識別子、ひな形ファイルの出力先、WordPress プラグインの名前に使用されます。構成の残りは以下に挙げるオプションで上書きしない限り、すべてデフォルト値が設定されます。

<!--
Options:

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
オプション:
```
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
サンプル:

<!--
1. Interactive mode - without giving a project name, the script will run in interactive mode giving a chance to customize the important options before generating the files.

```bash
$ npx @wordpress/create-block
```

2. External npm package – it is also possible to select an external npm package as a template.

```bash
$ npx @wordpress/create-block --template my-template-package
```

3. Local template directory – it is also possible to pick a local directory as a template.

```bash
$ npx @wordpress/create-block --template ./path/to/template-directory
```

4. Generating a dynamic block based on the built-in template.

```bash
$ npx @wordpress/create-block --variant dynamic
```

5. Help – you need to use `npx` to output usage information.

```bash
$ npx @wordpress/create-block --help
```

5. No plugin mode – it is also possible to scaffold only block files into the current directory.

```bash
$ npx @wordpress/create-block --no-plugin
```
 -->
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
$ npx @wordpress/create-block --variant dynamic
```

5. ヘルプ – 使用例の情報を出力する場合は `npx` が必要です。

```bash
$ npx @wordpress/create-block --help
```

6. プラグインなしのモード - また現行ディレクトリに、ひな形のブロックファイルのみを生成できます。

```bash
$ npx @wordpress/create-block --no-plugin
```

<!--
When you scaffold a block, you must provide at least a `slug` name, the `namespace` which usually corresponds to either the `theme` or `plugin` name. In most cases, we recommended pairing blocks with WordPress plugins rather than themes, because only using plugin ensures that all blocks still work when your theme changes.
 -->
ブロックのひな形を生成する際、少なくとも `slug` 名、通常は `theme` 名や `puglin` 名のどちらかと関連する `namespace` を指定する必要があります。多くの場合ブロックは、テーマでなく、WordPress プラグインとペアにすることを推奨します。プラグインを使用していればテーマを変更されてもすべてのブロックが稼働するからです。

<!--
## Available Commands
 -->
## 使用可能なコマンド

<!--
When bootstrapped with the `static` template (or any other project template with `wpScripts` flag enabled), you can run several commands inside the directory:
 -->
`static` テンプレート、または `wpScripts` フラグを有効化した他のプロジェクトテンプレートからブロックの作成を始めた場合、作成されたディレクトリの中で以下のコマンドを実行できます。

```bash
$ npm start
```
<!--
Starts the build for development. [Learn more](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#start).
 -->
開発用のビルドを開始。[詳細](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#start)

```bash
$ npm run build
```
<!--
Builds the code for production. [Learn more](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#build).
 -->
本番用にコードをビルド。[詳細](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#build)

```bash
$ npm run format
```
<!--
Formats files. [Learn more](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#format).
 -->
ファイルをフォーマット。[詳細](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#format)

```bash
$ npm run lint:css
```
<!--
Lints CSS files. [Learn more](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#lint-style).
 -->
CSS ファイルを lint。[詳細](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#lint-style)

```bash
$ npm run lint:js
```
<!--
Lints JavaScript files. [Learn more](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#lint-js).
 -->
JavaScript ファイルを lint。[詳細](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#lint-js)

```bash
$ npm run plugin-zip
```
<!-- 
Creates a zip file for a WordPress plugin. [Learn more](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#plugin-zip).
 -->
WordPress プラグインの zip ファイルを作成。[詳細](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#plugin-zip).

```bash
$ npm run packages-update
```
<!--
Updates WordPress packages to the latest version. [Learn more](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#packages-update).
 -->
WordPress パッケージを最新版に更新。[詳細](https://github.com/WordPress/gutenberg/tree/HEAD/packages/scripts#packages-update)

<!--
_Note: You don’t need to install or configure tools like [webpack](https://webpack.js.org), [Babel](https://babeljs.io) or [ESLint](https://eslint.org) yourself. They are preconfigured and hidden so that you can focus on coding._
 -->
_注意: [webpack](https://webpack.js.org) や [Babel](https://babeljs.io) や [ESLint](https://eslint.org) などのツールのインストールや構成は必要ありません。これらは裏側で自動的に構成されるため、ユーザーはコードに集中できます。_

<!--
## External Project Templates
 -->
## 外部プロジェクトテンプレート
<!-- 
[Click here](https://github.com/WordPress/gutenberg/tree/HEAD/packages/create-block/docs/external-template.md) for information on External Project Templates
 -->
外部プロジェクトテンプレートの情報については、[こちらをクリック](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/packages-create-block-external-template/)してください。

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