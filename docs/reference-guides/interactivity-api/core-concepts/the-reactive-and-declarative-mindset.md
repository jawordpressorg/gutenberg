<!-- 
# The Reactive and Declarative mindset
 -->
# リアクティブと宣言型の考え方

<!-- 
The Interactivity API is a reactive and declarative framework, similar to other modern frameworks like React, Vue, Svelte, or Alpine. When working with the Interactivity API, adopting the right mindset is crucial for maximizing its potential. This guide will explain the core concepts of reactivity and declarativeness, providing a foundation for effective use of the Interactivity API.
 -->
Interactivity API は React、Vue、Svelte、Alpine のような他のモダンなフレームワークと同様の、リアクティブで宣言的なフレームワークです。Interactivity API の操作において、その可能性を最大限に引き出すには、正しい考え方を採用することが非常に重要です。このガイドではリアクティブと宣言型のコアコンセプトを説明し、Interactivity API を効果的に使用するための基礎を提供します。

<!-- 
## Declarative vs. imperative
 -->
## 宣言型 vs. 実装型

<!-- 
**Declarative Programming** describes _what_ a program should accomplish. It focuses on the desired outcome without explicitly listing commands or steps to achieve that result. In contrast, **imperative programming** specifies _how_ to accomplish tasks by explicitly stating each step to manipulate the program’s state.
 -->
**宣言型プログラミング**では、プログラムが _何を_ 達成すべきかを記述します。そこでは希望する結果にフォーカスし、結果を達成するためのコマンドやステップを明示的に列挙しません。対照的に**命令型プログラミング**では、_どのように_ タスクを達成するかを指定します。そこでは明示的にプログラムの状態 (ステート) を操作する個々のステップを記述します。

<!-- 
### The imperative approach
 -->
### 命令型アプローチ

<!-- 
In the early days of web development, the imperative approach was predominant. This method involves manually updating the DOM with JavaScript to reflect changes.
 -->
ウェブ開発の初期は命令型アプローチが主流でした。この方法では変更を反映するために、JavaScript を使用して手動で DOMを更新しました。

<!-- 
Take, for example, this interactive block with two buttons and a paragraph:
 -->
たとえば、以下は2つのボタンと段落からなるインタラクティブブロックです。

<!-- 
-   **The show/hide button**: Toggles paragraph visibility and enables/disables the "Activate" button.
-   **The activate/deactivate button**: Toggles the paragraph's text and color between "active" (green) and "inactive" (red).
 -->
- **show / hide (表示 / 非表示) ボタン**: 段落の表示 / 非表示を切り替え、「activate (有効化)」ボタンの有効 / 無効を切り替えます。
- **activate / deactivate (有効化 / 無効化) ボタン**: 段落のテキストと色を「有効」(緑) と「無効」 (赤) の間で切り替えます。

```html
<div id="my-interactive-plugin">
	<button
		id="show-hide-btn"
		aria-expanded="false"
		aria-controls="status-paragraph"
	>
		show
	</button>
	<button id="activate-btn" disabled>activate</button>
	<p id="status-paragraph" class="inactive" hidden>this is inactive</p>
</div>

<script>
	const showHideBtn = document.getElementById( 'show-hide-btn' );
	const activateBtn = document.getElementById( 'activate-btn' );
	const statusParagraph = document.getElementById( 'status-paragraph' );

	showHideBtn.addEventListener( 'click', () => {
		if ( statusParagraph.hasAttribute( 'hidden' ) ) {
			statusParagraph.removeAttribute( 'hidden' );
			showHideBtn.textContent = 'hide';
			showHideBtn.setAttribute( 'aria-expanded', 'true' );
			activateBtn.removeAttribute( 'disabled' );
		} else {
			if ( statusParagraph.classList.contains( 'active' ) ) {
				statusParagraph.textContent = 'this is inactive';
				statusParagraph.classList.remove( 'active' );
				activateBtn.textContent = 'activate';
			}
			statusParagraph.setAttribute( 'hidden', true );
			showHideBtn.textContent = 'show';
			showHideBtn.setAttribute( 'aria-expanded', 'false' );
			activateBtn.setAttribute( 'disabled', true );
		}
	} );

	activateBtn.addEventListener( 'click', () => {
		if ( activateBtn.textContent === 'activate' ) {
			statusParagraph.textContent = 'this is active';
			statusParagraph.classList.remove( 'inactive' );
			statusParagraph.classList.add( 'active' );
			activateBtn.textContent = 'deactivate';
		} else {
			statusParagraph.textContent = 'this is inactive';
			statusParagraph.classList.remove( 'active' );
			statusParagraph.classList.add( 'inactive' );
			activateBtn.textContent = 'activate';
		}
	} );
</script>
```

<!-- 
As you can see, for each condition, you have to use JavaScript to modify everything in the DOM that has changed, taking into account the previous state.
 -->
見て分かるように、それぞれの条件に対する DOM 内のすべての変化を、以前の状態に応じて JavaScript で修正しなければなりません。
<!-- 
### The declarative approach
 -->
### 宣言型アプローチ

<!-- 
The declarative approach simplifies the process by focusing on _what_ should happen. The UI updates automatically in response to changes in state. Here is a similar example using the Interactivity API's declarative approach:
 -->
宣言型アプローチは、_何が_ 起こるべきかに焦点を当てることでプロセスを単純化します。UI は状態の変化に応じて自動的に更新されます。以下は、Interactivity APIの宣言的アプローチを使用した同様の例です。

```html
<div id="my-interactive-plugin" data-wp-interactive="myInteractivePlugin">
	<button
		data-wp-on--click="actions.toggleVisibility"
		data-wp-bind--aria-expanded="state.isVisible"
		data-wp-text="state.visibilityText"
		aria-controls="status-paragraph"
	>
		show
	</button>
	<button
		data-wp-on--click="actions.toggleActivation"
		data-wp-bind--disabled="!state.isVisible"
		data-wp-text="state.activationText"
	>
		activate
	</button>
	<p
		id="status-paragraph"
		data-wp-bind--hidden="!state.isVisible"
		data-wp-class--active="state.isActive"
		data-wp-class--inactive="!state.isActive"
		data-wp-text="state.paragraphText"
	>
		this is inactive
	</p>
</div>
```

```js
import { store } from '@wordpress/interactivity';

const { state } = store( 'myInteractivePlugin', {
	state: {
		isVisible: false,
		isActive: false,
		get visibilityText() {
			return state.isVisible ? 'hide' : 'show';
		},
		get activationText() {
			return state.isActive ? 'deactivate' : 'activate';
		},
		get paragraphText() {
			return state.isActive ? 'this is active' : 'this is inactive';
		},
	},
	actions: {
		toggleVisibility() {
			state.isVisible = ! state.isVisible;
			if ( ! state.isVisible ) state.isActive = false;
		},
		toggleActivation() {
			state.isActive = ! state.isActive;
		},
	},
} );
```

<!-- 
In this declarative example, the UI automatically updates based on the current state. All you have to do as developers is to declare the necessary state, any derived state, the actions that modify the state, and which parts of the DOM depend on which parts of the state. The framework takes care of making all the necessary updates to the DOM so that it is always in sync with the current state. The logic remains simple and maintainable regardless of the number of elements controlled by the framework.
 -->
この宣言型の例では、UI は現在の状態 (ステート) に基づいて自動的に更新されます。開発者が行うことは、必要なステート、派生ステート、ステートを変更するアクション、DOM のどの部分がステートのどの部分に依存するかを宣言するだけです。フレームワークがすべての必要な DOM の更新を行うため、DOM は常に現在のステートと同期します。フレームワークによって制御される要素の数に関係なく、ロジックはシンプルで保守性が維持されます。

<!-- 
### Can you spot the bug?
 -->
### ところでバグに気がつきましたか ?

<!-- 
In the imperative example, a bug has been intentionally introduced for didactical purposes. Can you find it? It's not easy!
 -->
上の命令型アプローチの例には、教訓のため意図的にバグが仕込まれています。見つけられますか ? 簡単ではありませんよ !
(答えは末尾に)

<!-- 
<details>
<summary>Show me the answer!</summary>

In the case that the Show button is pressed first, then the Activate button, and finally the Hide button, it doesn't add the `inactive` class using `statusParagraph.classList.add('inactive');`. Therefore, the next time the user presses Show, the paragraph will not appear in red.

</details>
 -->

<!-- 
These types of bugs are very common in imperative code because you have to manually control all the conditions. On the other hand, they do not exist in declarative code because the framework takes care of updating the DOM and never forgets about anything.
 -->
この種のバグは命令型コードでは頻繁に発生します。これはすべての条件を手動で制御しなければならないためです。一方、宣言的なコードではこのようなバグは存在しません。フレームワークが DOM の更新を引き受け、かつ、何も見落とさないからです。

<!-- 
### Benefits of the declarative approach
 -->
### 宣言型アプローチの利点

<!-- 
As demonstrated, the imperative approach requires detailed steps and direct manipulation of the DOM, which can quickly become complex and hard to maintain as the interactivity complexity grows. The more possible states and elements there are, the more conditional logic needs to be added, making the code exponentially more complicated. The declarative approach, on the other hand, simplifies the process by managing the state and letting the framework handle the DOM updates. This leads to more readable, maintainable, and scalable code.
 -->
上の例で見たように命令型アプローチでは、詳細なステップと DOM の直接操作が必要で、インタラクティブ性が複雑になるとすぐに複雑になり、メンテナンスが難しくなります。取り得る状態 (ステート) や要素が増えれば増えるほど条件のロジックを追加する必要があり、コードは指数関数的に複雑になります。一方、宣言型アプローチではステートを管理し、DOM の更新をフレームワークに任せることでプロセスを単純化します。コードは読みやすく、保守しやすく、スケーラブルになります。

<!-- 
## Reactivity
 -->
## リアクティブ

<!-- 
The Interactivity API is a declarative framework thanks to its leverage of reactivity. In a reactive system, changes to the data automatically trigger updates in the user interface, ensuring that the view always reflects the current state of the application.
 -->
Interactivity API はリアクティブを活用した宣言的なフレームワークです。リアクティブなシステムでは、データの変更は自動的にユーザーインターフェースの更新をトリガーし、ビューが常にアプリケーションの現在のステートを反映することが保証されます。

<!-- 
### How reactivity works
 -->
### リアクティブが動作する仕組み

<!-- 
The Interactivity API uses a fine-grained reactivity system. Here's how it works:
 -->
Interactivity API は、きめ細かなリアクティブシステムを使用します。その仕組みを以下に説明します

<!-- 
1. **Reactive State**: In the Interactivity API, both the global state and the local context are reactive. This means that when either of these data sources changes, any parts of the UI that depend on them will automatically update.
 -->
1. **リアクティブステート**: Interactivity API では、グローバルステートとローカルコンテキストの両方がリアクティブです。すなわち、これらのデータ元のいずれかが変更されると、依存する UI の任意の部分が自動的に更新されます。

<!-- 
    - **Global state**: This is global data that can be accessed throughout your interactive blocks.
    - **Local context**: This is local data that is specific to a particular element and its children.
    - **Derived State**: In addition to basic state properties, you can define computed properties that automatically update when their dependencies change.
 -->
- **グローバルステート**: インタラクティブブロック全体でアクセスできるグローバルデータ
- **ローカルコンテキスト**: 特定の要素とその子に固有のローカルデータ
- **派生ステート**: 基本的なステートプロパティに加えて、依存関係が変更された際に自動で更新される計算型プロパティを定義できます。

<!-- 
    _Please, visit the [Understanding global state, local context and derived state](/docs/reference-guides/interactivity-api/core-concepts/undestanding-global-state-local-context-and-derived-state.md) guide to learn more about how to work with the different types of reactive state in the Interactivity API._
 -->
_Interactivity API での個々のリアクティブステートの使用方法については、[グローバルステート、ローカルコンテキスト、派生ステートの理解](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/interactivity-api/core-concepts/undestanding-global-state-local-context-and-derived-state/)を参照してください。_

<!-- 
2. **Actions**: These are functions, usually triggered by event handlers, that mutate the global state or local context.
 -->
2. **アクション**: 通常イベントハンドラによってトリガーされる関数。グローバルステートやローカルコンテキストを変更します。

<!-- 
3. **Reactive Bindings**: HTML elements are bound to reactive state values using special attributes like `data-wp-bind`, `data-wp-text`, or `data-wp-class`.
 -->
3. **リアクティブバインディング**: HTML 要素は、特別な属性を使用して、リアクティブステートの値にバインドされます。属性の例: `data-wp-bind`、`data-wp-text`、`data-wp-class`。

<!-- 
4. **Automatic Updates**: When the actions mutate the global state or local context, the Interactivity API automatically updates all the parts of the DOM that depend on that state (either directly or through the derived state).
 -->
4. **自動更新**: アクションがグローバルステートまたはローカルコンテキストを変更すると、Interactivity API は、そのステートに依存する DOM のすべての部分を (直接または派生ステートを介して) 自動的に更新します。

<!-- 
Let's break down these concepts by reviewing the previous example:
 -->
先ほどの例をベースに、これらのコンセプトの詳細を見ていきます。

```javascript
const { state } = store( 'myInteractivePlugin', {
	state: {
		isVisible: false,
		isActive: false,
		get visibilityText() {
			return state.isVisible ? 'hide' : 'show';
		},
		// ... その他の派生ステート
	},
	actions: {
		toggleVisibility() {
			state.isVisible = ! state.isVisible;
		},
		// ... その他のアクション
	},
} );
```

<!-- 
In this code:
 -->
このコードでは、

<!-- 
-   `isVisible` and `isActive` are basic state properties.
-   `visibilityText` is a derived state that automatically updates when `isVisible` changes.
-   `toggleVisibility` is an action that modifies the state.
 -->
- `isVisible` と `isActive` は基本のステートプロパティ
- `visibilityText` は派生ステートで `isVisible` が変わると自動的に更新される
- `toggleVisibility` はステートを変更するアクション

<!-- 
The HTML bindings look like this:
 -->
HTML バインディングは次のようになっています。

```html
<button
	data-wp-on--click="actions.toggleVisibility"
	data-wp-text="state.visibilityText"
	data-wp-bind--aria-expanded="state.isVisible"
>
	show
</button>
```

<!-- 
Here's how reactivity works in practice:
 -->
ここでリアクティブが実際に動作します。

<!-- 
1. When the button is clicked, it triggers the `toggleVisibility` action.
2. This action updates `state.isVisible`.
3. The Interactivity API detects this change and automatically:
    - Updates the button's text content (because of `data-wp-text="state.visibilityText"`).
    - Changes the `aria-expanded` attribute (due to `data-wp-bind--aria-expanded="state.isVisible"`).
    - Updates any other parts of the DOM that depend on `isVisible` or `visibilityText`.
 -->
1. ボタンをクリックすると `toggleVisibility` アクションがトリガーされる。
2. このアクションは `state.isVisible` を更新する。
3. Interactivity API はこの変更を検知し、自動的に以下を実行する。
    - ボタンのテキストコンテンツを更新する (`data-wp-text="state.visibilityText"` のため)。
    - `aria-expanded` 属性を変更する (`data-wp-bind--aria-expanded="state.isVisible"` のため)。
    - `isVisible` や `visibilityText` に依存する DOM の他の部分を更新する。

<!-- 
### Mutability vs immutability
 -->
### ミュータブル (可変) vs イミュータブル (不変)

<!-- 
Unlike many other reactive frameworks, **the Interactivity API does not require the use of immutability** when updating the global state or the local context. You can directly mutate objects and arrays, and the reactivity system will still work as expected. This can lead to more intuitive and straightforward code in many cases.
 -->
他の多くのリアクティブフレームワークと異なり、**Interactivity API はグローバルステートやローカルコンテキストの更新において、イミュータブル性を使用する必要はありません**。オブジェクトや配列を直接変更しても、リアクティブシステムは期待どおりに動作します。これは多くの場合、より直感的でわかりやすいコードになります。

<!-- 
For example, you can push a new item to an array like this:
 -->
たとえば、次のように新しい項目を配列にプッシュできます。

```javascript
const { state } = store( 'myArrayPlugin', {
	state: {
		list: [ 'item 1', 'item 2' ],
	},
	actions: {
		addItem() {
			// 正しい:
			state.list.push( 'new item' );

			// 間違い:
			state.list = [ ...state.list, 'new item' ]; // こうしない !
		},
	},
} );
```

<!-- 
There's no need to create a new array or use the spread operator as you might in other frameworks. The Interactivity API will detect this change and update any parts of the UI that depend on `state.list`.
 -->
他のフレームワークのように新しい配列を作成したり、スプレッド演算子を使用する必要はありません。Interactivity API がこの変更を検出し、`state.list` に依存する UI のすべての部分を更新します。

<!-- 
### Reactive side effects
 -->
### リアクティブの副作用 (side effects)

<!-- 
In addition to automatically updating the UI, the Interactivity API allows you to perform side effects when reactive data changes using directives like `data-wp-watch`. Side effects are useful for tasks like logging, making API calls, or updating other parts of your application that aren't directly tied to the UI.
 -->
Interactivity API では UI の自動更新に加えて、`data-wp-watch` などのディレクティブを使用して、リアクティブなデータが変更された際に副作用 (side effects) を実行できます。副作用はロギングや API 呼び出し、UI に直接関係しないアプリケーションの他の部分の更新などのタスクに便利です。

<!-- 
Here's an example of how you might use `data-wp-watch`:
 -->
以下に `data-wp-watch` の使用例です。

```html
<div
	data-wp-interactive="myCounterPlugin"
	data-wp-context='{ "counter": 0 }'
	data-wp-watch="callbacks.logCounter"
>
	<p>Counter: <span data-wp-text="context.counter"></span></p>
	<button data-wp-on--click="actions.increment">Increment</button>
</div>
```

```javascript
store( 'myCounterPlugin', {
	actions: {
		increment() {
			const context = getContext();
			context.counter += 1;
		},
	},
	callbacks: {
		logCounter: () => {
			const context = getContext();
			console.log( `The counter is now: ${ context.counter }` );
		},
	},
} );
```

<!-- 
In this example:
 -->
この例では、

<!-- 
1. The `data-wp-context` directive adds a local context with a property `counter` whose value is `0`.
2. The `data-wp-watch` directive is set to `callbacks.logCounter`.
3. Every time `context.counter` changes, the `logCounter` callback will be executed.
4. The `logCounter` callback logs the current counter to the console.
 -->
1. `data-wp-context` ディレクティブはローカルコンテキストを追加する。プロパティ `counter` の値は `0`。
2. `data-wp-watch` ディレクティブに `callbacks.logCounter` を設定する。
3. `context.counter` が変更されるたびに、`logCounter`コールバックが実行される。
4. `logCounter` コールバックはコンソールに現在のカウンタをログする。

<!-- 
This allows you to create declarative side effects that automatically run in response to data changes. Some other use cases for `data-wp-watch` might include:
 -->
これにより、データの変更に応じて自動的に実行される、宣言的な副作用を作成できます。`data-wp-watch` のその他の使用例としては、以下のような例が考えられます。

<!-- 
-   Saving data to `localStorage` when the data changes.
-   Sending analytics events.
-   Changing the focus for accessibility purposes.
-   Updating the page title, meta tags, or `<body>` attributes.
-   Triggering animations.
 -->
- データが変更されたら `localStorage` にデータを保存する。
- アナリティクスイベントを送信する。
- アクセシビリティのためにフォーカスを変更する。
- ページタイトル、メタタグ、`<body>` 属性を更新する。
- アニメーションをトリガーする。

<!-- 
## Conclusion
 -->
## 結論

<!-- 
As you continue to work with the Interactivity API, remember to think in terms of state, actions, and side effects. Define your data, describe how it should change, and let the Interactivity API handle the rest. This mental shift may take some time, especially if you're used to more imperative programming styles, but by embracing it, you'll unlock the full potential of the Interactivity API to create truly dynamic and interactive WordPress blocks that delight your users.
 -->
Interactivity API を利用する際には、ステート、アクション、副作用の観点で考えることが重要です。データを定義し、それがどのように変化すべきかを記述したら、残りは Interactivity API に任せましょう。この発想の転換には時間がかかるかもしれません、特に、命令型のプログラミングスタイルに慣れている方には。しかし、これを受け入れることで、Interactivity API の可能性を最大限に引き出し、ユーザーに喜びを与える、真にダイナミックでインタラクティブなWordPress ブロックを作成できます。

### 命令形アプローチの例のバグの答え
<!-- 
In the case that the Show button is pressed first, then the Activate button, and finally the Hide button, it doesn't add the `inactive` class using `statusParagraph.classList.add('inactive');`. Therefore, the next time the user presses Show, the paragraph will not appear in red.
 -->
最初に show ボタン、次に activate ボタン、最後に hide ボタンを押すと、`statusParagraph.classList.add('inactive');` が呼ばれず `inactive` クラスが追加されません。したがって、次にユーザーが show ボタンを押しても、段落は赤く表示されません。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/interactivity-api/core-concepts/the-reactive-and-declarative-mindset.md)