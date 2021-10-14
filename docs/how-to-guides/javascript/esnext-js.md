<!-- 
# ESNext Syntax
 -->
# ESNext 構文

<!-- 
The JavaScript language continues to evolve, the syntax used to write JavaScript code is not fixed but changes over time. [Ecma International](https://en.wikipedia.org/wiki/Ecma_International) is the organization that sets the standard for the language, officially called [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript). A new standard for JavaScript is published each year, the 6th edition published in 2015 is often referred to as ES6. Our usage would more appropriately be **ESNext** referring to the latest standard. The build step is what converts this latest syntax of JavaScript to a version understood by browsers.

Here are some common ESNext syntax patterns used throughout the Gutenberg project.
 -->
JavaScript 言語は変化し続けており JavaScript コードを書く場合に使用される構文も固定されておらず、時間と共に変化します。[Ecma International](https://en.wikipedia.org/wiki/Ecma_International) は JavaScript 言語仕様を制定する組織で、仕様は [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) と呼ばれます。新しい JavaScript 仕様は毎年発行され、2015年に発行された 6番目の版は ES6 と参照されます。このドキュメントではより適切に最新の仕様を **ESNext** と参照します。ビルドステップはこの最新の JavaScript 構文をブラウザーが理解できるバージョンに変換します。

以下に Gutenberg プロジェクトで使用されるいくつかの一般的な ESNext 構文パターンを示します。

<!-- 
## Destructuring Assignments
 -->
## 分割代入

<!-- 
The [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax allows you to pull apart arrays, or properties from objects into their own variable.

For the object `const obj = { foo: "bar" }`

Creating and assigning a new variable `foo` can be done in a single step: `const { foo } = obj;`

The curly brackets on the left side tells JavaScript to inspect the object `obj` for the property `foo` and assign its value to the new variable of the same name.
 -->
[分割代入](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 構文を使用すると配列から値を取り出して、あるいはオブジェクトからプロパティを取り出して別個の変数に代入できます。

オブジェクト `const obj = { foo: "bar" }` に対して

次の1ステップで新しい変数 `foo` を作成し値を割り当てることができます: `const { foo } = obj;`

左側の中括弧は JavaScript にオブジェクト `obj` のプロパティ `foo` を調べ、その値を同じ名前の新しい変数に割り当てるよう指示します。

<!-- 
## Arrow Functions
 -->
## アロー関数

<!-- 
Arrow functions provide a shorter syntax for defining a function; this is such a common task in JavaScript that having a syntax a bit shorter is quite helpful.

Before you might define a function like:
 -->
アロー関数は、関数の定義の短縮構文を提供します。関数の定義は JavaScript で多用するタスクですのでこれを短くすることは極めて有用です。

次のような関数を定義するとします。

```js
const f = function ( param ) {
	console.log( param );
};
```
<!-- 
Using arrow function, you can define the same using:
 -->
アロー関数を使用すると次のように定義できます。

```js
const g = ( param ) => {
	console.log( param );
};
```
<!-- 
Or even shorter, if the function is only a single-line you can omit the
curly braces:
 -->
関数が単一行であれば中括弧を省略し、さらに短くすることができます。

```js
const g2 = ( param ) => console.log( param );
```
<!-- 
In the examples above, using `console.log` we aren't too concerned about the return values. However, when using arrow functions in this way, the return value is set whatever the line returns.

For example, our save function could be shortened from:
 -->
`console.log` を使用した上の例では戻り値についてあまり気にしていません。しかしアロー関数をこのように使用すればどのような戻り値であれセットできます。

たとえば以下の save 関数は

```js
save: ( { attributes } ) => {
	return <div className="theurl">{ attributes.url }</div>;
};
```
<!-- 
To:
 -->
次のように短くできます。

```js
save: ( { attributes } ) => <div className="theurl">{ attributes.url }</div>;
```
<!-- 
There are even more ways to shorten code, but you don't want to take it too far and make it harder to read what is going on.
 -->
さらにコードを短くする方法がありますが、やりすぎると読みづらくなります。

<!-- 
## Imports
 -->
## インポート

<!-- 
The [import statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) is used to import variables or functions from an exported file. You can use destructuring on imports, for example:
 -->
[インポート文](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import) を使用するとエクスポートされたファイルから変数や関数をインポートできます。インポートの分割を使用できます。たとえば

```js
import { TextControl } from '@wordpress/components';
```
<!-- 
This will look in the `@wordpress/components` package for the exported `TextControl` variable.

A package or file can also set a `default` export, this is imported without using the curly brackets. For example
 -->
これは `@wordpress/components` パッケージの中でエクスポートされた `TextControl` 変数を見ます。

パッケージやファイルは `default` エクスポートをセットできます。中括弧を使わなくてもインポートされます。たとえば

```js
const edit = ( { attributes, setAttributes } ) => {
    return (
        <div>
            <TextControl
                label="URL"
                value={ attributes.url }
                onChange={ ... }
            />
        </div>
    );
};

export default edit;
```
<!-- 
To import, you would use:
 -->
インポートするには以下のようにします。

```js
import edit from './edit';

registerBlockType( 'mkaz/qrcode-block', {
	title: 'QRCode Block',
	icon: 'visibility',
	category: 'widgets',
	attributes: {
		url: {
			type: 'string',
			source: 'text',
			selector: '.theurl',
		},
	},
	edit,
	save: ( { attributes } ) => {
		return <div> ... </div>;
	},
} );
```
<!-- 
Note, you can also shorten `edit: edit` to just `edit` as shown above. JavaScript will automatically assign the property `edit` to the value of `edit`. This is another form of destructuring.
 -->
注意: 上で見たように `edit: edit` は `edit` と短くできます。JavaScript は自動的にプロパティ `edit` に `edit` の値を割り当てます。これは分割の別の形式です。

<!-- 
## Summary
 -->
## まとめ

<!-- 
It helps to become familiar with the ESNext syntax and the common shorter forms. It will give you a greater understanding of reading code examples and what is going on.

Here are a few more resources that may help
 -->
ESNext 構文と一般的な短縮形に親しむことで、コード例を読んでも何を実行しているのか理解できるようになるでしょう。

役に立つ追加リソースを挙げます。

-   [ES5 vs ES6 with example code](https://medium.com/recraftrelic/es5-vs-es6-with-example-code-9901fa0136fc)
-   [Top 10 ES6 Features by Example](https://blog.pragmatists.com/top-10-es6-features-by-example-80ac878794bb)
-   [ES6 Syntax and Feature Overview](https://www.taniarascia.com/es6-syntax-and-feature-overview/)

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/tutorials/javascript/esnext-js.md)
