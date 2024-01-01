<!--
# Theming for the Block Editor
 -->
<!--
# ブロックエディター対応のテーマ
 -->
<!--
The new editor provides a number of options for theme designers and developers, including theme-defined color settings, font size control, and much more.

In this section, you'll learn about the ways that themes can customize the editor.
 -->
<!--
新しいエディターには、テーマ定義の色設定やサイズコントロールなどテーマデザイナーやテーマ開発者のためのオプションが多数あります。

このセクションではテーマからエディターをカスタマイズする方法について解説します。
 -->
<!--
# Themes
 -->
# テーマ

*(2022/5/2) 訳注: このセクションの多くが、[Theme Developer Handbook](https://developer.wordpress.org/themes/block-themes/) に移動されました。便宜上、しばらく訳文を掲載しますが、最新の情報については、[Theme Developer Handbook](https://developer.wordpress.org/themes/block-themes/) を参照してください。*

<!--
The block editor provides a number of options for theme designers and developers, including theme-defined color settings, font size control, and much more.
The block editor provides a number of options for theme designers and developers, to interact with it, including theme-defined color settings, font size control, and much more.
 -->
ブロックエディターには、テーマデザイナーやテーマ開発者がエディターと対話するためのオプションが多数あります。これにはテーマで定義する、色設定やサイズコントロール等が含まれます。
<!-- 
## Types of themes
 -->
## テーマの種類

<!-- 
### Classic theme
 -->
### クラシックテーマ

<!-- 
In terms of block editor terminology this is any theme that defines its templates in the traditional `.php` file format, and that doesn't have an `index.html` format template in the `/block-templates` or `/templates` folders. A `Classic` theme has the ability to provide configuration and styling options to the block editor, and block content, via [Theme Supports](/docs/how-to-guides/themes/theme-support.md), or by including a [theme.json](/docs/how-to-guides/themes/global-settings-and-styles.md) file. A theme does not have to be a `Block` theme in order to take advantage of some of the flexibility provided by the use of a `theme.json` file.
 -->
ブロックエディターの用語として「クラシックテーマ」は、伝統的な `.php` ファイル形式でテンプレートを定義し、`/block-templates` または `/templates` フォルダ内に `index.html` 形式のテンプレートを持たないテーマを指します。クラシックテーマは、[テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/) や [theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/global-settings-and-styles/) ファイルを介して、ブロックエディタやブロックコンテンツに構成やスタイルオプションを提供する機能があります。ブロックテーマでないテーマでも `theme.json` ファイルの使用により得られる柔軟性の一部を利用できます。

<!-- 
### Block theme
 -->
### ブロックテーマ

<!-- 
This is any theme that has, at a minimum, an `index.html` format template in the `/block-templates` or `/templates` folders, and with templates  provided in form of block content markup. While many `Block` themes will make use of a `theme.json` file to provide configuration and styling settings, a `theme.json` is not a requirement of `Block` themes. The advantage of `Block` themes is that the block editor can be used to edit all areas of the site: headers, footers, sidebars, etc.
 -->
ブロックテーマは、少なくとも `/block-templates` または `/templates` フォルダに `index.html` 形式のテンプレートがあり、オプションで、ブロックコンテンツのマークアップ形式のテンプレートを提供するテーマです。多くのブロックテーマは `theme.json` ファイルを利用して、構成やスタイル設定を提供しますが、 `theme.json` はブロックテーマに必須ではありません。ブロックテーマの利点は、ヘッダー、フッター、サイドバーなど、サイト内のすべての領域をブロックエディタで編集できる点です。

<!-- 
### Full site editing (FSE)
 -->
### フルサイト編集 (Full site editing, FSE)

<!-- 
There isn't an FSE specific theme type. In WordPress > 5.9 FSE is enabled for any `Block` theme, ie. any theme that has an `index.html` format template in the `/block-templates` or `/templates` folders.
 -->
テーマの種類に、「フルサイト編集」に特化したものはありません。WordPress 5.9以上では、`Block` テーマ、つまり `/block-templates` または `/templates` フォルダに `index.html` 形式のテンプレートを持つすべてのテーマで、フルサイト編集は有効です。

<!--
**Contents**
 -->
**コンテンツ**

<!--
- [Global Settings (theme.json)](/docs/how-to-guides/themes/global-settings-and-styles.md)
- [Theme Support](/docs/how-to-guides/themes/theme-support.md)
 -->
- [グローバル設定 (theme.json)](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/global-settings-and-styles)
- [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/themes/README.md)
