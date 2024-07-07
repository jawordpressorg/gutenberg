<!--
# Metadata in block.json
 -->
# block.json のメタデータ

<!--
Starting with the WordPress 5.8 release, we recommend using the `block.json` metadata file as the canonical way to register block types with both PHP (server-side) and JavaScript (client-side). Here is an example `block.json` file that would define the metadata for a plugin create a notice block.
 -->
WordPress 5.8のリリースから、PHP (サーバーサイド) と JavaScript (クライアントサイド) の両方でブロックタイプを登録する正規の方法として、`block.json` メタデータファイルの使用が推奨されています。以下は、通知ブロックを作成するプラグインのメタデータを定義する `block.json` ファイルの例です。

<!--
**Example:**
 -->
**例:**

```json
{
	"$schema": "https://schemas.wp.org/trunk/block.json",
	"apiVersion": 3,
	"name": "my-plugin/notice",
	"title": "Notice",
	"category": "text",
	"parent": [ "core/group" ],
	"icon": "star",
	"description": "Shows warning, error or success notices...",
	"keywords": [ "alert", "message" ],
	"version": "1.0.3",
	"textdomain": "my-plugin",
	"attributes": {
		"message": {
			"type": "string",
			"source": "html",
			"selector": ".message"
		}
	},
	"providesContext": {
		"my-plugin/message": "message"
	},
	"usesContext": [ "groupId" ],
	"selectors": {
		"root": ".wp-block-my-plugin-notice"
	},
	"supports": {
		"align": true
	},
	"styles": [
		{ "name": "default", "label": "Default", "isDefault": true },
		{ "name": "other", "label": "Other" }
	],
	"example": {
		"attributes": {
			"message": "This is a notice!"
		}
	},
	"variations": [
		{
			"name": "example",
			"title": "Example",
			"attributes": {
				"message": "This is an example!"
			}
		}
	],
	"editorScript": "file:./index.js",
	"script": "file:./script.js",
	"viewScript": [ "file:./view.js", "example-shared-view-script" ],
	"editorStyle": "file:./index.css",
	"style": [ "file:./style.css", "example-shared-style" ],
	"viewStyle": [ "file:./view.css", "example-view-style" ],
	"render": "file:./render.php"
}
```

<!--
The same file is also used when [submitting block to Block Directory](/docs/getting-started/tutorials/create-block/submitting-to-block-directory.md).
 -->
<!--
[ブロックディレクトリへブロックをサブミットする](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/submitting-to-block-directory/)際にも同じファイルが使用されます。
 -->
<!--
## Server-side registration
 -->
<!--
## サーバーサイドでの登録
 -->

<!--
## Benefits of using the metadata file
 -->
## メタデータファイルを使用する利点

<!--
The block definition allows code sharing between JavaScript, PHP, and other languages when processing block types stored as JSON, and registering blocks with the `block.json` metadata file provides multiple benefits on top of it.
 -->
ブロック定義は、JSON として格納されたブロックタイプを処理する際に、JavaScript や PHP などの言語間でのコードの共有を可能にします。さらに、メタデータファイル `block.json` を使用したブロックの登録には、以下のような複数のメリットがあります。

<!--
From a performance perspective, when themes support lazy loading assets, blocks registered with `block.json` will have their asset enqueuing optimized out of the box. The frontend CSS and JavaScript assets listed in the `style` or `script` properties will only be enqueued when the block is present on the page, resulting in reduced page sizes.
 -->
まずパフォーマンスの観点では、テーマが遅延ロードアセットをサポートする場合、`block.json` で登録されたブロックは、標準でアセットのエンキューが最適化されます。`style` や `script` プロパティにリストされたフロントエンドの CSS や JavaScript アセットは、ブロックがページ上に存在するときにのみエンキューされ、結果的にページサイズが小さくなります。

<!--
Furthermore, because the [Block Type REST API Endpoint](https://developer.wordpress.org/rest-api/reference/block-types/) can only list blocks registered on the server, registering blocks server-side is recommended; using the `block.json` file simplifies this registration.
 -->
さらに、[ブロックタイプ REST API エンドポイント](https://developer.wordpress.org/rest-api/reference/block-types/)では、サーバー上で登録されたブロックしか一覧できないため、サーバーサイドでブロックを登録することが推奨されます。`block.json`ファイルを使用すると、この登録が簡単になります。

<!--
The [WordPress Plugins Directory](https://wordpress.org/plugins/) can detect `block.json` files, highlight blocks included in plugins, and extract their metadata. If you wish to submit your block(s) to the Block Directory all blocks contained in your plugin must have a `block.json` file for the Block Directory to recognize them.
 -->
[WordPress プラグインディレクトリ](https://wordpress.org/plugins/)は、`block.json` ファイルを検出し、プラグインに含まれるブロックをハイライトし、そのメタデータを抽出できます。ブロックディレクトリに自分のブロックを登録する場合は、ブロックディレクトリが認識できるよう、プラグインに含まれるすべてのブロックに `block.json` ファイルを含めてください。

<!-- 
Development is improved by using a defined schema definition file. Supported editors can provide help like tooltips, autocomplete, and schema validation. To use the schema, add the following to the top of the `block.json`.
 -->
定義されたスキーマ定義ファイルを使用することで、開発効率が向上します。これに対応するエディタでは、ツールチップやオートコンプリート、スキーマの検証などの支援機能を提供できます。スキーマを使用するには、`block.json`の先頭に以下を追加します。

```json
"$schema": "https://schemas.wp.org/trunk/block.json"
```
<!-- 
<div class="callout callout-info">
Check <a href="https://developer.wordpress.org/block-editor/getting-started/fundamentals-block-development/registration-of-a-block">Registration of a block</a> to learn more about how to register a block using its metadata.
</div>
 -->
> メタデータを使用してブロックを登録する方法については、<a href="https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals-block-development/registration-of-a-block">ブロックの登録</a>を確認してください。

<!--
## Block API
 -->
## ブロック API

<!--
This section describes all the properties that can be added to the `block.json` file to define the behavior and metadata of block types.
 -->
このセクションでは、`block.json` ファイルに追加可能な、ブロックタイプの振る舞いとメタデータを定義するすべてのプロパティを紹介します。

### API version

<!--
-   Type: `number`
-   Optional
-   Localized: No
-   Property: `apiVersion`
-   Default: `1`
 -->
-   型: `number`
-   オプション
-   ローカライズ: 不可
-   プロパティ: `apiVersion`
-   デフォルト: `1`

```json
{ "apiVersion": 3 }
```

<!--
The version of the Block API used by the block. The most recent version is `3` and it was introduced in WordPress 6.3.
 -->
ブロックが使用する Block API のバージョン。最新のバージョンは `3` で、WordPress 6.3 で導入されました。

<!--
See the [the API versions documentation](/docs/reference-guides/block-api/block-api-versions.md) for more details.
 -->
詳細については [API バージョンのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-api-versions/) を参照してください。

### Name

<!--
-   Type: `string`
-   Required
-   Localized: No
-   Property: `name`
 -->
-   型: `string`
-   必須
-   ローカライズ: 不可
-   プロパティ: `name`

```json
{ "name": "core/heading" }
```

<!--
The name for a block is a unique string that identifies a block. Names have to be structured as `namespace/block-name`, where namespace is the name of your plugin or theme.

**Note:** A block name can only contain lowercase alphanumeric characters, dashes, and at most one forward slash to designate the plugin-unique namespace prefix. It must begin with a letter.

**Note:** This name is used on the comment delimiters as `<!-- wp:my-plugin/book ->`. Block types in the `core` namespace do not include a namespace when serialized.
 -->
ブロック名は、ブロックを識別する固有の文字列です。名前の構造は `namespace/block-name` で、namespace はプラグインやテーマの名前です。

**注意:** ブロック名には、英数小文字、ダッシュ (`-`)、プラグイン固有の名前空間プレフィックスを表す最大1つのスラッシュ (`/`) のみを含められます。文字で始める必要があります。

**注意:** この名前はまた、コメントデリミッタとしても `<!-- wp:my-plugin/book -->` のように使用されます。なお、`core` 名前空間のブロックタイプは、シリアライズされる際に名前空間を含みません。

### Title

<!--
-   Type: `string`
-   Required
-   Localized: Yes
-   Property: `title`
 -->
-   型: `string`
-   必須
-   ローカライズ: 可能
-   プロパティ: `title`

```json
{ "title": "Heading" }
```

<!--
This is the display title for your block, which can be translated with our translation functions. The title will display in the Inserter and in other areas of the editor.
 -->
ブロックの表示タイトルです。翻訳関数で翻訳できます。ブロックインサーターやエディターの他の領域は、このタイトルを表示します。
<!-- 
**Note:** To keep your block titles readable and accessible in the UI, try to avoid very long titles.
 -->
**注意:** UIで読みやすく、アクセスしやすいブロックタイトルにするには、長過ぎるタイトルは避けてください。

### Category

<!--
-   Type: `string`
-   Optional
-   Localized: No
-   Property: `category`
 -->
-   型: `string`
-   オプション
-   ローカライズ: 不可
-   プロパティ: `category`

```json
{ "category": "text" }
```
<!--
Blocks are grouped into categories to help users browse and discover them.
 -->
ブロックは、ユーザーの視認性と検索のしやすさのため、カテゴリーにグループ分けできます。

<!--
The core provided categories are:
 -->
コアの提供するカテゴリーは以下です。

-   text
-   media
-   design
-   widgets
-   theme
-   embed

<!--
Plugins and Themes can also register [custom block categories](/docs/reference-guides/filters/block-filters.md#managing-block-categories).

An implementation should expect and tolerate unknown categories, providing some reasonable fallback behavior (e.g. a "text" category).
 -->
プラグインとテーマはまた、[カスタムブロックカテゴリー](https://developer.wordpress.org/block-editor/developers/filters/block-filters/#managing-block-categories)を登録できます。

実装は、未知のカテゴリーを予想し、合理的なフォールバック (例: text カテゴリー) を提供する必要があります。

### Parent

<!--
-   Type: `string[]`
-   Optional
-   Localized: No
-   Property: `parent`
 -->
-   型: `string[]`
-   オプション
-   ローカライズ: 不可
-   プロパティ: `parent`

```json
{ "parent": [ "my-block/product" ] }
```

`parent` を設定すると、ブロックは、指定したブロック内にネストされた場合のみ利用可能になります。たとえば、「カートに追加」ブロックを、「商品」ブロック内でのみ利用可能にすることができます。

### Ancestor

<!-- 
-   Type: `string[]`
-   Optional
-   Localized: No
-   Property: `ancestor`
-   Since: `WordPress 6.0.0`
 -->
-   型: `string[]`
-   オプション
-   ローカライズ: 不可
-   プロパティ: `ancestor`
-   Since: `WordPress 6.0.0`

```json
{ "ancestor": [ "my-block/product" ] }
```

<!-- 
The `ancestor` property makes a block available inside the specified block types at any position of the ancestor block subtree. That allows, for example, to place a ‘Comment Content’ block inside a ‘Column’ block, as long as ‘Column’ is somewhere within a ‘Comment Template’ block. In comparison to the `parent` property blocks that specify their `ancestor` can be placed anywhere in the subtree whilst blocks with a specified `parent` need to be direct children.
 -->
`ancestor` プロパティは、指定されたブロックタイプの中で、祖先ブロックサブツリーの任意の位置において、ブロックを利用可能にします。例えば、`Column` ブロックが `Comment Template` ブロック内のどこかにいる限り、`Comment Content` ブロックを `Column` ブロックの中に配置できます。`parent` プロパティと比較すると、 `ancestor` を指定したブロックはサブツリーのどこにでも配置できますが、 `parent` を指定したブロックは直接の子である必要があります。


### Allowed Blocks

-   Type: `string[]`
-   Optional
-   Localized: No
-   Property: `allowedBlocks`
-   Since: `WordPress 6.5.0`

```json
{ "allowedBlocks": [ "my-block/product" ] }
```

The `allowedBlocks` specifies which block types can be the direct children of the block. For example, a ‘List’ block can allow only ‘List Item’ blocks as children.

### Icon

<!--
-   Type: `string`
-   Optional
-   Localized: No
-   Property: `icon`
 -->
-   型: `string`
-   オプション
-   ローカライズ: 不可
-   プロパティ: `icon`

```json
{ "icon": "smile" }
```

<!--
An icon property should be specified to make it easier to identify a block. These can be any of WordPress' Dashicons (slug serving also as a fallback in non-js contexts).
An icon property should be specified to make it easier to identify a block. These can be any of [WordPress' Dashicons](https://developer.wordpress.org/resource/dashicons/) (slug serving also as a fallback in non-js contexts).
 -->
ブロックを識別しやすくするために icon プロパティを指定してください。任意の [WordPress' Dashicons](https://developer.wordpress.org/resource/dashicons/) を指定できます。またスラッグは 非 js コンテキストでのフォールバックとなります。

<!--
**Note:** It's also possible to override this property on the client-side with the source of the SVG element. In addition, this property can be defined with JavaScript as an object containing background and foreground colors. These colors will appear with the icon when they are applicable e.g.: in the inserter. Custom SVG icons are automatically wrapped in the [wp.primitives.SVG](/packages/primitives/README.md) component to add accessibility attributes (aria-hidden, role, and focusable).
 -->
**注意:** このプロパティはまた、クライアントサイドで、SVG 要素のソースで上書きすることもできます。加えて、このプロパティは背景色や前景色を含むオブジェクトとして、 JavaScript で定義できます。この色は、たとえばインサーター内で表示される場合にアイコンと一緒に使用されます。カスタム SVG アイコンは自動で [wp.primitives.SVG](https://github.com/WordPress/gutenberg/tree/trunk/packages/primitives) コンポーネントにラップされ、アクセシビリティ属性 (aria-hidden、role、focusable) が追加されます。

### Description

<!--
-   Type: `string`
-   Optional
-   Localized: Yes
-   Property: `description`
 -->
-   型: `string`
-   オプション
-   ローカライズ: 可能
-   プロパティ: `description`

```json
{
	"description": "Introduce new sections and organize content to help visitors"
}
```
<!--
This is a short description for your block, which can be translated with our translation functions. This will be shown in the block inspector.
 -->
ブロックの簡潔な説明です。翻訳関数で翻訳できます。ブロックインスペクターで表示されます。

### Keywords

<!--
-   Type: `string[]`
-   Optional
-   Localized: Yes
-   Property: `keywords`
-   Default: `[]`
 -->
-   型: `string[]`
-   オプション
-   ローカライズ: 可能
-   プロパティ: `keywords`
-   デフォルト: `[]`

```json
{ "keywords": [ "keyword1", "keyword2" ] }
```

<!--
Sometimes a block could have aliases that help users discover it while searching. For example, an image block could also want to be discovered by photo. You can do so by providing an array of unlimited terms (which are translated).
 -->
ブロックは、検索性の向上のため別名を持つことができます。たとえば、画像ブロックを「写真」でも検索できるようになります。語句は何個でも配列内に指定でき、翻訳の対象です。

### Version

<!--
-   Type: `string`
-   Optional
-   Localized: No
-   Property: `version`
-   Since: `WordPress 5.8.0`
 -->
-   型: `string`
-   オプション
-   ローカライズ: 不可
-   プロパティ: `version`
-   Since: `WordPress 5.8.0`

```json
{ "version": "1.0.3" }
```

<!--
The current version number of the block, such as 1.0 or 1.0.3. It's similar to how plugins are versioned. This field might be used with block assets to control cache invalidation, and when the block author omits it, then the installed version of WordPress is used instead.
 -->
ブロックの現在のバージョン番号。例: 1.0、1.0.3。プラグインのバージョン管理と同様です。このフィールドは、ブロックアセットでキャッシュの無効化の制御に使用される場合があり、ブロック作者がこれを省略すると、代わりにインストールされたWordPressのバージョンが使用されます。

### Text Domain

<!--
-   Type: `string`
-   Optional
-   Localized: No
-   Property: `textdomain`
-   Since: `WordPress 5.7.0`
 -->
-   型: `string`
-   オプション
-   ローカライズ: 不可
-   プロパティ: `textdomain`
-   Since: `WordPress 5.7.0`

```json
{ "textdomain": "my-plugin" }
```

<!--
The [gettext](https://www.gnu.org/software/gettext/) text domain of the plugin/block. More information can be found in the [Text Domain](https://developer.wordpress.org/plugins/internationalization/how-to-internationalize-your-plugin/#text-domains) section of the [How to Internationalize your Plugin](https://developer.wordpress.org/plugins/internationalization/how-to-internationalize-your-plugin/) page.
 -->
プラグインブロックの [gettext](https://www.gnu.org/software/gettext/) テキストドメイン。詳細については「[プラグインの国際化](https://developer.wordpress.org/plugins/internationalization/how-to-internationalize-your-plugin/)」の「[テキストドメイン](https://developer.wordpress.org/plugins/internationalization/how-to-internationalize-your-plugin/#text-domains)」セクションを参照してください。

### Attributes

<!--
-   Type: `object`
-   Optional
-   Localized: No
-   Property: `attributes`
-   Default: `{}`
 -->
-   型: `object`
-   オプション
-   ローカライズ: 不可
-   プロパティ: `attributes`
-   デフォルト: `{}`

```json
{
	"attributes": {
		"cover": {
			"type": "string",
			"source": "attribute",
			"selector": "img",
			"attribute": "src"
		},
		"author": {
			"type": "string",
			"source": "html",
			"selector": ".book-author"
		}
	}
}
```

<!--
Attributes provide the structured data needs of a block. They can exist in different forms when they are serialized, but they are declared together under a common interface.
 -->
attributes (属性) は、ブロックに必要な構造化データを提供します。シリアライズされる際には異なる形式で存在できますが、共通インターフェースの下で一緒に宣言されます。

<!--
See [the attributes documentation](/docs/reference-guides/block-api/block-attributes.md) for more details.
 -->
詳細については、[属性のドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-attributes/) を参照してください。

### Provides Context

<!--
-   Type: `object`
-   Optional
-   Localized: No
-   Property: `providesContext`
-   Default: `{}`
 -->
-   型: `object`
-   オプション
-   ローカライズ: 不可
-   プロパティ: `providesContext`
-   デフォルト: `{}`

<!--
Context provided for available access by descendants of blocks of this type, in the form of an object which maps a context name to one of the block's own attributes.
 -->
このタイプのブロックの子孫ブロックによる、利用可能なアクセスのために提供されるコンテキスト。形式は、コンテキスト名をブロック自身の属性とマップするオブジェクト。

<!--
See [the block context documentation](/docs/reference-guides/block-api/block-context.md) for more details.
 -->
詳細については [ブロックコンテキストのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-context/) を参照してください。

```json
{
	"providesContext": {
		"my-plugin/recordId": "recordId"
	}
}
```

### Context

<!--
-   Type: `string[]`
-   Optional
-   Localized: No
-   Property: `usesContext`
-   Default: `[]`
 -->
-   型: `string[]`
-   オプション
-   ローカライズ: 不可
-   プロパティ: `usesContext`
-   デフォルト: `[]`

<!--
Array of the names of context values to inherit from an ancestor provider.
 -->
先祖のプロバイダから継承するコンテキスト値の名前の配列

<!--
See [the block context documentation](/docs/reference-guides/block-api/block-context.md) for more details.
 -->
詳細については [ブロックコンテキストのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-context/) を参照してください。

```json
{
	"usesContext": [ "message" ]
}
```
<!-- 
### Editor Selectors
 -->
<!-- 
-   Type: `object`
-   Optional
-   Localized: No
-   Property: `editorSelectors`
-   Default: `{}`
-   Since: `WordPress 6.3.0`
 -->
<!-- 
-   型: `object`
-   オプション
-   ローカライズ: 不可
-   プロパティ: `editorSelectors`
-   デフォルト: `{}`
-   Since: `WordPress 6.3.0`
 -->
<!-- 
Any editor specific custom CSS selectors, keyed by `root`, feature, or
sub-feature, to be used when generating block styles for theme.json
(global styles) stylesheets in the editor.

Editor only selectors override those defined within the `selectors` property.

See the [the selectors documentation](/docs/reference-guides/block-api/block-selectors.md) for more details.
 -->
<!-- 
エディターの theme.json (グローバルスタイル) スタイルシートのブロックスタイルを生成する際に使用される、`root`、フィーチャー、サブフィーチャーをキーとする任意のエディター固有カスタム CSS セレクタ。

エディター固有セレクタは `selectors` プロパティ内部で定義されたスタイルを上側期します。

詳細については[セレクタのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-selectors/)を参照してください。

```json
{
	"editorSelectors": {
		"root": ".my-custom-block-selector",
		"color": {
			"text": ".my-custom-block-selector p"
		},
		"typography": {
			"root": ".my-custom-block-selector > h2",
			"text-decoration": ".my-custom-block-selector > h2 span"
		}
	}
}
```
 -->
### Selectors

<!-- 
-   Type: `object`
-   Optional
-   Localized: No
-   Property: `selectors`
-   Default: `{}`
-   Since: `WordPress 6.3.0`
 -->
-   型: `object`
-   オプション
-   ローカライズ: 不可
-   プロパティ: `selectors`
-   デフォルト: `{}`
-   Since: `WordPress 6.3.0`

<!-- 
Any custom CSS selectors, keyed by `root`, feature, or sub-feature, to be used
when generating block styles for theme.json (global styles) stylesheets.
Providing custom selectors allows more fine grained control over which styles
apply to what block elements, e.g. applying typography styles only to an inner
heading while colors are still applied on the outer block wrapper etc.
 -->
theme.json (グローバルスタイル) スタイルシートのブロックスタイルを生成する際に使用される、`root`、フィーチャー、サブフィーチャーをキーとする任意のカスタム CSS セレクタ。
カスタムセレクタを提供することで、どのブロック要素にどのスタイルを適用するかを細かく制御できます。例えば、typoraphy スタイルは内部の見出しだけに適用し、color は外部のブロックラッパー全体に適用するなど。

<!-- 
See [the selectors documentation](/docs/reference-guides/block-api/block-selectors.md) for more details.
 -->
詳細については[セレクタのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-selectors/)を参照してください。

```json
{
	"selectors": {
		"root": ".my-custom-block-selector",
		"color": {
			"text": ".my-custom-block-selector p"
		},
		"typography": {
			"root": ".my-custom-block-selector > h2",
			"text-decoration": ".my-custom-block-selector > h2 span"
		}
	}
}
```

### Supports

<!--
-   Type: `object`
-   Optional
-   Localized: No
-   Property: `supports`
-   Default: `{}`
 -->
-   型: `object`
-   オプション
-   ローカライズ: 不可
-   プロパティ: `supports`
-   デフォルト: `{}`

<!--
It contains a set of options to control features used in the editor. See [the supports documentation](/docs/reference-guides/block-api/block-supports.md) for more details.
 -->
エディターで使用される機能を制御するオプションのセットとして含みます。詳細については [サポートのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/)) を参照してください。


### Block Styles

<!--
-   Type: `array`
-   Optional
-   Localized: Yes (`label` only)
-   Property: `styles`
-   Default: `[]`
 -->
-   型: `array`
-   オプション
-   ローカライズ: 可能 (`label` のみ)
-   プロパティ: `styles`
-   デフォルト: `[]`

```json
{
	"styles": [
		{ "name": "default", "label": "Default", "isDefault": true },
		{ "name": "other", "label": "Other" }
	]
}
```

<!--
Block styles can be used to provide alternative styles to block. It works by adding a class name to the block's wrapper. Using CSS, a theme developer can target the class name for the block style if it is selected.
 -->
ブロックスタイルを使用すると、ブロックに代替のスタイルを与えられます。ブロックのラッパーにクラス名が追加されます。テーマ開発者は CSS を使用して、選択された際のブロックスタイルのターゲットにこのクラス名を指定できます。

<!--
Plugins and Themes can also register [custom block styles](/docs/reference-guides/block-api/block-styles.md) for existing blocks.
 -->
プラグインやテーマはまた既存のブロックに対して、[カスタムブロックスタイル](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-styles/) を登録できます。


### Example

<!--
-   Type: `object`
-   Optional
-   Localized: No
-   Property: `example`
 -->
-   型: `object`
-   オプション
-   ローカライズ: 不可
-   プロパティ: `example`

```json
{
	"example": {
		"attributes": {
			"message": "This is a notice!"
		}
	}
}
```

<!--
It provides structured example data for the block. This data is used to construct a preview for the block to be shown in the Inspector Help Panel when the user mouses over the block.
 -->
ブロックに構造化されたサンプルデータを提供します。このデータはブロックのプレビューを構築する際に使用され、インスペクターヘルプパネルでユーザーがブロックの上にマウスを移動すると表示されます。

<!--
See the [Example documentation](/docs/reference-guides/block-api/block-registration.md#example-optional) for more details.
 -->
詳細については [ドキュメントの「example (オプション)」セクション](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/) を参照してください。

### Variations

<!-- 
-   Type: `object[]`
-   Optional
-   Localized: Yes (`title`, `description`, and `keywords` of each variation only)
-   Property: `variations`
-   Since: `WordPress 5.9.0`
 -->
- 型: `object[]`
- オプション
- ローカライズ: 可 (`title`, `description`, `keywords` それぞれのバリエーションのみ)
- プロパティ: `variations`
- Since: `WordPress 5.9.0`


```json
{
	"variations": [
		{
			"name": "example",
			"title": "Example",
			"attributes": {
				"level": 2,
				"message": "This is an example!"
			},
			"scope": [ "block" ],
			"isActive": [ "level" ]
		}
	]
}
```
<!-- 
Block Variations is the API that allows a block to have similar versions of it, but all these versions share some common functionality. Each block variation is differentiated from the others by setting some initial attributes or inner blocks. Then at the time when a block is inserted these attributes and/or inner blocks are applied.

_Note: In JavaScript you can provide a function for the `isActive` property, and a React element for the `icon`. In the `block.json` file both only support strings_

See [the variations documentation](/docs/reference-guides/block-api/block-variations.md) for more details.
 -->
ブロックバリエーションは、あるブロックに類似のバージョンを持たせられる API ですが、これらのバージョンはすべて、共通の機能を共有します。各ブロックバリエーションは、いくつかの初期属性やインナーブロックの設定により、他のブロックと区別されます。ブロックを挿入すると、これらの属性やインナーブロックが適用されます。

_注: JavaScriptでは、`isActive`プロパティに関数を、`icon` に React 要素を指定できます。`block.json` ファイルでは、どちらも文字列のみをサポートします。_

詳細は[ドキュメントのバリエーション](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-variations/) を参照してください。

### Block Hooks

<!-- 
-   Type: `object`
-   Optional
-   Property: `blockHooks`
-   Since: `WordPress 6.4.0`
 -->
-   型: `object`
-   オプション
-   プロパティ: `blockHooks`
-   Since: `WordPress 6.4.0`

```json
{
	"blockHooks": {
		"my-plugin/banner": "after"
	}
}
```

<!-- 
Block Hooks is an API that allows a block to automatically insert itself next to all instances of a given block type, in a relative position also specified by the "hooked" block. That is, a block can opt to be inserted before or after a given block type, or as its first or last child (i.e. to be prepended or appended to the list of its child blocks, respectively). Hooked blocks will appear both on the frontend and in the editor (to allow for customization by the user).
 -->
ブロックフックは指定されたブロックタイプのすべてのインスタンスの隣、「フックされた」ブロックによって指定された相対位置に、自動的にブロックを挿入する API です。つまり、選択によりブロックを、指定されたブロックタイプの前または後、または、最初の子または最後の子 (子ブロックのリストの先頭、または末尾) に挿入できます。フックされたブロックは、フロントエンドとエディターの両方に表示されます (ユーザーによるカスタマイズが可能です)。

<!-- 
The key is the name of the block (`string`) to hook into, and the value is the position to hook into (`string`). Take a look at the [Block Hooks documentation](/docs/reference-guides/block-api/block-registration.md#block-hooks-optional) for more info about available configurations.
 -->
キーはフックするブロックの名前 (`string`)、値はフックする位置 (`string`) です。利用可能な設定については、[ブロックフックのドキュメント](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/#block-hooks-optional) を参照してください。

### Editor script

<!--
-   Type: `WPDefinedAsset`|`WPDefinedAsset[]` ([learn more](#wpdefinedasset))
-   Optional
-   Localized: No
-   Property: `editorScript`
 -->
-   型: `WPDefinedAsset`|`WPDefinedAsset[]` ([詳細](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#wpdefinedasset))
-   オプション
-   ローカライズ: 不可
-   プロパティ: `editorScript`

```json
{ "editorScript": "file:./index.js" }
```

<!--
Block type editor scripts definition. They will only be enqueued in the context of the editor.
 -->
ブロックタイプエディタースクリプト定義。エディターのコンテキスト内でのみエンキューされます。

<!-- 
It's possible to pass a script handle registered with the [`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/) function, a path to a JavaScript file relative to the `block.json` file, or a list with a mix of both ([learn more](#wpdefinedasset)).
 -->
渡せるものは、[`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/) 関数で登録されたスクリプトハンドル、`block.json` ファイルからの JavaScript ファイルへの相対パス、または2つを混ぜ合わせたリストです ([詳細](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#wpdefinedasset))。

<!-- 
_Note: An option to pass also an array of editor scripts exists since WordPress `6.1.0`._
 -->
_注意: WordPress `6.1.0` からは、エディタースクリプトの配列を渡すオプションもあります。_

### Script

<!--
-   Type: `WPDefinedAsset` ([learn more](#wpdefinedasset))
-   Type: `WPDefinedAsset`|`WPDefinedAsset[]` ([learn more](#wpdefinedasset))
-   Optional
-   Localized: No
-   Property: `script`
 -->
-   型: `WPDefinedAsset`|`WPDefinedAsset[]` ([詳細](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#wpdefinedasset))
-   オプション
-   ローカライズ: 不可
-   プロパティ: `script`

```json
{ "script": "file:./script.js" }
```

<!--
Block type frontend and editor scripts definition. They will be enqueued both in the editor and when viewing the content on the front of the site.
 -->
ブロックタイプフロントエンド、および、エディタースクリプト定義。エディター内、および、サイトのフロントエンドでコンテンツが表示される際の両方でエンキューされます。

<!-- 
It's possible to pass a script handle registered with the [`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/) function, a path to a JavaScript file relative to the `block.json` file, or a list with a mix of both ([learn more](#wpdefinedasset)).
 -->
渡せるものは、[`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/) 関数で登録されたスクリプトハンドル、`block.json` ファイルからの JavaScript ファイルへの相対パス、または2つを混ぜ合わせたリストです ([詳細](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#wpdefinedasset))。

<!-- 
_Note: An option to pass also an array of scripts exists since WordPress `6.1.0`._
 -->
_注意: スクリプトの配列を渡すオプションもあります。 WordPress `6.1.0` 以降。_

### View script

<!-- 
-   Type: `WPDefinedAsset`|`WPDefinedAsset[]` ([learn more](#wpdefinedasset))
-   Optional
-   Localized: No
-   Property: `viewScript`
-   Since: `WordPress 5.9.0`
 -->
-   型: `WPDefinedAsset`|`WPDefinedAsset[]` ([詳細](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#wpdefinedasset))
-   オプション
-   ローカライズ: 不可
-   プロパティ: `viewScript`
-   Since: `WordPress 5.9.0`

```json
{ "viewScript": [ "file:./view.js", "example-shared-view-script" ] }
```

<!-- 
Block type frontend scripts definition. They will be enqueued only when viewing the content on the front of the site.
 -->
ブロックタイプフロントエンド定義。サイトのフロントでコンテンツを表示するときのみ、エンキューされます。

<!-- 
It's possible to pass a script handle registered with the [`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/) function, a path to a JavaScript file relative to the `block.json` file, or a list with a mix of both ([learn more](#wpdefinedasset)).
 -->
渡せるものは、[`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/) 関数で登録されたスクリプトハンドル、`block.json` ファイルからの JavaScript ファイルへの相対パス、または2つを混ぜ合わせたリストです ([詳細](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#wpdefinedasset))。

<!-- 
_Note: An option to pass also an array of view scripts exists since WordPress `6.1.0`._
 -->
_注意: ビュースクリプトの配列を渡すオプションもあります。 WordPress `6.1.0` 以降。_

### View script module

-   Type: `WPDefinedAsset`|`WPDefinedAsset[]` ([learn more](#wpdefinedasset))
-   Optional
-   Localized: No
-   Property: `viewScriptModule`
-   Since: `WordPress 6.5.0`

```json
{ "viewScriptModule": [ "file:./view.js", "example-shared-script-module-id" ] }
```

Block type frontend script module definition. They will be enqueued only when viewing the content on the front of the site.

It's possible to pass a script module ID registered with the [`wp_register_script_module`](https://developer.wordpress.org/reference/functions/wp_register_script_module/) function, a path to a JavaScript module relative to the `block.json` file, or a list with a mix of both ([learn more](#wpdefinedasset)).

WordPress scripts and WordPress script modules are not compatible at the moment. If frontend view assets depend on WordPress scripts, `viewScript` should be used. If they depend on WordPress script modules —the Interactivity API at this time— `viewScriptModule` should be used. [More functionality](https://core.trac.wordpress.org/ticket/60647) will gradually become available to Script Modules.

_Note: Available since WordPress `6.5.0`._

### Editor style

<!--
-   Type: `WPDefinedAsset`|`WPDefinedAsset[]` ([learn more](#wpdefinedasset))
-   Optional
-   Localized: No
-   Property: `editorStyle`
 -->
-   型: `WPDefinedAsset`|`WPDefinedAsset[]` ([詳細](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#wpdefinedasset))
-   オプション
-   ローカライズ: 不可
-   プロパティ: `editorStyle`

```json
{ "editorStyle": "file:./index.css" }
```

<!--
Block type editor styles definition. They will only be enqueued in the context of the editor.
 -->
ブロックタイプエディタースタイル定義。エディターのコンテキスト内でのみエンキューされます。

<!-- 
It's possible to pass a script handle registered with the [`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/) function, a path to a JavaScript file relative to the `block.json` file, or a list with a mix of both ([learn more](#wpdefinedasset)).
 -->
渡せるものは、[`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/) 関数で登録されたスクリプトハンドル、`block.json` ファイルからの JavaScript ファイルへの相対パス、または2つを混ぜ合わせたリストです ([詳細](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#wpdefinedasset))。

<!-- 
_Note: An option to pass also an array of editor styles exists since WordPress `5.9.0`._
 -->
_注意: エディタースクリプトの配列を渡すオプションもあります。 WordPress `5.9.0` 以降。_

### Style

<!--
-   Type: `WPDefinedAsset`|`WPDefinedAsset[]` ([learn more](#wpdefinedasset))
-   Optional
-   Localized: No
-   Property: `style`
 -->
-   型: `WPDefinedAsset`|`WPDefinedAsset[]` ([詳細](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#wpdefinedasset))
-   オプション
-   ローカライズ: 不可
-   プロパティ: `style`

```json
{ "style": [ "file:./style.css", "example-shared-style" ] }
```

<!--
Block type frontend and editor styles definition. They will be enqueued both in the editor and when viewing the content on the front of the site.
 -->
ブロックタイプフロントエンド、およびエディタースタイル定義。エディター内、および、サイトのフロントエンドでコンテンツが表示される際の両方でエンキューされます。

<!-- 
It's possible to pass a script handle registered with the [`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/) function, a path to a JavaScript file relative to the `block.json` file, or a list with a mix of both ([learn more](#wpdefinedasset)).
 -->
渡せるものは、[`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/) 関数で登録されたスクリプトハンドル、`block.json` ファイルからの JavaScript ファイルへの相対パス、または2つを混ぜ合わせたリストです ([詳細](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#wpdefinedasset))。

<!-- 
_Note: An option to pass also an array of styles exists since WordPress `5.9.0`._
 -->
_注意: スタイルの配列を渡すオプションもあります。 WordPress `5.9.0` 以降。_

### View Style

-   Type: `WPDefinedAsset`|`WPDefinedAsset[]` ([learn more](#wpdefinedasset))
-   Optional
-   Localized: No
-   Property: `viewStyle`
-   Since: `WordPress 6.5.0`

```json
{ "viewStyle": [ "file:./view.css", "example-view-style" ] }
```

Block type frontend styles definition. They will be enqueued only when viewing the content on the front of the site.

It's possible to pass a style handle registered with the [`wp_register_style`](https://developer.wordpress.org/reference/functions/wp_register_style/) function, a path to a CSS file relative to the `block.json` file, or a list with a mix of both ([learn more](#wpdefinedasset)).

Frontend-only styles are especially useful for interactive blocks, to style parts that will only be visible after a user performs some action and where those styles will never be needed in the editor. You can start with using the `style` property to put all your common styles in one stylesheet. Only when you need editor-specific styling or frontend-specific styling, you can expand to `editorStyle` and `viewStyle`, but still keep the common part of your styling in the main stylesheet.

### Render
<!-- 
-   Type: `WPDefinedPath` ([learn more](#wpdefinedpath))
-   Optional
-   Localized: No
-   Property: `render`
-   Since: `WordPress 6.1.0`
 -->
-   型: `WPDefinedPath` ([詳細](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#wpdefinedpath))
-   オプション
-   ローカライズ: 不可
-   プロパティ: `render`
-   Since: `WordPress 6.1.0`

```json
{ "render": "file:./render.php" }
```

<!-- 
PHP file to use when rendering the block type on the server to show on the front end. The following variables are exposed to the file:
 -->
フロントエンドに表示するブロックタイプをサーバでレンダリングする際に使用する PHP ファイル。次の変数がファイルに公開されます。

<!-- 
-   `$attributes` (`array`): The block attributes.
-   `$content` (`string`): The block default content.
-   `$block` (`WP_Block`): The block instance.
 -->
-   `$attributes` (`array`): ブロックの属性
-   `$content` (`string`): ブロックのデフォルトコンテンツ
-   `$block` (`WP_Block`): ブロックのインスタンス

<!-- 
An example implementation of the `render.php` file defined with `render` could look like:
 -->
`render` で定義される `render.php` ファイルの実装例は、次のようになります。

```php
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php echo esc_html( $attributes['label'] ); ?>
</div>
```
<!-- 
_Note: This file loads for every instance of the block type when rendering the page HTML on the server. Accounting for that is essential when declaring functions or classes in the file. The simplest way to avoid the risk of errors is to consume that shared logic from another file._
 -->
_注意: このファイルは、サーバー上でページの HTML をレンダリングするときに、ブロックタイプのインスタンスごとにロードされます。ファイル内で関数やクラスを宣言する際には、この点を考慮する必要があります。エラーのリスクを回避する最も簡単な方法は、その共有ロジックを別のファイルから消費することです。_

<!--
## Assets
 -->
## アセット

### WPDefinedPath

<!-- 
The `WPDefinedPath` type is a subtype of string, where the value represents a path to a JavaScript, CSS or PHP file relative to where the `block.json` file is located. The path provided must be prefixed with `file:`. This approach is based on how npm handles [local paths](https://docs.npmjs.com/files/package.json#local-paths) for packages.
 -->
`WPDefinedPath` タイプは string のサブタイプです。値は、`block.json` ファイルのある場所から JavaScript、CSS、PHP ファイルへの相対パスで表します。提供されるパスには、接頭辞 `file:` を付ける必要があります。この方法は npm のパッケージの[ローカルパス](https://docs.npmjs.com/files/package.json#local-paths) を扱う方法に基づいています。

<!-- 
**Example:**
 -->
**例:**

In `block.json`:

```json
{
	"render": "file:./render.php"
}
```

<!--
### `WPDefinedAsset`
 -->
### WPDefinedAsset

<!-- 
It extends `WPDefinedPath` for JavaScript and CSS files. An alternative to the file path would be a script handle, script module ID, or style handle referencing an already registered asset using WordPress helpers.
 -->
JavaScript や CSS ファイル用に `WPDefinedPath` を拡張します。ファイルパスの代わりに、WordPress ヘルパーを使用して登録済みのアセットを参照するスクリプトハンドル、スクリプトモジュール ID、スタイルハンドルを使用できます。

<!--
**Example:**
 -->
**例:**

<!--
In `block.json`:
 -->
`block.json` 内

```json
{
	"editorScript": "file:./index.js",
	"script": "file:./script.js",
	"viewScriptModule": [
		"file:./view.js",
		"example-registered-script-module-id"
	],
	"editorStyle": "file:./index.css",
	"style": [ "file:./style.css", "example-shared-style" ],
	"viewStyle": [ "file:./view.css", "example-view-style" ]
}
```

<!--
In the context of WordPress, when a block is registered with PHP, it will automatically register all scripts, script modules, and styles that are found in the `block.json` file and use file paths rather than asset handles.
 -->
WordPress のコンテキスト内で、PHP でブロックが登録されると、自動的に `block.json` ファイル内に見つかるすべてのスクリプト、スクリプトモジュール、スタイルを登録し、アセットハンドルでなくファイルパスを使用します。

<!--
That's why the `WPDefinedAsset` type has to offer a way to mirror the parameters necessary to register scripts, script modules, and styles using [`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/), [`wp_register_script_module`](https://developer.wordpress.org/reference/functions/wp_register_script_module/), and [`wp_register_style`](https://developer.wordpress.org/reference/functions/wp_register_style/), and then assign these as handles or script module IDs associated with the block.
 -->
`WPDefinedAsset` タイプが、[`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/)、[`wp_register_script_module`](https://developer.wordpress.org/reference/functions/wp_register_script_module/)、[`wp_register_style`](https://developer.wordpress.org/reference/functions/wp_register_style/) を使用した、スクリプト、スクリプトモジュール、スタイルの登録に必要なパラメータをミラーする方法を提供し、ブロックと関連するハンドルやスクリプトモジュール ID を割り当てなければならないのはこのためです。

<!--
It's possible to provide an object which takes the following shape:
 -->
次の形式を取るオブジェクトを指定できます。

<!-- 
-   `dependencies` (`string[]`|`{ id: string, import?: 'dynamic'|'static' }[]`) - an array of registered script handles this script depends on. Script modules may use a simple string for static dependencies or the object form to indicate a dynamic dependency. Dynamic dependencies are dependencies that may or may not be used at runtime and are typically used with the dynamic `import('module-id')` syntax. Default value: `[]`.
-   `version` (`string`|`false`|`null`) - string specifying the script version number, if it has one, which is added to the URL as a query string for cache busting purposes. If the version is set to `false`, a version number is automatically added equal to the currently installed WordPress version. If set to `null`, no version is added. Default value: `false`.
 -->
- `dependencies` (`string[]`|`{ id: string, import?: 'dynamic'|'static' }[]`) - このスクリプトが依存する、登録済みのスクリプトハンドルの配列。スクリプトモジュールは、静的な依存関係には単純な文字列を、動的な依存関係を示すにはオブジェクト形式を使用します。動的な依存関係は、実行時に使用されるかどうかわからない依存関係で、通常は動的な `import('module-id')` 構文を使用します。デフォルト値: `[]`.
- `version` (`string`|`false`|`null`) - スクリプトのバージョン番号を指定する文字列 (バージョン番号がある場合)。バージョン番号が `false` に設定されている場合は、現在インストールされている WordPress のバージョン番号が自動的に追加されます。`null` に設定すると、バージョンは追加されません。デフォルト値: `false`.

<!--
The definition is stored inside a separate PHP file which ends with `.asset.php` and is located next to the JS/CSS file listed in `block.json`. WordPress will automatically detect this file through pattern matching. This option is the preferred one as it is expected it will become an option to auto-generate those asset files with `@wordpress/scripts` package.
 -->
定義は、個別の PHP ファイル内に保存されます。ファイル名の最後は `.asset.php` で、`block.json` にリストされた JavaScript や CSS ファイルの隣に配置されます。WordPress は自動的にこのファイルをパターンマッチで検知します。`@wordpress/scripts` パッケージでこれらのアセットファイルを自動生成するオプションになると期待されるため、このオプションが好まれます。

<!--
**Example:**
 -->
**例:**

```
build/
├─ block.json
├─ index.js
└─ index.asset.php
```

<!--
In `block.json`:
 -->
`block.json` 内

```json
{ "editorScript": "file:./index.js" }
```

<!--
In `build/index.asset.php`:
 -->
`build/index.asset.php` 内

```php
<?php
return array(
	'dependencies' => array(
		'react',
		'wp-blocks',
		'wp-i18n',
	),
	'version'      => '3be55b05081a63d8f9d0ecb466c42cfd',
);
```
<!-- 
### Frontend enqueueing
 -->
### フロントエンドでのエンキュー

<!-- 
Starting in the WordPress 5.8 release, it is possible to instruct WordPress to enqueue scripts and styles for a block type only when rendered on the frontend. It applies to the following asset fields in the `block.json` file:
 -->
WordPress 5.8リリースから、フロントエンドでレンダーされるときにのみ、ブロックタイプのスクリプトとスタイルをエンキューするように WordPress に指示できます。これは、`block.json` ファイルの以下のアセットフィールドに適用されます。

-   `script`
-   `viewScript`
-   `style`
-   `viewStyle` (Added in WordPress 6.5.0)

<!--
## Internationalization
 -->
## 国際化

<!--
WordPress string discovery automatically will translate fields marked in the documentation as translatable using the `textdomain` property when specified in the `block.json` file. In that case, localized properties will be automatically wrapped in `_x` function calls on the backend of WordPress when executing `register_block_type_from_metadata`. These translations are added as an inline script to the `wp-block-library` script handle in WordPress core or to the plugin's script handle.
 -->
<!--
WordPress 文字列ディスカバリは自動的に、翻訳可能とマークされたドキュメント内のフィールドを翻訳します。マークには `block.json` ファイル内の `textdomain` プロパティを使用します。このとき、ローカライズされるプロパティは、WordPress のバックエンドで`register_block_type_from_metadata` 実行時に、自動的に `_x` 関数でラップされます。これらの翻訳はインラインスクリプトとして WordPress コアの `wp-block-library` スクリプトハンドル、またはプラグインのスクリプトハンドルに追加されます。
 -->
<!--
WordPress string discovery system can automatically translate fields marked in this document as translatable. First, you need to set the `textdomain` property in the `block.json` file that provides block metadata.
 -->
WordPress 文字列ディスカバリシステムは、このドキュメントで翻訳可能とマークされたフィールドを自動的に翻訳します。まずブロックメタデータを提供する `block.json` ファイル内で `textdomain` プロパティを設定する必要があります。

<!--
**Example:**
 -->
**例:**

```json
{
	"title": "My block",
	"description": "My block is fantastic",
	"keywords": [ "fantastic" ],
	"textdomain": "my-plugin"
}
```

### PHP

<!--
In PHP, localized properties will be automatically wrapped in `_x` function calls on the backend of WordPress when executing `register_block_type`. These translations get added as an inline script to the plugin's script handle or to the `wp-block-library` script handle in WordPress core.
 -->
PHP では、ローカライズされるプロパティは、WordPress のバックエンドで `register_block_type` 実行時に、自動的に `_x` 関数でラップされます。これらの翻訳はインラインスクリプトとしてプラグインのスクリプトハンドル、または WordPress コアの `wp-block-library` スクリプトハンドルに追加されます。

<!--
The way `register_block_type` processes translatable values is roughly equivalent to the following code snippet:
 -->
`register_block_type` プロセスの働きにより、翻訳可能な値は、およそ次のコードスニペットのようになります。


```php
<?php
$metadata = array(
	'title'       => _x( 'My block', 'block title', 'my-plugin' ),
	'description' => _x( 'My block is fantastic!', 'block description', 'my-plugin' ),
	'keywords'    => array( _x( 'fantastic', 'block keyword', 'my-plugin' ) ),
);
```

<!--
Implementation follows the existing [get_plugin_data](https://codex.wordpress.org/Function_Reference/get_plugin_data) function which parses the plugin contents to retrieve the plugin’s metadata, and it applies translations dynamically.
 -->
実装は既存の [get_plugin_data](https://codex.wordpress.org/Function_Reference/get_plugin_data) 関数に従い、プラグインのコンテンツをパースしてプラグインのメタデータを取得し、動的に翻訳を適用します。

### JavaScript

<!--
In JavaScript, you can use `registerBlockType` method from `@wordpress/blocks` package and pass the metadata object loaded from `block.json` as the first param. All localized properties get automatically wrapped in `_x` (from `@wordpress/i18n` package) function calls similar to how it works in PHP.
 -->
JavaScript では `@wordpress/blocks` パッケージから `registerBlockType` を使用し、第1引数に `block.json` からロードされたブロックメタデータオブジェクトを渡すことができます。すべてのローカライズされたプロパティは自動的に `@wordpress/i18n` パッケージの `_x` 関数呼び出しでラップされます。これは PHP での動作と同様です。

<!--
**Example:**
 -->
**例:**

```js
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata, {
	edit: Edit,
	// ...other client-side settings
} );
```

<!--
## Backward compatibility
 -->
## 後方互換性

<!--
The existing registration mechanism (both server side and frontend) will continue to work, it will serve as low-level implementation detail for the `block.json` based registration.

Once all details are ready, Core Blocks will be migrated iteratively and third-party blocks will see warnings appearing in the console to encourage them to refactor the block registration API used.

The following properties are going to be supported for backward compatibility reasons on the client-side only. Some of them might be replaced with alternative APIs in the future:
 -->
既存の登録方式は、サイバーサイド、フロントエンドの両方で引き続き動作します。`block.json` ベース登録の、ローレベルな実装詳細として機能します。

すべての詳細が準備できたら、コアブロックが徐々に移行される予定です。また、サードパーティ製のブロックはコンソールに警告が表示され、使用中のブロック登録 API をリファクタリングするよう促されます。

次のプロパティは後方互換性のため、クライアントサイドのみでサポートされる予定です。将来的にはこのうちのいくつかが代替の API で置換されるかもしれません。

<!--
-   `edit` - see the [Edit and Save](/docs/reference-guides/block-api/block-edit-save.md) documentation for more details.
-   `save` - see the [Edit and Save](/docs/reference-guides/block-api/block-edit-save.md) documentation for more details.
-   `transforms` - see the [Transforms](/docs/reference-guides/block-api/block-registration.md#transforms-optional) documentation for more details.
-   `deprecated` - see the [Deprecated Blocks](/docs/reference-guides/block-api/block-deprecation.md) documentation for more details.
-   `merge` - undocumented as of today. Its role is to handle merging multiple blocks into one.
-   `getEditWrapperProps` - undocumented as well. Its role is to inject additional props to the block edit's component wrapper.
 -->
-   `edit` - 詳細についてはドキュメント「[edit と save](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/)」を参照してください。
-   `save` - 詳細についてはドキュメント「[edit と save](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/)」を参照してください。
-   `transforms` - 詳細についてはドキュメント「[transforms](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/)」を参照してください。
-   `deprecated` - 詳細についてはドキュメント「[非推奨にするブロック](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-deprecation/)」を参照してください。
-   `merge` - 今日現在、ドキュメントされていません。役割としては、複数のブロックを1つにマージ処理します。
-   `getEditWrapperProps` - 同様に、ドキュメントされていません。役割としては、ブロック編集のコンポーネントラッパーに追加の props を注入します。

<!--
**Example**:
 -->
**例**:

```js
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'my-plugin/block-name', {
	edit: function () {
		// Edit definition goes here.
	},
	save: function () {
		// Save definition goes here.
	},
	getEditWrapperProps: function () {
		// Implementation goes here.
	},
} );
```

<!--
In the case of [dynamic blocks](/docs/how-to-guides/block-tutorial/creating-dynamic-blocks.md) supported by WordPress, it should still be possible to register the `render_callback` property using both [`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) functions on the server.
 -->
WordPress でサポートされる [動的ブロック](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/) の場合、サーバー上で [`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) 関数を使用して `render_callback` プロパティを登録することは変わらず可能です。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md)
