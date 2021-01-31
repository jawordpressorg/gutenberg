<!-- 
# Creating dynamic blocks
 -->
# ダイナミックブロックの作成

<!-- 
Dynamic blocks are blocks that build their structure and content on the fly when the block is rendered on the front end.

There are two primary uses for dynamic blocks:

1. Blocks where content should change even if a post has not been updated. One example from WordPress itself is the Latest Posts block. This block will update everywhere it is used when a new post is published.
 -->
ダイナミックブロックはフロントエンドでレンダーされる際に動的に構造とコンテンツを構築するブロックです。

ダイナミックブロックの代表的な使用例が2つあります。

1. 投稿が更新されていなくてもコンテンツを変更するブロック。WordPress から例を挙げると「最近の更新」ブロックがあります。このブロックは新しい投稿が発行されるとすべての使用箇所を更新します。

<!-- 
2. Blocks where updates to the code (HTML, CSS, JS) should be immediately shown on the front end of the website. For example, if you update the structure of a block by adding a new class, adding an HTML element, or changing the layout in any other way, using a dynamic block ensures those changes are applied immediately on all occurrences of that block across the site. (If a dynamic block is not used then when block code is updated Guterberg's [validation process](/docs/designers-developers/developers/block-api/block-edit-save.md#validation) generally applies, causing users to see the validation message, "This block appears to have been modified externally").
 -->
2. HTML、CSS、JS などのコードを更新するとすぐにWeb サイトのフロントエンド側で反映されるブロック。たとえば新しいクラスを追加したり、HTML 要素を追加したり、その他の方法でレイアウトを変更してブロックの構造を更新した場合、ダイナミックブロックを使えばサイト内のすべてのブロックの使用箇所に即座に変更を適用できます。ダイナミックブロックを使わない場合、ブロックコードが更新されると Gutenberg の[妥当性検証プロセス](https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#validation)が適用され、ユーザーに検証メッセージ「ブロックの外観は外部で更新されました」が表示されます。 

<!-- 
For many dynamic blocks, the `save` callback function should be returned as `null`, which tells the editor to save only the [block attributes](/docs/designers-developers/developers/block-api/block-attributes.md) to the database.  These attributes are then passed into the server-side rendering callback, so you can decide how to display the block on the front end of your site. When you return `null`, the editor will skip the block markup validation process, avoiding issues with frequently-changing markup.
 -->
多くのダイナミックブロックでは `save` コールバック関数は `null` として返されるべきです。これを受けてエディターはデータベースに[ブロックの属性](https://ja.wordpress.org/team/handbook/block-editor/developers/block-api/block-attributes/)のみを保存します。その後、これらの属性はサーバー側レンダリングコールバックに渡されるため、サイトのフロントエンドでどのようにブロックを表示するか決定できます。`null` を返すとエディターはブロックのマークアップの妥当性検査プロセスをスキップするため、頻繁にマークアップを変更する際の問題を回避できます。

<!-- 
If you are using [InnerBlocks](/docs/designers-developers/developers/tutorials/block-tutorial/nested-blocks-inner-blocks.md) in a dynamic block you will need to save the `InnerBlocks` in the `save` callback function using `<InnerBlocks.Content/>`
 -->
ダイナミックブロック内で [InnerBlocks](https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/inner-blocks/README.md) を使用している場合には、`<InnerBlocks.Content/>` を使用して `save` コールバック関数内で `InnerBlocks` を保存する必要があります。

<!-- 
You can also save an HTML representation of the block. If you provide a server-side rendering callback, this HTML will be replaced with the output of your callback, but will be rendered if your block is deactivated or your render callback is removed.

Block attributes can be used for any content or setting you want to save for that block. In the first example above, with the latest posts block, the number of latest posts you want to show could be saved as an attribute. Or in the second example, attributes can be used for each piece of content you want to show in the front end - such as heading text, paragraph text, an image, a URL, etc.

The following code example shows how to create a dynamic block that shows only the last post as a link.
 -->
ブロックの HTML 表現も保存できます。サーバー側レンダリングコールバックを提供すると、この HTML はコールバックの出力で置換されますが、ブロックが無効化されたり、レンダリングコールバックが削除される場合には、レンダーされます。

ブロックの属性は、ブロックのために保存したい任意のコンテツや設定に対して使用できます。最初の最新の投稿ブロックの例では、フロントエンドに表示したい最新の投稿数を属性として保存できます。2番目の例では、フロントエンドで表示したい各コンテンツの部品、たとえば見出しテキスト、段落テキスト、画像、URLとして属性を使用できます。

次のコード例では最後の投稿だけをリンクとして表示するダイナミックブロックを作成します。

**ESNext**

{% codetabs %}
{% ESNext %}
```jsx
import { registerBlockType } from '@wordpress/blocks';
import { withSelect } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-dynamic', {
	apiVersion: 2,
	title: 'Example: last post',
	icon: 'megaphone',
	category: 'widgets',

	edit: withSelect( ( select ) => {
		return {
			posts: select( 'core' ).getEntityRecords( 'postType', 'post' ),
		};
	} )( ( { posts } ) => {
		const blockProps = useBlockProps();

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
		)
		
	} ),
} );
```

**ES5**

{% ES5 %}
```js
( function( blocks, element, data, blockEditor ) {
	var el = element.createElement,
		registerBlockType = blocks.registerBlockType,
		withSelect = data.withSelect,
		useBlockProps = blockEditor.useBlockProps;

	registerBlockType( 'gutenberg-examples/example-dynamic', {
		apiVersion: 2,
		title: 'Example: last post',
		icon: 'megaphone',
		category: 'widgets',
		edit: withSelect( function( select ) {
			return {
				posts: select( 'core' ).getEntityRecords( 'postType', 'post' ),
			};
		} )( function( props ) {
			var blockProps = useBlockProps();
			var content;
			if ( ! props.posts ) {
				content = 'Loading...';
			} else if ( props.posts.length === 0 ) {
				content = 'No posts';
			} else {
				var post = props.posts[ 0 ];
				content = el(
					'a',
					{ href: post.link },
					post.title.rendered
				);
			}

			return el( 
				'div',
				blockProps,
				content
			);
		} ),
	} );
}(
	window.wp.blocks,
	window.wp.element,
	window.wp.data,
	window.wp.blockEditor,
) );
```
{% end %}

<!-- 
Because it is a dynamic block it doesn't need to override the default `save` implementation on the client. Instead, it needs a server component. The contents in the front of your site depend on the function called by the `render_callback` property of `register_block_type`.
 -->
これはダイナミックブロックですのでクライアントのデフォルトの `save` 実装をオーバーライドする必要はありません。代わりにサーバーコンポーネントが必要です。サイトのフロントエンドのコンテツは `register_block_type` の `render_callback` プロパティに呼び出される関数に依存します。

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
		'apiVersion' => 2,
		'editor_script' => 'gutenberg-examples-dynamic',
		'render_callback' => 'gutenberg_examples_dynamic_render_callback'
	) );

}
add_action( 'init', 'gutenberg_examples_dynamic' );

```

<!-- 
There are a few things to notice:

* The `edit` function still shows a representation of the block in the editor's context (this could be very different from the rendered version, it's up to the block's author)
* The built-in `save` function just returns `null` because the rendering is performed server-side.
* The server-side rendering is a function taking the block and the block inner content as arguments, and returning the markup (quite similar to shortcodes)
 -->
いくつか注意点があります。

* 依然として `edit` 関数はエディターのコンテキストにおけるブロックの外観を表示します (レンダーバージョンとまったく異なる場合もあります。これはブロック作者の好みによります)
* 組み込みの `save` 関数は `null` を返すだけです。これはレンダリングがサーバー側で実行されるためです。
* サーバー側レンダリングは、ブロックとブロックの内部コンテンツを引数に取る関数で、ショートコードに似たマークアップを返します。

<!--
## Live rendering in the block editor

Gutenberg 2.8 added the [`<ServerSideRender>`](/packages/server-side-render/README.md) block which enables rendering to take place on the server using PHP rather than in JavaScript.

*Server-side render is meant as a fallback; client-side rendering in JavaScript is always preferred (client rendering is faster and allows better editor manipulation).*
 -->
## ブロックエディター内でのライブレンダリング

Gutenberg 2.8 は [`<ServerSideRender>`](/packages/components/src/server-side-render) ブロックを追加しました。JavaScript の代わりに PHP を使用してサーバー上でレンダリングを実行します。

*サーバー側レンダーはフォールバックです。常に JavaScript によるクライアントサイドレンダリングが好まれます。クライアントレンダリングは速く、エディターの操作性が高くなります).*

**ESNext**

{% codetabs %}
{% ESNext %}
```jsx
import { registerBlockType } from '@wordpress/blocks';
import ServerSideRender from '@wordpress/server-side-render';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-dynamic', {
	apiVersion: 2,
	title: 'Example: last post',
	icon: 'megaphone',
	category: 'widgets',

	edit: function( props ) {
		const blockProps = useBlockProps();
		return (
			<div {...blockProps}>
				<ServerSideRender
					block="gutenberg-examples/example-dynamic"
					attributes={ props.attributes }
				/>
			</div>
		);
	},
} );
```

**ES5**

{% ES5 %}
```js
( function( blocks, element, serverSideRender, blockEditor ) {
	var el = element.createElement,
		registerBlockType = blocks.registerBlockType,
		ServerSideRender = serverSideRender,
		useBlockProps = blockEditor.useBlockProps;

	registerBlockType( 'gutenberg-examples/example-dynamic', {
		apiVersion: 2,
		title: 'Example: last post',
		icon: 'megaphone',
		category: 'widgets',

		edit: function( props ) {
			var blockProps = useBlockProps();
			return (
				el(
					'div',
					blockProps,
					el( ServerSideRender, {
						block: 'gutenberg-examples/example-dynamic',
						attributes: props.attributes,
					} )
				)
			);
		},
	} );
}(
	window.wp.blocks,
	window.wp.element,
	window.wp.serverSideRender,
	window.wp.blockEditor,
) );
```
{% end %}

<!-- 
Note that this code uses the `wp-server-side-render` package but not `wp-data`. Make sure to update the dependencies in the PHP code. You can use wp-scripts and ESNext setup for auto dependencies (see the [gutenberg-examples repo](https://github.com/WordPress/gutenberg-examples/tree/HEAD/01-basic-esnext) for PHP code setup).
 -->
注意: このコードは `wp-server-side-render` パッケージを使用し、`wp-data` を使用しません。PHP コード内の依存性を更新してください。自動で依存性を設定するには wp-scripts と ESNext 設定を使用してください (PHP コード設定については [gutenberg-examples リポジトリー](https://github.com/WordPress/gutenberg-examples/tree/HEAD/01-basic-esnext)を参照してください)。

[原文](https://github.com/WordPress/gutenberg/blob/HEAD/docs/designers-developers/developers/tutorials/block-tutorial/creating-dynamic-blocks.md)
