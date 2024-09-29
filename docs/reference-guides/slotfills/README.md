<!--
# SlotFills Reference
 -->
# SlotFill リファレンス

<!--
Slot and Fill are components that have been exposed to allow developers to inject items into some predefined places in the Gutenberg admin experience.
Please see the [SlotFill component docs](/packages/components/src/slot-fill/README.md) for more details.

In order to use them, we must leverage the [@wordpress/plugins](/packages/plugins/README.md) api to register a plugin that will inject our items.
 -->
Slot と Fill は外部に公開 (expose) されているコンポーネントです。開発者は Gutenberg 管理画面内の事前定義された場所に項目を注入できます。
詳細については [SlotFill コンポーネントのドキュメント](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/slot-fill/README.md)を参照してください。

SlotFill を使用するには [@wordpress/plugins](https://github.com/WordPress/gutenberg/tree/trunk/packages/plugins) API を使用して項目を注入するプラグインを登録する必要があります。

<!--
## Usage overview
 -->
## 基本的な使用方法

<!--
In order to access the SlotFills, we need to do four things:

1. Import the `registerPlugin` method from the `@wordpress/plugins` package.
2. Import the SlotFill we want from the `@wordpress/editor'` package.
3. Define a component to render our changes. Our changes/additions will be wrapped in the SlotFill component we imported.
4. Register the plugin.

Here is an example using the `PluginPostStatusInfo` slotFill:
 -->

SlotFill にアクセスするには4つの手順が必要です。

1. `wp.plugins` から `registerPlugin` メソッドを import します。
2. `wp.editor` から必要な SlotFill を import します。
3. 変更をレンダリングするメソッドを定義します。変更や追加は import した SlotFill コンポーネントにラップされます。
4. プラグインを登録します。

`PluginPostStatusInfo` SlotFill を使用するサンプルコードです。

```js
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/editor';

const PluginPostStatusInfoTest = () => (
	<PluginPostStatusInfo>
		<p>Post Status Info SlotFill</p>
	</PluginPostStatusInfo>
);

registerPlugin( 'post-status-info-test', { render: PluginPostStatusInfoTest } );
```
<!-- 
## Conditionally rendering SlotFill content
 -->
## SlotFill コンテンツの条件付きレンダリング

<!-- 
With the exception of [MainDashboardButton](/docs/reference-guides/slotfills/main-dashboard-button.md), every available SlotFill is exposed in both the Post Editor and Site Editor and any Fill that is registered will be rendered in both contexts. There are a number of approaches that can be implemented to conditionally render Fills.
 -->
すべての利用可能な SlotFill は、[MainDashboardButton](https://developer.wordpress.org/block-editor/reference-guides/slotfills/main-dashboard-button/) を除き、投稿エディターとサイトエディターの両方に公開され、登録された Fill は両方のコンテキストでレンダーされます。条件付きで Fill をレンダーする、複数の実装アプローチがあります。

<!-- 
### Restricting fills to the Post Editor
 -->
### Fill を投稿エディターに制限する

<!-- 
A fill can be restricted to the Post Editor by checking to see if the current post type object property `viewable` is set to `true`. Any post type not set to `viewable`, does not have an associated edit post screen and is a good indicator that the user is not in the Post Editor. The example below will render its content on the edit post screen for any registered post type.
 -->
Fill を投稿エディターに制限するには、現在の投稿タイプのオブジェクトプロパティ `viewable` が `true` に設定されているかどうかを確認します。`viewable` に設定されていない投稿タイプは、関連する投稿編集画面を持っていません。以下の例では任意の登録された投稿タイプに対して、コンテンツを投稿編集画面に表示します。

```js
/**
 * WordPress の依存
 */
import { registerPlugin } from '@wordpress/plugins';
import {
	PluginDocumentSettingPanel,
	store as editorStore,
} from '@wordpress/editor';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * プラグインの一部としてレンダーされるコンポーネント
 */
const EditPostDocumentSettingPanel = () => {
	// 現在の投稿タイプの情報を取得
	const isViewable = useSelect( ( select ) => {
		const postTypeName = select( editorStore ).getCurrentPostType();
		const postTypeObject = select( coreStore ).getPostType( postTypeName );
		return postTypeObject?.viewable;
	}, [] );

	// 投稿タイプが viewable でなければ、Fill をレンダーしない
	if ( ! isViewable ) {
		return null;
	}

	return (
		<PluginDocumentSettingPanel
			name="custom-panel"
			title={ __( 'Post Editor Example' ) }
			className="custom-panel"
		>
			<p>{ __( 'Only appears in the Edit Post screen' ) }</p>
		</PluginDocumentSettingPanel>
	);
};

registerPlugin( 'example-post-edit-only', {
	render: EditPostDocumentSettingPanel,
} );
```

<!-- 
### Restricting fills to certain post types.
 -->
### Fill を特定の投稿タイプに制限する

<!-- 
The following example expands on the example above by creating an allow list of post types where the fill should be rendered. In this case, the fill is only rendered when editing pages.
 -->
次の例では、上の例を拡張して、Fill のレンダーを許可する投稿タイプのリストを作成します。ここでは Fill はページの編集時にのみレンダーされます。

```js
/**
 * WordPress の依存
 */
import { registerPlugin } from '@wordpress/plugins';
import {
	PluginDocumentSettingPanel,
	store as editorStore,
} from '@wordpress/editor';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';

/**
 * プラグインの一部としてレンダーされるコンポーネント
 */
const RestrictPostTypes = () => {
	// 現在の投稿タイプの情報を取得
	const { isViewable, postTypeName } = useSelect( ( select ) => {
		const postType = select( editorStore ).getCurrentPostType();
		const postTypeObject = select( coreStore ).getPostType( postType );
		return {
			isViewable: postTypeObject?.viewable,
			postTypeName: postType,
		};
	}, [] );

	// プラグインのレンダーを許可された投稿タイプのリスト
	const allowedPostTypes = [ 'page' ];

	// 投稿タイプが viewable でない、または、許可リストになければ、プラグインをレンダーしない
	if ( ! isViewable || ! allowedPostTypes.includes( postTypeName ) ) {
		return null;
	}

	return (
		<PluginDocumentSettingPanel
			name="custom-panel"
			title={ __( 'Restrict Post Types Example' ) }
			className="custom-panel"
		>
			<p>
				{ sprintf(
					__(
						'Only appears on Post Types that are in the allowed list. %s'
					),
					allowedPostTypes.join( ', ' )
				) }
			</p>
		</PluginDocumentSettingPanel>
	);
};

registerPlugin( 'example-restrict-post-types', {
	render: RestrictPostTypes,
} );
```

<!-- 
### Restricting fills to the Side Editor
 -->
### Fill をサイトエディターに制限する

<!-- 
To restrict fills to the Site Editor, the reverse logic is true. If the post type object's `viewable` property is set to `true`, then the fill should not be rendered. The example below will render its content on any Site Editor screen.
 -->
Fill をサイトエディターに制限するには、逆の論理が成り立ちます。投稿タイプオブジェクトの `viewable` プロパティが `true` に設定されていれば Fill はレンダーしません。以下の例では、任意のサイトエディターの画面でコンテンツがレンダーされます。


```js
/**
 * WordPress の依存
 */
import { registerPlugin } from '@wordpress/plugins';
import {
	PluginDocumentSettingPanel,
	store as editorStore,
} from '@wordpress/editor';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * プラグインの一部としてレンダーされるコンポーネント
 */
const SiteEditorDocumentSettingPanel = () => {
	// 現在の投稿タイプの情報を取得
	const isViewable = useSelect( ( select ) => {
		const postTypeName = select( editorStore ).getCurrentPostType();
		const postTypeObject = select( coreStore ).getPostType( postTypeName );

		// viewable な投稿タイプは、WordPress の管理画面で表示可能。内部的なものは viewable に設定されない。
		return postTypeObject?.viewable;
	}, [] );

	// 投稿タイプが viewable なら、Fill をレンダーしない
	if ( isViewable ) {
		return null;
	}

	return (
		<PluginDocumentSettingPanel
			name="custom-panel"
			title={ __( 'Site Editor Example' ) }
			className="custom-panel"
		>
			<p>{ __( 'Only appears in the Site Editor' ) }</p>
		</PluginDocumentSettingPanel>
	);
};

registerPlugin( 'example-site-editor', {
	render: SiteEditorDocumentSettingPanel,
} );
```

<!-- 
### Restricting fills to certain screens in the Site Editor.
 -->
### Fill をサイトエディターの特定の画面に制限する

<!-- 
This example builds on the example above by providing an allow list to control which screens a fill can be rendered within the Site Editor.
 -->
次の例は上の例の上に構築され、サイトエディター内で Fill をレンダーできる画面を制御する許可リストを提供しています。

```js
/**
 * WordPress の依存
 */
import { registerPlugin } from '@wordpress/plugins';
import {
	PluginDocumentSettingPanel,
	store as editorStore,
} from '@wordpress/editor';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';

/**
 * プラグインの一部としてレンダーされるコンポーネント
 */
const SiteEditorDocumentSettingPanel = () => {
	// サイトエディター内の許可されるエリア
	const allowedSiteEditorScreens = [
		'wp_template', // テンプレート
		'wp_block', // パターン
		'wp_template_part', // テンプレートパーツ
	];

	const { isViewable, postType } = useSelect( ( select ) => {
		const postTypeName = select( editorStore ).getCurrentPostType();
		const postTypeObject = select( coreStore ).getPostType( postTypeName );

		return {
			// viewable な投稿タイプは、WordPress の管理画面で表示可能。内部的なものは viewable に設定されない。
			isViewable: postTypeObject?.viewable,
			postType: postTypeName,
		};
	}, [] );

	// 投稿タイプが viewable なら、Fill をレンダーしない
	if ( isViewable || ! allowedSiteEditorScreens.includes( postType ) ) {
		return null;
	}

	return (
		<PluginDocumentSettingPanel
			name="custom-panel"
			title={ __( 'Restricted to Site Editor screens' ) }
			className="custom-panel"
		>
			<p>
				{ sprintf(
					__(
						'Only appears on Editor Screens that are in the allowed list. %s'
					),
					allowedSiteEditorScreens.join( ', ' )
				) }
			</p>
		</PluginDocumentSettingPanel>
	);
};

registerPlugin( 'example-site-editor-only', {
	render: SiteEditorDocumentSettingPanel,
} );
```

<!--
## How do they work?
 -->
## どのように動作するか ?

<!--
SlotFills are created using `createSlotFill`. This creates two components, `Slot` and `Fill` which are then used to create a new component that is exported on the `wp.plugins` global.

**Definition of the `PluginPostStatusInfo` SlotFill** ([see core code](https://github.com/WordPress/gutenberg/blob/HEAD/packages/editor/src/components/plugin-post-status-info/index.js#L55))
 -->
SlotFill は `createSlotFill` を使用して作成されます。`createSlotFill` は2つのコンポーネント `Slot` と `Fill` を作成し、これらを使用して `wp.plugins` グローバルにエクスポートされる新しいコンポーネントが作成されます。

**`PluginPostStatusInfo` SlotFill の定義** ([コアのコード参照](https://github.com/WordPress/gutenberg/blob/HEAD/packages/editor/src/components/plugin-post-status-info/index.js#L55))

```js
/**
 * Defines as extensibility slot for the Summary panel.
 */

/**
 * WordPress dependencies
 */
import { createSlotFill, PanelRow } from '@wordpress/components';

export const { Fill, Slot } = createSlotFill( 'PluginPostStatusInfo' );

const PluginPostStatusInfo = ( { children, className } ) => (
	<Fill>
		<PanelRow className={ className }>{ children }</PanelRow>
	</Fill>
);

PluginPostStatusInfo.Slot = Slot;

export default PluginPostStatusInfo;
```
<!--
This new Slot is then exposed in the editor. The example below is from core and represents the Summary panel.

As we can see, the `<PluginPostStatusInfo.Slot>` is wrapping all of the items that will appear in the panel.
Any items that have been added via the SlotFill ( see the example above ), will be included in the `fills` parameter and be displayed in the end of the component.

See [core code](https://github.com/WordPress/gutenberg/tree/HEAD/packages/editor/src/components/sidebar/post-summary.js#L39).
 -->
次にこの新しい Slot はエディター内で外部に公開されます。以下の例はコアのもので「Summary (概要)」パネルを表します。

見て分かるように `<PluginPostStatusInfo.Slot>` はパネルに表示されるすべての項目をラップします。SlotFill 経由で追加されたすべての項目 (上の例参照) は、`fills` パラメータに含まれ、コンポーネントの最後に表示されます。

[コアのコード](https://github.com/WordPress/gutenberg/tree/HEAD/packages/editor/src/components/sidebar/post-summary.js#L39)を参照してください。

```js
export default function PostSummary( { onActionPerformed } ) {
	const { isRemovedPostStatusPanel } = useSelect( ( select ) => {
		// We use isEditorPanelRemoved to hide the panel if it was programmatically removed. We do
		// not use isEditorPanelEnabled since this panel should not be disabled through the UI.
		const { isEditorPanelRemoved } = select( editorStore );
		return {
			isRemovedPostStatusPanel: isEditorPanelRemoved( PANEL_NAME ),
		};
	}, [] );

	return (
		<PostPanelSection className="editor-post-summary">
			<PluginPostStatusInfo.Slot>
				{ ( fills ) => (
					<>
						<VStack spacing={ 4 }>
							<PostCardPanel
								onActionPerformed={ onActionPerformed }
							/>
							<PostFeaturedImagePanel withPanelBody={ false } />
							<PostExcerptPanel />
							<VStack spacing={ 1 }>
								<PostContentInformation />
								<PostLastEditedPanel />
							</VStack>
							{ ! isRemovedPostStatusPanel && (
								<VStack spacing={ 2 }>
									<VStack spacing={ 1 }>
										<PostStatusPanel />
										<PostSchedulePanel />
										<PostURLPanel />
										<PostAuthorPanel />
										<PostTemplatePanel />
										<PostDiscussionPanel />
										<PageAttributesPanel />
										<PostSyncStatus />
										<BlogTitle />
										<PostsPerPage />
										<SiteDiscussion />
										<PostFormatPanel />
										<PostStickyPanel />
									</VStack>
									<TemplateAreas />
									{ fills }
								</VStack>
							) }
						</VStack>
					</>
				) }
			</PluginPostStatusInfo.Slot>
		</PostPanelSection>
	);
}
```
<!--
## Currently available SlotFills and examples
 -->
## 現在利用可能な SlotFill とサンプル

<!--
The following SlotFills are available in the `edit-post` or `editor` packages. Please refer to the individual items below for usage and example details:

-   [MainDashboardButton](/docs/reference-guides/slotfills/main-dashboard-button.md)
-   [PluginBlockSettingsMenuItem](/docs/reference-guides/slotfills/plugin-block-settings-menu-item.md)
-   [PluginDocumentSettingPanel](/docs/reference-guides/slotfills/plugin-document-setting-panel.md)
-   [PluginMoreMenuItem](/docs/reference-guides/slotfills/plugin-more-menu-item.md)
-   [PluginPostPublishPanel](/docs/reference-guides/slotfills/plugin-post-publish-panel.md)
-   [PluginPostStatusInfo](/docs/reference-guides/slotfills/plugin-post-status-info.md)
-   [PluginPrePublishPanel](/docs/reference-guides/slotfills/plugin-pre-publish-panel.md)
-   [PluginSidebar](/docs/reference-guides/slotfills/plugin-sidebar.md)
-   [PluginSidebarMoreMenuItem](/docs/reference-guides/slotfills/plugin-sidebar-more-menu-item.md)
 -->

`edit-post` パッケージ、または `editor` パッケージ内の以下の SlotFill を利用可能です。詳細な使用方法と例についてはそれぞれの項目を参照してください。

- [MainDashboardButton](https://developer.wordpress.org/block-editor/developers/slotfills/main-dashboard-button/)
- [PluginBlockSettingsMenuItem](https://developer.wordpress.org/block-editor/developers/slotfills/plugin-block-settings-menu-item/)
- [PluginDocumentSettingPanel](https://developer.wordpress.org/block-editor/developers/slotfills/plugin-document-setting-panel/)
- [PluginMoreMenuItem](https://developer.wordpress.org/block-editor/developers/slotfills/plugin-more-menu-item/)
- [PluginPostPublishPanel](https://developer.wordpress.org/block-editor/developers/slotfills/plugin-post-publish-panel/)
- [PluginPostStatusInfo](https://developer.wordpress.org/block-editor/developers/slotfills/plugin-post-status-info/)
- [PluginPrePublishPanel](https://developer.wordpress.org/block-editor/developers/slotfills/plugin-pre-publish-panel/)
- [PluginSidebar](https://developer.wordpress.org/block-editor/developers/slotfills/plugin-sidebar/)
- [PluginSidebarMoreMenuItem](https://developer.wordpress.org/block-editor/developers/slotfills/plugin-sidebar-more-menu-item/)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/slot-fill/README.md)
