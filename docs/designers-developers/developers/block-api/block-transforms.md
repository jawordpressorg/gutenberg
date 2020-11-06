<!-- 
# Block Transforms
 -->
# ブロック変換

<!-- 
Block Transforms is the API that allows a block to be transformed _from_ and _to_ other blocks, as well as _from_ other entities. Existing entities that work with this API include shortcodes, files, regular expressions, and raw DOM nodes.
 -->
「ブロック変換 (Block Transforms)」API はあるブロックを別のブロックに変換したり、エンティティからブロックに変換します。この API が動作する既存エンティティにはショートコード、ファイル、正規表現、生の DOM ノードがあります。

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
        from: [ /* supported from transforms */ ],
        to: [ /* supported to transforms */ ],
    }
}
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
## Transformations Types
 -->
## 変換タイプ
<!-- 
This section goes through the existing types of transformations blocks support:
 -->
このセクションではブロックがサポートする既存の変換タイプを説明します。

* block
* enter
* files
* prefix
* raw
* shortcode

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
- **type** _(string)_: the value `block`.
- **blocks** _(array)_: a list of known block types. It also accepts the wildcard value (`"*"`), meaning that the transform is available to _all_ block types (eg: all blocks can transform into `core/group`).
- **transform** _(function)_: a callback that receives the attributes and inner blocks of the block being processed. It should return a block object or an array of block objects.
- **isMatch** _(function, optional)_: a callback that receives the block attributes and should return a boolean. Returning `false` from this function will prevent the transform from being available and displayed as an option to the user.
- **priority** _(number, optional)_: controls the priority with which a transformation is applied, where a lower value will take precedence over higher values. This behaves much like a [WordPress hook](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress). Like hooks, the default priority is `10` when not otherwise set.
 -->
- **type** _(string)_: 文字列 `block`。
- **blocks** _(array)_: 既知のブロックタイプ。ワイルドカード値 (`"*"`) も指定でき、この場合 _すべての_ ブロックタイプで変換可能であることを意味する (例: すべてのブロックは `core/group` に変換できる)。
- **transform** _(function)_: 処理されるブロックの属性とインナーブロックを受け取るコールバック。ブロックオブジェクトまたはブロックオブジェクトの配列を返さなければならない。
- **isMatch** _(function、オプション)_: ブロックの属性を受け取り、ブール値を返すコールバック。`false` を返すと可能な変換を行わず、ユーザーにオプションを表示する。
- **isMultiblock** _(boolean、オプション)_: 複数のブロックを選択している場合に変換を適用可能かどうか。true であれば `transform` 関数の最初のパラメータは選択した各ブロックの属性の配列、2番目のパラメータは選択した各ブロックのインナーブロックの配列になる。デフォルトは false。
- **priority** _(number、オプション)_: 変換を適用するプライオリティ。値の小さな方が優先される。この動きは [WordPress のフック](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress) と同じ。フックと同様に指定されていない場合のデフォルトのプライオリティは `10`。

<!-- 
**Example: from Paragraph block to Heading block**
 -->
**例: 「段落」ブロックから「見出し」ブロックへの変換**
<!-- 
To declare this transformation we add the following code into the heading block configuration, which uses the `createBlock` function from the [`wp-blocks` package](/packages/blocks/README.md#createBlock).
 -->
この変換を宣言するには「見出し」ブロック構成に以下のコードを追加します。[`wp-blocks` パッケージ](https://developer.wordpress.org/block-editor/packages/packages-blocks/#createBlock) から `createBlock` 関数を使用します。

**ESNext**
{% codetabs %}
{% ESNext %}
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
**ES5**
{% ES5 %}
```js
transforms: {
    from: [
        {
            type: 'block',
            blocks: [ 'core/paragraph' ],
            transform: function ( attributes ) {
                return createBlock( 'core/heading', {
                    content: attributes.content,
                } );
            },
        },
    ]
},
```
{% end %}

<!-- 
**Example: blocks that have InnerBlocks**
 -->
**例: InnerBlock をもつブロックへの変換**
<!-- 
A block with InnerBlocks can also be transformed from and to another block with InnerBlocks.
 -->
InnerBlock をもつブロックも別の InnerBlock をもつブロックとの間で変換できます。

**ESNext**
{% codetabs %}
{% ESNext %}
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
**ES5**
{% ES5 %}
```js
transforms: {
    to: [
        {
            type: 'block',
            blocks: [ 'some/block-with-innerblocks' ],
            transform: function( attributes, innerBlocks ) {
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
{% end %}
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
- **type** _(string)_: the value `enter`.
- **regExp** _(RegExp)_: the Regular Expression to use as a matcher. If the value matches, the transformation will be applied.
- **transform** _(function)_: a callback that receives the value that has been entered. It should return a block object or an array of block objects.
- **priority** _(number, optional)_: controls the priority with which a transform is applied, where a lower value will take precedence over higher values. This behaves much like a [WordPress hook](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress). Like hooks, the default priority is `10` when not otherwise set.
 -->
- **type** _(string)_: 文字列 `enter`。
- **regExp** _(RegExp)_: パターンマッチに使用する正規表現。マッチすれば変換が適用される。
- **transform** _(function)_: 入力された値を受け取るコールバック。ブロックオブジェクトまたはブロックオブジェクトの配列を返さなければならない。
- **priority** _(number, オプション)_: 変換を適用するプライオリティ。値の小さな方が優先される。この動きは [WordPress のフック](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress) と同じ。フックと同様に指定されていない場合のデフォルトのプライオリティは `10`。

<!-- 
**Example: from --- to Separator block**
 -->
**例: --- から「区切り」ブロックへの変換**

<!-- 
To create a separator block when the user types the hypen three times and then hits the ENTER key we can use the following code:
 -->
ユーザーが「-」を3回入力し Enter キーを押下した場合に「区切り」ブロックを作成します。

**ESNext**
{% codetabs %}
{% ESNext %}
```js
transforms = {
    from: [
        {
            type: 'enter',
            regExp: /^-{3,}$/,
            transform: () => createBlock( 'core/separator' ),
        },
    ]
}
```
**ES5**
{% ES5 %}
```js
transforms = {
    from: [
        {
            type: 'enter',
            regExp: /^-{3,}$/,
            transform: function( value ) {
                return createBlock( 'core/separator' );
            },
        },
    ]
}
```
{% end %}
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
- **type** _(string)_: the value `files`.
- **transform** _(function)_: a callback that receives the array of files being processed. It should return a block object or an array of block objects.
- **isMatch** _(function, optional)_: a callback that receives the array of files being processed and should return a boolean. Returning `false` from this function will prevent the transform from being applied.
- **priority** _(number, optional)_: controls the priority with which a transform is applied, where a lower value will take precedence over higher values. This behaves much like a [WordPress hook](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress). Like hooks, the default priority is `10` when not otherwise set.
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
{% codetabs %}
{% ESNext %}
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
{% ES5 %}
```js
transforms: {
    from: [
        {
            type: 'files',
            isMatch: function( files ) {
                return files.length === 1;
            },
            // By defining a lower priority than the default of 10,
            // we make that the File block to be created as a fallback,
            // if no other transform is found.
            priority: 15,
            transform: function( files ) {
                var file = files[ 0 ];
                var blobURL = createBlobURL( file );
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
{% end %} -->
**ESNext**
{% codetabs %}
{% ESNext %}
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
**ES5**
{% ES5 %}
```js
transforms: {
    from: [
        {
            type: 'files',
            isMatch: function( files ) {
                return files.length === 1;
            },
            // デフォルトの 10 よりも低いプライオリティを設定することで
            // 他の変換が見つからない場合のフォールバックとして
            // 「ファイル」ブロックを作成できます。
            priority: 15,
            transform: function( files ) {
                var file = files[ 0 ];
                var blobURL = createBlobURL( file );
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
{% end %}

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
- **type** _(string)_: the value `files`.
- **prefix** _(string)_: the character or sequence of characters that match this transfrom.
- **transform** _(function)_: a callback that receives the content introduced. It should return a block object or an array of block objects.
- **priority** _(number, optional)_: controls the priority with which a transform is applied, where a lower value will take precedence over higher values. This behaves much like a [WordPress hook](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress). Like hooks, the default priority is `10` when not otherwise set.
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

**ESNext**
{% codetabs %}
{% ESNext %}
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
**ES5**
{% ES5 %}
```js
transforms: {
    from: [
        {
            type: 'prefix',
            prefix: '?',
            transform: function( content ) {
                return createBlock( 'my-plugin/question', {
                    content,
                } );
            },
        },
    ];
}
```
{% end %}
<!-- 
### Raw
 -->
### raw
<!-- 
This type of transformations support the _from_ direction, allowing blocks to be created from raw HTML nodes. They're applied when the user executes the "Convert to Blocks" action frow within the block setting UI menu, as well as when some content is pasted or dropped into the editor.

A transformation of type `raw` is an object that takes the following parameters:
 -->
「raw」変換タイプは _from_ 方向をサポートし、生の HTML ノードからブロックを生成します。ユーザーがブロック設定 UI メニューで「ブロックへ変換」アクションを実行した場合、またはコンテンツをエディターに貼り付けたり、ドロップした場合にこの変換が適用されます。

`raw` 変換タイプは次のパラメータを取るオブジェクトです。

<!-- 
- **type** _(string)_: the value `raw`.
- **transform** _(function, optional)_: a callback that receives the node being processed. It should return a block object or an array of block objects.
- **schema** _(object|function, optional)_: it defines the attributes and children of the node that will be preserved on paste, according to its [HTML content model](https://html.spec.whatwg.org/multipage/dom.html#content-models). Take a look at [pasteHandler](/packages/blocks/README.md#pasteHandler) for more info.
- **selector** _(string, optional)_: a CSS selector string to determine whether the element matches according to the [element.matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) method. The transform won't be executed if the element doesn't match. This is a shorthand and alternative to using `isMatch`, which, if present, will take precedence.
- **isMatch** _(function, optional)_: a callback that receives the node being processed and should return a boolean. Returning `false` from this function will prevent the transform from being applied.
- **priority** _(number, optional)_: controls the priority with which a transform is applied, where a lower value will take precedence over higher values. This behaves much like a [WordPress hook](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress). Like hooks, the default priority is `10` when not otherwise set.
 -->
- **type** _(string)_: 文字列 `raw`。
- **transform** _(function、オプション)_: 処理するノードを受け取るコールバック。ブロックオブジェクトまたはブロックオブジェクトの配列を返さなければならない。
- **schema** _(object|function、オプション)_: [HTML content model](https://html.spec.whatwg.org/multipage/dom.html#content-models) に従って貼り付け時に保存される属性とノードの子を定義する。詳細な情報については [pasteHandler](https://developer.wordpress.org/block-editor/packages/packages-blocks/#pasteHandler) を参照してください。
- **selector** _(string、オプション)_: [element.matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) メソッドに従って要素が合致するかどうかを決定する CSS セレクター文字列。要素がマッチしない場合、変換は実行されない。`isMatch` の代替、かつ、短縮形。あれば、`isMatch` が優先。
- **isMatch** _(function、オプション)_: 処理するノードを受け取り、ブール値を返すコールバック。`false` を返すと変換を適用しない。
- **priority** _(number, オプション)_: 変換を適用するプライオリティ。値の小さな方が優先される。この動きは [WordPress のフック](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress) と同じ。フックと同様に指定されていない場合のデフォルトのプライオリティは `10`。
<!-- 
**Example: from URLs to Embed block**
 -->
**例: URL から「埋め込み」ブロックへの変換**
<!-- 
If we want to create an Embed block when the user pastes some URL in the editor, we could use this code:
 -->
ユーザーがエディターに URL を貼り付けると「埋め込み」ブロックを作成する。

**ESNext**
{% codetabs %}
{% ESNext %}
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
**ES5**
{% ES5 %}
```js
transforms: {
    from: [
        {
            type: 'raw',
            isMatch: function( node ) {
                return node.nodeName === 'P' &&
                    /^\s*(https?:\/\/\S+)\s*$/i.test( node.textContent );
            },
            transform: function( node ) {
                return createBlock( 'core/embed', {
                    url: node.textContent.trim(),
                } );
            },
        },
    ],
}
```
{% end %}
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
- **type** _(string)_: the value `shortcode`.
- **tag** _(string|array)_: the shortcode tag or list of shortcode aliases this transform can work with.
- **attributes** _(object)_: object representing where the block attributes should be sourced from, according to the attributes shape defined by the [block configuration object](./block-registration.md). If a particular attribute contains a `shortcode` key, it should be a function that receives the shortcode attributes as the first arguments and the [WPShortcodeMatch](/packages/shortcode/README.md#next) as second, and returns a value for the attribute that will be sourced in the block's comment.
- **isMatch** _(function, optional)_: a callback that receives the shortcode attributes per the [Shortcode API](https://codex.wordpress.org/Shortcode_API) and should return a boolean. Returning `false` from this function will prevent the shortcode to be transformed into this block.
- **priority** _(number, optional)_: controls the priority with which a transform is applied, where a lower value will take precedence over higher values. This behaves much like a [WordPress hook](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress). Like hooks, the default priority is `10` when not otherwise set.
 -->
- **type** _(string)_: 文字列 `shortcode`。
- **tag** _(string|array)_: この変換が動作可能なショートコードタグ、またはショートコードエイリアスのリスト。
- **attributes** _(object)_: [block 構成オブジェクト](https://ja.wordpress.org/team/handbook/block-editor/developers/block-api/block-registration/) で定義された属性の形に従い、ブロック属性がどこを source とするかを表したオブジェクト。特定の属性が `shortcode` キーを含む場合には関数であり、第1引数にショートコードの属性、第2引数に [WPShortcodeMatch](https://developer.wordpress.org/block-editor/packages/packages-shortcode/#next) を受け取り、ブロックのコメントを source とする属性の値を返さなければならない。
- **isMatch** _(function、オプション)_: [Shortcode API](https://codex.wordpress.org/Shortcode_API) ごとにショートコード属性を受け取り、ブール値を返すコールバック。`false` を返すとショートコードのブロックへの変換を適用しない。
- **priority** _(number, オプション)_: 変換を適用するプライオリティ。値の小さな方が優先される。この動きは [WordPress のフック](https://codex.wordpress.org/Plugin_API#Hook_to_WordPress) と同じ。フックと同様に指定されていない場合のデフォルトのプライオリティは `10`。
<!-- 
**Example: from shortcode to block**
 -->
**例: ショートコードからブロックへの変換**
<!-- 
An existing shortcode can be transformed into its block counterpart.
 -->
既存のショートコードをブロックバージョンに変換する。

<!-- 
{% codetabs %}
{% ESNext %}
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
{% ES5 %}
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
                    // The shortcode function will extract
                    // the shortcode atts into a value
                    // to be sourced in the block's comment.
                    shortcode: function( attributes ) {
                        var align = attributes.named.align ? attributes.named.align : 'alignnone';
                        return align.replace( 'align', '' );
                    },
                },
            },
            // Prevent the shortcode to be converted
            // into this block when it doesn't
            // have the proper ID.
            isMatch: function( attributes ) {
                return attributes.named.id === 'my-id';
            },
        },
    ]
},
```
{% end %}
 -->
**ESNext**
{% codetabs %}
{% ESNext %}
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
**ES5**
{% ES5 %}
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
                    shortcode: function( attributes ) {
                        var align = attributes.named.align ? attributes.named.align : 'alignnone';
                        return align.replace( 'align', '' );
                    },
                },
            },
            // 適切な ID をもたない場合、
            // ショートコードからこのブロックへの変換は
            // 行われない。
            isMatch: function( attributes ) {
                return attributes.named.id === 'my-id';
            },
        },
    ]
},
```
{% end %}

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/block-api/block-transforms.md)