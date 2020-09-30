<!-- 
# Block Context
 -->
# ブロックコンテキスト

<!-- 
Block context is a feature which enables ancestor blocks to provide values which can be consumed by descendent blocks within its own hierarchy. Those descendent blocks can inherit these values without resorting to hard-coded values and without an explicit awareness of the block which provides those values.
 -->
ブロックは「ブロックコンテキスト」を使用して、継承先のブロックでも消費可能な値を提供できます。子や孫のブロックは、ハードコードされた値に依存せず、また明示的に提供元のブロックを知ることなく値を継承できます。

<!-- 
This is especially useful in full-site editing where, for example, the contents of a block may depend on the context of the post in which it is displayed. A blogroll template may show excerpts of many different posts. Using block context, there can still be one single "Post Excerpt" block which displays the contents of the post based on an inherited post ID.
 -->
この機能は特に「フルサイト編集」で有用です。たとえば表示される投稿の種類によってブロックの内容を変える場合があります。ブログ用のテンプレートであれば多くの異なる投稿の抜粋を表示します。ブロックコンテキストを使用すると、単一の「投稿抜粋」ブロックで、継承した投稿 ID を基に投稿のコンテンツを表示できます。

<!-- 
If you are familiar with [React Context](https://reactjs.org/docs/context.html), block context adopts many of the same ideas. In fact, the client-side block editor implementation of block context is a very simple application of React Context. Block context is also supported in server-side `render_callback` implementations, demonstrated in the examples below.
 -->
[React コンテキスト](https://reactjs.org/docs/context.html) を知っていれば、ブロックコンテキストは多くで同じアイデアを採用しています。実際、ブロックコンテキストのクライアント側ブロックエディターの実装は非常に簡単な React コンテキストのアプリケーションです。ブロックコンテキストは以下の例で見るようにサーバー側 `render_callback` 実装でもサポートされています。

<!-- 
## Defining Block Context
 -->
## ブロックコンテキストの定義

<!-- 
Block context is defined in the registered settings of a block. A block can provide a context value, or consume a value it seeks to inherit.
 -->
ブロックコンテキストはブロックの登録設定内で定義されます。ブロックはコンテキスト値を提供したり継承した値を消費することができます。

<!-- 
### Providing Block Context
 -->
### ブロックコンテキストの提供

<!-- 
A block can provide a context value by assigning a `providesContext` property in its registered settings. This is an object which maps a context name to one of the block's own attribute. The value corresponding to that attribute value is made available to descendent blocks and can be referenced by the same context name. Currently, block context only supports values derived from the block's own attributes. This could be enhanced in the future to support additional sources of context values.
 -->
コンテキスト値を提供するには、登録設定の中で `providesContext` プロパティに割り当てます。`providesContext` プロパティはコンテキスト名をブロック自身の属性のどれか1つとマップするオブジェクトです。属性値に関連付けられた値は子孫のブロックで利用でき、同じコンテキスト名で参照できます。現行ではブロックコンテキストはブロック自身の属性から派生した値のみをサポートしますが、将来的には拡張されコンテキスト値の追加ソースをサポートする予定です。

```js
	attributes: {
		recordId: {
			type: 'number',
		},
	},

	providesContext: {
		'my-plugin/recordId': 'recordId',
	},
```
<!-- 
For complete example, refer below section.

As seen in the above example, it is recommended that you include a namespace as part of the name of the context key so as to avoid potential conflicts with other plugins or default context values provided by WordPress. The context namespace should be specific to your plugin, and in most cases can be the same as used in the name of the block itself.
 -->
完全なサンプルコードは以下のセクションを参照してください。

上の例で見るようにコンテキストキーには名前空間を含めることが推奨されます。他のプラグインや WordPress で提供されるデフォルトのコンテキスト値との潜在的な衝突を防ぎます。コンテキストの名前空間は、プラグイン固有にしてください。多くの場合、ブロックの名前と同じものが使用されます。

<!-- 
### Consuming Block Context
 -->
### Block コンテキストの消費

<!-- 
A block can inherit a context value from an ancestor provider by assigning a `usesContext` property in its registered settings. This should be assigned as an array of the context names the block seeks to inherit.
 -->
ブロックは、登録設定の中で `usesContext` プロパティを割り当てることで先祖のプロバイダーからコンテキスト値を継承します。このときプロパティには、ブロックが継承するコンテキスト名の配列を割り当てる必要があります。

```js
registerBlockType('my-plugin/record-title', {
	title: 'Record Title',
	category: 'widgets',

	usesContext: ['my-plugin/recordId'],

```
<!-- 
## Using Block Context
 -->
## Block コンテキストの使用
<!-- 
Once a block has defined the context it seeks to inherit, this can be accessed in the implementation of `edit` (JavaScript) and `render_callback` (PHP). It is provided as an object (JavaScript) or associative array (PHP) of the context values which have been defined for the block. Note that a context value will only be made available if the block explicitly defines a desire to inherit that value.
 -->
ブロックが継承するコンテキストを定義すると、`edit` (JavaScript) や `render_callback` (PHP) の実装の中でアクセスできます。コンテキストは、ブロックで定義されたコンテキスト値のオブジェクト (JavaScript) または連想配列 (PHP) として提供されます。注意: コンテキスト値は、ブロックが値の継承の意志を明示的に定義した場合にのみ利用可能です。
<!-- 
Note: Block Context is not available to `save`.
 -->
注意: ブロックコンテキストは `save` で利用できません。

### JavaScript

```js
registerBlockType('my-plugin/record-title', {

	edit({ context }) {
		return 'The record ID: ' + context['my-plugin/recordId'];
	},

```

### PHP
<!-- 
A block's context values are available from the `context` property of the `$block` argument passed as the third argument to the `render_callback` function.
 -->
ブロックのコンテキスト値は、`render_callback` 関数の第3引数として渡される `$block` 引数の `content` プロパティから利用可能です。

```php
register_block_type( 'my-plugin/record-title', array(
	'render_callback' => function( $attributes, $content, $block ) {
		return 'The current record ID is: ' . $block->context['my-plugin/recordId'];
	},
) );
```
<!-- 
## Example
1. Create `record` block.
 -->
## 例
1. `record` ブロックを作成します。
```
npm init @wordpress/block --namespace my-plugin record
cd record
```
<!-- 
2. Edit `src/index.js`. Insert `recordId` attribute and `providesContext` property in `registerBlockType` function and add registration of `record-title` block at the bottom. 
 -->
2. `src/index.js` を編集します。`recordId` 属性と `providesContext` プロパティを `registerBlockType` 関数内に挿入し、末尾に `record-title` ブロックの登録を追加します。 

```js
registerBlockType('my-plugin/record', {

	// ... cut ...

	attributes: {
		recordId: {
			type: 'number',
		},
	},

	providesContext: {
		'my-plugin/recordId': 'recordId',
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});

registerBlockType('my-plugin/record-title', {
	title: 'Record Title',
	category: 'widgets',

	usesContext: ['my-plugin/recordId'],

	edit({ context }) {
		return 'The record ID: ' + context['my-plugin/recordId'];
	},

	save() {
		return null;
	}
});
```
<!-- 
3. Edit `src/edit.js`. Replace `Edit` function by following code. 
 -->
3. `src/edit.js` を編集します。`Edit` 関数を以下のコードで置き換えます。 

```js
import { TextControl } from '@wordpress/components';
import { InnerBlocks } from '@wordpress/block-editor';

export default function Edit(props) {
	const MY_TEMPLATE = [
		['my-plugin/record-title', {}],
	];
	const { attributes: { recordId }, setAttributes } = props;
	return (
		<div>
			<TextControl
				label={__('Record ID:')}
				value={recordId}
				onChange={(val) => setAttributes({ recordId: Number(val) })}
			/>
			<InnerBlocks
				template={MY_TEMPLATE}
				templateLock="all"
			/>
		</div>
	);
}
```
<!-- 
4. Edit `src/save.js`. Replace `save` function by following code.
 -->
4. `src/save.js` を編集します。`save` 関数を以下のコードで置き換えます。
 
```js
export default function save(props) {
	return <p>The record ID: {props.attributes.recordId}</p>;
}
```
<!-- 
5. Create new post and add `record` block. If you type number in the above box, you'll see the same number is shown in below box.
 -->
5. 新しい投稿を作成し、`record` ブロックを追加します。上のテキストボックスに数を入力すると、同じ数が下のボックスに表示されます。

![Block Context Example](https://user-images.githubusercontent.com/8876600/93000215-c8570380-f561-11ea-9bd0-0b2bd0ca1752.png)

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/block-api/block-context.md)
