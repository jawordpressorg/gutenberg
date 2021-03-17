<!--
# Extending the Block Editor
-->
# ブロックエディターの拡張

<!--
Let's look at using the [Block Style Variation example](/docs/reference-guides/filters/block-filters.md#block-style-variations) to extend the editor. This example allows you to add your own custom CSS class name to any core block type.

Replace the existing `console.log()` code in your `myguten.js` file with:
-->
[ブロックスタイルバリデーションの例](https://developer.wordpress.org/block-editor/developers/filters/block-filters/#block-style-variations)を使用してエディターを拡張します。この例は任意のコアブロックタイプにカスタム CSS クラス名を追加します。

`myguten.js` ファイル内のコード `console.log()` を以下のコードで置き換えてください。

```js
wp.blocks.registerBlockStyle( 'core/quote', {
	name: 'fancy-quote',
	label: 'Fancy Quote',
} );
```

<!--
**Important:** Notice that you are using a function from `wp.blocks` package. This means you must specify it as a dependency when you enqueue the script. Update the `myguten-plugin.php` file to:
-->
**重要:** `wp.blocks` パッケージから関数を使用していることに注意してください。すなわちスクリプトをエンキューする際に、依存を指定しなければならないことを意味します。`myguten-plugin.php` ファイルを更新してください。

```php
<?php
/*
Plugin Name: Fancy Quote
*/

function myguten_enqueue() {
	wp_enqueue_script( 'myguten-script',
		plugins_url( 'myguten.js', __FILE__ ),
		array( 'wp-blocks' )
	);
}
add_action( 'enqueue_block_editor_assets', 'myguten_enqueue' );
```

<!--
The last argument in the `wp_enqueue_script()` function is an array of dependencies. WordPress makes packages available under the `wp` namespace. In the example, you use `wp.blocks` to access the items that the blocks package exports (in this case the `registerBlockStyle()` function).

See [Packages](/docs/reference-guides/packages.md) for list of available packages and what objects they export.
-->
`wp_enqueue_script()` 関数の最後の引数は依存の配列です。パッケージは `wp` 名前空間の下で利用可能になります。この例では `wp.blocks` を使用してブロックパッケージがエクスポートする項目、このケースでは `registerBlockStyle()` 関数にアクセスします。

利用可能なパッケージとエクスポートするオブジェクトについては、[パッケージ](https://ja.wordpress.org/team/handbook/block-editor/packages/)を参照してください。

<!--
After you have updated both JavaScript and PHP files, go to the block editor and create a new post.

Add a quote block, and in the right sidebar under Styles, you will see your new Fancy Quote style listed.  

Click the Fancy Quote to select and apply that style to your quote block:

![Fancy Quote Style in Inspector](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/designers-developers/assets/fancy-quote-in-inspector.png)

-->
JavaScript と PHP ファイルの両方を更新したら、ブロックエディターに移動し、新しい投稿を作成してください。

引用ブロックを追加すると、右サイドバーの「スタイル」のリストに「Fancy Quote」スタイルが追加されています。

「Fancy Quote」をクリックして選択し、引用ブロックにスタイルを割り当ててください。

![インスペクター内の Fancy Quote スタイル](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/designers-developers/assets/fancy-quote-in-inspector.png)

<!--
Even if you Preview or Publish the post you will not see a visible change. However, if you look at the source, you will see the `is-style-fancy-quote` class name is now attached to your quote block.

Let's add some style. In your plugin folder, create a `style.css` file with:
-->
プレビューしても、公開して表示しても、投稿に大きな違いは見られません。しかしソースコードを見ると引用ブロックに `is-style-fancy-quote` クラス名がつけられていることが分かります。

スタイルを追加してみます。プラグインのフォルダーにファイル `style.css` を以下の内容で追加してください。

```css
.is-style-fancy-quote {
	color: tomato;
}
```

<!--
You enqueue the CSS file by adding the following to your `myguten-plugin.php`:
-->
CSS ファイルをエンキューします。`myguten-plugin.php` に次のコードを追加してください。

```php
function myguten_stylesheet() {
	wp_enqueue_style( 'myguten-style', plugins_url( 'style.css', __FILE__ ) );
}
add_action( 'enqueue_block_assets', 'myguten_stylesheet' );
```

<!--
Now when you view in the editor and publish, you will see your Fancy Quote style, a delicious tomato color text:

![Fancy Quote with Style](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/fancy-quote-with-style.png)
-->
エディターで表示したり、公開して投稿を表示すると Fancy Quote スタイルを確認できます。テキストにデリシャスなトマト色が適用されています。 

![Fancy Quote スタイル](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/fancy-quote-with-style.png)

[原文](https://github.com/WordPress/gutenberg/blob/HEAD/docs/designers-developers/developers/tutorials/javascript/extending-the-block-editor.md)
