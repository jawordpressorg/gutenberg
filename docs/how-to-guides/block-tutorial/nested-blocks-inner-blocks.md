<!--
# Nested Blocks: Using InnerBlocks
 -->
# ネストしたブロック: InnerBlocks の使用

<!--
You can create a single block that nests other blocks using the [InnerBlocks](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-editor/src/components/inner-blocks/README.md) component. This is used in the Columns block, Social Links block, or any block you want to contain other blocks.

Note: A single block can only contain one `InnerBlocks` component.

Here is the basic InnerBlocks usage.
 -->
他のブロックをネストするブロックを作成するには [InnerBlocks](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-editor/src/components/inner-blocks/README.md) コンポーネントを使用します。このコンポーネントは「カラム (Columns、複数形)」ブロックや「ソーシャルリンク」ブロックなど、他のブロックを含むブロックで使用されています。

注意: 単一のブロックは、1つの `InnerBlocks` コンポーネントのみを含むことができます。

基本的な InnerBlocks の使用方法

```js
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-06', {
	// ...

	edit: () => {
		const blockProps = useBlockProps();

		return (
			<div { ...blockProps }>
				<InnerBlocks />
			</div>
		);
	},

	save: () => {
		const blockProps = useBlockProps.save();

		return (
			<div { ...blockProps }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
```

<!--
## Allowed blocks
 -->
## 許可されるブロック

<!--
Using the `allowedBlocks` property, you can define the set of blocks allowed in your InnerBlock. This restricts the blocks that can be included only to those listed, all other blocks will not show in the inserter.
 -->
`allowedBlocks` プロパティを使用すると、InnerBlock 内で許可されるブロックの集合を定義できます。インサーターに含まれるブロックはリストされたブロックのみに制限され、その他のすべてのブロックは表示されません。

```js
const ALLOWED_BLOCKS = [ 'core/image', 'core/paragraph' ];
//...
<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />;
```

<!--
## Orientation

By default, `InnerBlocks` expects its blocks to be shown in a vertical list. A valid use-case is to style inner blocks to appear horizontally, for instance by adding CSS flex or grid properties to the inner blocks wrapper. When blocks are styled in such a way, the `orientation` prop can be set to indicate that a horizontal layout is being used:
-->
## orientation

デフォルトでは、`InnerBlocks` は、縦のリストとしてブロックが表示されることを期待しています。また、内部ブロックのラッパーに CSS flex や grid プロパティを追加して、横に並べて表示するようスタイリングすることもできます。ブロックを横に並べる場合は、horizontal レイアウトが使用されることを示すために `orientation` プロパティを使用してください。

```js
<InnerBlocks orientation="horizontal" />
```
<!--
Specifying this prop does not affect the layout of the inner blocks, but results in the block mover icons in the child blocks being displayed horizontally, and also ensures that drag and drop works correctly.
-->
このプロパティを指定しても、内側のブロックのレイアウトには影響しませんが、子ブロックのブロック移動アイコンが水平に表示され、また、ドラッグアンドドロップが正しく動作するようになります。

<!-- 
## Default block
 -->
## デフォルトブロック

<!-- 
By default `InnerBlocks` opens a list of permitted blocks via `allowedBlocks` when the block appender is clicked. You can modify the default block and its attributes that are inserted when the initial block appender is clicked by using the `defaultBlock` property. For example:
 -->
デフォルトでは `InnerBlocks` はブロックアペンダがクリックされると `allowedBlocks` によって許可された、ブロックのリストを開きます。`defaultBlock` プロパティを使用すると、最初のブロックアペンダがクリックされたときに挿入されるデフォルトのブロックとその属性を変更できます。例えば

```js
<InnerBlocks defaultBlock={['core/paragraph', {placeholder: "Lorem ipsum..."}]} directInsert />
```

<!-- 
By default this behavior is disabled until the `directInsert` prop is set to `true`. This allows you to specify conditions for when the default block should or should not be inserted.
 -->
デフォルトでこの動作は `directInsert` プロップが `true` に設定されるまで無効です。これにより、デフォルトのブロックを挿入すべきかそうでないかの条件を指定できます。

<!--
## Template

Use the template property to define a set of blocks that prefill the InnerBlocks component when inserted. You can set attributes on the blocks to define their use. The example below shows a book review template using InnerBlocks component and setting placeholders values to show the block usage.
 -->
## テンプレート

template プロパティを使用して、InnerBlocks コンポーネントが挿入された際にデフォルトで含まれるブロックの集合を定義できます。ブロックの属性を設定して使用例を定義できます。次の例は InnerBlocks コンポーネントを使用した本のレビューのテンプレートです。placeholder 値を設定してブロックの使用例を示しています。

```js
const MY_TEMPLATE = [
	[ 'core/image', {} ],
	[ 'core/heading', { placeholder: 'Book Title' } ],
	[ 'core/paragraph', { placeholder: 'Summary' } ],
];

//...

	edit: () => {
		return (
			<InnerBlocks
				template={ MY_TEMPLATE }
				templateLock="all"
			/>
		);
	},
```

<!--
Use the `templateLock` property to lock down the template. Using `all` locks the template completely so no changes can be made. Using `insert` prevents additional blocks from being inserted, but existing blocks can be reordered. See [templateLock documentation](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-editor/src/components/inner-blocks/README.md#templatelock) for additional information.
 -->
`templateLock` プロパティを使用するとテンプレートをロックできます。テンプレートを完全にロックするには `all` を使用します。`insert` は追加ブロックのインサートを禁止しますが、既存のブロックは並べ替えられます。詳細については [templateLock のドキュメント](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-editor/src/components/inner-blocks/README.md#templatelock)を参照してください。

<!--
### Post template

Unrelated to `InnerBlocks` but worth mentioning here, you can create a [post template](https://developer.wordpress.org/block-editor/developers/block-api/block-templates/) by post type, that preloads the block editor with a set of blocks.

The `InnerBlocks` template is for the component in the single block that you created, the rest of the post can include any blocks the user likes. Using a post template, can lock the entire post to just the template you define.
 -->
### 投稿テンプレート

`InnerBlocks` とは関連しませんが、投稿タイプごとに[投稿テンプレート](https://developer.wordpress.org/block-editor/developers/block-api/block-templates/)を作れます。投稿テンプレートはブロックエディターにブロックの集合をプリロードします。

`InnerBlocks` テンプレートは、作成した単一ブロック内のコンポーネントのためのもので、投稿のそれ以外の箇所にはユーザーが好きなブロックを含められます。投稿テンプレートを使用すると、投稿全体を定義したテンプレートのみに固定できます。

```php
add_action( 'init', function() {
	$post_type_object = get_post_type_object( 'post' );
	$post_type_object->template = array(
		array( 'core/image' ),
		array( 'core/heading' )
	);
} );
```

<!--
## Using parent and ancestor relationships in blocks
 -->
## ブロックでの parent 関係と ancestor 関係の使用

<!-- 
A common pattern for using InnerBlocks is to create a custom block that will be only be available if its parent block is inserted. This allows builders to establish a relationship between blocks, while limiting a nested block's discoverability. Currently, there are two relationships builders can use: `parent` and `ancestor`. The differences are:
 -->
一般的な InnerBlock の使用パターンとして、親ブロックが挿入された場合にのみ使用可能なカスタムブロックの作成があります。これによりビルダーは、ブロック間の関係を確立し、ネストするブロックの発現を制限できます。現在、ビルダーが使用できる関係には `parent` (親) と `ancestor` (先祖) の2つがあります。違いは以下のとおりです。 

<!-- 
- If you assign a `parent` then you’re stating that the nested block can only be used and inserted as a __direct descendant of the parent__.
- If you assign an `ancestor` then you’re stating that the nested block can only be used and inserted as a __descendent of the parent__.
 -->
- `parent` を割り当てると、ネストするブロックが __親の直接の子孫__ としてのみ使用、挿入できることの表明になります。
- `ancestor` を割り当てると、ネストするブロックが __親の子孫__ としてのみ使用、挿入できることの表明になります。

<!-- 
The key difference between `parent` and `ancestor` is `parent` has finer specificity, while an `ancestor` has greater flexibility in its nested hierarchy.
 -->
`parent` と `ancestor` の主な違いとして、`parent` はより細かな特異性を持ち、`ancestor`はそのネスト階層においてより大きな柔軟性を持ちます。

<!-- 
### Defining parent block relationship
 -->
### parent ブロック関係の定義

<!-- 
An example of this is the Column block, which is assigned the `parent` block setting. This allows the Column block to only be available as a nested direct descendant in its parent Columns block. Otherwise, the Column block will not be available as an option within the block inserter. See [Column code for reference](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-library/src/column).
 -->
この例に「カラム (Column)」ブロックがあり、`parent` ブロック設定が割り当てられています。これにより、Column ブロックは、親の「カラム (Columns、複数形)」ブロックのネストした直接の子孫としてのみ利用できます。Columns ブロック以外では、Column ブロックはブロックインサーターのオプションとして利用できません。[Column ブロックのコード](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-library/src/column)を参照してください。

<!-- 
When defining a direct descendent block, use the `parent` block setting to define which block is the parent. This prevents the nested block from showing in the inserter outside of the InnerBlock it is defined for.
 -->
直接の子孫ブロックを定義する際には、`parent` ブロック設定を使用して、どのブロックが親であるかを定義します。これでネストするブロックは、定義された InnerBlock 以外でインサーター内には表示されません。

```json
{
	"title": "Column",
	"name": "core/column",
	"parent": [ "core/columns" ],
	// ...
}
```

<!-- 
### Defining an ancestor block relationship
 -->
### ancestor ブロック関係の定義

<!-- 
An example of this is the Comment Author Name block, which is assigned the `ancestor` block setting. This allows the Comment Author Name block to only be available as a nested descendant in its ancestral Comment Template block. Otherwise, the Comment Author Name block will not be available as an option within the block inserter. See [Comment Author Name code for reference](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-library/src/comment-author-name).
 -->
この例に「コメントの投稿者名」ブロックがあり、`ancestor` ブロック設定が割り当てられています。これにより、コメントの投稿者名ブロックは、その祖先であるコメントテンプレートブロックのネストされた子孫としてのみ利用できます。コメントテンプレートブロック以外では、コメントの投稿者名ブロックはブロックインサータのオプションとして利用できません。[コメントの投稿者名ブロックのコード](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-library/src/comment-author-name)を参照してください。

<!-- 
The `ancestor` relationship allows the Comment Author Name block to be anywhere in the hierarchical tree, and not _just_ a direct child of the parent Comment Template block, while still limiting its availability within the block inserter to only be visible an an option to insert if the Comment Template block is available.
 -->
`ancestor` 関係により、コメントの投稿者名ブロックは階層ツリーのどこにでも置けます。親のコメントテンプレートブロックの直接の子のみには縛られません。ただしコメントテンプレートブロックがある場合にのみ、ブロックインサーター内で挿入可能なオプションとして表示されます。

<!-- 
When defining a descendent block, use the `ancestor` block setting. This prevents the nested block from showing in the inserter outside of the InnerBlock it is defined for.
 -->
子孫ブロックを定義する際には、`ancestor` ブロック設定を使用します。これでネストするブロックは、定義された InnerBlock 以外でインサーター内には表示されません。

```json
{
	"title": "Comment Author Name",
	"name": "core/comment-author-name",
	"ancestor": [ "core/comment-template" ],
	// ...
}
```

<!-- 
## Using a React hook
 -->
## React フックの使用

<!-- 
You can use a react hook called `useInnerBlocksProps` instead of the `InnerBlocks` component. This hook allows you to take more control over the markup of inner blocks areas.

The `useInnerBlocksProps` is exported from the `@wordpress/block-editor` package same as the `InnerBlocks` component itself and supports everything the component does. It also works like the `useBlockProps` hook.

Here is the basic `useInnerBlocksProps` hook usage.
 -->
react フック `useInnerBlocksProps` を、`InnerBlocks` コンポーネントの代わりに使用できます。このフックを使用すると、インナーブロック領域のマークアップをより詳細に制御できます。

`useInnerBlocksProps` は `InnerBlocks` コンポーネント自身と同様に `@wordpress/block-editor` パッケージからエクスポートされ、`InnerBlocks` コンポーネントのすべてをサポートします。また、`useInnerBlocksProps` は `useBlockProps` フックと同様に機能します。

基本的な `useInnerBlocksProps` フックの使用方法です。

```js
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-06', {
	// ...

	edit: () => {
		const blockProps = useBlockProps();
		const innerBlocksProps = useInnerBlocksProps();

		return (
			<div { ...blockProps }>
				<div {...innerBlocksProps} />
			</div>
		);
	},

	save: () => {
		const blockProps = useBlockProps.save();
		const innerBlocksProps = useInnerBlocksProps.save();

		return (
			<div { ...blockProps }>
				<div {...innerBlocksProps} />
			</div>
		);
	},
} );
```

<!--
This hook can also pass objects returned from the `useBlockProps` hook to the `useInnerBlocksProps` hook. This reduces the number of elements we need to create.
 -->
また、`useBlockProps` から返されたオブジェクトを `useInnerBlocksProps` フックに渡せます。この手法により作成する要素の数を減らせます。

```js
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-06', {
	// ...

	edit: () => {
		const blockProps = useBlockProps();
		const innerBlocksProps = useInnerBlocksProps( blockProps );

		return (
			<div {...innerBlocksProps} />
		);
	},

	save: () => {
		const blockProps = useBlockProps.save();
		const innerBlocksProps = useInnerBlocksProps.save( blockProps );

		return (
			<div {...innerBlocksProps} />
		);
	},
} );
```

<!--
The above code will render to the following markup in the editor:
 -->
上のコードはエディター内で次のマークアップをレンダーします。

```html
<div>
	<!-- Inner Blocks get inserted here -->
</div>
```

<!-- 
Another benefit to using the hook approach is using the returned value, which is just an object, and deconstruct to get the react children from the object. This property contains the actual child inner blocks thus we can place elements on the same level as our inner blocks.
 -->
フックによるアプローチを使用するもう一つの利点は、単なるオブジェクトである戻り値を分解して、react `children` を取得できる点です。このプロパティには実際の子のインナーブロックが含まれているため、インナーブロックと同じレベルに要素を配置できます。

```js
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-06', {
	// ...

	edit: () => {
		const blockProps = useBlockProps();
		const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps );

		return (
			<div {...innerBlocksProps}>
    			{ children }
				<!-- Insert any arbitrary html here at the same level as the children -->
			</div>
		);
	},

	// ...
} );
```

```html
<div>
	<!-- Inner Blocks get inserted here -->
	<!-- The custom html gets rendered on the same level -->
</div>
```

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/block-tutorial/nested-blocks-inner-blocks.md)
