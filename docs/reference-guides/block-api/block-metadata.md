<!--
# Metadata
 -->
# メタデータ

<!--
To register a new block type using metadata that can be shared between codebase that uses JavaScript and PHP, start by creating a `block.json` file. This file:
 -->
<!--
JavaScript コードと PHP コードベース間で共有可能なメタデータを使用して、新しいブロックタイプを登録できます。これにはまず `block.json` ファイルを作成します。`block.json` ファイルは、
 -->
<!--
-   Gives a name to the block type.
-   Defines some important metadata about the registered block type (title, category, icon, description, keywords).
-   Defines the attributes of the block type.
-   Registers all the scripts and styles for your block type.
 -->
<!--
-   ブロックタイプに名前を付与します。
-   登録されるブロックタイプの重要なメタデータを定義します。例: title、category、icon、description、keywords
-   ブロックタイプの属性を定義します。
-   ブロックタイプのすべてのスクリプトとスタイルを登録します。
 -->
<!--
Starting in WordPress 5.8 release, we encourage using the `block.json` metadata file as the canonical way to register block types. Here is an example `block.json` file that would define the metadata for a plugin create a notice block.
 -->
WordPress 5.8 リリースから、ブロックタイプを登録する標準の方法として、`block.json` メタデータファイルの使用が推奨されています。以下は、通知ブロックを作成するプラグインのメタデータを定義する `block.json` ファイルの例です。

<!--
**Example:**
 -->
**例:**

```json
{
	"apiVersion": 2,
	"name": "my-plugin/notice",
	"title": "Notice",
	"category": "text",
	"parent": [ "core/group" ],
	"icon": "star",
	"description": "Shows warning, error or success notices…",
	"keywords": [ "alert", "message" ],
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
	"editorScript": "file:./build/index.js",
	"script": "file:./build/script.js",
	"editorStyle": "file:./build/index.css",
	"style": "file:./build/style.css"
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
## Benefits using the metadata file
 -->
## メタデータファイルの利点

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
Last, but not least, the [WordPress Plugins Directory](https://wordpress.org/plugins/) can detect `block.json` files, highlight blocks included in plugins, and extract their metadata. If you wish to [submit your block(s) to the Block Directory](/docs/getting-started/tutorials/create-block/submitting-to-block-directory.md), all blocks contained in your plugin must have a `block.json` file for the Block Directory to recognize them.
 -->
最後に、[WordPress プラグインディレクトリ](https://wordpress.org/plugins/)は、`block.json` ファイルを検出し、プラグインに含まれるブロックをハイライトし、そのメタデータを抽出できます。[ブロックディレクトリに自分のブロックを登録する](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/submitting-to-block-directory/)場合、ブロックディレクトリに認識させるには、プラグインに含まれるすべてのブロックに `block.json` ファイルが必要です。

<!--
## Block registration
 -->
## ブロックの登録

<!--
### PHP (server-side)
 -->
### PHP (サーバー側)

<!--
The [`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) function that aims to simplify the block type registration on the server, can read metadata stored in the `block.json` file.
 -->
[`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) 関数を使用すると、サーバーで `block.json` ファイル内に保存されたメタデータから簡単にブロックタイプを登録できます。

<!--
This function takes two params relevant in this context (`$block_type` accepts more types and variants):
 -->
この関数は、このコンテキストに関連する2つのパラメータを取ります (`$block_type` は、より多くのタイプやバリアントを受け入れます）。

<!--
-   `$block_type` (`string`) – path to the folder where the `block.json` file is located or full path to the metadata file if named differently.
-   `$args` (`array`) – an optional array of block type arguments. Default value: `[]`. Any arguments may be defined. However, the one described below is supported by default:
    -   `$render_callback` (`callable`) – callback used to render blocks of this block type.
 -->
-   `$block_type` (`string`) – `block.json` ファイルのあるフォルダーへのパス、または、名前が異なる場合、メタデータファイルへのフルパス。
-   `$args` (`array`) – ブロックタイプ引数のオプション配列。デフォルト値は `[]`。任意の引数を定義可。ただし、以下はデフォルトでサポートされる。
    -   `$render_callback` (`callable`) – このブロックタイプのブロックをレンダーする際に使用されるコールバック。

<!--
It returns the registered block type (`WP_Block_Type`) on success or `false` on failure.
 -->
関数は、成功すると登録されたブロックタイプ (`WP_Block_Type`)、失敗すると `false` を返します。

<!--
**Example:**
 -->
**例:**

```php
register_block_type(
	__DIR__ . '/notice',
	array(
		'render_callback' => 'render_block_core_notice',
	)
);
```

<!--
### JavaScript (client-side)
 -->
### JavaScript (クライアント側)

<!--
When the block is registered on the server, you only need to register the client-side settings on the client using the same block’s name.
 -->
サーバーでブロックを登録した場合、クライアントではクライアント側設定を同じブロック名で登録するだけで構いません。

<!--
**Example:**
 -->
**例:**

```js
registerBlockType( 'my-plugin/notice', {
	edit: Edit,
	// ...other client-side settings
} );
```

<!--
Although registering the block also on the server with PHP is still recommended for the reasons above, if you want to register it only client-side you can now use `registerBlockType` method from `@wordpress/blocks` package to register a block type using the metadata loaded from `block.json` file.
 -->
上述の理由により、PHP を使用してサーバー上にもブロックを登録することが推奨されていますが、クライアントサイドだけでブロックを登録する場合は、`@wordpress/blocks` パッケージの `registerBlockType` メソッドを使用して、`block.json` ファイルから読み込んだメタデータでブロックタイプを登録できます。

<!--
The function takes two params:
 -->
関数は2つの引数を取ります。

<!--
-   `$blockNameOrMetadata` (`string`|`Object`) – block type name (supported previously) or the metadata object loaded from the `block.json` file with a bundler (e.g., webpack) or a custom Babel plugin.
-   `$settings` (`Object`) – client-side block settings.
 -->
-   `$blockNameOrMetadata` (`string`|`Object`) – ブロックタイプ名 (以前からサポート済み)、または、webpack などのバンドラーやカスタム Babel プラグインで、`block.json`ファイルからロードされたメタデータオブジェクトです。
-   `$settings` (`Object`) – クライアント側のブロックの設定。

<!--
It returns the registered block type (`WPBlock`) on success or `undefined` on failure.
 -->
関数は、成功すると登録されたブロックタイプ (`WPBlock`)、失敗すると `undefined` を返します。

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
## Block API
 -->
## ブロック API

<!--
This section describes all the properties that can be added to the `block.json` file to define the behavior and metadata of block types.
 -->
このセクションでは、`block.json` ファイルに追加可能な、ブロックタイプの振る舞いとメタデータを定義するすべてのプロパティを紹介します。

### API Version

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
{ "apiVersion": 2 }
```

<!--
The version of the Block API used by the block. The most recent version is `2` and it was introduced in WordPress 5.6.
 -->
ブロックが使用するBlock APIのバージョン。最新のバージョンは `2` で、WordPress 5.6 で導入されました。

<!--
See the [the API versions documentation](/docs/reference-guides/block-api/block-api-versions.md) for more details.
 -->
詳細については [API バージョンのドキュメント](/docs/reference-guides/block-api/block-api-versions.md) を参照してください。

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
This is the display title for your block, which can be translated with our translation functions. The block inserter will show this name.
 -->
ブロックの表示タイトルです。翻訳関数で翻訳できます。ブロックインサーターはこの名前を表示します。

### Category

<!--
-   Type: `string`
-   Required
-   Localized: No
-   Property: `category`
 -->
-   型: `string`
-   必須
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
 -->
ブロックを識別しやすくするために icon プロパティを指定してください。任意の WordPress Dashicons を指定できます。またスラッグは 非 js コンテキストでのフォールバックとなります。

<!--
**Note:** It's also possible to override this property on the client-side with the source of the SVG element. In addition, this property can be defined with JavaScript as an object containing background and foreground colors. This colors will appear with the icon when they are applicable e.g.: in the inserter. Custom SVG icons are automatically wrapped in the [wp.primitives.SVG](/packages/primitives/src/svg/README.md) component to add accessibility attributes (aria-hidden, role, and focusable).
 -->
**注意:** このプロパティはまた、クライアントサイドで、SVG 要素のソースで上書きすることもできます。加えて、このプロパティは背景色や前景色を含むオブジェクトとして、 JavaScript で定義できます。この色は、たとえばインサーター内で表示される場合にアイコンと一緒に使用されます。カスタム SVG アイコンは自動で [wp.primitives.SVG](/packages/primitives/src/svg/README.md) コンポーネントにラップされ、アクセシビリティ属性 (aria-hidden、role、focusable) が追加されます。

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

### Text Domain

<!--
-   Type: `string`
-   Optional
-   Localized: No
-   Property: `textdomain`
 -->
-   型: `string`
-   オプション
-   ローカライズ: 不可
-   プロパティ: `textdomain`

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
See the [the attributes documentation](/docs/reference-guides/block-api/block-attributes.md) for more details.
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
Context provided for available access by descendants of blocks of this type, in the form of an object which maps a context name to one of the block's own attribute.
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
It contains as set of options to control features used in the editor. See the [the supports documentation](/docs/reference-guides/block-api/block-supports.md) for more details.
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
Plugins and Themes can also register [custom block style](/docs/reference-guides/filters/block-filters.md#block-styles) for existing blocks.
 -->
プラグインやテーマはまた既存のブロックに対して、[カスタムブロックスタイル](https://developer.wordpress.org/block-editor/developers/filters/block-filters/#block-styles) を登録できます。


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
See the [the example documentation](/docs/reference-guides/block-api/block-registration.md#example-optional) for more details.
 -->
詳細については [ドキュメントの「example (オプション)」セクション](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/) を参照してください。

### Editor Script

<!--
-   Type: `string` ([WPDefinedAsset](#WPDefinedAsset))
-   Optional
-   Localized: No
-   Property: `editorScript`
 -->
-   型: `string` ([WPDefinedAsset](#WPDefinedAsset))
-   オプション
-   ローカライズ: 不可
-   プロパティ: `editorScript`

```json
{ "editorScript": "file:./build/index.js" }
```

<!--
Block type editor script definition. It will only be enqueued in the context of the editor.
 -->
ブロックタイプエディタースクリプト定義。エディターのコンテキスト内でのみエンキューされます。

### Script

<!--
-   Type: `string` ([WPDefinedAsset](#WPDefinedAsset))
-   Optional
-   Localized: No
-   Property: `script`
 -->
-   型: `string` ([WPDefinedAsset](#WPDefinedAsset))
-   オプション
-   ローカライズ: 不可
-   プロパティ: `script`

```json
{ "script": "file:./build/script.js" }
```

<!--
Block type frontend script definition. It will be enqueued both in the editor and when viewing the content on the front of the site.
 -->
ブロックタイプフロントエンドスクリプト定義。エディター内、および、サイトのフロントエンドでコンテンツが表示される際の両方でエンキューされます。

### Editor Style

<!--
-   Type: `string` ([WPDefinedAsset](#WPDefinedAsset))
-   Optional
-   Localized: No
-   Property: `editorStyle`
 -->
-   型: `string` ([WPDefinedAsset](#WPDefinedAsset))
-   オプション
-   ローカライズ: 不可
-   プロパティ: `editorStyle`

```json
{ "editorStyle": "file:./build/index.css" }
```

<!--
Block type editor style definition. It will only be enqueued in the context of the editor.
 -->
ブロックタイプエディタースタイル定義。エディターのコンテキスト内でのみエンキューされます。

### Style

<!--
-   Type: `string` ([WPDefinedAsset](#WPDefinedAsset))
-   Optional
-   Localized: No
-   Property: `style`
 -->
-   型: `string` ([WPDefinedAsset](#WPDefinedAsset))
-   オプション
-   ローカライズ: 不可
-   プロパティ: `style`

```json
{ "style": "file:./build/style.css" }
```

<!--
Block type frontend style definition. It will be enqueued both in the editor and when viewing the content on the front of the site.
 -->
ブロックタイプフロントエンドスタイル定義。エディター内、および、サイトのフロントエンドでコンテンツが表示される際の両方でエンキューされます。

<!--
## Assets
 -->
## アセット

<!--
### `WPDefinedAsset`
 -->
### WPDefinedAsset

<!--
The `WPDefinedAsset` type is a subtype of string, where the value represents a path to a JavaScript or CSS file relative to where `block.json` file is located. The path provided must be prefixed with `file:`. This approach is based on how npm handles [local paths](https://docs.npmjs.com/files/package.json#local-paths) for packages.

An alternative would be a script or style handle name referencing a registered asset using WordPress helpers.
 -->
`WPDefinedAsset` タイプは string のサブタイプです。値は、`block.json` ファイルの場所から JavaScript ファイルや CSS ファイルへの相対パスで表します。提供されるパスには、接頭辞 `file:` を付ける必要があります。この方法は npm のパッケージの[ローカルパス](https://docs.npmjs.com/files/package.json#local-paths) を扱う方法に基づいています。

代わりに WordPress ヘルパーを使用して登録されたアセットを参照する、スクリプトハンドル名やスタイルハンドル名も使用できます。
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
	"editorScript": "file:./build/index.js",
	"editorStyle": "my-editor-style-handle"
}
```

<!--
In the context of WordPress, when a block is registered with PHP, it will automatically register all scripts and styles that are found in the `block.json` file and use file paths rather than asset handles.
 -->
WordPress のコンテキストで、PHP でブロックを登録すると、`block.json` ファイル内に見つかるすべてのスクリプトとスタイルは自動的に登録され、アセットハンドルでなくファイルパスが使用されます。

<!--
That's why, the `WPDefinedAsset` type has to offer a way to mirror also the shape of params necessary to register scripts and styles using [`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/) and [`wp_register_style`](https://developer.wordpress.org/reference/functions/wp_register_style/), and then assign these as handles associated with your block using the `script`, `style`, `editor_script`, and `editor_style` block type registration settings.
 -->
`WPDefinedAsset` タイプがミラーする方法だけでなく、[`wp_register_script`](https://developer.wordpress.org/reference/functions/wp_register_script/) と [`wp_register_style`](https://developer.wordpress.org/reference/functions/wp_register_style/) を使用してスクリプトとスタイルを登録する際に必要なパラメータも提供する必要があるのはこのためです。ブロックタイプ登録設定 `script`、`style`、`editor_script`、`editor_style` を使用して、ブロックに関連付けられたハンドルとして割り当てます。

<!--
It's possible to provide an object which takes the following shape:
 -->
次の形式を取るオブジェクトを提供することができます。

<!--
-   `handle` (`string`) - the name of the script. If omitted, it will be auto-generated.
-   `dependencies` (`string[]`) - an array of registered script handles this script depends on. Default value: `[]`.
-   `version` (`string`|`false`|`null`) - string specifying the script version number, if it has one, which is added to the URL as a query string for cache busting purposes. If the version is set to `false`, a version number is automatically added equal to current installed WordPress version. If set to `null`, no version is added. Default value: `false`.
 -->
-   `handle` (`string`) - スクリプトの名前。省略すると、自動的に生成される。
-   `dependencies` (`string[]`) - このスクリプトが依存する、登録されたスクリプトのハンドルの配列。デフォルト値: `[]`。
-   `version` (`string`|`false`|`null`) - スクリプトのバージョン番号を指定する文字列。バージョンを指定すると、番号は URL にクエリ文字列として追加されます。これはキャッシュを避けるためです。`false` に設定すると、バージョン番号は自動的に、現在インストールされている WordPress のバージョンが追加されます。`null` に設定すると、バージョンは追加されません。デフォルト値: `false`。

<!--
The definition is stored inside separate PHP file which ends with `.asset.php` and is located next to the JS/CSS file listed in `block.json`. WordPress will automatically detect this file through pattern matching. This option is the preferred one as it is expected it will become an option to auto-generate those asset files with `@wordpress/scripts` package.
 -->
定義は、個別の PHP ファイル内に保存されます。ファイル名の最後は `.asset.php` で、`block.json` にリストされた JavaScript や CSS ファイルの隣に配置されます。WordPress は自動的にこのファイルをパターンマッチで検知します。`@wordpress/scripts` パッケージでこれらのアセットファイルを自動生成するオプションになると期待されるため、このオプションが好まれます。

<!--
**Example:**
 -->
**例:**

```
build/
├─ index.js
└─ index.asset.php
```

<!--
In `block.json`:
 -->
`block.json` 内

```json
{ "editorScript": "file:./build/index.js" }
```

<!--
In `build/index.asset.php`:
 -->
`build/index.asset.php` 内

```php
<?php
return array(
	'dependencies' => array(
		'wp-blocks',
		'wp-element',
		'wp-i18n',
	),
	'version'      => '3be55b05081a63d8f9d0ecb466c42cfd',
);
```
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
## Backward Compatibility
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
In the case of [dynamic blocks](/docs/how-to-guides/block-tutorial/creating-dynamic-blocks.md) supported by WordPress, it should be still possible to register `render_callback` property using both [`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) and `register_block_type_from_metadata` functions on the server.
In the case of [dynamic blocks](/docs/how-to-guides/block-tutorial/creating-dynamic-blocks.md) supported by WordPress, it should be still possible to register `render_callback` property using both [`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) function on the server.
 -->
WordPress にサポートされる [ダイナミックブロック](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/) の場合、サーバー上で [`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) 関数を使用して `render_callback` プロパティを登録することは変わらず可能です。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md)

