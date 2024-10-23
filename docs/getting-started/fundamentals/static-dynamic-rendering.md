<!-- 
# Static or Dynamic rendering of a block
 -->
# ブロックの静的レンダリングと動的レンダリング

<!-- 
A block's front-end markup can either be dynamically generated server-side upon request (dynamic blocks) or statically generated during the save process in the Block Editor (static blocks). This article explores each method.
 -->
ブロックのフロントエンドのマークアップ生成には2通りの方式があります。リクエストに応じてサーバーサイドで動的に生成する方式 (動的ブロック、ダイナミックブロック)と、ブロックエディターでの save プロセス中に静的に生成する方式 (静的ブロック) です。この記事では、それぞれの方式について説明します。

<!-- 
<div class="callout callout-tip">
The post <a href="https://developer.wordpress.org/news/2023/02/27/static-vs-dynamic-blocks-whats-the-difference/">Static vs. dynamic blocks: What’s the difference?</a> provides a great introduction to this topic.
</div>
 -->
> 投稿「<a href="https://developer.wordpress.org/news/2023/02/27/static-vs-dynamic-blocks-whats-the-difference/">Static vs. dynamic blocks: What’s the difference?</a>」は、このトピックに関する素晴らしい入門記事です。

<!-- 
## Static rendering
 -->
## 静的レンダリング

<!-- 
Blocks with "static rendering" produce front-end output that is fixed and stored in the database upon saving. These blocks rely solely on their `save` function to define their [HTML markup](https://developer.wordpress.org/block-editor/getting-started/fundamentals/markup-representation-block/), which remains unchanged unless manually edited in the Block Editor.
 -->
「静的レンダリング」を行うブロックは、保存時に、データベース内に保存され固定されるフロントエンド出力を生成します。このブロックは [HTML マークアップ](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/markup-representation-block/)の定義に関して、 `save` 関数にのみ依存します。マークアップはブロックエディター内で手動で編集しない限り、変更されません。

<!-- 
If a block does not use a dynamic rendering method—meaning it doesn't generate content on the fly via PHP when the page loads—it's considered a "static block."
 -->
ブロックが動的なレンダリング方法を使用しなければ、すなわち、ページが読み込まれたときに PHP を介してその場でコンテンツを生成しなければ、このブロックは「静的ブロック」と見なされます。

<!-- 
The diagram below illustrates how static block content is saved in the database and then retrieved and rendered as HTML on the front end.
 -->
次の図は、静的ブロックのコンテンツがどのようにデータベース内に保存され、どのようにフロントエンドで HTML として取得、レンダーされるかを示しています。
<!-- 
![Blocks with static rendering diagram](https://developer.wordpress.org/files/2024/01/static-rendering.png)
 -->
![図: 静的レンダリングのブロック](https://developer.wordpress.org/files/2024/01/static-rendering.png)

<!-- 
### How to define static rendering for a block
 -->
### ブロックで静的レンダリングを定義する方法

<!-- 
The `save` function, which can be defined when [registering a block on the client](https://developer.wordpress.org/block-editor/getting-started/fundamentals/registration-of-a-block/#registration-of-the-block-with-javascript-client-side), specifies the block's HTML structure that gets saved in the database whenever you save the block in the Editor. This saved HTML is then used to display the block on the front end.
 -->
`save` 関数は、[クライアントにブロックを登録する](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/registration-of-a-block/#registration-of-the-block-with-javascript-client-side)際に定義され、ブロックの HTML 構造を指定します。HTML 構造はエディターでのブロックの保存時にデータベース内に保存され、フロントエンドでのブロックの表示に使用されます。

<!-- 
Blocks in WordPress are encapsulated within special comment tags that serve as unique [block delimiters](https://developer.wordpress.org/block-editor/getting-started/fundamentals/markup-representation-block/). However, only the HTML defined in the static block's `save` function—excluding these delimiters—is rendered.
 -->
WordPress のブロックは、固有の[ブロック区切り](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/markup-representation-block/)として機能する特別なコメントタグ内にカプセル化されます。ただし、静的ブロックの `save` 関数で定義された HTML のみがこれらの区切り文字を取り除いてレンダーされます。

<!-- 
<details><summary><strong>View an example of static rendering in the Preformatted block</strong></summary>
<br/>
The following <a href="https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/preformatted/save.js"><code>save</code> function</a> for the <a href="https://github.com/WordPress/gutenberg/tree/trunk/packages/block-library/src/preformatted">Preformatted</a> core block looks like this:
 -->
#### 整形済みテキストブロックの静的レンダリングの例

コアの[整形済みテキスト](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-library/src/preformatted)ブロックの [`save`](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/preformatted/save.js) 関数は以下のようになります。

```js
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { content } = attributes;

	return (
		<pre { ...useBlockProps.save() }>
			<RichText.Content value={ content } />
		</pre>
	);
}
```

<!-- 
The function generates the following markup representation of the block when `attributes.content` has the value `"This is some preformatted text"`:
 -->
この関数は、`attributes.content` の値が `"This is some preformatted text"` のとき、次のようなブロックのマークアップ表現を生成します：

```html
<!-- wp:preformatted -->
<pre class="wp-block-preformatted">This is some preformatted text</pre>
<!-- /wp:preformatted -->
```

<!-- 
On the front end, the block will return the following markup. Notice how the delimiters are no longer present.
 -->
フロントエンドでこのブロックは、次のようなマークアップを返します。区切りがないことに注意してください。

```html
<pre class="wp-block-preformatted">This is some preformatted text</pre>
```
<!-- 
</details>
<br/>
 -->

<!-- 
Dynamic blocks, which we'll explore in the following section, can specify an initial HTML structure through a `save` function, similar to static blocks. However, dynamic blocks primarily rely on server-side rendering to generate their content. If, for any reason, the dynamic rendering isn't available—perhaps due to the block's plugin being deactivated—the system will fall back to using the HTML structure saved in the database to display the block on the front end.
 -->
次のセクションで説明する動的ブロックは、静的ブロックと同様に `save` 関数で、最初の HTML 構造を指定できます。しかし、動的ブロックは主にサーバー側のレンダリングに依存してコンテンツを生成します。何らかの理由で動的なレンダリングが利用できない場合、たとえばブロックのプラグインが無効の場合など、システムはデータベースに保存された HTML 構造を使用してフロントエンドにブロックを表示します。

<!-- 
For a practical demonstration of how this works, refer to the [Building your first block](/docs/getting-started/tutorial.md) tutorial. Specifically, the [Adding static rendering](/docs/getting-started/tutorial.md#adding-static-rendering) section illustrates how a block can have both a saved HTML structure and dynamic rendering capabilities.
 -->
この仕組みの実践的なデモについては、チュートリアルの[はじめてのブロック作成](https://ja.wordpress.org/team/handbook/block-editor/getting-started/tutorial/)を参照してください。特に、[静的レンダリングの追加](https://ja.wordpress.org/team/handbook/block-editor/getting-started/tutorial/#adding-static-rendering) セクションではブロックが、保存された HTML 構造と動的レンダリング機能の両方を持つ方法を説明しています。

<!-- 
<div class="callout callout-info">
WordPress provides mechanisms like the <a href="https://developer.wordpress.org/reference/functions/render_block/"><code>render_block</code></a> and the <a href="https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/"><code>render_callback</code></a> function to alter the saved HTML of a block before it appears on the front end. These tools offer developers the capability to customize block output dynamically, catering to complex and interactive user experiences.
</div>
 -->
WordPress では [`render_block`](https://developer.wordpress.org/reference/functions/render_block/) や [`render_callback`](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/) 関数のようなメカニズムが提供され、フロントエンドに表示される前に保存されたブロックの HTML を変更できます。これらのツールは、ブロックの出力を動的にカスタマイズする機能を開発者に提供し、複雑でインタラクティブなユーザー体験に対応します。

<!-- 
Additional examples of WordPress blocks that use static rendering, meaning their output is fixed at the time of saving and doesn't rely on server-side processing, include:
 -->
静的レンダリングを使用する例、すなわち、出力が保存時に固定され、サーバーサイドでの処理に依存しない WordPress ブロックの例には、他にも以下があります。

<!-- 
- [Separator](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/separator/save.js)
- [Spacer](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/spacer/save.js)
- [Button](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/button/save.js)
 -->
- [区切り](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/separator/save.js)
- [スペーサー](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/spacer/save.js)
- [ボタン](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/button/save.js)

<!-- 
## Dynamic rendering
 -->
## 動的レンダリング

<!-- 
Blocks with "dynamic rendering" are designed to generate their content and structure in real-time when requested on the front end. Unlike static blocks, which have a fixed HTML structure saved in the database, "dynamic blocks" rely on server-side processing to construct their output dynamically, making them highly versatile and suitable for content that needs to be updated frequently or is dependent on external data.
 -->
「動的レンダリング」を行うブロックは、フロントエンド側で要求された際に、リアルタイムでコンテンツと構造を生成するように設計されています。データベースに保存された固定した HTML 構造を持つ静的ブロックとは異なり、「動的ブロック」はサーバーサイドの処理に依存して動的に出力を構築するため、汎用性が高く、頻繁に更新する必要があるコンテンツや外部データに依存するコンテンツに適しています。

<!-- 
The diagram below illustrates how the representation of a dynamic block is saved in the database and then retrieved and dynamically rendered as HTML on the front end.
 -->
次の図は、どのように動的ブロックの表現が保存され、フロントエンドで HTML として取得され、動的にレンダーされるかを示しています。

<!-- 
![Blocks with dynamic rendering diagram](https://developer.wordpress.org/files/2024/01/dynamic-rendering.png)
 -->
![図: 動的レンダリングのブロック](https://developer.wordpress.org/files/2024/01/dynamic-rendering.png)

<!-- 
There are some common use cases for dynamic blocks:
 -->
動的ブロックの一般的な使用例を挙げます。

<!-- 
1. **Blocks where content should change even if a post has not been updated:** An example is the [Latest Posts](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-library/src/latest-posts) block, which will automatically update whenever a new post is published.
 -->
1. **投稿が更新されていなくても、コンテンツが変更されるべきブロック：** このブロックの例は[最新の投稿](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-library/src/latest-posts)ブロックです。新しい投稿が公開されると自動的に更新されます。

<!-- 
2. **Blocks where updates to the markup should be immediately shown on the front end:** If you update the structure of a block by adding a new class, adding an HTML element, or changing the layout in any other way, using a dynamic block ensures those changes are applied immediately on all occurrences of that block across the site. Without dynamic blocks, similar updates could trigger [validation errors](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#validation) in the Block Editor.
 -->
2. **マークアップの更新が即座にフロントエンドに表示されるべきブロック:** 新しいクラスや HTML 要素の追加、その他の方法によるレイアウトの変更などでブロックの構造を変更する場合、動的ブロックを使用すると、サイト全体でのブロックの利用箇所のすべてで即座に変更を適用できます。動的ブロックでなければ、同様の更新はブロックエディター内で[バリデーションエラー](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/#validation)を引き起こします。

<!-- 
### How to define dynamic rendering for a block
 -->
### ブロックで動的レンダリングを使用する方法

<!-- 
A block can define dynamic rendering in two main ways:
 -->
ブロックは主に2つの方法で動的レンダリングを定義できます。

<!-- 
1. Using the `render_callback` argument that can be passed to the [`register_block_type()`](https://developer.wordpress.org/block-editor/getting-started/fundamentals/registration-of-a-block/#registration-of-the-block-with-php-server-side) function.
 -->
1. [`register_block_type()`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/registration-of-a-block/#registration-of-the-block-with-php-server-side) 関数に渡す `render_callback` 引数を使用する。
<!-- 
2. Using a separate PHP file usually named `render.php`. This file's path should be defined using the [`render`](https://developer.wordpress.org/block-editor/getting-started/fundamentals/block-json/#files-for-the-blocks-behavior-output-or-style) property in the `block.json` file.
 -->
2. 通常 `render.php` という名前の個別の PHP ファイルを使用する。このファイルのパスは `block.json` ファイルの [`render`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-json/#files-for-the-blocks-behavior-output-or-style) プロパティを使用して定義します。

<!-- 
Both of these methods receive the following data:
 -->
どちらの方法も次のデータを受け取ります。

<!-- 
 - `$attributes`: The array of attributes for the block.
 - `$content`: The markup of the block as stored in the database, if any.
 - `$block`: The instance of the [WP_Block](https://developer.wordpress.org/reference/classes/wp_block/) class that represents the rendered block ([metadata of the block](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/)).
 -->
 - `$attributes`: ブロックの属性の配列
 - `$content`: データベース内に保存される、ブロックのマークアップ (もしあれば)
 - `$block`: [WP_Block](https://developer.wordpress.org/reference/classes/wp_block/) クラスのインスタンス。レンダーされるブロックを表す ([ブロックのメタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/))。

<!-- 
<details><summary><strong>View an example of dynamic rendering in the Site Title block</strong></summary>
<br/>
 -->
#### サイトのタイトルブロックの動的レンダリングの例

[サイトのタイトル](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-library/src/site-title)ブロックは以下の[`render_callback`](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/site-title/index.php) を使用します。

```php
function render_block_core_site_title( $attributes ) {
	$site_title = get_bloginfo( 'name' );
	if ( ! $site_title ) {
		return;
	}

	$tag_name = 'h1';
	$classes  = empty( $attributes['textAlign'] ) ? '' : "has-text-align-{$attributes['textAlign']}";
	if ( isset( $attributes['style']['elements']['link']['color']['text'] ) ) {
		$classes .= ' has-link-color';
	}

	if ( isset( $attributes['level'] ) ) {
		$tag_name = 0 === $attributes['level'] ? 'p' : 'h' . (int) $attributes['level'];
	}

	if ( $attributes['isLink'] ) {
		$aria_current = is_home() || ( is_front_page() && 'page' === get_option( 'show_on_front' ) ) ? ' aria-current="page"' : '';
		$link_target  = ! empty( $attributes['linkTarget'] ) ? $attributes['linkTarget'] : '_self';

		$site_title = sprintf(
			'<a href="%1$s" target="%2$s" rel="home"%3$s>%4$s</a>',
			esc_url( home_url() ),
			esc_attr( $link_target ),
			$aria_current,
			esc_html( $site_title )
		);
	}
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => trim( $classes ) ) );

	return sprintf(
		'<%1$s %2$s>%3$s</%1$s>',
		$tag_name,
		$wrapper_attributes,
		// already pre-escaped if it is a link.
		$attributes['isLink'] ? $site_title : esc_html( $site_title )
	);
}
```

<!-- 
However, there is no `save` function defined for this block, as you can see from its [`index.js`](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/site-title/index.js) file, which means the markup representation of the block in the database looks like this:
 -->
しかし、[`index.js`](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/site-title/index.js) ファイルを見ればわかるように、このブロックには `save` 関数が定義されていません。したがってデータベース内のブロックのマークアップ表現は次のようになります。

```html
<!-- wp:site-title /-->
```

<!-- 
On the front end, the `render_callback` is used to dynamically render the markup for the block depending on the specific values on the server at the time the block is requested. These values include the current site title, URL, link target, etc.
 -->
フロントエンドでは、`render_callback`を使用して、ブロックがリクエストされた時点でのサーバ上の特定の値に応じて、ブロックのマークアップが動的にレンダーされます。値には、現在のサイトのタイトル、URL、リンク先などが含まれます。

```
<h1 class="wp-block-site-title"><a href="https://www.wp.org" target="_self" rel="home">My WordPress Website</a></h1>
```
<!-- 
</details>
<br/>
 -->

<!-- 
### HTML representation of dynamic blocks in the database (`save`)
 -->
### データベース内の動的ブロックの HTML 表現 (`save`)

<!-- 
For dynamic blocks, the `save` callback function can return just `null`, which tells the editor to save only the block delimiter comment (along with any existing [block attributes](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/)) to the database. These attributes are then passed into the server-side rendering callback, which will determine how to display the block on the front end of your site.
 -->
動的ブロックの `save`コールバック関数は `null`のみを返して、エディターに対し、既存の[ブロック属性](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-attributes/)と一緒にブロックの区切りコメントだけをデータベースに保存するように指示できます。これらの属性はサーバーサイドのレンダリングコールバックに渡され、サイトのフロントエンドでどのようにブロックを表示するかを決定します。

<!-- 
When `save` is `null`, the Block Editor will skip the [block markup validation process](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#validation), avoiding issues with frequently changing markup.
 -->
`save` が `null` の場合、ブロックエディターは [ブロックマークアップの検証プロセス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/#validation) をスキップし、頻繁なマークアップの変更で引き起こされる問題を回避します。

動的レンダリングを持つブロックはまた、ブロックの HTML 表現をバックアップとして保存できます。サーバサイドレンダリングのコールバックを提供した場合、データベース内のブロックを表す HTML はコールバックの出力に置き換えられますが、ブロックを登録したプラグインをアンインストールするなどしてブロックが無効化されたり、レンダーコールバックが削除されると、HTML はレンダーされます。

<!-- 
In some cases, the block saves an HTML representation of the block and uses a dynamic rendering to fine-tune this markup if some conditions are met. Some examples of core blocks using this approach are:
 -->
場合によってはブロックはブロックの HTML 表現を保存し、いくつかの条件が満たされた場合にこのマークアップを微調整するために、動的レンダリングを使用します。この方法を使用したコアブロックの例をいくつか挙げます。
<!-- 
- The [Cover](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/cover) block [saves](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/cover/save.js) a full HTML representation of the block in the database. This markup is processed via a [`render_callback`](https://github.com/WordPress/gutenberg/blob/22741661998834e69db74ad863705ee2ce97b446/packages/block-library/src/cover/index.php#L74), which [dynamically injects](https://github.com/WordPress/gutenberg/blob/22741661998834e69db74ad863705ee2ce97b446/packages/block-library/src/cover/index.php#L16) the featured image if the "Use featured image" setting is enabled.
 -->
- [カバー](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/cover)ブロックは、データベース内にブロックの完全な HTML 表現を[保存](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/cover/save.js)します。このマークアップは [`render_callback`](https://github.com/WordPress/gutenberg/blob/22741661998834e69db74ad863705ee2ce97b446/packages/block-library/src/cover/index.php#L74) を介して処理され、「アイキャッチ画像を使用する」設定が有効な場合には、アイキャッチ画像が[動的に挿入](https://github.com/WordPress/gutenberg/blob/22741661998834e69db74ad863705ee2ce97b446/packages/block-library/src/cover/index.php#L16)されます。
<!-- 
- The [Image](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/image) block also [saves](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/image/save.js) its HTML representation in the database. This markup is processed via a [`render_callback`](https://github.com/WordPress/gutenberg/blob/22741661998834e69db74ad863705ee2ce97b446/packages/block-library/src/image/index.php#L363), which [adds additional attributes](https://github.com/WordPress/gutenberg/blob/22741661998834e69db74ad863705ee2ce97b446/packages/block-library/src/image/index.php#L18) to the markup if specific conditions are met.
 -->
- [画像](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/image)ブロックもまたその HTML 表現をデータベース内に[保存](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/image/save.js)します。このマークアップは [`render_callback`](https://github.com/WordPress/gutenberg/blob/22741661998834e69db74ad863705ee2ce97b446/packages/block-library/src/image/index.php#L363) を介して処理され、特定の条件を満たす場合は、マークアップに[属性を追加](https://github.com/WordPress/gutenberg/blob/22741661998834e69db74ad863705ee2ce97b446/packages/block-library/src/image/index.php#L18)します。

<!-- 
If you are using [InnerBlocks](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/) in a dynamic block, you will need to save the `InnerBlocks` in the `save` callback function using `<InnerBlocks.Content/>`.
 -->
動的ブロック内で [InnerBlocks](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/) を使用する場合は、`save` コールバック関数で `<InnerBlocks.Content/>` を使用して `InnerBlocks` を保存する必要があります。

<!-- 
## Additional resources
 -->
## その他の情報

<!-- 
- [Static vs. dynamic blocks: What’s the difference?](https://developer.wordpress.org/news/2023/02/27/static-vs-dynamic-blocks-whats-the-difference/) | Developer Blog
- [Block deprecation – a tutorial](https://developer.wordpress.org/news/2023/03/10/block-deprecation-a-tutorial/) | Developer Blog
 -->
- [Static vs. dynamic blocks: What’s the difference?](https://developer.wordpress.org/news/2023/02/27/static-vs-dynamic-blocks-whats-the-difference/) | Developer Blog
- [Block deprecation – a tutorial](https://developer.wordpress.org/news/2023/03/10/block-deprecation-a-tutorial/) | Developer Blog

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/fundamentals/static-dynamic-rendering.md)