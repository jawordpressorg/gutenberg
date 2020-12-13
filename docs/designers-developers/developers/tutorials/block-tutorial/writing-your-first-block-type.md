<!-- 
# Writing Your First Block Type
 -->
# 初めてのブロックタイプ

<!-- 
To keep things simple for our first example, let's create a new block type which displays a styled message in a post. At this point, we won't allow the user to edit the message. We'll learn more about editable fields in later sections.

Blocks containing static content are implemented entirely in JavaScript using the `registerBlockType` function. This function is responsible for specifying the blueprint of a block, describing the behaviors necessary for the editor to understand how it appears, changes when edited, and is ultimately saved in the post's content.
 -->
できる限り簡単な最初のサンプルとして、投稿にスタイル付きメッセージを表示する新しいブロックタイプを作成します。この時点ではまだユーザーはメッセージを編集できませんが、後のセクションで編集可能なフィールドについて学習していきます。

静的コンテンツを含むブロックは `registerBlockType` 関数を使用すると完全に JavaScript 内で実装できます。`registerBlockType` 関数はブロックの設計の提示に責任を持ち、エディターに対して表示に必要な振る舞いを伝え、編集されれば変更し、全体を投稿コンテンツ内に保存します。

<!-- 
## Enqueuing Block Scripts

While the block's editor behaviors are implemented in JavaScript, you'll need to register your block server-side to ensure that the script is enqueued when the editor loads. Register scripts and styles using [`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/) and [`wp_register_style`](https://developer.wordpress.org/reference/functions/wp_register_style/), then assign these as handles associated with your block using the `script`, `style`, `editor_script`, and `editor_style` block type registration settings. 

The `editor_script` and `editor_style` files will only be enqueued in the editor, while the `script` and `style` will be enqueued both in the editor and when viewing a post on the front of your site.
 -->
## ブロックスクリプトのエンキュー

エディターでのブロックの振る舞いは JavaScript 内で実装できますが、サーバーサイドではブロックを登録してエディターがロードされた際にスクリプトをエンキューする必要があります。スクリプトとスタイルはそれぞれ [`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/) と [`wp_register_style`](https://developer.wordpress.org/reference/functions/wp_register_style/) を使用して登録します。次にブロックタイプ登録設定 `script`、`style`、`editor_script`、`editor_style`を使用して、これらをブロックに関連付けるハンドルとして割り当てます。 

`editor_script` と `editor_style` ファイルはエディター内のみにエンキューされますが、`script` と `style` はエディターとサイトで投稿が表示される場合の両方でエンキューされます。

```php
<?php
/*
Plugin Name: Gutenberg examples 01
*/
function gutenberg_examples_01_register_block() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'gutenberg-examples-01-esnext',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type( 'gutenberg-examples/example-01-basic-esnext', array(
		'apiVersion' => 2,
		'editor_script' => 'gutenberg-examples-01-esnext',
	) );

}
add_action( 'init', 'gutenberg_examples_01_register_block' );
```

<!-- 
Note the above example, shows using the [wp-scripts build step](/docs/designers-developers/developers/tutorials/javascript/js-build-setup/) that automatically sets dependencies and versions the file. 

If you were using the ES5 code, you would specify `array( 'wp-blocks', 'wp-element' )` as the dependency array. See the [example 01](https://github.com/WordPress/gutenberg-examples/blob/master/01-basic/index.php) in Gutenberg Examples repository for full syntax.

- __`wp-blocks`__ includes block type registration and related functions
- __`wp-element`__ includes the [WordPress Element abstraction](/packages/element/README.md) for describing the structure of your blocks
 -->
注意: 上の例では [wp-scripts ビルド手順](https://ja.wordpress.org/team/handbook/block-editor/tutorials/javascript/js-build-setup/) を使用して自動的に依存性やファイルのバージョンを設定しています。 

ES5 コードを使用する場合には、依存性の配列として `array( 'wp-blocks', 'wp-element' )` を指定してください。完全な構文については Gutenberg Examples リポジトリー内の [example 01](https://github.com/WordPress/gutenberg-examples/blob/master/01-basic/index.php) を参照してください。

- __`wp-blocks`__ ブロックタイプの登録および関連する関数を含む
- __`wp-element`__ ブロックの構造を記述する [WordPress Element abstraction](/packages/element/README.md) を含む

<!-- 
## Registering the Block

With the script enqueued, let's look at the implementation of the block itself:
 -->

## ブロックの登録

エンキューされるスクリプトでブロックの実装を確認します。

**ESNext**

{% codetabs %}
{% ESNext %}
```jsx
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

const blockStyle = {
	backgroundColor: '#900',
	color: '#fff',
	padding: '20px',
};

registerBlockType( 'gutenberg-examples/example-01-basic-esnext', {
	apiVersion: 2,
	title: 'Example: Basic (esnext)',
	icon: 'universal-access-alt',
	category: 'design',
	example: {},
	edit() {
		const blockProps = useBlockProps( { style: blockStyle } );

		return <div { ...blockProps }>Hello World, step 1 (from the editor).</div>;
	},
	save() {
		const blockProps = useBlockProps.save( { style: blockStyle } );

		return <div { ...blockProps }>Hello World, step 1 (from the frontend).</div>;
	},
} );
```

**ES5**

{% ES5 %}
```js
( function( blocks, element, blockEditor ) {
	var el = element.createElement;
	var useBlockProps = blockEditor.useBlockProps;

	var blockStyle = {
		backgroundColor: '#900',
		color: '#fff',
		padding: '20px',
	};

	blocks.registerBlockType( 'gutenberg-examples/example-01-basic', {
		apiVersion: 2,
		title: 'Example: Basic',
		icon: 'universal-access-alt',
		category: 'design',
		example: {},
		edit: function() {
			var blockProps = useBlockProps( { style: blockStyle } );
			return el(
				'p',
				blockProps,
				'Hello World, step 1 (from the editor).'
			);
		},
		save: function() {
			var blockProps = useBlockProps.save( { style: blockStyle } );
			return el(
				'p',
				blockProps,
				'Hello World, step 1 (from the frontend).'
			);
		},
	} );
}(
	window.wp.blocks,
	window.wp.element,
	window.wp.blockEditor
) );
```
{% end %}

<!-- 
_By now you should be able to see `Hello World, step 1 (from the editor).` in the admin side and `Hello World, step 1 (from the frontend).` on the frontend side._

Once a block is registered, you should immediately see that it becomes available as an option in the editor inserter dialog, using values from `title`, `icon`, and `category` to organize its display. You can choose an icon from any included in the built-in [Dashicons icon set](https://developer.wordpress.org/resource/dashicons/), or provide a [custom svg element](/docs/designers-developers/developers/block-api/block-registration.md#icon-optional).

A block name must be prefixed with a namespace specific to your plugin. This helps prevent conflicts when more than one plugin registers a block with the same name. In this example, the namespace is `gutenberg-examples`.

Block names _must_ include only lowercase alphanumeric characters or dashes and start with a letter. Example: `my-plugin/my-custom-block`.

The `edit` and `save` functions describe the structure of your block in the context of the editor and the saved content respectively. While the difference is not obvious in this simple example, in the following sections we'll explore how these are used to enable customization of the block in the editor preview.
 -->
_この段階でエディター画面には `Hello World, step 1 (from the editor).`、投稿を表示すると `Hello World, step 1 (from the frontend).` と表示されます。_

いったんブロックが登録されるとすぐにエディター挿入ダイアログのオプションとして利用可能になります。また `title`、`icon`、`category` の値を使用していることがわかります。アイコンは組み込みの [Dashicons アイコンセット](https://developer.wordpress.org/resource/dashicons/) から選択するか、[カスタム SVG 要素](https://developer.wordpress.org/block-editor/designers-developers/developers/block-api/block-registration/#icon-optional) を指定できます。

ブロック名はプラグイン専用の名前空間をプレフィックスに付ける必要があります。こうすることで2つ以上のプラグインが同じ名前でブロックを登録しても衝突を避けられます。この例では名前空間は `gutenberg-examples` です。

ブロック名は英数小文字かダッシュのみで指定し、文字で始まる必要があります。例: `my-plugin/my-custom-block`.

`edit` 関数と `save` 関数ではそれぞれエディターコンテキストでのブロックの構造と、保存されるコンテンツを記述します。この簡単な例では違いがはっきりしませんが、次のセクションでエディタープレビューでブロックのカスタマイズを行う際に、これらがどのように使用されるかを見ます。

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type.md)