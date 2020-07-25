<!-- 
# Block Registration
 -->
# ブロックの登録
<!-- 
## `registerBlockType`

-   **Type:** `Function`
 -->
## registerBlockType 関数
<!-- 
Every block starts by registering a new block type definition. To register, you use the `registerBlockType` function from the [`wp-blocks` package](/packages/blocks/README.md#registerBlockType). The function takes two arguments, a block `name` and a block configuration object.
 -->
すべてのブロック作成は新しくブロックタイプの定義を登録するところから始まります。登録には [`wp-blocks` パッケージ](https://developer.wordpress.org/block-editor/packages/packages-blocks/#registerBlockType) の `registerBlockType` 関数を使用します。関数はブロック名とブロック構成オブジェクトの2つの引数を取ります。

### Block Name

-   **Type:** `String`

<!-- 
The name for a block is a unique string that identifies a block. Names have to be structured as `namespace/block-name`, where namespace is the name of your plugin or theme.

```js
// Registering my block with a unique name
registerBlockType( 'my-plugin/book', {} );
```
 -->
ブロック名はブロックを一意に識別する固有の文字列です。ブロック名は `namespace/block-name` の形式で namespace はプラグインやテーマの名前です。

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

### Block Configuration

-   **Type:** `Object` [ `{ key: value }` ]

登録する際、ブロックにプロパティを指定できます。プロパティは構成オブジェクトで定義します。

プロパティの一覧は以下のとおりです。

#### title

-   **Type:** `String`
<!-- 
This is the display title for your block, which can be translated with our translation functions. The block inserter will show this name.

```js
// Our data object
title: __( 'Book' );
```
 -->
ブロックの表示タイトル。翻訳関数を使用して翻訳されます。ブロックインサーターはこの名前を表示します。

```js
// データオブジェクト
title: __( 'Book' );
```
<!-- 
#### description (optional)
 -->
#### description (オプション)

-   **Type:** `String`
<!-- 
This is a short description for your block, which can be translated with our translation functions. This will be shown in the Block Tab in the Settings Sidebar.
 -->
ブロックの簡単な説明。翻訳関数を使用して翻訳されます。「設定」サイドバーの「ブロック」タブで表示されます。

```js
description: __( 'Block showing a Book card.' );
```

#### category

-   **Type:** `String` [ common | formatting | layout | widgets | embed ]
<!-- 
Blocks are grouped into categories to help users browse and discover them.

The core provided categories are:

-   common
-   formatting
-   layout
-   widgets
-   embed

```js
// Assigning to the 'widgets' category
category: 'widgets',
```

Plugins and Themes can also register [custom block categories](/docs/designers-developers/developers/filters/block-filters.md#managing-block-categories).
 -->
ブロックはユーザーの見やすさ、検索しやすさのためカテゴリーにグループ分けされます。

コアで提供されるカテゴリー一覧:

-   common  (一般ブロック)
-   formatting  (フォーマット)
-   layout  (レイアウト要素
-   widgets  (ウィジェット)
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
**Note:** Custom SVG icons are automatically wrapped in the [`wp.primitives.SVG` component](/packages/primitives/src/svg/) to add accessibility attributes (`aria-hidden`, `role`, and `focusable`).

An object can also be passed as icon, in this case, icon, as specified above, should be included in the src property.

Besides src the object can contain background and foreground colors, this colors will appear with the icon when they are applicable e.g.: in the inserter.
 -->
**注意:** カスタム SVG アイコンは自動的に [`wp.primitives.SVG` コンポーネント](/packages/primitives/src/svg/) でラップされ、アクセシビリティ属性 `aria-hidden`、`role`、`focusable` が追加されます。

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
Block styles can be used to provide alternative styles to block. It works by adding a class name to the block’s wrapper. Using CSS, a theme developer can target the class name for the style variation if it is selected.

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

Plugins and Themes can also register [custom block style](/docs/designers-developers/developers/filters/block-filters.md#block-style-variations) for existing blocks.
 -->
ブロックスタイルを使用してブロックに代替のスタイルを与えられます。ブロックスタイルはブロックのラッパーにクラス名を追加することで動作します。テーマ開発者は該当のクラス名をターゲットに CSS を使用して、選択された際のスタイルのバリエーションを指定できます。

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

プラグインやテーマは既存のブロックに対して [カスタムブロックスタイル](https://developer.wordpress.org/block-editor/developers/filters/block-filters/#block-style-variations) を登録することもできます。

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
-   **See: [Attributes](/docs/designers-developers/developers/block-api/block-attributes.md).**
 -->
-   **参照: [属性](https://ja.wordpress.org/team/handbook/block-editor/developers/block-api/block-attributes/)**

<!-- 
#### example (optional)
 -->
#### example (オプション)

-   **Type:** `Object`
<!-- 
Example provides structured example data for the block. This data is used to construct a preview for the block to be shown in the Inspector Help Panel when the user mouses over the block.

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

If `example` is not defined, the preview will not be shown. So even if no-attributes are defined, setting a empty example object `example: {}` will trigger the preview to show.
 -->
`example` はブロックの構造化したサンプルデータを提供します。このデータを使用してブロックのプレビューを作成します。ユーザーがインスペクターヘルプパネルでマウスオーバーすると、プレビューが表示されます。

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

`example` が定義されていない場合、プレビューは表示されません。属性が定義されていない場合にもプレビューを表示するには、空の `example` オブジェクト `example: {}` を設定します。


It's also possible to extend the block preview with inner blocks via `innerBlocks`. For example:

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
#### variations (optional)
 -->
#### variations (オプション)

- **Type:** `Object[]`
<!-- 
Similarly to how the block's style variations can be declared, a block type can define block variations that the user can pick from. The difference is that, rather than changing only the visual appearance, this field provides a way to apply initial custom attributes and inner blocks at the time when a block is inserted.

By default, all variations will show up in the Inserter in addition to the regular block type item. However, setting the `isDefault` flag for any of the variations listed will override the regular block type in the Inserter.
 -->
ブロックスタイルバリエーションの定義方法と同様に、ブロックタイプはユーザーが選択可能なブロックバリエーションを定義できます。違いとしてはこのフィールドはビジュアルな見た目を変更するだけでなく、ブロックが挿入された際の初期カスタム属性とインナーブロックの適用方法を提供します。

デフォルトではインサーター内に、通常のブロックタイプ項目に加えてすべてのバリエーションが表示されます。リストされた任意のバリエーションに `isDefault` フラグを設定すると、インサーター内の通常のブロックタイプを上書きします。

```js
variations: [
    {
		name: 'wordpress',
		isDefault: true,
		title: __( 'WordPress' ),
		description: __( 'Code is poetry!' ),
		icon: WordPressIcon,
		attributes: { service: 'wordpress' },
	},
	{
		name: 'google',
		title: __( 'Google' ),
		icon: GoogleIcon,
		attributes: { service: 'google' },
	},
	{
		name: 'twitter',
		title: __( 'Twitter' ),
		icon: TwitterIcon,
		attributes: { service: 'twitter' },
		keywords: [ __('tweet') ],
	},
],
```
<!-- 
An object describing a variation defined for the block type can contain the following fields:

- `name` (type `string`) – The unique and machine-readable name.
- `title` (type `string`) – A human-readable variation title.
- `description` (optional, type `string`) – A detailed variation description.
- `icon` (optional, type `string` | `Object`) – An icon helping to visualize the variation. It can have the same shape as the block type.
- `isDefault` (optional, type `boolean`) – Indicates whether the current variation is the default one. Defaults to `false`.
- `attributes` (optional, type `Object`) – Values that override block attributes.
- `innerBlocks` (optional, type `Array[]`) – Initial configuration of nested blocks.
- `example` (optional, type `Object`) – Example provides structured data for the block preview. You can set to `undefined` to disable the preview shown for the block type.
- `scope` (optional, type `string[]`) - the list of scopes where the variation is applicable. When not provided, it assumes all available scopes. Available options: `block`, `inserter`.
- `keywords` (optional, type `string[]`) - An array of terms (which can be translated) that help users discover the variation while searching.

It's also possible to override the default block style variation using the `className` attribute when defining block variations.
 -->
ブロックタイプのバリエーションを記述するオブジェクトには次のフィールドを指定できます。

- `name` (type `string`) – 機械で識別可能な固有の名前
- `title` (type `string`) – ユーザー向けのバリエーションのタイトル
- `description` (オプション, type `string`) – 詳細なバリエーションの説明
- `icon` (オプション, type `String` | `Object`) – バリエーションの視覚化を助けるアイコン。ブロックタイプと同じ形でも良い。
- `isDefault` (オプション, type `boolean`) – 現行のバリエーションがデフォルトかどうかを示すフラグ。デフォルトは `false`
- `attributes` (オプション, type `Object`) – ブロック属性を上書きする値
- `innerBlocks` (オプション, type `Array[]`) – ネストしたブロックの初期構成
- `example` (オプション, type `Object`) – ブロックプレビューの例を提供する構造化データ。`undefined` を設定するとブロックタイプに表示するプレビューを無効化できる。
- `scope` (オプション, type `String[]`) - バリエーションを適用できるスコープのリスト。指定しない場合はすべての有効なスコープを仮定する。有効なオプション: `block`, `inserter`.

またブロックバリーションを定義する際、`className` 属性を使用して、デフォルトのブロックスタイルバリエーションを上書きすることもきます。

```js
variations: [
	{
		name: 'blue',
		title: __( 'Blue Quote' ),
		isDefault: true,
		attributes: { className: 'is-style-blue-quote' },
		icon: 'format-quote',
	},
],
```
<!-- 
#### transforms (optional)
 -->
#### transforms (オプション)

-   **Type:** `Object`
<!-- 
Transforms provide rules for what a block can be transformed from and what it can be transformed to. A block can be transformed from another block, a shortcode, a regular expression, a file or a raw DOM node. Take a look at the [Block Transforms API](/docs/designers-developers/developers/block-api/block-transforms.md) for more info about each available transformation.
 -->
`transform` は、何をブロックに変換できるのか、またブロックは何に変換できるのかのルールを提供します。ブロックは、別のブロック、ショートコード、正規表現、ファイル、生の DOM ノードから変換できます。利用可能な個々の変換の詳細については [ブロック変換 API](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/block-api/block-transforms.md) を参照してください。

<!-- 
#### parent (optional)
 -->
#### parent (オプション)

-   **Type:** `Array`
<!-- 
Blocks are able to be inserted into blocks that use [`InnerBlocks`](https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/inner-blocks/README.md) as nested content. Sometimes it is useful to restrict a block so that it is only available as a nested block. For example, you might want to allow an 'Add to Cart' block to only be available within a 'Product' block.

Setting `parent` lets a block require that it is only available when nested within the specified blocks.

```js
// Only allow this block when it is nested in a Columns block
parent: [ 'core/columns' ],
```
 -->
ブロックは、ネストしたコンテンツとして [`InnerBlocks`](https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/inner-blocks/README.md) を使用するブロックの中に挿入することができます。ブロックをネストしたブロックとしてのみ利用可能に制限することが有用な場合もあります。たとえば「Add to Cart (カートに追加)」ブロックは、「Product (商品)」ブロック内でのみ利用可能にすることができます。

`parent` を設定したブロックは、特定のブロック内にネストした場合のみ利用可能になります。

```js
// ブロックは Columns ブロックにネストする場合のみ利用可能
parent: [ 'core/columns' ],
```
<!-- 
#### supports (optional)
 -->
#### supports (オプション)

<!-- 
_Some [block supports](#supports-optional) — for example, `anchor` or `className` — apply their attributes by adding additional props on the element returned by `save`. This will work automatically for default HTML tag elements (`div`, etc). However, if the return value of your `save` is a custom component element, you will need to ensure that your custom component handles these props in order for the attributes to be persisted._
 -->
_`anchor` や `className` などいくつかの [ブロックサポート](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/block-api/block-registration.md#supports-optional) は、`save` から返される要素に追加の props を加えて属性を適用します。 `div` などのデフォルトの HTML タグ要素であればこれは自動的に動作します。しかし `save` の戻り値がカスタムコンポーネント要素の場合、属性が永続化されるようカスタムコンポーネントがこれらの props を処理する必要があります。_

-   **Type:** `Object`
<!-- 
Optional block extended support features. The following options are supported:

-   `align` (default `false`): This property adds block controls which allow to change block's alignment. _Important: It doesn't work with dynamic blocks yet._

```js
// Add the support for block's alignment (left, center, right, wide, full).
align: true,
// Pick which alignment options to display.
align: [ 'left', 'right', 'full' ],
```
 -->
オプションのブロック拡張サポート機能。次のオプションがサポートされます。

-   `align` (デフォルト `false`): このプロパティはブロックの配置を変更するブロックコントロールを追加する。_重要: ダイナミックブロックとは、まだ、動作しない。_

```js
// ブロックの配置のサポートを追加 (left (左寄せ), center (中央寄せ), right (右寄せ), wide (幅広), full (全幅)).
align: true,
// どの配置オプションを表示するかを選択
align: [ 'left', 'right', 'full' ],
```
<!-- 
When supports align is used the block attributes definition is extended to include an align attribute with a string type.
By default, no alignment is assigned to the block.
The block can apply a default alignment by specifying its own align attribute with a default e.g.:
 -->
`align` サポートを使用するとブロック属性定義が拡張され、string タイプの align 属性が含まれます。
デフォルトではブロックに配置は割り当てられません。
ブロックにデフォルトの配置を適用するには、デフォルト値と共に align 属性を指定します。たとえば

```
attributes: {
	...
	align: {
		type: 'string',
		default: 'right'
	},
	...
}
```

<!-- 
-   `alignWide` (default `true`): This property allows to enable [wide alignment](/docs/designers-developers/developers/themes/theme-support.md#wide-alignment) for your theme. To disable this behavior for a single block, set this flag to `false`.

```js
// Remove the support for wide alignment.
alignWide: false,
```
 -->
-   `alignWide` (デフォルト `true`): このプロパティを使用するとテーマの [幅広揃え](/docs/designers-developers/developers/themes/theme-support.md#wide-alignment) を有効化できます。単一ブロックに対してこの機能を無効化するにはこのフラグに `false` を設定してください。

```js
// 幅広揃えサポートを除去
alignWide: false,
```

<!-- 
-   `defaultStylePicker` (default `true`): When the style picker is shown, a dropdown is displayed so the user can select a default style for this block type. If you prefer not to show the dropdown, set this property to `false`.

```js
// Remove the Default Style picker.
defaultStylePicker: false,
```
 -->
-   `defaultStylePicker` (デフォルト `true`): スタイルピッカーの表示の際、ユーザーがブロックタイプのデフォルトスタイルを選択できるようドロップダウンが表示されます。ドロップダウンを表示したくない場合にはこのプロパティを `false` に設定してください。

```js
// デフォルトのスタイルピッカーを除去
defaultStylePicker: false,
```

<!-- 
-   `anchor` (default `false`): Anchors let you link directly to a specific block on a page. This property adds a field to define an id for the block and a button to copy the direct link.

```js
// Add the support for an anchor link.
anchor: true,
```
 -->
-   `anchor` (デフォルト `false`): アンカーを使用するとページ上の特定のブロックに直接リンクできます。このプロパティはブロックの ID を定義するフィールドとダイレクトリンクをコピーするボタンをを追加します。

```js
// アンカーリンクサポートを追加
anchor: true,
```

<!-- 
-   `customClassName` (default `true`): This property adds a field to define a custom className for the block's wrapper.

```js
// Remove the support for the custom className.
customClassName: false,
```
 -->
-   `customClassName` (デフォルト `true`): このプロパティはブロックのラッパーのカスタム classsName を定義するフィールドを追加します。

```js
// カスタム className サポートを除去
customClassName: false,
```
<!-- 
-   `className` (default `true`): By default, the class `.wp-block-your-block-name` is added to the root element of your saved markup. This helps having a consistent mechanism for styling blocks that themes and plugins can rely on. If for whatever reason a class is not desired on the markup, this functionality can be disabled.

```js
// Remove the support for the generated className.
className: false,
```
 -->
-   `className` (デフォルト `true`): デフォルトでは保存したマークアップの root 要素にクラス `.wp-block-your-block-name` が追加されます。この結果、テーマやプラグインがブロックのスタイリングにあたって利用可能な一貫した機構が実現します。何らかの理由によりこのクラスをマークアップに負荷したくない場合、この機能を無効化できます。

```js
// className 生成サポートを除去
className: false,
```
<!-- 
-   `html` (default `true`): By default, a block's markup can be edited individually. To disable this behavior, set `html` to `false`.

```js
// Remove support for an HTML mode.
html: false,
```
 -->
-   `html` (デフォルト `true`): デフォルトではブロックのマークアップは個別に編集できます。この動きを止めるには  `html` に  `false` を設定してください。

```js
// HTML モードサポートを除去
html: false,
```

<!-- 
-   `inserter` (default `true`): By default, all blocks will appear in the inserter. To hide a block so that it can only be inserted programmatically, set `inserter` to `false`.

```js
// Hide this block from the inserter.
inserter: false,
```
 -->
-   `inserter` (デフォルト `true`): デフォルトではすべてのブロックはインサーターに表示されます。ブロックをインサーターには表示せず、プログラム的にのみ挿入可能にするには `inserter` に `false` を設定してください。

```js
// このブロックをインサーターに表示しない
inserter: false,
```
<!-- 
-   `multiple` (default `true`): A non-multiple block can be inserted into each post, one time only. For example, the built-in 'More' block cannot be inserted again if it already exists in the post being edited. A non-multiple block's icon is automatically dimmed (unclickable) to prevent multiple instances.

```js
// Use the block just once per post
multiple: false,
```
 -->
-   `multiple` (デフォルト `true`): 非 multiple ブロックは各投稿に1回だけ挿入できます。たとえば組み込みの「続きを読む」ブロックは、編集中の投稿にすでに存在する場合は挿入できません。非 multiple ブロックのアイコンクリックできないよう自動的にグレイアウトされ、複数インスタンスの作成を回避します。

```js
// ブロックは投稿ごとに1度だけ使用できる
multiple: false,
```

<!-- 
-   `reusable` (default `true`): A block may want to disable the ability of being converted into a reusable block.
    By default all blocks can be converted to a reusable block. If supports reusable is set to false, the option to convert the block into a reusable block will not appear.

```js
// Don't allow the block to be converted into a reusable block.
reusable: false,
```
 -->
-   `reusable` (デフォルト `true`): ブロックを再利用可能なブロックに変換する機能を無効化したい場合があります。デフォルトではすべてのブロックは再利用可能ブロックに変換できます。reusable サポートを false に設定すると、再利用可能ブロックするに変換するオプションが表示されません。

```js
// 再利用可能ブロックへの変換を許可しない
reusable: false,
```
<!-- 
## Block Collections
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

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/block-api/block-registration.md)