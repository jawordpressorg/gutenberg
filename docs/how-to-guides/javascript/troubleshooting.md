<!-- 
# Troubleshooting

If you're having trouble getting your JavaScript code to work, here are a few tips on how to find errors to help you troubleshoot.
-->
# トラブルシューティング

JavaScript コードが正しく動作しない場合のトラブルシューティングに役立つ、エラー発見のコツを紹介します。

<!-- 
## Console Log

The console log is a JavaScript developer's best friend. It is a good practice to work with it open, as it displays errors and notices in one place. See Mozilla's [JavaScript console](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools#The_JavaScript_console) documentation for more.

To open the JavaScript console, find the correct key combination for your broswer and OS:
-->
## コンソールログ

コンソールログは JavaScript 開発者の最良の友です。ベストプラクティスとしてコンソールログを開いたまま作業しすると1か所でエラーと通知を収集できます。詳細については Mozilla の [JavaScript コンソール](https://developer.mozilla.org/ja/docs/Learn/Common_questions/What_are_browser_developer_tools#The_JavaScript_console) のドキュメントを参照してください。

JavaScript コンソールを開くキー操作はブラウザと OS により異なります。

| Browser | Windows      | Linux        | Mac       |
| ------- | ------------ | ------------ | --------- |
| Firefox | Ctrl+Shift+K | Ctrl+Shift+K | Cmd+Opt+K |
| Chrome  | Ctrl+Shift+J | Ctrl+Shift+J | Cmd+Opt+J |
| Edge    | Ctrl+Shift+J | Ctrl+Shift+J | Cmd+Opt+J |
| Safari  |              |              | Cmd+Opt+C |

<!--
### First Step

Your first step in debugging should be to check the JavaScript console for any errors. Here is an example, which shows a syntax error on line 6:
-->
### 最初のステップ

デバッグの最初のステップは JavaScript コンソールでのエラーの確認です。次の例では6行目で syntax error が発生しています。
<!-- 
![console error](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/js-tutorial-console-log-error.png)
 -->
![コンソールエラー](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/js-tutorial-console-log-error.png)

<!-- 
### Display your message in console log
 -->
### コンソールログでのメッセージの表示

<!-- 
You can also write directly to the console from your JavaScript code for debugging and checking variable values. Use the `console.log` function like so:
 -->
またデバッグや変数の値の確認のため JavaScript コードからコンソールに直接書き出すことができます。以下のように `console.log` を使用します。

```js
console.log( 'My message' );
```
<!-- 
Or if you want to include a message and variable, in this case display the contents of settings variable:
 -->
あるいはメッセージと変数を含めることができます。次の例では変数 `settings` の内容が表示されます。

```js
console.log( 'Settings value:', settings );
```
<!-- 
### Using console log
 -->
### コンソールログの使用
<!-- 
You can also write JavaScript directly in the console if you want to test a short command. The commands you run apply to the open browser window. Try this example with the [wp.data package](/packages/data/README.md) to count how many blocks are in the editor. Play with it and also try to use the console to browse available functions.
 -->
短いコマンドのテスト用にコンソールに直接 JavaScript を描くこともできます。実行したコマンドはブラウザで開いているウィンドウに適用されます。[wp.data パッケージ](https://github.com/WordPress/gutenberg/blob/master/packages/data/README.md) を使用した次の例を試してください。エディター内に何個のブロックがあるかを数えます。またコンソールを使用して利用可能な関数を参照してみてください。

```js
wp.data.select( 'core/block-editor' ).getBlockCount();
```
<!-- 
![JavaScript example command](https://developer.wordpress.org/files/2020/07/js-console-cmd.gif)
 -->
![JavaScript サンプルコマンド](https://developer.wordpress.org/files/2020/07/js-console-cmd.gif)

<!-- 
### Using the `debugger` statement
 -->
### debugger 文の使用

<!-- 
If you would like to pause code execution at a certain line of code, you can write `debugger;` anywhere in your code. Once the browser sees the statement `debugger;`, it will pause execution of your code. This allows you to inspect all variables around the `debugger`  statement, which is very useful. [See this MDN page for more information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger).
 -->
コードの実行をコードのある行で一時停止したい場合、コードの任意の場所で `debugger;` と書けます。ブラウザは `debugger;` 文を見つけると、コードの実行を一時停止します。`debugger;` 近辺のすべての変数を調査でき非常に便利です。詳細については [MDN のページ](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/debugger) を参照してください。

<!-- 
## Confirm JavaScript is loading
 -->
## JavaScript がロードされていることの確認

<!-- 
If you are not seeing your changes, and no errors, check that your JavaScript file is being enqueued. Open the page source in your browser's web inspector (some browsers may allow you to view the page source by right clicking on the page and selecting "View Page Source"), and look for the `<script>` tag that loads your file. In the JavaScript tutorial example, you would search for `myguten.js` and confirm it is being loaded.

If you do not see the file being loaded, double check the enqueue function is correct. You can also check your server logs to see if there is an error messages.
 -->
コードを変更しても反映されない場合、JavaScript ファイルがエンキューされていることを確認してください。ブラウザーの Web インスペクタ、あるいはページ上で右クリックし、ポップアップメニューから「ページのソースを表示」を選択して Web ページのソースコードを開き、`<script>` タグでファイルをロードしていることを確認します。この例では `myguten.js` を検索し、ロードされていることを確認します。

ファイルのロードが確認できない場合はエンキュー関数が正しいことをダブルチェックしてください。またサーバー側のログにエラーが出力されていないかも確認してください。

<!-- 
Add a test message to confirm your JavaScript is loading, add a `console.log("Here");` at the top of your code, and confirm the message is shown. If not, it is likely the file is not loading properly, [review the loading JavaScript page](/docs/how-to-guides/javascript/loading-javascript.md) for details on enqueuing JavaScript properly.
 -->
JavaScript がロードされていることを確認するためにテストメッセージを追加してください。コードの先頭に `console.log("Here");` を追加し、メッセージが表示されることを確認します。表示されなければファイルが正しくロードされていません。「[JavaScript のロード](https://ja.wordpress.org/team/handbook/block-editor/tutorials/javascript/loading-javascript/)」を参照し、正しい JavaScript のエンキューについて確認してください。

<!-- 
## Confirm all dependencies are loading
 -->
## すべての依存がロードされていることの確認
<!-- 
The console log will show an error if a dependency your JavaScript code uses has not been declared and loaded in the browser. In the JavaScript tutorial example, if `myguten.js` script is enqueued without declaring the `wp-blocks` dependency, the console log will show:
 -->
JavaScript コードが使用する依存が宣言されていなかったり、ブラウザーにロードされていない場合、コンソールログにエラーが表示されます。JavaScript チュートリアルの例では、`wp-blocks` 依存の宣言無しに `myguten.js` スクリプトがエンキューされると、コンソールログにエラーが表示されます。

<!-- 
<img src="https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/js-tutorial-error-blocks-undefined.png" width=448 title="error wp.blocks is undefined"/>
 -->
<img src="https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/js-tutorial-error-blocks-undefined.png" width=448 title="エラー wp.blocks が未定義"/>

<!--
You can correct by checking your `wp_enqueue_script` function includes all packages listed that are used:
-->
使用するすべてのパッケージのリストを `wp_enqueue_script` 関数に指定していることを確認し、修正してください。

```js
wp_enqueue_script(
	'myguten-script',
	plugins_url( 'myguten.js', __FILE__ ),
	array( 'wp-blocks' )
);
```
<!-- 
For automated dependency management, it is recommended to [use wp-scripts to build step your JavaScript](/docs/how-to-guides/javascript/js-build-setup.md#dependency-management).
 -->
自動的な依存性の管理については、[wo-scripts を使用した JavaScript ビルド手順](https://ja.wordpress.org/team/handbook/block-editor/tutorials/javascript/js-build-setup/) を推奨します。

[原文](https://github.com/WordPress/gutenberg/blob/HEAD/docs/designers-developers/developers/tutorials/javascript/troubleshooting.md)


