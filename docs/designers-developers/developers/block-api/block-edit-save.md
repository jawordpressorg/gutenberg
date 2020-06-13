<!-- 
# Edit and Save
 -->
# Edit と Save
<!-- 
When registering a block, the `edit` and `save` functions provide the interface for how a block is going to be rendered within the editor, how it will operate and be manipulated, and how it will be saved.
 -->
ブロックの登録の際 `edit` 関数と `save` 関数は、ブロックがどのように動作し、操作され、保存されるかのインターフェイスを提供します。

## Edit
<!-- 
The `edit` function describes the structure of your block in the context of the editor. This represents what the editor will render when the block is used.
 -->
`edit` 関数はエディター内でのブロックの構造を記述します。すなわち、ブロックが使用される際にエディターがどのようにブロックをレンダリングするかを表します。

**ESNext**

{% codetabs %}
{% ESNext %}
```jsx
edit: () => {
	return <div>Your block.</div>;
}
```

**ES5**

{% ES5 %}
```js
// A static div
edit: function() {
	return wp.element.createElement(
		'div',
		null,
		'Your block.'
	);
}
```
{% end %}

<!-- 
The function receives the following properties through an object argument:
 -->
`edit` 関数はオブジェクト引数を通じて以下のプロパティを受け取ります。

### attributes

<!-- 
This property surfaces all the available attributes and their corresponding values, as described by the `attributes` property when the block type was registered. See [attributes documentation](/docs/designers-developers/developers/block-api/block-attributes.md) for how to specify attribute sources.

In this case, assuming we had defined an attribute of `content` during block registration, we would receive and use that value in our edit function:
 -->
`attributes` プロパティはすべての利用可能な属性と対応する値を表します。属性はブロックタイプ登録の際に `attributes` プロパティによって記述されています。属性のソースを指定する方法については[属性のドキュメント](https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/)を参照してください。

この例ではブロック登録の際に `content` 属性を定義したと仮定し、`edit` 関数内で値を受け取り使用します。

**ESNext**

{% codetabs %}
{% ESNext %}
```js
edit: ( { attributes } ) => {
	return <div>{ attributes.content }</div>;
}
```

**ES5**

{% ES5 %}
```js
edit: function( props ) {
	return wp.element.createElement(
		'div',
		null,
		props.attributes.content
	);
}
```
{% end %}
<!-- 
The value of `attributes.content` will be displayed inside the `div` when inserting the block in the editor.
 -->
エディターにブロックを挿入すると `div` の中に `attributes.content` の値が表示されます。 

### className
<!-- 
This property returns the class name for the wrapper element. This is automatically added in the `save` method, but not on `edit`, as the root element may not correspond to what is _visually_ the main element of the block. You can request it to add it to the correct element in your function.
 -->
`className` プロパティはラッパー要素のクラス名を返します。クラス名は `save` メソッドでは自動的に追加されますが、`edit` では追加されません。これはルートの要素が、ブロックのビジュアル部分を司るメインの要素と異なるかもしれないからです。関数内でどの要素に追加すべきかをリクエストできます。

**ESNext**

{% codetabs %}
{% ESNext %}
```js
edit: ( { attributes, className } ) => {
	return <div className={ className }>{ attributes.content }</div>;
}
```

**ES5**

{% ES5 %}
```js
edit: function( props ) {
	return wp.element.createElement(
		'div',
		{ className: props.className },
		props.attributes.content
	);
}
```
{% end %}

### isSelected
<!-- 
The isSelected property is an object that communicates whether the block is currently selected.
 -->
`isSelected` プロパティはブロックが現在選択されているかどうかを伝えるオブジェクトです。

**ESNext**

{% codetabs %}
{% ESNext %}
```jsx
edit: ( { attributes, className, isSelected } ) => {
	return (
		<div className={ className }>
			Your block.
			{ isSelected &&
				<span>Shows only when the block is selected.</span>
			}
		</div>
	);
}
```

**ES5**

{% ES5 %}
```js
edit: function( props ) {
	return wp.element.createElement(
		'div',
		{ className: props.className },
		[
			'Your block.',
			props.isSelected ? wp.element.createElement(
				'span',
				null,
				'Shows only when the block is selected.'
			)
		]
	);
}
```
{% end %}

### setAttributes
<!-- 
This function allows the block to update individual attributes based on user interactions.
 -->
ブロックは `setAttributes` 関数を使用して、ユーザーの操作に基づき個々の属性を更新できます。

**ESNext**

{% codetabs %}
{% ESNext %}
```jsx
edit: ( { attributes, setAttributes, className, isSelected } ) => {
	// Simplify access to attributes
	const { content, mySetting } = attributes;

	// Toggle a setting when the user clicks the button
	const toggleSetting = () => setAttributes( { mySetting: ! mySetting } );
	return (
		<div className={ className }>
			{ content }
			{ isSelected &&
				<button onClick={ toggleSetting }>Toggle setting</button>
			}
		</div>
	);
}
```

**ES5**

{% ES5 %}
```js
edit: function( props ) {
	// Simplify access to attributes
	let content = props.attributes.content;
	let mySetting = props.attributes.mySetting;

	// Toggle a setting when the user clicks the button
	let toggleSetting = () => props.setAttributes( { mySetting: ! mySetting } );
	return wp.element.createElement(
		'div',
		{ className: props.className },
		[
			content,
			props.isSelected ? wp.element.createElement(
				'button',
				{ onClick: toggleSetting },
				'Toggle setting'
			) : null
		]
	);
},
```
{% end %}

<!-- 
When using attributes that are objects or arrays it's a good idea to copy or clone the attribute prior to updating it:
 -->

オブジェクトや配列の属性を使用する場合には、更新の前に属性をコピーするかクローンしてください。

**ESNext**

{% codetabs %}
{% ESNext %}
```js
// Good - a new array is created from the old list attribute and a new list item:
const { list } = attributes;
const addListItem = ( newListItem ) => setAttributes( { list: [ ...list, newListItem ] } );

// Bad - the list from the existing attribute is modified directly to add the new list item:
const { list } = attributes;
const addListItem = ( newListItem ) => {
	list.push( newListItem );
	setAttributes( { list } );
};
```

**ES5**

{% ES5 %}
```js
// Good - cloning the old list
var newList = attributes.list.slice();

var addListItem = function( newListItem ) {
	setAttributes( { list: newList.concat( [ newListItem ] ) } );
};

// Bad - the list from the existing attribute is modified directly to add the new list item:
var list = attributes.list;
var addListItem = function( newListItem ) {
	list.push( newListItem );
	setAttributes( { list: list } );
};
```
{% end %}

<!-- 
Why do this? In JavaScript, arrays and objects are passed by reference, so this practice ensures changes won't affect other code that might hold references to the same data. Furthermore, the Gutenberg project follows the philosophy of the Redux library that [state should be immutable](https://redux.js.org/faq/immutable-data#what-are-the-benefits-of-immutability)—data should not be changed directly, but instead a new version of the data created containing the changes.
 -->
なぜコピーやクローンが必要なのでしょうか ? JavaScript では配列やオブジェクトは参照渡しされますが、コピーやクローンを行うことで変更が同じデータへの参照を持つ他のコードに影響を与えないことが保証されます。さらに Gutenberg プロジェクトは Redux ライブラリの哲学、[state は不変でなければならない ](https://redux.js.org/faq/immutable-data#what-are-the-benefits-of-immutability)に従っています。データは直接変更せず、変更を含む新しいバージョンのデータを作る必要があります。

## Save
<!-- 
The `save` function defines the way in which the different attributes should be combined into the final markup, which is then serialized into `post_content`.
 -->
`save` 関数は、最終的なマークアップに異なる属性を組み込む方法を定義します。この属性は `post_content` にシリアライズされます。

**ESNext** 

{% codetabs %}
{% ESNext %}
```jsx
save: () => {
	return <div> Your block. </div>;
}
```

**ES5** 

{% ES5 %}
```js
save: function() {
	return wp.element.createElement(
		'div',
		null,
		'Your block.'
	);
}
```
{% end %}

<!-- 
For most blocks, the return value of `save` should be an [instance of WordPress Element](/packages/element/README.md) representing how the block is to appear on the front of the site.
 -->
ほとんどのブロックで `save` の戻り値は、ブロックがサイトのフロントエンドでどのように表示されるかを示す [WordPress Element のインスタンス](https://developer.wordpress.org/block-editor/packages/packages-element/) になります。

<!-- 
_Note:_ While it is possible to return a string value from `save`, it _will be escaped_. If the string includes HTML markup, the markup will be shown on the front of the site verbatim, not as the equivalent HTML node content. If you must return raw HTML from `save`, use `wp.element.RawHTML`. As the name implies, this is prone to [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) and therefore is discouraged in favor of a WordPress Element hierarchy whenever possible.
 -->
_注意:_ `save` から文字列値を返すことができますが、この値は_エスケープされます_。文字列が HTML マークアップを含む場合、サイトのフロントエンドには、同等の HTML ノードコンテンツではなくマークアップがそのまま表示されます。`save` から生の HTML を返す必要がある場合は `wp.element.RawHTML` を使用してください。名前が示すとおり、これは [クロスサイトスクリプティング](https://en.wikipedia.org/wiki/Cross-site_scripting) が発生しやすいため、可能な場合は WordPress Element 階層の使用を推奨します。

<!-- 
_Note:_ The save function should be a pure function that depends only on the attributes used to invoke it.
It can not have any side effect or retrieve information from another source, e.g. it is not possible to use the data module inside it `select( store ).selector( ... )`.
This is because if the external information changes, the block may be flagged as invalid when the post is later edited ([read more about Validation](#validation)).
If there is a need to have other information as part of the save, developers can consider one of these two alternatives:
 - Use [dynamic blocks](/docs/designers-developers/developers/tutorials/block-tutorial/creating-dynamic-blocks.md) and dynamically retrieve the required information on the server.
 - Store the external value as an attribute which is dynamically updated in the block's `edit` function as changes occur.
 -->
_注意:_ `save` 関数は、呼び出し時に使用された属性にのみ依存する、純粋関数であるべきです。いかなるサイドイフェクトも与えず、別のソースから情報も取得できません。たとえば 内部でデータモジュール `select( store ).selector( ... )` を使用することもできません。
これは外部の情報が変更されると、あとで投稿を編集する際にブロックが invalid (不正) としてマーク付けされる可能性があるためです。詳細については以下の[Validation を参照](#validation))してください。
保存の一環として他の情報が必要であれば、

The save function should be a pure function that depends only on the attributes used to invoke it.
It can not have any side effect or retrieve information from another source, e.g. it is not possible to use the data module inside it `select( store ).selector( ... )`.
This is because if the external information changes, the block may be flagged as invalid when the post is later edited ([read more about Validation](#validation)).
If there is a need to have other information as part of the save, developers can consider one of these two alternatives:
 - Use [dynamic blocks](/docs/designers-developers/developers/tutorials/block-tutorial/creating-dynamic-blocks.md) and dynamically retrieve the required information on the server.
 - Store the external value as an attribute which is dynamically updated in the block's `edit` function as changes occur.

<!-- 
For [dynamic blocks](/docs/designers-developers/developers/tutorials/block-tutorial/creating-dynamic-blocks.md), the return value of `save` could represent a cached copy of the block's content to be shown only in case the plugin implementing the block is ever disabled.

If left unspecified, the default implementation will save no markup in post content for the dynamic block, instead deferring this to always be calculated when the block is shown on the front of the site.
 -->
For [dynamic blocks](/docs/designers-developers/developers/tutorials/block-tutorial/creating-dynamic-blocks.md), the return value of `save` could represent a cached copy of the block's content to be shown only in case the plugin implementing the block is ever disabled.

If left unspecified, the default implementation will save no markup in post content for the dynamic block, instead deferring this to always be calculated when the block is shown on the front of the site.

### attributes
<!-- 
As with `edit`, the `save` function also receives an object argument including attributes which can be inserted into the markup.
 -->
As with `edit`, the `save` function also receives an object argument including attributes which can be inserted into the markup.

**ESNext**

{% codetabs %}
{% ESNext %}
```jsx
save: ( { attributes } ) => {
	return <div>{ attributes.content }</div>;
}
```

**ES5**

{% ES5 %}
```js
save: function( props ) {
	return wp.element.createElement(
		'div',
		null,
		props.attributes.content
	);
}
```
{% end %}

<!-- 
When saving your block, you want to save the attributes in the same format specified by the attribute source definition. If no attribute source is specified, the attribute will be saved to the block's comment delimiter. See the [Block Attributes documentation](/docs/designers-developers/developers/block-api/block-attributes.md) for more details.
 -->
When saving your block, you want to save the attributes in the same format specified by the attribute source definition. If no attribute source is specified, the attribute will be saved to the block's comment delimiter. See the [Block Attributes documentation](/docs/designers-developers/developers/block-api/block-attributes.md) for more details.

<!-- 
## Examples
 -->
## 例

<!-- 
Here are a couple examples of using attributes, edit, and save all together.  For a full working example, see the [Introducing Attributes and Editable Fields](/docs/designers-developers/developers/tutorials/block-tutorial/introducing-attributes-and-editable-fields.md) section of the Block Tutorial.
 -->
Here are a couple examples of using attributes, edit, and save all together.  For a full working example, see the [Introducing Attributes and Editable Fields](/docs/designers-developers/developers/tutorials/block-tutorial/introducing-attributes-and-editable-fields.md) section of the Block Tutorial.

<!-- 
### Saving Attributes to Child Elements
 -->
### 子要素への属性の保存

**ESNext**

{% codetabs %}
{% ESNext %}
```jsx
attributes: {
	content: {
		type: 'string',
		source: 'html',
		selector: 'p'
	}
},

edit: ( { attributes, setAttributes } ) => {
	const updateFieldValue = ( val ) => {
		setAttributes( { content: val } );
	}
	return <TextControl
			label='My Text Field'
			value={ attributes.content }
			onChange={ updateFieldValue }
		/>;
},

save: ( { attributes } ) => {
	return <p> { attributes.content } </p>;
},
```

**ES5**

{% ES5 %}
```js
attributes: {
	content: {
		type: 'string',
		source: 'html',
		selector: 'p'
	}
},

edit: function( props ) {
	var updateFieldValue = function( val ) {
		props.setAttributes( { content: val } );
	}
	return wp.element.createElement(
		wp.components.TextControl,
		{
			label: 'My Text Field',
			value: props.attributes.content,
			onChange: updateFieldValue,

		}
	);
},

save: function( props ) {
	return el( 'p', {}, props.attributes.content );
},
```

{% end %}

<!-- 
### Saving Attributes via Serialization
 -->
### シリアライゼーションを介した属性の保存

<!-- 
Ideally, the attributes saved should be included in the markup. However, there are times when this is not practical, so if no attribute source is specified the attribute is serialized and saved to the block's comment delimiter.

This example could be for a dynamic block, such as the [Latest Posts block](https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/latest-posts/index.js), which renders the markup server-side. The save function is still required, however in this case it simply returns null since the block is not saving content from the editor.
 -->
Ideally, the attributes saved should be included in the markup. However, there are times when this is not practical, so if no attribute source is specified the attribute is serialized and saved to the block's comment delimiter.

This example could be for a dynamic block, such as the [Latest Posts block](https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/latest-posts/index.js), which renders the markup server-side. The save function is still required, however in this case it simply returns null since the block is not saving content from the editor.

**ESNext**

{% codetabs %}
{% ESNext %}
```jsx
attributes: {
	postsToShow: {
		type: 'number',
	}
},

edit: ( { attributes, setAttributes } ) => {
	return <TextControl
			label='Number Posts to Show'
			value={ attributes.postsToShow }
			onChange={ ( val ) => {
				setAttributes( { postsToShow: parseInt( val ) } );
			}},
		}
	);
},

save: () => {
	return null;
}
```
{% end %}

**ES5**

{% codetabs %}
{% ES5 %}
```js
attributes: {
	postsToShow: {
		type: 'number',
	}
},

edit: function( props ) {
	return wp.element.createElement(
		wp.components.TextControl,
		{
			label: 'Number Posts to Show',
			value: props.attributes.postsToShow,
			onChange: function( val ) {
				props.setAttributes( { postsToShow: parseInt( val ) } );
			},
		}
	);
},

save: function() {
	return null;
}
```
{% end %}

<!-- 
## Validation
 -->
## Validation

<!-- 
When the editor loads, all blocks within post content are validated to determine their accuracy in order to protect against content loss. This is closely related to the saving implementation of a block, as a user may unintentionally remove or modify their content if the editor is unable to restore a block correctly. During editor initialization, the saved markup for each block is regenerated using the attributes that were parsed from the post's content. If the newly-generated markup does not match what was already stored in post content, the block is marked as invalid. This is because we assume that unless the user makes edits, the markup should remain identical to the saved content.
 -->
When the editor loads, all blocks within post content are validated to determine their accuracy in order to protect against content loss. This is closely related to the saving implementation of a block, as a user may unintentionally remove or modify their content if the editor is unable to restore a block correctly. During editor initialization, the saved markup for each block is regenerated using the attributes that were parsed from the post's content. If the newly-generated markup does not match what was already stored in post content, the block is marked as invalid. This is because we assume that unless the user makes edits, the markup should remain identical to the saved content.

<!-- 
If a block is detected to be invalid, the user will be prompted to choose how to handle the invalidation:

![Invalid block prompt](https://user-images.githubusercontent.com/1779930/35637234-a6a7a18a-0681-11e8-858b-adfc1c6f47da.png)
 -->
If a block is detected to be invalid, the user will be prompted to choose how to handle the invalidation:

![Invalid block prompt](https://user-images.githubusercontent.com/1779930/35637234-a6a7a18a-0681-11e8-858b-adfc1c6f47da.png)

<!-- 
- **Overwrite**: Ignores the warning and treats the newly generated markup as correct. As noted in the behavior described above, this can result in content loss since it will overwrite the markup saved in post content.
- **Convert to Classic**: Protects the original markup from the saved post content as correct. Since the block will be converted from its original type to the Classic block type, it will no longer be possible to edit the content using controls available for the original block type.
- **Edit as HTML block**: Similar to _Convert to Classic_, this will protect the original markup from the saved post content and convert the block from its original type to the HTML block type, enabling the user to modify the HTML markup directly.
 -->
- **Overwrite**: Ignores the warning and treats the newly generated markup as correct. As noted in the behavior described above, this can result in content loss since it will overwrite the markup saved in post content.
- **Convert to Classic**: Protects the original markup from the saved post content as correct. Since the block will be converted from its original type to the Classic block type, it will no longer be possible to edit the content using controls available for the original block type.
- **Edit as HTML block**: Similar to _Convert to Classic_, this will protect the original markup from the saved post content and convert the block from its original type to the HTML block type, enabling the user to modify the HTML markup directly.

<!-- 
### Validation FAQ
 -->
### Validation FAQ
<!-- 
**How do blocks become invalid?**
 -->
**ブロックが invalid (不正) になるのはどのような場合ですか?**

<!-- 
The two most common sources of block invalidations are:

1. A flaw in a block's code would result in unintended content modifications. See the question below on how to debug block invalidation as a plugin author.
2. You or an external editor changed the HTML markup of the block in such a way that it is no longer considered correct.
 -->
The two most common sources of block invalidations are:

1. A flaw in a block's code would result in unintended content modifications. See the question below on how to debug block invalidation as a plugin author.
2. You or an external editor changed the HTML markup of the block in such a way that it is no longer considered correct.

<!-- 
**I'm a plugin author. What should I do to debug why my blocks are being marked as invalid?**
 -->
**プラグイン作者です。プラグインが invalid とマークされた場合、デバッグするには何をすればいいですか ?**

<!-- 
Before starting to debug, be sure to familiarize yourself with the validation step described above documenting the process for detecting whether a block is invalid. A block is invalid if its regenerated markup does not match what is saved in post content, so often this can be caused by the attributes of a block being parsed incorrectly from the saved content.

If you're using [attribute sources](/docs/designers-developers/developers/block-api/block-attributes.md), be sure that attributes sourced from markup are saved exactly as you expect, and in the correct type (usually a `'string'` or `'number'`).

When a block is detected as invalid, a warning will be logged into your browser's developer tools console. The warning will include specific details about the exact point at which a difference in markup occurred. Be sure to look closely at any differences in the expected and actual markups to see where problems are occurring.
 -->
Before starting to debug, be sure to familiarize yourself with the validation step described above documenting the process for detecting whether a block is invalid. A block is invalid if its regenerated markup does not match what is saved in post content, so often this can be caused by the attributes of a block being parsed incorrectly from the saved content.

If you're using [attribute sources](/docs/designers-developers/developers/block-api/block-attributes.md), be sure that attributes sourced from markup are saved exactly as you expect, and in the correct type (usually a `'string'` or `'number'`).

When a block is detected as invalid, a warning will be logged into your browser's developer tools console. The warning will include specific details about the exact point at which a difference in markup occurred. Be sure to look closely at any differences in the expected and actual markups to see where problems are occurring.

<!-- 
**I've changed my block's `save` behavior and old content now includes invalid blocks. How can I fix this?**
 -->
**ブロックの `save` の動きを変えたら古いコンテンツが invalid なブロックを含むようになりました。どのように修正すればよいですか ?**

<!-- 
Refer to the guide on [Deprecated Blocks](/docs/designers-developers/developers/block-api/block-deprecation.md) to learn more about how to accommodate legacy content in intentional markup changes.
 -->
Refer to the guide on [Deprecated Blocks](/docs/designers-developers/developers/block-api/block-deprecation.md) to learn more about how to accommodate legacy content in intentional markup changes.
