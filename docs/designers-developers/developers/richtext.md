<!-- 
# RichText Reference
 -->
# RichText リファレンス
<!-- 
RichText is a component that allows developers to render a [`contenteditable` input](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content), providing users with the option to format block content to make it bold, italics, linked, or use other formatting.

The RichText component is extremely powerful because it provides built-in functionality you won't find in other components:
 -->
開発者は RichText コンポーネントを使用して [`contenteditable` 入力](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content) をレンダリングできます。ユーザーはブロックコンテンツを太字、斜体、リンク、その他のオプションでフォーマットできます。

RickText コンポーネントは非常にパワフルで、他のコンポーネントにはない以下の組み込み機能があります。

<!-- 
* **Consistent Styling in the Admin and Frontend:** The editable container can be set to any block-level element, such as a `div`, `h2` or `p` tag. This allows the styles you apply in style.css to more easily apply on the frontend and admin, without having to rewrite them in editor.css.
* **Cohesive Placeholder Text:** Before the user writes their content, it's easy to include placeholder text that's already styled to match the rest of the block editor.
* **Control Over Formatting Options:** It's possible to dictate exactly which formatting options you want to allow for the RichText field. For example, you can dictate whether to allow the user to make text bold, italics or both.
 -->
* **編集画面、表示画面での一貫したスタイリング:** 任意のブロックレベル要素、たとえば `div`、`h2`、`p` タグに編集可能なコンテナを設定できます。より簡単に style.css のスタイルをフロントエンドでの表示と編集画面に適用できます。editor.css でリライトする必要はありません。
* **他とマッチするプレースホルダーテキスト:** ユーザーがコンテンツを書く前に、ブロックエディターの他の部分とマッチしたスタイルでプレースホルダーテキストを配置できます。
* **フォーマットオプションの制御:** RichTest フィールドででのフォーマットオプションを許可するか正確に指定できます。たとえばユーザーにテキストの太字、斜体、その両方を許可するかどうかを設定できます。

<!-- 
Unlike other components that exist in the [Component Reference](/packages/components/README.md) section, RichText lives separately because it only makes sense within the block editor, and not within other areas of WordPress.
 -->
[コンポーネントリファレンス](https://ja.wordpress.org/team/handbook/block-editor/components/) セクション内の他のコンポーネントと異なり RichText は個別に存在します。これはブロックエディター内のみで意味があり、WordPress の他の領域では意味がないためです。

<!-- 
## Property Reference

For a list of the possible properties to pass your RichText component, [check out the component documentation on Github](https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/rich-text/README.md).
 -->
## プロパティリファレンス

RickText コンポーネントに渡すことができるプロパティのリストについては [GitHub 内のコンポーネントのドキュメント](https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/rich-text/README.md)を参照してください。

<!-- 
## Core Blocks Using the RichText Component

There are a number of core blocks using the RichText component. The JavaScript edit function linked below for each block can be used as a best practice reference while creating your own blocks.
 -->
## RichText コンポーネントを使用するコアのブロック

多くのコアブロックが RickText コンポーネントを使用します。以下のリンク先の各ブロックの JavaScript の edit 関数はベストプラクティスとして、ブロック作成の際の参考になります。 

<!-- 
* **[Button](https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/button/edit.js):** RichText is used to enter the button's text.
* **[Heading](https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/heading/edit.js):** RichText is used to enter the heading's text.
* **[Quote](https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/quote/edit.js):** RichText is used in two places, for both the quotation and citation text.
* **[Search](https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/search/edit.js):** RichText is used in two places, for both the label above the search field and the submit button text.
 -->
* **[Button](https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/button/edit.js):** ボタンテキストの入力で使用します。
* **[Heading](https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/heading/edit.js):** 見出しテキストの入力で使用します。
* **[Quote](https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/quote/edit.js):** quotation と citation の２つの引用で使用します。
* **[Search](https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/search/edit.js):** 検索フィールドの上のラベルと「検索」ボタンテキストの2か所で使用します。

<!-- 
## Example

{% codetabs %}
{% ESNext %}
```js
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';

registerBlockType( /* ... */, {
	// ...

	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'h2',
		},
	},

	edit( { attributes, setAttributes } ) {
		const blockProps = useBlockProps();

		return (
			<RichText
				{ ...blockProps }
				tagName="h2" // The tag here is the element output and editable in the admin
				value={ attributes.content } // Any existing content, either from the database or an attribute default
				formattingControls={ [ 'bold', 'italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
				onChange={ ( content ) => setAttributes( { content } ) } // Store updated content as a block attribute
				placeholder={ __( 'Heading...' ) } // Display this text before any content has been added by the user
			/>
		);
	},

	save( { attributes } ) {
		const blockProps = useBlockProps.save();

		return <RichText.Content { ...blockProps } tagName="h2" value={ attributes.content } />; // Saves <h2>Content added in the editor...</h2> to the database for frontend display
	}
} );
```
{% ES5 %}
```js
wp.blocks.registerBlockType( /* ... */, {
	// ...

	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'h2',
		},
	},

	edit: function( props ) {
		var blockProps = wp.blockEditor.useBlockProps();

		return wp.element.createElement( wp.blockEditor.RichText, Object.assign( blockProps, {
			tagName: 'h2',  // The tag here is the element output and editable in the admin
			value: props.attributes.content, // Any existing content, either from the database or an attribute default
			formattingControls: [ 'bold', 'italic' ], // Allow the content to be made bold or italic, but do not allow other formatting options
			onChange: function( content ) {
				props.setAttributes( { content: content } ); // Store updated content as a block attribute
			},
			placeholder: __( 'Heading...' ), // Display this text before any content has been added by the user
		} ) );
	},

	save: function( props ) {
		var blockProps = wp.blockEditor.useBlockProps.save();

		return wp.element.createElement( wp.blockEditor.RichText.Content, Object.assign( blockProps, {
			tagName: 'h2', value: props.attributes.content // Saves <h2>Content added in the editor...</h2> to the database for frontend display
		} ) );
	}
} );
```
{% end %}
 -->
## 例

**ESNext**

{% ESNext %}
```js
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';

registerBlockType( /* ... */, {
	// ...

	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'h2',
		},
	},

	edit( { attributes, setAttributes } ) {
		const blockProps = useBlockProps();

		return (
			<RichText
				{ ...blockProps }
				tagName="h2" // このタグは要素の出力。編集画面で編集可能
				value={ attributes.content } // データベースから、または属性デフォルトからの任意の既存コンテンツ
				formattingControls={ [ 'bold', 'italic' ] } // コンテンツは太字、斜体にできるが、他のフォーマットオプションは許可されない
				onChange={ ( content ) => setAttributes( { content } ) } // 更新したコンテンツはブロック属性として保存
				placeholder={ __( 'Heading...' ) } // Display this text before any content has been added by the user
			/>
		);
	},

	save( { attributes } ) {
		const blockProps = useBlockProps.save();

		return <RichText.Content { ...blockProps } tagName="h2" value={ attributes.content } />; // フロントエンド表示用に <h2>ユーザーが入力したコンテンツ</h2> をデータベースに保存

	}
} );
```

**ES5**

{% codetabs %}
{% ES5 %}
```js
wp.blocks.registerBlockType( /* ... */, {
	// ...

	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'h2',
		},
	},

	edit: function( props ) {
		var blockProps = wp.blockEditor.useBlockProps();

		return wp.element.createElement( wp.blockEditor.RichText, Object.assign( blockProps, {
			tagName: 'h2',  // このタグは要素の出力。編集画面で編集可能
			value: props.attributes.content, // データベースから、または属性デフォルトからの任意の既存コンテンツ
			formattingControls: [ 'bold', 'italic' ], // コンテンツは太字、斜体にできるが、他のフォーマットオプションは許可されない
			onChange: function( content ) {
				props.setAttributes( { content: content } ); // 更新したコンテンツはブロック属性として保存
			},
			placeholder: __( 'Heading...' ), // ユーザーに追加された任意のコンテツの前にこのテキストを表示
		} ) );
	},

	save: function( props ) {
		var blockProps = wp.blockEditor.useBlockProps.save();

		return wp.element.createElement( wp.blockEditor.RichText.Content, Object.assign( blockProps, {
			tagName: 'h2', value: props.attributes.content // 表示用に <h2>ユーザーが入力したコンテンツ</h2> をデータベースに保存
		} ) );
	}
} );
```

{% end %}

<!-- 
## Common Issues & Solutions

While using the RichText component a number of common issues tend to appear.
 -->
## よくある問題と解決策

RichText コンポーネントを使用すると共通の問題がしばしば発生します。

<!-- 
### Placeholder Content Separates from the Input

In some cases the placeholder content on RichText can appear separate from the input where you would write your content. This is likely due to one of two reasons:

1. You can't use an [inline HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) as the RichText component. If your `tagName` property is using an inline element such as `span`, `a` or `code`, it needs to be changed to a [block-level element](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements).
2. The `position` CSS property value for the element must be set to `relative` or `absolute` within the admin. If the styles within style.css or editor.css modify the `position` property value for this element, you may see issues with how it displays.
 -->
### プレースホルダーコンテンツが入力域と別の場所に表示される

RichText のプレースホルダーコンテンツが表示したい入力域とは別の場所に表示される場合があります。おそらく以下の2つのどちらかが原因でしょう。

1. [インライン HTML 要素](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) を RichText コンポーネントとして使用することはできません。`tagName` プロパティが `span`、`a`、`code` などのインライン要素を使用する場合は、[ブロックレベル要素](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)に変更する必要があります。
2. 要素の `position` CSS プロパティ値は編集画面内で `relative` または `absolute` に設定する必要があります。style.css または editor.css 内のスタイルがこの要素の `position` プロパティ値を変更すると、表示時に問題が発生する可能性があります。

<!-- 
### HTML Formatting Tags Display in the Content

If the HTML tags from text formatting such as `<strong>` or `<em>` are being escaped and displayed on the frontend of the site, this is likely due to an issue in your save function. Make sure your code looks something like `<RichText.Content tagName="h2" value={ heading } />` (ESNext) within your save function instead of simply outputting the value with `<h2>{ heading }</h2>`.
 -->
### コンテンツ内に HTML フォーマットタグが表示される

`<strong>` や `<em>` などのテキストフォーマットの HTML タグがエスケープされてサイトのフロントエンド側に表示される場合は恐らく save 関数の問題です。save 関数のコードが `<RichText.Content tagName="h2" value={ heading } />` (ESNext の場合) のようになっていることを確認してください。単純な出力 `<h2>{ heading }</h2>` は誤りです。

<!-- 
### Unwanted Formatting Options Still Display

Before moving forward, consider if using the RichText component makes sense at all. Would it be better to use a basic `input` or `textarea` element? If you don't think any formatting should be possible, these HTML tags may make more sense.

If you'd still like to use RichText, you can eliminate all of the formatting options by specifying the `formattingControls` property as `formattingControls={ [] }` (ESNext). It's possible you'll continue to see formatting options for adding code, an inline image or other formatting. Don't worry, you've found an existing bug that should be fixed soon.
 -->
### それでも予期しないフォーマットオプションが表示される

先に進む前に RichText コンポーネントが本当に必要か考え直してください。基本的な `input` や `textarea` 要素を使用したほうが良いかもしれません。フォーマットが一切必要ないならば、これらの HTML タグのほうが良いでしょう。

それでも RichText が使いたければ、`formattingControls` プロパティに `formattingControls={ [] }` (ESNext の場合) を指定してすべてのフォーマットオプションを削除してください。この場合でもコードの追加、インライン画像、他のフォーマットオプションは残ります。心配は無用です。すぐに修正される既存のバグを見つけただけです。

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/richtext.md)