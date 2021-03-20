<!-- 
# Register the Meta Field
 -->
# メタフィールドの登録

<!-- 
To work with fields in the `post_meta` table, WordPress has a function called [register_post_meta](https://developer.wordpress.org/reference/functions/register_post_meta/). You're going to use it to register a new field called `sidebar_plugin_meta_block_field`, which will be a single string. Note that this field needs to be available through the [REST API](https://developer.wordpress.org/rest-api/) because that's how the block editor access data.

Add this to the PHP code, within the `init` callback function:
 -->
`post_meta` テーブル内のフィールドを操作するには WordPress 関数 [register_post_meta](https://developer.wordpress.org/reference/functions/register_post_meta/) を使用します。この関数を使用して単一文字列の新しいフィールド `sidebar_plugin_meta_block_field` を登録します。このフィールドは [REST API](https://developer.wordpress.org/rest-api/) から利用できる必要があります。ブロックエディターはデータアクセスに REST API を使用するためです。

PHP ファイルの `init` コールバック関数内に以下のコードを追加してください。

```php
register_post_meta( 'post', 'sidebar_plugin_meta_block_field', array(
	'show_in_rest' => true,
	'single' => true,
	'type' => 'string',
) );
```

<!-- 
To make sure the field has been loaded, query the block editor [internal data structures](/docs/reference-guides/data/), also known as _stores_. Open your browser's console, and execute this piece of code:
 -->
フィールドがロードされたことを確認するには、「ストア」と呼ばれるブロックエディターの[内部データ構造](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/data/)を照会します。ブラウザーのコンソールを開き、次のコードを実行してください。

```js
wp.data.select( 'core/editor' ).getCurrentPost().meta;
```
<!-- 
Before adding the `register_post_meta` function to the plugin, this code returns a void array, because WordPress hasn't been told to load any meta field yet. After registering the field, the same code will return an object containing the registered meta field you registered.
 -->
プラグインに `register_post_meta` 関数を追加する前は、このコードは void の配列を返します。これは WordPress にメタフィールドがロードされていなかったためです。フィールドを登録すると、登録済みのメタフィールドを含むオブジェクトを返します。

<!-- 
If the code returns `undefined` make sure your post type supports `custom-fields`. Either when [registering the post](https://developer.wordpress.org/reference/functions/register_post_type/#supports) or with [add_post_type_support function](https://developer.wordpress.org/reference/functions/add_post_type_support/).
 -->
コードが `undefined` を返す場合、[投稿の登録時](https://developer.wordpress.org/reference/functions/register_post_type/#supports)または [add_post_type_support 関数](https://developer.wordpress.org/reference/functions/add_post_type_support/)で投稿タイプが `custom-fields` をサポートすることを確認してください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/sidebar-tutorial/plugin-sidebar-3-register-meta.md)
