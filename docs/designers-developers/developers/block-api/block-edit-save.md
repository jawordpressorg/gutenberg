<!-- 
# Edit and Save
 -->
# edit と save
<!-- 
When registering a block, the `edit` and `save` functions provide the interface for how a block is going to be rendered within the editor, how it will operate and be manipulated, and how it will be saved.
 -->
ブロックの登録時、`edit` 関数と `save` 関数を使用して、ブロックがどのようにレンダー、操作、保存されるかのインターフェイスを提供します。

## edit
<!-- 
The `edit` function describes the structure of your block in the context of the editor. This represents what the editor will render when the block is used.
 -->
`edit` 関数はエディターのコンテキスト内でのブロックの構造を記述します。ブロックが使用される際、エディターがどのようにブロックをレンダーするかを表します。

**ESNext**

{% codetabs %}
{% ESNext %}
```jsx
import { useBlockProps } from '@wordpress/block-editor';

// ...
const blockSettings = {
	apiVersion: 2,
	
	// ... 

	edit: () => {
		const blockProps = useBlockProps();

		return <div {...blockProps}>Your block.</div>;
	}
};
```

**ES5**

{% ES5 %}
```js
var blockSettings = {
	apiVersion: 2,

	// ...

	edit: function() {
		var blockProps = wp.blockEditor.useBlockProps();

		return wp.element.createElement(
			'div',
			blockProps,
			'Your block.'
		);
	}
};
```
{% end %}

<!-- 
### block wrapper props
 -->
### ブロックラッパー props

<!-- 
The first thing to notice here is the use of the `useBlockProps` React hook on the block wrapper element. In the example above, the block wrapper renders a "div" in the editor, but in order for the Gutenberg editor to know how to manipulate the block, add any extra classNames that are needed for the block... the block wrapper element should apply props retrieved from the `useBlockProps` react hook call.
 -->
ここで最初に注意するのが、ブロックラッパー要素での `useBlockProps` React フックの使用です。上の例でブロックラッパーはエディター内に "div" をレンダーしますが、Gutenberg エディターがどのようにブロックを操作すべきか知らせるために、ブロックに必要な追加の className を加えます。すなわち、ブロックラッパー要素は `useBlockProps` React フックコールから取得した props を適用する必要があります。

<!-- 
If the element wrapper needs any extra custom HTML attributes, these need to be passed as an argument to the `useBlockProps` hook. For example to add a `my-random-classname` className to the wrapper, you can use the following code:
 -->
要素ラッパーで追加のカスタム HTML 属性が必要であれば、`useBlockProps` フックに引数として追加する必要があります。たとえば次のコードではラッパーに  `my-random-classname` className を追加します。

**ESNext**
{% codetabs %}
{% ESNext %}
```jsx
import { useBlockProps } from '@wordpress/block-editor';

// ...
const blockSettings = {
	apiVersion: 2,
	
	// ... 

	edit: () => {
		const blockProps = useBlockProps( { className: 'my-random-classname' } );

		return <div { ...blockProps }>Your block.</div>;
	}
};
```

**ES5**

{% ES5 %}
```js
var blockSettings = {
	apiVersion: 2,

	// ...

	edit: function() {
		var blockProps = wp.blockEditor.useBlockProps( { className: 'my-random-classname' } );

		return wp.element.createElement(
			'div',
			blockProps,
			'Your block.'
		);
	}
};
```
{% end %}

<!-- 
### attributes
 -->
### 属性

<!-- 
The `edit` function also receives a number of properties through an object argument. You can use these properties to adapt the behavior of your block.
 -->
`edit` 関数はまたオブジェクト引数を通じて多くのプロパティを受け取ります。このプロパティを使用してブロックの振る舞いを変更できます。

<!-- 
The `attributes` property surfaces all the available attributes and their corresponding values, as described by the `attributes` property when the block type was registered. See [attributes documentation](/docs/designers-developers/developers/block-api/block-attributes.md) for how to specify attribute sources.
 -->
`attributes` プロパティはすべての利用可能な属性と対応する値を表します。属性はブロックタイプ登録の際に `attributes` プロパティで記述されます。属性ソースを指定する方法については[属性のドキュメント](https://ja.wordpress.org/team/handbook/block-editor/developers/block-api/block-attributes/)を参照してください。

<!-- 
In this case, assuming we had defined an attribute of `content` during block registration, we would receive and use that value in our edit function:
 -->
この例ではブロック登録の際に `content` 属性を定義したと仮定し、`edit` 関数内で値を受け取って使用します。

**ESNext**
{% codetabs %}
{% ESNext %}
```js
edit: ( { attributes } ) => {
	const blockProps = useBlockProps();

	return <div { ...blockProps }>{ attributes.content }</div>;
}
```

**ES5**

{% ES5 %}
```js
edit: function( props ) {
	var blockProps = wp.blockEditor.useBlockProps();

	return wp.element.createElement(
		'div',
		blockProps,
		props.attributes.content
	);
}
```
{% end %}

<!-- 
The value of `attributes.content` will be displayed inside the `div` when inserting the block in the editor.
 -->
エディターにブロックを追加すると、`attributes.content` の値は `div` 内部に表示されます。

### isSelected
<!-- 
The isSelected property is an object that communicates whether the block is currently selected.
 -->
`isSelected` プロパティはブロックが現在選択されているかどうかを伝えるオブジェクトです。

**ESNext**

{% codetabs %}
{% ESNext %}
```jsx
edit: ( { attributes, isSelected } ) => {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
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
	var blockProps = wp.blockEditor.useBlockProps();

	return wp.element.createElement(
		'div',
		blockProps,
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
edit: ( { attributes, setAttributes, isSelected } ) => {
	const blockProps = useBlockProps();

	// Simplify access to attributes
	const { content, mySetting } = attributes;

	// Toggle a setting when the user clicks the button
	const toggleSetting = () => setAttributes( { mySetting: ! mySetting } );
	return (
		<div { ...blockProps }>
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
	var blockProps = wp.blockEditor.useBlockProps();

	// Simplify access to attributes
	let content = props.attributes.content;
	let mySetting = props.attributes.mySetting;

	// Toggle a setting when the user clicks the button
	let toggleSetting = () => props.setAttributes( { mySetting: ! mySetting } );
	return wp.element.createElement(
		'div',
		blockProps,
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
コピーやクローンが必要なのはなぜでしょうか ? JavaScript では配列やオブジェクトは参照渡しされるため、コピーやクローンを行うことで変更が同じデータへの参照を持つ他のコードに影響を与えないことが保証されます。さらに Gutenberg プロジェクトは Redux ライブラリの哲学、[state は不変でなければならない ](https://redux.js.org/faq/immutable-data#what-are-the-benefits-of-immutability)に従っています。データは直接変更せず、変更を含む新しいバージョンのデータを作る必要があります。

## save
<!-- 
The `save` function defines the way in which the different attributes should be combined into the final markup, which is then serialized into `post_content`.
 -->
`save` 関数は、最終的なマークアップに異なる属性を結合する方法を定義します。この属性は `post_content` 内にシリアライズされます。

**ESNext** 

{% codetabs %}
{% ESNext %}
```jsx
save: () => {
	const blockProps = useBlockProps.save();

	return <div { ...blockProps }> Your block. </div>;
}
```

**ES5** 

{% ES5 %}
```js
save: function() {
	var blockProps = wp.blockEditor.useBlockProps.save();

	return wp.element.createElement(
		'div',
		blockProps,
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
_注意:_ `save` 関数は、呼び出し時に使用された属性にのみ依存する純粋関数でなければなりません。どのようなサイドイフェクトも与えられず、別のソースからの情報も取得できません。たとえば 内部でデータモジュール `select( store ).selector( ... )` を使用することはできません。
これは外部の情報が変更されると、あとで投稿を編集する際にブロックが不正 (invalid) としてマーク付けされる可能性があるためです。詳細には以下の「[妥当性検証 (Validation)](#validation))」を参照してください。
保存の流れで他の情報が必要になった場合、開発者には2つの選択肢があります。
 - [ダイナミックブロック](https://ja.wordpress.org/team/handbook/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/) を使用してサーバー上で動的に必要な情報を取得する。
 - 外部の値を属性として保存し、変更があった場合にはブロックの `edit` 関数内で動的に更新する。

<!-- 
For [dynamic blocks](/docs/designers-developers/developers/tutorials/block-tutorial/creating-dynamic-blocks.md), the return value of `save` could represent a cached copy of the block's content to be shown only in case the plugin implementing the block is ever disabled.
 -->
[ダイナミックブロック](https://ja.wordpress.org/team/handbook/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/) の場合、`save` の戻り値は、ブロックを実装するプラグインが無効化された場合に表示されるブロックコンテンツの、キャッシュしたコピーを返すことができます。
<!-- 
If left unspecified, the default implementation will save no markup in post content for the dynamic block, instead deferring this to always be calculated when the block is shown on the front of the site.
 -->
特に指定しない場合、デフォルトの実装ではダイナミックブロックの投稿コンテンツにはマークアップは保存されず、代わりにブロックがサイトのフロントエンド側で表示された際に常に計算するよう延期されます。

<!-- 
### block wrapper props
 -->
### ブロックラッパー props

<!-- 
Like the `edit` function, when rendering static blocks, it's important to add the block props returned by `useBlockProps.save()` to the wrapper element of your block. This ensures that the block class name is rendered properly in addition to any HTML attribute injected by the block supports API.
 -->
`edit` 関数同様、静的ブロックをレンダーする際は、ブロックのラッパー要素に `useBlockProps.save()` から返されるブロック props を追加することが重要です。これでブロックサポート API から外挿された任意の HTML 属性に加えて、ブロッククラス名が正しくレンダーされます。

### attributes

<!-- 
As with `edit`, the `save` function also receives an object argument including attributes which can be inserted into the markup.
 -->
`edit` 関数と同様 `save` 関数もまたオブジェクト引数を受け取ります。オブジェクト引数にはマークアップに挿入することができる属性が含まれます。

**ESNext**

{% codetabs %}
{% ESNext %}
```jsx
save: ( { attributes } ) => {
	const blockProps = useBlockProps.save();
	
	return <div { ...blockProps }>{ attributes.content }</div>;
}
```

**ES5**

{% ES5 %}
```js
save: function( props ) {
	var blockProps = wp.blockEditor.useBlockProps.save();

	return wp.element.createElement(
		'div',
		blockProps,
		props.attributes.content
	);
}
```
{% end %}

<!-- 
When saving your block, you want to save the attributes in the same format specified by the attribute source definition. If no attribute source is specified, the attribute will be saved to the block's comment delimiter. See the [Block Attributes documentation](/docs/designers-developers/developers/block-api/block-attributes.md) for more details.
 -->

ブロックを保存する際、属性は、属性ソース定義で指定した形式で保存されます。属性ソースが指定されていない場合、属性はブロックのコメントデリミッターに保存されます。詳細は [ブロック属性のドキュメント](https://ja.wordpress.org/team/handbook/block-editor/developers/block-api/block-attributes/) を参照してください。

<!-- 
## Examples
 -->
## 例

<!-- 
Here are a couple examples of using attributes, edit, and save all together.  For a full working example, see the [Introducing Attributes and Editable Fields](/docs/designers-developers/developers/tutorials/block-tutorial/introducing-attributes-and-editable-fields.md) section of the Block Tutorial.
 -->
属性、`edit`、`save` を一緒に使用する例をいくつか挙げます。完全に動作するサンプルはブロックのチュートリアルの「[属性と編集可能フィールド](https://ja.wordpress.org/team/handbook/block-editor/tutorials/block-tutorial/introducing-attributes-and-editable-fields/)」

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
		selector: 'div'
	}
},

edit: ( { attributes, setAttributes } ) => {
	const blockProps = useBlockProps();
	const updateFieldValue = ( val ) => {
		setAttributes( { content: val } );
	}
	return (
		<div { ...blockProps }>
			<TextControl
				label='My Text Field'
				value={ attributes.content }
				onChange={ updateFieldValue }
			/>
		</p>
	);
},

save: ( { attributes } ) => {
	const blockProps = useBlockProps.save();

	return <div { ...blockProps }> { attributes.content } </div>;
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
	var blockProps = wp.blockEditor.useBlockProps();
	var updateFieldValue = function( val ) {
		props.setAttributes( { content: val } );
	}

	return wp.element.createElement(
		'div',
		blockProps,
		wp.element.createElement(
			wp.components.TextControl,
			{
				label: 'My Text Field',
				value: props.attributes.content,
				onChange: updateFieldValue,

			}
		)
	);
},

save: function( props ) {
	var blockProps = wp.blockEditor.useBlockProps.save();

	return wp.element.createElement( 'div', blockProps, props.attributes.content );
},
```

{% end %}

<!-- 
### Saving Attributes via Serialization
 -->
### シリアライゼーションを通じた属性の保存

<!-- 
Ideally, the attributes saved should be included in the markup. However, there are times when this is not practical, so if no attribute source is specified the attribute is serialized and saved to the block's comment delimiter.

This example could be for a dynamic block, such as the [Latest Posts block](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-library/src/latest-posts/index.js), which renders the markup server-side. The save function is still required, however in this case it simply returns null since the block is not saving content from the editor.
 -->
理想的には保存する属性はマークアップに含まれるべきですが、常に現実的ではありません。このため属性ソースが指定されない場合、属性はシリアライズされブロックのコメントデリミッターに保存されます。

次の例は[「最近の投稿」ブロック](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-library/src/latest-posts/index.js)のような、マークアップをサーバーサイドでレンダーするダイナミックブロックになります。`save` 関数は依然として必要ですが、ブロックはエディターからコンテンツを保存していないため、この例では単純に null を返しています。

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
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<TextControl
				label='Number Posts to Show'
				value={ attributes.postsToShow }
				onChange={ ( val ) => {
					setAttributes( { postsToShow: parseInt( val ) } );
				}}
			/>
		</p>
	);
},

save: () => {
	return null;
}
```

**ES5**

{% ES5 %}
```js
attributes: {
	postsToShow: {
		type: 'number',
	}
},

edit: function( props ) {
	var blockProps = wp.blockEditor.useBlockProps();
	
	return wp.element.createEleement( 
		'div',
		blockProps,
		wp.element.createElement(
			wp.components.TextControl,
			{
				label: 'Number Posts to Show',
				value: props.attributes.postsToShow,
				onChange: function( val ) {
					props.setAttributes( { postsToShow: parseInt( val ) } );
				},
			}
		)
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
## 妥当性検証 (Validation)

<!-- 
When the editor loads, all blocks within post content are validated to determine their accuracy in order to protect against content loss. This is closely related to the saving implementation of a block, as a user may unintentionally remove or modify their co ntent if the editor is unable to restore a block correctly. During editor initialization, the saved markup for each block is regenerated using the attributes that were parsed from the post's content. If the newly-generated markup does not match what was already stored in post content, the block is marked as invalid. This is because we assume that unless the user makes edits, the markup should remain identical to the saved content.
 -->
エディターがブロックをロードする際、コンテンツの消失を防止するため投稿コンテンツ内のすべてのブロックは妥当性検証 (validatite) され、その正しさが確かめられます。これはブロックを保存する実装と密接な関係があります。なぜならエディターが正しくブロックをリストアしなければユーザーは意図せずにコンテンツを削除したり、変更するためです。エディターの初期化中、各ブロックのマークアップは、投稿コンテンツからパースされた属性を使用して再生成されます。新しく生成されたマークアップが投稿コンテンツ内の保存済みマークアップと異なる場合、ブロックは不正 (invalid) とマークされます。これはユーザーが編集していない限り、マークアップは保存されたコンテンツと同じはずだと仮定しているためです。

<!-- 
If a block is detected to be invalid, the user will be prompted to choose how to handle the invalidation:

![Invalid block prompt](https://user-images.githubusercontent.com/7753001/88754471-4cf7e900-d191-11ea-9123-3cee20719d10.png)

Clicking **Attempt Block Recovery** button will attempt recovery action as much as possible.
 -->
ブロックが不正とマークされると、ユーザーには妥当性検証の失敗をどのように処理するか求められます。

![不正なブロックのプロンプト](https://user-images.githubusercontent.com/7753001/88754471-4cf7e900-d191-11ea-9123-3cee20719d10.png)

**ブロックのリカバリーを試行** ボタンをクリックすると、できる限りの修復のアクションを試みます。

<!-- 
Clicking the "3-dot" menu on the side of the block displays three options:

- **Resolve**: Open Resolve Block dialog box with two buttons:
  - **Convert to HTML**: Protects the original markup from the saved post content and convert the block from its original type to the HTML block type, enabling the user to modify the HTML markup directly.
  - **Convert to Blocks**: Protects the original markup from the saved post content and convert the block from its original type to the validated block type.
- **Convert to HTML**: Protects the original markup from the saved post content and convert the block from its original type to the HTML block type, enabling the user to modify the HTML markup directly.
- **Convert to Classic Block**: Protects the original markup from the saved post content as correct. Since the block will be converted from its original type to the Classic block type, it will no longer be possible to edit the content using controls available for the original block type.
 -->
ブロック側の横の3ドットメニューをクリックすると、3つのオプションが表示されます。

- 「解決」ボタンをクリックすると「ブロックの問題を解決」ダイアログが開き、2つのオプションを選択できます。
  - **HTML に変換**: 投稿コンテンツ内の保存済みオリジナルのマークアップを保護し、ブロックをオリジナルのブロックタイプから HTML ブロックタイプに変換します。ユーザーは HTML マークアップを直接変更できます。
  - **ブロックへ変換**: 投稿コンテンツ内の保存済みオリジナルのマークアップを保護し、ブロックをオリジナルのブロックタイプから検証済みのブロックタイプに変換します。
- **HTML に変換**: 投稿コンテンツ内の保存済みオリジナルのマークアップを保護し、ブロックをオリジナルのブロックタイプから HTML ブロックタイプに変換します。ユーザーは HTML マークアップを直接変更できます。
- **クラシックブロックに変換**: 投稿コンテンツ内の保存済みオリジナルのマークアップを正しいものとして保護します。ブロックはオリジナルのブロックタイプからクラシックブロックタイプに変換されるため、オリジナルのブロックタイプで利用可能だったコントロールでコンテンツを編集できない可能性があります。

<!-- 
### Validation FAQ
 -->
### 妥当性検証 FAQ
<!-- 
**How do blocks become invalid?**
 -->
**ブロックが不正になるのはどのような場合ですか?**

<!-- 
The two most common sources of block invalidations are:

1. A flaw in a block's code would result in unintended content modifications. See the question below on how to debug block invalidation as a plugin author.
2. You or an external editor changed the HTML markup of the block in such a way that it is no longer considered correct.
 -->
ブロックが不正になる原因には大きく2つあります。

1. ブロックのコードのフローが、コンテンツの意図しない変更を引き起こした。以下の質問「プラグイン作者です。プラグインが invalid とマークされたらどうやってデバッグすればいいですか ?」を参照してください。
2. ユーザーまたは外部のエディターがブロックの HTML マークアップを変更して不正となった。

<!-- 
**I'm a plugin author. What should I do to debug why my blocks are being marked as invalid?**
 -->
**プラグイン作者です。プラグインが invalid とマークされたらどうやってデバッグすればいいですか ?**

<!-- 
Before starting to debug, be sure to familiarize yourself with the validation step described above documenting the process for detecting whether a block is invalid. A block is invalid if its regenerated markup does not match what is saved in post content, so often this can be caused by the attributes of a block being parsed incorrectly from the saved content.

If you're using [attribute sources](/docs/designers-developers/developers/block-api/block-attributes.md), be sure that attributes sourced from markup are saved exactly as you expect, and in the correct type (usually a `'string'` or `'number'`).

When a block is detected as invalid, a warning will be logged into your browser's developer tools console. The warning will include specific details about the exact point at which a difference in markup occurred. Be sure to look closely at any differences in the expected and actual markups to see where problems are occurring.
 -->
デバッグを始める前に、上に記述された妥当性検証のステップと、ブロックが不正と検知されるプロセスについて理解してください。ブロックが不正となるのは再生成されたマークアップが投稿コンテンツ内の保存済みマークアップと合致しない場合です。したがって保存されたコンテンツからブロックの属性が正しくパースされなかった場合にしばしば発生します。

[属性ソース](https://ja.wordpress.org/team/handbook/block-editor/developers/block-api/block-attributes/)を使用している場合には、マークアップのソースの属性が期待したとおりに正しいタイプ (通常は `'string'` か `'number'`) で保存されていることを確認してください。

ブロックの不正が検知されるとブラウザーの開発者ツールコンソールに警告が出力されます。警告にはマークアップの相違が発生した正確な場所の詳細が含まれます。期待したマークアップと実際のマークアップの違いを比較し、どこで問題が発生したかを調べてください。

<!-- 
**I've changed my block's `save` behavior and old content now includes invalid blocks. How can I fix this?**
 -->
**ブロックの `save` の動きを変えたら古いコンテンツが不正なブロックになりました。どのように修正すればよいですか ?**

<!-- 
Refer to the guide on [Deprecated Blocks](/docs/designers-developers/developers/block-api/block-deprecation.md) to learn more about how to accommodate legacy content in intentional markup changes.
 -->
[非推奨ブロック](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/block-api/block-deprecation.md) のガイドを参照して、意図したマークアップの変更に古いコンテンツを収容する方法を学習してください。

[原文](https://github.com/WordPress/gutenberg/blob/HEAD/docs/designers-developers/developers/block-api/block-edit-save.md)