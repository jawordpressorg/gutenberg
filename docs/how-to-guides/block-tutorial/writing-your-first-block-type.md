<!--
# Writing Your First Block Type
 -->
<!-- 
# 初めてのブロックタイプ
 -->
<!--
To keep things simple for our first example, let's create a new block type which displays a styled message in a post. At this point, we won't allow the user to edit the message. We'll learn more about editable fields in later sections.

Blocks containing static content are implemented entirely in JavaScript using the `registerBlockType` function. This function is responsible for specifying the blueprint of a block, describing the behaviors necessary for the editor to understand how it appears, changes when edited, and is ultimately saved in the post's content.
 -->
<!-- 
できる限り簡単な最初のサンプルとして、投稿にスタイル付きメッセージを表示する新しいブロックタイプを作成します。この時点ではまだユーザーはメッセージを編集できませんが、後のセクションで編集可能なフィールドについて学習していきます。

静的コンテンツを含むブロックは `registerBlockType` 関数を使用すると完全に JavaScript 内で実装できます。`registerBlockType` 関数はブロックの設計の提示に責任を持ち、エディターに対して表示に必要な振る舞いを伝え、編集されれば変更し、全体を投稿コンテンツ内に保存します。
 -->
<!--
## Enqueuing Block Scripts
 -->
<!-- 
# Create a basic block
 -->
# 基本的なブロックの作成
<!-- 
This guide takes you through creating a basic block to display a message in a post. This message will be fixed, we won't allow the user to edit the message, the goal of the guide is to show how to register and load a block.
 -->
このガイドでは、投稿にメッセージを表示する基本的なブロックの作成方法を説明します。このメッセージは決め打ちで、ユーザーはメッセージを編集できません。このガイドは、ブロックの登録と読み込み方法の解説を目的とします。

<!-- 
## Overview
 -->
## 概要

<!-- 
There are two main types of blocks: static and dynamic, this guide focuses on static blocks. A static block is used to insert HTML content into the post and save it with the post. A dynamic block builds the content on the fly when rendered on the front end, see the [dynamic blocks guide](/docs/how-to-guides/block-tutorial/creating-dynamic-blocks.md).
 -->
ブロックには大きく分けて静的ブロックと動的ブロックがありますが、このガイドでは静的ブロックに焦点を当てます。静的ブロックは、HTML コンテンツを投稿に挿入し、投稿と一緒に保存するために使用されます。動的ブロックは、フロントエンドでレンダーれる際に、その場でコンテンツを構築します。[動的ブロックガイド](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/)を参照してください。

<!-- 
This guide focuses on just the block, see the [Create a Block tutorial](/docs/getting-started/create-block/README.md) for a complete setup.
 -->
このガイドではブロックだけを取り上げていますが、完全なセットアップについては [ブロックの作成チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/getting-started/create-block/) をご覧ください。

<!--
The `editor_script` and `editor_style` files will only be enqueued in the editor, while the `script` and `style` will be enqueued both in the editor and when viewing a post on the front of your site.
 -->
<!--  
## ブロックスクリプトのエンキュー
 -->
<!-- 
エディターでのブロックの振る舞いは JavaScript 内で実装できますが、サーバーサイドではブロックを登録してエディターがロードされた際にスクリプトをエンキューする必要があります。スクリプトとスタイルはそれぞれ [`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/) と [`wp_register_style`](https://developer.wordpress.org/reference/functions/wp_register_style/) を使用して登録します。次にブロックタイプ登録設定 `script`、`style`、`editor_script`、`editor_style`を使用して、これらをブロックに関連付けるハンドルとして割り当てます。

`editor_script` と `editor_style` ファイルはエディター内のみにエンキューされますが、`script` と `style` はエディターとサイトで投稿が表示される場合の両方でエンキューされます。
 -->
<!-- 
## Before you start
 -->
## はじめる前に

<!-- 
Static blocks are implemented in JavaScript, so a basic level of JavaScript is helpful, see the [Getting Started with JavaScript](/docs/how-to-guides/javascript/README.md) for a refresher.
 -->
静的ブロックは JavaScript で実装されているため、JavaScript の基礎知識があると便利です。復習のために[JavaScript 入門](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/) を参照してください。

<!-- 
Blocks are added to WordPress using plugins, so you will need:
 -->
ブロックはプラグインを使用して WordPress に追加されます。そのため、以下が必要です。

<!-- 
-   WordPress development environment, see [setup guide](/docs/getting-started/devenv/README.md)
-   JavaScript build tools (node/npm) if using JSX example
 -->
-   WordPress 開発環境。[セットアップガイド](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/) 参照
-   JSX の例を使用する場合、JavaScript ビルドツール (node/npm)

<!-- 
## Step-by-step guide
 -->
## ステップバイステップガイド

<!-- 
### Step 1: Configure block.json
 -->
### ステップ 1: block.json の構成

<!-- 
The functions of a static block are defined in JavaScript, however the settings and other metadata should be defined in a block.json file.
 -->
静的ブロックの機能は JavaScript で定義しますが、設定などのメタデータは block.json ファイルで定義する必要があります。

<!-- 
Here are the basic settings:
 -->
基本の設定は以下のとおりです。

<!-- 
-   `apiVersion`: Block API version
-   `title`: Block title shown in inserter
-   `name`: Unique name defines your block
-   `category`: Category in inserter (text, media, design, widgets, theme, embed)
-   `icon`: Dashicon icon displayed for block
-   `editorScript`: JavaScript file to load for block
 -->
-   `apiVersion`: ブロック API バージョン
-   `title`: インサーターに表示されるブロックのタイトル
-   `name`: ブロックを定義する一意の名前
-   `category`: インサーターでのカテゴリー (text, media, design, widgets, theme, embed)
-   `icon`: ブロックで表示される Dashicon アイコン
-   `editorScript`: ブロックでロードする JavaScript ファイル
<!-- 
The `block.json` file should be added to your plugin. To start a new plugin, create a directory in `/wp-content/plugins/` in your WordPress.
 -->
`block.json` ファイルをプラグインに追加する必要があります。新しいプラグインを作成するには、WordPressの `/wp-content/plugins/` にディレクトリを作成します。

<!-- 
Create a basic `block.json` file there:
 -->
そこに基本的な `block.json` ファイルを作成します。

**JSX**
<!-- 
{% codetabs %}
{% JSX %}
 -->
```json
{
	"apiVersion": 2,
	"name": "gutenberg-examples/example-01-basic-esnext",
	"title": "Example: Basic (ESNext)",
	"icon": "universal-access-alt",
	"category": "layout",
	"editorScript": "file:./build/index.js"
}
```

<!--
Note the above example, shows using the [wp-scripts build step](/docs/how-to-guides/javascript/js-build-setup/) that automatically sets dependencies and versions the file.
-->
**Plain**
<!-- 
{% Plain %}
 -->
```json
{
	"apiVersion": 2,
	"title": "Example: Basic",
	"name": "gutenberg-examples/example-01-basic",
	"category": "layout",
	"icon": "universal-access-alt",
	"editorScript": "file:./block.js"
}
```
<!-- 
{% end %}
 -->

<!--
-   **`wp-blocks`** includes block type registration and related functions
-   **`wp-element`** includes the [WordPress Element abstraction](/packages/element/README.md) for describing the structure of your blocks
 -->
<!-- 
注意: 上の例では [wp-scripts ビルド手順](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/js-build-setup/) を使用して自動的に依存性やファイルのバージョンを設定しています。

Plain コードを使用する場合には、依存性の配列として `array( 'wp-blocks', 'wp-element' )` を指定してください。完全な構文については Gutenberg Examples リポジトリー内の [example 01](https://github.com/WordPress/gutenberg-examples/blob/HEAD/01-basic/index.php) を参照してください。

- __`wp-blocks`__ ブロックタイプの登録および関連する関数を含む
- __`wp-element`__ ブロックの構造を記述する [WordPress Element abstraction](/packages/element/README.md) を含む
 -->
<!--
## Registering the Block

With the script enqueued, let's look at the implementation of the block itself:
 -->
<!-- 
## ブロックの登録
 -->
<!-- 
### Step 2: Register block in plugin
 -->
### ステップ 2: プラグインでのブロックの登録

<!-- 
With the `block.json` in place, the registration for the block is a single function call in PHP, this will setup the block and JavaScript file specified in the `editorScript` property to load in the editor.
 -->
`block.json`があれば、ブロックの登録は、PHPの1つの関数を呼び出すだけで済みます。ブロックと `editorScript` プロパティで指定された JavaScript ファイルがエディタに読み込まれます。

<!-- 
Create a full plugin file, `index.php` like the following, the same PHP code works for both JSX and Plain code.
 -->
以下のように、完全なプラグインファイル `index.php` を作成します。同じ PHP コードが、JSX と Plain の両方のコードで機能します。

```php
<?php
/**
 * Plugin Name: Gutenberg examples 01
 */
function gutenberg_examples_01_register_block() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'gutenberg_examples_01_register_block' );
```

<!-- 
### Step 3: Block edit and save functions
 -->
### ステップ 3: ブロックの edit 関数と save 関数

<!-- 
The `editorScript` entry is enqueued automatically in the block editor. This file contains the JavaScript portion of the block registration and defines two important functions for the block, the `edit` and `save` functions.
 -->
ブロックエディターでは、`editorScript` エントリが自動的にキューに入れられます。このファイルには、ブロック登録のためのJavaScript 部分が含まれ、ブロックの2つの重要な関数、 `edit` と `save` 関数を定義します。

<!-- 
The `edit` function is a component that is shown in the editor when the block is inserted.
 -->
`edit` 関数は、ブロックが挿入されたときにエディタに表示されるコンポーネントです。

<!-- 
The `save` function is a component that defines the final markup returned by the block and saved in `post_content`.
 -->
`save` 関数は、ブロックが返し、`post_content` に保存される、最終的なマークアップを定義するコンポーネントです。

<!-- 
エンキューされるスクリプトでブロックの実装を確認します。
 -->
**JSX**
<!-- 
{% codetabs %}
{% JSX %}
 -->

<!-- 
Add the following in `src/index.js`
 -->
次のコードを `src/index.js` に追加してください。

```jsx
/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

// Register the block
registerBlockType( 'gutenberg-examples/example-01-basic-esnext', {
	edit: function () {
		return <p> Hello world (from the editor)</p>;
	},
	save: function () {
		return <p> Hola mundo (from the frontend) </p>;
	},
} );
```

**Plain**
<!-- 
{% Plain %}
 -->

<!-- 
Add the following to `block.js`
 -->
次のコードを `block.js` に追加してください。

```js
( function ( blocks, element ) {
	var el = element.createElement;

	blocks.registerBlockType( 'gutenberg-examples/example-01-basic', {
		edit: function () {
			return el( 'p', {}, 'Hello World (from the editor).' );
		},
		save: function () {
			return el( 'p', {}, 'Hola mundo (from the frontend).' );
		},
	} );
} )( window.wp.blocks, window.wp.element );
```
<!-- 
{% end %}
 -->
<!--
_By now you should be able to see `Hello World (from the editor).` in the admin side and `Hello World (from the frontend).` on the frontend side._
 -->
<!--  
_この段階でエディター画面には `Hello World (from the editor).`、投稿を表示すると `Hello World (from the frontend).` と表示されます。_
 -->
<!--
Once a block is registered, you should immediately see that it becomes available as an option in the editor inserter dialog, using values from `title`, `icon`, and `category` to organize its display. You can choose an icon from any included in the built-in [Dashicons icon set](https://developer.wordpress.org/resource/dashicons/), or provide a [custom svg element](/docs/reference-guides/block-api/block-registration.md#icon-optional).
-->

<!-- 
NOTE: If using the JSX version, you need to run `npm run build` and it will create the JavaScript file that is loaded in the editor at `build/index.js`
 -->
注意: JSX 版を使用する場合は、`npm run build` を実行する必要があります。エディタで読み込まれる JavaScript ファイルが `build/index.js` に作成されます。

<!-- 
### Step 4: Confirm
 -->
### 手順 4: 確認
<!-- 
Open your editor and try adding your new block. It will show in the inserter using the `title`.
When inserted you will see the `Hello World (from the editor)` message.
 -->
エディターを開いて、新しいブロックを追加してください。インサーターに `title` を使用して、表示されます。
挿入されると、メッセージ「`Hello World (from the editor)`」が表示されます。

<!-- 
When you save the post and view it published, you will see the `Hola mundo (from the frontend)` message.
 -->
投稿を保存して、公開された投稿を見ると、メッセージ「`Hola mundo (from frontend)`」が表示されます。

<!-- 
**Troubleshooting** - If you run into any issues, here are a few things to try:
 -->
**トラブルシューティング** - もし、問題が発生した場合は、以下を試してみてください。
<!-- 
-   Check the filenames are correct and loading properly,
-   Check the developer console in your browser for errors,
-   If using JSX remember to build after each change
 -->
-   ファイル名が正しく、適切に読み込まれていることを確認してください。
-   ブラウザの開発者コンソールで、エラーを確認してください。
-   JSXを使用する場合は、変更するたびに忘れずにビルドしてください
<!-- 
## Conclusion
 -->
## まとめ
<!-- 
This shows the most basic static block. The [gutenberg-examples](https://github.com/WordPress/gutenberg-examples) repository has complete examples for both.
 -->
最も基本的な静的ブロックを示しました。[gutenberg-examples](https://github.com/WordPress/gutenberg-examples)リポジトリには、両方の完全な例があります。
<!-- 
-   [Basic example with JSX build](https://github.com/WordPress/gutenberg-examples/tree/trunk/01-basic-esnext)

-   [Basic example plain JavaScript](https://github.com/WordPress/gutenberg-examples/tree/trunk/01-basic),
 -->
-   [JSX ビルドの基本的な例](https://github.com/WordPress/gutenberg-examples/tree/trunk/01-basic-esnext)

-   [Plain な JavaScript の基本的な例](https://github.com/WordPress/gutenberg-examples/tree/trunk/01-basic),
<!-- 
**NOTE:** The examples include a more complete block setup with translation features included, it is recommended to follow those examples for a production block. The internationalization features were left out of this guide for simplicity and focusing on the very basics of a block.
 -->
**注意:** 例には、翻訳機能を含む完全なブロックのセットアップがあります。本番用のブロックでは例に従ってください。このガイドでは、簡便性と、ブロックの非常に基本的な部分に焦点を当てるため、国際化は省かれています。

<!-- 
### Additional
 -->
### 追加の情報

<!-- 
A couple of things to note when creating your blocks:
 -->
ブロックを作成する際の注意点です。

<!-- 
-   A block name must be prefixed with a namespace specific to your plugin. This helps prevent conflicts when more than one plugin registers a block with the same name. In this example, the namespace is `gutenberg-examples`.

-   Block names _must_ include only lowercase alphanumeric characters or dashes and start with a letter. Example: `my-plugin/my-custom-block`.
 -->
-   ブロック名には、プラグインに固有の名前空間をプレフィックスとして付ける必要があります。これは、複数のプラグインが同じ名前のブロックを登録した際に、衝突を防ぎます。この例では、名前空間は `gutenberg-examples` です。

-   ブロック名は、小文字の英数字またはダッシュのみを含み、文字で始まらなければなりません。例: `my-plugin/my-custom-block`.

<!-- 
### Resources
 -->
### リソース

<!-- 
-   block.json [metadata reference](/docs/reference-guides/block-api/block-metadata.md) documentation

-   Block [edit and save function reference](/docs/reference-guides/block-api/block-edit-save.md)

-   [Dashicons icon set](https://developer.wordpress.org/resource/dashicons/)
 -->
-   block.json [メタデータリファレス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) ドキュメント

-   ブロック [edit と save 関数リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/)

-   [Dashicons アイコンセット](https://developer.wordpress.org/resource/dashicons/)


<!--
The `edit` and `save` functions describe the structure of your block in the context of the editor and the saved content respectively. While the difference is not obvious in this simple example, in the following sections we'll explore how these are used to enable customization of the block in the editor preview.
 -->
<!--  
いったんブロックが登録されるとすぐにエディター挿入ダイアログのオプションとして利用可能になります。また `title`、`icon`、`category` の値を使用していることがわかります。アイコンは組み込みの [Dashicons アイコンセット](https://developer.wordpress.org/resource/dashicons/) から選択するか、[カスタム SVG 要素](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/#icon-optional) を指定できます。

ブロック名はプラグイン専用の名前空間をプレフィックスに付ける必要があります。こうすることで2つ以上のプラグインが同じ名前でブロックを登録しても衝突を避けられます。この例では名前空間は `gutenberg-examples` です。

ブロック名は英数小文字かダッシュのみで指定し、文字で始まる必要があります。例: `my-plugin/my-custom-block`.

`edit` 関数と `save` 関数ではそれぞれエディターコンテキストでのブロックの構造と、保存されるコンテンツを記述します。この簡単な例では違いがはっきりしませんが、次のセクションでエディタープレビューでブロックのカスタマイズを行う際に、これらがどのように使用されるかを見ます。
 -->
[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/block-tutorial/writing-your-first-block-type.md)
