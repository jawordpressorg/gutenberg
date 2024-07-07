<!--
# Feature Flags
 -->
# フィーチャーフラグ

<!--
With phase 2 of the Gutenberg project there's a need for improved control over how code changes are released. Newer features developed for phase 2 and beyond should only be released to the Gutenberg plugin, while improvements and bug fixes should still continue to make their way into core releases.

The technique for handling this is known as a 'feature flag'.
 -->
<!-- 
Gutenberg プロジェクトのフェーズ2を開始するにあたってはコード変更のリリースコントロールを改良する必要がありました。フェーズ2以降で開発された新しい機能は Gutenberg プラグインとしてリリースする一方、改良やバグの修正は引き続きコアリリースに反映しなければなりません。

こうした処理技術は「フィーチャーフラグ」として知られています。
 -->
<!-- 
Often in the Gutenberg project, there's a need to control whether the code we write is shipped to WordPress core, or whether certain more experimental features are only active in the plugin.
 -->
<!-- 
Gutenberg プロジェクトでは、しばしば、書いたコードが WordPress コアとしてリリースされるのか、それとも、特定の実験的な機能がプラグインでのみ有効なのかを制御する必要があります。
 -->
<!-- 
Often this is handled using a 'feature flag'.
 -->
<!-- 
多くの場合、このような要求は「フィーチャーフラグ」を使用して処理されます。
 -->
<!--
## Introducing `process.env.GUTENBERG_PHASE`

The `process.env.GUTENBERG_PHASE` is an environment variable containing a number that represents the phase. When the codebase is built for the plugin, this variable will be set to `2`. When building for core, it will be set to `1`.
 -->
<!-- 
## process.env.GUTENBERG_PHASE の導入

`process.env.GUTENBERG_PHASE` はフェーズ番号を示す環境変数です。コードをプラグインとしてビルドする際、この変数を `2` にセットします。コアとしてビルドする際には `1` にセットします。
 -->
<!-- 
'Feature flags' are variables that allow you to prevent specific code in the Gutenberg project from being shipped to WordPress core, and to run certain experimental features only in the plugin.
 -->
「フィーチャーフラグ」とは、Gutenberg プロジェクト内の特定のコードを WordPress コアとしてリリースされないようにし、特定の実験的な機能をプラグイン内だけで実行できるようにする変数です。

<!-- 
## Introducing `globalThis.IS_GUTENBERG_PLUGIN`
 -->
## globalThis.IS_GUTENBERG_PLUGIN の導入

<!-- 
The `globalThis.IS_GUTENBERG_PLUGIN` is an environment variable whose value 'flags' whether code is running within the Gutenberg plugin.

When the codebase is built for the plugin, this variable will be set to `true`. When building for WordPress core, it will be set to `false` or `undefined`.
 -->
`globalThis.IS_GUTENBERG_PLUGIN` は、環境変数です。その値は、コードが Gutenberg プラグイン内で実行されているかどうかを示します。

プラグイン用にコードベースがビルドされると、この変数は `true` に設定されます。WordPress コア用にビルドする場合は、`false` または `undefined` に設定されます。

<!--
## Basic usage

A phase 2 function or constant should be exported using the following ternary syntax:
 -->
## 基本的な使用方法

<!-- 
フェーズ2の関数や定数は次の3項構文を使用してエクスポートしてください。
 -->

<!-- 
### Exporting features
 -->
### エクスポート機能

<!-- 
A plugin-only function or constant should be exported using the following ternary syntax:
 -->
プラグイン専用の関数や定数は、次の三項構文を使用してエクスポートしてください。

<!-- 
```js
function myPluginOnlyFeature() {
	// implementation
}

export const pluginOnlyFeature = globalThis.IS_GUTENBERG_PLUGIN
	? myPluginOnlyFeature
	: undefined;
```
 -->
```js
function myPluginOnlyFeature() {
	// ここに実装
}

export const pluginOnlyFeature = globalThis.IS_GUTENBERG_PLUGIN
	? myPluginOnlyFeature
	: undefined;
```


<!--
In phase 1 environments the `phaseTwoFeature` export will be `undefined`.

If you're attempting to import and call a phase 2 feature, be sure to wrap the call to the function in an if statement to avoid an error:
 -->
<!-- 
フェーズ1の環境で `phaseTwoFeature` のエクスポートは `undefined` になります。

フェーズ2の機能をインポートし呼び出す場合はエラーを避けるため、関数呼び出しを if 文でラップしてください。
 -->
<!-- 
In non-plugin environments the `phaseTwoFeature` export will be `undefined`.
 -->
<!-- 
非プラグイン環境では、`process.env.IS_GUTENBERG_PLUGIN` のエクスポートは `undefined` になります。
 -->

<!-- 
In the above example, the `pluginOnlyFeature` export will be `undefined` in non-plugin environments such as WordPress core.
 -->
上の例の場合、WordPress コアなどの非プラグイン環境では、`pluginOnlyFeature` エクスポートは `undefined` になります。

<!-- 
### Importing features
 -->
### インポート機能
<!-- 
If you're attempting to import and call a plugin-only feature, be sure to wrap the function call in an `if` statement to avoid an error:
 -->
プラグインのみの機能をインポートし、呼び出す場合はエラーを避けるため、関数呼び出しを `if` 文で囲んでください。


```js
import { pluginOnlyFeature } from '@wordpress/foo';

if ( globalThis.IS_GUTENBERG_PLUGIN ) {
	pluginOnlyFeature();
}
```
<!--
## How it works

During the webpack build, instances of `globalThis.IS_GUTENBERG_PLUGIN` will be replaced using webpack's [define plugin](https://webpack.js.org/plugins/define-plugin/).

For example, in the following code –
 -->
## 動作原理

webpack のビルド時、`globalThis.IS_GUTENBERG_PLUGIN` は webpack の [define プラグイン](https://webpack.js.org/plugins/define-plugin/) を使用して置き換えられます。

たとえば、次のコードでは、

```js
if ( globalThis.IS_GUTENBERG_PLUGIN ) {
	pluginOnlyFeature();
}
```
<!--
When building the codebase for the plugin the variable will be replaced with the number literal `2`:
 -->
<!--  
コードベースをプラグインとしてビルドすると、変数は数値リテラル `2` で置き換えられます。
 -->
<!-- 
– the variable `globalThis.IS_GUTENBERG_PLUGIN` will be replaced with the boolean `true` during the plugin-only build:
 -->
– 変数 `globalThis.IS_GUTENBERG_PLUGIN` は、プラグインのビルドでのみ、ブール値 `true` で置き換えられます。

<!-- 
```js
if ( true ) {
	// Wepack has replaced `globalThis.IS_GUTENBERG_PLUGIN` with `true`
	pluginOnlyFeature();
}
```
 -->
```js
if ( true ) { // wepack が globalThis.IS_GUTENBERG_PLUGIN を true に置換した
	pluginOnlyFeature();
}
```


<!--
Any code within the body of the if statement will be executed within the gutenberg plugin since `2 === 2` evaluates to `true`.

For core, the `process.env.GUTENBERG_PHASE` variable is replaced with `1`, so the built code will look like:
 -->
<!--  
if 文内部のコードは、`2 === 2` が `true` と評価されるため、Gutenberg プラグイン内部で実行されます。

コアでは、`process.env.GUTENBERG_PHASE` 変数は `1` で置換されるため、ビルドされたコードは以下のようになります。
 -->
<!-- 
Any code within the body of the if statement will be executed because of this truthyness.
 -->
<!-- 
if 文の本体内にあるコードは、この `true` のため、実行されます。
 -->
<!-- 
This ensures that code within the body of the `if` statement will always be executed.

In WordPress core, the `globalThis.IS_GUTENBERG_PLUGIN` variable is replaced with `undefined`. The built code looks like this:
 -->
これにより、`if` 文の中にあるコードが、常に実行されます。

WordPress コアでは、`globalThis.IS_GUTENBERG_PLUGIN` 変数は `undefined` で置換されるため、ビルドされたコードは以下のようになります。

<!-- 
```js
if ( undefined ) {
	// Webpack has replaced `globalThis.IS_GUTENBERG_PLUGIN` with `undefined`
	pluginOnlyFeature();
}
```
 -->
```js
if ( undefined ) { // wepack が globalThis.IS_GUTENBERG_PLUGIN を undefined に置換した
	pluginOnlyFeature();
}
```

<!--
`1 === 2` evaluates to false so the phase 2 feature will not be executed within core.
 -->
<!-- 
`1 === 2` は `false` と評価されるため、フェーズ2の機能はコア内部では実行されません。
 -->
<!-- 
`undefined` evaluates to `false` so the plugin-only feature will not be executed.
 -->
`undefined` は `false` と評価されるため、プラグインのみの機能は実行されません。

<!--
### Dead code elimination

For production builds, webpack ['minifies'](https://en.wikipedia.org/wiki/Minification_(programming)) the code, removing as much unnecessary JavaScript as it can. 

One of the steps involves something known as 'dead code elimination'. For example, when the following code is encountered, webpack determines that the surrounding `if` statement is unnecessary:
 -->
### 呼ばれないコードの削除

製品のビルドでは、webpack はコードを[ミニファイ (縮小化)](https://en.wikipedia.org/wiki/Minification_(programming))し、可能な限り不要な JavaScript のコードを削除しようとします。

そのステップのひとつに、「呼ばれないコードの削除」があります。例えば、次のようなコードがあった場合、webpack は周囲の `if` 文は不要と判断します。

```js
if ( true ) {
	pluginOnlyFeature();
}
```
<!--
The condition will always evaluate to `true`, so webpack removes it, leaving behind the code that was in the body:
 -->
条件は常に `true` と評価されるため、webpack は if 文を削除し、次のコードだけが残ります。

<!-- 
```js
pluginOnlyFeature(); // The `if` condition block has been removed. Only the body remains.
```
 -->
```js
pluginOnlyFeature(); // if 条件ブロックが削除され、本体だけが残った
```

<!--
Similarly, when building for WordPress core, the condition in the following `if` statement always resolves to false:
 -->
同様に WordPress コアのビルドの場合、次の `if` 文の条件は常に `false` と解決されます。

```js
if ( undefined ) {
	pluginOnlyFeature();
}
```
<!--
The minification process will remove the entire `if` statement including the body, ensuring code destined for phase 2 is not included in the built JavaScript intended for core.
 -->
<!-- 
ミニファイプロセスは内容を含む `if` 文全体を削除します。これでフェーズ2のコードは、コア用にビルドされた JavaScript に含まれません。
 -->
<!-- 
In this case, the minification process will remove the entire `if` statement including the body, ensuring plugin-only code is not included in WordPress core build.
 -->
この例で、ミニファイプロセスは内容を含む `if` 文全体を削除します。これでプラグインのみのコードは、WordPress コア用のビルドに含まれません。

<!--
## FAQ


#### Why should I only use `===` or `!==` when comparing `process.env.GUTENBERG_PHASE` and not `>`, `>=`, `<` or `<=`?

This is a restriction due to the behaviour of the greater than or less than operators in JavaScript when `process.env.GUTENBERG_PHASE` is undefined, as might be the case for third party users of WordPress npm packages. Both `process.env.GUTENBERG_PHASE < 2` and `process.env.GUTENBERG_PHASE > 1` resolve to false. When writing `if ( process.env.GUTENBERG_PHASE > 1 )`, the intention might be to avoid executing the phase 2 code in the following `if` statement's body. That's fine since it will evaluate to false.

However, the following code doesn't quite have the intended behaviour:
 -->
<!-- 
## FAQ

#### なぜ process.env.GUTENBERG_PHASE の比較には === や !== のみを使うべきなのですか ? >、>=、<、<= ではいけないのですか ?

これは `process.env.GUTENBERG_PHASE` が `undefined` の場合の JavaScript 演算子 `>`、`<` の振る舞いのための制限です。WordPress npm パッケージのサードパーティユーザーも同様です。`process.env.GUTENBERG_PHASE < 2` も `process.env.GUTENBERG_PHASE > 1` も `false` と解決されます。`if ( process.env.GUTENBERG_PHASE > 1 )` と書いて、続く `if` 文内部のフェーズ2のコードの実行を避けるつもりなら、これは `false` と評価されるため意図したとおりに動作します。

しかし次のコードは予想したとおりに動作しません。

```
function myPhaseTwoFeature() {
	if ( process.env.GUTENBERG_PHASE < 2 ) {
		return;
	}

	// implementation of phase 2 feature
}
```
 -->
<!--
Here an early return is used to avoid execution of a phase 2 feature, but because the `if` condition resolves to false, the early return is bypassed and the phase 2 feature is incorrectly triggered.
 -->
<!-- 
このコードはフェーズ2の機能の実行を避けるため、その前で `return` しています。しかし `if` の条件は false と解決されるため、その前の `return` は通らず、フェーズ2の機能が誤って呼び出されます。
 -->
<!--
#### Why shouldn't I assign the result of an expression involving `GUTENBERG_PHASE` to a variable, e.g. `const isMyFeatureActive = process.env.GUTENBERG_PHASE === 2`?
 -->

<!--
#### Why shouldn't I assign the result of an expression involving `IS_GUTENBERG_PLUGIN` to a variable, e.g. `const isMyFeatureActive = process.env.IS_GUTENBERG_PLUGIN === 2`?
 -->

<!-- 
## Frequently asked questions
 -->
## よくある質問

<!-- 
### Why shouldn't I assign the result of an expression involving `IS_GUTENBERG_PLUGIN` to a variable, e.g. `const isMyFeatureActive = ! Object.is( undefined, globalThis.IS_GUTENBERG_PLUGIN )`?
 -->
#### なぜ IS_GUTENBERG_PLUGIN 関連の評価結果を変数に割り当てるべきではないのですか ? たとえば const isMyFeatureActive = ! Object.is( undefined, globalThis.IS_GUTENBERG_PLUGIN ) ではいけないのですか ?

<!-- 
The aim here is to avoid introducing any complexity that could result in webpack's minifier not being able to eliminate dead code. See the [Dead Code Elimination](#dead-code-elimination) section for further details.

Introducing complexity may prevent webpack's minifier from identifying and therefore eliminating dead code. Therefore it is recommended to use the examples in this document to ensure your feature flag functions as intended. For further details, see the [Dead Code Elimination](#dead-code-elimination) section.
 -->
webpack のミニファイが呼ばれないコードを削除できるよう、コードに複雑性を持ち込まないようにするためです。詳細については上の「呼ばれないコードの削除」セクションを参照してください。

複雑にすると、webpack のミニファイアが呼ばれないコードを識別できず、また削除できなくなる可能性があるためです。そのため、このドキュメントにある例を使用して、フィーチャーフラグが意図したとおりに機能することを確認してください。詳細については上の「呼ばれないコードの削除」セクションを参照してください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/feature-flags.md)
