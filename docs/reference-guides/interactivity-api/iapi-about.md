<!-- 
# About the Interactivity API
 -->
# Interactivity API について

<!-- 
The Interactivity API is **a [standard](#why-a-standard) system of [directives](#why-directives), based on declarative code, for [adding frontend interactivity to blocks](#api-goals)**.
 -->
Interactivity API は、**標準 (standard) のディレクティブシステムで、宣言型コードに基づいて、ブロックにフロントエンドのインタラクティビティ (相互作用、対話性) を追加**します。

<!-- 
**Directives extend HTML with special attributes** that tell the Interactivity API to attach a specified behavior to a DOM element or even to transform it. For those familiar with [Alpine.js](https://alpinejs.dev/), it’s a similar approach but explicitly designed to work seamlessly with WordPress.
 -->
**ディレクティブは特別な属性で HTML を拡張**し、Interactivity API に指示して、DOM 要素に指定された動作を追加、あるいは DOM 要素を変換します。[Alpine.js](https://alpinejs.dev/) を知っていれば似たようなアプローチですが、特に WordPress とシームレスに動作するように設計されています。

<!-- 
## API Goals 
 -->
## API のゴール

<!-- 
The main goal of the Interactivity API is to **provide a standard and simple way to handle the frontend interactivity of Gutenberg blocks**.
 -->
Interactivity API は、**フロントエンドにおける Gutenberg ブロックのインタラクティビティを扱う、標準で、シンプルな方法の提供**を主な目的とします。

<!-- 
A standard makes it **easier for developers to create rich, interactive user experiences**, from simple cases like counters or popups to more complex features like instant page navigation, instant search, or carts and checkouts.
 -->
標準 (standard) は、カウンターやポップアップのようなシンプルなものから、即時ページナビゲーション、即時検索、カートとチェックアウトのような複雑な機能まで、**リッチでインタラクティブなユーザー体験**を開発者がより簡単に作成できるようにします。

<!-- 
All these user experiences are technically possible right now without the Interactivity API. However, the more complex the user experience and the more blocks interact with each other, the harder it becomes for developers to build and maintain sites. There are a lot of challenges they have to figure out themselves. The API aims to provide out-of-the-box means for supporting these kinds of interactions.
 -->
こうしたユーザー体験はすべて、技術的には現在でも Interactivity API なしで可能です。しかし、ユーザー体験が複雑になればなるほど、またブロック同士の相互作用が大きくなればなるほど、開発者がサイトを構築、維持することはより難しくなります。開発者が自身で解決しなければならない課題が大量にあります。API はこのようなインタラクションをサポートするための、すぐに使える手段を提供することを目的としています。

<!-- 
To address this challenge the following requirements/goals for the Interactivity API were defined:
 -->
この課題を解決するため、Interactivity API の要件や目標は次のように定義されました。

<!-- 
- **Block-first and PHP-first**: The API must work well with PHP and the current block system, including dynamic blocks, widely extended in WordPress. It must support server-side rendering. Server-rendered HTML and client-hydrated HTML must be exactly the same. This is important for SEO and the user experience.
- **Backward compatible**: The API must be compatible with WordPress hooks, which could, for example, modify server-rendered HTML. It must also be compatible with internationalization and existing JS libraries on the site (such as jQuery).
- **Optional and gradual adoption**: Related to the previous point, the API must remain optional. It should be possible to adopt it gradually, meaning that interactive blocks not using this API can coexist with those using it.
- **Declarative and reactive**: The API must use declarative code, listen to changes in the data, and update only the parts of the DOM that depend on that data.
- **Performant**: The runtime must be fast and lightweight to ensure the best user experience.
- **Extensible**: In the same way WordPress focuses on extensibility, this new system must provide extensibility patterns to cover most use cases.
- **Atomic and composable**: Having small reusable parts that can be combined to create more complex systems is required to create flexible and scalable solutions.
- **Compatible with the existing block development tooling**: The API must be integrated with the existing block-building tools without requiring additional tooling or configuration by the developer.
 -->
- **ブロックファースト、PHP ファースト**: API は PHP や現在のブロックシステムとうまく動作する必要があり、そこには WordPress で広く拡張されているダイナミックブロックも含まれます。サーバーサイドレンダリングもサポートしなければなりません。サーバーでレンダーされた HTML と、クライアントでハイドレーションされた HTML は完全に同じでなければなりません。これは SEO にもユーザー体験にも重要です。
- **後方互換性**: API は、例えばサーバーでレンダーされる HTML を修正する WordPress のフックと互換性がなければなりません。また、国際化やサイト上の既存の JS ライブラリ (jQueryなど) との互換性も必要です。
- **オプション、かつ、段階的な適用**： 前の点と関連して、API はオプションのままでなければなりません。段階的な適用が可能でなければならず、すなわち、この API を使用しないインタラクティブブロックとも共存する必要があります。
- **宣言型でリアクティブ**： API は宣言的なコードを使用し、データの変更をリッスンし、そのデータに依存する DOM の部分のみを更新しなければなりません。
- **パフォーマンス**: 最高のユーザー体験を保証するために、ランタイムは高速かつ軽量でなければなりません。
- **拡張性**：WordPress が拡張性に重点を置いているのと同じように、この新しいシステムは、ほとんどのユースケースをカバーする拡張性パターンを提供しなければなりません。
- **アトミック(atomic、原子的)で組み合わせ可能**: 柔軟でスケーラブルなソリューションを作成するには、組み合わせて複雑なシステムを構築できる、小さく、再利用可能な部品が必要です。
- **既存のブロック開発ツールとの互換性**：API は、追加のツールや開発者の設定なしで、既存のブロック構築ツールと統合できなければなりません。

<!-- 
Apart from all these requirements, integrating **client-side navigation** on top of any solution should be easy and performant. Client-side navigation is the process of navigating between site pages without reloading the entire page, which is one of the most impressive user experiences demanded by web developers. For that reason, this functionality should be compatible with this new system.
 -->
これらすべての要件とは別に、任意のソリューション上での**クライアントサイドナビゲーション**との統合は、簡単で、実行可能でなければなりません。クライアントサイドナビゲーションは、ページ全体をリロードすることなくサイトのページ間を移動するプロセスで、ウェブ開発者が欲する、最も印象的なユーザー体験の一つです。そのため、この機能はこの新しいシステムと互換性がなければなりません。

<!-- 
## Why directives?
 -->
## なぜディレクティブなのか ?

<!-- 
Directives are the result of deep [research into different possibilities and approaches](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/iapi-faq/#what-approaches-have-been-considered-instead-of-using-directives). We’ve found that this design covers the requirements most effectively.
 -->
ディレクティブは、[さまざまな可能性とアプローチに関する深い研究](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/iapi-faq/#what-approaches-have-been-considered-instead-of-using-directives)の結果です。私たちは、このデザインが最も効果的に要件をカバーすることを発見しました。

<!-- 
### Block-first and PHP-friendly
 -->
### ブロックファースト、PHP フレンドリー
<!-- 
The API is designed for the world of blocks and takes WordPress history of being closely attached to web standards to heart.
 -->
この API はブロック世界のために設計され、ウェブの標準に密接に寄り添った WordPress の歴史を念頭に置いています。

<!-- 
As directives are HTML attributes, they are perfect for dynamic blocks and PHP.
 -->
ディレクティブは HTML の属性のため、ダイナミックブロックや PHP に最適です。

<!-- 
_Dynamic block example_
 -->
_ダイナミックブロックの例_

```html
<div
  data-wp-interactive='wpmovies'
  <?php echo wp_interactivity_data_wp_context( array( 'isOpen' => false ) ); ?>
  data-wp-watch="callbacks.logIsOpen"
>
  <button
    data-wp-on--click="actions.toggle"
    data-wp-bind--aria-expanded="context.isOpen"
    aria-controls="p-1"
  >
    Toggle
  </button>
 
  <p id="p-1" data-wp-bind--hidden="!context.isOpen">
    This element is now visible!
  </p>
</div>
```

<!-- 
As you can see, directives like [`data-wp-on--click`](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#wp-on) or [`data-wp-bind--hidden`](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#wp-bind) are added as custom HTML attributes. WordPress can process this HTML on the server, handling the directives’ logic and creating the appropriate markup.
 -->
上で見るように、[`data-wp-on--click`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/api-reference/#wp-on) や [`data-wp-bind--hidden`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/api-reference/#wp-bind) などのディレクティブは、カスタム HTML 属性として追加されます。WordPress はこの HTML をサーバー上で処理でき、ディレクティブのロジックを処理し、適切なマークアップを作成します。

<!-- 
### Backward compatible
 -->
### 後方互換性

<!-- 
As the Interactivity API works perfectly with server-side rendering, you can use all the WordPress APIs, including:
 -->
Interactivity API はサーバーサイドレンダリングと完全に動作するため、以下を含む WordPress のすべての API を使用できます。

<!-- 
- **WordPress filters and actions**: You can keep using WordPress hooks to modify the HTML or even to modify directives. Additionally, existing hooks will keep working as expected.
- **Core Translation API**: e.g. `__()` and `_e()`. You can use it to translate the text in the HTML (as you normally would) and even use those APIs on the server side of your directives. 
 -->
- **WordPress のフィルターとアクション**: WordPress フックを使い続けながら、HTML を変更し、あるいはディレクティブさえも変更できます。さらに、既存のフックも期待通りに動作します。
- **コアの翻訳 API**: 例えば `__()` や `_e()` です。HTML のテキストを翻訳したり、ディレクティブのサーバサイドでこれらのAPIを使用できます。

<!-- 
### Optional and gradual adoption
 -->
### オプション、かつ、段階的な適用

<!-- 
The Interactivity API pipeline promotes **progressive enhancement** by building on top of WordPress’s solid foundation and patterns.
 -->
Interactivity API パイプラインは、WordPress の強固な基盤とパターンの上に構築することで、**進歩的な拡張**を促進します。

<!-- 
For example, blocks with directives can coexist with other (interactive or non-interactive) blocks. This means that if there are other blocks on the page using other frameworks like jQuery, everything will work as expected.
 -->
例えば、ディレクティブを持つブロックは、他の (インタラクティブ、または非インタラクティブな) ブロックと共存できます。つまり、ページ上に jQuery のような他のフレームワークを使っているブロックがあっても、すべて期待通りに動作します。

<!-- 
<div class="callout callout-warning">
  Full-page client-side navigation with the Interactivity API will be an exception to this compatibility with other libraries rule. See <a href="#client-side-navigation">Client-side navigation</a> for more details.
</div>
 -->
> Interactivity API を使用したフルページのクライアントサイドナビゲーションは、この他のライブラリとの互換性ルールの例外です。詳細は後述の「クライアントサイドナビゲーション」を参照してください。

<!-- 
### Declarative and reactive
 -->
### 宣言型でリアクティブ

<!-- 
The Interactivity API follows an approach similar to other popular JS frameworks by separating state, actions, and callbacks and defining them declaratively. Why declaratively?
 -->
Interactivity API は、他の一般的な JS フレームワークと同様のアプローチをとっています。すなわち、ステート、アクション、コールバックを分離し、それらを宣言的に定義します。なぜ宣言型なのでしょうか ?

<!-- 
Declarative code describes **what** a program should do, while imperative code describes **how** the program should do it. Using a declarative approach, the UI automatically updates in response to changes in the underlying data. With an imperative approach, you must manually update the UI whenever the data changes. Compare the two code examples:
 -->
宣言型コードはプログラムが**何を**すべきかを記述し、一方、命令型コードはプログラムが**どのように**動くべきかを記述します。宣言型アプローチを使用すると、元となるデータの変更に応じて UI が自動的に更新されます。命令型アプローチでは、データが変更されるたびに手動で UI を更新しなければなりません。つのコード例を見比べてください。

<!-- 
_Imperative code_
 -->
_命令形コード_

```html
<button id="toggle-button">Toggle Element</button>
<p>This element is now visible!</p>
<script>
  const button = document.getElementById("toggle-button");
 
  button.addEventListener("click", () => {
    const element = document.getElementById("element");
    if(element) {
      element.remove();
    } else {
      const newElement = document.createElement("p");
      newElement.textContent = "This element is visible";
      document.body.appendChild(newElement);
    }
});
</script>
```

<!-- 
_Declarative code_
 -->
_宣言型コード_

<!-- 
This is the same use case shared above but serves as an example of declarative code using this new system. The JavaScript logic is defined in the `view.js` file of the block, and add the directives to the markup in the `render.php`.
 -->
これは上と同じユースケースですが、新しいシステムを使用した宣言型コードの例です。JavaScript のロジックはブロックの `view.js` ファイルで定義し、`render.php` のマークアップにディレクティブを追加します。

```js
// view.js file
 
import { store, getContext } from "@wordpress/interactivity";
 
store( 'wpmovies', {
  actions: {
    toggle: () => {
      const context = getContext();
      context.isOpen = !context.isOpen;
    },
  },
});
```

```php
<!-- Render.php file -->
 
<div
  data-wp-interactive='wpmovies'
  <?php echo wp_interactivity_data_wp_context( array( 'isOpen' => true ) ); ?>
>
  <button
    data-wp-on--click="actions.toggle"
    data-wp-bind--aria-expanded="context.isOpen"
    aria-controls="p-1"
  >
    Toggle
  </button>
 
  <p id="p-1" data-wp-bind--hidden="!context.isOpen">
    This element is now visible!
  </p>
</div>
```

<!-- 
Using imperative code may be easier when creating simple user experiences, but it becomes much more difficult as applications become more complex. The Interactivity API must cover all use cases, from the simplest to the most challenging. That’s why a declarative approach using directives better fits the Interactivity API.
 -->
単純なユーザー体験を作成する場合には命令型コードを使う方が簡単かもしれませんが、アプリケーションが複雑になるにつれて、それはかなり難しくなります。Interactivity API は、単純なものから腹圧なものまで、すべてのユースケースをカバーしなければなりません。そのため Interactivity API にはディレクティブを使用した宣言型アプローチの方が適しています。

<!-- 
### Performant
 -->
### パフォーマンス

<!-- 
The API has been designed to be as performant as possible:
 -->
API は可能な限りパフォーマンスが高くなるように設計されています。

<!-- 
- **The runtime code needed for the directives is just ~10 KB**, and it only needs to be loaded once for all the blocks.
- **The scripts will load without blocking the page rendering**.
 -->
- **ディレクティブに必要なランタイムコードはわずか10KB** で、すべてのブロックに対して一度だけロードされます。
- **スクリプトはページのレンダリングをブロックせずにロードされます**。

<!-- 
### Extensible
 -->
### 拡張性

<!-- 
Directives can be added, removed, or modified directly from the HTML. For example, users could use the [`render_block` filter](https://developer.wordpress.org/reference/hooks/render_block/) to modify the HTML and its behavior.
 -->
ディレクティブは HTML から直接追加、削除、修正できます。例えば、ユーザーは [`render_block` フィルタ](https://developer.wordpress.org/reference/hooks/render_block/) を使用して HTML とその動作を変更できます。

<!-- 
### Atomic and composable
 -->
### アトミックで組み合わせ可能

<!-- 
Each directive controls a small part of the DOM, and you can combine multiple directives to create rich, interactive user experiences.
 -->
それぞれのディレクティブは DOM の小さな部分を制御します。複数のディレクティブを組み合わせることで、リッチでインタラクティブなユーザー体験を作成できます。

<!-- 
### Compatible with the existing block development tooling
 -->
### 既存のブロック開発ツールとの互換性

<!-- 
The API works out of the box with standard block-building tools like [`wp-scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/). The only requirement for `wp-scripts` to properly build the [Script Modules](https://make.wordpress.org/core/2024/03/04/script-modules-in-6-5/) using the Interactivity API is the use of the --experimental-modules flag for both [`build`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#build) and [`start`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#start) scripts.
 -->
この API は [`wp-scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)のような標準のブロック構築ツールで、そのまますぐに動作します。`wp-scripts` が Interactivity API を使用して適切に[スクリプトモジュール](https://make.wordpress.org/core/2024/03/04/script-modules-in-6-5/)をビルドするための唯一の要件は、[`build`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#build) と [`start`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#start) スクリプトの両方での --experimental-modules フラグの使用です。

<!-- 
### Client-side navigation
 -->
### クライアントサイドナビゲーション

<!-- 
The Interactivity API comes with built-in primitives for adding client-side navigation to your site. This functionality is completely optional, but it opens the possibility to create these user experiences without having to opt out of the WordPress rendering system.
 -->
Interactivity API には、サイトにクライアントサイドナビゲーションを追加するプリミティブが組み込まれています。この機能は完全にオプションですが、WordPress のレンダリングシステムを外さずにこうしたユーザー体験を作成する可能性が開かれます。

<!-- 
<div class="callout callout-info">
  Full-page client-side navigation with the Interactivity API is still a work in progress (see <a href="https://github.com/WordPress/gutenberg/issues/60951">#60951</a>). Still, it is expected that all the interactive blocks will have to use the Interactivity API to enable full-page client-side navigation with the Interactivity API. Only in this case, the Interactivity API won't be fully compatible with other libraries (such as jQuery). 
</div>
 -->
> Interactivity API を使用したフルページのクライアントサイドナビゲーションはまだ作業中です (<a href="https://github.com/WordPress/gutenberg/issues/60951">#60951</a> 参照)。Interactivity API を使用してフルページのクライアントサイドナビゲーションを有効にするには、現段階ではまだ、すべてのインタラクティブブロックが Interactivity API の使用を必須とするだろうと予想されています。この場合のみ、Interactivity API は他のライブラリ (jQueryなど) との完全な互換性はありません。

<!-- 
It also pairs very well with the [View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) allowing developers to animate page transitions easily.
 -->
また、[View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)との相性もよく、開発者は簡単にページ遷移をアニメーションできます。

<!-- 
## Why a standard?
 -->
## なぜ標準 (standard) なのか ?

<!-- 
Blocks using the Interactivity API and interactive blocks using other approaches like jQuery can coexist, and everything will work as expected. However, the Interactivity API comes with some benefits for your interactive blocks:
 -->
Interactivity API を使用したブロックと、jQuery のような他のアプローチを使用したインタラクティブブロックは共存でき、すべてが期待通りに動作します。しかし Interactivity APIには、インタラクティブブロックにとっていくつかの利点があります。

<!-- 
- **Blocks can communicate with each other easily**. With a standard, this communication is handled by default. When different blocks use different approaches to frontend interactivity, inter-block communication becomes more complex and almost impossible when different developers create blocks.
- **Composability and compatibility**: You can combine interactive blocks, and nest them in structures with defined behaviors. Thanks to following the same standard, they are fully cross-compatible. If each block used a different approach to interactivity, they would likely break.
- **Fewer KBs will be sent to the browser**. If each plugin author uses a different JS framework, more code will be loaded in the front end. If all the blocks use the same one, the code is reused.
- If all the blocks on a page use this standard, **site-wide features like client-side navigation can be enabled**.
 -->
- **ブロック同士が簡単に通信できる**。標準では、このコミュニケーションはデフォルトで処理されます。フロントエンドのインタラクティビティに個々のブロックが異なるアプローチを使用すれば、ブロック間のコミュニケーションはより複雑になり、異なる開発者がブロックを作成する場合はほとんど不可能になります。
- **組み合わせ可能性と互換性**: インタラクティブブロックを組み合わせ、定義された振る舞いを持つ構造内に入れ子にできます。同じ標準に従うことで、完全に相互互換性があります。インタラクティブ性に対して個々のブロックが異なるアプローチを取れば、おそらく互換性は壊れるでしょう。
- **ブラウザに送信されるサイズは少なくなります**。個々のプラグインの作者が異なる JS フレームワークを使用すると、より多くのコードがフロントエンドに読み込まれます。すべてのブロックが同じものを使えば、コードは再利用されます。
- ページ上のすべてのブロックがこの標準を使用する場合、**クライアントサイドナビゲーションのようなサイト全体の機能を有効にできます**。

<!-- 
Additionally, with a standard, **WordPress can absorb the maximum amount of complexity from the developer** because it will handle most of what’s needed to create an interactive block.
 -->
さらに、標準は、インタラクティブブロックの作成に必要なほとんどを処理するため、**WordPress は開発者の複雑さを最大限に吸収できます**。

<!-- 
_Complexities absorbed by the standard_
 -->
_標準により吸収される複雑さ_

<!-- 
<img alt="Two columns table comparing some aspects with and without a standard. Without a standard, block developers have to take care of everything, while having a standard. Totally handled by the standard: Tooling, hydration, integrating it with WordPress, SSR of the interactive parts, inter-block communication, and frontend performance. Partially handled: Security, accessibility, and best practices. Developer responsibility: Block logic. In the without a standard column, everything is under the developer responsability." width=60% src="https://make.wordpress.org/core/files/2023/03/standard-graph.png">
 -->
<img width=60% src="https://make.wordpress.org/core/files/2023/03/standard-graph.png">

図: 標準がある場合とない場合の複数の要素を比較した2列の表。標準がない場合、ブロックの開発者はすべての面倒を見なければならないが、一方、標準がある場合、標準により完全に処理されるもの: ツール、ハイドレーション、WordPress との統合、インタラクティブ部分の SSR、ブロック間のコミュニケーション、フロントエンドのパフォーマンス。部分的に対応: セキュリティ、アクセシビリティ、ベストプラクティス。開発者の責任: ブロックのロジック。標準がない場合、すべてが開発者の責任となる。

<!-- 
With this absorption, less knowledge is required to create interactive blocks, and developers have fewer decisions to worry about.
 -->
この吸収により、インタラクティブブロックの作成に必要な知識は少なくなり、開発者が決断に悩む場面も少なくなります。

<!-- 
By adopting a standard, learning from other interactive blocks is simpler, and fosters collaboration and code reusability. As a result, the development process is leanier and friendlier to less experienced developers.
 -->
標準を採用することで、他のインタラクティブブロックからの学習が簡単になり、コラボレーションとコードの再利用が促進されます。結果、開発プロセスはよりスリムになり、経験の浅い開発者にも優しくなります。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/interactivity-api/iapi-about.md)