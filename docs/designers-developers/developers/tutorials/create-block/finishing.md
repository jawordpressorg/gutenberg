<!-- 
# Finishing Touches
 -->
# 最後の仕上げ
<!-- 
This tutorial covers general concepts and structure for creating basic blocks.
 -->
このチュートリアルでは基本的なブロック作成のコンセプト全般と構造を説明しました。

<!-- 
## Additional Components
 -->
## 追加のコンポーネント
<!-- 
The block editor provides a [components package](/packages/components/README.md) which contains numerous prebuilt components you can use to build your block.

You can visually browse the components and what their implementation looks like using the Storybook tool published at [https://wordpress.github.io/gutenberg](https://wordpress.github.io/gutenberg).
 -->
ブロックエディターでは [コンポーネントパッケージ](https://ja.wordpress.org/team/handbook/block-editor/components/) を提供しています。ブロックを作成する際に利用可能な多くのビルド済みコンポーネントが含まれています。

コンポーネントやその実装がどのように見えるかは [https://wordpress.github.io/gutenberg](https://wordpress.github.io/gutenberg で公開されている Storybook ツールを使用してビジュアルに確認できます。
<!-- 
## Additional Tutorials
 -->
## 追加のチュートリアル
<!-- 
The **RichText component** allows for creating a richer input besides plain text, allowing for bold, italic, links, and other inline formating. See the [RichText Reference](/docs/designers-developers/developers/richtext.md) for documentation using this component.

The InspectorPanel (the settings on the right for a block) and Block Controls (toolbar controls) have a standard way to be implemented. See the [Block controls tutorial](/docs/designers-developers/developers/tutorials/block-tutorial/block-controls-toolbar-and-sidebar.md) for additional information.
 -->
**RichText コンポーネント** を使用すると通常のテキストだけでなく、太字、斜体、リンク、その他のインラインフォーマットも可能なリッチな入力フィールドを作成できます。このコンポーネントの使い方については [RichText リファレンス](https://ja.wordpress.org/team/handbook/block-editor/developers/richtext/) を参照してください。

ブロックの右側にある設定 InspectorPanel と、ツールバーコントロールのブロックコントロールには標準の実装方法があります。追加の情報については [ブロックコントロール チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/tutorials/block-tutorial/block-controls-toolbar-and-sidebar/) を参照してください。
<!-- 
The [Sidebar tutorial](/docs/designers-developers/developers/tutorials/sidebar-tutorial/plugin-sidebar-0.md) is a good resource on how to create a sidebar for your plugin.

Nested blocks, a block that contains additional blocks, is a common pattern used by various blocks such as Columns, Cover, and Social Links. The **InnerBlocks component** enables this functionality, see the [Using InnerBlocks documentation](/docs/designers-developers/developers/tutorials/block-tutorial/nested-blocks-inner-blocks.md).
 -->
プラグインのサイドバーを作成する際には [サイドバー チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/tutorials/plugin-sidebar-0/) が良いリソースになります。

追加のブロックを含むブロック「ネストしたブロック」はカラム、カバー、ソーシャルリンクなどさまざまなブロックで使用される共通パターンです。この機能を実装する **InnerBlocks コンポーネント** については [InnerBlocks の使用 ドキュメント](https://ja.wordpress.org/team/handbook/block-editor/tutorials/block-tutorial/nested-blocks-inner-blocks/) を参照してください。
<!-- 
## How did they do that
 -->
## Gutenberg チームはどうやっているのかを調べる
<!-- 
One of the best sources for information and reference is the Block Editor itself, all the core blocks are built the same way. A good way to learn how things are done is to find a core block code that does something close to what you are interested in and then using the same approach for your own block.

All core blocks source are in the [block library package on Github](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-library/src).
 -->
情報やリファレンスの中で最良のものの1つがブロックエディターのソースコード自身でしょう。すべてのコアブロックは同じ方法で構築されています。どのように実装されているのかを学ぶには自分の興味に近いコアブロックのコードを探し、同じアプローチを自分のブロックに対しても行うと良いでしょう。

すべてのコアブロックのソースは [Github 上のブロックライブラリーパッケージ](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-library/src) にあります。

[原文](https://github.com/WordPress/gutenberg/blob/HEAD/docs/designers-developers/developers/tutorials/create-block/finishing.md)
