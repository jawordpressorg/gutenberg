<!--
# Full Site Editing Templates
 -->
# フルサイト編集テンプレート

<!--
## Template and template part flows
 -->
## テンプレートとテンプレートパーツのフロー

<!--
<div class="callout callout-alert">
This is the documentation for the current implementation of the block templates and template parts themes. This is part of the Full Site Editing project. These features are still experimental in the plugin. “Experimental” means this is just an early implementation that is subject to potential drastic and breaking changes in iterations based on feedback from users, contributors, and theme authors.
</div>
 -->
> これは、現在実装されている、フルサイト編集プロジェクトの一部のブロックテンプレートとテンプレートパーツテーマに関するドキュメントです。この機能はプラグイン内でまだ「実験中」です。「実験中」とは、初期の実装であり、ユーザー、コントリビューター、テーマ作者からのフィードバックによりイテレーション中に、大規模で後方互換性のない変更の可能性があることを意味します。

<!--
This document will explain the internals of how templates and templates parts are rendered in the frontend and edited in the backend. For an introduction about block themes and Full site editing templates, refer to the [block theme documentation](/docs/how-to-guides/themes/block-theme-overview.md).
 -->
このドキュメントでは、テンプレートやテンプレートパーツがフロントエンドでどのようにレンダーされ、バックエンドでどのように編集されるかの内部構造を説明します。ブロックテーマとフルサイト編集テンプレートについての紹介は、[ブロックテーマのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/block-theme-overview/)を参照してください。

<!--
## Storage
 -->
## ストレージ

<!--
Just like the regular templates, the block templates live initially as files in the theme folder but the main difference is that the user can edit these templates in the UI in the Site Editor.
 -->
ブロックテンプレートは、通常のテンプレートと同様にテーマフォルダ内にファイルとして保存されています。大きな違いは、ユーザーがサイトエディター UI でプロックテンプレートを編集できる点です。

<!--
When a user edits a template (or template-part), the initial theme template file is kept as is but a forked version of the template is saved to the `wp_template` custom post type (or `wp_template_part` for template parts).
 -->
ユーザーがテンプレートやテンプレートパーツを編集すると、最初のテーマテンプレートファイルはそのまま維持されますが、テンプレートのフォークしたバージョンが `wp_template` カスタム投稿タイプ、テンプレートパーツの場合は `wp_template_part` に保存されます。

<!--
These capabilities mean that at any point in time, a mix of template files (from the theme) and CPT templates (the edited templates) are used to render the frontend of the site.
 -->
この機能により、サイトのフロントエンドのレンダーではいかなる時点でも、テーマからのテンプレートファイルと、編集したテンプレートであるカスタム投稿タイプのテンプレートが混在して使用されます。

<!--
## Synchronization
 -->
## 同期

<!--
In order to simplify the algorithm used to edit and render the templates from two different places, we performed an operation called "template synchronization".
 -->
2つの異なる場所からのテンプレートの編集とレンダーのアルゴリズムを単純化するため、「テンプレートの同期」操作が行われます。

<!--
The synchronization consists of duplicating the theme templates in the `wp_template` (and `wp_template_part`) custom templates with an `auto-draft` status. When a user edits these templates, the status is updated to `publish`.
 -->
同期は `wp_template` および `wp_template_part` カスタムテンプレート内のテーマテンプレートを `auto-draft` ステータスで複製することで行われます。ユーザーがこのテンプレートを編集すると、ステータスは `publish` に更新されます。

<!--
This means:
 -->
したがって、

<!--
-   The rendering/fetching of templates only need to consider the custom post type templates. It is not necessary to fetch the template files from the theme folder directly. The synchronization will ensure these are duplicated in the CPT.
-   Untouched theme templates have the `auto-draft` status.
-   Edited theme templates have the `publish` status.
 -->
-   テンプレートのレンダリングや取得は、カスタム投稿タイプのテンプレートのみを考慮すれば十分です。テーマフォルダからテンプレートファイルを直接取得する必要はありません。同期により、これらのファイルはカスタム投稿タイプに複製されます。
-   変更されていないテーマテンプレートは、`auto-draft` ステータスです。
-   編集されたテーマテンプレートは、`publish`ステータスです。

<!--
The synchronization is important for two different flows:
 -->
同期は、2つの異なるフローで重要です。

<!--
-   When editing the template and template parts, the site editor frontend fetches the edited and available templates through the REST API. This means that for all `GET` API requests performed to the `wp-templates` and `wp-template-parts` endpoint synchronization is required.
-   When rendering a template (sometimes referred to as "resolving a template"): this is the algorithm that WordPress follows to traverse the template hierarchy and find the right template to render for the current page being loaded.
-   When exporting a block theme, we need to export all its templates back as files. The synchronization is required to simplify the operation and only export the CPT templates.
 -->
-   テンプレートやテンプレートパーツを編集する際、サイトエディタのフロントエンドはREST API を使用して編集済みテンプレートや利用可能なテンプレートを取得します。したがって、`wp-templates` と `wp-template-parts` エンドポイントに対して実行されるすべての `GET` API リクエストに対して、同期が必要です。
-   テンプレートをレンダリングする際（「テンプレートの解決」とも呼ばれます）、これは、WordPressがテンプレート階層をたどって、現在読み込まれているページのレンダリングに適したテンプレートを見つけるアルゴリズムです。
-   ブロックテーマをエクスポートする際、ブロックテーマのすべてのテンプレートをファイルとしてエクスポートする必要があります。操作を単純化し、カスタム投稿タイプテンプレートのみのエクスポートのため同期が必要です。

<!--
## Switching themes
 -->
## テーマの切り換え

<!--
Since block themes make use of templates that can refer to each other and that can be saved to a custom post type, it becomes possible to mix templates and template parts from different themes. For example:
 -->
ブロックテーマでは、相互に参照可能なテンプレートや、カスタム投稿タイプに保存可能なテンプレートを利用しているため、異なるテーマのテンプレートやテンプレートパーツを混在できます。例えば、

<!--
-   A user might like the "header" template part of theme A and would like to use it in theme B.
-   A user might like the "contact" template from theme A and would like to use it in theme B.
 -->
-   テーマ A の「ヘッダー」テンプレートパーツが良いので、テーマ B で使用する。
-   テーマ A の「連絡先」テンプレートが良いので、テーマ B で使用する。

<!--
Enabling these flows will require well thought UIs and experience. For the current phase of Full-site editing, we're starting by forbidding these possibilities and making template and template-parts theme specific.
 -->
このフローを実現するには、よく考えられた UI と経験が必要です。現段階のフルサイト編集では、この可能性を禁止し、テンプレートとテンプレートパーツをテーマ別にすることから始めています。

<!--
That said, it is still important to keep track of where the template and template part come from initially. From which theme, it's based. We do so by saving a `theme` post meta containing the theme identifier for each template and template part CPT entry.
 -->
しかし、テンプレートやテンプレートパーツが元々どこから来たのか、どのテーマが基になっているかを残すことは重要です。このため、各テンプレートやテンプレートパーツのカスタム投稿タイプエントリのテーマ識別子を含む、 `theme` 投稿メタを保存しています。

<!--
In the future, we might consider allowing the user to mix template and template parts with different `theme` post meta values.
 -->
将来的には、異なる `theme` 投稿メタ値を持つテンプレートやテンプレートパーツの混在を検討することになると思います。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/explanations/architecture/full-site-editing-templates.md)
