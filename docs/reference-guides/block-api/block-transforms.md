<!--
# Transforms
 -->
# 変換

<!--
Block Transforms is the API that allows a block to be transformed _from_ and _to_ other blocks, as well as _from_ other entities. Existing entities that work with this API include shortcodes, files, regular expressions, and raw DOM nodes.
 -->
「ブロック変換 (Block Transforms)」API は、あるブロックを別のブロックに、あるいは、あるエンティティからブロックに変換します。この API のサポートする既存エンティティには、ショートコード、ファイル、正規表現、生の DOM ノードがあります。

<!--
## Transform direction: `to` and `from`
 -->
## 変換の方向: to と from
<!--
A block declares which transformations it supports via the optional `transforms` key of the block configuration, whose subkeys `to` and `from` hold an array of available transforms for every direction. Example:
 -->
ブロックはブロック構成の `transforms` オプションキーを使用して、どちらの方向の変換をサポートするかを宣言します。サブキー `to` と `from` には、すべての方向に対する利用可能な変換の配列を指定します。

<!--
```js
export const settings = {
	title: 'My Block Title',
	description: 'My block description',
	/* ... */
	transforms: {
		from: [
			/* supported from transforms */
		],
		to: [
			/* supported to transforms */
		],
	},
};
```
 -->
```js
export const settings = {
    title: 'My Block Title',
    description: 'My block description',
    /* ... */
    transforms: {
        from: [ /* サポートする from 変換 */ ],
        to: [ /* サポートする to 変換 */ ],
    }
}
```

<!--
## Transformations types
 -->
## 変換タイプ

<!--
This section goes through the existing types of transformations blocks support:
 -->
このセクションではブロックがサポートする既存の変換タイプを説明します。

-   block
-   enter
-   files
-   prefix
-   raw
-   shortcode

<!--
### Block
 -->
### block
<!--
This type of transformations support both _from_ and _to_ directions, allowing blocks to be converted into a different one. It has a corresponding UI control within the block toolbar.

A transformation of type `block` is an object that takes the following parameters:
 -->
「block」変換タイプは _from_ と _to_ 双方向の変換をサポートし、あるブロックを異なるブロックに変換できます。ブロックツールバー内には関連する UI コントロールがあります。

`block` 変換タイプは次のパラメータを取るオブジェクトです。
<!--
-   **type** _(string)_: the value `block`.
-   **blocks** _(array)_: a list of known block types. It also accepts the wildcard value (`"*"`), meaning that the transform is available to _all_ block types (eg: all blocks can transform into `core/group`).
-   **transform** _(function)_: a callback that receives the attributes and inner blocks of the block being processed. It should return a block object or an array of block objects.
-   **isMatch** _(function, optional)_: a callback that receives the block attributes as the first argument and the block object as the second argument and should return a boolean. Returning `false` from this function will prevent the transform from being available and displayed as an option to the user.
-   **isMultiBlock** _(boolean, optional)_: whether the transformation can be applied when multiple blocks are selected. If true, the `transform` function's first parameter will be an array containing each selected block's attributes, and the second an array of each selected block's inner blocks. False by default.
-   **priority** _(number, optional)_: controls the priority with which a transformation is applied, where a lower value will take precedence over higher values. This behaves much like a [WordPress hook](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress). Like hooks, the default priority is `10` when not otherwise set.
 -->
- **type** _(string)_: 文字列 `block`。
- **blocks** _(array)_: 既知のブロックタイプ。ワイルドカード値 (`"*"`) も指定でき、この場合 _すべての_ ブロックタイプで変換可能であることを意味する (例: すべてのブロックは `core/group` に変換できる)。
- **transform** _(function)_: 処理されるブロックの属性とインナーブロックを受け取るコールバック。ブロックオブジェクトまたはブロックオブジェクトの配列を返さなければならない。
- **isMatch** _(function、オプション)_: 第1引数にブロックの属性、第2引数にブロックオブジェクトを受け取り、ブール値を返すコールバック。`false` を返すと可能な変換を行わず、ユーザーにオプションを表示する。
- **isMultiBlock** _(boolean、オプション)_: 複数のブロックを選択している場合に変換を適用可能かどうか。true であれば `transform` 関数の最初のパラメータは選択した各ブロックの属性の配列、2番目のパラメータは選択した各ブロックのインナーブロックの配列になる。デフォルトは false。
- **priority** _(number、オプション)_: 変換を適用するプライオリティ。値の小さな方が優先される。この動きは [WordPress のフック](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress) と同じ。フックと同様に指定されていない場合のデフォルトのプライオリティは `10`。

<!--
**Example: from Paragraph block to Heading block**
 -->
**例: 「段落」ブロックから「見出し」ブロックへの変換**

<!--
To declare this transformation we add the following code into the heading block configuration, which uses the `createBlock` function from the [`wp-blocks` package](/packages/blocks/README.md#createBlock).
 -->
この変換を宣言するには「見出し」ブロック構成に以下のコードを追加します。[`wp-blocks` パッケージ](https://developer.wordpress.org/block-editor/packages/packages-blocks/#createBlock) から `createBlock` 関数を使用します。

```js
transforms: {
    from: [
        {
            type: 'block',
            blocks: [ 'core/paragraph' ],
            transform: ( { content } ) => {
                return createBlock( 'core/heading', {
                    content,
                } );
            },
        },
    ]
},
```
<!--
**Example: blocks that have InnerBlocks**
 -->
**例: InnerBlock をもつブロックへの変換**
<!--
A block with InnerBlocks can also be transformed from and to another block with InnerBlocks.
 -->
InnerBlock をもつブロックも別の InnerBlock をもつブロックとの間で変換できます。

```js
transforms: {
    to: [
        {
            type: 'block',
            blocks: [ 'some/block-with-innerblocks' ],
            transform: ( attributes, innerBlocks ) => {
                return createBlock(
                    'some/other-block-with-innerblocks',
                    attributes,
                    innerBlocks
                );
            },
        },
    ],
},
```
<!--
### Enter
 -->
### enter
<!--
This type of transformations support the _from_ direction, allowing blocks to be created from some content introduced by the user. They're applied in a new block line after the user has introduced some content and hit the ENTER key.

A transformation of type `enter` is an object that takes the following parameters:
 -->
「enter」変換タイプは _from_ 方向の変換をサポートし、ユーザーが与えたコンテンツからブロックを作成します。ユーザーが何かコンテンツを入力し Enter キーを押下すると、新しいブロック行に適用されます。

`enter` 変換タイプは次のパラメータを取るオブジェクトです。

<!--
-   **type** _(string)_: the value `enter`.
-   **regExp** _(RegExp)_: the Regular Expression to use as a matcher. If the value matches, the transformation will be applied.
-   **transform** _(function)_: a callback that receives an object with a `content` field containing the value that has been entered. It should return a block object or an array of block objects.
-   **priority** _(number, optional)_: controls the priority with which a transform is applied, where a lower value will take precedence over higher values. This behaves much like a [WordPress hook](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress). Like hooks, the default priority is `10` when not otherwise set.
 -->
- **type** _(string)_: 文字列 `enter`。
- **regExp** _(RegExp)_: パターンマッチに使用する正規表現。マッチすれば変換が適用される。
- **transform** _(function)_: 入力された値を含む `content` フィールドを持つオブジェクトを受け取るコールバック。ブロックオブジェクトまたはブロックオブジェクトの配列を返さなければならない。
- **priority** _(number, オプション)_: 変換を適用するプライオリティ。値の小さな方が優先される。この動きは [WordPress のフック](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress) と同じ。フックと同様に指定されていない場合のデフォルトのプライオリティは `10`。

<!--
**Example: from --- to Separator block**
 -->
**例: --- から「区切り」ブロックへの変換**

<!--
To create a separator block when the user types the hyphen three times and then hits the ENTER key we can use the following code:
 -->
ユーザーが「-」を3回入力し Enter キーを押下した場合に「区切り」ブロックを作成します。

```js
transforms = {
	from: [
		{
			type: 'enter',
			regExp: /^-{3,}$/,
			transform: () => createBlock( 'core/separator' ),
		},
	],
};
```
<!--
### Files
 -->
### files
<!--
This type of transformations support the _from_ direction, allowing blocks to be created from files dropped into the editor.

A transformation of type `files` is an object that takes the following parameters:
 -->
「files」変換タイプは _from_ 方向の変換をサポートし、エディター内にドロップされたファイルからブロックを作成します。

`files` 変換タイプは次のパラメータを取るオブジェクトです。

<!--
-   **type** _(string)_: the value `files`.
-   **transform** _(function)_: a callback that receives the array of files being processed. It should return a block object or an array of block objects.
-   **isMatch** _(function, optional)_: a callback that receives the array of files being processed and should return a boolean. Returning `false` from this function will prevent the transform from being applied.
-   **priority** _(number, optional)_: controls the priority with which a transform is applied, where a lower value will take precedence over higher values. This behaves much like a [WordPress hook](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress). Like hooks, the default priority is `10` when not otherwise set.
 -->
- **type** _(string)_: 文字列 `files`。
- **transform** _(function)_: 処理するファイルの配列を受け取るコールバック。ブロックオブジェクトまたはブロックオブジェクトの配列を返さなければならない。
- **isMatch** _(function、オプション)_: 処理するファイルの配列を受け取り、ブール値を返すコールバック。`false` を返すと変換を適用しない。
- **priority** _(number, オプション)_: 変換を適用するプライオリティ。値の小さな方が優先される。この動きは [WordPress のフック](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress) と同じ。フックと同様に指定されていない場合のデフォルトのプライオリティは `10`。

<!--
**Example: from file to File block**
 -->
**例: ファイルから「ファイル」ブロックへの変換**

<!--
To create a File block when the user drops a file into the editor we can use the following code:
 -->
ユーザーがエディターにファイルをドロップすると「ファイル」ブロックに変換します。

<!--
```js
transforms: {
	from: [
		{
			type: 'files',
			isMatch: ( files ) => files.length === 1,
			// By defining a lower priority than the default of 10,
			// we make that the File block to be created as a fallback,
			// if no other transform is found.
			priority: 15,
			transform: ( files ) => {
				const file = files[ 0 ];
				const blobURL = createBlobURL( file );
				// File will be uploaded in componentDidMount()
				return createBlock( 'core/file', {
					href: blobURL,
					fileName: file.name,
					textLinkHref: blobURL,
				} );
			},
		},
	];
}
```
-->

```js
transforms: {
    from: [
        {
            type: 'files',
            isMatch: ( files ) => files.length === 1,
            // デフォルトの 10 よりも低いプライオリティを設定することで
            // 他の変換が見つからない場合のフォールバックとして
            // 「ファイル」ブロックを作成できます。
            priority: 15,
            transform: ( files ) => {
                const file = files[ 0 ];
                const blobURL = createBlobURL( file );
                // ファイルは componentDidMount() でアップロードされます。
                return createBlock( 'core/file', {
                    href: blobURL,
                    fileName: file.name,
                    textLinkHref: blobURL,
                } );
            },
        },
    ];
}
```

<!--
### Prefix
 -->
### prefix
<!--
This type of transformations support the _from_ direction, allowing blocks to be created from some text typed by the user. They're applied when, in a new block line, the user types some text and then adds a trailing space.

A transformation of type `prefix` is an object that takes the following parameters:
 -->
「prefix」変換タイプは _from_ 方向をサポートし、ユーザーが入力したテキストからブロックを作成します。新しいブロック行でユーザーがテキストを入力し、続けて空白を入力するとこの変換が適用されます。

`prefix` 変換タイプは次のパラメータを取るオブジェクトです。

<!--
-   **type** _(string)_: the value `prefix`.
-   **prefix** _(string)_: the character or sequence of characters that match this transform.
-   **transform** _(function)_: a callback that receives the content introduced. It should return a block object or an array of block objects.
-   **priority** _(number, optional)_: controls the priority with which a transform is applied, where a lower value will take precedence over higher values. This behaves much like a [WordPress hook](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress). Like hooks, the default priority is `10` when not otherwise set.
 -->
- **type** _(string)_: 文字列 `prefix`。
- **prefix** _(string)_: この変換にマッチする文字、または文字列。
- **transform** _(function)_: 入力したコンテンツを受け取るコールバック。ブロックオブジェクトまたはブロックオブジェクトの配列を返さなければならない。
- **priority** _(number, オプション)_: 変換を適用するプライオリティ。値の小さな方が優先される。この動きは [WordPress のフック](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress) と同じ。フックと同様に指定されていない場合のデフォルトのプライオリティは `10`。

<!--
**Example: from text to custom block**
 -->
**例: テキストからカスタムブロックへの変換**
<!--
If we want to create a custom block when the user types the question mark, we could use this code:
 -->
ユーザーが疑問符「?」を入力するとカスタムブロックを作成します。

```js
transforms: {
	from: [
		{
			type: 'prefix',
			prefix: '?',
			transform( content ) {
				return createBlock( 'my-plugin/question', {
					content,
				} );
			},
		},
	];
}
```

<!--
### Raw
 -->
### raw
<!--
This type of transformations support the _from_ direction, allowing blocks to be created from raw HTML nodes. They're applied when the user executes the "Convert to Blocks" action from within the block setting UI menu, as well as when some content is pasted or dropped into the editor.

A transformation of type `raw` is an object that takes the following parameters:
 -->
「raw」変換タイプは _from_ 方向をサポートし、生の HTML ノードからブロックを生成します。ユーザーがブロック設定 UI メニューで「ブロックへ変換」アクションを実行した場合、またはコンテンツをエディターに貼り付けたり、ドロップした場合にこの変換が適用されます。

タイプ `raw` の変換は、次のパラメータを取るオブジェクトです。

<!--
-   **type** _(string)_: the value `raw`.
-   **transform** _(function, optional)_: a callback that receives the node being processed. It should return a block object or an array of block objects.
-   **schema** _(object|function, optional)_: defines an [HTML content model](https://html.spec.whatwg.org/multipage/dom.html#content-models) used to detect and process pasted contents. See [below](#schemas-and-content-models).
-   **selector** _(string, optional)_: a CSS selector string to determine whether the element matches according to the [element.matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) method. The transform won't be executed if the element doesn't match. This is a shorthand and alternative to using `isMatch`, which, if present, will take precedence.
-   **isMatch** _(function, optional)_: a callback that receives the node being processed and should return a boolean. Returning `false` from this function will prevent the transform from being applied.
-   **priority** _(number, optional)_: controls the priority with which a transform is applied, where a lower value will take precedence over higher values. This behaves much like a [WordPress hook](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress). Like hooks, the default priority is `10` when not otherwise set.
 -->
- **type** _(string)_: 文字列 `raw`。
- **transform** _(function、オプション)_: 処理するノードを受け取るコールバック。ブロックオブジェクトまたはブロックオブジェクトの配列を返さなければならない。
- **schema** _(object|function、オプション)_: 張り付けられたコンテンツの検出と処理に使用される [HTML content model](https://html.spec.whatwg.org/multipage/dom.html#content-models) を定義する。以下の「スキーマとコンテンツモデル」を参照してください。
- **selector** _(string、オプション)_: [element.matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) メソッドに従って要素が合致するかどうかを決定する CSS セレクター文字列。要素がマッチしない場合、変換は実行されない。`isMatch` の代替、かつ、短縮形。あれば、`isMatch` が優先。
- **isMatch** _(function、オプション)_: 処理するノードを受け取り、ブール値を返すコールバック。`false` を返すと変換を適用しない。
- **priority** _(number, オプション)_: 変換を適用するプライオリティ。値の小さな方が優先される。この動きは [WordPress のフック](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress) と同じ。フックと同じく、値が指定されていない場合のデフォルトのプライオリティは `10`。
<!--

**Example: from URLs to Embed block**
 -->
**例: URL から「埋め込み」ブロックへの変換**
<!--
If we want to create an Embed block when the user pastes some URL in the editor, we could use this code:
 -->
ユーザーがエディターに URL を貼り付けると「埋め込み」ブロックを作成する。

```js
transforms: {
    from: [
        {
            type: 'raw',
            isMatch: ( node ) =>
                node.nodeName === 'P' &&
                /^\s*(https?:\/\/\S+)\s*$/i.test( node.textContent ),
            transform: ( node ) => {
                return createBlock( 'core/embed', {
                    url: node.textContent.trim(),
                } );
            },
        },
    ],
}
```
<!-- 
<h4 id="schemas-and-content-models">Schemas and Content Models</h4>
 -->
#### スキーマとコンテンツモデル

<!-- 
When pasting content it's possible to define a [content model](https://html.spec.whatwg.org/multipage/dom.html#content-models) that will be used to validate and process pasted content. It's often the case that HTML pasted into the editor will contain a mixture of elements that _should_ transfer as well as elements that _shouldn't_. For example, consider pasting `<span class="time">12:04 pm</span>` into the editor. We want to copy `12:04 pm` and omit the `<span>` and its `class` attribute because those won't carry the same meaning or structure as they originally did from where they were copied.

 -->
コンテンツを貼り付ける際、[コンテンツモデル](https://html.spec.whatwg.org/multipage/dom.html#content-models)を定義して、コンテンツの妥当性を検証し、処理できます。エディターに貼り付けられたHTMLには、変換すべき要素と、変換すべきでない要素が混在します。例えば、エディターに `<span class="time">12:04 pm</span>` を貼り付ける場合、`12:04 pm` はコピーしますが、`<span>` と、その `class` 属性は削除したいでしょう。なぜなら、コピー元のオリジナル文書には存在した、意味や構造を、コピー先には持ち込めないためです。

<!-- 
When writing `raw` transforms you can control this by supplying a `schema` which describes allowable content and which will be applied to clean up the pasted content before attempting to match with your block. The schemas are passed into [`cleanNodeList` from `@wordpress/dom`](https://github.com/wordpress/gutenberg/blob/trunk/packages/dom/src/dom/clean-node-list.js); check there for a [complete description of the schema](https://github.com/wordpress/gutenberg/blob/trunk/packages/dom/src/phrasing-content.js).
 -->
`raw` 変換を書く際に、`schema` を指定することで、これを制御できます。`schema` は、許容されるコンテンツを記述し、ブロックとのマッチングを試みる前に、貼り付けられたコンテンツのクリーンアップに適用できます。`schema` は、[`@wordpress/dom` の `cleanNodeList`](https://github.com/wordpress/gutenberg/blob/trunk/packages/dom/src/dom/clean-node-list.js) に渡されます。スキーマの完全な説明については、[こちら](https://github.com/wordpress/gutenberg/blob/trunk/packages/dom/src/phrasing-content.js) を参照してください。


```js
schema = { span: { children: { '#text': {} } } };
```
<!-- 
**Example: a custom content model**
 -->
**例: カスタムコンテンツモデル**

<!-- 
Suppose we want to match the following HTML snippet and turn it into some kind of custom post preview block.
 -->
例えば、次のようなHTMLスニペットにマッチして、ある種のカスタム投稿プレビューブロックに変換したいとします。

```html
<div data-post-id="13">
	<h2>The Post Title</h2>
	<p>Some <em>great</em> content.</p>
</div>
```
<!-- 
We want to tell the editor to allow the inner `h2` and `p` elements. We do this by supplying the following schema. In this example we're using the function form, which accepts an argument supplying `phrasingContentSchema` (as well as a boolean `isPaste` indicating if the transformation operation started with pasting text). The `phrasingContentSchema` is pre-defined to match HTML phrasing elements, such as `<strong>` and `<sup>` and `<kbd>`. Anywhere we expect
a `<RichText />` component is a good place to allow phrasing content otherwise we'll lose all text formatting on conversion.
 -->
エディターには、内側の `h2` と `p` 要素を許可するように指示します。それには次のようなスキーマを提供できます。この例では、関数形式を使っていて、関数は、引数に `phrasingContentSchema` プロパティの値 (と同時に、変換操作がテキストの貼り付けから始まったかどうかを示すブール値 `isPaste`) を受け取ります。`phrasingContentSchema` は、HTML のフレージング要素 (例: `<strong>`、`<sup>`、`<kbd>`) とマッチするよう、あらかじめ定義されていています。`<RichText />` コンポーネントを期待する場所ではどこでも、フレージングコンテンツ ([記述コンテンツ](https://developer.mozilla.org/ja/docs/Web/Guide/HTML/Content_categories#phrasing_content)。文章とその中に含まれるマークアップ) を許可する良い候補となります。そうでなければ、変換時にすべてのテキストの書式が失われます。

```js
schema = ({ phrasingContentSchema }) => {
    div: {
        required: true,
        attributes: [ 'data-post-id' ],
        children: {
            h2: { children: phrasingContentSchema },
            p: { children: phrasingContentSchema }
        }
    }
}
```

<!-- 
When we successfully match this content every HTML attribute will be stripped away except for `data-post-id` and if we have other arrangements of HTML inside of a given `div` then it won't match our transformer. Likewise we'd fail to match if we found an `<h3>` in there instead of an `<h2>`.
 -->
このコンテンツとのマッチングに成功すると、`data-post-id` 以外のすべての HTML 属性が取り除かれます。指定された `div` の中に他の HTML の配置があると、この変換にはマッチしません。同様に、`<h2>` の代わりに `<h3>` があると、マッチングは失敗します。

<!-- 
Schemas are most-important when wanting to match HTML snippets containing non-phrasing content, such as `<details>` with a `<summary>`. Without declaring the custom schema the editor will skip over these other constructions before attempting to run them through any block transforms.
 -->
スキーマは、フレージングコンテンツ以外を含む HTML スニペットとマッチングする場合 (例: `<summary>` を含む `<details>`) に、最も重要になります。カスタムスキーマを宣言しなければ、エディターはブロック変換を実行する前に、これらの他の構造をスキップします。

<!--
### Shortcode
 -->
### shortcode
<!--
This type of transformations support the _from_ direction, allowing blocks to be created from shortcodes. It's applied as part of the `raw` transformation process.

A transformation of type `shortcode` is an object that takes the following parameters:
 -->
「shortcode」変換タイプは _from_ 方向をサポートし、ショートコードからブロックを作成します。`raw` 変換プロセスの一部として適用されます。

`shortcode` 変換タイプは次のパラメータを取るオブジェクトです。

<!--
-   **type** _(string)_: the value `shortcode`.
-   **tag** _(string|array)_: the shortcode tag or list of shortcode aliases this transform can work with.
-   **transform** _(function, optional)_: a callback that receives the shortcode attributes as the first argument and the [WPShortcodeMatch](/packages/shortcode/README.md#next) as the second. It should return a block object or an array of block objects. When this parameter is defined, it will take precedence over the `attributes` parameter.
-   **attributes** _(object, optional)_: object representing where the block attributes should be sourced from, according to the attributes shape defined by the [block configuration object](./block-registration.md). If a particular attribute contains a `shortcode` key, it should be a function that receives the shortcode attributes as the first arguments and the [WPShortcodeMatch](/packages/shortcode/README.md#next) as second, and returns a value for the attribute that will be sourced in the block's comment.
-   **isMatch** _(function, optional)_: a callback that receives the shortcode attributes per the [Shortcode API](https://codex.wordpress.org/Shortcode_API) and should return a boolean. Returning `false` from this function will prevent the shortcode to be transformed into this block.
-   **priority** _(number, optional)_: controls the priority with which a transform is applied, where a lower value will take precedence over higher values. This behaves much like a [WordPress hook](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress). Like hooks, the default priority is `10` when not otherwise set.
 -->
- **type** _(string)_: 文字列 `shortcode`。
- **tag** _(string|array)_: この変換が動作可能なショートコードタグ、またはショートコードエイリアスのリスト。
- **transform** _(function, オプション)_: 第1引数にショートコードの属性、第2引数に [WPShortcodeMatch](https://developer.wordpress.org/block-editor/packages/packages-shortcode/#next) を受け取るコールバック。ブロックオブジェクト、またはブロックオブジェクトの配列を返さなければならない。このパラメータが定義されると、`attributes` パラメータに優先する。
- **attributes** _(object, オプション)_: [block 構成オブジェクト](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/) で定義された属性の形に従い、ブロック属性がどこを source とするかを表したオブジェクト。特定の属性が `shortcode` キーを含む場合には関数であり、第1引数にショートコードの属性、第2引数に [WPShortcodeMatch](https://developer.wordpress.org/block-editor/packages/packages-shortcode/#next) を受け取り、ブロックのコメントを source とする属性の値を返さなければならない。
- **isMatch** _(function、オプション)_: [Shortcode API](https://codex.wordpress.org/Shortcode_API) ごとにショートコード属性を受け取り、ブール値を返すコールバック。`false` を返すとショートコードのブロックへの変換を適用しない。
- **priority** _(number, オプション)_: 変換を適用するプライオリティ。値の小さな方が優先される。この動きは [WordPress のフック](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress) と同じ。フックと同様に指定されていない場合のデフォルトのプライオリティは `10`。

<!-- 
**Example: from shortcode to block using `transform`**
 -->
**例: ショートコードからブロックへの、`transform` を使用した変換**

<!-- 
An existing shortcode can be transformed into its block counterpart using the `transform` method.
 -->
既存のショートコードを対応するブロックバージョンに、`transform` 方式を使用して変換する。

<!-- 
```js
transforms: {
    from: [
        {
            type: 'shortcode',
            tag: 'video',
            transform( { named: { src } } ) {
                return createBlock( 'core/video', { src } );
            },
            // Prevent the shortcode to be converted
            // into this block when it doesn't
            // have the proper ID.
            isMatch( { named: { id } } ) {
                return id === 'my-id';
            },
        },
    ],
},
```
 -->
```js
transforms: {
    from: [
        {
            type: 'shortcode',
            tag: 'video',
            transform( { named: { src } } ) {
                return createBlock( 'core/video', { src } );
            },
            // 適切な ID をもたない場合、
            // ショートコードからこのブロックへの変換は
            // 行われない。
            isMatch( { named: { id } } ) {
                return id === 'my-id';
            },
        },
    ],
},
```

<!-- 
**Example: from shortcode to block using `attributes`**
 -->
**例: ショートコードからブロックへの、`attributes` を使用した変換**

既存のショートコードを対応するブロックバージョンに、`attributes` 方式を使用して変換する。

<!-- 
```js
transforms: {
    from: [
        {
            type: 'shortcode',
            tag: 'youtube',
            attributes: {
                url: {
                    type: 'string',
                    source: 'attribute',
                    attribute: 'src',
                    selector: 'img',
                },
                align: {
                    type: 'string',
                    // The shortcode function will extract
                    // the shortcode atts into a value
                    // to be sourced in the block's comment.
                    shortcode: ( { named: { align = 'alignnone' } } ) => {
                        return align.replace( 'align', '' );
                    },
                },
            },
            // Prevent the shortcode to be converted
            // into this block when it doesn't
            // have the proper ID.
            isMatch( { named: { id } } ) {
                return id === 'my-id';
            },
        },
    ]
},
```
 -->
```js
transforms: {
    from: [
        {
            type: 'shortcode',
            tag: 'caption',
            attributes: {
                url: {
                    type: 'string',
                    source: 'attribute',
                    attribute: 'src',
                    selector: 'img',
                },
                align: {
                    type: 'string',
                    // ショートコード関数は
                    // ブロックコメントを source とする形式で
                    // ショートコード属性を取り出す。
                    shortcode: ( { named: { align = 'alignnone' } } ) => {
                        return align.replace( 'align', '' );
                    },
                },
            },
            // 適切な ID をもたない場合、
            // ショートコードからこのブロックへの変換は
            // 行われない。
            isMatch( { named: { id } } ) {
                return id === 'my-id';
            },
        },
    ]
},
```
<!-- 
## `ungroup` blocks
 -->
## ungroup ブロック
<!-- 
Via the optional `transforms` key of the block configuration, blocks can use the `ungroup` subkey to define the blocks that will replace the block being processed. These new blocks will usually be a subset of the existing inner blocks, but could also include new blocks.

If a block has an `ungroup` transform, it is eligible for ungrouping, without the requirement of being the default grouping block. The UI used to ungroup a block with this API is the same as the one used for the default grouping block. In order for the Ungroup button to be displayed, we must have a single grouping block selected, which also contains some inner blocks.

**ungroup** is a callback function that receives the attributes and inner blocks of the block being processed. It should return an array of block objects.
 -->
ブロックは、ブロック構成のオプションの `transforms` キーで `ungroup` サブキーを使用して、処理中のブロックを置換するブロックを定義できます。通常これらの新しいブロックは既存のインナーブロックのサブセットですが、新しいブロックも含められます。

ブロックが `ungroup` 変換を持つ場合、デフォルトのグループ化ブロックである必要性なしに、グループを解除できます。この API でブロックのグループ解除に使用する UI は、デフォルトのブロックのグループ化で使用される UI と同じです。グループ解除ボタンを表示するには、1つのグループ化ブロックを選択し、その中にいくつかのインナーブロックを含む必要があります。

**ungroup** はコールバック関数で、処理中のブロックの属性とインナーブロックを受け取ります。ブロックオブジェクトの配列を返す必要があります。

<!-- 
Example:
 -->
例:

```js
export const settings = {
	title: 'My grouping Block Title',
	description: 'My grouping block description',
	/* ... */
	transforms: {
		ungroup: ( attributes, innerBlocks ) =>
			innerBlocks.flatMap( ( innerBlock ) => innerBlock.innerBlocks ),
	},
};
```

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-transforms.md)
