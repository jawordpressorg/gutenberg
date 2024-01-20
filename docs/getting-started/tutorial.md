<!-- 
# Tutorial: Build your first block
 -->
# チュートリアル: はじめてのブロック作成

<!-- 
In this tutorial, you will build a "Copyright Date Block"—a basic yet practical block that displays the copyright symbol (©), the current year, and an optional starting year. This type of content is commonly used in website footers.
 -->
このチュートリアルでは「Copyright Date ブロック」(著作権と年表示ブロック) を作成します。著作権シンボル (©)、現在の年、開始の年 (オプション) を表示する、基本的ながら実用的なブロックです。この種のコンテンツはサイトのフッターでよく使用されます。

<!-- 
The tutorial will guide you through the complete process, from scaffolding the block plugin using the [`create-block`](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-create-block/) package to modifying each file. While previous WordPress development experience is beneficial, it's not a prerequisite for this tutorial.
 -->
ここでは [`create-block`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-create-block/) パッケージを使用して、ブロックプラグインのひな形作成から各ファイルの修正まで、完全な手順を紹介します。このチュートリアルを実行するにあたっては WordPress の開発経験があると有益ですが、必須ではありません。

<!-- 
By the end of this guide, you will have a clear understanding of block development fundamentals and the necessary skills to create your own WordPress blocks.
 -->
このチュートリアルを終えるとブロック開発の基礎を明確に理解し、自身の WordPress ブロック作成に必要なスキルを得られます。

<!-- 
## What you're going to build
 -->
## ここで作成するブロック

<!-- 
Here's a quick look at what you're going to build.
 -->
このチュートリアルでは以下のようなブロックを作成します。

<!-- 
![What you're going to build](https://developer.wordpress.org/files/2023/12/block-tutorial-1.png)
 -->
![このチュートリアルで作成するブロック](https://developer.wordpress.org/files/2023/12/block-tutorial-1.png)

<!-- 
You can also interact with the finished project in [WordPress Playground](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/copyright-date-block-09aac3/_playground/blueprint.json) or use the [Quick Start Guide](https://developer.wordpress.org/block-editor/getting-started/quick-start-guide/) to install the complete block plugin in your local WordPress environment.
 -->
[WordPress Playground](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/copyright-date-block-09aac3/_playground/blueprint.json) では完成したチュートリアルを試すことができます。また [クイックスタートガイド](https://developer.wordpress.org/block-editor/getting-started/quick-start-guide/) を使用すると、ローカルの WordPress 環境に完全なブロックプラグインをインストールできます。

<!-- 
## Prerequisites
 -->
## 準備

<!-- 
To complete this tutorial, you will need:
 -->
このチュートリアルを実行するには、以下が必要です。

<!-- 
1. Code editor
2. Node.js development tools
3. Local WordPress environment
 -->
1. コードエディター
2. Node.js 開発ツール
3. ローカル WordPress 環境

<!-- 
If you don't have one or more of these items, the [Block Development Environment](https://developer.wordpress.org/block-editor/getting-started/devenv/) documentation will help you get started. Come back here once you are all set up.
 -->
もしまだ準備できていなければ、[ブロック開発環境](https://developer.wordpress.org/block-editor/getting-started/devenv/)のドキュメントを参照してください。セットアップが完了したら、ここに戻ってきてください。

<!-- 
<div class="callout callout-info">
	This tutorial uses <a href="https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-env/"><code>wp-env</code></a> to create a local WordPress development environment. However, feel free to use alternate local development tools if you already have one that you prefer.
</div>
 -->
> このチュートリアルでは、[`wp-env`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-env/) を使用して WordPress のローカル開発環境を作成します。すでに好みのローカル開発ツールがあれば、自由にそのツールを使用してください。

<!-- 
## Scaffolding the block
 -->
## ブロックのひな型の作成

<!-- 
The first step in creating the Copyright Date Block is to scaffold the initial block structure using the [`@wordpress/create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) package.
 -->
Copyright Date ブロックを作成する最初のステップは、[`@wordpress/create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) パッケージを使用した、ブロックの初期構成のひな形の作成です。

<!-- 
<div class="callout callout-info">
	Review the <a href="https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-env/">Get started with create-block</a> documentation for an introduction to using this package.
</div>
 -->
> このパッケージの使用方法については、[create-block 入門](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-create-block/) を参照してください。

<!-- 
You can use `create-block` from just about any directory (folder) on your computer and then use `wp-env` to create a local WordPress development environment with your new block plugin installed and activated.
 -->
コンピュータ上の任意のディレクトリ (フォルダ) から `create-block` を使用し、次に `wp-env` を使用すると、新しいブロックプラグインをインストールして有効化した、ローカルの WordPress 開発環境を作成できます。

<!-- 
Therefore, choose a directory to place the block plugin or optionally create a new folder called "Block Tutorial". Open your terminal and `cd` to this directory. Then run the following command.
 -->
まず、ブロックプラグインを置くディレクトリを選択するか、オプションで新しいフォルダ「Block Tutorial」を作成します。ターミナルを開き、このディレクトリに `cd` します。そして以下のコマンドを実行します。

<!-- 
<div class="callout callout-info">
	If you are not using <code>wp-env</code>, instead, navigate to the <code>plugins/</code> folder in your local WordPress installation using the terminal and run the following command.
</div>
 -->
> `wp-env` を使用していなければ、代わりにターミナルを使用してローカルの WordPress インストール内の `plugins/` フォルダに移動して、以下のコマンドを実行します。

```bash
npx @wordpress/create-block@latest copyright-date-block --variant=dynamic
cd copyright-date-block
```

<!-- 
After executing this command, you'll find a new directory named `copyright-date-block` in the plugins folder. This directory contains all the initial files needed to start customizing your block.
 -->
このコマンドを実行すると、plugins フォルダ内に新しいディレクトリ `copyright-date-block`が作成されます。このディレクトリには、ブロックのカスタマイズを始めるために必要なすべての初期ファイルが含まれています。

<!-- 
This command also sets up the basic structure of your block, with `copyright-date-block` as its slug. This slug uniquely identifies your block within WordPress.
 -->
このコマンドはまた、`copyright-date-block` をスラッグとしてブロックの基本構成を設定します。このスラッグはWordPress 内で一意にブロックを識別します。

<!-- 
<div class="callout callout-info">
	You might have noticed that the command uses the <code>--variant=dynamic</code> flag. This tells <code>create-block</code> you want to scaffold a dynamically rendered block. Later in this tutorial, you will learn about dynamic and static rendering and add static rendering to this block.
</div>
 -->
> コマンドに `--variant=dynamic` フラグが指定されていることにお気づきかもしれません。これは `create-block` に対して動的にレンダーされるブロックのひな形を作成するよう伝えます。このチュートリアルの後半では、動的レンダリングと静的レンダリングについて学び、静的レンダリングをこのブロックに追加します。

<!-- 
Navigate to the Plugins page in the WordPress admin and confirm that the plugin is active. Then, create a new page or post and ensure you can insert the Copyright Date Block. It should look like this once inserted.
 -->
WordPress 管理画面のプラグインページに移動し、プラグインが有効になっていることを確認してください。次に、新しいページまたは投稿を作成し、Copyright Date ブロックを挿入できることを確認してください。挿入すると以下のようになります。

<!-- 
![The scaffolded block in the Editor](https://developer.wordpress.org/files/2023/12/block-tutorial-2.png)
 -->
![エディター内でのひな形のブロック](https://developer.wordpress.org/files/2023/12/block-tutorial-2.png)

<!-- 
## Reviewing the files
 -->
## ファイルの確認

<!-- 
Before we begin modifying the scaffolded block, it's important to review the plugin's file structure. Open the plugin folder in your code editor.
 -->
ひな形のブロックを修正する前に、プラグインのファイルの構成を確認することが重要です。コードエディターでプラグインフォルダを開きます。

<!-- 
![The files that make up the block plugin](https://developer.wordpress.org/files/2023/12/block-tutorial-3.png)
 -->
![ブロックプラグインを構成するファイル](https://developer.wordpress.org/files/2023/12/block-tutorial-3.png)

<!-- 
Next, look at the [File structure of a block](https://developer.wordpress.org/block-editor/getting-started/fundamentals/file-structure-of-a-block/) documentation for a thorough overview of what each file does. Don't worry if this is overwhelming right now. You will learn how to use each file throughout this tutorial.
 -->
次に、[ブロックのファイル構成](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/file-structure-of-a-block/)を参照して、各ファイルが何をするのかの概要をざっと眺めてください。今すぐには理解できなくても構いません。このチュートリアルを通して、各ファイルの使い方を学びます。

<!-- 
<div class="callout callout-info">
	Since you scaffolded a dynamic block, you will not see a <code>save.js</code> file. Later in the tutorial, you will add this file to the plugin to enable static rendering, so stay tuned.
</div>
 -->
> 動的ブロックのひな形を作成したため、`save.js` ファイルはありません。チュートリアルの後半で、このファイルをプラグインに追加して、静的レンダリングを有効化します。

<!-- 
## Initial setup
 -->
## 初期セットアップ

<!-- 
Let's start by creating the simplest Copyright Date Block possible, which will be a dynamically rendered block that simply displays the copyright symbol (©) and the current year. We'll also add a few controls allowing the user to modify font size and text color.
 -->
できるだけシンプルな Copyright Date ブロックを作成するところから始めましょう。動的にレンダーされ、著作権記号 (©) と現在の年を表示するだけのブロックを作成します。いくつかのコントロールも追加して、ユーザーがフォントサイズとテキストの色を変更できるようにします。

<!-- 
Before proceeding to the following steps, run `npm run start` in the terminal from within the plugin directory. This command will watch each file in the `/src` folder for changes. The block's build files will be updated each time you save a file.
 -->
次のステップに進む前に、ターミナルでプラグインディレクトリから `npm run start` を実行します。このコマンドは `/src` フォルダ内の各ファイルの変更を監視し、ファイルを保存するたびに、ブロックのビルドファイルを更新します。

<!-- 
Check out the [Working with JavaScript for the Block Editor](https://developer.wordpress.org/block-editor/getting-started/fundamentals/javascript-in-the-block-editor/) documentation to learn more.
 -->
詳細については、[ブロックエディターでの JavaScript の利用](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/javascript-in-the-block-editor/)を参照してください。

<!-- 
### Updating block.json
 -->
### block.json の更新

<!-- 
Open the `block.json` file in the `/src` folder.
 -->
`/src` フォルダ内の `block.json` ファイルを開きます。

```json
{
	"$schema": "https://schemas.wp.org/trunk/block.json",
	"apiVersion": 3,
	"name": "create-block/copyright-date-block",
	"version": "0.1.0",
	"title": "Copyright Date Block",
	"category": "widgets",
	"icon": "smiley",
	"description": "Example block scaffolded with Create Block tool.",
	"example": {},
	"supports": {
		"html": false
	},
	"textdomain": "copyright-date-block",
	"editorScript": "file:./index.js",
	"editorStyle": "file:./index.css",
	"style": "file:./style-index.css",
	"render": "file:./render.php",
	"viewScript": "file:./view.js"
}
```

<!-- 
<div class="callout callout-info">
	Review the <a href="https://developer.wordpress.org/block-editor/getting-started/fundamentals/block-json/">block.json</a> documentation for an introduction to this file.
</div>
 -->
> このファイルの詳細については [block.json](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-json/) を参照してください。

<!-- 
Since this scaffolding process created this file, it requires some updating to suit the needs of the Copyright Date Block.
 -->
ひな形作成のプロセスでこのファイルを作成したため、Copyright Date ブロックのニーズに合わせるには若干の更新が必要です。

<!-- 
#### Modifying the block identity
 -->
#### ブロックの説明の変更

<!-- 
Begin by removing the icon and adding a more appropriate description. You will add a custom icon later.
 -->
まずアイコンを削除し、より適切な説明を追加することから始めます。カスタムアイコンを後で追加します。

<!-- 
1. Remove the line for `icon`
2. Update the description to "Display your site's copyright date."
3. Save the file
 -->
1. `"icon":` 行を削除
2. `"description":` の説明文を「Display your site's copyright date.」(サイトの著作権と公開年を表示) で置換
3. ファイルを保存

<!-- 
After you refresh the Editor, you should now see that the block no longer has the smiley face icon, and its description has been updated.
 -->
エディターを更新すると、ブロックからスマイルのアイコンが消え、説明文が更新されていることが確認できます。

<!-- 
![The block in the Editor with updated information](https://developer.wordpress.org/files/2023/12/block-tutorial-4.png)
 -->
![エディター内の、情報が更新されたブロック](https://developer.wordpress.org/files/2023/12/block-tutorial-4.png)

<!-- 
#### Adding block supports
 -->
#### ブロックサポートの追加

<!-- 
Next, let's add a few [block supports](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/) so that the user can control the font size and text color of the block.
 -->
次に、いくつかの[ブロックサポート](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/)を追加します。ユーザーはブロックのフォントサイズとテキスト色を自由に設定できるようになります。

<!-- 
<div class="callout callout-tip">
	You should always try to use native block supports before building custom functionality. This approach provides users with a consistent editing experience across blocks, and your block benefits from Core functionality with only a few lines of code.
</div>
 -->
> カスタム機能の構築を検討する前に、常にネイティブのブロックサポートを使用してください。このアプローチにより、ユーザーはブロック間で一貫した編集体験を得られ、ブロックもわずか数行のコードでコア機能の恩恵を受けられます。

<!-- 
Update the [`supports`](https://developer.wordpress.org/block-editor/getting-started/fundamentals/block-json/#enable-ui-settings-panels-for-the-block-with-supports) section of the `block.json` file to look like this.
 -->
`block.json` ファイル内の [`supports`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-json/#supports-%E3%81%AB%E3%82%88%E3%82%8B%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%81%AE-UI-%E8%A8%AD%E5%AE%9A%E3%83%91%E3%83%8D%E3%83%AB%E3%81%AE%E6%9C%89%E5%8A%B9%E5%8C%96) セクションを以下のように更新します。

```json
"supports": {
	"color": {
		"background": false,
		"text": true
	},
	"html": false,
	"typography": {
		"fontSize": true
	}
},
```

<!-- 
Note that when you enable text color support with `"text": true`, the background color is also enabled by default. You are welcome to keep it enabled, but it's not required for this tutorial, so you can manually set `"background": false`.
 -->
`"text": true` でテキスト色のサポートを有効にすると、デフォルトで背景色も有効になることに注意してください。そのままでも構いませんが、このチュートリアルでは必要ないため、`"background": false` を設定しています。

<!-- 
Save the file and select the block in the Editor. You will now see both Color and Typography panels in the Settings Sidebar. Try modifying the settings and see what happens.
 -->
ファイルを保存し、エディターでブロックを選択します。これで、設定サイドバーに色とタイポグラフィの両方のパネルが表示されます。設定を変更して、変化の様子を見てみましょう。

<!-- 
![The block in the Editor with block supports](https://developer.wordpress.org/files/2023/12/block-tutorial-5.png)
 -->
![エディター内の、block supports 付きブロック](https://developer.wordpress.org/files/2023/12/block-tutorial-5.png)

<!-- 
#### Removing unnecessary code
 -->
#### 不要なコードの削除

<!-- 
For simplicity, the styling for the Copyright Date Block will be controlled entirely by the color and typography block supports. This block also does not have any front-end Javascript. Therefore, you don't need to specify stylesheets or a `viewScript` in the `block.json` file.
 -->
簡単のため、Copyright Date ブロックのすべてのスタイルは、ブロックサポートの `color` と `typography` で制御します。またこのブロックは、フロントエンドの JavaScript を持ちません。したがって `block.json` ファイル内で、スタイルシートや `viewScript` を指定する必要はありません。

<!-- 
1. Remove the line for `editorStyle`
2. Remove the line for `style`
3. Remove the line for `viewScript`
4. Save the file
 -->
1. `editorStyle` 行を削除
2. `style` 行を削除
3. `viewScript` 行を削除
4. ファイルを保存

<!-- 
Refresh the Editor, and you will see that the block styling now matches your current theme.
 -->
エディターを更新すると、ブロックのスタイルが現在のテーマと一致していることがわかります。

<!-- 
![The block in the Editor without default styling](https://developer.wordpress.org/files/2023/12/block-tutorial-6.png)
 -->
![エディター内の、デフォルトのスタイルのないブロック](https://developer.wordpress.org/files/2023/12/block-tutorial-6.png)

<!-- 
#### Putting it all together
 -->
#### すべてをひとつに

<!-- 
Your final `block.json` file should look like this:
 -->
最終的に `block.json` ファイルは以下のようになります。

```json
{
	"$schema": "https://schemas.wp.org/trunk/block.json",
	"apiVersion": 3,
	"name": "create-block/copyright-date-block",
	"version": "0.1.0",
	"title": "Copyright Date Block",
	"category": "widgets",
	"description": "Display your site's copyright date.",
	"example": {},
	"supports": {
		"color": {
			"background": false,
			"text": true
		},
		"html": false,
		"typography": {
			"fontSize": true
		}
	},
	"textdomain": "copyright-date-block",
	"editorScript": "file:./index.js",
	"render": "file:./render.php"
}
```

<!-- 
### Updating index.js
 -->
### index.js の更新

<!-- 
Before you start building the functionality of the block itself, let's do a bit more cleanup and add a custom icon to the block.
 -->
ブロック自身の機能を作り始める前に、もう少しクリーンアップして、ブロックにカスタムアイコンを追加しましょう。

<!-- 
Open the [`index.js`](https://developer.wordpress.org/block-editor/getting-started/fundamentals/file-structure-of-a-block/#index-js) file. This is the main JavaScript file of the block and is used to register it on the client. You can learn more about client-side and server-side registration in the [Registration of a block](https://developer.wordpress.org/block-editor/getting-started/fundamentals/registration-of-a-block/) documentation.
 -->
[`index.js`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/file-structure-of-a-block/#indexjs) ファイルを開いてください。これはブロックのメインの JavaScript ファイルで、クライアントでのブロックの登録に使用されます。クライアントサイドとサーバーサイドの登録については、[ブロックの登録](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/registration-of-a-block/)を参照してください。

<!-- 
Start by looking at the [`registerBlockType`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/) function. This function accepts the name of the block, which we are getting from the imported `block.js` file, and the block configuration object.
 -->
まず、[`registerBlockType`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-registration/) 関数を見てください。この関数は、インポートした `block.js` ファイルから取得したブロックの名前と、ブロックの設定オブジェクトを受け取ります。

```js
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: Edit,
} );
```

<!-- 
By default, the object just includes the `edit` property, but you can add many more, including `icon`. While most of these properties are already defined in `block.json`, you need to specify the icon here to use a custom SVG.
 -->
デフォルトでは、オブジェクトは `edit` プロパティだけを含みますが、`icon` を含む多くのプロパティを追加できます。これらのプロパティのほとんどは既に `block.json` で定義されていますが、カスタム SVG を使用するにはここでアイコンを指定する必要があります。

<!-- 
#### Adding a custom icon
 -->
#### カスタムアイコンの追加

<!-- 
Using the calendar icon from the [Gutenberg Storybook](https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library), add the SVG to the function like so:
 -->
[Gutenberg Storybook](https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library)のカレンダーアイコンを使用して、次のように関数に SVG を追加します。

```js
const calendarIcon = (
	<svg
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		focusable="false"
	>
		<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"></path>
	</svg>
);

registerBlockType( metadata.name, {
	icon: calendarIcon,
	edit: Edit
} );
```

<!-- 
<div class="callout callout-tip">
	All block icons should be 24 pixels square. Note the <code>viewBox</code> parameter above.
</div>
 -->
> すべてのブロックのアイコンは24ピクセルの正方形でなければなりません。上の `viewBox` パラメータに注意してください。

<!-- 
Save the `index.js` file and refresh the Editor. You will now see the calendar icon instead of the default.
 -->
`index.js` ファイルを保存し、エディターを更新します。デフォルトの代わりに、カレンダーアイコンが表示されます。

<!-- 
![The block in the Editor a custom icon](https://developer.wordpress.org/files/2023/12/block-tutorial-7.png)
 -->
![エディター内のブロックのカスタムアイコン](https://developer.wordpress.org/files/2023/12/block-tutorial-7.png)

<!-- 
At this point, the block's icon and description are correct, and block supports allow you to change the font size and text color. Now, it's time to move on to the actual functionality of the block.
 -->
この時点でブロックのアイコンと説明は正しくなり、ブロックサポートによりフォントのサイズとテキストの色を変更できます。さて、いよいよブロックの実際の機能に移りましょう。

<!-- 
### Updating edit.js
 -->
### edit.js の更新

<!-- 
The [`edit.js`](https://developer.wordpress.org/block-editor/getting-started/fundamentals/file-structure-of-a-block/#edit-js) file controls how the block functions and appears in the Editor. Right now, the user sees the message " Copyright Date Block – hello from the editor!". Let's change that.
 -->
[`edit.js`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/file-structure-of-a-block/#editjs) ファイルは、このブロックがどのように機能し、どのようにエディターに表示されるかを制御します。現在、ユーザーにはメッセージ「Copyright Date Block - hello from the editor!」が表示されます。これを変更しましょう。

<!-- 
Open the file and see that the `Edit()` function returns a paragraph tag with the default message.
 -->
ファイルを開き、`Edit()` 関数がデフォルトのメッセージを含む paragraph タグを返すことを確認してください。

```js
export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			{ __(
				'Copyright Date Block – hello from the editor!',
				'copyright-date-block-demo'
			) }
		</p>
	);
}
```
<!-- 
It looks a bit more complicated than it is.
 -->
このコードは実際よりも少し複雑に見えます。

<!-- 
- [`useBlockProps()`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#block-wrapper-props) outputs all the necessary CSS classes and styles in the [block's wrapper](https://developer.wordpress.org/block-editor/getting-started/fundamentals/block-wrapper/#the-edit-components-markup) needed by the Editor, which includes the style provided by the block supports you added earlier
- [`__()`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/) is used for the internationalization of text strings
 -->
- [`useBlockProps()`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-edit-save/#%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%83%A9%E3%83%83%E3%83%91%E3%83%BC-props) は[ブロックラッパー](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-wrapper/#Edit-%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%83%9E%E3%83%BC%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97)内に、エディターで必要とされるすべての CSS クラスとスタイルを出力します。これには、先に追加したブロックサポートの提供するスタイルも含まれます。
- [`__()`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/) はテキスト文字列の国際化に使用されます。

<!-- 
<div class="callout callout-info">
	Review the <a href="https://developer.wordpress.org/block-editor/getting-started/fundamentals/block-wrapper/">block wrapper</a> documentation for an introductory guide on how to ensure the block's markup wrapper has the proper attributes.
</div>
 -->
> [ブロックラッパー](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-wrapper/)のドキュメントでは、ブロックのマークアップラッパーに適切な属性を持たせる方法を紹介しています。

<!-- 
As a reminder, the main purpose of this block is to display the copyright symbol (©) and the current year. So, you first need to get the current year in string form, which can be done with the following code.
 -->
ところでこのブロックの主な目的は、著作権記号 (©) と現在の年の表示でした。そのためまず現在の年を文字列形式で取得する必要があります。以下のコードがこれを行います。

```js
const currentYear = new Date().getFullYear().toString();
```

<!-- 
Next, update the function to display the correct information.
 -->
次に関数を更新して、正しい情報を表示します。

```js
export default function Edit() {
	const currentYear = new Date().getFullYear().toString();

	return (
		<p { ...useBlockProps() }>© { currentYear }</p>
	);
}
```

<!-- 
Save the `edit.js` file and refresh the Editor. You will now see the copyright symbol (©) followed by the current year.
 -->
`edit.js` ファイルを保存し、エディターを更新します。著作権マーク (©) と現在の年が表示されます。

<!-- 
![The block in the Editor displays the correct content](https://developer.wordpress.org/files/2023/12/block-tutorial-8.png)
 -->
![正しいコンテンツを表示する、エディター内のブロック](https://developer.wordpress.org/files/2023/12/block-tutorial-8.png)

<!-- 
### Updating render.php
 -->
### render.php の更新

<!-- 
While the block is working properly in the Editor, the default block message is still being displayed on the front end. To fix this, open the [`render.php`](https://developer.wordpress.org/block-editor/getting-started/fundamentals/file-structure-of-a-block/#render-php) file, and you will see the following.
 -->

エディター上ではブロックは正しく動作していますが、フロントエンドではデフォルトのブロックメッセージが表示されたままです。これを修正するには [`render.php`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/file-structure-of-a-block/#renderphp) ファイルを開きます。以下のコードがあります。

```php
<?php
...
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php esc_html_e( 'Copyright Date Block – hello from a dynamic block!', 'copyright-date-block' ); ?>
</p>

```

<!-- 
Similar to the `useBlockProps()` function in the Editor, [`get_block_wrapper_attributes()`](https://developer.wordpress.org/reference/functions/get_block_wrapper_attributes/) outputs all the necessary CSS classes and styles in the [block's wrapper](https://developer.wordpress.org/block-editor/getting-started/fundamentals/block-wrapper/#the-server-side-render-markup). Only the content needs to be updated.
 -->
エディター内での `useBlockProps()` 関数と同様に、[`get_block_wrapper_attributes()`](https://developer.wordpress.org/reference/functions/get_block_wrapper_attributes/) は、[ブロックのラッパー](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-wrapper/#%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E5%81%B4%E3%81%A7%E3%81%AE%E3%83%9E%E3%83%BC%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97%E3%81%AE%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC) 内に必要なすべての CSS クラスとスタイルを出力します。あとはコンテンツのみ、更新が必要です。

<!-- 
You can use `date( "Y" )` to get the current year in PHP, and your `render.php` should look like this.
 -->
PHP で現在の年を取得するには、`date( "Y" )`を使用します。`render.php` は次のようになります。

```php
<?php
...
?>
<p <?php echo get_block_wrapper_attributes(); ?>>© <?php echo date( "Y" ); ?></p>
```

<!-- 
Save the file and confirm that the block appears correctly in the Editor and on the front end.
 -->
ファイルを保存し、エディターとフロントエンドでブロックが正しく表示されることを確認します。

<!-- 
### Cleaning up
 -->
### クリーンアップ

<!-- 
When you use the `create-block` package to scaffold a block, it might include files that you don't need. In the case of this tutorial, the block doesn't use stylesheets or font end JavaScipt. Clean up the plugin's `src/` folder with the following actions.
 -->
`create-block` パッケージを使用してブロックのひな形を作成すると、必要のないファイルが含まれる場合があります。このチュートリアルでも、ブロックはスタイルシートやフロントエンド JavaScipt を使用していませんので、以下の操作でプラグインの `src/` フォルダをクリーンアップします。

<!-- 
1. In the `edit.js` file, remove the lines that import `editor.scss`
2. In the `index.js` file, remove the lines that import `style.scss`
3. Delete the editor.scss, style.scss, and view.js files
 -->
1. `edit.js` ファイルで、`editor.scss` の import 行を削除する。
2. `index.js` ファイルで、`style.scss` の import 行を削除する。
3. editor.scss、style.scss、view.js ファイルを削除する。

<!-- 
Finally, make sure that there are no unsaved changes and then terminate the `npm run start` command. Run `npm run build` to optimize your code and make it production-ready.
 -->
最後に、変更がすべて保存されていることを確認して、`npm run start` コマンドを終了します。`npm run build` を実行して、コードを最適化し、本番環境用にビルドします。

<!-- 
You have built a fully functional WordPress block, but let's not stop here. In the next sections, we'll add functionality and enable static rendering.
 -->
これで完全に機能する WordPress ブロックを構築できました。しかし、これで終わりではありません。次のセクションでは、さらに機能を追加し、静的レンダリングを有効にします。

<!-- 
## Adding block attributes
 -->
## ブロック属性の追加

<!-- 
The Copyright Date Block you have built shows the current year, but what if you wanted to display a starting year as well?
 -->
作成した Copyright Date ブロックは現在の年を表示していますが、開始の年も表示するにはどうすればよいでしょう ?

<!-- 
![What you're going to build](https://developer.wordpress.org/files/2023/12/block-tutorial-1.png)
 -->
![これから作成するもの](https://developer.wordpress.org/files/2023/12/block-tutorial-1.png)

<!-- 
This functionality would require users to enter their starting year somewhere on the block. They should also have the ability to toggle it on or off.
 -->
この機能のためには、ユーザーがブロックのどこかで公開年を入力する必要があります。また、表示のオンオフを切り替える機能も必要です。

<!-- 
You could implement this in different ways, but all would require [block attributes](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/). Attributes allow you to store custom data for the block that can then be used to modify the block's markup.
 -->
さまざまな方法でこの機能を実装できますが、いずれの方法でも[ブロックの属性](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-attributes/)が必要です。属性は、ブロックのカスタムデータを保存し、ブロックのマークアップを変更できます。

<!-- 
To enable this starting year functionality, you will need one attribute to store the starting year and another that will be used to tell WordPress whether the starting year should be displayed or not.
 -->
この開始年を表示する機能を実現するには、開始年を保存する属性と、WordPress に開始年の表示の有無を伝える別の属性が必要です。

<!-- 
### Updating block.json
 -->
### block.json の更新

<!-- 
Block attributes are generally specified in the [`block.json`](https://developer.wordpress.org/block-editor/getting-started/fundamentals/block-json/#data-storage-in-the-block-with-attributes) file. So open up the file and add the following section after the `example` property.
 -->
ブロックの属性は通常、[`block.json`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-json/#attributes-%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%9F%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E4%BF%9D%E5%AD%98) ファイルで指定します。ファイルを開き、`example` プロパティの後に以下のセクションを追加してください。

```json
"example": {},
"attributes": {
	"showStartingYear": {
		"type": "boolean"
	},
	"startingYear": {
		"type": "string"
	}
},
```

<!-- 
You must indicate the `type` when defining attributes. In this case, the `showStartingYear` should be true or false, so it's set to `boolean`. The `startingYear` is just a string.
 -->
属性を定義する際には `type` を指定しなければなりません。ここで `showStartingYear` は true か false のため `boolean` を設定しています。`startingYear` は単なる文字列です。
<!-- 
Save the file, and you can now move on to the Editor.
 -->
ファイルを保存したら、エディターに移ります。

<!-- 
### Updating edit.js
 -->
### edit.js の更新

<!-- 
Open the `edit.js` file. You will need to accomplish two tasks.
 -->
`edit.js` ファイルを開きます。2つの作業を行う必要があります。

<!-- 
Add a user interface that allows the user to enter a starting year, toggle the functionality on or off, and store these settings as attributes
Update the block to display the correct content depending on the defined attributes
 -->
- ユーザーが開始年を入力でき、機能のオンオフを切り替えられるユーザーインターフェースを追加し、これらの設定を属性として保存する。
- 定義した属性に応じて、正しいコンテンツを表示するようにブロックを更新する。

<!-- 
#### Adding the user interface
 -->
#### ユーザーインターフェースの追加

<!-- 
Earlier in this tutorial, you added block supports that automatically created Color and Typography panels in the Settings Sidebar of the block. You can create your own custom panels using the `InspectorControls` component.
 -->
このチュートリアルの前半ではブロックサポートを追加することで、自動的にブロックの設定サイドバーに、色とタイポグラフィのパネルを作成しました。`InspectorControls`コンポーネントを使用すると、独自のカスタムパネルを作成できます。

<!-- 
##### Inspector controls
 -->
##### Inspector コントロール

<!-- 
The `InspectorControls` belongs to the [`@wordpress/block-editor`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/) package, so you can import it into the `edit.js` file by adding the component name on line 14. The result should look like this.
 -->
`InspectorControls` は [`@wordpress/block-editor`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/) パッケージに属しています。14行目にコンポーネント名を追加することで `edit.js` ファイルにインポートできます。変更後は以下のようになります。

```js
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
```

<!-- 
Next, update the Edit function to return the current block content and an `InspectorControls` component that includes the text "Testing." You can wrap everything in a [Fragment](https://react.dev/reference/react/Fragment) (`<></>`) to ensure proper JSX syntax. The result should look like this.
 -->
次に、Edit 関数を更新して、現在のブロックの内容と、文字列「Testing」を含む `InspectorControls` コンポーネントを返します。適切な JSX 構文となるためにすべてを [フラグメント](https://react.dev/reference/react/Fragment) (`<></>`) で囲みます。結果は以下のようになります。

```js
export default function Edit() {
const currentYear = new Date().getFullYear().toString();

	return (
		<>
			<InspectorControls>
				Testing
			</InspectorControls>
			<p { ...useBlockProps() }>© { currentYear }</p>
		</>
	);
}
```

<!-- 
Save the file and refresh the Editor. When selecting the block, you should see the "Testing" message in the Settings Sidebar.
 -->
ファイルを保存し、エディターを更新します。ブロックを選択すると、設定サイドバーにメッセージ「Testing」が表示されるはずです。

<!-- 
![The Setting Sidebar now displays the message](https://developer.wordpress.org/files/2023/12/block-tutorial-9.png)
 -->
![設定サイドバーにメッセージが表示されている](https://developer.wordpress.org/files/2023/12/block-tutorial-9.png)

<!-- 
##### Components and panels
 -->
##### コンポーネントとパネル

<!-- 
Now, let's use a few more Core components to add a custom panel and the user interface for the starting year functionality. You will want to import [`PanelBody`](https://developer.wordpress.org/block-editor/reference-guides/components/panel/#panelbody), [`TextControl`](https://developer.wordpress.org/block-editor/reference-guides/components/text-control/), and [`ToggleControl`](https://developer.wordpress.org/block-editor/reference-guides/components/toggle-control/) from the [`@wordpress/components`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/) package.
 -->
さらにいくつかのコアコンポーネントを使用して、カスタムパネルと開始年表示機能のユーザーインターフェイスを追加します。[`PanelBody`](https://developer.wordpress.org/block-editor/reference-guides/components/panel/#panelbody)、[`TextControl`](https://developer.wordpress.org/block-editor/reference-guides/components/text-control/)、[`ToggleControl`](https://developer.wordpress.org/block-editor/reference-guides/components/toggle-control/) を [`@wordpress/components`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/) パッケージからインポートします。

<!-- 
Add the following line below the other imports in the `edit.js` file.
 -->
`edit.js` ファイルの他のインポートの下に以下の行を追加してください。

```js
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
```

<!-- 
Then wrap the "Testing" message in the `PanelBody` component and set the `title` parameter to "Settings". Refer to the [component documentation](https://developer.wordpress.org/block-editor/reference-guides/components/panel/#panelbody) for additional parameter options.
 -->
次に、メッセージ「Testing」を `PanelBody` コンポーネントでラップし、`title` パラメータに「Settings」を設定します。その他のパラメータオプションについては、[コンポーネントのドキュメント](https://developer.wordpress.org/block-editor/reference-guides/components/panel/#panelbody)を参照してください。

```js
export default function Edit() {
const currentYear = new Date().getFullYear().toString();

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'copyright-date-block' ) }>
					Testing
				</PanelBody>
			</InspectorControls>
			<p { ...useBlockProps() }>© { currentYear }</p>
		</>
	);
}
```

<!-- 
Save the file and refresh the Editor. You should now see the new Settings panel.
 -->
ファイルを保存し、エディターを更新します。新しい設定パネルが表示されるはずです。

<!-- 
![The Setting Sidebar now displays a custom panel](https://developer.wordpress.org/files/2023/12/block-tutorial-10.png)
 -->
![設定サイドバーに表示されたカスタムパネル](https://developer.wordpress.org/files/2023/12/block-tutorial-10.png)

<!-- 
##### Text control
 -->
##### Text コントロール

<!-- 
The next step is to replace the "Testing" message with a `TextControl` component that allows the user to set the `startingYear` attribute. However, you must include two parameters in the `Edit()` function before doing so.
 -->
次のステップでは、メッセージ「Testing」を `TextControl` コンポーネントで置き換え、ユーザーが `startingYear` 属性を設定できるようにします。ただし、その前に `Edit()` 関数に2つのパラメータを含める必要があります。

<!-- 
- `attributes` is an object that contains all the attributes for the block
- `setAttributes` is a function that allows you to update the value of an attribute
 -->
- `attributes` はブロックのすべての属性を含むオブジェクトです。
- `setAttributes` は属性の値を更新する関数です。

<!-- 
With these parameters included, you can fetch the `showStartingYear` and `startingYear` attributes.
 -->
これらのパラメータが含まれることで、`showStartingYear` 属性と `startingYear` 属性を取得できます。

<!-- 
Update the top of the `Edit()` function to look like this.
 -->
`Edit()` 関数の先頭を次のように更新します。

```js
export default function Edit( { attributes, setAttributes } ) {
	const { showStartingYear, startingYear } = attributes;
	...
```

<!-- 
<div class="callout callout-tip">
	To see all the attributes associated with the Copyright Date Block, add <code>console.log( attributes );</code> at the top of the <code>Edit()</code> function. This can be useful when building and testing a custom block.
</div>
 -->
> Copyright Date ブロックに関連するすべての属性を見るには、`Edit()` 関数の先頭に `console.log( attributes );` を追加します。この方法は、カスタムブロックを作成し、テストする際に便利な方法です。

<!-- 
Now, you can remove the "Testing" message and add a `TextControl`. It should include:
 -->
次に、メッセージ「Testing」を削除して、`TextControl` を追加します。コンポーネントには以下が含まれます。

<!-- 
1. A `label` property set to "Starting year"
2. A `value` property set to the attribute `startingYear`
3. An `onChange` property that updates the `startingYear` attribute whenever the value changes
 -->
1. `label` プロパティに「Starting year」を設定する。
2. `value` プロパティに属性 `startingYear` を設定する。
3. `onChange` プロパティは、値が変更されるたびに `startingYear` 属性を更新する。

<!-- 
Putting it all together, the `Edit()` function should look like the following.
 -->
これらをまとめると、`Edit()` 関数は以下のようになります。

```js
export default function Edit( { attributes, setAttributes } ) {
	const { showStartingYear, startingYear } = attributes;
	const currentYear = new Date().getFullYear().toString();

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'copyright-date-block' ) }>
					<TextControl
						label={ __(
							'Starting year',
							'copyright-date-block'
						) }
						value={ startingYear || '' }
						onChange={ ( value ) =>
							setAttributes( { startingYear: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<p { ...useBlockProps() }>© { currentYear }</p>
		</>
	);
}
```
<!-- 
<div class="callout callout-tip">
	You may have noticed that the <code>value</code> property has a value of <code>startingYear || ''</code>. The symbol <code>||</code> is called the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logical OR</a> (logical disjunction) operator. This prevents warnings in React when the <code>startingYear</code> is empty. See <a href="https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components">Controlled and uncontrolled components</a> for details.
</div>
 -->
`value` プロパティが値 `startingYear || ''` になっています。記号 `||` は、<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR">論理和</a>演算子と呼ばれます。`startingYear` が空の場合に React で警告が出るのを防ぎます。詳しくは <a href="https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components">Controlled and uncontrolled components</a> を参照してください。

<!-- 
Save the file and refresh the Editor. Confirm that a text field now exists in the Settings panel. Add a starting year and confirm that when you update the page, the value is saved.
 -->
ファイルを保存し、エディターを更新します。設定パネルにテキストフィールドが存在することを確認してください。また、開始年を追加し、ページを更新したときに値が保存されていることを確認してください。

<!-- 
![A live look at editing the new Starting Year field in the Settings Sidebar](https://developer.wordpress.org/files/2023/12/block-tutorial-11.gif)
 -->
![設定サイドバーでの Starting Year フィールド編集の様子](https://developer.wordpress.org/files/2023/12/block-tutorial-11.gif)

<!-- 
##### Toggle control
 -->
##### Toggle コントロール

<!-- 
Next, let's add a toggle that will turn the starting year functionality on or off. You can do this with a `ToggleControl` component that sets the `showStartingYear` attribute. It should include:
 -->
次に、開始年表示のオンオフを切り替えるトグルを追加します。これは `showStartingYear` 属性を設定する `ToggleControl` コンポーネントで行えます。このコンポーネントには以下が含まれます。

<!-- 
1. A `label` property set to "Show starting year"
2. A `checked` property set to the attribute `showStartingYear`
3. An `onChange` property that updates the `showStartingYear` attribute whenever the toggle is checked or unchecked
 -->
1. `label` プロパティ。「Show starting year」を設定する。
2. `checked` プロパティ。属性 `showStartingYear` を設定する。
3. `onChange` プロパティ。トグルがチェックされるたびに `showStartingYear` 属性を更新する。

<!-- 
You can also update the "Starting year" text input so it's only displayed when `showStartingYear` is `true`, which can be done using the `&&` logical operator.
 -->
また「Starting year」テキスト入力を更新して、`showStartingYear` が `true` のときのみ表示されるようにします。これには `&&` 論理演算子を使用します。

<!-- 
The `Edit()` function should look like the following.
 -->
`Edit()`関数は以下のようになります。

```js
export default function Edit( { attributes, setAttributes } ) {
	const { showStartingYear, startingYear } = attributes;
	const currentYear = new Date().getFullYear().toString();

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'copyright-date-block' ) }>
					<ToggleControl
						checked={ !! showStartingYear }
						label={ __(
							'Show starting year',
							'copyright-date-block'
						) }
						onChange={ () =>
							setAttributes( {
								showStartingYear: ! showStartingYear,
							} )
						}
					/>
					{ showStartingYear && (
						<TextControl
							label={ __(
								'Starting year',
								'copyright-date-block'
							) }
							value={ startingYear || '' }
							onChange={ ( value ) =>
								setAttributes( { startingYear: value } )
							}
						/>
					) }
				</PanelBody>
			</InspectorControls>
			<p { ...useBlockProps() }>© { currentYear }</p>
		</>
	);
}
```
<!-- 
Save the file and refresh the Editor. Confirm that clicking the toggle displays the text input, and when you update the page, the toggle remains active.
 -->
ファイルを保存し、エディターを更新します。トグルをクリックするとテキスト入力が表示され、ページを更新しても、トグルは有効なままです。

<!-- 
![A live look at editing the new Show Starting Year toggle in the Settings Sidebar](https://developer.wordpress.org/files/2023/12/block-tutorial-12.gif)
 -->
![設定サイドバーの Staring Year トグルの編集の様子](https://developer.wordpress.org/files/2023/12/block-tutorial-12.gif)

<!-- 
#### Updating the block content
 -->
#### ブロックのコンテンツの更新

<!-- 
So far, you have created the user interface for adding a starting year and updating the associated block attributes. Now you need to actually update the block content in the Editor.
 -->
ここまでで、開始年を追加し、関連するブロック属性を更新するユーザーインターフェースを作成しました。次に、エディターで実際にブロックのコンテンツを更新します。

<!-- 
Let's create a new variable called `displayDate`. When `showStartingYear` is `true` and the user has provided a `startingYear`, the `displayDate` should include the `startingYear` and the `currentYear` separated by an em dash. Otherwise, just display the `currentYear`.
 -->
新しい変数 `displayDate` を作ります。`showStartingYear` が `true` で、ユーザーが `startingYear` を指定していれば、`displayDate` に `startingYear` と `currentYear` を em ダッシュで区切って表示します。それ以外の場合は `currentYear` を表示します。

<!-- 
The code should look something like this.
 -->
コードは以下のようになります。

```js
let displayDate;

if ( showStartingYear && startingYear ) {
	displayDate = startingYear + '–' + currentYear;
} else {
	displayDate = currentYear;
}
```

<!-- 
<div class="callout callout-tip">
	When you declare a variable with <code>let</code>, it means that the variable may be reassigned later. Declaring a variable with <code>const</code> means that the variable will never change. You could rewrite this code using <code>const</code>. It's just a matter of personal preference.
</div>
 -->
> `let` で宣言した変数は、後で再割り当てされる可能性があることを意味します。`const` で宣言した変数は、決して変更されないことを意味します。このコードは `const` を使用して書き換えられますが、これは個人の好みの問題です。

<!-- 
Next, you just need to update the block content to use the `displayDate` instead of the `currentYear` variable.
 -->
あとは `currentYear` 変数の代わりに `displayDate` を使うようにブロックのコンテンツを更新するだけです。

<!-- 
The `Edit()` function should look like the following.
 -->
`Edit()` 関数は以下のようになります。

```js
export default function Edit( { attributes, setAttributes } ) {
	const { showStartingYear, startingYear } = attributes;
	const currentYear = new Date().getFullYear().toString();

	let displayDate;

	if ( showStartingYear && startingYear ) {
			displayDate = startingYear + '–' + currentYear;
	} else {
		displayDate = currentYear;
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'copyright-date-block' ) }>
					<ToggleControl
						checked={ !! showStartingYear }
						label={ __(
							'Show starting year',
							'copyright-date-block'
						) }
						onChange={ () =>
							setAttributes( {
								showStartingYear: ! showStartingYear,
							} )
						}
					/>
					{ showStartingYear && (
						<TextControl
							label={ __(
								'Starting year',
								'copyright-date-block'
							) }
							value={ startingYear || '' }
							onChange={ ( value ) =>
								setAttributes( { startingYear: value } )
							}
						/>
					) }
				</PanelBody>
			</InspectorControls>
			<p { ...useBlockProps() }>© { displayDate }</p>
		</>
	);
}
```

<!-- 
Save the file and refresh the Editor. Confirm that the block content updates correctly when you make changes in the Settings panel.
 -->
ファイルを保存し、エディターを更新します。設定パネルで変更を加えると、ブロックのコンテンツが正しく更新されることを確認してください。

<!-- 
![A live look at the block content being updated by the new fields in the Setting Sidebar](https://developer.wordpress.org/files/2023/12/block-tutorial-13.gif)
 -->
![設定サイドバーの新しいフィールドによりブロックのコンテンツが更新される様子](https://developer.wordpress.org/files/2023/12/block-tutorial-13.gif)

<!-- 
### Updating render.php
 -->
### render.php の更新

<!-- 
While the Editor looks great, the starting year functionality has yet to be added to the front end. Let's fix that by updating the `render.php` file.
 -->
エディター側は完成しましたが、フロントエンドにはまだ開始年を表示する機能が追加されていません。`render.php` ファイルを更新して、これを修正します。

<!-- 
Start by adding a variable called `$display_date` and replicate what you did in the `Edit()` function above.
 -->
まず、変数 `$display_date` を追加して、上の `Edit()` 関数での実装を繰り返します。

<!-- 
This variable should display the value of the `startingYear` attribute and the `$current_year` variable separated by an em dash, or just the `$current_year` is the `showStartingYear` attribute is `false`.
 -->
この変数には `startingYear` 属性の値と `$current_year` 変数を em ダッシュで区切って表示するか、または `showStartingYear` 属性が `false` のとき `$current_year` の値だけを表示します。

<!-- 
<div class="callout callout-tip">
	<p>Three variables are exposed in the <code>render.php</code>, which you can use to customize the block's output:</p>
	<ul>
		<li><code>$attributes</code> (array): The block attributes.</li>
		<li><code>$content</code> (string): The block default content.</li>
		<li><code>$block</code> (WP_Block): The block instance.</li>
	</ul>
</div>
 -->
> `render.php` では3つの変数が公開されています。これを使用してブロックの出力をカスタマイズできます。
> - `$attributes` (array): ブロックの属性
> - `$content` (string): ブロックのデフォルトコンテンツ
> - `$block` (WP_Block): ブロックのインスタンス

<!-- 
The code should look something like this.
 -->
コードは以下のようになります。

```php
if ( ! empty( $attributes['startingYear'] ) && ! empty( $attributes['showStartingYear'] ) ) {
	$display_date = $attributes['startingYear'] . '–' . $current_year;
} else {
	$display_date = $current_year;
}
```

<!-- 
Next, you just need to update the block content to use the `$display_date` instead of the `$current_year` variable.
 -->
あとは `$current_year` 変数の代わりに `$display_date` を使うようにブロックの内容を更新するだけです。

<!-- 
Your final `render.php` file should look like this.
 -->
最終的な `render.php` ファイルは次のようになります。

```php
<?php
$current_year = date( "Y" );

if ( ! empty( $attributes['startingYear'] ) && ! empty( $attributes['showStartingYear'] ) ) {
	$display_date = $attributes['startingYear'] . '–' . $current_year;
} else {
	$display_date = $current_year;
}
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
    © <?php echo esc_html( $display_date ); ?>
</p>
```

<!-- 
Save the file and confirm that the correct block content is now appearing on the front end of your site.
 -->
ファイルを保存し、サイトのフロントエンドに正しいブロックコンテンツが表示されていることを確認してください。

<!-- 
You have now successfully built a dynamically rendered custom block that utilizes block supports, core WordPress components, and custom attributes. In many situations, this is as far as you would need to go for a block displaying the copyright date with some additional functionality.
 -->
以上で動的にレンダーされるカスタムブロックが完成しました。ブロックサポート、WordPress のコアコンポーネント、カスタム属性を利用しています。追加の機能もあり、著作権と日付を表示するブロックとしては多くの場面で十分すぎる内容です。

<!-- 
In the next section, however, you will add static rendering to the block. This exercise will illustrate how block data is stored in WordPress and provide a fallback should this plugin ever be inadvertently disabled.
 -->
しかし、次のセクションでは、ブロックに静的レンダリングを追加します。WordPress でブロックデータがどのように保存されるかを説明し、意図せずプラグインが無効になってしまった際の、フォールバックを実装します。

<!-- 
## Adding static rendering
 -->
## 静的レンダリングの追加

<!-- 
A block can utilize dynamic rendering, static rendering, or both. The block you have built so far is dynamically rendered. Its block markup and associated attributes are stored in the database, but its HTML output is not.
 -->
ブロックは、動的レンダリング、静的レンダリング、またはその両方を利用できます。これまでに作成したブロックは、動的にレンダーされます。動的にレンダーされるブロックでは、ブロックのマークアップと関連した属性はデータベースに保存されますが、HTML 出力は保存されません。

<!-- 
Statically rendered blocks will always store the block markup, attributes, and output in the database. Blocks can also store static output in the database while being further enhanced dynamically on the front end, a combination of both methods.
 -->
静的にレンダーされるブロックは、常にブロックマークアップ、属性、出力をデータベース内に保存します。ブロックは2つを組み合わせ、静的な出力をデータベースに保存しながら、フロントエンドでさらに動的に拡張することもできます。

<!-- 
You will see the following if you switch to the Code editor from within the Editor.
 -->
エディターからコードエディターに切り替えると、次のようになります。

```html
<!-- wp:create-block/copyright-date-block {"showStartingYear":true,"startingYear":"2017"} /-->
```
<!-- 
Compare this to a statically rendered block like the Paragraph block.
 -->
これを段落ブロックのような静的にレンダーされるブロックと比較してみてください。

```html
<!-- wp:paragraph -->
<p>This is a test.</p>
<!-- /wp:paragraph -->
```

<!-- 
The HTML of the paragraph is stored in post content and saved in the database.
 -->
段落の HTML は投稿コンテンツに格納され、データベースに保存されます。

<!-- 
You can learn more about dynamic and static rendering in the [Fundamentals documentation](https://developer.wordpress.org/block-editor/getting-started/fundamentals/). While most blocks are either dynamically or statically rendered, you can build a block that utilizes both methods.
 -->
動的レンダリングと静的レンダリングについては、[ブロック開発の基本原理](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/)を参照してください。ほとんどのブロックは動的または静的のどちらかでレンダーされますが、両方の方法を利用するブロックも作成できます。

<!-- 
### Why add static rendering?
 -->
### 静的レンダリングを追加する理由

<!-- 
When you add static rendering to a dynamically rendered block, the `render.php` file will still control the output on the front end, but the block's HTML content will be saved in the database. This means that the content will remain if the plugin is ever removed from the site. In the case of this Copyright Date Block, the content will revert to a Custom HTML block that you can easily convert to a Paragraph block.
 -->
動的にレンダーされるブロックに静的レンダリングを追加しても引き続き `render.php` ファイルがフロントエンドの出力を制御しますが、ブロックの HTML コンテンツはデータベースに保存されます。このことは、プラグインがサイトから削除されても、コンテンツが残ることを意味します。この Copyright Date ブロックの場合、コンテンツはカスタム HTML ブロックに戻り、簡単に段落ブロックに変換できます。

<!-- 
![An error message in the Editor when a block type no longer exists](https://developer.wordpress.org/files/2023/12/block-tutorial-14.png)
 -->
![ブロックタイプが存在しなくなった際のエディターでのエラーメッセージ](https://developer.wordpress.org/files/2023/12/block-tutorial-14.png)

<!-- 
While not necessary in all situations, adding static rendering to a dynamically rendered block can provide a helpful fallback should the plugin ever be disabled unintentionally.
 -->
すべての状況で必要ではありませんが、動的にレンダーされるブロックに静的レンダリングを追加すると、意図せずプラグインが無効化された場合にフォールバックとして役立ちます。

<!-- 
Also, consider a situation where the block markup is included in a block pattern or theme template. If a user installs that theme or uses the pattern without the Copyright Date Block installed, they will get a notice that the block is not available, but the content will still be displayed.
 -->
またブロックのマークアップが、ブロックパターンやテーマテンプレートに含まれている場合を考えます。Copyright Date ブロックをインストールしていない状態で、テーマをインストールしたり、パターンを使用すると、ブロックが利用できないという通知は表示されますが、コンテンツは表示されます。

<!-- 
Adding static rendering is also a good exploration of how block content is stored and rendered in WordPress.
 -->
静的レンダリングを追加することは、WordPress でブロックコンテンツがどのように保存され、レンダーされるかを調べる良い方法でもあります。

<!-- 
### Adding a save function
 -->
### save 関数の追加

<!-- 
Start by adding a new file named `save.js` to the `src/` folder. In this file, add the following.
 -->
まず、新しいファイル `save.js` を `src/` フォルダに追加します。このファイルに以下のコードを追加します。

```js
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Copyright Date Block – hello from the saved content!' }
		</p>
	);
}
```

<!-- 
This should look similar to the original `edit.js` file, and you can refer to the [block wrapper](https://developer.wordpress.org/block-editor/getting-started/fundamentals/block-wrapper/#the-save-components-markup) documentation for additional information.
 -->
これはオリジナルの `edit.js` ファイルと同じように見えます。追加の情報については、[ブロックラッパー](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/block-wrapper/#Save-%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%83%9E%E3%83%BC%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97)のドキュメントを参照してください。

<!-- 
Next, in the `index.js` file, import this `save()` function and add a save property to the `registerBlockType()` function. Here's a simplified view of the updated file.
 -->
次に、 `index.js` ファイルで、この `save()` 関数をインポートし、 `registerBlockType()` 関数に save プロパティを追加します。以下は更新したファイルの簡略版です。

```js
import save from './save';

...

registerBlockType( metadata.name, {
	icon: calendarIcon,
	edit: Edit,
	save
} );
```

<!-- 
<div class="callout callout-tip">
	When defining properties of an object, if the property name and the variable name are the same, you can use shorthand property names. This is why the code above uses <code>save</code> instead of <code>save: save</code>.
</div>
 -->
オブジェクトのプロパティを定義する際、プロパティ名と変数名が同じであれば、省略形のプロパティ名を使用できます。上のコードの `save` は `save: save` の意味です。

<!-- 
Save both `save.js` and `index.js` files and refresh the Editor. It should look like this.
 -->
`save.js` と `index.js` の両方のファイルを保存し、エディターを更新します。以下のようになるはずです。

<!-- 
![A block validation error message in the Editor](https://developer.wordpress.org/files/2023/12/block-tutorial-15.png)
 -->
![エディターのブロックバリデーションのエラーメッセージ](https://developer.wordpress.org/files/2023/12/block-tutorial-15.png)

<!-- 
Don't worry, the error is expected. If you open the inspector in your browser, you should see the following message.
 -->
心配しないでください。想定内のエラーです。ブラウザでインスペクタを開くと、次のようなメッセージが表示されるはずです。

<!-- 
![A block validation error message in the console](https://developer.wordpress.org/files/2023/12/block-tutorial-16.png)
 -->
![コンソールでのブロックバリデーションエラーメッセージ](https://developer.wordpress.org/files/2023/12/block-tutorial-16.png)

<!-- 
This block validation error occurs because the `save()` function returns block content, but no HTML is stored in the block markup since the previously saved block was dynamic. Remember that this is what the markup currently looks like.
 -->
このブロックバリデーションエラーは、`save()` 関数はブロックの内容を返すものの、以前に保存されたブロックが動的だったため、ブロックのマークアップに HTML が保存されていないために発生します。以下が現在のマークアップであることを思い出してください。

```html
<!-- wp:create-block/copyright-date-block {"showStartingYear":true,"startingYear":"2017"} /-->
```

<!-- 
You will see more of these errors as you update the `save()` function in subsequent steps. Just click "Attempt Block Recovery" and update the page.
 -->
以降のステップで `save()` 関数を更新するたびに、このエラーが繰り返し表示されます。「ブロックのリカバリーを試行」をクリックして、ページを更新してください。

<!-- 
After preforming block recovery, open the Code editor and you will see the markup now looks like this.
 -->
ブロックのリカバリーを実行した後、コードエディターを開くと、マークアップは以下のようになっています。

```html
<!-- wp:create-block/copyright-date-block {"showStartingYear":true,"startingYear":"2017"} -->
<p class="wp-block-create-block-copyright-date-block">Copyright Date Block – hello from the saved content!</p>
<!-- /wp:create-block/copyright-date-block -->
```

<!-- 
You will often encounter block validation errors when building a block with static rendering, and that's ok. The output of the `save()` function must match the HTML in the post content exactly, which may end up out of sync as you add functionality. So long as there are no validation errors when you're completely finished building the block, you will be all set.
 -->
静的レンダリングでブロックを構築すると、しばしばブロックのバリデーションエラーに遭遇しますが、問題ありません。`save()` 関数の出力は、投稿コンテンツの HTML と正確に一致しなければなりませんが、機能を追加するたびに同期は失われます。ブロックを完全に構築し終わったときにバリデーションエラーがなければ、それで大丈夫です。

<!-- 
### Updating save.js
 -->
### save.js の更新

<!-- 
Next, let's update the output of the `save()` function to display the correct content. Start by copying the same approach used in `edit.js`.
 -->
次に、`save()` 関数の出力を更新して、正しい内容を表示するようにします。まず、`edit.js` で使用したのと同じ方法を繰り返します。

<!-- 
1. Add the `attributes` parameter to the function
2. Define the `showStartingYear` and `startingYear` variables
3. Define a `currentYear` variable
4. Define a `displayDate` variable depending on the values of `currentYear`, `showStartingYear`, and `startingYear`
 -->
1. 関数に `attributes` パラメータを追加する
2. 変数 `showStartingYear` と `startingYear` を定義する
3. `currentYear` 変数を定義する
4. `currentYear`、`showStartingYear`、`startingYear` の値に応じて `displayDate` 変数を定義する

<!-- 
The result should look like this.
 -->
結果は以下のようになります。

```js
export default function save( { attributes } ) {
	const { showStartingYear, startingYear } = attributes;
	const currentYear = new Date().getFullYear().toString();

	let displayDate;

	if ( showStartingYear && startingYear ) {
		displayDate = startingYear + '–' + currentYear;
	} else {
		displayDate = currentYear;
	}

	return (
		<p { ...useBlockProps.save() }>© { displayDate }</p>
	);
}
```

<!-- 
Save the file and refresh the Editor. Click "Attempt Block Recovery" and update the page. Check the Code editor, and the block markup should now look something like this.
 -->
ファイルを保存し、エディターを更新します。「ブロックのリカバリーを試行」をクリックし、ページを更新します。コードエディターを確認すると、ブロックマークアップは次のようになっているはずです。

```html
<!-- wp:create-block/copyright-date-block {"showStartingYear":true,"startingYear":"2017"} -->
<p class="wp-block-create-block-copyright-date-block">© 2017–2023</p>
<!-- /wp:create-block/copyright-date-block -->
```

<!-- 
At this point, it might look like you're done. The block content is now saved as HTML in the database and the output on the front end is dynamically rendered. However, there are still a few things that need to be addressed.
 -->
この時点で、すべてが完成したように見えます。ブロックのコンテンツはデータベースに HTML として保存され、フロントエンドの出力は動的にレンダーされます。しかし、まだ対処しなければならないことがいくつかあります。

<!-- 
Consider the situation where the user added the block to a page in 2023 and then went back to edit the page in 2024. The front end will update as expected, but in the Editor, there will be a block validation error. The `save()` function knows that it's 2024, but the block content saved in the database still says 2023.
 -->
2023年にブロックが追加されたページを、2024年に更新したいとします。フロントエンドは期待通りに更新されますが、エディターではブロックのバリデーションエラーが発生します。`save()` 関数は2024年であることを知っていますが、データベースに保存されたブロックのコンテンツは2023年のままのためです。

<!-- 
Let's fix this in the next section.
 -->
次のセクションでこれを修正します。

<!-- 
### Handling dynamic content in statically rendered blocks
 -->
### 静的にレンダーされるブロック内の動的コンテンツの処理

<!-- 
Generally, you want to avoid dynamic content in statically rendered blocks. This is part of the reason why the term "dynamic" is used when referring to dynamic rendering.
 -->
一般的に、静的にレンダーされるブロック内では動的なコンテンツは避けたいところです。これが、動的レンダリングを指すときに「動的」という言葉が使われる理由の一部です。

<!-- 
That said, in this tutorial, you are combining both rendering methods, and you just need a bit more code to avoid any block validation errors when the year changes.
 -->
とはいえ、このチュートリアルでは両方のレンダリング方法を組み合わせており、年が変わったときにブロックバリデーションエラーを抑止するには、もう少しコードが必要です。

<!-- 
The root of the issue is that the `currentYear` variable is set dynamically in the `save()` function. Instead, this should be a static variable within the function, which can be solved with an additional attribute.
 -->
問題の根本は、`save()` 関数の中で `currentYear` 変数が動的に設定されていることです。本来であれば、関数内で静的な変数として設定すべきです。これを追加の属性で解決します。

<!-- 
#### Adding a new attribute
 -->
#### 新しい属性の追加

<!-- 
Open the `block.json` file and add a new attribute called `fallbackCurrentYear` with the type `string`. The `attributes` section of the file should now look like this.
 -->
 `block.json` ファイルを開き、新しい属性 `fallbackCurrentYear` を追加します。ファイルの `attributes` セクションは以下のようになります。

```json
"attributes": {
    "fallbackCurrentYear": {
		"type": "string"
    },
    "showStartingYear": {
		"type": "boolean"
    },
    "startingYear": {
		"type": "string"
	}
},
```

<!-- 
Next, open the `save.js` file and use the new `fallbackCurrentYear` attribute in place of `currentYear`. Your updated `save()` function should look like this.
 -->
次に `save.js` ファイルを開き、`currentYear` の代わりに新しい `fallbackCurrentYear` 属性を使用します。更新した `save()` 関数は次のようになります。

```js
export default function save( { attributes } ) {
	const { fallbackCurrentYear, showStartingYear, startingYear } = attributes;

	let displayDate;

	if ( showStartingYear && startingYear ) {
		displayDate = startingYear + '–' + fallbackCurrentYear;
	} else {
		displayDate = fallbackCurrentYear;
	}

	return (
		<p { ...useBlockProps.save() }>© { displayDate }</p>
	);
}
```

<!-- 
Now, what happens if the `fallbackCurrentYear` is undefined?
 -->
このとき `fallbackCurrentYear` が undefined (未定義) であれば何が起きるでしょう ?

<!-- 
Before the `currentYear` was defined within the function, so the `save()` function always had content to return, even if `showStartingYear` and `startingYear` were undefined.
 -->
以前は `currentYear` は関数内で定義されていたため、`save()` 関数には常に、仮に `showStartingYear` や `startingYear` が未定義であっても、返すコンテンツがありました。

<!-- 
Instead of returning just the copyright symbol, let's add a condition that if `fallbackCurrentYear` is not set, return `null`. It's generally better to save no HTML in the database than incomplete data.
 -->
著作権記号のみを返す代わりに、`fallbackCurrentYear` が設定されていなければ `null` を返す条件を追加しましょう。一般に不完全な HTML データを保存するよりも、何も保存しない方が優れます。

<!-- 
The final `save()` function should look like this.
 -->
最終的な `save()` 関数は次のようになります。

```js
export default function save( { attributes } ) {
	const { fallbackCurrentYear, showStartingYear, startingYear } = attributes;

	if ( ! fallbackCurrentYear ) {
		return null;
	}

	let displayDate;

	if ( showStartingYear && startingYear ) {
		displayDate = startingYear + '–' + fallbackCurrentYear;
	} else {
		displayDate = fallbackCurrentYear;
	}

	return (
		<p { ...useBlockProps.save() }>© { displayDate }</p>
	);
}
```

<!-- 
Save both the `block.json` and `save.js` files; you won't need to make any more changes.
 -->
`block.json` ファイルと `save.js` ファイルの両方を保存します。これ以上の変更はありません。

<!-- 
#### Setting the attribute in edit.js
 -->
#### edit.js での属性の設定

<!-- 
The `save()` function now uses the new `fallbackCurrentYear`, so it needs to be set somewhere. Let's use the `Edit()` function.
 -->
`save()` 関数は新しい `fallbackCurrentYear` を使用するため、どこかで設定する必要があります。`Edit()` 関数を使いましょう。

<!-- 
Open the `edit.js` file and start by defining the `fallbackCurrentYear` variable at the top of the `Edit()` functional alongside the other attributes. Next, review what's happening in the function.
 -->
`edit.js` ファイルを開き、まず `fallbackCurrentYear` 変数を `Edit()` 関数の先頭で、他の属性と一緒に定義します。次に、関数内での動きを確認します。

<!-- 
When the block loads in the Editor, the `currentYear` variable is defined. The function then uses this variable to set the content of the block.
 -->
エディターでブロックがロードされると、`currentYear` 変数が定義されます。そして、この関数はこの変数を使ってブロックのコンテンツをを設定します。

<!-- 
Now, let's set the `fallbackCurrentYear` attribute to the `currentYear` when the block loads if the attribute is not already set.
 -->
次に、`fallbackCurrentYear` 属性がまだ設定されていなければ、ブロックがロードされたときに`fallbackCurrentYear` 属性に `currentYear` を設定します。


```js
if ( currentYear !== fallbackCurrentYear ) {
	setAttributes( { fallbackCurrentYear: currentYear } );
}
```

<!-- 
This will work but can be improved by ensuring this code only runs once when the block is initialized. To do so, you can use the [`useEffect`](https://react.dev/reference/react/useEffect) React hook. Refer to the React documentation for more information about how to use this hook.
 -->
これで動作しますが、ブロックが初期化されたときにこのコードが一度だけ実行されるようにすることで改善できます。それには、[`useEffect`](https://react.dev/reference/react/useEffect) React フックを使用します。このフックの使い方については、React のドキュメントを参照してください。

<!-- 
First, import `useEffect` with the following code.
 -->
まず、以下のコードで `useEffect` をインポートします。

```js
import { useEffect } from 'react';
```
<!-- 
Then wrap the `setAttribute()` code above in a `useEffect` and place this code after the `currentYear` definition in the `Edit()` function. The result should look like this.
 -->
次に、上の `setAttribute()` コードを `useEffect` でラップし、このコードを `Edit()` 関数の `currentYear` 定義の後に置きます。結果は以下のようになります。

<!-- 
```js
export default function Edit( { attributes, setAttributes } ) {
	const { fallbackCurrentYear, showStartingYear, startingYear } = attributes;

	// Get the current year and make sure it's a string.
	const currentYear = new Date().getFullYear().toString();

	// When the block loads, set the fallbackCurrentYear attribute to the
	// current year if it's not already set.
	useEffect( () => {
		if ( currentYear !== fallbackCurrentYear ) {
			setAttributes( { fallbackCurrentYear: currentYear } );
		}
	}, [ currentYear, fallbackCurrentYear, setAttributes ] );

	...
```
 -->
```js
export default function Edit( { attributes, setAttributes } ) {
	const { fallbackCurrentYear, showStartingYear, startingYear } = attributes;

	// 現在の年を取得し、文字列であることを確認する
	const currentYear = new Date().getFullYear().toString();

	// ブロックロードのとき、fallbackCurrentYear がまだ設定されていなければ、
	// 現在の年に設定する
	useEffect( () => {
		if ( currentYear !== fallbackCurrentYear ) {
			setAttributes( { fallbackCurrentYear: currentYear } );
		}
	}, [ currentYear, fallbackCurrentYear, setAttributes ] );

	...
```

<!-- 
When the block is initialized in the Editor, the `fallbackCurrentYear` attribute will be immediately set. This value will then be available to the `save()` function, and the correct block content will be displayed without block validation errors.
 -->
エディターでブロックが初期化されると、`fallbackCurrentYear` 属性はすぐに設定されます。この値は `save()` 関数で利用できるようになり、正しいブロックのコンテンツがブロックのバリデーションエラーなしで表示されます。

<!-- 
The one caveat is when the year changes. If a Copyright Date Block was added to a page in 2023 and then edited in 2024, the `fallbackCurrentYear` attribute will no longer equal the `currentYear`, and the attribute will be automatically updated to `2024`. This will update the HTML returned by the `save()` function.
 -->
注意する点は、年が変わる場合です。Copyright Date ブロックが2023年にページに追加され、2024年に編集された場合、`fallbackCurrentYear` 属性は `currentYear` と一致せず、属性は自動的に `2024` に更新されます。これにより、`save()` 関数が返す HTML も更新されます。

<!-- 
You will not get any block validation errors, but the Editor will detect that changes have been made to the page and prompt you to update.
 -->
ブロックのバリデーションエラーは発生しませんが、エディターはページに変更を検知し、更新を促します。

<!-- 
#### Optimizing render.php
 -->
#### render.php の最適化

<!-- 
The final step is to optimize the `render.php` file. If the `currentYear` and the `fallbackCurrentYear` attribute are the same, then there is no need to dynamically create the block content. It is already saved in the database and is available in the  `render.php` file via the `$block_content` variable.
 -->
最後のステップは `render.php` ファイルの最適化です。`currentYear` 属性と `fallbackCurrentYear` 属性が同じであれば、ブロックのコンテンツを動的に作成する必要はありません。既にデータベースに保存されていて、`$content` 変数を通じて `render.php` ファイルで利用できます。

<!-- 
Therefore, update the file to render the `$block_content` if `currentYear` and `fallbackCurrentYear` match.
 -->
一方 `currentYear` と `fallbackCurrentYear` が一致しなければ、生成したコンテンツをレンダーするようにファイルを更新します。

<!-- 
```php
$current_year = date( "Y" );

// Determine which content to display.
if ( isset( $attributes['fallbackCurrentYear'] ) && $attributes['fallbackCurrentYear'] === $current_year ) {

	// The current year is the same as the fallback, so use the block content saved in the database (by the save.js function).
	$block_content = $content;
} else {

	// The current year is different from the fallback, so render the updated block content.
	if ( ! empty( $attributes['startingYear'] ) && ! empty( $attributes['showStartingYear'] ) ) {
		$display_date = $attributes['startingYear'] . '–' . $current_year;
	} else {
		$display_date = $current_year;
	}

	$block_content = '<p ' . get_block_wrapper_attributes() . '>© ' . esc_html( $display_date ) . '</p>';
}

echo wp_kses_post( $block_content );
```
 -->
```php
$current_year = date( "Y" );

// どのコンテンツを表示するかを決定する。
if ( isset( $attributes['fallbackCurrentYear'] ) && $attributes['fallbackCurrentYear'] === $current_year ) {

	// 現在の年はフォールバックと同じ。save.js 関数で保存された、データベース内のブロックコンテンツを使用する
	$block_content = $content;
} else {

	// 現在の年はフォールバックと異なる。更新されたブロックコンテンツをレンダーする
	if ( ! empty( $attributes['startingYear'] ) && ! empty( $attributes['showStartingYear'] ) ) {
		$display_date = $attributes['startingYear'] . '–' . $current_year;
	} else {
		$display_date = $current_year;
	}

	$block_content = '<p ' . get_block_wrapper_attributes() . '>© ' . esc_html( $display_date ) . '</p>';
}

echo wp_kses_post( $block_content );
```
<!-- 
That's it! You now have a block that utilizes both dynamic and static rendering.
 -->
以上です。これで、動的レンダリングと静的レンダリングの両方を利用するブロックが完成しました。

<!-- 
## Wrapping up
 -->
## まとめ

<!-- 
Congratulations on completing this tutorial and building your very own Copyright Date Block. Throughout this journey, you have gained a solid foundation in WordPress block development and are now ready to start building your own blocks.
 -->
おめでとうございます。チュートリアルを完了し、オリジナルの Copyright Date ブロックを構築しました。このチュートリアルを通して、WordPress のブロック開発における確かな基礎を身につけ、自身のブロックを構築する準備が整いました。

<!-- 
For final reference, the complete code for this tutorial is available in the [Block Development Examples](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/copyright-date-block-09aac3) repository on GitHub.
 -->
最後にこのチュートリアルの完全なコードは、GitHub の [Block Development Examples](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/copyright-date-block-09aac3) リポジトリにあります。

<!-- 
Now, whether you're now looking to refine your skills, tackle more advanced projects, or stay updated with the latest WordPress trends, the following resources will help you improve your block development skills:
 -->
これからスキルを磨きたい方、より高度なプロジェクトに取り組みたい方、WordPress の最新トレンドを知りたい方には、以下の情報やサイトがブロック開発のスキルアップに役立ちます。

<!-- 
- [Block Development Environment](https://developer.wordpress.org/block-editor/getting-started/devenv/)
- [Fundamentals of Block Development](https://developer.wordpress.org/block-editor/getting-started/fundamentals/)
- [WordPress Developer Blog](https://developer.wordpress.org/news/)
- [Block Development Examples](https://github.com/WordPress/block-development-examples) | GitHub repository
 -->
- [ブロック開発環境](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/)
- [ブロック開発の基本原理](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/)
- [WordPress 開発者ブログ](https://developer.wordpress.org/news/)
- [Block Development Examples](https://github.com/WordPress/block-development-examples) | GitHub リポジトリ


<!-- Remember, every expert was once a beginner. Keep learning, experimenting, and, most importantly, have fun building with WordPress.
 -->
どんなエキスパートも、かつては初心者だったことを忘れないでください。学び続け、実験し続け、そして最も重要な教えとして、WordPress での構築を楽しんでください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/tutorial.md)