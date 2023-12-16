<!--
# Patterns
 -->
# パターン

<!--
Block Patterns are predefined block layouts, available from the patterns tab of the block inserter. Once inserted into content, the blocks are ready for additional or modified content and configuration.
 -->
ブロックパターンは、あらかじめ定義されたブロックのレイアウトです。ブロックインサーターの「パターン」タブから利用できます。ブロックパターンをコンテンツ内に挿入すると、含まれるブロックのコンテンツや構成を追加、変更できます。

<!--
In this Document:
 -->
目次

<!-- 
- [Patterns](#patterns)
	- [Block Patterns](#block-patterns)
		- [register_block_pattern](#register_block_pattern)
	- [Unregistering Block Patterns](#unregistering-block-patterns)
		- [unregister_block_pattern](#unregister_block_pattern)
	- [Block Pattern Categories](#block-pattern-categories)
		- [register_block_pattern_category](#register_block_pattern_category)
		- [unregister_block_pattern_category](#unregister_block_pattern_category)
	- [Block patterns contextual to block types and pattern transformations](#block-patterns-contextual-to-block-types-and-pattern-transformations)
	- [Semantic block patterns](#semantic-block-patterns)
 -->

- パターン
	- ブロックパターン
		- register_block_pattern
	- ブロックパターンの登録の解除
		- unregister_block_pattern
	- ブロックパターンカテゴリー
		- register_block_pattern_category
		- unregister_block_pattern_category
	- ブロックタイプやパターン変換のコンテキストに応じたブロックパターン 
	- セマンティックブロックパターン

<!--
## Block Patterns
 -->
## ブロックパターン

### register_block_pattern

<!--
The editor comes with several core block patterns. Theme and plugin authors can register additional custom block patterns using the `register_block_pattern` helper function.
 -->
エディターにはいくつかのコアブロックパターンが付属します。それ以外にテーマやプラグインの作者は `register_block_pattern` ヘルパー関数を使用して、追加のカスタムブロックパターンを登録できます。

<!--
The `register_block_pattern` helper function receives two arguments.
-   `title`: A machine-readable title with a naming convention of `namespace/title`.
-	`properties`: An array describing properties of the pattern.
 -->
`register_block_pattern` ヘルパー関数は2つの引数を取ります。
-   `title`: 機械が読めるタイトル。命名規約は `namespace/title`
-	`properties`: パターンのプロパティを説明する配列

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
-   `blockTypes` (optional): An array of block types that the pattern is intended to be used with. Each value needs to be the declared block's `name`.
-   `postTypes` (optional): An array of post types that the pattern is restricted to be used with. The pattern will only be available when editing one of the post types passed on the array, for all the other post types the pattern is not available at all.
-   `templateTypes` (optional): An array of template types where the pattern makes sense e.g: '404' if the pattern is for a 404 page, single-post if the pattern is for showing a single post.
-   `inserter` (optional): By default, all patterns will appear in the inserter. To hide a pattern so that it can only be inserted programmatically, set the `inserter` to `false`.
-   `source` (optional): A string that denotes the source of the pattern. For a plugin registering a pattern, pass the string 'plugin'. For a theme, pass the string 'theme'.
 -->
-   `title` (必須): 表示されるパターンのタイトル。
-   `content` (必須): パターンのブロック HTML マークアップ。
-   `description` (オプション): インスペクター内でパターンの記述に使用される非表示のテキスト。オプションだがタイトルで十分にブロックの動作を表せない場合は強く推奨。ユーザーの検索を支援する。
-   `categories` (オプション): ブロックパターンのグループ化に使用される、登録されたパターンカテゴリーの配列。ブロックパターンは複数のカテゴリーに分けて表示できる。ここで使用するには、カテゴリーを個別に登録する必要がある。
-   `keywords` (オプション): 検索の際に役立つ別名またはキーワードの配列。
-   `viewportWidth` (オプション): インサーター内でのパターンのインデント幅を指定する整数。パターンのスケールするプレビュー用。
-   `blockTypes` (オプション): パターンが一緒に使われることを想定するブロックタイプの配列。各値は、ブロックの `name` で宣言される必要がある。
-   `postTypes` (オプション): このパターンを使用可能な投稿タイプの配列。配列で指定した投稿タイプのいずれかを編集する際にのみこのパターンを使用でき、その他のすべての投稿タイプではまったく使用できない。
-   `templateTypes` (オプション): パターンの想定する、テンプレートタイプの配列。例: パターンが 404 ページ用であれば '404'。パターンが単一の投稿用であれば single-post。
-   `inserter` (オプション): デフォルトでは、すべてのパターンはインサーターに表示される。パターンを非表示にして、プログラムでのみ挿入できるようにするには、`inserter` に `false` を設定する。
-   `source` (オプション): パターンのソースを示す文字列。パターンを登録するプラグインの場合は、文字列 'plugin' を指定し、テーマの場合は文字列 'theme' を指定する。

<!--
The following code sample registers a block pattern named 'my-plugin/my-awesome-pattern':
 -->
次のサンプルコードは、ブロックパターン「my-plugin/my-awesome-pattern」を登録します。

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
`unregister_block_pattern` ヘルパー関数を使用すると、テーマやプラグインからブロックパターンの登録を解除できます。1つの引数を取ります。
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

<!-- 
The category will not show under Patterns unless a pattern has been assigned to that category.
 -->
パターンがあるカテゴリーに割り当てられていなければ、そのカテゴリーはパターンの下に表示しません。

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
<!-- 
## Block patterns contextual to block types and pattern transformations
 -->
## ブロックタイプやパターン変換のコンテキストに応じたブロックパターン 

<!-- 
It is possible to attach a block pattern to one or more block types. This adds the block pattern as an available transform for that block type.
 -->
1つまたは複数のブロックタイプにブロックパターンをアタッチできます。これにより、そのブロックタイプで使用可能な変換としてブロックパターンが追加されます。

<!-- 
Currently these transformations are available only to simple blocks (blocks without inner blocks). In order for a pattern to be suggested, **every selected block must be present in the block pattern**.
 -->
現在、これらの変換は単純なブロック (内部ブロックを持たないブロック) でのみ可能です。パターンが提案されるには、**選択されたすべてのブロックがブロックパターンに存在する必要があります**。

<!-- 
For instance:
 -->
例:

```php
register_block_pattern(
	'my-plugin/powered-by-wordpress',
	array(
		'title'      => __( 'Powered by WordPress', 'my-plugin' ),
		'blockTypes' => array( 'core/paragraph' ),
		'content'    => '<!-- wp:paragraph {"backgroundColor":"black","textColor":"white"} -->
		<p class="has-white-color has-black-background-color has-text-color has-background">Powered by WordPress</p>
		<!-- /wp:paragraph -->',
	)
);
```
<!-- 
The above code registers a block pattern named 'my-plugin/powered-by-wordpress' and also shows the pattern in the "transform menu" of paragraph blocks. The transformation result will be keeping the paragraph's existing content and also apply the other attributes - in this case the background and text color.
 -->
上のコードは、ブロックパターン `my-plugin/powered-by-wordpress` を登録し、段落ブロックの「変換」メニューにパターンを表示します。変換結果は、段落の既存のコンテンツを維持したまま、他の属性 (この場合は背景とテキストの色) を適用します。

<!-- 
As mentioned above pattern transformations for simple blocks can also work if we have selected multiple blocks and there are matching contextual patterns to these blocks. Let's see an example of a pattern where two block types are attached.
 -->
上で述べたように、単純なブロックに対するパターン変換は、複数のブロックを選択し、かつ、これらのブロックに対応するコンテキストパターンがある場合にも機能します。2つのブロックタイプがアタッチされたパターンの例を見ます。

```php
register_block_pattern(
	'my-plugin/powered-by-wordpress',
	array(
		'title'      => __( 'Powered by WordPress', 'my-plugin' ),
		'blockTypes' => array( 'core/paragraph', 'core/heading' ),
		'content'    => '<!-- wp:group -->
						<div class="wp-block-group">
						<!-- wp:heading {"fontSize":"large"} -->
						<h2 class="has-large-font-size"><span style="color:#ba0c49" class="has-inline-color">Hi everyone</span></h2>
						<!-- /wp:heading -->
						<!-- wp:paragraph {"backgroundColor":"black","textColor":"white"} -->
						<p class="has-white-color has-black-background-color has-text-color has-background">Powered by WordPress</p>
						<!-- /wp:paragraph -->
						</div><!-- /wp:group -->',
	)
);
```
<!-- 
In the above example if we select **one of the two** block types, either a paragraph or a heading block, this pattern will be suggested by transforming the selected block using its content and will also add the remaining blocks from the pattern. If on the other hand we multi select one paragraph and one heading block, both blocks will be transformed.
 -->
上の例では、**2つのブロックタイプのうち1つ**、段落または見出しブロックのどちらかを選択すると、選択したブロックをその内容を使って変換し、パターンから残りのブロックを追加して、このパターンが提案されます。一方、1つの段落と1つの見出しブロックを複数選択すると、両方のブロックが変換されます。

<!-- 
Blocks can also use these contextual block patterns in other places. For instance, when inserting a new Query Loop block, the user is provided with a list of all patterns attached to the block.
 -->
ブロックは、このコンテキストに応じたブロックパターンを他の場所でも使用できます。例えば、新しいクエリーループブロックを挿入すると、ブロックにアタッチされたすべてのパターンのリストが提供されます。

<!-- 
## Semantic block patterns
 -->
## セマンティックブロックパターン

<!-- 
In block themes, you can also mark block patterns as "header" or "footer" patterns (template part areas). We call these "semantic block patterns". These patterns are shown to the user when inserting or replacing header or footer template parts.
 -->
ブロックテーマでは、ブロックパターンを「ヘッダー」パターン、「フッター」パターン (テンプレートパーツ領域) としてもマークできます。これを「セマンティックブロックパターン」と呼びます。これらのパターンは、ヘッダーテンプレートパーツやフッターテンプレートパーツの挿入、置換の際に表示されます。

<!-- 
Example:
 -->
例:

<!-- 
```php
<?php
register_block_pattern(
	'my-plugin/my-header',
	array(
		'title'      => __( 'My Header', 'my-plugin' ),
		'categories' => array( 'header' ),
		// Assigning the pattern the "header" area.
		'blockTypes' => array( 'core/template-part/header' ),
		'content'    => 'Content of my block pattern',
	)
);
```
 -->
```php
<?php
register_block_pattern(
	'my-plugin/my-header',
	array(
		'title'      => __( 'My Header', 'my-plugin' ),
		'categories' => array( 'header' ),
		// パターンを「header」領域に割り当て
		'blockTypes' => array( 'core/template-part/header' ),
		'content'    => 'Content of my block pattern',
	)
);
```

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-patterns.md)
