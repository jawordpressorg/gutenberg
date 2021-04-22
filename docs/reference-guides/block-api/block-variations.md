<!--
# Block Variations
 -->
# ブロックバリエーション

<!--
Block Variations is the API that allows a block to have similar versions of it, but all these versions share some common functionality. Each block variation is differentiated from the others by setting some initial attributes or inner blocks. Then at the time when a block is inserted these attributes and/or inner blocks are applied.
 -->
ブロックは、ブロックバリエーション API を使用して、共通の機能を共有する自身の類似バージョンを作成できます。各ブロックバリエーションは、初期属性やインナーブロックの設定により他と区別されます。ブロックが挿入されると、これらの属性やインナーブロックが適用されます。

<!--
A great way to understand this API better is by using the `embed` block as an example. The numerous existing variations for embed (WordPress, Youtube, etc..) share the same functionality for editing, saving, and so on, but their basic difference is the `providerNameSlug` attribute's value, which defines the provider that needs to be used.
 -->
この API を理解する一番良い方法は、例として `embed` ブロックを考えることでしょう。埋め込みブロックの数多くの既存のバリエーション (WordPress、YouTube、など) は、編集、保存など同じ機能を共有しますが、使用の際に必要なプロバイダーを定義する `providerNameSlug` 属性値が異なります。

<!--
By default, all variations will show up in the Inserter in addition to the regular block type item. However, setting the `isDefault` flag for any of the variations listed will override the regular block type in the Inserter.
 -->
デフォルトではインサーター内に、通常のブロックタイプ項目に加えてすべてのバリエーションが表示されます。リストされた任意のバリエーションに `isDefault` フラグを設定すると、インサーター内の標準のブロックタイプを上書きします。

```js
variations: [
    {
		name: 'wordpress',
		isDefault: true,
		title: __( 'WordPress' ),
		description: __( 'Code is poetry!' ),
		icon: WordPressIcon,
		attributes: { providerNameSlug: 'wordpress' },
	},
	{
		name: 'google',
		title: __( 'Google' ),
		icon: GoogleIcon,
		attributes: { providerNameSlug: 'google' },
	},
	{
		name: 'twitter',
		title: __( 'Twitter' ),
		icon: TwitterIcon,
		attributes: { providerNameSlug: 'twitter' },
		keywords: [ __('tweet') ],
	},
],
```

<!--
An object describing a variation defined for the block type can contain the following fields:
 -->
ブロックタイプのバリエーションを記述するオブジェクトには次のフィールドを指定できます。

<!--
-   `name` (type `string`) – The unique and machine-readable name.
-   `title` (type `string`) – A human-readable variation title.
-   `description` (optional, type `string`) – A detailed variation description.
-   `category` (optional, type `string`) - A category classification, used in search interfaces to arrange block types by category.
-   `icon` (optional, type `string` | `Object`) – An icon helping to visualize the variation. It can have the same shape as the block type.
-   `isDefault` (optional, type `boolean`) – Indicates whether the current variation is the default one. Defaults to `false`.
-   `attributes` (optional, type `Object`) – Values that override block attributes.
-   `innerBlocks` (optional, type `Array[]`) – Initial configuration of nested blocks.
-   `example` (optional, type `Object`) – Example provides structured data for the block preview. You can set to `undefined` to disable the preview shown for the block type.
-   `scope` (optional, type `WPBlockVariationScope[]`) - the list of scopes where the variation is applicable. When not provided, it defaults to `block` and `inserter`. Available options:
    -   `inserter` - Block Variation is shown on the inserter.
    -   `block` - Used by blocks to filter specific block variations. Mostly used in Placeholder patterns like `Columns` block.
    -   `transform` - Block Variation will be shown in the component for Block Variations transformations.
-   `keywords` (optional, type `string[]`) - An array of terms (which can be translated) that help users discover the variation while searching.
-   `isActive` (optional, type `Function`) - A function that accepts a block's attributes and the variation's attributes and determines if a variation is active. This function doesn't try to find a match dynamically based on all block's attributes, as in many cases some attributes are irrelevant. An example would be for `embed` block where we only care about `providerNameSlug` attribute's value.
 -->
- `name` (type `string`) – 機械で識別可能な固有の名前
- `title` (type `string`) – ユーザー向けのバリエーションのタイトル
- `description` (オプション, type `string`) – 詳細なバリエーションの説明
- `category` (オプション, type `string`) - カテゴリーの分類。検索インターフェース内で、ブロックタイプのカテゴリーごとの配置に使用される。
- `icon` (オプション, type `String` | `Object`) – バリエーションの視覚化を助けるアイコン。ブロックタイプと同じ形でも良い。
- `isDefault` (オプション, type `boolean`) – 現行のバリエーションがデフォルトかどうかを示すフラグ。デフォルトは `false`
- `attributes` (オプション, type `Object`) – ブロック属性を上書きする値
- `innerBlocks` (オプション, type `Array[]`) – ネストしたブロックの初期構成
- `example` (オプション, type `Object`) – ブロックプレビューの例を提供する構造化データ。`undefined` を設定するとブロックタイプに表示するプレビューを無効化できる。
- `scope` (オプション, type `WPBlockVariationScope[]`) - バリエーションを適用できるスコープのリスト。指定しない場合のデフォルトは `block` と `inserter`。利用可能なオプション:
	- `inserter` - ブロックバリエーションはインサーターに表示される。
	- `block` - 特定のブロックバリエーションをフィルターするためにブロックから使用される。ほとんどの場合、`Columns` ブロックのように Placeholder パターンで使用される。
	- `transform` - ブロックバリエーションはブロックバリエーション変換のコンポーネント内で表示される。
- `keywords` (オプション, type `string[]`) - 翻訳可能な語句の配列。ユーザーがバリエーションを検索しやすくする。
- `isActive` (オプション, type `Function`) - ブロックの属性とバリエーションの属性を取り、バリエーションが有効かどうかを決定する関数。ただしこの関数は、すべてのブロックの属性に基づいて動的に合致するものを探そうとはしません。これは多くの場合、意味のない属性があるためです。たとえば `embed` ブロックでは `providerNameSlug` 属性の値のみに注目します。

<!--
The main difference between block styles and block variations is that a block style just applies a CSS class to the block, so it can be styled in an alternative way. If we want to apply initial attributes or inner blocks, we fall in block variation territory.
 -->
ブロックスタイルとブロックバリエーションの主な違いとして、ブロックスタイルはブロックに CSS クラスを適用するのみ、すなわち、代替のスタイルを適用するのみの点が異なります。初期属性やインナーブロックを適用したければ、ブロックバリエーションのテリトリーとなります。

<!--
It's also possible to override the default block style using the `className` attribute when defining block variations.
 -->
またブロックバリエーションを定義する際、`className` 属性を使用してデフォルトのブロックスタイルを上書きできます。

```js
variations: [
	{
		name: 'blue',
		title: __( 'Blue Quote' ),
		isDefault: true,
		attributes: { color: 'blue', className: 'is-style-blue-quote' },
		icon: 'format-quote',
		isActive: ( blockAttributes, variationAttributes ) =>
			blockAttributes.color === variationAttributes.color
	},
],

```
<!--
It's worth mentioning that setting the `isActive` property can be useful for cases you want to use information from the block variation, after a block's creation. For example, this API is used in `useBlockDisplayInformation` hook to fetch and display proper information on places like the `BlockCard` or `Breadcrumbs` components.
 -->
ヒント: `isActive` プロパティの設定は、ブロック作成後にブロックバリエーションからの情報を使用する場合に有用です。たとえば、`BlockCard` や `Breadcrumbs` コンポーネントのように、この API は `useBlockDisplayInformation` ブック内で使用され、その場で適切な情報を取得し、表示します。

<!--
Block variations can be declared during a block's registration by providing the `variations` key with a proper array of variations, as defined above. In addition, there are ways to register and unregister a `block variation` for a block, after its registration.
 -->
ブロックバリエーションはブロックの登録の際に、上で見たような `variations` キーと適切なバリエーションの配列を渡すことで宣言できます。また、ブロックの登録後に、`block variation` を登録、登録解除する方法もあります。

<!--
To add a block variation use `wp.blocks.registerBlockVariation()`.
 -->
ブロックバリエーションを追加するには、`wp.blocks.registerBlockVariation()` を使用してください。

<!--
_Example:_
 -->
_例:_

```js
wp.blocks.registerBlockVariation( 'core/embed', {
	name: 'custom',
	attributes: { providerNameSlug: 'custom' },
} );
```

<!--
To remove a block variation use `wp.blocks.unregisterBlockVariation()`.
 -->
ブロックバリエーションを削除するには、`wp.blocks.unregisterBlockVariation()` を使用してください。

<!--
_Example:_
 -->
_例:_

```js
wp.blocks.unregisterBlockVariation( 'core/embed', 'youtube' );
```

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-variations.md)
