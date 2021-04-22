<!--
# Apply the Format When the Button Is Clicked
 -->
# ボタンのクリックでフォーマットを適用する

<!--
So far, your custom button doesn't modify the text selected, it only renders a message in the console. Let's change that.

The [rich-text package](/packages/rich-text/README.md) offers a few utilities to work with formats: [applyFormat](/packages/rich-text/README.md#applyFormat), [removeFormat](/packages/rich-text/README.md#removeFormat), and [toggleFormat](/packages/rich-text/README.md#toggleFormat). In this particular example, the format you want to apply (the `<samp>` tag) may be considered binary - either a text selection has the tag or not. Taking that into account, the `toggleFormat` primitive seems more convenient.

Update `my-custom-format.js` with this new code:
 -->

ここまではまだカスタムボタンをクリックしても選択したテキストは変化せず、コンソールにメッセージが表示されるだけです。これから実装していきます。

[rich-text パッケージ](https://developer.wordpress.org/block-editor/packages/packages-rich-text/) にはフォーマット関連のユーティリティー [applyFormat](https://developer.wordpress.org/block-editor/designers-developers/developers/packages/packages-rich-text/#applyFormat)、[removeFormat](https://developer.wordpress.org/block-editor/designers-developers/developers/packages/packages-rich-text/#removeFormat)、[toggleFormat](https://developer.wordpress.org/block-editor/designers-developers/developers/packages/packages-rich-text/#toggleFormat) があります。

この例で適用するフォーマットの `<samp>` タグは、選択したテキストがタグを持つか持たないかの2つの状態を取ります。したがって `toggleFormat` プリミティブを使えば良さそうです。

`my-custom-format.js` を次のコードで更新してください。

**ES5**

{% codetabs %}
{% ES5 %}

```js
( function ( wp ) {
	var MyCustomButton = function ( props ) {
		return wp.element.createElement( wp.blockEditor.RichTextToolbarButton, {
			icon: 'editor-code',
			title: 'Sample output',
			onClick: function () {
				props.onChange(
					wp.richText.toggleFormat( props.value, {
						type: 'my-custom-format/sample-output',
					} )
				);
			},
			isActive: props.isActive,
		} );
	};
	wp.richText.registerFormatType( 'my-custom-format/sample-output', {
		title: 'Sample output',
		tagName: 'samp',
		className: null,
		edit: MyCustomButton,
	} );
} )( window.wp );
```

**ESNext**
{% ESNext %}

```js
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

const MyCustomButton = ( props ) => {
	return (
		<RichTextToolbarButton
			icon="editor-code"
			title="Sample output"
			onClick={ () => {
				props.onChange(
					toggleFormat( props.value, {
						type: 'my-custom-format/sample-output',
					} )
				);
			} }
			isActive={ props.isActive }
		/>
	);
};

registerFormatType( 'my-custom-format/sample-output', {
	title: 'Sample output',
	tagName: 'samp',
	className: null,
	edit: MyCustomButton,
} );
```

{% end %}

<!--
Now, let's check that is working as intended: reload the post/page, make a text selection, click the button, and then change to HTML view to confirm that the tag was effectively applied.

The expected behavior is that the format will be toggled, meaning that the text selected will be wrapped by a `<samp>` tag if it isn't yet, or the tag will be removed if the selection is already wrapped with the tag. Notice that the button renders a different style depending on whether the selection has the tag or not as well - this is controlled by the `isActive` property of the `RichTextToolbarButton` component.
 -->
意図したとおりに動作するかを確認します。投稿またはページをリロードし、テキストを選択し、ボタンをクリックし、HTML ビューに切り替えます。タグが正しく適用されていることが確認できます。

期待する動作としてフォーマットはトグルします。すなわち、選択したテキストに何もなければ `<samp>` タグでラップされ、すでにタグがあれば除去されます。選択したテキストのタグの有無によってボタンは異なるスタイルでレンダリングすることに注意してください。これは `RichTextToolbarButton` コンポーネントの `isActive` プロパティによって制御されます。

<!--
Your browser may have already displayed the selection differently once the tag was applied, but you may want to use a special style of your own. You can use the `className` option in [`registerFormatType`](/packages/rich-text/README.md#registerFormatType) to target the new element by class name: if `className` is set, it'll be added to the new element.

That's it. This is all that is necessary to make a custom format available in the new editor. From here, you may want to check out other [tutorials](/docs/getting-started/tutorials/) or apply your new knowledge to your next plugin!
 -->

タグが適用されるとブラウザ上ではすでに異なるスタイルで表示されたかもしれませんが、指定したスタイルを使用することもできます。[`registerFormatType`](https://developer.wordpress.org/block-editor/designers-developers/developers/packages/packages-rich-text/#registerFormatType) の `className` オプションを使用して新しい要素をクラス名で対象にできます。`className` が設定されると、新しい要素に追加されます。

以上で、新しいエディターで利用可能なカスタムフォーマットについての説明は終了です。ここからは他の[チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/)を調べるか、ここで得た新しい知識を次のプラグインで試してみてください !

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/format-api/3-apply-format.md)
