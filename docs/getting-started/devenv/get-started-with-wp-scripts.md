<!-- 
# Get started with wp-scripts
 -->
# wp-scripts 入門

<!-- 
The [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) package, commonly referred to as `wp-scripts`, is a set of configuration files and scripts that primarily aims to standardize and simplify the development process of WordPress projects that require a JavaScript build step.
 -->
[`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) パッケージは構成ファイルとスクリプトのセットで、一般に `wp-scripts` と呼ばれます。主に JavaScript のビルド手順を必要とする WordPress プロジェクトの開発プロセスの標準化と簡素化を目的とします。

<!-- 
A JavaScript build step refers to the process of transforming, bundling, and optimizing JavaScript source code and related assets into a format suitable for production environments. These build steps often take modern JavaScript (ESNext and JSX) and convert it to a version compatible with most browsers. They can also bundle multiple files into one, minify the code to reduce file size and perform various other tasks to optimize the code.
 -->
JavaScript のビルド手順とは、JavaScript のソースコードと関連アセットを本番環境に適した形式に変換、バンドル、最適化するプロセスを指します。これらのビルド手順は多くの場合、最新の JavaScript (ESNext と JSX) をほとんどのブラウザと互換性のあるバージョンに変換します。また、複数のファイルを1つにバンドルし、コードを最小化してファイルサイズを縮小し、コードを最適化するその他のさまざまなタスクを実行します。

<!-- 
You will typically be working with ESNext and JSX when building for the Block Editor, and all examples in the Block Editor Handbook are written in these syntaxes. Learning how to set up a build step is essential. However, configuring the necessary tools like [webpack](https://webpack.js.org/), [Babel](https://babeljs.io/), and [ESLint](https://eslint.org/) can become complex. This is where `wp-scripts` comes in.
 -->
ブロックエディター用にビルドする場合、通常は ESNext と JSX を使用します。ブロックエディターハンドブックのすべての例もこの構文で書かれています。したがってビルド手順の設定方法の学習が重要になりますが、[webpack](https://webpack.js.org/) や [Babel](https://babeljs.io/) や [ESLint](https://eslint.org/) のような必須ツールの構成は複雑です。ここで `wp-scripts` の出番です。

<!-- 
Here are a few things that `wp-scripts` can do:
 -->
`wp-scripts` で以下を実行できます。

<!-- 
- **Compilation:** Converts modern JavaScript (ESNext and JSX) into code compatible with most browsers, using Babel.
- **Bundling:** Uses webpack to combine multiple JavaScript files into a single bundle for better performance.
- **Code Linting:** Provides configurations for ESLint to help ensure code quality and conformity to coding standards.
- **Code Formatting:** Incorporates Prettier for automated code styling to maintain consistent code formatting across projects.
- **Sass Compilation:** Converts Sass (.scss or .sass) files to standard CSS.
- **Code Minification:** Reduces the size of the JavaScript code for production to ensure faster page loads.
 -->
- **コンパイル：** Babel を使用して、モダンなJavaScript（ESNextとJSX）をほとんどのブラウザと互換性のあるコードに変換します。
- **バンドル:** webpack を使用して、複数の JavaScript ファイルを1つのバンドルにまとめ、パフォーマンスを向上します。
- **コードの lint:** ESLint の構成を提供し、コードの品質とコーディング標準への準拠を保証します。
- **コードフォーマット:** 自動コードスタイリングのために Prettier を組み込み、プロジェクト間で一貫したコードフォーマットを維持します。
- **Sass コンパイル:** Sass (.scss または .sass) ファイルを標準的な CSS に変換します。
- **コードの最小化:** JavaScript コードのサイズを縮小し、ページロードを高速化します。

<!-- 
The package abstracts away much of the initial setup, configuration, and boilerplate code associated with JavaScript development for modern WordPress. You can then focus on building blocks and Block Editor extensions.
 -->
このパッケージは、最新の WordPress 向けの JavaScript 開発に関連する初期設定、構成、定型コードの多くを抽象化します。開発者はブロックの構築とブロックエディターの拡張に集中できます。

<!-- 
## Quick start
 -->
## クイックスタート

<!-- 
<div class="callout callout-tip">
    If you use <a href="https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-create-block/"><code>@wordpress/create-block</code></a> package to scaffold the structure of files needed to create and register a block, you'll also get a modern JavaScript build setup (using <code>wp-scripts</code>) with no configuration required, so you don't need to worry about installing <code>wp-scripts</code> or enqueuing assets. Refer to <a href="https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-create-block/">Get started with <code>create-block</code></a> for more details.
</div>
 -->
> <a href="https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-create-block/"><code>@wordpress/create-block</code></a> パッケージを使用すると、ブロックの作成と登録に必要なファイル構造の雛形を作成できます。また構成なしでモダンな JavaScript ビルドセットアップ（<code>wp-scripts</code> を使用）も入手でき、<code>wp-scripts</code> のインストールやアセットのエンキューを心配する必要はありません。詳しくは <a href="https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-create-block/"><code>create-block</code> 入門</a>を参照してください。

<!-- 
### Installation
 -->
### インストール

<!-- 
Ensure you have Node.js and `npm` installed on your computer. Review the [Node.js development environment](https://developer.wordpress.org/block-editor/getting-started/devenv/nodejs-development-environment/) guide if not. 
 -->
コンピューターに Node.js と `npm` がインストールされていることを確認してください。インストールされていない場合は、[Node.js 開発環境](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/nodejs-development-environment/) ガイドを参照してください。

<!-- 
Then, create a project folder and ensure it contains a `package.json` file, a `build` folder, and an `src` folder. The `src` folder should also include an `index.js` file. 
 -->
次に、プロジェクトフォルダを作成し、その中に `package.json` ファイル、`build` フォルダ、`src` フォルダを作成してください。`src` フォルダには `index.js` ファイルも作成する必要があります。

<!-- 
If you have not created a `package.json` file before, navigate to the project folder in the terminal and run the `npm init` command. An interactive prompt will walk you through the steps. Configure as you like, but when it asks for the "entry point", enter `build/index.js`.
 -->
`package.json` ファイルを作成したことがなければ、ターミナルでプロジェクトフォルダに移動して `npm init` コマンドを実行してください。対話的にプロンプトが表示され、手順が説明されます。自由に構成できますが、「entry point」は`build/index.js` と入力してください。

<!-- 
Of course, there are many ways to set up a project using `wp-scripts`, but this is the recommended approach used throughout the Block Editor Handbook.
 -->
もちろん、`wp-scripts` を使用したプロジェクトのセットアップ方法は多数ありますが、ブロックエディターハンドブックではこの方法を推奨しています。

<!-- 
Finally, install the `wp-scripts` package as a development dependency by running the command:
 -->
最後に、`wp-scripts` パッケージを開発依存としてインストールします。

```bash
npm install @wordpress/scripts --save-dev
```

<!-- 
Once the installation is complete, your project folder should look like this:
 -->
インストールが完了すると、プロジェクトフォルダーは次のようになるはずです。

<!-- 
```bash
example-project-folder/
├── build/
├── node_modules/ (autogenerated)
├── src/
│   └── index.js
├── package-lock.json (autogenerated)
└── package.json
```
 -->
```bash
example-project-folder/
├── build/
├── node_modules/ (自動生成)
├── src/
│   └── index.js
├── package-lock.json (自動生成)
└── package.json
```

<!-- 
### Basic usage
 -->
### 基本的な使い方

<!-- 
Once installed, you can run the predefined scripts provided with `wp-scripts` by referencing them in the scripts section of your `package.json` file. Here’s an example:
 -->
インストールが完了したら、`wp-scripts` で提供されている定義済みのスクリプトを `package.json` ファイルの scripts セクションで参照して実行できます。以下はその例です。

```json
{
    "scripts": {
        "start": "wp-scripts start",
        "build": "wp-scripts build"
    }
}
```

<!-- 
These scripts can then be run using the command `npm run {script name}`. 
 -->
これらのスクリプトは `npm run {スクリプト名}` コマンドを使用して実行できます。

<!-- 
### The build process with `wp-scripts`
 -->
### `wp-scripts` でのビルドプロセス

<!-- 
The two scripts you will use most often are `start` and `build` since they handle the build step. See the [package documentation](https://developer.wordpress.org/block-editor/packages/packages-scripts/) for all options.
 -->
最もよく使うスクリプトはビルド手順を処理する `start` と `build` の2つです。すべてのオプションについては [パッケージのドキュメント](https://developer.wordpress.org/block-editor/packages/packages-scripts/) を参照してください。

<!-- 
When working on your project, use the `npm run start` command. This will start a development server and automatically rebuild the project whenever any change is detected. Note that the compiled code in `build/index.js` will not be optimized.
 -->
ブロックで作業するときは、 `npm run start` コマンドを使用します。開発サーバーを起動し、コードの変更を検出するたびに、自動的にプロジェクトをリビルドします。注意: `build/index.js` にコンパイルされたコードは最適化されません。

<!-- 
When you are ready to deploy your project, use the `npm run build` command. This optimizes your code and makes it production-ready.
 -->
プロジェクトをデプロイする準備ができたら、 `npm run build` コマンドを使用します。コードが最適化され、本番環境に適用できます。

<!-- 
After the build finishes, you will see the compiled JavaScript file created at `build/index.js`. 
 -->
ビルドが終了すると、コンパイルされた JavaScript ファイルが `build/index.js` として作成されます。

<!-- 
A `build/index.asset.php` file will also be created in the build process, which contains an array of dependencies and a version number (for cache busting). Please, note that to register a block without this `wp-scripts` build process you'll need to manually create `*.asset.php` dependencies files (see [example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-no-build-e621a6)).
 -->
ビルドプロセスでは `build/index.asset.php` ファイルも作成され、中には依存関係の配列とバージョン番号 (cache busting、キャッシュ破棄のため) が含まれます。この `wp-scripts` ビルドプロセスなしでブロックを登録するには、手動で `*.asset.php` 依存ファイルを作成する必要があることに注意してください ([例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-no-build-e621a6)を参照)。

<!-- 
### Enqueuing assets
 -->
### アセットのエンキュー

<!-- 
If you register a block via `register_block_type` the scripts defined in `block.json` will be automatically enqueued (see [example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda))
 -->
`register_block_type` を介してブロックを登録すると、`block.json` で定義されたスクリプトは自動的にエンキューされます ([例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda)を参照)。

<!-- 
To manually enqueue files in the editor, in any other context, you can refer to the [Enqueueing assets in the Editor](https://developer.wordpress.org/block-editor/how-to-guides/enqueueing-assets-in-the-editor/) guide for more information, but here's a typical implementation. 
 -->
エディター内でファイルを手動でエンキューするには、他の任意のコンテキストにおける詳細を [エディター内でのアセットのエンキュー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/enqueueing-assets-in-the-editor/)ガイドを参照できますが、ここでは典型的な実装を紹介します。

```php
/**
 * Enqueue Editor assets.
 */
function example_project_enqueue_editor_assets() {
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_enqueue_script(
        'example-editor-scripts',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
}
add_action( 'enqueue_block_editor_assets', 'example_project_enqueue_editor_assets' );
```

<!-- 
Here's [an example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/data-basics-59c8f8) of manually enqueuing files in the editor.
 -->
エディター内でファイルを手動でエンキューする[例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/data-basics-59c8f8)です。

<!-- 
## Next steps
 -->
## 次のステップ

<!-- 
While `start` and `build` will be the two most used scripts, several other useful tools come with `wp-scripts` that are worth exploring. Here's a look at a few.
 -->
`start` と `build` が最もよく使われるスクリプトですが、他にも `wp-scripts` には便利なツールが複数用意されています。ここではそのいくつかを紹介します。

<!-- 
### Maintaining code quality
 -->
### コード品質の維持

<!-- 
To help developers improve the quality of their code, `wp-scripts` comes pre-configured with tools like ESLint and Prettier. ESLint ensures your JavaScript adheres to best practices and the [WordPress coding standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/), while Prettier automatically formats your code. The available scripts include: 
 -->
開発者がコードの品質を向上できるように、`wp-scripts`には ESLint や Prettier のようなツールがあらかじめ設定されています。ESLint は JavaScript がベストプラクティスと [WordPress コーディング規約](https://ja.wordpress.org/team/handbook/coding-standards/wordpress-coding-standards/)に準拠していることを確認します。Prettier はコードを自動的にフォーマットします。利用可能なスクリプトは以下の通りです。

```json
{
    "scripts": {
        "format": "wp-scripts format",
        "lint:css": "wp-scripts lint-style",
        "lint:js": "wp-scripts lint-js",
    }
}
```

<!-- 
Regularly linting and formatting your code ensures it's functional, clear, and maintainable for yourself and other developers.
 -->
定期的にコードを lint し、フォーマットすることで、自分自身や他の開発者にとって機能的でわかりやすく、保守しやすいコードになります。

<!-- 
### Running tests
 -->
### テストの実行

<!-- 
Beyond just writing code, verifying its functionality is crucial. `wp-scripts` includes [Jest](https://jestjs.io/), a JavaScript testing framework, and both end-to-end and unit testing scripts:
 -->
コードを書くだけでなく、機能を検証することも重要です。`wp-scripts` には、JavaScript のテストフレームワーク [Jest](https://jestjs.io/) と、エンドツーエンドとユニットテストの両方のスクリプトが含まれています。

```json
{
    "scripts": {
        "test:e2e": "wp-scripts test-e2e",
        "test:unit": "wp-scripts test-unit-js"
    }
}
```

<!-- 
Unit tests validate individual units of code, such as functions, ensuring they work as intended, while end-to-end (E2E) tests evaluate the entire project by simulating real-world user scenarios to ensure all parts of the system work seamlessly together.
 -->
ユニットテストは関数などの個々のコード単位で検証し、意図したとおりに動作することを保証します。一方、エンドツーエンド (E2E) テストは、実際のユーザーシナリオをシミュレートしてプロジェクト全体を評価し、システムのすべての部分がシームレスに連動することを確認します。

<!-- 
### Advanced configurations 
 -->
### 高度な構成

<!-- 
While `wp-scripts` provides a solid default configuration, there might be cases where you need more specialized setups. The good news is `wp-scripts` is highly adaptable. For example, you can extend and override the default webpack configuration, allowing you to add loaders and plugins or modify almost any part of the build process. This flexibility ensures that as your project grows or its requirements change, `wp-scripts` can be tailored to your evolving needs.
 -->
`wp-scripts` はデフォルト設定で十分機能しますが、特殊な設定が必要な場合もあります。良いニュースとして `wp-scripts` は非常に拡張性に優れます。例えば、デフォルトの webpack の設定を拡張し、上書きでき、ローダーやプラグインを追加し、ビルドプロセスのほとんどすべての部分を変更できます。この柔軟性により、プロジェクトが成長したり、要件が変更されても、進化するニーズに `wp-scripts` を適用できます。

<!-- 
See the `wp-scripts` [package documentation](https://developer.wordpress.org/block-editor/packages/packages-scripts/) for all configuration options.
 -->
すべての構成オプションについては `wp-scripts` [パッケージのドキュメント](https://developer.wordpress.org/block-editor/packages/packages-scripts/) を参照してください。

<!-- 
## Additional resources
 -->
## 追加リソース

<!-- 
- [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) (Official documentation)
- [How webpack and WordPress packages interact](https://developer.wordpress.org/news/2023/04/how-webpack-and-wordpress-packages-interact/) (WordPress Developer Blog)
 -->
- [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) (公式ドキュメント)
- [webpack と WordPress パッケージの関係](https://developer.wordpress.org/news/2023/04/how-webpack-and-wordpress-packages-interact/) (WordPress Developer Blog)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/devenv/get-started-with-wp-scripts.md)