<!-- 
# Selectors
 -->
# セレクタ

<!-- 
Block Selectors is the API that allows blocks to customize the CSS selector used
when their styles are generated.
 -->
ブロックセレクタは、ブロックのスタイル生成時に使用される CSS セレクタをカスタマイズするためのAPI です。

<!-- 
A block may customize its CSS selectors at three levels: root, feature, and
subfeature.
 -->
ブロックはその CSS セレクタを3つのレベル、「ルート」「フィーチャー」「サブフィーチャー」でカスタマイズできます。

<!-- 
## Root selector
 -->
## ルートセレクタ

<!-- 
The root selector is the block's primary CSS selector.
 -->
ルートセレクタは、ブロックのプライマリ CSS セレクタです。

<!-- 
All blocks require a primary CSS selector for their style declarations to be
included under. If one is not provided through the Block Selectors API, a
default is generated in the form of `.wp-block-<name>`.
 -->
すべてのブロックはプライマリ CSS セレクタが必要です。スタイル宣言は、プライマリ CSS セレクタの下に含まれます。ブロックセレクタ API を介してプライマリ CSS セレクタが提供されていない場合は `.wp-block-<名前>` という形式で生成されます。

<!-- 
### Example
 -->
### 例

```json
{
	...
	"selectors": {
		"root": ".my-custom-block-selector"
	}
}
```

<!-- 
## Feature selectors
 -->
## フィーチャーセレクター

<!-- 
Feature selectors relate to styles for a block support, e.g. border, color,
typography, etc.
 -->
フィーチャーセレクターは、ブロックサポートのスタイルに関連します。たとえば、border、color、typography など。

<!-- 
A block may wish to apply the styles for specific features to different
elements within a block. An example might be using colors on the block's wrapper
but applying the typography styles to an inner heading only.
 -->
ブロックは、ブロック内の異なる要素に対して、特定のフィーチャーのスタイルを適用したい場合があります。例えば、ブロックのラッパーに色を使用する一方、タイポグラフィスタイルは内側の見出しのみに適用する、などです。

<!-- 
### Example
 -->
### 例

```json
{
	...
	"selectors": {
		"root": ".my-custom-block-selector",
		"color": ".my-custom-block-selector",
		"typography": ".my-custom-block-selector > h2"
	}
}
```

<!-- 
## Subfeature selectors
 -->
## サブフィーチャーセレクタ

<!-- 
These selectors relate to individual styles provided by a block support e.g.
`background-color`
 -->
これらのセレクタは、ブロックサポートによって提供される個々のスタイルに関連します。例: `background-color`

<!-- 
A subfeature can have styles generated under its own unique selector. This is
especially useful where one block support subfeature can't be applied to the
same element as the support's other subfeatures.
 -->
サブフィーチャは自身の固有のセレクタの下で生成されたスタイルを持つことができます。これは特に、あるブロックサポートのサブフィーチャーを、そのサポートの他のサブフィーチャーと同じ要素に適用できない場合に便利です。

<!-- 
A great example of this is `text-decoration`. Web browsers render this style
differently, making it difficult to override if added to a wrapper element. By
assigning `text-decoration` a custom selector, its style can target only the
elements to which it should be applied.
 -->
この良い例が `text-decoration` です。ウェブブラウザはこのスタイルを異なる方法でレンダーするため、ラッパー要素に追加しても上書きすることが困難です。`text-decoration` にカスタムセレクタを割り当てることで、そのスタイルを適用すべき要素のみをターゲットにできます。

<!-- 
### Example
 -->
### 例

```json
{
	...
	"selectors": {
		"root": ".my-custom-block-selector",
		"color": ".my-custom-block-selector",
		"typography": {
			"root": ".my-custom-block-selector > h2",
			"text-decoration": ".my-custom-block-selector > h2 span"
		}
	}
}
```

<!-- 
## Shorthand
 -->
## 省略記法

<!-- 
Rather than specify a CSS selector for every subfeature, you can set a single
selector as a string value for the relevant feature. This is the approach
demonstrated for the `color` feature in the earlier examples above.
 -->
すべてのサブフィーチャーに対して CSS セレクタを指定するのではなく、関連するフィーチャーに対して単一のセレクタを文字列値として設定できます。これは、上の例の `color` フィーチャーで示した方法です。

<!-- 
## Fallbacks
 -->
## フォールバック

<!-- 
A selector that hasn't been configured for a specific feature will fall back to
the block's root selector. Similarly, if a subfeature hasn't had a custom
selector set, it will fall back to its parent feature's selector and, if unavailable, fall back further to the block's root selector.
 -->
特定の機能に対して構成されていないセレクタは、ブロックのルートセレクタにフォールバックします。同様に、サブフィーチャーにカスタムセレクタが設定されていない場合、親フィーチャーのセレクタにフォールバックし、それが利用できない場合はさらにブロックのルートセレクタにフォールバックします。

<!-- 
Rather than repeating selectors for multiple subfeatures, you can set the
common selector as the parent feature's `root` selector and only define the
unique selectors for the subfeatures that differ.
 -->
複数のサブフィーチャーのセレクタを繰り返すのではなく、共通のセレクタを親フィーチャーの `root` セレクタとして設定し、異なるサブフィーチャーの固有セレクタだけを定義できます。

<!-- 
### Example
 -->
### 例

```json
{
	...
	"selectors": {
		"root": ".my-custom-block-selector",
		"color": {
			"text": ".my-custom-block-selector p"
		},
		"typography": {
			"root": ".my-custom-block-selector > h2",
			"text-decoration": ".my-custom-block-selector > h2 span"
		}
	}
}
```

<!-- 
The `color.background-color` subfeature isn't explicitly set in the above
example. As the `color` feature also doesn't define a `root` selector,
`color.background-color` would be included under the block's primary root
selector, `.my-custom-block-selector`.
 -->
上の例では、`color.background-color` サブフィーチャーは明示的に設定されていません。`color` フィーチャーも `root`セレクタを定義していないため、`color.background-color` は、ブロックのプライマリルートセレクタである `.my-custom-block-selector` の下に含まれることになります。

<!-- 
For a subfeature such as `typography.font-size`, it would fallback to its parent
feature's selector given that is present, i.e. `.my-custom-block-selector > h2`.
 -->
`typography.font-size` のようなサブフィーチャーは、親フィーチャーのセレクタが存在する場合、そのセレクタにフォールバックします。例えば `.my-custom-block-selector > h2` です。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-selectors.md)