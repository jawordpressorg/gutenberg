<!--
# Anatomy of a Block
 -->
# ブロックの詳細
<!--
At its simplest, a block in the WordPress block editor is a JSON object with a specific set of properties.

<div class="callout callout-info">
<strong>Note:</strong> Block development uses ESNext syntax, this refers to the latest JavaScript standard. If this is unfamiliar, review the <a href="https://developer.wordpress.org/block-editor/how-to-guides/javascript/esnext-js/">ESNext syntax documentation</a> to familiarize yourself with the newer syntax.
</div>

Here is the complete code for registering a block:
The javascript part is done in the `src/index.js` file.
 -->
WordPress ブロックエディターの「ブロック」は、一言で言えば、規定のプロパティ集合をもった JSON オブジェクトです。

**注意:** ブロックの開発では最新の JavaScript 標準に従った ESNext 構文を使用します。わからない場合は [ESNext 構文ドキュメント](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/esnext-js/) を参照して、モダンな JavaScript 開発で使用される新しい構文に親しんでください。

JavaScript 部分は `src/index.js` ファイル内にあります。

```js
import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save,
} );
```
<!--
The first parameter in the **registerBlockType** function is the block name, this should match exactly to the name registered in the PHP file.

The second parameter to the function is the block object. See the [block registration documentation](/docs/reference-guides/block-api/block-registration.md) for full details.
 -->
**registerBlockType** 関数の最初のパラメータはブロック名です。PHP ファイルで登録された名前と完全に一致する必要があります。

2番目のパラメータはブロックオブジェクトです。詳細な説明は [ブロックの登録ドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/) を参照してください。

<!--
The last two block object properties are **edit** and **save**, these are the key parts of a block. Both properties are functions that are included via the import above.
 -->
最後の2つのブロックオブジェクトプロパティは **edit** と **save** です。これらはブロックのメインのパーツです。どちらのプロパティも上の import で取り込まれる関数です。

<!--
The results of the edit function is what the editor will render to the editor page when the block is inserted.
 -->
edit 関数の結果は、エディターにブロックを挿入した際の、ブロックのレンダリング結果になります。

<!--
The results of the save function is what the editor will insert into the **post_content** field when the post is saved. The post_content field is the field in the WordPress database used to store the content of the post.
 -->
save 関数の結果は、投稿が保存された際に、エディターが **post_content** フィールドに挿入するブロックの形になります。post_content フィールドは投稿のコンテンツを保存する、WordPress データベース内のフィールドです。

<!--
Most of the properties are set in the `src/block.json` file.
 -->
ほとんどのプロパティは、`src/block.json` ファイルで設定されます。

```json
{
	"$schema": "https://schemas.wp.org/trunk/block.json",
	"apiVersion": 2,
	"name": "create-block/gutenpride",
	"version": "0.1.0",
	"title": "Gutenpride",
	"category": "text",
	"icon": "flag",
	"description": "A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.",
	"supports": {
		"html": false
	},
	"textdomain": "gutenpride",
	"editorScript": "file:./index.js",
	"editorStyle": "file:./index.css",
	"style": "file:./style-index.css"
}
```

<!--
The **title** is the title of the block shown in the Inserter and in other areas of the editor.
 -->
**title** は、インサーターやエディターの他のエリアで表示される、ブロックのタイトルです。

<!--
The **icon** is the icon shown in the Inserter. The icon property expects any Dashicon name as a string, see [list of available icons](https://developer.wordpress.org/resource/dashicons/). You can also provide an SVG object, but for now it's easiest to just pick a Dashicon name.
 -->
**icon** は、インサーターで表示されるアイコンです。icon プロパティは文字列として Dashicon の名前を取ります。[利用可能なアイコンリスト](https://developer.wordpress.org/resource/dashicons/) を参照してください。SVG オブジェクトを渡すこともできますが、ここでは簡単のために Dashicon 名を選択します。

<!--
The **category** specified is a string and must be one of: "common, formatting, layout, widgets, or embed". You can create your own custom category name, [see documentation for details](/docs/reference-guides/filters/block-filters.md#managing-block-categories).
 -->
**category** には common、formatting、layout、widgets、embed のどれかの文字列を指定します。カスタムカテゴリーを作成することもできます。詳細については[ドキュメント](https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#managing-block-categories)を参照してください。

<!--
## Internationalization
 -->
## 国際化

<!--
If you look at the generated `src/save.js` file, the block title and description are wrapped in a function that looks like this:
 -->
生成された `src/save.js` ファイルを見るとブロックのタイトルや説明が次のような関数で囲まれています。

```js
__( 'Gutenpride – hello from the saved content!', 'gutenpride' );
```
<!--
This is an internationalization wrapper that allows for the string "Gutenpride" to be translated. The second parameter, "gutenpride" is called the text domain and gives context for where the string is from. The JavaScript internationalization, often abbreviated i18n, matches the core WordPress internationalization process. See the [Internationalization in Plugin Developer Handbook](https://developer.wordpress.org/plugins/internationalization/) for more details.

Next Section: [Block Attributes](/docs/getting-started/create-block/attributes.md)
 -->
これは国際化ラッパーで、文字列「Gutenpride」を翻訳することができます。2番目のパラメータ「gutenpride」はテキストドメインと呼ばれ、翻訳対象の文字列がどこから来たかのコンテキストを提供します。JavaScript の国際化はコアの WordPress の国際化プロセスと同じです。詳細については [WordPress の国際化 ドキュメント](https://developer.wordpress.org/plugins/internationalization/) を参照してください。

次のセクション: [ブロックの属性](https://ja.wordpress.org/team/handbook/block-editor/getting-started/create-block/block-attributes/)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/create-block/block-anatomy.md)
