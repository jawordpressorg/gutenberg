<!-- 
# Tweak the sidebar style and add controls
 -->
# サイドバースタイルの調整とコントロールの追加
<!-- 
After the sidebar is up and running, the next step is to fill it up with the necessary components and basic styling.

To visualize and edit the meta field value you'll use an input component. The `@wordpress/components` package contains many components available for you to reuse, and, specifically, the [TextControl](/packages/components/src/text-control/README.md) is aimed at creating an input field:
 -->
サイドバーが起動できたら次のステップとして必要なコンポーネントと基本的なスタイルを追加します。

メタフィールド値の表示や編集には入力コンポーネントを使用します。`@wordpress/components` パッケージには再利用可能な多くのコンポーネントがあり、特に [TextControl](https://developer.wordpress.org/block-editor/components/text-control/) は入力フィールドの作成を目的とします。

```js
( function( wp ) {
	var registerPlugin = wp.plugins.registerPlugin;
	var PluginSidebar = wp.editPost.PluginSidebar;
	var el = wp.element.createElement;
	var Text = wp.components.TextControl;

	registerPlugin( 'my-plugin-sidebar', {
		render: function() {
			return el( PluginSidebar,
				{
					name: 'my-plugin-sidebar',
					icon: 'admin-post',
					title: 'My plugin sidebar',
				},
				el( 'div',
					{ className: 'plugin-sidebar-content' },
					el( Text, {
						label: 'Meta Block Field',
						value: 'Initial value',
						onChange: function( content ) {
							console.log( 'content changed to ', content );
						},
					} )
				)
			);
		}
	} );
} )( window.wp );
```
<!-- 
Update the `plugin-sidebar.js` with this new code. Notice that it uses a new utility called `wp.components` from the `@wordpress/components` package. Go ahead and add it as `wp-components` in the PHP dependencies array.

It introduces a few changes from the previous section:

* Added the CSS class `plugin-sidebar-content` to the `div` element to be able to add some styles.
* Substituted the raw _Meta field_ text with a `TextControl` component wrapped within the `div` element.

With the new CSS class available you can now give the sidebar a bit of breath. Create a new file in your plugin directory called `plugin-sidebar.css` with the following contents:
 -->
`plugin-sidebar.js` をこのコードで更新します。`@wordpress/components` パッケージの新しいユーティリティ `wp.components` を使用していることに注意してください。PHP ファイルの依存性配列に `wp-components` を追加してください。

その他に前のセクションから以下の変更があります。

* スタイルを追加できるよう `div` 要素に CSS クラス `plugin-sidebar-content` を追加
* 元の _Meta field_ テキストを `div` 要素で囲んだ `TextControl` コンポーネントで置換

新しい CSS クラスが利用可能になったためサイドバーに少し手を入れられます。プラグインディレクトリに新しいファイル `plugin-sidebar.css` を作成し次のコードを追加してください。

```css
.plugin-sidebar-content {
	padding: 16px;
}
```
<!-- 
For WordPress to load this stylesheet in the editor and front-end, you need to tell it to enqueue it by using the [enqueue_block_editor_assets](https://developer.wordpress.org/reference/hooks/enqueue_block_editor_assets/) action hook.

After those changes, the PHP code should look like this:
 -->

WordPress がエディター画面、そして実際の表示画面でこのスタイルシートをロードするには [enqueue_block_editor_assets](https://developer.wordpress.org/reference/hooks/enqueue_block_editor_assets/) アクションフックを使用してエンキューする必要があります。

これらの変更後、PHP コードは以下のようになります。

```php
<?php

/*
Plugin Name: Sidebar example
*/

function sidebar_plugin_register() {
	wp_register_script(
		'plugin-sidebar-js',
		plugins_url( 'plugin-sidebar.js', __FILE__ ),
		array(
			'wp-plugins',
			'wp-edit-post',
			'wp-element',
			'wp-components'
		)
	);
	wp_register_style(
		'plugin-sidebar-css',
		plugins_url( 'plugin-sidebar.css', __FILE__ )
	);
}
add_action( 'init', 'sidebar_plugin_register' );

function sidebar_plugin_script_enqueue() {
	wp_enqueue_script( 'plugin-sidebar-js' );
}
add_action( 'enqueue_block_editor_assets', 'sidebar_plugin_script_enqueue' );

function sidebar_plugin_style_enqueue() {
	wp_enqueue_style( 'plugin-sidebar-css' );
}
add_action( 'enqueue_block_assets', 'sidebar_plugin_style_enqueue' );
```
<!-- 
Reload the editor and open the sidebar:

![Sidebar with style and controls](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/sidebar-style-and-controls.png)

With the input control and the styling the sidebar looks nicer. This code doesn't let users to store or retrieve data just yet, so the next steps will focus on how to connect it to the meta block field.
 -->
エディターをリロードし、サイドバーを開いてください。

![スタイルとコントロールのあるサイドバー](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/designers-developers/assets/sidebar-style-and-controls.png)

入力コントロールとスタイルでサイドバーの見た目が良くなりました。ただしユーザーの入力したテキストはまだ保存も取得もされません。次のステップでどのようにメタブロックフィールドと接続するかに焦点を当てます。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/designers-developers/developers/tutorials/sidebar-tutorial/plugin-sidebar-2-styles-and-controls.md)
