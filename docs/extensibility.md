<!--
# Extensibility

Extensibility is key for WordPress and like the rest of WordPress components, Gutenberg is highly extensible.
-->

# 拡張性

拡張性はWordPressの鍵です。WordPressの他の構成要素と同様、Gutenbergには高い拡張性があります。

<!--
## Creating Blocks

Gutenberg is about blocks and the main extensibility API of Gutenberg is the Block API. It allows you to create static blocks, dynamic blocks rendering on the server and also blocks saving data to Post Meta for more structured content.

Here is a small example of a static custom block type (you can try it in your browser's console):
-->

## ブロックの作成

Gutenbergはブロックに関するものであり、Gutenbergの拡張APIの中心はブロックAPIです。静的ブロックや、サーバサイドで描画される動的ブロックをはじめ、より構造化されたコンテンツのためにポストメタにデータを保存するようなブロックの作成も可能です。ここでは、静的なカスタムブロックタイプの、小さなサンプルコードを紹介します（ブラウザのコンソールでも試すことができます）:

```js
var el = wp.element.createElement;

wp.blocks.registerBlockType( 'mytheme/red-block', {
	title: 'Red Block',
	icon: 'universal-access-alt',
	category: 'layout',
	edit: function() {
		return el( 'div', { style: { backgroundColor: '#900', color: '#fff', padding: '20px' } }, 'I am a red block.' );
	},
	save: function() {
		return el( 'div', { style: { backgroundColor: '#900', color: '#fff', padding: '20px' } }, 'I am a red block.' );
	}
} );
```

<!--
If you want to learn more about block creation, The [Blocks Tutorial](./blocks) is the best place to start.
 -->

ブロックの作成についてさらに知りたい場合は、[ブロックのチュートリアル](./blocks)からはじめるのがよいでしょう。

<!--
## Removing Blocks

### Using a blacklist

Adding blocks is easy enough, removing them is as easy. Plugin or theme authors have the possibility to "unregister" blocks.
-->

## ブロックの削除

### ブラックリストの使用

ブロックの追加は簡単でしたが、ブロックの削除も同様です。プラグインやテーマの作者は、ブロックを登録解除することができます。


```js
// myplugin.js

wp.blocks.unregisterBlockType( 'core/verse' );
```

<!--
and load this script in the Editor
-->

次に、このスクリプトをエディターで読み込みます。

```php
<?php
// myplugin.php

function myplugin_blacklist_blocks() {
	wp_enqueue_script(
		'myplugin-blacklist-blocks',
		plugins_url( 'myplugin.js', __FILE__ ),
		array( 'wp-blocks' )
	);
}
add_action( 'enqueue_block_editor_assets', 'myplugin_blacklist_blocks' );
```

<!--
### Using a whitelist

If you want to disable all blocks except a whitelisted list, you can adapt the script above like so:
-->

### ホワイトリストの使用

ホワイトリスト化されたブロック以外の全てのブロックを無効にしたい場合、上と同様のスクリプトを使用できます:

```js
// myplugin.js
var allowedBlocks = [
	'core/paragraph',
	'core/image',
	'core/html',
	'core/freeform'
];

wp.blocks.getBlockTypes().forEach( function( blockType ) {
	if ( allowedBlocks.indexOf( blockType.name ) === -1 ) {
		wp.blocks.unregisterBlockType( blockType.name );
	}
} );
```
<!--
## Hiding blocks from the inserter

On the server, you can filter the list of blocks shown in the inserter using the `allowed_block_types` filter. you can return either true (all block types supported), false (no block types supported), or an array of block type names to allow.

todo: you can return => You can return
-->

## ブロックをインサーターから隠す

サーバーサイドで `allowed_block_types` フィルターを使うことで、インサーターに表示されるブロックを選別することができます。true（全てのブロックタイプが許可される）、false（全てのブロックをサポートしない）、または許可するブロックの名前の配列を返すことができます。

```php
add_filter( 'allowed_block_types', function() {
	return [ 'core/paragraph' ];
} );
```

<!--
## Modifying Blocks (Experimental)

To modify the behaviour of existing blocks, Gutenberg exposes a list of filters:

- `blocks.registerBlockType`: Used to filter the block settings. It receives the block settings and the name of the block the registered block as arguments.

- `blocks.getSaveElement`: A filter that applies to the result of a block's `save` function. This filter is used to replace or extend the element, for example using `wp.element.cloneElement` to modify the element's props or replace its children, or returning an entirely new element.

- `blocks.getSaveContent.extraProps`: A filter that applies to all blocks returning a WP Element in the `save` function. This filter is used to add extra props to the root element of the `save` function. For example: to add a className, an id, or any valid prop for this element. It receives the current props of the `save` element, the block Type and the block attributes as arguments.

- `blocks.BlockEdit`: Used to modify the block's `edit` component. It receives the original block `edit` component and returns a new wrapped component.

**Example**

Adding a background by default to all blocks.
-->

## ブロックの変更（実験的機能）


既存ブロックの振る舞いを変更するため、Gutenbergは以下のフィルターを公開しています:

- `blocks.registerBlockType`: ブロックの設定をフィルターするために使います。ブロックの設定と登録されたブロックの名前を引数として受け取ります。

- `blocks.getSaveElement`: ブロックの `save` 関数に適用されるフィルターです。このフィルターは、要素を置き換えたり拡張したりするのに使います。たとえば、 `wp.element.cloneElement` を使って要素の props の書き換えや子要素の置き換えを行ったり、全く新しい要素を返したりします。

- `blocks.getSaveContent.extraProps`: `save` 関数の中で WP 要素を返す全てのブロックに適用されるフィルターです。このフィルターは、 `save` 関数のルート要素に props を追加するのに使用します。たとえば、className、id、その他その要素に設定可能なpropsであれば何でも追加できます。 `save` が返す要素の現在のprops、ブロックタイプとブロックの属性を引数として受け取ります。

- `blocks.BlockEdit`: ブロックの `edit` コンポーネントを変更するのに使用します。ブロックのオリジナルの `edit` コンポーネントを受け取り、これをラップした新しいコンポーネントを返します。

**例**

全てのブロックにbackgroundを追加します。

```js
// Our filter function
function addBackgroundProp( props ) {
	return Object.assign( props, { style: { backgroundColor: 'red' } } );
}

// Adding the filter
wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'myplugin/add-background',
	addBackgroundProp
);
```
<!--
_Note:_ This filter must always be run on every page load, and not in your browser's developer tools console. Otherwise, a [block validation](https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/#validation) error will occur the next time the post is edited. This is due to the fact that block validation occurs by verifying that the saved output matches what is stored in the post's content during editor initialization. So, if this filter does not exist when the editor loads, the block will be marked as invalid.

## Extending the editor's UI (Slot and Fill)

Coming soon.
-->

_注意:_ このフィルターは全てのページ読み込みに際して実行される必要があり、ブラウザの開発者コンソールで実行してはいけません。そうしないと、次に投稿を編集する際に [ブロックのバリデーション](https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/#validation) エラーが発生することになります。ブロックのバリデーションは、エディターの初期化の際に `save` の出力とデータベースに保存されたコンテンツを比較することで行います。そのため、このフィルターがエディターの読み込み時に存在しないと、ブロックは無効なものとみなされます。

## エディターUIの拡張（スロットとフィル）

Coming soon.
