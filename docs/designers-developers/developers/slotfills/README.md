<!-- 
# SlotFills Reference
 -->
# SlotFill リファレンス

<!-- 
Slot and Fill are components that have been exposed to allow developers to inject items into some predefined places in the Gutenberg admin experience.
Please see the [SlotFill component docs](https://wordpress.org/gutenberg/handbook/designers-developers/developers/components/slot-fill/) for more details.

In order to use them, we must leverage the [@wordpress/plugins](https://wordpress.org/gutenberg/handbook/designers-developers/developers/packages/packages-plugins/) api to register a plugin that will inject our items.
 -->

Slot と Fill は外部に公開されているコンポーネントです。開発者は Gutenberg 管理画面内の事前定義された場所に項目を注入できます。
詳細については [SlotFill コンポーネントのドキュメント](https://wordpress.org/gutenberg/handbook/designers-developers/developers/components/slot-fill/)を参照してください。

SlotFill を使用するには [@wordpress/plugins](https://wordpress.org/gutenberg/handbook/designers-developers/developers/packages/packages-plugins/) API を使用して項目を注入するプラグインを登録する必要があります。

<!-- 
## Usage overview
 -->
## 基本的な使用方法

<!-- 
In order to access the SlotFills, we need to do four things:

1. Import the `registerPlugin` method from `wp.plugins`.
2. Import the SlotFill we want from `wp.editPost`.
3. Define a method to render our changes. Our changes/additions will be wrapped in the SlotFill component we imported.
4. Register the plugin.

Here is an example using the `PluginPostStatusInfo` slotFill:
 -->

SlotFill にアクセスするには4つの手順が必要です。

1. `wp.plugins` から `registerPlugin` メソッドを import します。
2. `wp.editPost` から必要な SlotFill を import します。
3. 変更をレンダリングするメソッドを定義します。変更や追加は import した SlotFill コンポーネントにラップされます。
4. プラグインを登録します。

`PluginPostStatusInfo` SlotFill を使用するサンプルコードです。

```js
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/edit-post';

const PluginPostStatusInfoTest = () => (
	<PluginPostStatusInfo>
		<p>Post Status Info SlotFill</p>
	</PluginPostStatusInfo>
);

registerPlugin( 'post-status-info-test', { render: PluginPostStatusInfoTest } );
```
<!-- 
## How do they work?
 -->
## どのように動作するか ?

<!-- 
SlotFills are created using `createSlotFill`. This creates two components, `Slot` and `Fill` which are then used to create a new component that is exported on the `wp.plugins` global.

**Definition of the `PluginPostStatusInfo` SlotFill** ([see core code](https://github.com/WordPress/gutenberg/blob/master/packages/edit-post/src/components/sidebar/plugin-post-status-info/index.js#L54))
 -->
SlotFill は `createSlotFill` を使用して作成されます。`createSlotFill` は2つのコンポーネント `Slot` と `Fill` を作成し、これらを使用して `wp.plugins` グローバルにエクスポートされる新しいコンポーネントが作成されます。


**`PluginPostStatusInfo` SlotFill の定義** ([コアのコード参照](https://github.com/WordPress/gutenberg/blob/master/packages/edit-post/src/components/sidebar/plugin-post-status-info/index.js#L54))

```js
/**
 * Defines as extensibility slot for the Status & visibility panel.
 */

/**
 * WordPress dependencies
 */
import { createSlotFill, PanelRow } from '@wordpress/components';

export const { Fill, Slot } = createSlotFill( 'PluginPostStatusInfo' );

const PluginPostStatusInfo = ( { children, className } ) => (
	<Fill>
		<PanelRow className={ className }>
			{ children }
		</PanelRow>
	</Fill>
);

PluginPostStatusInfo.Slot = Slot;

export default PluginPostStatusInfo;
```
<!-- 
This new Slot is then exposed in the editor. The example below is from core and represents the Status & visibility panel.

As we can see, the `<PluginPostStatusInfo.Slot>` is wrapping all of the items that will appear in the panel.
Any items that have been added via the SlotFill ( see the example above ), will be included in the `fills` parameter and be displayed between the `<PostAuthor/>` and `<PostTrash/>` components.

See [core code](https://github.com/WordPress/gutenberg/tree/master/packages/edit-post/src/components/sidebar/post-status/index.js#L26).
 -->

次にこの新しい Slot はエディター内で外部に公開されます。以下の例はコアのもので「ステータスと公開状態」パネルを表します。

見て分かるように `<PluginPostStatusInfo.Slot>` はパネルに表示されるすべての項目をラップします。SlotFill 経由で追加されたすべての項目 (上の例参照) は、`fills` パラメータに含まれ、`<PostAuthor/>` と `<PostTrash/>` コンポーネントの間に表示されます。

[コアのコード](https://github.com/WordPress/gutenberg/tree/master/packages/edit-post/src/components/sidebar/post-status/index.js#L26)を参照してください。

```js
const PostStatus = ( { isOpened, onTogglePanel } ) => (
	<PanelBody
		className="edit-post-post-status"
		title={ __( 'Status & visibility' ) }
		opened={ isOpened }
		onToggle={ onTogglePanel }
	>
		<PluginPostStatusInfo.Slot>
			{ ( fills ) => (
				<Fragment>
					<PostVisibility />
					<PostSchedule />
					<PostFormat />
					<PostSticky />
					<PostPendingStatus />
					<PostAuthor />
					{ fills }
					<PostTrash />
				</Fragment>
			) }
		</PluginPostStatusInfo.Slot>
	</PanelBody>
);
```
<!-- 
## Currently available SlotFills and examples
 -->
## 現在利用可能な SlotFill とサンプル

<!-- 
The following SlotFills are available in the `edit-post` package. Please refer to the individual items below for usage and example details:

* [MainDashboardButton](/docs/designers-developers/developers/slotfills/main-dashboard-button.md)
* [PluginBlockSettingsMenuItem](/docs/designers-developers/developers/slotfills/plugin-block-settings-menu-item.md)
* [PluginDocumentSettingPanel](/docs/designers-developers/developers/slotfills/plugin-document-setting-panel.md)
* [PluginMoreMenuItem](/docs/designers-developers/developers/slotfills/plugin-more-menu-item.md)
* [PluginPostPublishPanel](/docs/designers-developers/developers/slotfills/plugin-post-publish-panel.md)
* [PluginPostStatusInfo](/docs/designers-developers/developers/slotfills/plugin-post-status-info.md)
* [PluginPrePublishPanel](/docs/designers-developers/developers/slotfills/plugin-pre-publish-panel.md)
* [PluginSidebar](/docs/designers-developers/developers/slotfills/plugin-sidebar.md)
* [PluginSidebarMoreMenuItem](/docs/designers-developers/developers/slotfills/plugin-sidebar-more-menu-item.md)
 -->

`edit-post` パッケージでは以下の SlotFill が利用可能です。詳細な使用方法と例についてはそれぞれの項目を参照してください。

* [MainDashboardButton](https://developer.wordpress.org/block-editor/developers/slotfills/main-dashboard-button.md)
* [PluginBlockSettingsMenuItem](https://developer.wordpress.org/block-editor/developers/slotfills/plugin-block-settings-menu-item/)
* [PluginDocumentSettingPanel](https://developer.wordpress.org/block-editor/developers/slotfills/plugin-document-setting-panel/)
* [PluginMoreMenuItem](https://developer.wordpress.org/block-editor/developers/slotfills/plugin-more-menu-item/)
* [PluginPostPublishPanel](https://developer.wordpress.org/block-editor/developers/slotfills/plugin-post-publish-panel/)
* [PluginPostStatusInfo](https://developer.wordpress.org/block-editor/developers/slotfills/plugin-post-status-info/)
* [PluginPrePublishPanel](https://developer.wordpress.org/block-editor/developers/slotfills/plugin-pre-publish-panel/)
* [PluginSidebar](https://developer.wordpress.org/block-editor/developers/slotfills/plugin-sidebar/)
* [PluginSidebarMoreMenuItem](https://developer.wordpress.org/block-editor/developers/slotfills/plugin-sidebar-more-menu-item/)

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/slotfills/README.md)
