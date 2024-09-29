<!-- 
# Interactivity API Reference
 -->
# Interactivity API リファレンス

<!-- 
The Interactivity API, [introduced in WordPress 6.5](https://make.wordpress.org/core/2024/02/19/merge-announcement-interactivity-api/), provides a standard way for developers to add interactions to the front end of their blocks. The API is also used in many Core WordPress blocks, including Search, Query, Navigation, and File.
 -->
Interactivity APIは、[WordPress 6.5で導入され](https://make.wordpress.org/core/2024/02/19/merge-announcement-interactivity-api/)、ブロックのフロントエンドにインタラクション (相互作用、交流) を追加する標準の方法を開発者に提供します。この API は多くの WordPress のコアブロック、検索、クエリ、ナビゲーション、ファイルなどでも使用されています。

<!-- 
This standard makes it easier for developers to create rich, interactive user experiences, from simple counters or pop-ups to more complex features like instant page navigation, instant search, shopping carts, or checkouts.
 -->
この標準により開発者は、シンプルなカウンターやポップアップから、インスタントページナビゲーション、インスタント検索、ショッピングカート、チェックアウトなどの複雑な機能まで、リッチでインタラクティブなユーザー体験を簡単に作成できます。

<!-- 
Blocks can share data, actions, and callbacks between them. This makes communication between blocks simpler and less error-prone. For example, clicking on an “add to cart” block can seamlessly update a separate “cart” block.
 -->
ブロックはブロック間でデータ、アクション、コールバックを共有できます。これにより、ブロック間の対話がよりシンプルになり、エラーも起きにくくなります。例えば、「カートに追加」ブロックをクリックすると、別の「カート」ブロックをシームレスに更新できます。

<!-- 
For more information about the genesis of the Interactivity API, check out the [original proposal](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/). You can also review the [merge announcement](https://make.wordpress.org/core/2024/02/19/merge-announcement-interactivity-api/), the [status update post](https://make.wordpress.org/core/2023/08/15/status-update-on-the-interactivity-api/), and the official [Trac ticket](https://core.trac.wordpress.org/ticket/60356).
 -->
Interactivity API の誕生については、[オリジナルの提案](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/)を参照ください。また、[merge のアナウンス](https://make.wordpress.org/core/2024/02/19/merge-announcement-interactivity-api/)、[ステータス更新の投稿](https://make.wordpress.org/core/2023/08/15/status-update-on-the-interactivity-api/)、公式の [Trac チケット](https://core.trac.wordpress.org/ticket/60356) も参照してください。

<!-- 
<div class="callout callout-info">
    The Interactivity API is supported by the package <a href="https://developer.wordpress.org/block-editor/reference-guides/packages/packages-interactivity/"><code>@wordpress/interactivity</code></a> which is bundled in WordPress Core from v6.5
</div>
 -->
> Interactivity APIは、Version 6.5 から WordPress Core にバンドルされた <a href="https://developer.wordpress.org/block-editor/reference-guides/packages/packages-interactivity/"><code>@wordpress/interactivity</code></a> パッケージでサポートされます。

<!-- 
## Navigating the Interactivity API docs
 -->
## Interactivity API ドキュメントの歩き方

<!-- 
Use the following links to locate the topic you're interested in. If you have never worked with the Interactivity API before, consider reading through the following resources in the order listed.
 -->
以下のリンクを使用して、興味のあるトピックを探してみてください。これまでに Interactivity API を使用したことがなければ、以下のリソースを順番に読んでください。

<!-- 
-   **[Requirements](#requirements-of-the-interactivity-api):** Check this section before you start creating your interactive blocks with the Interactivity API.
-   **[Quick Start Guide](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/iapi-quick-start-guide/):** Get a custom block using the Interactivity API up and running in less than one minute.
-   **[Tutorial: A first look at the Interactivity API](https://developer.wordpress.org/news/2024/04/11/a-first-look-at-the-interactivity-api/)** This article from the [WordPress Developer Blog](https://developer.wordpress.org/news/) is a great way to get introduced to the Interactivity API.
-   **[Core Concepts](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/)** Gain a better understanding of concepts and mental models related to Interactivity API development from this section.
-   **[API Reference](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/):** To take a deep dive into how the API works internally, the list of Directives, and how the Store works.
-   **[Docs and Examples](#docs-examples):** Additional resources to learn/read more about the Interactivity API.
 -->
- **要件:** Interactivity API を使用してインタラクティブなブロックの作成を始める前に、このセクションを確認してください (後述)。
- **[クイックスタートガイド](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/iapi-quick-start-guide/):** Interactivity API を使用するカスタムブロックを1分で作成し、実行します。
- **[チュートリアル: はじめての Interactivity API](https://developer.wordpress.org/news/2024/04/11/a-first-look-at-the-interactivity-api/):** [WordPress Developer Blog](https://developer.wordpress.org/news/)のこの記事は、Interactivity API の素晴らしい紹介記事です。
- **[コアコンセプト](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/core-concepts/)** このセクションでは Interactive API 開発に関するコンセプトとメンタルモデルについて理解を深められます。
- **[API リファレンス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/api-reference/):** API が内部的にどのように動作するのか、ディレクティブのリスト、ストアがどのように動作するのかを深く掘り下げます。
- **ドキュメントとサンプルプログラム:** Interactivity API についてもっと学習するための追加の情報 (後述)。

<!-- 
To get a deeper understanding of what the Interactivity API is or find answers to questions you may have about this standard, check the following resources:
 -->
Interactivity API をより深く理解したり、この標準に関する疑問への答えを見つけるには以下のリソースをチェックしてください。

<!-- 
-   **[About the Interactivity API](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/iapi-about/):** To learn more about the API Goals and the reasoning behind the use of a standard to add interactivity to blocks.
-   **[Frequently Asked Questions](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/iapi-faq/):** To find responses to some frequently asked questions about the technology behind and alternatives.
 -->
- **[Interactivity API について](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/iapi-about/):** API のゴールと、ブロックへのインタラクティビティの追加に標準を使用する理由について、詳細を学びます。
- **[よくある質問](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/iapi-faq/):** 背後にある技術と代替について、よくある質問に対する回答があります。

<!-- 
## Requirements of the Interactivity API
 -->
## Interactivity API の要件

<!-- 
Interactivity API is included in Core in WordPress 6.5. For versions below, you'll need Gutenberg 17.5 or higher installed and activated in your WordPress installation.
 -->
Interactivity API は WordPress 6.5 の Core に含まれています。それ以前のバージョンでは、Gutenberg 17.5 以上をインストールし、WordPress で有効化する必要があります。

<!-- 
It’s also important to highlight that the block creation workflow doesn’t change, and all the [prerequisites](https://developer.wordpress.org/block-editor/getting-started/devenv/) remain the same. These include:
 -->
また、ブロック作成のワークフローに変更はなく、すべての[前提条件](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/)に変更がないことも強調しておきます。これには以下が含まれます。

<!-- 
-   [Code Editor](https://developer.wordpress.org/block-editor/getting-started/devenv/#code-editor)
-   [Node.js development tools](https://developer.wordpress.org/block-editor/getting-started/devenv/#node-js-development-tools)
-   [Local WordPress environment (site)](https://developer.wordpress.org/block-editor/getting-started/devenv/#local-wordpress-environment)
 -->
- [コードエディター](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/#code-editor)
- [Node.js 開発ツール](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/#node-js-development-tools)
- [ローカル WordPress 環境 (サイト)](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/#local-wordpress-environment)

<!-- 
You can start creating interactions once you set up a block development environment and run WordPress 6.5+ (or Gutenberg 17.5+).
 -->
ブロック開発環境をセットアップし、WordPress 6.5+ (または Gutenberg 17.5+) を実行すれば、インタラクションの作成を始められます。

<!-- 
### Code requirements
 -->
### コードの要件

<!-- 
#### Add `interactivity` to your project
 -->
#### プロジェクトへの `interactivity` の追加

<!-- 
Install the Interactivity API to your project with the following command:
 -->
以下のコマンドでプロジェクトに Interactivity API をインストールします。

```bash
npm install @wordpress/interactivity --save
```
<!-- 
Import the store into your `view.js`. Refer to the [store documentation](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#the-store) for more information.
 -->
ストアを `view.js` 内にインポートします。詳細については[ストアのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/api-reference/#the-store)を参照してください。

```js
import { store } from '@wordpress/interactivity';
```

<!-- 
#### Add `interactivity` support to `block.json`
 -->
#### `block.json` への `interactivity` サポートの追加

<!-- 
To indicate that the block [supports](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/) the Interactivity API features, add `"interactivity": true` to the `supports` attribute of the block's `block.json` file.
 -->
ブロックが Interactivity API の機能を[サポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/)していることを示すには、ブロックの `block.json` ファイルの `supports` 属性に `"interactivity": true` を追加します。

```json
// block.json
"supports": {
    "interactivity": true
},
```
<!-- 
Refer to the [`interactivity` support property docs](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/#interactivity) to get a more detailed description of this property.
 -->
このプロパティの詳細については、[`interactivity` サポートプロパティのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/#interactivity)を参照してください。

<!-- 
#### Load Interactivity API JavaScript code with `viewScriptModule`
 -->
#### Interactivity API の JavaScript コードを `viewScriptModule` で読み込み

<!-- 
The Interactivity API provides the `@wordpress/interactivity` Script Module. JavaScript using the Interactivity API should be implemented as Script Modules so they can depend on `@wordpress/interactivity`. [Script Modules have been available since WordPress 6.5](https://make.wordpress.org/core/2024/03/04/script-modules-in-6-5/). Blocks can use [`viewScriptModule` block metadata](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script-module) to enqueue their Script Modules easily:
 -->
Interactivity API は `@wordpress/interactivity` スクリプトモジュールを提供します。Interactivity API を使用する JavaScript はスクリプトモジュールとして実装し、`@wordpress/interactivity` に依存できるようにします。[スクリプトモジュールは WordPress 6.5 から利用可能です](https://make.wordpress.org/core/2024/03/04/script-modules-in-6-5/)。ブロックは [`viewScriptModule` ブロックメタデータ](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script-module) を使用して、簡単にスクリプトモジュールをエンキューできます。

```json
// block.json
{
   ...
   "viewScriptModule": "file:./view.js"
}
```

<!-- 
The use of `viewScriptModule` also requires the `--experimental-modules` flag for both the [`build`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#build) and [`start`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#start) scripts of `wp-scripts` to ensure a proper build of the Script Modules.
 -->
`viewScriptModule` を使用するには、 `wp-scripts` の [`build`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#build) と [`start`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#start) スクリプトの両方で `--experimental-modules` フラグを設定して、スクリプトモジュールを正しくビルドする必要があります。

```json
// package.json
{
    "scripts": {
        ...
		"build": "wp-scripts build --experimental-modules",
		"start": "wp-scripts start --experimental-modules"
	}
```

<!-- 
#### Add `wp-interactive` directive to a DOM element
 -->
#### DOM 要素への `wp-interactive` ディレクティブの追加

<!-- 
To "activate" the Interactivity API in a DOM element (and its children), add the [`wp-interactive`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-interactivity/packages-interactivity-api-reference/#wp-interactive) directive to the DOM element in the block's `render.php` or `save.js` files.
 -->
DOM 要素 (およびその子要素) で Interactivity API を「有効化」するには、ブロックの `render.php` または `save.js` ファイル内の DOM 要素に [`wp-interactive`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-interactivity/packages-interactivity-api-reference/#wp-interactive) ディレクティブを追加します。

```html
<div data-wp-interactive="myPlugin">
	<!-- Interactivity API zone -->
</div>
```

<!-- 
Refer to the [`wp-interactive` documentation](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#wp-interactive) for a more detailed description of this directive.
 -->
このディレクティブの詳細については、[`wp-interactive` のドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/api-reference/#wp-interactive) を参照してください。

<!-- 
## Docs & Examples
 -->
## ドキュメントとサンプルプログラム

<!-- 
Here you have some more resources to learn/read more about the Interactivity API:
 -->
Interactivity API についてより詳細を知りたい方は、以下のリソースを参照してください。

<!-- 
-   [WordPress 6.5 Dev Note](https://make.wordpress.org/core/2024/03/04/interactivity-api-dev-note/)
-   [Merge announcement](https://make.wordpress.org/core/2024/02/19/merge-announcement-interactivity-api/)
-   [Proposal: The Interactivity API – A better developer experience in building interactive blocks](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/)
-   [Interactivity API Discussions](https://github.com/WordPress/gutenberg/discussions/52882), especially the [showcase](https://github.com/WordPress/gutenberg/discussions/55642#discussioncomment-9667164) discussions.
-   [wpmovies.dev](http://wpmovies.dev/) demo and its [wp-movies-demo](https://github.com/WordPress/wp-movies-demo) repo
-   Examples using the Interactivity API at [block-development-examples](https://github.com/WordPress/block-development-examples):
    -   [`interactivity-api-block-833d15`](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/interactivity-api-block-833d15)
    -   [`interactivity-api-countdown-3cd73e`](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/interactivity-api-countdown-3cd73e)
    -   [`interactivity-api-quiz-1835fa`](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/interactivity-api-quiz-1835fa)
 -->
- [WordPress 6.5 Dev Note](https://make.wordpress.org/core/2024/03/04/interactivity-api-dev-note/)
- [Merge アナウンスメント](https://make.wordpress.org/core/2024/02/19/merge-announcement-interactivity-api/)
- [提案: Interactivity API – インタラクティブなブロックを構築する際のより良い開発者エクスペリエンス](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/)
- [Interactivity API ディスカッション](https://github.com/WordPress/gutenberg/discussions/52882)、特に [showcase](https://github.com/WordPress/gutenberg/discussions/55642#discussioncomment-9667164) ディスカッション   
- [wpmovies.dev](http://wpmovies.dev/) デモとその [wp-movies-demo](https://github.com/WordPress/wp-movies-demo) リポジトリ
- [block-development-examples](https://github.com/WordPress/block-development-examples) の Interactivity API を使用したサンプルプログラム
  - [`interactivity-api-block-833d15`](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/interactivity-api-block-833d15)
  - [`interactivity-api-countdown-3cd73e`](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/interactivity-api-countdown-3cd73e)
  - [`interactivity-api-quiz-1835fa`](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/interactivity-api-quiz-1835fa)
  
<!-- 
<div class="callout">
    There's a Tracking Issue opened to ease the coordination of the work related to the Interactivity API Docs: <a href="https://github.com/WordPress/gutenberg/issues/53296">Documentation for the Interactivity API - Tracking Issue #53296</a>
</div>
 -->
Interactivity API ドキュメントに関連する作業の調整を簡素化のため、Tracking Issue がオープンされました：<a href="https://github.com/WordPress/gutenberg/issues/53296">Documentation for the Interactivity API - Tracking Issue #53296</a> です。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/interactivity-api/README.md)
