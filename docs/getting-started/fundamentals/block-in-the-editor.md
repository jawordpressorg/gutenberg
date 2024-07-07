<!-- 
# The block in the Editor
 -->
# エディター内のブロック

<!-- 
The Block Editor is a React Single Page Application (SPA). Every block in the Editor is displayed through a React component defined in the `edit` property of the settings object used to [register the block](https://developer.wordpress.org/block-editor/getting-started/fundamentals/registration-of-a-block/#registering-a-block-with-javascript-client-side) on the client. 

 -->
ブロックエディターは React シングルページアプリケーション (SPA) です。エディター内のすべてのブロックは、クライアントでの[ブロック登録](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/registration-of-a-block/#JavaScript-%E3%81%AB%E3%82%88%E3%82%8B%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%81%AE%E7%99%BB%E9%8C%B2%EF%BC%88%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E5%81%B4%EF%BC%89)に使用される settings オブジェクトの `edit` プロパティで定義された、React コンポーネント経由で表示されます。

<!-- 
The `props` object received by the block's `Edit` React component includes:

- **[`attributes`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#attributes):** An object of all the block's attributes.
- **[`setAttributes`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#setattributes):** A method to update the attributes object.
- **[`isSelected`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#isselected):** A boolean value that communicates whether the block is currently selected
 -->
ブロックの `Edit` React コンポーネントが受け取る `props` オブジェクトは以下を含みます。

- **[`attributes`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/#%E5%B1%9E%E6%80%A7):** ブロックスのすべての属性オブジェクト
- **[`setAttributes`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/#setAttributes):** 属性オブジェクトを更新するメソッド
- **[`isSelected`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/#isSelected):** ブロックが現在選択されているかどうかを示すブール値

<!-- 
WordPress provides many built-in standard components that can be used to define the block interface in the Editor. These built-in components are available via packages such as [`@wordpress/components`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/) and [`@wordpress/block-editor`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/).

 -->
WordPress にはエディター内のブロックのインターフェイスを定義する、多くの組み込み標準コンポーネントがあります。これらの組み込みコンポーネントは、[`@wordpress/components`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/) や [`@wordpress/block-editor`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/) などのパッケージから利用できます。

<!-- 
<div class="callout">
	The WordPress Gutenberg project uses <a href="https://wordpress.github.io/gutenberg/?path=/docs/docs-introduction--page">Storybook</a> to document the user interface components that are available in WordPress packages.
</div>
 -->
> WordPress Gutenberg プロジェクトでは、WordPress パッケージで利用可能なユーザーインターフェイスコンポーネントのドキュメントに、<a href="https://wordpress.github.io/gutenberg/?path=/docs/docs-introduction--page">Storybook</a> を使用しています。

<!-- 
Custom settings controls for the block in the Block Toolbar or the Settings Sidebar can also be defined through this `Edit` React component via built-in components such as:

- [`InspectorControls`](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/inspector-controls/README.md) 
- [`BlockControls`](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/block-controls) 
 -->
ブロックツールバーや設定サイドバーのブロックのカスタム設定コントロールもまた、次のような組み込みコンポーネントを介して、`Edit` React コンポーネント経由で定義できます。
- [`InspectorControls`](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/inspector-controls/README.md)
- [`BlockControls`](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/block-controls)

<!-- 
## Built-in components
 -->
## 組み込みコンポーネント

<!-- 
The package [`@wordpress/components`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/) includes a library of generic WordPress components to create common UI elements for the Block Editor and the WordPress dashboard. Some of the  most commonly used components from this package are:
 -->
パッケージ [`@wordpress/components`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/) には、ブロックエディターと WordPress ダッシュボード用の共通 UI 要素を作成する、汎用 WordPress コンポーネントのライブラリが含まれています。このパッケージでよく使用されるコンポーネントです。

- [`TextControl`](https://wordpress.github.io/gutenberg/?path=/docs/components-textcontrol--docs) 
- [`Panel`](https://wordpress.github.io/gutenberg/?path=/docs/components-panel--docs)
- [`ToggleControl`](https://wordpress.github.io/gutenberg/?path=/docs/components-togglecontrol--docs)
- [`ExternalLink`](https://wordpress.github.io/gutenberg/?path=/docs/components-externallink--docs)

<!-- 
The package [`@wordpress/block-editor`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/) includes a library of components and hooks for the Block Editor, including those to define custom settings controls for the block. Some of the components most commonly used from this package are:
 -->
パッケージ [`@wordpress/block-editor`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/) にはブロックエディター用のコンポーネントとフックのライブラリが含まれ、そこにはブロックのカスタム設定コントロールを定義するものもあります。このパッケージでよく使用されるコンポーネントです。

<!-- 
- [`RichText`](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/rich-text/README.md)
- [`BlockControls`](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/block-controls)
- [`InspectorControls`](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/inspector-controls/README.md)
- [`InnerBlocks`](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/inner-blocks/README.md)
- `PanelColorSettings` or `ColorPalette`
 -->
- [`RichText`](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/rich-text/README.md)
- [`BlockControls`](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/block-controls)
- [`InspectorControls`](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/inspector-controls/README.md)
- [`InnerBlocks`](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/inner-blocks/README.md)
- `PanelColorSettings` または `ColorPalette`

<!-- 
<div class="callout callout-info">
	The package <a href="https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/"><code>@wordpress/block-editor</code></a> also provides the tools to create and use standalone block editors.
</div>
 -->
> パッケージ [`@wordpress/block-editor`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/) にはまた、スタンドアロンブロックエディターを作成し、使用するためのツールも含まれます。

<!-- 
A good workflow when using a component for the Block Editor is:

- Import the component from a WordPress package.
- Add the corresponding code for the component to your project in JSX format.
- Most built-in components will be used to set [block attributes](https://developer.wordpress.org/block-editor/getting-started/fundamentals/block-json/#using-attributes-to-store-block-data), so define any necessary attributes in `block.json` and create event handlers to update those attributes with `setAttributes` in your component.
- Adapt the code to be serialized and stored in the database if needed.
 -->
ブロックエディター用のコンポーネントを使用する際の、良いワークフローは、

- WordPress のパッケージからコンポーネントをインポートする。
- コンポーネントに対応するコードを JSX 形式でプロジェクトに追加する。
- ほとんどの組み込みコンポーネントは、[ブロック属性](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-json/#attributes-%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%9F%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E4%BF%9D%E5%AD%98)の設定に使用される。このため、`block.json` で必要な属性を定義し、コンポーネントの `setAttributes` でその属性を更新するイベントハンドラを作成する。
- 必要であれば、コードをシリアライズして、データベースに格納できるようにする。

<!-- 
## Block Controls: Block Toolbar and Settings Sidebar
 -->
## ブロックコントロール: ブロックツールバーと設定サイドバー

<!-- 
To simplify block customization and ensure a consistent user experience, there are several built-in UI patterns to help generate the Editor preview of a block. 
 -->
ブロックのカスタマイズを簡素化し、一貫したユーザー体験を保証するため、ブロックのエディタープレビュー生成を支援するいくつかの組み込み UI パターンがあります。

<!-- 
The image below details the Block Toolbar and the Settings Sidebar of a selected Paragraph block.
 -->
下図は、選択した段落ブロックのブロックツールバーと設定サイドバーの詳細です。

<!-- 
![Diagram showing the Block Toolbar and the Settings Sidebar when a Paragraph block is selected](https://developer.wordpress.org/files/2023/12/block-toolbar-settings-sidebar.png)
 -->
![段落ブロック選択時のブロックツールバーと設定サイドバーの図解](https://developer.wordpress.org/files/2023/12/block-toolbar-settings-sidebar.png)

<!-- 
### Block Toolbar
 -->
### ブロックツールバー

<!-- 
When the user selects a block, a number of control buttons may be shown in a toolbar above the selected block. Some of these block-level controls may be included automatically, but you can also customize the toolbar to include controls specific to your block type. If the return value of your block type's `Edit` function includes a `BlockControls` element, those controls will be shown in the selected block's toolbar.
 -->
ユーザーがブロックを選択すると、選択されたブロックの上のツールバーに、多くのコントロールボタンが表示されます。このうちブロックレベルのコントロールのいくつかは自動的に表示されますが、ツールバーをカスタマイズしてブロックタイプに固有のコントロールを挿入できます。ブロックタイプの `edit` 関数の戻り値に `BlockControls` 要素を含めると、選択したブロックのツールバーにそのコントロールが表示されます。

```jsx
export default function Edit( { className, attributes: attr, setAttributes } ) {

	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	};

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( {
			alignment: newAlignment === undefined ? 'none' : newAlignment,
		} );
	};

	return (
		<div { ...useBlockProps() }>
			<BlockControls>
				<ToolbarGroup>
					<AlignmentToolbar
						value={ attr.alignment }
						onChange={ onChangeAlignment }
					/>
				</ToolbarGroup>
			</BlockControls>

			<RichText
				className={ className }
				style={ { textAlign: attr.alignment } }
				tagName="p"
				onChange={ onChangeContent }
				value={ attr.content }
			/>
		</div>
	);
}
```

<!-- 
_See the [full block example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/block-toolbar-ab967f) of the [code above](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/block-toolbar-ab967f/src/edit.js)._
 -->
_[上のコード](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/block-toolbar-ab967f/src/edit.js)を含む、[完全なブロックのサンプルプログラム](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/block-toolbar-ab967f)を参照してください。_

<!-- 
Note that `BlockControls` is only visible when the block is currently selected and in visual editing mode. `BlockControls` are not shown when editing a block in HTML editing mode.
 -->
なお、`BlockControls` はブロックが選択されていて、ビジュアル編集モードのときのみ表示されます。HTML 編集モードでブロックを編集しているときは `BlockControls` は表示されません。

<!-- 
### Settings Sidebar
 -->
### 設定サイドバー

<!-- 
The Settings Sidebar is used to display less-often-used settings or those that require more screen space. The Settings Sidebar should be used for **block-level settings only** and is shown when a block is selected.
 -->
設定サイドバーは、使用頻度の低い設定や、大きな画面領域を必要とする設定の表示に使用されます。設定サイドバーは、**ブロックレベルの設定のみに使用し**、ブロックを選択すると表示されます。

<!-- 
If a setting only affects selected content inside a block, such as "bolding" text, **do not place the setting inside the Settings Sidebar**. Use a toolbar instead. The Settings Sidebar is displayed even when editing a block in HTML mode, so it should only contain block-level settings.
 -->
ブロック内の選択したコンテンツにのみ影響する設定、たとえばテキストの「太字」などは、**設定サイドバー内に配置しないでください**。代わりにツールバーを使用してください。設定サイドバーは HTML モードでブロックを編集しているときにも表示されます。このため、ブロックレベルの設定のみを配置してください。

<!-- 
The Block Tab is shown in place of the Document Tab when a block is selected.
 -->
<!-- 
ブロックを選択すると、ドキュメントタブの代わりにブロックタブが表示されます。
 -->
<!-- 
Similar to rendering a toolbar, if you include an `InspectorControls` component in the `return` value of your block type's `Edit` function, those controls will be shown in the Settings Sidebar region.
 -->
ツールバーのレンダリングと同様に、ブロックタイプの `edit` 関数の戻り値に `InspectorControls` 要素を含めると、コントロールが設定サイドバー領域に表示されます。

```jsx
export default function Edit( { attributes, setAttributes } ) {
	const onChangeBGColor = ( hexColor ) => {
		setAttributes( { bg_color: hexColor } );
	};

	const onChangeTextColor = ( hexColor ) => {
		setAttributes( { text_color: hexColor } );
	};

	return (
		<div { ...useBlockProps() }>
			<InspectorControls key="setting">
				<div>
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'Background color', 'block-development-examples' ) }
						</legend>
						<ColorPalette // Element Tag for Gutenberg standard colour selector
							onChange={ onChangeBGColor } // onChange event callback
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'Text color', 'block-development-examples' ) }
						</legend>
						<ColorPalette
							onChange={ onChangeTextColor }
						/>
					</fieldset>
				</div>
			</InspectorControls>
			<TextControl
				value={ attributes.message }
				onChange={ ( val ) => setAttributes( { message: val } ) }
				style={ {
					backgroundColor: attributes.bg_color,
					color: attributes.text_color,
				} }
			/>
		</div>
	);
}
```
<!-- 
_See the [full block example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/settings-sidebar-82c525) of the [code above](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/settings-sidebar-82c525/src/edit.js)._
 -->

_[上のコード](https://github.com/WordPress/block-development-examples/blob/trunk/plugins/settings-sidebar-82c525/src/edit.js)を含む、[完全なブロックのサンプルプログラム](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/settings-sidebar-82c525)を参照してください。_

<!-- 
Block controls rendered in both the toolbar and sidebar will also be available when multiple blocks of the same type are selected.
 -->
ツールバーとサイドバーの両方でレンダーされるブロックコントロールは、同じタイプの複数のブロックが選択されている場合にも利用できます。

<!-- 
<div class="callout callout-note">
	For common customization settings, including color, border, spacing, and more, you can rely on <a href="https://developer.wordpress.org/block-editor/getting-started/fundamentals/block-json/#enable-ui-settings-panels-for-the-block-with-supports">block supports</a> instead of a custom solution. Block supports provide a consistent UI with the same functionality as other Core blocks.
</div>
 -->
色、ボーダー、スペースのカスタマイズなどを含む、一般的なカスタマイズ設定については、<a href="https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-json/#supports-%E3%81%AB%E3%82%88%E3%82%8B%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%81%AE-UI-%E8%A8%AD%E5%AE%9A%E3%83%91%E3%83%8D%E3%83%AB%E3%81%AE%E6%9C%89%E5%8A%B9%E5%8C%96">ブロックサポート</a>を使用すると、より効率的な方法で、同じ機能を提供できます。

<!-- 
## Additional resources
 -->
## その他の情報

- [Storybook for WordPress components](https://wordpress.github.io/gutenberg/?path=/docs/docs-introduction--page)
- [@wordpress/block-editor](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/)
- [@wordpress/components](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/)
- [`InspectorControls`](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/inspector-controls/README.md)
- [`BlockControls`](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/block-controls)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/fundamentals/block-in-the-editor.md)
