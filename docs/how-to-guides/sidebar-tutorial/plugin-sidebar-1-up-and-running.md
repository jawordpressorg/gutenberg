<!-- 
# Get a Sidebar up and Running
 -->
# サイドバーの起動

<!-- 
The first step in the journey is to tell the editor that there is a new plugin that will have its own sidebar. You can do so by using the [registerPlugin](/packages/plugins/README.md), [PluginSidebar](/packages/edit-post/README.md#pluginsidebar), and [createElement](/packages/element/README.md) utilities provided by WordPress, to be found in the `@wordpress/plugins`, `@wordpress/edit-post`, and `@wordpress/element` [packages](/docs/reference-guides/packages.md), respectively.

Add the following code to a JavaScript file called `plugin-sidebar.js` and save it within your plugin's directory:
 -->
最初のステップではまずエディターに対して新しいプラグインが自身のサイドバーを持つことを伝えます。これには WordPress が提供する [registerPlugin](https://developer.wordpress.org/block-editor/packages/packages-plugins/)、[PluginSidebar](https://developer.wordpress.org/block-editor/packages/packages-edit-post/#pluginsidebar)、[createElement](https://developer.wordpress.org/block-editor/packages/packages-element/) ユーティリティを使用します。それぞれ `@wordpress/plugins`、 `@wordpress/edit-post`、`@wordpress/element` [パッケージ](https://ja.wordpress.org/team/handbook/block-editor/packages/)に含まれます

次のコードを JavaScript ファイル `plugin-sidebar.js` に追加し、プラグインディレクトリに保存してください。

```js
( function( wp ) {
	var registerPlugin = wp.plugins.registerPlugin;
	var PluginSidebar = wp.editPost.PluginSidebar;
	var el = wp.element.createElement;

	registerPlugin( 'my-plugin-sidebar', {
		render: function() {
			return el( PluginSidebar,
				{
					name: 'my-plugin-sidebar',
					icon: 'admin-post',
					title: 'My plugin sidebar',
				},
				'Meta field'
			);
		},
	} );
} )( window.wp );
```

<!-- 
For this code to work, those utilities need to be available in the browser, so you tell WordPress to enqueue the packages that include them by introducing `wp-plugins`, `wp-edit-post`, and `wp-element` as dependencies of your script.

Copy this code to a PHP file within your plugin's directory:
 -->
このコードが動作するにはブラウザ内でユーティリティが利用可能でなければなりません。これらを含むパッケージをエンキューするよう、スクリプトの依存先に `wp-plugins`、 `wp-edit-post`、`wp-element` を導入することで WordPress に伝えます。

このコードをプラグインディレクトリ内の PHP ファイルにコピーしてください。
```php
<?php

/*
Plugin Name: Sidebar plugin
*/

function sidebar_plugin_register() {
	wp_register_script(
		'plugin-sidebar-js',
		plugins_url( 'plugin-sidebar.js', __FILE__ ),
		array( 'wp-plugins', 'wp-edit-post', 'wp-element' )
	);
}
add_action( 'init', 'sidebar_plugin_register' );

function sidebar_plugin_script_enqueue() {
	wp_enqueue_script( 'plugin-sidebar-js' );
}
add_action( 'enqueue_block_editor_assets', 'sidebar_plugin_script_enqueue' );
```
<!-- 
After installing and activating this plugin, there is a new icon resembling a tack in the top-right of the editor. Upon clicking it, the plugin's sidebar will be opened:

![Sidebar Up and Running](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/sidebar-up-and-running.png)
 -->
プラグインをインストールし有効化すると、エディターの右上に新しい「ピン」アイコンが表示され、クリックするとプラグインのサイドバーが開きます。

![サイドバーの起動](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/sidebar-up-and-running.png)

[説明](https://github.com/WordPress/gutenberg/blob/HEAD/docs/designers-developers/developers/tutorials/sidebar-tutorial/plugin-sidebar-1-up-and-running.md)
