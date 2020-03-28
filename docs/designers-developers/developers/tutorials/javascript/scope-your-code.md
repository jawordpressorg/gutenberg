<!-- 
# Scope Your Code

Historically, JavaScript files loaded in a web page share the same scope. This means that a global variable declared in one file will be seen by the code in other files.

To see how this works, create a web page that loads three JavaScript files. The `first.js` file will be:
 -->
# コードのスコープ

歴史的に、Web ページにロードされた JavaScript ファイルは同じスコープを共有します。すなわち、1つのファイルで宣言されたグローバル変数は他のファイルのコードからも参照できます。

この動きを見るために3つの JavaScript ファイルをロードする Web ページを作成します。最初の `first.js` ファイルは以下です。

```js
var pluginName = 'MyPlugin';
console.log( 'Plugin name is ', pluginName );
```
<!-- 
Let's create `second.js` as:
 -->
2つめの `second.js` です。

```js
var pluginName = 'DifferentPlugin';
console.log( 'Plugin name is ', pluginName );
```
<!-- 
And, finally, `third.js`:
 -->
そして最後の `third.js` です。

```js
console.log( 'Plugin name is ', pluginName );
```
<!-- 
When loaded on the same page, `first.js` and `second.js` will output the plugin name declared within itself. They will override the value of the global `pluginName` variable if one was already declared. It's not known what gets printed in the console when `third.js` is executed, though - it depends on the value of the global `pluginName` variable when `third.js` is executed, which will depend on the order the files are loaded.

This behavior can be problematic, and is the reason we need to scope the code. By scoping the code—ensuring each file is isolated from each other—we can prevent values unexpectedly changing.
 -->
同じページにロードされると `first.js` と `second.js` はそれぞれ内部で宣言したプラグイン名を表示します。そしてグローバル変数 `pluginName` を、仮に値があっても上書きします。`third.js` を実行してコンソールにどちらの値が表示されるかは不定です。出力は `third.js` が実行されたときのグローバル変数 `pluginName` の値によりますが、これはロードされたファイルの順番によります。

この動きは問題となります。これがコードにスコープを設定する理由です。コードにスコープを設定することで、各ファイルを他のファイルから分離し、値の期待しない変更を防止できます。

<!-- 
## Scoping Code Within a Function

In JavaScript, you can scope your code by writing it within a function. Functions have "local scope", or a scope that is specific only to that function. Additionally, in JavaScript you can write anonymous functions, functions without a name, which will also prevent your function name from being overridden in the global scope.

Taking advantage of these two JavaScript features, `first.js` could be scoped as:
 -->
## 関数内でコードにスコープを設定する

JavaScript ではコードを関数内に書くことでスコープを設定できます。関数には関数のみで有効なスコープ「ローカルスコープ」があります。また JavaScript では名前のない関数「無名関数」を書くことで、グローバルスコープでの関数名の上書きを防止できます。

この JavaScript 機能を活用するには `first.js` を以下のように書いてスコープを設定します。

```js
function() {
	var pluginName = 'MyPlugin';
	console.log( 'Plugin name is ', pluginName );
}
```
<!-- 
`second.js` as:
 -->
`second.js` です。

```js
function() {
	var pluginName = 'DifferentPlugin';
	console.log( 'Plugin name is ', pluginName );
}
```
<!-- 
And `third.js`:
 -->
そして `third.js` です。

```js
function() {
	console.log( 'Plugin name is ', pluginName );
}
```
<!-- 
With this trick, the different files won't override each other's variables. Unfortunately, they also won't work as expected, because these functions are being called by no one. We've only _defined_ the functions; we haven't _executed_ them yet.
 -->
このトリックによりファイルが他のファイルの変数を上書きすることはありません。ただし残念ながら期待どおりに動作しません。関数が誰からも呼び出されないためです。関数は _定義_ しただけで、まだ _実行_ していません。
<!-- 
## Automatically Execute Anonymous Functions

It turns out there are a few ways to execute anonymous functions in JavaScript, but the most popular is this:
 -->
## 無名関数の自動実行

JavaScript での無名関数の実行にはいくつかの方法がありますが、次の方法がもっとも人気があります。

```js
( function() {
	// コードをここに
} )( )
```

<!-- 
You wrap your function between parentheses, and then call it like any other named function. This pattern is known as [Immediately-Invoked Function Expression](http://benalman.com/news/2010/11/immediately-invoked-function-expression/), or IIFE for short.

This is `first.js` written as an IIFE:
 -->

関数を括弧で囲み、他の名前付き関数のように呼び出します。このパターンは[即時実行関数式 (Immediately-Invoked Function Expression)](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)、あるいは IIFE と呼ばれます。

IIFE で書いた `first.js` です。

```js
( function() {
	var pluginName = 'MyPlugin';
	console.log( 'Plugin name is ', pluginName );
} )( )
```

<!-- 
And this is `second.js`:
 -->
`second.js` です。

```js
( function() {
	var pluginName = 'DifferentPlugin';
	console.log( 'Plugin name is ', pluginName );
} )( )
```

<!-- 
And this is `third.js`:
 -->
そして `third.js` です。

```js
( function() {
	console.log( 'Plugin name is ', pluginName );
} )( )
```

<!-- 
The code in `first.js` and `second.js` is unaffected by other variables in the global scope, so it's safe and deterministic.

On the other hand, `third.js` doesn't declare a `pluginName` variable, but needs to be provided one. IIFEs still allow you to take a variable from the global scope and pass it into your function. Provided that there was a global `window.pluginName` variable, we could rewrite `third.js` as:
 -->
`first.js` と `second.js` の中のコードはグローバルスコープの他の変数の影響を受けません。したがって安全で不変です。

一方、`third.js` は変数 `pluginName` を宣言しないため、提供する必要があります。IIFE でもグローバルスコープから変数を取得し、関数にわたすことができます。グローバル変数  `window.pluginName` を使用して、次のように `third.js` を書き換えます。

```js
( function( name ) {
	console.log( 'Plugin name is ', name );
} )( window.pluginName )
```
<!-- 
## Future Changes

At the beginning we mentioned that:

> Historically, JavaScript files loaded in a web page share the same scope.

Notice the _historically_.
 -->

## 将来の変更

冒頭に次の文章がありました。

> 歴史的に、Web ページにロードされた JavaScript ファイルは同じスコープを共有します。

「歴史的」に注意してください。

<!-- 
JavaScript has evolved quite a bit since its creation. As of 2015, the language supports modules, also known as _ES6 modules_, that introduce separate scope per file: a global variable in `first.js` wouldn't be exposed to `second.js`. This feature is already [supported by modern browsers](https://caniuse.com/#feat=es6-module), but not all of them do. If your code needs to run in browsers that don't support modules, your last resort is using IIFEs.
 -->
JavaScript は誕生してから大きく進化してきました。2015 年にはファイルごとの個別のスコープを導入する「モジュール」あるいは「ES6 モジュール」をサポートしました。`first.js` のグローバル変数は `second.js` にエクスポーズされません。この機能はすでに[モダンなブラウザーでサポートされています](https://caniuse.com/#feat=es6-module)が、すべてではありません。モジュールをサポートしないブラウザーで動作する必要があるのであれば、IIFE の使用が最後の砦です。
