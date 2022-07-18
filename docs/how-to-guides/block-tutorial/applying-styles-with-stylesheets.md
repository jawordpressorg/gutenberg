<!--
# Applying Styles From a Stylesheet
 -->
<!--  
# スタイルシートによるスタイルの適用
 -->
<!--
In the [previous section](/docs/how-to-guides/block-tutorial/writing-your-first-block-type.md), the block had applied its own styles by an inline `style` attribute. While this might be adequate for very simple components, you will quickly find that it becomes easier to write your styles by extracting them to a separate stylesheet file.
 -->
<!-- 
[前のセクション](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/)でブロックはインラインの `style` 属性でスタイルを適用しました。シンプルなコンポーネントであればこの方法でも構いませんが、スタイルは別のスタイルシートファイルに書いたほうが便利です。
 -->
<!--
The editor will automatically generate a class name for each block type to simplify styling. It can be accessed from the object argument passed to the edit and save functions. In this section, we will create a stylesheet to use that class name.
 -->
<!-- 
各ブロックタイプで簡単にスタイルできるようエディターは自動的にクラス名を生成します。クラス名は edit 関数、save 関数に渡される object 引数でアクセスできます。このセクションではクラス名を使用するスタイルシートを作成します。
 -->
<!-- 
# Use styles and stylesheets
 -->
# スタイルとスタイルシートの利用

<!-- 
## Overview
 -->
## 概要

<!-- 
A block typically inserts markup (HTML) into post content that you want to style in someway. This guides walks through a few different ways you can use CSS with the block editor and how to work with styles and stylesheets.
 -->
ブロックは、通常、スタイルを設定する投稿コンテンツにマークアップ (HTML) を挿入します。このガイドでは、ブロックエディタで CSS を使用するいくつかの方法と、スタイルとスタイルシートの操作方法について説明します。

<!-- 
## Before you start
 -->
## はじめる前に

このガイドで紹介する例を実装するには、基本的なブロックと WordPress の開発環境が必要です。[基本ブロックの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/) または [ブロックチュートリアル](https://ja.wordpress.org/team/handbook/block-editor/getting-started/create-block/) を参照して、セットアップしてください。

<!-- 
## Methods to add style
 -->
## スタイルを追加する方法

<!-- 
The following are different methods you can use to add style to your block, either in the editor or when saved.
 -->
以下では、エディター内部または保存時に、ブロックへスタイルを追加する異なる方法を紹介します。

<!-- 
## Method 1: Inline style
 -->
## 方法 1: インラインスタイル

<!-- 
The first method shows adding the style inline. This transforms the defined style into a property on the element inserted.
 -->
最初の方法では、インラインスタイルを追加します。定義されたスタイルを、挿入される要素上のプロパティに変換します。

<!-- 
The `useBlockProps` React hook is used to set and apply properties on the block's wrapper element. The following example shows how:
 -->
`useBlockProps` React フックを使用して、ブロックのラッパー要素にプロパティをセットし、適用します。以下に例を示します。

**JSX**
<!-- 
{% codetabs %}
{% JSX %}
 -->
```jsx
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-02-stylesheets', {
	edit() {
		const greenBackground = {
			backgroundColor: '#090',
			color: '#fff',
			padding: '20px',
		};

		const blockProps = useBlockProps( { style: greenBackground } );

		return (
			<p { ...blockProps }>Hello World (from the editor, in green).</p>
		);
	},
	save() {
		const redBackground = {
			backgroundColor: '#900',
			color: '#fff',
			padding: '20px',
		};

		const blockProps = useBlockProps.save( { style: redBackground } );

		return (
			<p { ...blockProps }>Hello World (from the frontend, in red).</p>
		);
	},
} );
```
**Plain**
<!-- 
{% Plain %}
 -->
```js
( function ( blocks, element, blockEditor ) {
	var el = element.createElement;

	blocks.registerBlockType( 'gutenberg-examples/example-02-stylesheets', {
		edit: function ( props ) {
			const greenBackground = {
				backgroundColor: '#090',
				color: '#fff',
				padding: '20px',
			};
			const blockProps = blockEditor.useBlockProps( {
				style: greenBackground,
			} );
			return el(
				'p',
				blockProps,
				'Hello World (from the editor, in green).'
			);
		},
		save: function () {
			const redBackground = {
				backgroundColor: '#090',
				color: '#fff',
				padding: '20px',
			};
			const blockProps = blockEditor.useBlockProps.save( {
				style: redBackground,
			} );
			return el(
				'p',
				blockProps,
				'Hello World (from the frontend, in red).'
			);
		},
	} );
} )( window.wp.blocks, window.wp.element, window.wp.blockEditor );
```
<!-- 
{% end %}
 -->
<!-- 
## Method 2: Block classname
 -->
## 方法 2: ブロックのクラス名

<!-- 
The inline style works well for a small amount of CSS to apply. If you have much more than the above you will likely find that it is easier to manage with them in a separate stylesheet file.
 -->
インラインスタイルは、適用するCSSの量が少ない場合にはうまく動作します。しかし、多くの CSS がある場合は、別のスタイルシートファイルで管理する方が簡単でしょう。

<!-- 
The `useBlockProps` hooks includes the classsname for the block automatically, it generates a name for each block using the block's name prefixed with `wp-block-`, replacing the `/` namespace separator with a single `-`.
 -->
`useBlockProps` フックは、ブロックのクラス名を自動的に含めます。ブロックの名前の前に `wp-block-` を付け、名前空間セパレータ「`/`」を1つの「`-`」に置き換えて、クラス名を生成します。

<!-- 
For example the block name: `gutenberg-examples/example-02-stylesheets` would get the classname: `wp-block-gutenberg-examples-example-02-stylesheets`. It might be a bit long but best to avoid conflicts with other blocks.
 -->
例えば、ブロック名「`gutenberg-examples/example-02-stylesheets`」は、クラス名「`wp-block-gutenberg-examples-example-02-stylesheets`」になります。少し長いかもしれませんが、他のブロックとの衝突を避けるためには最適です。

**JSX**
<!-- 
{% codetabs %}
{% JSX %}
 -->
```jsx
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-02-stylesheets', {
	edit() {
		const blockProps = useBlockProps();

		return (
			<p { ...blockProps }>Hello World (from the editor, in green).</p>
		);
	},
	save() {
		const blockProps = useBlockProps.save();

		return (
			<p { ...blockProps }>Hello World (from the frontend, in red).</p>
		);
	},
} );
```

**Plain**
<!-- 
{% Plain %}
 -->
```js
( function ( blocks, element, blockEditor ) {
	var el = element.createElement;

	blocks.registerBlockType( 'gutenberg-examples/example-02-stylesheets', {
		edit: function ( props ) {
			var blockProps = blockEditor.useBlockProps();
			return el(
				'p',
				blockProps,
				'Hello World (from the editor, in green).'
			);
		},
		save: function () {
			var blockProps = blockEditor.useBlockProps.save();
			return el(
				'p',
				blockProps,
				'Hello World (from the frontend, in red).'
			);
		},
	} );
} )( window.wp.blocks, window.wp.element, window.wp.blockEditor );
```
<!-- 
{% end %}
 -->
<!--
The class name is generated using the block's name prefixed with `wp-block-`, replacing the `/` namespace separator with a single `-`.
 -->
<!--  
クラス名はブロック名の前に `wp-block-` を付け、名前空間セパレーター `/` を `-` で置換して生成されます。
 -->
<!--
## Enqueueing Editor and Front end Assets
-->

<!-- 
### Enqueue stylesheets
 -->
### スタイルシートのエンキュー

<!-- 
Like scripts, you can enqueue your block's styles using the `block.json` file.
 -->
スクリプトと同様に、ブロックのスタイルも `block.json` ファイルを使用してエンキューできます。

<!-- 
Use the `editorStyle` property to a CSS file you want to load in the editor view, and use the `style` property for a CSS file you want to load on the frontend when the block is used.
 -->
エディタービューでロードしたい CSS ファイルには `editorStyle` プロパティを、ブロックが使用されたときにフロントエンドでロードしたい CSS ファイルには `style` プロパティを使用します。

<!-- 
For example:
 -->
例:

<!--
Let's move on into code. Create a file called `editor.css`:
 -->
<!-- 
## エディターアセットとフロントエンドアセットのエンキュー

スクリプト同様、ブロックのスタイルもエンキューする必要があります。以前のセクションで説明したように、スタイルの `editor_style` ハンドルはエディター画面への適用に対してのみ使用し、エディターとサイトのフロントエンドの両方に適用される共通スタイルには `style` ハンドルを使用します。

`style` でエンキューされるスタイルシートは基本のスタイルで最初にロードされ、`editor_style` スタイルシートは後でロードされます。

コードで見ていきます。ファイル `editor.css` を作成してください。
 -->
```json
{
	"apiVersion": 2,
	"name": "gutenberg-examples/example-02-stylesheets",
	"title": "Example: Stylesheets",
	"icon": "universal-access-alt",
	"category": "layout",
	"editorScript": "file:./block.js",
	"editorStyle": "file:./editor.css",
	"style": "file:./style.css"
}
```
<!-- 
So in your plugin directory, create an `editor.css` file to load in editor view:
 -->
プラグインディレクトリに、エディタビューで読み込む `editor.css` ファイルを作成します。

```css
/* green background */
.wp-block-gutenberg-examples-example-02-stylesheets {
	background: #090;
	color: white;
	padding: 20px;
}
```
<!--
And a new `style.css` file containing:
 -->
<!--  
新しい `style.css` ファイルは以下を含みます。
 -->

<!--  
And a `style.css` file to load on the frontend:
 --> 
そして、フロントエンドで読み込む `style.css` ファイルです。

```css
/* red background */
.wp-block-gutenberg-examples-example-02-stylesheets {
	background: #900;
	color: white;
	padding: 20px;
}
```
<!--
Configure your plugin to use these new styles:
 -->
<!--  
新しいスタイルを使用するようにプラグインを構成します。
 -->
<!--  
```php
<?php
/**
 * Plugin Name: Gutenberg Examples Stylesheets
 */

function gutenberg_examples_02_register_block() {
	wp_register_script(
		'gutenberg-examples-02',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);

	wp_register_style(
		'gutenberg-examples-02-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	wp_register_style(
		'gutenberg-examples-02',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	// Allow inlining small stylesheets on the frontend if possible.
	wp_style_add_data( 'gutenberg-examples-02', 'path', dirname( __FILE__ ) . '/style.css' );

	register_block_type( 'gutenberg-examples/example-02-stylesheets', array(
		'api_version' => 2,
		'style' => 'gutenberg-examples-02',
		'editor_style' => 'gutenberg-examples-02-editor',
		'editor_script' => 'gutenberg-examples-02',
	) );
}
add_action( 'init', 'gutenberg_examples_02_register_block' );
```
 -->
<!-- 
The files will automatically be enqueued when specified in the block.json.
 -->
block.jsonで指定されたファイルは、自動的にエンキューされます。

<!-- 
**Note:** If you have multiple files to include, you can use standard `wp_enqueue_style` functions like any other plugin or theme. You will want to use the following hooks for the block editor:
 -->
**注意:** インクルードするファイルが複数ある場合は、他のプラグインやテーマと同様に、標準の `wp_enqueue_style` 関数を使用できます。ブロックエディタでは、以下のフックを使用できます。

<!-- 
-   `enqueue_block_editor_assets` - to load only in editor view
-   `enqueue_block_assets` - loads both on frontend and editor view
 -->
-   `enqueue_block_editor_assets` - エディタービューのみにロードする
-   `enqueue_block_assets` - フロントエンドとエディタービューの両方にロードする

<!-- 
## Conclusion
 -->
## まとめ

<!-- 
This guide showed a couple of different ways to apply styles to your block, by either inline or in its own style sheet. Both of these methods use the `useBlockProps` hook, see the [block wrapper reference documentation](/docs/reference-guides/block-api/block-edit-save.md#block-wrapper-props) for additional details.
 -->
このガイドでは、インラインまたは独自のスタイルシートによって、ブロックにスタイルを適用する方法を紹介しました。この方法はどちらも `useBlockProps` フックを使用します。詳細については、 [ブロックラッパーリファレンスドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/#block-wrapper-props) を参照してください。

<!-- 
See the complete [example-02-stylesheets](https://github.com/WordPress/gutenberg-examples/tree/trunk/blocks-non-jsx/02-stylesheets) code in the [gutenberg-examples repository](https://github.com/WordPress/gutenberg-examples).
 -->
完全なサンプルコードは [gutenberg-examples リポジトリ](https://github.com/WordPress/gutenberg-examples) 内の [example-02-stylesheets](https://github.com/WordPress/gutenberg-examples/tree/trunk/blocks-non-jsx/02-stylesheets) を参照してください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/block-tutorial/applying-styles-with-stylesheets.md)
