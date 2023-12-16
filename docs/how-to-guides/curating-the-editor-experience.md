<!-- 
# Curating the Editor Experience
 -->
# ユーザーインターフェースの制限

<!-- 
The purpose of this guide is to offer various ways one can lock down and curate the experience of using WordPress, especially with the introduction of more design tools and full site editing functionality. 
 -->
このガイドではブロックのロックやユーザーインターフェースの制限など WordPress 使用体験におけるさまざまなカスタマイズ方法、特に多くのデザインツールやフルサイト編集機能を紹介します。

<!-- 
For information around adding functionality to a theme, rather than curating and locking, please review this guide on [Converting a classic theme to a block theme](https://developer.wordpress.org/themes/block-themes/converting-a-classic-theme-to-a-block-theme/).
 -->
カスタマイズやロックではなく、テーマへの機能追加に関する情報については「[クラシックテーマをブロックテーマに変換する](https://developer.wordpress.org/themes/block-themes/converting-a-classic-theme-to-a-block-theme/)」を参照してください。

<!-- 
## Locking APIs
 -->
## Locking API

<!-- 
**Lock the ability to move or remove specific blocks**
 -->
**特定のブロックの移動、削除機能のロック**

<!-- 
Users have the ability to lock and unlock blocks via the editor. The locking UI has options for preventing blocks from being moved within the content canvas or removed:
 -->
ユーザーはエディターを通してブロックをロックし、それを解除できます。ロック UI のオプションにより、コンテンツキャンバス内でのブロックの移動や削除を抑止できます。

<!-- 
![Image of locking interface](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/Locking%20interface.png?raw=true)
 -->
![ロックインターフェースの画像](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/Locking%20interface.png?raw=true)

<!-- 
Keep in mind that you can apply locking options to blocks nested inside of a containing block by turning on the "Apply to all blocks inside" option. However, you cannot mass lock blocks otherwise.
 -->
ネストして含まれるブロックに対してロックオプションを適用するには、外側のブロックに対して「内部のすべてのブロックに適用」オプションをオンにします。しかし、ロックしたブロックをひと固まりにはできません。

<!-- 
**Lock the ability to edit certain blocks**
 -->
**特定のブロックの編集のロック**
<!-- 
Alongside the ability to lock moving or removing blocks, the [Navigation Block](https://github.com/WordPress/gutenberg/pull/44739) and [Reusable block](https://github.com/WordPress/gutenberg/pull/39950) have an additional capability: lock the ability to edit the contents of the block. This locks the ability to make changes to any blocks inside of either block type. 
 -->
[ナビゲーションブロック](https://github.com/WordPress/gutenberg/pull/44739)と[同期パターン (再利用可能ブロック)](https://github.com/WordPress/gutenberg/pull/39950) にはブロックの移動や削除をロックする機能の他に、ブロックの内容の編集をロックする追加機能があります。含まれる内部のブロックに対する変更を抑止します。

<!-- 
**Apply block locking to patterns or templates**
 -->
**パターンやテンプレートへのブロックロックの適用**

<!-- 
When building patterns or templates, theme authors can use these same UI tools to set the default locked state of blocks. For example, a theme author could lock various pieces of a header. Keep in mind that by default, users with editing access can unlock these blocks. [Here’s an example of a pattern](https://gist.github.com/annezazu/acee30f8b6e8995e1b1a52796e6ef805) with various blocks locked in different ways and here’s more context on [creating a template with locked blocks](https://make.wordpress.org/core/2022/02/09/core-editor-improvement-curated-experiences-with-locking-apis-theme-json/). You can build these patterns in the editor itself, including adding locking options, before following the [documentation to register them](/docs/reference-guides/block-api/block-patterns.md).
 -->
パターンやテンプレートを作成する際、テーマ作成者は同じ UI ツールを使用してブロックのデフォルトのロック状態を設定できます。例えば、テーマ作成者はヘッダーの様々な部品をロックできます。ただしデフォルトでは、編集権限を持つユーザーがロックを解除できる点について注意してください。さまざまなブロックを異なる方法でロックした[パターンの例](https://gist.github.com/annezazu/acee30f8b6e8995e1b1a52796e6ef805)や、[ロックされたブロックを持つテンプレートの作成](https://make.wordpress.org/core/2022/02/09/core-editor-improvement-curated-experiences-with-locking-apis-theme-json/)も参照してください。これらのパターンはエディター自身で構築でき、ロックオプションを追加し、ドキュメントに従って[登録](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-patterns/)します。

<!-- 
**Apply content only editing in patterns or templates**
 -->
**パターンまたはテンプレート内のコンテンツのみの編集への適用**

<!-- 
This functionality was introduced in WordPress 6.1. In contrast to block locking, which disables the ability to move or remove blocks, content only editing is both designed for use at the pattern or template level and hides all design tools, while still allowing for the ability to edit the content of the blocks. This provides a great way to simplify the interface for users and preserve a design. When this option is added, the following changes occur:  
 -->
この機能は WordPress 6.1で導入されました。ブロックの移動や削除を抑止する「ブロックのロック」とは対照的に、「コンテンツのみの編集」は、パターンレベル、またはテンプレートレベルでの使用のために設計されました。すべてのデザインツールを隠しつつ、ブロックのコンテンツは編集できます。これはユーザーインターフェイスを簡素化し、デザインを維持する素晴らしい機能です。このオプションが追加されると、次のように変化します。

<!-- 
- Non-content child blocks (containers, spacers, columns, etc) are hidden from list view, un-clickable on the canvas, and entirely un-editable.
- The Inspector will display a list of all child 'content' blocks. Clicking a block in this list reveals its settings panel. 
- The main List View only shows content blocks, all at the same level regardless of actual nesting.
- Children blocks within the overall content locked container are automatically move / remove locked.
- Additional child blocks cannot be inserted, further preserving the design and layout.
- There is a link in the block toolbar to ‘Modify’ that a user can toggle on/off to have access to the broader design tools. Currently, it's not possibly to programmatically remove this option.
 -->
- コンテンツでない子ブロック (コンテナ、スペーサー、カラムなど) は、リストビューから消え、キャンバス上でクリックできず、完全に編集できません。
- インスペクタにはすべての「コンテンツ」子ブロックのリストが表示されます。このリストでブロックをクリックすると、そのブロックの設定パネルが表示されます。
- メインのリストビューには、コンテンツブロックのみが表示され、実際の入れ子に関係なく、すべて同じレベルで表示されます。
- コンテンツをロックされたコンテナ内の子ブロックは、自動的に移動、削除がロックされます。
- 追加の子ブロックは挿入できず、デザインとレイアウトを保持します。
- ブロックツールバーに「修正」へのリンクがあり、ユーザーはオン、オフを切り替えて、より広範なデザインツールにアクセスできます。現在のところプログラムでは、このオプションを削除できません。

<!-- 
This option can be applied to Columns, Cover, and Group blocks as well as third-party blocks that have the templateLock attribute in its block.json. To adopt this functionality, you need to use `"templateLock":"contentOnly"`. [Here's an example of a pattern](https://gist.github.com/annezazu/d62acd2514cea558be6cea97fe28ff3c) with this functionality in place. For more information, please [review the relevant documentation](/docs/reference-guides/block-api/block-templates.md#locking). 
 -->
このオプションは、カラム、カバー、グループブロックに加え、block.json 内に templateLock 属性を持つサードパーティ製ブロックにも適用できます。この機能を採用するには、`"templateLock": "contentOnly"`を使用する必要があります。この機能を実装した[パターンの例](https://gist.github.com/annezazu/d62acd2514cea558be6cea97fe28ff3c)を挙げます。詳細については[関連するドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-templates/#%E3%83%AD%E3%83%83%E3%82%AF)を参照してください。

<!-- 
Note: There is no UI in place to manage content locking and it must be managed at the code level. 
 -->
注：コンテンツロックを管理する UI はなく、コードレベルで管理する必要があります。

<!-- 
**Change permissions to control locking ability**
 -->
**ロック機能を制御する権限の変更**

<!-- 
Agencies and plugin authors can offer an even more curated experience by limiting which users have [permission to lock and unlock blocks](https://make.wordpress.org/core/2022/05/05/block-locking-settings-in-wordpress-6-0/). By default, anyone who is an administrator will have access to lock and unlock blocks. 
 -->
エージェンシーとプラグイン作成者は、[ブロックのロックとロック解除の権限](https://make.wordpress.org/core/2022/05/05/block-locking-settings-in-wordpress-6-0/)を持つユーザーを制限することで、さらにカスタマイズした体験を提供できます。デフォルトでは管理者であれば誰でもブロックをロックし、またロックを解除できます。

<!-- 
Developers can add a filter to the [block_editor_settings_all](https://developer.wordpress.org/reference/hooks/block_editor_settings_all/) hook to configure permissions around locking blocks.  The hook passes two parameters to the callback function:
 -->
開発者は [block_editor_settings_all](https://developer.wordpress.org/reference/hooks/block_editor_settings_all/) フックにフィルターを追加して、ブロックのロックに関する権限を設定できます。 このフックはコールバック関数に2つのパラメータを渡します。

<!-- 
- `$settings` - An array of configurable settings for the editor.

- `$context` - An instance of WP_Block_Editor_Context, an object that contains information about the current editor.
 -->
- `$settings` - エディタの構成可能な設定の配列。
- `$context` - WP_Block_Editor_Context のインスタンス。現在のエディターに関する情報を含むオブジェクト。

<!-- 
Specifically, developers can alter the `$settings['canLockBlocks']` value by setting it to `true` or `false`, typically by running through one or more conditional checks. 
 -->
具体的には、開発者は `$settings['canLockBlocks']` の値を `true` または `false` に設定することで変更できます。一般には1つ以上の条件チェックを実行した上で、設定します。

<!-- 
The following example disables block locking permissions for all users when editing a page:
 -->
次の例では、ページを編集中、すべてのユーザーのブロックロックの権限を無効化しています。

```php
add_filter( 'block_editor_settings_all', function( $settings, $context ) {
	if ( $context->post && 'page' === $context->post->post_type ) {
		$settings['canLockBlocks'] = false;
	}

	return $settings;
}, 10, 2 );
```

<!-- 
Another common use case may be to only allow users who can edit the visual design of the site (theme editing) to lock or unlock blocks.  The best option would be to test against the `edit_theme_options` capability, as shown in the following code snippet:
 -->
もう1つの一般的なユースケースは、サイトのビジュアルデザイン (テーマの編集) を編集できるユーザーにのみブロックのロックやロック解除を許可する例です。次のコードに示すように、`edit_theme_options` 機能をテストするのがベストでしょう。

```php
add_filter( 'block_editor_settings_all', function( $settings ) {
	$settings['canLockBlocks'] = current_user_can( 'edit_theme_options' );

	return $settings;
} );
```

<!-- 
Developers may use any type of conditional check to determine who can lock/unlock blocks. This is merely a small sampling of what is possible via the filter hook.
 -->
開発者は、誰がブロックをロックし、解除できるかの決定に、あらゆる種類の条件チェックを利用できます。これはフィルターフックで実現可能な、ほんの一例です。

<!-- 
## Providing default controls/options
 -->
## デフォルトのコントロールやオプションの提供

<!-- 
**Define default options**
 -->
**デフォルトオプションの定義**

<!-- 
Since theme.json acts as a configuration tool, there are numerous ways to define at a granular level what options are available. This section will use duotone as an example since it showcases a feature that cuts across a few blocks and allows for varying levels of access.   
 -->
theme.json は構成ツールとして機能し、どのオプションが利用可能かをきめ細かいレベルで定義する多くの方法があります。このセクションではデュオトーンを例にとって説明します。これはデュオトーンが、複数のブロックにまたがり、さまざまなレベルのアクセスを可能にする機能を持つためです。

<!-- 
*Duotone with Core options and customization available for each image related block:*
 -->
*画像に関連するブロックで、コアのオプションとカスタマイズが可能なデュオトーン:*

```json
{
"version": 2,
	"settings": {
		"color": {
			"customDuotone": true,
			"duotone": [
			]
		}
	}
}
```

<!-- 
*Duotone with theme defined color options, Core options, and customization available for each image related block:*
 -->
*画像に関連するブロックで、テーマ定義の色オプション、コアオプション、カスタマイズが可能なデュオトーン:*。

```json
{
	"version": 2,
	"settings": {
		"color": {
			"duotone": [
				{
					"colors": [ "#000000", "#ffffff" ],
					"slug": "foreground-and-background",
					"name": "Foreground and background"
				},
				{
					"colors": [ "#000000", "#ff0200" ],
					"slug": "foreground-and-secondary",
					"name": "Foreground and secondary"
				},
				{
					"colors": [ "#000000", "#7f5dee" ],
					"slug": "foreground-and-tertiary",
					"name": "Foreground and tertiary"
				},
			]
		}
	}
}
```

<!-- 
*Duotone with defined default options and all customization available for the Post Featured Image block:*
 -->
*投稿のアイキャッチ画像ブロックでは、定義済みのデフォルトオプションとすべてのカスタマイズが可能なデュオトーン*

```json
{
	"schema": "https://schemas.wp.org/trunk/theme.json",
	"version": 2,
	"settings": {
		"color": {
			"custom": true,
			"customDuotone": true
		},
		"blocks": {
			"core/post-featured-image": {
				"color": {
					"duotone": [
						{
							"colors": [ "#282828", "#ff5837" ],
							"slug": "black-and-orange",
							"name": "Black and Orange"
						},
						{
							"colors": [ "#282828", "#0288d1" ],
							"slug": "black-and-blue", 
							"name": "Black and Blue"
						}
					],
					"customDuotone": true,
					"custom": true
				}
			}
		}
	}
}
```

<!-- 
*Duotone with only defined default options and core options available for the Post Featured Image block (no customization):*
 -->
*投稿のアイキャッチ画像ブロックでは、定義済みのデフォルトオプションとコアのオプションのみが利用可能なデュオトーン (カスタマイズはなし)*

```json
{
	"schema": "https://schemas.wp.org/trunk/theme.json",
	"version": 2,
	"settings": {
		"color": {
			"custom": true,
			"customDuotone": true
		},	
		"blocks": {
			"core/post-featured-image": {
				"color": {
					"duotone": [
						{
							"colors": [ "#282828", "#ff5837" ],
							"slug": "black-and-orange",
							"name": "Black and Orange"
						},
						{
							"colors": [ "#282828", "#0288d1" ],
							"slug": "black-and-blue",
							"name": "Black and Blue"
						}
					],
					"customDuotone": false,
					"custom": false
				}
			}
		} 
	}
}
```

<!-- 
## Limiting interface options with theme.json
 -->
## theme.json によるインターフェースオプションの制限

<!-- 
Beyond defining default values, using theme.json allows you to also remove options entirely and instead rely on what the theme has set in place. Below is a visual showing two extremes with the same paragraph block: 
 -->
theme.jsonを使用すると、デフォルト値を定義するだけでなく、オプションを完全に削除し、代わりにテーマが設定したオプションを提供できます。以下は同じ段落ブロックで、2つの極端な設定を示した例です。

<!-- 
![Image of restricted interface](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/Locking%20comparison%20visual.png?raw=true)
 -->
![制限されたインターフェースの図](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/Locking%20comparison%20visual.png?raw=true)

<!-- 
Continuing the examples with duotone, this means you could allow full access to all Duotone functionality for Image blocks and only limit the Post Featured Image block like so:
 -->
デュオトーンの例を続けると、画像ブロックにはデュオトーンの全機能へのアクセスを許可し、投稿のアイキャッチ画像ブロックだけには制限するように設定できます。

```json
{
	"schema": "https://schemas.wp.org/trunk/theme.json",
	"version": 2,
	"settings": {
		"color": {
			"custom": true,
			"customDuotone": true
		},
		"blocks": {
			"core/image": {
				"color": {
					"duotone": [],
					"customDuotone": true,
					"custom": true
				}
			},
			"core/post-featured-image": {
				"color": {
					"duotone": [],
					"customDuotone": false,
					"custom": false
				}
			}
		}
	}
}
```
<!-- 
You can read more about how best to [turn on/off options with theme.json here](/docs/how-to-guides/themes/theme-json.md). 
 -->
[theme.json でオプションのオン、オフを切り替える](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/)方法の詳細を参照してください。

<!-- 
**Disable inherit default layout**
 -->
**デフォルトレイアウトの継承の無効化**

<!-- 
To disable the “Inherit default layout” setting for container blocks like the Group block, remove the following section: 
 -->
グループブロックのようなコンテナブロックの「デフォルトレイアウトの継承」設定を無効にするには、以下のセクションを削除してください。

```json
"layout": {
	"contentSize": null,
	"wideSize": null
},
```

<!-- 
**Limit options globally**
 -->
**グローバルなオプションの制限**

<!-- 
When using theme.json in a block or classic theme, these settings will stop the default color and typography controls from being enabled globally, greatly limiting what’s possible:
 -->
ブロックテーマまたはクラシックテーマで theme.json を使用する際、以下の設定を行うと、グローバルに、デフォルトの色やタイポグラフィのコントロールを無効化し、機能を大きく制限します。

```json
{
	"$schema": "http://schemas.wp.org/trunk/theme.json",
	"version": 2,
	"settings": {
		"layout": {
			"contentSize": "750px"
		},
		"color": {
			"background": false,
			"custom": false,
			"customDuotone": false,
			"customGradient": false,
			"defaultGradients": false,
			"defaultPalette": false,
			"text": false
		},
		"typography": {
			"customFontSize": false,
			"dropCap": false,
			"fontStyle": false,
			"fontWeight": false,
			"letterSpacing": false,
			"lineHeight": false,
			"textDecoration": false,
			"textTransform": false
		}
	}
}
```

<!-- 
To enable something from the above, just set whatever value you want to change to `true` for more granularity.
 -->
ここから何かを有効にするには、変更したい値を `true` に設定するだけで、より詳細な設定が可能です。

<!-- 
## Limiting interface options with theme.json filters
 -->
## theme.json フィルターによるインターフェースオプションの制限

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
## Limiting interface options with client-side filters
 -->
## クライアント側フィルターによるインターフェースオプションの制限

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
## Remove access to functionality
 -->
## 機能へのアクセスの抑止

<!-- 
**Remove access to the template editor**
 -->
**テンプレートエディターへのアクセスの抑止**

<!-- 
Whether you’re using [theme.json in a Classic Theme](https://developer.wordpress.org/themes/block-themes/converting-a-classic-theme-to-a-block-theme/#adding-theme-json-in-classic-themes) or Block Theme, you can add the following to your functions.php file to remove access to the Template Editor that is available when editing posts or pages:
 -->
[クラシックテーマ内で theme.json を使用する](https://developer.wordpress.org/themes/block-themes/converting-a-classic-theme-to-a-block-theme/#adding-theme-json-in-classic-themes)、あるいはブロックテーマで使用する、いずれの場合でも、functions.php ファイルに以下を追加することで、投稿やページの編集時のテンプレートエディターへのアクセスを抑止できます。

`remove_theme_support( 'block-templates');`

<!-- 
This prevents both the ability to both create new block templates or edit them from within the Post Editor. 
 -->
ブロックテンプレートの新規作成と、投稿エディターからの編集の療法が抑止されます。

<!-- 
**Create an allow or disallow list to limit block options**
 -->
**ブロックオプションを制限する許可、不許可リストの作成**

<!-- 
There might be times when you don’t want access to a block at all to be available for users. To control what’s available in the inserter, you can take two approaches: [an allow list](/docs/reference-guides/filters/block-filters.md#using-an-allow-list) that disables all blocks except those on the list or a [deny list that unregisters specific blocks](/docs/reference-guides/filters/block-filters.md#using-a-deny-list). 
 -->
特定のブロックをユーザーにまったく利用させたくない場合があります。インサーターで利用可能なブロックを制御するアプローチには2種類の方法があります。[許可リスト](https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#using-an-allow-list)は、リストにあるブロック以外のすべてのブロックを無効にします。[拒否リスト](https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#using-a-deny-list)は、特定のブロックの登録を解除します。

<!-- 
**Disable pattern directory**
 -->
**パターンディレクトリの無効化**

<!-- 
To fully remove patterns bundled with WordPress core from being accessed in the Inserter, the following can be added to your functions.php file: 
 -->
WordPress コアにバンドルされたパターンをインサーターから完全に削除するには、functions.php ファイルに以下を追加します。

`remove_theme_support( 'core-block-patterns' );`

<!-- 
## Utilizing patterns
 -->
## パターンの活用

<!-- 
**Prioritize starter patterns for any post type**
 -->
**任意の投稿タイプのスターターパターンの優先付け**

<!-- 
When a user creates new content, regardless of post type, they are met with an empty canvas. However, that experience can be improved thanks to the option to have patterns from a specific type prioritized upon creation of a new piece of content. The modal appears each time the user creates a new item when there are patterns on their website that declare support for the `core/post-content` block types. By default, WordPress does not include any of these patterns, so the modal will not appear without at least two of these post content patterns being added. 
 -->
ユーザーが新しいコンテンツを作成すると、投稿タイプに関係なく空のキャンバスが表示されます。しかしこのユーザー体験は改善できます。新しいコンテンツの作成時に、特定の投稿タイプでパターンを優先付けするオプションがあります。`core/post-content` ブロックタイプのサポートを宣言するパターンがウェブサイトにあると、ユーザーが新しいアイテムを作成するたびにモーダル画面が表示されます。デフォルトでは WordPress にはこれらのパターンが含まれていないため、こうした投稿コンテンツパターンが少なくとも2つ追加されていなければ、モーダル画面は表示されません。

<!-- 
To opt into this, include `core/post-content` in the Block Types for your pattern. From there you can control which post types the pattern should show up for via the Post Types option. [Here's an example of a pattern](https://gist.github.com/annezazu/ead4c4965345251ec999b716c0c84f32) that would appear when creating a new post. 
 -->
オプトインするには、パターンの「Block Types」に `core/post-content` を含めます。これで「Post Types」オプションを使用して、パターンが表示される投稿タイプを制御できます。新しい投稿を作成すると表示される[パターンの例](https://gist.github.com/annezazu/ead4c4965345251ec999b716c0c84f32)を参照してください。

<!-- 
Read more about this functionality in the [Page creation patterns in WordPress 6.0 dev note](https://make.wordpress.org/core/2022/05/03/page-creation-patterns-in-wordpress-6-0/) and [note that WordPress 6.1 brought this functionality to all post types](https://make.wordpress.org/core/2022/10/10/miscellaneous-editor-changes-for-wordpress-6-1/#start-content-patterns-for-all-post-types).  
 -->
この機能の詳細については、[WordPress 6.0 Dev Note のページ作成パターン](https://make.wordpress.org/core/2022/05/03/page-creation-patterns-in-wordpress-6-0/)を参照してください。ただし、[WordPress 6.1ではすべての投稿タイプにこの機能が追加された](https://make.wordpress.org/core/2022/10/10/miscellaneous-editor-changes-for-wordpress-6-1/#start-content-patterns-for-all-post-types)ことに注意してください。

<!-- 
**Prioritize starter patterns for template creation**
 -->
**テンプレート作成時のスターターパターンの優先付け**

<!-- 
In the same way patterns can be prioritized for new posts or pages, the same experience can be added to the template creation process. When patterns declare support for the 'templateTypes' property, the patterns will appear anytime a template that matches the designation is created, along with the options to start from a blank state or use the current fallback of the template. By default, WordPress does not include any of these patterns. 
 -->
新しい投稿やページに対してパターンを優先付けできるのと同じようなユーザー体験を、テンプレート作成プロセスにも追加できます。パターンが `templateTypes` プロパティのサポートを宣言すると、指定に一致するテンプレートが作成されるたびに、空白の状態から開始するか、テンプレートの現在のフォールバックを使用するかのオプションとともに、パターンが表示されます。デフォルトの WordPress にはこれらのパターンは含まれません。

<!-- 
To opt into this, a pattern needs to specify a property called `templateTypes`, which is an array containing the templates where the patterns can be used as the full content. Here's an example of a pattern that would appear when creating a 404 template:
 -->
これをオプトインするには、パターンに `templateTypes` プロパティを指定する必要があります。ここには、テンプレートを含む配列を指定し、パターンは完全なコンテンツとして使用されます。以下は404テンプレートの作成時に表示されるパターンの例です。

```
register_block_pattern(
  'wp-my-theme/404-template-pattern',
  array(
     'title'      => __( '404 Only template pattern', 'wp-my-theme' ),
     'templateTypes' => array( '404' ),
     'content'    => '<!-- wp:paragraph {"align":"center","fontSize":"x-large"} --><p class="has-text-align-center has-x-large-font-size">404 pattern</p><!-- /wp:paragraph -->',
  )
);
```
<!-- 
Read more about this functionality in the [Patterns on the create a new template modal in the WordPress 6.3 dev note](https://make.wordpress.org/core/2023/07/18/miscellaneous-editor-changes-in-wordpress-6-3/#patterns-on-the-create-a-new-template-modal).
 -->
この機能の詳細については、[WordPress 6.3開発ノートの新規テンプレート作成モーダル上のパターン](https://make.wordpress.org/core/2023/07/18/miscellaneous-editor-changes-in-wordpress-6-3/#patterns-on-the-create-a-new-template-modal) を参照してください。

<!-- 
**Lock patterns**
 -->
**パターンのロック**

<!-- 
As mentioned in the prior section on Locking APIs, aspects of patterns themselves can be locked so that the important aspects of the design can be preserved. [Here’s an example of a pattern](https://gist.github.com/annezazu/acee30f8b6e8995e1b1a52796e6ef805) with various blocks locked in different ways. You can build these patterns in the editor itself, including adding locking options, before [following the documentation to register them](/docs/reference-guides/block-api/block-patterns.md). 
 -->
上の Locking API セクションで述べたように、パターン自体の領域をロックして、設計の重要な部分を保持できます。[こちら](https://gist.github.com/annezazu/acee30f8b6e8995e1b1a52796e6ef805)は、さまざまなブロックがさまざまな方法でロックされた例です。これらのパターンはロックオプションの追加も含め、エディターそのものの中で構築でき、[ドキュメントに従って登録します](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-patterns/)。

<!-- 
**Prioritize specific patterns from the Pattern Directory**
 -->
**パターンディレクトリからの特定のパターンの優先付け**

<!-- 
With WordPress 6.0 themes can register patterns from [Pattern Directory](https://wordpress.org/patterns/) through theme.json. To accomplish this, themes should use the new patterns top level key in theme.json. Within this field, themes can list patterns to register from the Pattern Directory. The patterns field is an array of pattern slugs from the Pattern Directory. Pattern slugs can be extracted by the url in a single pattern view at the Pattern Directory. Example: This url https://wordpress.org/patterns/pattern/partner-logos the slug is partner-logos.
 -->
WordPress 6.0からテーマは、theme.json を通して[パターンディレクトリ](https://wordpress.org/patterns/)からパターンを登録できます。このためにテーマは theme.json の新しい patterns トップレベルキーを使用する必要があります。このフィールドで、テーマはパターンディレクトリから登録するパターンを列挙できます。patterns フィールドはパターンディレクトリからのパターンスラッグの配列です。パターンスラッグは、パターンディレクトリの単一のパターンビューの URL から抽出できます。例: URL https://wordpress.org/patterns/pattern/partner-logos のスラッグは partner-logos です。

```json
{
    "version": 2,
    "patterns": [ "short-text-surrounded-by-round-images", "partner-logos" ]
}
```

<!-- 
Note that this field requires using [version 2 of theme.json](/docs/reference-guides/theme-json-reference/theme-json-living.md). The content creator will then find the respective Pattern in the inserter “Patterns” tab in the categories that match the categories from the Pattern Directory.
 -->
注意: このフィールドは、[theme.json バージョン2](/docs/reference-guides/theme-json-reference/theme-json-living.md)の使用が必須です。コンテンツ作成者は、インサーターの「パターン」タブ内の、パターンディレクトリのカテゴリと一致するカテゴリ内でそれぞれのパターンを見つけられます。

<!-- 
## Combining approaches
 -->
## アプローチの組み合わせ

<!-- 
Keep in mind that the above approaches can be combined as you see fit. For example, you can provide custom patterns to use when creating a new page while also limiting the amount of customization that can be done to aspects of them, like only allowing certain preset colors to be used for the background of a Cover block or locking down what blocks can be deleted. When considering the approaches to take, think about the specific ways you might want to both open up the experience and curate it. 
 -->
ここまで紹介したアプローチは、自由に組み合わせられることを覚えておいてください。例えば、新しいページを作成するときに使用されるカスタムパターンを提供しつつ、カスタマイズ可能な部分を制限できます。例えば、カバーブロックの背景に特定のプリセット色の使用のみを許可するとか、削除できるブロックを制限する等。どのようなアプローチを取るべきかを検討する際には、ユーザー体験とカスタマイズの両方を広げる、具体的な方法を検討してみてください。

<!-- 
## Additional Resources
 -->
## その他の情報

<!-- 
- [Builder Basics – Working with Templates in Full Site Editing (Part 3)](https://wordpress.tv/2022/05/24/nick-diego-builder-basics-working-with-templates-in-full-site-editing-part-3/)
- [Core Editor Improvement: Curated experiences with locking APIs & theme.json](https://make.wordpress.org/core/2022/02/09/core-editor-improvement-curated-experiences-with-locking-apis-theme-json/)
- [Learn WordPress session on Curating the Editor Experience](https://wordpress.tv/2022/07/22/nick-diego-curating-the-editor-experience/)
 -->
- [Builder Basics – Working with Templates in Full Site Editing (Part 3)](https://wordpress.tv/2022/05/24/nick-diego-builder-basics-working-with-templates-in-full-site-editing-part-3/) (ビルダーの基本 - フルサイト編集でテンプレートを操作する (パート3))
- [Core Editor Improvement: Curated experiences with locking APIs & theme.json](https://make.wordpress.org/core/2022/02/09/core-editor-improvement-curated-experiences-with-locking-apis-theme-json/) (コアエディターの改善: Locking API と theme.json によるキュレーション体験)
- [Learn WordPress session on Curating the Editor Experience](https://wordpress.tv/2022/07/22/nick-diego-curating-the-editor-experience/) (Learn WordPress セッション。エディター体験のキュレーション)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/curating-the-editor-experience.md)