<!--
# Adding blocks to your theme
 -->
# テーマへのブロックの追加
<!--
Each template or template part contains the [block grammar](https://developer.wordpress.org/block-editor/principles/key-concepts/#blocks), the HTML, for the selected blocks.

There is more than one way to add blocks to the theme files:

-   Adding and editing blocks in the site editor and exporting the theme.
-   Adding block HTML and comments to the HTML files manually.
 -->
各テンプレートやテンプレートパーツは[ブロック文法](https://ja.wordpress.org/team/handbook/block-editor/principles/key-concepts/#blocks) を含みます。ブロック文法は選択されたブロックの HTML です。

テーマファイルにブロックを追加するには1つ以上の方法があります。

- サイトエディターでブロックを追加、編集し、エクスポートする。
- 手動で HTML ファイルにブロック HTML とコメントを追加する。

<!--
## Working with blocks and templates in the site editor
 -->
## サイトエディターでのブロックとテンプレートの操作
<!--
The beta site editor is available from the WordPress admin area when full site editing is enabled. To use the site editor, a full site editing theme must be installed and active.

The site editor is similar to the block editor, but is used for the site layout instead of the post and page content.
 -->
「フルサイト編集」機能が有効化されている場合、WordPres 管理画面で「サイトエディター (ベータ)」を利用できます。サイトエディターを使用するには「フルサイト編集」対応のテーマをインストール、有効化する必要があります。

サイトエディターはブロックエディターに似ていますが、投稿やページなどのコンテンツではなく、サイトレイアウトのために使用されます。

<!--
Two new menus have been added to the top toolbar of the editor:

One that shows a list of posts, pages and categories, and indicates the item that is used as the front page.

![Site editor toolbar page menu](https://wordpress.org/gutenberg/files/2020/07/block-based-themes-page-menu.png)
 -->
2つの新しいメニューがエディター上部のツールバーに追加されています。

1つは投稿、ページ、カテゴリーのリストを表示し、フロントページとして使用中の要素を示します。

![サイトエディターツールバーのページメニュー](https://wordpress.org/gutenberg/files/2020/07/block-based-themes-page-menu.png)
<!--
And a list of templates and template parts, that indicates the item that is being edited. Hovering over the parts will show a preview.
 -->
もう1つはテンプレートとテンプレートパーツのリストで、編集中の要素を示します。テンプレートパーツの上にマウスを移動するとプレビューが表示されます。
<!--
![Site editor toolbar template menu](https://wordpress.org/gutenberg/files/2020/07/block-based-themes-template-menu.png)
 -->
![サイトエディターツールバーのテンプレートメニュー](https://wordpress.org/gutenberg/files/2020/07/block-based-themes-template-menu.png)
<!--
Template parts can be selected and edited directly in the site editor, like other blocks:
 -->
他のブロックと同じようにテンプレートパーツもサイトエディター内で直接選択し、編集できます。

<!--
![A selected template part is highlighted. When selected, the template part has a limited set of alignment controls in the block toolbar](https://wordpress.org/gutenberg/files/2020/07/block-based-themes-editor-template-part.png)
 -->
![選択したテンプレートパーツはハイライト表示されます。選択するとブロックツールバーには限定された配置コントロールが表示されます。](https://wordpress.org/gutenberg/files/2020/07/block-based-themes-editor-template-part.png)

<!--
Select the header template part in the menu to view and edit it individually. Add the blocks that you would like in your header, for example a site title block, a navigation block, and an image.
 -->
メニューでヘッダーテンプレートパーツを選択して表示し、個別に編集します。ヘッダーに表示するブロック、たとえばサイトタイトルブロック、ナビゲーションブロックを追加してください。

<!--
Next, select the footer template part and add some content, for example widget blocks.

Select the index template again to view the template parts together in the page context.

To add a post loop to the index template, add a **query** block. The query block includes the query loop and the query pagination. The default loop displays the post title and post content. The query loop and query pagination are also available as individual blocks.
 -->
次にフッターテンプレートパーツを選択し、ウィジェットブロックなどのコンテンツを追加します。

再度 index テンプレートを選択すると、ページ内ですべてのテンプレートパーツが一緒に表示されます。

index テンプレートに投稿ループを追加するには、**query** ブロックを追加してください。query ブロックには query ループと query ページネーションが含まれます。デフォルトのループは投稿のタイトルとコンテンツを表示します。query ループと query ページネーションは個別のブロックとしても利用可能です。

<!--
## Saving templates and template parts
 -->
## テンプレートとテンプレートパーツの保存

<!--
When you have made your changes, click on the **update design** button in the upper right corner,
where you normally publish and update your content.

Select the templates and template parts that you want to save:
 -->
変更したら右上の、通常は公開してコンテンツを更新する場所にある **デザインの更新** ボタンをクリックしてください。

保存するテンプレートとテンプレートパーツを選択してください。

<!--
![The save menu displays a list of templates and template parts with checkboxes](https://wordpress.org/gutenberg/files/2020/07/block-based-themes-save.png)
 -->
![「保存」メニューはテンプレートとテンプレートパーツのリストをチェックボックス付きで表示します](https://wordpress.org/gutenberg/files/2020/07/block-based-themes-save.png)

<!--
When you save changes in the site editor, the files in the active theme are not updated. Instead, the templates and template parts are saved as custom post types, that are accessed via the appearance menu.
 -->
サイトエディターで変更を保存しても、現在有効なテーマのファイルは更新されません。代わりにテンプレートとテンプレートパーツはカスタム投稿タイプとして保存され、「外観」メニューからアクセスできます。

<!--
![The template parts view in the admin area displays a list of all saved template parts](https://wordpress.org/gutenberg/files/2020/07/block-based-themes-appearance-template-parts.png)
 -->
![管理画面のテンプレートパーツビューはすべての保存済みテンプレートパーツのリストを表示します。](https://wordpress.org/gutenberg/files/2020/07/block-based-themes-appearance-template-parts.png)

<!--
## Exporting changes
 -->
## 変更のエクスポート

<!--
Saved templates and template parts can be exported as a partial theme from the Tools menu in the site editor. The block HTML code can then be copied to the theme that you are editing.
 -->
保存されたテンプレートとテンプレーtパーツはサイトエディターの「ツール」メニューから部分テーマとしてエクスポートできます。次に、ブロック HTML コードを編集するテーマにコピーできます。

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/tutorials/block-based-themes/block-based-themes-2-adding-blocks.md)
