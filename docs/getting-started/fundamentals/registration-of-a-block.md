<!-- 
# Registration of a block
 -->
# ブロックの登録

<!-- 
A block is usually registered through a plugin on both the server and client-side using its `block.json` metadata. 
 -->
<!--  
ブロックは通常、サーバー側とクライアント側の両方でプラグインを介し、 `block.json`メタデータを使用して登録されます。
 -->
<!-- 
Blocks in WordPress are typically bundled in a plugin and registered on both the server and client-side using `block.json` metadata.
 -->
WordPress のブロックは通常プラグインにバンドルされ、`block.json` メタデータを使用してサーバーサイドとクライアントサイドの両方で登録されます。

<!-- 
Although technically, blocks could be registered only in the client, **registering blocks on both the server and in the client is a strong recommendation**. Some server-side features like Dynamic Rendering, Block Supports, Block Hooks, or Block style variations require the block to "exist" on the server, and they won't work properly without server registration of the block.
 -->
<!--  
技術的にはブロックはクライアント内でのみの登録も可能ですが、**サーバーとクライアントの両方でブロックを登録することを強く推奨します**。サーバーサイドの機能の中にはダイナミックレンダリング、ブロックサポート、ブロックフック、ブロックスタイルのバリエーションなど、ブロックがサーバー上に「存在する」ことを必要とするものがあり、これらはブロックのサーバーでの登録がなければ正しく動作しません。
 -->
<!-- 
While it's possible to register blocks solely on the client-side, best practices strongly advise registering them on both the server and client. This dual registration is crucial for enabling server-side features such as Dynamic Rendering, Block Supports, Block Hooks, and Style Variations. Without server-side registration, these functionalities will not operate correctly.
 -->
ブロックはクライアントサイドのみに登録できますが、ベストプラクティスとして、サーバーとクライアントの両方で登録することを強く推奨します。この2つの登録により、動的レンダリング、ブロックサポート、ブロックフック、スタイルバリエーションなどのサーバーサイドの機能が可能となるため、非常に重要です。サーバーサイドに登録がなければ、これらの機能は正しく動作しません。

<!-- 
For example, to allow a block [to be styled via `theme.json`](https://developer.wordpress.org/themes/global-settings-and-styles/settings/blocks/), it needs to be registered on the server, otherwise, any styles assigned to it in `theme.json` will be ignored. 
 -->
<!-- 
例えば、あるブロックを [`theme.json` でスタイルを設定できる](https://developer.wordpress.org/themes/global-settings-and-styles/settings/blocks/)ようにするには、そのブロックをサーバーに登録する必要があります。そうしなければ `theme.json` で割り当てられたスタイルは無視されます。
 -->
<!-- 
For instance, if you want a block [to be styled via `theme.json`](https://developer.wordpress.org/themes/global-settings-and-styles/settings/blocks/), it must be registered on the server. Otherwise, the block won't recognize or apply any styles assigned to it in `theme.json`.
 -->
例えば、あるブロックを [`theme.json` を介してスタイルを設定するには](https://developer.wordpress.org/themes/global-settings-and-styles/settings/blocks/)、そのブロックをサーバーに登録する必要があります。そうしなければ、ブロックは `theme.json` で割り当てられたスタイルを認識、適用できません。

<!-- 
The following diagram details the registration process for a block.
 -->
次の図は、ブロックの登録プロセスの詳細を示します。

<!-- 
[![Open Block Registration diagram image](https://developer.wordpress.org/files/2023/11/block-registration-e1700493399839.png)](https://developer.wordpress.org/files/2023/11/block-registration-e1700493399839.png "Open Block Registration diagram image")
 -->
[![ブロック登録の図解を開く](https://developer.wordpress.org/files/2023/11/block-registration-e1700493399839.png)](https://developer.wordpress.org/files/2023/11/block-registration-e1700493399839.png "ブロック登録の図解を開く")

<!-- 
## Registering a block with PHP (server-side)
 -->
## PHP によるブロックの登録 (サーバーサイド)

<!-- 
Block registration on the server usually takes place in the main plugin PHP file with the `register_block_type` function called on the [init hook](https://developer.wordpress.org/reference/hooks/init/).
 -->
<!-- 
サーバー上でのブロック登録は通常、プラグインのメイン PHP ファイルで行われ、`register_block_type` 関数が [init フック](https://developer.wordpress.org/reference/hooks/init/) で呼び出されます。
 -->

<!-- 
The [`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) function aims to simplify block type registration on the server by reading metadata stored in the `block.json` file.
 -->
<!-- 
[`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) 関数は、`block.json`ファイルに格納されたメタデータを読み込むことで、サーバーへのブロックタイプの登録の簡素化を目的とします。
 -->

<!-- 
Block registration on the server usually takes place in the main plugin PHP file with the [`register_block_type()`](https://developer.wordpress.org/reference/functions/register_block_type/) function called on the [`init`](https://developer.wordpress.org/reference/hooks/init/) hook. This function simplifies block type registration by reading metadata stored in a `block.json` file.
 -->
サーバー上でのブロック登録は通常、プラグインのメイン PHP ファイルの、[`init`](https://developer.wordpress.org/reference/hooks/init/) フックで呼ばれる [`register_block_type()`](https://developer.wordpress.org/reference/functions/register_block_type/) 関数で行われます。この関数は `block.json` ファイルに保存されたメタデータを読み込むことで、ブロックタイプの登録を簡素化します。

<!-- 
This function takes two params relevant in this context (`$block_type` accepts more types and variants):
 -->
<!-- 
この関数は、このコンテキストに関連する2つのパラメータを取ります (`$block_type` は、より多くのタイプやバリアントを受け入れます）。
 -->
<!-- 
This function is designed to register block types and primarily uses two parameters in this context, although it can accommodate more variations:
 -->
この関数はブロックタイプの登録のために設計されており、このコンテキストでは主に2つのパラメータを使用しますが、より多くのバリエーションがあります。

<!-- 
-   `$block_type` (`string`) – path to the folder where the `block.json` file is located or full path to the metadata file if named differently.
-   `$args` (`array`) – an optional array of block type arguments. Default value: `[]`. Any arguments may be defined. However, the one described below is supported by default:
    -   `$render_callback` (`callable`) – callback used to render blocks of this block type, it's an alternative to the `render` field in `block.json`.
 -->
<!-- 
-   `$block_type` (`string`) – `block.json` ファイルのあるフォルダーへのパス、または、名前が異なる場合、メタデータファイルへのフルパス。
-   `$args` (`array`) – ブロックタイプ引数のオプション配列。デフォルト値は `[]`。任意の引数を定義可。ただし、以下はデフォルトでサポートされる。
    -   `$render_callback` (`callable`) – このブロックタイプのブロックをレンダーする際に使用されるコールバック。`block.json` 内の `render` フィールドの代替。
 -->
<!-- 
- **`$block_type` (`string`):** This can either be the path to the directory containing the `block.json` file or the complete path to the metadata file if it has a different name. This parameter tells WordPress where to find the block's configuration.

- **`$args` (`array`):** This is an optional parameter where you can specify additional arguments for the block type. By default, this is an empty array, but it can include various options, one of which is the `$render_callback`. This callback is used to render blocks on the front end and is an alternative to the `render` property in `block.json`.
 -->
- **`$block_type` (`string`):** `block.json` ファイルがあるディレクトリへのパスか、名前が異なる場合はメタデータファイルの完全なパスです。このパラメータは WordPress にブロックの構成の場所を伝えます。

- **`$args` (`array`):** オプションのパラメータで、ブロックタイプの追加の引数を指定できます。デフォルトでは空の配列ですが、様々なオプションを指定でき、その1つが `$render_callback` です。このコールバックはフロントエンドでのブロックのレンダーに使用され、 `block.json` の `render` プロパティの代替となります。

<!-- 
As part of the build process, the `block.json` file is usually copied from the `src` folder to the `build` folder, so the path to the `block.json` of your registered block should refer to the `build` folder.
 -->
<!-- 
ビルド処理の一環として、通常 `block.json` ファイルは `src` フォルダから `build` フォルダにコピーされるため、登録したブロックの `block.json` へのパスは `build` フォルダを参照する必要があります。
 -->

<!-- 
During the development process, the `block.json` file is typically moved from the `src` (source) directory to the `build` directory as part of compiling your code. Therefore, when registering your block, ensure the `$block_type` path points to the `block.json` file within the `build` directory.
 -->
開発プロセスにおいて、`block.json` ファイルは通常、コードのコンパイルの一環として `src` (ソース) ディレクトリから `build` (ビルド) ディレクトリに移動されます。このため、ブロックを登録する際には、 `$block_type` パスが `build` ディレクトリ内の `block.json` ファイルを指していることを確認してください。

<!-- 
`register_block_type` returns the registered block type (`WP_Block_Type`) on success or `false` on failure.
 -->
<!-- 
`register_block_type` は、成功すると登録したブロックタイプ (`WP_Block_Type`) を返し、失敗すると `false` を返します。
 -->
<!-- 
The `register_block_type()` function returns the registered block type (`WP_Block_Type`) on success or `false` on failure. Here is a simple example using the `render_callback`.
 -->
`register_block_type()` 関数は成功すると登録したブロックタイプ (`WP_Block_Type`) を返し、失敗すると `false` を返します。以下は `render_callback` を使用した簡単な例です。

<!-- 
**Example:**
 -->
<!-- 
**例:**
 -->

```php
register_block_type(
	__DIR__ . '/build',
	array(
		'render_callback' => 'render_block_core_notice',
	)
);
```

<!-- 
**Example:**
 -->
<!-- 
**例:**
 -->

<!-- 
Here is a more complete example, including the `init` hook.
 -->
以下は `init` フックを含む、より完全な例です。

```php
function minimal_block_ca6eda___register_block() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'minimal_block_ca6eda___register_block' );
```
<!-- 
_See the [full block example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda) of the  [code above](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/index.php)_
 -->
_[完全なブロックの例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda)の中の[上のコード](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/index.php)を参照してください。_

<!-- 
## Registering a block with JavaScript (client-side)
 -->
## JavaScript によるブロックの登録（クライアントサイド）

<!-- 
When the block is registered on the server, you only need to register the client-side settings on the client using the same block’s name.
 -->
<!-- 
サーバ側でブロックを登録すると、クライアント側では同じブロック名でクライアント側設定を登録するだけで済みます。
 -->

<!-- 
When the block has already been registered on the server, you only need to register the client-side settings in JavaScript using the [`registerBlockType`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/#registerblocktype) method from the `@wordpress/blocks` package. You just need to make sure you use the same block name as defined in the block's `block.json` file. Here's an example:
 -->
ブロックがすでにサーバーに登録されている場合は、`@wordpress/blocks` パッケージの [`registerBlockType`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/#registerblocktype) メソッドを使用して、JavaScript でクライアントサイドの設定を登録するだけで済みます。一点、ブロックの `block.json` ファイルで定義されたブロック名と同じ名前を使用することに注意してください。以下はその例です。

<!-- 
**Example:**
 -->
<!-- 
**例:**
 -->

<!-- 
```js
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'my-plugin/notice', {
	edit: Edit,
	// ...other client-side settings
} );
```
 -->
```js
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'my-plugin/notice', {
	edit: Edit,
	// ... 他のクライアントサイドの設定
} );
```

<!-- 
Although registering the block also on the server with PHP is still recommended for the reasons mentioned at ["Benefits using the metadata file"](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#benefits-using-the-metadata-file), if you want to register it only client-side you can use [`registerBlockType`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/#registerblocktype) method from `@wordpress/blocks` package to register a block type using the metadata loaded from `block.json` file.
 -->
<!-- 
「[メタデータファイルの利点](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E5%88%A9%E7%82%B9)」で述べた理由により、PHP を使用してサーバー上にもブロックを登録することが依然、推奨されています。それでもクライアント側だけでブロックを登録したければ `@wordpress/blocks` パッケージの [`registerBlockType`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/#registerblocktype) メソッドを使用して、`block.json` ファイルから読み込んだメタデータでブロックタイプを登録できます。
 -->

<!-- 
While it's generally advised to register blocks on the server using PHP for the benefits outlined in the ["Benefits using the metadata file"](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#benefits-using-the-metadata-file) section, you can opt to register a block solely on the client-side. The `registerBlockType` method allows you to register a block type using metadata.
 -->
一般には、[メタデータファイルを使用する利点](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E5%88%A9%E7%82%B9) セクションで説明した特徴により、PHP を使用したサーバー上でのブロックの登録が推奨ですが、クライアントサイドのみでブロックを登録することもできます。`registerBlockType` メソッドを使用すると、メタデータを使用してブロックタイプを登録できます。

<!-- 
The function takes two params:
 -->
関数は2つの引数を取ります。

<!-- 
-   `$blockNameOrMetadata` (`string`|`Object`) – block type name or the metadata object loaded from the `block.json`
-   `$settings` (`Object`) – client-side block settings.
 -->
<!-- 
-   `$blockNameOrMetadata` (`string`|`Object`) – ブロックタイプ名、または `block.json` から読み込まれたメタデータオブジェクト
-   `$settings` (`Object`) – クライアント側ブロック設定。
 -->

<!-- 
- **`blockNameOrMetadata` (`string`|`Object`):** This can either be the block type's name as a string or an object containing the block's metadata, which is typically loaded from the `block.json` file.
- **`settings` (`Object`):** This is an object containing the block's client-side settings.
 -->
- **`$blockNameOrMetadata` (`string`|`Object`):** ブロックタイプ名の文字列か、ブロックのメタデータを含むオブジェクト。メタデータは通常 `block.json` ファイルから読み込まれます。
- **`$settings` (`Object`):** ブロックのクライアントサイドの設定を含むオブジェクト。
<!-- 
<div class="callout callout-tip">
	You can import the contents of the <code>block.json</code> file (or any other <code>.json</code> file) directly into your JavaScript files if you're using a build process, such as the one provided by <a href="https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-scripts/#the-build-process-with-wp-scripts"><code>wp-scripts</code></a>.
</div>
 -->
> <a href="https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/javascript-in-the-block-editor/#the-build-process-with-wp-scripts">`wp-scripts` などのビルドプロセス</a>を使用する場合には、<code>block.json</code> の内容 (またはその他の <code>.json</code> ファイルの内容) を直接 JavaScript ファイル内にインポートできます。

<!-- 
The client-side block settings object passed as a second parameter includes two especially relevant properties:
 -->
<!-- 
2番目のパラメータとして渡されるクライアント側のブロック設定オブジェクトには、特に関連性の高い2つのプロパティが含まれます。
 -->

<!-- 
The `settings` object passed as the second parameter includes many properties, but these are the two most important ones:
 -->
2番目のパラメータとして渡される `settings` オブジェクトには多くのプロパティがありますが、最も重要なのは以下の2つです。

<!-- 
- `edit`: The React component that gets used in the editor for our block.
- `save`: The function that returns the static HTML markup that gets saved to the Database. 
 -->
<!-- 
- `edit`： ブロックのエディタで使用される React コンポーネント。
- `save`： データベースに保存される、静的な HTML マークアップを返す関数。
 -->
<!-- 
- **`edit`:** The React component that gets used in the Editor for our block.
- **`save`:** The function that returns the static HTML markup that gets saved to the database.
 -->
- **`edit`:** ブロックのエディターで使用される React コンポーネント。
- **`save`:** データベースに保存される静的な HTML マークアップを返す関数。

<!-- 
`registerBlockType` returns the registered block type (`WPBlock`) on success or `undefined` on failure.
 -->
<!-- 
`registerBlockType` は、成功すると登録されたブロックタイプ (`WPBlock`)、失敗すると `undefined` を返します。
 -->
<!-- 
The `registerBlockType()` function returns the registered block type (`WPBlock`) on success or `undefined` on failure. Here's an example:
 -->
`registerBlockType()` 関数は成功した場合に登録したブロックタイプ (`WPBlock`)、失敗した場合に `undefined` を返します。以下に例を示します。

<!-- 
**Example:**
 -->
<!-- 
**例:**
 -->

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
<!-- 
_[例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda)の中の[上のコード](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/src/index.js)を参照してください。_
 -->

<!-- 
_See the [full block example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda) of the [code above](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/src/index.js)_
 -->
_[完全なブロックの例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda)の中の[上のコード](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/minimal-block-ca6eda/src/index.js)を参照してください。_

<!-- 
## Additional resources
 -->
## その他の情報

<!-- 
- [`register_block_type` PHP function](https://developer.wordpress.org/reference/functions/register_block_type/)
- [`registerBlockType` JS function](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/#registerblocktype)
- [Why a block needs to be registered in both the server and the client?](https://github.com/WordPress/gutenberg/discussions/55884) | GitHub Discussion
- [Block Registration diagram](https://excalidraw.com/#json=PUQu7jpvbKsUHYfpHWn7s,61QnhpZtjykp3s44lbUN_g)
 -->
- [`register_block_type` PHP 関数](https://developer.wordpress.org/reference/functions/register_block_type/)
- [`registerBlockType` JS 関数](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/#registerblocktype)
- [Why a block needs to be registered in both the server and the client?](https://github.com/WordPress/gutenberg/discussions/55884)(なぜブロックはサーバーとクライアントの両方に登録する必要があるのか ?) | GitHub での議論
- [ブロック登録の図解](https://excalidraw.com/#json=PUQu7jpvbKsUHYfpHWn7s,61QnhpZtjykp3s44lbUN_g)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/fundamentals/registration-of-a-block.md)