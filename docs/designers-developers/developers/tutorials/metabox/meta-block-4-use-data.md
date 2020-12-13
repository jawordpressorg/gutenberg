<!-- 
# Use Post Meta Data
 -->
# 投稿メタデータの使用

<!-- 
You can use the post meta data stored in the last step in multiple ways.
 -->
前のステップで保存した投稿メタデータはいくつかの方法で使用できます。

<!-- 
## Use Post Meta in PHP

The first example uses the value from the post meta field and appends it to the end of the post content wrapped in a H4 tag. This method in PHP is unchanged in WordPress 5.0.
 -->
## PHP での投稿メタの使用

最初の例では投稿メタフィールドからの値を H4 タグで囲んで、投稿コンテンツの最後に追加します。PHP のこの方法は WordPress 5.0 でも変わりません。

```php
function myguten_content_filter( $content ) {
	$value = get_post_meta( get_the_ID(), 'myguten_meta_block_field', true );
	if ( $value ) {
		return sprintf( "%s <h4> %s </h4>", $content, esc_html( $value ) );
	} else {
		return $content;
	}
}
add_filter( 'the_content', 'myguten_content_filter' );
```
<!-- 
## Use Post Meta in Block

You can also use the post meta data in other blocks. For this example the data is loaded at the end of every Paragraph block when it is rendered, ie. shown to the user. You can replace this for any core or custom block types as needed.

In PHP, use the [register_block_type](https://developer.wordpress.org/reference/functions/register_block_type/) function to set a callback when the block is rendered to include the meta value.
 -->
## ブロックでの投稿メタデータの使用

投稿メタデータは別のブロックで使うこともできます。この例ではレンダリングの際にすべての「段落」ブロックの末尾にデータがロードされ、ユーザーに表示されます。任意の組み込みのブロックやカスタムブロックタイプでも可能です。

ブロックがレンダリングされる際にメタ値を含めるには PHP では [register_block_type](https://developer.wordpress.org/reference/functions/register_block_type/) 関数を使用してコールバックを設定してください。

```php
function myguten_render_paragraph( $block_attributes, $content ) {
	$value = get_post_meta( get_the_ID(), 'myguten_meta_block_field', true );
	// check value is set before outputting
	if ( $value ) {
		return sprintf( "%s (%s)", $content, esc_html( $value ) );
	} else {
		return $content;
	}
}

register_block_type( 'core/paragraph', array(
	'apiVersion' => 2,
	'render_callback' => 'myguten_render_paragraph',
) );
```

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/tutorials/metabox/meta-block-4-use-data.md)
