<!-- 
# Blocks
 -->
# ブロック

<!-- 
The purpose of this tutorial is to step through the fundamentals of creating a new block type. Beginning with the simplest possible example, each new section will incrementally build upon the last to include more of the common functionality you could expect to need when implementing your own block types.

To follow along with this tutorial, you can [download the accompanying WordPress plugin](https://github.com/WordPress/gutenberg-examples) which includes all of the examples for you to try on your own site. At each step along the way, experiment by modifying the examples with your own ideas, and observe the effects they have on the block's behavior.

Code snippets are provided in two formats "JSX" and "Plain". JSX refers to JavaScript code that uses JSX syntax which requires a build step. Plain refers to "classic" JavaScript that does not require building. You can change between them using tabs found above each code example. Using JSX, does require you to run [the JavaScript build step](/docs/how-to-guides/javascript/js-build-setup/) to compile your code to a browser compatible format.

Note that it is not required to use JSX to create blocks or extend the editor, you can use classic JavaScript. However, once familiar with JSX and the build step, many developers tend to find it is easier to read and write, thus most code examples you'll find use the JSX syntax.

 -->
このチュートリアルでは、新しいブロックタイプを作成する基本の流れを紹介します。できるだけシンプルな例から始め、各セクションではその前のセクションに対してブロックタイプの実装で必要となる一般的な機能を追加していきます。

このチュートリアルの[サンプル WordPress プラグインをダウンロード](https://github.com/WordPress/gutenberg-examples)できます。サンプルには実際にサイトで試すことができるプラグインが含まれています。手順を確認しながらサンプルを自由に拡張して、ブロックの動きに与える効果を確認しましょう。

ドキュメント内のサンプルコードは 「JSX」と「Plain」の2つの形式で紹介します。「JSX」は、JSX 構文を使用し、ビルドの必要な JavaScript コードを指します。「Plain」は、ビルドの不要な「クラシック」な JavaScript を指します。JSX のコードを使用するにはブラウザーが対応可能な形式にコンパイルするため、[JavaScript ビルド手順](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/js-build-setup/) の実行が必要です。

注意: ブロックの作成やエディターの拡張に「JSX」は必須ではなく、従来の JavaScript でも可能です。ただし JSX とビルド手順 に親しむと開発者はコードの読み書きがラクになります。このためほとんどのサンプルでは JSX 構文を使用しています。

## 目次
1. [初めてのブロックタイプ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/)
2. [スタイルシートによるスタイルの適用](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/applying-styles-with-stylesheets/)
3. [属性と編集可能フィールド ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields/)
4. [ブロックコントロール: ブロックツールバーと設定サイドバー](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/block-controls-toolbar-and-sidebar/)
5. [ダイナミックブロックの作成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/)
6. [WP-CLI を使用したブロックの生成](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/generate-blocks-with-wp-cli/)
7. [ネストしたブロック: InnerBlocks の使用](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/block-tutorial/README.md)
