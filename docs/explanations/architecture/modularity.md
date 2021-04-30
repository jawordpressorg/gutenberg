<!--
# Modularity
 -->
# モジュール性

<!--
The WordPress block editor is based around the idea that you can combine independent blocks together to write your post or build your page. Blocks can also use and interact with each other. This makes it very modular and flexible.
 -->
WordPress ブロックエディターの背景のアイデアは、独立したブロックの組み合わせによる記事の執筆やページの構築です。ブロックは、互いに使用したり交信でき、可搬性や柔軟性に優れます。

<!--
But the Block Editor does not embrace modularity for its behavior and output only. The Gutenberg repository is also built from the ground up as several reusable and independent modules or packages, that, combined together, lead to the application and interface we all know. These modules are known as [WordPress packages](https://www.npmjs.com/org/wordpress) and are published and updated regularly on the npm package repository.
 -->
ただし、ブロックエディタは、動作や出力のみにモジュール性を取り入れるわけではありません。Gutenberg リポジトリもまた、再利用可能で独立したいくつかのモジュールやパッケージとしてゼロから構築されていて、モジュールやパッケージの組み合わせでアプリケーションやインターフェイスが作成されています。これらのモジュールは [WordPress パッケージ](https://www.npmjs.com/org/wordpress)と呼ばれ、npmパッケージリポジトリで定期的に公開、更新されています。

<!--
These packages are used to power the Block Editor, but they can be used to power any page in the WordPress Admin or outside.
 -->
パッケージはブロックエディターの構築に使用されていますが、WordPress 管理画面やそれ以外の任意のページでも使用できます。

<!--
## Why?
 -->
## なぜ ?

<!--
Using a modular architecture has several benefits for all the actors involved:
 -->
モジューラーアーキテクチャは、関与するすべての人に利点があります。

<!--
-   Each package is an independent unit and has a well defined public API that is used to interact with other packages and third-party code. This makes it easier for **Core Contributors** to reason about the codebase. They can focus on a single package at a time, understand it and make updates while knowing exactly how these changes could impact all the other parts relying on the given package.
-   A module approach is also beneficial to the **end-user**. It allows to selectively load scripts on different WordPress Admin pages while keeping the bundle size contained. For instance, if we use the components package to power our plugin's settings page, there's no need to load the block-editor package on that page.
-   This architecture also allows **third-party developers** to reuse these packages inside and outside the WordPress context by using these packages as npm or WordPress script dependencies.
 -->
-   各パッケージは独立した単位であり、明確に定義された公開 API を持ちます。API を使用してパッケージは、他のパッケージやサードパーティのコードと交信でき、**コアコントリビューター** もコードベースを推測しやすくなります。コアコントリビューターは一度に1つのパッケージに集中して理解すればよく、その変更がパッケージに依存する他のすべての部分に与える影響を正確に理解しながら、更新できます。
-   またモジュールによるアプローチは、**エンドユーザー** にも利点があります。バンドルするサイズを抑えながら、異なる WordPress 管理画面に選択したスクリプトをロードできます。たとえば、プラグイン設定画面の実装に components パッケージを使用すれば、同じ画面で block-editor パッケージをロードする必要はありません。
-   **サードパーティ開発者** もまたこのアーキテクチャにより、 WordPress コンテキストの内、または外でパッケージを再利用できます。パッケージは npm として、あるいは WordPress スクリプト依存で使用できます。

<!--
## Types of packages
 -->
## パッケージタイプ

<!--
Almost everything in the Gutenberg repository is built into a package. We can split these packages into two different types:
 -->
Gutenberg リポジトリー内のほとんどすべてはパッケージとして構築されています。パッケージは2つの異なるタイプに分かれます。

<!--
### Production packages
 -->
### 製品パッケージ

<!--
These are the packages that ship in WordPress itself as JavaScript scripts. These constitute the actual production code that runs on your browsers. As an example, there's a `components` package serving as a reusable set of React components used to prototype and build interfaces quickly. There's also an `api-fetch` package that can be used to call WordPress Rest APIs.
 -->
「製品パッケージ (Production packages)」は、WordPress 自体に JavaScript スクリプトとして含まれるパッケージです。ブラウザ上で稼働する実際の製品コードを構成します。たとえば `components` パッケージは再利用可能な React コンポーネントのセットで、プロトタイプと迅速なインターフェースの構築に使用できます。また `api-fetch` パッケージを使用すると、WordPress Rest API を呼び出せます。

<!--
Third-party developers can use these production packages in two different ways:
 -->
サードパーティ開発者は2つの異なる方法で製品パッケージを使用できます。
<!--
-   If you're building a JavaScript application, website, page that runs outside of the context of WordPress, you can consume these packages like any other JavaScript package in the npm registry.
 -->
-   WordPress のコンテキストの外で動作する、JavaScript アプリケーション、web サイト、ページなどを構築する場合、npm レジストリ内の他の JavaScript パッケージと同じように使用できます。

```
npm install @wordpress/components
```

```js
import { Button } from '@wordpress/components';

function MyApp() {
	return <Button>Nice looking button</Button>;
}
```

<!--
-   If you're building a plugin that runs on WordPress, you'd probably prefer consuming the package that ships with WordPress itself. This allows multiple plugins to reuse the same packages and avoid code duplication. In WordPress, these packages are available as WordPress scripts with a handle following this format `wp-package-name` (e.g. `wp-components`). Once you add the script to your own WordPress plugin scripts dependencies, the package will be available on the `wp` global variable.
 -->
-   WordPress 上で動作するプラグインを構築する場合、恐らく WordPress に同梱されているパッケージを利用したいでしょう。この方法であれば複数のプラグインが同じパッケージを再利用でき、コードの重複を避けられます。WordPress 内でパッケージは、WordPress スクリプトとして、ハンドルは`wp-package-name` の形式 (例: `wp-components`) で利用可能です。一度、WordPress プラグインのスクリプト依存に追加したら、パッケージは `wp` グローバル変数上で利用可能です。

<!--
```php
// myplugin.php
// Example of script registration dependending on the "components" and "element packages.
wp_register_script( 'myscript', 'pathtomyscript.js', array ('wp-components', "wp-element" ) );
```
 -->
```php
// myplugin.php
// 例: "components" と "element packages に依存するスクリプトの登録
wp_register_script( 'myscript', 'pathtomyscript.js', array ('wp-components', "wp-element" ) );
```

<!--
```js
// Using the package in your scripts
const { Button } = wp.components;

function MyApp() {
	return <Button>Nice looking button</Button>;
}
```
 -->
```js
// スクリプトでのパッケージの使用
const { Button } = wp.components;

function MyApp() {
	return <Button>Nice looking button</Button>;
}
```

<!--
Script dependencies definition can be a tedious task for developers. Mistakes and oversight can happen easily. If you want to learn how you can automate this task. Check the [@wordpress/scripts](https://developer.wordpress.org/block-editor/packages/packages-scripts/#build) and [@wordpress/dependency-extraction-webpack-plugin](https://developer.wordpress.org/block-editor/packages/packages-dependency-extraction-webpack-plugin/) documentation.
 -->
スクリプト依存の定義は、開発者にとって退屈な作業です。間違いや見落としがすぐに発生します。この作業を自動化する方法を学ぶには、[@wordpress/scripts](https://developer.wordpress.org/block-editor/packages/packages-scripts/#build) と [@wordpress/dependency-extraction-webpack-plugin](https://developer.wordpress.org/block-editor/packages/packages-dependency-extraction-webpack-plugin/) のドキュメントを参照してください。

<!--
#### Packages with stylesheets
 -->
#### スタイルシート付きのパッケージ

<!--
Some production packages provide stylesheets to function properly.
 -->
製品パッケージのいくつかは、正しい動作のためのスタイルシートを提供します。

<!--
-   If you're using the package as an npm dependency, the stylesheets will be available on the `build-style` folder of the package. Make sure to load this style file on your application.
-   If you're working in the context of WordPress, you'll have to enqueue these stylesheets or add them to your stylesheets dependencies. The stylesheet handles are the same as the script handles.
 -->
-   npm 依存でパッケージを使用する場合、パッケージの `build-style` フォルダー上のスタイルシートを利用可能です。アプリケーションでこのスタイルファイルをロードしてください。
-   WordPress のコンテキストで使用する場合、このスタイルシートをエンキューするか、スタイルシートの依存に追加する必要があります。スタイルシートのハンドルはスクリプトのハンドルと同じです。

<!--
In the context of existing WordPress pages, if you omit to define the scripts or styles dependencies properly, your plugin might still work properly if these scripts and styles are already loaded there by WordPress or by other plugins, but it's highly recommended to define all your dependencies exhaustively if you want to avoid potential breakage in future versions.
 -->
既存 WordPress ページのコンテキストでは正しくスクリプトやスタイルの依存を定義しなくても、WordPress や他のプラグインで先にロードされていれば、プラグインは正しく動作します。しかし、将来のバージョンでの潜在的な障害を防ぐため、すべての依存は完全に定義することを強く推奨します。

<!--
#### Packages with data stores
 -->
#### データストア付きのパッケージ

<!--
Some WordPress production packages define data stores to handle their state. These stores can also be used by third-party plugins and themes to retrieve data and to manipulate it. The name of these data stores is also normalized following this format `core/package-name` (E.g. the `@wordpress/block-editor` package defines and uses the `core/block-editor` data store).
 -->
WordPress 製品パッケージには、ステート管理のためにデータストアを定義するものもあります。このデータストアは、サードパーティのプラグインやテーマもデータの取得や操作に使用できます。このデータストアの名前もまた `core/package-name` の形で正規化されます。例えば `@wordpress/block-editor` パッケージは `core/block-editor` データストアを定義し、使用します。

<!--
If you're using one of these stores to access and manipulate WordPress data in your plugins, don't forget to add the corresponding WordPress script to your own script dependencies for your plugin to work properly. (For instance, if you're retrieving data from the `core/block-editor` store, you should add the `wp-block-editor` package to your script dependencies like shown above).
 -->
プラグインからこれらのデータストアを使用して Wordpress データにアクセスし、操作する場合は、正しく動作するために、スクリプトの依存に忘れずに対応する WordPress スクリプトを追加してください。例えば、`core/block-editor` からデータを取得するには、上での説明と同様にスクリプトの依存に `wp-block-editor` パッケージを追加してください。

<!--
### Development packages
 -->
### 開発パッケージ

<!--
These are packages used in development mode to help developers with daily tasks to develop, build and ship JavaScript applications, WordPress plugins and themes. They include tools for linting your codebase, building it, testing it...
 -->
「開発パッケージ (Development packages)」は、開発モードで使用され、開発、ビルド、JavaScript アプリケーション、WordPress プラグインやテーマのリリースなど、開発者の日々のタスクを支援するパッケージです。コードベースの lint や、ビルド、テスト等々のツールも含まれます。

<!--
## Editor Packages
 -->
## editor パッケージ

<!--
### What's the difference between the different editor packages? What's the purpose of each package?
 -->
### 異なる editor パッケージの違いは何ですか ? 各パッケージの目的は何ですか ?

<!--
It's often surprising to new contributors to discover that the post editor is constructed as a layered abstraction of three separate packages `@wordpress/edit-post`, `@wordpress/editor`, and `@wordpress/block-editor`.
 -->
しばしば新しいコントリビューターを驚かせますが、投稿エディターは3つの異なるパッケージ `@wordpress/edit-post`、`@wordpress/editor`、`@wordpress/block-editor`の抽象化レイヤーで構築されます。

<!--
The above [Why?](#why) section should provide some context for how individual packages aim to satisfy specific requirements. That applies to these packages as well:
 -->
上の「なぜ ?」節でもある程度のコンテキストが示されたように、個々のパッケージは特定の要求を満たすことを目的とします。それはこの3つのパッケージも当てはまります。

<!--
-   `@wordpress/block-editor` provides components for implementing a block editor, operating on a primitive value of an array of block objects. It makes no assumptions for how this value is saved, and has no awareness (or requirement) of a WordPress site.
-   `@wordpress/editor` is the enhanced version of the block editor for WordPress posts. It utilizes components from the `@wordpress/block-editor` package. Having an awareness of the concept of a WordPress post, it associates the loading and saving mechanism of the value representing blocks to a post and its content. It also provides various components relevant for working with a post object in the context of an editor (e.g., a post title input component). This package can support editing posts of any post type and does not assume that rendering happens in any particular WordPress screen or layout arrangement.
-   `@wordpress/edit-post` is the implementation of the "New Post" ("Edit Post") screen in the WordPress admin. It is responsible for the layout of the various components provided by `@wordpress/editor` and `@wordpress/block-editor`, with full awareness of how it is presented in the specific screen in the WordPress administrative dashboard.
 -->
-   `@wordpress/block-editor` は、ブロックエディターを実装し、ブロックオブジェクト配列の原始的な値を操作するコンポーネントを提供します。この値がどのように保存されるかは仮定せず、また WordPress サイトに関しても感知しません (あるいは、要件としません)。
-   `@wordpress/editor` は、WordPress 投稿用のブロックエディターの拡張バージョンです。`@wordpress/block-editor` パッケージのコンポーネントを利用します。WordPress 投稿のコンセプトを認知し、ブロックを表す値のロードや保存の仕組みを投稿やそのコンテンツと関連付けます。またエディターのコンテキスト内での投稿オブジェクトを操作するさまざまなコンポーネントを提供します (例: 投稿タイトル入力コンポーネント)。このパッケージは任意の投稿タイプの投稿の編集をサポートしますが、特定の WordPress 画面やレイアウト配置内で発生するレンダリングは仮定しません。
-   `@wordpress/edit-post` は、WordPress 管理画面の「新規投稿」画面 (あるいは「投稿の編集」画面) の実装です。`@wordpress/editor` と `@wordpress/block-editor` により提供されるさまざまなコンポーネントのレイアウトに責任を持ち、WordPress 管理画面内の特定の画面でどのように表示するかを完全に理解しています。

<!--
Structured this way, these packages can be used in a variety of combinations outside the use-case of the "New Post" screen:
 -->
このような構造によりこれらのパッケージは、「新規投稿」画面のユースケース以外でも、さまざまな組み合わせで利用できます。

<!--
-   A `@wordpress/edit-site` or `@wordpress/edit-widgets` package can serve as similar implementations of a "Site Editor" or "Widgets Editor", in much the same way as `@wordpress/edit-post`.
-   `@wordpress/editor` could be used in the implementation of the "Reusable Block" block, since it is essentially a nested block editor associated with the post type `wp_block`.
-   `@wordpress/block-editor` could be used independently from WordPress, or with a completely different save mechanism. For example, it could be used for a comments editor for posts of a site.
 -->
-   「サイトエディター」や「ウィジェットエディター」の場合でも、`@wordpress/edit-site` パッケージまたは `@wordpress/edit-widgets` パッケージは、`@wordpress/edit-post` に対する場合と同様に実装できます。
-   `@wordpress/editor` は、「再利用可能ブロック」の実装でも使用できます。なぜなら、本質的には投稿タイプ `wp_block` に関連付けられた、ネストしたブロックエディターだからです。
-   `@wordpress/block-editor` は WordPress とは独立して、あるいは完全に異なる保存メカニズムで使用できます。たとえば、サイトの投稿のコメントエディターとして使用できます。

<!--
## Going further
 -->
## 次のステップ

<!--
-   [Package Reference](/docs/reference-guides/packages.md)
 -->
-   [パッケージリファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/explanations/architecture/modularity.md)
