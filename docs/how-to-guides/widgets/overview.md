<!--
# Widgets Block Editor overview
 -->
# ウィジェットブロックエディター概要

<!--
## Widgets Block Editor
 -->
## ウィジェットブロックエディター

<!--
The new Widgets Editor is a WordPress feature which upgrades widget areas to allow using blocks alongside widgets. It offers a new widget management experience built using the familiar WordPress block editor.
 -->
新しいウィジェットエディターは、WordPress の新しい機能です。ウィジェットエリアをアップグレードし、ウィジェットと一緒にブロックを使用できます。使い慣れた WordPress ブロックエディタを使用した、新しいウィジェット管理体験を実現します。

<!--
You can access the new Widgets Editor by navigating to Appearance → Widgets or Appearance → Customize → Widgets and choose a widget area.
 -->
新しいウィジェットエディターにアクセスするには「外観」 > 「ウィジェット」、または、「外観」 > 「カスタマイズ」 > 「ウィジェット」でウィジェットエリアを選択します。

<!--
The Widgets Block Editor allows you to insert blocks and widgets into any of the [Widget Areas or Sidebars](https://developer.wordpress.org/themes/functionality/sidebars/) defined by the site's active theme, via a standalone editor or through the Customizer.
 -->
スタンドアロンエディター、またはカスタマイザー経由でウィジェットブロックエディターを使用すると、サイトで有効なテーマに定義された [ウィジェットエリア、または、サイドバー](https://developer.wordpress.org/themes/functionality/sidebars/) の任意の場所に、ブロックやウィジェットを挿入できます。

<!--
### Customizer Widgets Block Editor
 -->
### カスタマイザーウィジェットブロックエディター

<!--
The new Widgets Editor also replaces the Widgets section in the Customizer with the new block-based editor.
 -->
また、新しいウィジェットエディターはカスタマイザーのウィジェットセクションも、新しいブロックベースエディターで置き換えます。
<!--
You can access the Customizer Widgets Block Editor by navigating to Appearance → Customize, selecting Widgets, and then selecting a Widget Area.
 -->
カスタマイザーウィジェットエディターにアクセスするには、「外観」 > 「カスタマイズ」 > 「ウィジェット」を選択し、ウィジェットエリアを選択します。

<!--
Using the new Widgets Editor through the Customizer goes beyond inserting blocks and widgets into a selected Widget Area, makeing use of the live preview of the changes, to the right of the editor, and of all the other Customizer specific features such as scheduling and sharing changes.
 -->
カスタマイザーの新しいウィジェットエディタでは、選択したウィジェットエリアにブロックやウィジェットを挿入するだけでなく、エディタの右側に表示される変更のライブプレビューや、スケジューリングや変更の共有など、カスタマイザー固有の機能も利用できます。

<!--
## Compatibility
 -->
## 互換性

<!--
Widgets that were added to a Widget Area before the new Widgets Editor will continue to work - via the Legacy Widget block.
 -->
新しいウィジェットエディター以前にウィジェットエリアに追加されていたウィジェットは、「レガシーウィジェット」ブロックを介して、引き続き動作します。

<!--
The Legacy Widget block is the compatibility mechanism which allows us to edit and preview changes to a classic widget within the new block based Widgets Editor.
 -->
「レガシーウィジェット」ブロックは、新しいブロックベースのウィジェットエディター内で、従来のウィジェットの編集や変更のプレビューを可能にする互換機能です。

<!--
Any third party widgets registered by plugins can still be inserted in widget areas by adding and setting them up through a Legacy Widget block.
 -->
プラグインで登録されたサードパーティ製ウィジェットは、「レガシーウィジェット」ブロックを介して追加、設定することで、ウィジェットエリアに挿入できます。

<!--
The Widgets Editor stores blocks using an underlying "Block" widget that is invisible to the user. This means that plugins and themes will contibue to work normally, and that the Widgets Block Editor can be disabled without any data loss.
 -->
ウィジェットエディターは、ユーザーには見えない下層の「ブロック」ウィジェットを使用してブロックを保存します。このため、プラグインやテーマは通常通り動作し、データを失うことなくウィジェットブロックエディターを無効にできます。

<!--
Themes may disable the Widgets Block Editor using `remove_theme_support( 'widgets-block-editor' )`.
 -->
テーマは、`remove_theme_support( 'widgets-block-editor' )` を使用して、ウィジェットブロックエディターを無効化できます。

<!--
Users may disable the Widgets Block Editor by installing the [Classic Widgets plugin](https://wordpress.org/plugins/classic-widgets/).
 -->
ユーザーは、[Classic Widgetsプラグイン](https://ja.wordpress.org/plugins/classic-widgets/) をインストールして、ウィジェットブロックエディターを無効化できます。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/widgets/overview.md)
