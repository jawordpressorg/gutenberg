<!--
# Deprecation
 -->
# 非推奨プロセス

<!-- 
> This page provides a comprehensive guide to the principles and usage of the Deprecation API. For an introduction check out the [tutorial on the basics of block deprecation](https://developer.wordpress.org/news/2023/03/block-deprecation-a-tutorial/) which can be found on the [Developer Blog](https://developer.wordpress.org/news/).
 -->
このページでは、Deprecation (非推奨) API の原理と使用方法について包括的に説明します。入門的なガイドとして、[開発者ブログ](https://developer.wordpress.org/news/)の[ブロック非推奨の基本に関するチュートリアル](https://developer.wordpress.org/news/2023/03/block-deprecation-a-tutorial/)を参照ください。

<!--
When updating static blocks markup and attributes, block authors need to consider existing posts using the old versions of their block. To provide a good upgrade path, you can choose one of the following strategies:
 -->
ブロックの静的なマークアップや属性を更新する場合、開発者は現在のバージョンを使用している既存の投稿に注意する必要があります。適切にアップグレードするには以下のどちらかの戦略を選択する必要があります。

<!--
-   Do not deprecate the block and create a new one (a different name)
-   Provide a "deprecated" version of the block allowing users opening these in the block editor to edit them using the updated block.
 -->
 - 既存のブロックはそのままにして、異なる名前で新しいブロックを作成する。
 - ブロックの「deprecated (非推奨)」バージョンを提供する。ユーザーはブロックエディターで投稿を開き、更新されたブロックを使用して編集する。

<!--
A block can have several deprecated versions. A deprecation will be tried if the current state of a parsed block is invalid, or if the deprecation defines an `isEligible` function that returns true.
--->
ブロックは複数の非推奨バージョンをもつことができます。パースしたブロックの現行の状態が不正 (invalid) の場合、または、true を返す `isEligible` 関数が定義されている場合、非推奨プロセス (deprecation) が実行されます。

<!--  
Deprecations do not operate as a chain of updates in the way other software data updates, like database migrations, do. At first glance, it is easy to think that each deprecation is going to make the required changes to the data and then hand this new form of the block onto the next deprecation to make its changes. What happens instead is:
 --> 
非推奨プロセスは、たとえばデータベースの移行のような、ソフトウエアデータの更新に見られる「更新の連鎖」としては動作しません。誰もが非推奨プロセスを、データに対して必要な変更を行うと、次の非推奨プロセスにブロックの新しい形が渡され、またそこで必要な変更が行われるものと考えます。しかし実際には、

<!-- 
1. If the current `save` method does not produce a valid block the first deprecation in the deprecations array is passed the original saved content.
2. If its `save` method produces valid content this deprecation is used to parse the block attributes. If it has a `migrate` method it will also be run using the attributes parsed by the deprecation.
3. If the first deprecation's `save` method does not produce a valid block the subsequent deprecations in the array are tried until one producing a valid block is encountered.
4. The attributes, and any innerBlocks, from the first deprecation to generate a valid block are then passed back to the current `save` method to generate new valid content for the block.
5. At this point the current block should now be in a valid state and the deprecations workflow stops.
 -->
1. 現在の `save` メソッドが正しい (valid) ブロックを生成しないなら、非推奨プロセス配列内の最初の非推奨プロセスに、オリジナルの保存されたコンテンツが渡される。
2. その `save` メソッドが正しいコンテンツを生成するなら、この非推奨プロセスが、ブロックの属性のパースに使用される。もし `migrate` メソッドがあるなら、非推奨プロセスによってパースされた属性を用いて実行される。
3. 最初の非推奨プロセスの `save` メソッドが正しいブロックを生成しないなら、正しいブロックを生成するまで、配列内の後続の非推奨プロセスを試行する。
4. 属性と任意の innerBlock は、正しいブロックを作成した最初の非推奨プロセスから、現行の `save` メソッドに戻され、ブロックのための新しく正しいコンテンツを生成する。
5. この時点で現行のブロックは正しい状態になり、非推奨プロセスワークフローは停止する。

<!-- 
It is important to note that if a deprecation's `save` method does not produce a valid block then it is skipped completely, including its `migrate` method, even if `isEligible` would return true for the given attributes. This means that if you have several deprecations for a block and want to perform a new migration, like moving content to `InnerBlocks`, you may need to update the `migrate` methods in multiple deprecations in order for the required changes to be applied to all previous versions of the block.
 -->
注意点として、非推奨プロセスの `save` メソッドが正しいブロックを生成しない場合、与えられた属性に対して `isEligible` が true を返すとしても、その `migrate` メソッドを含め、完全にスキップされます。あるブロックに複数の非推奨プロセスのメソッドがあり、例えばコンテンツを `InnerBlocks` に移動するような、新しい移行を行いたい場合、必要な変更を以前のバージョンのブロックすべてに適用するために、複数の非推奨プロセスの `migrate` メソッドを更新する必要があります。

<!-- 
It is also important to note that if a deprecation's `save` method imports additional functions from other files, changes to those files may accidentally change the behavior of the deprecation. You may want to add a snapshot copy of these functions to the deprecations file instead of importing them in order to avoid inadvertently breaking the deprecations.
 -->
また、非推奨プロセスの `save` メソッドが他のファイルから追加の関数をインポートする場合、このファイルを変更すると、誤って非推奨プロセスの動きが変わるかもしれません。これを防ぐには、関数をインポートする代わりに、関数のスナップショットのコピーを非推奨プロセスのファイルに追加してください。

<!--
For blocks with multiple deprecations, it may be easier to save each deprecation to a constant with the version of the block it applies to, and then add each of these to the block's `deprecated` array. The deprecations in the array should be in reverse chronological order. This allows the block editor to attempt to apply the most recent and likely deprecations first, avoiding unnecessary and expensive processing.
 -->
複数の非推奨プロセスを持つブロックの場合、各非推奨プロセスを適用するブロックのバージョンを示す定数に保存し、これらをブロックの `deprecated` 配列に追加すると分かりやすいでしょう。配列内の非推奨プロセスは時系列の逆順 (新しいものが先) で格納します。ブロックエディターはまず、最新の、恐らく適切な非推奨プロセスを最初に適用し、不要で高価な処理を避けられます。

<!--
**Example**
 -->
**例**

```js
const v1 = {};
const v2 = {};
const v3 = {};
const deprecated = [ v3, v2, v1 ];
```

<!--
It is also recommended to keep [fixtures](https://github.com/WordPress/gutenberg/blob/HEAD/test/integration/fixtures/blocks/README.md) which contain the different versions of the block content to allow you to easily test that new deprecations and migrations are working across all previous versions of the block.
 -->
また [fixtures](https://github.com/WordPress/gutenberg/blob/HEAD/test/integration/fixtures/blocks/README.md) の保持を推奨します。異なるバージョンのブロックコンテンツを含み、ブロックのすべての過去のバージョンに対して新しい非推奨プロセスと移行が動作することを簡単にテストできます。

<!--
Deprecations are defined on a block type as its `deprecated` property, an array of deprecation objects where each object takes the form:
 -->
非推奨プロセスは、ブロックタイプの `deprecated` プロパティに以下の形式の非推奨プロセスオブジェクトの配列として定義します。

<!--
-   `attributes` (Object): The [attributes definition](/docs/reference-guides/block-api/block-attributes.md) of the deprecated form of the block.
-   `supports` (Object): The [supports definition](/docs/reference-guides/block-api/block-registration.md) of the deprecated form of the block.
-   `save` (Function): The [save implementation](/docs/reference-guides/block-api/block-edit-save.md) of the deprecated form of the block.
-   `migrate` (Function, Optional): A function which, given the old attributes and inner blocks is expected to return either the new attributes or a tuple array of `[ attributes, innerBlocks ]` compatible with the block. As mentioned above, a deprecation's `migrate` will not be run if its `save` function does not return a valid block so you will need to make sure your migrations are available in all the deprecations where they are relevant.
-   `isEligible` (Function, Optional): A function which, given the attributes and inner blocks of the parsed block, returns true if the deprecation can handle the block migration even if the block is valid. This is particularly useful in cases where a block is technically valid even once deprecated, and requires updates to its attributes or inner blocks. This function is not called when the results of all previous deprecations' `save` functions were invalid.
-   `isEligible` (Function, Optional): A function which, given the attributes and inner blocks of the parsed block, returns true if the deprecation can handle the block migration even if the block is valid. This is particularly useful in cases where a block is technically valid even once deprecated, but still requires updates to its attributes or inner blocks. This function is not called when the results of all previous deprecations' `save` functions were invalid.



-   `migrate`: (Function, Optional). A function which, given the old attributes and inner blocks is expected to return either the new attributes or a tuple array of attributes and inner blocks compatible with the block. As mentioned above, a deprecation's `migrate` will not be run if its `save` function does not return a valid block so you will need to make sure your migrations are available in all the deprecations where they are relevant.
	- _Parameters_
		- `attributes`: The block's old attributes.
		- `innerBlocks`: The block's old inner blocks.
	- _Return_
		- `Object | Array`: Either the updated block attributes or tuple array `[attributes, innerBlocks]`.
-   `isEligible`: (Function, Optional). A function which returns `true` if the deprecation can handle the block migration even if the block is valid. It is particularly useful in cases where a block is technically valid even once deprecated, but still requires updates to its attributes or inner blocks. This function is **not** called when the results of all previous deprecations' save functions were invalid.
	- _Parameters_
		- `attributes`: The raw block attributes as parsed from the serialized HTML, and before the block type code is applied.
		- `innerBlocks`: The block's current inner blocks.
		- `data`: An object containing properties representing the block node and its resulting block object.
			- `data.blockNode`: The raw form of the block as a result of parsing the serialized HTML.
			- `data.block`: The block object, which is the result of applying the block type to the `blockNode`.
	- _Return_
		- `boolean`: Whether or not this otherwise valid block is eligible to be migrated by this deprecation.

 -->
- `attributes` (Object): ブロックの非推奨形式の [attributes 定義](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-attributes/)。
- `supports` (Object): ブロックの非推奨形式の [supports 定義](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/)。
- `save` (Function): ブロックの非推奨形式の [save の実装](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/)。
- `migrate` (Function、オプション): 古い属性と内部ブロックを指定すると、新しい属性、または、属性、およびブロックと互換性のある内部ブロックのタブル配列を返す関数。上で説明したように、非推奨プロセスの `save` 関数が正しいブロックを返さない場合、`migrate` は実行されません。したがって関連するすべての非推奨プロセスで移行が利用可能であることを確認する必要があります。
	- _パラメータ_
		- `attributes`: ブロックの古い属性
		- `innerBlocks`: ブロックの古い内部ブロック
	- _戻り_
		- `Object | Array`: 更新された属性、または、タプル配列 `[attributes, innerBlocks]` のどちらか

- `isEligible` (Function、オプション): ブロックが正しく (valid) ても、非推奨プロセスがブロック移行を処理できる場合に `true` を返す関数。この関数が特に有用なケースはブロックが非推奨となっても技術的には正しいにも関わらず、属性や内部ブロックの更新が必要な場合です。以前のすべての非推奨プロセスの `save` 関数が不正 (invalid) の場合にはこの関数は**呼ばれません**。
	- _パラメータ_
		- `attributes`: シリアライズされた HTML からパースされ、ブロックタイプコードが適用される前の、生のブロック属性
		- `innerBlocks`: ブロックの現在の内部ブロック
		- `data`: ブロックノードとその結果のブロックオブジェクトを表すプロパティを含むオブジェクト。
			- `data.blockNode`: シリアライズされた HTML をパースした結果のブロックの生の形
			- `data.block`: ブロックオブジェクト。`blockNode` にブロックタイプを適用した結果
	- _戻り_
		- `boolean`: この非推奨プロセスにより、この代替の正しい (valid) ブロックに移行されるかどうか

<!--
<div class="callout callout-alert">
It's important to note that <code>attributes</code>, <code>supports</code>, and <code>save</code> are not automatically inherited from the current version, since they can impact parsing and serialization of a block, so they must be defined on the deprecated object in order to be processed during a migration.
</div>
 -->
> 重要な点として `attributes`、`supports`、`save` は自動で現行バージョンから継承されないことに注意してください。これはブロックのパースとシリアライゼーションに影響を与えるためです。移行中に処理されるためには非推奨オブジェクトで定義する必要があります。

<!--
**Example**
 -->
**例**

```js
const { registerBlockType } = wp.blocks;
const attributes = {
	text: {
		type: 'string',
		default: 'some random value',
	},
};
const supports = {
	className: false,
};

registerBlockType( 'gutenberg/block-with-deprecated-version', {
	// ... other block properties go here

	attributes,

	supports,

	save( props ) {
		return <div>{ props.attributes.text }</div>;
	},

	deprecated: [
		{
			attributes,

			supports,

			save( props ) {
				return <p>{ props.attributes.text }</p>;
			},
		},
	],
} );
```

<!--
In the example above we updated the markup of the block to use a `div` instead of `p`.
 -->
上の例ではブロックのマークアップを更新し `p` の代わりに `div` を使用しています。

<!--
## Changing the attributes set
 -->
## 属性の変更

<!--
Sometimes, you need to update the attributes set to rename or modify old attributes.
 -->
場合によっては属性の集合を更新して、古い属性の名前を変更したり変更する必要があります。

<!--
**Example**
 -->
**例**

```js
const { registerBlockType } = wp.blocks;

registerBlockType( 'gutenberg/block-with-deprecated-version', {
	// ... other block properties go here

	attributes: {
		content: {
			type: 'string',
			default: 'some random value',
		},
	},

	save( props ) {
		return <div>{ props.attributes.content }</div>;
	},

	deprecated: [
		{
			attributes: {
				text: {
					type: 'string',
					default: 'some random value',
				},
			},

			migrate( { text } ) {
				return {
					content: text,
				};
			},

			save( props ) {
				return <p>{ props.attributes.text }</p>;
			},
		},
	],
} );
```

<!--
In the example above we updated the markup of the block to use a `div` instead of `p` and rename the `text` attribute to `content`.
 -->
上の例ではブロックのマークアップを `p` から `div` に変更し、`text` 属性を `content` 属性に変更しています。

<!--
## Changing the innerBlocks
 -->
## innerBlock の変更

<!--
Situations may exist where when migrating the block we may need to add or remove innerBlocks.
E.g: a block wants to migrate a title attribute to a paragraph innerBlock.
 -->
ブロックの移行の際に、innerBlock を追加したり削除する場合もあります。
例: ブロックの title 属性を段落 innerBlock に変更する。

<!--
**Example**
 -->
**例**

```js
const { registerBlockType } = wp.blocks;

registerBlockType( 'gutenberg/block-with-deprecated-version', {
	// ... block properties go here

	save( props ) {
		return <p>{ props.attributes.title }</p>;
	},

	deprecated: [
		{
			attributes: {
				title: {
					type: 'string',
					source: 'html',
					selector: 'p',
				},
			},

			migrate( attributes, innerBlocks ) {
				const { title, ...restAttributes } = attributes;

				return [
					restAttributes,
					[
						createBlock( 'core/paragraph', {
							content: attributes.title,
							fontSize: 'large',
						} ),
						...innerBlocks,
					],
				];
			},

			save( props ) {
				return <p>{ props.attributes.title }</p>;
			},
		},
	],
} );
```

<!--
In the example above we updated the block to use an inner Paragraph block with a title instead of a title attribute.
 -->
上の例でブロックは title 属性の代わりにタイトルをもつ段落 innerBlock に更新しています。

<!--
_Above are example cases of block deprecation. For more, real-world examples, check for deprecations in the [core block library](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-library/src). Core blocks have been updated across releases and contain simple and complex deprecations._
 -->
_ここまでブロックの非推奨プロセスの例を挙げましたが、実際の使用例については [コアブロックライブラリー](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-library/src) 内の非推奨を調べてください。コアブロックはリリース全体で更新されていて、簡単なものや複雑なものなど、さまざまな非推奨プロセスがあります。_

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-deprecation.md)
