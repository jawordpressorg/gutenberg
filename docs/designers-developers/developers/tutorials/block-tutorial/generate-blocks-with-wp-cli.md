<!-- 
# Generate Blocks with WP-CLI
 -->
# WP-CLI を使用したブロックの生成

<!-- 
It turns out that writing the simplest possible block which contains only static content might not be the easiest task. It requires to follow closely the steps described in the documentation. It stems from the fact that you need to create at least 2 files and integrate your code with the existing APIs. One way to mitigate this inconvenience is to copy the source code of the existing block from one of the repositories that share working examples:
- [WordPress/gutenberg-examples](https://github.com/WordPress/gutenberg-examples) - the official examples for extending Gutenberg with plugins which create blocks
- [zgordon/gutenberg-course](https://github.com/zgordon/gutenberg-course) - a repository for Zac Gordon's Gutenberg Development Course
- [ahmadawais/create-guten-block](https://github.com/ahmadawais/create-guten-block) - A zero-configuration developer toolkit for building WordPress Gutenberg block plugins

It might be also a good idea to browse the folder with [all core blocks](https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src) to see how they are implemented.
 -->
静的なコンテツを含む可能な限りシンプルなブロックを書こうとしても、これは簡単な作業ではありません。ドキュメントに書かれた手順を1つずつ追いかけ、少なくとも2つのファイルを作成し、コードを既存の API と統合する必要があります。この面倒さを解消する1つの方法は動作可能なサンプルを含むレポジトリーから既存ブロックのソースコードをコピーする方法です。
- [WordPress/gutenberg-examples](https://github.com/WordPress/gutenberg-examples) - ブロックを作成するプラグインで Guteberg を拡張する公式サンプル
- [zgordon/gutenberg-course](https://github.com/zgordon/gutenberg-course) - Zac Gordon's Gutenberg Development Course リポジトリー
- [ahmadawais/create-guten-block](https://github.com/ahmadawais/create-guten-block) -  WordPress Gutenberg ブロックプラグインを構築する zero-configuration developer toolkit

[すべてのコアブロック](https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src)のフォルダーを参照し実装を調べるのも良い考えです。

<!-- 
## WP-CLI

Another way of making a developer's life easier is to use [WP-CLI](http://wp-cli.org/), which provides a command-line interface for many actions you might perform on the WordPress instance. One of the commands generates all the code required to register a Gutenberg block for a plugin or theme.
 -->
## WP-CLI

もう1つの開発者をラクにしてくれる方法が [WP-CLI](http://wp-cli.org/) です。WP-CLI は WordPress に対する多くの操作をコマンドラインから実行できますが、その中にプラグインやテーマ用の Gutenberg ブロック登録に必要なすべてのコードを生成するコマンドがあります。

<!-- 
### Installing

Before installing `WP-CLI`, please make sure your environment meets the minimum requirements:

* UNIX-like environment (OS X, Linux, FreeBSD, Cygwin); limited support in Windows environment
* PHP 5.3.29 or later
* WordPress 3.7 or later

Once you’ve verified requirements, you should follow the [installation instructions](http://wp-cli.org/#installing). Downloading the Phar file is the recommended installation method for most users. Should you need, see also the documentation on [alternative installation methods](https://make.wordpress.org/cli/handbook/installing/).
 -->
### インストール

`WP-CLI` をインストールする前に使用環境が必要最低要件を満たしていることを確認してください。

* UNIX 互換環境 (macOS、Linux、FreeBSD、Cygwin)。Windows 環境は限定的なサポートです。
* PHP 5.3.29 以上
* WordPress 3.7 以上

確認を終えたら、[インストール手順](http://wp-cli.org/#installing)に従ってください。大部分のユーザーには Phar ファイルのダウンロードによるインストール方法を推奨します。必要に応じて[代替のインストール方法](https://make.wordpress.org/cli/handbook/installing/)のドキュメントも参照してください。

<!-- 
### Using `wp scaffold block`

The following command generates PHP, JS and CSS code for registering a block.
 -->
### `wp scaffold block` の使用

次のコマンドを実行するとブロックを登録する PHP、JS、CSS コードを生成します。
```bash
wp scaffold block <slug> [--title=<title>] [--dashicon=<dashicon>] [--category=<category>] [--theme] [--plugin=<plugin>] [--force]
```

<!-- 
Please refer to the [command documentation](https://github.com/wp-cli/scaffold-command#wp-scaffold-block) to learn more about the available options for the block.

When you scaffold a block you must provide at least a `slug` name and either the `theme` or `plugin` name. In most cases, we recommended pairing blocks with plugins rather than themes, because only using plugin ensures that all blocks will still work when your theme changes.
 -->
ブロックで利用可能なその他のオプションについては[コマンドのドキュメント](https://github.com/wp-cli/scaffold-command#wp-scaffold-block)を参照してください。

ブロックのひな形を作成する際には少なくとも `slug` 名と `theme` 名または `plugin` 名のどちらかを指定する必要があります。多くの場合はブロックはテーマでなくプラグインとペアにすることを推奨します。プラグインを使用していればテーマを変更されてもすべてのブロックは稼働します。 

<!-- 
### Examples

Here are some examples using `wp scaffold block` in action.

#### Create a block inside the plugin

The following command generates a `movie` block with the `My movie block` title for the existing plugin named `movies`:
 -->
### サンプル

`wp scaffold block` の使用例をいくつか挙げます。

#### プラグイン内部でのブロックの作成

次のコマンドを実行すると、既存のプラグイン `movies` に対してタイトル `My movie block` のブロック `movie` を生成します。

```bash
$ wp scaffold block movie --title="My movie block" --plugin=movies
Success: Created block 'My movie block'.
```

<!-- 
This will generate 4 files inside the `movies` plugin directory. All files contain inline documentation that will help to apply any further customizations to the block. It's worth mentioning that it is currently possible to scaffold only blocks containing static content and JavaScript code is written using ECMAScript 5 (ES5) standard which works with all modern browsers.

`movies/blocks/movie.php` - you will have to manually include this file in your main plugin file:
 -->
コマンドは `movies` プラグインディレクトリに4つのファイルを生成します。すべてのファイルにはインラインドキュメントがあり、ブロックをカスタマイズする際のガイドとなります。なお現在の仕様として、静的コンテンツを含むブロックのひな形のみを生成できます。また JavaScript コードはすべてのモダンなブラウザーで動作可能な ECMAScript 5 (ES5) 標準で書かれています。

**訳注: WP-CLI の出力するコメントは英語ですが、わかりやすさのため翻訳しました。また URL も日本語版があるものについては置換しました。**

`movies/blocks/movie.php` - メインのプラグインファイルに手動でこのファイルを含める必要があります。

<!-- 
```php
<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package movies
 */

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function movie_block_init() {
	$dir = dirname( __FILE__ );

	$block_js = 'movie/block.js';
	wp_register_script(
		'movie-block-editor',
		plugins_url( $block_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$block_js" )
	);

	$editor_css = 'movie/editor.css';
	wp_register_style(
		'movie-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'movie/style.css';
	wp_register_style(
		'movie-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'movies/movie', array(
		'editor_script' => 'movie-block-editor',
		'editor_style'  => 'movie-block-editor',
		'style'         => 'movie-block',
	) );
}
add_action( 'init', 'movie_block_init' );
```
 -->
```php
<?php
/**
 * Gutenberg ブロック用にクライアントサイドのアセット (スクリプトとスタイル) を登録する関数
 * 
 * @package movies
 */

/**
 * ブロックのすべてのアセットを登録し、Gutenberg を介して対応するコンテキスト内に
 * エンキューできるようにする
 *
 * @see https://ja.wordpress.org/team/handbook/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function movie_block_init() {
	$dir = dirname( __FILE__ );

	$block_js = 'movie/block.js';
	wp_register_script(
		'movie-block-editor',
		plugins_url( $block_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$block_js" )
	);

	$editor_css = 'movie/editor.css';
	wp_register_style(
		'movie-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'movie/style.css';
	wp_register_style(
		'movie-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'movies/movie', array(
		'editor_script' => 'movie-block-editor',
		'editor_style'  => 'movie-block-editor',
		'style'         => 'movie-block',
	) );
}
add_action( 'init', 'movie_block_init' );
```


`movies/blocks/movie/block.js`:
<!-- 
```js
( function( wp ) {
	/**
	 * Registers a new block provided a unique name and an object defining its behavior.
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-registration/
	 */
	var registerBlockType = wp.blocks.registerBlockType;
	/**
	 * Returns a new element of given type. Element is an abstraction layer atop React.
	 * @see https://developer.wordpress.org/block-editor/packages/packages-element/
	 */
	var el = wp.element.createElement;
	/**
	 * Retrieves the translation of text.
	 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
	 */
	var __ = wp.i18n.__;

	/**
	 * Every block starts by registering a new block type definition.
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-registration/
	 */
	registerBlockType( 'movies/movie', {
		/**
		 * This is the display title for your block, which can be translated with `i18n` functions.
		 * The block inserter will show this name.
		 */
		title: __( 'My movie block' ),

		/**
		 * Blocks are grouped into categories to help users browse and discover them.
		 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
		 */
		category: 'widgets',

		/**
		 * Optional block extended support features.
		 */
		supports: {
			// Removes support for an HTML mode.
			html: false,
		},

		/**
		 * The edit function describes the structure of your block in the context of the editor.
		 * This represents what the editor will render when the block is used.
		 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/
		 *
		 * @param {Object} [props] Properties passed from the editor.
		 * @return {Element}       Element to render.
		 */
		edit: function( props ) {
			return el(
				'p',
				{ className: props.className },
				__( 'Hello from the editor!' )
			);
		},

		/**
		 * The save function defines the way in which the different attributes should be combined
		 * into the final markup, which is then serialized by Gutenberg into `post_content`.
		 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
		 *
		 * @return {Element}       Element to render.
		 */
		save: function() {
			return el(
				'p',
				{},
				__( 'Hello from the saved content!' )
			);
		}
	} );
} )(
	window.wp
);
```
 -->
```js
( function( wp ) {
	/**
	 * 新しいブロックを登録。他と衝突しないユニークな名前、動作を定義するオブジェクトを指定する。
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-registration/
	 */
	var registerBlockType = wp.blocks.registerBlockType;
	/**
	 * 指定したタイプの新しい要素を返す。要素は React の上の抽象化レイヤー
	 * @see https://developer.wordpress.org/block-editor/packages/packages-element/
	 */
	var el = wp.element.createElement;
	/**
	 * テキストの翻訳を取得
	 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
	 */
	var __ = wp.i18n.__;

	/**
	 * すべてのブロックは新しいブロックタイプの定義を登録するところから始める
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-registration/
	 */
	registerBlockType( 'movies/movie', {
		/**
		 * ブロックの表示名。`i18n` 関数で翻訳できる。
		 * ブロックインサーターはこの名前を表示
		 */
		title: __( 'My movie block' ),

		/**
		 * ユーザーが見つけやすいよう、ブロックはカテゴリーにグループ分けされる。
		 * コアで提供するカテゴリーは `common`(一般ブロック)、`embed`(埋め込み)、
		 * `formatting`(フォーマット)、`layout`(レイアウト要素)、`widgets`(ウィジェット)
		 */
		category: 'widgets',

		/**
		 * オプションのブロック拡張サポート機能
		 */
		supports: {
			// HTML モードサポートの削除
			html: false,
		},

		/**
		 * edit 関数はエディターのコンテキストにおけるブロックの構造を記述する。
		 * ブロックが使用された際に、エディターが何をレンダリングするかを表す。
		 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/
		 *
		 * @param {Object} [props] エディターから渡されるプロパティ
		 * @return {Element}       レンダリングする要素
		 */
		edit: function( props ) {
			return el(
				'p',
				{ className: props.className },
				__( 'Hello from the editor!' )
			);
		},

		/**
		 * save 関数は異なる属性が最終的なマークアップにどのように組み合わせられるかを定義する。
		 * マークアップは Gutenberg により `post_content` にシリアライズされる。
		 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
		 *
		 * @return {Element}       レンダリングする要素
		 */
		save: function() {
			return el(
				'p',
				{},
				__( 'Hello from the saved content!' )
			);
		}
	} );
} )(
	window.wp
);
```

`movies/blocks/movie/editor.css`:
<!-- 
```css
/**
 * The following styles get applied inside the editor only.
 *
 * Replace them with your own styles or remove the file completely.
 */

.wp-block-movies-movie {
	border: 1px dotted #f00;
}
```
 -->
```css
/**
 * エディター内でのみ適用されるスタイル
 *
 * 以下のスタイルを置換するか、このファイル自体を削除する
 */

.wp-block-movies-movie {
	border: 1px dotted #f00;
}
```

`movies/blocks/movie/style.css`:
<!-- 
```css
/**
 * The following styles get applied both on the front of your site and in the editor.
 *
 * Replace them with your own styles or remove the file completely.
 */

.wp-block-movies-movie {
	background-color: #000;
	color: #fff;
	padding: 2px;
}
```
 -->
```css
/**
 * サイトのフロントエンド、またはエディターの両方に適用されるスタイル
 *
 * 以下のスタイルを置換するか、このファイル自体を削除する
 */

.wp-block-movies-movie {
	background-color: #000;
	color: #fff;
	padding: 2px;
}
```

<!-- 
#### Create a block inside the theme

It is also possible to scaffold the same `movie` block and include it into the existing theme, e.g. `simple-life`:
 -->
#### テーマ内部のブロックの作成

同じ `movie` ブロックのひな形を既存のテーマに対しても生成できます。`simple-life` テーマの場合、

```bash
$ wp scaffold block movie --theme=simple-life
 Success: Created block 'Movie block'.
```
<!-- 
#### Create a plugin and add two blocks

If you don't have an existing plugin you can create a new one and add two blocks with `WP-CLI` as follows:
 -->
#### プラグインと2つのブロックの作成

プラグインが存在しなければ新規に作成し、2つのブロックを生成することもできます。

<!-- 
```bash
# Create plugin called books
$ wp scaffold plugin books
# Add a block called book to plugin books
$ wp scaffold block book --title="Book" --plugin=books
# Add a second block to plugin called books.
$ wp scaffold block books --title="Book List" --plugin=books
```
 -->
```bash
# プラグイン books の作成
$ wp scaffold plugin books

# プラグイン books にブロック book を追加
$ wp scaffold block book --title="Book" --plugin=books

# プラグイン books に2番目のブロックを追加
$ wp scaffold block books --title="Book List" --plugin=books
```
