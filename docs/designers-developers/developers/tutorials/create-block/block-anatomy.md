<!-- 
# Anatomy of a Block
 -->
# ブロックの詳細
<!-- 
At its simplest, a block in the WordPress block editor is a JavaScript object with a specific set of properties.

**Note:** Block development uses ESNext syntax, this refers to the latest JavaScript standard. If this is unfamiliar, I recommend reviewing the [ESNext syntax documentation](/docs/designers-developers/developers/tutorials/javascript/esnext-js.md) to familiarize yourself with the newer syntax used in modern JavaScript development.

Here is the complete code for registering a block:
 -->
WordPress ブロックエディターの「ブロック」は、一言で言えば、規定のプロパティ集合をもった JavaScript のオブジェクトです。

**注意:** ブロックの開発では最新の JavaScript 標準に従った ESNext 構文を使用します。わからない場合は [ESNext 構文ドキュメント](https://ja.wordpress.org/team/handbook/block-editor/tutorials/javascript/esnext-js/) を参照してモダンな JavaScript 開発で使用される新しい構文に親しんでください。

以下はブロックを登録する完全なコードです。

```js
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'create-block/gutenpride', {
	apiVersion: 2,
	title: 'Gutenpride',
	description: 'Example block.',
	category: 'widgets',
	icon: 'smiley',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	edit: () => {
		const blockProps = useBlockProps();
		return <div { ...blockProps }> Hello in Editor. </div>;
	},

	save: () => {
		const blockProps = useBlockProps.save();
		return <div { ...blockProps }> Hello in Save.</div>;
	},
} );
```
<!-- 
The first parameter in the **registerBlockType** function is the block name, this should match exactly to the name registered in the PHP file.

The second parameter to the function is the block object. See the [block registration documentation](/docs/designers-developers/developers/block-api/block-registration.md) for full details.
 -->
**registerBlockType** 関数の最初のパラメータはブロック名です。PHP ファイルで登録された名前と完全に一致する必要があります。 

2番目のパラメータはブロックオブジェクトです。詳細な説明は [ブロックの登録ドキュメント](https://ja.wordpress.org/team/handbook/block-editor/developers/block-api/block-registration/) を参照してください。
<!-- 
The **title** is the title of the block shown in the Inserter.

The **icon** is the icon shown in the Inserter. The icon property expects any Dashicon name as a string, see [list of available icons](https://developer.wordpress.org/resource/dashicons/). You can also provide an SVG object, but for now it's easiest to just pick a Dashicon name.

The **category** specified is a string and must be one of: "common, formatting, layout, widgets, or embed". You can create your own custom category name, [see documentation for details](/docs/designers-developers/developers/filters/block-filters.md#managing-block-categories). For this tutorial, I specified "widgets" as the category.
 -->
**title** はインサーターで表示されるブロックのタイトルです。

**icon** はインサーターで表示されるアイコンです。icon プロパティは文字列として Dashicon の名前を取ります。[利用可能なアイコンリスト](https://developer.wordpress.org/resource/dashicons/) を参照してください。SVG オブジェクトを渡すこともできますが、ここでは簡単のために Dashicon 名を選択します。

**category** には common、formatting、layout、widgets、embed のどれかの文字列を指定します。カスタムカテゴリーを作成することもできます。詳細については[ドキュメント](https://developer.wordpress.org/block-editor/developers/filters/block-filters/#managing-block-categories)を参照してください。このチュートリアルではカテゴリーとして「widgets」を指定します。
<!-- 
The last two block object properties are **edit** and **save**, these are the key parts of a block. Both properties should be defined as functions.

The results of the edit function is what the editor will render to the editor page when the block is inserted.
 -->
最後の2つのブロックオブジェクトプロパティは **edit** と **save** です。これらはブロックのメインのパーツです。どちらのプロパティも関数として定義する必要があります。

edit 関数の結果は、エディターにブロックが挿入された際の、ブロックのレンダリング結果になります。

<!-- 
The results of the save function is what the editor will insert into the **post_content** field when the post is saved. The post_content field is the field in the WordPress database used to store the content of the post.

**Note:** The `block.json` file is also generated with your plugin. This file is used for registering with the block directory, as you change the properties you should update in both spots. _Development is on-going to simplify this process so only one location is required._
 -->
save 関数の結果は、投稿が保存された際に、エディターが **post_content** フィールドに挿入するブロックの形になります。post_content フィールドは投稿のコンテンツを保存する、WordPress データベース内のフィールドです。

**注意:** プラグインと一緒に `block.json` ファイルも生成されます。このファイルはブロックディレクトリの登録で使用され、プロパティを変更する際は両方のファイルを更新する必要があります。_1か所の変更で済むようこのプロセスを簡素化する開発が継続中です。_

<!-- 
## Internationalization
 -->
## 国際化
<!-- 
If you look at the generated `src/index.js` file, the block title and description are wrapped in a function that looks like this:
 -->
生成された `src/index.js` ファイルを見るとブロックのタイトルや説明が次のような関数で囲まれています。

```js
__( 'Gutenpride', 'gutenpride' );
```
<!-- 
This is an internationalization wrapper that allows for the string "Gutenpride" to be translated. The second parameter, "gutenpride" is called the text domain and gives context for where the string is from. The JavaScript internationalization, often abbreviated i18n, matches the core WordPress internationalization process. See the [Internationalization in Plugin Developer Handbook](https://developer.wordpress.org/plugins/internationalization/) for more details.

Next Section: [Block Attributes](/docs/designers-developers/developers/tutorials/create-block/attributes.md)
 -->
これは国際化ラッパーで、文字列「Gutenpride」を翻訳することができます。2番目のパラメータ「gutenpride」はテキストドメインと呼ばれ、翻訳対象の文字列がどこから来たかのコンテキストを提供します。JavaScript の国際化はコアの WordPress の国際化プロセスと同じです。詳細については [WordPress の国際化 ドキュメント](https://developer.wordpress.org/plugins/internationalization/) を参照してください。

次のセクション: [ブロックの属性](https://ja.wordpress.org/team/handbook/block-editor/tutorials/create-block/block-attributes/)

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/tutorials/create-block/block-anatomy.md)
