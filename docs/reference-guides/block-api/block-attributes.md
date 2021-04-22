<!--
# Attributes
 -->
# 属性
<!--
## Type Validation
 -->
## タイプの妥当性検証

<!--
The only required field for an attribute is the `type` field. It indicates the type of data that is stored within the attribute.

Accepted values in the `type` field MUST be one of the following:
 -->
属性の必須フィールドは `type` フィールドのみです。`type` は属性の中に保存されるデータの型を表します。

`type` フィールドに指定する値は以下でなければなりません。

-   null
-   boolean
-   object
-   array
-   number
-   string
-   integer
<!--
See [WordPress's REST API documentation](https://developer.wordpress.org/rest-api/extending-the-rest-api/schema/) for additional details.
 -->
詳細については [WordPress REST API ドキュメント](https://developer.wordpress.org/rest-api/extending-the-rest-api/schema/) を参照してください。

<!--
## Common Sources
 -->
## 一般的なソース

<!--
Attribute sources are used to define how the block attribute values are extracted from saved post content. They provide a mechanism to map from the saved markup to a JavaScript representation of a block.

If no attribute source is specified, the attribute will be saved to (and read from) the block's [comment delimiter](/docs/getting-started/architecture/key-concepts.md#delimiters-and-parsing-expression-grammar).
 -->
「属性ソース」は保存された投稿コンテンツからどのようにブロックの属性値を取り出すかを定義します。属性ソースは、保存済みのマークアップからブロックの JavaScript 表現をマップする方法を提供します。

属性ソースを指定しない場合、属性はブロックの [コメントデリミッター](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/key-concepts.md#delimiters-and-parsing-expression-grammar) に保存され、ロード時に読み出されます。

<!--
The keys specified in the attributes source object are named as you see fit. The result of the attribute source definition is assigned as a value to each key.

If no selector argument is specified, the source definition runs against the block's root node. If a selector argument is specified, it will run against the specified element(s) contained within the block.
 -->
属性ソースオブジェクト内で指定するキーの名前は自由に付けられます。属性ソース定義の結果は各キーの値として割り当てられます。

`selector` 引数がない場合、ソース定義はブロックのルートノードに対して実行されます。`selector` 引数がある場合はブロック内に含まれる `selector` で指定された要素に対して実行されます。

<!--
The selector specified can be an HTML tag, or anything queryable such as a class or id attribute, see examples below.

Under the hood, attribute sources are a superset of the functionality provided by [hpq](https://github.com/aduth/hpq), a small library used to parse and query HTML markup into an object shape.
 -->
セレクターは HTML タグのほか、クラスや id 属性など照会できるものであれば何でも指定できます。以下の例を参照してください。

実装から見た場合、属性ソースは [hpq](https://github.com/aduth/hpq) が提供する機能の上位セットとなる小さなライブラリーです。HTML マークアップをパースし、オブジェクト形式にクエリーします。

<!--
### `attribute`
 -->
### attribute

<!--
Use `attribute` to extract the value of an attribute from markup.

_Example_: Extract the `src` attribute from an image found in the block's markup.
 -->
マークアップから属性の値を取り出すには `attribute` を使用します。

_例_: ブロックのマークアップ内の画像から `src` 属性を取り出す。

```js
{
	url: {
		type: 'string',
		source: 'attribute',
		selector: 'img',
		attribute: 'src',
	}
}
// { "url": "https://lorempixel.com/1200/800/" }
```
<!--
Most attributes from markup will be of type `string`. Numeric attributes in HTML are still stored as strings, and are not converted automatically.
 -->
マークアップのほとんどの属性タイプは `string` です。HTML の数字の属性も文字列として保存され自動では変換されません。

```js
{
	width: {
		type: 'string',
		source: 'attribute',
		selector: 'img',
		attribute: 'width',
	}
}
// { "width": "50" }
```

<!--
The only exception is when checking for the existence of an attribute (for example, the `disabled` attribute on a `button`). In that case type `boolean` can be used and the stored value will be a boolean.
 -->
例外は `button` の `disabled` 属性のような、属性の存在を確認する場合です。この場合にはタイプ `boolean` を使うことができ保存した値も boolean になります。

```js
{
	disabled: {
		type: 'boolean',
		source: 'attribute',
		selector: 'button',
		attribute: 'disabled',
	}
}
// { "disabled": true }
```
<!--
### `text`
 -->
### text
<!--
Use `text` to extract the inner text from markup.
 -->
マークアップから内部のテキストを取り出すには `text` を使用します。

```js
{
	content: {
		type: 'string',
		source: 'text',
		selector: 'figcaption',
	}
}
// { "content": "The inner text of the figcaption element" }
```
<!--
Another example, using `text` as the source, and using `.my-content` class as the selector to extract text:
 -->
次の例では source として `text`、selector として `.my-content` クラスを使用してテキストを抽出しています。

```js
{
	content: {
		type: 'string',
		source: 'text',
		selector: '.my-content',
	}
}
// { "content": "The inner text of .my-content class" }
```
<!--
### `html`
 -->
### html

<!--
Use `html` to extract the inner HTML from markup.
 -->
マークアップから内部の HTML を取り出すには `html` を使用します。

```js
{
	content: {
		type: 'string',
		source: 'html',
		selector: 'figcaption',
	}
}
// { "content": "The inner text of the <strong>figcaption</strong> element" }
```
<!--
Use the `multiline` property to extract the inner HTML of matching tag names for the use in `RichText` with the `multiline` prop.
 -->
`RickText` 内から複数のタグ名に合致する內部 HTML を取り出すには `multiline` プロパティを使用してください。

```js
{
	content: {
		type: 'string',
		source: 'html',
		multiline: 'p',
		selector: 'blockquote',
	}
}
// { "content": "<p>First line</p><p>Second line</p>" }
```
<!--
### `query`
 -->
### query

<!--
Use `query` to extract an array of values from markup. Entries of the array are determined by the selector argument, where each matched element within the block will have an entry structured corresponding to the second argument, an object of attribute sources.

_Example_: Extract `src` and `alt` from each image element in the block's markup.
 -->
マークアップから値の配列を取り出すには `query` を使用します。配列のエントリーは selector 引数で決定され、ブロック内で合致した各要素は、2番目の引数、属性ソースのオブジェクトに対応して構造化されたエントリーを持ちます。

_例_: ブロックのマークアップ内の各画像要素から `src` と `alt` を取り出す。

```js
{
	images: {
		type: 'array',
		source: 'query',
		selector: 'img',
		query: {
			url: {
				type: 'string',
				source: 'attribute',
				attribute: 'src',
			},
			alt: {
				type: 'string',
				source: 'attribute',
				attribute: 'alt',
			},
		}
	}
}
// {
//   "images": [
//     { "url": "https://lorempixel.com/1200/800/", "alt": "large image" },
//     { "url": "https://lorempixel.com/50/50/", "alt": "small image" }
//   ]
// }
```

## meta

<!--
Attributes may be obtained from a post's meta rather than from the block's representation in saved post content. For this, an attribute is required to specify its corresponding meta key under the `meta` key:
 -->
属性は保存された投稿コンテンツ内のブロック表現からだけでなく、投稿のメタ情報からも取り出すこともできます。このとき属性は 対応するメタキーを `meta` キーに指定する必要があります。

```js
attributes: {
	author: {
		type: 'string',
		source: 'meta',
		meta: 'author'
	},
},
```
<!--
From here, meta attributes can be read and written by a block using the same interface as any attribute:
 -->
メタ属性は任意の属性と同じインターフェースを使用してブロックから読み書きできます。

**ESNext**
{% codetabs %}
{% ESNext %}

```js
edit( { attributes, setAttributes } ) {
	function onChange( event ) {
		setAttributes( { author: event.target.value } );
	}

	return <input value={ attributes.author } onChange={ onChange } type="text" />;
},
```

**ES5**
{% ES5 %}

```js
edit: function( props ) {
	function onChange( event ) {
		props.setAttributes( { author: event.target.value } );
	}

	return el( 'input', {
		value: props.attributes.author,
		onChange: onChange,
	} );
},
```

{% end %}
<!--
### Considerations
 -->
### 考慮点
<!--
By default, a meta field will be excluded from a post object's meta. This can be circumvented by explicitly making the field visible:
 -->
デフォルトではメタフィールドは投稿オブジェクトのメタから除外されます。これを回避するにはフィールドを明示的に見えるようにします。

```php
function gutenberg_my_block_init() {
	register_post_meta( 'post', 'author', array(
		'show_in_rest' => true,
	) );
}
add_action( 'init', 'gutenberg_my_block_init' );
```
<!--
Furthermore, be aware that WordPress defaults to:

-   not treating a meta datum as being unique, instead returning an array of values;
-   treating that datum as a string.

If either behavior is not desired, the same `register_post_meta` call can be complemented with the `single` and/or `type` parameters as follows:
 -->

さらに WordPress のデフォルトに注意してください。

- 1つのメタデータを単一として扱わず、代わりに値の配列を返します。
- データを文字列として扱います。

どちらの動きも希望しない場合には、同じ `register_post_meta` を `single` かつまたは `type` パラメータを指定して呼び出します。

```php
function gutenberg_my_block_init() {
	register_post_meta( 'post', 'author_count', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'integer',
	) );
}
add_action( 'init', 'gutenberg_my_block_init' );
```
<!--
If you'd like to use an object or an array in an attribute, you can register a `string` attribute type and use JSON as the intermediary. Serialize the structured data to JSON prior to saving, and then deserialize the JSON string on the server. Keep in mind that you're responsible for the integrity of the data; make sure to properly sanitize, accommodate missing data, etc.
 -->
引数にオブジェクトまたは配列を使用したい場合には `string` 属性タイプを登録し JSON を中継役に使用します。まず構造化データを JSON にシリアライズして保存し、サーバー側で JSON 文字列をデシリアライズします。このときデータの整合性に責任があることに注意してください。適切なサニタイズや失われたデータの調節などが必要です。

<!--
Lastly, make sure that you respect the data's type when setting attributes, as the framework does not automatically perform type casting of meta. Incorrect typing in block attributes will result in a post remaining dirty even after saving (_cf._ `isEditedPostDirty`, `hasEditedAttributes`). For instance, if `authorCount` is an integer, remember that event handlers may pass a different kind of data, thus the value should be cast explicitly:
 -->
最後に属性を設定する差にはデータのタイプを尊重してください。なぜならフレームワークは自動でメタの型変換を実行しないためです。ブロック属性の誤った型は保存した後も投稿を dirty のままにします (_参照_ `isEditedPostDirty`、`hasEditedAttributes`)。たとえば `authorCount` が integer なら、イベントハンドラは異なる種類のdataを渡す可能性があるため、値を明示的に型変換する必要があります。

```js
function onChange( event ) {
	props.setAttributes( { authorCount: Number( event.target.value ) } );
}
```
