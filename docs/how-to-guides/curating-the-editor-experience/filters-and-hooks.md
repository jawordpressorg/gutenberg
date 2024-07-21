<!-- 
# Filters and hooks
 -->
# フィルターとフック

<!-- 
The Editor provides numerous filters and hooks that allow you to modify the editing experience. Here are a few.
 -->
エディターには編集体験を変更する、多くのフィルターやフックが用意されています。以下にその一部を紹介します。

<!-- 
## Editor settings
 -->
## エディターの設定

<!-- 
One of the most common ways to modify the Editor is through the [`block_editor_settings_all`](https://developer.wordpress.org/reference/hooks/block_editor_settings_all/) PHP filter, which is applied before settings are sent to the initialized Editor. 
 -->
エディターを変更する最も一般的な方法の1つが [`block_editor_settings_all`](https://developer.wordpress.org/reference/hooks/block_editor_settings_all/) PHP フィルターです。このフィルターは初期化されたエディターに設定が送られる前に適用されます。

<!-- 
The `block_editor_settings_all` hook passes two parameters to the callback function:
 -->
`block_editor_settings_all` フックはコールバック関数に2つのパラメータを渡します。

<!-- 
- `$settings` – An array of [configurable settings](https://developer.wordpress.org/block-editor/reference-guides/filters/editor-filters/#editor-settings) for the Editor.
- `$context` – An instance of [`WP_Block_Editor_Context`](https://developer.wordpress.org/reference/classes/wp_block_editor_context/), an object that contains information about the current Editor.
 -->
- `$settings` - エディターの [構成可能な設定](https://developer.wordpress.org/block-editor/reference-guides/filters/editor-filters/#editor-settings) の配列。
- `$context` - [`WP_Block_Editor_Context`](https://developer.wordpress.org/reference/classes/wp_block_editor_context/) のインスタンスで、現在のエディターに関する情報を含むオブジェクト。

<!-- 
The following example disables the Code Editor for users who cannot activate plugins (Administrators). Add this to a plugin or your theme's `functions.php` file to test it.
 -->
次の例では、プラグインを有効化できないユーザー (管理者) に対してコードエディターを無効にします。これをプラグインまたはテーマの `functions.php` ファイル内に追加してテストしてください。

<!-- 
```php
add_filter( 'block_editor_settings_all', 'example_restrict_code_editor' );

function example_restrict_code_editor( $settings ) {
	$can_active_plugins = current_user_can( 'activate_plugins' );

	// Disable the Code Editor for users that cannot activate plugins (Administrators).
	if ( ! $can_active_plugins ) {
		$settings[ 'codeEditingEnabled' ] = false;
	}

	return $settings;
}
```
 -->
```php
add_filter( 'block_editor_settings_all', 'example_restrict_code_editor' );

function example_restrict_code_editor( $settings ) {
	$can_active_plugins = current_user_can( 'activate_plugins' );

	// プラグインを有効化できないユーザー (管理者) に対してコードエディターを無効化する
	if ( ! $can_active_plugins ) {
		$settings[ 'codeEditingEnabled' ] = false;
	}

	return $settings;
}
```

<!-- 
For more examples, check out the [Editor Hooks](https://developer.wordpress.org/block-editor/reference-guides/filters/editor-filters/) documentation that includes the following use cases: 
 -->
その他の例については、以下のユースケースを含む[Editor Hooks](https://developer.wordpress.org/block-editor/reference-guides/filters/editor-filters/)ドキュメントをチェックしてください。

<!-- 
- [Set a default image size](https://developer.wordpress.org/block-editor/reference-guides/filters/editor-filters/#set-a-default-image-size)
- [Disable Openverse](https://developer.wordpress.org/block-editor/reference-guides/filters/editor-filters/#disable-openverse)
- [Disable the Font Library](https://developer.wordpress.org/block-editor/reference-guides/filters/editor-filters/#disable-the-font-library)
- [Disable block inspector tabs](https://developer.wordpress.org/block-editor/reference-guides/filters/editor-filters/#disable-block-inspector-tabs)
 -->
- [デフォルトの画像サイズを設定する](https://developer.wordpress.org/block-editor/reference-guides/filters/editor-filters/#set-a-default-image-size)
- [Openverse の無効化](https://developer.wordpress.org/block-editor/reference-guides/filters/editor-filters/#disable-openverse)
- [フォントライブラリの無効化](https://developer.wordpress.org/block-editor/reference-guides/filters/editor-filters/#disable-the-font-library)
- [ブロックインスペクタータブの無効化](https://developer.wordpress.org/block-editor/reference-guides/filters/editor-filters/#disable-block-inspector-tabs)

<!-- 
## Server-side theme.json filters
 -->
## サーバーサイド theme.json フィルター

<!-- 
The theme.json file is a great way to control interface options, but it only allows for global or block-level modifications, which can be limiting in some scenarios.
 -->
theme.json ファイルはインターフェースオプションを制御する素晴らしい方法ですが、グローバルまたはブロックレベルの変更しかできないため、シナリオによっては制限されることがあります。

<!-- 
For instance, in the previous section, color and typography controls were disabled globally using theme.json. But let's say you want to enable color settings for users who are Administrators. 
 -->
例えば、前のセクションでは、theme.json を使用して色とタイポグラフィのコントロールをグローバルに無効にしましたが、管理者ユーザーに対しては色の設定を有効にしたい場合などです。

<!-- 
To provide more flexibility, WordPress 6.1 introduced server-side filters allowing you to customize theme.json data at four different data layers.
 -->
より柔軟性を持たせるため、WordPress 6.1では、4つの異なるデータレイヤーで theme.json データをカスタマイズできるサーバーサイドフィルターを導入しました。

<!-- 
- [`wp_theme_json_data_default`](https://developer.wordpress.org/reference/hooks/wp_theme_json_data_default/) - Hooks into the default data provided by WordPress
- [`wp_theme_json_data_blocks`](https://developer.wordpress.org/reference/hooks/wp_theme_json_data_blocks/) - Hooks into the data provided by blocks.
- [`wp_theme_json_data_theme`](https://developer.wordpress.org/reference/hooks/wp_theme_json_data_theme/) - Hooks into the data provided by the current theme.
- [`wp_theme_json_data_user`](https://developer.wordpress.org/reference/hooks/wp_theme_json_data_user/) - Hooks into the data provided by the user.
 -->
- [`wp_theme_json_data_default`](https://developer.wordpress.org/reference/hooks/wp_theme_json_data_default/) - WordPress によって提供されるデフォルトデータへのフック
- [`wp_theme_json_data_blocks`](https://developer.wordpress.org/reference/hooks/wp_theme_json_data_blocks/) - ブロックによって提供されるデータへのフック
- [`wp_theme_json_data_theme`](https://developer.wordpress.org/reference/hooks/wp_theme_json_data_theme/) - 現在のテーマによって提供されるデータへのフック
- [`wp_theme_json_data_user`](https://developer.wordpress.org/reference/hooks/wp_theme_json_data_user/) - ユーザーによって提供されるデータへのフック

<!-- 
In the following example, the data from the current theme's theme.json file is updated using the `wp_theme_json_data_theme` filter. Color controls are restored if the current user is an Administrator.
 -->
以下の例では、`wp_theme_json_data_theme` フィルターを使用して、現在のテーマの theme.json ファイルのデータを更新します。現在のユーザーが管理者であれば、色のコントロールが復元されます。

<!-- 
```php
// Disable color controls for all users except Administrators.
function example_filter_theme_json_data_theme( $theme_json ){
    $is_administrator = current_user_can( 'edit_theme_options' );

    if ( $is_administrator ) {
        $new_data = array(
            'version'  => 2,
            'settings' => array(
                'color' => array(
                    'background'       => true,
                    'custom'           => true,
                    'customDuotone'    => true,
                    'customGradient'   => true,
                    'defaultGradients' => true,
                    'defaultPalette'   => true,
                    'text'             => true,
                ),
            ),
        );
    }

	return $theme_json->update_with( $new_data );
}
add_filter( 'wp_theme_json_data_theme', 'example_filter_theme_json_data_theme' );
```
 -->
```php
// 管理者以外のすべてのユーザーの色コントロールを無効にする
function example_filter_theme_json_data_theme( $theme_json ){
    $is_administrator = current_user_can( 'edit_theme_options' );

    if ( $is_administrator ) {
        $new_data = array(
            'version'  => 2,
            'settings' => array(
                'color' => array(
                    'background'       => true,
                    'custom'           => true,
                    'customDuotone'    => true,
                    'customGradient'   => true,
                    'defaultGradients' => true,
                    'defaultPalette'   => true,
                    'text'             => true,
                ),
            ),
        );
    }

	return $theme_json->update_with( $new_data );
}
add_filter( 'wp_theme_json_data_theme', 'example_filter_theme_json_data_theme' );
```

<!-- 
The filter receives an instance of the `WP_Theme_JSON_Data class` with the data for the respective layer. Then, you pass new data in a valid theme.json-like structure to the `update_with( $new_data )` method. A theme.json version number is required in `$new_data`. 
 -->
このフィルターは、それぞれのレイヤーのデータを含む `WP_Theme_JSON_Data` クラスのインスタンスを受け取ります。そこで、`update_with( $new_data )` メソッドに、有効な theme.json に似た構造の新しいデータを渡します。`$new_data`にはtheme.json のバージョン番号が必要です。

<!-- 
## Client-side (Editor) filters
 -->
## クライアントサイド (エディター) フィルター

<!-- 
WordPress 6.2 introduced a new client-side filter allowing you to modify block-level [theme.json settings](/docs/reference-guides/theme-json-reference/theme-json-living.md#settings) before the editor is rendered.
 -->
WordPress 6.2では、新しいクライアント側フィルターが導入されました。エディターがレンダーされる前にブロックレベルで[theme.json settings](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/theme-json-living/#settings) を変更できます。

<!-- 
The filter is called `blockEditor.useSetting.before` and can be used in the JavaScript code as follows:
 -->
このフィルターは `blockEditor.useSetting.before` と呼ばれ、JavaScript のコードで以下のように使用します。

<!-- 
```js
import { addFilter } from '@wordpress/hooks';

/**
 * Limit the Column block's spacing options to pixels.
 */
addFilter(
	'blockEditor.useSetting.before',
	'example/useSetting.before',
	( settingValue, settingName, clientId, blockName ) => {
		if ( blockName === 'core/column' && settingName === 'spacing.units' ) {
			return [ 'px' ];
		}
		return settingValue;
	}
);
```
 -->
```js
import { addFilter } from '@wordpress/hooks';

/**
 * カラムブロックのスペースオプションを px に制限する。
 */
addFilter(
	'blockEditor.useSetting.before',
	'example/useSetting.before',
	( settingValue, settingName, clientId, blockName ) => {
		if ( blockName === 'core/column' && settingName === 'spacing.units' ) {
			return [ 'px' ];
		}
		return settingValue;
	}
);
```

<!-- 
This example will restrict the available spacing units for the Column block to just pixels. As discussed above, a similar restriction could be applied using theme.json filters or directly in a theme’s theme.json file using block-level settings.
 -->
この例では、カラムブロックで使用可能なスペースの単位をピクセルだけに制限します。上述したように、同様の制限は、theme.json フィルターを使用するか、ブロックレベルの設定を使用してテーマの theme.json ファイルで直接適用できます。

<!-- 
However, the `blockEditor.useSetting.before` filter is unique because it allows you to modify settings according to the block’s location, neighboring blocks, the current user’s role, and more. The possibilities for customization are extensive.
 -->
しかし、`blockEditor.useSetting.before` フィルターは、ブロックの位置、隣接するブロック、現在のユーザーの役割などに応じて設定を変更できる点でユニークです。カスタマイズの可能性は広範囲にわたります。

<!-- 
In the following example, text color controls are disabled for the Heading block whenever the block is placed inside of a Media & Text block.
 -->
次の例では、見出しブロックがメディアとテキストブロックの中に配置されると、テキストの色コントロールが無効になります。

<!-- 
```js
import { select } from  '@wordpress/data';
import { addFilter } from '@wordpress/hooks';

/**
 * Disable text color controls on Heading blocks when placed inside of Media & Text blocks.
 */
addFilter(
	'blockEditor.useSetting.before',
	'example/useSetting.before',
	( settingValue, settingName, clientId, blockName ) => {
		if ( blockName === 'core/heading' ) {
			const { getBlockParents, getBlockName } = select( 'core/block-editor' );
			const blockParents = getBlockParents( clientId, true );
			const inMediaText = blockParents.some( ( ancestorId ) => getBlockName( ancestorId ) === 'core/media-text' );

			if ( inMediaText && settingName === 'color.text' ) {
			    return false;
			}
		}

		return settingValue;
	}
);
```
 -->
```js
import { select } from  '@wordpress/data';
import { addFilter } from '@wordpress/hooks';

/**
 * メディアとテキストブロック内に配置された見出しブロックのテキスト色コントロールは無効化する。
 */
addFilter(
	'blockEditor.useSetting.before',
	'example/useSetting.before',
	( settingValue, settingName, clientId, blockName ) => {
		if ( blockName === 'core/heading' ) {
			const { getBlockParents, getBlockName } = select( 'core/block-editor' );
			const blockParents = getBlockParents( clientId, true );
			const inMediaText = blockParents.some( ( ancestorId ) => getBlockName( ancestorId ) === 'core/media-text' );

			if ( inMediaText && settingName === 'color.text' ) {
			    return false;
			}
		}

		return settingValue;
	}
);
```

<!-- 
## Block Filters
 -->
## ブロックフィルター

<!-- 
Beyond curating the Editor itself, there are many ways that you can modify individual blocks. Perhaps you want to disable particular block supports like background color or define which settings should be displayed by default on specific blocks.
 -->
エディターそのもののカスタマイズだけでなく、個々のブロックを変更する方法も数多くあります。例えば、特定のブロックの背景色などのサポートを無効化したり、デフォルトで表示される設定を定義できます。

<!-- 
One of the most commonly used filters is [`block_type_metadata`](https://developer.wordpress.org/reference/hooks/block_type_metadata/). It allows you to filter the raw metadata loaded from a block's `block.json` file when a block type is registered on the server with PHP. 
 -->
最もよく使われるフィルターの1つが [`block_type_metadata`](https://developer.wordpress.org/reference/hooks/block_type_metadata/) です。サーバー上で PHP でブロックタイプを登録する際に、ブロックの `block.json` ファイルから読み込まれた生のメタデータをフィルタリングできます。

<!-- 
The filter takes one parameter:
 -->
フィルターは1つのパラメーターを取ります。

<!-- 
- `$metadata` (`array`) – metadata loaded from `block.json` for registering a block type.
 -->
- `$metadata` (`array`) – 登録するブロックタイプの `block.json` から読み込まれるメタデータ

<!-- 
The `$metadata` array contains everything you might want to know about a block, from its description and [attributes](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/) to block [supports](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/). 
 -->
`metadata` 配列にはブロックの説明や[属性](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-attributes/)からブロックの[サポート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/)まで、ブロックに関するあらゆる情報が含まれています。

<!-- 
In the following example, background color and gradient support are disabled for Heading blocks.
 -->
以下の例では、見出しブロックの背景色とグラデーションのサポートを無効化します。

<!-- 
```php
function example_disable_heading_background_color_and_gradients( $metadata ) {

    // Only apply the filter to Heading blocks.
    if ( ! isset( $metadata['name'] ) || 'core/heading' !== $metadata['name'] ) {
        return $metadata;
    }

    // Check if 'supports' key exists.
    if ( isset( $metadata['supports'] ) && isset( $metadata['supports']['color'] ) ) {

        // Remove Background color and Gradients support.
        $metadata['supports']['color']['background'] = false;
        $metadata['supports']['color']['gradients']  = false;
    }

    return $metadata;
}
add_filter( 'block_type_metadata', 'example_disable_heading_background_color_and_gradients' );
```
 -->
```php
function example_disable_heading_background_color_and_gradients( $metadata ) {

    // フィルターは見出しブロックのみに適用
    if ( ! isset( $metadata['name'] ) || 'core/heading' !== $metadata['name'] ) {
        return $metadata;
    }

    // 'supports' キーの存在を確認
    if ( isset( $metadata['supports'] ) && isset( $metadata['supports']['color'] ) ) {

        // 背景色とグラデーションサポートを削除
        $metadata['supports']['color']['background'] = false;
        $metadata['supports']['color']['gradients']  = false;
    }

    return $metadata;
}
add_filter( 'block_type_metadata', 'example_disable_heading_background_color_and_gradients' );
```

<!-- 
You can learn more about the available block filters in the [Block Filters](https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/) documentation.
 -->
利用可能なブロックフィルターの詳細については、[ブロックフィルター](https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/) ドキュメントを参照してください。

<!-- 
## Additional resources
 -->
## 追加の情報

<!-- 
- [How to modify theme.json data using server-side filters](https://developer.wordpress.org/news/2023/07/05/how-to-modify-theme-json-data-using-server-side-filters/) (WordPress Developer Blog)
- [Curating the Editor experience with client-side filters](https://developer.wordpress.org/news/2023/05/24/curating-the-editor-experience-with-client-side-filters/) (WordPress Developer Blog)
 -->
- [How to modify theme.json data using server-side filters](https://developer.wordpress.org/news/2023/07/05/how-to-modify-theme-json-data-using-server-side-filters/) (サーバーサイドフィルターを使用して theme.json データを変更する方法) (WordPress Developer Blog)
- [Curating the Editor experience with client-side filters](https://developer.wordpress.org/news/2023/05/24/curating-the-editor-experience-with-client-side-filters/) (クライアントサイドフィルターで編集体験をキュレーションする) (WordPress Developer Blog)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/curating-the-editor-experience/filters-and-hooks.md)