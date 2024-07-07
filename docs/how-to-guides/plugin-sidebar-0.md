<!--
# Plugin Sidebar
-->
# プラグイン用サイドバー

<!--
## Overview
-->
## 概要

<!--
How to add a sidebar to your plugin. A sidebar is the region to the far right of the editor. Your plugin can add an additional icon next to the InspectorControls (gear icon) that can be expanded.
-->
プラグインにサイドバーを追加する方法を説明します。サイドバーは、エディターの右端にある領域です。プラグインは、InspectorControls（歯車のアイコン）の横に、展開可能なアイコンを追加できます。

<!--
![Example sidebar](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/sidebar-up-and-running.png)
-->
![サイドバーの例](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/sidebar-up-and-running.png)

<!--
_Note: this tutorial covers a custom sidebar, if you are looking to add controls to the sidebar see the [Block Toolbar and Settings Sidebar](/docs/getting-started/fundamentals/block-in-the-editor.md)_
-->
_注意: このチュートリアルではカスタムサイドバーを扱います。 サイドバーへのコントロールの追加については、[ブロックツールバーと設定サイドバー](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-in-the-editor/)を参照してください。_

<!--
## Before you start
-->
## はじめる前に

<!--
The tutorial assumes you have an existing plugin setup and are ready to add PHP and JavaScript code. Please, refer to [Getting started with JavaScript](/docs/getting-started/fundamentals/javascript-in-the-block-editor.md) tutorial for an introduction to WordPress plugins and how to use JavaScript to extend the block editor.
-->
このチュートリアルでは、設定済みのプラグインがあり、PHP と JavaScript のコードを追加できることを前提としています。WordPress プラグインの入門、ブロックエディター拡張プラグインの使用法については [JavaScript 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/javascript-in-the-block-editor/) チュートリアルを参照してください。

<!--
## Step-by-step guide
-->
## ステップバイステップガイド

<!--
### Step 1: Get a sidebar up and running
-->
### ステップ 1: サイドバーの起動

<!--
The first step is to tell the editor that there is a new plugin that will have its own sidebar. Use the [registerPlugin](/packages/plugins/README.md), [PluginSidebar](/packages/editor/README.md#pluginsidebar), and [createElement](/packages/element/README.md) utilities provided by the `@wordpress/plugins`, `@wordpress/editor`, and `react` packages, respectively.
-->
最初のステップではまずエディターに対して新しいプラグインが自身のサイドバーを持つことを伝えます。これには [registerPlugin](https://developer.wordpress.org/block-editor/packages/packages-plugins/)、[PluginSidebar](https://developer.wordpress.org/block-editor/packages/editor/#pluginsidebar)、[createElement](https://developer.wordpress.org/block-editor/packages/element/) ユーティリティを使用します。それぞれ `@wordpress/plugins`、 `@wordpress/editor`、`react` パッケージに含まれます。

<!--
Add the following code to a JavaScript file called `plugin-sidebar.js` and save it within your plugin's directory:
-->
次のコードを JavaScript ファイル `plugin-sidebar.js` に追加し、プラグインディレクトリに保存してください。

```js
( function ( wp, React ) {
	var el = React.createElement;
	var registerPlugin = wp.plugins.registerPlugin;
	var PluginSidebar = wp.editor.PluginSidebar;

	registerPlugin( 'my-plugin-sidebar', {
		render: function () {
			return el(
				PluginSidebar,
				{
					name: 'my-plugin-sidebar',
					icon: 'admin-post',
					title: 'My plugin sidebar',
				},
				'Meta field'
			);
		},
	} );
} )( window.wp, window.React );
```

<!--
For this code to work, those utilities need to be available in the browser, so you must specify `wp-plugins`, `wp-edit-post`, and `react` as dependencies of your script.
-->
このコードが動作するにはブラウザ内でユーティリティが利用可能でなければなりません。スクリプトで、`wp-plugins`、`wp-edit-post`、`react` を依存として指定します。

<!--
Here is the PHP code to register your script and specify the dependencies:
-->
以下はスクリプトを登録し、依存を指定する PHP コードです。

```php
<?php

/*
Plugin Name: Sidebar plugin
*/

function sidebar_plugin_register() {
	wp_register_script(
		'plugin-sidebar-js',
		plugins_url( 'plugin-sidebar.js', __FILE__ ),
		array( 'wp-plugins', 'wp-editor', 'react' )
	);
}
add_action( 'init', 'sidebar_plugin_register' );

function sidebar_plugin_script_enqueue() {
	wp_enqueue_script( 'plugin-sidebar-js' );
}
add_action( 'enqueue_block_editor_assets', 'sidebar_plugin_script_enqueue' );
```

<!--
After installing and activating this plugin, there is a new icon resembling a tack in the top-right of the editor. Upon clicking it, the plugin's sidebar will be opened:
-->
プラグインをインストールし有効化すると、エディターの右上に新しい「ピン」アイコンが表示され、クリックするとプラグインのサイドバーが開きます。

<!--
![Sidebar Up and Running](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/sidebar-up-and-running.png)
-->
![サイドバーの起動](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/sidebar-up-and-running.png)

<!--
### Step 2: Tweak the sidebar style and add controls
-->
### ステップ 2: サイドバーのスタイルの調整とコントロールの追加

<!--
After the sidebar is up and running, the next step is to fill it up with the necessary components and basic styling.
-->
サイドバーが起動できたら次のステップとして必要なコンポーネントと基本的なスタイルを追加します。

<!--
To visualize and edit the meta field value you'll use an input component. The `@wordpress/components` package contains many components available for you to reuse, and, specifically, the [TextControl](/packages/components/src/text-control/README.md) is aimed at creating an input field:
-->
メタフィールド値の表示や編集には入力コンポーネントを使用します。`@wordpress/components` パッケージには再利用可能な多くのコンポーネントがあり、特に [TextControl](https://developer.wordpress.org/block-editor/components/text-control/) は入力フィールドの作成を目的とします。

```js
( function ( wp ) {
	var el = React.createElement;
	var registerPlugin = wp.plugins.registerPlugin;
	var PluginSidebar = wp.editor.PluginSidebar;
	var TextControl = wp.components.TextControl;

	registerPlugin( 'my-plugin-sidebar', {
		render: function () {
			return el(
				PluginSidebar,
				{
					name: 'my-plugin-sidebar',
					icon: 'admin-post',
					title: 'My plugin sidebar',
				},
				el(
					'div',
					{ className: 'plugin-sidebar-content' },
					el( TextControl, {
						label: 'Meta Block Field',
						value: 'Initial value',
						onChange: function ( content ) {
							console.log( 'content changed to ', content );
						},
					} )
				)
			);
		},
	} );
} )( window.wp );
```

<!--
Update the `plugin-sidebar.js` with this new code. Notice that it uses a new utility called `wp.components` from the `@wordpress/components` package. Be sure to add `wp-components` to the dependencies in the `wp_register_script` function in the PHP file.
-->
`plugin-sidebar.js` をこの新しいコードで更新します。`@wordpress/components` パッケージの新しいユーティリティ `wp.components` を使用していることに注意してください。PHP ファイルの `wp_register_script` 関数の依存に `wp-components` を追加してください。

<!--
The code introduces:
-->
コードは以下を導入します。

<!--
-   a CSS class `plugin-sidebar-content` to the `div` element to target styles,
-   a `TextControl` component instead of the plain `'Meta field'` text.
-->
-   スタイルを適用できるよう、`div` 要素に CSS クラス `plugin-sidebar-content`
-   プレーンな `'Meta field'` テキストの代わりに `TextControl` component

<!--
With the new CSS class available you can add a little style. Create a new file in your plugin directory called `plugin-sidebar.css` with the following to give some padding:
-->
新しい CSS クラスを使用して、スタイルを追加できます。プラグインディレクトリに新しいファイル `plugin-sidebar.css` を作成し、次のパディングを追加するコードを挿入してください。

```css
.plugin-sidebar-content {
	padding: 16px;
}
```

<!--
Register the script and enqueue it to load with `enqueue_block_editor_assets` alongside the JavaScript file.
-->
スクリプトを登録し、JavaScript ファイルと一緒に `enqueue_block_editor_assets` とロードするためにエンキューします。

<!--
After those changes, the PHP code will look like this:
-->
変更後、PHP コードは以下のようになります。

```php
<?php

/*
Plugin Name: Sidebar example
*/

function sidebar_plugin_register() {
	wp_register_script(
		'plugin-sidebar-js',
		plugins_url( 'plugin-sidebar.js', __FILE__ ),
		array(
			'react',
			'wp-plugins',
			'wp-editor',
			'wp-components'
		)
	);
	wp_register_style(
		'plugin-sidebar-css',
		plugins_url( 'plugin-sidebar.css', __FILE__ )
	);
}
add_action( 'init', 'sidebar_plugin_register' );

function sidebar_plugin_script_enqueue() {
	wp_enqueue_script( 'plugin-sidebar-js' );
	wp_enqueue_style( 'plugin-sidebar-css' );
}
add_action( 'enqueue_block_editor_assets', 'sidebar_plugin_script_enqueue' );
```

<!--
Reload the editor and open the sidebar:
-->
エディターをリロードし、サイドバーを開いてください。

<!--
![Sidebar with style and controls](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/sidebar-style-and-controls.png)
-->
![スタイルとコントロールのあるサイドバー](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/sidebar-style-and-controls.png)

<!--
This code doesn't let users store or retrieve data just yet, so the next steps will focus on how to connect it to the meta block field.
-->
このコードは、データの保存も取得もしません。次のステップでは、メタブロックフィールドとの接続方法を見ていきます。

<!--
### Step 3: Register the meta field
-->
### ステップ 3: メタフィールドの登録

<!--
To work with fields in the `post_meta` table, use the [register_post_meta](https://developer.wordpress.org/reference/functions/register_post_meta/). function to create a new field called `sidebar_plugin_meta_block_field`.
-->
`post_meta` テーブル内のフィールドを操作するには、[register_post_meta](https://developer.wordpress.org/reference/functions/register_post_meta/) を使用して、新しいフィールド `sidebar_plugin_meta_block_field` を作成します。

<!--
Note: this field needs to be available to the REST API because that's how the block editor access data.
-->
注意: このフィールドは REST API から利用可能である必要があります。これは、ブロックエディターが REST API を使用してデータにアクセスするためです。

<!--
Add the PHP code in your plugins `init` callback function:
-->
プラグインの `init` コールバック関数内に PHP コードを追加してください。

```php
register_post_meta( 'post', 'sidebar_plugin_meta_block_field', array(
	'show_in_rest' => true,
	'single' => true,
	'type' => 'string',
) );
```

<!--
To confirm, query the block editor store to see the field is loaded. After implementing, reload the editor page and open your browser's developer console. Use this JavaScript snippet in the console to confirm:
-->
確認するには、ブロックエディタストアにクエリし、フィールドがロードされていることをチェックします。実装後、エディタページをリロードし、ブラウザの開発者コンソールを開いてください。次の JavaScript スニペットを使用して確認します。

```js
wp.data.select( 'core/editor' ).getCurrentPost().meta;
```

<!--
The function will return an object containing the registered meta field you registered.
-->
関数は、登録済みのメタフィールドを含むオブジェクトを返します。

<!--
If the code returns `undefined` make sure your post type supports `custom-fields`. Either when [registering the post](https://developer.wordpress.org/reference/functions/register_post_type/#supports) or with [add_post_type_support function](https://developer.wordpress.org/reference/functions/add_post_type_support/).
-->
コードが `undefined` を返す場合、[投稿の登録時](https://developer.wordpress.org/reference/functions/register_post_type/#supports)または [add_post_type_support 関数](https://developer.wordpress.org/reference/functions/add_post_type_support/)で投稿タイプが `custom-fields` をサポートすることを確認してください。

<!--
### Step 4: Initialize the input control
-->
### ステップ 4: 入力コントロールの初期化

<!--
With the field available in the editor store, it can now be surfaced to the UI. We extract the input control to a function to keep the code clean as we add functionality.
-->
エディタストアでフィールドが利用できるようになりました。これで UI を作成できます。入力コントロールを関数に取り出し、将来の機能追加のためにコードをクリーンにします。

```js
( function ( wp ) {
	var el = React.createElement;
	var registerPlugin = wp.plugins.registerPlugin;
	var PluginSidebar = wp.editor.PluginSidebar;
	var TextControl = wp.components.TextControl;

	var MetaBlockField = function () {
		return el( TextControl, {
			label: 'Meta Block Field',
			value: 'Initial value',
			onChange: function ( content ) {
				console.log( 'content changed to ', content );
			},
		} );
	};

	registerPlugin( 'my-plugin-sidebar', {
		render: function () {
			return el(
				PluginSidebar,
				{
					name: 'my-plugin-sidebar',
					icon: 'admin-post',
					title: 'My plugin sidebar',
				},
				el(
					'div',
					{ className: 'plugin-sidebar-content' },
					el( MetaBlockField )
				)
			);
		},
	} );
} )( window.wp );
```

<!--
We want to initialize the value in the `MetaBlockField` component with the value of `sidebar_plugin_meta_block_field`, and keep it updated when that value changes.
-->
`MetaBlockField` コンポーネント内の値を `sidebar_plugin_meta_block_field` の値で初期化し、値が変更された際には更新し続けるようにします。

<!--
The `useSelect` function is used to fetch data when the component loads and will update if the data changes. Here is the code update with `useSelect`:
-->
`useSelect` 関数は、コンポーネントがロードした際にデータを取得し、データが変更されると更新します。以下は、`useSelect` で更新したコードです。

```js
( function ( wp ) {
	var el = React.createElement;
	var registerPlugin = wp.plugins.registerPlugin;
	var PluginSidebar = wp.editor.PluginSidebar;
	var Text = wp.components.TextControl;
	var useSelect = wp.data.useSelect;

	var MetaBlockField = function () {
		var metaFieldValue = useSelect( function ( select ) {
			return select( 'core/editor' ).getEditedPostAttribute(
				'meta'
			)[ 'sidebar_plugin_meta_block_field' ];
		}, [] );

		return el( Text, {
			label: 'Meta Block Field',
			value: metaFieldValue,
			onChange: function ( content ) {
				console.log( 'content has changed to ', content );
			},
		} );
	};

	registerPlugin( 'my-plugin-sidebar', {
		render: function () {
			return el(
				PluginSidebar,
				{
					name: 'my-plugin-sidebar',
					icon: 'admin-post',
					title: 'My plugin sidebar',
				},
				el(
					'div',
					{ className: 'plugin-sidebar-content' },
					el( MetaBlockField )
				)
			);
		},
	} );
} )( window.wp );
```

<!--
The `wp.data.useSelect` function is from the `@wordpress/data` package, so `wp-data` needs to be added as a dependency in the `wp_register_script` function in PHP.
-->
`wp.data.useSelect` 関数は、`@wordpress/data` パッケージにあります。従って、PHP の `wp_register_script` 関数内の依存に `wp-data` を追加する必要があります。

<!--
Note: The `getEditedPostAttribute` call is used to retrieve the most recent values of the post, including user editions that haven't been yet saved.
-->
注意: `getEditedPostAttribute` 呼び出しが使用されています。これは、まだ保存されていないユーザーの編集を含む、投稿のもっとも最近の値を取得します。

<!--
Confirm it's working by updating the code, reloading, and opening the sidebar. The input's content is no longer `Initial value` but a void string. Users can't type values yet, but you can check that the component is updated if the value in the store changes. Open the browser's console, execute
-->
コードを更新してリロードし、サイドバーを開いて、正常に動作していることを確認してください。入力コントロールのコンテンツはこれまでの `Initial value` ではなく空白文字列になります。まだ値を入力することはできませんが、エディターストアの値を変更するとコンポーネントが更新されることをチェックできます。ブラウザーのコンソールを開き、次のコードを実行してください。

```js
wp.data
	.dispatch( 'core/editor' )
	.editPost( { meta: { sidebar_plugin_meta_block_field: 'hello world!' } } );
```

<!--
You can observe the content changing in the input component.
-->
入力コンポーネントのコンテンツが変更されることを確認できます。

<!--
### Step 5: Update the meta field when the input's content changes
-->
### ステップ 5: 入力コントロールの変更でメタフィールドを更新する

<!--
The last step is to update the meta field when the input content changes.
The `useDispatch` function takes a store name as its only argument and returns methods that you can use to update the store, in this case we'll use `editPost`
-->
最後のステップでは入力コンテンツが変更された際にメタフィールドを更新します。`useDispatch` は、唯一の引数としてストア名を取り、ストアの更新に利用可能なメソッドを返します。この例では、`editPost` を使用します。

```js
( function ( wp ) {
	var el = React.createElement;
	var registerPlugin = wp.plugins.registerPlugin;
	var PluginSidebar = wp.editor.PluginSidebar;
	var TextControl = wp.components.TextControl;
	var useSelect = wp.data.useSelect;
	var useDispatch = wp.data.useDispatch;

	var MetaBlockField = function ( props ) {
		var metaFieldValue = useSelect( function ( select ) {
			return select( 'core/editor' ).getEditedPostAttribute(
				'meta'
			)[ 'sidebar_plugin_meta_block_field' ];
		}, [] );

		var editPost = useDispatch( 'core/editor' ).editPost;

		return el( TextControl, {
			label: 'Meta Block Field',
			value: metaFieldValue,
			onChange: function ( content ) {
				editPost( {
					meta: { sidebar_plugin_meta_block_field: content },
				} );
			},
		} );
	};

	registerPlugin( 'my-plugin-sidebar', {
		render: function () {
			return el(
				PluginSidebar,
				{
					name: 'my-plugin-sidebar',
					icon: 'admin-post',
					title: 'My plugin sidebar',
				},
				el(
					'div',
					{ className: 'plugin-sidebar-content' },
					el( MetaBlockField )
				)
			);
		},
	} );
} )( window.wp );
```

<!--
After the update, when the user types, the input control calls `editPost` and updates the editor store on each keystroke.
-->
更新後、ユーザーがタイプすると、入力コントロールは `editPost` を呼び出し、キーを押すたびにエディタストアを更新します。

<!--
Update the JavaScript, load the sidebar, and type in the input field. You can confirm it is saved by typing something in the input control and executing the JavaScript snippet in your browser's development console:
-->
JavaScript を更新し、サイドバーをロードし、入力フィールドで入力します。ブラウザーの開発コンソールで以下の JavaScript スニペットを実行すると、入力コントロールに入力したものが保存されていることを確認できます。

```js
wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )[
	'sidebar_plugin_meta_block_field'
];
```

<!--
The message displayed should be what you typed in the input.
-->
表示されるメッセージは、入力フィールドに入力したものと同じはずです。

<!--
When saving a post, you can confirm it is stored properly in the database by reloading after a save and confirming the input control is initialized with the last value you typed.
-->
記事を保存する際、データベースに正しく保存されることを確認するには、保存後にリロードして、入力コントロールが最後に入力した値で初期化されることを確認してください。

<!--
## Additional resources
-->
## 追加リソース

<!--
Documentation for working with the [@wordpress/data package](/packages/data/README.md).
-->
[@wordpress/data パッケージ](https://github.com/WordPress/gutenberg/tree/trunk/packages/data/README.md) の操作用ドキュメント

<!--
Functions used in this guide:
-->
このガイドで使用された関数

<!--
-   [useSelect](/packages/data/README.md#useselect).
-   [getEditedPostAttribute](/docs/reference-guides/data/data-core-editor.md#geteditedpostattribute)
-   [useDispatch](/packages/data/README.md#usedispatch)
-->
-   [useSelect](https://github.com/WordPress/gutenberg/tree/trunk/packages/data/README.md#useselect).
-   [getEditedPostAttribute](https://github.com/WordPress/gutenberg/tree/trunk/docs/reference-guides/data/data-core-editor.md#geteditedpostattribute)
-   [useDispatch](https://github.com/WordPress/gutenberg/tree/trunk/packages/data/README.md#usedispatch)

<!--
## Conclusion
-->
## まとめ

<!--
You now have a custom sidebar that you can use to update `post_meta` content.
-->
`post_meta` コンテンツの更新に使用可能な、カスタムサイドバーを作成しました。

<!--
A complete example is available, download the [plugin-sidebar example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/plugin-sidebar-9ee4a6) from the [block-development-examples](https://github.com/WordPress/block-development-examples) repository.
-->
完全なサンプルは、[block-development-examples](https://github.com/WordPress/block-development-examples) リポジトリから、[plugin-sidebar サンプル](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/plugin-sidebar-9ee4a6)をダウンロードしてください。

<!-- 
### Note
 -->
### 注意

<!-- 
If you have enabled Custom Fields in the 'Panels' page of the Editor 'Preferences' (via the three dots in top right), a field with the same name as the TextControl, in this case `sidebar_plugin_meta_block_field`, will also appear in the custom fields panel at the bottom of the editor window. These two fields have access to the same meta property.
 -->
エディターの「設定」の「パネル」ページ内で (右上の3つの点から) カスタムフィールドを有効にすると、TextControl と同じ名前のフィールド、この場合は `sidebar_plugin_meta_block_field` が、エディターウィンドウの下部にあるカスタムフィールドパネルにも表示されます。これら2つのフィールドは、同じメタプロパティにアクセスします。

<!-- 
![Text Control and Custom Field](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/plugin-sidebar-text-control-custom-field.png)
 -->
![TextControl とカスタムフィールド](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/plugin-sidebar-text-control-custom-field.png)

<!-- 
On saving the post the value in the TextControl will be saved first and the value in the custom field will be saved second, so that is the one that ends up persisting in the database. So if you change the value in the TextControl it is still the one in the custom field that ends up getting saved.
 -->
投稿を保存すると、TextControl の値が最初に保存され、次にカスタムフィールドの値が保存されるため、最終的にデータベースに永続化される値はカスタムフィールドの値です。このため、TextControl の値を変更しても、最終的にはカスタムフィールドの値が保存されます。

<!-- 
This problem does not exist if Custom Fields is not enabled.
 -->
この問題はカスタムフィールドが有効でなければ発生しません。

<!-- 
If you need to have Custom Fields enabled and also have post meta in the sidebar there are two possible solutions:
 -->
カスタムフィールドを有効にし、かつ、サイドバーに投稿メタを表示する必要がある場合は、2つの解決策があります。

<!-- 
1. Precede the name of the meta field with an underscore, so the name in the above example would be `_sidebar_plugin_meta_block_field`. This indicates that the post meta should be treated as private so it will not be visible in the Custom Fields section of a post. With this solution an error will be generated when you save the post unless you add an `auth_callback` property to the `args` array passed to `register_post_meta` with a function that ultimately returns `true`.  See the `args` documentation in the [post_meta](https://developer.wordpress.org/reference/functions/register_meta/#parameters) page for more info.
2. In the TextControl's `onChange` function, target the Value field textarea and set the value there to be the same as the value in the TextControl meta field. The value will then be identical in both places and so you can be assured that if the value is changed in the TextControl then it will still be saved to the database.
 -->
1. メタフィールドの名前の前にアンダースコアを付ける。上の例では名前は `_sidebar_plugin_meta_block_field` になります。これで投稿メタはプライベートとして扱われるため、投稿のカスタムフィールドセクションに表示されません。ただしこのままでは投稿を保存する際にエラーが発生するため、`register_post_meta` に渡す `args` 配列に `auth_callback` プロパティと、最終的に `true` を返す関数を追加する必要があります。詳しくは [post_meta](https://developer.wordpress.org/reference/functions/register_meta/#parameters) ページの `args` ドキュメントを参照してください。
2. TextControl の `onChange` 関数内で、Value フィールドの textarea に対して、TextControl の meta フィールド値と同じになるように設定する。両方の場所で値が同じになるため、TextControl で値を変更しても、データベースに保存されることを保証できます。

```js
return el( TextControl, {
  label: 'Meta Block Field',
  value: metaFieldValue,
  onChange: function ( content ) {
    editPost( {
      meta: { sidebar_plugin_meta_block_field: content }
    })
    document.querySelector( {the-value-textarea} ).innerHTML = content;
  },
} );
```

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/plugin-sidebar-0.md)
