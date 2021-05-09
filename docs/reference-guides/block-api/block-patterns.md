<!--
# Patterns
 -->
# パターン

<!--
Block Patterns are predefined block layouts, ready to insert and tweak.
Block Patterns are predefined block layouts, available from the patterns tab of the block inserter. Once inserted into content, the blocks are ready for additional or modified content and configuration.
 -->
ブロックパターンは事前に定義されたブロックレイアウトです。ブロックインサーターの「パターン」タブから利用できます。コンテンツ内に挿入すると、ブロックはコンテンツや構成を追加、変更できます。

<!--
In this Document:
 -->
目次

* [`register_block_pattern`](#register_block_pattern)
* [`unregister_block_pattern`](#unregister_block_pattern)
* [`register_block_pattern_category`](#register_block_pattern_category)
* [`unregister_block_pattern_category`](#unregister_block_pattern_category)

<!--
## Block Patterns
 -->
## ブロックパターン

### register_block_pattern

<!--
The editor comes with several core block patterns. Theme and plugin authors can register additional custom block patterns using the `register_block_pattern` helper function.
 -->
エディターにはいくつかのコアブロックパターンが付属します。テーマやプラグインの作者は `register_block_pattern` ヘルパー関数を使用して追加のカスタムブロックパターンを登録できます。

<!--
The `register_block_pattern` helper function receives two arguments.
-   `title`: A machine-readable title with a naming convention of `namespace/title`.
-	`properties`: An array describing properties of the pattern.
 -->
`register_block_pattern` ヘルパー関数は2つの引数を取ります。
-   `title`: 機械が読めるタイトル。命名規約は `namespace/title`
-	`properties`: パターンのプロパティを説明する配列

<!--
The properties of the block pattern include:
-   `title` (required): A human-readable title for the pattern.
-   `content` (required): Raw HTML content for the pattern.
-   `description`: A visually hidden text used to describe the pattern in the inserter. A description is optional but it is strongly encouraged when the title does not fully describe what the pattern does.
-   `categories`: An array of pattern categories used to group block patterns. Block patterns can be shown on multiple categories.
-   `keywords`: An array of aliases or keywords that help users discover the pattern while searching.
-   `viewportWidth`: An integer specifying the width of the pattern in the inserter.
 -->
<!--
ブロックパターンのプロパティを以下に示します。
- `title` (必須): 表示されるパターンのタイトル。
- `content` (必須): パターンの生の HTML コンテンツ。
- `description`: インスペクター内でパターンの記述に使用される非表示のテキスト。オプションだがタイトルで十分にブロックの動作を表せない場合は強く推奨。
- `categories`: ブロックパターンのグループ化に使用されるブロックカテゴリーの配列。ブロックパターンは複数のカテゴリーに分けて表示できる。
- `keywords`: 検索の際に役立つ別名またはキーワードの配列。
- `viewportWidth`: インサーター内でのパターンの幅を指定する整数
 -->
<!--
The properties available for block patterns are:
 -->
ブロックパターンで利用可能なプロパティを以下に示します。

<!--
-   `title` (required): A human-readable title for the pattern.
-   `content` (required): Block HTML Markup for the pattern.
-   `description` (optional): A visually hidden text used to describe the pattern in the inserter. A description is optional but it is strongly encouraged when the title does not fully describe what the pattern does. The description will help users discover the pattern while searching.
-   `categories` (optional): An array of registered pattern categories used to group block patterns. Block patterns can be shown on multiple categories. A category must be registered separately in order to be used here.
-   `keywords` (optional): An array of aliases or keywords that help users discover the pattern while searching.
-   `viewportWidth` (optional): An integer specifying the intended width of the pattern to allow for a scaled preview of the pattern in the inserter.
 -->
-   `title` (必須): 表示されるパターンのタイトル。
-   `content` (必須): パターンのブロック HTML マークアップ。
-   `description` (オプション): インスペクター内でパターンの記述に使用される非表示のテキスト。オプションだがタイトルで十分にブロックの動作を表せない場合は強く推奨。ユーザーの検索を支援する。
-   `categories` (オプション): ブロックパターンのグループ化に使用される、登録されたパターンカテゴリーの配列。ブロックパターンは複数のカテゴリーに分けて表示できる。ここで使用されるには、カテゴリーは個別にと労苦する必要がある。
-   `keywords` (オプション): 検索の際に役立つ別名またはキーワードの配列。
-   `viewportWidth` (オプション): インサーター内でのパターンのインデント幅を指定する整数。パターンのスケールするプレビュー用。

<!--
The following code sample registers a block pattern named 'my-plugin/my-awesome-pattern':
 -->
次のサンプルコードは、ブロックパターン「my-plugin/my-awesome-pattern」」を登録します。

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

<!--
_Note:_
 -->
_注意:_

<!--
`register_block_pattern()` should be called from a handler attached to the init hook.
 -->
`register_block_pattern()` は、init フックにアタッチされたハンドラから呼ぶ必要があります。

```php
function my_plugin_register_my_patterns() {
  register_block_pattern( ... );
}

add_action( 'init', 'my_plugin_register_my_patterns' );
```

## ブロックパターンの登録の解除

### unregister_block_pattern

<!--
The `unregister_block_pattern` helper function allows for a previously registered block pattern to be unregistered from a theme or plugin and receives one argument.
 -->
`unregister_block_pattern` ヘルパー関数を使用すると、テーマやプラグインからブロックパターンの登録を解除出来ます。1つの引数を取ります。
<!--
-   `title`: The name of the block pattern to be unregistered.
 -->
-   `title`: 登録解除するブロックパターンの名前

<!--
`unregister_block_pattern` allows unregistering a pattern previously registered on the server using `register_block_pattern`.
 -->
<!--
`unregister_block_pattern` は `register_block_pattern` を使用してサーバーに登録されたパターンの登録を解除します。
 -->

<!--
The following code sample unregisters the block pattern named 'my-plugin/my-awesome-pattern':
 -->
次のサンプルコードは、ブロックパターン「my-plugin/my-awesome-pattern」の登録を解除します。

```php
unregister_block_pattern( 'my-plugin/my-awesome-pattern' );
```
<!--
_Note:_
 -->
_注意:_

<!--
`unregister_block_pattern()` should be called from a handler attached to the init hook.
 -->
`unregister_block_pattern()` は、init フックにアタッチされたハンドラから呼ぶ必要があります。

```php
function my_plugin_unregister_my_patterns() {
  unregister_block_pattern( ... );
}

add_action( 'init', 'my_plugin_unregister_my_patterns' );
```
<!--
## Block Pattern Categories
 -->
## ブロックパターンカテゴリー

<!--
Block patterns can be grouped using categories. The block editor comes with bundled categories you can use on your custom block patterns. You can also register your own block pattern categories.
 -->
ブロックパターンはカテゴリーを使用してグループ分けできます。ブロックエディターにはカスタムブロックパターンでも利用可能な組み込みのカテゴリーが付属します。独自のブロックパターンカテゴリーを登録することもできます。

### register_block_pattern_category

<!--
The `register_block_pattern_category` helper function receives two arguments.
-   `title`: A machine-readable title for the block pattern category.
-	`properties`: An array describing properties of the pattern category.
 -->
`register_block_pattern_category` ヘルパー関数は2つの引数を取ります。
-   `title`: ブロックパターンカテゴリーの機械が読み取り可能なタイトル。
-	`properties`: パターンカテゴリーのプロパティを説明する配列

<!--
The properties of the pattern categories include:
-   `label` (required): A human-readable label for the pattern category.
 -->
パターンカテゴリーのプロパティを以下に示します。
- `label` (必須): 表示されるパターンカテゴリーの名前。

<!--
The following code sample registers the category named 'hero':
 -->
次のサンプルコードは、カテゴリー「hero」を登録します。

```php
register_block_pattern_category(
	'hero',
	array( 'label' => __( 'Hero', 'my-plugin' ) )
);
```

<!--
_Note:_
 -->
_注意:_

<!--
`register_block_pattern_category()` should be called from a handler attached to the init hook.
 -->
`register_block_pattern_category()` は、init フックにアタッチされたハンドラから呼ぶ必要があります。

```php
function my_plugin_register_my_pattern_categories() {
  register_block_pattern_category( ... );
}

add_action( 'init', 'my_plugin_register_my_pattern_categories' );
```

### unregister_block_pattern_category
<!--
`unregister_block_pattern_category` allows unregistering a pattern category.

The `unregister_block_pattern_category` helper function allows for a previously registered block pattern category to be unregistered from a theme or plugin and receives one argument.
-   `title`: The name of the block pattern category to be unregistered.

The following code sample unregisters the category named 'hero':
 -->
`unregister_block_pattern_category` はパターンカテゴリーの登録を解除します。

関数の引数は解除するパターンカテゴリーの名前です。

次のコードの例ではカテゴリー「hero」の登録を解除します。

```php
unregister_block_pattern_category( 'hero' );
```

<!--
_Note:_
 -->
_注意:_

`unregister_block_pattern_category()` は、init フックにアタッチされたハンドラから呼ぶ必要があります。

```php
function my_plugin_unregister_my_pattern_categories() {
  unregister_block_pattern_category( ... );
}

add_action( 'init', 'my_plugin_unregister_my_pattern_categories' );
```

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/block-api/block-patterns.md)
