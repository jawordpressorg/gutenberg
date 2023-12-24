<!--
# Package Reference

WordPress exposes a list of JavaScript packages and tools for WordPress development.
-->
# パッケージリファレンス

WordPress は開発用に JavaScript のパッケージとツールをエクスポーズします。

<!--
## Using the packages via WordPress global

JavaScript packages are available as a registered script in WordPress and can be accessed using the `wp` global variable.

If you wanted to use the `PlainText` component from the block editor module, first you would specify `wp-block-editor` as a dependency when you enqueue your script:
-->
## WordPress グローバルからのパッケージの使用

JavaScript パッケージは WordPress 内で登録済みスクリプトとして利用可能で、`wp` グローバル変数を使用してアクセスできます。

たとえばブロックエディターモジュールから `PlainText` コンポーネントを使用する場合、スクリプトをエンキューする際に依存として `wp-block-editor` を指定します。

```php
wp_enqueue_script(
	'my-custom-block',
	plugins_url( $block_path, __FILE__ ),
	array( 'react', 'wp-blocks', 'wp-block-editor', 'wp-i18n' )
);
```

<!--
After the dependency is declared, you can access the module in your JavaScript code using the global `wp` like so:
-->
依存の定義後は、JavaScript コードの中からグローバル変数 `wp` を使用して以下のようにモジュールにアクセスできます。

```js
const { PlainText } = wp.blockEditor;
```

<!--
## Using the packages via npm

All the packages are also available on [npm](https://www.npmjs.com/org/wordpress) if you want to bundle them in your code.

Using the same `PlainText` example, you would install the block editor module with npm:

-->
## npm 経由のパッケージの使用

すべてのパッケージは [npm](https://www.npmjs.com/org/wordpress) で利用可能です。コード内にパッケージをバンドルできます。

同じ `PlainText` の例を使用すると、npm を使用して次のようにブロックエディターモジュールをインストールできます。

```bash
npm install @wordpress/block-editor --save
```

<!--
Once installed, you can access the component in your code using:
-->
一度インストールすれば、コード内で次のようにコンポーネントにアクセスできます。

```js
import { PlainText } from '@wordpress/block-editor';
```
<!-- 
## Testing JavaScript code from a specific major WordPress version
 -->
## WordPress の特定のメジャーバージョンでの JavaScript コードのテスト

<!-- 
There is a way to quickly install a version of the individual WordPress package used with a given WordPress major version using [npm distribution tags](https://docs.npmjs.com/cli/v8/commands/npm-dist-tag) (example for WordPress `5.8.x`):
 -->
ある WordPress のメジャーバージョンで使用されている、個々の WordPress パッケージのバージョンを素早くインストールする方法があります。これには、[npm distribution tags](https://docs.npmjs.com/cli/v8/commands/npm-dist-tag) を使用します。WordPress `5.8.x` の例です。

```bash
npm install @wordpress/block-editor@wp-5.8
```
<!-- 
It’s also possible to update all existing WordPress packages in the project with a single command:
 -->
It’s also possible to update all existing WordPress packages in the project with a single command:
また、プロジェクト内の既存のすべての WordPress パッケージを1つのコマンドで更新できます。

```bash
npx @wordpress/scripts packages-update --dist-tag=wp-5.8
```
<!-- 
All major WordPress versions starting from `5.7.x` are supported (e.g., `wp-5.7` or `wp-6.0`). Each individual dist-tag always points to the latest bug fix release for that major version line.
 -->
`5.7.x` から始まるすべての WordPress のメジャーバージョンがサポートされています (例: `wp-5.7` や `wp-6.0` など)。個々の dist-tag は、常にそのメジャーバージョンの最新のバグフィックスリリースを指します。

## パッケージ一覧 (翻訳のあるもの)

- [create-block](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/)
- [env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/)
- [i18n](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-i18n/)

完全なパッケージ一覧は原文およびその下のページを参照してください。

https://developer.wordpress.org/block-editor/packages/

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/packages.md)
