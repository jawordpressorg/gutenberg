<!-- 
# Extending the Query Loop block
 -->
# クエリーループブロックの拡張

<!-- 
The Query Loop block is a powerful tool that allows users to cycle through a determined list of posts and display a certain set of blocks that will inherit the context of each of the posts in the list. For example, it can be set to cycle through all the posts of a certain category and for each of those posts display their featured image. And much more, of course!
 -->
クエリーループブロックは強力なツールです。ユーザーが指定した投稿のリストをループし、リスト内の各投稿のコンテキストを継承した、ブロックの特定セットを表示できます。例えば、あるカテゴリの投稿をすべてループするように設定し、それぞれの投稿のアイキャッチ画像を表示できます。もちろん、それ以外にもさまざまなことが可能です !

<!-- 
But precisely because the Query Loop block is so powerful and allows for great customization, it can also be daunting. Most users wouldn't want to be presented with the full capabilities of the Query Loop block, as most users wouldn't be familiar with the concept of a “query” and its associated technical terms. Instead, most users will likely appreciate a pre-set version of the block, with fewer settings to adjust and clearer naming. The Post List variation offered by default is a good example of this practice: the user will be using the Query Loop block without being exposed to its technicalities, and will also be more likely to discover and understand the purpose of the block.
 -->
しかし、クエリーループブロックが非常に強力で自由にカスタマイズ可能な分、面倒な面もあります。ほとんどのユーザーは「クエリー」の概念や関連する専門用語に精通しておらず、クエリループブロックのすべての機能を見たくもありません。代わりに、調整する設定が少なく、名前もわかりやすく、あらかじめ設定されたバージョンのブロックの方が遥かに好みです。実際、デフォルトで提供されている投稿リストのバリエーションはその良い例です。ユーザーは技術的な面に触れることなくクエリーループブロックを使用できるだけでなく、ブロックの目的は見つけやすく、理解しやすくなっています。

<!-- 
In the same manner, a lot of extenders might need a way to present bespoke versions of the block, with their own presets, additional settings and without customization options which are irrelevant to their use-case (often, for example, their custom post type). The Query Loop block offers very powerful ways to create such variations.
 -->
同じように多くの拡張コンポーネントでも、ブロックの特別なバージョンの表示方法が必要になるかもしれません。たとえば独自のプリセット、追加の設定、ユースケースに無関係なカスタマイズオプションの省略 (たとえば、多くの場合、カスタム投稿タイプ)など。クエリーループブロックにはこのようなバリエーションを作成する、非常に強力な方法があります。

<!-- 
## Extending the block with variations
 -->
## バリエーションを使用したブロックの拡張

<!-- 
By registering your own block variation with some specific Query Loop block settings, you can have finer control over how it is presented, while still being able to use the full capabilities which the Query Loop block offers underneath. If you are not familiar with block variations, learn more about them [here](/docs/reference-guides/block-api/block-variations.md).
 -->
特定のクエリーループブロック設定を持つ、カスタムブロックバリエーションを登録することで、ベースのクエリーループブロックが提供する機能をすべてそのまま使用しながら、表示方法をより細かく制御できます。ブロックバリエーションの詳細については、[こちら](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-variations/)を参照してください。

<!-- 
With the block variations API you can provide the default settings that make the most sense for your use-case.
 -->
ブロックバリエーション API を使用すると、ユースケースに最も適切なデフォルト設定を提供できます。

<!-- 
In order to have a Query Loop variation properly working, we'll need to:
 -->
クエリーループのバリエーションが適切に機能するには、以下が必要です。

<!-- 
- Register the block variation for the `core/query` block with some default values
- Define a layout for the block variation
- Use the `namespace` attribute in the `isActive` block variation property
 -->
- `core/query` ブロックのブロックバリエーションをデフォルト値で登録する
- ブロックバリエーションのレイアウトを定義する
- `isActive` ブロックバリエーションプロパティで `namespace` 属性を使用する

<!-- 
Let's go on a journey, for example, of setting up a variation for a plugin which registers a `book` [custom post type](https://developer.wordpress.org/plugins/post-types/).
 -->
さっそくサンプルプログラムを試してみましょう。`book` [カスタム投稿タイプ](https://developer.wordpress.org/plugins/post-types/) を登録するプラグイン用のバリエーションを設定します。

<!-- 
### 1. Offer sensible defaults
 -->
### 1. 合理的なデフォルトの提供

<!-- 
Your first step would be to create a variation which will be set up in such a way to provide a block variation which will display by default a list of books instead of blog posts. The full variation code will look something like this:
 -->
最初のステップはバリエーションの作成です。バリエーションは設定により、デフォルトで投稿記事の代わりに書籍 (book) のリストを表示するブロックバリエーションを提供します。完全なバリエーションのコードは以下のようになります。

<!-- 
```js
const MY_VARIATION_NAME = 'my-plugin/books-list';

registerBlockVariation( 'core/query', {
	name: MY_VARIATION_NAME,
	title: 'Books List',
	description: 'Displays a list of books',
	isActive: ( { namespace, query } ) => {
		return (
			namespace === MY_VARIATION_NAME
			&& query.postType === 'book'
		);
	},
	icon: /** An SVG icon can go here*/,
	attributes: {
		namespace: MY_VARIATION_NAME,
		query: {
			perPage: 6,
			pages: 0,
			offset: 0,
			postType: 'book',
			order: 'desc',
			orderBy: 'date',
			author: '',
			search: '',
			exclude: [],
			sticky: '',
			inherit: false,
		},
	},
	scope: [ 'inserter' ],
	}
);
```
 -->
```js
const MY_VARIATION_NAME = 'my-plugin/books-list';

registerBlockVariation( 'core/query', {
	name: MY_VARIATION_NAME,
	title: 'Books List',
	description: 'Displays a list of books',
	isActive: ( { namespace, query } ) => {
		return (
			namespace === MY_VARIATION_NAME
			&& query.postType === 'book'
		);
	},
	icon: /** SVG アイコンがここに来る */,
	attributes: {
		namespace: MY_VARIATION_NAME,
		query: {
			perPage: 6,
			pages: 0,
			offset: 0,
			postType: 'book',
			order: 'desc',
			orderBy: 'date',
			author: '',
			search: '',
			exclude: [],
			sticky: '',
			inherit: false,
		},
	},
	scope: [ 'inserter' ],
	}
);
```

<!-- 
If that sounds like a lot, don't fret, let's go through each of the properties here and see why they are there and what they are doing.
 -->
大変に見えるかもしれませんが、心配は不要です。それぞれのプロパティについて、なぜ存在し、何をするのかを見ていきましょう。

<!-- 
Essentially, you would start with something like this:
 -->
基本的には、次のようなコードから始める事になります。

<!-- 
```js
registerBlockVariation( 'core/query', {
	name: 'my-plugin/books-list',
	attributes: {
		query: {
			/** ...more query settings if needed */
			postType: 'book',
		},
	},
} );
```
 -->
```js
registerBlockVariation( 'core/query', {
	name: 'my-plugin/books-list',
	attributes: {
		query: {
			/** ...必要に応じて、さらにクエリー設定を追加する */
			postType: 'book',
		},
	},
} );
```

<!-- 
In this way, the users won't have to choose the custom `postType` from the dropdown, and be already presented with the correct configuration. However, you might ask, how is a user going to find and insert this variation? Good question! To enable this, you should add:
 -->

このコードによりユーザーはドロップダウンからカスタム `postType` を選択しなくても、正しい構成で表示できます。しかし、ユーザーはどうやってこのバリエーションを発見し、挿入するのでしょうか ? いい質問です ! これを有効にするには、以下を追加します。

<!-- 
```js
{
	/** ...variation properties */
	scope: [ 'inserter' ],
}
```
 -->
```js
{
	/** ... バリエーションのプロパティ */
	scope: [ 'inserter' ],
}
```

<!-- 
In this way, your block will show up just like any other block while the user is in the editor and searching for it. At this point you might also want to add a custom icon, title and description to your variation, just like so:
 -->
これによりユーザーがエディターを開き、検索すると、このブロックが他のブロックと同じように表示されます。この時点でバリエーションにカスタムアイコン、タイトル、説明も追加できます。

<!-- 
```js
{
	/** ...variation properties */
	title: 'Books List',
	description: 'Displays a list of books',
	icon: /* Your svg icon here */,
}
```
 -->
```js
{
	/** ... バリエーションのプロパティ */
	title: 'Books List',
	description: 'Displays a list of books',
	icon: /* SVG アイコンがここに */,
}
```
<!-- 
At this point, your custom variation will be virtually indistinguishable from a stand-alone block. Completely branded to your plugin, easy to discover and directly available to the user as a drop in.
 -->
これでカスタムバリエーションはスタンドアロンブロックとほとんど区別がつかなくなります。プラグインに完全に溶け込み、発見しやすく、ユーザーはドロップインで直接利用できます。

<!-- 
However, your query loop variation won't work just yet — we still need to define a layout so that it can render properly.
 -->
しかし、クエリループのバリエーションはまだ機能しません。適切にレンダーできるように、レイアウトを定義する必要があります。

<!-- 
### 2. Customize your variation layout
 -->
### 2. バリエーションのレイアウトのカスタマイズ

<!-- 
Please note that the Query Loop block supports `'block'` as a string in the `scope` property. In theory, that's to allow the variation to be picked up after inserting the block itself. Read more about the Block Variation Picker [here](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/block-variation-picker/README.md).
 -->
クエリーループブロックは `scope` プロパティとして、文字列 `'block'` をサポートすることに注意してください。理論的にはこれで、ブロック自体を挿入した後に、バリエーションをピックアップできるようになります。ブロックバリエーションピッカーについては[こちら](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/block-variation-picker/README.md)を参照してください。

<!-- 
However, it is **unadvisable** to use this currently, this is due to the Query Loop setup with patterns and `scope: [ 'block' ]` variations, all of the selected pattern's attributes will be used except for `postType` and `inherit` query properties, which will likely lead to conflicts and non-functional variations.
 -->
しかし現在、この使用は**推奨できません**。これはパターンと `scope: [ 'block' ]` バリエーションを使用したクエリーループの設定のためです。`postType` と `inherit` クエリープロパティを除く、選択されたパターンのすべての属性が使用され、矛盾した機能的でないバリエーションにつながる可能性があります。

<!-- 
To circumvent this, there two routes, the first one is to add your default `innerBlocks`, like so:
 -->
これを回避するには、2つの方法があります。1つ目は、デフォルトの `innerBlocks` を追加する方法です。

```js
innerBlocks: [
	[
		'core/post-template',
		{},
		[ [ 'core/post-title' ], [ 'core/post-excerpt' ] ],
	],
	[ 'core/query-pagination' ],
	[ 'core/query-no-results' ],
],
```

<!-- 
By having `innerBlocks` in your variation you essentially skip the setup phase of Query Loop block with suggested patterns and the block is inserted with these inner blocks as its starting content.
 -->
バリエーションに `innerBlocks` を含めることで、本質的にクエリーループブロックのセットアップフェーズを提案されたパターンでスキップし、最初のコンテンツとしてこのインナーブロックをブロックに挿入できます。

<!-- 
The other way would be to register patterns specific to your variation, which are going to be suggested in the setup, and replace flows of the block.
 -->
もう一つの方法では、セットアップで提案されるバリエーション固有のパターンを登録し、ブロックのフローを置き換えます。

<!-- 
The Query Loop block determines if there is an active variation of itself and if there are specific patterns available for this variation. If there are, these patterns are going to be the only ones suggested to the user, without including the default ones for the original Query Loop block. Otherwise, if there are no such patterns, the default ones are going to be suggested.
 -->
クエリーループブロックは、自身のアクティブなバリエーションの有無、そしてこのバリエーションで利用可能な特定のパターンの有無を判断します。もしあれば、このパターンがユーザーに提案される唯一のパターンになります。オリジナルのクエリーループブロックのデフォルトパターンは含まれません。もしそのようなパターンがなければ、デフォルトのパターンが提案されます。

<!-- 
In order for a pattern to be “connected” with a Query Loop variation, you should add the name of your variation prefixed with the Query Loop name (e.g. `core/query/$variation_name`) to the pattern's `blockTypes` property. For more details about registering patterns [see here](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/).
 -->
パターンをクエリーループのバリエーションと「接続」するには、パターンの `blockTypes` プロパティに、クエリーループの名前を接頭辞につけたバリエーション名 (例えば `core/query/$variation_name`) を追加する必要があります。パターンの登録についての詳細は[こちら](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-patterns/)を参照してください。

<!-- 
If you have not provided `innerBlocks` in your variation, there is also a way to suggest “connected” variations when the user selects `Start blank` in the setup phase. This is handled in a similar fashion with “connected” patterns, by checking if there is an active variation of Query Loop and if there are any connected variations to suggest.
 -->
もしバリエーションに `innerBlocks` を指定していなければ、セットアップの段階でユーザが「新規」を選択したときに、「接続」バリエーションを提案する方法もあります。これは「接続」パターンと同じ方法で処理されます。クエリーループのアクティブなバリエーションの有無、そして提案する接続されたバリエーションの有無がチェックされます。

<!-- 
In order for a variation to be connected to another Query Loop variation we need to define the `scope` attribute with `['block']` as value and the `namespace` attribute defined as an array. This array should contain the names(`name` property) of any variations they want to be connected to.
 -->
バリエーションを別のクエリーループのバリエーションに接続するには、`['block']` を値として `scope` 属性を定義し、`namespace` 属性を配列として定義する必要があります。この配列には、接続したいバリエーションの名前 (`name` プロパティ) を含める必要があります。

<!-- 
For example, if we have a Query Loop variation exposed to the inserter(`scope: ['inserter']`) with the name `products`, we can connect a scoped `block` variation by setting its `namespace` attribute to `['products']`. If the user selects this variation after having clicked `Start blank`, the namespace attribute will be overridden by the main inserter variation.
 -->
例えば、クエリーループのバリエーションをインサーター (`scope: ['inserter']`) に名前 `products` で公開している場合、`namespace` 属性を `['products']` に設定することで、指定した `block` バリエーションを接続できます。ユーザーが「新規」をクリックした後にこのバリエーションを選択すると、namespace 属性はメインのインサーターのバリエーションによって上書きされます。

<!-- 
### 3. Making Gutenberg recognize your variation
 -->
### 3. Gutenberg のバリエーションの認識

<!-- 
There is one slight problem you might have realized after implementing this variation: while it is transparent to the user as they are inserting it, Gutenberg will still recognize the variation as a Query Loop block at its core and so, after its insertion, it will show up as a Query Loop block in the tree view of the editor, for instance.
 -->
このバリエーションを実装した後で気づかれたかもしれませんが、ちょっとした問題が1つあります。バリエーションを挿入している間、ユーザーには透過ですが、Gutenberg は内部でバリエーションをクエリーループブロックとして認識します。たとえばエディターのツリービューではクエリーループブロックとして表示されます。

<!-- 
We need a way to tell the editor that this block is indeed your specific variation. This is what the `isActive` property is made for: it's a way to determine whether a certain variation is active based on the block's attributes. You could use it like this:
 -->
このブロックが実際には特定のバリエーションであることをエディターに伝える方法が必要です。これが `isActive` プロパティが作られた目的です。ブロックの属性に基づいて、特定のバリエーションがアクティブかどうかを判断できます。以下のように使用します。

<!-- 
```js
{
	/** ...variation properties */
	isActive: ( { namespace, query } ) => {
		return (
			namespace === MY_VARIATION_NAME
			&& query.postType === 'book'
		);
	},
}
```
 -->
```js
{
	/** ... バリエーションのプロパティ */
	isActive: ( { namespace, query } ) => {
		return (
			namespace === MY_VARIATION_NAME
			&& query.postType === 'book'
		);
	},
}
```

<!-- 
You might be tempted to only compare the `postType` so that Gutenberg will recognize the block as your variation any time the `postType` matches `book`. This casts a net too wide, however, as other plugins might want to publish variations based on the `book` post type too, or we might just not want the variation to be recognized every time the user sets the type to `book` manually through the editor settings.
 -->
`postType` だけを比較すれば良いと思うかもしれません。`postType` が `book` と一致したときに Gutenberg がそのブロックをバリエーションと認識すれば良いと。しかし、これでは網の目が広すぎます。他のプラグインも投稿タイプ `book` のバリエーションを公開するかもしれませんし、ユーザーがエディター設定から手動でタイプを `book` に設定するたびにバリエーションを認識させたくもありません。

<!-- 
That's why the Query Loop block exposes a special attribute called `namespace`. It really doesn't do anything inside the block implementation, and it's used as an easy and consistent way for extenders to recognize and scope their own variation. In addition, `isActive` also accepts just an array of strings with the attributes to compare. Often, `namespace` would be sufficient, so you would use it like so:
 -->
クエリーループブロックが特別な属性 `namespace` を公開する理由がこれです。この属性はブロックの実装の中では何もしませんが、拡張コンポーネントが自身のバリエーションを認識し、スコープを設定する際に、簡単で一貫性のある方法として使用されます。さらに `isActive` はまた、比較する属性を文字列の配列として受け取ります。多くの場合、`namespace` で十分なため、以下のように使用します。

<!-- 
```js
{
	/** ...variation properties */
	attributes: {
		/** ...variation attributes */
		namespace: 'my-plugin/books-list',
	},
	isActive: [ 'namespace' ],
}
```
 -->
```js
{
	/** ... バリエーションのプロパティ */
	attributes: {
		/** ... バリエーションの属性 */
		namespace: 'my-plugin/books-list',
	},
	isActive: [ 'namespace' ],
}
```

<!-- 
Like so, Gutenberg will know that it is your specific variation only in the case it matches your custom namespace! So convenient!
 -->
このように、Gutenberg はカスタム名前空間と一致する場合のみ、それが特定のバリエーションであることを認識します ! これはとても便利です !

<!-- 
## Extending the query
 -->
## クエリーの拡張

<!-- 
Even with all of this, your custom post type might have unique requirements: it might support certain custom attributes that you might want to filter and query for, or some other query parameters might be irrelevant or even completely unsupported! We have build the Query Loop block with such use-cases in mind, so let's see how you can solve this problem.
 -->
こうした点をすべて踏まえても、カスタム投稿タイプには独自の要件があるかもしれません。フィルタリングしてクエリーしたい特定のカスタム属性をサポートするかもしれませんし、他のクエリーパラメータは無関係だったり、完全にサポートされていないかもしれません。クエリーループブロックはこのようなケースも想定して作成されています。問題の解決方法を見ていきましょう。

<!-- 
### Disabling irrelevant or unsupported query controls
 -->
### 関連性のない、またはサポートされていないクエリーコントロールの無効化

<!-- 
Let's say you don't use at all the `sticky` attribute in your books, so that would be totally irrelevant to the customization of your block. In order to not confuse the users as to what a setting might do, and only exposing a clear UX to them, we want this control to be unavailable. Furthermore, let's say that you don't use the `author` field at all, which generally indicates the person who has added that post to the database, instead you use a custom `bookAuthor` field. As such, not only keeping the `author` filter would be confusing, it would outright “break” your query.
 -->
カスタム投稿タイプ `book` では、`sticky` 属性をまったく使わず、したがってブロックのカスタマイズにはまったく関係ないとします。ユーザーに何を設定すれば良いかと悩ませず、明確な UX を提供するため、このコントロールを使用できないようにしたいところです。さらに、一般には投稿をデータベースに追加したユーザーを示す `author` フィールドをまったく使わず、代わりにカスタムフィールド `bookAuthor` を使うとします。このとき `author`フィルタを保持することは混乱を招くだけでなく、クエリを完全に「破壊する」ことになります。

<!-- 
For this reason, the Query Loop block variations support a property called `allowedControls`, which accepts an array of keys of the controls we want to display on the inspector sidebar. By default, we accept all the controls, but as soon as we provide an array to this property, we want to specify only the controls which are going to be relevant for us!
 -->
このためクエリーループブロックバリエーションは、インスペクターのサイドバーに表示するコントロールのキー配列を受け付けるプロパティ `allowedControls` をサポートします。デフォルトでは、すべてのコントロールを受け付けますが、このプロパティに配列を指定し始めるとすぐに、関連するコントロールだけを指定したくなるはずです。

<!-- 
As of Gutenberg version 14.2, the following controls are available:
 -->
Gutenberg バージョン14.2では、以下のコントロールを利用できます。

<!-- 
-   `inherit` - Shows the toggle switch for allowing the query to be inherited directly from the template.
-   `postType` - Shows a dropdown of available post types.
-   `order` - Shows a dropdown to select the order of the query.
-   `sticky` - Shows a dropdown to select how to handle sticky posts.
-   `taxQuery` - Shows available taxonomies filters for the currently selected post type.
-   `author` - Shows an input field to filter the query by author.
-   `search` - Shows an input field to filter the query by keywords.
 -->

- `inherit` - テンプレートから直接クエリを継承するためのトグルスイッチを表示する。
- `postType` - 利用可能な投稿タイプのドロップダウンを表示する。
- `order` - クエリの順番を選択するドロップダウンリストを表示する。
- `sticky` - 先頭固定投稿の処理方法を選択するドロップダウンを表示する。
- `taxQuery` - 現在選択されている投稿タイプで利用可能なタクソノミフィルタを表示する。
- `author` - 作成者でクエリをフィルタリングするための入力フィールドを表示する。
- `search` - キーワードでクエリをフィルタリングするための入力フィールドを表示する。

<!-- 
In our case, the property would look like this:
 -->
この例ではプロパティは以下のようになります。

```js
{
	/** ...variation properties */
	allowedControls: [ 'inherit', 'order', 'taxQuery', 'search' ],
}
```

<!-- 
If you want to hide all the above available controls, you can set an empty array as a value of `allowedControls`.
 -->
上の利用可能なコントロールをすべて非表示にしたければ、`allowedControls` の値として空の配列を設定できます。

<!-- 
Notice that we have also disabled the `postType` control. When the user selects our variation, why show them a confusing dropdown to change the post type? On top of that it might break the block as we can implement custom controls, as we'll see shortly.
 -->
`postType` コントロールも無効にしていることに注意してください。ユーザーがバリエーションを選択した際、紛らわしい投稿タイプ変更のドロップダウンを表示する理由はありません。その上、カスタムコントロールを実装できるため、ブロックを壊す可能性があります。これについてはすぐ後で見ます。

<!-- 
### Adding additional controls
 -->
### コントロールの追加

<!-- 
Because our plugin uses custom attributes that we need to query, we want to add our own controls to allow the users to select those instead of the ones we have just disabled from the core inspector controls. We can do this via a [React HOC](https://reactjs.org/docs/higher-order-components.html) hooked into a [block filter](https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/), like so:
 -->
プラグインはクエリに必要なカスタム属性を使用するため、たった今無効にしたコアのインスペクタコントロールの代わりに、ユーザーがカスタム属性を選択できるような独自コントロールを追加します。これには、[ブロックフィルター](https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/)にフックされた [React HOC](https://reactjs.org/docs/higher-order-components.html) 経由で行います。

<!-- 
```jsx
import { InspectorControls } from '@wordpress/block-editor';

export const withBookQueryControls = ( BlockEdit ) => ( props ) => {
	// We only want to add these controls if it is our variation,
	// so here we can implement a custom logic to check for that, similar
	// to the `isActive` function described above.
	// The following assumes that you wrote a custom `isMyBooksVariation`
	// function to handle that.
	return isMyBooksVariation( props ) ? (
		<>
			<BlockEdit key="edit" { ...props } />
			<InspectorControls>
				<BookAuthorSelector /> { /** Our custom component */ }
			</InspectorControls>
		</>
	) : (
		<BlockEdit key="edit" { ...props } />
	);
};

addFilter( 'editor.BlockEdit', 'core/query', withBookQueryControls );
``` -->
```jsx
import { InspectorControls } from '@wordpress/block-editor';

export const withBookQueryControls = ( BlockEdit ) => ( props ) => {
	// 私たちのバリエーションである場合にのみ、これらのコントロールを追加したいとします。
	// これには前述の `isActive` 関数と同様、それをチェックするカスタムロジックを
	// 実装できます。
	// 以下では、これを処理するカスタム関数 `isMyBooksVariation` を記述したとします。
	return isMyBooksVariation( props ) ? (
		<>
			<BlockEdit key="edit" { ...props } />
			<InspectorControls>
				<BookAuthorSelector /> { /** カスタムコンポーネント */ }
			</InspectorControls>
		</>
	) : (
		<BlockEdit key="edit" { ...props } />
	);
};

addFilter( 'editor.BlockEdit', 'core/query', withBookQueryControls );
```

<!-- 
Of course, you'll be responsible for implementing the logic of your control (you might want to take a look at [`@wordpress/components`](https://www.npmjs.com/package/@wordpress/components) to make your controls fit seamlessly within the Gutenberg UI). Any extra parameter you assign within the `query` object inside the blocks attributes can be used to create a custom query according to your needs, with a little extra effort.
 -->
もちろん、コントロールのロジックの実装はあなたの責任です (Gutenberg UI にシームレスにコントロールをフィットさせるには、[`@wordpress/components`](https://www.npmjs.com/package/@wordpress/components) を参考にするとよいでしょう)。ブロック属性内の `query` オブジェクトに追加パラメータを割り当てると、わずかな追加の手間で、ニーズに応じたカスタムクエリを作成できます。

<!-- 
Currently, you'll likely have to implement slightly different paths to make the query behave correctly both on the front-end side (i.e. on the end user's side) and to show the correct preview on the editor side.
 -->
現在、フロントエンド側 (つまりエンドユーザー側) でクエリを正しく動かし、エディター側で正しいプレビューを表示するには、少し異なるパスを実装する必要があります。

<!-- 
```js
{
	/** ...variation properties */
	attributes: {
		/** ...variation attributes */
		query: {
			/** ...more query settings if needed */
			postType: 'book',
			/** Our custom query parameter */
			bookAuthor: 'J. R. R. Tolkien'
		}
	}
}
```
 -->
```js
{
	/** ... バリエーションのプロパティ */
	attributes: {
		/** ... バリエーションの属性 */
		query: {
			/** ... 必要であれば、もっとクエリー設定 */
			postType: 'book',
			/** カスタムクエリーパラメータ */
			bookAuthor: 'J. R. R. Tolkien'
		}
	}
}
```
<!-- 
### Making your custom query work on the front-end side
 -->
### カスタムクエリをフロントエンド側で動かす

<!-- 
The Query Loop block functions mainly through the Post Template block which receives the attributes and builds the query from there. Other first-class children of the Query Loop block (such as the Pagination block) behave in the same way. They build their query and then expose the result via the filter [`query_loop_block_query_vars`](https://developer.wordpress.org/reference/hooks/query_loop_block_query_vars/).
 -->
クエリーループブロックは主に、属性を受け取ってそこからクエリーを構築する、投稿テンプレートブロックを通して機能します。クエリーループブロックの他の重要な子ブロック (ページネーションブロックなど) も同じように動作します。これらはクエリを構築し、フィルター [`query_loop_block_query_vars`](https://developer.wordpress.org/reference/hooks/query_loop_block_query_vars/) を介して、結果を公開します。

<!-- 
You can hook into that filter and modify your query accordingly. Just make sure you don't cause side-effects to other Query Loop blocks by at least checking that you apply the filter only to your variation!
 -->
そのフィルターにフックして、それに応じてクエリを変更できます。ただし他のクエリーループブロックに副作用を引き起こさないようにしてください。少なくとも自分のバリエーションにのみフィルタを適用することを確認してください。

<!-- 
```php
if( 'my-plugin/books-list' === $block[ 'attrs' ][ 'namespace' ] ) {
	add_filter(
		'query_loop_block_query_vars',
		function( $query ) {
			/** You can read your block custom query parameters here and build your query */
		},
	);
}
```
 -->
```php
if( 'my-plugin/books-list' === $block[ 'attrs' ][ 'namespace' ] ) {
	add_filter(
		'query_loop_block_query_vars',
		function( $query ) {
			/** ここでブロックカスタムクエリパラメータを読み込み、クエリを構築できます。*/
		},
	);
}
```

<!-- 
(In the code above, we assume you have some way to access the block, for example within a [`pre_render_block`](https://developer.wordpress.org/reference/hooks/pre_render_block/) filter, but the specific solution can be different depending on the use-case, so this is not a firm recommendation).
 -->
(上のコードでは、ブロックにアクセスする何らかの方法があることを想定しています。たとえば [`pre_render_block`](https://developer.wordpress.org/reference/hooks/pre_render_block/) フィルター内など。しかし、具体的な解決策はユースケースによって異なる可能性があるため、これは確実な推奨ではありません)。

<!-- 
### Making your custom query work on the editor side
 -->
### カスタムクエリーをエディタ側で動かす

<!-- 
To finish up our custom variation, we might want the editor to react to changes in our custom query and display an appropriate preview accordingly. This is not required for a functioning block, but it enables a fully integrated user experience for the consumers of your block.
 -->
カスタムバリエーションの仕上げとして、カスタムクエリの変更にエディターが反応し、それに応じて適切なプレビューを表示します。これはブロックの機能に必須ではありませんが、ブロックの利用者に対して、完全に統合されたユーザーエクスペリエンスを実現します。

<!-- 
The Query Loop block fetches its posts to show the preview using the [WordPress REST API](https://developer.wordpress.org/rest-api/). Any extra parameter added to the `query` object will be passed as a query argument to the API. This means that these extra parameters should be either supported by the REST API, or be handled by custom filters such as the [`rest_{$this->post_type}_query`](https://developer.wordpress.org/reference/hooks/rest_this-post_type_query/) filter which allows you to hook into any API request for your custom post type. Like so:
 -->
クエリーループブロックは、[WordPress REST API](https://developer.wordpress.org/rest-api/) を使用して、プレビューを表示する投稿を取得します。`query` オブジェクトに追加されたパラメータは、API のクエリー引数として渡されます。つまり、これらの追加パラメータは REST API でサポートされるか、カスタム投稿タイプの API リクエストにフックできる [`rest_{$this->post_type}_query`](https://developer.wordpress.org/reference/hooks/rest_this-post_type_query/) フィルターのようなカスタムフィルターで処理する必要があります。

<!-- 
```php
add_filter(
	'rest_book_query',
	function( $args, $request ) {
		/** We can access our custom parameters from here */
		$book_author = $request->get_param( 'bookAuthor' );
		/** ...your custom query logic */
	}
);
```
 -->
```php
add_filter(
	'rest_book_query',
	function( $args, $request ) {
		/** ここからカスタムパラメータにアクセスできる */
		$book_author = $request->get_param( 'bookAuthor' );
		/** ... カスタムクエリーロジック */
	}
);
```
<!-- 
And, just like that, you'll have created a fully functional variation of the Query Loop block!
 -->
以上で、完全に機能するクエリーループブロックのバリエーションが完成しました !

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/block-tutorial/extending-the-query-loop-block.md)