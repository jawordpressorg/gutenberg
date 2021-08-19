<!--
# Attributes
 -->
# 属性

<!--
Block attributes provide information about the data stored by a block. For example, rich content, a list of image URLs, a background colour, or a button title.

A block can contain any number of attributes, and these are specified by the `attributes` field - an object where each key is the name of the attribute, and the value is the attribute definition.

The attribute definition will contain, at a minimum, either a `type` or an `enum`. There may be additional fields.
 -->
「ブロック属性」は、ブロックによって保存されるデータについての情報を提供します。例えば、リッチコンテンツ、画像 URL のリスト、背景色、ボタンのタイトルなどです。

ブロックは任意の数の属性を含むことができ、属性は `attributes` フィールドで指定されます。この `attributes` フィールドは、属性名をキー、属性定義を値にもつオブジェクトです。

属性定義には、最低でも `type` または `enum` のいずれかが含まれ、オプションで追加のフィールドを含みます。

<!--
_Example_: Attributes object defining three attributes - `url`, `title`, and `size`.
 -->
_例_: 3つの属性 `url`、`title`、`size` を定義する属性オブジェクト

```js
{
	url: {
		type: 'string',
		source: 'attribute',
		selector: 'img',
		attribute: 'src',
	},
	title: {
		type: 'string',
	},
	size: {
		enum: [ 'large', 'small' ],
	},
}
```
<!--
When a block is parsed this definition will be used to extract data from the block content. Anything that matches will  be available to your block through the `attributes` prop.

This parsing process can be summarized as:
 -->
ブロックが解析される際、ブロックのコンテンツからデータを抽出するためにこの属性定義が使用されます。合致するものはすべて、`attributes` prop を通してブロックで利用できます。

解析プロセスは、以下のような流れになります。

<!--
1. Extract value from the `source`.
1. Check value matches the `type`, or is one of the `enum` values.
 -->
1. `source` から値を取り出す。
1. 値が `type` と合致するかをチェックする。または、`enum` 値の一つであるかをチェックする。

<!--
_Example_: Attributes available in the `edit` and function, using the above attributes definition.
 -->
_例_: 上の属性定義を使用して、`edit` や関数で利用される属性

```js
function YourBlockEdit( { attributes } ) {
	return (
		<p>URL is { attributes.url }, title is { attributes.title }, and size is { attributes.size }.</p>
	)
}
```

<!--
The block is responsible for using the `save` function to ensure that all attributes with a `source` field are saved according to the attributes definition. This is not automatic.

Attributes without a `source` will be automatically saved in the block [comment delimiter](/docs/getting-started/architecture/key-concepts.md#delimiters-and-parsing-expression-grammar).

For example, using the above attributes definition you would need to ensure that your `save` function has a corresponding img tag for the `url` attribute. The `title` and `size` attributes will be saved in the comment delimiter.
 -->
ブロックには、`save` 関数を使用して、`source` フィールドを持つすべての属性を、属性定義に従って保存する責任があります。これは自動的には行われません。

一方、`source` のない属性は、自動的にブロックの[コメントデリミタ](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/data-flow/#delimiters-and-parsing-expression-grammar)に保存されます。

例えば、上の属性定義を使用する場合、`save` 関数で、`url` 属性に対応する img タグがあることを確認する必要があります。一方、`title` と `size` 属性は、コメントデリミタに保存されます。

<!--
_Example_: Example `save` function that contains the `url` attribute
 -->
_例_: `url` 属性を含む、サンプルの `save` 関数

```js
function YourBlockSave( { attributes } ) {
	return (
		<img src={ attributes.url } />
	)
}
```
<!--
The saved HTML will contain the `title` and `size` in the comment delimiter, and the `url` in the `img` node.
 -->
保存されたHTMLには、コメントデリミタに `title` と `size` が、`img` ノードに `url` が含まれます。

```html
<!-- block:your-block {"title":"hello world","size":"large"} -->
<img src="/image.jpg" />
<!-- /block:your-block -->
```

<!--
If an attributes change over time then a [block deprecation](block-deprecation.md) can help migrate from an older attribute, or remove it entirely.
 -->
属性が時間の経過とともに変化する場合は、[非推奨プロセス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-deprecation/)に従って、古い属性から移行するか、完全に削除できます。

<!--
## Type Validation
 -->
## タイプの検証

<!--
The only required field for an attribute is the `type` field. It indicates the type of data that is stored within the attribute.

Accepted values in the `type` field MUST be one of the following:
 -->
<!--
属性の必須フィールドは `type` フィールドのみです。`type` は属性の中に保存されるデータの型を表します。

`type` フィールドに指定する値は以下でなければなりません。
 -->

<!--
The `type` indicates the type of data that is stored by the attribute. It does not indicate where the data is stored, which is defined by the `source` field.

A `type` is required, unless an `enum` is provided. A `type` can be used with an `enum`.

The `type` field MUST be one of the following:
 -->
`type` は属性に格納されているデータの種類を示します。`type` はデータがどこに保存されているかは示しません。これは `source` フィールドによって定義されます。

`enum` が提供されない限り、`type` は必須です。`type` は `enum` と一緒に使用できます。

`type` フィールドは以下でなければなりません。

<!--
-   null
-   boolean
-   object
-   array
-   number
-   string
-   integer
 -->

<!--
- `null`
- `boolean`
- `object`
- `array`
- `string`
- `integer`
- `number` (same as `integer`)
 -->
- `null`
- `boolean`
- `object`
- `array`
- `string`
- `integer`
- `number` (`integer` と同じ)

<!--
See [WordPress's REST API documentation](https://developer.wordpress.org/rest-api/extending-the-rest-api/schema/) for additional details.
 -->
<!--
詳細については [WordPress REST API ドキュメント](https://developer.wordpress.org/rest-api/extending-the-rest-api/schema/) を参照してください。
 -->
<!--
Note that the validity of an `object` is determined by your `source`. For an example, see the `query` details below.
 -->
`object` の検証は、`source` によって決定されることに注意してください。例として、以下の「query」の詳細を参照してください。

<!--
## Enum Validation
 -->
## enum の検証

<!--
An attribute can be defined as one of a fixed set of values. This is specified by an `enum`, which contains an array of allowed values:
 -->
属性は固定された値のセットの一つとして定義できます。これには `enum` を指定し、許可される値の配列を含めます。

<!--
_Example_: Example `enum`.
 -->
_例_: `enum` の例

```js
{
	size: {
		enum: [ 'large', 'small', 'tiny' ]
	}
}
```

<!--
## Common Sources
 -->
<!--
## 一般的なソース
 -->
<!--
## Value Source
 -->
## 値のソース

<!--
Attribute sources are used to define how the block attribute values are extracted from saved post content. They provide a mechanism to map from the saved markup to a JavaScript representation of a block.

If no attribute source is specified, the attribute will be saved to (and read from) the block's [comment delimiter](/docs/getting-started/architecture/key-concepts.md#delimiters-and-parsing-expression-grammar).
 -->
<!--
「属性ソース」は保存された投稿コンテンツからどのようにブロックの属性値を取り出すかを定義します。属性ソースは、保存済みのマークアップからブロックの JavaScript 表現をマップする方法を提供します。

属性ソースを指定しない場合、属性はブロックの [コメントデリミッター](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/key-concepts.md#delimiters-and-parsing-expression-grammar) に保存され、ロード時に読み出されます。
 -->
<!--
Attribute sources are used to define how the attribute values are extracted from saved post content. They provide a mechanism to map from the saved markup to a JavaScript representation of a block.

The available `source` values are:
- `(no value)` - when no `source` is specified then data is stored in the block's [comment delimiter](/docs/getting-started/architecture/key-concepts.md#delimiters-and-parsing-expression-grammar).
- `attribute` - data is stored in an HTML element attribute.
- `text` - data is stored in HTML text.
- `html` - data is stored in HTML. This is typically used by `RichText`.
- `query` - data is stored as an array of objects.
- `meta` - data is stored in post meta (deprecated).
 -->
「属性ソース」は、保存された投稿コンテンツから、どのように属性値を取り出すかを定義します。属性ソースは、保存されたマークアップから、ブロックのJavaScript表現にマッピングするメカニズムを提供します。

可能な `source` の値は以下のとおりです。

値:
- `(値なし)` - `source` が指定されていない場合、データはブロックの[コメントデリミタ](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/data-flow/#delimiters-and-parsing-expression-grammar)に保存されます。
- `attribute` - データは、HTML 要素の属性に保存されます。
- `text` - データは、HTML テキストに保存されます。
- `html` - データは、HTML に保存されます。この典型的な使用例は `RichText` です。
- `query` - データは、オブジェクトの配列に保存されます。
- `meta` - データは、投稿メタに保存されます (非推奨)。

<!--
The keys specified in the attributes source object are named as you see fit. The result of the attribute source definition is assigned as a value to each key.

If no selector argument is specified, the source definition runs against the block's root node. If a selector argument is specified, it will run against the specified element(s) contained within the block.
 -->
<!--
属性ソースオブジェクト内で指定するキーの名前は自由に付けられます。属性ソース定義の結果は各キーの値として割り当てられます。

`selector` 引数がない場合、ソース定義はブロックのルートノードに対して実行されます。`selector` 引数がある場合はブロック内に含まれる `selector` で指定された要素に対して実行されます。
 -->
<!--
The `source` field is usually combined with a `selector` field. If no selector argument is specified, the source definition runs against the block's root node. If a selector argument is specified, it will run against the matching element(s) within the block.
 -->
`source`フィールドは通常、`selector` フィールドと組み合わせて使用します。`selector` が指定されていない場合、ソース定義はブロックのルートノードに対して実行されます。`selector` がある場合は、ブロック内の合致する要素に対して実行されます。

<!--
The selector specified can be an HTML tag, or anything queryable such as a class or id attribute, see examples below.
 -->
<!--
セレクターは HTML タグのほか、クラスや id 属性など照会できるものであれば何でも指定できます。以下の例を参照してください。
 -->

<!--
The `selector` can be an HTML tag, or anything queryable with [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector), such as a class or id attribute. Examples are given below.

For example, a `selector` of `img` will match an `img` element, and `img.class` will match an `img` element that has a class of `class`.
 -->
`selector`には、HTMLタグのほか、[querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) で問い合わせ可能なもの、たとえば class や id 属性などを指定できます。以下に例を示します。

例えば、`img` の `selector` は `img` 要素に合致し、`img.class` は、クラス `class` を持つ `img` 要素に合致します。

<!--
Under the hood, attribute sources are a superset of the functionality provided by [hpq](https://github.com/aduth/hpq), a small library used to parse and query HTML markup into an object shape.
 -->
実装から見た場合、属性ソースは [hpq](https://github.com/aduth/hpq) によって提供される機能の上位セットとなる小さなライブラリーです。HTML マークアップを解析してオブジェクト形式にクエリーします。

<!--
To summarize, the `source` determines where data is stored in your content, and the `type` determines what that data is. To reduce the amount of data stored it is usually better to store as much data as possible within HTML rather than as attributes within the comment delimiter.
 -->
まとめると、`source` はコンテンツのどこにデータが保存されるかを決定し、`type` はそのデータが何であるかを決定します。保存されるデータの量を減らすには、通常、できるだけ多くのデータを、コメントデリミタ内の属性としてではなく、HTML 内に保存してください。

<!--
### `attribute`
 -->
<!--
### attribute
 -->
<!--
### `attribute` source
 -->
### attribute ソース

<!--
Use `attribute` to extract the value of an attribute from markup.
 -->
<!--
マークアップから属性の値を取り出すには `attribute` を使用します。
 -->
<!--
Use an `attribute` source to extract the value from an attribute in the markup. The attribute is specified by the `attribute` field, which must be supplied.
 -->
マークアップ内の属性から値を取り出すには、`attribute` ソースを使用します。このとき、`attribute` フィールドで指定される属性を必ず供給する必要があります。

<!--
_Example_: Extract the `src` attribute from an image found in the block's markup.
 -->
_例_: ブロックのマークアップ内の画像から `src` 属性を取り出す。

<!--
Saved content:
 -->
保存されたコンテンツ:

```html
<div>
	Block Content

	<img src="https://lorempixel.com/1200/800/" />
</div>
```
<!--
Attribute definition:
 -->
属性定義:

```js
{
	url: {
		type: 'string',
		source: 'attribute',
		selector: 'img',
		attribute: 'src',
	}
}
```
<!--
Attribute available in the block:
 -->
ブロック内で利用可能な属性:

```js
{ "url": "https://lorempixel.com/1200/800/" }
```

<!--
Most attributes from markup will be of type `string`. Numeric attributes in HTML are still stored as strings, and are not converted automatically.
 -->
マークアップからのほとんどの属性のタイプは `string` です。HTML の数字の属性も文字列として保存され、自動では変換されません。

```js
{
	width: {
		type: 'string',
		source: 'attribute',
		selector: 'img',
		attribute: 'width',
	}
}
```

```js
{ "width": "50" }
```

<!--
The only exception is when checking for the existence of an attribute (for example, the `disabled` attribute on a `button`). In that case type `boolean` can be used and the stored value will be a boolean.
 -->
例外は `button` の `disabled` 属性のような、属性の存在を確認する場合です。この場合にはタイプ `boolean` を使用でき、保存した値も boolean になります。

```js
{
	disabled: {
		type: 'boolean',
		source: 'attribute',
		selector: 'button',
		attribute: 'disabled',
	}
}
```

```js
{ "disabled": true }
```

<!--
### `text`
 -->
<!--
### text
 -->
<!--
### `text` source
 -->
### text ソース

<!--
Use `text` to extract the inner text from markup.
 -->
<!--
マークアップから内部のテキストを取り出すには `text` を使用します。
 -->
<!--
Use `text` to extract the inner text from markup. Note that HTML is returned according to the rules of [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent).
 -->
マークアップから内部のテキストを取り出すには、`text` を使用します。注意: HTML は [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) のルールに基づいて返されます。

<!--
Saved content:
 -->
保存されたコンテンツ:

```html
<figure>
	<img src="/image.jpg" />

	<figcaption>The inner text of the figcaption element</figcaption>
</figure>
```
<!--
Attribute definition:
 -->
属性定義:

```js
{
	content: {
		type: 'string',
		source: 'text',
		selector: 'figcaption',
	}
}
```
<!--
Attribute available in the block:
 -->
ブロック内で利用可能な属性:

```js
{ "content": "The inner text of the figcaption element" }
```
<!--
Another example, using `text` as the source, and using `.my-content` class as the selector to extract text:
 -->
次の例では source として `text`、selector として `.my-content` クラスを使用してテキストを抽出しています。

<!--
Saved content:
 -->
保存されたコンテンツ:

```html
<div>
	<img src="/image.jpg" />

	<p class="my-content">The inner text of .my-content class</p>
</div>
```
<!--
Attribute definition:
 -->
属性定義:

```js
attributes {
	content: {
		type: 'string',
		source: 'text',
		selector: '.my-content',
	}
}
```
<!--
Attribute available in the block:
 -->
ブロック内で利用可能な属性:

```js
{ "content": "The inner text of .my-content class" }
```
<!--
### `html`
 -->
### html ソース

<!--
Use `html` to extract the inner HTML from markup.
 -->
<!--
マークアップから内部の HTML を取り出すには `html` を使用します。
 -->
<!--
Use `html` to extract the inner HTML from markup. Note that text is returned according to the rules of [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerHTML).
 -->
マークアップから内部の HTML を取り出すには、`html` を使用します。注意: テキストは [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerHTML) のルールに基づいて返されます。

<!--
Saved content:
 -->
保存されたコンテンツ:

```html
<figure>
	<img src="/image.jpg" />

	<figcaption>The inner text of the <strong>figcaption</strong> element</figcaption>
</figure>
```

<!--
Attribute definition:
 -->
属性定義:

```js
attributes {
	content: {
		type: 'string',
		source: 'html',
		selector: 'figcaption',
	}
}
```
<!--
Attribute available in the block:
 -->
ブロック内で利用可能な属性:

```js
{ "content": "The inner text of the <strong>figcaption</strong> element" }
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
```
<!--
Attribute available in the block:
 -->
ブロック内で利用可能な属性:

```js
{ "content": "<p>First line</p><p>Second line</p>" }
```
<!--
### `query`
 -->
### query ソース

<!--
Use `query` to extract an array of values from markup. Entries of the array are determined by the selector argument, where each matched element within the block will have an entry structured corresponding to the second argument, an object of attribute sources.
 -->
<!--
マークアップから値の配列を取り出すには `query` を使用します。配列のエントリーは selector 引数で決定され、ブロック内で合致した各要素は、2番目の引数、属性ソースのオブジェクトに対応して構造化されたエントリーを持ちます。
 -->
<!--
Use `query` to extract an array of values from markup. Entries of the array are determined by the `selector` argument, where each matched element within the block will have an entry structured corresponding to the second argument, an object of attribute sources.

The `query` field is effectively a nested block attributes definition. It is possible (although not necessarily recommended) to nest further.
 -->
マークアップから値の配列を取り出すには `query` を使用します。配列のエントリーは `selector` 引数によって決定されます。このとき、ブロック内で合致した各要素は、2番目の引数である属性ソースのオブジェクトに対応するエントリー構造を持ちます。

`query`フィールドは、事実上、ネストされたブロック属性定義です。必ずしも推奨はしませんが、さらに入れ子にすることも可能です。

<!--
_Example_: Extract `src` and `alt` from each image element in the block's markup.
 -->
_例_: ブロックのマークアップ内の各画像要素から `src` と `alt` を取り出す。

<!--
Saved content:
 -->
保存されたコンテンツ:

```html
<div>
	<img src="https://lorempixel.com/1200/800/" alt="large image" />
	<img src="https://lorempixel.com/50/50/" alt="small image" />
</div>
```

<!--
Attribute definition:
 -->
属性定義:

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
```
<!--
Attribute available in the block:
 -->
ブロック内で利用可能な属性:

```js
{
  "images": [
    { "url": "https://lorempixel.com/1200/800/", "alt": "large image" },
    { "url": "https://lorempixel.com/50/50/", "alt": "small image" }
  ]
}
```

<!--
## Meta (deprecated)
 -->
## meta ソース (非推奨)
<!--
<div class="callout callout-alert">
Although attributes may be obtained from a post's meta, meta attribute sources are considered deprecated; <a href="https://github.com/WordPress/gutenberg/blob/c367c4e2765f9e6b890d1565db770147efca5d66/packages/core-data/src/entity-provider.js">EntityProvider and related hook APIs</a> should be used instead, as shown in the <a href="/block-editor/how-to-guides/metabox/meta-block-3-add/">Create Meta Block how-to</a>.
</div>
 -->
**注意**
投稿の meta から属性を取得できますが、meta 属性ソースは非推奨です。代わりに <a href="https://github.com/WordPress/gutenberg/blob/c367c4e2765f9e6b890d1565db770147efca5d66/packages/core-data/src/entity-provider.js">EntityProvider と関連するフック API</a> を使用してください。「<a href="https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/metabox/meta-block-3-add/">メタブロックの作成</a>」も参照してください。

<!--
Attributes may be obtained from a post's meta rather than from the block's representation in saved post content. For this, an attribute is required to specify its corresponding meta key under the `meta` key:
 -->
属性は保存された投稿コンテンツ内のブロック表現からだけでなく、投稿のメタ情報からも取り出すこともできます。このとき属性は 対応するメタキーを `meta` キーに指定する必要があります。

```js
{
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

<!--
## Default Value
 -->
## デフォルト値

<!--
A block attribute can contain a default value, which will be used if the `type` and `source` do not match anything within the block content.

The value is provided by the `default` field, and the value should match the expected format of the attribute.
 -->
ブロック属性にはデフォルト値を持てます。`type` と `source` がブロックコンテンツ内のいずれにも合致しない場合に使用されます。

値は `default` フィールドで提供され、この値は属性に期待されるフォーマットと合致する必要があります。

<!--
_Example_: Example `default` values.
 -->
_例_: `default` 値の例

```js
{
	type: 'string',
	default: 'hello world'
}
```

```js
{
	type: 'array',
	default: [
		{ "url": "https://lorempixel.com/1200/800/", "alt": "large image" },
    	{ "url": "https://lorempixel.com/50/50/", "alt": "small image" }
	]
}
```

```js
{
	type: 'object',
	default: {
		width: 100,
		title: 'title'
	}
}
```

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-attributes.md)
