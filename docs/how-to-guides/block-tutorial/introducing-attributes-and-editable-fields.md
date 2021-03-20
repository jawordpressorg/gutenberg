<!-- 
# Introducing Attributes and Editable Fields

The example blocks so far are still not very interesting because they lack options to customize the appearance of the message. In this section, we will implement a RichText field allowing the user to specify their own message. Before doing so, it's important to understand how the state of a block (its "attributes") is maintained and changed over time.
 -->
# 属性と編集可能フィールド

これまでに作ったサンプルブロックはメッセージを変更できないため、あまり面白くありませんでした。このセクションでは RichText フィールドを実装して、ユーザーが好きなメッセージを指定できるようにします。実装の前に、まず重要な、ブロックの状態である「属性」がどのように管理され、どのように変更されるかを理解しましょう。

<!-- 
## Attributes

Until now, the `edit` and `save` functions have returned a simple representation of a paragraph element. We also learned how these functions are responsible for _describing_ the structure of the block's appearance. If the user changes a block, this structure may need to change. To achieve this, the state of a block is maintained throughout the editing session as a plain JavaScript object, and when an update occurs, the `edit` function is invoked again. Put another way: __the output of a block is a function of its attributes__.

One challenge of maintaining the representation of a block as a JavaScript object is that we must be able to extract this object again from the saved content of a post. This is achieved with the block type's `attributes` property:
 -->
## 属性

これまで、`edit` 関数と `save` 関数はシンプルな paragraph 要素を返しました。これらの関数はまた、ブロックの表示の構造の _記述_ に責任をもつことも学んできました。ユーザーがブロックを変更すれば、その構造も変更する必要があります。この動作を実現するには、編集セッションの間中はずっと、ブロックの状態をプレーンな JavaScript オブジェクトとして管理しておき、更新があると、`edit` 関数を再び呼び出す必要があります。別の言い方をすれば、__ブロックの出力は、ブロックの属性の関数になります。__

ブロックの表示を JavaScript オブジェクトとして管理する場合の課題は、投稿の保存されたコンテンツから再びこのオブジェクトを取り出さなければならない点です。この問題の解決にはブロックタイプの `attributes` プロパティを使用します。

```js
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
```
<!-- 
When registering a new block type, the `attributes` property describes the shape of the attributes object you'd like to receive in the `edit` and `save` functions. Each value is a [source function](/docs/reference-guides/block-api/block-attributes.md) to find the desired value from the markup of the block.

In the code snippet above, when loading the editor, the `content` value will be extracted from the HTML of the paragraph element in the saved post's markup.
 -->
新しいブロックタイプを登録する際、`attributes` プロパティで `edit` 関数や `save` 関数で受け取る属性オブジェクトの形を記述します。それぞれの値はブロックのマークアップから希望の値を見つける [source 関数](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-attributes/) になります。

上のコード例ではエディターのロード中に、保存された投稿のマークアップの中の paragraph 要素の HTML から `content` 値が取り出されます。

<!-- 
## Components and the `RichText` Component

Earlier examples used the `createElement` function to create DOM nodes, but it's also possible to encapsulate this behavior into "components". This abstraction helps you share common behaviors and hide complexity in self-contained units.

There are a number of [components available](/docs/reference-guides/packages/packages-editor.md#components) to use in implementing your blocks. You can see one such component in the code below: the [`RichText` component](/docs/reference-guides/packages/packages-editor.md#richtext) is part of the `wp-editor` package.

The `RichText` component can be considered as a super-powered `textarea` element, enabling rich content editing including bold, italics, hyperlinks, etc.

To use the `RichText` component, and using ES5 code, remember to add `wp-editor` to the dependency array of registered script handles when calling `wp_register_script`.
 -->
## コンポーネントと RichText コンポーネント

これまでのサンプルでは `createElement` 関数を使用して DOM ノードを作成しましたが、この動きを「コンポーネント」にカプセル化することができます。この抽象化により共通の動作を共有しやすくなり、複雑さを自己完結したユニット内に隠す事ができます。

ブロックの実装に[利用できるコンポーネント](https://developer.wordpress.org/block-editor/packages/packages-editor/#components)が多数あります。以下のサンプルではそのうちの1つ [`RichText` コンポーネント](https://developer.wordpress.org/block-editor/packages/packages-editor/#richtext)を使用します。`RickTest` コンポーネントは `wp-editor` パッケージの一部です。

`RichText` コンポーネントはパワーアップした `textarea` 要素と見なせます。ここでは太字、車体、ハイパーリンクなどのリッチコンテンツを編集できます。

ES5 コードを使用して `RichText` コンポーネントを使用する場合は、`wp_register_script` 呼び出しの際の登録スクリプトハンドルの依存性配列に `wp-editor` を追加してください。

```php
// automatically load dependencies and version
$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

wp_register_script(
	'gutenberg-examples-03-esnext',
	plugins_url( 'build/index.js', __FILE__ ),
	$asset_file['dependencies'],
	$asset_file['version']
);
```
<!-- 
Do not forget to also update the `editor_script` handle in `register_block_type` to `gutenberg-examples-03-esnext`.

Implementing this behavior as a component enables you as the block implementer to be much more granular about editable fields. Your block may not need `RichText` at all, or it may need many independent `RichText` elements, each operating on a subset of the overall block state.

Because `RichText` allows for nested nodes, you'll most often use it in conjunction with the `html` attribute source when extracting the value from saved content. You'll also use `RichText.Content` in the `save` function to output RichText values.

Here is the complete block definition for Example 03.
 -->
忘れずに `register_block_type` の `editor_script` ハンドルを `gutenberg-examples-03-esnext` に更新してください。

振る舞いをコンポーネントとして実装することで、ブロック開発者は編集可能フィールドに対するきめ細かい制御が可能になります。ブロックでは `RichText` が不要かもしれませんし、それぞれが状態全体の一部を操作する多くの独立した `RichText` 要素が必要かもしれません。

`RickText` はネストしたノードが許されるため、多くの場合、保存されたコンテンツから取り出す際に `html` 属性ソースと組み合わせて使用されます。また `RichText.Content` は `save` 関数の中で RickText の出力に使用されます。

Example 03 の完全なブロック定義を以下に示します。

**ESNext**

{% codetabs %}
{% ESNext %}
```jsx
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-03-editable-esnext', {
	apiVersion: 2,
	title: 'Example: Editable (esnext)',
	icon: 'universal-access-alt',
	category: 'design',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	example: {
		attributes: {
			content: 'Hello World',
		},
	},
	edit: ( props ) => {
		const { attributes: { content }, setAttributes, className } = props;
		const blockProps = useBlockProps();
		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};
		return (
			<RichText
				{ ...blockProps }
				tagName="p"
				onChange={ onChangeContent }
				value={ content }
			/>
		);
	},
	save: ( props ) => {
		const blockProps = useBlockProps.save();
		return <RichText.Content { ...blockProps } tagName="p" value={ props.attributes.content } />;
	},
} );
```
**ES5**

{% ES5 %}
```js
( function( blocks, blockEditor, element ) {
	var el = element.createElement;
	var RichText = blockEditor.RichText;
	var useBlockProps = blockEditor.useBlockProps;

	blocks.registerBlockType( 'gutenberg-examples/example-03-editable', {
		apiVersion: 2,
		title: 'Example: Editable',
		icon: 'universal-access-alt',
		category: 'design',

		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
		},
		example: {
			attributes: {
				content: 'Hello World',
			},
		},
		edit: function( props ) {
			var blockProps = useBlockProps();
			var content = props.attributes.content;
			function onChangeContent( newContent ) {
				props.setAttributes( { content: newContent } );
			}

			return el(
				RichText,
				Object.assign( blockProps, {
					tagName: 'p',
					onChange: onChangeContent,
					value: content,
				} )
			);
		},

		save: function( props ) {
			var blockProps = useBlockProps.save();
			return el( RichText.Content, Object.assign( blockProps, {
				tagName: 'p', 
				value: props.attributes.content,
			} ) );
		},
	} );
}(
	window.wp.blocks,
	window.wp.blockEditor,
	window.wp.element
) );
```
{% end %}

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields.md)
