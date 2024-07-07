<!--
# Component Reference

This package includes a library of generic WordPress components to be used for creating common UI elements shared between screens and features of the WordPress dashboard.
-->
# コンポーネントリファレンス

このパッケージには、汎用 WordPress コンポーネントライブラリーが含まれています。このコンポーネントを使用すると、画面とWordPress ダッシュボード機能との間で共有される共通 UI 要素を作成できます。

<!--
## Installation

```bash
npm install @wordpress/components --save
```
-->
## インストール

```bash
npm install @wordpress/components --save
```

<!--
_This package assumes that your code will run in an **ES2015+** environment. If you're using an environment that has limited or no support for such language features and APIs, you should include [the polyfill shipped in `@wordpress/babel-preset-default`](https://github.com/WordPress/gutenberg/tree/HEAD/packages/babel-preset-default#polyfill) in your code._
 -->
_このパッケージは、コードが **ES2015+** 環境で実行されることを仮定しています。その言語機能や API の一部のみ、または、まったくサポートしない環境で使用するには、コードに [`@wordpress/babel-preset-default` の polyfill](https://github.com/WordPress/gutenberg/tree/trunk/packages/babel-preset-default#polyfill) を含めてください。_

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
Many components include CSS to add styles, which you will need to load in order for them to appear correctly. Within WordPress, add the `wp-components` stylesheet as a dependency of your plugin's stylesheet. See [wp_enqueue_style documentation](https://developer.wordpress.org/reference/functions/wp_enqueue_style/#parameters) for how to specify dependencies.

In non-WordPress projects, link to the `build-style/style.css` file directly, it is located at `node_modules/@wordpress/components/build-style/style.css`.
-->
多くのコンポーネントにはスタイルを追加する CSS が含まれ、期待する表示のためにはそれらを読み込む必要があります。WordPress プロジェクトの場合、プラグインのスタイルシートの依存として `wp-components` スタイルシートを追加してください。依存性の指定については [wp_enqueue_style のドキュメント](https://developer.wordpress.org/reference/functions/wp_enqueue_style/#parameters)を参照してください。

WordPress 以外のプロジェクトの場合は、直接 `build-style/style.css` ファイルをリンクしてください。`node_modules/@wordpress/components/build-style/style.css` にあります。

<!-- 
### Popovers and Tooltips
 -->
<!--  
### Popover と Tooltip
 -->
### Popovers

<!-- 
_If you're using [`Popover`](/packages/components/src/popover/README.md) or [`Tooltip`](/packages/components/src/tooltip/README.md) components outside of the editor, make sure they are rendered within a `SlotFillProvider` and with a `Popover.Slot` somewhere up the element tree._
 -->
<!-- 
_もし、[`Popover`](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/popover/README.md) コンポーネント、または [`Tooltip`](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/tooltip/README.md) コンポーネントをエディターの外で使用している場合、それらのコンポーネントは、`SlotFillProvider` 内で、要素ツリーのどこかで `Popover.Slot` と一緒にレンダーされる必要があります。_
 -->

<!-- 
By default, the `Popover` component will render inline i.e. within its
parent to which it should anchor. Depending upon the context in which the
`Popover` is being consumed, this might lead to incorrect positioning. For
example, when being nested within another popover.
 -->
<!-- 
`Popover` コンポーネントは、デフォルトではインラインでレンダーされます。すなわち、その親の中に固定されます。しかし、使用されるコンテキストによっては、`Popover` が不適切な位置に表示される場合があります。例えば、他の popover の中にネストしている場合です。
 -->
<!-- 
This issue can be solved by rendering popovers to a specific location in the DOM via the
`Popover.Slot`. For this to work, you will need your use of the `Popover`
component and its `Slot` to be wrapped in a [`SlotFill`](/packages/components/src/slot-fill/README.md) provider.
 -->
<!-- 
この問題は、popover を `Popover.Slot` を介して DOM の特定の場所にレンダリングすることで解決できます。このためには、 `Popover` コンポーネントとその `Slot` を [`SlotFill`](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/slot-fill/README.md) プロバイダでラップする必要があります。
 -->
<!-- 
By default, the `Popover` component will render within an extra element appended to the body of the document.
 -->
デフォルトで `Popover`コンポーネントは、ドキュメントの body に追加された、余分な要素の中にレンダーします。

<!-- 
If you want to precisely contol where the popovers render, you will need to use the `Popover.Slot` component.
 -->
ポップオーバーがレンダーする場所を正確にコントロールしたければ、`Popover.Slot`コンポーネントを使用する必要があります。

<!-- 
A `Popover` is also used as the underlying mechanism to display `Tooltip` components.
So the same considerations should be applied to them.
 -->
<!-- 
`Popover` は `Tooltip` コンポーネントを表示するベースのメカニズムとしても使用されます。したがって、同じ考慮が、`Tooltip` でも必要です。
 -->

<!-- 
The following example illustrates how you can wrap a component using a
`Popover` and have those popovers render to a single location in the DOM.
 -->
次の例は、`Popover` を使ってコンポーネントをラップし、それらの popover を DOM の 1 つの場所にレンダリングする方法を示します。

```jsx
/**
 * External dependencies
 */
import { Popover, SlotFillProvider } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { MyComponentWithPopover } from './my-component';

const Example = () => {
	<SlotFillProvider>
		<MyComponentWithPopover />
		<Popover.Slot />
	</SlotFillProvider>;
};
```

### TypeScript

<!-- 
This package exposes its own types for the components it exports, however it doesn't export its own types for component props. If you need to extract the props type, please use `React.ComponentProps` to get the types from the element.
 -->
このパッケージは、エクスポートするコンポーネントに対して独自の型を公開しますが、コンポーネントの props に対しては独自の型をエクスポートしません。props の型を抽出する必要がある場合は、`React.ComponentProps` を使用して要素から型を取得してください。

```tsx
import type { ComponentProps } from 'react';
import { Button } from '@wordpress/components';

export default function MyButton( props: ComponentProps< typeof Button > ) {
	return <Button { ...props }>Click Me!</Button>;
}
```

<!--
## Docs & examples
 -->
## ドキュメント & サンプル

<!--
You can browse the components docs and examples at [https://wordpress.github.io/gutenberg/](https://wordpress.github.io/gutenberg/)
 -->
コンポーネントのドキュメントとサンプルは [https://wordpress.github.io/gutenberg/](https://wordpress.github.io/gutenberg/) で参照できます。

<!--
## Contributing
 -->
<!-- 
## コントリビューティング
 -->
<!--
See [CONTRIBUTING.md](/packages/components/CONTRIBUTING.md) for the contributing guidelines for the `@wordpress/components` package.
 -->
<!--  
`@wordpress/components` パッケージへのコントリビュートのガイドラインの詳細については [CONTRIBUTING.md](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/CONTRIBUTING.md) を参照してください。
 -->
<!-- 
## Contributing to this package
 -->
## このパッケージへのコントリビュート

<!-- 
This is an individual package that's part of the Gutenberg project. The project is organized as a monorepo. It's made up of multiple self-contained software packages, each with a specific purpose. The packages in this monorepo are published to [npm](https://www.npmjs.com/) and used by [WordPress](https://make.wordpress.org/core/) as well as other software projects.
 -->
これは、Gutenberg プロジェクトの一部である、個別パッケージです。このプロジェクトは、monorepo として構成されています。複数の自己完結型ソフトウェアパッケージで構成されており、それぞれが特定の目的を持ちます。この monorepo のパッケージは [npm](https://www.npmjs.com/) で公開され、[WordPress](https://make.wordpress.org/core/) や他のソフトウェアプロジェクトで利用されています。

<!-- 
To find out more about contributing to this package or Gutenberg as a whole, please read the project's main [contributor guide](https://github.com/WordPress/gutenberg/tree/HEAD/CONTRIBUTING.md).
 -->
このパッケージや Gutenberg 全体へのコントリビュートの詳細については、プロジェクトのメインの[コントリビューターガイド](https://ja.wordpress.org/team/handbook/block-editor/contributors/)を参照ください。

<!-- 
This package also has its own [contributing information](https://github.com/WordPress/gutenberg/tree/HEAD/packages/components/CONTRIBUTING.md) where you can find additional details.
 -->
このパッケージには、また、追加の詳細詳細を記述した独自の [コントリビューター情報](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/CONTRIBUTING.md) があります。

## コンポーネント一覧

[原文およびその下のページ](https://developer.wordpress.org/block-editor/reference-guides/components/)を参照してください。

<br /><br /><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>

[原文](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/README.md)
