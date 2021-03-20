<!-- 
# Displaying Notices from Your Plugin or Theme
 -->
# プラグインやテーマからの通知の表示

<!-- 
Notices are informational UI displayed near the top of admin pages. WordPress core, themes, and plugins all use notices to indicate the result of an action, or to draw the user's attention to necessary information.

In the classic editor, notices hooked onto the `admin_notices` action can render whatever HTML they'd like. In the block editor, notices are restricted to a more formal API.
 -->
「通知」は管理画面の先頭付近に表示される情報用のユーザーインターフェースです。WordPress コア、テーマ、プラグインのすべてでアクションの結果を知らせたり、必須の情報にユーザーの注意を集めるために使用されます。

クラシックエディターでは、`admin_notices` アクションをフックして自由な HTML をレンダリングして通知としましたが、ブロックエディターでは、より正式な API に制限されています。

<!-- 
## Notices in the Classic Editor

In the classic editor, here's an example of the "Post draft updated" notice:

![Post draft updated in the classic editor](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/notices/classic-editor-notice.png)

Producing an equivalent "Post draft updated" notice would require code like this:
 -->
## クラシックエディターでの通知

クラシックエディターで投稿の下書きが更新された (Post draft updated) 際の通知の例です。

![クラシックエディターの通知 - 投稿の下書きが更新された](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/notices/classic-editor-notice.png)

同等の通知を実装したとすると、次のようなコードになります。

<!-- 
```php
/**
 * Hook into the 'admin_notices' action to render
 * a generic HTML notice.
 */
function myguten_admin_notice() {
	$screen = get_current_screen();
	// Only render this notice in the post editor.
	if ( ! $screen || 'post' !== $screen->base ) {
		return;
	}
	// Render the notice's HTML.
	// Each notice should be wrapped in a <div>
	// with a 'notice' class.
	echo '<div class="notice notice-success is-dismissible"><p>';
	echo sprintf( __( 'Post draft updated. <a href="%s" target="_blank">Preview post</a>' ), get_preview_post_link() );
	echo '</p></div>';
};
add_action( 'admin_notices', 'myguten_admin_notice' );
```
 -->
```php
/**
 * 'admin_notices' アクションにフックして、
 * 一般的な HTML 通知をレンダリングする
 */
function myguten_admin_notice() {
	$screen = get_current_screen();
	// この通知は投稿エディターでのみレンダリングする。
	if ( ! $screen || 'post' !== $screen->base ) {
		return;
	}
	// 通知の HTML をレンダリングする
	// 通知は 'notice' クラスの <div> で囲む
	echo '<div class="notice notice-success is-dismissible"><p>';
	echo sprintf( __( 'Post draft updated. <a href="%s" target="_blank">Preview post</a>' ), get_preview_post_link() );
	echo '</p></div>';
};
add_action( 'admin_notices', 'myguten_admin_notice' );
```

<!-- 
Importantly, the `admin_notices` hook allows a developer to render whatever HTML they'd like. One advantage is that the developer has a great amount of flexibility. The key disadvantage is that arbitrary HTML makes future iterations on notices more difficult, if not possible, because the iterations need to accommodate for arbitrary HTML. This is why the block editor has a formal API.
 -->
`admin_notices` フックを使用すると開発者は希望するどのような HTML でもレンダリングできます。これは開発者に対して最大限の柔軟性を与える一方、自由な HTML は将来の拡張を不可能あるいは困難にします。なぜならこの自由な HTML も含めて対応する必要があるためです。これがブロックエディターに公式の API が準備された理由です。

<!-- 
## Notices in the Block Editor

In the block editor, here's an example of the "Post published" notice:

![Post published in the block editor](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/notices/block-editor-notice.png)

Producing an equivalent "Post published" notice would require code like this:
 -->
## ブロックエディターでの通知

ブロックエディターで投稿が公開された (Post published) 際の通知の例です。

![ブロックエディターの通知 - 投稿が公開された](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/notices/block-editor-notice.png)

同等の通知を実装したとすると、次のようなコードになります。

<!-- 
```js
( function( wp ) {
	wp.data.dispatch( 'core/notices' ).createNotice(
		'success', // Can be one of: success, info, warning, error.
		'Post published.', // Text string to display.
		{
			isDismissible: true, // Whether the user can dismiss the notice.
			// Any actions the user can perform.
			actions: [
				{
					url: '#',
					label: 'View post',
				},
			],
		}
	);
} )( window.wp );
```
 -->
```js
( function( wp ) {
	wp.data.dispatch( 'core/notices' ).createNotice(
		'success', // 次のどれか: success, info, warning, error.
		'Post published.', // 出力されるテキスト文字列
		{
			isDismissible: true, // ユーザーが通知を消せるかどうか
			// ユーザーが実行可能な任意のアクション
			actions: [
				{
					url: '#',
					label: 'View post',
				},
			],
		}
	);
} )( window.wp );
```

<!-- 
You'll want to use this _Notices Data API_ when producing a notice from within the JavaScript application lifecycle.

To better understand the specific code example above:

* `wp` is WordPress global window variable.
* `wp.data` is an object provided by the block editor for accessing the block editor data store.
* `wp.data.dispatch('core/notices')` accesses functionality registered to the block editor data store by the Notices package.
* `createNotice()` is a function offered by the Notices package to register a new notice. The block editor reads from the notice data store in order to know which notices to display.

Check out the [_Loading JavaScript_](/docs/how-to-guides/javascript/loading-javascript.md) tutorial for a primer on how to load your custom JavaScript into the block editor.
 -->
JavaScript アプリケーションコード内から通知を生成する場合には、この _Notices Data API_ を使うことになります。

上のサンプルコードを補足します。

* `wp` は WordPress グローバル window 変数です。
* `wp.data` ブロックエディターから提供されるオブジェクトです。ブロックエディターのデータストアにアクセスします。
* `wp.data.dispatch('core/notices')` Notices パッケージによりブロックエディターのデータストアに登録された機能にアクセスします。
* `createNotice()` Notices パッケージから提供される関数です。新しい通知を登録します。ブロックエディターはどの通知を出力するかを通知データストアから読み取ります。

ブロックエディターにカスタム JavaScript をロードする方法が分からない場合は、[_JavaScript のロード_](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/loading-javascript/) チュートリアルを参照してください。

<!-- 
## Learn More

The block editor offers a complete API for generating notices. The official documentation is a great place to review what's possible.

For a full list of the available actions and selectors, refer to the [Notices Data Handbook](/docs/reference-guides/data/data-core-notices.md) page.
 -->
## もっと学習するには

ブロックエディターでは、通知の生成に関して完全な API が提供されています。どんな機能があるかを調べるには公式ドキュメントを参照してください。

利用可能なアクションとセレクタの完全なリストは [Notices Data Handbook](https://developer.wordpress.org/block-editor/data/data-core-notices/) を参照してください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/notices/README.md)
