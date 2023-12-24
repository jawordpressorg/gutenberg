<!-- 
# Get started with create-block
 -->
# create-block 入門

<!-- 
Custom blocks for the Block Editor in WordPress are typically registered using plugins and are defined through a specific set of files. The [`@wordpress/create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) package is an officially supported tool to scaffold the structure of files needed to create and register a block. It generates all the necessary code to start a project and integrates a modern JavaScript build setup (using [`wp-scripts`](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-scripts/)) with no configuration required. 
 -->
WordPress ブロックエディターのカスタムブロックは通常、プラグインを使用して登録され、特定のファイル群によって定義されます。[`@wordpress/create-block`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/) パッケージは、ブロックの作成と登録に必要なファイル構造のひな形を作成する公式サポートツールです。プロジェクトを開始するために必要なすべてのコードを生成し、モダンな JavaScript ビルドセットアップ（[`wp-scripts`](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-scripts) を使用）を構成の必要なく、統合します。

<!-- 
The package is designed to help developers quickly set up a block development environment following WordPress best practices.
 -->
このパッケージは開発者が、WordPress のベストプラクティスに従ってブロック開発環境を素早くセットアップできるように設計されています。

<!-- 
## Quick start
 -->
## クイックスタート

<!-- 
### Installation
 -->
### インストール

<!-- 
Start by ensuring you have Node.js and `npm` installed on your computer. Review the [Node.js development environment](https://developer.wordpress.org/block-editor/getting-started/devenv/nodejs-development-environment/) guide if not.
 -->
まず Node.js と `npm` がコンピュータにインストールされていることを確認してください。インストールされていなければ、[Node.js 開発環境](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/nodejs-development-environment/) ガイドを参照してください。

<!-- 
You can use `create-block` to scaffold a block just about anywhere and then [use `wp-env`](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-env/) from the inside of the generated plugin folder. This will create a local WordPress development environment with your new block plugin installed and activated.
 -->
任意の場所で `create-block` を使用してブロックを作成できます。次に、生成されたプラグインフォルダの中から [`wp-env` ](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-env/)を使用します。WordPress のローカル開発環境が作成され、新しいブロックプラグインがインストール、有効化されます。

<!-- 
If you have your own [local WordPress development environment](https://developer.wordpress.org/block-editor/getting-started/devenv/#local-wordpress-environment) already set up, navigate to the `plugins/` folder using the terminal.
 -->
[ローカル WordPress 開発環境](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/#%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%AE-wordpress-%E7%92%B0%E5%A2%83)がすでにセットアップされている場合は、ターミナルを使用して `plugins/` フォルダに移動してください。

<!-- 
Run the following command to scaffold an example block plugin:
 -->
次のコマンドを実行すると、ブロックプラグインのサンプルのひな形を作成できます。

```bash
npx @wordpress/create-block@latest todo-list
cd todo-list
```

<!-- 
The `slug` provided (`todo-list`) defines the folder name for the scaffolded plugin and the internal block name. 
 -->
指定された`slug` (`todo-list`) は、ひな形のプラグインのフォルダ名と内部ブロック名を定義します。

<!-- 
Navigate to the Plugins page of our local WordPress installation and activate the "Todo List" plugin. The example block will then be available in the Editor. 
 -->
ローカルの WordPress のプラグインページに移動し、「Todo List」プラグインを有効化します。すると、サンプルのブロックがエディター内で利用可能になります。

<!-- 
### Basic usage
 -->
### 基本的な使い方

<!-- 
The `create-block` assumes you will use modern JavaScript (ESNext and JSX) to build your block. This requires a build step to compile the code into a format that browsers can understand. Luckily, the `wp-scripts` package handles this process for you. Refer to the [Get started with wp-scripts](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-scripts) for an introduction to this package. 
 -->
`create-block` はブロックのビルドに、モダンな JavaScript (ESNext と JSX) を使用することを想定しています。そのため、コードをブラウザが理解できる形にコンパイルする、ビルド手順が必要です。幸運なことに、`wp-scripts` パッケージがこの処理を代行します。このパッケージの紹介は、[wp-scripts 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/)を参照してください。

<!-- 
When `create-block` scaffolds the block, it installs `wp-scripts` and adds the most common scripts to the block's `package.json` file. By default, those include:
 -->
`create-block` はブロックのひな形を作成する際、`wp-scripts` をインストールし、最も一般的なスクリプトをブロックの`package.json` ファイルに追加します。デフォルトでは、以下のスクリプトが追加されます。

```json
{
    "scripts": {
		"build": "wp-scripts build",
		"format": "wp-scripts format",
		"lint:css": "wp-scripts lint-style",
		"lint:js": "wp-scripts lint-js",
		"packages-update": "wp-scripts packages-update",
		"plugin-zip": "wp-scripts plugin-zip",
		"start": "wp-scripts start"
	}
}
```

<!-- 
These scripts can then be run using the command `npm run {script name}`. The two scripts you will use most often are `start` and `build` since they handle the build step.
 -->
これらのスクリプトは `npm run {スクリプト名}` コマンドを使用して実行できます。最もよく使うスクリプトはビルド手順を処理する `start` と `build` の2つです。

<!-- 
When working on your block, use the `npm run start` command. This will start a development server and automatically rebuild the block whenever any code change is detected.
 -->
ブロックで作業するときは、 `npm run start` コマンドを使用します。開発サーバーを起動し、コードの変更を検出するたびに、自動的にブロックをリビルドします。

<!-- 
When you are ready to deploy your block, use the `npm run build` command. This optimizes your code and makes it production-ready.
 -->
ブロックをデプロイする準備ができたら、 `npm run build` コマンドを使用します。コードが最適化され、本番環境に適用できます。

<!-- 
See the `wp-scripts` [package documentation](https://developer.wordpress.org/block-editor/packages/packages-scripts/) for more details about each available script.
 -->
利用可能な各スクリプトの詳細については、 `wp-scripts` [パッケージドキュメント](https://developer.wordpress.org/block-editor/packages/packages-scripts/) を参照してください。

<!-- 
## Alternate implementations
 -->
## 他の実装

<!-- 
### Interactive mode
 -->
### 対話モード

<!-- 
For developers who prefer a more guided experience, the `create-block` package provides an interactive mode. Instead of manually specifying all options upfront, like the `slug` in the above example, this mode will prompt you for inputs step-by-step.
 -->
詳細な指示が必要な開発者のために、`create-block` パッケージには対話モードがあります。このモードでは、上の例の `slug` のようにすべてのオプションを事前に手動で指定する代わりに、ステップごとに入力が求められます。

<!-- 
To use this mode, run the command:
 -->
このモードを使用するには、次のコマンドを実行してください。

```bash
npx @wordpress/create-block@latest
```

<!-- 
Follow the prompts to configure your block settings interactively.
 -->
プロンプトに従って、対話的にブロックを構成できます。

<!-- 
### Quick start mode using options
 -->
### オプションを使用したクイックスタートモード

<!-- 
If you're already familiar with the `create-block` [options](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/#options) and want a more streamlined setup, you can use quick start mode. This allows you to pass specific options directly in the command line, eliminating the need for interactive prompts.
 -->
すでに `create-block` の[オプション](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/#%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3) に慣れていて、短い時間でセットアップを終えたければクイックスタートモードを使用してください。コマンドラインで直接特定のオプションを指定でき、対話的なプロンプトは不要です。

<!-- 
For instance, to quickly create a block named "my-block" with a namespace of "my-plugin" that is a Dynamic block, use this command:
 -->
例えば、名前空間「my-block」を持つダイナミックブロック「my-plugin」を素早く作成するには、次のコマンドを使用します。

```bash
npx @wordpress/create-block@latest --namespace="my-plugin" --slug="my-block" --variant="dynamic"
```
<!-- 
### Using templates
 -->
### テンプレートの使用

<!-- 
The `create-block` package also supports the use of templates, enabling you to create blocks based on predefined configurations and structures. This is especially useful when you have a preferred block structure or when you're building multiple blocks with similar configurations.
 -->
`create-block` パッケージはテンプレートもサポートしています。定義済みの構成や構造に基づいてブロックを作成できます。これは特に、希望するブロック構造がある場合や、類似の構成で複数のブロックを作成する場合に便利です。

<!-- 
To use a template, specify the `--template` option followed by the template name or path:
 -->
テンプレートを使用するには、`--template` オプションの後にテンプレート名またはパスを指定します。

```bash
npx @wordpress/create-block --template="my-custom-template"
```
<!-- 
Templates must be set up in advance so the `create-block` package knows where to find them. Learn more in the `create-block` [documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/#template), and review the [External Project Templates](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/packages-create-block-external-template/) guide.
 -->
テンプレートはあらかじめセットアップしておき、`create-block` パッケージにテンプレートの位置を知らせる必要があります。詳しくは `create-block` の[ドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/#%E2%80%93template) を参照してください。また、[外部プロジェクトテンプレート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/packages-create-block-external-template/) ガイドも参照してください。

<!-- 
## Additional resources
 -->
## 追加のリソース
<!-- 
- [Using the create-block tool](https://learn.wordpress.org/tutorial/using-the-create-block-tool/) (Learn WordPress tutorial)
- [@wordpress/create-block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) (Official documentation)
- [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) (Official documentation)
 -->
- [create-block ツールの使用](https://learn.wordpress.org/tutorial/using-the-create-block-tool/) (Learn WordPress チュートリアル)
- [@wordpress/create-block](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/) (公式ドキュメント)
- [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) (公式ドキュメント)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/devenv/get-started-with-create-block.md)