<!-- 
# Quick Start Guide
 -->
# クイックスタートガイド

<!-- 
This guide is designed to demonstrate the basic principles of block development in WordPress using a hands-on approach. Following the steps below, you will create a custom block plugin that uses modern JavaScript (ESNext and JSX) in a matter of minutes. The example block displays the copyright symbol (©) and the current year, the perfect addition to any website's footer. You can see these steps in action through this short video demonstration.
 -->
このガイドは WordPress でのブロック開発の基本原則をハンズオン形式で説明します。以下の手順に従うだけで、モダンな JavaScript (ESNext と JSX) を使用したカスタムブロックプラグインを数分で作成できます。ブロックのサンプル例では、著作権シンボル (©) と現在の年を表示します。どのウェブサイトのフッターにも最適でしょう。以下の短いデモ動画で、一連の手順の様子を見ることができます。

<iframe width="960" height="540" src="https://www.youtube.com/embed/nrut8SfXA44?si=YxvmHmAoYx-BDCog" title="WordPress Block Development: Quick Start Guide Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>

<!-- 
## Scaffold the block plugin
 -->
## ブロックプラグインのひな形の作成

<!-- 
Start by ensuring you have Node.js and `npm` installed on your computer. Review the [Node.js development environment](https://developer.wordpress.org/block-editor/getting-started/devenv/nodejs-development-environment/) guide if not.
 -->
まず Node.js と `npm` がコンピュータにインストールされていることを確認してください。インストールされていなければ、[Node.js 開発環境](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/nodejs-development-environment/) ガイドを参照してください。

<!-- 
Next, use the [`@wordpress/create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) package and the [`@wordpress/create-block-tutorial-template`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block-tutorial-template/) template to scaffold the complete “Copyright Date Block” plugin. 
 -->
次に、[`@wordpress/create-block`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/) パッケージと [`@wordpress/create-block-tutorial-template`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block-tutorial-template/) テンプレートを使用して、完全な「Copyright Date Block」プラグインのひな形を作成します。

<!-- 
<div class="callout callout-info">
    <p>You can use <code>create-block</code> to scaffold a block just about anywhere and then use <a href="https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-env/"><code>wp-env</code></a> inside the generated plugin folder. This will create a local WordPress development environment with your new block plugin installed and activated.</p>
    <p>If you already have your own <a href="https://developer.wordpress.org/block-editor/getting-started/devenv/#local-wordpress-environment">local WordPress development environment</a>, navigate to the <code>plugins/</code> folder using the terminal.</p>
</div>
 -->
> 任意の場所で `create-block` を使用してブロックを作成できます。次に、生成されたプラグインフォルダの中から [`wp-env` ](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-env/)を使用します。WordPress のローカル開発環境が作成され、新しいブロックプラグインがインストール、有効化されます。
> [ローカル WordPress 開発環境](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/#%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%AE-wordpress-%E7%92%B0%E5%A2%83)がすでにセットアップされている場合は、ターミナルを使用して `plugins/` フォルダに移動してください。

<!-- 
Choose the folder where you want to create the plugin, and then execute the following command in the terminal from within that folder:
 -->
プラグインを作成するフォルダを選択し、そのフォルダ内からターミナルで以下のコマンドを実行します。

```sh
npx @wordpress/create-block copyright-date-block --template @wordpress/create-block-tutorial-template
```

<!-- 
The `slug` provided (`copyright-date-block`) defines the folder name for the scaffolded plugin and the internal block name.
 -->
指定された `slug` (`copyright-date-block`) は、ひな形プラグインのフォルダ名と内部ブロック名を定義します。

<!-- 
Navigate to the Plugins page of your local WordPress installation and activate the “Copyright Date Block” plugin. The example block will then be available in the Editor.
 -->
WordPress のプラグインページに移動し、「Copyright Date Block」プラグインを有効化します。エディターでこのサンプルブロックが利用できるようになります。

<!-- 
## Basic usage
 -->
## 基本の使い方

<!-- 
With the plugin activated, you can explore how the block works. Use the following command to move into the newly created plugin folder and start the development process.
 -->
プラグインを有効化すると、ブロックがどのように動作するかを調べられます。次のコマンドを使用して、新しく作成したプラグインフォルダーに移動し、開発プロセスを始めてください。

```sh
cd copyright-date-block && npm start
```
<!-- 
When `create-block` scaffolds the block, it installs `wp-scripts` and adds the most common scripts to the block’s `package.json` file. Refer to the [Get started with wp-scripts](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-scripts/) article for an introduction to this package.
 -->
`create-block` はブロックのひな形を作成する際、`wp-scripts` をインストールし、最も汎用的なスクリプトをブロックの `package.json` ファイルに追加します。このパッケージの紹介については、[wp-scripts 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/)の記事を参照してください。

<!-- 
The `npm start` command will start a development server and watch for changes in the block’s code, rebuilding the block whenever modifications are made. 
 -->
`npm start` コマンドは開発サーバーを起動し、ブロックのコードの変更を監視し、変更されるたびにブロックを再構築します。

<!-- 
When you are finished making changes, run the `npm run build` command. This optimizes the block code and makes it production-ready.
 -->
変更が終わったら `npm run build` コマンドを実行します。ブロックのコードが最適化され、本番環境への適用が可能になります。

<!-- 
## View the block in action
 -->
## ブロックの動きの確認

<!-- 
You can use any local WordPress development environment to test your new block, but the scaffolded plugin includes configuration for `wp-env`. You must have [Docker](https://www.docker.com/products/docker-desktop) already installed and running on your machine, but if you do, run the `npx wp-env start` command. 
 -->
新しいブロックのテストには、任意のローカル WordPress 開発環境を使用できますが、ひな形のプラグインには`wp-env` の設定が含まれています。コンピュータに [Docker](https://www.docker.com/products/docker-desktop) がインストール、実行されている必要があります。準備を終えたら `npx wp-env start`コマンドを実行してください。

<!-- 
Once the script finishes running, you can access the local environment at: <code>http://localhost:8888</code>. Log into the WordPress dashboard using username `admin` and password `password`. The plugin will already be installed and activated. Open the Editor or Site Editor, and insert the Copyright Date Block as you would any other block.
 -->
スクリプトの実行が終わると、ローカル環境に <code>http://localhost:8888</code> でアクセスできます。ユーザー名 `admin` とパスワード `password` を使用して WordPress のダッシュボードにログインします。プラグインはすでにインストールされ、有効化されています。エディターまたはサイトエディターを開き、他のブロックと同じようにCopyright Date ブロックを挿入してください。

<!-- 
Visit the [Getting started](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-env/) guide to learn more about `wp-env`.
 -->
`wp-env` の詳細については、[wp-env 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-env/) を参照してください。

<!--
## Additional resources
 -->
## その他のリソース

<!-- 
- [Get started with create-block](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-create-block/)
- [Get started with wp-scripts](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-scripts/)
- [Get started with wp-env](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-env/)
 -->

- [create-block 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-create-block/)
- [wp-scripts 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/)
- [wp-env 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-env/)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/quick-start-guide.md)
