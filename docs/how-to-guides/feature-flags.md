<!--
# Feature Flags
 -->
# フィーチャーフラグ

<!--
With phase 2 of the Gutenberg project there's a need for improved control over how code changes are released. Newer features developed for phase 2 and beyond should only be released to the Gutenberg plugin, while improvements and bug fixes should still continue to make their way into core releases.

The technique for handling this is known as a 'feature flag'.
 -->
Gutenberg プロジェクトのフェーズ2を開始するにあたってはコード変更のリリースコントロールを改良する必要がありました。フェーズ2以降で開発された新しい機能は Gutenberg プラグインとしてリリースする一方、改良やバグの修正は引き続きコアリリースに反映しなければなりません。

こうした処理技術は「フィーチャーフラグ」として知られています。

<!--
## Introducing `process.env.GUTENBERG_PHASE`

The `process.env.GUTENBERG_PHASE` is an environment variable containing a number that represents the phase. When the codebase is built for the plugin, this variable will be set to `2`. When building for core, it will be set to `1`.
 -->
## process.env.GUTENBERG_PHASE の導入

`process.env.GUTENBERG_PHASE` はフェーズ番号を示す環境変数です。コードをプラグインとしてビルドする際、この変数を `2` にセットします。コアとしてビルドする際には `1` にセットします。

<!--
## Basic Use

A phase 2 function or constant should be exported using the following ternary syntax:
 -->
## 基本的な使用方法

フェーズ2の関数や定数は次の3項構文を使用してエクスポートしてください。

```js
function myPhaseTwoFeature() {
	// implementation
}

export const phaseTwoFeature =
	process.env.GUTENBERG_PHASE === 2 ? myPhaseTwoFeature : undefined;
```
<!--
In phase 1 environments the `phaseTwoFeature` export will be `undefined`.

If you're attempting to import and call a phase 2 feature, be sure to wrap the call to the function in an if statement to avoid an error:
 -->
フェーズ1の環境で `phaseTwoFeature` のエクスポートは `undefined` になります。

フェーズ2の機能をインポートし呼び出す場合はエラーを避けるため、関数呼び出しを if 文でラップしてください。

```js
import { phaseTwoFeature } from '@wordpress/foo';

if ( process.env.GUTENBERG_PHASE === 2 ) {
	phaseTwoFeature();
}
```
<!--
### How it works

During the webpack build, any instances of `process.env.GUTENBERG_PHASE` will be replaced using webpack's define plugin (https://webpack.js.org/plugins/define-plugin/).

If you write the following code:
 -->
### 動作原理

webpack のビルド時、すべての `process.env.GUTENBERG_PHASE` は webpack の [define プラグイン](https://webpack.js.org/plugins/define-plugin/) を使用して置き換えられます。

次のようなコードがある場合

```js
if ( process.env.GUTENBERG_PHASE === 2 ) {
	phaseTwoFeature();
}
```
<!--
When building the codebase for the plugin the variable will be replaced with the number literal `2`:
 -->
コードベースをプラグインとしてビルドすると、変数は数値リテラル `2` で置き換えられます。

```js
if ( 2 === 2 ) {
	phaseTwoFeature();
}
```
<!--
Any code within the body of the if statement will be executed within the gutenberg plugin since `2 === 2` evaluates to `true`.

For core, the `process.env.GUTENBERG_PHASE` variable is replaced with `1`, so the built code will look like:
 -->
if 文内部のコードは、`2 === 2` が `true` と評価されるため、Gutenberg プラグイン内部で実行されます。

コアでは、`process.env.GUTENBERG_PHASE` 変数は `1` で置換されるため、ビルドされたコードは以下のようになります。

```js
if ( 1 === 2 ) {
	phaseTwoFeature();
}
```
<!--
`1 === 2` evaluates to false so the phase 2 feature will not be executed within core.
 -->
`1 === 2` は `false` と評価されるため、フェーズ2の機能はコア内部では実行されません。

<!--
### Dead Code Elimination

When building code for production, webpack 'minifies' code (https://en.wikipedia.org/wiki/Minification_(programming)), removing the amount of unnecessary JavaScript as much as possible. One of the steps involves something known as 'dead code elimination'.

When the following code is encountered, webpack determines that the surrounding `if`statement is unnecessary:
 -->
### 呼ばれないコードの削除

本番リリース用にコードをビルドする場合、webpack はコードを[ミニファイ (縮小化)](https://en.wikipedia.org/wiki/Minification_(programming)) し、可能な限り不要な JavaScript のコードを削除しようとします。その中の1つが「呼ばれないコードの削除」です。

次のコードに出会うと webpack は周りの `if` 文は不要と判断します。

```js
if ( 2 === 2 ) {
	phaseTwoFeature();
}
```
<!--
The condition will always evaluates to `true`, so can be removed leaving just the code in the body:
 -->
条件は常に `true` と評価されるため、if 文を削除し、中の実行部分のみを残すことができます。

```js
phaseTwoFeature();
```

<!--
Similarly when building for core, the condition in the following `if` statement always resolves to false:
 -->
同様にコアのビルドの場合、次の `if` 文の条件は常に `false` と解決されます。

```js
if ( 1 === 2 ) {
	phaseTwoFeature();
}
```
<!--
The minification process will remove the entire `if` statement including the body, ensuring code destined for phase 2 is not included in the built JavaScript intended for core.
 -->
ミニファイプロセスは内容を含む `if` 文全体を削除します。これでフェーズ2のコードは、コア用にビルドされた JavaScript に含まれません。

<!--
## FAQ

#### Why should I only use `===` or `!==` when comparing `process.env.GUTENBERG_PHASE` and not `>`, `>=`, `<` or `<=`?

This is a restriction due to the behaviour of the greater than or less than operators in JavaScript when `process.env.GUTENBERG_PHASE` is undefined, as might be the case for third party users of WordPress npm packages. Both `process.env.GUTENBERG_PHASE < 2` and `process.env.GUTENBERG_PHASE > 1` resolve to false. When writing `if ( process.env.GUTENBERG_PHASE > 1 )`, the intention might be to avoid executing the phase 2 code in the following `if` statement's body. That's fine since it will evaluate to false.

However, the following code doesn't quite have the intended behaviour:
 -->
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
<!--
Here an early return is used to avoid execution of a phase 2 feature, but because the `if` condition resolves to false, the early return is bypassed and the phase 2 feature is incorrectly triggered.
 -->
このコードはフェーズ2の機能の実行を避けるため、その前で `return` しています。しかし `if` の条件は false と解決されるため、その前の `return` は通らず、フェーズ2の機能が誤って呼び出されます。

<!--
#### Why shouldn't I assign the result of an expression involving `GUTENBERG_PHASE` to a variable, e.g. `const isMyFeatureActive = process.env.GUTENBERG_PHASE === 2`?

The aim here is to avoid introducing any complexity that could result in webpack's minifier not being able to eliminate dead code. See the [Dead Code Elimination](#dead-code-elimination) section for further details.
 -->
#### なぜ GUTENBERG_PHASE 関連の評価結果を変数に割り当てるべきではないのですか ? たとえば const isMyFeatureActive = process.env.GUTENBERG_PHASE === 2 ではいけないのですか ?

webpack のミニファイが呼ばれないコードを削除できるよう、コードに複雑性を持ち込まないようにするためです。詳細については上の「呼ばれないコードの削除」セクションを参照してください。

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/feature-flags.md)
