<!--
# Building a list of pages
-->
# ページリストの構築

<!--
In this part, we will build a filterable list of all WordPress pages. This is what the app will look like at the end of this section:
-->
このパートでは、WordPress のすべての固定ページの、フィルタリング可能なリストを構築します。このセクションを終えると、以下のようなアプリが完成します。

![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/list-of-pages/part1-finished.jpg)

<!--
Let’s see how we can get there step by step.
-->
手順を一つずつ見ていきましょう。

<!--
## Step 1: Build the PagesList component
-->
## ステップ1: PagesList コンポーネントの構築

<!--
Let’s start by building a minimal React component to display the list of pages:
-->
まず、ページのリストを表示する最小限の React コンポーネントを作ります。

```js
function MyFirstApp() {
	const pages = [{ id: 'mock', title: 'Sample page' }]
	return <PagesList pages={ pages }/>;
}

function PagesList( { pages } ) {
	return (
		<ul>
			{ pages?.map( page => (
				<li key={ page.id }>
					{ page.title }
				</li>
			) ) }
		</ul>
	);
}
```

<!--
Note that this component does not fetch any data yet, only presents the hardcoded list of pages. When you refresh the page, you should see the following:
-->
注意: このコンポーネントはまだデータを取得しておらず、ハードコードされたページのリストを表示します。ページを更新すると、以下のように表示されます。

![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/list-of-pages/simple-list.jpg)

<!--
## Step 2: Fetch the data
-->
## ステップ2: データの取得

<!--
The hard-coded sample page isn’t very useful. We want to display your actual WordPress pages so let’s fetch the actual list of pages from the [WordPress REST API](https://developer.wordpress.org/rest-api/).
-->
ハードコードされたサンプルページでは、何の役にも立ちません。実際の WordPress のページを表示するには、[WordPress REST API](https://developer.wordpress.org/rest-api/) から実際のページのリストを取得します。

<!--
Before we start, let’s confirm we actually have some pages to fetch. Within WPAdmin, Navigate to Pages using the sidebar menu and ensure it shows at least four or five Pages:
-->
その前に、実際に取得するページがあることを確認しましょう。管理画面のサイドバーメニューから「ページ」に移動します。
少なくとも4～5ページはあることを確認します。

![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/list-of-pages/pages-list.jpg)

<!--
If it doesn’t, go ahead and create a few pages – you can use the same titles as on the screenshot above. Be sure to _publish_ and not just _save_ them.
-->
固定ページがなければ、何ページか作成してください。上のスクリーンショットと同じタイトルを使用できます。このとき保存するだけでなく、必ず公開してください。

<!--
Now that we have the data to work with, let’s dive into the code. We will take advantage of the [`@wordpress/core-data`](https://github.com/WordPress/gutenberg/tree/trunk/packages/core-data) package which provides resolvers, selectors, and actions to work with the WordPress core API. `@wordpress/core-data` builds on top of the [`@wordpress/data`](https://github.com/WordPress/gutenberg/tree/trunk/packages/data) package.
-->
データが揃ったところで、コードを見ていきましょう。ここでは、[`@wordpress/core-data`](https://github.com/WordPress/gutenberg/tree/trunk/packages/core-data) パッケージを利用します。このパッケージは、WordPress のコア API を操作するリゾルバ、セレクタ、アクションを提供します。`WordPress/core-data` は、[`@wordpress/data`](https://github.com/WordPress/gutenberg/tree/trunk/packages/data) パッケージの上に構築されています。

<!--
To fetch the list of pages, we will use the [`getEntityRecords`](/docs/reference-guides/data/data-core/#getentityrecords) selector. In broad strokes, it will issue the correct API request, cache the results, and return the list of the records we need. Here’s how to use it:
-->
ページのリストの取得には、[`getEntityRecords`](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/data/data-core.md) セレクタを使用します。このセレクタは主に、正しい API リクエストを発行し、結果をキャッシュし、必要なレコードのリストを返します。以下のように使用します。

```js
wp.data.select( 'core' ).getEntityRecords( 'postType', 'page' )
```

<!--
If you run that following snippet in your browser’s dev tools, you will see it returns `null`. Why? The pages are only requested by the `getEntityRecords` resolver after first running the _selector_. If you wait a moment and re-run it, it will return the list of all pages.
-->
以下のスニペットをブラウザの開発ツールで実行すると、`null` が返されます。なぜでしょう ? ページは、最初の _セレクタ_ の実行後、`getEntityRecords` リゾルバによってのみリクエストされます。しばらく待ってから再実行すると、すべてのページのリストが返されます。

<!-- 
*Note: To run this type of command directly make sure your browser is displaying an instance of the block editor (any page will do). Otherwise the `select( 'core' )` function won't be available, and you'll get an error.*
 -->
*注意: このタイプのコマンドを直接実行するには、ブラウザにブロックエディタのインスタンスが表示されていることを確認してください (どのページでも構いません)。そうでなければ `select( 'core' )` 関数は利用できず、エラーが返ります。*

<!--
Similarly, the `MyFirstApp` component needs to re-run the selector once the data is available. That’s exactly what the `useSelect` hook does:
-->
同様に、`MyFirstApp` コンポーネントも、データが利用可能になった時点でセレクタを再実行する必要があります。まさに `useSelect` フックはこれを実行しています。

```js
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';

function MyFirstApp() {
	const pages = useSelect(
		select =>
			select( coreDataStore ).getEntityRecords( 'postType', 'page' ),
		[]
	);
	// ...
}

function PagesList({ pages }) {
	// ...
	<li key={page.id}>
		{page.title.rendered}
	</li>
	// ...
}
```

<!--
Note that we use an `import` statement inside index.js. This enables the plugin to automatically load the dependencies using `wp_enqueue_script`. Any references to `coreDataStore` are compiled to the same `wp.data` reference we use in browser's devtools.
-->
注意: index.js 内で `import` ステートメントを使用しています。これにより、プラグインは `wp_enqueue_script` を使用して自動的に依存関係を読み込めます。`coreDataStore` へのすべての参照は、ブラウザの devtools で使用しているのと同じ `wp.data` への参照にコンパイルされます。


<!--
`useSelect` takes two arguments: a callback and dependencies. In broad strokes, it re-runs the callback whenever either the dependencies or the underlying data store changes. You can learn more about [useSelect](/packages/data/README.md#useselect) in the [data module documentation](/packages/data/README.md#useselect).
-->
`useSelect` は、コールバックと依存関係の2つの引数を取ります。依存関係、または基礎となるデータストアが変更された場合はいつでも、コールバックを再実行します。詳細については[データモジュールのドキュメント](https://github.com/WordPress/gutenberg/blob/trunk/packages/data/README.md)の [useSelect](https://github.com/WordPress/gutenberg/blob/trunk/packages/data/README.md#useselect) を参照してください。

<!--
Putting it together, we get the following code:
-->
これまでのコードをまとめると、以下のようになります。

```js
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';

function MyFirstApp() {
	const pages = useSelect(
		select =>
			select( coreDataStore ).getEntityRecords( 'postType', 'page' ),
		[]
	);
	return <PagesList pages={ pages }/>;
}

function PagesList( { pages } ) {
	return (
		<ul>
			{ pages?.map( page => (
				<li key={ page.id }>
					{ decodeEntities( page.title.rendered ) }
				</li>
			) ) }
		</ul>
	)
}
```

<!--
Note that post title may contain HTML entities like `&aacute;`, so we need to use the [`decodeEntities`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-html-entities/) function to replace them with the symbols they represent like `á`.
-->
注意: 投稿タイトルには `&aacute;` のようなHTMLエンティティが含まれることがあるため、 [`decodeEntities`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-html-entities/) 関数を使用して `á` のようなシンボルに置き換える必要があります。

<!--
Refreshing the page should display a list similar to this one:
-->
ページをリフレッシュすると、以下のようにリストが表示されます。

![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/list-of-pages/fetch-the-data.jpg)

<!--
## Step 3: Turn it into a table
-->
## ステップ3: テーブルの中へ

```js
function PagesList( { pages } ) {
	return (
		<table className="wp-list-table widefat fixed striped table-view-list">
			<thead>
				<tr>
					<th>Title</th>
				</tr>
			</thead>
			<tbody>
				{ pages?.map( page => (
					<tr key={ page.id }>
						<td>{ decodeEntities( page.title.rendered ) }</td>
					</tr>
				) ) }
			</tbody>
		</table>
	);
}
```

![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/list-of-pages/make-a-table.jpg)

<!--
## Step 4: Add a search box
-->
## ステップ4: 検索ボックスの追加

<!--
The list of pages is short for now; however, the longer it grows, the harder it is to work with. WordPress admins typically solves this problem with a search box – let’s implement one too!
-->
ページのリストは今のところ短いですが、長くなればなるほど、作業が難しくなります。WordPress の管理では通常、この種の問題を検索ボックスで解決します。私たちも検索ボックスを実装してみましょう。

<!--
Let’s start by adding a search field:
-->
検索フィールドを追加するところから始めます。

```js
import { useState } from 'react';
import { SearchControl } from '@wordpress/components';

function MyFirstApp() {
	const [searchTerm, setSearchTerm] = useState( '' );
	// ...
	return (
		<div>
			<SearchControl
				onChange={ setSearchTerm }
				value={ searchTerm }
			/>
			{/* ... */ }
		</div>
	)
}
```

<!--
Note that instead of using an `input` tag, we took advantage of the [SearchControl](https://developer.wordpress.org/block-editor/reference-guides/components/search-control/) component. This is what it looks like:
-->
注意: `input`タグを使用する代わりに、[SearchControl](https://developer.wordpress.org/block-editor/reference-guides/components/search-control/) コンポーネントを利用します。

![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/list-of-pages/filter-field.jpg)

<!--
The field starts empty, and the contents are stored in the `searchTerm` state value. If you aren’t familiar with the [useState](https://react.dev/reference/react/useState) hook, you can learn more in [React’s documentation](https://react.dev/reference/react/useState).
-->
フィールドは空で始まり、内容は `searchTerm` ステート値に格納されます。[useState](https://react.dev/reference/react/useState) フックがよく分からない場合は、[Reactのドキュメント](https://react.dev/reference/react/useState)を参照してください。

<!--
We can now request only the pages matching the `searchTerm`.
-->
これで `searchTerm` にマッチするページのみをリクエストできます。

<!--
After checking with the [WordPress API documentation](https://developer.wordpress.org/rest-api/reference/pages/), we see that the [/wp/v2/pages](https://developer.wordpress.org/rest-api/reference/pages/) endpoint accepts a `search` query parameter and uses it to  _limit results to those matching a string_. But how can we use it? We can pass custom query parameters as the third argument to `getEntityRecords` as below:
-->
[WordPress API ドキュメント](https://developer.wordpress.org/rest-api/reference/pages/) で確認すると、[wp/v2/pages](https://developer.wordpress.org/rest-api/reference/pages/) エンドポイントが `search` クエリパラメータを受け入れ、_文字列にマッチしたものに結果を限定する_ ことがわかります。しかし、どのように使えばよいでしょう ? それには、カスタムクエリパラメータを、`getEntityRecords` の第3引数として指定します。

```js
wp.data.select( 'core' ).getEntityRecords( 'postType', 'page', { search: 'home' } )
```

<!--
Running that snippet in your browser’s dev tools will trigger a request to `/wp/v2/pages?search=home` instead of just `/wp/v2/pages`.
-->
ブラウザの開発ツールでこのスニペットを実行すると、`/wp/v2/pages` の代わりに、`/wp/v2/pages?search=home` へのリクエストが発生します。

<!--
Let’s mirror this in our `useSelect` call as follows:
-->
`useSelect` 呼び出しでもこれを真似します。
```js
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';

function MyFirstApp() {
	// ...
	const { pages } = useSelect( select => {
		const query = {};
		if ( searchTerm ) {
			query.search = searchTerm;
		}
		return {
			pages: select( coreDataStore ).getEntityRecords( 'postType', 'page', query )
		}
	}, [searchTerm] );

	// ...
}
```

<!--
The `searchTerm` is now used as a `search` query parameter when provided. Note that `searchTerm` is also specified inside the list of `useSelect` dependencies to make sure `getEntityRecords` is re-run when the `searchTerm` changes.
-->
`searchTerm` が指定された場合、`search` クエリパラメータとして使用されます。注意: `searchTerm` はまた、`useSelect` の依存関係のリスト内でも使用されます。これは、`searchTerm` が変更された際に、`getEntityRecords` を再実行するためです。

<!--
Finally, here’s how `MyFirstApp` looks once we wire it all together:
-->
最後に、全部をつなぐと、`MyFirstApp` はこうなります。


```js
import { useState } from 'react';
import { createRoot } from 'react-dom';
import { SearchControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';

function MyFirstApp() {
	const [searchTerm, setSearchTerm] = useState( '' );
	const pages = useSelect( select => {
		const query = {};
		if ( searchTerm ) {
			query.search = searchTerm;
		}
		return select( coreDataStore ).getEntityRecords( 'postType', 'page', query );
	}, [searchTerm] );

	return (
		<div>
			<SearchControl
				onChange={ setSearchTerm }
				value={ searchTerm }
			/>
			<PagesList pages={ pages }/>
		</div>
	)
}
```

<!--
Voila! We can now filter the results:
-->
これで結果をフィルタリングできるようになりました。

![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/list-of-pages/filter.jpg)

<!--
### Using core-data instead vs calling the API directly
-->
### core-data を使用する代わりに、APIを直接呼び出す

<!--
Let’s take a pause for a moment to consider the downsides of an alternative approach we could have taken - working with the API directly. Imagine we sent the API requests directly:
-->
ここで少し小休止して、API を直接操作した場合のデメリットについて考えてみます。API リクエストを直接送ったと想像してください。

```js
import apiFetch from '@wordpress/api-fetch';
function MyFirstApp() {
	// ...
	const [pages, setPages] = useState( [] );
	useEffect( () => {
		const url = '/wp-json/wp/v2/pages?search=' + searchTerm;
		apiFetch( { url } )
			.then( setPages )
	}, [searchTerm] );
	// ...
}
```

<!--
Working outside of core-data, we would need to solve two problems here.
-->
core-data を使用せずに作業すると、2つの問題を解決する必要があります。

<!--
Firstly, out-of-order updates. Searching for „About” would trigger five API requests filtering for `A`, `Ab`, `Abo`, `Abou`, and `About`. These requests could finish in a different order than they started. It is possible that _search=A_ would resolve after _ search=About_ and thus we’d display the wrong data.
-->
まず、ランダムな更新の問題です。「About」を検索すると、`A`、`Ab`、`Abo`、`Abou`、`About` をフィルタリングする、5つのAPIリクエストが発生します。このリクエストは、呼び出しと異なる順番で終了する可能性があります。つまり、_search=About_ の後に _search=A_ が解決される可能性があり、誤ったデータが表示されます。

<!--
Gutenberg data helps by handling the asynchronous part behind the scenes. `useSelect` remembers the most recent call and returns only the data we expect.
-->
Gutenberg Data は、裏で非同期部分を処理します。`useSelect` は直近の呼び出しを記憶しており、期待するデータのみを返します。

<!--
Secondly, every keystroke would trigger an API request. If you typed `About`, deleted it, and retyped it, it would issue 10 requests in total even though we could reuse the data.
-->
次に、キー操作のたびにAPIリクエストが発生する問題です。例えば、`About` と入力した後に、それを削除し、再度入力した場合、データを再利用できるにもかかわらず、合計で10回のリクエストが発生します。

<!--
Gutenberg data helps by caching the responses to API requests triggered by `getEntityRecords()`  and reuses them on subsequent calls. This is especially important when other components rely on the same entity records.
-->
Gutenberg Data は、`getEntityRecords()` をトリガーとする API リクエストのレスポンスをキャッシュして、以降の呼び出しで再利用します。この動きは特に、他のコンポーネントが同じエンティティレコードに依存している場合に重要です。

<!--
All in all, the utilities built into core-data are designed to solve the typical problems so that you can focus on your application instead.
-->
つまり、core-data に組み込まれたユーティリティが、一般的な問題を解決するよう設計されているため、開発者はアプリケーションの開発に集中できます。

<!--
## Step 5: Loading Indicator
-->
## ステップ5: インジケータのロード

<!--
There is one problem with our search feature. We can’t be quite sure whether it’s still searching or showing no results:
-->
この検索機能には1つ問題があります。まだ検索中なのか、検索結果が表示されていないのかが、はっきりしないのです。

![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/list-of-pages/unclear-status.jpg)

<!--
A few messages like  _Loading…_ or _No results_ would clear it up. Let’s implement them! First,  `PagesList` has to be aware of the current status:
-->
これは、「ロード中」や「結果がありません」のようなメッセージを出せばクリアになります。早速、実装しましょう。まず、 `PagesList` は現在の状態を認識する必要があります。

```js
import { SearchControl, Spinner } from '@wordpress/components';
function PagesList( { hasResolved, pages } ) {
	if ( !hasResolved ) {
		return <Spinner/>
	}
	if ( !pages?.length ) {
		return <div>No results</div>
	}
	// ...
}

function MyFirstApp() {
	// ...

	return (
		<div>
			// ...
			<PagesList hasResolved={ hasResolved } pages={ pages }/>
		</div>
	)
}
```

<!--
Note that instead of building a custom loading indicator, we took advantage of the [Spinner](https://developer.wordpress.org/block-editor/reference-guides/components/spinner/) component.
-->
注意: 独自のローディングインジケータを作成する代わりに、[Spinner](https://developer.wordpress.org/block-editor/reference-guides/components/spinner/) コンポーネントを活用しています。

<!--
We still need to know whether the pages selector `hasResolved` or not. We can find out using the  `hasFinishedResolution` selector:
-->
ページセレクタが `hasResolved` かどうかを知る必要があります。これには、`hasFinishedResolution` セレクタを使用します。

`wp.data.select('core').hasFinishedResolution( 'getEntityRecords', [ 'postType', 'page', { search: 'home' } ] )`

<!--
It takes the name of the selector and the _exact same arguments you passed to that selector_ and returns either `true` if the data was already loaded or `false` if we’re still waiting. Let’s add it to `useSelect`:
-->
これはセレクタの名前と、_そのセレクタに渡したものと全く同じ引数_ を受け取り、データがすでにロードされていれば `true` を、まだ待っている場合は `false` を返します。これを `useSelect` に追加します。

```js
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';

function MyFirstApp() {
	// ...
	const { pages, hasResolved } = useSelect( select => {
		// ...
		return {
			pages: select( coreDataStore ).getEntityRecords( 'postType', 'page', query ),
			hasResolved:
				select( coreDataStore ).hasFinishedResolution( 'getEntityRecords', ['postType', 'page', query] ),
		}
	}, [searchTerm] );

	// ...
}
```

<!--
There is just one last problem. It is easy to make a typo and end up passing different arguments to `getEntityRecords` and `hasFinishedResolution`. It is critical that they are identical. We can remove this risk by storing the arguments in a variable:
-->
最後にもう一つだけ問題があります。タイプミスをして、 `getEntityRecords` と `hasFinishedResolution` に、異なる引数を渡してしまう場合があります。2つの引数が同じであることは非常に重要です。引数を変数に格納すれば、このリスクを取り除けます。

```js
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
function MyFirstApp() {
	// ...
	const { pages, hasResolved } = useSelect( select => {
		// ...
		const selectorArgs = [ 'postType', 'page', query ];
		return {
			pages: select( coreDataStore ).getEntityRecords( ...selectorArgs ),
			hasResolved:
				select( coreDataStore ).hasFinishedResolution( 'getEntityRecords', selectorArgs ),
		}
	}, [searchTerm] );

	// ...
}
```

<!--
And voilà! That's it.
-->
これで、完成です。

<!--
### Wiring it all together
-->
### すべてをひとつに

<!--
All the pieces are in place, great! Here’s the complete JavaScript code of our app:
-->
すべての部品が揃いました、素晴らしい。以下は、アプリの完全なJavaScriptコードです。

```js
import { useState } from 'react';
import { createRoot } from 'react-dom';
import { SearchControl, Spinner } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';

function MyFirstApp() {
	const [ searchTerm, setSearchTerm ] = useState( '' );
	const { pages, hasResolved } = useSelect(
		( select ) => {
			const query = {};
			if ( searchTerm ) {
				query.search = searchTerm;
			}
			const selectorArgs = [ 'postType', 'page', query ];
			return {
				pages: select( coreDataStore ).getEntityRecords(
					...selectorArgs
				),
				hasResolved: select( coreDataStore ).hasFinishedResolution(
					'getEntityRecords',
					selectorArgs
				),
			};
		},
		[ searchTerm ]
	);

	return (
		<div>
			<SearchControl onChange={ setSearchTerm } value={ searchTerm } />
			<PagesList hasResolved={ hasResolved } pages={ pages } />
		</div>
	);
}

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
				</tr>
			</thead>
			<tbody>
				{ pages?.map( ( page ) => (
					<tr key={ page.id }>
						<td>{ decodeEntities( page.title.rendered ) }</td>
					</tr>
				) ) }
			</tbody>
		</table>
	);
}

const root = createRoot(
	document.querySelector( '#my-first-gutenberg-app' )
);
window.addEventListener(
	'load',
	function () {
		root.render(
			<MyFirstApp />
		);
	},
	false
);
```

<!--
All that’s left is to refresh the page and enjoy the brand new status indicator:
-->
あとは、ページを更新して、生まれたてのステータス表示を見て楽しんでください。

![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/list-of-pages/indicator.jpg)
![](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/data-basics/media/list-of-pages/no-results.jpg)

<!--
## What's next?
-->
## 次は ?

<!--
* **Previous part:** [Setup](/docs/how-to-guides/data-basics/1-data-basics-setup.md)
* **Next part:** [Building an edit form](/docs/how-to-guides/data-basics/3-building-an-edit-form.md)
* (optional) Review the [finished app](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/data-basics-59c8f8) in the block-development-examples repository
-->
* **前のパート:** [セットアップ](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/1-data-basics-setup)
* **次のパート:** [編集フォームの構築](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/data-basics/3-building-an-edit-form)
* (オプション) block-development-examples リポジトリ内の [完成したアプリ](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/data-basics-59c8f8) を参照

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/data-basics/2-building-a-list-of-pages.md)

