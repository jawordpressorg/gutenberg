<!-- 
# The block wrapper
 -->
# ブロックラッパー

<!-- 
Each block's markup is wrapped by a container HTML tag that needs to have the proper attributes to fully work in the Block Editor and to reflect the proper block's style settings when rendered in the Block Editor and the front end. As developers, we have full control over the block's markup, and WordPress provides the tools to add the attributes that need to exist on the wrapper to our block's markup.
 -->
それぞれのブロックのマークアップは、コンテナ HTML タグによってラップされます。コンテナ HTML タグは適切な属性を持つ必要があり、ブロックエディターで完全に動作し、ブロックエディターとフロントエンドの両方でレンダーされたときに適切なブロックスタイル設定を反映しなければなりません。開発者はブロックのマークアップを完全にコントロールできますし、WordPress にはブロックのマークアップのラッパーに必要な属性を追加するツールがあります。

<!-- 
Ensuring proper attributes to the block wrapper is especially important when using custom styling or features like `supports`. 
 -->
ブロックラッパーに適切な属性を付けることは、カスタムスタイルや `supports` のような機能を使用する場合に、特に重要です。

<!-- 
<div class="callout callout-info">
The use of <code>supports</code> generates a set of properties that need to be manually added to the wrapping element of the block so they're properly stored as part of the block data
</div>
 -->
> `supports`を使用するとプロパティのセットが生成されます。ブロックデータの一部として適切に保存されるように、これらのプロパティを手動でブロックのラッパー要素に追加する必要があります。

<!-- 
A block can have three sets of markup defined, each one of them with a specific target and purpose:
 -->
ブロックには3つのマークアップセットを定義できます。それぞれに特定のターゲットと目的があります。

<!-- 
- The one for the **Block Editor**, defined through a `edit` React component passed to [`registerBlockType`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/#registerblocktype) when registering the block in the client. 
- The one used to **save the block in the DB**, defined through a `save` function passed to `registerBlockType` when registering the block in the client. 
    - This markup will be returned to the front end on request if no dynamic render has been defined for the block.
- The one used to **dynamically render the markup of the block** returned to the front end on request, defined through the `render_callback` on [`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) or the [`render`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#render) PHP file in `block.json`
    - If defined, this server-side generated markup will be returned to the front end, ignoring the markup stored in DB.
 -->
- **ブロックエディター**のため。クライアントでブロックを登録する際に [`registerBlockType`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/#registerBlockType-%E9%96%A2%E6%95%B0) に渡される `edit` React コンポーネントを通して定義されます。
- **データベース内にブロックを保存する**ため。クライアントでブロックを登録する際に `registerBlockType` に渡される `save` 関数を通して定義されます。
    - ブロックにダイナミックレンダーが定義されていなければ、リクエストに応じてこのマークアップがフロントエンドに返されます。
- **ブロックのマークアップを動的にレンダーする**ため。リクエストに応じてクライアントに返され、[`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) の `render_callback` または `block.json` 内の [`render`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Render) PHP ファイルで定義されます。
    - この定義があると、サーバー側で生成されたマークアップはフロントエンドに返されます。データベースに保存されたマークアップは無視されます。

<!-- 
For the [`edit` React component and the `save` function](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/), the block wrapper element should be a native DOM element (like `<div>`) or a React component that forwards any additional props to native DOM elements. Using a <Fragment> or <ServerSideRender> component, for instance, would be invalid.
 -->
[`edit` React コンポーネントと `save` 関数](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/)においてブロックのラッパー要素は、ネイティブのDOM要素 (例: `<div>`) か、ネイティブの DOM 要素に追加の prop を転送する React コンポーネントでなければなりません。例えば、`<Fragment>` や `<ServerSideRender>` コンポーネントは使用できません。

<!-- 
## The Edit component's markup
 -->
## Edit コンポーネントのマークアップ

<!-- 
The [`useBlockProps()`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops) hook available on the [`@wordpress/block-editor`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor) allows passing the required attributes for the Block Editor to the `edit` block's outer wrapper. 
 -->
[`useBlockProps()`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops) フックは [`@wordpress/block-editor`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor) で利用可能で、ブロックエディタに必要な属性を `edit` ブロックの外側のラッパーに渡せます。

<!-- 
Among other things, the `useBlockProps()` hook takes care of including in this wrapper:
- An `id` for the block's markup 
- Some accesibility and `data-` attributes
- Classes and inline styles reflecting custom settings, which include by default:
    - The `wp-block` class 
    - A class that contains the name of the block with its namespace
 -->
特に、`useBlockProps()`フックは、このラッパーに以下が含まれるようにします。
- ブロックのマークアップのための `id`
- いくつかのアクセシビリティと `data-` 属性
- カスタム設定を反映したクラスとインラインスタイル。デフォルトで以下を含む
    - `wp-block` クラス 
    - ブロックの名前と名前空間を含むクラス

<!-- 
For example, for the following piece of code of a block's registration in the client...
 -->
例えばクライアント側に、ブロックを登録する以下のようなコードがあると ...

```js
const Edit = () => <p { ...useBlockProps() }>Hello World - Block Editor</p>;

registerBlockType( ..., {
	edit: Edit
} );
```

<!-- 
_(see the [code above](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/src/index.js) in [an example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda))_
 -->
_([例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda)の中の[上のコード](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/src/index.js)を参照してください)_

<!-- 
...the markup of the block in the Block Editor could look like this:
 -->
... ブロックエディター内のブロックのマークアップは以下のようになります。

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
Any additional classes and attributes for the `Edit` component of the block should be passed as an argument of `useBlockProps` (see [example](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/stylesheets-79a4c3/src/edit.js)). When you add `support` for any feature, they get added to the object returned by the `useBlockProps` hook.
 -->
ブロックの `Edit` コンポーネントに追加するクラスや属性は、`useBlockProps` の引数として渡す必要があります ([例](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/stylesheets-79a4c3/src/edit.js) を参照)。どの機能に対しても `supports` を追加すると、それらは `useBlockProps` フックが返すオブジェクトに追加されます。

<!-- 
## The Save component's markup
 -->
## Save コンポーネントのマークアップ

<!-- 
When saving the markup in the DB, it’s important to add the block props returned by `useBlockProps.save()` to the wrapper element of your block. `useBlockProps.save()` ensures that the block class name is rendered properly in addition to any HTML attribute injected by the block supports API.
 -->
マークアップをデータベース内に保存する際には、必ず `useBlockProps.save()` が返すブロックの prop をラッパー要素に追加してください。`useBlockProps.save()` は、ブロッククラス名、そしてブロック Supports API によって注入された HTML 属性を適切にレンダリングします。

<!-- 
For example, for the following piece of code of a block's registration in the client that defines the markup desired for the DB (and returned to the front end by default)...
 -->
例えば、クライアントでブロックを登録する以下のコード例では、データベースで必要とされる、またデフォルトでフロントエンドに返されるマークアップを定義していて ...

```js
const Edit = () => <p { ...useBlockProps() }>Hello World - Block Editor</p>;
const save = () => <p { ...useBlockProps.save() }>Hello World - Frontend</p>;

registerBlockType( ..., {
	edit: Edit,
	save,
} );
```
<!-- 
_(see the [code above](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/src/index.js) in [an example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda))_
 -->
_([例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda)の中の[上のコード](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/src/index.js)を参照してください)_

<!-- 
...the markup of the block in the front end could look like this:
 -->
... フロントエンドのブロックのマークアップは、次のようになります。

```html
<p class="wp-block-block-development-examples-minimal-block-ca6eda">Hello World – Frontend</p>
```

<!-- 
Any additional classes and attributes for the `save` function of the block should be passed as an argument of `useBlockProps.save()` (see [example](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/stylesheets-79a4c3/src/save.js)). 
 -->
ブロックの `save` 関数に追加するクラスと属性は、`useBlockProps.save()` の引数として渡す必要があります ([例](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/stylesheets-79a4c3/src/save.js)を参照)。

<!-- 
When you add `support` for any feature, the proper classes get added to the object returned by the `useBlockProps.save()` hook.
 -->
任意の機能に `supports` を追加すると、`useBlockProps.save()` フックが返すオブジェクトに適切なクラスが追加されます。

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
_フロントエンドで上の HTML を生成する[例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/block-supports-6aa4dd)をチェックをしてください）_

<!-- 
## The server-side render markup
 -->
## サーバー側でのマークアップのレンダー

<!-- 
Any markup in the server-side render definition for the block can use the [`get_block_wrapper_attributes()`](https://developer.wordpress.org/reference/functions/get_block_wrapper_attributes/) function to generate the string of attributes required to reflect the block settings (see [example](https://github.com/WordPress/block-development-examples/blob/f68640f42d993f0866d1879f67c73910285ca114/plugins/block-dynamic-rendering-64756b/src/render.php#L11)). 
 -->
ブロックのサーバー側レンダー定義にあるマークアップは [`get_block_wrapper_attributes()`](https://developer.wordpress.org/reference/functions/get_block_wrapper_attributes/) 関数を使用して、ブロックの設定を反映するために必要な属性の文字列を生成できます。[例](https://github.com/WordPress/block-development-examples/blob/f68640f42d993f0866d1879f67c73910285ca114/plugins/block-dynamic-rendering-64756b/src/render.php#L11)を参照してください。

```php
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php esc_html_e( 'Block with Dynamic Rendering – hello!!!', 'block-development-examples' ); ?>
</p>
```

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/fundamentals/block-wrapper.md)