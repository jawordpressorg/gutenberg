<!-- 
# The block wrapper
 -->
# ブロックラッパー

<!-- 
Every block in the Block Editor is contained within an HTML wrapper, which must have specific attributes to function correctly both in the Editor and on the front end. As developers, we can directly manipulate this markup, and WordPress offers tools like `useBlockProps()` to modify the attributes added to a block's wrapper.
 -->
ブロックエディターのすべてのブロックは HTML ラッパーの中に含まれます。エディター内とフロントエンド上の両方で正しく機能するには、決められた属性を持つ必要があります。開発者として、私たちはこのマークアップを直接操作でき、WordPress の提供する `useBlockProps()` のようなツールを使用して、ブロックのラッパーに追加された属性を変更できます。

<!-- 
Ensuring proper attributes to the block wrapper is especially important when using custom styling or features like [block supports](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/).
 -->
ブロックラッパーに適切な属性を付けることは、カスタムスタイルや[ブロック supports](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/)のような機能を使用する場合に、特に重要です。

<!-- 
<div class="callout callout-info">
The use of <code>supports</code> generates a set of properties that need to be manually added to the wrapping element of the block so they're properly stored as part of the block data.
</div>
 -->
<!-- 
> `supports`を使用するとプロパティのセットが生成されます。ブロックデータの一部として適切に保存されるように、これらのプロパティを手動でブロックのラッパー要素に追加する必要があります。
 -->

<!-- 
A block in WordPress can be defined with three distinct types of markup, each serving a unique role:
 -->
WordPress のブロックは、3つの異なるタイプのマークアップで定義でき、それぞれがユニークな役割を果たします。


<!-- 
- The one for the **Block Editor**, defined through a `edit` React component passed to [`registerBlockType`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/#registerblocktype) when registering the block in the client.
- The one used to **save the block in the DB**, defined through a `save` function passed to `registerBlockType` when registering the block in the client.
    - This markup will be returned to the front end on request if no dynamic render has been defined for the block.
- The one used to **dynamically render the markup of the block** returned to the front end on request, defined through the `render_callback` on [`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) or the [`render`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#render) PHP file in `block.json`
    - If defined, this server-side generated markup will be returned to the front end, ignoring the markup stored in DB.
 -->
<!-- 
- **ブロックエディター**のため。クライアントでブロックを登録する際に [`registerBlockType`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/#registerBlockType-%E9%96%A2%E6%95%B0) に渡される `edit` React コンポーネントを通して定義されます。
- **データベース内にブロックを保存する**ため。クライアントでブロックを登録する際に `registerBlockType` に渡される `save` 関数を通して定義されます。
    - ブロックにダイナミックレンダーが定義されていなければ、リクエストに応じてこのマークアップがフロントエンドに返されます。
- **ブロックのマークアップを動的にレンダーする**ため。リクエストに応じてクライアントに返され、[`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) の `render_callback` または `block.json` 内の [`render`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Render) PHP ファイルで定義されます。
    - この定義があると、サーバー側で生成されたマークアップはフロントエンドに返されます。データベースに保存されたマークアップは無視されます。
 -->

<!-- 
- **Editor Markup:** This is the visual representation of the block within the Block Editor. It's defined using an `Edit` React component when the block is registered on the client side via [`registerBlockType`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/#registerblocktype).
 -->
- **エディターマークアップ:** このマークアップは、ブロックエディター内でのブロックの視覚的な表現です。ブロックが [`registerBlockType`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/#registerBlockType-%E9%96%A2%E6%95%B0) によってクライアントサイドで登録される際に、`Edit` React コンポーネントを使用して定義されます。

<!-- 
- **Save Markup:** This markup is what gets saved to the database when the block's content is saved. It's specified through a `save` function, also provided to `registerBlockType` during block registration. If the block doesn't utilize dynamic rendering, this saved markup is what will be displayed on the front end.
 -->
- **save マークアップ:** このマークアップは、ブロックのコンテンツが保存される際にデータベースに保存されます。これもブロックの登録時に `registerBlockType` で提供される `save` 関数経由で指定されます。ブロックがダイナミックレンダリングを利用しなければ、この保存されたマークアップがフロントエンドに表示されます。

<!-- 
- **Dynamic Render Markup:** When a block's content needs to be generated dynamically, this markup comes into play. It's defined server-side, either through a `render_callback` function in [`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) or a [`render.php`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#render) file specified in `block.json`. If present, this markup overrides any saved markup and is used for the block's front-end display.
 -->
- **ダイナミックレンダーマークアップ:** ブロックのコンテンツを動的に生成する場合、このマークアップが必要になります。サーバーサイドで定義され、[`register_block_type`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/#registerBlockType-%E9%96%A2%E6%95%B0) の `render_callback` 関数か、`block.json` で指定された [`render.php`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Render) ファイルで定義されます。存在すれば、このマークアップは保存されたマークアップを上書きし、ブロックのフロントエンドの表示に使用されます。

<!-- 
For the [`edit` React component and the `save` function](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/), the block wrapper element should be a native DOM element (like `<div>`) or a React component that forwards any additional props to native DOM elements. Using a `<Fragment>` or `<ServerSideRender>` component, for instance, would be invalid.
 -->
<!-- 
[`edit` React コンポーネントと `save` 関数](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/)においてブロックのラッパー要素は、ネイティブのDOM要素 (例: `<div>`) か、ネイティブの DOM 要素に追加の prop を転送する React コンポーネントでなければなりません。例えば、`<Fragment>` や `<ServerSideRender>` コンポーネントは使用できません。
 -->

<!-- 
For both the [`Edit` component and the `save` function](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/), it's important to use a wrapper element that's a standard DOM element (like a `<div>`) or a React component that passes all additional props to native DOM elements. Using React Fragments (`<Fragment>`) or the `<ServerSideRender>` component won't work for these wrappers.
 -->
[`Edit` コンポーネントと `save` 関数](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/)の両方において、ラッパー要素は、標準的な DOM 要素（例: `<div>`）、またはネイティブ DOM 要素にすべての追加 prop を渡す React コンポーネントでなければなりません。これらのラッパーに React フラグメント (`<Fragment>`) や `<ServerSideRender>` コンポーネントは使えません。

<!-- 
## The Edit component's markup
 -->
<!-- 
## Edit コンポーネントのマークアップ
 -->

<!-- 
## Editor markup
 -->
## エディターマークアップ

<!-- 
The [`useBlockProps()`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops) hook available on the [`@wordpress/block-editor`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor) allows passing the required attributes for the Block Editor to the `edit` block's outer wrapper.
 -->
<!-- 
[`useBlockProps()`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops) フックは [`@wordpress/block-editor`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor) で利用可能で、ブロックエディタに必要な属性を `edit` ブロックの外側のラッパーに渡せます。
 -->

<!-- 
The [`useBlockProps()`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops) hook, provided by the [`@wordpress/block-editor`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor) package, is used to define the outer markup of a block in the `Edit` component.
 -->
[`useBlockProps()`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops) フックは、[`@wordpress/block-editor`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor) パッケージで提供され、`Edit` コンポーネント内でのブロックの外側マークアップの定義に使用されます。

<!-- 
Among other things, the `useBlockProps()` hook takes care of including in this wrapper:

- An `id` for the block's markup
- Some accessibility and `data-` attributes
- Classes and inline styles reflecting custom settings, which include by default:
    - The `wp-block` class
    - A class that contains the name of the block with its namespace
 -->
<!-- 
特に、`useBlockProps()`フックは、このラッパーに以下が含まれるようにします。
- ブロックのマークアップのための `id`
- いくつかのアクセシビリティと `data-` 属性
- カスタム設定を反映したクラスとインラインスタイル。デフォルトで以下を含む
    - `wp-block` クラス 
    - ブロックの名前と名前空間を含むクラス
 -->
<!-- 
This hook simplifies several tasks, including:
 -->
このフックは、以下のようないくつかのタスクを単純化します。

<!-- 
- Assigning a unique `id` to the block's HTML structure.
- Adding various accessibility and `data-` attributes for enhanced functionality and information.
- Incorporating classes and inline styles that reflect the block's custom settings. By default, this includes:
    - The `wp-block` class for general block styling.
    - A block-specific class that combines the block's namespace and name, ensuring unique and targeted styling capabilities.
 -->
- ブロックの HTML 構造へのユニーク `id` の割り当て。
- 機能や情報を拡張するため、様々なアクセシビリティと `data-` 属性を追加。
- ブロックのカスタム設定を反映するクラスとインラインスタイルの組み込み。デフォルトでは、以下が含まれる。
    - 一般的なブロックスタイル用の `wp-block` クラス。
    - ブロック固有のクラス。ブロックの名前空間と名前を組み合わせ、ユニークで的を絞ったスタイル機能を確保する。

<!-- 
For example, for the following piece of code of a block's registration in the client...
 -->
<!-- 
例えばクライアント側に、ブロックを登録する以下のようなコードがあると ...
 -->
<!-- 
In the following example, the Editor markup of the block is defined in the `Edit` component using the `useBlockProps()` hook.
 -->
次の例では、`useBlockProps()`フックを使用して、`Edit`コンポーネントでブロックのエディターマークアップを定義します。

```js
const Edit = () => <p { ...useBlockProps() }>Hello World - Block Editor</p>;

registerBlockType( ..., {
	edit: Edit
} );
```

<!-- 
_See the [full block example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda) of the [code above](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/src/index.js)._

 -->
_([完全なブロックの例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda)の中の[上のコード](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/src/index.js)を参照してください)_

<!-- 
The markup of the block in the Block Editor could look like this, where the classes and attributes are applied automatically:
 -->
ブロックエディターでのブロックのマークアップは次のようになります。クラスと属性は自動的に適用されます。

```html
<p
    tabindex="0"
    id="block-4462939a-b918-44bb-9b7c-35a0db5ab8fe"
    role="document"
    aria-label="Block: Minimal Gutenberg Block ca6eda"
    data-block="4462939a-b918-44bb-9b7c-35a0db5ab8fe"
    data-type="block-development-examples/minimal-block-ca6eda"
    data-title="Minimal Gutenberg Block ca6eda"
    class="
        block-editor-block-list__block
        wp-block
        is-selected
        wp-block-block-development-examples-minimal-block-ca6eda
    "
>Hello World - Block Editor</p>
```

<!-- 
Any additional classes and attributes for the `Edit` component of the block should be passed as an argument of `useBlockProps` (see [example](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/stylesheets-79a4c3/src/edit.js)). When you add `supports` for any feature, they get added to the object returned by the `useBlockProps` hook.
 -->
<!--  
ブロックの `Edit` コンポーネントに追加するクラスや属性は、`useBlockProps` の引数として渡す必要があります ([例](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/stylesheets-79a4c3/src/edit.js) を参照)。どの機能に対しても `supports` を追加すると、それらは `useBlockProps` フックが返すオブジェクトに追加されます。
 -->
<!-- 
In a block's `Edit` component, use the `useBlockProps()` hook to include additional classes and attributes by passing them as arguments. (See [example](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/stylesheets-79a4c3/src/edit.js))
 -->

ブロックの `Edit` コンポーネントでは、 `useBlockProps()` フックを使用して、追加のクラスや属性を引数として渡します ([例](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/stylesheets-79a4c3/src/edit.js) を参照してください)。

<!-- 
When you enable features using the `supports` property, any corresponding classes or attributes are included in the object returned by `useBlockProps` automatically.
 -->
`supports` プロパティを使用して機能を有効化すると、対応するクラスや属性は自動的に `useBlockProps` が返すオブジェクトに含まれます。

<!-- 
## The Save component's markup
 -->
<!-- 
## Save コンポーネントのマークアップ
 -->
<!-- 
## Save markup
 -->
## save マークアップ

<!-- 
When saving the markup in the database, it’s important to add the props returned by `useBlockProps.save()` to the wrapper element of your block. `useBlockProps.save()` ensures that the block class name is rendered correctly in addition to any HTML attributes injected by the block supports API.
 -->
マークアップをデータベース内に保存する際には、必ず `useBlockProps.save()` が返す prop をブロックのラッパー要素に追加してください。`useBlockProps.save()` は、ブロッククラス名、そしてブロックの supports API によって注入された HTML 属性を正しくレンダーします。

<!-- 
For example, for the following piece of code of a block's registration in the client that defines the markup desired for the DB (and returned to the front end by default)...
 -->
<!-- 
例えば、クライアントでブロックを登録する以下のコード例では、データベースで必要とされる、またデフォルトでフロントエンドに返されるマークアップを定義していて ...
 -->

<!-- 
Consider the following code that registers a block in the client. Notice how it defines the markup that should be used when editing the block and when the block is saved in the database.
 -->
次のコードはクライアント内でブロックを登録します。ブロックを編集するときと、ブロックがデータベースに保存されるときに使用されるマークアップの定義方法に注意してください。

```js
const Edit = () => <p { ...useBlockProps() }>Hello World - Block Editor</p>;
const save = () => <p { ...useBlockProps.save() }>Hello World - Frontend</p>;

registerBlockType( ..., {
	edit: Edit,
	save,
} );
```
<!-- 
_See the [full block example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda) of the [code above](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/src/index.js)._
 -->
_([完全なブロックの例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda)の中の[上のコード](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/src/index.js)を参照してください)_

<!-- 
The markup of the block on the front end could look like this, where the class is applied automatically:
 -->
フロントエンド上でのブロックのマークアップは次のようになります。クラスは自動的に適用されます。

```html
<p class="wp-block-block-development-examples-minimal-block-ca6eda">Hello World – Frontend</p>
```

<!-- 
If you want to add any additional classes or attributes to the `save` function of the block, they should be passed as an argument of `useBlockProps.save()`. (See [example](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/stylesheets-79a4c3/src/save.js))
 -->
ブロックの `save` 関数にクラスや属性を追加したければ、`useBlockProps.save()` の引数として渡してください ([例](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/stylesheets-79a4c3/src/save.js)を参照てください)。

<!-- 
When you add `supports` for any feature, the proper classes get added to the object returned by the `useBlockProps.save()` hook.
 -->
<!-- 
任意の機能に `supports` を追加すると、`useBlockProps.save()` フックが返すオブジェクトに適切なクラスが追加されます。
 -->
<!-- 
When you add `supports` for any feature, the proper classes get added to the object returned by the `useBlockProps.save()` hook. Text and background color classes have been added to the Paragraph block in the example below.
 -->
任意の機能で `supports` を追加すると、`useBlockProps.save()` フックが返すオブジェクトに適切なクラスが追加されます。次の例では、テキストと背景色のクラスが段落ブロックに追加されています。

```html
<p class="
    wp-block-block-development-examples-block-supports-6aa4dd
    has-accent-4-color
    has-contrast-background-color
    has-text-color
    has-background
">Hello World</p>
```
<!-- 
_(check the [example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/block-supports-6aa4dd) that generated the HTML above in the front end)_
 -->
<!-- 
_フロントエンドで上の HTML を生成する[例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/block-supports-6aa4dd)をチェックをしてください）_
 -->
<!-- 
The [example block](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/block-supports-6aa4dd) that generated this HTML is available in the [Block Development Examples](https://github.com/WordPress/block-development-examples) repository.
 -->
この HTML を生成した [ブロックの例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/block-supports-6aa4dd) は、[Block Development Examples](https://github.com/WordPress/block-development-examples) リポジトリで参照できます。

<!-- 
## The server-side render markup
 -->
<!-- 
## サーバー側でのマークアップのレンダー
 -->
<!-- 
## Dynamic render markup
 -->
## ダイナミックレンダーマークアップ

<!-- 
Any markup in the server-side render definition for the block can use the [`get_block_wrapper_attributes()`](https://developer.wordpress.org/reference/functions/get_block_wrapper_attributes/) function to generate the string of attributes required to reflect the block settings (see [example](https://github.com/WordPress/block-development-examples/blob/f68640f42d993f0866d1879f67c73910285ca114/plugins/block-dynamic-rendering-64756b/src/render.php#L11)).
 -->
ブロックのサーバー側レンダー定義にあるマークアップは [`get_block_wrapper_attributes()`](https://developer.wordpress.org/reference/functions/get_block_wrapper_attributes/) 関数を使用して、ブロックの設定を反映するために必要な属性の文字列を生成できます。[例](https://github.com/WordPress/block-development-examples/blob/f68640f42d993f0866d1879f67c73910285ca114/plugins/block-dynamic-rendering-64756b/src/render.php#L11)を参照してください。

<!-- 
In dynamic blocks, where the font-end markup is rendered server-side, you can utilize the [`get_block_wrapper_attributes()`](https://developer.wordpress.org/reference/functions/get_block_wrapper_attributes/) function to output the necessary classes and attributes just like you would use `useBlockProps.save()` in the `save` function. (See [example](https://github.com/WordPress/block-development-examples/blob/f68640f42d993f0866d1879f67c73910285ca114/plugins/block-dynamic-rendering-64756b/src/render.php#L11))
 -->
ダイナミックブロックでは、フォントエンドのマークアップはサーバーサイドでレンダーされます。`save` 関数で `useBlockProps.save()` を使用したのと同じように、[`get_block_wrapper_attributes()`](https://developer.wordpress.org/reference/functions/get_block_wrapper_attributes/) 関数を利用して、必要なクラスと属性を出力できます。[例](https://github.com/WordPress/block-development-examples/blob/f68640f42d993f0866d1879f67c73910285ca114/plugins/block-dynamic-rendering-64756b/src/render.php#L11)を参照してください。

```php
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php esc_html_e( 'Block with Dynamic Rendering – hello!!!', 'block-development-examples' ); ?>
</p>
```

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/fundamentals/block-wrapper.md)
