<!--
# Styles
 -->
# スタイル

<!--
Block Styles allow alternative styles to be applied to existing blocks. They work by adding a className to the block's wrapper. This className can be used to provide an alternative styling for the block if the block style is selected. See the [Getting Started with JavaScript tutorial](/docs/how-to-guides/javascript/) for a full example.
 -->
ブロックスタイルを使用すると、既存のブロックに対して別のスタイルを適用できます。ブロックスタイルは、ブロックのラッパーに className を追加することで機能します。ブロックスタイルが選択された場合、このclassName を使用してブロックに代替のスタイルを提供できます。詳細は、「[JavaScript 入門](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/)」を参照してください。

<!--
_Example:_
 -->
_例:_

```js
wp.blocks.registerBlockStyle( 'core/quote', {
	name: 'fancy-quote',
	label: 'Fancy Quote',
} );
```

<!--
The example above registers a block style named `fancy-quote` to the `core/quote` block. When the user selects this block style from the styles selector, an `is-style-fancy-quote` className will be added to the block's wrapper.
 -->
上の例では、ブロック `core/quote` に、ブロックスタイル `fancy-quote` を登録します。ユーザーがスタイルセレクタからこのブロックスタイルを選択すると、className `is-style-fancy-quote` が、ブロックのラッパーに追加されます。

<!--
By adding `isDefault: true` you can mark the registered block style as the one that is recognized as active when no custom class name is provided. It also means that there will be no custom class name added to the HTML output for the style that is marked as default.
 -->
`isDefault: true` を追加すると、カスタムクラス名が提供されていない場合に、アクティブと認識される対象として登録したブロックスタイルをマークできます。この結果、デフォルトとしてマークされたスタイルの HTML 出力には、カスタムクラス名は追加されません。

<!--
To remove a block style use `wp.blocks.unregisterBlockStyle()`.
 -->
ブロックスタイルを削除するには、`wp.blocks.unregisterBlockStyle()` を使用してください。

<!--
_Example:_
 -->
_例:_

```js
wp.blocks.unregisterBlockStyle( 'core/quote', 'large' );
```

<!--
The above removes the block style named `large` from the `core/quote` block.
 -->
上のコードは、ブロック `core/quote` から、ブロックスタイル `large` を削除します。

<!--
**Important:** When unregistering a block style, there can be a [race condition](https://en.wikipedia.org/wiki/Race_condition) on which code runs first: registering the style, or unregistering the style. You want your unregister code to run last. The way to do that is specify the component that is registering the style as a dependency, in this case `wp-edit-post`. Additionally, using `wp.domReady()` ensures the unregister code runs once the dom is loaded.
 -->
**重要:** ブロックスタイルを登録解除する際に、「スタイルの登録」と「スタイルの登録解除」のどちらのコードを先に実行すべきかという [競合状態](https://en.wikipedia.org/wiki/Race_condition) が発生します。もちろん登録解除を最後に実行したいところでしょう。それには、スタイルを登録するコンポーネントを依存関係として指定します。ここでは `wp-edit-post` を指定します。さらに、`wp.domReady()`を使用することで、domがロードされた後で、登録を解除するコードが実行されます。

<!--
Enqueue your JavaScript with the following PHP code:
 -->
JavaScript を次の PHP コードと一緒にエンキューしてください。

```php
function myguten_enqueue() {
	wp_enqueue_script(
		'myguten-script',
		plugins_url( 'myguten.js', __FILE__ ),
		array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),
		filemtime( plugin_dir_path( __FILE__ ) . '/myguten.js' )
	);
}
add_action( 'enqueue_block_editor_assets', 'myguten_enqueue' );
```

<!--
The JavaScript code in `myguten.js`:
 -->
`myguten.js` の JavaScript コードです。

```js
wp.domReady( function () {
	wp.blocks.unregisterBlockStyle( 'core/quote', 'large' );
} );
```

<!--
## Server-side registration helper
 -->
## サーバーサイド登録ヘルパー

<!--
While the samples provided do allow full control of block styles, they do require a considerable amount of code.
 -->
提供されているサンプルでは、ブロックスタイルを完全にコントロールできますが、かなりの量のコードが必要です。

<!--
To simplify the process of registering and unregistering block styles, two server-side functions are also available: `register_block_style`, and `unregister_block_style`.
 -->
ブロックスタイルの登録と解除を簡単に行うために、2つのサーバーサイド関数が用意されています。`register_block_style` と `unregister_block_style` です。

<!--
### register_block_style
 -->
### register_block_style

<!--
The `register_block_style` function receives the name of the block as the first argument and an array describing properties of the style as the second argument.
 -->
`register_block_style`関数は、第1引数にブロックの名前を、第2引数にスタイルのプロパティを記述した配列を受け取ります。

<!--
The properties of the style array must include `name` and `label`:
 -->
スタイル配列のプロパティには、`name`と`label`を含める必要があります。

<!--
-   `name`: The identifier of the style used to compute a CSS class.
-   `label`: A human-readable label for the style.
 -->
-   `name`: CSSクラスの算出に使用されるスタイルの識別子です。
-   `label`: スタイルの人間が読めるラベルです。

<!--
Besides the two mandatory properties, the styles properties array should also include an `inline_style` or a `style_handle` property:
 -->
2つの必須プロパティの他に、スタイルプロパティの配列には、`inline_style`または`style_handle`のプロパティも含める必要があります。

<!--
-   `inline_style`: Contains inline CSS code that registers the CSS class required for the style.
-   `style_handle`: Contains the handle to an already registered style that should be enqueued in places where block styles are needed.
 -->
-   `inline_style`: スタイルに必要なCSSクラスを登録するインラインCSSコードを含みます。
-   `style_handle`: ブロックスタイルが必要な場所でエンキューされる、既に登録済みのスタイルのハンドルを含みます。

<!--
It is also possible to set the `is_default` property to `true` to mark one of the block styles as the default one.
 -->
また、`is_default` プロパティを `true` に設定して、いずれかのブロックスタイルをデフォルトとしてマークできます。

<!--
The following code sample registers a style for the quote block named "Blue Quote", and provides an inline style that makes quote blocks with the "Blue Quote" style have blue color:
 -->
次のサンプルコードは、引用ブロックにスタイル「Blue Quote」を登録し、「Blue Quote」スタイルで引用ブロックを青くするインラインスタイルを提供します。

```php
register_block_style(
    'core/quote',
    array(
        'name'         => 'blue-quote',
        'label'        => __( 'Blue Quote', 'textdomain' ),
        'inline_style' => '.wp-block-quote.is-style-blue-quote { color: blue; }',
    )
);
```

<!--
Alternatively, if a stylesheet was already registered which contains the CSS for the block style, it is possible to just pass the stylesheet's handle so `register_block_style` function will make sure it is enqueue.
 -->
代替として、ブロックスタイルのCSSを含むスタイルシートがすでに登録済みの場合は、`register_block_style`関数にスタイルシートのハンドルを渡すだけでエンキューできます。

<!--
The following code sample provides an example of this use case:
 -->
この具体的な例として次のサンプルコードを参照してください。

```php
wp_register_style( 'myguten-style', get_template_directory_uri() . '/custom-style.css' );

// ...

register_block_style(
    'core/quote',
    array(
        'name'         => 'fancy-quote',
        'label'        => __( 'Fancy Quote', 'textdomain' ),
        'style_handle' => 'myguten-style',
    )
);
```

<!--
### unregister_block_style
 -->
### unregister_block_style

<!--
`unregister_block_style` allows unregistering a block style previously registered on the server using `register_block_style`.
 -->
`unregister_block_style`では、`register_block_style`でサーバーに登録したブロックスタイルを解除できます。

<!--
The function's first argument is the registered name of the block, and the name of the style as the second argument.
 -->
関数の第1引数にはブロックの登録名、第2引数にはスタイル名を指定します。

<!--
The following code sample unregisters the style named 'fancy-quote' from the quote block:
 -->
次のコードサンプルは、引用ブロックからスタイル「fancy-quote」の登録を解除しています。

```php
unregister_block_style( 'core/quote', 'fancy-quote' );
```

<!--
**Important:** The function `unregister_block_style` only unregisters styles that were registered on the server using `register_block_style`. The function does not unregister a style registered using client-side code.
 -->
**重要:** 関数`unregister_block_style`は、サーバー上で`register_block_style`を使って登録されたスタイルの登録を解除します。この関数は、クライアントサイドのコードで登録されたスタイルの登録を解除しません。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-styles.md)
