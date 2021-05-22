<!--
# Create a Block Tutorial
 -->
# ブロックの作成 チュートリアル

<!--
Let's get you started creating your first block for the WordPress Block Editor. We will create a simple block that allows the user to type a message and style it.

The tutorial includes setting up your development environment, tools, and getting comfortable with the new development model. If you are already comfortable, try the quick start below, otherwise step through whatever part of the tutorial you need.
 -->
WordPress ブロックエディター用のはじめてのブロックを作りましょう。ここではユーザーがメッセージを入力しスタイリングできるシンプルなブロックを作成します。

このチュートリアルには開発環境とツールのセットアップの他に、新しい開発モデルに親しむという目的が含まれています。すでに親しんでいる方は、以下のクイックスタートを試すかチュートリアルの必要な箇所にジャンプしてください。

<!--
## Prerequisites
 -->
## 前提ソフトウエア

<!--
The first thing you need is a development environment and tools. This includes setting up your WordPress environment, Node, NPM, and your code editor. If you need help, see the [setting up your development environment documentation](/docs/getting-started/tutorials/devenv/README.md).
 -->
最初に開発環境とツールが必要です。これには WordPress 環境、Node、NPM、コードエディターが含まれます。詳細は [開発環境のセットアップドキュメント](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/devenv/) を参照してください。

<!--
## Quick Start
 -->
## クイックスタート
<!--
The `@wordpress/create-block` package exists to create the necessary block scaffolding to get you started. See [create-block package documentation](https://www.npmjs.com/package/@wordpress/create-block) for additional features. This quick start assumes you have a development environment with node installed, and a WordPress site.

From your plugins directory, to create your block run:
 -->
`@wordpress/create-block` パッケージはブロックを作成する際に必要なブロックのひな形を作成します。詳細については [create-block パッケージのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/)を参照してください。このクイックスタートは node や WordPress サイトを含む開発環境があることを仮定します。

プラグイン用ディレクトリで次のコマンド実行してブロックを作成します。

```sh
npx @wordpress/create-block gutenpride
```

<!--
The above command creates a new directory called `gutenpride`, installs the necessary files, and builds the block plugin. If you want an interactive mode that prompts you for details, run the command without the `gutenpride` name.

You now need to activate the plugin from inside wp-admin plugins page.

After activated, go to the block editor and use the inserter to search and add your new block.
 -->
上のコマンドは新しいディレクトリ `gutenpride` を作成し、必要なファイルをインストールし、ブロックプラグインをビルドします。対話モードを使用して詳細を1つずつ指定するには、名前 `gutenpride` を指定せずにコマンドを実行してください。

管理画面のプラグインページでプラグインを有効化します。

有効化後、ブロックエディターに行き、インサーターを使用して新しいブロックを検索し、追加してください。

<!--
## Table of Contents
 -->
## 目次
<!--
The create a block tutorials breaks down to the following sections.

1. [WordPress Plugin](/docs/getting-started/tutorials/create-block/wp-plugin.md)
2. [Anatomy of a Gutenberg Block ](/docs/getting-started/tutorials/create-block/block-anatomy.md)
3. [Block Attributes](/docs/getting-started/tutorials/create-block/attributes.md)
4. [Code Implementation](/docs/getting-started/tutorials/create-block/block-code.md)
5. [Authoring Experience](/docs/getting-started/tutorials/create-block/author-experience.md)
6. [Finishing Touches](/docs/getting-started/tutorials/create-block/finishing.md)
7. [Share your Block with the World](/docs/getting-started/tutorials/create-block/submitting-to-block-directory.md)
 -->
「ブロックの作成 チュートリアル」は以下のセクションに分かれます。

1. [WordPress プラグイン](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/wp-plugin/)
2. [Gutenberg Block の詳細](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/block-anatomy/)
3. [ブロックの属性](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/attributes/)
4. [コードの実装](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/block-code/)
5. [執筆エクスペリエンス](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/author-experience/)
6. [最後の仕上げ](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/finishing/)
7. [ブロックの共有](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/submitting-to-block-directory/)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/tutorials/create-block/README.md)
