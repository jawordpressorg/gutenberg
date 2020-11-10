<!-- 
# Annotations
 -->
# アノテーション

<!-- 
**Note: This API is experimental, that means it is subject to non-backward compatible changes or removal in any future version.**
 -->
**注意: アノテーション API は実験中の機能です。将来のバージョンで後方互換性のない形で変更されたり削除される可能性があります。**

<!-- 
Annotations are a way to highlight a specific piece in a post created with the block editor. Examples of this include commenting on a piece of text and spellchecking. Both can use the annotations API to mark a piece of text.
 -->
アノテーションはブロックエディターで作成された投稿の特定箇所を強調表示する方法です。アノテーションの例としては選択したテキストのコメントやスペルチェックがあります。どちらもアノテーション API を使用して選択したテキストをマークできます。

## API
<!-- 
To see the API for yourself the easiest way is to have a block that is at least 200 characters long without formatting and putting the following in the console:
 -->
API を簡単に確認するには、ブロックエディターで書式を含めずに200文字入力し、コンソールに次のコードを貼り付けてください。

```js
wp.data.dispatch( 'core/annotations' ).addAnnotation( {
	source: "my-annotations-plugin",
	blockClientId: wp.data.select( 'core/editor' ).getBlockOrder()[0],
	richTextIdentifier: "content",
	range: {
		start: 50,
		end: 100,
	},
} );
```
<!-- 
The start and the end of the range should be calculated based only on the text of the relevant `RichText`. For example, in the following HTML position 0 will refer to the position before the capital S:
 -->
領域 (range) の始まりと終わりは関連する `RichText` のテキストのみに基づいて算出されます。たとえば次の HTML では 位置「0」は大文字の「S」の前の位置を参照します。

```html
<strong>Strong text</strong>
```
<!-- 
To help with determining the correct positions, the `wp.richText.create` method can be used. This will split a piece of HTML into text and formats.

All available properties can be found in the API documentation of the `addAnnotation` action.
 -->
正しい位置の決定には `wp.richText.create` メソッドを使用できます。このメソッドは HTML のコードをテキストと書式に分けます。 

すべての利用可能なプロパティは `addAnnotation` アクションの API ドキュメントを参照してください。

<!-- 
The property `richTextIdentifier` is the identifier of the RichText instance the annotation applies to. This is necessary because blocks may have multiple rich text instances that are used to manage data for different attributes, so you need to pass this in order to highlight text within the correct one.
 -->
プロパティ `richTextIdentifier` はアノテーションを適用する RichText インスタンスの識別子です。ブロックは異なる属性のデータ管理のため複数の RichText インスタンスを持つ可能性があります。このとき正しいテキストを強調表示するには識別子を渡す必要があります。

<!-- 
For example the Paragraph block only has a single RichText instance, with the identifier `content`. The quote block type has 2 RichText instances, so if you wish to highlight text in the citation, you need to pass `citation` as the `richTextIdentifier` when adding an annotation. To target the quote content, you need to use the identifier `value`. Refer to the source code of the block type to find the correct identifier.
 -->
たとえば「段落」ブロックにはただ1つの RichText インスタンス `content` しかありません。一方、「引用」ブロックタイプには2つの RichText インスタンスがあり、引用のリード文を強調表示したければアノテーションを追加する際、`richTextIdentifier` に `citation` を渡す必要があります。引用内容の本文を強調表示するには識別子 `value` を使用する必要があります。正しい識別子を見つけるにはブロックタイプのソースコードを参照してください。

<!-- 
## Block annotation
 -->
## ブロックアノテーション

<!-- 
It is also possible to annotate a block completely. In that case just provide the `selector` property and set it to `block`. The default `selector` is `range`, which can be used for text annotation.
 -->
ブロック全体にアノテーションをつけることも可能です。この場合 `selector` プロパティに `block` を設定します。`selector` のデフォルトはテキストアノテーションで使用される `range` です。

```js
wp.data.dispatch( 'core/annotations' ).addAnnotation( {
	source: "my-annotations-plugin",
	blockClientId: wp.data.select( 'core/editor' ).getBlockOrder()[0],
	selector: "block",
} );
```
<!-- 
This doesn't provide any styling out of the box, so you have to provide some CSS to make sure your annotation is shown:
 -->
ボックスへのスタイルがありませんので、アノテーションが見えるように CSS を提供する必要があります。

```css
.is-annotated-by-my-annotations-plugin {
	outline: 1px solid black;
}
```
<!-- 
## Text annotation
 -->
## テキストアノテーション

<!-- 
The text annotation is controlled by the `start` and `end` properties. Simple `start` and `end` properties don't work for HTML, so these properties are assumed to be offsets within the `rich-text` internal structure. For simplicity you can think about this as if all HTML would be stripped out and then you calculate the `start` and the `end` of the annotation.
 -->
テキストアノテーションは `start` プロパティと `end` プロパティで制御されます。単純に求めた `start` と `end` では HTML で正しく動作しません。`rich-text` 内部構造内のオフセットを想定しているためです。便宜上、すべての HTML タグが削除されたと仮定してアノテーションの`start` と `end` を算出すると良いでしょう。

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/block-api/block-annotations.md)