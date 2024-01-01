<!--
# Development Platform
 -->
# 開発プラットフォーム

<!--
The Gutenberg Project is not only building a better editor for WordPress, but also creating a platform to build upon. This platform consists of a set of JavaScript packages and tools that you can use in your web application. [View the list of packages available on npm](https://www.npmjs.com/org/wordpress).
 -->
Gutenberg プロジェクトは、より良い WordPress エディターを作るだけでなく、その上で構築するプラットフォームの作成を目指しています。プラットフォームは JavaScript パッケージとツールから構成され、Web アプリケーションで利用できます。[npm で利用可能なパッケージのリストを参照してください](https://www.npmjs.com/org/wordpress)。

<!--
## UI components
 -->
## UI コンポーネント

<!--
The [WordPress Components package](/packages/components/README.md) contains a set of UI components you can use in your project. See the [WordPress Storybook site](https://wordpress.github.io/gutenberg/) for an interactive guide to the available components and settings.

Here is a quick example, how to use components in your project.

Install the dependency:
 -->
[WordPress コンポーネントパッケージ](https://ja.wordpress.org/team/handbook/block-editor/components/) にはユーザーがプロジェクトで利用可能な一連の UI コンポーネントが含まれています。コンポーネントと設定のインタラクティブなガイドについては [WordPress Storybook サイト](https://wordpress.github.io/gutenberg/) を参照してください。

プロジェクト内から wp-scripts を使用する簡単な例を示します。

まず、依存をインストールします。

```bash
npm install --save @wordpress/components
```
<!--
Usage in React:
 -->
React での使用方法は次のとおりです。

```jsx
import { Button } from '@wordpress/components';

function MyApp() {
	return <Button>Hello Button</Button>;
}
```
<!--
Many components include CSS to add style, you will need to include for the components to appear correctly. The component stylesheet can be found in `node_modules/@wordpress/components/build-style/style.css`, you can link directly or copy and include it in your project.
 -->
多くのコンポーネントはスタイルの追加のために CSS を含むため、コンポーネントを正しく表示するには追加が必要です。コンポーネントのスタイルシートは `node_modules/@wordpress/components/build-style/style.css` にあります。直接リンクするか、プロジェクトにコピーして include してください。

<!--
## Development scripts
 -->
## 開発スクリプト

<!--
The [`@wordpress/scripts` package](/packages/scripts/README.md) is a collection of reusable scripts for JavaScript development — includes scripts for building, linting, and testing — all with no additional configuration files.

Here is a quick example, on how to use `wp-scripts` tool in your project.

Install the dependency:
 -->
[`@wordpress/scripts` パッケージ](https://github.com/WordPress/gutenberg/blob/trunk/packages/scripts/README.md)は JavaScript 開発用の再利用可能なスクリプト集です。ビルド、lint、テスト用のスクリプトが含まれ、すべてのスクリプトで追加の構成ファイルは不要です。

プロジェクトで `wp-scripts` ツールを使用する簡単な例を示します。

まず、依存をインストールします。

```bash
npm install --save-dev @wordpress/scripts
```
<!--
You can then add a scripts section to your package.json file, for example:
 -->
次に package.json ファイルに scripts セクションを追加します。

```json
	"scripts": {
		"build": "wp-scripts build",
		"format": "wp-scripts format",
		"lint:js": "wp-scripts lint-js",
		"start": "wp-scripts start"
	}
```
<!--
You can then use `npm run build` to build your project with all the default webpack settings already configured, likewise for formatting and linting. The `start` command is used for development mode. See the [`@wordpress/scripts` package](/packages/scripts/README.md) for full documentation.

For more info, see the [Getting Started with JavaScript tutorial](/docs/how-to-guides/javascript/js-build-setup.md) in the Block Editor Handbook.
 -->
これで `npm run build` と実行すると、構成済みのすべてのデフォルトの webpack 、たとえばフォーマットや lint を実行してプロジェクトをビルドします。`start` コマンドは開発モードで使用します。完全なドキュメントについては [`@wordpress/scripts` パッケージ](https://github.com/WordPress/gutenberg/blob/trunk/packages/scripts/README.md)を参照してください。

詳細については「ブロックエディターハンドブック」の「[JavaScript ビルド環境のセットアップ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/js-build-setup/)」を参照してください。


<!--
## Block Editor
 -->
## ブロックエディター

<!--
The [`@wordpress/block-editor` package](https://developer.wordpress.org/block-editor/packages/packages-block-editor/) allows you to create and use standalone block editors.

You can learn more by reading the [tutorial "Building a custom block editor"](/docs/how-to-guides/platform/custom-block-editor.md).
 -->
[`@wordpress/block-editor` パッケージ](https://developer.wordpress.org/block-editor/packages/packages-block-editor/) を使用するとスタンドアロンのブロックエディターを作成し、使用できます。

詳細については [チュートリアル - カスタムブロックエディターの構築](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/platform/custom-block-editor/) を参照してください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/platform/README.md)

