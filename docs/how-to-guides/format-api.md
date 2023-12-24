<!-- 
# Formatting Toolbar API
 -->
# 書式ツールバー API

<!-- 
## Overview
 -->
## 概要

<!-- 
The Format API makes it possible for developers to add custom buttons to the formatting toolbar and have them apply a _format_ to a text selection. Bold is an example of a standard button in the formatting toolbar.
 -->
書式 API (Format API) を使用すると開発者は、書式ツールバーにカスタムボタンを追加し、選択したテキストに対して「書式」(format) を適用できます。たとえば「太字」は、書式ツールバーの標準ボタンの一例です。

<!-- 
![Format API Toolbar animated example](https://developer.wordpress.org/files/2021/12/format-api-example.gif)
 -->
![書式 API ツールバー動画の例](https://developer.wordpress.org/files/2021/12/format-api-example.gif)

<!-- 
In WordPress lingo, a _format_ is a [HTML tag with text-level semantics](https://www.w3.org/TR/html5/textlevel-semantics.html#text-level-semantics-usage-summary) used to give some special meaning to a text selection. For example, in this tutorial, the button to be hooked into the format toolbar will wrap a particular text selection with the `<samp>` HTML tag.
 -->
WordPress の世界で「書式」とは、[テキストレベルのセマンティクスでの HTML タグ](https://www.w3.org/TR/html5/textlevel-semantics.html#text-level-semantics-usage-summary)を指します。選択したテキストに特別な意味を与えられます。たとえばこのチュートリアルでは、書式ツールバーにフックされたボタンが、選択したテキストを `<samp>` HTML タグでラップします。

<!-- 
## Before you start
 -->
## はじめる前に

<!-- 
This guide assumes you are already familiar with WordPress plugins and loading JavaScript with them, see the [Plugin Handbook](https://developer.wordpress.org/plugins/) or [JavaScript Tutorial](/docs/how-to-guides/javascript/README.md) to brush up.
 -->
このガイドでは、すでに WordPress プラグインと JavaScript の読み込みに精通していることを前提としています。必要に応じて、[プラグインハンドブック](https://developer.wordpress.org/plugins/) または [JavaScript チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/)を参照してください。

<!-- 
You will need:
 -->
以下が必要です。

<!-- 
-   WordPress development environment
-   A minimal plugin activated and setup ready to edit
-   JavaScript setup for building and enqueuing
 -->
-   WordPress 開発環境
-   最小のプラグインの有効化と、編集可能なセットアップ
-   JavaScript のビルドとエンキューが可能なセットアップ

<!-- 
The [complete format-api example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/format-api-f14b86) is available that you can use as a reference for your setup.
 -->
セットアップのリファレンスとして、[完全な書式 API サンプル](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/format-api-f14b86) を参照してください。

## ステップバイステップガイド

このガイドでは、変更対象の JavaScript ファイルを `src/index.js` として参照します。各ステップの後で `npm run build` を実行すると `build/index.js` が作成され、投稿エディタ画面に読み込まれます。

<!-- 
### Step 1: Register a new format
 -->
### ステップ 1: 新しい書式を登録する

<!-- 
The first step is to register the new format, add `src/index.js` with the following:
 -->
まず、新しい書式を登録するために、`src/index.js` に以下を追加します。

```js
import { registerFormatType } from '@wordpress/rich-text';

registerFormatType( 'my-custom-format/sample-output', {
	title: 'Sample output',
	tagName: 'samp',
	className: null,
} );
```

<!-- 
The list of available format types is maintained in the `core/rich-text` store. You can query the store to check that your custom format is now available.
 -->
利用可能な書式タイプの一覧は `core/rich-text` ストア内で管理されます。ストアを照会し、作成したカスタム書式が利用可能かどうかを確認できます。

<!-- 
Run this code in your browser's console to confirm:
 -->
ブラウザーのコンソールで以下を実行してください。

```js
wp.data.select( 'core/rich-text' ).getFormatTypes();
```

<!-- 
It'll return an array containing the format types, including your own.
 -->
作成したものを含む書式タイプの配列が返されます。

<!-- 
### Step 2: Add a button to the toolbar
 -->
### ステップ 2: ツールバーにボタンを追加する

<!-- 
With the format available, the next step is to add a button to the UI by registering a component for the edit property.
 -->
書式が利用可能になったところで、 UI にボタンを追加します。edit プロパティにコンポーネントを登録します。

<!-- 
Using the `RichTextToolbarButton` component, update `src/index.js`:
 -->
`RichTextToolbarButton` コンポーネントを使用して、`src/index.js` を更新してください。

```js
import { registerFormatType } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

const MyCustomButton = ( props ) => {
	return (
		<RichTextToolbarButton
			icon="editor-code"
			title="Sample output"
			onClick={ () => {
				console.log( 'toggle format' );
			} }
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
<!-- 
Let's check that everything is working as expected. Build and reload and then select any block containing text like for example the paragraph block. Confirm the new button was added to the format toolbar.
 -->
期待どおりに動作するかを確認します。ビルドし、リロードし、テキストを内部に含む任意のブロック、例えば段落ブロックを選択してください。書式ツールバーに新しいボタンが追加されていることを確認してください。
<!-- 
![Toolbar with custom button](https://developer.wordpress.org/files/2021/12/format-api-toolbar.png)
 -->
![ツールバーのカスタムボタン](https://developer.wordpress.org/files/2021/12/format-api-toolbar.png)

<!-- 
Click the button and check the console.log for the "toggle format" message.
 -->
ボタンをクリックし、console.log のメッセージ「toggle format」をチェックしてください。

<!-- 
If you do not see the button or message, double check you are building and loading the JavScript properly; and check the console.log for any errors.
 -->
ボタンやメッセージが見つからない場合、正しく JavaScript をビルドし、ロードしていることを再度確認してください。また console.log に他のエラーがないか確認してください。

<!-- 
### Step 3: Apply a format when clicked
 -->
### ステップ 3: クリックされたら書式を適用する

<!-- 
Next is to update the button to apply a format when clicked.
 -->
次にボタンを更新して、クリックされた時に書式を適用します。

<!-- 
For our example, the `<samp>` tag format is binary - either a text selection has the tag or not, so we can use the `toggleFormat` method from the RichText package.
 -->
この例で `<samp>` タグ書式は、選択したテキストがタグを持つか持たないかの2つの状態を取ります。そこで、RichText パッケージから `toggleFormat` メソッドを使用します。

<!-- 
Update `src/index.js` changing the `onClick` action:
 -->
`src/index.js` を更新し、`onClick` アクションを変更します。

```js
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

const MyCustomButton = ( { isActive, onChange, value } ) => {
	return (
		<RichTextToolbarButton
			icon="editor-code"
			title="Sample output"
			onClick={ () => {
				onChange(
					toggleFormat( value, {
						type: 'my-custom-format/sample-output',
					} )
				);
			} }
			isActive={ isActive }
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

<!-- 
Confirm it is working: first build and reload, then make a text selection and click the button. Your browser will likely display that selection differently than the surrounding text.
 -->
動作していることを確認します。まず、ビルドしてリロードし、次にテキスト選択をして、ボタンをクリックします。ブラウザは、周囲のテキストとは異なる方法で選択したテキストを表示するはずです。

<!-- 
You can also confirm by switching to HTML view (Code editor `Ctrl+Shift+Alt+M`) and see the text selection wrapped with `<samp>` HTML tags.
 -->
また、HTMLビュー（コードエディタで `Ctrl＋Shift＋Alt＋M`）に切り替えると、選択したテキストがHTMLタグ`<samp>`で囲まれていることを確認できます。

<!-- 
Use the `className` option when registering to add your own custom class to the tag. You can use that class and custom CSS to target that element and style as you wish.
 -->
登録の際に `className` オプションを使用すると、タグにカスタムクラスを追加できます。このクラスとカスタム CSS を使用して、要素に対して希望のスタイルを適用できます。

<!-- 
### Step 4: Show the button only for specific blocks (Optional)
 -->
### ステップ 4: 特定のブロックにのみボタンを表示する (オプション)

<!-- 
By default, the button is rendered on every rich text toolbar (image captions, buttons, paragraphs, etc). You can render the button only on blocks of a certain type by using `wp.data.withSelect` together with `wp.compose.ifCondition`.

By default, the button is rendered on every rich text toolbar (image captions, buttons, paragraphs, etc). You can render the button only on blocks of a certain type by using [the data API](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data).
 -->
デフォルトではボタンはすべてのリッチテキストツールバー、たとえば画像のキャプション、ボタン、段落等でレンダーされます。特定のタイプのブロックでのみボタンをレンダーできます。これには [data API](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data) を使用します。

<!-- 
Here is an example that only shows the button for Paragraph blocks:
 -->
次のサンプルコードは、「段落」ブロックでのみボタンを表示します。

```js
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

function ConditionalButton( { isActive, onChange, value } ) {
	const selectedBlock = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getSelectedBlock();
	}, [] );

	if ( selectedBlock && selectedBlock.name !== 'core/paragraph' ) {
		return null;
	}

	return (
		<RichTextToolbarButton
			icon="editor-code"
			title="Sample output"
			onClick={ () => {
				onChange(
					toggleFormat( value, {
						type: 'my-custom-format/sample-output',
					} )
				);
			} }
			isActive={ isActive }
		/>
	);
}

registerFormatType( 'my-custom-format/sample-output', {
	title: 'Sample output',
	tagName: 'samp',
	className: null,
	edit: ConditionalButton,
} );
```

<!-- 
### Step 5: Add a button outside of the dropdown (Optional)
 -->
### ステップ5: ドロップダウンの外側にボタンを追加する (オプション)

<!-- 
Using the `RichTextToolbarButton` component, the button is added to the default dropdown menu. You can add the button directly to the toolbar by using the `BlockControls` component.
 -->
`RichTextToolbarButton` コンポーネントを使用すると、ボタンはデフォルトではドロップダウンメニューに追加されます。`BlockControls` コンポーネントを使用すると、ボタンを直接ツールバーに追加できます。

```js
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

const MyCustomButton = ( { isActive, onChange, value } ) => {
	return (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon="editor-code"
					title="Sample output"
					onClick={ () => {
						onChange(
							toggleFormat( value, {
								type: 'my-custom-format/sample-output',
							} )
						);
					} }
					isActive={ isActive }
				/>
			</ToolbarGroup>
		</BlockControls>
	);
};

registerFormatType( 'my-custom-format/sample-output', {
	title: 'Sample output',
	tagName: 'samp',
	className: null,
	edit: MyCustomButton,
} );
```

<!-- 
## Troubleshooting
 -->
## トラブルシューティング

<!-- 
If you run into errors:
 -->
エラーが発生する場合は、

<!-- 
-   Double check that you run `npm run build` first.
-   Confirm no syntax errors or issues in build process.
-   Confirm the JavaScript is loading in the editor.
-   Check for any console error messages.
 -->
-   最初に `npm run build` を実行したか、ダブルチェックしてください。
-   ビルドプロセスで、構文エラーや問題が発生していないことを確認してください。
-   JavaScript がエディター内にロードしていることを確認してください。
-   コンソールにエラーメッセージが出ていないか確認してください。

<!-- 
## Additional resources
 -->
## その他の情報

<!-- 
Reference documentation used in this guide:
 -->
このガイドで使用した参考文書です。

<!-- 
-   RichText: [`registerFormatType`](/packages/rich-text/README.md#registerformattype)
-   Components: [`RichTextToolbarButton`](/packages/block-editor/src/components/rich-text#richtexttoolbarbutton)
-   RichText: [`applyFormat`](/packages/rich-text/README.md#applyformat)
-   RichText: [`removeFormat`](/packages/rich-text/README.md#removeformat)
-   RichText: [`toggleFormat`](/packages/rich-text/README.md#toggleformat)
 -->
-   RichText: [`registerFormatType`](https://github.com/WordPress/gutenberg/tree/trunk/packages/rich-text/README.md#registerformattype)
-   Components: [`RichTextToolbarButton`](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/rich-text#richtexttoolbarbutton)
-   RichText: [`applyFormat`](https://github.com/WordPress/gutenberg/tree/trunk/packages/rich-text/README.md#applyformat)
-   RichText: [`removeFormat`](https://github.com/WordPress/gutenberg/tree/trunk/packages/rich-text/README.md#removeformat)
-   RichText: [`toggleFormat`](https://github.com/WordPress/gutenberg/tree/trunk/packages/rich-text/README.md#toggleformat)

<!-- 
## Conclusion
 -->
## まとめ

<!-- 
The guide showed you how to add a button to the toolbar and have it apply a format to the selected text. Try it out and see what you can build with it in your next plugin.
 -->
このガイドでは、ツールバーにボタンを追加し、選択したテキストに書式を適用する方法を紹介しました。ぜひ試してみて、次にプラグインでどんなものが作れるか考えてみてください。

<!-- 
Download the [format-api example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/format-api-f14b86) from the [block-development-examples](https://github.com/WordPress/block-development-examples) repository.

 -->
[block-development-examples](https://github.com/WordPress/block-development-examples) リポジトリから、[書式 API サンプル](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/format-api-f14b86) をダウンロードしてください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/format-api.md)
