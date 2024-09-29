<!-- 
# Block Development Environment
 -->
# ブロック開発環境

<!-- 
This guide will help you set up the right development environment to create blocks and other plugins that extend and modify the Block Editor in WordPress.
 -->
このガイドでは WordPress のブロックエディターを拡張、変更する、ブロックや他のプラグインの作成に必要な開発環境のセットアップ方法を紹介します。

<!-- 
A block development environment includes the tools you need on your computer to successfully develop for the Block Editor. The three essential requirements are:
 -->
ブロック開発環境には、ブロックエディター開発の成功に必要なツールが含まれます。3つの主要な要素があります。

<!-- 
1.  [Code editor](#code-editor)
2.  [Node.js development tools](#node-js-development-tools)
3.  [Local WordPress environment (site)](#local-wordpress-environment)
 -->
1.  コードエディター
2.  Node.js 開発ツール
3.  ローカルのWordPress 環境 (サイト)

<!-- 
<div class="callout callout-info">
    To contribute to the Gutenberg project itself, refer to the additional documentation in the <a href="https://developer.wordpress.org/block-editor/contributors/code/getting-started-with-code-contribution">code contribution guide</a>.
</div>
 -->
> Gutenberg プロジェクト自体に貢献するには、[コードによるコントリビューション入門](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/getting-started-with-code-contribution/) の中の追加ドキュメントを参照してください。



<!--
## Code editor
 -->
## コードエディター

<!-- 
A code editor is used to write code. You can use whichever editor you're most comfortable with. The key is having a way to open, edit, and save text files.
 -->
コードの記述にはコードエディターを使用します。使い慣れたどのエディターでも使用できます。機能としてテキストファイルを開き、編集し、保存する手段があれば十分です。

<!-- 
If you do not already have a preferred code editor, [Visual Studio Code](https://code.visualstudio.com/) (VS Code) is a popular choice for JavaScript development among Core contributors. It works well across the three major platforms (Windows, Linux, and Mac), is open-source, and is actively maintained by Microsoft. VS Code also has a vibrant community providing plugins and extensions, including many for WordPress development.
 -->
好みのコードエディターがなければ、[Visual Studio Code](https://code.visualstudio.com/) (VS Code) は、JavaScript で開発するコアコントリビューターの中で人気のある選択肢です。3つの主要なプラットフォーム (Windows、Linux、Mac) で動作し、オープンソースで、Microsoft によって活発にメンテナンスされています。VS Code にはまた、プラグインや拡張機能 (その中には多数の WordPress 開発用のものも含まれます) を提供する活気あるコミュニティがあります。

<!-- 
## Node.js development tools
 -->
## Node.js 開発ツール

<!-- 
Node.js (`node`) is an open-source runtime environment that allows you to execute JavaScript outside of the web browser. While Node.js is not required for all WordPress JavaScript development, it's essential when working with modern JavaScript tools and developing for the Block Editor.
 -->
Node.js (`node`) はオープンソースの実行環境で、ウェブブラウザの外で JavaScript を実行できます。Node.js は WordPress のすべての JavaScript 開発に必要ではありませんが、最新の JavaScript ツールを使用したり、ブロックエディター用に開発する場合は必須です。

<!-- 
Node.js and its accompanying development tools allow you to:
 -->
Node.js とそれに付随する開発ツールを使用することで、以下が可能です。

<!-- 
-   Install and run WordPress packages needed for Block Editor development, such as `wp-scripts`
-   Setup local WordPress environments with `wp-env` and `wp-now`
-   Use the latest ECMAScript features and write code in ESNext
-   Lint, format, and test JavaScript code
-   Scaffold custom blocks with the `create-block` package
 -->
- ブロックエディターの開発に必要な WordPress パッケージのインストールと実行 (`wp-scripts` など)
- WordPress 環境のセットアップ。`wp-env` や `wp-now` を使用
- 最新の ECMAScript の機能を使用して、ESNext でコードを書く。
- JavaScript コードの Lint、フォーマット、テスト
- `create-block` パッケージを使用したカスタムブロックのひな形作成

<!-- 
The list goes on. While modern JavaScript development can be challenging, WordPress provides several tools, like [`wp-scripts`](/docs/getting-started/devenv/get-started-with-wp-scripts.md) and [`create-block`](/docs/getting-started/devenv/get-started-with-create-block.md), that streamline the process and are made possible by Node.js development tools.
 -->
まだまだ続きます。最新の JavaScript 開発は難しいかもしれませんが、WordPress では [`wp-scripts`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/) や [`create-block`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-create-block/)のような、プロセスを効率化するツールを提供しています。そしてこれらも Node.js 開発ツールで作成されています。

<!-- 
**The recommended Node.js version for block development is [Active LTS](https://nodejs.org/en/about/previous-releases) (Long Term Support)**. However, there are times when you need to use different versions. A Node.js version manager tool like `nvm` is strongly recommended and allows you to change your `node` version when required. You will also need Node Package Manager (`npm`) and the Node Package eXecute (`npx`) to work with some WordPress packages. Both are installed automatically with Node.js.
 -->
**ブロック開発に推奨される Node.js のバージョンは、[Active LTS](https://nodejs.org/en/about/previous-releases) (Long Term Support)** です。しかし、異なるバージョンが必要な場合もあります。このため、`nvm` のような Node.js バージョン管理ツールの使用を強く推奨します。必要な場合に `node` のバージョンを切り替えられます。Node Package Manager (`npm`) と Node Package eXecute (`npx`) も WordPress パッケージの利用では必要です。どちらも自動的に Node.js と一緒にインストールされます。

<!-- 
To be able to use the Node.js tools and [packages provided by WordPress](https://github.com/WordPress/gutenberg/tree/trunk/packages) for block development, you'll need to set a proper Node.js runtime environment on your machine. To learn more about how to do this, refer to the links below.
 -->
ブロック開発に Node.js ツールと [WordPress が提供するパッケージ](https://github.com/WordPress/gutenberg/tree/trunk/packages)を使用するには、コンピュータに適切な Node.js 実行環境を設定する必要があります。この方法については、以下のリンクを参照してください。

<!-- 
-   [Install Node.js for Mac and Linux](/docs/getting-started/devenv/nodejs-development-environment.md#node-js-installation-on-mac-and-linux-with-nvm)
-   [Install Node.js for Windows](/docs/getting-started/devenv/nodejs-development-environment.md#node-js-installation-on-windows-and-others)
 -->
- [Mac と Linux 用の Node.js のインストール](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/nodejs-development-environment#node-js-installation-on-mac-and-linux-with-nvm)
- [Windows 用の Node.js のインストール](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/nodejs-development-environment#node-js-installation-on-windows-and-others)

<!-- 
## Local WordPress environment
 -->
## ローカルの WordPress 環境

<!-- 
A local WordPress environment (site) provides a controlled, efficient, and secure space for development, allowing you to build and test your code before deploying it to a production site. The same [requirements](https://en-gb.wordpress.org/about/requirements/) for WordPress apply to local sites.
 -->
WordPress のローカル環境 (サイト) を準備すると、制御可能な、効率的で、安全な開発スペースを入手でき、本番サイトにデプロイする前にコードをビルドし、テストできます。WordPress と同じ[要件](https://en-gb.wordpress.org/about/requirements/)がローカルサイトにも適用されます。

<!-- 
In the broader WordPress community, many tools are available for setting up a local WordPress environment on your computer. The Block Editor Handbook covers `wp-env`, which is open-source and maintained by the WordPress project itself. It's also the recommended tool for Gutenberg development. 
 -->
WordPress コミュニティでは、ローカルに WordPress 環境を構築するツールが数多く提供されています。ブロックエディターハンドブックでは、オープンソースで WordPress プロジェクト自身が保守している `wp-env` を取り上げます。これはまた Gutenberg 開発における推奨ツールです。

<!-- 
Refer to the [Get started with `wp-env`](/docs/getting-started/devenv/get-started-with-wp-env.md) guide for setup instructions.
 -->
セットアップ方法については、[wp-env 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-env/) ガイドを参照してください。

<!-- 
<div class="callout callout-info">
    Throughout the Handbook, you may also see references to <code><a href="https://github.com/WordPress/playground-tools/tree/trunk/packages/wp-now">wp-now</a></code>. This is a lightweight tool powered by <a hre="https://developer.wordpress.org/playground/">WordPress Playground</a> that streamlines setting up a simple local WordPress environment. While still experimental, this tool is great for quickly testing WordPress releases, plugins, and themes. 
</div>
 -->

> またハンドブック全体を通して、<code><a href="https://github.com/WordPress/playground-tools/tree/trunk/packages/wp-now">wp-now</a></code> への言及を目にすることがあるかもしれません。これは <a hre="https://developer.wordpress.org/playground/">WordPress Playground</a> を利用した軽量なツールで、シンプルなローカル WordPress 環境のセットアップを効率化します。まだ実験段階ですが、WordPress のリリース、プラグイン、テーマを素早くテストするのに適しています。

<!-- 
This list is not exhaustive, but here are several additional options to choose from if you prefer not to use `wp-env`:
 -->
完全なリストではありませんが、`wp-env` を使いたくない場合の選択肢をいくつか紹介します。

- [Local](https://localwp.com/)
- [WP Studio](https://developer.wordpress.com/studio/)
- [XAMPP](https://www.apachefriends.org/)
- [MAMP](https://www.mamp.info/en/mamp/mac/)
- [Varying Vagrant Vagrants](https://varyingvagrantvagrants.org/) (VVV)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/devenv/README.md)
