<!--
# Block Attributes
 -->
# ブロックの属性
<!--
Attributes are the way a block stores data, they define how a block is parsed to extract data from the saved content.

For this block tutorial, we want to allow the user to type in a message that we will display stylized in the published post. So, we need to add a **message** attribute that will hold the user message. The following code defines a **message** attribute; the attribute type is a string; the source is the text from the selector which is a `div` tag.
 -->
「属性」はブロックがデータを保存する方法です。ブロックをどのようにパースして保存されたコンテンツからデータを取り出すかを定義します。

このチュートリアルのブロックではユーザーがメッセージを入力でき、公開された投稿ではスタイリングされて表示されます。したがってユーザーのメッセージを保持する **message** 属性を追加する必要があります。以下のコードは属性タイプを string、ソースをセレクター内のテキスト、セレクターを `div` タグとした **message** 属性を定義します。

```json
"attributes": {
	"message": {
		"type": "string",
		"source": "text",
		"selector": "div",
		"default": "",
	},
},
```
<!--
Add this to the `block.json` file. The `attributes` are at the same level as the _name_ and _title_ fields.

When the block loads it will look at the saved content for the block, look for the div tag, take the text portion, and store the content in an `attributes.message` variable.

Note: The text portion is equivalent to `innerText` attribute of a DOM element. For more details and other examples see the [Block Attributes documentation](/docs/reference-guides/block-api/block-attributes.md).
 -->
このコードを `block.json` ファイルに追加してください。`attributes` は _name_ や _title_ フィールドと同じレベルです。

ブロックがロードされると、ブロックのために保存されたコンテンツを探し、div タグを探し、text 部分を取り出し、コンテンツを `attributes.message` 変数に保存します。

注意: text 部分は DOM 要素の `innerText` 属性と同じです。詳細および他の例については [ブロックの属性 ドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-attributes/) を参照してください。

<!--
## Edit and Save
 -->
## Edit と Save

<!--
The **attributes** are passed to the `edit` and `save` functions, along with a **setAttributes** function to set the values. Additional parameters are also passed in to these functions, see [the edit/save documentation](/docs/reference-guides/block-api/block-edit-save.md) for more details.

The `attributes` is a JavaScript object containing the values of each attribute, or default values if defined. The `setAttributes` is a function to update an attribute.
 -->
`edit` 関数と `save` 関数には、値を設定する **setAttributes** 関数と共に **attributes** が渡されます。これらの関数には追加のパラメータも渡すことができます。詳細については [Edit と Save ドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/) を参照してください。

`attributes` は各属性の値、または存在するならデフォルト値を含む JavaScript オブジェクトです。`setAttributes` は属性を更新する関数です。

```js
export default function Edit( { attributes, setAttributes } ) {
	// ...
}
```
<!--
## TextControl Component
 -->
## TextControl コンポーネント
<!--
For our example block, the component we are going to use is the **TextControl** component, it is similar to an HTML text input field. You can see [documentation for TextControl component](/packages/components/src/text-control/README.md). You can browse an [interactive set of components in this Storybook](https://wordpress.github.io/gutenberg/).

The component is added similar to an HTML tag, setting a label, the `value` is set to the `attributes.message` and the `onChange` function uses the `setAttributes` to update the message attribute value.
 -->
このチュートリアルのブロックは HTML テキスト入力フィールドに似た **TextControl** コンポーネントを使用します。[TextControl コンポーネント ドキュメント](https://developer.wordpress.org/block-editor/reference-guides/components/text-control/) を参照してください。[この Storybook でインタラクティブなコンポーネントセット](https://wordpress.github.io/gutenberg/) をブラウズできます。

コンポーネントは HTML タグと同じように追加できます。ラベルを設定し、`value` に `attributes.message` をセットし、`onChange` 関数に `setAttributes` を使用して message 属性の値を更新します。
<!--
The save function will simply write the `attributes.message` as a div tag since that is how we defined it to be parsed.

Update the edit.js and save.js files to the following, replacing the existing functions.

**edit.js** file:
 -->
save 関数は単純に `attributes.message` を div タグとして書き出します。これはそのようにパースされると定義したことに依ります。

edit.js ファイルと save.js ファイルを以下のように更新し、既存の関数を置き換えてください。

**edit.js** ファイル:

```js
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps() }>
			<TextControl
				label={ __( 'Message', 'gutenpride' ) }
				value={ attributes.message }
				onChange={ ( val ) => setAttributes( { message: val } ) }
			/>
		</div>
	);
}
```
<!--
**save.js** file:
 -->
**save.js** ファイル:

```jsx
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return <div { ...useBlockProps.save() }>{ attributes.message }</div>;
}
```
<!--
Rebuild the block using `npm run build`, reload the editor and add the block. Type a message in the editor, save, and view it in the post.

Next Section: [Code Implementation](/docs/getting-started/tutorials/create-block/block-code.md)
 -->
`npm run build` を使用してブロックをリビルドし、エディターをリロードして、ブロックを追加してください。エディターでメッセージを入力し、保存し、投稿を表示してみてください。

次のセクション: [コードの実装](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/block-code/)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/tutorials/create-block/attributes.md)
