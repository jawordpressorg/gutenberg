<!-- 
# External Project Templates
 -->
# 外部プロジェクトテンプレート

<!-- 
Are you looking for a way to share your project configuration? Creating an external project template hosted on npm or located in a local directory is possible. These npm packages can provide custom `.mustache` files that replace default files included in the tool for the WordPress plugin or/and the block. It's also possible to override default configuration values used during the scaffolding process.
 -->
プロジェクトの設定の共有方法をお探しですか ? npmでホストされる外部プロジェクトテンプレートを作成できます。または、ローカルディレクトリ内にも作成できます。これらの npm パッケージは、カスタム `.mustache` ファイルを提供でき、WordPress プラグイン または、ブロックのためのツールに含まれるデフォルトのファイルを置き換えられます。また、ひな形生成プロセス中に使用されるデフォルトの構成値を上書きできます。

<!-- 
## Project Template Configuration
 -->
## プロジェクトテンプレート構成

<!-- 
Providing the main file (`index.js` by default) for the package that returns a configuration object is mandatory. Several options allow customizing the scaffolding process.
 -->
構成オブジェクトを返すパッケージのメインファイル (デフォルトでは `index.js`) の提供は必須です。いくつかのオプションを使用して、ひな形生成プロセスをカスタマイズできます。

<!-- 
### `pluginTemplatesPath`
 -->
### pluginTemplatesPath

<!-- 
This optional field allows overriding file templates related to **the WordPress plugin shell**. The path points to a location with template files ending with the `.mustache` extension (nested folders are also supported). When not set, the tool uses its own set of templates.
 -->
このオプションフィールドは、**WordPress プラグインシェル**に関連するファイルテンプレートを上書きできます。パスは、拡張子が `.mustache` で終わるテンプレートファイルのある場所を指します (ネストしたフォルダもサポートされます)。設定されない場合、ツールは自身のテンプレートセットを使用します。 

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
### `blockTemplatesPath`
 -->
### blockTemplatesPath

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
### `assetsPath`
 -->
### assetsPath

<!--
This setting is useful when your template scaffolds a WordPress plugin that uses static assets like images or fonts, which should not be processed. It provides the path pointing to the location where assets are located. They will be copied to the `assets` subfolder in the generated plugin.
 -->
この設定はテンプレートからひな形の生成時、WordPress プラグインが使用する画像やフォントなどの処理の必要のない静的なアセットを準備する場合に便利です。アセットのある場所を指すパスを指定します。アセットは生成されたプラグインの `assets` サブフォルダーにコピーされます。

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
### `defaultValues`
 -->
### defaultValues

<!--
It is possible to override the default template configuration using the `defaultValues` field.
 -->
`defaultValues` フィールドを使用してデフォルトのテンプレート構成を上書きできます。

<!-- 
_Example:_
 -->
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
**Project**:
 -->
**プロジェクト**:

<!-- 
-   `wpScripts` (default: `true`) – enables integration with the `@wordpress/scripts` package and adds common scripts to the `package.json`.
-   `wpEnv` (default: `false`) – enables integration with the `@wordpress/env` package and adds the `env` script to the `package.json`.
-   `customScripts` (default: {}) – the list of custom scripts to add to `package.json` . It also allows overriding default scripts.
-   `npmDependencies` (default: `[]`) – the list of remote npm packages to be installed in the project with [`npm install`](https://docs.npmjs.com/cli/v8/commands/npm-install) when `wpScripts` is enabled.
-   `npmDevDependencies` (default: `[]`) – the list of remote npm packages to be installed in the project with [`npm install --save-dev`](https://docs.npmjs.com/cli/v8/commands/npm-install) when `wpScripts` is enabled.
-   `customPackageJSON` (no default) - allows definition of additional properties for the generated package.json file.
 -->
-   `wpScripts` (デフォルト: `true`) – `@wordpress/scripts` パッケージとの統合を有効可し、`package.json` に共通スクリプトを追加する。
-   `wpEnv` (デフォルト: `false`) – `@wordpress/env` パッケージとの統合を有効可し、`package.json` に `env` スクリプトを追加する。
-   `customScripts` (デフォルト: {}) – `package.json` に追加するカスタムスクリプトのリスト。デフォルトのスクリプトも上書きできる。
-   `npmDependencies` (デフォルト: `[]`) – `wpScripts` が有効な時、[`npm install`](https://docs.npmjs.com/cli/v6/commands/npm-install) でプロジェクトにインストールされるリモート npm パッケージのリスト
-   `npmDevDependencies` (デフォルト: `[]`) – `wpScripts` が有効な時、[`npm install --save-dev`](https://docs.npmjs.com/cli/v8/commands/npm-install) でプロジェクトにインストールされるリモート npm パッケージのリスト
-   `customPackageJSON` (デフォルトなし) - 生成されたパッケージの追加プロパティを定義できます。json ファイル。

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
-   `render` (no default) – a path to the PHP file used when rendering the block type on the server before presenting on the front end.
-   `customBlockJSON` (no default) - allows definition of additional properties for the generated block.json file.
-   `transformer` (default: `( view ) => view` ) - a function that receives all variables generated by the create-block tool and returns an object of values. This function provides the ability to modify existing values and add new variables.
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
-   `render` (デフォルトなし) – フロントエンドで表示する前に、サーバー上でブロックタイプをレンダリングする際に使用される PHP ファイルへのパス。
-   `customBlockJSON` (デフォルトなし) - 生成された block.json ファイルに対する、追加のプロパティを定義できます。
-   `transformer` (default: `( view ) => view` ) - a function that receives all variables generated by the create-block tool and returns an object of values. This function provides the ability to modify existing values and add new variables.

#### `transformer` examples

This examples adds a generated value to the slug variable.

```js
transformer: ( view ) => {
    const hex = getRandomHexCode();
      return {
         ...view,
         slug: `${ view.slug }-${ hex }`,
      };
},
```

This example creates a new custom variable that can be used in the associated mustache templates as `{{customVariable}}`

```js
transformer: ( view ) => {
      return {
         ...view,
         customVariable: `Custom Value`,
      };
},
```

### `variants`

Variants are used to create variations for a template. Variants can override any `defaultValues` by providing their own.

```js
module.exports = {
	defaultValues: {
		slug: 'my-fantastic-block',
		title: 'My fantastic block',
		dashicon: 'palmtree',
		version: '1.2.3',
	},
	variants: {
		primary: {},
		secondary: {
			title: 'My fantastic block - secondary variant',
		},
	},
};
```

Variants are accessed using the `--variant` flag, i.e`--variant secondary`.

If no variant is provided, the first variant is used if any are defined.

Mustache variables are created for variants that can be used to conditionally output content in files. The format is `{{isVARIANT_NAMEVariant}}`.

```mustache
{{#isPrimaryVariant}}
This content is only rendered if `--variant primary` is passed.
{{/isPrimaryVariant}}

{{#isSecondaryVariant}}
This content is only rendered if `--variant secondary` is passed.
{{/isSecondaryVariant}}

```

[原文](https://github.com/WordPress/gutenberg/blob/trunk/packages/create-block/docs/external-template.md)
