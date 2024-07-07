<!-- 
# Markup representation of a block
 -->
# ブロックのマークアップ表現

<!-- 
When stored in the database or in templates as HTML files, blocks are represented using a [specific HTML grammar](https://developer.wordpress.org/block-editor/explanations/architecture/key-concepts/#data-and-attributes), which is technically valid HTML based on HTML comments that act as explicit block delimiters 
 -->
<!-- 
データベースやテンプレート内に HTML ファイルとして保存されるとき、ブロックは[特別な HTML 文法](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/key-concepts/#%E3%83%87%E3%83%BC%E3%82%BF%E3%81%A8%E5%B1%9E%E6%80%A7)を使用して表現されます。これは技術的に正しい (valid) な HTML で、明示的なブロック区切りとして機能する HTML コメントをベースとします。
 -->
<!-- 
Blocks are stored in the database or within HTML templates using a unique [HTML-based syntax](https://developer.wordpress.org/block-editor/explanations/architecture/key-concepts/#data-and-attributes), distinguished by HTML comments that serve as clear block delimiters. This ensures that block markup is technically valid HTML.
 -->
ブロックは独自の [HTML ベースの構文](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/key-concepts/#%E3%83%87%E3%83%BC%E3%82%BF%E3%81%A8%E5%B1%9E%E6%80%A7)を使用してデータベースや HTML テンプレート内に保存され、明確なブロック区切りとして働く HTML コメントによって分けられます。これにより、ブロックのマークアップは技術的に妥当な HTML であることが保証されます。

<!-- 
These are some of the rules for the markup used to represent a block:
以下はブロックを表現するマークアップのルールの例です。

Here are a few guidelines for the markup that defines a block:
 -->
ブロックを定義するマークアップのガイドラインです。

<!--
- Core blocks begin with the `wp:` prefix, followed by the block name (e.g., `wp:image`). Notably, the `core` namespace is omitted.
- Custom blocks begin with the `wp:` prefix, followed by the block namespace and name (e.g., `wp:namespace/name`).
- The comment can be a single line, self-closing, or wrapper for HTML content.
- Block settings and attributes are stored as a JSON object inside the block comment.
 -->
- すべてのコアブロックのコメントは、プレフィックスとブロック名で始まります。`wp:blockname`
- カスタムブロックでは `blockname` は `namespace/blockname` です。
- コメントは一行でも、自分で閉じる形式でも、HTML コンテンツのラッパーでも構いません。
- ブロックの設定と属性は、ブロックコメントの中に JSON オブジェクトとして保存されます。

<!-- 
_Example: Markup representation of an `image` core block_
 -->
<!-- 
_例: `image` コアブロックのマークアップ表現_
 -->

<!-- 
The following is the simplified markup representation of an Image block:
 -->
以下は画像ブロックの簡略化したマークアップ表現です。

```html
<!-- wp:image {"sizeSlug":"large"} -->
<figure class="wp-block-image size-large">
    <img src="source.jpg" alt="" />
</figure>
<!-- /wp:image -->
```

<!-- 
The [markup representation of a block is parsed for the Block Editor](https://developer.wordpress.org/block-editor/explanations/architecture/data-flow/) and the block's output for the front end:

- In the editor, WordPress parses this block markup, captures its data and loads its `edit` version
- In the front end, WordPress parses this block markup, captures its data and generates its final HTML markup
 -->
<!--  
[ブロックのマークアップ表現は、ブロックエディター](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/data-flow/)、およびフロントエンドでのブロック出力用にパースされます。
 -->

<!-- 
The markup for a block is crucial both in the Block Editor and for displaying the block on the front end:
 -->
ブロックのマークアップは、ブロックエディター内でも、フロントエンド上でのブロックの表示でも重要です。

<!-- 
- エディターでは、WordPress がこのブロックのマークアップをパースし、データを取得し、`edit` バージョンをロードします。
- フロントエンドでは、WordPress がこのブロックのマークアップをパースし、データを取得し、最終的な HTML マークアップを生成します。
 -->

<!-- 
- WordPress analyzes the block's markup within the Editor to extract its data and present the editable version to the user.
- On the front end, WordPress again parses the markup to extract data and render the final HTML output.
 -->
- WordPress はエディター内でブロックのマークアップを解析してデータを抽出し、編集可能なバージョンをユーザーに提示します。
- フロントエンド上では、WordPress は再びマークアップを解析してデータを抽出し、最終的な HTML 出力をレンダーします。

<!-- 
<div class="callout callout-tip">
    Refer to the <a href="https://developer.wordpress.org/block-editor/explanations/architecture/data-flow/">Data Flow</a> article for a more in-depth look at how block data is parsed in WordPress.
</div>
 -->
> WordPress でブロックデータがどのようにパースされるかについては、<a href="https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/data-flow/">データフロー</a>の記事を参照してください。

<!-- 
Whenever a block is saved, the `save` function, defined when the [block is registered in the client](https://developer.wordpress.org/block-editor/getting-started/fundamentals/registration-of-a-block/#registration-of-the-block-with-javascript-client-side), is called to return the markup that will be saved into the database within the block delimiter's comment. If `save` is `null` (common case for blocks with dynamic rendering), only a single line block delimiter's comment is stored, along with any attributes
 -->
<!-- 
ブロックを保存するときはいつでも、[ブロックのクライアント内での登録](https://developer.wordpress.org/block-editor/getting-started/fundamentals/registration-of-a-block/#registration-of-the-block-with-javascript-client-side)時に定義した `save` 関数が呼び出され、ブロック区切り文字のコメント内に、データベースに保存するマークアップが返されます。もし `save` が `null` (動的レンダリングのブロックではよくあるケース)であれば、属性とともに、1行のブロック区切り文字のコメントのみが保存されます。
 -->

<!-- 
When a block is saved, the `save` function—defined when the [block is registered in the client](https://developer.wordpress.org/block-editor/getting-started/fundamentals/registration-of-a-block/#registration-of-the-block-with-javascript-client-side)—is executed to generate the markup stored in the database, wrapped in block delimiter comments. For dynamically rendered blocks, which typically set `save` to `null`, only a placeholder comment with block attributes is saved.
 -->
ブロックが保存されるとき、[ブロックのクライアント内での登録](https://developer.wordpress.org/block-editor/getting-started/fundamentals/registration-of-a-block/#registration-of-the-block-with-javascript-client-side)時に定義された `save` 関数が実行され、ブロック区切りコメントでラップされた、データベース内に保存されるマークアップが生成されます。動的にレンダーされるブロックでは、通常 `save` は `null` に設定され、ブロック属性を持つプレースホルダーコメントのみが保存されます。

<!-- 
The Post Editor checks that the markup created by the `save` function is identical to the block's markup saved to the database:
 -->
<!-- 
投稿エディターは `save` 関数によって作成されたマークアップが、データベースに保存されたブロックのマークアップと同一かどうかをチェックします。
 -->

<!-- 
- If there are any differences, the Post Editor triggers a [block validation error](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#validation).
- Block validation errors usually happen when a block’s `save` function is updated to change the markup produced by the block.
- A block developer can mitigate these issues by adding a [**block deprecation**](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-deprecation/) to register the change in the block.
 -->
<!-- 
- もし違いがあれば、投稿エディターは[ブロック検証 (validation) エラー](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/#%E3%83%90%E3%83%AA%E3%83%87%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3)を起こします。
- ブロック検証エラーは通常、ブロックの `save` 関数が更新され、ブロックが生成したマークアップが変更された際に発生します。
- ブロック開発者は[**ブロックの非推奨プロセス**](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-deprecation/)を追加してブロックに変更を登録することで、これらの問題を軽減できます。
 -->
<!-- 
The markup of a **block with dynamic rendering** is expected to change so the markup of these blocks is not saved to the database. What is saved in the database as representation of the block, for blocks with dynamic rendering, is a single line of HTML consisting on just the block delimiter's comment (including block attributes values). That HTML is not subject to the Post Editor’s validation.
 -->
**動的レンダリングのブロック**のマークアップは変更が予想されるため、これらのブロックのマークアップはデータベースに保存されません。ブロックの表現としてデータベースに保存されるのは、ブロック区切り文字のコメント (ブロック属性値を含む)だけで構成される1行の HTML です。この HTML は投稿エディターの検証の対象になりません。

<!-- 
_Example: Markup representation of a block with dynamic rendering (`save` = `null`) and attributes_
 -->
_例: 動的レンダリング (`save` = `null`) のブロックと属性のマークアップ表現_。

<!-- 
Here is the markup representation of a dynamically rendered block (`save` = `null`). Notice there is no HTML markup besides the comment.
 -->
以下は、動的にレンダーされるブロックのマークアップ表現です (`save` = `null`)。注意: コメント以外に HTML マークアップがありません。

```html
<!-- wp:latest-posts {"postsToShow":4,"displayPostDate":true} /-->
```

<!-- 
When a block has a `save` function, the Block Editor checks that the markup created by the `save` function is identical to the block's markup saved to the database:
 -->
ブロックに `save` 関数があるとき、ブロックエディターは `save` 関数によって作成されたマークアップが、データベースに保存されたブロックのマークアップと同じかどうかをチェックします。

<!-- 
- Discrepancies will trigger a [validation error](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#validation), often due to changes in the `save` function's output.
- Developers can address potential validation issues by implementing [block deprecations](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-deprecation/) to account for changes.
 -->
- 一致しない場合、[ブロック検証 (validation) エラー](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/#%E3%83%90%E3%83%AA%E3%83%87%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3) が発生します。多くは `save` 関数の出力の変更が原因です。
- 開発者は[**ブロックの非推奨プロセス**](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-deprecation/)を実装することで、潜在的なバリデーションの問題に対処できます。

<!-- 
As the example above shows, the stored markup is minimal for dynamically rendered blocks. Generally, this is just a delimiter comment containing block attributes, which is not subject to the Block Editor's validation. This approach reflects the dynamic nature of these blocks, where the actual HTML is generated server-side and is not stored in the database.
 -->
上の例が示すように、動的にレンダーされるブロックでは、保存されるマークアップは最小限です。 一般に、これはブロック属性を含む単なる区切りコメントであり、ブロックエディターのバリデーションの対象にはなりません。 このアプローチはブロックの動的な性質を表していて、実際の HTML はサーバーサイドで生成され、データベースには保存されません。

<!-- 
## Additional resources
 -->
## その他の情報

<!-- 
- [Data Flow and Data Format](https://developer.wordpress.org/block-editor/explanations/architecture/data-flow/)
- [Static vs. dynamic blocks: What’s the difference?](https://developer.wordpress.org/news/2023/02/27/static-vs-dynamic-blocks-whats-the-difference/) | Developer Blog
- [Block deprecation – a tutorial](https://developer.wordpress.org/news/2023/03/10/block-deprecation-a-tutorial/) | Developer Blog
- [Introduction to Templates > Block markup](https://developer.wordpress.org/themes/templates/introduction-to-templates/#block-markup) | Theme Handbook 
 -->
- [データフローとデータフォーマット](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/data-flow/)
- [Static vs. dynamic blocks: What’s the difference?](https://developer.wordpress.org/news/2023/02/27/static-vs-dynamic-blocks-whats-the-difference/) (静的ブロックと動的ブロックの相違) | Developer Blog
- [Block deprecation – a tutorial](https://developer.wordpress.org/news/2023/03/10/block-deprecation-a-tutorial/) (ブロックの非推奨プロセスのチュートリアル) | Developer Blog
- [Introduction to Templates > Block markup](https://developer.wordpress.org/themes/templates/introduction-to-templates/#block-markup) (テンプレート > ブロックマークアップ入門) | テーマハンドブック

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/fundamentals/markup-representation-block.md)

