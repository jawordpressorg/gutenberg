<!-- 
# User Interface
 -->
# ユーザーインターフェース

<!-- 
## The Block Editor
 -->
## ブロックエディター

<!-- 
The block editor’s general layout uses a bar at the top, with content below.
 -->
ブロックエディターの一般的なレイアウトでは、一番上にバー、その下にコンテンツがあります。

<!-- 
![Editor Interface](https://cldup.com/VWA_jMcIRw-3000x3000.png)
 -->
![エディターインターフェース](https://cldup.com/VWA_jMcIRw-3000x3000.png)

<!-- 
The **Toolbar** contains document-level actions: Editor/Select modes, save status, global actions for undo/redo/insert, the settings toggle, and publish options.

The **Content Area** contains the document itself.

The **Settings Sidebar** contains additional settings for the document (tags, categories, schedule etc.) and for blocks in the “Block” tab. A cog button in the toolbar hides the Settings Sidebar, allowing the user to enjoy a more immersive writing experience. On small screens, the sidebar is hidden by default. 
 -->
**ツールバー** にはドキュメントレベルの次のアクションが配置されます: 編集 / 選択モード、保存ステータス、元に戻す (undo) / やり直す (redo) / 挿入、設定のトグル、公開オプション。

**コンテンツ領域** にはドキュメントそのものが表示されます。

**設定サイドバー** には「ブロック」タブに、タグ、カテゴリー、スケジュールなどのドキュメントの追加設定が配置されます。ツールバーの歯車ボタンは設定サイドバーを隠し、ユーザーはより集中した執筆体験を得られます。タブレットなどの小さな画面ではデフォルトでサイドバーは隠されます。

<!-- 
## The Block
 -->
## ブロック

<!-- 
The block itself is the most basic unit of the editor. Generally speaking, everything is a block. Users build posts and pages using blocks, mimicking the vertical flow of the underlying HTML markup. 
 -->
ブロックはエディターのもっとも基本的な単位です。一般的に言って、すべてがブロックです。ユーザーはブロックを使用し、裏側の HTML マークアップの縦の流れを模しながら、投稿やページを構築します。

<!-- 
By surfacing each section of the document as a manipulatable block, we surface block-specific features contextually. This is inspired by desktop app conventions, and allows for a breadth of advanced features without weighing down the UI. 
 -->
ドキュメントの各セクションを操作可能なブロックとして表現することで、コンテキスト的にブロック固有の機能をも追加できます。これはデスクトップアプリケーションの慣習に発想を得たもので、UI を重くせずに高度な機能を拡張できます。

<!-- 
A selected block shows a number of contextual actions:
 -->
選択したブロックでは多くのコンテキスト指向のアクションが表示されます。

<!-- 
![Block Interface](https://cldup.com/3tQqIncKPB-3000x3000.png)
 -->
![ブロックインターフェース](https://cldup.com/3tQqIncKPB-3000x3000.png)

<!-- 
The block interface has basic actions. The block editor aims for good, common defaults, so users should be able to create a complete document without actually needing the advanced actions in the Settings Sidebar.
 -->
ブロックインターフェースには基本的なアクションがあります。ブロックエディターは適切で一般的なデフォルトを提供し、ユーザーが設定サイドバーの高度なアクションを必要とせずに、完全なドキュメントを作成できることを目指しています。

<!-- 
**The Block Toolbar** highlights commonly-used actions. The **Block Icon** lives in the block toolbar, and contains high-level controls for the selected block. It primarily allows users to transform a block into another type of compatible block. Some blocks also use the block icon for users to choose from a set of alternate block styles.
 -->
**ブロックツールバー** は一般的に利用されるアクションをハイライトします。highlights commonly-used actions. The **Block Icon** lives in the block toolbar, and contains high-level controls for the selected block. It primarily allows users to transform a block into another type of compatible block. Some blocks also use the block icon for users to choose from a set of alternate block styles.
<!-- 
The **Block Formatting** options let users adjust block-level settings, and the **Inline Formatting** options allow adjustments to elements inside the block. When a block is long, the block toolbar pins itself to the top of the screen as the user scrolls down the page.
 -->

The **ブロックフォーマット** options let users adjust block-level settings, and the **Inline Formatting** options allow adjustments to elements inside the block. When a block is long, the block toolbar pins itself to the top of the screen as the user scrolls down the page.
<!-- 
Blocks can be moved up and down via the **Block Mover** icons. Additional block actions are available via an ellipsis menu: deleting and duplicating blocks, as well as **advanced actions** like “Edit as HTML” and “Convert to Reusable Block.”
 -->

Blocks can be moved up and down via the **Block Mover** icons. Additional block actions are available via an ellipsis menu: deleting and duplicating blocks, as well as **advanced actions** like “Edit as HTML” and “Convert to Reusable Block.”

<!-- 
An unselected block does not show the block toolbar or any other contextual controls. In effect, an unselected block is a preview of the content itself:
 -->
An unselected block does not show the block toolbar or any other contextual controls. In effect, an unselected block is a preview of the content itself:

<!-- 
![Unselected Block](https://cldup.com/DH9HZnEgwH-3000x3000.png)
 -->
![選択されていないブロック](https://cldup.com/DH9HZnEgwH-3000x3000.png)

<!-- 
Please note that selection and focus can be different. An image block can be selected while the focus is on the caption field.
 -->
Please note that selection and focus can be different. An image block can be selected while the focus is on the caption field.

<!-- 
## Settings Sidebar
 -->
## 設定サイドバー
<!-- 
![Settings Sidebar](https://cldup.com/iAqrn6Gc8o-3000x3000.png)
 -->
![設定サイドバー](https://cldup.com/iAqrn6Gc8o-3000x3000.png)

<!-- 
The sidebar has two tabs, Document and Block:

- The **Document Tab** shows metadata and settings for the post or page being edited.
- The **Block Tab** shows metadata and settings for the currently selected block.
 -->
The sidebar has two tabs, Document and Block:

- The **Document Tab** shows metadata and settings for the post or page being edited.
- The **Block Tab** shows metadata and settings for the currently selected block.

<!-- 
Each tab has sets of editable fields (**Sidebar Sections**) that users can toggle open or closed. 
 -->
Each tab has sets of editable fields (**Sidebar Sections**) that users can toggle open or closed. 

<!-- 
If a block requires advanced configuration, those settings should live in the Settings Sidebar. Don’t put anything in the sidebar block tab that is necessary for the basic operation of your block; your user might dismiss the sidebar for an immersive writing experience. Pick good defaults, and make important actions available in the block toolbar.
 -->
If a block requires advanced configuration, those settings should live in the Settings Sidebar. Don’t put anything in the sidebar block tab that is necessary for the basic operation of your block; your user might dismiss the sidebar for an immersive writing experience. Pick good defaults, and make important actions available in the block toolbar.
<!-- 
Actions that could go in the block tab of the sidebar could be:

- Drop cap, for text
- Number of columns for galleries
- Number of posts, or category, in the “Latest Posts” block
- Any configuration that you don’t need access to in order to perform basic tasks
 -->
Actions that could go in the block tab of the sidebar could be:

- Drop cap, for text
- Number of columns for galleries
- Number of posts, or category, in the “Latest Posts” block
- Any configuration that you don’t need access to in order to perform basic tasks
<!-- 
## Block Library
 -->
## ブロックライブラリ
<!-- 
![Block Library](https://cldup.com/7QoQIoLk-A-3000x3000.png)
 -->
![ブロックライブラリ](https://cldup.com/7QoQIoLk-A-3000x3000.png)
<!-- 
The **Block Library** appears when someone inserts a block, whether via the toolbar, or contextually within the content area. Inside, blocks are organized into expandable sections. The block library’s search bar auto-filters the list of blocks as the user types. Users can choose a block by selecting the **Block Button** or the **Block Name**.
 -->
The **ブロックライブラリ** appears when someone inserts a block, whether via the toolbar, or contextually within the content area. Inside, blocks are organized into expandable sections. The block library’s search bar auto-filters the list of blocks as the user types. Users can choose a block by selecting the **Block Button** or the **Block Name**.

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/designers/user-interface.md)