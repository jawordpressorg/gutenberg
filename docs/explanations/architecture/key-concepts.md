<!-- 
# Key Concepts
 -->
# キーコンセプト

<!-- 
## Blocks
 -->
## ブロック

<!--  
Blocks are an abstract unit for structuring and interacting with content. When composed together they create the content for a webpage. Everything from a paragraph, to a video, to the site title is represented as a block.
 --> 
ブロックはコンテンツを構成し、相互に作用し合う抽象的なユニットです。複数を一緒に組み合わせて Web ページのコンテンツを作成します。段落やビデオからサイトのタイトルまで、あらゆるものがブロックとして表現されます。

<!--  
Blocks come in many different forms but also provide a consistent interface. They can be inserted, moved, reordered, copied, duplicated, transformed, deleted, dragged, and combined. Blocks can also be reused, allowing them to be shared across posts and post types and/or used multiple times in the same post. If it helps, you can think of blocks as a more graceful shortcode, with rich formatting tools for users to compose content.
 --> 
ブロックはさまざまな異なる形を取りますが、一貫したインターフェースを提供します。例えば、挿入、移動、並べ替え、コピー、重複、変換、削除、ドラッグ、合成。ブロックを再利用することも可能で、投稿や投稿タイプ間で共有したり、あるいは、1つの投稿の中で複数回、使用することができます。ブロックを、コンテンツ作成者向けのリッチな整形ツールの付いた、洗練されたショートコードとして考えても良いでしょう。

<!-- 
The settings and content of a block can be customized in three main places: the block canvas, the block toolbar, and the block inspector.
 -->
ブロックの設定とコンテンツは主に3か所でカスタマイズできます。ブロックキャンバス、ブロックツールバー、そしてブロックインスペクターです。

<!-- 
### Composability
 -->
### コンポーザビリティ (構成可能性)

<!-- 
Blocks are meant to be combined in different ways. Blocks are hierarchical in that a block can be nested within another block. Nested blocks and its container are also called _children_ and _parent_ respectively. For example, a _Columns_ block can be the parent block to multiple child blocks in each of its columns. The API that governs child block usage is named `InnerBlocks`.
 -->
ブロックは異なる方法で組み合わされます。ブロックは階層構造を取り、別のブロックをネストできます。ネストしたブロック、およびそのコンテナはそれぞれ、「子」、「親」と呼ばれます。たとえば「カラム」ブロックは、各カラム内に複数の子ブロックを持つ親ブロックになります。`InnerBlocks` API は子ブロックの使用を統制します。 

<!-- 
### Data & Attributes
 -->
### データと属性

<!-- 
Blocks understand content as attributes and are serializable to HTML. To this point, there is a new Block Grammar. Distilled, the block grammar is an HTML comment, either a self-closing tag or with a beginning tag and ending tag. In the main tag, depending on the block type and user customizations, there can be a JSON object. This raw form of the block is referred to as serialized.
 -->
ブロックはコンテンツを、HTML にシリアライズ可能な属性として理解します。この観点から新しいブロック文法があります。ブロック文法を簡単に説明すると、自身で閉じる自己完結型のタグか、開始タグと終了タグから成る HTML コメントです。このブロックの生の形が、シリアライズされたものとして参照されます。

```html
<!-- wp:paragraph {"key": "value"} -->
<p>Welcome to the world of blocks.</p>
<!-- /wp:paragraph -->
```

<!-- 
Blocks can be static or dynamic. Static blocks contain rendered content and an object of Attributes used to re-render based on changes. Dynamic blocks require server-side data and rendering while the post content is being generated (rendering).

Each block contains Attributes or configuration settings, which can be sourced from raw HTML in the content via meta or other customizable origins.
 -->
ブロックは静的にも動的にもなります。静的ブロックに含まれるものは、レンダーされたコンテンツと、変更に基づいての再レンダーに使用される Attributes のオブジェクトです。ダイナミックブロックで必要とされるものは、サーバーサイドデータと、投稿コンテンツが生成 (レンダリング) される間のレンダリングです。

各ブロックは Attributes、または構成設定を含みます。これらは、メタ、または他のカスタマイズ可能な方法で、コンテンツ内の生の HTML から取得されます。

<!-- 
### Transformations
 -->
### 変換
<!-- 
Blocks have the ability to be transformed into other block types. This allows basic operations like converting a paragraph into a heading, but also more intricate ones like multiple images becoming a gallery. Transformations work for single blocks and for multi-block selections. Internal block variations are also possible transformation targets.
 -->
ブロックは、他のブロックタイプに変換できます。この働きにより、段落ブロックを見出しブロックに変換するような簡単な操作から、複数の画像ブロックをギャラリーブロックに変換するような複雑な操作まで可能になります。変換は単一のブロックに対しても、複数のブロックに対しても働きます。また内部のブロックバリエーションも変換の対象になります。

<!-- 
### Variations
 -->
### バリエーション

<!-- 
Given a block type, a block variation is a predefined set of its initial attributes. This API allows creating a single block from which multiple configurations are possible. Variations provide different possible interfaces, including showing up as entirely new blocks in the library, or as presets when inserting a new block. Read [the API documentation](/docs/reference-guides/block-api/block-registration.md#variations-optional) for more details.
 -->
ブロックタイプを与えられると、ブロックバリエーションは、事前定義済みの初期属性セットになります。この API を使用して、複数の構成から単一のブロックを作成できます。バリエーションは、ライブラリ内で完全に新しいブロックとして表示したり、新しいブロックを挿入した際のプリセットになったり、さまざまなインターフェースを提供します。詳細については [API ドキュメント](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#variations-optional) を参照してください。

<!-- 
**More on Blocks**
 -->
**ブロックの追加情報**

<!-- 
- **[Block API](/docs/reference-guides/block-api/README.md)**
- **[Tutorial: Building A Custom Block](/docs/getting-started/tutorials/create-block/README.md)**
 -->
- **[ブロック API](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/)**
- **[チュートリアル: カスタムブロックの作成](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/)**

<!-- 
## Reusable Blocks
 -->
## 再利用可能ブロック

<!-- 
A reusable blocks is a block (or multiple blocks) that can be inserted and edited globally at once. If a reusable block is edited in one place, those changes are reflected across all posts and pages that that block is used. Examples of reusable blocks include a block consisting of a heading whose content and a custom color that would be appear on multiple pages of the site and sidebar widgets that would appear on every page. 
 -->
再利用可能ブロックは、挿入し、一度にまとめて編集できる単一または複数のブロックです。ある場所で再利用可能ブロックを編集すると、同じブロックを使用しているすべての投稿や固定ページで変更が反映されます。例えば、見出しのコンテンツとカスタムカラーを含むブロックを再利用可能ブロックとして、サイトの複数のページや、全ページに表示されるサイドバーウィジェット内で使用できます。

<!-- 
Any edits to a reusable block will appear on every other use of that block, saving time from having to make the same edit on different posts. 
 -->
再利用可能ブロックの編集は、同じブロックを使用しているすべての場所に反映されるため、異なる投稿で同じ編集を行う手間を省き時間の節約になります。

<!-- 
In technical details, reusable blocks are stored as a hidden post type (`wp_block`) and are dynamic blocks that "ref" or reference the `post_id` and return the `post_content` for that block.
 -->
技術的には再利用可能ブロックは、隠し投稿タイプ `wp_block` として保存され、 `post_id` を参照して、ブロックの `post_content` を返すダイナミックブロックです。

<!-- 
## Patterns
 -->
## パターン

<!-- 
A [block pattern](/docs/reference-guides/block-api/block-patterns.md) is a group of blocks that have been combined together creating a design pattern. These design patterns provide a starting point for building more advanced pages and layouts quickly. A block pattern can be as small as a single block or as large as a full page of content. Unlike reusable blocks, once a pattern is inserted it doesn't remain in sync with the original content as the blocks contained are meant to be edited and customized by the user. Underneath the surface, patterns are just regular blocks composed together. Themes can register patterns to offer users quick starting points with a design language familiar to that theme's aesthetics.
 -->

[ブロックパターン](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-patterns/)は、一緒に組み合わせてデザインパターンを作成する、ブロックのグループです。このデザインパターンは高度なページやレイアウトを素早く作る、最初のスタート地点となります。ブロックパターンは、単一ブロックのような小さなものから、完全なページコンテンツのような大きなものまで可能です。再利用可能ブロックとは異なり、一度パターンが挿入されるとオリジナルのコンテンツとは同期せず、ブロック内のコンテンツのみがユーザーの編集やカスタマイズの対象となります。内部の実装から見るとパターンは、一緒に組み合わされた通常のブロックに過ぎません。テーマはパターンを登録することで、ユーザーにテーマの美しさに合わせたスタート地点を提供することができます。

<!-- 
## Templates (in progress)
 -->
## テンプレート (進行中)

<!-- 
While the post editor concentrates on the content of a post, the [template](/docs/reference-guides/block-api/block-templates.md) editor allows declaring and editing an entire site using blocks, from header to footer. To support these efforts there's a collection of blocks that interact with different parts of a site (like the site title, description, logo, navigation, etc) as well as semantic areas like header, sidebar, and footer. Templates are broken down between templates (that describe a full page) and template parts (that describe reusable areas within a template). These templates and template parts can be composed together and registered by a theme. They are also entirely editable by users using the block editor. Customized templates are saved in a `wp_template` post type. Block templates include both static pages and dynamic ones, like archives, singular, home, 404, etc.
 -->
投稿エディターが投稿のコンテンツを処理するように、[テンプレート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-templates/)エディターを使用するとブロックを使用して、ヘッダーからフッターまで、サイト全体を宣言し、編集できます。この機能をサポートするため、サイトタイトル、説明、ロゴ、ナビゲーションなどのサイトの異なる場所、そしてヘッダー、サイドバー、フッターなどのセマンティック領域と通信するブロックのコレクションがあります。テンプレートは、ページ全体を表すテンプレートと、テンプレート内の再利用可能な領域を表すテンプレートパーツとに分解されます。これらのテンプレートとテンプレートパーツは一緒に組み合わされ、テーマにより登録されます。これらはまたブロックエディターを使用して完全に編集できます。カスタマイズされたテンプレートは `wp_template` 投稿タイプに保存されます。ブロックテンプレートは静的ページと動的ページの両方を含み、たとえば、archive、singular、home、404等があります。

<!-- 
Note: custom post types can also be initialized with a starting `post_content` template that should not be confused with the theme template system described above.
 -->
注意: カスタム投稿タイプはまた、開始 `post_content` テンプレートでも初期化されます。これを上で説明したテーマテンプレートシステムと混同しないでください。
<!-- 
## Global Styles (in progress)
 -->
## グローバルスタイル (進行中)

<!-- 
Describes a set of configuration and default properties of blocks and their visual aspects. Global Styles is both an interface (which users access through the site editor) and a configuration system done through [a `theme.json` file](/docs/how-to-guides/themes/theme-json.md). This file absorbs most of the configuration aspects usually scattered through various `add_theme_support` calls to simplify communicating with the editor. It thus aims to improve declaring what settings should be enabled, what attributes are supported, what specific tools a theme offers (like a custom color palette), the available design tools present both globally and on each block, and an infrastructure that allows to enqueue only the relevant CSS based on what blocks are used on a page.
 -->
グローバルスタイルは、ブロックの構成やデフォルトプロパティ、ビジュアル表現のセットを記述します。グローバルスタイルは、ユーザーがサイトエディターにアクセスする際に使用する「インターフェース」と、[`theme.json` ファイル](https://ja.wordpress.org/team/handbook/block-editor/developers/themes/theme-json/) を介して実行される「構成システム」の2つから成ります。`theme.json` ファイルは通常であればさまざまな `add_theme_support` 呼び出しに散らばる構成要素の大部分を吸収し、エディターとの通信を簡素化し、以下の改良を目的とします。どの設定を有効化すべきか、どの属性がサポートされるか、テーマが特定のツール、たとえばカスタムカラーパレットを提供するかなどの宣言、そして、全体またはブロックごとに利用可能なデザインツール、ページで使用されるブロックに応じて関連する CSS のみをエンキューできる基盤。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/explanations/architecture/key-concepts.md)
