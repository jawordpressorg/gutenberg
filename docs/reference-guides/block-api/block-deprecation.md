<!-- 
# Deprecated Blocks
 -->
# 非推奨にするブロック

<!-- 
When updating static blocks markup and attributes, block authors need to consider existing posts using the old versions of their block. To provide a good upgrade path, you can choose one of the following strategies:
 -->
ブロックの静的なマークアップや属性を更新する場合、開発者は現在のバージョンを使用している既存の投稿に注意する必要があります。適切にアップグレードするには以下のどちらかの戦略を選択する必要があります。

<!-- 
 - Do not deprecate the block and create a new one (a different name)
 - Provide a "deprecated" version of the block allowing users opening these in the block editor to edit them using the updated block.
 -->
 - 既存のブロックはそのままにして、異なる名前で新しいブロックを作成する。
 - ブロックの「deprecated (非推奨)」バージョンを提供する。ユーザーはブロックエディターで投稿を開き、更新されたブロックを使用して編集する。

<!-- 
A block can have several deprecated versions. A deprecation will be tried if the current state of a parsed block is invalid, or if the deprecation defines an `isEligible` function that returns true.
--->
ブロックは複数の非推奨バージョンをもつことができます。パースしたブロックの現行の状態が不正 (invalid) の場合、または、true を返す `isEligible` 関数が定義されている場合、非推奨プロセス (deprecation) が実行されます。

<!-- 
It is important to note that if a deprecation's `save` method does not produce a valid block then it is skipped, including its `migrate` method, even if `isEligible` would return true for the given attributes. This means that if you have several deprecations for a block and want to perform a new migration, like moving content to `InnerBlocks`, you may need to include the `migrate` method in multiple deprecations for it to be applied to all previous versions of the block.
 -->
重要な注意点ですが、仮に `isEligible` が与えられた属性に対して true を返しても、非推奨プロセスの `save` メソッドが正しい (valid) ブロックを作成しない場合には、`migrate` メソッドを含む非推奨プロセスはスキップされます。すなわち、あるブロックに対して複数の非推奨プロセスがあって新しい移行を実行したい場合、たとえば `InnerBlocks` にコンテンツを移動する場合、複数の非推奨プロセスに、ブロックのすべての先行するバージョンに適用される `migrate` メソッドを含める必要があります。

<!-- 
Deprecations do not operate as a chain of updates in the way other software data updates, like database migrations, do. At first glance, it is easy to think that each deprecation is going to make the required changes to the data and then hand this new form of the block onto the next deprecation to make its changes. What happens instead, is that each deprecation is passed the original saved content, and if its `save` method produces valid content the deprecation is used to parse the block attributes. If it has a `migrate` method it will also be run using the attributes parsed by the deprecation. The current block is updated with the migrated attributes and inner blocks before the current block's `save` function is run to generate new valid content for the block. At this point the current block should now be in a valid state.
 -->
非推奨プロセスは、たとえばデータベース移行のような、ソフトウエアデータの更新に見られる「更新の連鎖」としては動作しません。誰もが非推奨プロセスを、データに対して必要な変更を行うと、次の非推奨プロセスにブロックの新しい形が渡され、またそこで必要な変更が行われるものと考えます。しかし実際には各非推奨プロセスにはオリジナルの保存されたコンテンツが渡され、その `save` メソッドが正しい (valid) コンテンツを作成するなら、ブロック属性のパースに非推奨プロセスが使用されます。また `migrate` メソッドがあるなら、これも非推奨プロセスがパースした属性を使用して実行されます。現行のブロックは移行された属性と内部ブロックで更新され、次に `save` 関数を実行して、ブロックの新しい正しいコンテンツが生成されます。この時点で現行のブロックは正しい状態になります。

<!-- 
For blocks with multiple deprecations, it may be easier to save each deprecation to a constant with the version of the block it applies to, and then add each of these to the block's `deprecated` array. The deprecations in the array should be in reverse chronological order. This allows the block editor to attempt to apply the most recent and likely deprecations first, avoiding unnecessary and expensive processing.
 -->
複数の非推奨プロセスをもつブロックの場合、適用するブロックのバージョンと共に各非推奨プロセスを定数に保存し、これらをブロックの `deprecated` 配列に追加すると簡単になります。配列内の非推奨プロセスは時系列の逆順 (新しいものが先) で格納します。ブロックエディターは最新の、恐らく最初の非推奨プロセスを適用し、不要で高価な処理を避けられます。

<!-- 
### Example:
 -->
### 例:
#### ESNext
{% codetabs %}
{% ESNext %}
```js
const v1 = {};
const v2 = {};
const v3 = {};
const deprecated = [ v3, v2, v1 ];

```
#### ES5
{% ES5 %}
```js
var v1 = {};
var v2 = {};
var v3 = {};
var deprecated = [ v3, v2, v1 ];
```
{% end %}

<!-- 
It is also recommended to keep [fixtures](https://github.com/WordPress/gutenberg/blob/HEAD/packages/e2e-tests/fixtures/blocks/README.md) which contain the different versions of the block content to allow you to easily test that new deprecations and migrations are working across all previous versions of the block.
 -->

また [fixtures](https://github.com/WordPress/gutenberg/blob/HEAD/packages/e2e-tests/fixtures/blocks/README.md) の保持を推奨します。異なるバージョンのブロックコンテンツを含み、ブロックのすべての過去のバージョンに対して新しい非推奨プロセスと移行が動作することを簡単にテストできます。

<!--
Deprecations are defined on a block type as its `deprecated` property, an array of deprecation objects where each object takes the form:
 -->
非推奨プロセスは、ブロックタイプの `deprecated` プロパティに以下の形式の非推奨プロセスオブジェクトの配列として定義します。

<!-- 
- `attributes` (Object): The [attributes definition](/docs/reference-guides/block-api/block-attributes.md) of the deprecated form of the block.
- `supports` (Object): The [supports definition](/docs/reference-guides/block-api/block-registration.md) of the deprecated form of the block.
- `save` (Function): The [save implementation](/docs/reference-guides/block-api/block-edit-save.md) of the deprecated form of the block.
- `migrate` (Function, Optional): A function which, given the old attributes and inner blocks is expected to return either the new attributes or a tuple array of `[ attributes, innerBlocks ]` compatible with the block. As mentioned above, a deprecation's `migrate` will not be run if its `save` function does not return a valid block so you will need to make sure your migrations are available in all the deprecations where they are relevant.
- `isEligible` (Function, Optional): A function which, given the attributes and inner blocks of the parsed block, returns true if the deprecation can handle the block migration even if the block is valid. This is particularly useful in cases where a block is technically valid even once deprecated, and requires updates to its attributes or inner blocks. This function is not called when the results of all previous deprecations' `save` functions were invalid.
 -->
- `attributes` (Object): ブロックの非推奨形式の [attributes 定義](https://ja.wordpress.org/team/handbook/block-editor/developers/block-api/block-attributes/)。
- `supports` (Object): ブロックの非推奨形式の [supports 定義](https://ja.wordpress.org/team/handbook/block-editor/developers/block-api/block-registration/)。
- `save` (Function): ブロックの非推奨形式の [save の実装](https://ja.wordpress.org/team/handbook/block-editor/developers/block-api/block-edit-save/)。
- `migrate` (Function、オプション): 古い属性と内部ブロックを指定すると、新しい属性、または、ブロックと互換性のある `[ attributes, innerBlocks ]` のタブル配列を返す関数。上で説明したように、非推奨プロセスの `save` 関数が正しいブロックを返さない場合、`migrate` は実行されません。したがって関連するすべての非推奨プロセスで移行が利用可能であることを確認する必要があります。
- `isEligible` (Function、オプション): パースされたブロックの属性と内部ブロックを指定すると、ブロックが正しく (valid) ても、非推奨プロセスがブロック移行を処理できる場合に true を返す関数。この関数が特に有用なケースはブロックが非推奨となっても技術的には正しく、属性や内部ブロックの更新が必要な場合です。以前のすべての非推奨プロセスの `save` 関数が不正 (invalid) の場合にはこの関数は呼ばれません。

<!--
It's important to note that `attributes`, `supports`, and `save` are not automatically inherited from the current version, since they can impact parsing and serialization of a block, so they must be defined on the deprecated object in order to be processed during a migration.
 -->
重要な点として `attributes`、`supports`、`save` は自動で現行バージョンから継承されないことに注意してください。これはブロックのパースとシリアライゼーションに影響を与えるためです。移行中に処理されるためには非推奨オブジェクトで定義する必要があります。

<!-- 
### Example:
 -->
### 例:

#### ESNext

{% codetabs %}
{% ESNext %}
```js
const { registerBlockType } = wp.blocks;
const attributes = {
	text: {
		type: 'string',
		default: 'some random value',
	}
};

registerBlockType( 'gutenberg/block-with-deprecated-version', {

	// ... other block properties go here

	attributes,

	save( props ) {
		return <div>{ props.attributes.text }</div>;
	},

	deprecated: [
		{
			attributes,

			save( props ) {
				return <p>{ props.attributes.text }</p>;
			},
		}
	]
} );
```

#### ES5

{% ES5 %}
```js
var el = wp.element.createElement,
	registerBlockType = wp.blocks.registerBlockType,
	attributes = {
		text: {
			type: 'string',
			default: 'some random value',
		}
	};

registerBlockType( 'gutenberg/block-with-deprecated-version', {

	// ... other block properties go here

	attributes: attributes,

	save: function( props ) {
		return el( 'div', {}, props.attributes.text );
	},

	deprecated: [
		{
			attributes: attributes,

			save: function( props ) {
				return el( 'p', {}, props.attributes.text );
			},
		}
	]
} );
```
{% end %}

<!-- 
In the example above we updated the markup of the block to use a `div` instead of `p`.
 -->
上の例ではブロックのマークアップを更新し `a` の代わりに `div` を使用しています。

<!-- 
## Changing the attributes set
 -->
## 属性の変更

<!-- 
Sometimes, you need to update the attributes set to rename or modify old attributes.
 -->
場合によっては属性の集合を更新して、古い属性の名前を変更したり変更する必要があります。

<!-- 
### Example:
 -->
### 例:

#### ESNext

{% codetabs %}
{% ESNext %}
```js
const { registerBlockType } = wp.blocks;

registerBlockType( 'gutenberg/block-with-deprecated-version', {

	// ... other block properties go here

	attributes: {
		content: {
			type: 'string',
			default: 'some random value',
		}
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
				}
			},

			migrate( { text } ) {
				return {
					content: text
				};
			},

			save( props ) {
				return <p>{ props.attributes.text }</p>;
			},
		}
	]
} );
```

#### ES5

{% ES5 %}
```js
var el = wp.element.createElement,
	registerBlockType = wp.blocks.registerBlockType;

registerBlockType( 'gutenberg/block-with-deprecated-version', {

	// ... other block properties go here

	attributes: {
		content: {
			type: 'string',
			default: 'some random value',
		}
	},

	save: function( props ) {
		return el( 'div', {}, props.attributes.content );
	},

	deprecated: [
		{
			attributes: {
				text: {
					type: 'string',
					default: 'some random value',
				}
			},

			migrate: function( attributes ) {
				return {
					content: attributes.text
				};
			},

			save: function( props ) {
				return el( 'p', {}, props.attributes.text );
			},
		}
	]
} );
```
{% end %}

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
### Example:
 -->
### 例:

#### ESNext

{% codetabs %}
{% ESNext %}
```js
const { registerBlockType } = wp.blocks;
const { omit } = lodash;

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

			migrate( attributes, innerBlocks  ) {
				return [
					omit( attributes, 'title' ),
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
		}
	]
} );
```

#### ES5

{% ES5 %}
```js
var el = wp.element.createElement,
	registerBlockType = wp.blocks.registerBlockType,
	omit = lodash.omit;

registerBlockType( 'gutenberg/block-with-deprecated-version', {

	// ... block properties go here

	deprecated: [
		{
			attributes: {
				title: {
					type: 'string',
					source: 'html',
					selector: 'p',
				},
			},

			migrate: function( attributes, innerBlocks ) {
				return [
					omit( attributes, 'title' ),
					[
						createBlock( 'core/paragraph', {
							content: attributes.title,
							fontSize: 'large',
						} ),
					].concat( innerBlocks ),
				];
			},

			save: function( props ) {
				return el( 'p', {}, props.attributes.title );
			},
		}
	]
} );
```
{% end %}

<!-- 
In the example above we updated the block to use an inner Paragraph block with a title instead of a title attribute.
 -->
上の例でブロックは title 属性の代わりにタイトルをもつ段落 innerBlock に更新しています。

<!-- 
*Above are example cases of block deprecation. For more, real-world examples, check for deprecations in the [core block library](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-library/src). Core blocks have been updated across releases and contain simple and complex deprecations.*
 -->
*ここまでブロックの非推奨プロセスの例を挙げましたが、実際の使用例については [コアブロックライブラリー](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-library/src) 内の非推奨を調べてください。コアブロックはリリース全体で更新されていて、簡単なものや複雑なものなど、さまざまな非推奨プロセスがあります。*

[原文](https://github.com/WordPress/gutenberg/blob/HEAD/docs/designers-developers/developers/block-api/block-deprecation.md)
