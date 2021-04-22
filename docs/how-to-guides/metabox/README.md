<!--
# Meta Boxes
 -->
# メタボックス

<!--
Prior to the block editor, custom meta boxes were used to extend the editor. With the new editor there are new ways to extend, giving more power to the developer and a better experience for the authors. Porting older custom meta boxes to one of these new methods is encouraged as to create a more unified and consistent experience for those using the editor.

The new block editor does support most existing meta boxes, see [this backward compatibility article](/docs/reference-guides/backward-compatibility/meta-box.md) for more support details .

Here are two mini-tutorials for creating similar functionality to meta boxes in the block editor.
 -->
ブロックエディター以前のエディターを拡張する際にはカスタムメタボックスが使用されていました。新しいブロックエディターでは、開発者にさらなるパワーを与えユーザーにより良い体験を与える新しい拡張方法があります。古いカスタムメタボックスを新しい方法に移植することが推奨されています。エディターの使用において統一され一貫性のあるユーザー体験を生み出すことができます。

なお、新しいブロックエディターはほとんどの既存のメタボックスをサポートします。サポートの詳細については[この後方互換性に関する記事](/docs/designers-developers/developers/backward-compatibility/meta-box.md)を参照してください。

以下の2つの簡単なチュートリアルではブロックエディター内でメタボックスと同じ機能を作成します。

<!--
## Use Blocks to Store Meta

The first method is to use Blocks to store extra data with a post. The data is stored in a post meta field, similar to how meta boxes store information.

-   [Store Post Meta with a Block](/docs/how-to-guides/metabox/meta-block-1-intro.md)
 -->
## ブロックを使用したメタ情報の保存

最初の方法はブロックを使用して外部データを投稿に保存します。メタボックスが情報を保存する場合と同じくデータは投稿メタフィールドに保存されます。

- [投稿メタをブロックで保存](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/metabox/meta-block-1-intro/)

<!--
## Sidebar Plugin

If you are interested in working with the post meta outside the editor, check out the [Sidebar Tutorial](/docs/how-to-guides/sidebar-tutorial/plugin-sidebar-0.md/).
 -->
## サイドバープラグイン

エディターの外部で投稿メタを操作したい場合は、[サイドバーチュートリアル](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/plugin-sidebar-0/)を参照してください。

[参考](https://github.com/WordPress/gutenberg/blob/HEAD/docs/how-to-guides/metabox/README.md)
