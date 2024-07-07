<!--
# Registration
 -->
# 登録

<!--
Block registration API reference.
 -->
ブロック登録 API リファレンス

<!--
**Note:** You can use the functions documented on this page, but a flexible method to register new block types is to use the block.json metadata file. See [metadata documentation for complete information](/docs/reference-guides/block-api/block-metadata.md).
**Note:** You can use the functions documented on this page to register a block on the client-side only, but a flexible method to register new block types is to use the `block.json` metadata file. See [metadata documentation for complete information](/docs/reference-guides/block-api/block-metadata.md).
 -->
<!-- 
**注意:** このページで紹介する関数を使用しても、クライアント側でのみブロックを登録できますが、block.json メタデータファイルを使用した方がフレキシブルです。メタデータの完全な情報については、[こちらのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/)を参照してください。
 -->
<!-- 
<div class="callout callout-alert">
You can use the functions documented on this page to register a block with JavaScript only on the client, but the recommended method is to register new block types also with PHP on the server using the `block.json` metadata file. See <a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/">metadata documentation for complete information</a>
<br/>
<a href="https://developer.wordpress.org/block-editor/getting-started/create-block/">Learn how to create your first block</a> for the WordPress block editor. From setting up your development environment, tools, and getting comfortable with the new development model, this tutorial covers all you need to know to get started with creating blocks.
</div>
 -->

注意: このページで説明した関数は、クライアントサイドの JavaScript でのみブロックを登録できます。しかし、サーバー上の PHP も含め、新しいブロックタイプを登録する推奨の方法は、メタデータファイル `block.json` です。メタデータファイルの<a href="https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/">完全な情報については、メタデータのドキュメント</a>を参照してください。

WordPress ブロックエディターの「<a href="https://ja.wordpress.org/team/handbook/block-editor/getting-started/create-block/">はじめてのブロックの作り方</a>」を学習してください。このチュートリアルでは開発環境のセットアップ、ツール、新しい開発モデルの学習等、ブロックの作成を始めるために必要なすべてがカバーされます。

<!--
## `registerBlockType`
 -->
## registerBlockType 関数

-   **Type:** `Function`

<!--
Every block starts by registering a new block type definition. To register, you use the `registerBlockType` function from the [`wp-blocks` package](/packages/blocks/README.md#registerBlockType). The function takes two arguments, a block `name` and a block configuration object.
 -->
すべてのブロックの作成は、新しいブロックタイプ定義の登録から始まります。登録には [`wp-blocks` パッケージ](https://developer.wordpress.org/block-editor/packages/packages-blocks/#registerBlockType) の `registerBlockType` 関数を使用します。関数はブロック名とブロック構成オブジェクトの2つの引数を取ります。

<!--
### Block Name
 -->
### ブロック名

-   **Type:** `String`

<!--
The name for a block is a unique string that identifies a block. Names have to be structured as `namespace/block-name`, where namespace is the name of your plugin or theme.

```js
// Registering my block with a unique name
registerBlockType( 'my-plugin/book', {} );
```
 -->
ブロック名はブロックを一意に識別する固有の文字列です。ブロック名は「`namespace/block-name`」の形式を取り、namespace はプラグインやテーマの名前になります。

```js
// ブロックを一意の名前で登録
registerBlockType( 'my-plugin/book', {} );
```

<!--
_Note:_ A block name can only contain lowercase alphanumeric characters and dashes, and must begin with a letter.

_Note:_ This name is used on the comment delimiters as `<!-- wp:my-plugin/book -->
<!--`. Those blocks provided by core don't include a namespace when serialized.
 -->
_注意:_ ブロック名には英小文字、数字、ダッシュのみを使うことができます。またブロック名は文字で始まる必要があります。

_注意:_ ブロック名はコメントデリミッタとして `<!-- wp:my-plugin/book -->` のように使用されます。コアで提供されるブロックはシリアライズの際に名前空間が削除されます。

<!--
### Block configuration
 -->
### ブロック構成

-   **Type:** `Object` [ `{ key: value }` ]

登録する際、ブロックにプロパティを指定できます。プロパティは構成オブジェクトで定義します。

プロパティの一覧は以下のとおりです。

#### title

-   **Type:** `String`
<!--
This is the display title for your block, which can be translated with our translation functions. The title will display in the Inserter and in other areas of the editor.

```js
// Our data object
title: __( 'Book' );
```
 -->
ブロックの表示タイトル。翻訳関数を使用して翻訳できます。ブロックインサーターやエディターの他の領域は、このタイトルを表示します。

```js
// データオブジェクト
title: __( 'Book' );
```
<!-- 
_Note:_ To keep your block titles readable and accessible in the UI, try to avoid very long titles.
 -->
_注意:_ UIで読みやすく、アクセスしやすいブロックタイトルにするには、長過ぎるタイトルは避けてください。


<!--
#### description (optional)
 -->
#### description (オプション)

-   **Type:** `String`
<!--
This is a short description for your block, which can be translated with our translation functions. This will be shown in the Block Tab in the Settings Sidebar.
 -->
ブロックの簡単な説明。翻訳関数を使用して翻訳できます。「設定」サイドバーの「ブロック」タブで表示されます。

```js
description: __( 'Block showing a Book card.' );
```

#### category

-   **Type:** `String` [ text | media | design | widgets | theme | embed ]
<!--
Blocks are grouped into categories to help users browse and discover them.

The core provided categories are:

-   text
-   media
-   design
-   widgets
-   theme
-   embed

```js
// Assigning to the 'widgets' category
category: 'widgets',
```

Plugins and Themes can also register [custom block categories](/docs/reference-guides/filters/block-filters.md#managing-block-categories).
 -->
ブロックはユーザーの見やすさ、検索しやすさのためカテゴリーにグループ分けされます。

コアで提供されるカテゴリー一覧:

-   text  (テキスト)
-   media  (メディア)
-   design  (デザイン)
-   widgets  (ウィジェット)
-   theme (テーマ)
-   embed  (埋め込み)

```js
// 'widgets' ウィジェットカテゴリーに割り当て
category: 'widgets',
```

プラグインとテーマは [カスタムブロックカテゴリー](https://developer.wordpress.org/block-editor/developers/filters/block-filters/#managing-block-categories) を登録することもできます。
<!--
#### icon (optional)
 -->
#### icon (オプション)

-   **Type:** `String` | `Object`
<!--
An icon property should be specified to make it easier to identify a block. These can be any of [WordPress' Dashicons](https://developer.wordpress.org/resource/dashicons/), or a custom `svg` element.

```js
// Specifying a dashicon for the block
icon: 'book-alt',

// Specifying a custom svg for the block
icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 13H5v-2h14v2z" /></svg>,
```
 -->
ブロックを見つけやすくするには icon プロパティを指定します。任意の [WordPress Dashicon](https://developer.wordpress.org/resource/dashicons/) またはカスタム `svg` 要素を指定できます。

```js
// ブロックに dashicon を指定
icon: 'book-alt',

// ブロックにカスタム svg を指定
icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 13H5v-2h14v2z" /></svg>,
```
<!--
**Note:** Custom SVG icons are automatically wrapped in the [`wp.primitives.SVG` component](/packages/primitives/README.md) to add accessibility attributes (`aria-hidden`, `role`, and `focusable`).

An object can also be passed as icon, in this case, icon, as specified above, should be included in the src property.

Besides src the object can contain background and foreground colors, these colors will appear with the icon when they are applicable e.g.: in the inserter.
 -->
**注意:** カスタム SVG アイコンは自動的に [`wp.primitives.SVG` コンポーネント](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-primitives/) でラップされ、アクセシビリティ属性 `aria-hidden`、`role`、`focusable` が追加されます。

オブジェクトもアイコンとして指定できますが、この場合にアイコンは src プロパティに含めてください。

src 以外にオブジェクトは背景色と前景色を設定できます。ここで指定した色はインサーターの中など適切な場面でアイコンの背景色や前景色として使用されます。

<!--
```js
icon: {
	// Specifying a background color to appear with the icon e.g.: in the inserter.
	background: '#7e70af',
	// Specifying a color for the icon (optional: if not set, a readable color will be automatically defined)
	foreground: '#fff',
	// Specifying an icon for the block
	src: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 13H5v-2h14v2z" /></svg>,
} ,
```
 -->
```js
icon: {
	// インサーターの中などでアイコンの背景色として使用される色の指定
	background: '#7e70af',
	// アイコンの色の指定。オプションで、指定しなければ視認性の高い色が自動で定義される
	foreground: '#fff',
	// ブロックのアイコンの指定
	src: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 13H5v-2h14v2z" /></svg>,
} ,
```
<!--
#### keywords (optional)
 -->
#### keywords (オプション)

-   **Type:** `Array`
<!--
Sometimes a block could have aliases that help users discover it while searching. For example, an `image` block could also want to be discovered by `photo`. You can do so by providing an array of terms (which can be translated).

```js
// Make it easier to discover a block with keyword aliases.
// These can be localised so your keywords work across locales.
keywords: [ __( 'image' ), __( 'photo' ), __( 'pics' ) ],
```
 -->
ブロックには、ユーザーが検索する際に見つけやすいよう別名を設定できます。たとえば `image` ブロックは、`photo` でも見つけられれるようになります。検索後の配列を指定してください。検索後は翻訳可能です。

```js
// キーワードで別名をつけてブロックを発見しやすくする
// キーワードは翻訳可能。翻訳すればロケールに関わらず動作する
keywords: [ __( 'image' ), __( 'photo' ), __( 'pics' ) ],
```
<!--
#### styles (optional)
 -->
#### styles (オプション)

-   **Type:** `Array`
<!--
Block styles can be used to provide alternative styles to block. It works by adding a class name to the block’s wrapper. Using CSS, a theme developer can target the class name for the block style if it is selected.

```js
// Register block styles.
styles: [
	// Mark style as default.
	{
		name: 'default',
		label: __( 'Rounded' ),
		isDefault: true
	},
	{
		name: 'outline',
		label: __( 'Outline' )
	},
	{
		name: 'squared',
		label: __( 'Squared' )
	},
],
```

Plugins and Themes can also register [custom block styles](/docs/reference-guides/block-api/block-styles.md) for existing blocks.
 -->
ブロックスタイルを使用してブロックに代替のスタイルを与えられます。ブロックスタイルはブロックのラッパーにクラス名を追加することで動作します。テーマ開発者は該当のクラス名をターゲットに CSS を使用して、選択された際のブロックスタイルを指定できます。

```js
// ブロックスタイルの登録
styles: [
	// デフォルトのスタイルとしてマーク
	{
		name: 'default',
		label: __( 'Rounded' ),
		isDefault: true
	},
	{
		name: 'outline',
		label: __( 'Outline' )
	},
	{
		name: 'squared',
		label: __( 'Squared' )
	},
],
```

プラグインやテーマは既存のブロックに対して [カスタムブロックスタイル](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-styles/) を登録することもできます。

<!--
#### attributes (optional)
 -->
#### attributes (オプション)

-   **Type:** `Object`
<!--
Attributes provide the structured data needs of a block. They can exist in different forms when they are serialized, but they are declared together under a common interface.

```js
// Specifying my block attributes
attributes: {
	cover: {
		type: 'string',
		source: 'attribute',
		selector: 'img',
		attribute: 'src',
	},
	author: {
		type: 'string',
		source: 'html',
		selector: '.book-author',
	},
	pages: {
		type: 'number',
	},
},
```
 -->
属性はブロックに必要な構造化データを提供します。シリアライズの際には異なる形式で存在できますが共通インターフェイスの下で一緒に宣言されます。

```js
// ブロックの属性の指定
attributes: {
	cover: {
		type: 'string',
		source: 'attribute',
		selector: 'img',
		attribute: 'src',
	},
	author: {
		type: 'string',
		source: 'html',
		selector: '.book-author',
	},
	pages: {
		type: 'number',
	},
},
```
<!--
-   **See: [Attributes](/docs/reference-guides/block-api/block-attributes.md).**
 -->
-   **参照: [属性](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-attributes/)**

<!--
#### example (optional)
 -->
#### example (オプション)

-   **Type:** `Object`
<!--
Example provides structured example data for the block. This data is used to construct a preview for the block to be shown in the Inspector Help Panel when the user mouses over the block and in the Styles panel when the block is selected.

The data provided in the example object should match the attributes defined. For example:

```js
example: {
	attributes: {
		cover: 'https://example.com/image.jpg',
		author: 'William Shakespeare',
		pages: 500
	},
},
```
 -->
`example` はブロックの構造化したサンプルデータを提供します。このデータを使用してブロックのプレビューを作成します。プレビューは、ユーザーがブロックをマウスオーバーした際のインスペクターヘルプパネル、またはブロックを選択した際のスタイルパネルで表示されます。

`example` オブジェクトに提供したデータは定義された属性と合致する必要があります。たとえば

```js
example: {
    attributes: {
        cover: 'https://example.com/image.jpg',
        author: 'William Shakespeare',
        pages: 500
    },
},
```
<!-- 
If `example` is not defined, the preview will not be shown. So even if no attributes are defined, setting an empty example object `example: {}` will trigger the preview to show.
 -->
`example` が定義されていない場合、プレビューは表示されません。属性が定義されていない場合にもプレビューを表示するには、空の `example` オブジェクト `example: {}` を設定します。

<!--
It's also possible to extend the block preview with inner blocks via `innerBlocks`. For example:
 -->
また `innerBlocks` を使用したインナーブロックでブロックプレビューを拡張することもできます。

```js
example: {
	attributes: {
		cover: 'https://example.com/image.jpg',
	},
	innerBlocks: [
		{
			name: 'core/paragraph',
			attributes: {
				/* translators: example text. */
				content: __(
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.'
				),
			},
		},
	],
},
```

<!--
It's also possible to define the width of the preview container in pixels via `viewportWidth`. For example:
 -->
また `viewportWidth` を使用してプレビューコンテナの幅をピクセル単位で定義することもできます。

```js
example: {
	attributes: {
		cover: 'https://example.com/image.jpg',
	},
	viewportWidth: 800
},
```
<!--
#### variations (optional)
 -->
#### variations (オプション)

-   **Type:** `Object[]`
-   **Since**: `WordPress 5.9.0`

<!--
Similarly to how the block's styles can be declared, a block type can define block variations that the user can pick from. The difference is that, rather than changing only the visual appearance, this field provides a way to apply initial custom attributes and inner blocks at the time when a block is inserted. See the [Block Variations API](/docs/reference-guides/block-api/block-variations.md) for more details.
 -->
ブロックタイプは、ブロックスタイルの宣言方法と同様に、ユーザーが選択可能なブロックバリエーションを定義できます。違いはビジュアルな見た目だけを変更するのではなく、このフィールドは、ブロックが挿入された際の初期カスタム属性とインナーブロックの適用方法を提供します。詳細については [ブロックバリエーション API](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-variations/) を参照してください。


<!--
#### supports (optional)
-->
#### supports (オプション)

-   **_Type:_** `Object`

<!--
Supports contains a set of options to control features used in the editor. See [the `supports` documentation](/docs/reference-guides/block-api/block-supports.md) for more details.
 -->
`supports` にはエディター内で使用される機能を操作する、一連のオプションが含まれます。詳細については [supports のドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) を参照してください。


<!--
#### transforms (optional)
 -->
#### transforms (オプション)

-   **Type:** `Object`

<!--
Transforms provide rules for what a block can be transformed from and what it can be transformed to. A block can be transformed from another block, a shortcode, a regular expression, a file, or a raw DOM node. Take a look at the [Block Transforms API](/docs/reference-guides/block-api/block-transforms.md) for more info about each available transformation.
 -->
`transform` は、何をブロックに変換できるのか、またブロックは何に変換できるのかのルールを提供します。ブロックは、別のブロック、ショートコード、正規表現、ファイル、生の DOM ノードから変換できます。利用可能な個々の変換の詳細については [ブロック変換 API](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-transforms/) を参照してください。

<!--
#### parent (optional)
 -->
#### parent (オプション)

-   **Type:** `Array`
<!--
Blocks are able to be inserted into blocks that use [`InnerBlocks`](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/inner-blocks/README.md) as nested content. Sometimes it is useful to restrict a block so that it is only available as a nested block. For example, you might want to allow an 'Add to Cart' block to only be available within a 'Product' block.

Setting `parent` lets a block require that it is only available when nested within the specified blocks.

```js
// Only allow this block when it is nested in a Columns block
parent: [ 'core/columns' ],
```
 -->
ブロックは、ネストしたコンテンツとして [`InnerBlocks`](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/inner-blocks/README.md) を使用するブロックの中に挿入することができます。ブロックをネストしたブロックとしてのみ利用可能に制限することが有用な場合もあります。たとえば「Add to Cart (カートに追加)」ブロックは、「Product (商品)」ブロック内でのみ利用可能にすることができます。

`parent` を設定したブロックは、特定のブロック内にネストした場合のみ利用可能になります。

```js
// ブロックは Columns ブロックにネストする場合のみ利用可能
parent: [ 'core/columns' ],
```

<!-- 
#### ancestor (optional)
 -->
#### ancestor (オプション)

-   **Type:** `Array`
-   **Since**: `WordPress 6.0.0`

<!-- 
The `ancestor` property makes a block available inside the specified block types at any position of the ancestor block subtree. That allows, for example, to place a 'Comment Content' block inside a 'Column' block, as long as 'Column' is somewhere within a 'Comment Template' block. In comparison to the `parent` property, blocks that specify their `ancestor` can be placed anywhere in the subtree whilst blocks with a specified `parent` need to be direct children.
 -->
`ancestor` プロパティを使用すると、指定されたブロックタイプの中で、祖先ブロックサブツリーの任意の位置でブロックを利用できます。例えば、「'Comment Content' ブロックは、'Column' ブロックが 'Comment Template' ブロック内のどこかにある場合に限り、'Column' ブロック内に配置できる」等の制限が可能です。`parent` プロパティと比較すると `ancestor` を指定したブロックはサブツリーの任意の場所に配置できますが、`parent` を指定したブロックは直接の子としてのみ配置できます。

<!-- 
```js
// Only allow this block when it is nested at any level in a Columns block.
ancestor: [ 'core/columns' ],
```
 -->
```js
// このブロックは Columns ブロック内の任意のレベルで入れ子の場合のみ利用可能
ancestor: [ 'core/columns' ],
```
<!-- 
#### allowedBlocks (optional)
 -->
#### allowedBlocks (オプション)

-   **Type:** `Array`
-   **Since**: `WordPress 6.5.0`

<!-- 
Setting the `allowedBlocks` property will limit which block types can be nested as direct children of the block.
 -->
`allowedBlocks` プロパティを設定することで、ブロックの直接の子としてネストできるブロックタイプを制限できます。

<!-- 
```js
// Only allow the Columns block to be nested as direct child of this block
allowedBlocks: [ 'core/columns' ],
```
 -->
```js
// このブロックの直接の子としてネストされるブロックを、カラム (Columns) ブロックのみを許可する。
allowedBlocks: [ 'core/columns' ],
```

<!-- 
#### blockHooks (optional)
 -->
#### blockHooks (オプション)

-   **Type:** `Object`
-   **Since**: `WordPress 6.4.0`

<!-- 
Block Hooks is an API that allows a block to automatically insert itself next to all instances of a given block type, in a relative position also specified by the "hooked" block. That is, a block can opt to be inserted before or after a given block type, or as its first or last child (i.e. to be prepended or appended to the list of its child blocks, respectively). Hooked blocks will appear both on the frontend and in the editor (to allow for customization by the user).
 -->
ブロックフックは指定されたブロックタイプのすべてのインスタンスの隣、「フックされた」ブロックによって指定された相対位置に、自動的にブロックを挿入する API です。つまり、選択によりブロックを、指定されたブロックタイプの前または後、または、最初の子または最後の子 (子ブロックのリストの先頭、または末尾) に挿入できます。フックされたブロックは、フロントエンドとエディターの両方に表示されます (ユーザーによるカスタマイズが可能です)。

<!-- 
The key is the name of the block (`string`) to hook into, and the value is the position to hook into (`string`). Allowed target values are:
 -->
キーはフックするブロックの名前 (`string`)、値はフックする位置 (`string`) です。指定可能な値は以下です。

<!-- 
-   `before` – inject before the target block.
-   `after` - inject after the target block.
-   `firstChild` - inject before the first inner block of the target container block.
-   `lastChild` - inject after the last inner block of the target container block.
 -->
-   `before` – ターゲットブロックの前に挿入
-   `after` - ターゲットブロックの後に挿入
-   `firstChild` - ターゲットのコンテナブロックの最初のインナーブロックの前に挿入
-   `lastChild` - ターゲットのコンテナブロックの最後のインナーブロックの後に挿入

```js
{
	blockHooks: {
		'core/verse': 'before',
		'core/spacer': 'after',
		'core/column': 'firstChild',
		'core/group': 'lastChild',
	}
}
```
<!-- 
It’s crucial to emphasize that the Block Hooks feature is only designed to work with _static_ block-based templates, template parts, and patterns. For patterns, this includes those provided by the theme, from [Block Pattern Directory](https://wordpress.org/patterns/), or from calls to [`register_block_pattern`](https://developer.wordpress.org/reference/functions/register_block_pattern/).
 -->
重要な点のため強調しますが、ブロックフック機能は、_静的な_ ブロックベースのテンプレート、テンプレートパーツ、パターンにのみ対応するように設計されています。このパターンに含まれるものは、テーマや、[ブロックパターンディレクトリ](https://wordpress.org/patterns/)、そして [`register_block_pattern`](https://developer.wordpress.org/reference/functions/register_block_pattern/) 呼び出しから提供されたものです。

<!-- 
Block Hooks will not work with post content or patterns crafted by the user, such as synced patterns, or theme templates and template parts that have been modified by the user.
 -->
ブロックフックは、投稿コンテンツや、ユーザーが作成したパターン (同期パターンなど)、ユーザーが変更したテーマのテンプレートやテンプレートパーツでは機能しません。

<!--
## Block collections
 -->
## ブロックコレクション

<!--
## `registerBlockCollection`

-   **Type:** `Function`
 -->
## registerBlockCollection 関数
<!--
Blocks can be added to collections, grouping together all blocks from the same origin

`registerBlockCollection` takes two parameters, `namespace` and an object of settings including `title` and `icon`.
 -->
ブロックをコレクションに追加し、出自の同じすべてのブロックを一緒にグループ化できます。

`registerBlockCollection` は2つのパラメータを取ります。`namespace` と、`title` と `icon` を含む設定のオブジェクトです。


### Namespace

-   **Type:** `String`
<!--
This should match the namespace declared in the block name; the name of your plugin or theme.
 -->
ブロック名で定義された namespace と合致する必要があります。プラグインやテーマの名前です。

### Settings

#### Title

-   **Type:** `String`
<!--
This will display in the block inserter section, which will list all blocks in this collection.
 -->
コレクション内のすべてのブロックをリストするブロックインサーターセクションにタイトルを表示します。

#### Icon

-   **Type:** `Object`
<!--
(Optional) An icon to display alongside the title in the block inserter.

```js
// Registering a block collection
registerBlockCollection( 'my-plugin', { title: 'My Plugin' } );
```
 -->
(オプション) ブロックインサーターのタイトルと一緒に表示するアイコン

```js
// ブロックコレクションの登録
registerBlockCollection( 'my-plugin', { title: 'My Plugin' } );
```

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-registration.md)
