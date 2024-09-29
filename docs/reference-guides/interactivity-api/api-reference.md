<!-- 
# API Reference
 -->
# API リファレンス

<!-- 
<div class="callout callout-alert">
Interactivity API is only available for WordPress 6.5 and above.
</div>
 -->
> Interactivity API は WordPress 6.5以降でのみ利用できます。

<!-- 
To add interactions to blocks using the Interactivity API, developers can use:
 -->
Interactivity API を使用してブロックにインタラクションを追加するには、開発者は以下を利用します。

<!-- 
- **Directives:** Added to the markup to add specific behavior to the DOM elements of the block
- **Store:** Contains the logic and data (state, actions, side effects, etc.) needed for the behavior
 -->
- **ディレクティブ:** マークアップに追加され、ブロックの DOM 要素に特定の動作を追加します。
- **ストア:** 動作に必要なロジックとデータ (ステート、アクション、副作用など) を格納します。

<!-- 
DOM elements are connected to data stored in the state and context through directives. If data in the state or context change directives will react to those changes, updating the DOM accordingly (see [diagram](https://excalidraw.com/#json=T4meh6lltJh6TCX51NTIu,DmIhxYSGFTL_ywZFbsmuSw)).
 -->
DOM 要素は、ディレクティブを通して、ステートやコンテキストに格納されたデータと接続されます。ステートやコンテキストのデータが変更されると、ディレクティブはその変更に反応し、DOM を更新します ([図](https://excalidraw.com/#json=T4meh6lltJh6TCX51NTIu,DmIhxYSGFTL_ywZFbsmuSw) を参照)。

<!-- 
![State & Directives](https://make.wordpress.org/core/files/2024/02/interactivity-state-directives.png)
 -->
![ステートとディレクティブ](https://make.wordpress.org/core/files/2024/02/interactivity-state-directives.png)

<!-- 
## What are directives?
 -->
## ディレクティブとは ?

<!-- 
Directives are custom attributes that are added to the markup of your block to add behavior to its DOM elements. This can be done in the `render.php` file (for dynamic blocks) or the `save.js` file (for static blocks).
 -->
ディレクティブはブロックのマークアップに追加されるカスタム属性で、ブロックの DOM 要素に動作を追加します。これは `render.php` ファイル (動的ブロックの場合)、または `save.js` ファイル (静的ブロックの場合) の中で行われます。

<!-- 
Interactivity API directives use the `data-` prefix. Here's an example of directives used in HTML markup.
 -->
Interactivity API ディレクティブは `data-` 接頭辞を使用します。以下は HTML マークアップで使用されるディレクティブの例です。

```html
<div
  data-wp-interactive="myPlugin"
  data-wp-context='{ "isOpen": false }'
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
Directives can also be injected dynamically using the [HTML Tag Processor](https://make.wordpress.org/core/2023/03/07/introducing-the-html-api-in-wordpress-6-2).
 -->
ディレクティブは [HTML タグプロセッサ](https://make.wordpress.org/core/2023/03/07/introducing-the-html-api-in-wordpress-6-2) を使用して動的にも注入できます。

<!-- 
With directives, you can directly manage interactions such as side effects, state, event handlers, attributes, or content.
 -->
ディレクティブを使用すると、副作用、ステート、イベントハンドラ、属性、コンテンツなどのインタラクションを直接管理できます。

<!-- 
## List of Directives
 -->
## ディレクティブ一覧

### `wp-interactive`

<!-- 
The `wp-interactive` directive "activates" the interactivity for the DOM element and its children through the Interactivity API (directives and store). The directive includes a namespace to reference a specific store, that can be set as a `string` or an `object`.
 -->
`wp-interactive` ディレクティブは Interactivity API (ディレクティブとストア) を通して、DOM 要素とその子要素のインタラクティブ機能を「有効化」します。ディレクティブは特定のストアを参照する名前空間を含み、 `string` または `object` として設定されます。

```html
<!-- この要素とその子をインタラクティブにして、名前空間を設定する -->
<div
  data-wp-interactive="myPlugin"
  data-wp-context='{ "myColor" : "red", "myBgColor": "yellow" }'
>
  <p>I'm interactive now, <span data-wp-style--background-color="context.myBgColor">and I can use directives!</span></p>
  <div>
    <p>I'm also interactive, <span data-wp-style--color="context.myColor">and I can also use directives!</span></p>
  </div>
</div>

<!-- これも有効 -->
<div
  data-wp-interactive='{ "namespace": "myPlugin" }'
  data-wp-context='{ "myColor" : "red", "myBgColor": "yellow" }'
>
  <p>I'm interactive now, <span data-wp-style--background-color="context.myBgColor">and I can use directives!</span></p>
  <div>
    <p>I'm also interactive, <span data-wp-style--color="context.myColor">and I can also use directives!</span></p>
  </div>
</div>
```
<!-- 
<div class="callout callout-info">
  The use of <code>data-wp-interactive</code> is a requirement for the Interactivity API "engine" to work. In the following examples the <code>data-wp-interactive</code> has not been added for the sake of simplicity. Also, the <code>data-wp-interactive</code> directive will be injected automatically in the future.
</div>
 -->
> `data-wp-interactive` の使用は、Interactivity API「エンジン」の動作ための必須条件です。ただしこの文書の後続の例では簡便のため `data-wp-interactive` を省略します。なお、将来的には、`data-wp-interactive` ディレクティブは自動的に注入される予定です。

### `wp-context`

<!-- 
It provides a **local** state available to a specific HTML node and its children.
 -->
特定の HTML ノードとその子ノードで利用可能な **ローカル** のステートを提供します。

<!-- 
The `wp-context` directive accepts a stringified JSON as a value.
 -->
`wp-context` ディレクティブは、値として文字列化された JSON を受け取ります。

```php
// render.php
<div data-wp-context='{ "post": { "id": <?php echo $post->ID; ?> } }' >
  <button data-wp-on--click="actions.logId" >
    Click Me!
  </button>
</div>
```

<!-- 
<details>
  <summary><em>See store used with the directive above</em></summary>
 -->

```js
// view.js
store( "myPlugin", {
  actions: {
    logId: () => {
      const { post } = getContext();
      console.log( post.id );
    },
  },
} );
```
<!-- 
</details>
 -->

<!-- 
Different contexts can be defined at different levels, and deeper levels will merge their own context with any parent one:
 -->
異なるレベルで異なるコンテキストを定義することができ、より深いレベルでは、自身のコンテキストを親のコンテキストにマージします。

```html
<div data-wp-context='{ "foo": "bar" }'>
  <span data-wp-text="context.foo"><!-- 出力: "bar" --></span>

  <div data-wp-context='{ "bar": "baz" }'>
    <span data-wp-text="context.foo"><!-- 出力: "bar" --></span>

    <div data-wp-context='{ "foo": "bob" }'>
      <span data-wp-text="context.foo"><!-- 出力: "bob" --></span>
    </div>

  </div>
</div>
```

### `wp-bind`

<!-- 
This directive allows setting HTML attributes on elements based on a boolean or string value. It follows the syntax `data-wp-bind--attribute`.
 -->
このディレクティブは、真偽値や文字列値によって、要素に HTML 属性を設定できます。構文は `data-wp-bind--attribute` です。

```html
<li data-wp-context='{ "isMenuOpen": false }'>
  <button
    data-wp-on--click="actions.toggleMenu"
    data-wp-bind--aria-expanded="context.isMenuOpen"
  >
    Toggle
  </button>
  <div data-wp-bind--hidden="!context.isMenuOpen">
    <span>Title</span>
    <ul>
      SUBMENU ITEMS
    </ul>
  </div>
</li>
```

<!-- 
<details>
  <summary><em>See store used with the directive above</em></summary>
 -->
```js
// view.js
store( "myPlugin", {
  actions: {
    toggleMenu: () => {
      const context = getContext();
      context.isMenuOpen = !context.isMenuOpen;
    },
  },
} );
```
<!-- 
</details>
 -->

<!-- 
The `wp-bind` directive is executed:
 -->
`wp-bind` ディレクティブは以下のタイミングで実行されます。

<!-- 
- When the element is created
- Each time there's a change on any of the properties of the `state` or `context` involved in getting the final value of the directive (inside the callback or the expression passed as reference)
 -->
- 要素が作成されたとき
- ディレクティブの最終的な値を取得するために関係する、`state` または `context` のプロパティに変更があるたび (参照として渡されるコールバックまたは式の内部で)

<!-- 
When `wp-bind` directive references a callback to get its final value:
 -->
`wp-bind` ディレクティブが最終的な値を得るためにコールバックを参照するとき、

<!-- 
- The `wp-bind` directive will be executed each time there's a change on any of the properties of the `state` or `context` used inside this callback.
- The returned value in the callback function is used to change the value of the associated attribute.
 -->
- このコールバック内で使用される `state` または `context` のプロパティが変更されるたびに、`wp-bind` ディレクティブが実行されます。
- コールバック関数の戻り値は、関連付けられた属性の値を変更するために使用されます。

<!-- 
The `wp-bind` will do different things when the DOM element is applied, depending on its value:
 -->
`wp-bind` は DOM 要素が適用されたとき、その値によって異なる動作をします。

<!-- 
  - If the value is `true`, the attribute is added: `<div attribute>`
  - If the value is `false`, the attribute is removed: `<div>`
  - If the value is a string, the attribute is added with its value assigned: `<div attribute="value"`
  - If the attribute name starts with `aria-` or `data-` and the value is boolean (either `true` or `false`), the attribute is added to the DOM with the boolean value assigned as a string: `<div aria-attribute="true">`
 -->
- 値が `true` なら、属性が追加されます: `<div attribute>`
- 値が `false` なら、属性は削除されます: `<div>`
- 値が文字列なら、属性が追加され、値が割り当てられます: <div attribute="value"`
- 属性名が `aria-` または `data-` で始まり、値が真偽値 (`true` または `false`) なら、属性が DOM に追加され、真偽値は文字列として割り当てられます: `<div aria-attribute="true">`

### `wp-class`

<!-- 
This directive adds or removes a class to an HTML element, depending on a boolean value. It follows the syntax `data-wp-class--classname`.
 -->
このディレクティブは、真偽値によって、HTML 要素にクラスを追加または削除します。構文は `data-wp-class--classname` です。

```html
<div>
  <li
    data-wp-context='{ "isSelected": false }'
    data-wp-on--click="actions.toggleSelection"
    data-wp-class--selected="context.isSelected"
  >
    Option 1
  </li>
  <li
    data-wp-context='{ "isSelected": false }'
    data-wp-on--click="actions.toggleSelection"
    data-wp-class--selected="context.isSelected"
  >
    Option 2
  </li>
</div>
```
<!-- 
<details>
  <summary><em>See store used with the directive above</em></summary>
 -->
```js
// view.js
store( "myPlugin", {
  actions: {
    toggleSelection: () => {
      const context = getContext();
      context.isSelected = !context.isSelected
    }
  }
} );
```
<!-- 
</details>
 -->

<!-- 
The `wp-class` directive is executed:
 -->
`wp-class` ディレクティブは以下のタイミングで実行されます。

<!-- 
- When the element is created
- Each time there's a change on any of the properties of the `state` or `context` involved in getting the final value of the directive (inside the callback or the expression passed as reference)
 -->
- 要素が作成されたとき
- ディレクティブの最終的な値を取得するために関係する、`state` または `context` のプロパティに変更があるたび (参照として渡されるコールバックまたは式の内部で)

<!-- 
The boolean value received by the directive is used to toggle (add when `true` or remove when `false`) the associated class name from the `class` attribute.
 -->
ディレクティブが受け取った真偽値は `class` 属性の、関連するクラス名のトグル (`true` なら追加、`false` なら削除) に使用されます。

<!-- 
It's important to note that when using the `wp-class` directive, it's recommended to use kebab-case for class names instead of camelCase. This is because HTML attributes are not case-sensitive, and HTML will treat `data-wp-class--isDark` the same as `data-wp-class--isdark` or `DATA-WP-CLASS--ISDARK`.
 -->
重要な注意点として、`wp-class` ディレクティブを使用する場合、クラス名にはキャメルケース (camelCase) ではなくケバブケース (kebab-case) を使用してください。これは HTML の属性が大文字小文字を区別せず、`data-wp-class--isDark` は `data-wp-class--isdark` や `DATA-WP-CLASS--ISDARK` と同じように扱われるためです。

<!-- 
So, for example, use the class name `is-dark` instead of `isDark` and `data-wp-class--is-dark` instead of `data-wp-class--isDark`:
 -->
このため、例えば、クラス名には `isDark` ではなく `is-dark` を、`data-wp-class--isDark` ではなく `data-wp-class--is-dark` を使用してください。

```html
<!-- 推奨 -->
<div data-wp-class--is-dark="context.isDarkMode">
  <!-- ... -->
</div>

<!-- 非推奨 -->
<div data-wp-class--isDark="context.isDarkMode">
  <!-- ... -->
</div>
```

```css
/* 推奨 */
.is-dark {
  /* ... */
}

/* 非推奨 */
.isDark {
  /* ... */
}
```

### `wp-style`

<!-- 
This directive adds or removes inline style to an HTML element, depending on its value. It follows the syntax `data-wp-style--css-property`.
 -->
このディレクティブは、その値によって、HTML 要素に インラインスタイルを追加または削除します。構文は `data-wp-style--css-property` です。

```html
<div data-wp-context='{ "color": "red" }' >
  <button data-wp-on--click="actions.toggleContextColor">Toggle Color Text</button>
  <p data-wp-style--color="context.color">Hello World!</p>
</div>
>
```
<!-- 
<details>
  <summary><em>See store used with the directive above</em></summary>
 -->
```js
store( "myPlugin", {
// view.js  
  actions: {
    toggleContextColor: () => {
      const context = getContext();
      context.color = context.color === 'red' ? 'blue' : 'red';
    },
  },
} );
```
<!-- 
</details>
 -->

<!-- 
The `wp-style` directive is executed:
 -->
`wp-style` ディレクティブは以下のタイミングで実行されます。

<!-- 
- When the element is created
- Each time there's a change on any of the properties of the `state` or `context` involved in getting the final value of the directive (inside the callback or the expression passed as reference)
 -->
- 要素が作成されたとき
- ディレクティブの最終的な値を取得するために関係する、`state` または `context` のプロパティに変更があるたび (参照として渡されるコールバックまたは式の内部で)

<!-- 
The value received by the directive is used to add or remove the style attribute with the associated CSS property:
 -->
ディレクティブが受け取った値は、関連する CSS プロパティで style 属性の追加、または削除に使われます。

<!-- 
- If the value is `false`, the style attribute is removed: `<div>`
- If the value is a string, the attribute is added with its value assigned: `<div style="css-property: value;">`
 -->
- 値が `false` なら、style 属性は削除されます： `<div>`
- 値が文字列なら、属性が追加され、その値が割り当てられます: `<div style="css-property: value;">`

### `wp-text`

<!-- 
It sets the inner text of an HTML element.
 -->
HTML 要素の内部テキストを設定します。

```html
<div data-wp-context='{ "text": "Text 1" }'>
  <span data-wp-text="context.text"></span>
  <button data-wp-on--click="actions.toggleContextText">
    Toggle Context Text
  </button>
</div>
```

<!-- 
<details>
  <summary><em>See store used with the directive above</em></summary>
 -->
```js
// view.js
store( "myPlugin", {
  actions: {
    toggleContextText: () => {
      const context = getContext();
      context.text = context.text === 'Text 1' ? 'Text 2' : 'Text 1';
    },
  },
} );
```
<!-- 
</details>
 -->

<!-- 
The `wp-text` directive is executed:
 -->
`wp-text` ディレクティブは以下のタイミングで実行されます。

<!-- 
- When the element is created
- Each time there's a change on any of the properties of the `state` or `context` involved in getting the final value of the directive (inside the callback or the expression passed as reference)
 -->
- 要素が作成されたとき
- ディレクティブの最終的な値を取得するために関係する、`state` または `context` のプロパティに変更があるたび (参照として渡されるコールバックまたは式の内部で)

<!-- 
The returned value is used to change the inner content of the element: `<div>value</div>`.
 -->
戻り値は、要素の内部コンテンツの変更に使用されます: `<div>value</div>`

### `wp-on`

<!-- 
<div class="callout callout-info">
  Consider using the more performant <a href="#wp-on-async"><code>wp-on-async</code></a> instead if your directive code does not need synchronous access to the event object. If synchronous access is required, consider implementing an <a href="#async-actions"><code>async action</code></a> which yields to the main thread after calling the synchronous API.
</div>
 -->
> もしもディレクティブのコードがイベントオブジェクトへの同期アクセスを必要としなければ、パフォーマンスに優れた `wp-on-async` の使用を検討してください。また同期アクセスが必要な場合も、同期 API を呼び出した後にメインスレッドへ yield する「`async アクション`」 (後述) の実装を検討してください。

<!-- 
This directive runs code on dispatched DOM events like `click` or `keyup`. The syntax is `data-wp-on--[event]` (like `data-wp-on--click` or `data-wp-on--keyup`).
 -->
このディレクティブはディスパッチされた `click` や `keyup` などの DOM イベントに対してコードを実行します。構文は `data-wp-on--[event]` です (例: `data-wp-on--click` や `data-wp-on--keyup`)。

```php
<button data-wp-on--click="actions.logTime" >
  Click Me!
</button>
```
<!-- 
<details>
  <summary><em>See store used with the directive above</em></summary>
 -->
```js
// view.js
store( "myPlugin", {
  actions: {
    logTime: ( event ) => {
      console.log( new Date() )
    },
  },
} );
```
<!-- 
</details>
 -->

<!-- 
The `wp-on` directive is executed each time the associated event is triggered.
 -->
`wp-on` ディレクティブは、関連するイベントがトリガーされるたびに実行されます。

<!-- 
The callback passed as the reference receives [the event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (`event`), and the returned value by this callback is ignored.
 -->
コールバックは参照として渡され、[イベント](https://developer.mozilla.org/en-US/docs/Web/API/Event) (`event`) を受け取ります。コールバックが返す値は無視されます。

### `wp-on-async`

<!-- 
This directive is a more performant approach for `wp-on`. It immediately yields to main to avoid contributing to a long task, allowing other interactions that otherwise would be waiting on the main thread to run sooner. Use this async version whenever there is no need for synchronous access to the `event` object, in particular the methods `event.preventDefault()`, `event.stopPropagation()`, and `event.stopImmediatePropagation()`.
 -->
このディレクティブは `wp-on` よりもパフォーマンスに優れたアプローチです。直ちにメインスレッドに yield して、時間のかかるタスクの待ちを回避し、メインスレッドで待機している他の処理がより早く実行できるようにします。`event` オブジェクトに同期的にアクセスする必要がない場合、特に `event.preventDefault()`、`event.stopPropagation()`、`event.stopImmediatePropagation()` メソッドでは、この非同期バージョンを使用してください。

### `wp-on-window`

<!-- 
<div class="callout callout-info">
  Consider using the more performant <a href="#wp-on-async-window"><code>wp-on-async-window</code></a> instead if your directive code does not need synchronous access to the event object. If synchronous access is required, consider implementing an <a href="#async-actions"><code>async action</code></a> which yields to the main thread after calling the synchronous API.
</div>
 -->
> もしもディレクティブのコードがイベントオブジェクトへの同期アクセスを必要としなければ、パフォーマンスに優れた `wp-on-async-window` の使用を検討してください。また同期アクセスが必要な場合も、同期 API を呼び出した後にメインスレッドへ yield する「`async アクション`」 (後述) の実装を検討してください。

<!-- 
This directive allows you to attach global window events like `resize`, `copy`, and `focus` and then execute a defined callback when those happen.
 -->
このディレクティブを使用すると、`resize`、`copy`、`focus` などのグローバルウィンドウイベントにアタッチし、それらが起きたときに、定義されたコールバックを実行できます。

<!-- 
[List of supported window events.](https://developer.mozilla.org/en-US/docs/Web/API/Window#events)
 -->
リンク: [サポートするウィンドウイベントのリスト](https://developer.mozilla.org/en-US/docs/Web/API/Window#events)

<!-- 
The syntax of this directive is `data-wp-on-window--[window-event]` (like `data-wp-on-window--resize` or `data-wp-on-window--languagechange`).
 -->
このディレクティブの構文は `data-wp-on-window--[window-event]` です (`data-wp-on-window--resize` or `data-wp-on-window--languagechange`)。

```php
<div data-wp-on-window--resize="callbacks.logWidth"></div>
```
<!-- 
<details>
	<summary><em>See store used with the directive above</em></summary>
 -->
```js
// view.js
store( "myPlugin", {
	callbacks: {
		logWidth() {
			console.log( 'Window width: ', window.innerWidth );
		},
	},
} );
```
<!-- 
</details>
 -->

<!-- 
The callback passed as the reference receives [the event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (`event`), and the returned value by this callback is ignored. When the element is removed from the DOM, the event listener is also removed.
 -->
コールバックは参照として渡され、[イベント](https://developer.mozilla.org/en-US/docs/Web/API/Event) (`event`) を受け取ります。コールバックが返す値は無視されます。要素が DOM から削除されると、イベントリスナーも削除されます。

### `wp-on-async-window`

<!-- 
Similar to `wp-on-async`, this is an optimized version of `wp-on-window` that immediately yields to main to avoid contributing to a long task. Use this async version whenever there is no need for synchronous access to the `event` object, in particular the methods `event.preventDefault()`, `event.stopPropagation()`, and `event.stopImmediatePropagation()`. This event listener is also added as [`passive`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#passive).
 -->
`wp-on-async` と同じように、このディレクティブも `wp-on-window` の最適化バージョンで、直ちにメインスレッドに yield して、時間のかかるタスクの待ちを回避します。`event` オブジェクトに同期的にアクセスする必要がない場合、特に `event.preventDefault()`、`event.stopPropagation()`、`event.stopImmediatePropagation()` メソッドでは、この非同期バージョンを使用してください。またこのイベントリスナーは [`passive`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#passive) として追加されます。

### `wp-on-document`

<!-- 
<div class="callout callout-info">
  Consider using the more performant <a href="#wp-on-async-document"><code>wp-on-async-document</code></a> instead if your directive code does not need synchronous access to the event object. If synchronous access is required, consider implementing an <a href="#async-actions"><code>async action</code></a> which yields to the main thread after calling the synchronous API.
</div>
 -->
> もしもディレクティブのコードがイベントオブジェクトへの同期アクセスを必要としなければ、パフォーマンスに優れた `wp-on-async-document` の使用を検討してください。また同期アクセスが必要な場合も、同期 API を呼び出した後にメインスレッドへ yield する「`async アクション`」 (後述) の実装を検討してください。

<!-- 
This directive allows you to attach global document events like `scroll`, `mousemove`, and `keydown` and then execute a defined callback when those happen.
 -->
このディレクティブを使用すると、`scroll`、`mousemove`、`keydown` などのグローバルドキュメントイベントにアタッチし、それらが起きたときに、定義されたコールバックを実行できます。


<!-- [List of supported document events.](https://developer.mozilla.org/en-US/docs/Web/API/Document#events)
 -->
リンク: [サポートするドキュメントイベントのリスト](https://developer.mozilla.org/en-US/docs/Web/API/Document#events)

<!-- 
The syntax of this directive is `data-wp-on-document--[document-event]` (like `data-wp-on-document--keydown` or `data-wp-on-document--selectionchange`).
 -->
このディレクティブの構文は `data-wp-on-document--[document-event]` です (例: `data-wp-on-document--keydown`、`data-wp-on-document--selectionchange`)

```php
<div data-wp-on-document--keydown="callbacks.logKeydown"></div>
```

<!-- 
<details>
	<summary><em>See store used with the directive above</em></summary>
 -->
```js
// view.js
store( "myPlugin", {
	callbacks: {
		logKeydown(event) {
			console.log( 'Key pressed: ', event.key );
		},
  },
} );
```
<!-- 
</details>
 -->

<!-- 
The callback passed as the reference receives [the event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (`event`), and the returned value by this callback is ignored. When the element is removed from the DOM, the event listener is also removed.
 -->
コールバックは参照として渡され、[イベント](https://developer.mozilla.org/en-US/docs/Web/API/Event) (`event`) を受け取ります。コールバックが返す値は無視されます。要素が DOM から削除されると、イベントリスナーも削除されます。

### `wp-on-async-document`

<!-- 
Similar to `wp-on-async`, this is an optimized version of `wp-on-document` that immediately yields to main to avoid contributing to a long task. Use this async version whenever there is no need for synchronous access to the `event` object, in particular the methods `event.preventDefault()`, `event.stopPropagation()`, and `event.stopImmediatePropagation()`. This event listener is also added as [`passive`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#passive).
 -->
`wp-on-async` と同じように、このディレクティブも `wp-on-document` の最適化バージョンで、直ちにメインスレッドに yield して、時間のかかるタスクの待ちを回避します。`event` オブジェクトに同期的にアクセスする必要がない場合、特に `event.preventDefault()`、`event.stopPropagation()`、`event.stopImmediatePropagation()` メソッドでは、この非同期バージョンを使用してください。またこのイベントリスナーは [`passive`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#passive) として追加されます。

### `wp-watch`

<!-- 
It runs a callback **when the node is created and runs it again when the state or context changes**.
 -->
このディレクティブは、**ノードが作成されるときに** コールバックを実行し、**ステートやコンテキストが変わったとき** に再度実行します。

<!-- 
You can attach several side effects to the same DOM element by using the syntax `data-wp-watch--[unique-id]`.
 -->
構文 `data-wp-watch--[unique-id]` を使うことで、同じ DOM 要素に対して、複数の副作用をアタッチできます。

<!-- 
The `unique-id` doesn't need to be unique globally. It just needs to be different from the other unique IDs of the `wp-watch` directives of that DOM element.
 -->
`unique-id` がグローバルに一意である必要はありません。その DOM 要素の他の `wp-watch` ディレクティブの ID と異なりさえすれば十分です。

```html
<div
  data-wp-context='{ "counter": 0 }'
  data-wp-watch="callbacks.logCounter"
>
  <p>Counter: <span data-wp-text="context.counter"></span></p>
  <button data-wp-on--click="actions.increaseCounter">+</button>
  <button data-wp-on--click="actions.decreaseCounter">-</button>
</div>
```

<!-- 
<details>
  <summary><em>See store used with the directive above</em></summary>
 -->
```js
// view.js
store( "myPlugin", {
  actions: {
    increaseCounter: () => {
      const context = getContext();
      context.counter++;
    },
    decreaseCounter: () => {
      const context = getContext();
      context.counter--;
    },
  },
  callbacks: {
    logCounter: () => {
      const { counter } = getContext();
      console.log("Counter is " + counter + " at " + new Date() );
    },
  },
} );
```
<!-- 
</details>
 -->

<!-- 
The `wp-watch` directive is executed:
 -->
`wp-watch` ディレクティブは以下のタイミングで実行されます。

<!-- 
- When the element is created
- Each time that any of the properties of the `state` or `context` used inside the callback changes
 -->
- 要素が作成されたとき
- コールバックの内部で使用されている `state` または `context` の任意のプロパティのいずれかが変更されるたび

<!-- 
The `wp-watch` directive can return a function. If it does, the returned function is used as cleanup logic, i.e., it will run just before the callback runs again, and it will run again when the element is removed from the DOM.
 -->
`wp-watch` ディレクティブは関数を返すことができます。このとき、返された関数はクリーンアップロジックとして使用されます。すなわち、コールバックが再び実行される直前と、要素が DOM から削除されるときに実行されます。

<!-- 
As a reference, some use cases for this directive may be:
 -->
参考として、このディレクティブの使用例をいくつか挙げます。

<!-- 
- Logging
- Changing the title of the page
- Setting the focus on an element with `.focus()`.
- Changing the state or context when certain conditions are met
 -->
- ロギング
- ページのタイトルの変更
- 要素に `.focus()` でフォーカスを設定
- 特定の条件が満たされたときにステートやコンテキストを変更

### `wp-init`

<!-- 
This directive runs a callback **only when the node is created**.
 -->
このディレクティブは **ノードが作成されたときのみ** コールバックを実行します。

<!-- 
You can attach several `wp-init` to the same DOM element by using the syntax `data-wp-init--[unique-id]`.
 -->
構文 `data-wp-init--[unique-id]` を使うことで、同じ DOM 要素に対して、複数の `wp-init` をアタッチできます。 です。

<!-- 
The `unique-id` doesn't need to be unique globally. It just needs to be different from the other unique IDs of the `wp-init` directives of that DOM element.
 -->
`unique-id` がグローバルに一意である必要はありません。その DOM 要素の他の `wp-init` ディレクティブの ID と異なりさえすれば十分です。

```html
<div data-wp-init="callbacks.logTimeInit">
  <p>Hi!</p>
</div>
```

<!-- 
Here's another example with several `wp-init` directives on the same DOM element.
 -->
同じ DOM 要素に複数の `wp-init` ディレクティブをアタッチする例です。

```html
<form
  data-wp-init--log="callbacks.logTimeInit"
  data-wp-init--focus="callbacks.focusFirstElement"
>
  <input type="text">
</form>
```
<!-- 
<details>
  <summary><em>See store used with the directive above</em></summary>
 -->
```js
// view.js
import { store, getElement } from '@wordpress/interactivity';

store( "myPlugin", {
  callbacks: {
    logTimeInit: () => console.log( `Init at ` + new Date() ),
    focusFirstElement: () => {
      const { ref } = getElement();
      ref.querySelector( 'input:first-child' ).focus(),
    },
  },
} );
```
<!-- 
</details>
 -->

<!-- 
The `wp-init` can return a function. If it does, the returned function will run when the element is removed from the DOM.
 -->
`wp-init` は関数を返すことができます。このとき、返された関数は、要素が DOM から削除されたときに実行されます。

### `wp-run`

<!-- 
This directive runs the passed callback **during the node's render execution**.
 -->
このディレクティブは **ノードのレンダー実行中に** 渡されたコールバックを実行します。

<!-- 
You can use and compose hooks like `useState`, `useWatch`, or `useEffect` inside the passed callback and create your own logic, providing more flexibility than previous directives.
 -->
渡されるコールバックの中では `useState`、`useWatch`、`useEffect` などのフックを使用し、組み合わせて、独自のロジックを作成できます。このため、これまでのディレクティブよりも柔軟性に優れます。

<!-- 
You can attach several `wp-run` to the same DOM element by using the syntax `data-wp-run--[unique-id]`.
 -->
構文 `data-wp-run--[unique-id]` を使うことで、同じ DOM 要素に対して、複数の `wp-run` をアタッチできます。

<!-- 
The `unique-id` doesn't need to be unique globally. It just needs to be different from the other unique IDs of the `wp-run` directives of that DOM element.
 -->
`unique-id` がグローバルに一意である必要はありません。その DOM 要素の他の `wp-run` ディレクティブの ID と異なりさえすれば十分です。

```html
<div data-wp-run="callbacks.logInView">
  <p>Hi!</p>
</div>
```

<!-- 
<details>
  <summary><em>See store used with the directive above</em></summary>
 -->
```js
// view.js
import { getElement, store, useState, useEffect } from '@wordpress/interactivity';

// `data-wp-init` や `data-wp-watch` と異なり、`data-wp-run` コールバック内では、
// 任意のフックを使用できます。
const useInView = () => {
  const [ inView, setInView ] = useState( false );
  useEffect( () => {
    const { ref } = getElement();
    const observer = new IntersectionObserver( ( [ entry ] ) => {
      setInView( entry.isIntersecting );
    } );
    observer.observe( ref );
    return () => ref && observer.unobserve( ref );
  }, []);
  return inView;
};

store( 'myPlugin', {
  callbacks: {
    logInView: () => {
      const isInView = useInView();
      useEffect( () => {
        if ( isInView ) {
          console.log( 'Inside' );
        } else {
          console.log( 'Outside' );
        }
      });
    }
  },
} );
```
<!-- 
</details>
 -->

<!-- 
It's important to note that, similar to (P)React components, the `ref` from `getElement()` is `null` during the first render. To properly access the DOM element reference, you typically need to use an effect-like hook such as `useEffect`, `useInit`, or `useWatch`. This ensures that the `getElement()` runs after the component has been mounted and the `ref` is available.
 -->
重要な注意点として、(P)Reactコンポーネント同様、最初のレンダーでは `getElement()` の `ref` は `null` です。DOM 要素の参照に適切にアクセスするには、通常 `useEffect`、`useInit`、`useWatch` などのエフェクト系のフックを使用する必要があります。これにより、コンポーネントがマウントされ、`ref` が利用できるようになった後で、`getElement()` が実行されることが保証されます。

### `wp-key`

<!-- 
The `wp-key` directive assigns a unique key to an element to help the Interactivity API identify it when iterating through arrays of elements. This becomes important if your array elements can move (e.g., due to sorting), get inserted, or get deleted. A well-chosen key value helps the Interactivity API infer what exactly has changed in the array, allowing it to make the correct updates to the DOM.
 -->
`wp-key` ディレクティブは要素に一意のキーを割り当て、Interactivity API が要素の配列を反復処理する際に、その要素を識別しやすくします。これは、配列の要素がソートなどによって移動、挿入、削除される場合に重要になります。キー値を適切に選択することで、Interactivity API は配列内で何が変更されたかを推測し、正しく DOM を更新できるようになります。

<!-- 
The key should be a string that uniquely identifies the element among its siblings. Typically, it is used on repeated elements like list items. For example:
 -->
キーは、兄弟要素の中でその要素を一意に識別する文字列でなければなりません。一般的には、リスト項目のような繰り返し要素で使用されます。例えば

```html
<ul>
  <li data-wp-key="unique-id-1">Item 1</li>
  <li data-wp-key="unique-id-2">Item 2</li>
</ul>
```
<!-- 
But it can also be used on other elements:
 -->
しかし、他の要素でも使用できます。

```html
<div>
  <a data-wp-key="previous-page" ...>Previous page</a>
  <a data-wp-key="next-page" ...>Next page</a>
</div>
```

<!-- 
When the list is re-rendered, the Interactivity API will match elements by their keys to determine if an item was added/removed/reordered. Elements without keys might be recreated unnecessarily.
 -->
リストが再度、レンダーされるとき、Interactivity API はキーによって要素を照合し、項目が追加、削除、並べ替えられたかどうかを判断します。要素にキーがなければ、不必要に再作成される可能性があります。

### `wp-each`

<!-- 
The `wp-each` directive is intended to render a list of elements. The directive can be used in `<template>` tags, being the value a path to an array stored in the global state or the context. The content inside the `<template>` tag is the template used to render each of the items.
 -->
`wp-each` ディレクティブは要素のリストの表示を目的とします。このディレクティブは `<template>` タグの中で使用でき、値はグローバルステートまたはコンテキストに保存された配列へのパスとなります。`<template>` タグ内のコンテンツは、各項目のレンダーに使用されるテンプレートです。

<!-- 
Each item is included in the context under the `item` name by default, so directives inside the template can access the current item.
 -->
各項目は、コンテキスト内にデフォルト名 `item` で含まれるため、テンプレート内のディレクティブはこの名前を使用して現在の項目にアクセスできます。

<!-- 
For example, let's consider the following HTML.
 -->
例えば、次の HTML を考えます。

```html
<ul data-wp-context='{ "list": [ "hello", "hola", "olá" ] }'>
  <template data-wp-each="context.list" >
    <li data-wp-text="context.item"></li>
  </template>
</ul>
```

<!-- 
It would generate the following output:
 -->
これは以下の出力を生成します。

```html
<ul data-wp-context='{ "list": [ "hello", "hola", "olá" ] }'>
  <li data-wp-text="context.item">hello</li>
  <li data-wp-text="context.item">hola</li>
  <li data-wp-text="context.item">olá</li>
</ul>
```

<!-- 
The prop that holds the item in the context can be changed by passing a suffix to the directive name. In the following example, the default prop changes from `item` to `greeting`.
 -->
コンテキストの項目を保持する prop は、ディレクティブ名に接尾辞を付けることで変更できます。以下の例では、デフォルトの prop は `item` から `greeting` に変更されます。

```html
<ul data-wp-context='{ "list": [ "hello", "hola", "olá" ] }'>
  <template data-wp-each--greeting="context.list" >
    <li data-wp-text="context.greeting"></li>
  </template>
</ul>
```

<!-- 
By default, it uses each element as the key for the rendered nodes, but you can also specify a path to retrieve the key if necessary, e.g., when the list contains objects.
 -->
デフォルトでは、各要素をレンダーするノードのキーとして使用しますが、リストにオブジェクトが含まれている場合など、必要に応じてキーを取得するパスを指定できます。

<!-- 
For that, you must use `data-wp-each-key` in the `<template>` tag and not `data-wp-key` inside the template content. This is because `data-wp-each` creates a context provider wrapper around each rendered item, and those wrappers are the ones that need the `key` property.
 -->
そのためには、`<template>` タグの中、テンプレートのコンテンツの中で、`data-wp-key` ではなく、`data-wp-each-key` を使う必要があります。なぜなら、`data-wp-each` はレンダーされる各アイテムの周りにコンテキストプロバイダのラッパーを作成し、そのラッパーが `key` プロパティを必要とするためです。

```html
<ul data-wp-context='{
  "list": [
    { "id": "en", "value": "hello" },
    { "id": "es", "value": "hola" },
    { "id": "pt", "value": "olá" }
  ]
}'>
  <template
    data-wp-each--greeting="context.list"
    data-wp-each-key="context.greeting.id"
  >
    <li data-wp-text="context.greeting.value"></li>
  </template>
</ul>
```

### `wp-each-child`

<!-- 
For server-side rendered lists, another directive called `data-wp-each-child` ensures hydration works as expected. This directive is added automatically when the directive is processed on the server.
 -->
サーバー側でレンダーされるリストでは、別のディレクティブ `data-wp-each-child` が、期待通りにハイドレーションが動作することを保証します。このディレクティブはディレクティブがサーバで処理されるときに自動的に追加されます。

```html
<ul data-wp-context='{ "list": [ "hello", "hola", "olá" ] }'>
  <template data-wp-each--greeting="context.list" >
    <li data-wp-text="context.greeting"></li>
  </template>
  <li data-wp-each-child>hello</li>
  <li data-wp-each-child>hola</li>
  <li data-wp-each-child>olá</li>
</ul>
```

<!-- 
## Values of directives are references to store properties
 -->
## ディレクティブの値は、ストアのプロパティへの参照

<!-- 
The value assigned to a directive is a string pointing to a specific state, action, or side effect.
 -->
ディレクティブに割り当てられる値は、特定のステート、アクション、副作用を指す文字列です。

<!-- 
In the following example, a getter is used to define the `state.isPlaying` derived value.
 -->
以下の例では、`state.isPlaying` の派生値を定義するために getter を使用しています。

```js
// view.js
const { state } = store( "myPlugin", {
  state: {
    currentVideo: '',
    get isPlaying() {
      return state.currentVideo !== '';
    }
  },
} );
```

<!-- 
And then, the string value `"state.isPlaying"` is used to assign the result of this selector to `data-wp-bind--hidden`.
 -->
そして、文字列値 `"state.isPlaying"` を使用して、このセレクタの結果を `data-wp-bind--hidden` に割り当てます。

```html
<div data-wp-bind--hidden="!state.isPlaying" ... >
  <iframe ...></iframe>
</div>
```

<!-- 
These values assigned to directives are **references** to a particular property in the store. They are wired to the directives automatically so that each directive “knows” what store element refers to, without any additional configuration.
 -->
ディレクティブに割り当てられたこれらの値は、ストアの特定のプロパティへの **参照** です。これらはディレクティブに自動的に接続され、追加の設定をしなくても各ディレクティブは、ストアの要素が何を参照しているかを「知る」 ようになります。

<!-- 
Note that, by default, references point to properties in the current namespace, which is the one specified by the closest ancestor with a `data-wp-interactive` attribute. If you need to access a property from a different namespace, you can explicitly set the namespace where the property accessed is defined. The syntax is `namespace::reference`, replacing `namespace` with the appropriate value.
 -->
注意点として参照は、デフォルトで現在の名前空間のプロパティを指します。名前空間は、`data-wp-interactive` 属性を持った最も近い祖先によって指定されます。別の名前空間からプロパティにアクセスするには、アクセスするプロパティが定義されている名前空間を明示的に設定します。構文は `namespace::reference` で、`namespace` を適切な値で置き換えます。

<!-- 
The example below is getting `state.isPlaying` from `otherPlugin` instead of `myPlugin`:
 -->
以下の例では、`state.isPlaying`を `myPlugin` ではなく、`otherPlugin` から取得しています。

```html
<div data-wp-interactive="myPlugin">
  <div data-wp-bind--hidden="otherPlugin::!state.isPlaying" ... >
		<iframe ...></iframe>
	</div>
</div>
```

<!-- 
## The store
 -->
## ストア

<!-- 
The store is used to create the logic (actions, side effects, etc.) linked to the directives and the data used inside that logic (state, derived state, etc.).
 -->
ストアは、ディレクティブにリンクされたロジック (アクション、副作用など) と、そのロジックの内部で使用されるデータ (ステート、派生ステートなど) の作成に使用されます。

<!-- 
**The store is usually created in the `view.js` file of each block**, although the state can be initialized from the `render.php` of the block.
 -->
**ストアは通常、各ブロックの `view.js` ファイルで作成されます** が、ブロックの `render.php` からも状態を初期化できます。

<!-- 
### Elements of the store
 -->
### ストアの要素

<!-- 
#### State
 -->
#### ステート

<!-- 
It defines data available to the HTML nodes of the page. It is important to differentiate between two ways to define the data:
 -->
ページの HTML ノードが利用できるデータを定義します。データを定義する2つの方法を区別することが重要です。

<!-- 
- **Global state**:  It is defined using the `store()` function with the `state` property, and the data is available to all the HTML nodes of the page.
- **Context/Local State**: It is defined using the `data-wp-context` directive in an HTML node, and the data is available to that HTML node and its children. It can be accessed using the `getContext` function inside of an action, derived state or side effect.
 -->
- **グローバルステート**： `store()` 関数で `state` プロパティを指定して定義され、データはページのすべての HTML ノードで利用できます。
- **コンテキスト / ローカル状態**： HTML ノードで `data-wp-context` ディレクティブを使用して定義され、その HTML ノードと子ノードで利用できます。アクション、派生ステート、副作用の内部で `getContext` 関数を使用してアクセスできます。

```html
<div data-wp-context='{ "someText": "Hello World!" }'>

  <!-- グローバルステートへアクセス -->
  <span data-wp-text="state.someText"></span>

  <!-- ローカルステート (コンテキスト) へアクセス -->
  <span data-wp-text="context.someText"></span>

</div>
```

```js
const { state } = store( "myPlugin", {
  state: {
    someText: "Hello Universe!"
  },
  actions: {
    someAction: () => {
      state.someText // アクセス、変更先はグローバルステート - "Hello Universe!"

      const context = getContext();
      context.someText // アクセス、変更先はローカルステート (コンテキスト) - "Hello World!"
    },
  },
} )
```

<!-- 
#### Actions
 -->
#### アクション

<!-- 
Actions are just regular JavaScript functions. Usually triggered by the `data-wp-on` directive (using event listeners) or other actions.
 -->
アクションは普通の JavaScript 関数に過ぎません。通常、`data-wp-on` ディレクティブ (イベントリスナーを使用する) や他のアクションによって起動されます。

```ts
// TypeScript
const { state, actions } = store("myPlugin", {
  actions: {
    selectItem: ( id ) => {
      const context = getContext();
      // ここで `id` はオプションです。したがってこのアクションはディレクティブでも使用できます。
      state.selected = id || context.id;
    },
    otherAction: () => {
      // しかし、他のアクションからも呼び出せます。
      actions.selectItem(123); // これは動作し、型も正しい
    }
  }
});
```

<!-- 
<h5 id="async-actions">Async actions</h5>
 -->
##### 非同期アクション

<!-- 
Async actions should use generators instead of async/await.
 -->
非同期アクションは、async/await ではなく、ジェネレーターを使用してください。

<!-- 
In async functions, the control is passed to the function itself. The caller of the function has no way to know if the function is awaiting, and more importantly, if the await is resolved and the function has resumed execution. We need that information to be able to restore the scope.
 -->
非同期関数では制御も関数自体に渡されます。関数の呼び出し側には関数が待ち状態なのかどうか、さらに重要な点として、待ち状態が解消 (resolve) し、関数が実行を再開したかどうかをを知る方法がありません。スコープを復元するには情報が必要です。

<!-- 
Imagine a block that has two buttons. One lives inside a context that has `isOpen: true` and the other `isOpen: false`:
 -->
ここで2つのボタンを持つブロックを考えます。一つは `isOpen: true`、もう一つは `isOpen: false` のコンテキストの中にあります。

```html
<div data-wp-context='{ "isOpen": true }'>
  <button data-wp-on--click="actions.someAction">Click</button>
</div>

<div data-wp-context='{ "isOpen": false }'>
  <button data-wp-on--click="actions.someAction">Click</button>
</div>
```

<!-- 
If the action is async and needs to await a long delay.
 -->
アクションが async で、長い遅延を await するとします。このとき

<!-- 
- The user clicks the first button.
- The scope points to the first context, where `isOpen: true`.
- The first access to `state.isOpen` is correct because `getContext` returns the current scope.
- The action starts awaiting a long delay.
- Before the action resumes, the user clicks the second button.
- The scope is changed to the second context, where `isOpen: false`.
- The first access to `state.isOpen` is correct because `getContext` returns the current scope.
- The second action starts awaiting a long delay.
- The first action finishes awaiting and resumes its execution.
- The second access to `state.isOpen` of the first action is incorrect, because `getContext` now returns the wrong scope.
 -->
- ユーザーが最初のボタンをクリックする。
- スコープは最初のコンテキストを指し、`isOpen: true` となる。
- `state.isOpen` への最初のアクセスは正しい。なぜなら `getContext` は現在のスコープを返すため。
- アクションは長く遅延する await を開始する。
- アクションが再開する前に、ユーザーが2番目のボタンをクリックする。
- スコープは2番目のコンテキストに変更され、`isOpen: false` となる。
- `state.isOpen` への最初のアクセスは正しい。なぜなら `getContext` は現在のスコープを返すため。
- 2番目のアクションは長く遅延する await を開始する。
- 最初のアクションが await を終え、実行を再開する。
- 最初のアクションの `state.isOpen` への2回目のアクセスは正しくない。なぜならここで `getContext` は誤ったスコープを返すため。

<!-- 
We need to be able to know when async actions start awaiting and resume operations, so we can restore the proper scope, and that's what generators do.
 -->
非同期アクションが、いつ await を開始したのか、いつ操作を再開したのかを知る必要があります。それが分かれば適切なスコープを復元できます。ジェネレーターはこれを実行します。

<!-- 
The store will work fine if it is written like this:
 -->
以下のように書けば、ストアは正しく動作します。

```js
const { state } = store("myPlugin", {
  state: {
    get isOpen() {
      return getContext().isOpen;
    },
  },
  actions: {
    someAction: function* () {
      state.isOpen; // このコンテキストは正しい。なぜなら同期のため。
      yield longDelay(); // ジェネレーターを利用して、呼び出し側はこの関数にいつ戻ったかを制御する。
      state.isOpen; // このコンテキストは正しい。なぜなら関数を再開する前に適切なスコープを復元したため。
    },
  },
});
```

<!-- 
As mentioned above with [`wp-on`](#wp-on), [`wp-on-window`](#wp-on-window), and [`wp-on-document`](#wp-on-document), an async action should be used whenever the `async` versions of the aforementioned directives cannot be used due to the action requiring synchronous access to the `event` object. Synchronous access is required whenever the action needs to call `event.preventDefault()`, `event.stopPropagation()`, or `event.stopImmediatePropagation()`. To ensure that the action code does not contribute to a long task, you may manually yield to the main thread after calling the synchronous event API. For example:
 -->
上の `wp-on`、`wp-on-window`、`wp-on-document` でも触れたように、アクションが `event` オブジェクトへの同期アクセスを必要とするためにこれらのディレクティブの `async` バージョンを使用できない場合は、常に非同期アクションを使用する必要があります。アクションが `event.preventDefault()`、`event.stopPropagation()`、`event.stopImmediatePropagation()` を呼び出す必要がある場合は、常に同期アクセスが必要です。アクションのコードが時間のかかるタスクに寄与しないよう、同期イベント API の呼び出し後に、メインスレッドに手動で yield できます。例えば

```js
// 注意: WordPress 6.6では、この splitTask 関数は @wordpress/interactivity でエクスポートされます。
function splitTask() {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}

store("myPlugin", {
  actions: {
    handleClick: function* (event) {
      event.preventDefault();
      yield splitTask();
      doTheWork();
    },
  },
});
```

<!-- 
You may want to add multiple such `yield` points in your action if it is doing a lot of work.
 -->
多数のタスクの実行が必要であれば、アクション内にこのような `yield` ポイントを複数追加できます。

<!-- 
#### Side Effects
 -->
#### 副作業

<!-- 
Automatically react to state changes. Usually triggered by `data-wp-watch` or `data-wp-init` directives.
 -->
ステートの変化に自動的に反応します。通常は `data-wp-watch` または `data-wp-init` ディレクティブによって起動されます。

<!-- 
#### Derived state
 -->
#### 派生ステート

<!-- 
They return a computed version of the state. They can access both `state` and `context`.
 -->
ステートの計算されたバージョンを返します。`state` と `context` の両方にアクセスできます。

```js
// view.js
const { state } = store( "myPlugin", {
  state: {
    amount: 34,
    defaultCurrency: 'EUR',
    currencyExchange: {
      USD: 1.1,
      GBP: 0.85,
    },
    get amountInUSD() {
      return state.currencyExchange[ 'USD' ] * state.amount;
    },
    get amountInGBP() {
      return state.currencyExchange[ 'GBP' ] * state.amount;
    },
  },
} );
```

<!-- 
### Accessing data in callbacks
 -->
### コールバック内でのデータアクセス

<!-- 
The **`store`** contains all the store properties, like `state`, `actions` or `callbacks`. They are returned by the `store()` call, so you can access them by destructuring it:
 -->
**`store`** には `state`、`action`、`callbacks` などのストアのすべてのプロパティが含まれています。`store()` をコールするとこれらが返るため、分割することでアクセスできます。

```js
const { state, actions } = store( "myPlugin", {
  // ...
} );
```
<!-- 
The `store()` function can be called multiple times and all the store parts will be merged together:
 -->
`store()` 関数は複数回呼び出すことができ、すべての store 部分がマージされます。

```js
store( "myPlugin", {
  state: {
    someValue: 1,
  }
} );

const { state } = store( "myPlugin", {
  actions: {
    someAction() {
      state.someValue // = 1
    }
  }
} );
```

<!-- 
<div class="callout callout-info">
  All <code>store()</code> calls with the same namespace return the same references, i.e., the same <code>state</code>, <code>actions</code>, etc., containing the result of merging all the store parts passed.
</div>
 -->
> 同じ名前空間を持つすべての `store()` 呼び出しは、同じ参照、つまり、同じ `state`、`actions` 等、渡されたすべてのストア部分のマージした結果を返します。

<!-- 
- To access the context inside an action, derived state, or side effect, you can use the `getContext` function.
- To access the reference, you can use the `getElement` function.
 -->
- アクション、派生ステート、副作用の中でコンテキストにアクセスするには、 `getContext` 関数を使用します。
- 参照にアクセスするには、 `getElement` 関数を使用します。

```js
const { state } = store( "myPlugin", {
  state: {
    get someDerivedValue() {
      const context = getContext();
      const { ref } = getElement();
      // ...
    }
  },
  actions: {
    someAction() {
      const context = getContext();
      const { ref } = getElement();
      // ...
    }
  },
  callbacks: {
    someEffect() {
      const context = getContext();
      const { ref } = getElement();
      // ...
    }
  }
} );
```

<!-- 
This approach enables some functionalities that make directives flexible and powerful:
 -->
このアプローチは、ディレクティブを柔軟で強力なものにする、以下のような機能を可能にします。

<!-- 
- Actions and side effects can read and modify the state and the context.
- Actions and state in blocks can be accessed by other blocks.
- Actions and side effects can do anything a regular JavaScript function can do, like access the DOM or make API requests.
- Side effects automatically react to state changes.
 -->
- アクションと副作用は、ステートとコンテキストを読み取り、変更できる。
- ブロック内のアクションとステートは、他のブロックからアクセスできる。
- アクションと副作用は、通常の JavaScript 関数ができることは何でもできる。例えば、DOM へのアクセスや API リクエストなど。
- 副作用は、ステートの変更に自動的に反応する。

<!-- 
### Setting the store
 -->
### ストアの設定

<!-- 
#### On the client side
 -->
#### クライアント側にて

<!-- 
*In the `view.js` file of each block* the developer can define both the state and the elements of the store referencing functions like actions, side effects or derived state.
 -->
*各ブロックの `view.js` ファイルの中* で、開発者はステートと、ストアの要素の両方を定義できます。ストアの要素はアクション、副作用、派生ステートなどの関数を参照します。

<!-- 
The `store` method used to set the store in JavaScript can be imported from `@wordpress/interactivity`.
 -->
JavaScript でストアを設定する `store` メソッドは、`@wordpress/interactivity` からインポートできます。

```js
// store
import { store, getContext } from '@wordpress/interactivity';

store( "myPlugin", {
  actions: {
    toggle: () => {
      const context = getContext();
      context.isOpen = !context.isOpen;
    },
  },
  callbacks: {
    logIsOpen: () => {
      const { isOpen } = getContext();
      // `isOpen` が変更されるたびに、その値をログする。
      console.log( `Is open: ${ isOpen }` );
    }
  },
});
```

<!-- 
#### On the server side
 -->
#### サーバー側にて

<!-- 
The state can also be initialized on the server using the `wp_interactivity_state()` function. You would typically do this in the `render.php` file of your block (the `render.php` templates were [introduced](https://make.wordpress.org/core/2022/10/12/block-api-changes-in-wordpress-6-1/) in WordPress 6.1).
 -->
`wp_interactivity_state()` 関数を使用すると、ステートはサーバー上でも初期化できます。この関数は通常、ブロックの `render.php` ファイルで呼び出します (`render.php` テンプレートは WordPress 6.1で [導入](https://make.wordpress.org/core/2022/10/12/block-api-changes-in-wordpress-6-1/) されました)。

<!-- 
The state defined on the server with `wp_interactivity_state()` gets merged with the stores defined in the view.js files.
 -->
`wp_interactivity_state()` でサーバー上で定義されたステートは、view.js ファイルで定義されたストアにマージされます。

<!-- 
The `wp_interactivity_state` function receives two arguments, a `string` with the namespace that will be used as a reference and an [associative array](https://www.php.net/manual/en/language.types.array.php) containing the values.
 -->
`wp_interactivity_state` 関数は2つの引数を受け取ります。参照として使用される名前空間の `string` と、値を含む[連想配列](https://www.php.net/manual/en/language.types.array.php)です。

<!-- 
_Example of store initialized from the server with a `state` = `{ someValue: 123 }`_
 -->
_サーバーで `state` = `{ someValue: 123 }` で初期化されたストアの例_

```php
// render.php
wp_interactivity_state( 'myPlugin', array (
	'someValue' => get_some_value()
));
```

<!-- 
Initializing the state in the server also allows you to use any WordPress API. For example, you could use the Core Translation API to translate part of your state:
 -->
サーバーで状態を初期化するということは、WordPress の API を利用できることも意味します。たとえば、Core 翻訳 API を使用して、ステートの一部を翻訳できます。

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
### Private stores
 -->
### プライベートストア

<!-- 
A given store namespace can be marked as private, thus preventing its content to be accessed from other namespaces. The mechanism to do so is by adding a `lock` option to the `store()` call, as shown in the example below. This way, further executions of `store()` with the same locked namespace will throw an error, meaning that the namespace can only be accessed where its reference was returned from the first `store()` call. This is especially useful for developers who want to hide part of their plugin stores so it doesn't become accessible for extenders.
 -->
指定するストアの名前空間をプライベートとマークすると、他の名前空間からそのコンテンツにアクセスできなくなります。これには、以下の例のように `store()` 呼び出しに `lock` オプションを追加します。すると、この名前空間には最初の `store()` 呼び出しで返された参照からのみアクセスでき、以後、同じ名前空間を指定した `store()` の実行ではエラーが発生します。これはプラグイン開発者にとって特に便利な機能で、プラグイン内のストアの一部を、プラグインのエクステンダーからアクセスできないように隠せます。

```js
const { state } = store(
	"myPlugin/private",
	{ state: { messages: [ "private message" ] } },
	{ lock: true }
);

// 以下の呼び出しではエラーが発生する
store( "myPlugin/private", { /* ストア部分 */ } );
```

<!-- 
There is also a way to unlock private stores: instead of passing a boolean, you can use a string as the `lock` value. Such a string can then be used in subsequent `store()` calls to the same namespace to unlock its content. Only the code knowing the string lock will be able to unlock the protected store namespaced. This is useful for complex stores defined in multiple JS modules.
 -->
プライベートストアのロックの解除には別の方法もあります。それには、真偽値を渡す代わりに、文字列を `lock` 値として使用します。この文字列を、同じ名前空間に対する後続の `store()` 呼び出しで使用すれば、コンテンツのロックを解除できます。文字列ロックを知っているコードだけが、保護されたストアの名前空間のロックを解除できます。これは、複数の JavaScript モジュールで定義された複雑なストアで便利です。

```js
const { state } = store(
	"myPlugin/private",
	{ state: { messages: [ "private message" ] } },
	{ lock: PRIVATE_LOCK }
);

// 以下の呼び出しは期待どおりに動く
store( "myPlugin/private", { /* ストア部分 */ }, { lock: PRIVATE_LOCK } );
```

<!-- 
### Store client methods
 -->
### ストアのクライアントメソッド

<!-- 
Apart from the store function, there are also some methods that allows the developer to access data on their store functions.
 -->
store 関数以外に、開発者が store 関数のデータにアクセスするためのメソッドもあります。

  - getContext()
  - getElement()

#### getContext()

<!-- 
Retrieves the context inherited by the element evaluating a function from the store. The returned value depends on the element and the namespace where the function calling `getContext()` exists. It can also take an optional namespace argument to retrieve the context of a specific interactive region.
 -->
関数を評価する要素が継承したコンテキストをストアから取得します。戻り値は要素と `getContext()` を呼び出した関数が存在する名前空間に依存します。オプションで名前空間を引数に取り、特定の interactive 領域のコンテキストを取得できます。

```js
const context = getContext('namespace');
```
<!-- 
- `namespace` (optional): A string that matches the namespace of an interactive region. If not provided, it retrieves the context of the current interactive region.
 -->
- `namespace` (オプション): interactive 領域の名前空間と合致する文字列。指定がなければ、現行の interactive 領域のコンテキストを取得します。

```php
// render.php
<div data-wp-interactive="myPlugin" data-wp-context='{ "isOpen": false }'>
	<button data-wp-on--click="actions.log">Log</button>
</div>
```

```js
// store
import { store, getContext } from '@wordpress/interactivity';

store( "myPlugin", {
  actions: {
    log: () => {
      const context = getContext();
			 // "false" をログ
      console.log('context => ', context.isOpen)

      // With namespace argument.
      const myPluginContext = getContext("myPlugin");
      // Logs "false"
      console.log('myPlugin isOpen => ', myPluginContext.isOpen);
    },
  },
});
```

#### getElement()

<!-- 
Retrieves a representation of the element that the action is bound to or called from. Such representation is read-only, and contains a reference to the DOM element, its props and a local reactive state.
It returns an object with two keys:
 -->
アクションがバインドされた要素、または呼び出された要素の表現を取得します。この表現は読み込み専用で、DOM 要素への参照、その prop、ローカルのリアクティブなステートを含みます。
2つのキーを持つオブジェクトを返します。

##### ref

<!-- 
`ref` is the reference to the DOM element as an [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement). It is equivalent to `useRef` in Preact or React, so it can be `null` when `ref` has not been attached to the actual DOM element yet, i.e., when it is being hydrated or mounted.
 -->
`ref` は [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) としての DOM 要素への参照です。Preact や React の `useRef` と等価で、`ref` がまだ実際の DOM 要素にアタッチされていないとき、たとえばハイドレーションやマウントされているときには `null` になります。

##### attributes

<!-- 
`attributes` contains a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), which adds a getter that allows to reference other store namespaces. Feel free to check the getter in the code. [Link](https://github.com/WordPress/gutenberg/blob/8cb23964d58f3ce5cf6ae1b6f967a4b8d4939a8e/packages/interactivity/src/store.ts#L70)
 -->
`attributes` には [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) が含まれ、他のストアの名前空間を参照できる getter を追加します。コード内の getter を確認してみてください。[リンク](https://github.com/WordPress/gutenberg/blob/8cb23964d58f3ce5cf6ae1b6f967a4b8d4939a8e/packages/interactivity/src/store.ts#L70)

<!-- 
Those attributes will contain the directives of that element. In the button example:
 -->
これらの属性は、その要素のディレクティブを含みます。ボタンの例では

```js
// store
import { store, getElement } from '@wordpress/interactivity';

store( "myPlugin", {
  actions: {
    log: () => {
      const element = getElement();
			 // Logs attributes
      console.log('element attributes => ', element.attributes)
    },
  },
});
```

コードはログに以下を出力します。

```json
{
	"data-wp-on--click": 'actions.log',
	"children": ['Log'],
	"onclick": event => { evaluate(entry, event); }
}
```

### withScope()

<!-- 
Actions can depend on the scope when they are called, e.g., when you call `getContext()` or `getElement()`.
 -->
アクションは、呼び出されたときのスコープに依存できます。例えば、`getContext()` や `getElement()`を呼び出した場合です。

<!-- 
When the Interactivity API runtime execute callbacks, the scope is set automatically. However, if you call an action from a callback that is not executed by the runtime, like in a `setInterval()` callback, you need to ensure that the scope is properly set. Use the `withScope()` function to ensure the scope is properly set in these cases.
 -->
Interactivity API ランタイムがコールバックを実行するとき、スコープは自動的に設定されます。しかし、`setInterval()` コールバックのような、ランタイムが実行しないコールバックからアクションを呼び出すときは、スコープが適切に設定されていることを確認する必要があります。この場合、`withScope()` 関数を使用して、スコープが適切に設定されていることを確認します。

<!-- 
An example, where `actions.nextImage` would trigger an undefined error without the wrapper:
 -->
以下の例でラッパーがなければ、`actions.nextImage` は未定義エラーを引き起こします。

```js
store('mySliderPlugin', {
	callbacks: {
		initSlideShow: () => {
			setInterval(
				withScope( () => {
					actions.nextImage();
				} ),
				3_000
			);
		},
  },
})
```

<!-- 
## Server functions
 -->
## サーバー関数

<!-- 
The Interactivity API comes with handy functions on the PHP part. Apart from [setting the store via server](#on-the-server-side), there is also a function to get and set Interactivity related config variables.
 -->
<!-- 
Interactivity API には、便利な PHP の関数が用意されています。上の「サーバー側にて」で見たサーバーでのストアの設定以外に、インタラクティビティ関連の設定変数を取得、設定する関数があります。
 -->
<!-- 
The Interactivity API comes with handy functions that allow you to initialize and reference configuration options on the server. This is necessary to feed the initial data that the Server Directive Processing will use to modify the HTML markup before it's send to the browser. It is also a great way to leverage many of WordPress's APIs, like nonces, AJAX, and translations.
 -->
Interactivity API には、サーバー上の構成オプションを初期化、参照するための便利な関数があります。これは Server Directive Processing に初期データを与えるために必要で、この初期データは、Server Directive Processing がブラウザに HTML マークアップを送信する前に、修正するために使用されます。また、nonce、AJAX、翻訳などの WordPress の多くの API を活用する素晴らしい手段が提供されます。

### wp_interactivity_config

<!-- 
`wp_interactivity_config` allows to set or get a configuration array, referenced to a store namespace.
The configuration is also available on the client, but it is static information.
 -->
`wp_interactivity_config` はストアの名前空間を参照する、構成の配列を設定、取得できます。
構成はクライアントでも利用できますが、静的な情報です。

<!-- 
Consider it a global setting for interactions of a site, that won't be updated on user interactions.
 -->
これはサイトのインタラクションに関するグローバルな設定と考えてください。ユーザーのインタラクションでは更新されません。

<!-- 
An example of setting:
 -->
設定の例

```php
	wp_interactivity_config( 'myPlugin', array( 'showLikeButton' => is_user_logged_in() ) );
```

<!-- 
An example of getting:
 -->
取得の例

```php
  wp_interactivity_config( 'myPlugin' );
```

<!-- 
This config can be retrieved on the client:
 -->
この構成はクライアントで取得できます。

```js
// view.js

const { showLikeButton } = getConfig();
```

### wp_interactivity_state

<!-- 
`wp_interactivity_state` allows the initialization of the global state on the server, which will be used to process the directives on the server and then will be merged with any global state defined in the client.
 -->
`wp_interactivity_state` を使用するとサーバー上でグローバルステートを初期化できます。このグローバルステートはサーバー上のディレクティブの処理に使用され、クライアントで定義されたグローバルステートとマージされます。

<!-- 
Initializing the global state on the server also allows you to use many critical WordPress APIs, including [AJAX](https://developer.wordpress.org/plugins/javascript/ajax/), or [nonces](https://developer.wordpress.org/plugins/javascript/enqueuing/#nonce).
 -->
また、サーバー上でグローバルステートを初期化することで、[AJAX](https://developer.wordpress.org/plugins/javascript/ajax/) や [nonces](https://developer.wordpress.org/plugins/javascript/enqueuing/#nonce) など多くの重要な WordPress API を使用できます。

<!-- 
The `wp_interactivity_state` function receives two arguments, a string with the namespace that will be used as a reference and an associative array containing the values.
 -->
関数 `wp_interactivity_state` は2つの引数を取ります。1つは参照として使用される名前空間の文字列で、もう1つは値を含む連想配列です。

<!-- 
Here is an example of passing the WP Admin AJAX endpoint with a nonce.
 -->
以下は、nonce と共に WP Admin AJAX エンドポイントを渡す例です。

```php
// render.php

wp_interactivity_state(
	'myPlugin',
	array(
		'ajaxUrl' => admin_url( 'admin-ajax.php' ),
		'nonce'   => wp_create_nonce( 'myPlugin_nonce' ),
	),
);
```

```js
// view.js

const { state } = store( 'myPlugin', {
	actions: {
		*doSomething() {
			try {
				const formData = new FormData();
				formData.append( 'action', 'do_something' );
				formData.append( '_ajax_nonce', state.nonce );

				const data = yield fetch( state.ajaxUrl, {
					method: 'POST',
					body: formData,
				} ).then( ( response ) => response.json() );
					console.log( 'Server data!', data );
				} catch ( e ) {
					// Something went wrong!
				}
			},
		},
	}
);
```

### wp_interactivity_process_directives

<!-- 
`wp_interactivity_process_directives` returns the updated HTML after the directives have been processed.
 -->
`wp_interactivity_process_directives` は、ディレクティブが処理された後の、更新された HTML を返します。

<!-- 
It is the Core function of the Interactivity API server side rendering part, and is public so any HTML can be processed, whether is a block or not.
 -->
これは、Interactivity API のサーバーサイドレンダリング部分のコア機能であり、パブリックなので、ブロックかどうかにかかわらず、任意の HTML で処理できます。

<!-- 
This code
 -->
以下のコードは、

```php
wp_interactivity_state( 'myPlugin', array( 'greeting' => 'Hello, World!' ) );
$html_content = '<div data-wp-text="myPlugin::state.greeting"></div>';
$processed_html = wp_interactivity_process_directives( $html_content );
echo $processed_html;
```

<!-- 
will output:
 -->
以下の出力になります。

```html
<div data-wp-text="myPlugin::state.greeting">Hello, World!</div>
```

### wp_interactivity_data_wp_context

<!-- 
`wp_interactivity_data_wp_context` returns a stringified JSON of a context directive.
This function is the recommended way to print the `data-wp-context` attribute in the server side rendered markup.
 -->
`wp_interactivity_data_wp_context` はコンテキストディレクティブを文字列化した JSON を返します。
この関数は `data-wp-context` 属性をサーバ側のレンダーマークアップ内に出力する、推奨の方法です。

```php

$my_context = array(
	'counter' => 0,
	'isOpen'  => true,
);
?>
<div
 <?php echo wp_interactivity_data_wp_context( $my_context ); ?>
>
</div>
```

以下を出力します。

```html
<div data-wp-context='{"counter":0,"isOpen":true}'>
```

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/interactivity-api/api-reference.md)