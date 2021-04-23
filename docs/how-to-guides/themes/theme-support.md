<!--
# Theme Support
 -->
# テーマサポート

<!--
The new Blocks include baseline support in all themes, enhancements to opt-in to and the ability to extend and customize.

There are a few new concepts to consider when building themes:
 -->
新しいブロックにはすべてのテーマで有効な基本サポートやオプトイン可能なオプションがあり拡張やカスタマイズが可能です。

テーマを構築する際は、以下の新しいコンセプトを検討してください。

<!--
-   **Editor Color Palette** - A default set of colors is provided, but themes can register their own and optionally lock users into picking from the defined palette.
-   **Editor Text Size Palette** - A default set of sizes is provided, but themes can register their own and optionally lock users into picking from preselected sizes.
-   **Responsive Embeds** - Themes must opt-in to responsive embeds.
-   **Frontend & Editor Styles** - To get the most out of blocks, theme authors will want to make sure Core styles look good and opt-in, or write their own styles to best fit their theme.
-   **Block Tools** - Themes can opt-in to several block tools like line height, custom units.
-   **Core Block Patterns** - Themes can opt-out of the default block patterns.
 -->
- **エディターカラーパレット** - 色のデフォルトセットを提供します。ただしテーマは独自の色を登録したり、オブションでユーザーに定義したパレットからのみ色を選択するよう強制できます。
- **エディターテキストサイズパレット** - テキストサイズのデフォルトセットを提供します。ただしテーマは独自のテキストサイズを登録したり、オブションでユーザーに設定されたサイズからのみ選択するよう強制できます。
- **レスポンシブな埋め込みコンテンツ** - テーマが埋め込みコンテンツをレスポンシブ化するにはオプトインしなければなりません。
- **フロントエンドとエディターのスタイル** - ブロックのスタイルを最大限活かすには、テーマ作者はコアのスタイルが適切であることを確認してオプトインするか、テーマに合う独自のスタイルを記述します。
- **ブロックツール** - テーマは「行の高さ」や「カスタムユニット」などいくつかのブロックツールをオプトインできます。
- **コアのブロックパターン** - テーマはデフォルトのブロックパターンをオプトアウトできます。

<!--
By default, blocks provide their styles to enable basic support for blocks in themes without any change. They also [provide opt-in opinionated styles](#default-block-styles). Themes can add/override these styles, or they can provide no styles at all, and rely fully on what the blocks provide.
 -->
デフォルトでブロックはそのまま使える基本的なスタイルを提供します。また、以下で説明するようなオプトインで有効化するスタイルも提供します。テーマはこれらのスタイルを追加したり上書きできます。逆にテーマではまったくスタイルを提供せず、ブロックが提供するスタイルに完全に依存することもできます。

<!--
Some advanced block features require opt-in support in the theme itself as it's difficult for the block to provide these styles, they may require some architecting of the theme itself, in order to work well.
 -->
いくつかの高度なブロック機能はテーマによるオプトインのサポートが必要です。これはブロックからのスタイルの提供が容易ではなく、正しく動作するにはテーマの構造の理解が必要なためです。

<!--
To opt-in for one of these features, call `add_theme_support` in the `functions.php` file of the theme. For example:
 -->
これらの機能をオプトインするには以下の例のように、テーマの `functions.php` ファイルで `add_theme_support` を呼び出します。

```php
function mytheme_setup_theme_supported_features() {
	add_theme_support( 'editor-color-palette', array(
		array(
			'name' => esc_attr__( 'strong magenta', 'themeLangDomain' ),
			'slug' => 'strong-magenta',
			'color' => '#a156b4',
		),
		array(
			'name' => esc_attr__( 'light grayish magenta', 'themeLangDomain' ),
			'slug' => 'light-grayish-magenta',
			'color' => '#d0a5db',
		),
		array(
			'name' => esc_attr__( 'very light gray', 'themeLangDomain' ),
			'slug' => 'very-light-gray',
			'color' => '#eee',
		),
		array(
			'name' => esc_attr__( 'very dark gray', 'themeLangDomain' ),
			'slug' => 'very-dark-gray',
			'color' => '#444',
		),
	) );
}

add_action( 'after_setup_theme', 'mytheme_setup_theme_supported_features' );
```
<!--
## Opt-in features
 -->
## オプトイン機能

<!--
## Default block styles
 -->
## デフォルトのブロックスタイル

<!--
Core blocks include default structural styles. These are loaded in both the editor and the front end by default. An example of these styles is the CSS that powers the columns block. Without these rules, the block would result in a broken layout containing no columns at all.
 -->
コアブロックにはデフォルトの構造化スタイルが含まれていてエディター、フロントエンドの両方でロードされます。このスタイルの例は「カラム」ブロックで利用されている CSS です。このルールがなければブロックはまったくカラムを含まない壊れたレイアウトになります。

 <!--
The block editor allows themes to opt-in to slightly more opinionated styles for the front end. An example of these styles is the default color bar to the left of blockquotes. If you'd like to use these opinionated styles in your theme, add theme support for `wp-block-styles`:
 -->
ブロックエディターでテーマはフロントエンドに拡張したスタイルをオプトインできます。このスタイルの例は「引用」ブロックの左側のデフォルトのカラーバーです。テーマでこのスタイルを使用する場合はテーマサポートに `wp-block-styles` を追加します。

```php
add_theme_support( 'wp-block-styles' );
```

<!--
You can see the CSS that will be included in the [block library theme file](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/theme.scss).
 -->
[ブロックライブラリーテーマファイル](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/theme.scss)内で、含まれる CSS を参照できます。

<!--
### Wide Alignment:
 -->
### 幅広の配置
<!--
Some blocks such as the image block have the possibility to define a "wide" or "full" alignment by adding the corresponding classname to the block's wrapper ( `alignwide` or `alignfull` ). A theme can opt-in for this feature by calling:
 -->
「画像」ブロックやいくつかのブロックには「幅広 (wide)」や「全幅 (full)」を定義する機能があり、ブロックのラッパーに対応するクラス名を追加します (`alignwide` や `alignfull`)。テーマは以下のようにオプトインします。

```php
add_theme_support( 'align-wide' );
```
<!--
For more information about this function, see [the developer docs on `add_theme_support()`](https://developer.wordpress.org/reference/functions/add_theme_support/).
 -->
この関数の詳細については [`add_theme_support()` の開発者ドキュメント](https://developer.wordpress.org/reference/functions/add_theme_support/) を参照してください。

<!--
### Wide Alignments and Floats
 -->
### 幅広の配置とフロート

<!--
It can be difficult to create a responsive layout that accommodates wide images, a sidebar, a centered column, and floated elements that stay within that centered column.

The block editor adds additional markup to floated images to make styling them easier.

Here's the markup for an `Image` with a caption:
 -->
幅広な画像、サイドバー、中央揃えのカラム、中央揃えのカラム内でフロートする要素等々、レスポンシブなレイアウト作成は困難です。

ブロックエディターはフロートした画像に追加マークアップを付加してスタイリングを容易にします。

キャプション付きの `Image` のマークアップを示します。

```html
<figure class="wp-block-image">
	<img src="..." alt="" width="200px" />
	<figcaption>Short image caption.</figcaption>
</figure>
```
<!--
Here's the markup for a left-floated image:
 -->
左にフロートする画像のマークアップを示します。

```html
<div class="wp-block-image">
	<figure class="alignleft">
		<img src="..." alt="" width="200px" />
		<figcaption>Short image caption.</figcaption>
	</figure>
</div>
```
<!--
Here's an example [codepen](https://codepen.io/joen/pen/zLWvrW) using the above markup to achieve a responsive layout that features a sidebar, wide images, and floated elements with bounded captions.
 -->
[codepen](https://codepen.io/joen/pen/zLWvrW) にマークアップを使用した例があります。レスポンシブなレイアウトでサイドバー、幅広の画像、キャプション付きのフロートする要素ががあります。

<!--
### Block Color Palettes
 -->
### ブロックカラーパレット

<!--
Different blocks have the possibility of customizing colors. The block editor provides a default palette, but a theme can overwrite it and provide its own:
 -->
異なるブロックはそれぞれで色をカスタマイズしている可能性があります。ブロックエディターはデフォルトのパレットを提供しますが、テーマはこれを上書きして独自のパレットを提供できます。

```php
add_theme_support( 'editor-color-palette', array(
	array(
		'name' => esc_attr__( 'strong magenta', 'themeLangDomain' ),
		'slug' => 'strong-magenta',
		'color' => '#a156b4',
	),
	array(
		'name' => esc_attr__( 'light grayish magenta', 'themeLangDomain' ),
		'slug' => 'light-grayish-magenta',
		'color' => '#d0a5db',
	),
	array(
		'name' => esc_attr__( 'very light gray', 'themeLangDomain' ),
		'slug' => 'very-light-gray',
		'color' => '#eee',
	),
	array(
		'name' => esc_attr__( 'very dark gray', 'themeLangDomain' ),
		'slug' => 'very-dark-gray',
		'color' => '#444',
	),
) );
```
<!--
`name` is a human-readable label (demonstrated above) that appears in the tooltip and provides a meaningful description of the color to users. It is especially important for those who rely on screen readers or would otherwise have difficulty perceiving the color. `slug` is a unique identifier for the color and is used to generate the CSS classes used by the block editor color palette. `color` is the hexadecimal code to specify the color.
 -->
`name` は上の例のようなラベルです。ツールチップに表示され、ユーザーに意味のある説明を伝えます。スクリーンリーダーを使用するユーザーには特に重要で、説明が不十分であれば色の認識が困難になります。`slug` は色の一意の識別子です。ブロックエディターのカラーパレットで使われる CSS クラスの生成で使用されます。`color` は色を指定する16進コードです。

<!--
Some colors change dynamically — such as "Primary" and "Secondary" color — such as in the Twenty Nineteen theme and cannot be described programmatically. In spite of that, it is still advisable to provide meaningful `name`s for at least the default values when applicable.
 -->
Twenty Nineteen テーマのメインカラーやサブカラーのように動的に変わる色もあり、これらの色はプログラム的に記述できません。その場合でも必要な際のデフォルト値として意味のあるテキストを `name` に設定することを推奨します。

<!--
The colors will be shown in order on the palette, and there's no limit to how many can be specified.

Themes are responsible for creating the classes that apply the colors in different contexts. Core blocks use "color" and "background-color" contexts. So to correctly apply "strong magenta" to all contexts of core blocks a theme should implement the following classes:
 -->
色はパレット上に順番に表示され、指定可能な数に制限はありません。

テーマにはコンテキストに応じて色に適用するクラスを作成する責任があります。コアブロックは「color」コンテキストと「background-color」コンテキストを使用します。コアブロックのすべてのコンテキストで正しく「strong magenta」を適用するにはテーマは次のクラスを実装する必要があります。

```css
.has-strong-magenta-background-color {
	background-color: #313131;
}

.has-strong-magenta-color {
	color: #f78da7;
}
```
<!--
The class name is built appending 'has-', followed by the class name _using_ kebab case and ending with the context name.
 -->
クラス名は、最初に「has-」、続けてケバブケースを使用したクラス名、最後にコンテキスト名で作成します。

<!--
### Block Gradient Presets
 -->
### ブロックグラデーションのプリセット
<!--
Different blocks have the possibility of selecting from a list of predefined gradients. The block editor provides a default gradient presets, but a theme can overwrite them and provide its own:
 -->
異なるブロックはそれぞれ事前に定義されたグラデーションを選択している可能性があります。ブロックエディターはデフォルトのグラデーションのプリセットを提供しますが、テーマはこれを上書きし独自のグラデーションを提供できます。

```php
add_theme_support(
	'editor-gradient-presets',
	array(
		array(
			'name'     => esc_attr__( 'Vivid cyan blue to vivid purple', 'themeLangDomain' ),
			'gradient' => 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
			'slug'     => 'vivid-cyan-blue-to-vivid-purple'
		),
		array(
			'name'     => esc_attr__( 'Vivid green cyan to vivid cyan blue', 'themeLangDomain' ),
			'gradient' => 'linear-gradient(135deg,rgba(0,208,132,1) 0%,rgba(6,147,227,1) 100%)',
			'slug'     =>  'vivid-green-cyan-to-vivid-cyan-blue',
		),
		array(
			'name'     => esc_attr__( 'Light green cyan to vivid green cyan', 'themeLangDomain' ),
			'gradient' => 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
			'slug'     => 'light-green-cyan-to-vivid-green-cyan',
		),
		array(
			'name'     => esc_attr__( 'Luminous vivid amber to luminous vivid orange', 'themeLangDomain' ),
			'gradient' => 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
			'slug'     => 'luminous-vivid-amber-to-luminous-vivid-orange',
		),
		array(
			'name'     => esc_attr__( 'Luminous vivid orange to vivid red', 'themeLangDomain' ),
			'gradient' => 'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
			'slug'     => 'luminous-vivid-orange-to-vivid-red',
		),
	)
);
```
<!--
`name` is a human-readable label (demonstrated above) that appears in the tooltip and provides a meaningful description of the gradient to users. It is especially important for those who rely on screen readers or would otherwise have difficulty perceiving the color. `gradient` is a CSS value of a gradient applied to a background-image of the block. Details of valid gradient types can be found in the [mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients). `slug` is a unique identifier for the gradient and is used to generate the CSS classes used by the block editor.
 -->
`name` は上の例のようなラベルです。ツールチップに表示され、ユーザーに意味のある説明を伝えます。スクリーンリーダーを使用するユーザーには特に重要で、説明が不十分であればグラデーションの認識が困難になります。`gradient` はブロックの背景色に適用されるグラデーションの CSS 値です。有効なグラデーションタイプの詳細については [mozilla のドキュメント](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients) を参照してください。`slug` はグラデーションの一意の識別子です。ブロックエディターで使われる CSS クラスの生成で使用されます。

<!--
Themes are responsible for creating the classes that apply the gradients. So to correctly apply "Vivid cyan blue to vivid purple" a theme should implement the following class:
 -->
テーマにはグラデーションに適用するクラスを作成する責任があります。正しく「Vivid cyan blue to vivid purple」を適用するには、テーマは次のクラスを実装する必要があります。

```css
.has-vivid-cyan-blue-to-vivid-purple-gradient-background {
	background: linear-gradient(
		135deg,
		rgba( 6, 147, 227, 1 ) 0%,
		rgb( 155, 81, 224 ) 100%
	);
}
```

<!--
### Block Font Sizes:
 -->
### ブロックフォントサイズ:

<!--
Blocks may allow the user to configure the font sizes they use, e.g., the paragraph block. The block provides a default set of font sizes, but a theme can overwrite it and provide its own:
 -->
「段落」ブロックのように、ユーザーはブロックで使用するフォントのサイズを構成できます。ブロックはでフォントサイズのデフォルトセットを提供しますが、テーマはこれを上書きし独自のセットを提供できます。

```php
add_theme_support( 'editor-font-sizes', array(
	array(
		'name' => esc_attr__( 'Small', 'themeLangDomain' ),
		'size' => 12,
		'slug' => 'small'
	),
	array(
		'name' => esc_attr__( 'Regular', 'themeLangDomain' ),
		'size' => 16,
		'slug' => 'regular'
	),
	array(
		'name' => esc_attr__( 'Large', 'themeLangDomain' ),
		'size' => 36,
		'slug' => 'large'
	),
	array(
		'name' => esc_attr__( 'Huge', 'themeLangDomain' ),
		'size' => 50,
		'slug' => 'huge'
	)
) );
```
<!--
The font sizes are rendered on the font size picker in the order themes provide them.

Themes are responsible for creating the classes that apply the correct font size styles.
The class name is built appending 'has-', followed by the font size name _using_ kebab case and ending with `-font-size`.

As an example for the regular font size, a theme may provide the following class.
 -->
フォントサイズはテーマが提供した順番でフォントサイズピッカー上にレンダリングされます。

テーマには正しいフォントサイズスタイルに適用するクラスを作成する責任があります。クラス名は、最初に「has-」、続けてケバブケースを使用したフォントサイズ名、最後に `-font-size` で作成します。

たとえば標準のフォントサイズであれば、テーマは次のクラスを提供します。

```css
.has-regular-font-size {
	font-size: 16px;
}
```
<!--
**Note:** The slugs `default` and `custom` are reserved and cannot be used by themes.
 -->
**注意:** スラッグ `default` と `custom` は予約済みのため、テーマでは使えません。
<!--
### Disabling custom font sizes
 -->
### カスタムフォントサイズの無効化
<!--
Themes can disable the ability to set custom font sizes with the following code:
 -->
テーマはカスタムフォントサイズの設定を無効化できます。

```php
add_theme_support( 'disable-custom-font-sizes' );
```
<!--
When set, users will be restricted to the default sizes provided in the block editor or the sizes provided via the `editor-font-sizes` theme support setting.
 -->
無効化するとユーザーはブロックエディターで提供されるデフォルトのサイズ、またはテーマサポート設定 `editor-font-sizes` で提供されたサイズに制限されます。

<!--
### Disabling custom colors in block Color Palettes
 -->
### ブロックカラーパレットでのカスタム色の無効化

<!--
By default, the color palette offered to blocks allows the user to select a custom color different from the editor or theme default colors.

Themes can disable this feature using:
 -->
デフォルトでブロックのユーザーは、カラーパレットを使用してエディターやテーマのデフォルトの色と異なるカスタム色を選択できます。

テーマはこの機能を無効化できます。

```php
add_theme_support( 'disable-custom-colors' );
```
<!--
This flag will make sure users are only able to choose colors from the `editor-color-palette` the theme provided or from the editor default colors if the theme did not provide one.
 -->
無効化するとユーザーは、テーマが提供した `editor-color-palette`、またはテーマが提供していなければエディターのデフォルト色からのみ色を選択できます。

<!--
### Disabling custom gradients
 -->
### カスタムグラデーションの無効化
<!--
Themes can disable the ability to set a custom gradient with the following code:
 -->
テーマはカスタムグラデーションの設定を無効化できます。

```php
add_theme_support( 'disable-custom-gradients' );
```
<!--
When set, users will be restricted to the default gradients provided in the block editor or the gradients provided via the `editor-gradient-presets` theme support setting.
 -->
無効化するとユーザーは、ブロックエディターで提供されるデフォルトのグラデーション、またはテーマサポート設定 `editor-gradient-presets` で提供されたグラデーションに制限されます。

<!--
### Supporting custom line heights
 -->
### カスタムの行の高さのサポート
<!--
Some blocks like paragraph and headings support customizing the line height. Themes can enable support for this feature with the following code:
 -->
「段落」や「見出し」などいくつかのブロックは行の高さのカスタマイズをサポートします。テーマはこの機能のサポートを有効化できます。

```php
add_theme_support( 'custom-line-height' );
```
<!--
### Support custom units
 -->
### カスタムユニットのサポート
<!--
In addition to pixels, users can use other units to define sizes, paddings... The available units are: px, em, rem, vh, vw. Themes can disable support for this feature with the following code:
 -->
ユーザーはピクセルに加えて、サイズやパディングなどを定義する他の単位を使用できます。利用可能な単位は px、em、rem、vh、vw です。テーマはこの機能のサポートを無効化できます。

```php
add_theme_support( 'custom-units', array() );
```
<!--
Themes can also filter the available custom units.
 -->
テーマはまた利用可能なカスタムユニットを選択できます。

```php
add_theme_support( 'custom-units', 'rem', 'em' );
```
<!--
### Disabling the default block patterns.
 -->
### デフォルトのブロックパターンの無効化
<!--
WordPress comes with a number of block patterns built-in, themes can opt-out of the bundled patterns and provide their own set using the following code:
 -->
WordPress には多くの組み込みブロックパターンが付属します。テーマは同梱のパターンをオプトアウトし、独自のセットを提供できます。

```php
remove_theme_support( 'core-block-patterns' );
```
<!--
## Editor styles
 -->
## エディタースタイル
<!--
The block editor supports the theme's [editor styles](https://codex.wordpress.org/Editor_Style), however it works a little differently than in the classic editor.
 -->
ブロックエディターはテーマの [エディタースタイル](https://codex.wordpress.org/Editor_Style) をサポートしますが、クラシックエディターとは少し異なって動作します。
<!--
In the classic editor, the editor stylesheet is loaded directly into the iframe of the WYSIWYG editor, with no changes. The block editor, however, doesn't use iframes. To make sure your styles are applied only to the content of the editor, we automatically transform your editor styles by selectively rewriting or adjusting certain CSS selectors. This also allows the block editor to leverage your editor style in block variation previews.
 -->
クラシックエディターではエディタースタイルは WYSIWYG エディターの iframe に直接、変更なしでロードされていました。しかしブロックエディターは iframe を使用しません。このためブロックエディターではスタイルがエディターのコンテンツだけに適用されるよう、エディタースタイルを選択的に書き換えるか、一部の CSS セレクターを調整して自動的に変換します。またこの動作によりブロックエディターはエディタースタイルでブロックのバリエーションをプレビューできます。

<!--
For example, if you write `body { ... }` in your editor style, this is rewritten to `.editor-styles-wrapper { ... }`. This also means that you should _not_ target any of the editor class names directly.

Because it works a little differently, you need to opt-in to this by adding an extra snippet to your theme, in addition to the add_editor_style function:
 -->
たとえばエディタースタイル内の `body { ... }` は `.editor-styles-wrapper { ... }` に書き換えられます。ちなみにこのことはエディターのクラス名を直接 _指定すべきでない_ ことも意味しています。

この動作は少し変わっているため、テーマには add_editor_style に加えて追加のオプトインが必要です。

```php
add_theme_support( 'editor-styles' );
```
<!--
You shouldn't need to change your editor styles too much; most themes can add the snippet above and get similar results in the classic editor and inside the block editor.
 -->
エディタースタイルの多くを変更する必要はありません。ほとんどのテーマは上のコードを追加することでクラシックエディターでもブロックエディターでも同じ結果を得られます。

<!--
### Enqueuing the editor style
 -->
### エディタースタイルのエンキュー
<!--
Use the `add_editor_style` function to enqueue and load CSS on the editor screen. For the classic editor, this was the only function needed to add style to the editor. For the new block editor, you first need to `add_theme_support( 'editor-styles');` mentioned above.
 -->
エディター画面に CSS をエンキューしロードするには `add_editor_style` 関数を使用してください。クラシックエディターではこの関数のみでエディターにスタイルを追加できました。新しいブロックエディターでは上で説明したようにまず `add_theme_support( 'editor-styles');` が必要です。

```php
add_editor_style( 'style-editor.css' );
```
<!--
Adding that to your `functions.php` file will add the stylesheet `style-editor.css` to the queue of stylesheets to be loaded in the editor.
 -->
`functions.php` ファイルに上の行を追加すると、エディター内にロードされるスタイルシートのキューにスタイルシート `style-editor.css` が追加されます。

<!--
### Basic colors
 -->
### 基本の色
<!--
You can style the editor like any other webpage. Here's how to change the background color and the font color to blue:
 -->
他の Web ページのようにエディターをスタイルできます。次のコードは背景色とフォントの色を青に変更します。

<!--
```css
/* Add this to your `style-editor.css` file */
body {
	background-color: #d3ebf3;
	color: #00005d;
}
```
 -->
```css
/* `style-editor.css` ファイルに追加する */
body {
	background-color: #d3ebf3;
	color: #00005d;
}
```

<!--
### Changing the width of the editor
 -->
### エディターの幅の変更
<!--
To change the main column width of the editor, add the following CSS to `style-editor.css`:
 -->
エディターのメインのカラムの幅を変更するには `style-editor.css` に次の CSS を追加します。

<!--
```css
/* Main column width */
.wp-block {
	max-width: 720px;
}

/* Width of "wide" blocks */
.wp-block[data-align='wide'] {
	max-width: 1080px;
}

/* Width of "full-wide" blocks */
.wp-block[data-align='full'] {
	max-width: none;
}
```
 -->
```css
/* メインのカラム幅 */
.wp-block {
	max-width: 720px;
}

/* 「幅広」ブロックの幅 */
.wp-block[data-align="wide"] {
	max-width: 1080px;
}

/* 「全幅」ブロックの幅 */
.wp-block[data-align="full"] {
	max-width: none;
}
```

<!--
You can use those editor widths to match those in your theme. You can use any CSS width unit, including `%` or `px`.

Further reading: [Applying Styles with Stylesheets](/docs/how-to-guides/block-tutorial/applying-styles-with-stylesheets.md).
 -->
テーマと合わせるためにこれらのエディターの幅を使用できます。`%` や `px` を含む任意の CSS 幅の単位を使用できます。

[スタイルシートでのスタイルの適用](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/applying-styles-with-stylesheets/) も参照してください。
<!--
## Responsive embedded content
 -->
## 埋め込みコンテンツのレスポンシブ化
<!--
The embed blocks automatically apply styles to embedded content to reflect the aspect ratio of content that is embedded in an iFrame. A block styled with the aspect ratio responsive styles would look like:
 -->
「埋め込み」ブロックは、iFrame 内に埋め込まれたコンテンツのアスペクト比を反映するため、自動的に埋め込みコンテンツに対してスタイルを適用します。アスペクト比にレスポンシブな形でのブロックスタイルは次のようになります。

```html
<figure class="wp-embed-aspect-16-9 wp-has-aspect-ratio">...</figure>
```
<!--
To make the content resize and keep its aspect ratio, the `<body>` element needs the `wp-embed-responsive` class. This is not set by default, and requires the theme to opt in to the `responsive-embeds` feature:
 -->
アスペクト比を保ったままコンテンツをリサイズするには `<body>` 要素に `wp-embed-responsive` クラスが必要です。デフォルトでは設定されないため、テーマは `responsive-embeds` 機能をオプトインする必要があります。

```php
add_theme_support( 'responsive-embeds' );
```
<!--
## Spacing control
 -->
##  スペースの制御
<!--
Using the Gutenberg plugin (version 8.3 or later), some blocks can provide padding controls in the editor for users. This is off by default, and requires the theme to opt in by declaring support:
 -->
いくつかのブロックはパディングの制御を持つことができます。この機能は標準で無効のため、テーマはサポートを宣言してオプトインする必要があります。

Some blocks can have padding controls. This is off by default, and requires the theme to opt in by declaring support:

```php
add_theme_support('custom-spacing');
```
<!--
## Experimental — Link color control
 -->
## 実験中の機能 - リンク色の制御
<!--
Using the Gutenberg plugin (version 8.3 or later), link color control is available to the Paragraph, Heading, Group, Columns, and Media & Text blocks. This is off by default, and requires the theme to opt in by declaring support:
 -->
Gutenberg プラグイン Version 8.3 以上を使用すると、「段落」「見出し」「グループ」「カラム」「メディアとテキスト」ブロックのリンク色を制御できます。デフォルトでは無効のため、テーマはサポートを宣言してオプトインする必要があります。

```php
add_theme_support('experimental-link-color');
```
<!--
If a theme opts in, it should [define default link colors](https://developer.wordpress.org/block-editor/developers/themes/theme-json/#color-properties) in `experimental-theme.json` (or in its theme styles if no `experimental-theme.json` is present). For example:
 -->
オプトインする場合、テーマは `experimental-theme.json` 内に、なければテーマスタイル内に [デフォルトのリンク色を定義する](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-json/#color-properties) 必要があります。

```css
{
    "global": {
        "styles": {
            "color": {
                "link": "hotpink"
            }
        }
    }
}
```
<!--
If the theme styles the link color in its stylesheets (editor and front-end), it should ensure it maps to the `--wp--style--color--link` CSS variable:
 -->
テーマがエディター、フロントエンドの両方のスタイルシートでリンクの色をスタイリングする場合、`--wp--style--color--link` CSS 変数にマップしてください。

```css
a {
	color: var( --wp--style--color--link );
}
```

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/themes/theme-support.md)
