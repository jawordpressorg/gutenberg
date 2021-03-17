<!-- 
# Introduction to the Format API
 -->
# フォーマット API 入門

<!-- 
The purpose of this tutorial is to introduce you to the Format API. The Format API makes it possible for developers to add custom buttons to the formatting toolbar and have them apply a _format_ to a text selection. Bold is an example of a standard button in the formatting toolbar.

In WordPress lingo, a _format_ is a [HTML tag with text-level semantics](https://www.w3.org/TR/html5/textlevel-semantics.html#text-level-semantics-usage-summary) used to give some special meaning to a text selection. For example, in this tutorial, the button to be hooked into the format toolbar will let users wrap a particular text selection with the [`<samp>` HTML tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp).

If you are unfamiliar with how to work with WordPress plugins and JavaScript, you may want to check the [JavaScript Tutorial](/docs/how-to-guides/javascript/README.md) first.
 -->
このチュートリアルではフォーマット API を紹介します。フォーマット API を使用すると開発者は、フォーマットツールバーにカスタムボタンを追加し、選択したテキストに対して「フォーマット」を適用できます。たとえば「太字」は、フォーマットツールバーの標準ボタンの一例です。

WordPress の世界で「フォーマット」とは、[テキストレベルのセマンティクスでの HTML タグ](https://www.w3.org/TR/html5/textlevel-semantics.html#text-level-semantics-usage-summary)を指します。選択したテキストに特別な意味を与えられます。たとえばこのチュートリアルでフォーマットツールバーにフックされるボタンは選択したテキストを [`<samp>` HTML タグ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp)でラップします。

WordPress プラグインと javaScript に馴染みのない方はまず [JavaScript チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/tutorials/javascript/)を参照してください。

<!-- 
## Table of Contents
 -->
## 目次

<!-- 
1. [Register a new format](/docs/how-to-guides/format-api/1-register-format.md)
2. [Add a button to the toolbar](/docs/how-to-guides/format-api/2-toolbar-button.md)
3. [Apply the format when the button is clicked](/docs/how-to-guides/format-api/3-apply-format.md)
 -->
1. [新しいフォーマットの登録 ](https://ja.wordpress.org/team/handbook/block-editor/tutorials/format-api/1-register-format/)
2. [ツールバーへのボタンの追加](https://ja.wordpress.org/team/handbook/block-editor/tutorials/format-api/2-toolbar-button/)
3. [ボタンのクリックでフォーマットを適用する](https://ja.wordpress.org/team/handbook/block-editor/tutorials/format-api/3-apply-format/)
