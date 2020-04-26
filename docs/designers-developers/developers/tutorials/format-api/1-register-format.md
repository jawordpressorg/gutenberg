<!-- 
# Register a New Format
 -->
# 新しいフォーマットの登録

<!-- 
The first thing you're going to do in this tutorial is to register the new format that the plugin intends to apply. WordPress has the [`registerFormatType`](/packages/rich-text/README.md#registerFormatType) function to do so.

Let's prepare a minimal plugin to make this work. Create a new folder and a file named `my-custom-format.php` within it containing the necessary PHP code to register and enqueue the JavaScript assets:
 -->

まずはじめにプラグインで適用する新しいフォーマットを登録します。これには WordPress の [`registerFormatType`](https://developer.wordpress.org/block-editor/packages/packages-rich-text/#registerFormatType) 関数を使用します。

最小限のプラグインを準備します。新しいフォルダーにファイル `my-custom-format.php` を作成し、中に登録と JavaScript アセットのエンキューに必要な PHP コードを記述します。

```php
<?php
/**
 * Plugin Name: My custom format
 */

function my_custom_format_script_register() {
	wp_register_script(
		'my-custom-format-js',
		plugins_url( 'my-custom-format.js', __FILE__ ),
		array( 'wp-rich-text' )
	);
}
add_action( 'init', 'my_custom_format_script_register' );

function my_custom_format_enqueue_assets_editor() {
	wp_enqueue_script( 'my-custom-format-js' );
}
add_action( 'enqueue_block_editor_assets', 'my_custom_format_enqueue_assets_editor' );
```
<!-- 
Then add a new file named `my-custom-format.js` with the following contents:
 -->
次に新しいファイル `my-custom-format.js` を次の内容で作成します。

**ES5**

{% codetabs %}
{% ES5 %}
```js
( function( wp ) {
	wp.richText.registerFormatType(
		'my-custom-format/sample-output', {
			title: 'Sample output',
			tagName: 'samp',
			className: null,
		}
	);
} )( window.wp );
```

**ESNext**

{% ESNext %}
```js
import { registerFormatType } from '@wordpress/rich-text';

registerFormatType(
	'my-custom-format/sample-output', {
		title: 'Sample output',
		tagName: 'samp',
		className: null,
	}
);
```
{% end %}

<!-- 
Make that plugin available in your WordPress setup and activate it. Then, load a new page/post.

The list of available format types is maintained in the `core/rich-text` store. You can query the store to check that your custom format is now available. To do so, run this code in your browser's console:

	wp.data.select( 'core/rich-text' ).getFormatTypes();

It'll return an array containing the format types, including your own.
 -->
WordPress にインストールして有効化し、新しい投稿または固定ページをロードしてください。

利用可能なフォーマットタイプは `core/rich-text` ストア内で管理されます。ストアを照会し、作成したカスタムフォーマットが利用可能かどうかを確認します。ブラウザーのコンソールで以下を実行してください。

	wp.data.select( 'core/rich-text' ).getFormatTypes();

作成したものを含むフォーマットタイプの配列が返されます。
