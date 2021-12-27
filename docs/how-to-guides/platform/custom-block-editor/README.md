<!--
# Building a custom block editor
 -->
# カスタムブロックエディターの構築

<!--
The purpose of [this tutorial](/docs/reference-guides/platform/custom-block-editor/tutorial.md) is to step through the fundamentals of creating a custom instance of a "block editor".
 -->
[このチュートリアル](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/platform/custom-block-editor/tutorial/)では「ブロックエディター」のカスタムインスタンスを作成する基礎を順に説明します。

<!--
![alt text](https://wordpress.org/gutenberg/files/2020/03/editor.png 'The Standalone Editor instance populated with example Blocks within a custom WP Admin page.')
 -->
![alt text](https://wordpress.org/gutenberg/files/2020/03/editor.png "カスタム WordPress 管理画面の中にサンプルのブロックを持つ、スタンドアロンエディターインスタンス")

<!--
The editor you will see in this tutorial (as above) is **_not_ the same Block Editor you are familiar with when creating Posts** in with WordPress. Rather it is an entirely **custom block editor instance** built using the lower-level [`@wordpress/block-editor`](https://developer.wordpress.org/block-editor/packages/packages-block-editor/) package (and friends).
 -->
上図のようにこのチュートリアルでのエディターは WordPress 内で **投稿を編集する際に見慣れたブロックエディターではありません**。下層レベルの [`@wordpress/block-editor`](https://developer.wordpress.org/block-editor/packages/packages-block-editor/) パッケージ (とその友だち) を使用して構築された完全な**カスタムブロックエディターインスタンス** です。


<!--
## Following this tutorial
 -->
## このチュートリアルを試すには
<!--
To follow along with this tutorial, you can [download the accompanying WordPress plugin](https://github.com/getdave/standalone-block-editor) which includes all of the examples for you to try on your own site.
 -->
このチュートリアルを試すには[付属のWordPress プラグイン](https://github.com/getdave/standalone-block-editor) をダウンロードしてください。サイトで試せるすべてのサンプルが含まれています。
<!--
## Code Syntax
 -->
## コード構文

<!-- 
Code snippets are provided using JSX syntax. Note it is not required to use JSX to create blocks or extend the editor, you can use plain JavaScript. However, once familiar with JSX, many developers tend find it is easier to read and write, thus most code examples you'll find use that syntax.
 -->
コード例は JSX 構文で示されます。注意: ブロックの作成やエディターの拡張に  JSX の使用は必須ではありません。従来の Plain な JavaScript も使えます。しかし、いったん JSX に慣れると、多くの開発者にとっては読むのも書くのもラクなため、紹介するほとんどのコード例は JSX 構文を使用します。

<!--
-   [Start custom block editor tutorial](/docs/reference-guides/platform/custom-block-editor/tutorial.md)
 -->
- [カスタムブロックエディターチュートリアルを始める](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/platform/custom-block-editor/tutorial/)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/platform/custom-block-editor/README.md)

