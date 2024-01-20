<!--
# Creating dynamic blocks
 -->
# ダイナミックブロックの作成

<!--
Dynamic blocks are blocks that build their structure and content on the fly when the block is rendered on the front end.

There are two primary uses for dynamic blocks:

1. Blocks where content should change even if a post has not been updated. One example from WordPress itself is the Latest Posts block. This block will update everywhere it is used when a new post is published.
 -->
ダイナミックブロックは、フロントエンドでレンダーされる際に、動的に構造とコンテンツを構築するブロックです。

ダイナミックブロックの代表的な使用例が2つあります。

1. 投稿が更新されていなくてもコンテンツを変更するブロック。WordPress から例を挙げると「最近の更新」ブロックです。新しい投稿が公開されると、このブロックを使用しているすべての箇所が更新されます。

<!--
2. Blocks where updates to the code (HTML, CSS, JS) should be immediately shown on the front end of the website. For example, if you update the structure of a block by adding a new class, adding an HTML element, or changing the layout in any other way, using a dynamic block ensures those changes are applied immediately on all occurrences of that block across the site. (If a dynamic block is not used then when block code is updated Gutenberg's [validation process](/docs/reference-guides/block-api/block-edit-save.md#validation) generally applies, causing users to see the validation message, "This block appears to have been modified externally").
 -->
2. HTML、CSS、JS などのコードの更新が、Web サイトのフロントエンド側にすぐに反映されるブロック。たとえば新しいクラスの追加、HTML 要素の追加、その他の方法によるレイアウトの変更でブロックの構造を更新しても、ダイナミックブロックを使用していれば、サイト内のすべてのブロックの使用箇所に、即座に変更を適用できます (ダイナミックブロックを使用せずにブロックコードを更新すると、Gutenberg の[バリデーションプロセス](https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#validation)が適用され、ユーザーに検証メッセージ「ブロックの外観は外部で更新されました」が表示されます)。

<!--
For many dynamic blocks, the `save` callback function should be returned as `null`, which tells the editor to save only the [block attributes](/docs/reference-guides/block-api/block-attributes.md) to the database. These attributes are then passed into the server-side rendering callback, so you can decide how to display the block on the front end of your site. When you return `null`, the editor will skip the block markup validation process, avoiding issues with frequently-changing markup.
 -->
ほとんどのダイナミックブロックで `save` コールバック関数は `null` を返してください。これはエディターに、[ブロックの属性](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-attributes/)のみをデータベースに保存するよう通知します。属性はサーバー側レンダリングコールバック内に渡されるため、サイトのフロントエンドでのブロックの表示方法を決定できます。`null` を返すとエディターはブロックのマークアップの妥当性検査プロセスをスキップするため、頻繁にマークアップを変更する際の問題を回避できます。

<!--
If you are using [InnerBlocks](/docs/how-to-guides/block-tutorial/nested-blocks-inner-blocks.md) in a dynamic block you will need to save the `InnerBlocks` in the `save` callback function using `<InnerBlocks.Content/>`
 -->
ダイナミックブロック内で [InnerBlocks](https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/inner-blocks/README.md) を使用している場合には、`<InnerBlocks.Content/>` を使用して `save` コールバック関数内で `InnerBlocks` を保存する必要があります。

<!--
You can also save an HTML representation of the block. If you provide a server-side rendering callback, this HTML will be replaced with the output of your callback, but will be rendered if your block is deactivated or your render callback is removed.

Block attributes can be used for any content or setting you want to save for that block. In the first example above, with the latest posts block, the number of latest posts you want to show could be saved as an attribute. Or in the second example, attributes can be used for each piece of content you want to show in the front end - such as heading text, paragraph text, an image, a URL, etc.

The following code example shows how to create a dynamic block that shows only the last post as a link.
 -->
ブロックの HTML 表現も保存できます。この HTML は、サーバー側レンダリングコールバックがあると、そのコールバックの出力で置換されます。しかしブロックを無効化したり、レンダリングコールバックを削除するとレンダーされます。

ブロックの属性は、そのブロックに保存したい任意のコンテツや設定に使用できます。上で紹介した最新の投稿ブロックの例では、属性としてフロントエンドに表示したい最新の投稿数を保存できます。また2番目の例では、フロントエンドで表示したいコンテンツの部品、たとえば見出しテキスト、段落テキスト、画像、URLのそれぞれに属性を使用できます。

次のコード例は、最後の投稿のみをリンクとして表示するダイナミックブロックを作成します。

```jsx
import { registerBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-dynamic', {
	apiVersion: 3,
	title: 'Example: last post',
	icon: 'megaphone',
	category: 'widgets',

	edit: () => {
		const blockProps = useBlockProps();
		const posts = useSelect( ( select ) => {
			return select( 'core' ).getEntityRecords( 'postType', 'post' );
		}, [] );

		return (
			<div { ...blockProps }>
				{ ! posts && 'Loading' }
				{ posts && posts.length === 0 && 'No Posts' }
				{ posts && posts.length > 0 && (
					<a href={ posts[ 0 ].link }>
						{ posts[ 0 ].title.rendered }
					</a>
				) }
			</div>
		);
	},
} );
```

<!--
Because it is a dynamic block it doesn't need to override the default `save` implementation on the client. Instead, it needs a server component. The contents in the front of your site depend on the function called by the `render_callback` property of `register_block_type`.
 -->
これはダイナミックブロックですのでクライアントのデフォルトの `save` 実装をオーバーライドする必要はありません。代わりにサーバーコンポーネントが必要です。サイトのフロントエンド内のコンテンツは `register_block_type` の `render_callback` プロパティに呼び出される関数に依存します。

```php
<?php

/**
 * Plugin Name: Gutenberg examples dynamic
 */

function gutenberg_examples_dynamic_render_callback( $block_attributes, $content ) {
	$recent_posts = wp_get_recent_posts( array(
		'numberposts' => 1,
		'post_status' => 'publish',
	) );
	if ( count( $recent_posts ) === 0 ) {
		return 'No posts';
	}
	$post = $recent_posts[ 0 ];
	$post_id = $post['ID'];
	return sprintf(
		'<a class="wp-block-my-plugin-latest-post" href="%1$s">%2$s</a>',
		esc_url( get_permalink( $post_id ) ),
		esc_html( get_the_title( $post_id ) )
	);
}

function gutenberg_examples_dynamic() {
	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'gutenberg-examples-dynamic',
		plugins_url( 'build/block.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type( 'gutenberg-examples/example-dynamic', array(
		'api_version' => 3,
		'editor_script' => 'gutenberg-examples-dynamic',
		'render_callback' => 'gutenberg_examples_dynamic_render_callback'
	) );

}
add_action( 'init', 'gutenberg_examples_dynamic' );

```

<!--
There are a few things to notice:

-   The `edit` function still shows a representation of the block in the editor's context (this could be very different from the rendered version, it's up to the block's author)
-   The built-in `save` function just returns `null` because the rendering is performed server-side.
-   The server-side rendering is a function taking the block and the block inner content as arguments, and returning the markup (quite similar to shortcodes)
 -->
いくつか注意点があります。

- 依然として `edit` 関数はエディターのコンテキストにおけるブロックの外観を表示します (レンダーバージョンとまったく異なる場合もあります。これはブロック作者の好みによります)
- 組み込みの `save` 関数は `null` を返すだけです。これはレンダリングがサーバー側で実行されるためです。
- サーバー側レンダリングは、ブロックとブロックの内部コンテンツを引数に取る関数で、ショートコードに似たマークアップを返します。

<!-- 
**Note :** For common customization settings including color, border, spacing customization and more, we will see on the [next chapter](/docs/how-to-guides/block-tutorial/block-supports-in-dynamic-blocks.md) how you can rely on block supports to provide such functionality in an efficient way.
 -->
**注意:** 色やボーダー、スペースなどの一般的なカスタマイズ設定では、[次の章](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/block-supports/)で見るように、より効率的に同じ機能を提供するブロックサポートを使用できます。

<!--
## Live rendering in the block editor

Gutenberg 2.8 added the [`<ServerSideRender>`](/packages/server-side-render/README.md) block which enables rendering to take place on the server using PHP rather than in JavaScript.

_Server-side render is meant as a fallback; client-side rendering in JavaScript is always preferred (client rendering is faster and allows better editor manipulation)._
 -->
## ブロックエディター内でのライブレンダリング

Gutenberg 2.8 は [`<ServerSideRender>`](/packages/components/src/server-side-render) ブロックを追加しました。JavaScript の代わりに PHP を使用してサーバー上でレンダリングを実行します。

_サーバー側レンダーはフォールバックです。常に JavaScript によるクライアントサイドレンダリングが好まれます。クライアントレンダリングは速く、エディターの操作性が高くなります)._

```jsx
import { registerBlockType } from '@wordpress/blocks';
import ServerSideRender from '@wordpress/server-side-render';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-dynamic', {
	apiVersion: 3,
	title: 'Example: last post',
	icon: 'megaphone',
	category: 'widgets',

	edit: function ( props ) {
		const blockProps = useBlockProps();
		return (
			<div { ...blockProps }>
				<ServerSideRender
					block="gutenberg-examples/example-dynamic"
					attributes={ props.attributes }
				/>
			</div>
		);
	},
} );
```

<!--
Note that this code uses the `wp-server-side-render` package but not `wp-data`. Make sure to update the dependencies in the PHP code. You can use wp-scripts to automatically build dependencies (see the [block-development-examples repo](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/basic-esnext-a2ab62) for PHP code setup).

 -->
注意: このコードは `wp-server-side-render` パッケージを使用し、`wp-data` を使用しません。PHP コード内の依存性を更新してください。自動で依存をビルドするには wp-scripts を使用してください (PHP コード設定については [block-development-examples リポジトリー](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/basic-esnext-a2ab62)を参照してください)。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/block-tutorial/creating-dynamic-blocks.md)


