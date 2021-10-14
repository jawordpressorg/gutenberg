<!-- 
# JavaScript Versions and Build Step
 -->
# JavaScript のバージョンとビルド手順

<!--
The Block Editor Handbook shows JavaScript examples in two syntaxes: ES5 and ESNext. These are version names for the JavaScript language standard definitions. You may also see elsewhere the names ES6, or ECMAScript 2015 mentioned. See the [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) Wikipedia article for all the details.

ES5 code is compatible with WordPress's minimum [target for browser support](https://make.wordpress.org/core/handbook/best-practices/browser-support/).
 -->
「ブロックエディターハンドブック」では JavaScript の例を「ES5」と「ESNext」の2つの構文で示しています。これらは JavaScript 言語標準定義のバージョン名です。その他にも「ES6」や「ECMAScript 2015」といった記述を見たことがあるかもしれません。これらの詳細については Wikipedia の記事 [ECMAScript](https://ja.wikipedia.org/wiki/ECMAScript) を参照してください。

ES5 コードは WordPress でサポートする[ブラウザーの最小要件](https://make.wordpress.org/core/handbook/best-practices/browser-support/) と互換です。

<!-- 
"ESNext" doesn't refer to a specific version of JavaScript, but is "dynamic" and refers to the next language definitions, whatever they might be. Because some browsers won't support these features yet (because they're new or proposed), an extra build step is required to transform the code to a syntax that works in all browsers. Webpack and babel are the tools that perform this transformation step.

Additionally, the ESNext code examples in the handbook include [JSX syntax](https://reactjs.org/docs/introducing-jsx.html), a syntax that blends HTML and JavaScript. JSX makes it easier to read and write markup code, but does require a build step to transform into compatible code.
 -->
「ESNext」は JavaScript の特定のバージョンを意味しません。Next が表すとおり「動的」に、次の任意の言語定義を意味します。「ESNext」の機能は新しい機能や提唱された機能のためブラウザの中にはまだ実装していないものもあります。このためすべてのブラウザーで動作する構文にコードを変換する、追加のビルド手順が必要です。Webpack や Babel はこの変換を実行するツールです。

さらに、このハンドブックの ESNext コード例は、HTML と JavaScript を混ぜた [JSX 構文](https://reactjs.org/docs/introducing-jsx.html) を含みます。JSX を使用するとマークアップコードの読み書きが楽になりますが、互換コードに変換するビルド手順が必要です。

<!-- 
For simplicity, the JavaScript tutorial uses the ES5 definition, without JSX. This code can run straight in your browser and does not require an additional build step. In many cases, it is perfectly fine to follow the same approach for simple plugins or experimenting. As your codebase grows in complexity it might be a good idea to switch to ESNext. You will find the majority of code and documentation across the block editor uses ESNext.

See the [JavaScript Build Setup documentation](/docs/how-to-guides/javascript/js-build-setup.md) for setting up a development environment using ESNext syntax.
 -->
簡素化のため JavaScript チュートリアルでは ES5 定義を使用します。JSX は使用しません。ES5 のコードは追加のビルド手順を必要とせずブラウザーでそのまま動作します。多くの場合、単純なプラグインや実験であれば同様のアプローチで問題ないでしょう。そして、コードが大きく複雑になった際に ESNext に切り替えるのも良い考えです。ブロックエディターの大部分のコードやドキュメントは ESNext を使用します。

ESNext 構文を使用する開発環境をセットアップする方法については [JavaScript ビルド手順のドキュメント](https://developer.wordpress.org/block-editor/designers-developers/developers/tutorials/javascript/js-build-setup/) を参照してください。

<!-- 
See the [ESNext syntax documentation](/docs/how-to-guides/javascript/esnext-js.md) for explanation and examples about common code differences between standard JavaScript and ESNext.
 -->
標準の JavaScript と ESNext との一般的なコードの違いに関する説明と例については [ESNext 構文ドキュメント](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/tutorials/javascript/esnext-js.md) を参照してください。

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/tutorials/javascript/versions-and-building.md)

