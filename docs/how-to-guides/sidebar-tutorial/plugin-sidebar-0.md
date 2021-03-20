<!-- 
# Creating a Sidebar for Your Plugin
 -->
# プラグイン用サイドバーの作成

<!-- 
This tutorial starts with you having an existing plugin setup and ready to add PHP and JavaScript code. Please, refer to [Getting started with JavaScript](/docs/how-to-guides/javascript/) tutorial for an introduction to WordPress plugins and how to use JavaScript to extend the block editor.

 In the next sections, you're going to create a custom sidebar for a plugin that contains a text control so the user can update a value that is stored in the `post_meta` table.
 -->
このチュートリアルはすでにプラグインがあると仮定し、PHP と JavaScript のコードを追加していきます。WordPress プラグインの入門、ブロックエディター拡張プラグインの使用法については [JavaScript 入門](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/) チュートリアルを参照してください。

次のセクション以降でプラグイン用のカスタムサイドバーを作成します。サイドバーにはテキストコントロールがあり、ユーザーは値を更新でき、値は `post_meta` テーブルに保存されます。

<!-- 
1. [Get a sidebar up and running](/docs/how-to-guides/sidebar-tutorial/plugin-sidebar-1-up-and-running.md)
2. [Tweak the sidebar style and add controls](/docs/how-to-guides/sidebar-tutorial/plugin-sidebar-2-styles-and-controls.md)
3. [Register a new meta field](/docs/how-to-guides/sidebar-tutorial/plugin-sidebar-3-register-meta.md)
4. [Initialize the input control with the meta field value](/docs/how-to-guides/sidebar-tutorial/plugin-sidebar-4-initialize-input.md)
5. [Update the meta field value when input's content changes](/docs/how-to-guides/sidebar-tutorial/plugin-sidebar-5-update-meta.md)
6. [Finishing touches](/docs/how-to-guides/sidebar-tutorial/plugin-sidebar-6-finishing-touches.md)
 -->
1. [サイドバーの起動](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/plugin-sidebar-0/plugin-sidebar-1-up-and-running/)
2. [サイドバースタイルの調整とコントロールの追加](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/plugin-sidebar-0/plugin-sidebar-2-styles-and-controls/)
3. [メタフィールドの登録](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/plugin-sidebar-0/plugin-sidebar-3-register-meta/)
4. [入力コントロールの初期化](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/plugin-sidebar-0/plugin-sidebar-4-initialize-input/)
5. [入力コントロールの変更でメタフィールドを更新する](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/plugin-sidebar-0/plugin-sidebar-5-update-meta/)
6. [最後の仕上げ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/plugin-sidebar-0/plugin-sidebar-6-finishing-touches/)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/sidebar-tutorial/plugin-sidebar-0.md)
