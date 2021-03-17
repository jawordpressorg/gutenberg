<!-- 
# Internationalization
 -->
# 国際化
<!-- 
## What is Internationalization?
 -->
## 国際化とは何か ?
<!-- 
Internationalization is the process to provide multiple language support to software, in this case WordPress. Internationalization is often abbreviated as **i18n**, where 18 stands for the number of letters between the first _i_ and the last _n_.

Providing i18n support to your plugin and theme allows it to reach the largest possible audience, even without requiring you to provide the additional language translations.  When you upload your software to WordPress.org, all JS and PHP files will automatically be parsed. Any detected translation strings are added to [translate.wordpress.org](https://translate.wordpress.org/) to allow the community to translate, ensuring WordPress plugins and themes are available in as many languages as possible.
 -->
 国際化とはソフトウエア、特にここでは WordPress に対して複数言語のサポートを提供するプロセスを指します。国際化は **i18n** とも表記されます。これは「国際化」の原語の「Internationalization」の先頭の _i_ と 最後の _n_ の間に18文字あることから来ています。

プラグインやテーマを国際化すると世界中のユーザーに使ってもらうことができます。あなた自身ですべての言語の翻訳ファイルを作成する必要はありません。作成したソフトウエアを WordPress.org にアップロードすると、すべての JavaScript と PHP ファイルは自動でパースされます。見つかった翻訳文字列は [translate.wordpress.org](https://translate.wordpress.org/) に追加され、コミュニティで翻訳できるようになります。結果、多くの言語でプラグインやテーマを利用することができます。

<!-- 
For PHP, WordPress has a long established process, see [How to Internationalize Your Plugin](https://developer.wordpress.org/plugins/internationalization/how-to-internationalize-your-plugin/). The release of WordPress 5.0 brings a similar process for translation to JavaScript code.
 -->
 PHP の翻訳に対して WordPress には歴史ある確立したプロセスがあります。[How to Internationalize Your Plugin](https://developer.wordpress.org/plugins/internationalization/how-to-internationalize-your-plugin/) を参照してください。WordPress 5.0 のリリースに際しても JavaScript コードの翻訳に対して同様のプロセスが導入されました。

<!-- 
## How to use i18n in JavaScript
 -->
## JavaScript での国際化

<!-- 
WordPress 5.0 introduced the wp-i18n JavaScript package that provides the functions needed to add translatable strings as you would in PHP.

First, add **wp-i18n** as a dependency when registering your script:
 -->
WordPress 5.0 では wp-i18n JavaScript パッケージが導入され、PHP 同様、文字列を翻訳可能とする場合に必要な関数が提供されました。

まずはじめにスクリプトを登録する際、依存性に **wp-i18n** を追加します。

<!-- 
```php
<?php
/**
 * Plugin Name: Myguten Plugin
 * Text Domain: myguten
 */
function myguten_block_init() {
    wp_register_script(
        'myguten-script',
        plugins_url( 'block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-block-editor' )
    );

    register_block_type( 'myguten/simple', array(
		'apiVersion' => 2,
        'editor_script' => 'myguten-script',
    ) );
}
add_action( 'init', 'myguten_block_init' );
```
 -->
```php
<?php
/**
 * Plugin Name: Simple Block
 * Text Domain: myguten
 */
function myguten_simple_block_init() {
    wp_register_script(
        'myguten-script',
        plugins_url( 'block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-block-editor' )
    );	

	register_block_type( 'myguten/simple-block', array(
		'apiVersion' => 2,
		'editor_script' => 'myguten-script',
	) );
}
add_action( 'init', 'myguten_simple_block_init' );
```
<!-- 
In your code, you can include the i18n functions. The most common function is **__** (a double underscore) which provides translation of a simple string. Here is a basic block example:
 -->
これでコードに国際化関数を加えられます。もっともよく使われる関数が単純な文字列の翻訳を返す **__** (下線2個) です。以下は基本的なブロックの例です。


<!-- 
{% codetabs %}
{% ESNext %}
```js
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'myguten/simple', {
	apiVersion: 2,
	title: __( 'Simple Block', 'myguten' ),
	category: 'widgets',

	edit: () => {
		const blockProps = useBlockProps( { style: { color: 'red' } } );

		return (
			<p {...blockProps}>
				{ __( 'Hello World', 'myguten' ) }
			</p>
		);
	},

	save: () => {
		const blockProps = useBlockProps.save( { style: { color: 'red' } } );

		return (
			<p {...blockProps}>
				{ __( 'Hello World', 'myguten' ) }
			</p>
		);
	},
} );
```
{% ES5 %}
```js
const { __ } = wp.i18n;
const el = wp.element.createElement;
const { registerBlockType } = wp.blocks;
const { useBlockProps } = wp.blockEditor;

registerBlockType( 'myguten/simple', {
	title: __( 'Simple Block', 'myguten' ),
	category: 'widgets',

	edit: function() {
		const blockProps = useBlockProps( { style: { color: 'red' } } );
		
		return el(
			'p',
			blockProps,
			__( 'Hello World', 'myguten' )
		);
	},

	save: function() {
		const blockProps = useBlockProps.save( { style: { color: 'red' } } );
		return el(
			'p',
			blockProps,
			__( 'Hello World', 'myguten' )
		);
	},
} );
```
{% end %}
 -->

{% codetabs %}
{% ESNext %}
**ESNext**
`npm init @wordpress/block --namespace myguten simple-block` を実行し、`src/index/js` に次のコードを記入してください。

```js
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType('myguten/simple-block', {
	apiVersion: 2,
	title: __('Simple Block', 'myguten'),
	category: 'widgets',

	edit: () => {
		const blockProps = useBlockProps( { style: { color: 'red' } } );

		return (
			<p {...blockProps}>
				{ __( 'Hello World', 'myguten' ) }
			</p>
		);
	},

	save: () => {
		const blockProps = useBlockProps.save( { style: { color: 'red' } } );

		return (
			<p {...blockProps}>
				{ __( 'Hello World', 'myguten' ) }
			</p>
		);
	},
});
```

{% ES5 %}
**ES5**

```js
const { __ } = wp.i18n;
const el = wp.element.createElement;
const { registerBlockType } = wp.blocks;
const { useBlockProps } = wp.blockEditor;

registerBlockType( 'myguten/simple', {
	title: __( 'Simple Block', 'myguten' ),
	category: 'widgets',

	edit: function() {
		const blockProps = useBlockProps( { style: { color: 'red' } } );
		
		return el(
			'p',
			blockProps,
			__( 'Hello World', 'myguten' )
		);
	},

	save: function() {
		const blockProps = useBlockProps.save( { style: { color: 'red' } } );
		return el(
			'p',
			blockProps,
			__( 'Hello World', 'myguten' )
		);
	},
} );
```
{% end %}

<!-- 
In the above example, the function will use the first argument for the string to be translated. The second argument is the text domain which must match the text domain slug specified by your plugin.
 -->
上の例で関数は最初の引数に翻訳対象の文字列を取ります。2番めの引数はテキストドメインです。プラグインで指定したテキストドメインのスラッグに合致する必要があります。

<!-- 
Common functions available, these mirror their PHP counterparts are:

- `__( 'Hello World', 'my-text-domain' )` - Translate a certain string.
- `_n( '%s Comment', '%s Comments', numberOfComments, 'my-text-domain' )` - Translate and retrieve the singular or plural form based on the supplied number.
- `_x( 'Default', 'block style', 'my-text-domain' )` - Translate a certain string with some additional context.

**Note:** Every string displayed to the user should be wrapped in an i18n function.
 -->
利用可能な一般的な関数を挙げます。これらは PHP 関数のミラーです。

- `__( 'Hello World', 'my-text-domain' )` - 指定した文字列を翻訳します。
- `_n( '%s Comment', '%s Comments', numberOfComments, 'my-text-domain' )` - 与えた数値により単数形か複数形の翻訳を返します。
- `_x( 'Default', 'block style', 'my-text-domain' )` - 追加のコンテキストにより指定した文字列を翻訳します。

**注意:** ユーザーに表示されるすべての文字列は国際化関数でラップしてください。

<!-- 
After all strings in your code is wrapped, the final step is to tell WordPress your JavaScript contains translations, using the [wp_set_script_translations()](https://developer.wordpress.org/reference/functions/wp_set_script_translations/) function.

```php
<?php
	function myguten_set_script_translations() {
		wp_set_script_translations( 'myguten-script', 'myguten' );
	}
	add_action( 'init', 'myguten_set_script_translations' );
```
 -->

コードのすべての文字列を国際化関数でラップしたら、最後に WordPress に対して JavaScript に翻訳が含まれることを伝えます。[wp_set_script_translations()](https://developer.wordpress.org/reference/functions/wp_set_script_translations/) 関数を使用します。

```php
<?php
  function myguten_set_script_translations() {
    wp_set_script_translations( 'myguten-script', 'myguten' );
  }
add_action( 'init', 'myguten_set_script_translations' );
```
<!-- 
This is all you need to make your plugin JavaScript code translatable.

When you set script translations for a handle WordPress will automatically figure out if a translations file exists on translate.wordpress.org, and if so ensure that it's loaded into `wp.i18n` before your script runs.  With translate.wordpress.org, plugin authors also do not need to worry about setting up their own infrastructure for translations and can rely on a global community with dozens of active locales. Read more about [WordPress Translations](https://make.wordpress.org/meta/handbook/documentation/translations/).
 -->
プラグインの JavaScript 翻訳にあたって必要な作業はすべてです。

スクリプトの翻訳を設定すると WordPress は自動的に translate.wordpress.org で翻訳ファイルの存在を確認し、プラグインの実行前に `wp.i18n` へロードします。プラグインの作者が translate.wordpress.org にて翻訳用のインフラを準備する必要はありません。グローバルコミュニティと多数のアクティブなロケールにまかせてください。詳細については [WordPress の翻訳](https://make.wordpress.org/meta/handbook/documentation/translations/) を参照してください。

<!-- 
## Provide Your Own Translations

You can create and ship your own translations with your plugin, if you have sufficient knowledge of the language(s) you can ensure the translations are available.
 -->
## 自分で翻訳を提供する場合

プラグイン作者が対象の言語に対して十分なスキルをもつ場合には、自身で翻訳を作成し、リリースすることも可能です。

<!-- 
### Create Translation File

The translation files must be in the JED 1.x JSON format.

To create a JED translation file, first you need to extract the strings from the text. Typically, the language files all live in a directory called `languages` in your plugin.  Using [WP-CLI](https://wp-cli.org/), you create a `.pot` file using the following command from within your plugin directory:
 -->
### 翻訳ファイルの作成

翻訳ファイルは JED 1.x JSON フォーマットでなければなりません。

JED 翻訳ファイルを作成するには、まずテキストから文字列を抽出する必要があります。一般にすべての言語ファイルはプラグインの `languages` ディレクトリにあります。[WP-CLI](https://wp-cli.org/) の場合、プラグインディレクトリで以下のコマンドを実行すると `.pot` ファイルを作成できます。

```
mkdir languages
wp i18n make-pot ./ languages/myguten.pot
```
<!-- 
This will create the file `myguten.pot` which contains all the translatable strings from your project.
 -->
プロジェクトからのすべての翻訳可能文字列を含むファイル `myguten.pot` が生成されます。

<!-- 
```
msgid ""
msgstr ""
"Project-Id-Version: Scratch Plugin\n"
"Report-Msgid-Bugs-To: https://wordpress.org/support/plugin/scratch\n"
"Last-Translator: FULL NAME <EMAIL@ADDRESS>\n"
"Language-Team: LANGUAGE <LL@li.org>\n"
"MIME-Version: 1.0\n"
"Content-Type: text/plain; charset=UTF-8\n"
"Content-Transfer-Encoding: 8bit\n"
"POT-Creation-Date: 2019-03-08T11:26:56-08:00\n"
"PO-Revision-Date: YEAR-MO-DA HO:MI+ZONE\n"
"X-Generator: WP-CLI 2.1.0\n"
"X-Domain: myguten\n"

#. Plugin Name of the plugin
msgid "Scratch Plugin"
msgstr ""

#: block.js:6
msgid "Simple Block"
msgstr ""

#: block.js:13
#: block.js:21
msgid "Hello World"
msgstr ""
```
 -->
 ```
# Copyright (C) 2020 
# This file is distributed under the same license as the Simple Block plugin.
msgid ""
msgstr ""
"Project-Id-Version: Simple Block\n"
"Report-Msgid-Bugs-To: https://wordpress.org/support/plugin/simple-block\n"
"Last-Translator: FULL NAME <EMAIL@ADDRESS>\n"
"Language-Team: LANGUAGE <LL@li.org>\n"
"MIME-Version: 1.0\n"
"Content-Type: text/plain; charset=UTF-8\n"
"Content-Transfer-Encoding: 8bit\n"
"POT-Creation-Date: 2020-05-04T10:48:26+00:00\n"
"PO-Revision-Date: YEAR-MO-DA HO:MI+ZONE\n"
"X-Generator: WP-CLI 2.4.0\n"
"X-Domain: myguten\n"

#. Plugin Name of the plugin
#: block.js:6
msgid "Simple Block"
msgstr ""

#: block.js:13
#: block.js:21
msgid "Hello World"
msgstr ""
```

<!-- 
Here, `msgid` is the string to be translated, and `msgstr` is the actual translation. In the POT file, `msgstr` will always be empty.

This POT file can then be used as the template for new translations. You should **copy the file** using the language code you are going to translate, this example will use the Esperanto (eo) language:
 -->
ここで `msgid` は翻訳される文字列で `msgstr` は実際の翻訳です。POT ファイルでは `msgstr` は常に空です。

この POT ファイルを新しい翻訳のテンプレートとして使ることができます。翻訳予定の言語コードを使用して **ファイルをコピー** してください。この例では日本語 (ja) を使用します。

```
cp myguten.pot myguten-ja.po
```
<!-- 
For this simple example, you can simply edit the `.po` file in your editor and add the translation to all the `msgstr` sets. For a larger, more complex set of translation, the [GlotPress](https://glotpress.blog/) and [Poedit](https://poedit.net/) tools exist to help.

You need also to add the `Language: eo` parameter. Here is full `myguten-eo.po` translated file
 -->
この簡単な例であればエディターで `.po` ファイルを編集し、すべての `msgstr` に対して翻訳を追加できますが、もっと大量で複雑な翻訳用に[GlotPress](https://glotpress.blog/) や [Poedit](https://poedit.net/) などの支援ツールがあります。

また `Language: ja` パラメータを追加する必要があります。完全な `myguten-ja.po` 翻訳ファイルは以下のようになります。

<!-- 
```
# Copyright (C) 2019
# This file is distributed under the same license as the Scratch Plugin plugin.
msgid ""
msgstr ""
"Project-Id-Version: Scratch Plugin\n"
"Report-Msgid-Bugs-To: https://wordpress.org/support/plugin/scratch\n"
"Last-Translator: Marcus Kazmierczak <marcus@mkaz.com>\n"
"Language-Team: Esperanto <marcus@mkaz.com>\n"
"Language: eo\n"
"MIME-Version: 1.0\n"
"Content-Type: text/plain; charset=UTF-8\n"
"Content-Transfer-Encoding: 8bit\n"
"POT-Creation-Date: 2019-02-18T07:20:46-08:00\n"
"PO-Revision-Date: 2019-02-18 08:16-0800\n"
"X-Generator: Poedit 2.2.1\n"
"X-Domain: myguten\n"

#. Plugin Name of the plugin
msgid "Scratch Plugin"
msgstr "Scratch kromprogrameto"

#: block.js:6
msgid "Simple Block"
msgstr "Simpla bloko"

#: block.js:13 block.js:21
msgid "Hello World"
msgstr "Saltuon mundo"
```
 -->
```
# Copyright (C) 2020 
# This file is distributed under the same license as the Simple Block plugin.
msgid ""
msgstr ""
"Project-Id-Version: Simple Block\n"
"Report-Msgid-Bugs-To: https://wordpress.org/support/plugin/simple-block\n"
"Last-Translator: FULL NAME <EMAIL@ADDRESS>\n"
"Language-Team: LANGUAGE <LL@li.org>\n"
"Language: ja\n"
"MIME-Version: 1.0\n"
"Content-Type: text/plain; charset=UTF-8\n"
"Content-Transfer-Encoding: 8bit\n"
"POT-Creation-Date: 2020-05-04T10:48:26+00:00\n"
"PO-Revision-Date: YEAR-MO-DA HO:MI+ZONE\n"
"X-Generator: WP-CLI 2.4.0\n"
"X-Domain: myguten\n"

#. Plugin Name of the plugin
#: block.js:6
msgid "Simple Block"
msgstr "シンプルブロック"

#: block.js:13
#: block.js:21
msgid "Hello World"
msgstr "こんにちは"
```

<!-- 
The last step to create the translation file is to convert the `myguten-eo.po` to the JSON format needed. For this, you can use WP-CLI's [`wp i18n make-json` command](https://developer.wordpress.org/cli/commands/i18n/make-json/), which requires WP-CLI v2.2.0 and later.

```
wp i18n make-json myguten-eo.po --no-purge
```
 -->
翻訳ファイルを作成する最後のステップは `myguten-ja.po` から必要な JSON フォーマットへの変換です。これには WP-CLI の [`wp i18n make-json` コマンド](https://developer.wordpress.org/cli/commands/i18n/make-json/)を使うことができます。ただし WP-CLI v2.2.0 以上が必要です。

```
wp i18n make-json myguten-ja.po --no-purge
```
<!-- 
This will generate the JSON file `myguten-eo-[md5].json` with the contents:

```json
{
  "translation-revision-date": "2019-04-26T13:30:11-07:00",
  "generator": "WP-CLI/2.2.0",
  "source": "block.js",
  "domain": "messages",
  "locale_data": {
    "messages": {
      "": {
        "domain": "messages",
        "lang": "eo",
        "plural-forms": "nplurals=2; plural=(n != 1);"
      },
      "Simple Block": [
        "Simpla Bloko"
      ],
      "Hello World": [
        "Salunton mondo"
      ]
    }
  }
}
```
 -->
以下の内容で JSON ファイル `myguten-ja-[md5].json` が生成されます。

```json
{
    "translation-revision-date": "YEAR-MO-DA HO:MI+ZONE",
    "generator": "WP-CLI\/2.4.0",
    "source": "block.js",
    "domain": "messages",
    "locale_data": {
        "messages": {
            "": {
                "domain": "messages",
                "lang": "ja",
                "plural-forms": "nplurals=2; plural=(n != 1);"
            },
            "Simple Block": [
                "\u30b7\u30f3\u30d7\u30eb\u30d6\u30ed\u30c3\u30af"
            ],
            "Hello World": [
                "\u3053\u3093\u306b\u3061\u306f"
            ]
        }
    }
}
```

<!-- 
### Load Translation File

The final part is to tell WordPress where it can look to find the translation file. The `wp_set_script_translations` function accepts an optional third argument that is the path it will first check for translations. For example:
 -->
### 翻訳ファイルのロード

最後に WordPress に対して翻訳ファイルがどこにあるかを伝えます。`wp_set_script_translations` 関数はオプションで第3引数を取り、翻訳ファイルを最初に探す場所を指定できます。例えば

<!--

```php
<?php
	function myguten_set_script_translations() {
		wp_set_script_translations( 'myguten-script', 'myguten', plugin_dir_path( __FILE__ ) . 'languages' );
	}
	add_action( 'init', 'myguten_set_script_translations' );
```
 -->
```php
<?php
function myguten_set_script_translations() {
    wp_set_script_translations( 'myguten-script', 'myguten', plugin_dir_path( __FILE__ ) . 'languages' );
}
add_action( 'init', 'myguten_set_script_translations' );
```

<!-- 
WordPress will check for a file in that path with the format `${domain}-${locale}-${handle}.json` as the source of translations. Alternatively, instead of the registered handle you can use the md5 hash of the relative path of the file, `${domain}-${locale} in the form of ${domain}-${locale}-${md5}.json.`

Using `make-json` automatically names the file with the md5 hash, so it is ready as-is. You could rename the file to use the handle instead, in which case the file name would be `myguten-eo-myguten-script.json`.
 -->
WordPress は指定されたパスで `${domain}-${locale}-${handle}.json` 形式のファイルを翻訳元として調べます。代替として登録ハンドルの代わりにファイルの相対パス `${domain}-${locale}` の md5 ハッシュを `${domain}-${locale}-${md5}.json` の形式で使うこともできます。

`make-json` を使用すると自動的にファイルを md5 ハッシュで名前付けするため、そのままで準備が終わります。ファイルの名前を変更して代わりにハンドルを使うこともできます。この場合ファイル名は `myguten-ja-myguten-script.json` となります。

<!-- 
### Test Translations

You will need to set your WordPress installation to Esperanto language. Go to Settings > General and change your site language to Esperanto.

With the language set, create a new post, add the block, and you will see the translations used.
 -->
### 翻訳のテスト

WordPress の導入環境を日本語にする必要があります。設定 > 一般に移動し、サイトの言語を日本語に変更してください。

言語を設定したら、新規投稿を作成し、ブロックを追加し、翻訳が使われていることを確認します。

<!-- 
### Filtering Translations
 -->
### 翻訳のフィルタリング
<!-- 
The outputs of the translation functions (`__()`, `_x()`, `_n()`, and `_nx()`) are filterable, see [i18n Filters](/docs/reference-guides/filters/i18n-filters.md) for full information.
 -->
翻訳関数 (`__()`, `_x()`, `_n()`, `_nx()`) の出力はフィルターできます。詳細については [i18n フィルター](https://github.com/WordPress/gutenberg/blob/HEAD/docs/designers-developers/developers/filters/i18n-filters.md) を参照してください。

[原文](https://github.com/WordPress/gutenberg/blob/HEAD/docs/designers-developers/developers/internationalization.md)
