<!--
# Block Supports in dynamic blocks
-->
# ダイナミックブロック内のブロックサポート

<!--
Dynamic blocks are blocks that build their structure and content on the fly when the block is rendered on the front end.
-->
ダイナミックブロックは、フロントエンドでブロックがレンダリングされる際に、構造とコンテンツをその場で構築するブロックです。

<!--
**Note :** All the details about the creation of dynamic blocks are documented [here](/docs/how-to-guides/block-tutorial/creating-dynamic-blocks.md). The below examples demonstrate the usage of `block supports` in dynamic blocks.
-->
ダイナミックブロックの作成に関する詳細は、[こちら](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks)にあります。以下の例では、ダイナミックブロック内のブロックサポートの使用方法を説明します。

<!--
A lot of blocks, including core blocks, offer similar customization options. Whether that is to change the background color, text color, or to add padding, margin customization options...
-->
コアブロックを含む多くのブロックで同様のカスタマイズオプションが提供されています。背景色の変更、文字色の変更、パディングの追加、マージンのカスタマイズオプション等々。

<!--
Let's examine the scenario to enable a user to change the background color and text color of a block.
-->
ユーザーがブロックの背景色と文字色を変更できるようにするシナリオを検証します。

<!--
### Without using block supports
-->
### ブロックサポートを使用しない場合

```jsx
import { registerBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import {
	useBlockProps,
	ColorPalette,
	InspectorControls,
} from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-dynamic', {
	apiVersion: 2,
	title: 'Example: last post title',
	icon: 'megaphone',
	category: 'widgets',
	attributes: {
		bgColor: { type: 'string' },
		textColor: { type: 'string' },
	},
	edit: function BlockEdit( {
		attributes: { bgColor, textColor },
		setAttributes,
	} ) {
		const blockProps = useBlockProps();
		const posts = useSelect( ( select ) => {
			return select( 'core' ).getEntityRecords( 'postType', 'post', {
				per_page: 1,
			} );
		}, [] );
		const onChangeBGColor = ( hexColor ) => {
			setAttributes( { bgColor: hexColor } );
		};
		const onChangeTextColor = ( newColor ) => {
			setAttributes( { textColor: newColor } );
		};
		if ( ! posts ) {
			return null;
		}
		return (
			<div { ...blockProps }>
				<InspectorControls key="setting">
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'Background color' ) }
						</legend>
						<ColorPalette // Element Tag for Gutenberg standard colour selector
							onChange={ onChangeBGColor } // onChange event callback
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'Text color' ) }
						</legend>
						<ColorPalette // Element Tag for Gutenberg standard colour selector
							onChange={ onChangeTextColor } // onChange event callback
						/>
					</fieldset>
				</InspectorControls>
				{ !! posts.length && (
					<h3
						style={ {
							backgroundColor: bgColor,
							color: textColor,
						} }
					>
						{ posts[ 0 ].title.rendered }
					</h3>
				) }
			</div>
		);
	},
} );
```

<!--
Because it is a dynamic block it doesn't need to override the default `save` implementation on the client. Instead, it needs a server component. The contents in the front of your site depend on the function called by the `render_callback` property of `register_block_type`.
-->
ダイナミックブロックではクライアント上で、デフォルトの `save` の実装をオーバーライドする必要はありません。代わりに、サーバーコンポーネントが必要です。サイトのフロントに表示されるコンテンツは、 `register_block_type` の `render_callback` プロパティによって呼び出される関数に依存します。

```php
<?php

function gutenberg_examples_dynamic_render_callback( $block_attributes, $content ) {
	$recent_posts = wp_get_recent_posts( array(
		'numberposts' => 1,
		'post_status' => 'publish',
	) );
	if ( count( $recent_posts ) === 0 ) {
		return 'No posts';
	}
	$post    = $recent_posts[ 0 ];
	$post_id = $post['ID'];
	$styles  = '';
	if ( ! empty( $block_attributes['bgColor'] ) ) {
		$styles .= "background-color:{$block_attributes['bgColor']};";
	}
	if ( ! empty( $block_attributes['textColor'] ) ) {
		$styles .= "color:{$block_attributes['textColor']};";
	}
	$wrapper_attributes = get_block_wrapper_attributes();
	return sprintf(
		'<h3 %1$s href="%2$s" style="%3$s">%4$s<h3>',
		$wrapper_attributes,
		esc_url( get_permalink( $post_id ) ),
		esc_attr( $styles ),
		esc_html( get_the_title( $post_id ) )
	);
}

function gutenberg_examples_dynamic() {
	register_block_type(
		'gutenberg-examples/example-dynamic',
		array(
			'api_version'       => 2,
			'category'          => 'widgets',
			'attributes'        => array(
				'bgColor'   => array( 'type' => 'string' ),
				'textColor' => array( 'type' => 'string' ),
			),
			'render_callback'   => 'gutenberg_examples_dynamic_render_callback',
			'skip_inner_blocks' => true,
		)
	);
}
add_action( 'init', 'gutenberg_examples_dynamic' );

```

<!--
### With block supports
-->
### ブロックサポートを使用する場合

<!--
Let's see how we can achieve the same functionality, but by using `block supports`.
-->
同じ機能の実現に、今度はブロックサポートを使用します。

```jsx
import { registerBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-dynamic-block-supports', {
	apiVersion: 2,
	title: 'Example: last post title(block supports)',
	icon: 'megaphone',
	category: 'widgets',
	edit: function BlockEdit() {
		const blockProps = useBlockProps();
		const posts = useSelect( ( select ) => {
			return select( 'core' ).getEntityRecords( 'postType', 'post', {
				per_page: 1,
			} );
		}, [] );
		if ( ! posts ) {
			return null;
		}
		return (
			<div { ...blockProps }>
				{ !! posts.length && <h3>{ posts[ 0 ].title.rendered }</h3> }
			</div>
		);
	},
	supports: { color: true },
} );
```

<!--
And the server side part becomes:
-->
そして、サーバーサイド部分は以下のようになります。

```php
<?php
function gutenberg_examples_dynamic_block_supports_render_callback( $block_attributes, $content ) {
	$recent_posts = wp_get_recent_posts( array(
		'numberposts' => 1,
		'post_status' => 'publish',
	) );
	if ( count( $recent_posts ) === 0 ) {
		return 'No posts';
	}
	$post    = $recent_posts[ 0 ];
	$post_id = $post['ID'];
	$wrapper_attributes = get_block_wrapper_attributes();
	return sprintf(
		'<h3 %1$s href="%2$s">%3$s<h3>',
		$wrapper_attributes,
		esc_url( get_permalink( $post_id ) ),
		esc_html( get_the_title( $post_id ) )
	);
}

function gutenberg_examples_dynamic_block_supports() {
	register_block_type(
		'gutenberg-examples/example-dynamic-block-supports',
		array(
			'api_version'       => 2,
			'category'          => 'widgets',
			'supports'          => array( 'color' => true ),
			'render_callback'   => 'gutenberg_examples_dynamic_block_supports_render_callback',
			'skip_inner_blocks' => true,
		)
	);
}
add_action( 'init', 'gutenberg_examples_dynamic_block_supports' );

```

<!--
And that's it, the addition of the "supports" key above, will automatically make the following changes to the block:
-->
以上です。上の「supports」キーを追加することで、ブロックには自動的に以下の変更が加えられます。

<!--
-   Add a `style` attribute to the block to store the link, text and background colors.
-   Add a "Colors" panel to the sidebar of the block editor to allow users to tweak the text, link and background colors.
-   Automatically use the `theme.json` config: allow disabling colors, inherit palettes...
-   Automatically inject the right styles and apply them to the block wrapper when the user make changes to the colors.
-->
- ブロックに `style` 属性を追加し、リンク、テキスト、背景の色を保存できるようにする。
- ブロックエディタのサイドバーに「色」パネルを追加し、ユーザーがテキスト、リンク、背景の色を微調整できるようにする。
- 自動的に `theme.json` の構成を使用する。色を無効にし、パレットを継承し等々。
- ユーザーが色を変更したときに、自動的に正しいスタイルを注入し、ブロックラッパーに適用する。

<!--
To learn more about the block supports and see all the available properties that you can enable for your own blocks, please refer to [the supports documentation](/docs/reference-guides/block-api/block-supports.md).
-->
ブロックサポートについての詳細と、独自のブロックに対して有効にできるすべての利用可能なプロパティについては、 [サポートのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports) を参照してください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/block-tutorial/block-supports-in-dynamic-blocks.md)
