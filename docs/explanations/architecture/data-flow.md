<!--
# Data Flow and Data Format
 -->
# データフローとデータフォーマット

<!--
## The format
 -->
## フォーマット

<!--
A block editor post is the proper block-aware representation of a post: a collection of semantically consistent descriptions of what each block is and what its essential data is. This representation only ever exists in memory. It is the [chase](<https://en.wikipedia.org/wiki/Chase_(printing)>) in the typesetter's workshop, ever-shifting as [sorts](<https://en.wikipedia.org/wiki/Sort_(typesetting)>) are attached and repositioned.
 -->
「ブロックエディターの投稿」(block editor post)は、ブロックを意識した投稿の一表現です。メモリーの中だけに存在し、各ブロックが何で、そのブロックの重要なデータが何かを、意味的な一貫性をもって記述したコレクションです。例えれば、活版印刷における[枠](<https://en.wikipedia.org/wiki/Chase_(printing)>)であり、[活字](<https://en.wikipedia.org/wiki/Sort_(typesetting)>)の追加や並べ替えで常に変化します。

<!--
A block editor post is not the artifact it produces, namely the `post_content`. The latter is the printed page, optimized for the reader but retaining its invisible markings for later editing.
 -->
「ブロックエディターの投稿」は、ブロックエディターの生成物である `post_content` とは異なります。先の例で言えば `post_content` は印刷されたページであり読者に最適化されますが、「ブロックエディターの投稿」には、後の編集のための見えないマーキングが含まれます。

<!--
The input and output of the block editor is a tree of block objects with the current format:
 -->
ブロックエディターの入力と出力は、以下のフォーマットのブロックオブジェクトのツリーです。

```js
const value = [ block1, block2, block3 ];
```

<!--
### The block object
 -->
### ブロックオブジェクト

<!--
Each block object has an id, a set of attributes and potentially a list of child blocks.
 -->
各ブロックオブジェクトは、id と属性の集合、そして、オプションで子ブロックを持ちます。

<!--
```js
const block = {
	clientId, // unique string identifier.
	type, // The block type (paragraph, image...)
	attributes, // (key, value) set of attributes representing the direct properties/content of the current block.
	innerBlocks, // An array of child blocks or inner blocks.
};
```
 -->
```js
const block = {
    clientId,   // ユニークな文字列識別子。
    type,       // ブロックタイプ (paragraph, image...)
    attributes, // (キー, 値) 現行ブロックの直接のプロパティやコンテンツを表す属性の集合
    innerBlocks // 子ブロックやインナーブロックの集合
}
```

<!--
Note the attributes keys and types, the allowed inner blocks are defined by the block type. For example, the core quote block has a `cite` string attribute representing the cite content while a heading block has a numeric `level` attribute, representing the level of the heading (1 to 6).
 -->
注意: 属性のキーと型、許可されるインナーブロックはブロックタイプで定義されます。たとえばコアの引用ブロックには `cite` 文字列属性で引用のコンテンツを表し、見出しブロックには数値型の `level` 属性があり、見出しのレベル (1から6) を表します。

<!--
During the lifecycle of the block in the editor, the block object can receive extra metadata:
 -->
エディター内のブロックの生存期間において、ブロックオブジェクトは追加のメタデータを受信します。

<!--
-   `isValid`: A boolean representing whether the block is valid or not;
-   `originalContent`: The original HTML serialization of the block.
 -->
 - `isValid`: ブール値。ブロックが正しい (valid) かどうかを表す。
 - `originalContent`: ブロックの元の HTML シリアライゼーション

<!--
**Examples**
 -->
**例**

```js
// A simple paragraph block.
const paragraphBlock1 = {
	clientId: '51828be1-5f0d-4a6b-8099-f4c6f897e0a3',
	type: 'core/paragraph',
	attributes: {
		content: 'This is the <strong>content</strong> of the paragraph block',
		dropCap: true,
	},
};

// A separator block.
const separatorBlock = {
	clientId: '51828be1-5f0d-4a6b-8099-f4c6f897e0a4',
	type: 'core/separator',
	attributes: {},
};

// A columns block with a paragraph block on each column.
const columnsBlock = {
	clientId: '51828be1-5f0d-4a6b-8099-f4c6f897e0a7',
	type: 'core/columns',
	attributes: {},
	innerBlocks: [
		{
			clientId: '51828be1-5f0d-4a6b-8099-f4c6f897e0a5',
			type: 'core/column',
			attributes: {},
			innerBlocks: [ paragraphBlock1 ],
		},
		{
			clientId: '51828be1-5f0d-4a6b-8099-f4c6f897e0a6',
			type: 'core/column',
			attributes: {},
			innerBlocks: [ paragraphBlock2 ],
		},
	],
};
```

<!--
## Serialization and Parsing
 -->
## シリアライゼーションとパース

<!--
![Diagram](https://docs.google.com/drawings/d/1iuownt5etcih7rMMvPvh0Mny8zUA1Z28saxjxaWmfJ0/pub?w=1234&h=453)
 -->
![ダイアグラム](https://docs.google.com/drawings/d/1iuownt5etcih7rMMvPvh0Mny8zUA1Z28saxjxaWmfJ0/pub?w=1234&h=453)

<!--
This data model, however, is something that lives in memory while editing a post. It's not visible to the page viewer when rendered, just like a printed page has no trace of the structure of the letters that produced it in the press.
 -->
しかし、このデータモデルは、投稿の編集中にメモリー内で存在し、レンダーの際のページビューアで見ることはできません。これは印刷されたページに、印刷の元となった活字の構造の跡が無いのと同じです。

<!--
Since the whole WordPress ecosystem has an expectation for receiving HTML when rendering or editing a post, the block editor transforms its data into something that can be saved in `post_content` through serialization. This assures that there's a single source of truth for the content, and that this source remains readable and compatible with all the tools that interact with WordPress content at the present. Were we to store the object tree separately, we would face the risk of `post_content` and the tree getting out of sync and the problem of data duplication in both places.
 -->
WordPress のエコシステム全体は、投稿のレンダリングや編集の際に HTML を受け取ることを期待しているため、ブロックエディターはシリアライゼーションを通じてデータを `post_content` に保存できる形に変換します。これにより、コンテンツのただ一つの真のソースが存在し、かつ、このソースが読み取り可能で、既存の WordPress コンテンツを処理できるすべてのツールとの互換性が保証されます。仮にオブジェクトツリーを個別に保存すると、`post_content` とツリーが同期せず、両方でデータが重複するリスクに直面します。

<!--
Thus, the serialization process converts the block tree into HTML using HTML comments as explicit block delimiters—which can contain the attributes in non-HTML form. This is the act of printing invisible marks on the printed page that leave a trace of the original structured intention.
 -->
シリアライゼーションプロセスは、ブロックツリーを HTML に変換します。このとき、非 HTML 形式で属性を含められる明示的なブロックデリミッターとして、HTML コメントが使用されます。これを印刷ページに例えれば、見えない記号を印刷して、オリジナルの構造の意図の跡を残しています。

<!--
This is one end of the process. The other is how to recreate the collection of blocks whenever a post is to be edited again. A formal grammar defines how the serialized representation of a block editor post should be loaded, just as some basic rules define how to turn the tree into an HTML-like string. The block editor's posts aren't designed to be edited by hand; they aren't designed to be edited as HTML documents because the block editor posts aren't HTML in essence.
 -->
これでプロセスの一方向は完了です。もう片方は、投稿が再び編集される際に、どのようにブロックのコレクションを再作成するかです。これには正規の文法が定義されており、「ブロックエディターの投稿」のシリアライズされた表現をどのようにロードすべきか、ツリーを HTML に似た文字列にするいくつかの基本ルールとして示されています。「ブロックエディターの投稿」は、手動で編集するものとして設計されていません。また、本質的に HTML ではありませんので、HTML 文書として編集するものとしても設計されていません。

<!--
They just happen, incidentally, to be stored inside of `post_content` in a way in which they require no transformation in order to be viewable by any legacy system. It's true that loading the stored HTML into a browser without the corresponding machinery might degrade the experience, and if it included dynamic blocks of content, the dynamic elements may not load, server-generated content may not appear, and interactive content may remain static. However, it at least protects against not being able to view block editor posts on themes and installations that are blocks-unaware, and it provides the most accessible way to the content. In other words, the post remains mostly intact even if the saved HTML is rendered as is.
 -->
ちなみに、これはたまたまですが `post_content` には、レガシーなシステムでも一切の変換無しで読み出し可能な形式で保存されています。確かに、保存された HTML を対応する仕組みなしでロードすればエクスペリエンスは下がりますし、コンテンツの動的ブロックの動的要素はロードされません。サーバー生成コンテンツは表示されず、インタラクティブなコンテンツも動きません。しかし、少なくとも、ブロックを知らないテーマやインストールでも「ブロックエディターの投稿」を表示でき、コンテンツに最もアクセスしやすい方法を提供します。言い換えるなら、保存されたHTMLがそのままレンダーされても、投稿はほぼ表示されます。

<!--
### Delimiters and Parsing Expression Grammar
 -->
### デリミッターと解析表現文法

<!--
We chose instead to try to find a way to keep the formality, explicitness, and unambiguity in the existing HTML syntax. Within the HTML there were a number of options.
 -->
既存の HTML 構文内で形式、わかりやすさ、明確さを維持する方法を探しましたが、HTML の中にはいくつかの選択肢がありました。

<!--
Of these options, a novel approach was suggested: by storing data in HTML comments, we would know that we wouldn't break the rest of the HTML in the document, that browsers should ignore it, and that we could simplify our approach to parsing the document.
 -->
選択肢の中から、斬新なアプローチが提案されました。HTML コメントにデータを格納すれば、ブラウザはこのデータを無視する一方で、ドキュメント内の残りのHTMLは破壊されず、またドキュメントを解析するアプローチを単純化できます。

<!--
Unique to HTML comments is the fact that they cannot legitimately exist in ambiguous places, such as inside of HTML attributes like `<img alt='data-id="14"'>`. Comments are also quite permissive. Whereas HTML attributes are complicated to parse properly, comments are quite easily described by a leading `<!--` followed by anything except `--` until the first `--`. This simplicity and permissiveness means that the parser can be implemented in several ways without needing to understand HTML properly, and we have the liberty to use more convenient syntax inside of the comment—we only need to escape double-hyphen sequences. We take advantage of this in how we store block attributes: as JSON literals inside the comment.
 -->
HTML コメントの特徴として、文法的に曖昧な位置に存在できない点があります。たとえば、`<img alt='data-id="14"'>` の HTML 属性の中にコメントを置けません。一方で、コメントは寛容です。HTML 属性を正しくパースするには複雑であるのに対し、コメントは極めて簡単で、先頭の `<!--` に始まり、続いて、`--` 以外の任意の文字、そして、最初の `-->` で終了する、と記述できます。この単純さと寛容さにより、HTMLを正しく理解しなくても、さまざまな方法でパーサーを実装できます。また、コメント内部では、ダブルハイフン (`--`) をエスケープしさえすれば、より便利な構文を使用する自由があります。この利点を活かし、コメント内ではブロック属性を JSON リテラルとして保存しています。

<!--
After running this through the parser, we're left with a simple object we can manipulate idiomatically, and we don't have to worry about escaping or unescaping the data. It's handled for us through the serialization process. Because the comments are so different from other HTML tags and because we can perform a first-pass to extract the top-level blocks, we don't actually depend on having fully valid HTML!
 -->
これをパーサーで処理すると、慣用的な方法で操作できるシンプルなオブジェクトが作成されます。データのエスケープやアンエスケープを気にかける必要はありません。シリアライゼーションプロセスの過程で処理されます。コメントは他の HTML タグと大きく異なり、また、最上位レベルのブロックをワンパスで取得できるため、HTML が完全に妥当である必要さえありません。

<!--
This has dramatic implications for how simple and performant we can make our parser. These explicit boundaries also protect damage in a single block from bleeding into other blocks or tarnishing the entire document. It also allows the system to identify unrecognized blocks before rendering them.
 -->
これは、パーサーをどれだけシンプルで高性能にできるかという点で劇的な意味を持ちます。明確な境界は、1つのブロックの障害が他のブロックに波及したり、ドキュメント全体が汚染されることを防ぎます。また、システムはブロックをレンダリングする前に、認識できないブロックを識別できます。

<!--
_N.B.:_ The defining aspects of blocks are their semantics and the isolation mechanism they provide: in other words, their identity. On the other hand, where their data is stored is a more liberal aspect. Blocks support more than just static local data (via JSON literals inside the HTML comment or within the block's HTML), and more mechanisms (_e.g._, global blocks or otherwise resorting to storage in complementary `WP_Post` objects) are expected. See [attributes](/docs/reference-guides/block-api/block-attributes.md) for details.
 -->
_注意:_ ブロックの定義を考えてみると、それはブロックのセマンティクスであり、提供される隔離の仕組みであり、つまりは、ブロックのアイデンティティとなります。一方、ブロックのデータがどこの保存されるかという点になると、もう少し自由になります。ブロックは、静的なローカルデータだけではない、HTML コメントやブロックの HTML 内の JSON リテラルを介した、より多くの保存場所と、より多くのメカニズム (_例_ グローバルブロック、または、そうでなければ補完的な `WP_Post` オブジェクト内の領域) をサポートすることが期待されます。詳細については[属性](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-attributes/)を参照してください。

<!--
### The Anatomy of a Serialized Block
 -->
### シリアライズされたブロックの詳細

<!--
When blocks are saved to the content after the editing session, its attributes—depending on the nature of the block—are serialized to these explicit comment delimiters.
 -->
ブロックが編集セッション後にコンテンツに保存される際、その属性は、ブロックの性質に応じて、明示的なコメントでリミッターにシリアライズされます。

```html
<!-- wp:image -->
<figure class="wp-block-image"><img src="source.jpg" alt="" /></figure>
<!-- /wp:image -->
```

<!--
A purely dynamic block that is to be server-rendered before display could look like this:
 -->
表示前にサーバーでレンダーされる純粋なダイナミックブロックは、次のようになります。

```html
<!-- wp:latest-posts {"postsToShow":4,"displayPostDate":true} /-->
```

<!--
## The Data Lifecycle
 -->
## データのライフサイクル

<!--
In summary, the block editor workflow parses the saved document to an in-memory tree of blocks, using token delimiters to help. During editing, all manipulations happen within the block tree. The process ends by serializing the blocks back to the `post_content`.
 -->
要約すると、ブロックエディタのワークフローは、トークンデリミタを利用して、保存されたドキュメントをメモリー内のブロックツリーにパースします。編集中、すべての操作はブロックツリーの中で行います。そしてプロセスは、ブロックをシリアライズし、 `post_content` に戻して、終了します。

<!--
The workflow process relies on a serialization/parser pair to persist posts. Hypothetically, the post data structure could be stored using a plugin or retrieved from a remote JSON file to be converted to the block tree.
 -->
ワークフロープロセスは、投稿を永続化する際、シリアライゼーションとパーサーのペアに依存します。仮定の話ですが理論上は、投稿データ構造はプラグインを使用して保存したり、リモートの JSON ファイルを取得してブロックツリーに変換できます。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/explanations/architecture/data-flow.md)
