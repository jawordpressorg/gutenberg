<!--
# Initialize the Input Control
 -->
# 入力コントロールの初期化

<!--
Now that the field is available in the editor store, it can be surfaced to the UI. The first step will be to extract the input control to a separate function so you can expand its functionality while the code stays clear.
 -->
エディターストア内でフィールドが利用可能になりました。これで UI を作成できます。まず最初の手順として入力コントロールを別の関数に分離します。コードをクリーンにしたまま機能を拡張できます。

```js
( function ( wp ) {
	var registerPlugin = wp.plugins.registerPlugin;
	var PluginSidebar = wp.editPost.PluginSidebar;
	var el = wp.element.createElement;
	var Text = wp.components.TextControl;

	var MetaBlockField = function () {
		return el( Text, {
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
Now you can focus solely on the `MetaBlockField` component. The goal is to initialize it with the value of `sidebar_plugin_meta_block_field`, but also to keep it updated when that value changes.

WordPress has [some utilities to work with data](/packages/data/README.md) from the stores. The first you're going to use is [withSelect](/packages/data/README.md#withselect-mapselecttoprops-function-function), whose signature is:
 -->
こここからは `MetaBlockField` コンポーネントのみに集中できます。ゴールは `sidebar_plugin_meta_block_field` 値による初期化と、同時に値が変更された場合の更新の維持です。

WordPress にはエディタストアからの[データを操作するユーティリティ](https://developer.wordpress.org/block-editor/packages/packages-data/)がいくつかありますが、最初に使用するのは恐らく [withSelect](https://developer.wordpress.org/block-editor/designers-developers/developers/packages/packages-data/#withselect-mapselecttoprops-function-function) でしょう。シグニチャーは以下です。

<!--
```js
withSelect()();
// a function that takes `select` as input
// and returns an object containing data
// a function that takes the previous data as input
// and returns a component
```
 -->
```js
withSelect(
	// `select` を入力として取り、
	// データを含むオブジェクトを返す関数
)(
	// 上のデータを入力として取り、
	// コンポーネントを返す関数
);
```

<!--
`withSelect` is used to pass data to other components, and update them when the original data changes. Let's update the code to use it:
 -->
`withSelect` はデータを他のコンポーネントに渡し、オリジナルのデータの変更を反映するために使用されます。コードを以下のように更新します。

```js
( function ( wp ) {
	var registerPlugin = wp.plugins.registerPlugin;
	var PluginSidebar = wp.editPost.PluginSidebar;
	var el = wp.element.createElement;
	var Text = wp.components.TextControl;
	var withSelect = wp.data.withSelect;

	var mapSelectToProps = function ( select ) {
		return {
			metaFieldValue: select( 'core/editor' ).getEditedPostAttribute(
				'meta'
			)[ 'sidebar_plugin_meta_block_field' ],
		};
	};

	var MetaBlockField = function ( props ) {
		return el( Text, {
			label: 'Meta Block Field',
			value: props.metaFieldValue,
			onChange: function ( content ) {
				console.log( 'content has changed to ', content );
			},
		} );
	};

	var MetaBlockFieldWithData = withSelect( mapSelectToProps )(
		MetaBlockField
	);

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
					el( MetaBlockFieldWithData )
				)
			);
		},
	} );
} )( window.wp );
```

<!--
Copy this code to the JavaScript file. Note that it now uses the `wp.data.withSelect` utility to be found in the `@wordpress/data` package. Go ahead and add `wp-data` as a dependency in the PHP script.
 -->
このコードを JavaScript ファイルにコピーしてください。ここで `@wordpress/data` パッケージにある `wp.data.withSelect` ユーティリティを使用していることに注意してください。PHP スクリプトの依存性に `wp-data` を追加してください。

<!--
This is how the code changes from the previous section:

-   The `MetaBlockField` function has now a `props` argument as input. It contains the data object returned by the `mapSelectToProps` function, which it uses to initialize its value property.
-   The component rendered within the `div` element was also updated, the plugin now uses `MetaBlockFieldWithData`. This will be updated every time the original data changes.
-   [getEditedPostAttribute](/docs/reference-guides/data/data-core-editor.md#geteditedpostattribute) is used to retrieve data instead of [getCurrentPost](/docs/reference-guides/data/data-core-editor.md#getcurrentpost) because it returns the most recent values of the post, including user editions that haven't been yet saved.
 -->
前のセクションからコードは以下のように変わりました。

- `MetaBlockField` 関数は入力として `props` 引数を取るようになりました。引数は `mapSelectToProps` 関数から返されたデータオブジェクトを含み、value プロパティの初期化に使用されます。
-  `div` 要素内にレンダリングされていたコンポーネントも更新され、プラグインは `MetaBlockFieldWithData` を使用します。オリジナルデータが変更されるたびに更新されます。
- [getCurrentPost](https://developer.wordpress.org/block-editor/designers-developers/developers/data/data-core-editor/#getcurrentpost) の代わりに [getEditedPostAttribute](/docs/designers-developers/developers/data/data-core-editor.md#geteditedpostattribute) を使用してデータを取得します。まだ保存されていないユーザーが編集中のものも含め最新の値が返されます。

<!--
Update the code and open the sidebar. The input's content is no longer `Initial value` but a void string. Users can't type values yet, but let's check that the component is updated if the value in the store changes. Open the browser's console, execute
 -->
コードを更新しサイドバーを開いていください。入力コントロールのコンテンツはこれまでの `Initial value` ではなく空白文字列になります。まだ値を入力することはできませんが、エディターストアの値を変更するとコンポーネントが更新されます。ブラウザーのコンソールを開き、次のコードを実行してください。

```js
wp.data
	.dispatch( 'core/editor' )
	.editPost( { meta: { sidebar_plugin_meta_block_field: 'hello world!' } } );
```

<!--
and observe how the contents of the input component change!
 -->
入力コンポーネントのコンテンツが変更されることを確認してください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/sidebar-tutorial/plugin-sidebar-4-initialize-input.md)
