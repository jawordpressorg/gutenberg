# block.json

<!-- 
The `block.json` file simplifies the processs of defining and registering a block by using the same block's definition in JSON format to register the block in both the server and the client.
 -->
`block.json` ファイルはブロックの定義と登録プロセスを簡素化します。両方のプロセスに JSON 形式の同じブロック定義を使用し、サーバーとクライアントの両方でブロックを登録します。

<!-- 
[![Open block.json diagram in excalidraw](https://developer.wordpress.org/files/2023/11/block-json.png)](https://excalidraw.com/#json=v1GrIkGsYGKv8P14irBy6,Yy0vl8q7DTTL2VsH5Ww27A "Open block.json diagram in excalidraw")
 -->
[![block.json の図解を excalidraw で開く](https://developer.wordpress.org/files/2023/11/block-json.png)](https://excalidraw.com/#json=v1GrIkGsYGKv8P14irBy6,Yy0vl8q7DTTL2VsH5Ww27A "block.json の図解を excalidraw で開く")

<!-- 
<div class="callout callout-tip">
Click <a href="https://github.com/WordPress/block-development-examples/tree/trunk/plugins/block-supports-6aa4dd">here</a> to see a full block example and check <a href="https://github.com/WordPress/block-development-examples/blob/trunk/plugins/block-supports-6aa4dd/src/block.json">its <code>block.json</code></a>
</div>
 -->
完全なブロックの例を見るには <a href="https://github.com/WordPress/block-development-examples/tree/trunk/plugins/block-supports-6aa4dd">こちら</a> をクリックして、<a href="https://github.com/WordPress/block-development-examples/blob/trunk/plugins/block-supports-6aa4dd/src/block.json"><code>block.json</code></a> をチェックしてください。

<!-- 
Besides simplifying a block's registration, using a `block.json` has [several benefits](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#benefits-using-the-metadata-file), including improved performance and development.
 -->
`block.json`を使用することでブロックの登録が簡単になるだけでなく、パフォーマンスや開発性の向上など[複数の利点](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E5%88%A9%E7%82%B9)があります。

<!-- 
At [**Metadata in block.json**](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/) you can find a detailed explanation of all the properties you can set in a `block.json` for a block. With these properties you can define things such as:
 -->
[**block.json のメタデータ**](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/)には、`block.json` で設定できるすべてのプロパティの詳細な説明が記述されています。これらのプロパティを使用すると以下の定義が可能です。

<!-- 
- Basic metadata of the block
- Files for the block's behavior, style, or output
- Data Storage in the Block
- Setting UI panels for the block
 -->
- ブロックの基本的なメタデータ
- ブロックの動作、スタイル、出力のためのファイル
- ブロック内へのデータ保管
- ブロックの UI パネルの設定

<!-- 
## Basic metadata of the block
 -->
## ブロックの基本のメタデータ

<!-- 
Through properties of the `block.json`, we can define how the block will be uniquely identified, how it can be found, and the info displayed for the block in the Block Editor. Some of these properties are:
 -->
`block.json` のプロパティを通して、ブロックの一意な識別方法や検索方法、ブロックエディターに表示されるブロックの情報を定義できます。プロパティの一部を紹介します。

<!-- 
- [`apiVersion`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#api-version): the version of [the API](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-api-versions/) used by the block (current version is 2).
- [`name`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#name):  a unique identifier for a block, including a namespace.
- [`title`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#title):  a display title for a block.
- [`category`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#category):  a block category for the block in the Inserter panel.
- [`icon`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#icon):  a [Dashicon](https://developer.wordpress.org/resource/dashicons) slug or a custom SVG icon.
- [`description`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#description):  a short description visible in the block inspector.
- [`keywords`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#keywords): to locate the block in the inserter.
- [`textdomain`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#text-domain): the plugin text-domain (important for things such as translations).
 -->
- [`apiVersion`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#API-Version): ブロックが使用する [API](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-api-versions/) のバージョン (現在のバージョンは2)。
- [`name`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Name): 名前空間を含むブロックの一意な識別子。
- [`title`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Title): ブロックの表示タイトル。
- [`category`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Category): インサーターパネルでのブロックのカテゴリー。
- [`icon`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Icon): [Dashicon](https://developer.wordpress.org/resource/dashicons)スラッグまたはカスタム SVG アイコン。
- [`description`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Description): ブロックインスペクタに表示される短い説明。
- [`keywords`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Keywords): ブロックをインサータで検索する際に使用。
- [`textdomain`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Text-Domain): プラグインのテキストドメイン (翻訳などで重要)。

<!-- 
## Files for the block's behavior, output, or style 
 -->
## ブロックの動作、出力、スタイルのためのファイル

<!-- 
The [`editorScript`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#editor-script) and [`editorStyle`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#editor-style) properties allow defining Javascript and CSS files to be enqueued and loaded **only in the editor**.
 -->
[`editorScript`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Editor-Script) と [`editorStyle`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Editor-Style) プロパティは **エディターでのみ** エンキューされてロードされる Javascript と CSS ファイルを定義します。

<!-- 
The [`script`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#script) and [`style`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#style) properties allow the definition of Javascript and CSS files to be enqueued and loaded **in both the editor and the front end**.
 -->
[`script`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#script) と [`style`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#style) プロパティは **エディターとフロントエンドの両方で** エンキューされてロードされる Javascript と CSSファイルを定義します。

<!-- 
The [`viewScript`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script) property allow us to define the Javascript file or files to be enqueued and loaded **only in the front end**.
 -->
[`viewScript`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#View-Script) プロパティは **フロントエンドでのみ** エンキューされてロードされる1つ以上の Javascript ファイルを定義します。

<!-- 
All these properties (`editorScript`, `editorStyle`, `script` `style`,`viewScript`) accept as a value a [path for the file](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#wpdefinedpath) (prefixed with `file:`), a [handle registered with `wp_register_script` or `wp_register_style`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#wpdefinedasset), or an array with a mix of both.
 -->
これらのプロパティ (`editorScript`, `editorStyle`, `script` `style`, `viewScript`) の値には、[ファイルのパス](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#WPDefinedPath) (接頭辞に `file:` を付ける) か、[`wp_register_script` または `wp_register_style` で登録されたハンドル](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#WPDefinedAsset) か、その両方を含む配列を指定します。

<!-- 
The [`render`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#render) property ([introduced on WordPress 6.1](https://make.wordpress.org/core/2022/10/12/block-api-changes-in-wordpress-6-1/)) sets the path of a `.php` template file that will render the markup returned to the front end. This only method will be used to return the markup for the block on request only if `$render_callback` function has not been passed to the `register_block_type` function.
 -->
[`render`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Render) プロパティ ([WordPress 6.1で導入](https://make.wordpress.org/core/2022/10/12/block-api-changes-in-wordpress-6-1/)) は、フロントエンドに返されるマークアップをレンダーする `.php` テンプレートファイルのパスを設定します。このメソッドは `register_block_type` 関数に `$render_callback` 関数が渡されていない場合にのみ、リクエストに応じてブロックのマークアップを返すために使用されます。

<!-- 
## Data Storage in the Block with `attributes`
 -->
## `attributes`によるブロック内へのデータ保管

<!-- 
The [`attributes` property](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#attributes) allows a block to declare "variables" that store data or content for the block.
 -->
[`attributes`プロパティ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Attributes)では、ブロックにデータや内容を格納する「変数」を宣言できます。

<!-- 
_Example: Attributes as defined in block.json_
 -->
_例: block.json で定義された属性_

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
By default `attributes` are serialized and stored in the block's delimiter but this [can be configured](https://developer.wordpress.org/news/2023/09/understanding-block-attributes/).
 -->
デフォルトでは `attributes` はシリアライズされ、ブロックのデリミッタに格納されますが、これは[構成できます](https://developer.wordpress.org/news/2023/09/understanding-block-attributes/)。

<!-- 
_Example: Atributes stored in the Markup representation of the block_
 -->
_例: ブロックのマークアップ表現として保管された属性_

```html
<!-- wp:block-development-examples/copyright-date-block-09aac3 {"fallbackCurrentYear":"2023","showStartingYear":true,"startingYear":"2020"} -->
<p class="wp-block-block-development-examples-copyright-date-block-09aac3">© 2020–2023</p>
<!-- /wp:block-development-examples/copyright-date-block-09aac3 -->x
```

<!-- 
These [`attributes`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#attributes) are passed to the React component `Edit`(to display in the Block Editor) and the `save` function (to return the markup saved to the DB) of the block, and to any server-side render definition for the block (see `render` prop above). 
 -->
これらの [`attributes`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/#%E5%B1%9E%E6%80%A7) は React コンポーネントの `Edit` (ブロックエディターに表示するため)、`save` 関数 (データベース に保存されるマークアップを返すため)、そしてブロックの任意のサーバーサイドレンダー定義 (上の `render` プロパティ参照) に渡されます。

<!-- 
The `Edit` component receives exclusively the capability of updating the attributes via the [`setAttributes`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#setattributes) function.
 -->
`Edit` コンポーネントは、[`setAttributes`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/#setAttributes) 関数を介して主に属性を更新する機能を受け取ります。

<!-- 
_See how the attributes are passed to the [`Edit` component](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/edit.js), [the `save` function](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/save.js) and [the `render.php`](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/render.php) in this [full block example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/copyright-date-block-09aac3) of the  code above_
 -->
_どのように属性が [`Edit` コンポーネント](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/edit.js)、[`save` 関数](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/save.js)、[`render.php`](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/copyright-date-block-09aac3/src/render.php) に渡されるかは、上のコードの [ブロックの例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/copyright-date-block-09aac3) を参照してください。_

<!-- 
<div class="callout callout-info">
Check the <a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/"> <code>attributes</code> </a> reference page for full info about the Attributes API. 
</div>
 -->
> Attributes API に関する完全な情報については、<a href="https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-attributes/">属性</a>のリファレンスページを参照してください。

<!-- 
[![Open Attributes diagram in excalidraw](https://developer.wordpress.org/files/2023/11/attributes.png)](https://excalidraw.com/#json=pSgCZy8q9GbH7r0oz2fL1,MFCLd6ddQHqi_UqNp5ZSgg "Open Attributes diagram in excalidraw")
 -->
[![属性の図解を excalidraw で開く](https://developer.wordpress.org/files/2023/11/attributes.png)](https://excalidraw.com/#json=pSgCZy8q9GbH7r0oz2fL1,MFCLd6ddQHqi_UqNp5ZSgg "属性の図解を excalidraw で開く")

<!-- 
## Enable UI settings panels for the block with `supports`
 -->
## `supports` によるブロックの UI 設定パネルの有効化

<!-- 
The [`supports`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#supports) property allows a block to declare support for certain features, enabling users to customize specific settings (like colors or margins) from the Settings Sidebar.
 -->
[`supports`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#Supports) プロパティを使用すると、ブロックは特定の機能のサポートを宣言でき、ユーザーは設定サイドバーから特定の設定 (色やマージンなど) をカスタマイズできます。

<!-- 
_Example: Supports as defined in block.json_
 -->
_例: block.json で定義される supports_


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
`supports`を使用すると、プロパティのセットが生成されます。このプロパティは手動でブロックのラッピング要素に追加して、ブロックデータの一部として適切に保存されるようにする必要があります。

<!-- 
_Example: Supports custom settings stored in the Markup representation of the block_
 -->
_例: ブロックのマークアップ表現として保存されるカスタム設定をサポート_

```html
<!-- wp:block-development-examples/block-supports-6aa4dd {"backgroundColor":"contrast","textColor":"accent-4"} -->
<p class="wp-block-block-development-examples-block-supports-6aa4dd has-accent-4-color has-contrast-background-color has-text-color has-background">Hello World</p>
<!-- /wp:block-development-examples/block-supports-6aa4dd -->
```

<!-- 
_See the [full block example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/block-supports-6aa4dd) of the [code above](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/block-supports-6aa4dd/src/block.json)_
 -->
_[上のコード](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/block-supports-6aa4dd/src/block.json)の[完全なブロックの例](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/block-supports-6aa4dd)を参照してください。_

<!-- 
<div class="callout callout-info">
Check the <a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/"> <code>supports</code> </a> reference page for full info about the Supports API. 
</div>
 -->
> Supports APIに関する詳細な情報については、<a href="https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-supports/">サポート</a>のリファレンスページを参照してください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/fundamentals/block-json.md)