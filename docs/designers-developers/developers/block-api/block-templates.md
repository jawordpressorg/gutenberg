<!-- 
# Templates
 -->
# テンプレート

<!-- 
A block template is defined as a list of block items. Such blocks can have predefined attributes, placeholder content, and be static or dynamic. Block templates allow specifying a default initial state for an editor session.

The scope of templates include:
 -->
ブロックテンプレートはブロックアイテムのリストとして定義されます。定義済みの属性やプレースホルダーコンテンツを含めることができ、静的にも動的にもできます。ブロックテンプレートを使用して、エディターセッションのデフォルトの初期状態を指定できます。

テンプレートの範囲は次のとおりです
<!-- 
- Setting a default state dynamically on the client. (like `defaultBlock`)
- Registered as a default for a given post type.
 -->
- クライアント側で初期状態を動的に設定 (`defaultBlock` のように)
- 特定の投稿タイプのデフォルトとして登録

<!-- 
Planned additions:

- Saved and assigned to pages as "page templates".
- Defined in a `template.php` file or pulled from a custom post type (`wp_templates`) that is site specific.
- As the equivalent of the theme hierarchy.
 -->
予定されている追加機能

- 「ページテンプレート」として固定ページへ保存、割り当て
- `template.php`ファイル内で定義するか、サイト特有のカスタム投稿タイプ (` wp_templates`) から読み込む
- テーマ階層に相当するもの

## API

<!-- 
Templates can be declared in JS or in PHP as an array of blockTypes (block name and optional attributes).
 -->
テンプレートは JS または PHP で、ブロックタイプ (ブロック名とオプション属性) の配列として宣言できます。
<!-- 
The first example in PHP creates a template for posts that includes an image block to start, you can add as many or as few blocks to your template as needed.

PHP example:
 -->
最初の PHP の例では開始時に画像ブロックを含む投稿のテンプレートを作成します。必要に応じて好きなだけテンプレートにブロックを追加できます。

PHP の例:

```php
<?php
function myplugin_register_template() {
    $post_type_object = get_post_type_object( 'post' );
    $post_type_object->template = array(
        array( 'core/image' ),
    );
}
add_action( 'init', 'myplugin_register_template' );
```
<!-- 
The following example in JavaScript creates a new block using [InnerBlocks](https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/inner-blocks/README.md) and templates, when inserted creates a set of blocks based off the template.
 -->
次の JavaScript の例では [InnerBlocks](https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/inner-blocks/README.md) とテンプレートを使用して新しいブロックを作成します。エディターに挿入されるとテンプレートに基づいて一連のブロックを作成します。

```js
const el = wp.element.createElement;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

const BLOCKS_TEMPLATE = [
	[ 'core/image', {} ],
	[ 'core/paragraph', { placeholder: 'Image Details' } ],
];

registerBlockType( 'myplugin/template', {
	title: 'My Template Block',
	category: 'widgets',
	edit: ( props ) => {
		return el( InnerBlocks, {
			template: BLOCKS_TEMPLATE,
			templateLock: false
		});
	},
	save: ( props ) => {
		return el( InnerBlocks.Content, {} );
	},
});
```
<!-- 
See the [Meta Block Tutorial](/docs/designers-developers/developers/tutorials/metabox/meta-block-5-finishing.md) for a full example of a template in use.
 -->
テンプレートを使用する完全なサンプルは [メタブロックのチュートリアル](https://ja.wordpress.org/team/handbook/block-editor/tutorials/metabox/meta-block-5-finishing/) を参照してください。
 
<!-- 
## Custom Post types

A custom post type can register its own template during registration:
 -->
## カスタム投稿タイプ

カスタム投稿タイプ登録時に独自のテンプレートを登録できます。

```php
function myplugin_register_book_post_type() {
	$args = array(
		'public' => true,
		'label'  => 'Books',
		'show_in_rest' => true,
		'template' => array(
			array( 'core/image', array(
				'align' => 'left',
			) ),
			array( 'core/heading', array(
				'placeholder' => 'Add Author...',
			) ),
			array( 'core/paragraph', array(
				'placeholder' => 'Add Description...',
			) ),
		),
	);
	register_post_type( 'book', $args );
}
add_action( 'init', 'myplugin_register_book_post_type' );
```

<!-- 
### Locking

Sometimes the intention might be to lock the template on the UI so that the blocks presented cannot be manipulated. This is achieved with a `template_lock` property.
 -->
### ロック

ブロックを操作できないように UI でテンプレートをロックしたい場合があります。これには `template_lock` プロパティを使用します。

```php
function myplugin_register_template() {
	$post_type_object = get_post_type_object( 'post' );
	$post_type_object->template = array(
		array( 'core/paragraph', array(
			'placeholder' => 'Add Description...',
		) ),
	);
	$post_type_object->template_lock = 'all';
}
add_action( 'init', 'myplugin_register_template' );
```

<!-- 
*Options:*

- `all` — prevents all operations. It is not possible to insert new blocks, move existing blocks, or delete blocks.
- `insert` — prevents inserting or removing blocks, but allows moving existing blocks.
 -->
*オプション*

- `all` - すべての操作を禁止します。新しいブロックの挿入、既存ブロックの移動、ブロックの削除はできません。
- `insert` - 新しいブロックの挿入、ブロックの削除はできませんが、既存ブロックの移動はできます。

<!-- 
Lock settings can be inherited by InnerBlocks. If `templateLock` is not set in an InnerBlocks area, the locking of the parent InnerBlocks area is used. If the block is a top level block, the locking configuration of the current post type is used.
 -->
ロックの設定は InnerBlocks によって継承できます。`templateLock` が InnerBlocks 領域で設定されていなければ、親の InnerBlocks 領域のロックが使用されます。ブロックが最上位レベルのブロックであれば、現行の投稿タイプのロック構成が使用されます。

<!-- 
## Nested Templates
 -->
## ネストしたテンプレート

<!-- 
Container blocks like the columns blocks also support templates. This is achieved by assigning a nested template to the block.
 -->
「カラム」ブロックのようなコンテナブロックもテンプレートをサポートします。実装にはブロックにネストしたテンプレートを割り当てます。

```php
$template = array(
	array( 'core/paragraph', array(
		'placeholder' => 'Add a root-level paragraph',
	) ),
	array( 'core/columns', array(), array(
		array( 'core/column', array(), array(
			array( 'core/image', array() ),
		) ),
		array( 'core/column', array(), array(
			array( 'core/paragraph', array(
				'placeholder' => 'Add a inner paragraph'
			) ),
		) ),
	) )
);
```
[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/block-api/block-templates.md)