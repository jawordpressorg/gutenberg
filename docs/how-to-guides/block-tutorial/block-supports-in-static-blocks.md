<!-- 
# Block Supports
 -->
# ブロックサポート

<!-- 
A lot of blocks, including core blocks, offer similar customization options. Whether that is to change the background color, text color, or to add padding, margin customization options...
 -->
コアブロックを含む多くのブロックには、同じようなカスタマイズオプションがあります。たとえば背景色の変更、文字色の変更、パディングの追加、マージンのカスタマイズオプション等々。

<!-- 
To avoid duplicating the same logic over and over in your blocks and to align the behavior of your block with core blocks, you can make use of the different `supports` properties.
 -->
ブロックの中で同じロジックを何度も何度も繰り返すのを避け、ブロックの動作をコアブロックに合わせるには、さまざまな `supports` プロパティを利用できます。

<!-- 
Let's take the block we wrote in the previous chapter (example 3) and with just a single line of code, add support for text, link and background color customizations.
 -->
[前の章](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields/) (例3) で作成したブロックを、たった1行のコードで、テキスト、リンク、背景色のカスタマイズに対応します。

<!-- 
Here's the exact same code we used to register the block previously.
 -->
以下は、前の章でブロックを登録するのに使用したコードとまったく同じものです。

```jsx
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-03-editable-esnext', {
	apiVersion: 3,
	title: 'Example: Basic with block supports',
	icon: 'universal-access-alt',
	category: 'design',
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},
	example: {
		attributes: {
			content: 'Hello World',
		},
	},
	edit: ( props ) => {
		const {
			attributes: { content },
			setAttributes,
			className,
		} = props;
		const blockProps = useBlockProps();
		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};
		return (
			<RichText
				{ ...blockProps }
				tagName="p"
				onChange={ onChangeContent }
				value={ content }
			/>
		);
	},
	save: ( props ) => {
		const blockProps = useBlockProps.save();
		return (
			<RichText.Content
				{ ...blockProps }
				tagName="p"
				value={ props.attributes.content }
			/>
		);
	},
} );
```

<!-- 
Now, let's alter the block.json file for that block, and add the supports key. (If you're not using a block.json file, you can also add the key to the `registerBlockType` function call)
 -->
では、ブロックの block.json ファイルを変更し、サポートキーを追加します。(block.json ファイルを使用していない場合は、`registerBlockType` 関数呼び出しにキーを追加できます)

```json
{
	"apiVersion": 3,
	"name": "gutenberg-examples/example-03-editable-esnext",
	"title": "Example: Basic with block supports",
	"icon": "universal-access-alt",
	"category": "layout",
	"editorScript": "file:./build/index.js",
	"supports": {
		"color": {
			"text": true,
			"background": true,
			"link": true
		}
	}
}
```

<!-- 
And that's it, the addition of the "supports" key above, will automatically make the following changes to the block:
 -->
以上です。上の「supports」キーの追加により、自動的にブロックに以下の変更が加えられます。

<!-- 
 - Add a `style` attribute to the block to store the link, text and background colors.
 - Add a "Colors" panel to the sidebar of the block editor to allow users to tweak the text, link and background colors.
 - Automatically use the `theme.json` config: allow disabling colors, inherit palettes...
 - Automatically inject the right styles and apply them to the block wrapper when the user make changes to the colors.
 -->
- ブロックに `style` 属性を追加し、リンク、テキスト、背景の色を保存する。
- ブロックエディターのサイドバーに「色」パネルを追加し、ユーザーがテキスト、リンク、背景の色を調整できるようにする。
- 自動的に `theme.json` の構成を使用する。色を無効にしたり、パレットを継承したり...
- ユーザーが色を変更したときに、自動的に適切なスタイルを注入し、それらをブロックラッパーに適用する。

<!-- 
To learn more about the block supports and see all the available properties that you can enable for your own blocks, please refer to [the supports documentation](/docs/reference-guides/block-api/block-supports.md).
 -->
ブロックサポートについての詳細と、自身のブロックで有効にできるすべての利用可能なプロパティを見るには、[supports documentation](/docs/reference-guides/block-api/block-supports.md) を参照してください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/block-tutorial/block-supports-in-static-blocks.md)