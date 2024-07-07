<!-- 
# Disable Editor functionality
 -->
# エディター機能の無効化

<!-- 
This page is dedicated to the many ways you can disable specific functionality in the Post Editor and Site Editor that are not covered in other areas of the curation documentation.
 -->
このページでは、このセクションの他のドキュメントではカバーされない、投稿エディターとサイトエディターで特定の機能を無効にするさまざまな方法について説明します。

<!-- 
## Restrict block options
 -->
## ブロックオプションの制限

<!-- 
There might be times when you don’t want access to a block at all to be available for users. To control what’s available in the inserter, you can take two approaches: [an allow list](/docs/reference-guides/filters/block-filters.md#using-an-allow-list) that disables all blocks except those on the list or a [deny list that unregisters specific blocks](/docs/reference-guides/filters/block-filters.md#using-a-deny-list).
 -->
特定のブロックをユーザーにまったく利用させたくない場合があります。インサーターで利用可能なブロックを制御するアプローチには2種類の方法があります。[許可リスト](https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#using-an-allow-list)は、リストにあるブロック以外のすべてのブロックを無効にします。[拒否リスト](https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#using-a-deny-list)は、特定のブロックの登録を解除します。

<!-- 
## Disable the Pattern Directory
 -->
## パターンディレクトリの無効化

<!-- 
To fully remove patterns bundled with WordPress core from being accessed in the Inserter, the following can be added to your `functions.php` file:
 -->
WordPress コアにバンドルされたパターンをインサーターから完全に削除するには、`functions.php` ファイルに以下を追加します。

```php
function example_theme_support() {
	remove_theme_support( 'core-block-patterns' );
}
add_action( 'after_setup_theme', 'example_theme_support' );
```

<!-- 
## Disable block variations
 -->
## ブロックバリエーションの無効化

<!-- 
Some Core blocks are actually [block variations](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/). A great example is the Row and Stack blocks, which are actually variations of the Group block. If you want to disable these "blocks", you actually need to disable the respective variations.
 -->
コアのいくつかのブロックは実際には、[ブロックのバリエーション](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-variations/)です。例えば、Row (横並び) ブロックや Stack (縦積み) ブロックは、実際には Group (グループ) ブロックのバリエーションです。これらの「ブロック」を無効にしたい場合は、それぞれのバリエーションを無効にします。

<!-- 
Block variations are registered using JavaScript and need to be disabled with JavaScript. The code below will disable the Row variation.
 -->
ブロックのバリエーションは JavaScript を使用して登録されており、無効にする場合も JavaScript を使用します。以下のコードは、Row バリエーションを無効にします。

```js
wp.domReady( () => {
	wp.blocks.unregisterBlockVariation( 'core/group', 'group-row' );
});
```

<!-- 
Assuming the code was placed in a `disable-variations.js` file located in the root of your theme folder, you can enqueue this file in the theme's `functions.php` using the code below.
 -->
テーマフォルダーのルートの `disable-variations.js` ファイル内に上のコードを記述したとすると、テーマの `functions.php` で次のコードを使用して、このファイルをエンキューできます。

```php
function example_disable_variations_script() {
	wp_enqueue_script(
		'example-disable-variations-script',
		get_template_directory_uri() . '/disable-variations.js',
       	array( 'wp-dom-ready' ),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
add_action( 'enqueue_block_editor_assets', 'example_disable_variations_script' );
```

<!-- 
## Disable block styles
 -->
## ブロックスタイルの無効化

<!-- 
There are a few Core blocks that include their own [block styles](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/). An example is the Image block, which includes a block style for rounded images called "Rounded". You many not want your users to round images, or you might prefer to use the border-radius control instead of the block style. Either way, it's easy to disable any unwanted block styles.
 -->
コアブロックの中には自身の[ブロックスタイル](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-styles/)を持つものがいくつかあります。例えば、画像ブロックはには丸みを帯びた画像用のブロックスタイル「rounded」があります。しかしユーザーに画像を丸めさせたくない場合や、ブロックスタイルの代わりに border-radius コントロールを使いたい場合もああります。どちらの場合も、不要なブロックスタイルは簡単に無効化できます。

<!-- 
Unlike block variations, you can register styles in either JavaScript or PHP. If a style was registered in JavaScript, it must be disabled with JavaScript. If registered using PHP, the style can be disabled with either. All Core block styles are registered in JavaScript.
 -->
ブロックバリエーションと異なりスタイルは、JavaScript でも PHP でも登録できます。スタイルを JavaScript で登録した場合は、JavaScript で無効化する必要があります。PHP で登録した場合は、どちらでもスタイルを無効にできます。すべてのコアブロックのスタイルはJavaScript で登録されています。

<!-- 
So, you would use the following code to disable the "Rounded" block style for the Image block.
 -->
したがって画像ブロックの「rounded」ブロックスタイルを無効にするには、以下のコードを使用します。

```js
wp.domReady( () => {
	wp.blocks.unregisterBlockStyle( 'core/image', 'rounded' );
});
```

<!-- 
This JavaScript should be enqueued much like the block variation example above. Refer to the [block styles](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/) documentation for how to register and unregister styles using PHP.
 -->
この JavaScript は上のブロックバリエーションの例と同じように、エンキューしなければなりません。PHP を使用したスタイルの登録や解除方法については、[ブロックスタイル](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-styles/)のドキュメントを参照してください。

<!-- 
## Disable access to the Template Editor
 -->
## テンプレートエディターへのアクセスの無効化

<!-- 
Whether you’re using theme.json in a Classic or Block theme, you can add the following to your `functions.php` file to remove access to the Template Editor that is available when editing posts or pages:
 -->
クラシックテーマでもブロックテーマでも、theme.json を使用している場合は、`functions.php` ファイルに以下を追加することで、投稿やページの編集時に利用できるテンプレートエディタへのアクセスを抑止できます。

```php
function example_theme_support() {
	remove_theme_support( 'block-templates');
}
add_action( 'after_setup_theme', 'example_theme_support' );
```
<!-- 
This prevents both the ability to create new block templates or edit them from within the Post Editor.
 -->
このコードにより、投稿エディターからの新規ブロックテンプレートの作成と編集の両方が抑止されます。

<!-- 
## Disable access to the Code Editor
 -->
## コードエディターへのアクセスの無効化

<!-- 
The Code Editor allows you to view the underlying block markup for a page or post. While this view is handy for experienced users, you can inadvertently break block markup by editing content. Add the following to your `functions.php` file to restrict access.
 -->
コードエディターでは、ページや投稿の裏側にあるブロックマークアップを参照できます。これはパワーユーザーには便利な機能ですが、誤ってコンテンツを編集することでブロックマークアップを破壊する可能性があります。`functions.php` ファイルに以下のコードを追加すると、エディターへのアクセスを制限できます。

```php
function example_restrict_code_editor_access( $settings, $context ) {
    $settings[ 'codeEditingEnabled' ] = false;

	return $settings;
}
add_filter( 'block_editor_settings_all', 'example_restrict_code_editor_access', 10, 2 );
```
<!-- 
This code prevents all users from accessing the Code Editor. You could also add [capability](https://wordpress.org/documentation/article/roles-and-capabilities/) checks to disable access for specific users.
 -->
このコードはすべてのユーザーの、コードエディターへのアクセスを抑止します。必要であれば[権限](https://wordpress.org/documentation/article/roles-and-capabilities/)のチェックを追加して、特定のユーザーのアクセスを抑止できます。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/curating-the-editor-experience/disable-editor-functionality.md)
