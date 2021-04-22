<!--
# Block Patterns
 -->
# ブロックパターン
<!--
Block Patterns are predefined block layouts, ready to insert and tweak.
 -->
ブロックパターンは事前に定義されたブロックレイアウトです。挿入すればすぐに使えます。

<!--
## Block Patterns Registration
 -->
## ブロックパターンの登録

### register_block_pattern

<!--
The editor comes with a list of built-in block patterns. Theme and plugin authors can register addition custom block patterns using the `register_block_pattern` function.

The `register_block_pattern` function receives the name of the pattern as the first argument and an array describing properties of the pattern as the second argument.
 -->
エディターには組み込みのブロックパターンのリストが付属します。テーマやプラグインの作者は `register_block_pattern` 関数を使用して追加のカスタムブロックパターンを登録できます。

`register_block_pattern` 関数は第1引数としてパターンの名前、第2引数としてパターンを説明するプロパティの配列を取ります。
<!--
The properties of the block pattern include:
-   `title` (required): A human-readable title for the pattern.
-   `content` (required): Raw HTML content for the pattern.
-   `description`: A visually hidden text used to describe the pattern in the inserter. A description is optional but it is strongly encouraged when the title does not fully describe what the pattern does.
-   `categories`: An array of pattern categories used to group block patterns. Block patterns can be shown on multiple categories.
-   `keywords`: An array of aliases or keywords that help users discover the pattern while searching.
-   `viewportWidth`: An integer specifying the width of the pattern in the inserter.
 -->
ブロックパターンのプロパティを以下に示します。
- `title` (必須): 表示されるパターンのタイトル。
- `content` (必須): パターンの生の HTML コンテンツ。
- `description`: インスペクター内でパターンの記述に使用される非表示のテキスト。オプションだがタイトルで十分にブロックの動作を表せない場合は強く推奨。
- `categories`: ブロックパターンのグループ化に使用されるブロックカテゴリーの配列。ブロックパターンは複数のカテゴリーに分けて表示できる。
- `keywords`: 検索の際に役立つ別名またはキーワードの配列。
- `viewportWidth`: インサーター内でのパターンの幅を指定する整数


```php
register_block_pattern(
	'my-plugin/my-awesome-pattern',
	array(
		'title'       => __( 'Two buttons', 'my-plugin' ),
		'description' => _x( 'Two horizontal buttons, the left button is filled in, and the right button is outlined.', 'Block pattern description', 'my-plugin' ),
		'content'     => "<!-- wp:buttons {\"align\":\"center\"} -->\n<div class=\"wp-block-buttons aligncenter\"><!-- wp:button {\"backgroundColor\":\"very-dark-gray\",\"borderRadius\":0} -->\n<div class=\"wp-block-button\"><a class=\"wp-block-button__link has-background has-very-dark-gray-background-color no-border-radius\">" . esc_html__( 'Button One', 'my-plugin' ) . "</a></div>\n<!-- /wp:button -->\n\n<!-- wp:button {\"textColor\":\"very-dark-gray\",\"borderRadius\":0,\"className\":\"is-style-outline\"} -->\n<div class=\"wp-block-button is-style-outline\"><a class=\"wp-block-button__link has-text-color has-very-dark-gray-color no-border-radius\">" . esc_html__( 'Button Two', 'my-plugin' ) . "</a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons -->",
	)
);
```

### unregister_block_pattern
<!--
`unregister_block_pattern` allows unregistering a pattern previously registered on the server using `register_block_pattern`.

The function's argument is the registered name of the pattern.

The following code sample unregisters the style named 'my-plugin/my-awesome-pattern':
 -->
`unregister_block_pattern` は `register_block_pattern` を使用してサーバーに登録されたパターンの登録を解除します。

この関数の引数はパターンの登録された名前です。

次のコードの例はパターン「my-plugin/my-awesome-pattern」の登録を解除します。

```php
unregister_block_pattern( 'my-plugin/my-awesome-pattern' );
```
<!--
## Block Pattern Categories
 -->
## ブロックパターンカテゴリー
<!--
Block patterns can be grouped using categories. The block editor comes with bundled categories you can use on your custom block patterns. You can also register your own pattern categories.
 -->
ブロックパターンはカテゴリーを使用してグループ分けできます。ブロックエディターにはカスタムブロックパターンでも利用可能な組み込みのカテゴリーが付属します。独自のパターンカテゴリーを登録することもできます。

### register_block_pattern_category
<!--
The `register_block_pattern_category` function receives the name of the category as the first argument and an array describing properties of the category as the second argument.

The properties of the pattern categories include:
-   `label` (required): A human-readable label for the pattern category.
 -->
`register_block_pattern_category` 関数は第1引数としてカテゴリーの名前、第2引数としてカテゴリーを説明するプロパティの配列を取ります。

パターンカテゴリーのプロパティを以下に示します。
- `label` (必須): 表示されるパターンカテゴリーの名前。


```php
register_block_pattern_category(
	'hero',
	array( 'label' => __( 'Hero', 'my-plugin' ) )
);
```

### unregister_block_pattern_category
<!--
`unregister_block_pattern_category` allows unregistering a pattern category.

The function's argument is the name of the pattern category to unregister.

The following code sample unregisters the category named 'hero':
 -->
`unregister_block_pattern_category` はパターンカテゴリーの登録を解除します。

関数の引数は解除するパターンカテゴリーの名前です。

次のコードの例ではカテゴリー「hero」の登録を解除します。

```php
unregister_block_pattern_category( 'hero' );
```

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/block-api/block-patterns.md)
