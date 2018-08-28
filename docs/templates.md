<!--

# Templates

A block template is defined as a list of block items. Such blocks can have predefined attributes, placeholder content, and be static or dynamic. Block templates allow to specify a default initial state for an editor session.

-->

# テンプレート

ブロックテンプレートは、ブロック項目のリストとして定義されます。 このようなブロックにはあらかじめ定義済みの属性やプレースホルダコンテンツを持たせることができ、静的または動的にできます。 ブロックテンプレートを使用すると、エディタの初期状態を指定できます。

<!--

The scope of templates include:

- Setting a default state dynamically on the client. (like `defaultBlock`)
- Registered as a default for a given post type.

-->

テンプレートの影響範囲: 

- クライアント側で初期状態を動的に設定する （ `defaultBlock` のように）
- 特定の投稿タイプのデフォルトとして登録

<!--

Planned additions:

- Saved and assigned to pages as "page templates".
- Defined in a `template.php` file or pulled from a custom post type (`wp_templates`) that is site specific.
- As the equivalent of the theme hierarchy.

-->

予定されている追加機能:

- 「ページテンプレート」として固定ページへ保存、割り当て
- `template.php`ファイル内で定義するか、サイト特有のカスタム投稿タイプ (` wp_templates`) から読み込む
- テーマ階層に相当するもの

## API

<!--

Tempates can be declared in JS or in PHP as an array of blockTypes (block name and optional attributes).

-->

テンプレートはJSまたはPHPでブロックタイプ (ブロック名とオプション属性) の配列として宣言できます。

```js
const template = [
  [ 'block/name', {} ], // [ blockName, attributes ]
];
```

```php
'template' => array(
	array( 'block/name' ),
),
```
<!--

## Custom Post types

A custom post type can register its own template during registration:

-->

## カスタム投稿タイプ

カスタム投稿タイプ登録時に独自のテンプレートを登録できます。

```php
function register_post_type() {
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
add_action( 'init', 'register_post_type' );
```
<!--

### Locking

Sometimes the intention might be to lock the template on the UI so that the blocks presented cannot be manipulated. This is achieved with a `template_lock` property.

-->

### ロック

場合によっては、ブロックを操作できないようにUIでテンプレートをロックすることが考えられます。 これは `template_lock` プロパティによって可能です。

```php
'template_lock' => 'all', // or 'insert' to allow moving
```

<!--

*Options:*

- `all` — prevents all operations.
- `insert` — prevents inserting new blocks, but allows moving existing ones.

-->

## オプション

- `all` - すべての操作を防ぎます。
- `insert` - 新しいブロックの挿入を防ぎますが、既存のブロックの移動は可能です。

<!--

## Existing Post Types

It is also possible to assign a template to an existing post type like "posts" and "pages":

-->

## 既存の投稿タイプ

「投稿」や「固定ページ」のような既存の投稿タイプにテンプレートを割り当てることもできます。

```php
function my_add_template_to_posts() {
	$post_type_object = get_post_type_object( 'post' );
	$post_type_object->template = array(
		array( 'core/paragraph', array(
			'placeholder' => 'Add Description...',
		) ),
	);
	$post_type_object->template_lock = 'all';
}
add_action( 'init', 'my_add_template_to_posts' );
```