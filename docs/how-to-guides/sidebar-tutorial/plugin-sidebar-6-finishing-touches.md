<!-- 
# Finishing Touches
 -->
# 最後の仕上げ

<!-- 
Your JavaScript code now works as expected, here are a few ways to simplify and make it easier to change in the future.

The first step is to convert the functions `mapSelectToProps` and `mapDispatchToProps` to anonymous functions that get passed directly to `withSelect` and `withData`, respectively:
 -->
以上で JavaScript コードは期待どおりに動作するようになりました。ここからは将来の拡張ためにコードを簡素化し変更しやすくしていきます。

最初のステップとして関数 `mapSelectToProps` と `mapDispatchToProps` を無名関数にして、それぞれ `withSelect` と `withData` に直接渡します。

```js
( function( wp ) {
	var registerPlugin = wp.plugins.registerPlugin;
	var PluginSidebar = wp.editPost.PluginSidebar;
	var el = wp.element.createElement;
	var Text = wp.components.TextControl;
	var withSelect = wp.data.withSelect;
	var withDispatch = wp.data.withDispatch;

	var MetaBlockField = function( props ) {
		return el( Text, {
			label: 'Meta Block Field',
			value: props.metaFieldValue,
			onChange: function( content ) {
				props.setMetaFieldValue( content );
			},
		} );
	}

	var MetaBlockFieldWithData = withSelect( function( select ) {
		return {
			metaFieldValue: select( 'core/editor' )
				.getEditedPostAttribute( 'meta' )
				[ 'sidebar_plugin_meta_block_field' ],
		}
	} )( MetaBlockField );

	var MetaBlockFieldWithDataAndActions = withDispatch(
		function( dispatch ) {
			return {
				setMetaFieldValue: function( value ) {
					dispatch( 'core/editor' ).editPost(
						{ meta: { sidebar_plugin_meta_block_field: value } }
					);
				}
			}
		}
	)( MetaBlockFieldWithData );

	registerPlugin( 'my-plugin-sidebar', {
		render: function() {
			return el( PluginSidebar,
				{
					name: 'my-plugin-sidebar',
					icon: 'admin-post',
					title: 'My plugin sidebar',
				},
				el( 'div',
					{ className: 'plugin-sidebar-content' },
					el( MetaBlockFieldWithDataAndActions )
				)
			);
		}
	} );
} )( window.wp );
```
<!-- 
Next, merge `MetaBlockField`, `MetaBlockFieldWithData`, and `MetaBlockFieldWithDataAndActions` into one function called `MetaBlockField` that gets passed to the `div` element. The `@wordpress/compose` package offers an utility to concatenate functions called `compose`. Don't forget adding `wp-compose` to the dependencies array in the PHP script.
 -->
次に `MetaBlockField`、`MetaBlockFieldWithData`、`MetaBlockFieldWithDataAndActions` を1つの関数 `MetaBlockField` にマージし、 `div` 要素に渡します。`@wordpress/compose` パッケージから連結用の関数 `compose` が使用されています。忘れずに PHP スクリプトの依存配列に `wp-compose` を追加してください。

```js
( function( wp ) {
	var registerPlugin = wp.plugins.registerPlugin;
	var PluginSidebar = wp.editPost.PluginSidebar;
	var el = wp.element.createElement;
	var Text = wp.components.TextControl;
	var withSelect = wp.data.withSelect;
	var withDispatch = wp.data.withDispatch;
	var compose = wp.compose.compose;

	var MetaBlockField = compose(
		withDispatch( function( dispatch ) {
			return {
				setMetaFieldValue: function( value ) {
					dispatch( 'core/editor' ).editPost(
						{ meta: { sidebar_plugin_meta_block_field: value } }
					);
				}
			}
		} ),
		withSelect( function( select ) {
			return {
				metaFieldValue: select( 'core/editor' )
					.getEditedPostAttribute( 'meta' )
					[ 'sidebar_plugin_meta_block_field' ],
			}
		} )
	)( function( props ) {
		return el( Text, {
			label: 'Meta Block Field',
			value: props.metaFieldValue,
			onChange: function( content ) {
				props.setMetaFieldValue( content );
			},
		} );
	} );

	registerPlugin( 'my-plugin-sidebar', {
		render: function() {
			return el( PluginSidebar,
				{
					name: 'my-plugin-sidebar',
					icon: 'admin-post',
					title: 'My plugin sidebar',
				},
				el( 'div',
					{ className: 'plugin-sidebar-content' },
					el( MetaBlockField )
				)
			);
		}
	} );
} )( window.wp );
```
<!-- 
Finally, extract the meta field name (`sidebar_plugin_meta_block_field`) from the `withSelect` and `withDispatch` functions to a single place, so it's easier to change in the future. You can leverage the fact that `withSelect` and `withDispatch` first functions can take the props of the UI component they wrap as a second argument. For example:
 -->
最後にメタフィールド名 `sidebar_plugin_meta_block_field` を関数 `withSelect` と `withDispatch` から取り出し、1つの場所にまとめて将来の変更に備えます。`withSelect` と `withDispatch` 関数が第2引数として、メタフィールドをラップする UI コンポーネントの props を取るため、これを利用します。コード例を挙げます。

```js
// ...
var MetaBlockFieldWithData = withSelect(
	function( select, props ) {
		console.log( props.metaFieldName );
	}
)( MetaBlockField );

// ...
	el(
		MetaBlockFieldWithData,
		{ metaFieldName: 'sidebar_plugin_meta_block_field' }
	)
// ...
```
<!-- 
Notice how the `metaFieldName` can be accessed within `withSelect`. Let's change the code to take advantage of that:
 -->
`withSelect` 内でどのように `metaFieldName` にアクセスできるかに注意してください。この利点を活かす形でコードを変更してみましょう。

```js
( function( wp ) {
	var registerPlugin = wp.plugins.registerPlugin;
	var PluginSidebar = wp.editPost.PluginSidebar;
	var el = wp.element.createElement;
	var Text = wp.components.TextControl;
	var withSelect = wp.data.withSelect;
	var withDispatch = wp.data.withDispatch;
	var compose = wp.compose.compose;

	var MetaBlockField = compose(
		withDispatch( function( dispatch, props ) {
			return {
				setMetaFieldValue: function( value ) {
					dispatch( 'core/editor' ).editPost(
						{ meta: { [ props.fieldName ]: value } }
					);
				}
			}
		} ),
		withSelect( function( select, props ) {
			return {
				metaFieldValue: select( 'core/editor' )
					.getEditedPostAttribute( 'meta' )
					[ props.fieldName ],
			}
		} )
	)( function( props ) {
		return el( Text, {
			label: 'Meta Block Field',
			value: props.metaFieldValue,
			onChange: function( content ) {
				props.setMetaFieldValue( content );
			},
		} );
	} );

	registerPlugin( 'my-plugin-sidebar', {
		render: function() {
			return el( PluginSidebar,
				{
					name: 'my-plugin-sidebar',
					icon: 'admin-post',
					title: 'My plugin sidebar',
				},
				el( 'div',
					{ className: 'plugin-sidebar-content' },
					el( MetaBlockField,
						{ fieldName: 'sidebar_plugin_meta_block_field' }
					)
				)
			);
		}
	} );
} )( window.wp );
```
<!-- 
That's it. You have now a compact version of the original code. Go ahead and add more functionality to your plugin, review other tutorials, or create your next gig!
 -->
以上でオリジナルのコードのコンパクトバージョンの完成です。ここからさらに機能を追加したり、他のチュートリアルを試したり、全く新しいブロックを作っていきましょう。
