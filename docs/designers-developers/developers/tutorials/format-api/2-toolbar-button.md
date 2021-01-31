<!-- 
# Add a Button to the Toolbar
 -->
# ツールバーへのボタンの追加

<!-- 
Now that the format is available, the next step is to surface it to the UI. You can make use of the [`RichTextToolbarButton`](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-editor/src/components/rich-text#richtexttoolbarbutton) component to extend the format toolbar.

Paste this code in `my-custom-format.js`:
 -->
フォーマットが利用可能になったので、次に UI を作成します。[`RichTextToolbarButton`](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-editor/src/components/rich-text#richtexttoolbarbutton) コンポーネントを使用してフォーマットツールバーを拡張します。

次のコードを `my-custom-format.js` に追加してください。

**ES5**

{% codetabs %}
{% ES5 %}
```js
( function( wp ) {
	var MyCustomButton = function( props ) {
		return wp.element.createElement(
			wp.editor.RichTextToolbarButton, {
				icon: 'editor-code',
				title: 'Sample output',
				onClick: function() {
					console.log( 'toggle format' );
				},
			}
		);
	}
	wp.richText.registerFormatType(
		'my-custom-format/sample-output', {
			title: 'Sample output',
			tagName: 'samp',
			className: null,
			edit: MyCustomButton,
		}
	);
} )( window.wp );
```

**ESNext**

{% ESNext %}
```js
import { registerFormatType } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

const MyCustomButton = props => {
	return <RichTextToolbarButton
		icon='editor-code'
		title='Sample output'
		onClick={ () => {
			console.log( 'toggle format' );
		} }
	/>
};

registerFormatType(
	'my-custom-format/sample-output', {
		title: 'Sample output',
		tagName: 'samp',
		className: null,
		edit: MyCustomButton,
	}
);
```
{% end %}
<!-- 
**Important**: note that this code is using two new utilities (`wp.element.createElement`, and `wp.editor.RichTextToolbarButton`) so don't forget adding the corresponding `wp-element` and `wp-editor` packages to the dependencies array in the PHP file along with the existing `wp-rich-text`.
-->
**重要**: このコードは新しいユーティリティー (`wp.element.createElement` と `wp.editor.RichTextToolbarButton`) を使用しています。忘れずに対応する `wp-element` と `wp-editor` のパッケージを既存の `wp-rich-text` とともに PHP ファイル内の依存性配列に追加してください。

<!--
Let's check that everything is working as expected. Reload the post/page and select a text block. Make sure that the new button was added to the format toolbar, it uses the [editor-code dashicon](https://developer.wordpress.org/resource/dashicons/#editor-code), and the hover text is what you set in the title:

![Toolbar with custom button](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/designers-developers/assets/toolbar-with-custom-button.png)
 -->
期待どおりに動作するかを確認します。投稿やページをリロードしテキストブロックを選択してください。フォーマットツールバーに新しいボタンが追加されています。[editor-code ダッシュアイコン](https://developer.wordpress.org/resource/dashicons/#editor-code) を使用し、title に設定したテキストがホバーします。

![カスタムボタンのツールバー](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/designers-developers/assets/toolbar-with-custom-button.png)

<!-- 
You may also want to check that upon clicking the button the `toggle format` message is shown in your browser's console.
 -->
またボタンをクリックするとメッセージ `toggle format` がブラウザーのコンソールに表示されます。

<!-- 
## Show the button only for specific blocks

By default, the button is rendered on every rich text toolbar (image captions, buttons, paragraphs, etc).
It is possible to render the button only on blocks of a certain type by using `wp.data.withSelect` together with `wp.compose.ifCondition`.
The following sample code renders the previously shown button only on Paragraph blocks:
 -->

## 特定のブロックでのボタンの表示

デフォルトではボタンはすべてのリッチテキストツールバー、たとえば画像のキャプション、ボタン、段落等でレンダーされます。特定のタイプのブロックでのみボタンをレンダーすることができます。これには `wp.data.withSelect` と `wp.compose.ifCondition` を一緒に使用します。
次のサンプルコードは先ほどのボタンを「段落」ブロックでのみレンダーします。

**ES5**

{% codetabs %}
{% ES5 %}
```js
( function( wp ) {
	var withSelect = wp.data.withSelect;
	var ifCondition = wp.compose.ifCondition;
	var compose = wp.compose.compose;
	var MyCustomButton = function( props ) {
		return wp.element.createElement(
			wp.editor.RichTextToolbarButton, {
				icon: 'editor-code',
				title: 'Sample output',
				onClick: function() {
					console.log( 'toggle format' );
				},
			}
		);
	}
	var ConditionalButton = compose(
		withSelect( function( select ) {
			return {
				selectedBlock: select( 'core/editor' ).getSelectedBlock()
			}
		} ),
		ifCondition( function( props ) {
			return (
				props.selectedBlock &&
				props.selectedBlock.name === 'core/paragraph'
			);
		} )
	)( MyCustomButton );

	wp.richText.registerFormatType(
		'my-custom-format/sample-output', {
			title: 'Sample output',
			tagName: 'samp',
			className: null,
			edit: ConditionalButton,
		}
	);
} )( window.wp );
```

**ESNext**

{% ESNext %}
```js
import { compose, ifCondition } from '@wordpress/compose';
import { registerFormatType } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { withSelect } from '@wordpress/data';

const MyCustomButton = props => {
	return <RichTextToolbarButton
		icon='editor-code'
		title='Sample output'
		onClick={ () => {
			console.log( 'toggle format' );
		} }
	/>
};

const ConditionalButton = compose(
	withSelect( function( select ) {
		return {
			selectedBlock: select( 'core/editor' ).getSelectedBlock()
		}
	} ),
	ifCondition( function( props ) {
		return (
			props.selectedBlock &&
			props.selectedBlock.name === 'core/paragraph'
		);
	} )
)( MyCustomButton );

registerFormatType(
	'my-custom-format/sample-output', {
		title: 'Sample output',
		tagName: 'samp',
		className: null,
		edit: ConditionalButton,
	}
);
```
{% end %}
<!-- 
Don't forget adding `wp-compose` and `wp-data` to the dependencies array in the PHP script.

More advanced conditions can be used, e.g., only render the button depending on specific attributes of the block.
 -->

`wp-compose` と `wp-data` を PHP スクリプト内の依存性配列に忘れずに加えてください。

もっと高度な条件を加えることも可能です。たとえばブロックの特定の属性に依存してボタンを表示するなど。

[原文](https://github.com/WordPress/gutenberg/blob/HEAD/docs/designers-developers/developers/tutorials/format-api/2-toolbar-button.md)