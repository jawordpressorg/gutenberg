<!-- 
# Registration of a block
 -->
# ブロックの登録

<!-- 
A block is usually registered through a plugin on both the server and client-side using its `block.json` metadata. 
 -->
ブロックは通常、サーバー側とクライアント側の両方でプラグインを介し、 `block.json`メタデータを使用して登録されます。

<!-- 
Although technically, blocks could be registered only in the client, **registering blocks on both the server and in the client is a strong recommendation**. Some server-side features like Dynamic Rendering, Block Supports, Block Hooks, or Block style variations require the block to "exist" on the server, and they won't work properly without server registration of the block.
 -->
技術的にはブロックはクライアント内でのみの登録も可能ですが、**サーバーとクライアントの両方でブロックを登録することを強く推奨します**。サーバーサイドの機能の中にはダイナミックレンダリング、ブロックサポート、ブロックフック、ブロックスタイルのバリエーションなど、ブロックがサーバー上に「存在する」ことを必要とするものがあり、これらはブロックのサーバーでの登録がなければ正しく動作しません。

<!-- 
For example, to allow a block [to be styled via `theme.json`](https://developer.wordpress.org/themes/global-settings-and-styles/settings/blocks/), it needs to be registered on the server, otherwise, any styles assigned to it in `theme.json` will be ignored. 
 -->
例えば、あるブロックを [`theme.json` でスタイルを設定できる](https://developer.wordpress.org/themes/global-settings-and-styles/settings/blocks/)ようにするには、そのブロックをサーバーに登録する必要があります。そうしなければ `theme.json` で割り当てられたスタイルは無視されます。

<!-- 
[![Open Block Registration diagram in excalidraw](https://developer.wordpress.org/files/2023/11/block-registration-e1700493399839.png)](https://excalidraw.com/#json=PUQu7jpvbKsUHYfpHWn7s,61QnhpZtjykp3s44lbUN_g "Open Block Registration diagram in excalidraw")
 -->
[![ブロック登録の図解を excalidraw で開く](https://developer.wordpress.org/files/2023/11/block-registration-e1700493399839.png)](https://excalidraw.com/#json=PUQu7jpvbKsUHYfpHWn7s,61QnhpZtjykp3s44lbUN_g "ブロック登録の図解を excalidraw で開く")

<!-- 
### Registration of the block with PHP (server-side)
 -->
### PHP によるブロックの登録 (サーバー側)

<!-- 
Block registration on the server usually takes place in the main plugin PHP file with the `register_block_type` function called on the [init hook](https://developer.wordpress.org/reference/hooks/init/).
 -->
サーバー上でのブロック登録は通常、プラグインのメイン PHP ファイルで行われ、`register_block_type` 関数が [init フック](https://developer.wordpress.org/reference/hooks/init/) で呼び出されます。

<!-- 
The [`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) function aims to simplify block type registration on the server by reading metadata stored in the `block.json` file.
 -->
[`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) 関数は、`block.json`ファイルに格納されたメタデータを読み込むことで、サーバーへのブロックタイプの登録の簡素化を目的とします。

<!-- 
This function takes two params relevant in this context (`$block_type` accepts more types and variants):
 -->
この関数は、このコンテキストに関連する2つのパラメータを取ります (`$block_type` は、より多くのタイプやバリアントを受け入れます）。

<!-- 
-   `$block_type` (`string`) – path to the folder where the `block.json` file is located or full path to the metadata file if named differently.
-   `$args` (`array`) – an optional array of block type arguments. Default value: `[]`. Any arguments may be defined. However, the one described below is supported by default:
    -   `$render_callback` (`callable`) – callback used to render blocks of this block type, it's an alternative to the `render` field in `block.json`.
 -->
-   `$block_type` (`string`) – `block.json` ファイルのあるフォルダーへのパス、または、名前が異なる場合、メタデータファイルへのフルパス。
-   `$args` (`array`) – ブロックタイプ引数のオプション配列。デフォルト値は `[]`。任意の引数を定義可。ただし、以下はデフォルトでサポートされる。
    -   `$render_callback` (`callable`) – このブロックタイプのブロックをレンダーする際に使用されるコールバック。`block.json` 内の `render` フィールドの代替。

<!-- 
As part of the build process, the `block.json` file is usually copied from the `src` folder to the `build` folder, so the path to the `block.json` of your registered block should refer to the `build` folder.
 -->
ビルド処理の一環として、通常 `block.json` ファイルは `src` フォルダから `build` フォルダにコピーされるため、登録したブロックの `block.json` へのパスは `build` フォルダを参照する必要があります。

<!-- 
`register_block_type` returns the registered block type (`WP_Block_Type`) on success or `false` on failure.
 -->
`register_block_type` は、成功すると登録したブロックタイプ (`WP_Block_Type`) を返し、失敗すると `false` を返します。

<!-- 
**Example:**
 -->
**例:**

```php
register_block_type(
	__DIR__ . '/notice',
	array(
		'render_callback' => 'render_block_core_notice',
	)
);
```

<!-- 
**Example:**
 -->
**例:**

```php
function minimal_block_ca6eda___register_block() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'minimal_block_ca6eda___register_block' );
```
<!-- 
_See the [full block example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda) of the  [code above](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/index.php)_
 -->
_[完全なブロックの例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda)の[上のコード](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/index.php)を参照してください。_

<!-- 
### Registration of the block with JavaScript (client-side)
 -->
### JavaScript によるブロックの登録（クライアント側）

<!-- 
When the block is registered on the server, you only need to register the client-side settings on the client using the same block’s name.
 -->
サーバ側でブロックを登録すると、クライアント側では同じブロック名でクライアント側設定を登録するだけで済みます。

<!-- 
**Example:**
 -->
**例:**

<!-- 
```js
registerBlockType( 'my-plugin/notice', {
	edit: Edit,
	// ...other client-side settings
} );
```
 -->
```js
registerBlockType( 'my-plugin/notice', {
	edit: Edit,
	// ... 他のクライアント側の設定
} );
```

<!-- 
Although registering the block also on the server with PHP is still recommended for the reasons mentioned at ["Benefits using the metadata file"](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#benefits-using-the-metadata-file), if you want to register it only client-side you can use [`registerBlockType`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/#registerblocktype) method from `@wordpress/blocks` package to register a block type using the metadata loaded from `block.json` file.
 -->
「[メタデータファイルの利点](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E5%88%A9%E7%82%B9)」で述べた理由により、PHP を使用してサーバー上にもブロックを登録することが依然、推奨されています。それでもクライアント側だけでブロックを登録したければ `@wordpress/blocks` パッケージの [`registerBlockType`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/#registerblocktype) メソッドを使用して、`block.json` ファイルから読み込んだメタデータでブロックタイプを登録できます。

<!-- 
The function takes two params:
 -->
関数は2つの引数を取ります。

<!-- 
-   `$blockNameOrMetadata` (`string`|`Object`) – block type name or the metadata object loaded from the `block.json`
-   `$settings` (`Object`) – client-side block settings.
 -->
-   `$blockNameOrMetadata` (`string`|`Object`) – ブロックタイプ名、または `block.json` から読み込まれたメタデータオブジェクト
-   `$settings` (`Object`) – クライアント側ブロック設定。

<!-- 
<div class="callout callout-tip">
The content of <code>block.json</code> (or any other <code>.json</code> file) can be imported directly in Javascript files when using <a href="/docs/getting-started/devenv/get-started-with-wp-scripts/#the-build-process-with-wp-scripts">a build process like the one available with <code>wp-scripts</code></a>
</div>
 -->
> <code>block.json</code> の内容 (またはその他の <code>.json</code> ファイルの内容) は、<a href="https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/javascript-in-the-block-editor/#the-build-process-with-wp-scripts">`wp-scripts` などのビルドプロセス</a>を使用するとき、JavaScript ファイル内に直接インポートできます。

<!-- 
The client-side block settings object passed as a second parameter include two properties that are especially relevant:
 -->
2番目のパラメータとして渡されるクライアント側のブロック設定オブジェクトには、特に関連性の高い2つのプロパティが含まれます。

<!-- 
- `edit`: The React component that gets used in the editor for our block.
- `save`: The function that returns the static HTML markup that gets saved to the Database. 
 -->
- `edit`： ブロックのエディタで使用される React コンポーネント。
- `save`： データベースに保存される、静的な HTML マークアップを返す関数。

<!-- 
`registerBlockType` returns the registered block type (`WPBlock`) on success or `undefined` on failure.
 -->
`registerBlockType` は、成功すると登録されたブロックタイプ (`WPBlock`)、失敗すると `undefined` を返します。

<!-- 
**Example:**
 -->
**例:**

```js
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';

const Edit = () => <p { ...useBlockProps() }>Hello World - Block Editor</p>;
const save = () => <p { ...useBlockProps.save() }>Hello World - Frontend</p>;

registerBlockType( metadata.name, {
	edit: Edit,
	save,
} );
```

<!-- 
_See the [code above](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/src/index.js) in [an example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda)_
 -->
_[例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda)の中の[上のコード](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/src/index.js)を参照してください。_

<!-- 
## Additional resources
 -->
## その他の情報

<!-- 
- [`register_block_type` PHP function](https://developer.wordpress.org/reference/functions/register_block_type/)
- [`registerBlockType` JS function](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/#registerblocktype)
- [Why a block needs to be registered in both the server and the client?](https://github.com/WordPress/gutenberg/discussions/55884) | GitHub Discussion
 -->
- [`register_block_type` PHP 関数](https://developer.wordpress.org/reference/functions/register_block_type/)
- [`registerBlockType` JS 関数](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/#registerblocktype)
- [Why a block needs to be registered in both the server and the client?](https://github.com/WordPress/gutenberg/discussions/55884)(なぜブロックはサーバーとクライアントの両方に登録する必要があるのか ?) | GitHub での議論


[原文]()