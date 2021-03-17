<!--
# Developer Documentation
-->
<!-- 
# 開発者ドキュメント
 -->
<!-- 
# How-to Guides
 -->
# ハウツーガイド

<!--
The new editor is highly flexible, like most of WordPress. You can build custom blocks, modify the editor's appearance, add special plugins, and much more.
-->
新しいエディターは WordPress と同じように非常にフレキシブルです。カスタムブロックを作成したり、エディターの外観を変更したり、特別なプラグインを追加することができます。

<!--
## Creating Blocks

The editor is about blocks, and the main extensibility API is the Block API. It allows you to create your own static blocks, [Dynamic Blocks](/docs/how-to-guides/block-tutorial/creating-dynamic-blocks.md) ( rendered on the server ) and also blocks capable of saving data to Post Meta for more structured content.

If you want to learn more about block creation, see the [Create a Block tutorial](/docs/getting-started/tutorials/create-block/README.md) for the best place to start.
-->
## ブロックの作成

エディターは「ブロック」であり、主な拡張 API は「ブロック API」です。ブロック API を使用してユーザーは静的ブロックやサーバー側でレンダリングされる[動的ブロック](https://ja.wordpress.org/team/handbook/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/)を作成できます。またブロックは構造化されたコンテンツのため投稿メタにデータを保存できます。

ブロックの作成について学習するには、まずはじめに [ブロックの作成 チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/tutorials/create-block/) を参照してください。

<!--
## Extending Blocks

It is also possible to modify the behavior of existing blocks or even remove them completely using filters.

Learn more in the [Block Filters](/docs/reference-guides/filters/block-filters.md) section.
-->
## ブロックの拡張

フィルターを使用して既存のブロックの振る舞いを変更したり完全に削除することができます。

詳細は [ブロックフィルター](https://developer.wordpress.org/block-editor/designers-developers/developers/filters/block-filters/) セクションを参照してください。

<!--
## Extending the Editor UI

Extending the editor UI can be accomplished with the `registerPlugin` API, allowing you to define all your plugin's UI elements in one place.

Refer to the [Plugins](/packages/plugins/README.md) and [Edit Post](/packages/edit-post/README.md) section for more information.

You can also filter certain aspects of the editor; this is documented on the [Editor Filters](/docs/reference-guides/filters/editor-filters.md) page.
-->
## エディター UI の拡張

エディター UI の拡張は `registerPlugin` API で可能です。すべてのプラグインの UI 要素を1箇所で定義できます。

詳細については [プラグイン](https://developer.wordpress.org/block-editor/designers-developers/developers/packages/packages-plugins/) および [投稿の編集](https://developer.wordpress.org/block-editor/designers-developers/developers/packages/packages-edit-post/) セクションを参照してください。

エディターのいくつかの部分はフィルタリングできます。詳細については [エディターフィルター](https://developer.wordpress.org/block-editor/designers-developers/developers/filters/editor-filters/) ページを参照してください。

<!--
## Meta Boxes

Porting PHP meta boxes to blocks or sidebar plugins is highly encouraged, learn how through these [meta data tutorials](/docs/how-to-guides/metabox/README.md).

See how the new editor [supports existing Meta Boxes](/docs/reference-guides/backward-compatibility/meta-box.md).
-->
## メタボックス

PHP メタボックスからブロックやサイドバープラグインへのポーティングは強く奨励されます。詳細については [メタボックスチュートリアル](https://ja.wordpress.org/team/handbook/block-editor/tutorials/metabox/) を参照してください。

新しいエディターがどのように既存のメタボックスをサポートするかについては、[こちらの文書](https://developer.wordpress.org/block-editor/designers-developers/developers/backward-compatibility/meta-box/) を参照してください。

<!-- 
## Theme Support

By default, blocks provide their styles to enable basic support for blocks in themes without any change. Themes can add/override these styles, or rely on defaults.

There are some advanced block features which require opt-in support in the theme. See [theme support](/docs/how-to-guides/themes/theme-support.md).
-->
## テーマサポート

ブロックにはデフォルトでスタイルが提供され、カスタマイズなしでもテーマ内で適切に表示されます。テーマはこのスタイルを追加したり上書きしたり、あるいはデフォルトのままにしておくことができます。

テーマ内でのオプトインサポートが必要な高度なブロック機能があります。[テーマサポート](https://developer.wordpress.org/block-editor/designers-developers/developers/themes/theme-support/) を参照してください。

<!--
## Autocomplete

Autocompleters within blocks may be extended and overridden. Learn more about the [autocomplete](/docs/reference-guides/filters/autocomplete-filters.md) filters.
-->
## オートコンプリート

ブロック内のオートコンプリートは拡張したり、上書きできます。詳細については [オートコンプリート](https://developer.wordpress.org/block-editor/designers-developers/developers/filters/autocomplete-filters/) フィルターを参照してください。

<!--
## Block Parsing and Serialization

Posts in the editor move through a couple of different stages between being stored in `post_content` and appearing in the editor. Since the blocks themselves are data structures that live in memory it takes a parsing and serialization step to transform out from and into the stored format in the database.

Customizing the parser is an advanced topic that you can learn more about in the [Extending the Parser](/docs/reference-guides/filters/parser-filters.md) section.
-->
## ブロックのパースとシリアライゼーション

エディター内のテキストは、`post_content` への保存とエディターでの表示との間でいくつかの異なるステージを経由します。ブロック自体はメモリー内に存在するデータ構造のため、データベース内の保存形式との間でパースやシリアライゼーションが必要です。

パーサーのカスタマイズは高度なトピックになります。詳細については [パーサーの拡張](https://developer.wordpress.org/block-editor/designers-developers/developers/filters/parser-filters/) セクションを参照してください。

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/README.md)
