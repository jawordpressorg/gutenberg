<!-- 
# Code Implementation
 -->
# コードの実装
<!-- 
The basic block is in place, the next step is to add styles to the block. Feel free to style and adjust for your own preference, the main lesson is showing how to create and load external resources. For this example we're going to load the colorized gilbert font from [Type with Pride](https://www.typewithpride.com/).

Note: The color may not work with all browsers until they support the proper color font properly, but the font itself still loads and styles. See [colorfonts.wtf](https://www.colorfonts.wtf/) for browser support and details on color fonts.
 -->
基本的なブロックが作成できたので、次にスタイルを追加します。ここでは主に外部リソースの作成とロードを紹介しますが、好みで自由にスタイルを適用できます。まず [Type with Pride](https://www.typewithpride.com/) から色付きの gilbert カラーフォントをロードします。

注意: ブラウザーによってはカラーフォントを適切にサポートしておらず、すべてのブラウザーでカラーフォントが動作しないかもしれません。ただしフォント自体はロードされスタイルが当たっています。ブラウザーサポートとカラーフォントの詳細については [colorfonts.wtf](https://www.colorfonts.wtf/) を参照してください。

<!-- 
## Load Font File
 -->
## フォントファイルのロード
<!-- 
Download and extract the font from the Type with Pride site, and copy it to your plugin directory naming it `gilbert-color.otf`. To load the font file, we need to add CSS using standard WordPress enqueue, [see Including CSS & JavaScript documentation](https://developer.wordpress.org/themes/basics/including-css-javascript/).

In the `gutenpride.php` file, the enqueue process is already setup from the generated script, so `editor.css` and `style.css` files are loaded using:
 -->
Type with Pride のサイトからフォントをダウンロードし解凍し、プラグインのディレクトリに `gilbert-color.otf` という名前でコピーしてください。フォントファイルをロードするには WordPress 標準のエンキューを使用してフォントファイルをロードする必要があります。[Including CSS & JavaScript ドキュメント](https://developer.wordpress.org/themes/basics/including-css-javascript/) を参照してください。

`gutenpride.php` ファイルにはすでに生成されたスクリプトからのエンキュープロセスが設定されています。以下のコードで `editor.css` ファイルと `style.css` ファイルがロードされます。

```php
register_block_type( 'create-block/gutenpride', array(
	'apiVersion' => 2,
    'editor_script' => 'create-block-gutenpride-block-editor',
    'editor_style'  => 'create-block-gutenpride-block-editor',
    'style'         => 'create-block-gutenpride-block',
) );
```
<!-- 
The `editor_style` and `style` parameters refer to the files that match the handles in the `wp_register_style` functions.

Note: the `editor_style` loads only within the editor, and after the `style`. The `style` CSS loads in both the editor and front-end — published post view.
 -->
`editor_style` と `style` パラメータは `wp_register_style` 関数のハンドルにマッチするファイルを参照します。

注意: `editor_style` は、`style` のあとに、エディター内でのみロードされます。`style` CSS はエディターとフロントエンドの両方でロードされます。ここでフロントエンドとは公開された投稿の表示画面を指します。
<!-- 
## Add CSS Style for Block
 -->
## ブロックへの CSS スタイルの追加
<!-- 
We only need to add the style to `style.css` since it will show while editing and viewing the post. Edit the style.css to add the following.

Note: the block classname is prefixed with `wp-block`. The `create-block/gutenpride` is converted to the classname `.wp-block-create-block-gutenpride`.
 -->
`style.css` は編集中にも、投稿の表示中にも使用されるため、こちらにのみスタイルを追加します。style.css を編集し以下のコードを追加してください。

注意: ブロックのクラス名には接頭辞 `wp-block` が付きます。`create-block/gutenpride` はクラス名 `.wp-block-create-block-gutenpride` に変換されます。

```css
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
After updating, reload the post and refresh the browser. If you are using a browser that supports color fonts (Firefox) then you will see it styled.
 -->
更新後、投稿をリロードしブラウザーを更新してください。Firefox などのカラーフォントをサポートするブラウザーを使用するとスタイルが当たったことが分かります。
<!-- 
## Use Sass for Style (optional)
 -->
## Sass を使用したスタイル (オプション)
<!-- 
The wp-scripts package provides support for using the Sass/Scss languages, to generate CSS, added in @wordpress/scripts v9.1.0. See the [Sass language site](https://sass-lang.com/) to learn more about Sass.

To use Sass, you need to import a `editor.scss` or `style.scss` in the `index.js` JavaScript file and it will build and output the generated file in the build directory. Note: You need to update the enqueing functions in PHP to load from the correct location.

Add the following imports to **index.js**:
 -->
wp-scripts パッケージは CSS 生成のために Sass/Scss 言語サポートを提供します。@wordpress/scripts v9.1.0 で追加されました。Sass についての詳細は [Sass language サイト](https://sass-lang.com/) を参照してください。

Sass を使用するには `index.js` JavaScript ファイルで `editor.scss` または `style.scss` をインポートする必要があります。ビルドで生成されたファイルは build ディレクトリーに出力されます。注意: PHP のエンキュー関数を更新して正しい場所からロードする必要があります。

**index.js** に次のインポートを追加してください。

```js
import '../editor.scss';

import Edit from './edit';
import save from './save';
```
<!-- 
Update **gutenpride.php** to enqueue from generated file location:
 -->
**gutenpride.php** を更新して生成したファイルの場所からエンキューしてください。

```php
$editor_css = "build/index.css";
```
<!-- 
Next Section: [Authoring Experience](/docs/getting-started/tutorials/create-block/author-experience.md)
 -->
次のセクション: [執筆エクスペリエンス](https://ja.wordpress.org/team/handbook/block-editor/handbook/tutorials/create-block/author-experience/)

[原文](https://github.com/WordPress/gutenberg/blob/HEAD/docs/getting-started/tutorials/create-block/block-code.md)
