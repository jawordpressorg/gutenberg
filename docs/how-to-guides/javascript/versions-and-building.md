<!--
# JavaScript Versions and Build Step
 -->
# JavaScript のバージョンとビルド手順

<!-- 
The Block Editor Handbook shows JavaScript examples in two syntaxes: JSX and Plain.
 -->
「ブロックエディターハンドブック」では JavaScript の例を「JSX」と「Plain」の2つの構文で示しています。

<!-- 
Plain refers to JavaScript code compatible with WordPress's minimum [target for browser support](https://make.wordpress.org/core/handbook/best-practices/browser-support/) without requiring a transpilation step. This step is commonly referred to as a build process.
 -->
「Plain」は、トランスパイラステップなしで、WordPress でサポートする[ブラウザーの最小要件](https://make.wordpress.org/core/handbook/best-practices/browser-support/) と互換の JavaScript コードです。なお、トランスパイラステップは一般にビルドプロセスと呼ばれます。

<!-- 
"JSX" doesn't refer to a specific version of JavaScript, but refers to the latest language definition plus
[JSX syntax](https://reactjs.org/docs/introducing-jsx.html), a syntax that blends HTML and JavaScript. JSX makes it easier to read and write markup code, but does require a build step to transpile into code compatible with browers. Webpack and babel are the tools that perform this transpilation step.
 -->
「JSX」は、JavaScript の特定のバージョンを意味せず、最新の言語定義、そして、HTML と JavaScript を混ぜた [JSX 構文](https://reactjs.org/docs/introducing-jsx.html) を指します。JSX を使用するとマークアップコードの読み書きが楽になりますが、ブラウザと互換のコードにトランスパイルするビルド手順が必要です。Webpack や Babel はこのトランスパイルを実行するツールです。

<!-- 
For simplicity, the JavaScript tutorial uses the Plain definition, without JSX. This code can run straight in your browser and does not require an additional build step. In many cases, it is perfectly fine to follow the same approach for simple plugins or experimenting. As your codebase grows in complexity it might be a good idea to switch to JSX. You will find the majority of code and documentation across the block editor uses JSX.
 -->
簡素化のため JavaScript チュートリアルでは ES5 定義を使用します。JSX は使用しません。ES5 のコードは追加のビルド手順を必要とせずブラウザーでそのまま動作します。多くの場合、単純なプラグインや実験であれば同様のアプローチで問題ないでしょう。そして、コードが大きく複雑になった際に ESNext に切り替えるのも良い考えです。ブロックエディターの大部分のコードやドキュメントは ESNext を使用します。

<!-- 
See the [JavaScript Build Setup documentation](/docs/how-to-guides/javascript/js-build-setup.md) for setting up a development environment using JSX syntax.
 -->
JSX 構文を使用する開発環境をセットアップする方法については [JavaScript ビルド手順のドキュメント](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/js-build-setup/) を参照してください。

<!-- 
See the [ESNext syntax documentation](/docs/how-to-guides/javascript/esnext-js.md) for explanation and examples about common code differences between standard JavaScript and more modern approaches.
 -->
標準的な JavaScript とモダンなアプローチとの間の、一般的なコードの違いに関する説明と例については [ESNext 構文ドキュメント](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/esnext-js/) を参照してください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/javascript/versions-and-building.md)







