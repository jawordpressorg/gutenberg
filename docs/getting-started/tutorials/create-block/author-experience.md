<!-- 
# Authoring Experience
 -->
# 執筆エクスペリエンス
<!-- 
## Background
 -->
## 背景
<!-- 
One of the primary tenets of Gutenberg as a WYSIWYG editor is that what you see in the editor should be as close as possible to what you get when published. Keep this in mind when building blocks.
 -->
WYSIWYG エディターとしての Gutenberg の基本理念の1つに「編集時の見た目をできる限り公開時の見た目に近づけること」があります。ブロックを作成する場合もこの理念を念頭に置いてください。

<!-- 
## Placeholder
 -->
## プレースホルダー
<!-- 
The state when a block has been inserted, but no data has been entered yet, is called a placeholder. There is a `Placeholder` component built that gives us a standard look. You can see example placeholders in use with the image and embed blocks.

To use the Placeholder, wrap the `<TextControl>` component so it becomes a child element of the `<Placeholder>` component. Try it out in your code. After updating, you might have something like:
 -->
ブロックが挿入され、まだデータが入力されていない状態を「プレースホルダー」と呼びます。組み込みの `Placeholder` コンポーネントは標準的な見た目を提供します。プレースホルダーの例は画像ブロックや埋め込みブロックで見られます。

プレースホルダーを使用するには `<Placeholder>` コンポーネントの子要素となるように `<TextControl>` コンポーネントをラップします。自分のコードでも試してみてください。更新後は次のようになるはずです。

```jsx
import { Placeholder, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, className, setAttributes } ) {
	return (
		<div className={ className }>
			<Placeholder
				label="Gutenpride Block"
				instructions="Add your message"
			>
				<TextControl
					value={ attributes.message }
					onChange={ ( val ) => setAttributes( { message: val } ) }
				/>
			</Placeholder>
		</div>
	);
}
```
<!-- 
## isSelected Ternary Function
 -->
## isSelected 三項演算子
<!-- 
The placeholder looks ok, for a simple text message it may or may not be what you are looking for. However, the placeholder can be useful if you are replacing the block after what is typed in, similar to the embed blocks.

For this we can use a ternary function, to display content based on a value being set or not. A ternary function is an inline if-else statement, using the syntax:
 -->

単純なテキストメッセージであればプレースホルダーで良さそうに見えますが、期待したとおりではないかもしれません。しかし、埋め込みブロックのように入力した瞬間にブロックを置き換えるのであればプレースホルダーは有用です。

三項演算子を使用すると、値のあるなしで表示するコンテンツを変えることができます。三項演算子は次のような構文のインライン if-else 文です。

```js
clause ? doIfTrue : doIfFalse;
```
<!-- 
This can be used inside a block to control what shows when a parameter is set or not. A simple case that displays a `message` if set, otherwise show the form element:
 -->
この構文をブロック内で使用してパラメータのあるなしで何を表示するか制御できます。単純なコードでは `message` がセットされていればそれを、セットされていなければフォーム要素を表示できます。

```jsx
	return (
		<div>
			{ attributes.message ?
				<div>Message: { attributes.message }</div> :
				<div>
					<p>No Message.</p>
					<TextControl
						value={ attributes.message }
						onChange={ ( val ) => setAttributes( { message: val } ) }
					/>
				</div>
			}
		</div>
	);
```
<!-- 
There is a problem with the above, if we only use the `attributes.message` check, as soon as we type in the text field it would disappear since the message would then be set to a value. So we need to pair with an additional `isSelected` parameter.

The `isSelected` parameter is passed in to the `edit` function and is set to true if the block is selected in the editor (currently editing) otherwise set to false (editing elsewhere).

Using that parameter, we can use the logic:
 -->
しかし上のコードには問題があります。`attributes.message` だけをチェックしているためテキストフィールドに何か一文字でも入力した瞬間メッセージが値にセットされ、テキストフィールドが消えてしまいます。追加の `isSelected` パラメータとペアにする必要があります。

`isSelected` パラメーターは `edit` 関数に渡され、エディター内でブロックが選択され編集中の場合 true にセットされます。それ以外の部分を編集中の場合は false にセットされます。

このパラメータで次のようなロジックを使うことができます。

```js
attributes.message && ! isSelected;
```
<!-- 
If the message is set and `!isSelected`, meaning we are not editing the block, the focus is elsewhere, then display the message not the text field.

All so this combined together here's what the edit function looks like this:
 -->
メッセージがあり、かつ `! isSelected` の場合、すなわちブロックは編集中でなくフォーカスはどこかブロックの外にある場合、テキストフィールドでなくメッセージが表示されます。

まとめると edit 関数は次のようになります。

```jsx
import { Placeholder, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit( {
	attributes,
	className,
	isSelected,
	setAttributes,
} ) {
	return (
		<div className={ className }>
			{ attributes.message && ! isSelected ? (
				<div>{ attributes.message }</div>
			) : (
				<Placeholder
					label="Gutenpride Block"
					instructions="Add your message"
				>
					<TextControl
						value={ attributes.message }
						onChange={ ( val ) =>
							setAttributes( { message: val } )
						}
					/>
				</Placeholder>
			) }
		</div>
	);
}
```
<!-- 
With that in place, rebuild and reload and when you are not editing the message is displayed as it would be for the view, when you click into the block you see the text field.
 -->
すべての変更を保存しリビルド、リロードすると、編集していない場合にはメッセージが表示され、ブロック內部をクリックするとテキストフィールドが表示されます。

<!-- 
## A Better Solution
 -->
## もっと良いソリューション
<!-- 
The switching between a Placeholder and input control works well with a visual element like an image or video, but for the text example in this block we can do better.

The simpler and better solution is to modify the `editor.css` to include the proper stylized text while typing.

Update `editor.css` to:
 -->
プレースホルダーと入力コントロールとの間の切り替えは、画像やビデオのようなビジュアルな要素で動作しますが、ブロック内のテキストの例ではもっとうまく実装できます。

よりシンプルで上手いソリューションでは `editor.css` を編集して、入力中に適切にスタイリングされたテキストを含めることができます。

`editor.css` を以下のように更新します。

```css
.wp-block-create-block-gutenpride input[type='text'] {
	font-family: Gilbert;
	font-size: 64px;
}
```
<!-- 
The edit function can simply be:
 -->
edit 関数は以下のようにシンプルになります。

```jsx
import { TextControl } from '@wordpress/components';

export default function Edit( { attributes, className, setAttributes } ) {
	return (
		<TextControl
			className={ className }
			value={ attributes.message }
			onChange={ ( val ) => setAttributes( { message: val } ) }
		/>
	);
}
```
<!-- 
Next Section: [Finishing Touches](/docs/getting-started/tutorials/create-block/finishing.md)
 -->
次のセクション: [最後の仕上げ](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/finishing/)

[原文](https://github.com/WordPress/gutenberg/blob/HEAD/docs/getting-started/tutorials/create-block/author-experience.md)
