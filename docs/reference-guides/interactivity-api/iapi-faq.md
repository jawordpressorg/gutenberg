<!-- 
# Frequently Asked Questions
 -->
# よくある質問

<!-- 
## How does the Interactivity API work under the hood?
 -->
## Interactivity API はどのように動作しますか ?

<!-- 
Its three main components are:
 -->
3つのメインコンポーネントがあります。

<!-- 
- [Preact](https://preactjs.com/) combined with [Preact Signals](https://preactjs.com/guide/v10/signals/) for hydration, client logic, and client-side navigation.
- HTML Directives that can be understood by both the client and server.
- Server-side logic, handled by the [HTML_Tag_Processor](https://make.wordpress.org/core/2023/03/07/introducing-the-html-api-in-wordpress-6-2/).
 -->
- [Preact](https://preactjs.com/) と [Preact Signals](https://preactjs.com/guide/v10/signals/) の組み合わせ。ハイドレーション、クライアントロジック、クライアントサイドナビゲーションのため。
- HTML ディレクティブ。クライアントとサーバーの両方で理解できます。
- サーバーサイドロジック。[HTML_Tag_Processor](https://make.wordpress.org/core/2023/03/07/introducing-the-html-api-in-wordpress-6-2/) が処理します。

<!-- 
## Why Preact to build the directives system? Why not React or another JavaScript framework?
 -->
## なぜ Preact でディレクティブシステムを構築したのですか ? なぜ React や他の JavaScript フレームワークではないのですか ？

<!-- 
Preact has a number of advantages over React and other JavaScript frameworks like Vue, Svelte, or Solid in the context of the frontend (which is the focus of the Interactivity API):
 -->
Preact には、React や他の JavaScript フレームワーク、たとえば Vue、Svelte、Solid よりも、フロントエンドのコンテキストにおいて、すなわち Interactivity API のフォーカスエリアにおいて、多くの利点があります。

<!-- 
- It’s small: 8kB, including [hooks](https://preactjs.com/guide/v10/hooks/) and [signals](https://preactjs.com/blog/introducing-signals/).
- It gives us DOM diffing out of the box.
- It’s extremely extensible through their Option Hooks. They use that extensibility for the hooks (preact/hooks), compatibility with React (preact/compat) and their signals (@preact/signals). Basically, everything but the DOM diffing algorithm.
- Its core team has been great and very helpful. They are also interested in enhancing this “island-based” usage of Preact.
 -->
- 小さい: 8kB です。ここに[フック](https://preactjs.com/guide/v10/hooks/)と[シグナル](https://preactjs.com/blog/introducing-signals/)が含まれます。
- すぐに使える DOM の差分検出 (DOM diffing) があります。
- オプションフックによって非常に拡張性があります。フック (preact/hooks)、React との互換性 (preact/compat)、シグナル (@preact/signals) は、この拡張性を利用しています。基本的に、DOM 差分検出アルゴリズム以外のすべてで利用されています。
- コアチームが素晴らしく、とても親切です。彼らはまた、Preact のこの独立した使用法の強化に興味を持っています。

<!-- 
## Is Gutenberg going to move from React to Preact since the Interactivity API uses it?
 -->
## Interactivity API が Preact を使用することにより、Gutenberg も React から Preact に移行する予定ですか ?

<!-- 
No. At the moment, there are no plans to make that transition. The requirements and advantages of the editor, as a fully interactive application, are quite different. Preact does have a [`@preact/compat`](https://preactjs.com/guide/v10/switching-to-preact/) package that enables full compatibility with the React ecosystem, and many large web applications use it. However, using Preact in the block editor would not offer advantages like it does on the frontend in the Interactivity API.
 -->
いいえ。現時点では、移行の予定はありません。完全にインタラクティブなアプリケーションとしてのエディターの要件と利点とは完全に異なるためです。Preact には、React エコシステムと完全な互換性を実現する [`@preact/compat`](https://preactjs.com/guide/v10/switching-to-preact/)パッケージがあり、多くの大規模なウェブアプリケーションがこれを使用しています。しかし、ブロックエディターで Preact を使用しても、フロントエンドで Interactivity API を使用するような利点はありません。

<!-- 
## What approaches have been considered instead of using directives?
 -->
## ディレクティブを使う代わりに、どのようなアプローチが検討されましたか ?

<!-- 
Many alternative approaches were considered. Here’s a brief summary of some of them:
 -->
多くの代替アプローチが検討されました。そのうちのいくつかを簡単にまとめました。

<!-- 
### React and other JavaScript frameworks
 -->
### React やその他の JavaScript フレームワーク

<!-- 
React was considered first because Gutenberg developers are familiar with it. Other popular JS frameworks like Svelte, Vue.js, or Angular were also considered, but none of them (including React) are PHP-friendly or compatible with WordPress hooks or internationalization.
 -->
React は Gutenberg の開発者が親しんでいるため最初に検討されました。また、Svelte、Vue.js、Angular などの他の人気のある JS フレームワークも検討されました。しかし React を含めどれも PHP との親和性がなく、WordPress のフックや国際化とも互換性がありませんでした。

### Alpine.js

<!-- 
Alpine.js is a great framework, and it inspired a lot of functionality in the Interactivity API. However, it doesn’t support server-side rendering of its [directives](https://github.com/alpinejs/alpine/tree/d7f9d641f7a763c56c598d118bd189a406a22383/packages/docs/src/en/directives), and having a similar system tailored for WordPress blocks has many benefits.
 -->
Alpine.js は素晴らしいフレームワークで、Interactivity API は多くの機能をインスパイアされました。しかし、[ディレクティブ](https://github.com/alpinejs/alpine/tree/d7f9d641f7a763c56c598d118bd189a406a22383/packages/docs/src/en/directives)はサーバーサイドレンダリングをサポートしておらず、また WordPress がブロックの便宜のために作成したのと同種のシステムを持っていました。

<!-- 
Preact was chosen instead of Alpine.js for numerous reasons, such as its smaller size, its better performance (especially with the addition of [signals](https://preactjs.com/guide/v10/signals/)), the fact that custom directives are written with Preact’s declarative syntax and tooling (hooks, signals), it’s more battle-tested and has a larger community than Alpine.js. It’s also compatible with React (for sharing client-side rendered components from the Editor), and it provides to the Interactivity API the fastest DOM diffing algorithm out of the box, including UI state preservation.
 -->
Alpine.js の代わりに Preact が選ばれたのには多くの理由があります。サイズが小さいこと、パフォーマンスが良いこと (特に[シグナル](https://preactjs.com/guide/v10/signals/)の追加において)、Preact の宣言型構文とツール (フック、シグナル) でカスタムディレクティブを記述できること、Alpine.js よりもテストが行われていて、コミュニティが大きいことなど。また、React と互換性があり (エディターからクライアントサイドでレンダーされたコンポーネントを共有するため)、Interactivity API に、UI のステート保持を含む、最速の DOM 差分検出アルゴリズムを提供しています。

<!-- 
Furthermore, with Preact operating in the background, the Interactivity API manages "the final layer" so it can be better adapted to WordPress requirements. For example, JavaScript expressions are not allowed inside directives to avoid security risks and ensure compliance with strict security policies, and all WordPress directives are spec-compliant HTML attributes.
 -->
さらに、Preact がバックグラウンドで動作することで、Interactivity API は「最終レイヤー」を管理し、WordPress の要件によりよく適合できます。例えば、ディレクティブの内部での JavaScript 式の使用を禁止し、セキュリティリスクを回避し、厳格なセキュリティポリシーへの準拠を保証できます。さらに WordPress のすべてのディレクティブは仕様に準拠した HTML 属性です。

<!-- 
<div class="callout callout-info">
  Have a look at the conversation at <a href="https://github.com/WordPress/gutenberg/discussions/53022#discussioncomment-4696611">"Why Preact instead of Alpine?"</a> to learn more about this.
</div>
 -->
> 詳細については<a href="https://github.com/WordPress/gutenberg/discussions/53022#discussioncomment-4696611">「なぜ Alpine でなく Preact なのか ?」</a>の会話を参照してください。

<!-- 
### Plain JavaScript
 -->
### プレーンな JavaScript

<!-- 
See the answer below. 
 -->
以下の回答を参照してください。

<!-- 
### Template DSL
 -->
### テンプレート DSL

<!-- 
The possibility of creating a [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) for writing interactive templates was also researched. The code written in that Template DSL would then be compiled into both JavaScript and PHP. However, creating a production-grade Template compiler is complex and would be a large and risky investment of effort. This approach is still being considered for the future, with the directives serving as a compilation target.
 -->
インタラクティブなテンプレートを書くための [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) (Domain Specific Language ドメイン固有言語) を作る可能性も研究されました。テンプレート DSL で書かれたコードは JavaScript と PHPの両方にコンパイルされる想定です。しかし、製品レベルの品質のテンプレートコンパイラの作成は複雑で、努力の大規模でリスクの高い投資となります。ディレクティブをコンパイルターゲットとして使用するこのアプローチは、まだ将来のために検討されています。

<!-- 
## Why should I, as a block developer, use the Interactivity API rather than React?
 -->
## ブロック開発者として、なぜ React ではなく Interactivity API を使うべきなのでしょうか ?

<!-- 
Using React on the frontend doesn’t work smoothly with server rendering in PHP. Every approach that uses React to render blocks has to load content using client-side JavaScript. If you only render your blocks on the client, it typically results in a poor user experience because the user stares at empty placeholders and spinners while waiting for content to load. 
 -->
フロントエンドでの React の使用は、PHP 内でのサーバーレンダリングではスムーズに動作しません。React を使用してブロックをレンダーするすべてのアプローチでは、クライアントサイドの JavaScript を使用してコンテンツをロードしなければなりません。クライアントサイドでのみブロックをレンダーすると、一般にユーザー体験は悪くなります。なぜならコンテンツがロードされるのを待つ間、ユーザーは空のプレースホルダーやスピナーを見つめることになるためです。

<!-- 
Using JS in PHP extensions (like v8js) is also possible, but unfortunately PHP extensions are not backward compatible and can only be used when there's a PHP fallback.
 -->
PHP の拡張機能内で JS を使うことも可能ですが (v8js など)、残念ながら PHP の拡張機能には後方互換性がなく、PHP のフォールバックがある場合にしか使えません。

<!-- 
Now, it’s possible to server-render a block in PHP **and** use React to render the same block on the frontend. However, this results in a poor developer experience because the logic has to be duplicated across the PHP and React parts. Not only that, but you have now exposed yourself to subtle bugs caused by WordPress hooks!
 -->
現在も、PHP 内でブロックをサーバーサイドレンダーし、**かつ**、React を使用して同じブロックをフロントエンドでレンダーすることは可能です。しかし、これは貧しい開発者体験になります。なぜなら、PHP 部分と React 部分の両方で、同じロジックを複製しなければならないためです。それだけでなく、WordPress のフックに起因する微妙なバグにさらされることになります !

<!-- 
Imagine installing a third-party plugin with a hook (filter) that modifies the server-rendered HTML. Let’s say this filter adds a single CSS class to your block’s HTML. That CSS class will be present in the server-rendered markup. On the frontend, your block will render again in React, but now the content will not include that CSS class because there is no way to apply WordPress hooks to React-rendered content!
 -->
ここでサードパーティプラグインのインストールを考えます。プラグインは、サーバーがレンダーした HTML を変更するフック (フィルター) を持ち、フィルターはブロックの HTML に1つの CSS クラスを追加するとします。この CSS クラスはサーバーでレンダーされたマークアップ内に存在します。フロントエンドでは、ブロックは React で再びレンダーされますが、今度はコンテンツにその CSS クラスは含まれません。React でレンダーされたコンテンツに WordPress フックを適用する方法がないからです !

<!-- 
On the other hand, the Interactivity API is designed to work perfectly with WordPress hooks because directives enhance the server-rendered HTML with behaviors. This also means it works out of the box with WordPress backend APIs like i18n.
 -->
一方、Interactivity API は WordPress のフックと完璧に連動するように設計されています。これはまた、i18n のような WordPress のバックエンド API とすぐに連携できることを意味します。

<!-- 
To summarize, using the Interactivity API rather than just using React comes with these benefits:
 -->
まとめると、React を使うよりも Interactivity API を使用した方が、以下のようなメリットがあります。

<!-- 
- If you use React, your interactive blocks must generate the same markup on the client as they do on the server in PHP. Using the Interactivity API, there is no such requirement as directives are added to server-rendered HTML.
- The Interactivity API is PHP-friendlier. It works out of the box with WordPress hooks or other server functionalities such as internationalization. For example, with React, you can’t know which hooks are applied on the server, and their modifications would be overwritten after hydration.
- All the benefits of [using a standard](/docs/reference-guides/interactivity-api/iapi-about.md#why-a-standard).
 -->
- React を使用する場合、インタラクティブブロックは、サーバー上で PHP で作成したマークアップと同じマークアップをクライアント上で生成しなければなりません。Interactivity API を使用すると、サーバーでレンダーされた HTML にはディレクティブが追加されるため、そのような要件はありません。
- Interactivity API は PHP と親和性があります。WordPress のフックや、国際化のようなサーバーの機能ともそのまま、すぐに動作します。例えば、React であれば、サーバー上でどのフックが適用されるかわかりませんし、その修正はハイドレーションの後に上書きされます。
- [標準 (standard) を使用する](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/iapi-about/#why-a-standard)ことのすべてのメリットがあります。

<!-- 
## What are the benefits of Interactivity API over just using jQuery or vanilla JavaScript?
 -->
## jQuery や バニラ JavaScript を使うよりも、Interactivity API を使う利点は何ですか ?

<!-- 
The main difference is that the Interactivity API is **declarative and reactive**, so writing and maintaining complex interactive experiences should become way easier. Additionally, it has been **specially designed to work with blocks**, providing a standard that comes with the benefits mentioned above, like inter-block communication, compatibility, or site-wide features such as client-side navigation.
 -->
主な違いは、Interactivity APIが**宣言的でリアクティブ**であることです。このため、複雑なインタラクティブ体験の作成や維持が簡単になります。さらに、**ブロックと動作するように特別に設計**され、上で述べた機能、たとえばブロック間通信、互換性、クライアントサイドナビゲーションのようなサイト全体の機能を実現する標準 (standard) が提供されます。

<!-- 
Finally, comparing it with jQuery, **the Interactivity API runtime is ~10kb**, which is much more lightweight. Actually, there is an ongoing effort to remove heavy frameworks like jQuery across the WordPress ecosystem, and this would help in this regard.
 -->
最後に、jQuery と比較すると、**Interactivity APIのランタイムは、およそ10kb** で、格段に軽量です。実際、WordPress のエコシステム全体で jQuery のような重いフレームワークを削除する取り組みが進行中で、この点でも流れに沿います。

<!-- 
## Do I need to know React, PHP, and this Interactivity API?
 -->
## React、PHP、そしてこの Interactivity API の知識が必要ですか ?

<!-- 
If you want to add frontend interactivity to your blocks using this API, the short answer is yes. If your block is not interactive, the block creation workflow will remain exactly the same.
 -->
この API を使用してブロックにフロントエンドのインタラクティブ性を追加したければ、単純に「はい」です。もしブロックがインタラクティブでなければ、ブロックを作成するワークフローはこれまでとまったく同じままです。

<!-- 
The Interactivity API introduces a new standard method to facilitate the integration of interactive behaviors into the frontend part of WordPress. This means that you still need to use React to handle the editor part of your blocks.
 -->
Interactivity API は WordPress のフロントエンド部分に、容易にインタラクティブな動作を統合する、新しい標準の方法を導入します。このことは、ブロックのエディター部分の処理には、引き続き React を使用する必要があることを意味します。

<!-- 
On the other hand, if you want to create an interactive block, with the Interactivity API you don’t have to deal with complex topics like tooling, integration with WordPress, inter-block communication, or the server-side rendering of the interactive parts.
 -->
一方、インタラクティブなブロックの作成に Interactivity API を使用すれば、複雑なトピック、たとえばツールの作成、WordPress との統合、ブロック間のコミュニケーション、インタラクティブ部分のサーバーサイドレンダリングなどに対処する必要はありません。

<!-- 
## Can the Interactivity API be used beyond a block?
 -->
## Interactivity API はブロックの外でも使えますか ?

<!-- 
Absolutely, yes, it is not limited to blocks. You'll see a lot of mentions of how the Interactivity API provides a standard for creating interactive blocks, but that's only because that's the most common use case. More generally speaking, the Interactivity API standard can be used to add "interactive behaviors" to the front end of any part of WordPress.
 -->
もちろん、「はい」です。ブロックに限りません。Interactivity API はインタラクティブブロックを作成するための標準を提供する、という記述をよく見かけますが、それはそれが最も一般的な使用例だからです。もっと汎化して言うと、Interactivity API 標準はWordPress のあらゆる部分のフロントエンドに「インタラクティブな動作」を追加するために使用できます。

<!-- 
See the [`wp_interactivity_process_directives` function](https://developer.wordpress.org/reference/functions/wp_interactivity_process_directives/) for details on using the Interactivity API outside of blocks with arbitrary HTML.
 -->
ブロックの外側の任意の HTML での Interactivity API の使用に関する詳細については、[`wp_interactivity_process_directives` 関数](https://developer.wordpress.org/reference/functions/wp_interactivity_process_directives/)を参照してください。

<!-- 
## Does this mean I must migrate all my interactive blocks to use this API?
 -->
## これは、すべてのインタラクティブブロックをこの API に移行しなければならないということですか ?

<!-- 
No. Blocks outside the Interactivity API can coexist with blocks using it. However, as explained above, keep in mind that there are some benefits for blocks that use the API:
 -->
いいえ。Interactivity API を使用しないブロックは、Interactivity API を使用するブロックと共存できます。ただし、上で説明したように、API を使用するブロックにはいくつかの利点があります。

<!-- 
- **Blocks can communicate with each other easily**. With a standard, this communication is handled by default. When different blocks use different approaches to frontend interactivity, inter-block communication becomes more complex and gets almost impossible when separate developers create blocks.
- **Composability and compatibility**: You can combine interactive blocks, nest them in structures with defined behaviors, and, thanks to following the same standard, they are fully cross-compatible. If each block were to use a different approach to interactivity, they would likely break.
- **Fewer KBs will be sent to the browser**. If each plugin author uses a different JS framework, more code will be loaded in the frontend. If all the blocks use the same one, the code is reused.
- If all the blocks on a page use this standard, site-wide features like client-side navigation can be enabled.
 -->
- **ブロック同士が簡単に通信できる**。標準では、このコミュニケーションはデフォルトで処理されます。フロントエンドのインタラクティビティに個々のブロックが異なるアプローチを使用すれば、ブロック間のコミュニケーションはより複雑になり、異なる開発者がブロックを作成する場合はほとんど不可能になります。
- **組み合わせ可能性と互換性**: インタラクティブブロックを組み合わせ、定義された振る舞いを持つ構造内に入れ子にできます。同じ標準に従うことで、完全に相互互換性があります。インタラクティブ性に対して個々のブロックが異なるアプローチを取れば、おそらく互換性は壊れるでしょう。
- **ブラウザに送信されるサイズは少なくなります**。個々のプラグインの作者が異なる JS フレームワークを使用すると、より多くのコードがフロントエンドに読み込まれます。すべてのブロックが同じものを使えば、コードは再利用されます。
- ページ上のすべてのブロックがこの標準を使用する場合、クライアントサイドナビゲーションのようなサイト全体の機能を有効にできます。

<!-- 
## What are the performance implications of using this API? Is it worth loading the Interactivity API for very simple use cases?
 -->
## この API の使用によるパフォーマンスへの影響は ? 非常にシンプルなユースケースで Interactivity API をロードする価値はありますか ?

<!-- 
The API has been designed with performance in mind, so it shouldn’t be a problem:
 -->
この API はパフォーマンスを考慮して設計されているため、問題はないはずです。

<!-- 
- **The runtime code needed for the directives is just ~10 KB**, and it only needs to be loaded once for all the blocks.
- **All the script modules that belong to the Interactivity API (including the `view.js` files) will load without blocking the page rendering.**
- There are [ongoing explorations](https://github.com/WordPress/gutenberg/discussions/52723) about the possibility of **delaying the scripts loading once the block is in the viewport**. This way, the initial load would be optimized without affecting the user experience.
 -->
- **ディレクティブに必要なランタイムコードはわずか10KB** で、すべてのブロックに対して一度だけロードされます。
- **Interactivity APIに属するすべてのスクリプトモジュール (`view.js` ファイルを含む) は、ページのレンダリングをブロックすることなくロードされます**。
- **ブロックがビューポート内にある場合、スクリプトのロードを遅延させる**可能性について、[現在、調査が進行中](https://github.com/WordPress/gutenberg/discussions/52723)です。実現すると、ユーザー体験に影響を与えることなく、最初の読み込みを最適化できます。

<!-- 
## Does it work with the Core Translation API?
 -->
## コアの翻訳 API と動作しますか ?

<!-- 
As the Interactivity API works perfectly with server-side rendering, you can use all the WordPress APIs including [`__()`](https://developer.wordpress.org/reference/functions/__/) and [`_e()`](https://developer.wordpress.org/reference/functions/_e/). You can use it to translate the text in the HTML (as you normally would) and even use it inside the store when [using `wp_interactivity_state()` on the server side](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#setting-the-store). It might look something like this:
 -->
Interactivity API はサーバーサイドレンダリングと完璧にに動作するため、[`__()`](https://developer.wordpress.org/reference/functions/__/) や [`_e()`](https://developer.wordpress.org/reference/functions/_e/) を含むすべてのWordPress API を使用できます。通常のように HTML 内のテキストを翻訳したり、[サーバーサイドで `wp_interactivity_state()` を使用する](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#setting-the-store)ときにストア内で使用できます。以下のようになります。

```php
// render.php
wp_interactivity_state( 'favoriteMovies', array(
      "1" => array(
        "id" => "123-abc",
        "movieName" => __("someMovieName", "textdomain")
      ),
) );
```

<!-- 
A translation API compatible with script modules (needed for the Interactivity API) is currently being worked on. Check [#60234](https://core.trac.wordpress.org/ticket/60234) to follow the progress on this work.
 -->
スクリプトモジュールと互換性のある 翻訳 API (Interactivity APIに必要) は現在、作業中です。この作業の進捗については、[#60234](https://core.trac.wordpress.org/ticket/60234)をチェックしてください。

<!-- 
## I’m concerned about XSS; can JavaScript be injected into directives?
 -->
## XSS が心配です。JavaScript をディレクティブに注入できますか ?

<!-- 
No. The Interactivity API only allows for [References](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#values-of-directives-are-references-to-store-properties) to be passed as values to the directives. This way, there is no need to eval() full JavaScript expressions, so it’s not possible to perform XSS attacks.
 -->
いいえ。Interactivity API では、ディレクティブの値として[参照](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/api-reference/#values-of-directives-are-references-to-store-properties)を渡すことしかできません。この方法では、JavaScript の完全な式を eval() する必要がないので、XSS 攻撃は実行できません。

<!-- 
## Does this work with Custom Security Policies?
 -->
## カスタムセキュリティポリシーで動作しますか？

<!-- 
Yes. The Interactivity API does not use [`eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) or the [`Function()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) constructor, so it doesn’t violate the [`unsafe-eval`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe_keyword_values) content security policy. It is also designed to work with any [custom content security policy](https://developer.wordpress.org/apis/security/).
 -->
はい。Interactivity API は[`eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) や [`Function()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) コンストラクタを使用しないため、[`unsafe-eval`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe_keyword_values) コンテンツセキュリティポリシーに違反しません。また、どのような[カスタムコンテンツセキュリティポリシー](https://developer.wordpress.org/apis/security/)でも動作するように設計されています。

<!-- 
## Can you use directives to make AJAX/REST-API requests?
 -->
## ディレクティブを使用して AJAX / REST-API リクエストを作成できますか ?

<!-- 
Sure. Actions and callbacks called by directives can do anything a JavaScript function can, including making API requests.
 -->
もちろんです。ディレクティブによって呼び出されるアクションやコールバックは、API リクエストの作成を含め、JavaScript の関数ができることは何でもできます。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/interactivity-api/iapi-faq.md)
