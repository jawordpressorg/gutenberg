<!-- 
# Code Implementation
 -->
# コードの実装
<!-- 
The basic block is in place, the next step is to add styles to the block. Feel free to style and adjust for your own preference, the main lesson is showing how to create and load external resources. For this example we're going to load the colorized gilbert font from [Type with Pride](https://www.typewithpride.com/).

Note: The color may not work with all browsers until they support the proper color font properly, but the font itself still loads and styles. See [colorfonts.wtf](https://www.colorfonts.wtf/) for browser support and details on color fonts.
 -->
基本的なブロックが作成できたので、次にスタイルを追加します。ここでは主に外部リソースの作成とロードを紹介しますが、好みで自由にスタイルを適用してください。まず [Type with Pride](https://www.typewithpride.com/) から色付きの gilbert カラーフォントをロードします。

注意: ブラウザーによってはカラーフォントを適切にサポートしておらず、すべてのブラウザーでカラーフォントが動作しないかもしれません。ただしフォント自体はロードされスタイルが当たっています。ブラウザーサポートとカラーフォントの詳細については [colorfonts.wtf](https://www.colorfonts.wtf/) を参照してください。

<!-- 
## Load Font File
 -->
## フォントファイルのロード

<!-- 
Download and extract the font from the Type with Pride site, and copy it in the `src` directory of your plugin naming it `gilbert-color.otf`. To load the font file, we need to add CSS using standard WordPress enqueue, [see Including CSS & JavaScript documentation](https://developer.wordpress.org/themes/basics/including-css-javascript/).

In the `gutenpride.php` file, the enqueue process is already setup from the generated script, so `index.css` and `style-index.css` files are loaded using:
 -->
Type with Pride のサイトからフォントをダウンロードし解凍し、プラグインの `src` ディレクトリに `gilbert-color.otf` という名前でコピーしてください。フォントファイルをロードするには WordPress 標準のエンキューを使用してフォントファイルをロードする必要があります。[Including CSS & JavaScript ドキュメント](https://developer.wordpress.org/themes/basics/including-css-javascript/) を参照してください。

`gutenpride.php` ファイルにはすでに生成されたスクリプトからのエンキュープロセスが設定されています。以下のコードで `index.css` ファイルと `style-index.css` ファイルがロードされます。


```php
function create_block_gutenpride_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'create_block_gutenpride_block_init' );
```

<!-- 
This function checks the `block.json` file for js and css files, and will pass them on to [enqueue](https://developer.wordpress.org/themes/basics/including-css-javascript/) these files, so they are loaded on the appropriate pages.
 -->
この関数は `block.json` ファイルをチェックし、JavaScript や CSS ファイルが適切なページでロードされるよう [enqueue](https://developer.wordpress.org/themes/basics/including-css-javascript/) に渡します。

<!-- 
The `build/index.css` is compiled from `src/editor.scss` and loads only within the editor, and after the `style-index.css`.
 -->
`build/index.css` は、`src/editor.scss` からコンパイルされ、エディター内でのみ `style-index.css` 後にロードします。

<!-- 
The `build/style-index.css` is compiled from `src/style.scss` and loads in both the editor and front-end — published post view.
 -->
`build/style-index.css` は `src/style.scss` からコンパイルされ、エディターと、公開された投稿のビューであるフロントエンドの両方にロードします。

<!-- 
## Add CSS Style for Block
 -->
## ブロックへの CSS スタイルの追加

<!-- 
We only need to add the style to `build/style-index.css` since it will show while editing and viewing the post. Edit the `src/style.scss` to add the following.

Note: the block classname is prefixed with `wp-block`. The `create-block/gutenpride` is converted to the classname `.wp-block-create-block-gutenpride`.
 -->
`build/style-index.css` にのみスタイルを追加すれば十分です。なぜなら、編集中にも、投稿の表示中にも表示するためです。`src/style.scss` を編集し、以下のコードを追加してください。

注意: ブロックのクラス名には接頭辞 `wp-block` が付きます。`create-block/gutenpride` はクラス名 `.wp-block-create-block-gutenpride` に変換されます。

```scss
@font-face {
	font-family: Gilbert;
	src: url( gilbert-color.otf );
	font-weight: bold;
}

.wp-block-create-block-gutenpride {
	font-family: Gilbert;
	font-size: 64px;
}
```

<!-- 
After updating, rebuild the block using `npm run build` then reload the post and refresh the browser. If you are using a browser that supports color fonts (Firefox) then you will see it styled.
 -->
更新後、`npm run build` を使用してブロックをリビルドし、投稿をリロードし、ブラウザーを更新してください。Firefox などのカラーフォントをサポートするブラウザーを使用するとスタイルが当たったことが分かります。

<!-- 
Next Section: [Authoring Experience](/docs/getting-started/tutorials/create-block/author-experience.md)
 -->
次のセクション: [執筆エクスペリエンス](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/author-experience/)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/tutorials/create-block/block-code.md)
