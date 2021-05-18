<!--
# Restoring the classic Widgets Editor
 -->
# 従来のウィジェットエディターに戻す

<!--
There are several ways to disable the new Widgets Block Editor.
 -->
新しいウィジェットブロックエディターを無効化する方法がいくつかあります。

<!--
## Using `remove_theme_support`
 -->
## remove_theme_support の使用

<!--
Themes may disable the Widgets Block Editor by calling `remove_theme_support( 'widgets-block-editor' )`.
 -->
テーマは、`remove_theme_support( 'widgets-block-editor' )` を呼び出して、ウィジェットブロックエディターを無効化できます。

<!--
For example, a theme may have the following PHP code in `functions.php`.
 -->
たとえば、テーマは `functions.php` に次の PHP コードを挿入します。

```php
function example_theme_support() {
	remove_theme_support( 'widgets-block-editor' );
}
add_action( 'after_setup_theme', example_theme_support' );
```

<!--
## Using the Classic Widgets plugin
 -->
## Classic Widgets プラグインの使用

<!--
End users may disable the Widgets Block Editor by installing and activating the [Classic Widgets plugin](https://wordpress.org/plugins/classic-widgets/).
 -->
エンドユーザーは、[Classic Widgets プラグイン](https://ja.wordpress.org/plugins/classic-widgets/) をインストールし、有効化することで、ウィジェットブロックエディターを無効化できます。

<!--
With this plugin installed, the Widgets Block Editor can be toggled on and off by deactivating and activating the plugin.
 -->
このプラグインをインストールすると、プラグインの無効、有効に応じて、ウィジェットブロックエディターの有効、無効も切り替わります。

<!--
## Using a filter
 -->
## フィルターの使用

<!--
the `gutenberg_use_widgets_block_editor` filter controls whether or not the Widgets Block Editor is enabled.
 -->
`gutenberg_use_widgets_block_editor` フィルターは、ウィジェットブロックエディターの有効、無効を制御できます。

<!--
For example, a site administrator may include the following PHP code in a mu-plugin to disable the Widgets Block Editor.
 -->
たとえば、サイト管理者は mu-plugin に次の PHP コードを挿入して、ウィジェットブロックエディターを無効化できます。

```php
add_filter( 'gutenberg_use_widgets_block_editor', '__return_false' );
```
<!--
For more advanced uses, you may supply your own function. In this example, the Widgets Block Editor is disabled for a specific user.
 -->
スキルのあるユーザーは独自の関数を作成できます。この例では、特定のユーザーのウィジェットブロックエディターを無効化します。

```php
function example_use_widgets_block_editor( $use_widgets_block_editor ) {
	if ( 123 === get_current_user_id() ) {
		return false;
	}
	return $use_widgets_block_editor;
}
add_filter( 'gutenberg_use_widgets_block_editor', 'example_use_widgets_block_editor' );
```

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/widgets/opting-out.md)
