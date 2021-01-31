<!--
# Loading JavaScript
-->
# JavaScript のロード

<!--
With the plugin in place, you can add the code that loads the JavaScript. This methodology follows the standard WordPress procedure of enqueuing scripts, see [enqueuing section of the Plugin Handbook](https://developer.wordpress.org/plugins/javascript/enqueuing/).

Add the following code to your `myguten-plugin.php` file:
-->

プラグインを準備したら、JavaScript をロードするコードを追加できます。ここでの手順はスクリプトをエンキューする標準的な WordPress のプロセスに従います。[プラグインハンドブックのエンキューセクション](https://developer.wordpress.org/plugins/javascript/enqueuing/) を参照してください。

`myguten-plugin.php` ファイルに次のコードを追加します。

```php
function myguten_enqueue() {
	wp_enqueue_script(
		'myguten-script',
		plugins_url( 'myguten.js', __FILE__ )
	);
}
add_action( 'enqueue_block_editor_assets', 'myguten_enqueue' );
```

<!--
The `enqueue_block_editor_assets` hook is used, which is called when the block editor loads, and will enqueue the JavaScript file `myguten.js`.

Create a file called `myguten.js` and add:
-->
`enqueue_block_editor_assets` フックを使用します。このフックはブロックエディターがロードされる際に呼び出され、JavaScript ファイル `myguten.js` をエンキューします。

ファイル `myguten.js` を作成し、次のコードを追加してください。

```js
console.log( "I'm loaded!" );
```

<!--
Next, create a new post in the block editor.

We'll check the JavaScript console in your browser's Developer Tools, to see if the message is displayed. If you're not sure what developer tools are, Mozilla's ["What are browser developer tools?"](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools) documentation provides more information, including more background on the [JavaScript console](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools#The_JavaScript_console).
-->
テストとして、ブロックエディーターで新しい投稿を作成します。

ブラウザーの開発者ツールの JavaScript コンソールを利用してメッセージが表示されるかどうかを確認します。開発者ツールがわからない方は、Mozilla の ["ブラウザー開発者ツールとは？"](https://developer.mozilla.org/ja/docs/Learn/Common_questions/What_are_browser_developer_tools) を参照してください。ドキュメントには [JavaScript コンソール](https://developer.mozilla.org/ja/docs/Learn/Common_questions/What_are_browser_developer_tools#The_JavaScript_console)の詳細も含まれています。

<!--
If your code is registered and enqueued correctly, you should see a message in your console:

![Console Log Message Success](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/designers-developers/assets/js-tutorial-console-log-success.png)

-->
コードが正しく登録されエンキューされると、コンソールにメッセージが表示されます。

![成功した場合のコンソールログメッセージ](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/designers-developers/assets/js-tutorial-console-log-success.png)

<!--
**Note for Theme Developers:**  The above method of enqueuing is used for plugins. If you are extending the block editor for your theme there is a minor difference, you will use the `get_template_directory_uri()` function instead of `plugins_url()`. So for a theme, the enqueue example is:
-->
**テーマ開発者への注意:**  上のエンキュー方法はプラグインのものです。テーマ用にブロックエディターを拡張する場合は若干異なり `plugins_url()` の代わりに `get_template_directory_uri()` 関数を使用します。テーマの場合のエンキュー例が以下です。

```php
function myguten_enqueue() {
	wp_enqueue_script(
		'myguten-script',
		get_template_directory_uri() . '/myguten.js'
	);
}
add_action( 'enqueue_block_editor_assets', 'myguten_enqueue' );
```

<!--
### Recap

At this point, you have a plugin in the directory `wp-content/plugins/myguten-plugin` with two files: the PHP server-side code in `myguten-plugin.php`, and the JavaScript which runs in the browser in `myguten.js`.

This puts all the initial pieces in place for you to start extending the block editor.
-->
### まとめ

この時点で、ディレクトリ `wp-content/plugins/myguten-plugin` 内にプラグインがあり、PHP サーバーサイドコードの `myguten-plugin.php` と ブラウザーで動作する JavaScript コード `myguten.js` の2つのファイルで実装されます。

これで必要な最初のパーツがすべてそろいました。ここからブロックエディターを拡張していきます。

[原文](https://github.com/WordPress/gutenberg/blob/HEAD/docs/designers-developers/developers/tutorials/javascript/loading-javascript.md)