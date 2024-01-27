<!--
# Meta Boxes
-->
# メタボックス

<!--
## Overview
-->
## 概要

<!--
Prior to the block editor, custom meta boxes were used to extend the editor. Now there are new ways to extend, giving more power to the developer and a better experience for the authors. It is recommended to port older custom meta boxes to one of these new methods to create a more unified and consistent experience for those using the editor.
-->
ブロックエディター以前は、エディターの拡張にカスタムメタボックスが使用されていました。現在は新しい拡張方法があり、開発者にさらなるパワーを与え、ユーザーにより良い体験を与えます。古いカスタムメタボックスは、新しい方法の一つに移植することが推奨されています。エディターの利用者に、統一され一貫性のあるユーザー体験を作ることができます。

<!--
The block editor does support most existing meta boxes, see [the backward compatibility section below](#backward-compatibility) for details .
-->
ブロックエディターは、ほとんどの既存のメタボックスをサポートします。詳細については、[後方互換性に関する記事](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/backward-compatibility/meta-box/)を参照してください。

<!--
If you are interested in working with the post meta outside the editor, check out the [Sidebar Tutorial](/docs/how-to-guides/sidebar-tutorial/plugin-sidebar-0.md).
-->
エディターの外部で投稿メタを操作したい場合は、[サイドバーチュートリアル](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/plugin-sidebar-0/)を参照してください。

<!--
### Use blocks to store meta
-->
## ブロックを使用したメタ情報の保存

<!--
Typically, blocks store attribute values in the serialized block HTML. However, you can also create a block that saves its attribute values as post meta, that can be accessed programmatically anywhere in your template.
-->
一般にブロックは属性の値をシリアライズしたブロックの HTML 内に保存します。しかし属性の値を投稿メタとして保存するブロックを作成することもできます。こうするとテンプレートの任意の場所からプログラム的に属性へアクセスできます。

<!--
This guide shows how to create a block that prompts a user for a single value, and saves it to post meta.
-->
このガイドは、ユーザーに値の入力を求め、その値を投稿メタに保存するブロックを作成する方法を紹介します。

<!--
## Before you start
-->
## はじめる前に

<!--
This guide assumes you are already familiar with WordPress plugins, post meta, and basic JavaScript. Review the [Getting started with JavaScript tutorial](/docs/how-to-guides/javascript/README.md) for an introduction.
-->
このガイドでは、すでに WordPressのプラグイン、投稿メタ、基本的な JavaScript に親しんでいることを前提としています。入門としては、[JavaScript 入門 チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/javascript/) を参照してください。

<!--
The guide will walk through creating a basic block, but recommended to go through the [Create Block tutorial](/docs/getting-started/devenv/get-started-with-create-block.md) for a deeper understanding of creating custom blocks.
-->
このガイドでは、基本的なブロックの作成方法を説明します。しかし、カスタムブロックの作成をより深く理解するには、[ブロック作成チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-create-block/)の参照を推奨します。

<!--
You will need:
-->
以下が必要です。

<!--
-   WordPress development environment,
-   A minimal plugin activated and ready to edit
-   JavaScript setup for building and enqueuing
-->
-   WordPress 開発環境
-   最小のプラグインの有効化と、編集可能なセットアップ
-   JavaScript のビルドとエンキューが可能なセットアップ

<!--
A [complete meta-block example](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/meta-block-bb1e55) is available that you can use as a reference for your setup.
-->
[完全なメタブロックのサンプル](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/meta-block-bb1e55) が利用可能です。セットアップの参考にしてください。

<!--
## Step-by-step guide
-->
## ステップバイステップガイド

<!--
1. [Register Meta Field](#step-1-register-meta-field)
2. [Add Meta Block](#step-2-add-meta-block)
3. [Use Post Meta Data](#step-3-use-post-meta-data)
4. [Finishing Touches](#step-4-use-block-templates-optional)
-->
1. メタフィールドの登録
2. メタブロックの追加
3. 投稿メタデータの使用
4. 最後の仕上げ

<!--
### Step 1: Register meta field
-->
### ステップ 1: メタフィールドの登録

<!--
A post meta field is a WordPress object used to store extra data about a post. You need to first register a new meta field prior to use. See Managing [Post Metadata](https://developer.wordpress.org/plugins/metadata/managing-post-metadata/) to learn more about post meta.
-->
投稿メタフィールドは、投稿の追加データの保存に使用される WordPress オブジェクトです。使用前にまず新しいメタフィールドを登録する必要があります。投稿メタの詳細については[投稿メタデータ](https://developer.wordpress.org/plugins/metadata/managing-post-metadata/)の管理を参照してください。

<!--
When registering the field, note the `show_in_rest` parameter. This ensures the data will be included in the REST API, which the block editor uses to load and save meta data. See the [`register_post_meta`](https://developer.wordpress.org/reference/functions/register_post_meta/) function definition for extra information.
-->
フィールドの登録の際には `show_in_rest` パラメータに注意してください。このパラメータによりデータが REST API に含まれます。ブロックエディターは REST API を使用してメタデータをロードしたり保存します。詳細な情報については [`register_post_meta`](https://developer.wordpress.org/reference/functions/register_post_meta/) 関数定義を参照してください。

<!--
Additionally, your post type needs to support `custom-fields` for `register_post_meta` function to work
-->
また `register_post_meta` 関数が動作するには投稿タイプが `custom-fields` をサポートする必要があります。

<!--
To register the field, add the following to your PHP plugin:
-->
フィールドを登録するには、次のコードを PHP プラグインに追加してください。

<!-- 
```php
<?php
// register custom meta tag field
function myguten_register_post_meta() {
	register_post_meta( 'post', 'myguten_meta_block_field', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );
}
add_action( 'init', 'myguten_register_post_meta' );
```
 -->
```php
<?php
// カスタムメタタグフィールドを登録する。
function myguten_register_post_meta() {
	register_post_meta( 'post', 'myguten_meta_block_field', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );
}
add_action( 'init', 'myguten_register_post_meta' );
```

<!--
### Step 2: Add meta block
-->
### ステップ 2: メタブロックの追加

<!--
With the meta field registered in the previous step, next create a new block to display the field value to the user.
-->
次に、前のステップで登録したメタフィールドを使用して、ユーザーにフィールド値を表示する新しいブロックを作成します。

<!--
The hook `useEntityProp` can be used by the blocks to get or change meta values.
-->
メタの値を取得したり変更するにはブロックからフック `useEntityProp` を使用します。

<!--
Add this code to the JavaScript `src/index.js`:
-->
このコードを JavaScript `src/index.js` に追加してください。

<!-- 
```js
import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'myguten/meta-block', {
	edit: ( { setAttributes, attributes } ) => {
		const blockProps = useBlockProps();
		const postType = useSelect(
			( select ) => select( 'core/editor' ).getCurrentPostType(),
			[]
		);

		const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

		const metaFieldValue = meta[ 'myguten_meta_block_field' ];
		const updateMetaValue = ( newValue ) => {
			setMeta( { ...meta, myguten_meta_block_field: newValue } );
		};

		return (
			<div { ...blockProps }>
				<TextControl
					label="Meta Block Field"
					value={ metaFieldValue }
					onChange={ updateMetaValue }
				/>
			</div>
		);
	},

	// No information saved to the block.
	// Data is saved to post meta via the hook.
	save: () => {
		return null;
	},
} );
```
 -->
```js
import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'myguten/meta-block', {
	edit: ( { setAttributes, attributes } ) => {
		const blockProps = useBlockProps();
		const postType = useSelect(
			( select ) => select( 'core/editor' ).getCurrentPostType(),
			[]
		);

		const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

		const metaFieldValue = meta[ 'myguten_meta_block_field' ];
		const updateMetaValue = ( newValue ) => {
			setMeta( { ...meta, myguten_meta_block_field: newValue } );
		};

		return (
			<div { ...blockProps }>
				<TextControl
					label="Meta Block Field"
					value={ metaFieldValue }
					onChange={ updateMetaValue }
				/>
			</div>
		);
	},

	// ブロックに情報は保存されない。
	// データは、フックを介して、投稿メタに保存される。
	save: () => {
		return null;
	},
} );
```

<!--
Confirm this works by creating a post and add the Meta Block. You will see your field that you can type a value in. When you save the post, either as a draft or published, the post meta value will be saved too. You can verify by
saving and reloading your draft, the form will still be filled in on reload.
-->
動作を確認するには、投稿を作成し、メタブロックを追加してください。値を入力できるフィールドが表示されます。下書きまたは公開で、投稿を保存すると、投稿のメタ値も保存されます。下書きを保存し、再読み込みすると、フォームが入力されたままになることで検証できます。

<!--
You could also confirm the data is saved by checking the database table `wp_postmeta` and confirm the new post id contains the new field data.
-->
また、データの保存を確認する別の方法として、データベーステーブル `wp_postmeta` をチェックして、新しい投稿 ID が新しいフィールドデータを含んでいることを確認してください。

<!--
**Troubleshooting**: Be sure to build your code between changes, you updated the PHP code from Step 1, and JavaScript files are enqueued. Check the build output and developer console for errors.
-->
**トラブルシューティング**: 変更の合間に忘れずにコードをビルドしてください。ステップ 1から PHP コードを更新し、JavaScript ファイルをエンキューしています。ビルドの出力と開発者コンソールのエラーを確認してください。

<!--
### Step 3: Use post meta data
-->
### ステップ 3: 投稿メタデータの使用

<!--
You can use the post meta data stored in the last step in multiple ways.
-->
前のステップで保存した投稿メタデータはいくつかの方法で使用できます。

<!--
#### Use post meta in PHP
-->
#### PHP での投稿メタの使用

<!--
The first example uses the value from the post meta field and appends it to the end of the post content wrapped in a `H4` tag.
-->
最初の例では投稿メタフィールドからの値を `H4` タグで囲んで、投稿コンテンツの最後に追加します。

```php
function myguten_content_filter( $content ) {
	$value = get_post_meta( get_the_ID(), 'myguten_meta_block_field', true );
	if ( $value ) {
		return sprintf( "%s <h4> %s </h4>", $content, esc_html( $value ) );
	} else {
		return $content;
	}
}
add_filter( 'the_content', 'myguten_content_filter' );
```

<!--
#### Use post meta in a block
-->
#### ブロックでの投稿メタデータの使用

<!--
You can also use the post meta data in other blocks. For this example the data is loaded at the end of every Paragraph block when it is rendered, ie. shown to the user. You can replace this for any core or custom block types as needed.
-->
投稿メタデータは、別のブロックでも使えます。この例では、レンダーの際にすべての「段落」ブロックの末尾にデータがロードされます。すなわち、ユーザーに表示されます。必要であれば、段落ブロックは、任意のコアブロックやカスタムブロックタイプで置き換えられます。

<!--
In PHP, use the [register_block_type](https://developer.wordpress.org/reference/functions/register_block_type/) function to set a callback when the block is rendered to include the meta value.
-->
PHP では [register_block_type](https://developer.wordpress.org/reference/functions/register_block_type/) 関数を使用してコールバックを設定し、ブロックをレンダーする際にメタ値を含めます。

<!-- 
```php
function myguten_render_paragraph( $block_attributes, $content ) {
	$value = get_post_meta( get_the_ID(), 'myguten_meta_block_field', true );
	// check value is set before outputting
	if ( $value ) {
		return sprintf( "%s (%s)", $content, esc_html( $value ) );
	} else {
		return $content;
	}
}

register_block_type( 'core/paragraph', array(
	'api_version' => 3,
	'render_callback' => 'myguten_render_paragraph',
) );
```
 -->
```php
function myguten_render_paragraph( $block_attributes, $content ) {
	$value = get_post_meta( get_the_ID(), 'myguten_meta_block_field', true );
	// 出力前に値がセットされているかをチェックする。
	if ( $value ) {
		return sprintf( "%s (%s)", $content, esc_html( $value ) );
	} else {
		return $content;
	}
}

register_block_type( 'core/paragraph', array(
	'api_version' => 2,
	'render_callback' => 'myguten_render_paragraph',
) );
```

<!--
### Step 4: Use block templates (optional)
-->
### ステップ 4: ブロックテンプレートの使用 (オプション)

<!--
One problem using a meta block is the block is easy for an author to forget, since it requires being added to each post. You solve this by using [block templates](/docs/reference-guides/block-api/block-templates.md). A block template is a predefined list of block items per post type. Templates allow you to specify a default initial state for a post type.
-->
メタブロックを使う際の1つの問題点は、ユーザーが投稿ごとにブロックを追加する必要があり、これを簡単に忘れてしまう点にあります。この問題を解決するには、[ブロックテンプレート](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-templates/)を使用します。ブロックテンプレートは投稿タイプごとに事前定義された、ブロック要素のリストです。テンプレートを使用することで投稿タイプのデフォルトの初期状態を指定できます。

<!--
For this example, you use a template to automatically insert the meta block at the top of a post.
-->
この例では、テンプレートを使用して、自動的に投稿の先頭にメタブロックを挿入します。

<!--
Add the following code to the `myguten-meta-block.php` file:
-->
次のコードを `myguten-meta-block.php` ファイルに追加してください。

```php
function myguten_register_template() {
    $post_type_object = get_post_type_object( 'post' );
    $post_type_object->template = array(
        array( 'myguten/meta-block' ),
    );
}
add_action( 'init', 'myguten_register_template' );
```

<!--
You can also add other block types in the array, including placeholders, or even lock down a post to a set of specific blocks. Templates are a powerful tool for controlling the editing experience, see the documentation linked above for more.
-->
配列には他のブロックタイプも追加できます。プレースホルダーを設定したり、投稿を特定のブロックの集合にロックできます。テンプレートは編集体験を制御する強力なツールです。詳細については上のリンク先のドキュメントを参照してください。

<!--
## Conclusion
-->
## まとめ

<!--
This guide showed how using blocks you can read and write to post meta. See the section below for backward compatibility with existing meta boxes.
-->
このガイドでは、ブロックを使って投稿メタの読み書きを行う方法を紹介しました。既存のメタボックスとの後方互換性については、以下のセクションを参照してください。

<!--
## Backward compatibility
-->
## 後方互換性

<!--
### Testing, converting, and maintaining existing meta boxes
-->
### 既存のメタボックスのテスト、変換、メンテナンス

<!--
Before converting meta boxes to blocks, it may be easier to test if a meta box works with the block editor, and explicitly mark it as such.
-->
実際にメタボックスをブロックに変換する前に、まず、メタボックスがブロックエディターで動作するかどうかをテストし、動作の有無を明示的にマークするほうが簡単でしょう。

<!--
If a meta box _doesn't_ work with the block editor, and updating it to work correctly is not an option, the next step is to add the `__block_editor_compatible_meta_box` argument to the meta box declaration:
-->
メタボックスがブロックエディターで動作せず、正しく動作するように更新することもできない場合は、次のステップとしてメタボックスの宣言に `__block_editor_compatible_meta_box` 引数を追加します。

```php
add_meta_box( 'my-meta-box', 'My Meta Box', 'my_meta_box_callback',
	null, 'normal', 'high',
	array(
		'__block_editor_compatible_meta_box' => false,
	)
);
```

<!--
WordPress won't show the meta box but a message saying that it isn't compatible with the block editor, including a link to the Classic Editor plugin. By default, `__block_editor_compatible_meta_box` is `true`.
-->
WordPress はメタボックスを表示しませんが、ブロックエディタと互換性がない旨のメッセージと、Classic Editorプラグインへのリンクを表示します。デフォルトでは `__block_editor_compatible_meta_box` は `true` です。

<!--
After a meta box is converted to a block, it can be declared as existing for backward compatibility:
-->
メタボックスをブロックに変換できた場合、後方互換性のために以下のように宣言できます。

```php
add_meta_box( 'my-meta-box', 'My Meta Box', 'my_meta_box_callback',
	null, 'normal', 'high',
	array(
		'__back_compat_meta_box' => true,
	)
);
```

<!--
When the block editor is used, this meta box will no longer be displayed in the meta box area, as it now only exists for backward compatibility purposes. It will display as before in the classic editor.
-->
このメタボックスは後方互換性のためにのみ存在するため、ブロックエディターではメタボックス領域に表示されません。クラシックエディターでは、従来どおり表示されます。

<!--
### Meta box data collection
-->
### メタボックスデータコレクション

<!--
On each block editor page load, we register an action that collects the meta box data to determine if an area is empty. The original global state is reset upon collection of meta box data.
-->
ブロックエディターのページロードごとに、メタボックスのデータを収集し、領域が空かどうかを判断するアクションを登録します。メタボックスのデータを収集すると、元のグローバル state はリセットされます。

<!--
See [`register_and_do_post_meta_boxes`](https://developer.wordpress.org/reference/functions/register_and_do_post_meta_boxes/).
-->
[`register_and_do_post_meta_boxes`](https://developer.wordpress.org/reference/functions/register_and_do_post_meta_boxes/) を参照してください。

<!--
It will run through the functions and hooks that `post.php` runs to register meta boxes; namely `add_meta_boxes`, `add_meta_boxes_{$post->post_type}`, and `do_meta_boxes`.
-->
内部では、`post.php` がメタボックスの登録に実行する関数とフック、具体的には、`add_meta_boxes`、`add_meta_boxes_{$post->post_type}`、`do_meta_boxes` が実行されます。

<!--
Meta boxes are filtered to strip out any core meta boxes, standard custom taxonomy meta boxes, and any meta boxes that have declared themselves as only existing for backward compatibility purposes.
-->
メタボックスはフィルタリングされ、コアのメタボックス、標準カスタムタクソノミーのメタボックス、後方互換性のためにのみ存在すると宣言したメタボックスが除去されます。

<!--
Then each location for this particular type of meta box is checked for whether it is active. If it is not empty a value of true is stored, if it is empty a value of false is stored. This meta box location data is then dispatched by the editor Redux store in `INITIALIZE_META_BOX_STATE`.
-->
次に、この特定のタイプのメタボックスのそれぞれの位置がアクティブかどうかがチェックされます。空でない場合は true が格納され、空の場合は false が格納されます。このメタボックスの位置データは、エディターの Redux ストアから `INITIALIZE_META_BOX_STATE` にディスパッチされます。

<!--
Ideally, this could be done at instantiation of the editor and help simplify this flow. However, it is not possible to know the meta box state before `admin_enqueue_scripts`, where we are calling `initializeEditor()`. This will have to do, unless we want to move `initializeEditor()` to fire in the footer or at some point after `admin_head`. With recent changes to editor bootstrapping this might now be possible. Test with ACF to make sure.
-->
理想的には、この処理をエディターのインスタンス化時に行うことで、フローを簡素化できます。しかし、`initializeEditor()` 呼び出し時の、 `admin_enqueue_scripts` より前に、メタボックスの状態を知ることはできません。フッターや `admin_head` より後に `initializeEditor()` を実行しない限り、現在の方法で対応するしかありません。ただし、最近のエディターのブートストラップに関する変更で、可能になったかもしれません。念のため、ACFでテストしてみてください。

<!--
### Redux and React meta box management
-->
### Redux と React のメタボックス管理

<!--
When rendering the block editor, the meta boxes are rendered to a hidden div `#metaboxes`.
-->
ブロックエディターをレンダリングする際、メタボックスは hidden div `#metaboxes` にレンダーされます。

<!--
_The Redux store will hold all meta boxes as inactive by default_. When
`INITIALIZE_META_BOX_STATE` comes in, the store will update any active meta box areas by setting the `isActive` flag to `true`. Once this happens React will check for the new props sent in by Redux on the `MetaBox` component. If that `MetaBox` is now active, instead of rendering null, a `MetaBoxArea` component will be rendered. The `MetaBox` component is the container component that mediates between the `MetaBoxArea` and the Redux Store. _If no meta boxes are active, nothing happens. This will be the default behavior, as all core meta boxes have been stripped._
-->
_Redux store は、デフォルトですべてのメタボックスを非アクティブとして保持します_。このとき
`INITIALIZE_META_BOX_STATE` が来ると、store は、任意のアクティブなメタボックス領域を更新し、`isActive` フラグを `true` にセットします。これが起きると、React は、`MetaBox` コンポーネントの Redux から送られた、新しい props をチェックします。その `MetaBox` がアクティブなら、null をレンダリングする代わりに、`MetaBoxArea` コンポーネントがレンダーされます。`MetaBox` コンポーネントはコンテナコンポーネントで、 `MetaBoxArea` と Redux Sotre の間を仲立ちします。_アクティブなメタボックスがなければ、何も起きません。すべてのコアのメタボックスは除外されているため、これがデフォルトの動作です。_

<!--
#### MetaBoxArea component
-->
#### MetaBoxArea コンポーネント

<!--
When the component renders it will store a reference to the meta boxes container and retrieve the meta boxes HTML from the prefetch location.
-->
コンポーネントはレンダーすると、メタボックスコンテナへの参照を保存し、プリフェッチした場所からメタボックス HTML を取得します。

<!--
When the post is updated, only meta box areas that are active will be submitted. This prevents unnecessary requests. No extra revisions are created by the meta box submissions. A Redux action will trigger on `REQUEST_POST_UPDATE` for any active meta box. See `editor/effects.js`. The `REQUEST_META_BOX_UPDATES` action will set that meta box's state to `isUpdating`. The `isUpdating` prop will be sent into the `MetaBoxArea` and cause a form submission.
-->
投稿が更新されると、アクティブなメタボックス領域のみが送信されます。これにより、不要なリクエストの送信を防ぎます。メタボックスが送信されても、余分なリビジョンは作成されません。任意のアクティブなメタボックスの `REQUEST_POST_UPDATE` で Redux アクションがトリガーされます。`editor/effects.js` を参照してください。`REQUEST_META_BOX_UPDATES`アクションは、メタボックスの state を`isUpdating`に設定します。`isUpdating` prop は `MetaBoxArea` に送られ、フォームの送信を起こします。

<!--
When the meta box area is saving, we display an updating overlay, to prevent users from changing the form values while a save is in progress.
-->
メタボックス領域の保存中は、更新中のオーバーレイを表示し、保存中にユーザーがフォームの値を変更できないようにします。

<!--
An example save url would look like:
-->
以下に、保存用 URL の例を挙げます。

<!--
`mysite.com/wp-admin/post.php?post=1&action=edit&meta-box-loader=1`
-->
`mysite.com/wp-admin/post.php?post=1&action=edit&meta-box-loader=1`

<!--
This url is automatically passed into React via a `_wpMetaBoxUrl` global variable.
-->
この URL は、グローバル変数 `_wpMetaBoxUrl` を介して、自動的に React に渡されます。

<!--
This page mimics the `post.php` post form, so when it is submitted it will fire all of the normal hooks and actions, and have the proper global state to correctly fire any PHP meta box mumbo jumbo without needing to modify any existing code. On successful submission, React will signal a `handleMetaBoxReload` to remove the updating overlay.
-->
このページは `post.php` の投稿フォームを真似ており、送信されると通常のフックとアクションをすべて起動し、既存のコードを変更しなくても、任意の PHP メタボックスのあれこれを正しく起動する、適切なグローバル state を持ちます。送信が成功すると、React は `handleMetaBoxReload` をシグナルして、更新中のオーバーレイを削除します。

<!--
### Common compatibility issues
-->
### 一般的な互換性の問題

<!--
Most PHP meta boxes should continue to work in the block editor, but some meta boxes that include advanced functionality could break. Here are some common reasons why meta boxes might not work as expected in the block editor:
-->
ほとんどの PHP メタボックスはブロックエディタでも引き続き動作するはずです。しかし、高度な機能を含む一部のメタボックスは壊れる可能性があります。以下は、ブロックエディタでメタボックスが期待どおりに動作しない一般的な理由です。

<!--
-   Plugins relying on selectors that target the post title, post content fields, and other metaboxes (of the old editor).
-   Plugins relying on TinyMCE's API because there's no longer a single TinyMCE instance to talk to in the block editor.
-   Plugins making updates to their DOM on "submit" or on "save".
-->
- 投稿タイトル、投稿コンテンツフィールド、その他の旧エディタのメタボックスを対象とするセレクタに依存するプラグイン
- TinyMCE の API に依存するプラグイン。ブロックエディタ内には対話する単一の TinyMCE インスタンスがない。
- 「公開」や「保存」の DOM を更新するプラグイン

<!--
Please also note that if your plugin triggers a PHP warning or notice to be output on the page, this will cause the HTML document type (`<!DOCTYPE html>`) to be output incorrectly. This will cause the browser to render using "Quirks Mode", which is a compatibility layer that gets enabled when the browser doesn't know what type of document it is parsing. The block editor is not meant to work in this mode, but it can _appear_ to be working just fine. If you encounter issues such as _meta boxes overlaying the editor_ or other layout issues, please check the raw page source of your document to see that the document type definition is the first thing output on the page. There will also be a warning in the JavaScript console, noting the issue.
-->
また、プラグインが PHP の警告や通知をページ上に出力しないかを注意してください。HTML ドキュメントタイプ（`<!DOCTYPE html>`）が正しく出力されません。結果、ブラウザは「Quirks Mode」を使用してレンダーします。これはブラウザがパースしているドキュメントのタイプが分からない場合に有効化される互換性レイヤーです。ブロックエディターは、このモードでは動作しませんが、正常に動作しているように見える場合があります。メタボックスがエディターと重なったり、その他のレイアウトの問題が発生した場合、ドキュメントの生のページソースをチェックして、ページの最初にドキュメントタイプの定義が出力されていることを確認してください。また、JavaScript コンソールには、問題を示す警告が表示されます。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/metabox.md)
