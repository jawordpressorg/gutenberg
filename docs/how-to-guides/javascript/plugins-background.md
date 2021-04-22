<!--
# Plugins Background
-->
# 裏側のプラグイン

<!--
The primary means of extending WordPress is the plugin. The WordPress [Plugin Basics](https://developer.wordpress.org/plugins/plugin-basics/) documentation provides details on building a plugin.

The quickest way to start is to create a new directory in `wp-content/plugins/` to contain your plugin code. For this example, call it `myguten-plugin`.

Inside this new directory, create a file called `myguten-plugin.php`. This is the server-side code that runs when your plugin is active.
-->
WordPress を拡張する中心的な方法はプラグインです。プラグイン作成の詳細については WordPress [Plugin Basics (プラグインの基礎)](https://developer.wordpress.org/plugins/plugin-basics/) を参照してください。

もっとも単純にプラグインを作成する方法として `wp-content/plugins/` 下に新しいディレクトリを作成し、プラグインのコードを配置します。このチュートリアルでは新しいディレクトリを `myguten-plugin` とします。

この新しいディレクトリにファイル `myguten-plugin.php` を作成します。このコードはプラグインが動作している際にサーバー側で実行されます。

<!--
For now, add the following code in the file:
-->
ファイルに次のコードを加えます。

```php
<?php
/*
Plugin Name: Fancy Quote
*/
```

<!--
To summarize, you should have a directory `wp-content/plugins/myguten-plugin/` which has the single file `myguten-plugin.php`.

Once that is in place, go to your plugins list in `wp-admin` and you should see your plugin listed.

Click **Activate** and your plugin will load with WordPress.
-->
ここまでを振り返るとディレクトリ `wp-content/plugins/myguten-plugin/` の下に1つのファイル `myguten-plugin.php` があります。

`../wp-admin` で管理画面を開き、プラグインの一覧を表示すると、作成したプラグインも表示されます。

**有効化** をクリックすると、WordPress はプラグインをロードします。
