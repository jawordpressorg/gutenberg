<!--
# Package Reference

WordPress exposes a list of JavaScript packages and tools for WordPress development.
-->
# パッケージリファレンス

WordPress は開発用に JavaScript のパッケージとツールをエクスポーズします。

<!--
## Using the Packages via WordPress Global

JavaScript packages are available as a registered script in WordPress and can be accessed using the `wp` global variable.

If you wanted to use the `PlainText` component from the editor module, first you would specify `wp-editor` as a dependency when you enqueue your script:
-->
## WordPress グローバルからのパッケージの使用

JavaScript パッケージは WordPress 内で登録済みスクリプトとして利用可能で、`wp` グローバル変数を使用してアクセスできます。

たとえばエディターモジュールから `PlainText` コンポーネントを使用する場合、スクリプトをエンキューする際に依存として `wp-editor` を指定します。

```php
wp_enqueue_script(
	'my-custom-block',
	plugins_url( $block_path, __FILE__ ),
	array( 'wp-blocks', 'wp-editor', 'wp-element', 'wp-i18n' )
);
```

<!--
After the dependency is declared, you can access the module in your JavaScript code using the global `wp` like so:
-->
依存の定義後は、JavaScript コードの中からグローバル変数 `wp` を使用して以下のようにモジュールにアクセスできます。

```js
const { PlainText } = wp.editor;
```

<!--
## Using the Packages via npm

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

## パッケージ一覧 (翻訳のあるもの)

- [create-block](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-create-block/)
- [env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/)
- [i18n](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-i18n/)

完全なパッケージ一覧は原文およびその下のページを参照してください。

https://developer.wordpress.org/block-editor/packages/

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/packages.md)
