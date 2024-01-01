<!-- 
# Block Locking API
 -->
# Block Locking API

<!-- 
The Block Locking API allows you to restrict actions on specific blocks within the Editor. This API can be used to prevent users from moving, removing, or editing certain blocks, ensuring layout consistency and content integrity.
 -->
Block Locking API を使用すると、エディター内の特定のブロックに対する操作を制限できます。この API を使用すると、ユーザーによる特定のブロックの移動、削除、編集を抑止でき、レイアウトの一貫性とコンテンツの整合性を確保できます。

<!-- 
## Lock the ability to move or remove specific blocks
 -->
## 特定のブロックの移動、削除機能のロック

<!-- 
Users can lock and unlock blocks via the Editor. The locking UI has options for preventing blocks from being moved within the content canvas or removed:
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
## Lock the ability to edit certain blocks
 -->
## 特定のブロックの編集のロック

<!-- 
Alongside the ability to lock moving or removing blocks, the [Navigation Block](https://github.com/WordPress/gutenberg/pull/44739) and [Reusable block](https://github.com/WordPress/gutenberg/pull/39950) have an additional capability: lock the ability to edit the contents of the block. This locks the ability to make changes to any blocks inside of either block type. 
 -->
[ナビゲーションブロック](https://github.com/WordPress/gutenberg/pull/44739)と[同期パターン (再利用可能ブロック)](https://github.com/WordPress/gutenberg/pull/39950) にはブロックの移動や削除をロックする機能の他に、ブロックの内容の編集をロックする追加機能があります。含まれる内部のブロックに対する変更を抑止します。

<!-- 
## Apply block locking to patterns or templates
 -->
## パターンやテンプレートへのブロックロックの適用

<!-- 
When building patterns or templates, theme authors can use these same UI tools to set the default locked state of blocks. For example, a theme author could lock various pieces of a header. Keep in mind that by default, users with editing access can unlock these blocks. [Here’s an example of a pattern](https://gist.github.com/annezazu/acee30f8b6e8995e1b1a52796e6ef805) with various blocks locked in different ways and here’s more context on [creating a template with locked blocks](https://make.wordpress.org/core/2022/02/09/core-editor-improvement-curated-experiences-with-locking-apis-theme-json/). You can build these patterns in the editor itself, including adding locking options, before following the [documentation to register them](/docs/reference-guides/block-api/block-patterns.md).
 -->
パターンやテンプレートを作成する際、テーマ作成者は同じ UI ツールを使用してブロックのデフォルトのロック状態を設定できます。例えば、テーマ作成者はヘッダーの様々な部品をロックできます。ただしデフォルトでは、編集権限を持つユーザーがロックを解除できる点について注意してください。さまざまなブロックを異なる方法でロックした[パターンの例](https://gist.github.com/annezazu/acee30f8b6e8995e1b1a52796e6ef805)や、[ロックされたブロックを持つテンプレートの作成](https://make.wordpress.org/core/2022/02/09/core-editor-improvement-curated-experiences-with-locking-apis-theme-json/)も参照してください。これらのパターンはエディター自身で構築でき、ロックオプションを追加し、ドキュメントに従って[登録](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-patterns/)します。

<!-- 
## Apply content-only editing in patterns or templates
 -->
## パターンまたはテンプレート内のコンテンツのみの編集への適用

<!-- 
This functionality was introduced in WordPress 6.1. In contrast to block locking, which disables the ability to move or remove blocks, content-only editing is both designed for use at the pattern or template level and hides all design tools, while still allowing for the ability to edit the content of the blocks. This provides a great way to simplify the interface for users and preserve a design. When this option is added, the following changes occur:  
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
## Change permissions to control locking ability
 -->
## ロック機能を制御する権限の変更

<!-- 
Agencies and plugin authors can offer an even more curated experience by limiting which users have [permission to lock and unlock blocks](https://make.wordpress.org/core/2022/05/05/block-locking-settings-in-wordpress-6-0/). By default, anyone who is an administrator will have access to lock and unlock blocks. 
 -->
エージェンシーとプラグイン作成者は、[ブロックのロックとロック解除の権限](https://make.wordpress.org/core/2022/05/05/block-locking-settings-in-wordpress-6-0/)を持つユーザーを制限することで、さらにカスタマイズした体験を提供できます。デフォルトでは管理者であれば誰でもブロックをロックし、またロックを解除できます。

<!-- 
Developers can add a filter to the [block_editor_settings_all](https://developer.wordpress.org/reference/hooks/block_editor_settings_all/) hook to configure permissions around locking blocks.  The hook passes two parameters to the callback function:
 -->
開発者は [block_editor_settings_all](https://developer.wordpress.org/reference/hooks/block_editor_settings_all/) フックにフィルターを追加して、ブロックのロックに関する権限を設定できます。 このフックはコールバック関数に2つのパラメータを渡します。

<!-- 
- `$settings` - An array of configurable settings for the Editor.
- `$context` - An instance of WP_Block_Editor_Context, an object that contains information about the current Editor.
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
Another common use case may be to only allow users who can edit the visual design of the site (theme editing) to lock or unlock blocks. Now, the best option would be to test against the `edit_theme_options` capability, as shown in the following code snippet:
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

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/curating-the-editor-experience/block-locking.md)