<!--
# Extensibility

<<<<<<< HEAD
Extensibility is key for WordPress and like the rest of WordPress components, Gutenberg is highly extensible.
-->
=======
Extensibility is key for WordPress and, like the rest of WordPress components, Gutenberg is highly extensible.
>>>>>>> upstream/master

# 拡張性

拡張性はWordPressの鍵です。WordPressの他の構成要素と同様、Gutenbergには高い拡張性があります。

<!--
## Creating Blocks

Gutenberg is about blocks, and the main extensibility API of Gutenberg is the Block API. It allows you to create your own static blocks, dynamic blocks rendered on the server and also blocks capable of saving data to Post Meta for more structured content.

Here is a small example of a static custom block type (you can try it in your browser's console):
-->

## ブロックの作成

Gutenbergはブロックに関するものであり、Gutenbergの拡張APIの中心はブロックAPIです。静的ブロックや、サーバサイドで描画される動的ブロックをはじめ、より構造化されたコンテンツのためにポストメタにデータを保存するようなブロックの作成も可能です。ここでは、静的なカスタムブロックタイプの、小さなサンプルコードを紹介します（ブラウザのコンソールでも試すことができます）:

{% codetabs %}
{% ES5 %}
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
<<<<<<< HEAD

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
=======
{% ESNext %}
```js
const { registerBlockType } = wp.blocks;
const blockStyle = { backgroundColor: '#900', color: '#fff', padding: '20px' };

registerBlockType( 'mytheme/red-block', {
	title: 'Red Block',
	icon: 'universal-access-alt',
	category: 'layout',
	edit: function() {
		return <div style={ blockStyle }>I am a red block</div>
	},
	save: function() {
		return <div style={ blockStyle }>I am a red block</div>
	}
} );
```
{% end %}

If you want to learn more about block creation, the [Blocks Tutorial](../docs/blocks.md) is the best place to start.
>>>>>>> upstream/master

## Extending Blocks

<<<<<<< HEAD
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
=======
It is also possible to modify the behavior of existing blocks or even remove them completely using filters.

Learn more in the [Extending Blocks](../docs/extensibility/extending-blocks.md) section.

## Extending the Editor UI
>>>>>>> upstream/master

Extending the editor UI can be accomplished with the `registerPlugin` API, allowing you to define all your plugin's UI elements in one place.

Refer to the [Plugins](https://github.com/WordPress/gutenberg/blob/master/packages/plugins/README.md) and [Edit Post](https://github.com/WordPress/gutenberg/blob/master/packages/edit-post/README.md) section for more information.

## Meta Boxes

**Porting PHP meta boxes to blocks is highly encouraged!**

Discover how [Meta Box](../docs/extensibility/meta-box.md) support works in Gutenberg.

## Theme Support

<<<<<<< HEAD
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
=======
By default, blocks provide their styles to enable basic support for blocks in themes without any change. Themes can add/override these styles, or rely on defaults.

There are some advanced block features which require opt-in support in the theme. See [theme support](../docs/extensibility/theme-support.md).

## Autocomplete

Autocompleters within blocks may be extended and overridden. See [autocomplete](../docs/extensibility/autocomplete.md).

## Block Parsing and Serialization
>>>>>>> upstream/master

Posts in the editor move through a couple of different stages between being stored in `post_content` and appearing in the editor. Since the blocks themselves are data structures that live in memory it takes a parsing and serialization step to transform out from and into the stored format in the database.

<<<<<<< HEAD
Coming soon.
-->

_注意:_ このフィルターは全てのページ読み込みに際して実行される必要があり、ブラウザの開発者コンソールで実行してはいけません。そうしないと、次に投稿を編集する際に [ブロックのバリデーション](https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/#validation) エラーが発生することになります。ブロックのバリデーションは、エディターの初期化の際に `save` の出力とデータベースに保存されたコンテンツを比較することで行います。そのため、このフィルターがエディターの読み込み時に存在しないと、ブロックは無効なものとみなされます。

## エディターUIの拡張（スロットとフィル）

Coming soon.
=======
Customizing the parser is an advanced topic that you can learn more about in the [Extending the Parser](../docs/extensibility/parser.md) section.
>>>>>>> upstream/master
