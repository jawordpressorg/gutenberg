<!-- 
# Deprecated Blocks
 -->
# 非推奨にするブロック 

<!-- 
When updating static blocks markup and attributes, block authors need to consider existing posts using the old versions of their block. In order to provide a good upgrade path, you can choose one of the following strategies:
 -->
ブロックの静的なマークアップや属性を更新する際、開発者は古いバージョンを使用して書かれた既存の投稿に注意する必要があります。適切にアップグレードするには以下の戦略の1つを選択する必要があります。

<!-- 
 - Do not deprecate the block and create a new one (a different name)
 - Provide a "deprecated" version of the block allowing users opening these in the block editor to edit them using the updated block.
 -->
 - 既存のブロックはそのままにして、新しいブロックを異なる名前で作成する。
 - ブロックの「deprecated (非推奨)」バージョンを提供する。ユーザーはブロックエディターで投稿を開き、更新されたブロックを使用して編集できる。

<!-- 
A block can have several deprecated versions. A deprecation will be tried if a parsed block appears to be invalid, or if there is a deprecation defined for which its `isEligible` property function returns true.

Deprecations are defined on a block type as its `deprecated` property, an array of deprecation objects where each object takes the form:
 -->
ブロックは複数の非推奨バージョンをもつことができます。パースしたブロックが不正の場合、または、`isEligible` プロパティ関数で true を返し非推奨を宣言する場合、非推奨プロセス (deprecation) が実行されます。

非推奨プロセスは、ブロックタイプの `deprecated` プロパティに以下の形式の非推奨プロセスオブジェクトの配列として定義します。

<!-- 
- `attributes` (Object): The [attributes definition](/docs/designers-developers/developers/block-api/block-attributes.md) of the deprecated form of the block.
- `supports` (Object): The [supports definition](/docs/designers-developers/developers/block-api/block-registration.md) of the deprecated form of the block.
- `save` (Function): The [save implementation](/docs/designers-developers/developers/block-api/block-edit-save.md) of the deprecated form of the block.
- `migrate` (Function, Optional): A function which, given the old attributes and inner blocks is expected to return either the new attributes or a tuple array of `[ attributes, innerBlocks ]` compatible with the block.
- `isEligible` (Function, Optional): A function which, given the attributes and inner blocks of the parsed block, returns true if the deprecation can handle the block migration even if the block is valid. This function is not called when the block is invalid. This is particularly useful in cases where a block is technically valid even once deprecated, and requires updates to its attributes or inner blocks.
 -->
- `attributes` (Object): ブロックの非推奨形式の [attributes 定義](https://ja.wordpress.org/team/handbook/block-editor/developers/block-api/block-attributes/)。
- `supports` (Object): ブロックの非推奨形式の [supports 定義](https://ja.wordpress.org/team/handbook/block-editor/developers/block-api/block-registration/)。
- `save` (Function): ブロックの非推奨形式の [save の実装](https://ja.wordpress.org/team/handbook/block-editor/developers/block-api/block-edit-save/)。
- `migrate` (Function、オプション): 古い属性と内部ブロックを指定すると、新しい属性、または、ブロックと互換性のある `[ attributes, innerBlocks ]` のタブル配列を返す関数。
- `isEligible` (Function、オプション): パースされたブロックの属性と内部ブロックを指定すると、ブロックが妥当 (valid) であっても、非推奨プロセスがブロック移行を処理できる場合に true を返す関数。ブロックが不正 (invalid) の場合にはこの関数は呼ばれません。この関数が特に有用なケースはブロックが非推奨となっても技術的には妥当 (valid) で、属性や内部ブロックの更新が必要な場合です。

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
*Above are example cases of block deprecation. For more, real-world examples, check for deprecations in the [core block library](https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src). Core blocks have been updated across releases and contain simple and complex deprecations.*
 -->
*ここまでブロックの非推奨プロセスの例を挙げましたが、実際の使用例については [コアブロックライブラリー](https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src) 内の非推奨を調べてください。コアブロックはリリース全体で更新されていて、簡単なものや複雑なものなど、さまざまな非推奨プロセスがあります。*

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/block-api/block-deprecation.md)