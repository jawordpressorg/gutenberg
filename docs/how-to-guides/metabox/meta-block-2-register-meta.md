<!-- 
# Register Meta Field
 -->
# メタフィールドの登録

<!-- 
A post meta field is a WordPress object used to store extra data about a post. You need to first register a new meta field prior to use. See Managing [Post Metadata](https://developer.wordpress.org/plugins/metadata/managing-post-metadata/) to learn more about post meta.

When registering the field, note the `show_in_rest` parameter. This ensures the data will be included in the REST API, which the block editor uses to load and save meta data. See the [`register_post_meta`](https://developer.wordpress.org/reference/functions/register_post_meta/) function definition for extra information.
-->
投稿メタフィールドは、投稿の追加データの保存に使用される WordPress オブジェクトです。使用前にまず新しいメタフィールドを登録する必要があります。投稿メタの詳細については[投稿メタデータ](https://developer.wordpress.org/plugins/metadata/managing-post-metadata/)の管理を参照してください。

フィールドの登録の際には `show_in_rest` パラメータに注意してください。このパラメータによりデータが REST API に含まれます。ブロックエディターは REST API を使用してメタデータをロードしたり保存します。詳細な情報については [`register_post_meta`](https://developer.wordpress.org/reference/functions/register_post_meta/) 関数定義を参照してください。

<!-- 
Additionally, your post type needs to support `custom-fields` for `register_post_meta` function to work
 -->
また `register_post_meta` 関数が動作するには投稿タイプが `custom-fields` をサポートする必要があります。

<!--
To register the field, create a PHP plugin file called `myguten-meta-block.php` including:
 -->
PHP プラグイン `myguten-meta-block.php` を作成し、フィールドを登録します。

```php
<?php
/**
 * Plugin Name: Meta Block
 */

// register custom meta tag field
function myguten_register_post_meta() {
	register_post_meta( 'post', 'myguten_meta_block_field', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );
}
add_action( 'init', 'myguten_register_post_meta' );
```
<!-- 
**Note:** If the meta key name starts with an underscore WordPress considers it a protected field. Editing this field requires passing a permission check, which is set as the `auth_callback` in the `register_post_meta` function. Here is an example:
 -->
**注意:** WordPress は名前が下線で始まるメタキーをプロテクトフィールドとみなします。フィールドの編集にはアクセス権チェックを渡す必要があり、これは`register_post_meta` 関数の `auth_callback` で設定します。

```php
register_post_meta( 'post', '_myguten_protected_key', array(
	'show_in_rest' => true,
	'single' => true,
	'type' => 'string',
	'auth_callback' => function() {
		return current_user_can( 'edit_posts' );
	}
) );
```

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/tutorials/metabox/meta-block-2-register-meta.md)
