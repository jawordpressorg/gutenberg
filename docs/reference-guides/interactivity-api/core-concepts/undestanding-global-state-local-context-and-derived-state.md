<!-- 
# Understanding global state, local context and derived state
 -->
# グローバルステート、ローカルコンテキスト、派生ステートの理解

<!-- 
The Interactivity API offers a powerful framework for creating interactive blocks. To make the most of its capabilities, it's crucial to understand when to use global state, local context, or derived state. This guide will clarify these concepts and provide practical examples to help you decide when to use each one.
 -->
Interactivity API は、インタラクティブブロックを作成する強力なフレームワークを提供します。この機能を最大限、活用するにはグローバルステート、ローカルコンテキスト、派生ステートを使用するタイミングの理解が重要です。このガイドではこれらの概念を明らかにし、それぞれを使用するタイミングを決める際に役立つ実践的な例を提供します。

<!-- 
Let's start with a brief definition of global state, local context and derived state.
 -->
まず、グローバルステート、ローカルコンテキスト、派生ステートの簡単な定義から始めましょう。

<!-- 
-   **Global state:** Global data that can be accessed and modified by any interactive block on the page, allowing different parts of your interactive blocks to stay in sync.
-   **Local context:** Local data defined within a specific element in the HTML structure, accessible only to that element and its children, providing independent state for individual blocks.
-   **Derived state:** Computed values based on global state or local context, dynamically calculated on-demand to ensure consistent data representation without storing redundant data.
 -->
- **グローバルステート:** ページ上の任意のインタラクティブブロックからアクセス、変更可能なグローバルデータ。インラクティブブロックの異なるパーツの同期を維持できます。
- **ローカルコンテキスト:** HTML 構造内の特定の要素内で定義されたローカルデータ。その要素と子要素のみアクセス可能で、それぞれのブロックが独立したステートを持ちます。
- **派生ステート:** グローバルステートやローカルコンテキストに基づいて計算される値。動的に必要に応じて計算され、冗長なデータを保存することなく一貫したデータ表現が保証されます。

<!-- 
Let's now dive into each of these concepts to study them in more detail and provide some examples.
 -->
それではそれぞれのコンセプトをより詳しく学習し、いくつかの例を見てみましょう。

<!-- 
## Global state
 -->
## グローバルステート

<!-- 
**Global state** in the Interactivity API refers to global data that can be accessed and modified by any interactive block on the page. It serves as a shared information hub, allowing different parts of your blocks to communicate and stay in sync. Global state is the ideal mechanism for exchanging information between interactive blocks, regardless of their position in the DOM tree.
 -->
Interactivity API における **グローバルステート** とは、ページ上の任意のインタラクティブブロックからアクセス、変更可能なグローバルデータを指します。共有された情報ハブとして機能し、ブロックの異なるパーツが通信し、同期を維持できます。グローバルステートは、DOM ツリー内の位置に関係なく、インタラクティブブロック間で情報を交換する理想的なメカニズムです。

<!-- 
You should use global state when:
 -->
以下のような場面ではグローバルステートを使用してください。

<!-- 
-   You need to share data between multiple interactive blocks that are not directly related in the DOM hierarchy.
-   You want to maintain a single source of truth for certain data across all your interactive blocks.
-   You're dealing with data that affects multiple parts of your UI simultaneously.
-   You want to implement features that are global for the page.
 -->
- DOM 階層内で直接関連していない複数のインタラクティブブロック間でデータを共有する必要がある。
- すべてのインタラクティブブロックを越えて、特定のデータにおける、単一の真のソース (single source of truth) を維持したい。
- UI の複数の部分に同時に影響するデータを扱っている。
- ページに対してグローバルな機能を実装したい。

<!-- 
### Working with global state
 -->
### グローバルステートの操作

<!-- 
-   **Initializing the global state**
 -->
#### グローバルステートの初期化

<!-- 
    Typically, the initial global state values should be defined on the server using the `wp_interactivity_state` function:
 -->
通常、グローバルステートの初期値は `wp_interactivity_state` 関数を使用してサーバー上で定義します。

```php
// グローバルステートの初期値を設定
wp_interactivity_state( 'myPlugin', array(
  'isDarkTheme' => true,
  'show'        => false,
  'helloText'   => __( 'world' ),
));
```
<!-- 
    These initial global state values will be used during the rendering of the page in PHP to populate the HTML markup that is sent to the browser.
 -->
このグローバルステートの初期値は、PHP 内でページのレンダリングに使用され、HTML マークアップとなり、ブラウザに送信されます。
<!-- 
    -   HTML markup written in the PHP file by the developer:
 -->
-   開発者が PHP ファイル内に記述した HTML マークアップ:

```html
<div
  data-wp-interactive="myPlugin"
  data-wp-class--is-dark-theme="state.isDarkTheme"
  class="my-plugin"
>
  <div data-wp-bind--hidden="!state.show">
    Hello <span data-wp-text="state.helloText"></span>
  </div>
  <button data-wp-on-async--click="actions.toggle">Toggle</button>
</div>
```
<!-- 
    -   HTML markup after the directives have been processed and it is ready to be sent to the browser:
 -->
-   ディレクティブが処理され、ブラウザに送る準備ができた後の HTML マークアップ:

```html
<div
  data-wp-interactive="myPlugin"
  data-wp-class--is-dark-theme="state.isDarkTheme"
  class="my-plugin is-dark-theme"
>
  <div hidden data-wp-bind--hidden="!state.show">
    Hello <span data-wp-text="state.helloText">world</span>
  </div>
  <button data-wp-on-async--click="actions.toggle">Toggle</button>
</div>
```

<!-- 
    _Please, visit [the Server-side Rendering guide](/docs/reference-guides/interactivity-api/core-concepts/server-side-rendering.md) to learn more about how directives are processed on the server._
 -->
_ディレクティブがサーバ上でどのように処理されるかについては、[サーバサイドレンダリングガイド](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/core-concepts/server-side-rendering/)を参照してください。_

<!-- 
    In cases where the global state is not used during the rendering of the page in PHP, it can also be defined directly on the client.
 -->
PHP 内でのページのレンダリング中にグローバルステートを使用しない場合は、直接クライアントでも定義できます。

```js
const { state } = store( 'myPlugin', {
  state: {
    isLoading: false,
  },
  actions: {
    *loadSomething() {
      state.isLoading = true;
      // ...
    },
  },
} );
```

<!-- 
    _Please note that, although this works, in general it is a good practice to define all the global state on the server._
 -->
_注意: これは正しく動作しますが、一般的なベストプラクティスとしてはすべてのグローバルステートをサーバー上で定義してください。_

<!-- 
-   **Accessing the global state**
 -->
#### グローバルステートへのアクセス

<!-- 
    In the HTML markup, you can access the global state values directly by referencing `state` in the directive attribute values:
 -->
HTML マークアップ内のディレクティブ属性の値では `state` を参照することでグローバルステートの値に直接アクセスできます。

```html
<div data-wp-bind--hidden="!state.show">
  <span data-wp-text="state.helloText"></span>
</div>
```

<!-- 
    In JavaScript, the `store` function from the package at `@wordpress/interactivity` works both as a setter and a getter, returning the store of the selected namespace.
 -->
JavaScript では、`@wordpress/interactivity` パッケージの `store` 関数が設定、取得の両方で機能し、選択されたネームスペースのストアを返します。

<!-- 
    To access the global state in your actions and callbacks, you can use the `state` property of the object returned by the `store` function:
 -->
アクションやコールバックでグローバルステートにアクセスするには、 `store` 関数が返すオブジェクトの `state` プロパティを使用します。

```js
const myPluginStore = store( 'myPlugin' );

myPluginStore.state; // これは名前空間 myPlugin のストア
```

<!-- 
    You can also destructure the object returned by `store`:
 -->
`store` が返すオブジェクトは分割も可能です。

```js
const { state } = store( 'myPlugin' );
```

<!-- 
    And you can do the same even if you are defining the store at that moment, which is the most common scenario:
 -->
そして同じことは同時にストアを定義しながら行うこともでき、これが最も一般的な使用方法です。

```js
const { state } = store( 'myPlugin', {
  state: {
    // ...
  },
  actions: {
    toggle() {
      state.show = ! state.show;
    },
  },
} );
```
<!-- 
    The global state initialized on the server using the `wp_interactivity_state` function is also included in that object because it is automatically serialized from the server to the client:
 -->
`wp_interactivity_state` 関数を使用してサーバー上で初期化されたグローバルステートも、サーバーからクライアントに自動的にシリアライズされるため、オブジェクトに含まれます。

```php
wp_interactivity_state( 'myPlugin', array(
  'someValue' => 1,
));
```

```js
const { state } = store( 'myPlugin', {
  state: {
    otherValue: 2,
  },
  actions: {
    readGlobalState() {
      state.someValue; // これは存在して、初期値は1
      state.otherValue; // これも存在して、初期値は2
    },
  },
} );
```
<!-- 
    Lastly, all calls to the `store` function with the same namespace are merged together:
 -->
最後に、同じ名前空間を持つすべての `store` 関数呼び出しはマージされます。

```js
store( 'myPlugin', { state: { someValue: 1 } } );

store( 'myPlugin', { state: { otherValue: 2 } } );

/* すべての `store` 呼び出しは同じオブジェクトへの安定した参照 (stable reference) を返す。 このため、
  * どの呼び出しからでも `state` への参照を取得できる */
const { state } = store( 'myPlugin' );

store( 'myPlugin', {
  actions: {
    readValues() {
      state.someValue; // 存在して、初期値は1
      state.otherValue; // 存在して、初期値は2
    },
  },
} );
```
<!-- 
-   **Updating the global state**
 -->
#### グローバルステートの更新
<!-- 
    To update the global state, all you need to do is mutate the `state` object once you have obtained it from the `store` function:
 -->
グローバルステートを更新するために必要な作業は、一度 `store` 関数から取得した `state` オブジェクトを変更 (mutate) するだけです。

```js
const { state } = store( 'myPlugin', {
  actions: {
    updateValues() {
      state.someValue = 3;
      state.otherValue = 4;
    },
  },
} );
```
<!-- 
    Changes to the global state will automatically trigger updates in any directives that depend on the modified values.
 -->
グローバルステートを変更すると、変更した値に依存する任意のディレクティブ内の変更が自動的にトリガーされます。

<!-- 
    _Please, visit [The Reactive and Declarative mindset](/docs/reference-guides/interactivity-api/core-concepts/the-reactive-and-declarative-mindset.md) guide to learn more about how reactivity works in the Interactivity API._
 -->
_Interactivity API 内でリアクティブがどのように動作するかの詳細については「[リアクティブと宣言型の考え方](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/core-concepts/the-reactive-and-declarative-mindset/)」を参照してください。_

<!-- 
### Example: Two interactive blocks using global state to communicate
 -->
### 例: グローバルステートを使用して通信する2つのインタラクティブブロック

<!-- 
In this example, there are two independent interactive blocks. One displays a counter, and the other a button to increment that counter. These blocks can be positioned anywhere on the page, regardless of the HTML structure. In other words, one does not need to be an inner block of the other.
 -->
この例には2つの独立したインタラクティブブロックがあります。1つはカウンターを表示し、もう1つにはそのカウンターを増分するボタンがあります。この2つのブロックは、HTML の構造に関係なくページのどこにでも配置できます。言い換えれば、一方が他方の内部ブロックである必要はありません。

<!-- 
-   **Counter Block**
 -->
#### カウンターブロック

```php
<?php
wp_interactivity_state( 'myCounterPlugin', array(
  'counter' => 0
));
?>

<div
  data-wp-interactive="myCounterPlugin"
  <?php echo get_block_wrapper_attributes(); ?>
>
  Counter: <span data-wp-text="state.counter"></span>
</div>
```
<!-- 
-   **Increment Block**
 -->
#### インクリメントブロック

```php
<div
  data-wp-interactive="myCounterPlugin"
  <?php echo get_block_wrapper_attributes(); ?>
>
  <button data-wp-on-async--click="actions.increment">
    Increment
  </button>
</div>
```

```js
const { state } = store( 'myCounterPlugin', {
  actions: {
    increment() {
      state.counter += 1;
    },
  },
} );
```

<!-- 
In this example:
 -->
この例では

<!-- 
1. The global state is initialized on the server using `wp_interactivity_state`, setting an initial `counter` of 0.
2. The Counter Block displays the current counter using `data-wp-text="state.counter"`, which reads from the global state.
3. The Increment Block contains a button that triggers the `increment` action when clicked, using `data-wp-on-async--click="actions.increment"`.
4. In JavaScript, the `increment` action directly modifies the global state by incrementing `state.counter`.
 -->
1. グローバルステートは `wp_interactivity_state` を使用してサーバー上で初期化され、初期値として `counter` を 0 に設定します。
2. カウンターブロックは、`data-wp-text="state.counter"` を使用して現在のカウンターを、グローバルステートから読み取り、表示します。
3. インクリメントブロックにはクリックすると `increment` アクションをトリガーするボタンがあり、これには `data-wp-on-async--click="actions.increment"` を使用します。
4. JavaScript 内で `increment` アクションは `state.counter` を増分することで、グローバルステートを直接変更します。

<!-- 
Both blocks are independent and can be placed anywhere on the page. They don't need to be nested or directly related in the DOM structure. Multiple instances of these interactive blocks can be added to the page, and they will all share and update the same global counter value.
 -->
2つのブロックは独立していてページのどこにでも配置できます。互いを入れ子にしたり、DOM 構造で直接関連づける必要はありません。これらのインタラクティブブロックの複数のインスタンスをページに追加でき、すべて同じグローバルなカウンターの値を共有し、更新します。

<!-- 
## Local context
 -->
## ローカルコンテキスト

<!-- 
**Local context** in the Interactivity API refers to local data defined within a specific element in the HTML structure. Unlike global state, local context is only accessible to the element where it's defined and its child elements.
 -->
Interactivity API における **ローカルコンテキスト** とは、HTML 構造内の特定の要素内で定義されたローカルデータを指します。グローバルステートとは異なりローカルコンテキストは、そのローカルコンテキストを定義した要素とその子要素からのみアクセスできます。

<!-- 
The local context is particularly useful when you need independent state for individual interactive blocks, ensuring that each instance of a block can maintain its own unique data without interfering with others.
 -->
ローカルコンテキストは、個々のインタラクティブブロックで、独立したステートが必要な場合に特に有用です。ブロックの各インスタンスは、他のインスタンスと干渉しない自身のデータを維持できます。

<!-- 
You should use local context when:
 -->
以下のような場面ではローカルコンテキストを使用してください。

<!-- 
-   You need to maintain separate state for multiple instances of the same interactive block.
-   You want to encapsulate data that's only relevant to a specific interactive block and its children.
-   You need to implement features that are isolated to a specific part of your UI.
 -->
- あるインタラクティブブロックの複数のインスタンスに対して、それぞれ個別のステートを保持する必要がある。
- あるインタラクティブブロックとその子にのみ関連するデータをカプセル化したい。
- UI の特定の部分に分離された機能を実装する必要がある。

<!-- 
### Working with local context
 -->
### ローカルコンテキストの操作

<!-- 
-   **Initializing the local context**
 -->
#### ローカルコンテキストの初期化

<!-- 
    The local context is initialized directly within the HTML structure using the `data-wp-context` directive. This directive accepts a JSON string that defines the initial values for that piece of context.
 -->
ローカルコンテキストは `data-wp-context` ディレクティブを使用して HTML 構造の中で直接、初期化します。このディレクティブはコンテキストの初期値を定義する JSON 文字列を受け付けます。

```html
<div data-wp-context='{ "counter": 0 }'>
  <!-- 子要素は `context.counter` にアクセスできる -->
</div>
```

<!-- 
    You can also initialize the local context on the server using the `wp_interactivity_data_wp_context` PHP helper, which ensures proper escaping and formatting of the stringified values:
 -->
またローカルコンテキストは `wp_interactivity_data_wp_context` PHP ヘルパーを使用して、サーバー上でも初期化できます。このヘルパーは文字列化した値の適切なエスケープとフォーマットを保証します。

```php
<?php
$context = array( 'counter' => 0 );
?>

<div <?php echo wp_interactivity_data_wp_context( $context ); ?>>
  <!-- 子要素は `context.counter` にアクセスできる -->
</div>
```

<!-- 
-   **Accessing the local context**
 -->
#### ローカルコンテキストへのアクセス

<!-- 
    In the HTML markup, you can access the local context values directly by referencing `context` in the directive values:
 -->
HTML のマークアップ内では、ディレクティブの値で `context` を参照することで、ローカルコンテキストの値に直接アクセスできます。

```html
<div data-wp-bind--hidden="!context.isOpen">
  <span data-wp-text="context.counter"></span>
</div>
```
<!-- 
    In JavaScript, you can access the local context values using the `getContext` function:
 -->
JavaScript では、`getContext`関数を使用してローカルコンテキストの値にアクセスできます。

```js
store( 'myPlugin', {
  actions: {
    sendAnalyticsEvent() {
      const { counter } = getContext();
      myAnalyticsLibrary.sendEvent( 'updated counter', counter );
    },
  },
  callbacks: {
    logCounter() {
      const { counter } = getContext();
      console.log( `Current counter: ${ counter }` );
    },
  },
} );
```
<!-- 
    The `getContext` function returns the local context of the element that triggered the action/callback execution.
 -->
`getContext` 関数はアクションやコールバックの実行をトリガーした要素のローカルコンテキストを返します。

<!-- 
-   **Updating the local context**
 -->
#### ローカルコンテキストの更新

<!-- 
    To update the local context values in JavaScript, you can modify the object returned by `getContext`:
 -->
JavaScript 内でローカルコンテキストの値を更新するには、`getContext` が返すオブジェクトを変更します。

```js
store( 'myPlugin', {
  actions: {
    increment() {
      const context = getContext();
      context.counter += 1;
    },
    updateName( event ) {
      const context = getContext();
      context.name = event.target.value;
    },
  },
} );
```
<!-- 
    Changes to the local context will automatically trigger updates in any directives that depend on the modified values.
 -->
ローカルコンテキストを変更すると、変更した値に依存する任意のディレクティブ内での変更が自動的にトリガーされます。

<!-- 
    _Please, visit [The Reactive and Declarative mindset](/docs/reference-guides/interactivity-api/core-concepts/the-reactive-and-declarative-mindset.md) guide to learn more about how reactivity works in the Interactivity API._
 -->
_Interactivity API 内でリアクティブがどのように動作するかの詳細については「[リアクティブと宣言型の考え方](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/core-concepts/the-reactive-and-declarative-mindset/)」を参照してください。_

<!-- 
-   **Nesting local contexts**
 -->
#### ローカルコンテキストの入れ子

<!-- 
    Local contexts can be nested, with child contexts inheriting and potentially overriding values from parent contexts:
 -->
ローカルコンテキストは入れ子にでき、子コンテキストは親コンテキストの値を継承し、必要であれば上書きできます。

```html
<div data-wp-context='{ "theme": "light", "counter": 0 }'>
  <p>Theme: <span data-wp-text="context.theme"></span></p>
  <p>Counter: <span data-wp-text="context.counter"></span></p>

  <div data-wp-context='{ "theme": "dark" }'>
    <p>Theme: <span data-wp-text="context.theme"></span></p>
    <p>Counter: <span data-wp-text="context.counter"></span></p>
  </div>
</div>
```

<!-- 
    In this example, the inner `div` will have a `theme` value of `"dark"`, but will inherit the `counter` value `0` from its parent context.
 -->
この例では、内側の `div` は `theme` 値として `"dark"` を持ちますが、`counter` 値は親コンテキストから  `0` を継承します。

<!-- 
### Example: One interactive block using local context to have independent state
 -->
### 例: ローカル・コンテキストを使用して独立したステートを持つ1つのインタラクティブブロック

<!-- 
In this example, there is a single interactive block that shows a counter and can increment it. By using local context, each instance of this block will have its own independent counter, even if multiple blocks are added to the page.
 -->
この例には1つのインタラクティブブロックがあり、カウンターを表示し、これを増分できます。ローカルコンテキストを使うことでこのブロックの各インスタンスは、複数のブロックがページに追加されても、それぞれ独立したカウンターを持ちます。

```php
<div
  data-wp-interactive="myCounterPlugin"
  <?php echo get_block_wrapper_attributes(); ?>
  data-wp-context='{ "counter": 0 }'
>
  <p>Counter: <span data-wp-text="context.counter"></span></p>
  <button data-wp-on-async--click="actions.increment">Increment</button>
</div>
```

```js
store( 'myCounterPlugin', {
	actions: {
		increment() {
			const context = getContext();
			context.counter += 1;
		},
	},
} );
```
<!-- 
In this example:
 -->
この例では、

<!-- 
1. A local context with an initial `counter` value of `0` is defined using the `data-wp-context` directive.
2. The counter is displayed using `data-wp-text="context.counter"`, which reads from the local context.
3. The increment button uses `data-wp-on-async--click="actions.increment"` to trigger the increment action.
4. In JavaScript, the `getContext` function is used to access and modify the local context for each block instance.
 -->
1. 初期値 `0` の ローカルコンテキスト `counter` を `data-wp-context` ディレクティブを使用して定義する。
2. カウンタは `data-wp-text="context.counter"` を使用して表示され、ローカルコンテキストから値を読み込む。
3. インクリメントボタンは `data-wp-on-async--click="actions.increment"` を使用して increment アクションをトリガーする。
4. JavaScript では、`getContext` 関数を使用して、各ブロックインスタンスのローカルコンテキストにアクセスして変更する。 

<!-- 
A user will be able to add multiple instances of this block to a page, and each will maintain its own independent counter. Clicking the "Increment" button on one block will only affect that specific block's counter and not the others.
 -->
ユーザーはこのブロックの複数のインスタンスをページに追加でき、各インスタンスはそれぞれの独立したカウンターを保持します。あるブロックの Increment ボタンをクリックすると、その特定のブロックのカウンターのみ増分し、他のブロックには影響しません。

<!-- 
## Derived state
 -->
## 派生ステート

<!-- 
**Derived state** in the Interactivity API refers to a value that is computed from other parts of the global state or local context. It's calculated on demand rather than stored. It ensures consistency, reduces redundancies, and enhances the declarative nature of your code.
 -->
Interactivity API における **派生ステート** とは、グローバルステートまたはローカルコンテキストの他の部分から計算される値を指します。値は必要に応じて計算され、保存されません。これにより一貫性が保証され、冗長性が減り、コードの宣言的な性質が強化されます。

<!-- 
Derived state is a fundamental concept in modern state management, not unique to the Interactivity API. It's also used in other popular state management systems like Redux, where it's called `selectors`, or Preact Signals, where it's known as `computed` values.
 -->
派生ステートはモダンなステート管理における基本的な概念で、Interactivity API に固有ではありません。他の一般的なステート管理システムでも使用されていて、Redux では `selectors`、Preact Signals では `computed` 値と呼ばれます。

<!-- 
Derived state offers several key benefits that make it an essential part of a well-designed application state, including:
 -->
派生ステートにはアプリケーションステートを適切に設計するために不可欠な、いくつかの重要な利点があります。

<!-- 
1. **Single source of truth:** Derived state encourages you to store only the essential, raw data in your state. Any values that can be calculated from this core data become derived state. This approach reduces the risk of inconsistencies in your interactive blocks.
 -->
1. **単一の真のソース：** 派生ステートは本質的な、生のデータのみをステート内に保存することを推進します。核となるデータから計算できる値は、派生ステートにできます。このアプローチにより、インタラクティブブロック内での不整合のリスクを低減できます。

<!-- 
2. **Automatic updates:** When you use derived state, values are recalculated automatically whenever the underlying data changes. This ensures that all parts of your interactive blocks always have access to the most up-to-date information without manual intervention.
 -->
2. **自動更新:** 派生ステートを使用するとき、値は、元となるデータが変更されるたびに自動的に再計算されます。これにより、インタラクティブブロックのすべての部分が、手動で操作することなく、常に最新の情報にアクセスできます。

<!-- 
3. **Simplified state management:** By computing values on-demand rather than storing and updating them manually, you reduce the complexity of your state management logic. This leads to cleaner, more maintainable code.
 -->
3. **ステート管理の簡素化:** 手動で値を保存し、更新するのではなく、必要に応じて値を計算することで、ステート管理ロジックの複雑さを軽減できます。これは、よりクリーンで保守性の高いコードにつながります。

<!-- 
4. **Improved performance:** In many cases, derived state can be optimized to recalculate only when necessary, potentially improving your interactive blocks' performance.
 -->
4. **パフォーマンスの向上:** 多くの場合、派生ステートは必要な場合にのみ再計算するよう最適化でき、インタラクティブブロックのパフォーマンスを向上する可能性があります。

<!-- 
5. **Easier debugging:** With derived state, it's clearer where data originates and how it's transformed. This can make it easier to track down issues in your interactive blocks.
 -->
5. **デバッグの容易性：** 派生ステートでは、データがどこから来て、どのように変換されたが明確です。このため、インタラクティブブロック内の問題を追跡しやすくなります。

<!-- 
In essence, derived state allows you to express relationships between different pieces of data in your interactive blocks declaratively, instead of imperatively updating related values whenever something changes.
 -->
つまり派生ステートでは、インタラクティブブロック内の異なるデータ間の関係を宣言的に表現できます。何かが変更されるたびに、関連する値を強制的に更新する必要はありません。

<!-- 
_Please, visit [The Reactive and Declarative mindset](/docs/reference-guides/interactivity-api/core-concepts/the-reactive-and-declarative-mindset.md) guide to learn more about how to leverage declarative coding in the Interactivity API._
 -->
_Interactivity API の宣言的コーディングの活用について学習するには「[リアクティブと宣言型の考え方](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/core-concepts/the-reactive-and-declarative-mindset/)」を参照してください。_

<!-- 
You should use derived state:
 -->
以下のような場面では派生ステートを使用してください。

<!-- 
-   When a part of your global state or local context can be computed from other state values.
-   To avoid redundant data that needs to be manually kept in sync.
-   To ensure consistency across your interactive blocks by automatically updating derived values.
-   To simplify your actions by removing the need to update multiple related state properties.
 -->
- グローバルステートやローカルコンテキストの一部が、他のステート値から計算できる。
- 手動で同期を保つ必要のある冗長なデータを避けたい。
- 派生値を自動的に更新することで、インタラクティブブロック全体での一貫性を確保したい。
- 関連する複数のステートプロパティを更新する必要性を失くすことで、アクションを単純化したい。

<!-- 
### Working with derived state
 -->
### 派生ステートの操作

<!-- 
-   **Initializing the derived state**
 -->
#### 派生ステートの初期化

<!-- 
    Typically, the derived state should be initialized on the server using the `wp_interactivity_state` function in the exact same way as the global state.
 -->
通常、派生ステートはグローバルステートとまったく同じように `wp_interactivity_state` 関数を使用して、サーバー上で初期化する必要があります。

<!-- 
    -   When the initial value is known and static, it can be defined directly:
 -->
- 初期値が分かっていて、静的な場合は、直接定義できます。

```php
wp_interactivity_state( 'myCounterPlugin', array(
  'counter' => 1, // これはグローバルステート
  'double'  => 2, // これは派生ステート
));
```

<!-- 
    -   Or it can be defined by doing the necessary computations:
 -->
- あるいは、必要な計算をして定義できます。

```php
$counter = 1;
$double  = $counter * 2;

wp_interactivity_state( 'myCounterPlugin', array(
  'counter' => $counter, // これはグローバルステート
  'double'  => $double,  // これは派生ステート
));
```
<!-- 
    Regardless of the approach, the initial derived state values will be used during the rendering of the page in PHP, and the HTML can be populated with the correct values.
 -->
どのようなアプローチにせよ、PHP でページをレンダリングする際には、派生ステートの初期値が使用され、HTML に正しい値を挿入できます。

<!-- 
    _Please, visit [the Server-side Rendering guide](/docs/reference-guides/interactivity-api/core-concepts/server-side-rendering.md) to learn more about how directives are processed on the server._
 -->
_ディレクティブがサーバ上でどのように処理されるかについては、[サーバサイドレンダリングガイド](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/core-concepts/server-side-rendering/)を参照してください。_

<!-- 
    The same mechanism applies even when the derived state property depends on the local context.
 -->
派生ステートプロパティがローカルコンテキストに依存する場合でも、同じメカニズムが適用されます。

```php
<?php
$counter = 1;

// これはローカルコンテキスト
$context = array( 'counter' => $counter );

wp_interactivity_state( 'myCounterPlugin', array(
  'double' => $counter * 2, // これは派生ステート
));
?>

<div
  data-wp-interactive="myCounterPlugin"
  <?php echo wp_interactivity_data_wp_context( $context ); ?>
>
  <div>
    Counter: <span data-wp-text="context.counter"></span>
  </div>
  <div>
    Double: <span data-wp-text="state.double"></span>
  </div>
</div>
```
<!-- 
    In JavaScript, the derived state is defined using getters:
 -->
JavaScript で派生ステートは getter を使用して定義します。

```js
const { state } = store( 'myCounterPlugin', {
  state: {
    get double() {
      return state.counter * 2;
    },
  },
} );
```

<!-- 
    Derived state can depend on local context, or local context and global state at the same time.
 -->
派生ステートはローカルコンテキストに依存でき、また、ローカルコンテキストとグローバルステートに同時に依存できます。

```js
const { state } = store( 'myCounterPlugin', {
  state: {
    get double() {
      const { counter } = getContext();
      // ローカルコンテキストに依存
      return counter * 2;
    },
    get product() {
      const { counter } = getContext();
      // ローカルコンテキストとグローバルステートに依存
      return counter * state.factor;
    },
  },
} );
```
<!-- 
    In some cases, when the derived state depends on the local context and the local context can change dynamically in the server, instead of the initial derived state, you can use a function (Closure) that calculates it dynamically.
 -->
派生ステートがローカルコンテキストに依存し、ローカルコンテキストがサーバー内で動的に変化する場合、派生ステートの初期値の代わりとして、動的に派生ステートを計算する関数 (クロージャ) を使用できます。

```php
<?php
wp_interactivity_state( 'myProductPlugin', array(
  'list'    => array( 1, 2, 3 ),
  'factor'  => 3,
  'product' => function() {
    $state   = wp_interactivity_state();
    $context = wp_interactivity_get_context();
    return $context['item'] * $state['factor'];
  }
));
?>

<template
  data-wp-interactive="myProductPlugin"
  data-wp-each="state.list"
>
  <span data-wp-text="state.product"></span>
</template>
```

<!-- 
    This `data-wp-each` template will render this HTML (directives omitted):
 -->
この `data-wp-each` テンプレートは、以下の HTML をレンダーします (ディレクティブは省略)。

```html
<span>3</span>
<span>6</span>
<span>9</span>
```

<!-- 
-   **Accessing the derived state**
 -->
#### 派生ステートへのアクセス

<!-- 
    In the HTML markup, the syntax for the derived state is the same as the one for the global state, just by referencing `state` in the directive attribute values.
 -->
HTML のマークアップ内で、派生ステートの構文はグローバルステートの構文と同じです。ディレクティブ属性の値内で `state` を参照するだけです。

```html
<span data-wp-text="state.double"></span>
```

<!-- 
    The same happens in JavaScript. Both global state and derived state can be consumed through the `state` property of the store:
 -->
JavaScript 内でも同じです。グローバルステートも派生ステートもストアの `state` プロパティを通して使用できます。

```js
const { state } = store( 'myCounterPlugin', {
  // ...
  actions: {
    readValues() {
      state.counter; // 通常のステート。1 を返す
      state.double; // 派生ステート。2 を返す
    },
  },
} );
```
<!-- 
    This lack of distinction is intentional, allowing developers to consume both derived and global state uniformly, and making them interchangeable in practice.
 -->
両者に違いがないのは意図的です。開発者は派生ステートとグローバルステートの両方を同じように利用できるため、実用的な意味で互換性があります。

<!-- 
    You can also access the derived state from another derived state and, thus, create multiple levels of computed values.
 -->
また、派生ステートは別の派生ステートからもアクセスできるため、計算値の複数のレベルを作成できます。

```js
const { state } = store( 'myPlugin', {
  state: {
    get double() {
      return state.counter * 2;
    },
    get doublePlusOne() {
      return state.double + 1;
    },
  },
} );
```
<!-- 
-   **Updating the derived state**
 -->
#### 派生ステートの更新

<!-- 
    The derived state cannot be updated directly. To update its values, you need to update the global state or local context on which that derived state depends.
 -->
派生ステートは直接、更新できません。その値を更新するには、派生ステートが依存するグローバルステートまたはローカルコンテキストを更新する必要があります。

```js
const { state } = store( 'myCounterPlugin', {
  // ...
  actions: {
    updateValues() {
      state.counter; // 通常のステート。1 を返す
      state.double; // 派生ステート。2 を返す

      state.counter = 2;

      state.counter; // 通常のステート。2 を返す
      state.double; // 派生ステート。4 を返す
    },
  },
} );
```

<!-- 
### Example: Not using derived state vs using derived state
 -->
### 例: 派生ステートを使用しない例と使用する例

<!-- 
Let's consider a scenario where there is a counter and the double value needs to be displayed, and let's compare two approaches: one without derived state and one with derived state.
 -->
ここでカウンターを持ち、その2倍の値を表示する例を考え、派生ステートを使用しない場合と、使用する場合の2つのアプローチを比較します。

<!-- 
-   **Not using derived state**
 -->
#### 派生ステートを使用しない例

```js
const { state } = store( 'myCounterPlugin', {
  state: {
    counter: 1,
    double: 2,
  },
  actions: {
    increment() {
      state.counter += 1;
      state.double = state.counter * 2;
    },
  },
} );
```

<!-- 
    In this approach, both the `state.counter` and `state.double` values are manually updated in the `increment` action. While this works, it has several drawbacks:
 -->
このアプローチでは、`state.counter` と `state.double` の両方の値を `increment` アクション内で手動で更新します。機能は動作しますが、いくつかの欠点があります。

<!-- 
    -   It's less declarative.
    -   It can lead to bugs if `state.counter` is updated from multiple places and developers forget to keep `state.double` in sync.
    -   It requires more cognitive load to remember to update related values.
 -->
- 宣言的でない。
- 複数の場所で `state.counter` が更新され、開発者が `state.double` の同期を忘れるとバグにつながる。
- 関連する値の更新を覚えておく必要があるため、認知的な負荷が高い。

<!-- 
-   **Using derived state**
 -->
#### 派生ステートを使用する例

```js
const { state } = store( 'myCounterPlugin', {
  state: {
    counter: 1,
    get double() {
      return state.counter * 2;
    },
  },
  actions: {
    increment() {
      state.counter += 1;
    },
  },
} );
```

<!-- 
    In this improved version:
 -->
この改良版では、

<!-- 
    -   `state.double` is defined as a getter, automatically deriving its value from `state.counter`.
    -   The `increment` action only needs to update `state.counter`.
    -   `state.double` is always guaranteed to have the correct value, regardless of how or where `state.counter` is updated.
 -->
- `state.double` は getter として定義され、その値は自動的に `state.counter` から取得される。
- `increment` アクションは `state.counter` を更新するだけでよい。
- `state.double` は、`state.counter` がどこで、どのように更新されても、常に正しい値を持つことが保証される。

<!-- 
### Example: Using derived state with local context
 -->
### 例: 派生ステートをローカルコンテキストと使用する

<!-- 
Let's now consider a scenario where there is a local context that initializes a counter.
 -->
次に、カウンターを初期化するローカルコンテキストの例を考えます。

```js
store( 'myCounterPlugin', {
	state: {
		get double() {
			const { counter } = getContext();
			return counter * 2;
		},
	},
	actions: {
		increment() {
			const context = getContext();
			context.counter += 1;
		},
	},
} );
```

```html
<div data-wp-interactive="myCounterPlugin">
	<!-- "Double: 2" をレンダーする -->
	<div data-wp-context='{ "counter": 1 }'>
		Double: <span data-wp-text="state.double"></span>

		<!-- このボタンはローカルカウンターを増分する -->
		<button data-wp-on-async--click="actions.increment">Increment</button>
	</div>

	<!-- "Double: 4" をレンダーする -->
	<div data-wp-context='{ "counter": 2 }'>
		Double: <span data-wp-text="state.double"></span>

		<!-- このボタンはローカルカウンターを増分する -->
		<button data-wp-on-async--click="actions.increment">Increment</button>
	</div>
</div>
```

<!-- 
In this example, the derived state `state.double` reads from the local context present in each element and returns the correct value for each instance where it is used.
 -->
この例では、派生ステート `state.double` は、各要素に存在するローカルコンテキストを読み込み、使用されるインスタンスに応じた正しい値を返します。

<!-- 
### Example: Using derived state with both local context and global state
 -->
### 例: 派生ステートをローカルコンテキストとグローバルステートの両方と使用する

<!-- 
Let's now consider a scenario where there is a global tax rate and local product prices and calculate the final price, including tax.
 -->
次に、グローバルの税率とローカルの商品価格があるときに、税込みの最終価格を計算する例を考えます。

```html
<div
	data-wp-interactive="myProductPlugin"
	data-wp-context='{ "priceWithoutTax": 100 }'
>
	<p>Product Price: $<span data-wp-text="context.priceWithoutTax"></span></p>
	<p>Tax Rate: <span data-wp-text="state.taxRatePercentage"></span></p>
	<p>Price (inc. tax): $<span data-wp-text="state.priceWithTax"></span></p>
</div>
```

```js
const { state } = store( 'myProductPlugin', {
	state: {
		taxRate: 0.21,
		get taxRatePercentage() {
			return `${ state.taxRate * 100 }%`;
		},
		get priceWithTax() {
			const { priceWithoutTax } = getContext();
			return price * ( 1 + state.taxRate );
		},
	},
	actions: {
		updateTaxRate( event ) {
			// グローバルの税率を更新する
			state.taxRate = event.target.value;
		},
		updatePrice( event ) {
			// ローカルの商品価格を更新する
			const context = getContext();
			context.priceWithoutTax = event.target.value;
		},
	},
} );
```

<!-- 
In this example, `priceWithTax` is derived from both the global `taxRate` and the local `priceWithoutTax`. Every time you update the global state or local context through the `updateTaxRate` or `updatePrice` actions, the Interactivity API recomputes the derived state and updates the necessary parts of the DOM.
 -->
この例では、`priceWithTax` はグローバルな `taxRate` とローカルの `priceWithoutTax` の両方から派生しています。`updateTaxRate` アクションや `updatePrice` アクションでグローバルステートやローカルコンテキストを更新するたびに、Interactivity API は派生ステートを再計算し、DOM の必要な部分を更新します。

<!-- 
By using derived state, you create a more maintainable and less error-prone codebase. It ensures that related state values are always in sync, reduces the complexity of your actions, and makes your code more declarative and easier to reason about.
 -->
派生ステートを使用することでコードベースは、より保守性が高く、エラーが起こりにくくなります。関連するステートの値は常に同期していることが保証され、アクションの複雑さは減り、コードはより宣言的で推測しやすくなります。

<!-- 
## Subscribing to Server State and Context
 -->
## サーバーのステートやコンテキストのサブスクライブ

<!-- 
Interactivity API offers a region-based navigation feature that dynamically replaces a part of the page without a full page reload. The [Query block](/docs/reference-guides/core-blocks.md#query-loop) natively supports this feature when the `Force page reload` toggle is disabled. Developers can use the same functionality in custom blocks by calling [`actions.navigate()`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-interactivity-router/#actions) from the [`@wordpress/interactivity-router`](https://github.com/WordPress/gutenberg/tree/trunk/packages/interactivity-router) script module.
 -->
Interactivity API は、ページ全体をリロードすることなくページの一部を動的に置き換えられる、領域ベースのナビゲーション機能を提供します。[クエリーブロック](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/#query-loop)は、`Force page reload` (ページの強制リロード) トグルが無効のとき、この機能をネイティブにサポートします。開発者がカスタムブロックで同じ機能を使用するには、[`@wordpress/interactivity-router`](https://github.com/WordPress/gutenberg/tree/trunk/packages/interactivity-router) スクリプトモジュールの [`actions.navigate()`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-interactivity-router/#actions)を呼び出します。

<!-- 
When using region-based navigation, it's crucial to ensure that your interactive blocks stay in sync with the server-provided global state and local context. By default, the Interactivity API will never overwrite the global state or local context with the server-provided values. The Interactivity API provides two functions to help manage this synchronization: [`getServerState()`](/docs/reference-guides/interactivity-api/api-reference.md#getserverstate) and [`getServerContext()`](/docs/reference-guides/interactivity-api/api-reference.md#getservercontext).
 -->
領域ベースのナビゲーションを使用する場合、重要なポイントとして、インタラクティブブロックはサーバー側が提供するグローバルステートやローカルコンテキストと確実に同期してください。デフォルトでは、Interactivity API は、グローバルステートとローカルコンテキストをサーバーが提供する値で上書きしません。Interactivity API にはこの同期を管理する2つの関数があります。[`getServerState()`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/api-reference/#getserverstate) と [`getServerContext()`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/api-reference/#getservercontext) です。

<!-- 
### `getServerState()`
 -->
### getServerState()
<!-- 
`getServerState()` allows you to subscribe to changes in the **global state** that occur during client-side navigation. This function is analogous to `getServerContext()`, but it works with the global state instead of the local context.
 -->
`getServerState()` を使用するとクライアントサイドナビゲーション中に発生する **グローバルステート** の変更をサブスクライブできます。この関数は `getServerContext()` と似ていますが、ローカルコンテキストではなく、グローバルステートを扱います。

<!-- 
The `getServerState()` function returns a read-only reactive object. This means that any [callbacks](/docs/reference-guides/interactivity-api/api-reference.md#accessing-data-in-callbacks) you have defined that watch the returned object will only trigger when the value returned by the function changes. If the value remains the same, the callback will not re-trigger.
 -->
`getServerState()` 関数は読み取り専用のリアクティブオブジェクトを返します。すなわち、返されたオブジェクトの監視用に定義した[コールバック](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/api-reference/#accessing-data-in-callbacks)は、関数によって返された値が変更されたときにのみトリガーされます。値が同じままであれば、コールバックは再トリガーされません。

<!-- 
Let's consider a quiz that has multiple questions. Each question is a separate page. When the user navigates to a new question, the server provides the new question and the time left to answer all the questions.
 -->
ここで複数の問題を含むクイズを考えます。それぞれの問題は別々のページにあります。ユーザーが新しい問題に移動すると、サーバーは新しい問題と、クイズの残り時間を返します。

```php
<div <?php echo wp_interactivity_state( 'myPlugin', array(
	'question' => get_question_for_page( get_the_ID() ),
	'timeLeft' => 5 * 60, // すべての問題に答えるための時間。
) ); ?>>
```

```javascript
import { store, getServerState } from '@wordpress/interactivity';

store( 'myPlugin', {
	actions: {
		// このアクションはディレクティブでトリガーされる。例:
		// <button data-wp-on-click="actions.nextQuestion">Next Question</button>
		*nextQuestion() {
			event.preventDefault( event );
			const { actions } = yield import(
				'@wordpress/interactivity-router'
			);
			actions.navigate( '/question-2' );
		},
	},
	callbacks: {
		// このコールバックはディレクティブでトリガーされる。例:
		// <div data-wp-watch="callbacks.updateQuestion"></div>
		updateQuestion() {
			const serverState = getServerState();

      // サーバーから来る新しい値で更新する。
      // `timeLeft` は *更新しない*。なぜならこれは、クイズに含まれる *すべて* の問題を回答するための残り時間だから。
			state.question = serverState.question;
		},
	},
} );
```
<!-- 
### `getServerContext()`
 -->
### getServerContext()
<!-- 
`getServerContext()` allows you to subscribe to changes in the **local context** that occur during client-side navigation. This function is analogous to `getServerState()`, but it works with the local context instead of the global state.
 -->
`getServerContext()` を使用すると、クライアントサイドナビゲーション中に発生した **ローカルコンテキスト** の変更をサブスクライブできます。この関数は `getServerState()` と似ていますが、グローバルステートではなく、ローカルコンテキストを扱います。

<!-- 
The `getServerContext()` function returns a read-only reactive object. This means that any [callbacks](/docs/reference-guides/interactivity-api/api-reference.md#accessing-data-in-callbacks) you have defined that watch the returned object will only trigger when the value returned by the function changes. If the value remains the same, the callback will not re-trigger.
 -->
`getServerContext()` 関数は読み取り専用のリアクティブオブジェクトを返します。すなわち、返されたオブジェクトの監視用に定義した[コールバック](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/api-reference/#accessing-data-in-callbacks)は、関数によって返された値が変更されたときにのみトリガーされます。値が同じままであれば、コールバックは再トリガーされません。


<!-- 
Consider a quiz that has multiple questions. Each question is a separate page. When the user navigates to a new question, the server provides the new question and the time left to answer all the questions.
 -->
ここで複数の問題を含むクイズを考えます。それぞれの問題は別々のページにあります。ユーザーが新しい問題に移動すると、サーバーは新しい問題と、クイズの残り時間を返します。

```php
<div <?php echo wp_interactivity_data_wp_context( array(
	'currentQuestion' => get_question_for_page( get_the_ID() ),
), ); ?>>
```

```javascript
import { store, getServerContext } from '@wordpress/interactivity';

store( 'myPlugin', {
	actions: {
		// このアクションはディレクティブでトリガーされる。例:
		// <button data-wp-on-click="actions.nextQuestion">Next Question</button>
		*nextQuestion() {
			event.preventDefault( event );
			const { actions } = yield import(
				'@wordpress/interactivity-router'
			);
			actions.navigate( '/question-2' );
		},
	},
	callbacks: {
		// このコールバックはディレクティブでトリガーされる。例:
		// <div data-wp-watch="callbacks.updateQuestion"></div>
		updateQuestion() {
			const serverContext = getServerContext();
			const context = getContext();

			// サーバーから来る新しい値で更新する。
			context.currentQuestion = serverContext.currentQuestion;
		},
	},
} );
```

<!-- 
### When to Use
 -->
### いつ使うのか

<!-- 
Whenever you have interactive blocks that rely on global state or local context that may change due to navigation events, ensuring consistency across different parts of your application.
 -->
ナビゲーションイベントによって変更され得るグローバルステートやローカルなコンテキストに依存するインタラクティブブロックに対して、常にアプリケーションのさまざまな部分における一貫性を確保できます。

<!-- 
### Best Practices for using `getServerState()` and `getServerContext()`
 -->
### `getServerState()` や `getServerContext()` 使用のベストプラクティス

<!-- 
-   **Read-Only References:** Both `getServerState()` and `getServerContext()` return read-only objects. You can use those objects to update the global state or local context.
-   **Callback Integration:** Incorporate these functions within your store [callbacks](/docs/reference-guides/interactivity-api/api-reference.md#accessing-data-in-callbacks) to react to state and context changes. Both `getServerState()` and `getServerContext()` return reactive objects. This means that their watch callbacks will only trigger when the value of a property changes. If the value remains the same, the callback will not re-trigger.
 -->
-   **読み出し専用の参照:** `getServerState()` と `getServerContext()` はどちらも読み取り専用のオブジェクトを返します。これらのオブジェクトを使用して、グローバルステートやローカルコンテキストを更新できます。
-   **コールバックとの統合:** これらの関数をストアの[コールバック](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/api-reference/#accessing-data-in-callbacks)に組み込むと、ステートやコンテキストの変更に反応できます。`getServerState()` と `getServerContext()` はどちらもリアクティブオブジェクトを返します。すなわち、それらの監視コールバックは、プロパティの値が変更されたときのみ、トリガーされます。値が変わらなければ、コールバックは再トリガーされません。

<!-- 
## Conclusion
 -->
## まとめ

<!-- 
Remember, the key to effective state management is to keep your state minimal and avoid redundancy. Use derived state to compute values dynamically, and choose between global state and local context based on the scope and requirements of your data. This will lead to a cleaner, more robust architecture that is easier to debug and maintain. Finally, if you need to synchronize the state or context with the server, you can use `getServerState()` and `getServerContext()` to achieve this.
 -->
効率的なステート管理のポイントは、ステートを最小限に保ち、冗長性を避けることです。派生ステートを使用して動的に値を計算し、データのスコープと要件に基づいてグローバルステートとローカルコンテキストを選択してください。この結果、デバッグや保守がしやすく、よりクリーンで堅牢なアーキテクチャが導かれます。また、ステートやコンテキストをサーバー側と動悸する必要がある場合は、`getServerState()` や `getServerContext()` を利用できます。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/interactivity-api/core-concepts/undestanding-global-state-local-context-and-derived-state.md)
