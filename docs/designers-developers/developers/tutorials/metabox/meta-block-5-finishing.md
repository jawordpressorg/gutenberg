<!-- 
# Finishing Touches
 -->
# 最後の仕上げ

<!-- 
One problem using a meta block is the block is easy for an author to forget, since it requires being added to each post. You solve this by using [block templates](/docs/designers-developers/developers/block-api/block-templates.md). A block template is a predefined list of block items per post type. Templates allow you to specify a default initial state for a post type.

For this example, you use a template to automatically insert the meta block at the top of a post.

Add the following code to the `myguten-meta-block.php` file:
 -->
メタブロックを使う際の1つの問題点は、ユーザーが投稿ごとにブロックを追加する必要があり、これを簡単に忘れてしまう点にあります。[ブロックテンプレート](https://ja.wordpress.org/team/handbook/block-editor/developers/block-api/block-templates/)を使うことでこの問題を解決できます。ブロックテンプレートは投稿タイプごとに事前定義された、ブロック要素のリストです。テンプレートを使用することで投稿タイプのデフォルトの初期状態を指定できます。

この例ではテンプレートを使用して自動的に投稿の先頭にメタブロックを挿入します。

次のコードを `myguten-meta-block.php` ファイルに追加してください。

```php
function myguten_register_template() {
    $post_type_object = get_post_type_object( 'post' );
    $post_type_object->template = array(
        array( 'myguten/meta-block' ),
    );
}
add_action( 'init', 'myguten_register_template' );
```

<!-- 
You can also add other block types in the array, including placeholders, or even lock down a post to a set of specific blocks. Templates are a powerful tool for controlling the editing experience, see the documentation linked above for more.
 -->

配列には他のブロックタイプも追加できます。プレースホルダーを設定したり、投稿を特定のブロックの集合にロックできます。テンプレートは編集体験を制御する強力なツールです。詳細については上のリンク先のドキュメントを参照してください。

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/tutorials/metabox/meta-block-5-finishing.md)