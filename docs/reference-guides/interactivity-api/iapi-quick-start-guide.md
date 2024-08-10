<!-- 
# Quick start guide
 -->
# クイックスタートガイド

<!-- 
This guide will help you build a basic block that demonstrates the Interactivity API in WordPress.
 -->
このガイドでは、WordPress の Interactivity API をデモする基本的なブロックを構築します。

<!-- 
## Scaffold an interactive block
 -->
## インタラクティブなブロックのひな形の作成

<!-- 
Start by ensuring you have Node.js and `npm` installed on your computer. Review the [Node.js development environment](https://developer.wordpress.org/block-editor/getting-started/devenv/nodejs-development-environment/) guide if not.
 -->
まず Node.js と `npm` がコンピュータにインストールされていることを確認します。インストールしていなければ、[Node.js 開発環境](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/nodejs-development-environment/) ガイドを参照してください。

<!-- 
Next, use the [`@wordpress/create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) package and the [`@wordpress/create-block-interactive-template`](https://www.npmjs.com/package/@wordpress/create-block-interactive-template) template to scaffold the complete “My First Interactive Block” plugin.
 -->
次に、[`@wordpress/create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) パッケージと [`@wordpress/create-block-interactive-template`](https://www.npmjs.com/package/@wordpress/create-block-interactive-template) テンプレートを使用して、完全な「My First Interactive Block」プラグインのひな形を作成します。

<!-- 
Choose the folder where you want to create the plugin, and then execute the following command in the terminal from within that folder:
 -->
プラグインを作成したいフォルダを選択し、そのフォルダ内からターミナルで以下のコマンドを実行します。

```
npx @wordpress/create-block@latest my-first-interactive-block --template @wordpress/create-block-interactive-template
```

<!-- 
The slug provided (`my-first-interactive-block`) defines the folder name for the scaffolded plugin and the internal block name.
 -->
指定されたスラッグ（`my-first-interactive-block`）は、ひな形プラグインのフォルダ名と内部ブロック名を定義します。

<!-- 
## Basic usage
 -->
## 基本的な使用方法

<!-- 
With the plugin activated, you can explore how the block works. Use the following command to move into the newly created plugin folder and start the development process.
 -->
プラグインを有効化すると、ブロックの動作を調べられます。次のコマンドを使用して、新しく作成したプラグインフォルダーに移動し、開発プロセスを開始します。

```
cd my-first-interactive-block && npm start
```

<!-- 
When `create-block` scaffolds the block, it installs `wp-scripts` and adds the most common scripts to the block’s `package.json` file. Refer to the [Get started with wp-scripts](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-scripts/) article for an introduction to this package.
 -->
`create-block` がブロックのひな形を作成すると、`wp-scripts` がインストールされ、最も汎用的なスクリプトがブロックの `package.json` ファイルに追加されます。このパッケージの紹介については、[wp-scripts 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/)の記事を参照してください。

<!-- 
The `npm start` command will start a development server and watch for changes in the block’s code, rebuilding the block whenever modifications are made.
 -->
`npm start` コマンドは開発サーバーを起動し、ブロックのコードの変更を監視し、変更が加えられるたびにブロックを再構築します。

<!-- 
When you are finished making changes, run the `npm run build` command. This optimizes the block code and makes it production-ready.
 -->
変更を終えたら、`npm run build` コマンドを実行します。ブロックのコードが最適化され、本番環境用のパッケージが構築されます。

<!-- 
## View the block in action
 -->
## ブロックの動作の確認

<!-- 
If you have a local WordPress installation already running, you can launch the commands above inside the `plugins` folder of that installation. If not, you can use [`wp-now`](https://github.com/WordPress/playground-tools/tree/trunk/packages/wp-now) to launch a WordPress site with the plugin installed by executing the following command from the plugin's folder (`my-first-interactive-block`).
 -->
ローカルに WordPress をインストールし、実行している場合は、その `plugins` フォルダから上のコマンドを実行できます。そうでない場合は、[`wp-now`](https://github.com/WordPress/playground-tools/tree/trunk/packages/wp-now) を使用して、プラグインのフォルダ (`my-first-interactive-block`) から以下のコマンドを実行することで、プラグインがインストールされた WordPress サイトを起動できます。

```
npx @wp-now/wp-now start
```
<!-- 
You should be able to insert the "My First Interactive Block" block into any post and see how it behaves in the front end when published.
 -->
「My First Interactive Block」ブロックを任意の投稿に挿入し、公開すると、フロントエンドで動作を確認できます。

<!-- 
<div class="callout callout-info">
    <p>To get more advanced examples of using the Interactivity API you can check the following resources:</p>
    <ul>
      <li><a href="https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/#docs-examples">Docs & Examples</a></li>
      <li><a href="https://github.com/WordPress/gutenberg/discussions/52894">Getting Started - and other learning resources</a></li>
      <li><a href="https://github.com/WordPress/gutenberg/discussions/55642#">Interactivity API showcase</a></li>
    </ul>
</div>
 -->

> Interactivity API を使用したより高度な例については、以下のリソースを参照してください。
- [ドキュメントとサンプルプログラム](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/#docs-examples)
- [はじめに - および、その他の学習向け情報](https://github.com/WordPress/gutenberg/discussions/52894)
- [Interactivity API showcase](https://github.com/WordPress/gutenberg/discussions/55642#)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/interactivity-api/iapi-quick-start-guide.md)