<!-- 
# Adding a delete button
 -->
# 削除ボタンの追加

<!-- 
In the [previous part](/docs/how-to-guides/data-basics/3-building-an-edit-form.md) we added an ability to create new pages,
and in this part we will add a *Delete* feature to our app.
 -->
[前のパート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/4-building-a-create-page-form/)では、新しいページの作成機能を追加しました。このパートではアプリケーションに「削除」機能を追加します。

<!-- 
Here's a glimpse of what we're going to build:
 -->
これから構築する機能は以下のようになります。

![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/delete-button/delete-button.png)

<!-- 
### Step 1: Add a _Delete_ button
 -->
### ステップ1: 「削除」ボタンの追加

<!-- 
Let's start by creating the `DeletePageButton` component and updating the user interface of our `PagesList` component:
 -->
まず `DeletePageButton` コンポーネントを作成し、`PagesList` コンポーネントのユーザーインターフェースを更新します。

<!-- 
```js
import { Button } from '@wordpress/components';
import { decodeEntities } from '@wordpress/html-entities';

const DeletePageButton = () => (
	<Button variant="primary">
		Delete
	</Button>
)

function PagesList( { hasResolved, pages } ) {
	if ( ! hasResolved ) {
		return <Spinner />;
	}
	if ( ! pages?.length ) {
		return <div>No results</div>;
	}

	return (
		<table className="wp-list-table widefat fixed striped table-view-list">
			<thead>
				<tr>
					<td>Title</td>
					<td style={{width: 190}}>Actions</td>
				</tr>
			</thead>
			<tbody>
				{ pages?.map( ( page ) => (
					<tr key={page.id}>
						<td>{ decodeEntities( page.title.rendered ) }</td>
						<td>
							<div className="form-buttons">
								<PageEditButton pageId={ page.id } />
								{/* ↓ This is the only change in the PagesList component */}
								<DeletePageButton pageId={ page.id }/>
							</div>
						</td>
					</tr>
				) ) }
			</tbody>
		</table>
	);
}
```
 -->

```js
import { Button } from '@wordpress/components';
import { decodeEntities } from '@wordpress/html-entities';

const DeletePageButton = () => (
	<Button variant="primary">
		Delete
	</Button>
)

function PagesList( { hasResolved, pages } ) {
	if ( ! hasResolved ) {
		return <Spinner />;
	}
	if ( ! pages?.length ) {
		return <div>No results</div>;
	}

	return (
		<table className="wp-list-table widefat fixed striped table-view-list">
			<thead>
				<tr>
					<td>Title</td>
					<td style={{width: 190}}>Actions</td>
				</tr>
			</thead>
			<tbody>
				{ pages?.map( ( page ) => (
					<tr key={page.id}>
						<td>{ decodeEntities( page.title.rendered ) }</td>
						<td>
							<div className="form-buttons">
								<PageEditButton pageId={ page.id } />
								{/* ↓ 以下が PagesList コンポーネント内で唯一の変更 */}
								<DeletePageButton pageId={ page.id }/>
							</div>
						</td>
					</tr>
				) ) }
			</tbody>
		</table>
	);
}
```

<!-- 
This is what the PagesList should look like now:
 -->
これで PagesList は以下のようになります。

![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/delete-button/delete-button.png)

<!-- 
### Step 2: Wire the button to a delete action
 -->
### ステップ2： ボタンと削除アクションの接続

<!-- 
In Gutenberg data, we delete entity records from the WordPress REST API using the `deleteEntityRecord` action. It sends the request, processes the result, and updates the cached data in the Redux state.
 -->
Gutenberg のデータでは、WordPress REST APIから `deleteEntityRecord` アクションを使用してエンティティレコードを削除します。アクションはリクエストを送信し、結果を処理し、Redux ステート内にキャッシュされたデータを更新します。

<!-- 
Here's how you can try deleting entity records in your browser's dev tools:
 -->
以下はブラウザの開発ツール内でエンティティレコードの削除を試す方法です。

<!-- 
```js
// We need a valid page ID to call deleteEntityRecord, so let's get the first available one using getEntityRecords.
const pageId = wp.data.select( 'core' ).getEntityRecords( 'postType', 'page' )[0].id;

// Now let's delete that page:
const promise = wp.data.dispatch( 'core' ).deleteEntityRecord( 'postType', 'page', pageId );

// promise gets resolved or rejected when the API request succeeds or fails.
```
 -->

```js
// deleteEntityRecord を呼び出すには有効なページ ID が必要。getEntityRecords を使用して最初の利用可能なページ ID を取得する。
const pageId = wp.data.select( 'core' ).getEntityRecords( 'postType', 'page' )[0].id;

// そのページを削除する。
const promise = wp.data.dispatch( 'core' ).deleteEntityRecord( 'postType', 'page', pageId );

// API リクエストの成功または失敗により、promise は resolved または rejected を取得する。
```

<!-- 
Once the REST API request is finished, you will notice one of the pages has disappeared from the list. This is because that list is populated by the `useSelect()` hook and the `select( coreDataStore ).getEntityRecords( 'postType', 'page' )` selector. Anytime the underlying data changes, the list gets re-rendered with fresh data. That's pretty convenient!
 -->
REST API リクエストが終了すると、ページの一つがリストから消えていることが分かります。これは、そのリストが `useSelect()` フックと `select( coreDataStore ).getEntityRecords( 'postType', 'page' )` セレクタによって生成されているためです。ベースとなるデータが変更されるたびに、リストは新しいデータで再レンダーされます。これはかなり便利です !

<!-- 
Let's dispatch that action when `DeletePageButton` is clicked:
 -->
`DeletePageButton` がクリックされたときに、アクションをディスパッチします。

```js
const DeletePageButton = ({ pageId }) => {
	const { deleteEntityRecord } = useDispatch( coreDataStore );
	const handleDelete = () => deleteEntityRecord( 'postType', 'page', pageId );
	return (
		<Button variant="primary" onClick={ handleDelete }>
			Delete
		</Button>
	);
}
```

<!-- 
### Step 3: Add visual feedback
 -->
### ステップ3： 視覚的なフィードバックの追加

<!-- 
It may take a few moments for the REST API request to finish after clicking the _Delete_ button. Let's communicate that with a `<Spinner />` component similarly to what we did in the previous parts of this tutorial.
 -->
「Delete」ボタンをクリックした後、REST API リクエストが終了するまで少し時間がかかるかもしれません。このチュートリアルの以前のパートで実行したのと同様に、`<Spinner />` コンポーネントでそれを伝えます。

<!-- 
We'll need the `isDeletingEntityRecord` selector for that. It is similar to the `isSavingEntityRecord` selector we've already seen in [part 3](/docs/how-to-guides/data-basics/3-building-an-edit-form.md): it returns `true` or `false` and never issues any HTTP requests:
 -->
これには `isDeletingEntityRecord` セレクタが必要です。このセレクタは[パート3](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/3-building-an-edit-form/)で紹介した `isSavingEntityRecord` セレクタに似ています。`true` または `false` を返しますが、決して HTTP リクエストは発行しません。

```js
const DeletePageButton = ({ pageId }) => {
	// ...
	const { isDeleting } = useSelect(
		select => ({
			isDeleting: select( coreDataStore ).isDeletingEntityRecord( 'postType', 'page', pageId ),
		}),
		[ pageId ]
	)
	return (
		<Button variant="primary" onClick={ handleDelete } disabled={ isDeleting }>
			{ isDeleting ? (
				<>
					<Spinner />
					Deleting...
				</>
			) : 'Delete' }
		</Button>
	);
}
```
<!-- 
Here's what it looks like in action:
 -->
実際の動作の様子です。

![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/delete-button/deleting-in-progress.png)

<!-- 
### Step 4: Handle errors
 -->
### ステップ4： エラー処理

<!-- 
We optimistically assumed that a *delete* operation would always succeed. Unfortunately, under the hood, it is a REST API request that can fail in many ways:
 -->
ここまでは楽観的に「削除」操作は常に成功すると仮定しました。しかし、残念ながら実際には REST API リクエストは、さまざまな理由で失敗します。

<!-- 
* The website can be down.
* The delete request may be invalid.
* The page could have been deleted by someone else in the meantime.
 -->
* ウェブサイトはダウンする可能性がある。
* 削除リクエストは正しくないかもしれない。
* ページは処理中に誰かに削除されるかもしれない。

<!-- 
To tell the user when any of these errors happen, we need to extract the error information using the `getLastEntityDeleteError` selector:
 -->
こうしたエラーが発生した際にユーザーに伝えるには、`getLastEntityDeleteError` セレクタを使用して、エラー情報を取り出す必要があります。

<!-- 
```js
// Replace 9 with an actual page ID
wp.data.select( 'core' ).getLastEntityDeleteError( 'postType', 'page', 9 )
```
 -->
```js
// 「9」を実際のページ ID で置換すること
wp.data.select( 'core' ).getLastEntityDeleteError( 'postType', 'page', 9 )
```

<!-- 
Here's how we can apply it in `DeletePageButton`:
 -->
これを以下のように `DeletePageButton` に適用します。

<!-- 
```js
import { useEffect } from 'react';
const DeletePageButton = ({ pageId }) => {
	// ...
	const { error, /* ... */ } = useSelect(
		select => ( {
			error: select( coreDataStore ).getLastEntityDeleteError( 'postType', 'page', pageId ),
			// ...
		} ),
		[pageId]
	);
	useEffect( () => {
		if ( error ) {
			// Display the error
		}
	}, [error] )

	// ...
}
```
 -->
```js
import { useEffect } from 'react';
const DeletePageButton = ({ pageId }) => {
	// ...
	const { error, /* ... */ } = useSelect(
		select => ( {
			error: select( coreDataStore ).getLastEntityDeleteError( 'postType', 'page', pageId ),
			// ...
		} ),
		[pageId]
	);
	useEffect( () => {
		if ( error ) {
			// エラーの表示
		}
	}, [error] )

	// ...
}
```

<!-- 
The `error` object comes from the `@wordpress/api-fetch` and contains information about the error. It has the following properties:
 -->
`error` オブジェクトは `@wordpress/api-fetch` から来たもので、エラーに関する情報を含みます。以下のプロパティを持ちます。

<!-- 
* `message` – a human-readable error message such as `Invalid post ID`.
* `code` – a string-based error code such as `rest_post_invalid_id`. To learn about all possible error codes you'd need to refer to the [`/v2/pages` endpoint's source code](https://github.com/WordPress/wordpress-develop/blob/2648a5f984b8abf06872151898e3a61d3458a628/src/wp-includes/rest-api/endpoints/class-wp-rest-revisions-controller.php#L226-L230).
* `data` (optional) – error details, contains the `code` property containing the HTTP response code for the failed request.
 -->
* `message` - `Invalid post ID` のような人間が読めるエラーメッセージ。
* `code` - `rest_post_invalid_id` のような文字列ベースのエラーコード。すべてのエラーコードを調べるには、[`/v2/pages` エンドポイントのソースコード](https://github.com/WordPress/wordpress-develop/blob/2648a5f984b8abf06872151898e3a61d3458a628/src/wp-includes/rest-api/endpoints/class-wp-rest-revisions-controller.php#L226-L230) を参照する必要があります。
* `data` (オプション) - エラーの詳細。失敗したリクエストの HTTP レスポンスコードを含む `code` プロパティを含む。

<!-- 
There are many ways to turn that object into an error message, but in this tutorial, we will display the `error.message`.
 -->
このオブジェクトをエラーメッセージに変換する多くの方法がありますが、このチュートリアルでは `error.message` を表示します。

<!-- 
WordPress has an established pattern of displaying status information using the `Snackbar` component. Here's what it looks like **in the Widgets editor**:
 -->
WordPress ではステータス情報を表示するパターンが確立されており、`Snackbar` コンポーネントを使用します。たとえば **ウィジェットエディター**では、以下のようになります。

![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/delete-button/snackbar-example.png)

<!-- 
Let's use the same type of notifications in our plugin! There are two parts to this:
 -->
同じタイプの通知をプラグインで使用しましょう。これには2つのパートがあります。

<!-- 
1. Displaying notifications
2. Dispatching notifications
 -->
1. 通知の表示
2. 通知のディスパッチ

<!-- 
#### Displaying notifications
 -->
#### 通知の表示

<!-- 
Our application only knows how to display pages but does not know how to display notifications. Let's tell it!
 -->
アプリケーションはページを表示する方法のみを知っていて、通知を表示する方法は知りません。それを教えてあげましょう !

<!-- 
WordPress conveniently provides us with all the React components we need to render notifications. A [component called `Snackbar`](https://wordpress.github.io/gutenberg/?path=/story/components-snackbar--default) represents a single notification:
 -->
便利なことに WordPress では、通知のレンダーに必要なすべての React コンポーネントが提供されています。[`Snackbar` コンポーネント](https://wordpress.github.io/gutenberg/?path=/story/components-snackbar--default)は、単一の通知を表現します。

![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/delete-button/snackbar.png)

<!-- 
We won't use `Snackbar` directly, though. We'll use the `SnackbarList` component, which can display multiple notices using smooth animations and automatically hide them after a few seconds. In fact, WordPress uses the same component used in the Widgets editor and other wp-admin pages!
 -->
しかし、`Snackbar` は直接使わず、`SnackbarList` コンポーネントを使用します。`SnackbarList` コンポーネントはスムーズなアニメーションで複数の通知を表示し、数秒後に自動的に消えます。実際、WordPress ではウィジェットエディターやその他の管理画面のページで同じコンポーネントを使用しています。

<!-- 
Let's create our own `Notifications` components:
 -->
それでは独自の `Notifications` コンポーネントを作成します。

<!-- 
```js
import { SnackbarList } from '@wordpress/components';
import { store as noticesStore } from '@wordpress/notices';

function Notifications() {
	const notices = []; // We'll come back here in a second!

	return (
		<SnackbarList
			notices={ notices }
			className="components-editor-notices__snackbar"
		/>
	);
}
```
 -->
```js
import { SnackbarList } from '@wordpress/components';
import { store as noticesStore } from '@wordpress/notices';

function Notifications() {
	const notices = []; // すぐにここに戻ってきます !

	return (
		<SnackbarList
			notices={ notices }
			className="components-editor-notices__snackbar"
		/>
	);
}
```

<!-- 
The basic structure is in place, but the list of notifications it renders is empty. How do we populate it? We'll lean on the same package as WordPress: [`@wordpress/notices`](https://github.com/WordPress/gutenberg/blob/895ca1f6a7d7e492974ea55f693aecbeb1d5bbe3/docs/reference-guides/data/data-core-notices.md).
 -->
基本的な構造はできていますが、レンダーする通知のリストが空です。どうすればいいのでしょうか ? WordPressと同じパッケージ [`@wordpress/notices`](https://github.com/WordPress/gutenberg/blob/895ca1f6a7d7e492974ea55f693aecbeb1d5bbe3/docs/reference-guides/data/data-core-notices.md) に頼ってみましょう。

<!-- 
Here's how:
 -->
以下がその方法です。

```js
import { SnackbarList } from '@wordpress/components';
import { store as noticesStore } from '@wordpress/notices';

function Notifications() {
	const notices = useSelect(
		( select ) => select( noticesStore ).getNotices(),
		[]
	);
	const { removeNotice } = useDispatch( noticesStore );
	const snackbarNotices = notices.filter( ({ type }) => type === 'snackbar' );

	return (
		<SnackbarList
			notices={ snackbarNotices }
			className="components-editor-notices__snackbar"
			onRemove={ removeNotice }
		/>
	);
}

function MyFirstApp() {
	// ...
	return (
		<div>
			{/* ... */}
			<Notifications />
		</div>
	);
}
```

<!-- 
This tutorial is focused on managing the pages and won't discuss the above snippet in detail. If you're interested in the details of `@wordpress/notices`, the [handbook page](https://developer.wordpress.org/block-editor/reference-guides/data/data-core-notices/) is a good place to start.
 -->
このチュートリアルはページの管理に重点を置いているため、上のスニペットについては詳しく説明しません。もし `@wordpress/notices` の詳細に興味があれば、[ハンドブックページ](https://developer.wordpress.org/block-editor/reference-guides/data/data-core-notices/) から始めると良いでしょう。

<!-- 
Now we're ready to tell the user about any errors that may have occurred.
 -->
これで、発生した可能性のあるエラーをユーザーに伝える準備ができました。

<!-- 
#### Dispatching notifications
 -->
#### 通知のディスパッチ

<!-- 
With the SnackbarNotices component in place, we're ready to dispatch some notifications! Here's how:
 -->
SnackbarNotices コンポーネントを配置し、いくつかの通知をディスパッチする準備が整いました。以下がその方法です。

<!-- 
```js
import { useEffect } from 'react';
import { store as noticesStore } from '@wordpress/notices';
function DeletePageButton( { pageId } ) {
	const { createSuccessNotice, createErrorNotice } = useDispatch( noticesStore );
	// useSelect returns a list of selectors if you pass the store handle
	// instead of a callback:
	const { getLastEntityDeleteError } = useSelect( coreDataStore )
	const handleDelete = async () => {
		const success = await deleteEntityRecord( 'postType', 'page', pageId);
		if ( success ) {
			// Tell the user the operation succeeded:
			createSuccessNotice( "The page was deleted!", {
				type: 'snackbar',
			} );
		} else {
			// We use the selector directly to get the fresh error *after* the deleteEntityRecord
			// have failed.
			const lastError = getLastEntityDeleteError( 'postType', 'page', pageId );
			const message = ( lastError?.message || 'There was an error.' ) + ' Please refresh the page and try again.'
			// Tell the user how exactly the operation has failed:
			createErrorNotice( message, {
				type: 'snackbar',
			} );
		}
	}
	// ...
}
```
 -->
```js
import { useEffect } from 'react';
import { store as noticesStore } from '@wordpress/notices';
function DeletePageButton( { pageId } ) {
	const { createSuccessNotice, createErrorNotice } = useDispatch( noticesStore );
	// コールバックの代わりにストアハンドルを渡すと、useSelect はセレクタのリストを返す:
	const { getLastEntityDeleteError } = useSelect( coreDataStore )
	const handleDelete = async () => {
		const success = await deleteEntityRecord( 'postType', 'page', pageId);
		if ( success ) {
			// 操作が成功したことをユーザーに伝える:
			createSuccessNotice( "The page was deleted!", {
				type: 'snackbar',
			} );
		} else {
			// deleteEntityRecord が失敗した*後で*、直接セレクタを使用して新しいエラーを取得する。
			const lastError = getLastEntityDeleteError( 'postType', 'page', pageId );
			const message = ( lastError?.message || 'There was an error.' ) + ' Please refresh the page and try again.'
			// 具体的にどのように操作に失敗したかをユーザーに伝える:
			createErrorNotice( message, {
				type: 'snackbar',
			} );
		}
	}
	// ...
}
```
<!-- 
Great! `DeletePageButton` is now fully aware of errors. Let's see that error message in action. We'll trigger an invalid delete and let it fail. One way to do this is to multiply the `pageId` by a large number:
 -->
素晴らしい ! これで `DeletePageButton` は、完全にエラーを認識するようになりました。エラーメッセージを実際に見てみましょう。無効な削除をトリガーして失敗させます。これを行う1つの方法として、`pageId` に大きな数を掛けます。

```js
function DeletePageButton( { pageId, onCancel, onSaveFinished } ) {
	pageId = pageId * 1000;
	// ...
}
```

<!-- 
Once you refresh the page and click any `Delete` button, you should see the following error message:
 -->
ページを更新し、「Delete」ボタンをクリックすると、次のようなエラーメッセージが表示されるはずです。

![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/delete-button/snackbar-error.png)

<!-- 
Fantastic! We can now **remove the `pageId = pageId * 1000;` line.**
 -->
最高です ! では、`pageId = pageId * 1000;` の行を削除しましょう。

<!--
Let's now try actually deleting a page. Here's what you should see after refreshing your browser and clicking the Delete button:
 -->
そして、実際にページを削除してみます。ブラウザをリフレッシュして「Delete」ボタンをクリックすると、以下のように表示されます。

![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/delete-button/snackbar-success.png)

<!-- 
And that's it!
 -->
以上です。

<!-- 
### Wiring it all together
 -->
### すべてをひとつに

<!-- 
All the pieces are in place, great! Here’s all the changes we've made in this chapter:
 -->
これですべてのピースがそろいました。この章で行ったすべての変更が以下になります。

<!-- 
```js
import { useState, useEffect } from 'react';
import { useSelect, useDispatch } from '@wordpress/data';
import { Button, Modal, TextControl } from '@wordpress/components';

function MyFirstApp() {
	const [searchTerm, setSearchTerm] = useState( '' );
	const { pages, hasResolved } = useSelect(
		( select ) => {
			const query = {};
			if ( searchTerm ) {
				query.search = searchTerm;
			}
			const selectorArgs = ['postType', 'page', query];
			const pages = select( coreDataStore ).getEntityRecords( ...selectorArgs );
			return {
				pages,
				hasResolved: select( coreDataStore ).hasFinishedResolution(
					'getEntityRecords',
					selectorArgs,
				),
			};
		},
		[searchTerm],
	);

	return (
		<div>
			<div className="list-controls">
				<SearchControl onChange={ setSearchTerm } value={ searchTerm }/>
				<PageCreateButton/>
			</div>
			<PagesList hasResolved={ hasResolved } pages={ pages }/>
			<Notifications />
		</div>
	);
}

function SnackbarNotices() {
	const notices = useSelect(
		( select ) => select( noticesStore ).getNotices(),
		[]
	);
	const { removeNotice } = useDispatch( noticesStore );
	const snackbarNotices = notices.filter( ( { type } ) => type === 'snackbar' );

	return (
		<SnackbarList
			notices={ snackbarNotices }
			className="components-editor-notices__snackbar"
			onRemove={ removeNotice }
		/>
	);
}

function PagesList( { hasResolved, pages } ) {
	if ( !hasResolved ) {
		return <Spinner/>;
	}
	if ( !pages?.length ) {
		return <div>No results</div>;
	}

	return (
		<table className="wp-list-table widefat fixed striped table-view-list">
			<thead>
				<tr>
					<td>Title</td>
					<td style={ { width: 190 } }>Actions</td>
				</tr>
			</thead>
			<tbody>
				{ pages?.map( ( page ) => (
					<tr key={ page.id }>
						<td>{ page.title.rendered }</td>
						<td>
							<div className="form-buttons">
								<PageEditButton pageId={ page.id }/>
								<DeletePageButton pageId={ page.id }/>
							</div>
						</td>
					</tr>
				) ) }
			</tbody>
		</table>
	);
}

function DeletePageButton( { pageId } ) {
	const { createSuccessNotice, createErrorNotice } = useDispatch( noticesStore );
	// useSelect returns a list of selectors if you pass the store handle
	// instead of a callback:
	const { getLastEntityDeleteError } = useSelect( coreDataStore )
	const handleDelete = async () => {
		const success = await deleteEntityRecord( 'postType', 'page', pageId);
		if ( success ) {
			// Tell the user the operation succeeded:
			createSuccessNotice( "The page was deleted!", {
				type: 'snackbar',
			} );
		} else {
			// We use the selector directly to get the error at this point in time.
			// Imagine we fetched the error like this:
			//     const { lastError } = useSelect( function() { /* ... */ } );
			// Then, lastError would be null inside of handleDelete.
			// Why? Because we'd refer to the version of it that was computed
			// before the handleDelete was even called.
			const lastError = getLastEntityDeleteError( 'postType', 'page', pageId );
			const message = ( lastError?.message || 'There was an error.' ) + ' Please refresh the page and try again.'
			// Tell the user how exactly the operation have failed:
			createErrorNotice( message, {
				type: 'snackbar',
			} );
		}
	}

	const { deleteEntityRecord } = useDispatch( coreDataStore );
	const { isDeleting } = useSelect(
		select => ( {
			isDeleting: select( coreDataStore ).isDeletingEntityRecord( 'postType', 'page', pageId ),
		} ),
		[ pageId ]
	);

	return (
		<Button variant="primary" onClick={ handleDelete } disabled={ isDeleting }>
			{ isDeleting ? (
				<>
					<Spinner />
					Deleting...
				</>
			) : 'Delete' }
		</Button>
	);
}
```
 -->

```js
import { useState, useEffect } from 'react';
import { useSelect, useDispatch } from '@wordpress/data';
import { Button, Modal, TextControl } from '@wordpress/components';

function MyFirstApp() {
	const [searchTerm, setSearchTerm] = useState( '' );
	const { pages, hasResolved } = useSelect(
		( select ) => {
			const query = {};
			if ( searchTerm ) {
				query.search = searchTerm;
			}
			const selectorArgs = ['postType', 'page', query];
			const pages = select( coreDataStore ).getEntityRecords( ...selectorArgs );
			return {
				pages,
				hasResolved: select( coreDataStore ).hasFinishedResolution(
					'getEntityRecords',
					selectorArgs,
				),
			};
		},
		[searchTerm],
	);

	return (
		<div>
			<div className="list-controls">
				<SearchControl onChange={ setSearchTerm } value={ searchTerm }/>
				<PageCreateButton/>
			</div>
			<PagesList hasResolved={ hasResolved } pages={ pages }/>
			<Notifications />
		</div>
	);
}

function SnackbarNotices() {
	const notices = useSelect(
		( select ) => select( noticesStore ).getNotices(),
		[]
	);
	const { removeNotice } = useDispatch( noticesStore );
	const snackbarNotices = notices.filter( ( { type } ) => type === 'snackbar' );

	return (
		<SnackbarList
			notices={ snackbarNotices }
			className="components-editor-notices__snackbar"
			onRemove={ removeNotice }
		/>
	);
}

function PagesList( { hasResolved, pages } ) {
	if ( !hasResolved ) {
		return <Spinner/>;
	}
	if ( !pages?.length ) {
		return <div>No results</div>;
	}

	return (
		<table className="wp-list-table widefat fixed striped table-view-list">
			<thead>
				<tr>
					<td>Title</td>
					<td style={ { width: 190 } }>Actions</td>
				</tr>
			</thead>
			<tbody>
				{ pages?.map( ( page ) => (
					<tr key={ page.id }>
						<td>{ page.title.rendered }</td>
						<td>
							<div className="form-buttons">
								<PageEditButton pageId={ page.id }/>
								<DeletePageButton pageId={ page.id }/>
							</div>
						</td>
					</tr>
				) ) }
			</tbody>
		</table>
	);
}

function DeletePageButton( { pageId } ) {
	const { createSuccessNotice, createErrorNotice } = useDispatch( noticesStore );
	// コールバックの代わりにストアハンドルを渡すと、useSelect はセレクタのリストを返す:
	const { getLastEntityDeleteError } = useSelect( coreDataStore )
	const handleDelete = async () => {
		const success = await deleteEntityRecord( 'postType', 'page', pageId);
		if ( success ) {
			// 操作が成功したことをユーザーに伝える:
			createSuccessNotice( "The page was deleted!", {
				type: 'snackbar',
			} );
		} else {
			// この時点で、直接セレクタを使用してエラーを取得する。
			// 仮に、以下のようにエラーをフェッチしたとする。
			//     const { lastError } = useSelect( function() { /* ... */ } );
			// このとき lastError は handleDelete 内部で null になる。
			// 何故か ? それは handleDelete の呼び出しまえに計算されたバージョンを参照するため。
			const lastError = getLastEntityDeleteError( 'postType', 'page', pageId );
			const message = ( lastError?.message || 'There was an error.' ) + ' Please refresh the page and try again.'
			// 具体的にどのように操作に失敗したかをユーザーに伝える:
			createErrorNotice( message, {
				type: 'snackbar',
			} );
		}
	}

	const { deleteEntityRecord } = useDispatch( coreDataStore );
	const { isDeleting } = useSelect(
		select => ( {
			isDeleting: select( coreDataStore ).isDeletingEntityRecord( 'postType', 'page', pageId ),
		} ),
		[ pageId ]
	);

	return (
		<Button variant="primary" onClick={ handleDelete } disabled={ isDeleting }>
			{ isDeleting ? (
				<>
					<Spinner />
					Deleting...
				</>
			) : 'Delete' }
		</Button>
	);
}
```

<!-- 
## What's next?
 -->
## 次は ?

<!-- 
* **Previous part:** [Building a *Create page form*](/docs/how-to-guides/data-basics/4-building-a-create-page-form.md)
* (optional) Review the [finished app](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/data-basics-59c8f8) in the block-development-examples repository
 -->
* **前のパート:** [ページ作成フォームの構築](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/4-building-a-create-page-form/)
* (オプション) block-development-examples リポジトリ内の [完成したアプリ](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/data-basics-59c8f8) を参照

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/data-basics/5-adding-a-delete-button.md)