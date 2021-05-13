<!--
# About the Legacy Widget block
 -->
# レガシーウィジェットブロック

<!--
The Legacy Widget block allows users to add, edit and preview third party widgets that are registered by plugins and widgets that were added using the classic Widgets Editor.
 -->
レガシーウィジェットブロックを使用すると、プラグインで登録したサードパーティ製のウィジェットや、従来のウィジェットエディターを使用して追加したウィジェットを追加、編集、プレビューできます。

<!--
Third party widgets can be added by inserting a Legacy Widget block using the block inserter and selecting the widget from the block's dropdown.
 -->
サードパーティ製のウィジェットを挿入するには、ブロック挿入ツールを使用してレガシーウィジェットブロックを挿入し、ブロックのドロップダウンからウィジェットを選択します。

<!--
Third party widgets may also be added by searching for the name of the widget in the block inserter and selecting the widget. A variation of the Legacy Widget block will be inserted.
 -->
また、サードパーティ製のウィジェットは、ブロック挿入ツールでウィジェット名を検索し、ウィジェットを選択しても追加できます。このとき、レガシーウィジェットブロックのバリエーションが挿入されます。

<!--
## Compatibility with the Legacy Widget block
 -->
## レガシーウィジェットブロックと互換性

<!--
### The `widget-added` event
 -->
### widget-added イベント

<!--
The Legacy Widget block will display the widget's form in a way similar to the Customizer, and so is compatible with most third party widgets.
 -->
レガシーウィジェットブロックは、カスタマイザーと同様の方法でウィジェットのフォームを表示するため、ほとんどのサードパーティ製ウィジェットと互換性があります。

<!--
If the widget uses JavaScript in its form, it is important that events are added to the DOM after the `'widget-added'` jQuery event is triggered on `document`.
 -->
ウィジェットがフォームで JavaScript を使用する場合、`'widget-added'` jQuery イベントが `document`でトリガーされた後で、DOM にイベントが追加されることは重要です。

<!--
For example, a widget might want to show a "Password" field when the "Change password" checkbox is checked.
 -->
たとえば次の例では、ウィジェットは、「Change password」チェックボックスがチェックされると、「Password」フィールドを表示します。

```js
( function( $ ) {
	$( document ).on( 'widget-added', function( $control ) {
		$control.find( '.change-password' ).on( 'change', function() {
			var isChecked = $( this ).prop( 'checked' );
			$control.find( '.password' ).toggleClass( 'hidden', ! isChecked );
		} );
	} );
} )( jQuery );
```

<!--
Note that all of the widget's event handlers are added in the `widget-added` callback.
 -->
注意: すべてのウィジェットのイベントハンドラは `widget-added` コールバックに追加されます。

<!--
### Displaying "No preview available."
 -->
### 「プレビューが利用できません。」 の表示

<!--
The Legacy Widget block will display a preview of the widget when the Legacy Widget block is not selected.
 -->
レガシーウィジェットブロックは、選択されていない場合、ウィジェットのプレビューを表示します。

<!--
A "No preview available." message is automatically shown by the Legacy Widget block when the widget's `widget()` function does not render anytihng or only renders empty HTML elements.
 -->
ウィジェットの `widget()` 関数が何もレンダーしない、または、空の HTML 要素しかレンダーしない場合、レガシーウィジェットブロックは、自動的にメッセージ「プレビューが利用できません。」を表示します。

<!--
Widgets may take advantage of this by returning early from `widget()` when a preview should not be displayed.
 -->
ウィジェットはプレビューを表示できないときに、`widget()`からすぐに出ることで、この機能を利用できます。

<!--
```php
class ExampleWidget extends WP_Widget {
	...
	public function widget( $instance ) {
		if ( ! isset( $instance['name'] ) ) {
			// Name is required, so display nothing if we don't have it.
			return;
		}
		?>
		<h3>Name: <?php echo esc_html( $instance['name'] ); ?></h3>
		...
		<?php
	}
	...
}
```
 -->

```php
class ExampleWidget extends WP_Widget {
	...
	public function widget( $instance ) {
		if ( ! isset( $instance['name'] ) ) {
			// 名前は必須。なければ何も表示するものはない
			return;
		}
		?>
		<h3>Name: <?php echo esc_html( $instance['name'] ); ?></h3>
		...
		<?php
	}
	...
}
```


<!--
### Allowing migration to a block
 -->
### ブロックへの移行

<!--
You can allow users to easily migrate a Legacy Widget block containing a specific widget to a block or multiple blocks. This allows plugin authors to phase out their widgets in favour of blocks which are more intuitive and can be used in more places.
 -->
開発者はユーザーに対して、特定のウィジェットを含むレガシーウィジェットブロックから、ブロックまたは複数のブロックへの移行を支援できます。プラグイン作成者は、より直感的で、より多くの場所で使用できるブロックで段階的にウィジェットを置き換えられます。

<!--
The following steps show how to do this.
 -->
以下に手順を紹介します。

<!--
#### 1) Display the widget's instance in the REST API
 -->
#### 1) REST API 内でのウィジェットのインスタンスの表示

<!--
First, we need to tell WordPress that it is OK to display your widget's instance array in the REST API.
 -->
まず、WordPress に対して、REST API にウィジェットのインスタンス配列を表示して良いことを伝える必要があります。

<!--
This can be safely done if:
 -->
これは、以下の場合、安全に実行できます。

<!--
- You know that all of the values stored by your widget in `$instance` can be represented as JSON; and
- You know that your widget does not store any private data in `$instance` that should be kept hidden from users that have permission to customize the site.
 -->
- ウィジェットが `$instance` 内に保存したすべての値が JSON で表せることを知っており、かつ、
- サイトをカスタマイズする権限を持つユーザーからは秘匿すべきプレイベートデータを、ウィジェットが `$instance` 内に保存しないことを知っている。

<!--
If it is safe to do so, then set `$show_instance_in_rest` to `true` in the class that extends `WP_Widget`.
 -->
これらが安全であれば、`WP_Widget` を拡張するクラス内で、`$show_instance_in_rest` を `true` に設定してください。

```php
class ExampleWidget extends WP_Widget {
	...
	public $show_instance_in_rest = true;
	...
}
```

<!--
This allows the block editor and other REST API clients to see your widget's instance array by accessing `instance.raw` in the REST API response.
 -->
これで、ブロックエディターや他の REST API クライアントは、REST API レスポンスの `instance.raw` にアクセスすることでウィジェットのインスタンス配列を参照できます。

<!--
#### 2) Add a block transform
 -->
#### 2) ブロック変換の追加

<!--
Now, we can define a [block transform](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-transforms/) which tells the block editor what to replace the Legacy Widget block containing your widget with.
 -->
これで[ブロック変換](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-transforms/)を定義し、ウィジェットを含むレガシーウィジェットブロックを、何で置き換えるかブロックエディターに伝えられます。

<!--
This is done by adding JavaScript code to your block's definition. In this example, we define a transform that turns a widget with ID `'example_widget'` into a block with name `'example/block'`.
 -->
これには、ブロック定義に JavaScript コードを追加します。この例では、ID `'example_widget'` のウィジェットから、名前 `'example/block'` のブロックへの変換を定義します。

```js
transforms: {
    from: [
        {
            type: 'block',
            blocks: [ 'core/legacy-widget' ],
			isMatch: ( { idBase, instance } ) => {
				if ( ! instance?.raw ) {
					// Can't transform if raw instance is not shown in REST API.
					return false;
				}
				return idBase === 'example_widget';
			},
            transform: ( { instance } ) => {
                return createBlock( 'example/block', {
					name: instance.raw.name,
                } );
            },
        },
    ]
},
```

<!--
#### 3) Hide the widget from the Legacy Widget block
 -->
#### 3) レガシーウィジェットブロックからウィジェットを隠す

<!--
As a final touch, we can tell the Legacy Widget block to hide your widget from the "Select widget" dropdown and from the block inserter. This encourages users to use the block that replaces your widget.
 -->
最後に、レガシーウィジェットブロックに対して、「ウィジェットの選択」ドロップダウンやブロック挿入ツールからウィジェットを隠すよう伝えます。これはまたユーザーに対して、ウィジェットを置換するブロックを使用するよう促します。

<!--
This can be done using the `widget_types_to_hide_from_legacy_widget_block` filter.
 -->
これには、`widget_types_to_hide_from_legacy_widget_block` フィルターを使用します。

```php
function hide_example_widget( $widget_types ) {
	$widget_types[] = 'example_widget';
	return $widget_types;
}
add_filter( 'widget_types_to_hide_from_legacy_widget_block', 'hide_example_widget' );
```

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/widgets/legacy-widget-block.md)
