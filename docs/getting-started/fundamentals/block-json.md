# block.json

<!-- 
The `block.json` file simplifies the process of defining and registering a block by using the same block's definition in JSON format to register the block on both the server and the client (Block Editor).
 -->
`block.json` ファイルはブロックの定義と登録の両方のプロセスを簡素化します。JSON 形式の同じブロック定義を使用し、サーバーとクライアント (ブロックエディター) の両方でブロックを登録します。

<!-- 
The diagram below details the basic structure of the `block.json` file.
 -->
次の図は `block.json` ファイルの基本的な構造を詳説しています。

<!-- 
[![Open block.json diagram image](https://developer.wordpress.org/files/2023/11/block-json.png)](https://developer.wordpress.org/files/2023/11/block-json.png "Open block.json diagram image")
 -->
[![block.json の図解を開く](https://developer.wordpress.org/files/2023/11/block-json.png)](https://developer.wordpress.org/files/2023/11/block-json.png "block.json の図解を開く")

<!-- 
<div class="callout callout-info">
	To view a complete block example and its associated <a href="https://github.com/WordPress/block-development-examples/blob/trunk/plugins/block-supports-6aa4dd/src/block.json"><code>block.json</code></a> file, visit the <a href="https://github.com/WordPress/block-development-examples/tree/trunk/plugins/block-supports-6aa4dd">Block Development Examples</a> GitHub repository.
</div>
 -->
完全なブロックの例と関連する <a href="https://github.com/WordPress/block-development-examples/blob/trunk/plugins/block-supports-6aa4dd/src/block.json"><code>block.json</code></a> ファイルを参照するには、<a href="https://github.com/WordPress/block-development-examples/tree/trunk/plugins/block-supports-6aa4dd">Block Development Examples</a> GitHub リポジトリにアクセスしてください。

<!-- 
Besides simplifying a block's registration, using a `block.json` has [several benefits](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#benefits-using-the-metadata-file), including improved performance.
 -->
`block.json`を使用することでブロックの登録が簡単になるだけでなく、パフォーマンスの向上など[複数の利点](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E5%88%A9%E7%82%B9)があります。

<!-- 
The [Metadata in block.json](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/) documentation has a comprehensive guide on all the properties you can use in a `block.json` file for a block. This article will cover the most common options, which allow you to specify:
 -->
「[block.json のメタデータ](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/)」は、`block.json` ファイル内で使用できる、ブロックのすべてのプロパティに関する包括的なガイドです。この記事では、指定可能な最も一般的なオプションを取り上げます:

<!-- 
- The block's basic metadata.
- The files that dictate the block's functionality, appearance, and output.
- How data is stored within the block.
- The block's setting panels within the user interface.
 -->
- ブロックの基本的なメタデータ。
- ブロックの機能、外観、出力を決定するファイル。
- ブロック内へのデータ保管方法。
- ユーザーインターフェース内でのブロックの設定パネル。

<!-- 
## Basic metadata of a block
 -->
## ブロックの基本のメタデータ

<!-- 
Using `block.json` properties, you can define how the block will be uniquely identified and what information is displayed in the Block Editor. These properties include:
 -->
`block.json` のプロパティを使用すると、ブロックの一意な識別方法や、ブロックエディターに表示されるブロックの情報を定義できます。プロパティの一部を紹介します。

<!-- 
- **[`apiVersion`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#api-version):** Specifies the [API](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-api-versions/) version the block uses. Use the latest version unless you have specific requirements.
- **[`name`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#name):**  The unique name of the block, including namespace (e.g., `my-plugin/my-custom-block`).
- **[`title`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#title):** The display title for the block, shown in the Inserter.
- **[`category`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#category):** The category under which the block appears in the Inserter. Common categories include `text`, `media`, `design`, `widgets`, and `theme`.
- **[`icon`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#icon):**  An icon representing the block in the Inserter. This can be a [Dashicon](https://developer.wordpress.org/resource/dashicons) slug or a custom SVG icon.
- **[`description`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#description):**  A short description of the block, providing more context than the title.
- **[`keywords`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#keywords):** An array of keywords to help users find the block when searching.
- **[`textdomain`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#text-domain):** The text domain for the block, used for internationalization.
 -->
- **[`apiVersion`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#API-Version):** ブロックが使用する [API](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-api-versions/) のバージョンを指定します。特別な要件がなければ、最新のバージョンを使用してください。
- **[`name`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Name):** 名前空間を含むブロックの一意の名前 (例: `my-plugin/my-custom-block`)。
- **[`title`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Title):** ブロックの表示タイトル。インサーター内で表示されます。
- **[`category`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Category):** インサーター内で、その下にブロックが表示されるカテゴリー。一般的なカテゴリーは、`text`、`media`、`design`、`widgets`、`theme`。
- **[`icon`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Icon):** インサーター内でブロックを表すアイコン。[Dashicon](https://developer.wordpress.org/resource/dashicons)スラッグまたはカスタム SVG アイコン。
- **[`description`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Description):** ブロックの短い説明。タイトル以上のコンテキストを与えます。
- **[`keywords`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Keywords):** ユーザーのブロックの検索を支援するキーワードの配列。
- **[`textdomain`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Text-Domain):** 国際化で使用されるブロックのテキストドメイン。

<!-- 
## Files for the block's behavior, output, or style 
 -->
## ブロックの動作、出力、スタイルのためのファイル

<!-- 
The [`editorScript`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#editor-script) and [`editorStyle`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#editor-style) properties allow defining Javascript and CSS files to be enqueued and loaded **only in the editor**.
 -->
<!-- 
[`editorScript`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Editor-Script) と [`editorStyle`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Editor-Style) プロパティは **エディターでのみ** エンキューされてロードされる Javascript と CSS ファイルを定義します。
 -->
<!-- 
The [`script`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#script) and [`style`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#style) properties allow the definition of Javascript and CSS files to be enqueued and loaded **in both the editor and the front end**.
 -->
<!--  
[`script`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#script) と [`style`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#style) プロパティは **エディターとフロントエンドの両方で** エンキューされてロードされる Javascript と CSSファイルを定義します。
 -->
<!-- 
The [`viewScript`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script) property allow us to define the Javascript file or files to be enqueued and loaded **only in the front end**.
 -->
<!-- 
[`viewScript`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#View-Script) プロパティは **フロントエンドでのみ** エンキューされてロードされる1つ以上の Javascript ファイルを定義します。
 -->
<!-- 
All these properties (`editorScript`, `editorStyle`, `script` `style`,`viewScript`) accept as a value a [path for the file](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#wpdefinedpath) (prefixed with `file:`), a [handle registered with `wp_register_script` or `wp_register_style`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#wpdefinedasset), or an array with a mix of both.
 -->
<!-- 
これらのプロパティ (`editorScript`, `editorStyle`, `script` `style`, `viewScript`) の値には、[ファイルのパス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#WPDefinedPath) (接頭辞に `file:` を付ける) か、[`wp_register_script` または `wp_register_style` で登録されたハンドル](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#WPDefinedAsset) か、その両方を含む配列を指定します。
 -->
<!-- 
The [`render`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#render) property ([introduced on WordPress 6.1](https://make.wordpress.org/core/2022/10/12/block-api-changes-in-wordpress-6-1/)) sets the path of a `.php` template file that will render the markup returned to the front end. This only method will be used to return the markup for the block on request only if `$render_callback` function has not been passed to the `register_block_type` function.
 -->
<!-- 
[`render`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Render) プロパティ ([WordPress 6.1で導入](https://make.wordpress.org/core/2022/10/12/block-api-changes-in-wordpress-6-1/)) は、フロントエンドに返されるマークアップをレンダーする `.php` テンプレートファイルのパスを設定します。このメソッドは `register_block_type` 関数に `$render_callback` 関数が渡されていない場合にのみ、リクエストに応じてブロックのマークアップを返すために使用されます。
 -->
<!-- 
## Data Storage in the Block with `attributes`
 -->
<!-- 
## `attributes`によるブロック内へのデータ保管
 -->
<!-- 
The [`attributes` property](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#attributes) allows a block to declare "variables" that store data or content for the block.
 -->
<!-- 
[`attributes`プロパティ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Attributes)では、ブロックにデータや内容を格納する「変数」を宣言できます。
 -->

<!-- 
The `block.json` file also allows you to specify the essential files for a block's functionality:
 -->
また、`block.json` ファイルではブロックの機能に必要なファイルを指定できます。

<!-- 
- **[`editorScript`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#editor-script):** A JavaScript file or files for use only in the Block Editor.
- **[`editorStyle`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#editor-style):** A CSS file or files for styling within the Block Editor.
- **[`script`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#script):** A JavaScript file or files loaded in both the Block Editor and the front end.
- **[`style`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#style):** A CSS file or files applied in both the Block Editor and the front end.
- **[`viewScript`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script):** A JavaScript file or files intended solely for the front end.
 -->
- **[`editorScript`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#editor-script):** ブロックエディター内のみで使用される JavaScript ファイル。
- **[`editorStyle`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#editor-style):** ブロックエディター内でのスタイル用の CSS ファイル。
- **[`script`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#script):** ブロックエディターとフロントエンドの両方で読み込まれる JavaScript ファイル。
- **[`style`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#style):** ブロックエディターとフロントエンドの両方で適用される CSS ファイル。
- **[`viewScript`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#view-script):** フロントエンドのみを対象とする JavaScript ファイル。

<!-- 
For all these properties, you can provide a [file path](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#wpdefinedpath) (starting with `file:`), a [handle](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#wpdefinedasset) that has been registered using `wp_register_script` or `wp_register_style`, or an array combining both options.
 -->
これらのすべてのプロパティに対して、[ファイルのパス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#WPDefinedPath) (`file:` で始まる) や、`wp_register_script` または `wp_register_style` を使用して登録された [ハンドル](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#WPDefinedAsset)、または、両方のオプションを組み合わせた配列を指定できます。

<!-- 
Additionally, the [`render`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#render) property, [introduced on WordPress 6.1](https://make.wordpress.org/core/2022/10/12/block-api-changes-in-wordpress-6-1/), specifies the path to a PHP template file responsible for generating a [dynamically rendered](/docs/getting-started/fundamentals/static-dynamic-rendering.md) block's front-end markup. This approach is used if a `$render_callback` function is not provided to the `register_block_type()` function.
 -->
さらに、[WordPress 6.1 で導入された](https://make.wordpress.org/core/2022/10/12/block-api-changes-in-wordpress-6-1/) [`render`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Render) プロパティは、[動的にレンダーされる](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/static-dynamic-rendering/) ブロックのフロントエンドのマークアップを生成する PHP テンプレートファイルへのパスを指定します。この方法は、 `register_block_type()` 関数に `$render_callback` 関数が提供されていない場合に使用されます。

<!-- 
## Using block `attributes` to store data
 -->
## ブロックの attributes を使用したデータの保存

<!-- 
Block [attributes](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#attributes) are settings or data assigned to blocks. They can determine various aspects of a block, such as its content, layout, style, and any other specific information you need to store along with your block's structure. If the user changes a block, such as modifying the font size, you need a way to persist these changes. Attributes are the solution. 
 -->
ブロックの[属性](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Attributes)は、ブロックに割り当てられた設定やデータです。ブロックのさまざまな要素、例えば、コンテンツ、レイアウト、スタイル、その他ブロックの構造とともに保存したい特定の情報を決定できます。フォントサイズを変更するなど、ユーザーがブロックを変更すると、その変更を永続化する方法が必要です。属性はその解決策です。

<!-- 
When registering a new block type, the `attributes` property of `block.json` describes the custom data the block requires and how they're stored in the database. This allows the Block Editor to parse these values correctly and pass the `attributes` to the block's `Edit` component and `save` function.
 -->
新しいブロックタイプを登録する際、`block.json` の `attributes` プロパティに、ブロックが必要なカスタムデータとデータベースへの保存方法を記述できます。これにより、ブロックエディターは値を正しく解析し、ブロックの `Edit` コンポーネントと `save` 関数に `attributes` を渡します。

<!-- 
Here's an example of three attributes defined in `block.json`:
 -->
以下は `block.json` で定義された3つの属性の例です。

```json
"attributes": {
	"fallbackCurrentYear": {
		"type": "string"
	},
	"showStartingYear": {
		"type": "boolean"
	},
	"startingYear": {
		"type": "string"
	}
},
```

<!-- 
By default, attributes are serialized and stored in the block's delimiter, but this [can be configured](https://developer.wordpress.org/news/2023/09/understanding-block-attributes/).
 -->
<!-- 
デフォルトでは属性はシリアライズされ、ブロックのデリミッタに格納されますが、これは[構成できます](https://developer.wordpress.org/news/2023/09/understanding-block-attributes/)。
 -->
<!-- 
_Example: Atributes stored in the Markup representation of the block_
 -->
<!--  
_例: ブロックのマークアップ表現として保管された属性_
 -->

<!-- 
Blocks are "delimited" using HTML-style comment tags that contain specific JSON-like attributes. These delimiters make it possible to recognize block boundaries and parse block attributes when rendering post content or editing a post in the Block Editor. 
 -->
ブロックは、JSON に似た特定の属性を含む HTML スタイルのコメントタグを使用して「区切られます」。これらの区切り文字によって、投稿コンテンツをレンダリングしたり、ブロックエディターで投稿を編集する際、ブロックの境界を認識し、ブロックの属性を解析できます。

<!-- 
The code example below demonstrates the attributes defined in the block delimiter. 
 -->
以下は、ブロックの区切り文字で定義された属性を示すコードの例です。

```html
<!-- wp:block-development-examples/copyright-date-block-09aac3 {"fallbackCurrentYear":"2023","showStartingYear":true,"startingYear":"2020"} -->
<p class="wp-block-block-development-examples-copyright-date-block-09aac3">© 2020–2023</p>
<!-- /wp:block-development-examples/copyright-date-block-09aac3 -->
```

<!--  
All attributes are serialized and stored in the block's delimiter by default, but this can be configured to suit your needs. Check out the [Understanding Block Attributes](https://developer.wordpress.org/news/2023/09/understanding-block-attributes/) article to learn more.
 --> 
すべての属性はシリアライズされ、デフォルトではブロックの区切り文字に格納されますが、これはニーズに合わせて構成できます。詳しくは記事「[Understanding Block Attributes](https://developer.wordpress.org/news/2023/09/understanding-block-attributes/)」を参照してください。

<!-- 
These [attributes](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#attributes) are passed to the React component `Edit`(to display in the Block Editor) and the `save` function (to return the markup saved to the database) of the block, and to any server-side render definition for the block (see the `render` property above).
 -->
<!-- 
これらの [属性](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/#%E5%B1%9E%E6%80%A7) は React コンポーネントの `Edit` (ブロックエディターに表示するため)、`save` 関数 (データベース に保存されるマークアップを返すため)、そしてブロックの任意のサーバーサイドレンダー定義 (上の `render` プロパティ参照) に渡されます。
 -->

<!-- 
### Reading and updating attributes 
 -->
### 属性の読み取りと更新

<!-- 
The `Edit` component receives exclusively the capability of updating the attributes via the [`setAttributes`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#setattributes) function.
 -->
<!--  
`Edit` コンポーネントは、[`setAttributes`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/#setAttributes) 関数を介して主に属性を更新する機能を受け取ります。
 -->
<!-- 
_See how the attributes are passed to the [`Edit` component](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/edit.js), [the `save` function](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/save.js) and [the `render.php`](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/render.php) in this [full block example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/copyright-date-block-09aac3) of the  code above_
 -->
<!-- 
_どのように属性が [`Edit` コンポーネント](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/edit.js)、[`save` 関数](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/save.js)、[`render.php`](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/render.php) に渡されるかは、上のコードの [ブロックの例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/copyright-date-block-09aac3) を参照してください。_
 -->
<!-- 
<div class="callout callout-info">
Check the <a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/"> <code>attributes</code> </a> reference page for full info about the Attributes API. 
</div>
 -->
<!-- 
> Attributes API に関する完全な情報については、<a href="https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-attributes/">属性</a>のリファレンスページを参照してください。
 -->

<!-- 
These [attributes](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#attributes) are passed to the block's `Edit` React component for display in the Block Editor, to the `save` function for generating the markup that gets stored in the database, and to any server-side rendering definition for the block.
 -->
これらの[属性](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/#attributes)は、ブロックエディターでの表示のためにブロックの `Edit` React コンポーネントや、データベースに保存されるマークアップ生成のために `save` 関数、ブロックのサーバーサイドレンダリング定義に渡されます。

<!-- 
The `Edit` component uniquely possesses the ability to modify these attributes through the [`setAttributes`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#setattributes) function.
 -->
`Edit` コンポーネントには [`setAttributes`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/#setattributes) 関数を通して、これらの属性を変更するユニークな機能があります。

<!-- 
The following diagram details how attributes are stored, read, and updated in a typical block.
 -->
次の図は、典型的なブロックにおいて、属性がどのように保存、読み取り、更新されるかを詳説しています。

<!-- 
[![Open Attributes diagram image](https://developer.wordpress.org/files/2023/11/attributes.png)](https://developer.wordpress.org/files/2023/11/attributes.png "Open Attributes diagram image")
 -->
[![属性の図解を開く](https://developer.wordpress.org/files/2023/11/attributes.png)](https://developer.wordpress.org/files/2023/11/attributes.png "属性の図解を開く")

<!-- 
_See how the attributes are passed to the [`Edit`](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/edit.js) component, the [`save`](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/save.js) function, and [`render.php`](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/render.php) in this [complete block example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/copyright-date-block-09aac3)._
 -->
_どのように属性が [`Edit`](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/edit.js) コンポーネント、[`save`](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/save.js) 関数、[`render.php`](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/render.php) に渡されるかについては、この[完全なブロックの例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/copyright-date-block-09aac3)を参照してください。_

<!-- 
For more information about attributes and how to use them in your custom blocks, visit the [Attributes API](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/) reference page. 
 -->
属性とカスタムブロックでの使用方法の詳細については、[属性 API](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-attributes/) リファレンスガイドを参照してください。 

<!-- 
<div class="callout callout-info">
Check the <a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/"> <code>attributes</code> </a> reference page for full info about the Attributes API. 
</div>
 -->
<!-- 
> Attributes API に関する完全な情報については、<a href="https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-attributes/">属性</a>のリファレンスページを参照してください。
 -->

<!-- 
## Enable UI settings panels for the block with `supports`
 -->
<!-- 
## `supports` によるブロックの UI 設定パネルの有効化
 -->

<!-- 
The [`supports`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#supports) property allows a block to declare support for certain features, enabling users to customize specific settings (like colors or margins) from the Settings Sidebar.
 -->
<!-- 
[`supports`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Supports) プロパティを使用すると、ブロックは特定の機能のサポートを宣言でき、ユーザーは設定サイドバーから特定の設定 (色やマージンなど) をカスタマイズできます。
 -->

<!-- 
Many blocks, including core blocks, offer similar customization options, whether changing the background color, text color, or adding padding customization options.
 -->
<!-- 
コアブロックを含む多くのブロックは、同種のカスタマイズオプションを提供します。例えば、背景色の変更、テキスト色の変更、パディングのカスタマイズオプションの追加など。
 -->
<!-- 
The [`supports`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#supports) property in `block.json` allows a block to declare support for certain features, enabling users to customize specific settings (like colors or margins) from the Settings Sidebar.
 -->
<!-- 
`block.json` の [`supports`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Supports) プロパティは、ブロックの特定機能のサポートを宣言します。ユーザーは設定サイドバーから特定の設定 (色やマージンなど) をカスタマイズできます。
 -->
<!-- 
Using the available block `supports` allows you to align your block's behavior with core blocks and avoid replicating the same functionality yourself.
 -->
<!-- 
利用可能なブロック `supports` を使用することで、ブロックの動作をコアブロックに合わせられ、同じ機能を自分で繰り返さずにすみます。
 -->
<!-- 
_Example: Supports as defined in block.json_
 -->
<!-- 
_例: block.json で定義される supports_
 -->


<!-- 
## Using block supports to enable settings and styles
 -->
## supports を使用したブロックの設定とスタイルの有効化

<!-- 
Many blocks, including Core blocks, offer similar customization options, such as background color, text color, and padding adjustments.
 -->
コアブロックを含む多くのブロックには、同種のカスタマイズオプションがあります。例えば、背景色、テキスト色、パディングの調整など。

<!-- 
The [`supports`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#supports) property in `block.json` allows a block to declare support for a set of these common customization options. When enabled, users of the block can then adjust things like color or padding directly from the Settings Sidebar.
 -->
`block.json` の [`supports`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Supports) プロパティを使用すると、これらのブロックの一般的なカスタマイズオプションを宣言できます。有効化するとブロックのユーザーは、色やマージンなどのオプションを設定サイドバーから直接調整できます。

<!-- 
Leveraging these predefined block supports helps ensure your block behaves consistently with Core blocks, eliminating the need to recreate similar functionalities from scratch.
 -->
これらの定義済みの supports を活用することで、ブロックはコアブロックの動作と一貫性を持ち、同様の機能をゼロから作り直す必要がなくなります。

<!-- 
Here's an example of color supports defined in `block.json`:
 -->
以下は `block.json` で定義された色の supports の例です。

```json
"supports": {
	"color": {
		"text": true,
		"link": true,
		"background": true
	}
}
```
<!-- 
The use of `supports` generates a set of properties that need to be manually added to the wrapping element of the block so they're properly stored as part of the block data.
 -->
<!-- 
`supports`を使用すると、プロパティのセットが生成されます。このプロパティは手動でブロックのラッピング要素に追加して、ブロックデータの一部として適切に保存されるようにする必要があります。
 -->
<!-- 
The use of `supports` generates a set of properties that need to be manually added to the [wrapping element of the block](https://developer.wordpress.org/block-editor/getting-started/fundamentals/block-wrapper/). This ensures they're properly stored as part of the block data and taken into account when generating the markup of the block that will be delivered to the front end.
 -->
<!-- 
`supports`を使用するとプロパティのセットが生成されますが、これは手動で[ブロックのラッピング要素](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-wrapper/)に追加する必要があります。これにより、ブロックデータの一部として適切に保存され、フロントエンドに配信されるブロックのマークアップを生成する際に考慮されることが保証されます。
 -->
<!-- 
_Example: Supports custom settings stored in the Markup representation of the block_
 -->
<!-- 
_例: ブロックのマークアップ表現として保存される supports のカスタム設定_
 -->

<!-- 
The use of block supports generates a set of properties that need to be manually added to the [wrapping element of the block](https://developer.wordpress.org/block-editor/getting-started/fundamentals/block-wrapper/). This ensures they're properly stored as part of the block data and taken into account when generating the markup of the block that will be delivered to the front end.
 -->
ブロックの supports を使用するとプロパティのセットが生成されますが、これは手動で[ブロックのラッパー要素](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-wrapper/)に追加する必要があります。これにより、ブロックデータの一部として適切に保存され、フロントエンドに配信されるブロックのマークアップを生成する際に考慮されることが保証されます。

<!-- 
The following code demonstrates how the attributes and CSS classes generated by enabling block supports are stored in the markup representation of the block.
 -->
次のコードは、ブロック supports を有効化して生成される属性とCSSクラスが、ブロックのマークアップ表現にどのように格納されるかを示しています。

```html
<!-- wp:block-development-examples/block-supports-6aa4dd {"backgroundColor":"contrast","textColor":"accent-4"} -->
<p class="wp-block-block-development-examples-block-supports-6aa4dd has-accent-4-color has-contrast-background-color has-text-color has-background">Hello World</p>
<!-- /wp:block-development-examples/block-supports-6aa4dd -->
```

<!-- 
<div class="callout callout-info">
Check the <a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/"> <code>supports</code> </a> reference page for full info about the Supports API. 
</div>
 -->
<!-- 
> Supports APIに関する詳細な情報については、<a href="https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/">サポート</a>のリファレンスページを参照してください。
 -->

<!-- 
_See the [complete block example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/block-supports-6aa4dd) of the [code above](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/block-supports-6aa4dd/src/block.json)._
 -->
_[上のコード](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/block-supports-6aa4dd/src/block.json)の[完全なブロックの例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/block-supports-6aa4dd)を参照してください。_

<!-- 
For more information about supports and how to use them in your custom blocks, visit the [Supports API](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/) reference page. 
 -->
supports とカスタムブロックでの使用方法の詳細については、[supports API](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/) リファレンスページを参照してください。

<!-- 
## Additional resources
 -->
## その他の情報

<!-- 
- [block.json diagram](https://excalidraw.com/#json=v1GrIkGsYGKv8P14irBy6,Yy0vl8q7DTTL2VsH5Ww27A)
- [Attributes diagram](https://excalidraw.com/#json=pSgCZy8q9GbH7r0oz2fL1,MFCLd6ddQHqi_UqNp5ZSgg)
 -->
- [block.json の図解](https://excalidraw.com/#json=v1GrIkGsYGKv8P14irBy6,Yy0vl8q7DTTL2VsH5Ww27A)
- [属性の図解](https://excalidraw.com/#json=pSgCZy8q9GbH7r0oz2fL1,MFCLd6ddQHqi_UqNp5ZSgg)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/fundamentals/block-json.md)

