<!-- 
# Working with JavaScript for the Block Editor
 -->
# ブロックエディターでの JavaScript の利用

<!-- 
Developing blocks for the Block Editor often involves using modern JavaScript (ESNext and JSX), and most examples here in the Block Editor Handbook are written in these syntaxes.
 -->
ブロックエディター用のブロックを開発する場合、通常はモダンな JavaScript (ESNext と JSX)を使用します。このブロックエディターハンドブック内のほとんどのサンプルコードもこの構文で記述されています。

<!-- 
However, this form of JavaScript must be transformed into a browser-compatible format, necessitating a build step. This process transforms, bundles, and optimizes JavaScript source code and related assets into a format suitable for production environments.
 -->
ただしこの形式の JavaScript は、ブラウザと互換性のある形に変換しなければならず、ビルドのステップが必要です。このビルドプロセスでは、JavaScriptのソースコードと関連するアセットを本番環境に適した形に変換、バンドル、最適化します。

<!-- 
## JavaScript build process
 -->
<!--  
## JavaScript ビルドプロセス
 -->
<!-- 
## JavaScript with a build process
 -->
## JavaScript とビルドプロセス

<!-- 
Using a build process for block development unlocks the full potential of modern JavaScript, facilitating the use of ESNext and JSX.
 -->
ブロック開発にビルドプロセスを使用することで、モダンな JavaScript の可能性を最大限、引き出し、ESNext と JSX の使用を促進します。

<!-- 
[ESNext](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#standardization_process) refers to JavaScript's most recent syntax and features. [JSX](https://react.dev/learn/writing-markup-with-jsx) is a syntax extension developed by the React project that enables you to write JavaScript that resembles HTML.
 -->
[ESNext](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#standardization_process) は、JavaScript の最新の構文と機能を指します。[JSX](https://react.dev/learn/writing-markup-with-jsx) は、React プロジェクトによって開発された JavaScript の構文拡張で、HTML に似た JavaScript を書けます。

<!-- 
Since browsers cannot directly execute ESNext and JSX, these syntaxes must be transformed into browser-compatible JavaScript.
 -->
ブラウザは ESNext や JSX を直接実行できないため、これらの構文をブラウザ互換の JavaScript に変換する必要があります。

<!-- 
[webpack](https://webpack.js.org/concepts/why-webpack/) is a pluggable tool that processes and bundles JavaScript for browser compatibility. [Babel](https://babeljs.io/), a plugin for webpack, converts ESNext and JSX into standard JavaScript.
 -->
[webpack](https://webpack.js.org/concepts/why-webpack/) はプラグインで拡張可能なツールで、ブラウザ互換のために JavaScript を処理し、バンドルします。[Babel](https://babeljs.io/) はwebpack のプラグインで、ESNext や JSX を標準的な JavaScript に変換します。

<!-- 
Configuring webpack and Babel can be challenging, so it's recommended that you use the [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) package. This tool simplifies development by preconfiguring both, so you rarely need to write custom webpack or Babel configurations.
 -->
webpack と Babel の構成は難しいため、[`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) パッケージの利用を推奨します。このツールは webpack と Babel を事前に構成し、開発を簡素化します。カスタム webpack や Babel 構成を書く必要は滅多にありません。

<!-- 
Among other things, with `wp-scripts` package you can use Javascript modules to distribute your code among different files and get a few bundled files at the end of the build process (see [example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/data-basics-59c8f8)).
 -->
<!--  
特に、`wp-scripts` パッケージでは、JavaScript モジュールを使用してコードをさまざまなファイルに分散し、ビルドプロセスの最後で2、3のバンドルされたファイルを取得できます ([例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/data-basics-59c8f8)を参照)。
 -->
<!-- 
For an introduction, refer to the [Get started with wp-scripts](/docs/getting-started/devenv/get-started-with-wp-scripts.md) guide.
 -->
はじめての方は、[wp-scripts 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/) を参照してください。

<!-- 
### An overview of `wp-scripts`
 -->
### `wp-scripts` 概要

<!-- 
The diagram below provides an overview of the build process when using the `wp-scripts` package. It's designed to work out of the box with [standard configurations](/docs/getting-started/devenv/get-started-with-wp-scripts.md#basic-usage) for development and production environments.
 -->
下図は `wp-scripts` パッケージを使用したビルドプロセスの概要です。このパッケージは開発環境と本番環境の[標準的な構成](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/#basic-usage)を用いて、構成せずにすぐに動作するよう設計されています。

<!-- 
[![Open Build Process diagram image](https://developer.wordpress.org/files/2023/11/build-process.png)](https://developer.wordpress.org/files/2023/11/build-process.png "Open Build Process diagram image")
 -->
[![ビルドプロセスの図解を開く](https://developer.wordpress.org/files/2023/11/build-process.png)](https://developer.wordpress.org/files/2023/11/build-process.png "ビルドプロセスの図解を開く")

<!-- 
With the [proper `package.json` scripts](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-scripts/#basic-usage) you can launch the build process with `wp-scripts` in production and development mode:
 -->
<!-- 
[適切な `package.json` スクリプト](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/#%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E4%BD%BF%E3%81%84%E6%96%B9) を使用すると、production (本番) モードと development (開発) モードの両方で、`wp-scripts` を使用してビルドプロセスを起動できます。
 -->
<!-- 
- **`npm run build` for "production" mode build** - This process [minifies the code](https://developer.mozilla.org/en-US/docs/Glossary/Minification) so it downloads faster in the browser. 
- **`npm run start` for "development" mode build**  - This process does not minify the code of the bundled files, provides [source maps files](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) for them, and additionally continues a running process to watch the source file for more changes and rebuilds as you develop.
 -->
<!-- 
- **`npm run build` - "production" モードビルド** - このプロセスでは[コードがミニファイ (縮小)](https://developer.mozilla.org/en-US/docs/Glossary/Minification) され、ブラウザでのダウンロードが速くなります。
- **`npm run start` - "development" モードビルド** - このプロセスは、バンドルされているファイルのコードをミニファイせず、ファイルの[ソースマップファイル](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)を作成します。またソースファイルに変更がないかを監視するプロセスを実行し続け、開発中にリビルドします。
 -->
<!-- 
- **Production Mode (`npm run build`):** In this mode, `wp-scripts` compiles your JavaScript, minifying the output to reduce file size and improve loading times in the browser. This is ideal for deploying your code to a live site.
- **Development Mode (`npm run start`):** This mode is tailored for active development. It skips minification for easier debugging, generates source maps for better error tracking, and watches your source files for changes. When a change is detected, it automatically rebuilds the affected files, allowing you to see updates in real-time.
 -->
- **本番モード (`npm run build`):** このモードでは、`wp-scripts` は JavaScript をコンパイルし、出力をミニファイしてファイルサイズを縮小し、ブラウザでの読み込み時間を改善します。このモードは、本番サイトにコードをデプロイする際に理想的です。
- **開発モード (`npm run start`):** このモードはアクティブな開発用に作成されています。デバッグを容易にするために最小化をスキップし、エラー追跡のためにソースマップを生成し、ソースファイルの変更を監視します。変更を検出すると、自動的に影響を受けるファイルをリビルドするため、リアルタイムで更新を確認できます。

<!-- 
The `wp-scripts` package also facilitates the use of JavaScript modules, allowing code distribution across multiple files and resulting in a streamlined bundle after the build process. The [block-development-example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/data-basics-59c8f8) GitHub repository provides some good examples.
 -->
また、`wp-scripts`パッケージは JavaScript モジュールの使用を促進します。複数のファイルにわたってコードを配布できるため、ビルドプロセス後には整理されたバンドルを作成できます。[block-development-example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/data-basics-59c8f8)の GitHub リポジトリに良い例があります。

<!-- 
<div class="callout callout-tip">
    In most situations, no customization will be needed, but you can provide a <a href="https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#provide-your-own-webpack-config"><code>webpack.config.js</code></a> when using <code>wp-scripts</code> to modify the build process to suit your needs.
</div>
 -->
>`wp-scripts` に<a href="https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#provide-your-own-webpack-config">自身のカスタム `webpack.config.js`</a> を指定することで、ニーズに合わせてビルドプロセスをカスタマイズできます。

<!-- 
## JavaScript without a build process
 -->
## ビルドプロセスなしの JavaScript

<!-- 
Integrating JavaScript into your WordPress projects without a build process can be the most straightforward approach in specific scenarios. This is particularly true for projects that don't leverage JSX or other advanced JavaScript features requiring compilation.
 -->
特定のシナリオにおいては、JavaScript と WordPress プロジェクトの統合にビルドプロセスを使用しない方法が最もシンプルな方法になります。これは特に、コンパイルが必要な JSX や高度な JavaScript 機能を利用しないプロジェクトに当てはまります。

<!-- 
Using Javascript without a build process may be another good option for code developments with few requirements (especially those not requiring JSX). 
 -->
<!-- 
ビルドプロセスなしでの JavaScript の使用は、要件の少ないコード開発 (特に JSX を必要としないコード開発) では、もう一つの良い選択肢かもしれません。
 -->

<!-- 
Without a build process, you access the methods directly from the `wp` global object and must enqueue the script manually. [WordPress Javascript packages](https://developer.wordpress.org/block-editor/reference-guides/packages/) can be accessed through the `wp` [global variable](https://developer.mozilla.org/en-US/docs/Glossary/Global_variable) but every script that wants to use them through this `wp` object is responsible for adding [the handle of that package](https://developer.wordpress.org/block-editor/contributors/code/scripts/) to the dependency array when registered.
 -->
<!-- 
ビルドプロセスなしの場合、`wp` グローバルオブジェクトから直接メソッドにアクセスし、手動でスクリプトをエンキューしなければなりません。[WordPress JavaScript パッケージ](https://developer.wordpress.org/block-editor/reference-guides/packages/) には `wp` [グローバル変数](https://developer.mozilla.org/en-US/docs/Glossary/Global_variable) を通してアクセスできますが、この `wp` オブジェクトを通して使用したいすべてのスクリプトには、登録時、[パッケージのハンドル](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/scripts/)を依存配列に追加する責任があります。
 -->
<!-- 
When you opt out of a build process, you interact directly with WordPress's [JavaScript APIs](/docs/reference-guides/packages/) through the global `wp` object. This means that all the methods and packages provided by WordPress are readily available, but with one caveat: you must manually manage script dependencies. This is done by adding [the handle](/docs/contributors/code/scripts.md) of each corresponding package to the dependency array of your enqueued JavaScript file.
 -->
ビルドプロセスを使用しない場合は、グローバルな `wp` オブジェクトを通して WordPress の [JavaScript API](https://developer.wordpress.org/block-editor/reference-guides/packages/) と直接やりとりします。WordPress が提供するすべてのメソッドとパッケージをすぐに利用できます。ただし、1つ注意点があり、スクリプトの依存関係を手動で管理しなければなりません。これには、対応する各パッケージの[ハンドル](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/scripts/)を、エンキューする JavaScript ファイルの依存配列に追加します。

<!-- 
So, for example if a script wants to register a block variation using the `registerBlockVariation` method out of the ["blocks" package](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/), the `wp-blocks` handle would need to get added to the dependency array to ensure that `wp.blocks.registerBlockVariation` is defined when the script tries to access it (see [example](https://github.com/wptrainingteam/block-theme-examples/blob/master/example-block-variation/functions.php)). 
 -->
<!--  
そのため、例えばスクリプトがブロックバリエーションの登録に ["blocks" パッケージ](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/)の `registerBlockVariation` メソッドを使用したい場合、`wp-blocks` ハンドルを依存配列に追加して、スクリプトがアクセスしようとしたときに `wp.blocks.registerBlockVariation` が定義されていることを保証する必要があります ([例](https://github.com/wptrainingteam/block-theme-examples/blob/master/example-block-variation/functions.php)を参照)。
 -->
<!-- 
For example, suppose you're creating a script that registers a new block [variation](/docs/reference-guides/block-api/block-variations.md) using the `registerBlockVariation` function from the [`blocks`](/docs/reference-guides/packages/packages-blocks.md) package. You must include `wp-blocks` in your script's dependency array. This guarantees that the `wp.blocks.registerBlockVariation` method is available and defined by the time your script executes.
 -->
例えば、[`blocks`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/) パッケージの `registerBlockVariation` 関数を使用して、新しいブロック[バリエーション](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-variations/) を登録するスクリプトを作成するとします。このときスクリプトの依存関係の配列に `wp-blocks` を含める必要があります。これにより、スクリプトが実行される時点で `wp.blocks.registerBlockVariation` メソッドが利用可能で、定義されていることが保証されます。

<!-- 
In the following example, the `wp-blocks` dependency is defined when enqueuing the `variations.js` file.
 -->
次の例では、`variations.js` ファイルをエンキューする際に `wp-blocks` の依存関係を定義しています。

```php
function example_enqueue_block_variations() {
	wp_enqueue_script(
		'example-enqueue-block-variations',
		get_template_directory_uri() . '/assets/js/variations.js',
		array( 'wp-blocks' ),
		wp_get_theme()->get( 'Version' ),
		false
	);
}
add_action( 'enqueue_block_editor_assets', 'example_enqueue_block_variations' );
```

<!-- 
Then in the `variations.js` file, you can register a new variation for the Media & Text block like so:
 -->
すると、`variations.js`ファイルで、次のようにメディアとテキストブロックに新しいバリエーションを登録できます。

```js
wp.blocks.registerBlockVariation(
	'core/media-text',
	{
		name: 'media-text-custom',
		title: 'Media & Text Custom',
		attributes: {
			align: 'wide',
			backgroundColor: 'tertiary'
		},
	}
);
```
<!-- 
For scripts that need to run in the Block Editor, make sure you use the [`enqueue_block_editor_assets`](https://developer.wordpress.org/reference/hooks/enqueue_block_editor_assets/) hook coupled with the standard [`wp_enqueue_script`](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) function.
 -->
ブロックエディター内で実行するスクリプトについては、[`enqueue_block_editor_assets`](https://developer.wordpress.org/reference/hooks/enqueue_block_editor_assets/) フックと標準の[`wp_enqueue_script`](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) 関数を併用してください。

<!-- 
Refer to [Enqueueing assets in the Editor](/docs/how-to-guides/enqueueing-assets-in-the-editor.md) for more information. You can also visit the [block-development-example](https://github.com/wptrainingteam/block-theme-examples/blob/master/example-block-variation/functions.php) GitHub repository for more practical examples.
 -->
詳細は[エディター内でのアセットのエンキュー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/enqueueing-assets-in-the-editor/)を参照してください。また実践的なサンプルについては、[block-development-example](https://github.com/wptrainingteam/block-theme-examples/blob/master/example-block-variation/functions.php) GitHub リポジトリにアクセスしてください。

<!-- 
<div class="callout callout-tip">
    Open your browser's dev tools and try running <code>wp.data.select('core/editor').getBlocks()</code> in the console when editing a post or when using the Site Editor. This command will return all available blocks.
</div>
 -->
> 投稿やサイトの編集中に、ブラウザの開発ツールで `wp.data.select('core/editor').getBlocks()` を実行してみてください。コンソールからエディタ全体を利用できます。

<!-- 
Use [`enqueue_block_editor_assets`](https://developer.wordpress.org/reference/hooks/enqueue_block_editor_assets/) hook coupled with the standard [`wp_enqueue_script`](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) (and [`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/)) to enqueue javascript assets for the Editor with access to these packages via `wp` (see [example](https://github.com/wptrainingteam/block-theme-examples/tree/master/example-block-variation)). Refer to [Enqueueing assets in the Editor](https://developer.wordpress.org/block-editor/how-to-guides/enqueueing-assets-in-the-editor/) for more info.
 -->
<!-- 
[`enqueue_block_editor_assets`](https://developer.wordpress.org/reference/hooks/enqueue_block_editor_assets/) フックと、関連する標準的な [`wp_enqueue_script`](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) (そして [`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/)) を使用してエディター用の JavaScript アセットをエンキューし、`wp` 経由でこれらのパッケージにアクセスできます ([例](https://github.com/wptrainingteam/block-theme-examples/tree/master/example-block-variation) を参照)。詳細は[エディター内でのアセットのエンキュー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/enqueueing-assets-in-the-editor/)を参照してください。
 -->

<!-- 
## Additional resources
 -->
## その他の情報

<!-- 
- [Package Reference](https://developer.wordpress.org/block-editor/reference-guides/packages/)
- [Get started with wp-scripts](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-scripts/) 
- [Enqueueing assets in the Editor](https://developer.wordpress.org/block-editor/how-to-guides/enqueueing-assets-in-the-editor/) 
- [WordPress Packages handles](https://developer.wordpress.org/block-editor/contributors/code/scripts/) 
- [Javascript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | MDN Web Docs
- [block-development-examples](https://github.com/WordPress/block-development-examples) | GitHub repository
- [block-theme-examples](https://github.com/wptrainingteam/block-theme-examples) | GitHub repository
- [How webpack and WordPress packages interact](https://developer.wordpress.org/news/2023/04/how-webpack-and-wordpress-packages-interact/) | Developer Blog
- [Build Process Diagram](https://excalidraw.com/#json=4aNG9JUti3pMnsfoga35b,ihEAI8p5dwkpjWr6gQmjuw)
 -->
<!-- 
- [パッケージリファレンス](https://developer.wordpress.org/block-editor/reference-guides/packages/)
- [wp-scripts 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/)
- [エディター内でのアセットのエンキュー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/enqueueing-assets-in-the-editor/)
- [WordPress パッケージのハンドル](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/scripts/)
- [JavaScript リファレンス](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | MDN Web Docs
- [ブロック開発例](https://github.com/WordPress/block-development-examples) | GitHub リポジトリ
- [block-theme-examples](https://github.com/wptrainingteam/block-theme-examples) | GitHub リポジトリ
- [How webpack and WordPress packages interact](https://developer.wordpress.org/news/2023/04/how-webpack-and-wordpress-packages-interact/) (webpack と WordPress パッケージの関係) | Developer Blog
- [ビルドプロセスの図解](https://excalidraw.com/#json=4aNG9JUti3pMnsfoga35b,ihEAI8p5dwkpjWr6gQmjuw)
 -->
<!-- 
- [Package reference](/docs/reference-guides/packages.md)
- [Get started with wp-scripts](/docs/getting-started/devenv/get-started-with-wp-scripts.md)
- [Enqueueing assets in the Editor](/docs/how-to-guides/enqueueing-assets-in-the-editor.md)
- [WordPress package handles](/docs/contributors/code/scripts.md)
- [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | MDN Web Docs
- [block-development-examples](https://github.com/WordPress/block-development-examples) | GitHub repository
- [block-theme-examples](https://github.com/wptrainingteam/block-theme-examples) | GitHub repository
- [How webpack and WordPress packages interact](https://developer.wordpress.org/news/2023/04/how-webpack-and-wordpress-packages-interact/) | Developer Blog
- [Build process diagram](https://excalidraw.com/#json=4aNG9JUti3pMnsfoga35b,ihEAI8p5dwkpjWr6gQmjuw)
 -->
- [パッケージリファレンス](https://developer.wordpress.org/block-editor/reference-guides/packages/)
- [wp-scripts 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/)
- [エディター内でのアセットのエンキュー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/enqueueing-assets-in-the-editor/)
- [WordPress パッケージのハンドル](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/scripts/)
- [JavaScript リファレンス](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | MDN Web Docs
- [block-development-examples](https://github.com/WordPress/block-development-examples) | GitHub リポジトリ
- [block-theme-examples](https://github.com/wptrainingteam/block-theme-examples) | GitHub リポジトリ
- [How webpack and WordPress packages interact](https://developer.wordpress.org/news/2023/04/how-webpack-and-wordpress-packages-interact/) (webpack と WordPress パッケージの関係) | Developer Blog
- [ビルドプロセスの図解](https://excalidraw.com/#json=4aNG9JUti3pMnsfoga35b,ihEAI8p5dwkpjWr6gQmjuw)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/fundamentals/javascript-in-the-block-editor.md)