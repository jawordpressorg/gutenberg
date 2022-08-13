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

[手動でのインストール](https://wordpress.org/support/article/managing-plugins/#manual-plugin-installation)が必要な WordPress プラグインを作成します。

<!--
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
--namespace <value>          internal namespace for the block name
--title <value>              display title for the block and the WordPress plugin
--short-description <value>  short description for the block and the WordPress plugin
--category <name>            category name for the block
--wp-scripts                 enable integration with `@wordpress/scripts` package
--no-wp-scripts              disable integration with `@wordpress/scripts` package
--wp-env                     enable integration with `@wordpress/env` package
-h, --help                   output usage information
```
 -->
オプション:
```
-V, --version                バージョン番号の出力
-t, --template <name>        プロジェクトテンプレートタイプ名。指定可能な値: "static" (デフォルト)、"es5"、外部 npm パッケージ名、ローカルディレクトリへのパス
--namespace <value>          ブロック名の内部名前空間
--title <value>              ブロックと WordPress プラグインの表示タイトル
--short-description <value>  ブロックと WordPress プラグインの短い説明
--category <name>            ブロックのカテゴリー名
--wp-scripts                 `@wordpress/scripts` パッケージとの統合を有効化
--no-wp-scripts              `@wordpress/scripts` パッケージとの統合を無効化
--wp-env                     `@wordpress/env` パッケージとの統合を有効化
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

2. External npm package – it is also possible to select an external npm package as a template.

```bash
$ npx @wordpress/create-block --template my-template-package
```

3. Local template directory – it is also possible to pick a local directory as a template.

```bash
$ npx @wordpress/create-block --template ./path/to/template-directory
```

4. Help – you need to use `npx` to output usage information.

```bash
$ npx @wordpress/create-block --help
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

4. ヘルプ – 使用例の情報を出力する場合は `npx` が必要です。

```bash
$ npx @wordpress/create-block --help
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
Since version `0.19.0` it is possible to use external templates hosted on npm. These packages need to contain `.mustache` files that will be used during the block scaffolding process.
 -->
<!-- 
バージョン `0.19.0` からは npm でホストされた外部テンプレートを使用できます。パッケージはブロックのひな形生成プロセスで使用される `.mustache` ファイルを含む必要があります。
 -->
<!-- 
Are you looking for a way to share your project configuration? Creating an external project template hosted on npm or located in a local directory is possible. These npm packages can provide custom `.mustache` files that replace default files included in the tool for the WordPress plugin or/and the block. It's also possible to override default configuration values used during the scaffolding process.
 -->
プロジェクトの設定の共有方法をお探しですか ? npmでホストされる、または、ローカルディレクトリに、外部プロジェクトテンプレートを作成できます。この npm パッケージは、カスタム`.mustache`ファイルを提供できます。これは、WordPress プラグイン または、ブロックのためのツールに含まれる、デフォルトのファイルを置き換えます。また、ひな形生成プロセス中に使用されるデフォルトの構成値を上書きできます。

<!--
### Project Template Configuration
 -->
### プロジェクトテンプレート構成

<!--
It is mandatory to provide the main file (`index.js` by default) for the package that returns a configuration object. It must contain at least the `templatesPath` field.
 -->
<!-- 
構成オブジェクトを返すパッケージのメインファイル (デフォルトでは `index.js`) が必須です。少なくとも `templatesPath` フィールドを含む必要があります。
 -->
<!-- 
Providing the main file (`index.js` by default) for the package that returns a configuration object is mandatory. Several options allow customizing the scaffolding process.
 -->
構成オブジェクトを返すパッケージのメインファイル (デフォルトでは `index.js`) の提供は必須です。いくつかのオプションを使用して、ひな形生成プロセスをカスタマイズできます。

<!--
#### `pluginTemplatesPath`
 -->
#### pluginTemplatesPath

<!--
A mandatory field with the path pointing to the location where plugin template files live (nested folders are also supported). All files without the `.mustache` extension will be ignored.
 -->
<!-- 
プラグインテンプレートファイルの場所を示すパスを指定する必須フィールド。ネストしたフォルダーもサポートされます。`.mustache` 拡張子のないすべてのファイルは無視されます。
 -->
<!-- 
This optional field allows overriding file templates related to **the WordPress plugin shell**. The path points to a location with template files ending with the `.mustache` extension (nested folders are also supported). When not set, the tool uses its own set of templates.
 -->
このオプションフィールドは、**WordPressプラグインシェル**に関連するファイルテンプレートを上書きできます。パスは拡張子が `.mustache` で終わるテンプレートファイルのある場所を指します (ネストしたフォルダもサポートされます)。設定されない場合、ツールは自身のテンプレートセットを使用します。 

<!--
_Example:_
 -->
_例:_

```js
const { join } = require( 'path' );

module.exports = {
	pluginTemplatesPath: join( __dirname, 'plugin-templates' ),
};
```
<!-- 
#### `blockTemplatesPath`
 -->
#### blockTemplatesPath

<!-- 
An optional field with the path pointing to the location where template files for the individual block live (nested folders are also supported). All files without the `.mustache` extension will be ignored.
 -->
<!-- 
個々のブロックのテンプレートファイルがある場所を指すパスを指定する、オプションのフィールド (ネストしたフォルダもサポートされます）。拡張子が `.mustache` でないファイルはすべて無視されます。
 -->
<!-- 
This optional field allows overriding file templates related to **the individual block**. The path points to a location with template files ending with the `.mustache` extension (nested folders are also supported). When not set, the tool uses its own set of templates.
 -->
このオプションフィールドは、**個々のブロック**に関連するファイルテンプレートを上書きできます。パスは、拡張子が `.mustache` で終わるテンプレートファイルのある場所を指します (ネストしたフォルダもサポートされます)。設定されない場合、ツールは自身のテンプレートセットを使用します。

<!-- 
_Example:_
 -->
_例:_

```js
const { join } = require( 'path' );

module.exports = {
	blockTemplatesPath: join( __dirname, 'block-templates' ),
};
```
<!--
#### `assetsPath`
 -->
#### assetsPath

<!--
This setting is useful when your template scaffolds a WordPress plugin that uses static assets like images or fonts, which should not be processed. It provides the path pointing to the location where assets are located. They will be copied to the `assets` subfolder in the generated plugin.
 -->
この設定はテンプレートから雛形の生成時、WordPress プラグインが使用する画像やフォントなどの処理の必要のない静的なアセットを準備する場合に便利です。アセットのある場所を指すパスを指定します。アセットは生成されたプラグインの `assets` サブフォルダーにコピーされます。

<!--
_Example:_
 -->
_例:_

```js
const { join } = require( 'path' );

module.exports = {
	assetsPath: join( __dirname, 'plugin-assets' ),
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
};
```
<!-- 
The following configurable variables are used with the template files. Template authors can change default values to use when users don't provide their data.
 -->
テンプレートファイルでは以下の構成可能変数が使用されます。テンプレートの作者は、ユーザーが指定しない場合に使用されるデフォルト値を変更できます。

<!--
-   `$schema` (default: `https://schemas.wp.org/trunk/block.json`)
-   `apiVersion` (default: `2`) - see https://make.wordpress.org/core/2020/11/18/block-api-version-2/.
-   `slug` (no default)
-   `namespace` (default: `'create-block'`)
-   `title` (no default) - a display title for your block.
-   `description` (no default) - a short description for your block.
-   `dashicon` (no default) - an icon property thats makes it easier to identify a block, see https://developer.wordpress.org/resource/dashicons/.
-   `category` (default: `'widgets'`) - blocks are grouped into categories to help users browse and discover them. The categories provided by core are `text`, `media`, `design`, `widgets`, `theme`, and `embed`.
-   `attributes` (no default) - see https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/.
-   `supports` (no default) - optional block extended support features, see https://developer.wordpress.org/block-editor/developers/block-api/block-supports/.
-   `author` (default: `'The WordPress Contributors'`)
-   `license` (default: `'GPL-2.0-or-later'`)
-   `licenseURI` (default: `'https://www.gnu.org/licenses/gpl-2.0.html'`)
-   `version` (default: `'0.1.0'`)
-   `wpScripts` (default: `true`)
-   `wpEnv` (default: `false`) - enables integration with the `@wordpress/env` package and adds the `env` command to the package.json.

-   `editorScript` (default: `'file:./build/index.js'`)
-   `editorStyle` (default: `'file:./build/index.css'`)
-   `style` (default: `'file:./build/style-index.css'`)
-->
<!--  
-   `$schema` (デフォルト: `https://schemas.wp.org/trunk/block.json`)
-   `apiVersion` (デフォルト: `2`) - 参照 https://make.wordpress.org/core/2020/11/18/block-api-version-2/
-   `slug` (デフォルトなし)
-   `namespace` (デフォルト: `'create-block'`)
-   `title` (デフォルトなし) - ブロックの表示タイトル
-   `description` (デフォルトなし) - ブロックの短い説明
-   `dashicon` (デフォルトなし) - ブロックの識別を助けるアイコンプロパティ。参照 https://developer.wordpress.org/resource/dashicons/
-   `category` (デフォルト: `'widgets'`) - ユーザーの参照と検索のため、ブロックはカテゴリーにグループ分けされる。コアで提供されるカテゴリーは、`text`、`media`、`design`、`widgets`、`theme`、`embed`
-   `author` (デフォルト: `'The WordPress Contributors'`)
-   `license` (デフォルト: `'GPL-2.0-or-later'`)
-   `licenseURI` (デフォルト: `'https://www.gnu.org/licenses/gpl-2.0.html'`)
-   `version` (デフォルト: `'0.1.0'`)
-   `wpScripts` (デフォルト: `true`)
-   `wpEnv` (デフォルト: `false`) - enables integration with the `@wordpress/env` パッケージとの統合を有効可し、package.json に `env` コマンドを追加する。
-   `npmDependencies` (デフォルト: `[]`) – `wpScripts` が有効の時、[`npm install`](https://docs.npmjs.com/cli/v6/commands/npm-install) でプロジェクトにインストールされるリモート npm パッケージのリスト
-   `customScripts` (デフォルト: {}) - `package.json` に追加するカスタムスクリプトのリスト。デフォルトスクリプトの上書きもできる。
-   `folderName` (デフォルト: `.`) – `block.json` ファイル、および、`blockTemplatesPath` で設定したフォルダに含まれるブロックテンプレートから生成されたオプションのブロックファイルの場所
-   `editorScript` (デフォルト: `'file:./build/index.js'`)
-   `editorStyle` (デフォルト: `'file:./build/index.css'`)
-   `style` (デフォルト: `'file:./build/style-index.css'`)
 -->

<!-- 
**Project**:
 -->
**プロジェクト**:

<!-- 
-   `wpScripts` (default: `true`) – enables integration with the `@wordpress/scripts` package and adds common scripts to the `package.json`.
-   `wpEnv` (default: `false`) – enables integration with the `@wordpress/env` package and adds the `env` script to the `package.json`.
-   `customScripts` (default: {}) – the list of custom scripts to add to `package.json` . It also allows overriding default scripts.
-   `npmDependencies` (default: `[]`) – the list of remote npm packages to be installed in the project with [`npm install`](https://docs.npmjs.com/cli/v8/commands/npm-install) when `wpScripts` is enabled.
-   `npmDevDependencies` (default: `[]`) – the list of remote npm packages to be installed in the project with [`npm install --save-dev`](https://docs.npmjs.com/cli/v8/commands/npm-install) when `wpScripts` is enabled.
 -->
-   `wpScripts` (デフォルト: `true`) – `@wordpress/scripts` パッケージとの統合を有効可し、`package.json` に共通スクリプトを追加する。
-   `wpEnv` (デフォルト: `false`) – `@wordpress/env` パッケージとの統合を有効可し、`package.json` に `env` スクリプトを追加する。
-   `customScripts` (デフォルト: {}) – `package.json` に追加するカスタムスクリプトのリスト。デフォルトのスクリプトも上書きできる。
-   `npmDependencies` (デフォルト: `[]`) – `wpScripts` が有効な時、[`npm install`](https://docs.npmjs.com/cli/v6/commands/npm-install) でプロジェクトにインストールされるリモート npm パッケージのリスト
-   `npmDevDependencies` (デフォルト: `[]`) – `wpScripts` が有効な時、[`npm install --save-dev`](https://docs.npmjs.com/cli/v8/commands/npm-install) でプロジェクトにインストールされるリモート npm パッケージのリスト

<!-- 
**Plugin header fields** ([learn more](https://developer.wordpress.org/plugins/plugin-basics/header-requirements/)):
 -->
**プラグインヘッダーフィールド** ([詳細](https://developer.wordpress.org/plugins/plugin-basics/header-requirements/)):
<!-- 
-   `pluginURI` (no default) – the home page of the plugin.
-   `version` (default: `'0.1.0'`) – the current version number of the plugin.
-   `author` (default: `'The WordPress Contributors'`) – the name of the plugin author(s).
-   `license` (default: `'GPL-2.0-or-later'`) – the short name of the plugin’s license.
-   `licenseURI` (default: `'https://www.gnu.org/licenses/gpl-2.0.html'`) – a link to the full text of the license.
-   `domainPath` (no default) – a custom domain path for the translations ([more info](https://developer.wordpress.org/plugins/internationalization/how-to-internationalize-your-plugin/#domain-path)).
-   `updateURI:` (no default) – a custom update URI for the plugin ([related dev note](https://make.wordpress.org/core/2021/06/29/introducing-update-uri-plugin-header-in-wordpress-5-8/)).
 -->
-   `pluginURI` (デフォルトなし) – プラグインのホームページ
-   `version` (デフォルト: `'0.1.0'`) – プラグインの現行のバージョン番号
-   `author` (デフォルト: `'The WordPress Contributors'`) – プラグイン作者の名前
-   `license` (デフォルト: `'GPL-2.0-or-later'`) – プラグインのライセンスの短い名前
-   `licenseURI` (デフォルト: `'https://www.gnu.org/licenses/gpl-2.0.html'`) – ライセンスの完全なテキストへのリンク
-   `domainPath` (デフォルトなし) – 翻訳へのカスタムドメインパス。([詳細](https://developer.wordpress.org/plugins/internationalization/how-to-internationalize-your-plugin/#domain-path))
-   `updateURI:` (デフォルトなし) – プラグインのカスタム更新 URI。([関連 dev note](https://make.wordpress.org/core/2021/06/29/introducing-update-uri-plugin-header-in-wordpress-5-8/))

<!-- 
**Block metadata** ([learn more](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/)):
 -->
**ブロックメタデータ** ([詳細](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/)):

<!-- 
-   `folderName` (default: `.`) – the location for the `block.json` file and other optional block files generated from block templates included in the folder set with the `blockTemplatesPath` setting.
-   `$schema` (default: `https://schemas.wp.org/trunk/block.json`) – the schema URL used for block validation.
-   `apiVersion` (default: `2`) – the block API version ([related dev note](https://make.wordpress.org/core/2020/11/18/block-api-version-2/)).
-   `slug` (no default) – the block slug used for identification in the block name.
-   `namespace` (default: `'create-block'`) – the internal namespace for the block name.
-   `title` (no default) – a display title for your block.
-   `description` (no default) – a short description for your block.
-   `dashicon` (no default) – an icon property thats makes it easier to identify a block ([available values](https://developer.wordpress.org/resource/dashicons/)).
-   `category` (default: `'widgets'`) – blocks are grouped into categories to help users browse and discover them. The categories provided by core are `text`, `media`, `design`, `widgets`, `theme`, and `embed`.
-   `attributes` (no default) – block attributes ([more details](https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/)).
-   `supports` (no default) – optional block extended support features ([more details](https://developer.wordpress.org/block-editor/developers/block-api/block-supports/).
-   `editorScript` (default: `'file:./index.js'`) – an editor script definition.
-   `editorStyle` (default: `'file:./index.css'`) – an editor style definition.
-   `style` (default: `'file:./style-index.css'`) – a frontend and editor style definition.
 -->
-   `folderName` (デフォルト: `.`) – `block.json` ファイル、および、`blockTemplatesPath` で設定したフォルダに含まれるブロックテンプレートから生成されたオプションのブロックファイルの場所
-   `$schema` (デフォルト: `https://schemas.wp.org/trunk/block.json`) – ブロック妥当性検査 (validation) で使用されるスキーマの URL
-   `apiVersion` (デフォルト: `2`) – ブロック API バージョン ([関連 dev note](https://make.wordpress.org/core/2020/11/18/block-api-version-2/)).
-   `slug` (デフォルトなし) – ブロック名の識別に使用されるブロックスラッグ
-   `namespace` (デフォルト: `'create-block'`) – ブロック名の内部名前空間
-   `title` (デフォルトなし) – ブロックの表示タイトル
-   `description` (デフォルトなし) - ブロックの短い説明
-   `dashicon` (デフォルトなし) - ブロックの識別を助けるアイコンプロパティ。([利用可能な値](https://developer.wordpress.org/resource/dashicons/))
-   `category` (デフォルト: `'widgets'`) - ユーザーの参照と検索のため、ブロックはカテゴリーにグループ分けされる。コアで提供されるカテゴリーは、`text`、`media`、`design`、`widgets`、`theme`、`embed`
-   `attributes` (デフォルトなし) – ブロック属性。([詳細](https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/)).
-   `supports` (デフォルトなし) – オプションのブロック拡張サポート機能。([詳細](https://developer.wordpress.org/block-editor/developers/block-api/block-supports/).
-   `editorScript` (デフォルト: `'file:./index.js'`) – エディタースクリプト定義
-   `editorStyle` (デフォルト: `'file:./index.css'`) – エディタースタイル定義
-   `style` (デフォルト: `'file:./style-index.css'`) – フロントエンドとエディターのスタイル定義

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