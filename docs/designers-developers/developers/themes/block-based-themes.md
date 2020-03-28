<!--
# Block-based Themes (Experimental)

> This is the documentation for the current implementation of block-based themes, also known as Full Site Editing or Block Content Areas. These features are still experimental in the plugin. “Experimental” means this is just an early implementation that is subject to potential drastic and breaking changes in iterations based on feedback from users, contributors and theme authors.

> Documentation has been shared early to surface what’s being worked on and invite feedback from those experimenting with the APIs. You can provide feedback in the weekly #core-editor chats where the latest progress of this effort will be shared and discussed, or async via Github issues.

**Note:** In order to use these features, make sure to enable the "Full Site Editing" flag from the **Experiments** page of the Gutenberg plugin.

## What is a block-based theme?

A block-based theme is a WordPress theme with templates entirely composed of blocks so that in addition to the post content of the different post types (pages, posts, ...), the block editor can also be used to edit all areas of the site: headers, footers, sidebars, etc.

## What is the structure of a block-based theme?

A very simple block-based theme is structured like so:

```
theme
|__ style.css
|__ functions.php
|__ block-templates
    |__ index.html
    |__ single.html
    |__ archive.html
    |__ ...
|__ block-template-parts
    |__ header.html
    |__ footer.html
    |__ sidebar.html
    |__ ...
```

The difference with existing WordPress themes is that the different templates in the template hierarchy, and template parts, are block templates instead of php files.

## What is a block template?

A block template is made up of a list of blocks. Any WordPress block can be used in a template. Templates can also reuse parts of their content using "Template Parts". For example, all the block templates can have the same header included from a separate `header.html` template part.

Here's an example of a block template:
-->
# ブロックベーステーマ (実験レベル)

これは現段階での「ブロックベーステーマ」(block-based theme) 実装に関する文書です。「ブロックベーステーマ」は、「フルサイトエディティング」(Full Site Editing)、または「ブロックコンテントエリア」(Block Content Area) とも呼ばれ、これらの機能はまだプラグインの実験レベルの機能です。ここで「実験レベル」とは早い段階での実装を意味し、ユーザー、コントリビューター、作成者のフィードバックに基づくイテレーションによっては、大きく互換性を失う形で変更される可能性があります。

早い段階で文書を共有する理由は、作業の様子を明らかにし、API を利用した実験からフィードバックを得るためです。フィードバックは、最新の進捗を共有、議論している #core-editor 週次ミーティングで行うか、または Github の issue を通して非同期に行えます。

注意: この機能を使用するには、Gutenberg プラグインの「Experiments」ページの「Full Site Editing」フラグを有効にしてください。

## ブロックベーステーマとは何か?

「ブロックベーステーマ」は、完全にブロックで構成されたテンプレートを持つ WordPress テーマです。「page」「post」など異なる投稿タイプのコンテンツに加え、サイトのすべてのエリア、ヘッダー、フッター、サイドバー等をブロックエディターで編集できます。

## ブロックベーステーマの構造は?

シンプルなブロックベーステーマは次のような構造になります。

```
theme
|__ style.css
|__ functions.php
|__ block-templates
    |__ index.html
    |__ single.html
    |__ archive.html
    |__ ...
|__ block-template-parts
    |__ header.html
    |__ footer.html
    |__ sidebar.html
    |__ ...
```

既存の WordPress テーマとの違いは、テンプレート階層内の異なるテンプレート、およびテンプレートパーツがこれまでの PHP ファイルでなく、「ブロックテンプレート」である点です。

## ブロックテンプレートとは何か?

「ブロックテンプレート」は、一連のブロックから構成されます。あらゆる WordPress ブロックをブロックテンプレート内で使用できます。また、テンプレートは、「テンプレートパーツ」を使用してコンテンツの一部を再利用できます。たとえば、すべてのブロックテンプレートに、個別のテンプレートパート「header.html」から同じヘッダーを含めることができます。

以下はブロックテンプレートの例です:

```html
<!-- wp:site-title /-->

<!-- wp:image {"sizeSlug":"large"} -->
<figure class="wp-block-image size-large">
	<img src="https://cldup.com/0BNcqkoMdq.jpg" alt="" />
</figure>
<!-- /wp:image -->

<!-- wp:group -->
<div class="wp-block-group">
	<div class="wp-block-group__inner-container">
		<!-- wp:post-title /-->
		<!-- wp:post-content /-->
	</div>
</div>
<!-- /wp:group -->

<!-- wp:group -->
<div class="wp-block-group">
	<div class="wp-block-group__inner-container">
		<!-- wp:heading -->
		<h2>Footer</h2>
		<!-- /wp:heading -->
	</div>
</div>
<!-- /wp:group -->
```

<!--
## How to write and edit these templates?

Ultimately, any WordPress user with the correct capabilities (example: `administrator` WordPress role) will be able to access these templates in the WordPress admin, edit them in dedicated views and potentially export them as a theme.

In the current iteration (at the time of writing this doc), you can navigate to the temporary "Templates" admin menu under "Appearance" `wp-admin/edit.php?post_type=wp_template` and use this as a playground to edit your templates.

When ready, switch to the code editor mode and grab the HTML of the template from there and put it in the right file in your theme directory.

## Templates CPT

If you save the templates directly from the temporary Templates admin menu, you'll be able to override your theme's templates.

Example: By using **single** as the title for your template and saving it, this saved template will take precedence over your theme's `single.html` file.

Note that it won't take precedence over any of your theme's templates with higher specificity in the template hierarchy. Resolution goes from most to least specific, looking first for a CPT post and then for a theme template, at each level.

## Theme Blocks

Some blocks have been made specifically for block-based themes. For example, you'll most likely use the **Site Title** block in your site's header while your **single** block template will most likely include a **Post Title** and a **Post Content** block.

As we're still early in the process, the number of blocks specifically dedicated to these block templates is relatively small but more will be added as we move forward with the project.

## Styling

One of the most important aspects of themes (if not the most important) is the styling. While initially you'll be able to provide styles and enqueue them using the same hooks themes have always used, this is an area that is still [being explored](https://github.com/WordPress/gutenberg/issues/9534).

## Resources

- [Full Site Editing](https://github.com/WordPress/gutenberg/labels/%5BFeature%5D%20Full%20Site%20Editing) label.
-->
## テンプレートの書き方と編集方法は ?

最終的には、適切な権限、例えば管理者権限を持つすべての WordPress ユーザーが管理画面からテンプレートにアクセスし、専用のビューで編集し、テーマとしてエクスポートできるようになります。

この文書を書いている段階の現在のイテレーションでは、「外観」下の一時的な管理メニュー「Templates」 wp-admin/edit.php?post_type=wp_template に移動してテンプレートを編集できます。

編集を終えたら、「コードエディター」モードに切り替え、テンプレートの HTML をコピーして、テーマディレクトリ内の正しいファイルに貼り付けます。

## テンプレートカスタム投稿タイプ

一時的な Templates 管理メニューから直接テンプレートを保存すると、テーマのテンプレートを上書きできます。

例: テンプレートのタイトルに「single」を使用して保存すると、保存されたテンプレートはテーマの single.html ファイルよりも優先されます。

注意: テンプレート階層で高位にあるテーマのテンプレートには優先しません。テンプレート解決は、詳細なテンプレートから簡単なテンプレートへ、各レベルで、まずカスタム投稿タイプの投稿、次にテーマテンプレートを探します。

## テーマブロック

ブロックベーステーマ専用のブロックがいくつかあります。たとえばサイトのヘッダーでは「サイトタイトルブロック」(Site Title block) を使用できます。単一のブロックテンプレートでは「投稿タイトルブロック」(Post Title block) や「投稿コンテンツブロック」(Post Content block)を含めることができます。

まだプロジェクトの初期段階のため、ブロックテンプレートに特化したブロックの数は少なめですが、プロジェクトが進むに連れ、ブロックの数は増えていくはずです。

## スタイリング

テーマのもっとも重要、でなければ重要な要素の1つは、スタイリングです。当面はスタイルを準備し、テーマが通常行うのと同じフックを使用してエンキューできるようになります。この部分は現在も調査中です。

## リソース

- [Full Site Editing](https://github.com/WordPress/gutenberg/labels/%5BFeature%5D%20Full%20Site%20Editing) ラベル
