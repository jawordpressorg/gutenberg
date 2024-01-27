<!-- 
# Markup representation of a block
 -->
# ブロックのマークアップ表現

<!-- 
When stored in the database or in templates as HTML files, blocks are represented using a [specific HTML grammar](https://developer.wordpress.org/block-editor/explanations/architecture/key-concepts/#data-and-attributes), which is technically valid HTML based on HTML comments that act as explicit block delimiters 
 -->
データベースやテンプレート内に HTML ファイルとして保存されるとき、ブロックは[特別な HTML 文法](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/key-concepts/#%E3%83%87%E3%83%BC%E3%82%BF%E3%81%A8%E5%B1%9E%E6%80%A7)を使用して表現されます。これは技術的に正しい (valid) な HTML で、明示的なブロック区切りとして機能する HTML コメントをベースとします。

<!-- 
These are some of the rules for the markup used to represent a block:

- All core block comments start with a prefix and the block name: `wp:blockname`
- For custom blocks, `blockname` is `namespace/blockname`
- The comment can be a single line, self-closing, or wrapper for HTML content.
- Custom block settings and attributes are stored as a JSON object inside the block comment.
 -->
以下はブロックを表現するマークアップのルールの例です。
- すべてのコアブロックのコメントは、プレフィックスとブロック名で始まります。`wp:blockname`
- カスタムブロックでは `blockname` は `namespace/blockname` です。
- コメントは一行でも、自分で閉じる形式でも、HTML コンテンツのラッパーでも構いません。
- カスタムブロックの設定と属性は、ブロックコメントの中に JSON オブジェクトとして保存されます。

<!-- 
_Example: Markup representation of an `image` core block_
 -->
_例: `image` コアブロックのマークアップ表現_

```
<!-- wp:image -->
<figure class="wp-block-image"><img src="source.jpg" alt="" /></figure>
<!-- /wp:image -->
```

<!-- 
The [markup representation of a block is parsed for the Block Editor](https://developer.wordpress.org/block-editor/explanations/architecture/data-flow/) and the block's output for the front end:

- In the editor, WordPress parses this block markup, captures its data and loads its `edit` version
- In the front end, WordPress parses this block markup, captures its data and generates its final HTML markup
 -->
[ブロックのマークアップ表現は、ブロックエディター](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/data-flow/)、およびフロントエンドでのブロック出力用にパースされます。
- エディターでは、WordPress がこのブロックのマークアップをパースし、データを取得し、`edit` バージョンをロードします。
- フロントエンドでは、WordPress がこのブロックのマークアップをパースし、データを取得し、最終的な HTML マークアップを生成します。

<!-- 
Whenever a block is saved, the `save` function, defined when the [block is registered in the client](https://developer.wordpress.org/block-editor/getting-started/fundamentals/registration-of-a-block/#registration-of-the-block-with-javascript-client-side), is called to return the markup that will be saved into the database within the block delimiter's comment. If `save` is `null` (common case for blocks with dynamic rendering), only a single line block delimiter's comment is stored, along with any attributes
 -->
ブロックを保存するときはいつでも、[ブロックのクライアント内での登録](https://developer.wordpress.org/block-editor/getting-started/fundamentals/registration-of-a-block/#registration-of-the-block-with-javascript-client-side)時に定義した `save` 関数が呼び出され、ブロック区切り文字のコメント内に、データベースに保存するマークアップが返されます。もし `save` が `null` (動的レンダリングのブロックではよくあるケース)であれば、属性とともに、1行のブロック区切り文字のコメントのみが保存されます。

<!-- 
The Post Editor checks that the markup created by the `save` function is identical to the block's markup saved to the database:
 -->
投稿エディターは `save` 関数によって作成されたマークアップが、データベースに保存されたブロックのマークアップと同一かどうかをチェックします。

<!-- 
- If there are any differences, the Post Editor triggers a [block validation error](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#validation).
- Block validation errors usually happen when a block’s `save` function is updated to change the markup produced by the block.
- A block developer can mitigate these issues by adding a [**block deprecation**](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-deprecation/) to register the change in the block.
 -->
- もし違いがあれば、投稿エディターは[ブロック検証 (validation) エラー](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/#%E3%83%90%E3%83%AA%E3%83%87%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3)を起こします。
- ブロック検証エラーは通常、ブロックの `save` 関数が更新され、ブロックが生成したマークアップが変更された際に発生します。
- ブロック開発者は[**ブロックの非推奨プロセス**](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-deprecation/)を追加してブロックに変更を登録することで、これらの問題を軽減できます。

<!-- 
The markup of a **block with dynamic rendering** is expected to change so the markup of these blocks is not saved to the database. What is saved in the database as representation of the block, for blocks with dynamic rendering, is a single line of HTML consisting on just the block delimiter's comment (including block attributes values). That HTML is not subject to the Post Editor’s validation.
 -->
**動的レンダリングのブロック**のマークアップは変更が予想されるため、これらのブロックのマークアップはデータベースに保存されません。ブロックの表現としてデータベースに保存されるのは、ブロック区切り文字のコメント (ブロック属性値を含む)だけで構成される1行の HTML です。この HTML は投稿エディターの検証の対象になりません。

<!-- 
_Example: Markup representation of a block with dynamic rendering (`save` = `null`) and attributes_
 -->
_例: 動的レンダリング (`save` = `null`) のブロックと属性のマークアップ表現_。

```html
<!-- wp:latest-posts {"postsToShow":4,"displayPostDate":true} /-->
```
<!-- 
## Additional Resources
 -->
## その他の情報

<!-- 
- [Data Flow and Data Format](https://developer.wordpress.org/block-editor/explanations/architecture/data-flow/)
- [Static vs. dynamic blocks: What’s the difference?](https://developer.wordpress.org/news/2023/02/27/static-vs-dynamic-blocks-whats-the-difference/)
- [Block deprecation – a tutorial](https://developer.wordpress.org/news/2023/03/10/block-deprecation-a-tutorial/)
- [Introduction to Templates > Block markup](https://developer.wordpress.org/themes/templates/introduction-to-templates/#block-markup) | Theme Handbook 
 -->
- [データフローとデータフォーマット](https://ja.wordpress.org/team/handbook/block-editor/explanations/architecture/data-flow/)
- [Static vs. dynamic blocks: What’s the difference?](https://developer.wordpress.org/news/2023/02/27/static-vs-dynamic-blocks-whats-the-difference/) (静的ブロックと動的ブロックの相違)
- [Block deprecation – a tutorial](https://developer.wordpress.org/news/2023/03/10/block-deprecation-a-tutorial/) (ブロックの非推奨プロセスのチュートリアル)
- [Introduction to Templates > Block markup](https://developer.wordpress.org/themes/templates/introduction-to-templates/#block-markup) (テンプレート > ブロックマークアップ入門) | テーマハンドブック

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/fundamentals/markup-representation-block.md)