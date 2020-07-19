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

As of Gutenberg 8.5, there are two ways to create and edit templates within Gutenberg. 

### Edit templates within The "Appearance" section of WP-Admin

You can navigate to the temporary "Templates" admin menu under "Appearance" `wp-admin/edit.php?post_type=wp_template` and use this as a playground to edit your templates. Add blocks here and switch to the code editor mode to grab the HTML of the template when you are done. Afterwards, you can paste that markup into a file within in your theme directory.

Please note that the "Templates" admin menu under "Appearance" will _not_ list templates that are bundled with your theme. It only lists new templates created by the specific WordPress site you're working on. 

### Edit Templates within the Full-site Editor

To begin, create a blank template file within your theme. For example: `mytheme/block-templates/index.html`. Afterwards, open the Full-site editor. Your new template should appear as the active template, and should be blank. Add blocks as you normally would using Gutenberg. You can add and create template parts directly using the "Template Parts" block. 

Repeat for any additional templates you'd like to bundle with your theme. 

When you're done, click the "Export Theme" option in the "Tools" (ellipsis) menu of the site editor. This will provide you with a ZIP download of all the templates and template parts you've created in the site editor. These new HTML files can be placed directly into your theme. 

Note that when you export template parts this way, the template part block markup will include a `postID` attribute that can be safely removed when distributing your theme. 

## Templates CPT

If you save the templates directly from the temporary Templates admin menu, you'll be able to override your theme's templates.

Example: By using **single** as the title for your template and saving it, this saved template will take precedence over your theme's `single.html` file.

Note that it won't take precedence over any of your theme's templates with higher specificity in the template hierarchy. Resolution goes from most to least specific, looking first for a CPT post and then for a theme template, at each level.

## Theme Blocks

Some blocks have been made specifically for block-based themes. For example, you'll most likely use the **Site Title** block in your site's header while your **single** block template will most likely include a **Post Title** and a **Post Content** block.

As we're still early in the process, the number of blocks specifically dedicated to these block templates is relatively small but more will be added as we move forward with the project. As of Gutenberg 8.5, the following blocks are currently available: 

- Site Title
- Template Part
- Query
- Query Loop
- Query Pagination
- Post Title
- Post Content
- Post Author
- Post Comments
- Post CommentsCount
- Post CommentsForm
- Post Date
- Post Excerpt
- Post Featured Image
- Post Tags

## Styling

One of the most important aspects of themes (if not the most important) is the styling. While initially you'll be able to provide styles and enqueue them using the same hooks themes have always used, this is an area that is still [being explored](https://github.com/WordPress/gutenberg/issues/9534).
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

<!--
## Resources

- [Full Site Editing](https://github.com/WordPress/gutenberg/labels/%5BFeature%5D%20Full%20Site%20Editing) label.
- [Theme Experiments](https://github.com/WordPress/theme-experiments) repository, full of block-based theme examples created by the WordPress community.
-->
## リソース

- [Full Site Editing](https://github.com/WordPress/gutenberg/labels/%5BFeature%5D%20Full%20Site%20Editing) ラベル
- [Theme Experiments](https://github.com/WordPress/theme-experiments) コミュニティで作成されたブロックベーステーマテンプレート用のリポジトリ

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/themes/block-based-themes.md)
