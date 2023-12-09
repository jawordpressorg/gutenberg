<!-- 
# Working with Javascript for the Block Editor
 -->
# ブロックエディターでの JavaScript の利用

<!-- 
A JavaScript Build Process is recommended for most cases when working with Javascript for the Block Editor. With a build process, you'll be able to work with ESNext and JSX (among others) syntaxes and features in your code while producing code ready for the majority of the browsers.
 -->
ブロックエディターで JavaScript を利用する場合、ほとんどのケースでは JavaScript ビルドプロセスを推奨します。ビルドプロセスを使用するとコードの中で ESNext や JSX (他にもあります) の構文や機能を使え、ほとんどのブラウザに対応したコードを作成できます。

<!-- 
## JavaScript Build Process
 -->
## JavaScript ビルドプロセス

<!-- 
["ESNext"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#standardization_process) is a dynamic name that refers to Javascript's latest syntax and features. ["JSX"](https://react.dev/learn/writing-markup-with-jsx) is a custom syntax extension to JavaScript, created by React project, that allows you to write JavaScript using a familiar HTML tag-like syntax.
 -->
["ESNext"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#standardization_process) は、JavaScript の最新の構文と機能を指す動的な名前です。["JSX"](https://react.dev/learn/writing-markup-with-jsx) は、React プロジェクトによって作成された JavaScript のカスタム構文拡張で、使い慣れた HTML タグに似た構文を使用して JavaScript を書けます。

<!-- 
Browsers cannot interpret or run ESNext and JSX syntaxes, so a transformation step is needed to convert these syntaxes to code that browsers can understand.
 -->
ブラウザは ESNext や JSX の構文を解釈、実行できないため、これらの構文をブラウザが理解できるコードに変換する、変換ステップが必要です。

<!-- 
["webpack"](https://webpack.js.org/concepts/why-webpack/) is a pluggable tool that processes JavaScript and creates a compiled bundle that runs in a browser. ["Babel"](https://babeljs.io/) transforms JavaScript from one format to another. Babel is a webpack plugin to transform ESNext and JSX to production-ready JavaScript.
 -->
["webpack"](https://webpack.js.org/concepts/why-webpack/) はプラグインで拡張可能なツールです。JavaScript を処理し、ブラウザで実行可能な、コンパイルされたバンドルを作成します。["Babel"](https://babeljs.io/) は JavaScript をあるフォーマットから別のフォーマットに変換します。Babel は ESNext や JSX を実環境で使用可能な JavaScript に変換する webpack プラグインです。

<!-- 
[`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) package abstracts these libraries away to standardize and simplify development, so you won’t need to handle the details for configuring webpack or babel. Check the [Get started with wp-scripts](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-scripts/) intro guide.
 -->
[`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) パッケージはこれらのライブラリを抽象化して、開発を標準化、簡素化します。webpack や Babel の設定のために詳細を処理する必要はありません。[wp-scripts 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/)をチェックしてください。

<!-- 
Among other things, with `wp-scripts` package you can use Javascript modules to distribute your code among different files and get a few bundled files at the end of the build process (see [example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/data-basics-59c8f8)).
 -->
特に、`wp-scripts` パッケージでは、JavaScript モジュールを使用してコードをさまざまなファイルに分散し、ビルドプロセスの最後で2、3のバンドルされたファイルを取得できます ([例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/data-basics-59c8f8)を参照)。

<!-- 
[![Build Process Diagram](https://developer.wordpress.org/files/2023/11/build-process.png)](https://excalidraw.com/#json=4aNG9JUti3pMnsfoga35b,ihEAI8p5dwkpjWr6gQmjuw "Open Build Process Diagram in Excalidraw")
 -->
[![ビルドプロセスの図解](https://developer.wordpress.org/files/2023/11/build-process.png)](https://excalidraw.com/#json=4aNG9JUti3pMnsfoga35b,ihEAI8p5dwkpjWr6gQmjuw "ビルドプロセスの図解を Excalidraw で開く")

<!-- 
With the [proper `package.json` scripts](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-scripts/#basic-usage) you can launch the build process with `wp-scripts` in production and development mode:
 -->
[適切な `package.json` スクリプト](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/#%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E4%BD%BF%E3%81%84%E6%96%B9) を使用すると、production (本番) モードと development (開発) モードの両方で、`wp-scripts` を使用してビルドプロセスを起動できます。

<!-- 
- **`npm run build` for "production" mode build** - This process [minifies the code](https://developer.mozilla.org/en-US/docs/Glossary/Minification) so it downloads faster in the browser. 
- **`npm run start` for "development" mode build**  - This process does not minify the code of the bundled files, provides [source maps files](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) for them, and additionally continues a running process to watch the source file for more changes and rebuilds as you develop.
 -->
- **`npm run build` - "production" モードビルド** - このプロセスでは[コードがミニファイ (縮小)](https://developer.mozilla.org/en-US/docs/Glossary/Minification) され、ブラウザでのダウンロードが速くなります。
- **`npm run start` - "development" モードビルド** - このプロセスは、バンドルされているファイルのコードをミニファイせず、ファイルの[ソースマップファイル](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)を作成します。またソースファイルに変更がないかを監視するプロセスを実行し続け、開発中にリビルドします。

<!-- 
<div class="callout callout-tip">
    You can <a href="https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#provide-your-own-webpack-config">provide your own custom <code>webpack.config.js</code></a> to <code>wp-scripts</code> to customize the build process to suit your needs 
</div>
 -->
>`wp-scripts` に<a href="https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#provide-your-own-webpack-config">自身のカスタム `webpack.config.js`</a> を指定することで、ニーズに合わせてビルドプロセスをカスタマイズできます。

<!-- 
## Javascript without a build process
 -->
## ビルドプロセスなしの JavaScript

<!-- 
Using Javascript without a build process may be another good option for code developments with few requirements (especially those not requiring JSX). 
 -->
ビルドプロセスなしでの JavaScript の使用は、要件の少ないコード開発 (特に JSX を必要としないコード開発) では、もう一つの良い選択肢かもしれません。

<!-- 
Without a build process, you access the methods directly from the `wp` global object and must enqueue the script manually. [WordPress Javascript packages](https://developer.wordpress.org/block-editor/reference-guides/packages/) can be accessed through the `wp` [global variable](https://developer.mozilla.org/en-US/docs/Glossary/Global_variable) but every script that wants to use them through this `wp` object is responsible for adding [the handle of that package](https://developer.wordpress.org/block-editor/contributors/code/scripts/) to the dependency array when registered.
 -->
ビルドプロセスなしの場合、`wp` グローバルオブジェクトから直接メソッドにアクセスし、手動でスクリプトをエンキューしなければなりません。[WordPress JavaScript パッケージ](https://developer.wordpress.org/block-editor/reference-guides/packages/) には `wp` [グローバル変数](https://developer.mozilla.org/en-US/docs/Glossary/Global_variable) を通してアクセスできますが、この `wp` オブジェクトを通して使用したいすべてのスクリプトには、登録時、[パッケージのハンドル](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/scripts/)を依存配列に追加する責任があります。

<!-- 
So, for example if a script wants to register a block variation using the `registerBlockVariation` method out of the ["blocks" package](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/), the `wp-blocks` handle would need to get added to the dependency array to ensure that `wp.blocks.registerBlockVariation` is defined when the script tries to access it (see [example](https://github.com/wptrainingteam/block-theme-examples/blob/master/example-block-variation/functions.php)). 
 -->
そのため、例えばスクリプトがブロックバリエーションの登録に ["blocks" パッケージ](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/)の `registerBlockVariation` メソッドを使用したい場合、`wp-blocks` ハンドルを依存配列に追加して、スクリプトがアクセスしようとしたときに `wp.blocks.registerBlockVariation` が定義されていることを保証する必要があります ([例](https://github.com/wptrainingteam/block-theme-examples/blob/master/example-block-variation/functions.php)を参照)。

<!-- 
<div class="callout callout-tip">
    Try running <code>wp.data.select('core/editor').getBlocks())</code> in your browser's dev tools while editing a post or a site. The entire editor is available from the console.
</div>
 -->
> 投稿やサイトの編集中に、ブラウザの開発ツールで `wp.data.select('core/editor').getBlocks()` を実行してみてください。コンソールからエディタ全体を利用できます。

<!-- 
Use [`enqueue_block_editor_assets`](https://developer.wordpress.org/reference/hooks/enqueue_block_editor_assets/) hook coupled with the standard [`wp_enqueue_script`](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) (and [`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/)) to enqueue javascript assets for the Editor with access to these packages via `wp` (see [example](https://github.com/wptrainingteam/block-theme-examples/tree/master/example-block-variation)). Refer to [Enqueueing assets in the Editor](https://developer.wordpress.org/block-editor/how-to-guides/enqueueing-assets-in-the-editor/) for more info.
 -->
[`enqueue_block_editor_assets`](https://developer.wordpress.org/reference/hooks/enqueue_block_editor_assets/) フックと、関連する標準的な [`wp_enqueue_script`](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) (そして [`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/)) を使用してエディター用の JavaScript アセットをエンキューし、`wp` 経由でこれらのパッケージにアクセスできます ([例](https://github.com/wptrainingteam/block-theme-examples/tree/master/example-block-variation) を参照)。詳細は[エディター内でのアセットのエンキュー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/enqueueing-assets-in-the-editor/)を参照してください。

<!-- 
## Additional resources
 -->
## 追加リソース

<!-- 
- [Get started with wp-scripts](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-scripts/) 
- [Enqueueing assets in the Editor](https://developer.wordpress.org/block-editor/how-to-guides/enqueueing-assets-in-the-editor/) 
- [Wordpress Packages handles](https://developer.wordpress.org/block-editor/contributors/code/scripts/) 
- [Javascript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | MDN Web Docs
- [block-development-examples](https://github.com/WordPress/block-development-examples) | GitHub repository
- [block-theme-examples](https://github.com/wptrainingteam/block-theme-examples) | GitHub repository
- [How webpack and WordPress packages interact](https://developer.wordpress.org/news/2023/04/how-webpack-and-wordpress-packages-interact/) | Developer Blog
 -->
- [wp-scripts 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/)
- [エディター内でのアセットのエンキュー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/enqueueing-assets-in-the-editor/)
- [WordPress パッケージのハンドル](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/scripts/)
- [JavaScript リファレンス](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | MDN Web Docs
- [ブロック開発例](https://github.com/WordPress/block-development-examples) | GitHub リポジトリ
- [block-theme-examples](https://github.com/wptrainingteam/block-theme-examples) | GitHub リポジトリ
- [How webpack and WordPress packages interact](https://developer.wordpress.org/news/2023/04/how-webpack-and-wordpress-packages-interact/) (webpack と WordPress パッケージの関係) | Developer Blog

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/fundamentals/javascript-in-the-block-editor.md)