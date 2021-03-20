<!-- 
# Blocks
 -->
# ブロック

<!-- 
The purpose of this tutorial is to step through the fundamentals of creating a new block type. Beginning with the simplest possible example, each new section will incrementally build upon the last to include more of the common functionality you could expect to need when implementing your own block types.

To follow along with this tutorial, you can [download the accompanying WordPress plugin](https://github.com/WordPress/gutenberg-examples) which includes all of the examples for you to try on your own site. At each step along the way, experiment by modifying the examples with your own ideas, and observe the effects they have on the block's behavior.

Code snippets are provided in two formats "ES5" and "ESNext". ES5 refers to "classic" JavaScript (ECMAScript 5), while ESNext refers to the next versions of the language standard, plus JSX syntax. You can change between them using tabs found above each code example. Using ESNext, does require you to run [the JavaScript build step](/docs/how-to-guides/javascript/js-build-setup/) to compile your code to a browser compatible format.

Note that it is not required to use ESNext to create blocks or extend the editor, you can use classic JavaScript. However, once familiar with ESNext, developers find it is easier to read and write, thus most code examples you'll find use the ESNext syntax.
 -->
このチュートリアルでは、新しいブロックタイプを作成する基本の流れを紹介します。できるだけシンプルな例から始め、各セクションではその前のセクションに対してブロックタイプの実装で必要となる一般的な機能を追加していきます。

このチュートリアルの[サンプル WordPress プラグインをダウンロード](https://github.com/WordPress/gutenberg-examples)できます。サンプルには実際にサイトで試すことができるプラグインが含まれています。手順を確認しながらサンプルを自由に拡張して、ブロックの動きに与える効果を確認しましょう。

ドキュメント内のサンプルコードは 「ESS」と「ESNext」の2つの形式で紹介します。「ESS」は従来の JavaScript (ECMAScript 5) であり、「ESNext」は次期バージョンの言語仕様に JSX 構文を加えたものです。ESNext のコードを使用するにはブラウザーが対応可能な形式にコンパイルするため、[JavaScript ビルド手順](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/js-build-setup/) の実行が必要です。

注意: ブロックの作成やエディターの拡張に「ESNext」は必須ではなく、従来の JavaScript でも可能です。ただし ESNext に親しむと開発者はコードの読み書きがラクになります。このためほとんどのサンプルでは ESNext 構文を使用しています。

## 目次
1. [初めてのブロックタイプ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/)
2. [スタイルシートによるスタイルの適用](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/applying-styles-with-stylesheets/)
3. [属性と編集可能フィールド ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields/)
4. [ブロックコントロール: ブロックツールバーと設定サイドバー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/block-controls-toolbar-and-sidebar/)
5. [ダイナミックブロックの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/)
6. [WP-CLI を使用したブロックの生成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/generate-blocks-with-wp-cli/)
7. [ネストしたブロック: InnerBlocks の使用](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/block-tutorial/README.md)
