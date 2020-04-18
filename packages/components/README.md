<!--
# Component Reference

This packages includes a library of generic WordPress components to be used for creating common UI elements shared between screens and features of the WordPress dashboard.
-->
# コンポーネントリファレンス

このパッケージには、汎用 WordPress コンポーネントライブラリーが含まれています。このコンポーネントを使用すると、画面とWordPress ダッシュボード機能との間で共有される共通 UI 要素を作成できます。

<!--
## Installation

Install the module

```bash
npm install @wordpress/components --save
```
-->
## インストール

モジュールのインストール

```bash
npm install @wordpress/components --save
```

<!--
_This package assumes that your code will run in an **ES2015+** environment. If you're using an environment that has limited or no support for ES2015+ such as lower versions of IE then using [core-js](https://github.com/zloirock/core-js) or [@babel/polyfill](https://babeljs.io/docs/en/next/babel-polyfill) will add support for these methods. Learn more about it in [Babel docs](https://babeljs.io/docs/en/next/caveats)._
-->
_このパッケージは、コードが **ES2015+** 環境で実行されることを仮定しています。IE の低いバージョンのように ES2015+ を一部、あるいはまったくサポートしない環境で使用するには、[core-js](https://github.com/zloirock/core-js) または [@babel/polyfill](https://babeljs.io/docs/en/next/babel-polyfill) を使用してサポートを追加してください。詳細については [Babel docs](https://babeljs.io/docs/en/next/caveats) を参照してください。_

<!--
## Usage

Within Gutenberg, these components can be accessed by importing from the `components` root directory:
-->
## 使い方

Gutenberg 内でコンポーネントにアクセスするには `components` ルートディレクトリからインポートしてください。

```jsx
/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';

export default function MyButton() {
	return <Button>Click Me!</Button>;
}
```

<!--
Many components include CSS to add style, you will need to add in order to appear correctly. Within WordPress, add the `wp-components` stylesheet as a dependency of your plugin's stylesheet. See [wp_enqueue_style documentation](https://developer.wordpress.org/reference/functions/wp_enqueue_style/#parameters) for how to specify dependencies.

In non-WordPress projects, link to the `build-style/style.css` file directly, it is located at `node_modules/@wordpress/components/build-style/style.css`.
-->
多くのコンポーネントには期待する表示のため、スタイルを追加する CSS が含まれています。WordPress プロジェクトの場合はプラグインのスタイルシートの依存として `wp-components` スタイルシートを追加してください。依存性の指定については [wp_enqueue_style のドキュメント](https://developer.wordpress.org/reference/functions/wp_enqueue_style/#parameters)を参照してください。

WordPress 以外のプロジェクトの場合は、直接 `build-style/style.css` ファイルをリンクしてください。`node_modules/@wordpress/components/build-style/style.css` にあります。

## コンポーネント一覧

原文およびその下のページを参照してください。

https://developer.wordpress.org/block-editor/components/

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
