<!-- 
# Share your Block with the World
 -->
# ブロックを共有する

<!-- 
So you've created an awesome block? Care to share?
 -->
素晴らしいブロックが完成しましたか ? ぜひ、世界と共有しましょう !

<!-- 
**Contents**:
 -->
目次

<!--  
1. Help users understand your block
2. Analyze your plugin
3. Zip & Submit
 --> 
1. ブロックを理解してもらう
2. プラグインを解析する
3. zip して、サブミットする

<!-- 
## Step 1: Help users understand your block
 -->
## ステップ1: ブロックを理解してもらう
<!-- 
It is important to the Block Directory and our end users to provide easy to understand information on how your block was created.
 -->
ブロックディレクトリにとっても、エンドユーザーにとっても、ブロックがどのように作成されたのかをわかりやすく伝えることは重要です。

<!-- 
**Guidelines**:
 -->
**ガイドライン**:

<!-- 
-   Name your block based on what it does
-   Clearly describe your block
-   Add Keywords for all contexts
-   Choose the right category
 -->
-   内容を表す名前をつける
-   説明は明確に記述する
-   すべてのコンテキストにキーワードを追加する
-   正しいカテゴリーを選択する

<!-- 
### Name your block based on what it does
 -->
### 内容を表す名前をつける

<!-- 
Users typically search the Block Directory within the Block Editor and do so in the context of a task. For example, when building their post, a user may search the Block Directory for an “image gallery”. Naming your block accordingly will help the Block Directory surface it when it's needed.
 -->
一般にユーザーは、ブロックエディターの使用中に、タスクのコンテキスト内でブロックディレクトリを検索します。たとえば、ユーザーは投稿を作成中、ブロックディレクトリ内を「image gallery」で検索します。このとき、正しくブロックを名前付けしていれば、ブロックディレクトリ必要とされるブロックを表示できます。

<!-- 
**Not So Good**: WebTeam5 Image Works
**Good**: Responsive Image Slider by WebTeam5
 -->
- **あまり良くない**: WebTeam5 Image Works
- **良い**: Responsive Image Slider by WebTeam5

<!-- 
**Question: What happens when there are multiple blocks with similar names?**
Try your best to make your block's name functional and unique to make it stand out. Look for applicable synonyms or include a prefix if necessary.
 -->
**このとき、同じ名前のブロックが複数ある場合は、どうなるでしょう ?**

ブロックの名前はできる限り、機能を表し、ユニークで、目立つものにしてください。適切な同義語を探し、必要であれば接頭辞を付けてください。

<!-- 
### Clearly describe your block
 -->
### 説明は明確に記述する

<!-- 
The description really helps to communicate what your block does.The quicker a user understands how your block will help them, the more likely it is a user will use your block. Users will be reading your block's description within the Block Editor where space can be limited. Try to keep it short and concise.
 -->
ブロックの説明は、ブロックが何をするのかを知らせるために非常に重要です。ブロックが何に役立つのかをすぐに理解できれば、すぐに使い始めてくれるでしょう。ユーザーはブロックエディターの限られたスペースでブロックの説明を読みます。短く、完結に記述してください。

<!-- 
**Not So Good**: The best way to show images on your website using jQuery and CSS.
**Good**: A responsive image gallery block.
 -->
- **あまり良くない**: The best way to show images on your website using jQuery and CSS. (サイトで画像を表示する最高の方法です。jQuery と CSS を使用しています。)
- **良い**: A responsive image gallery block. (レスポンシブなイメージギャラリーブロック)

<!-- 
**Tip**: It’s not about marketing your block, in fact we want to avoid marketing in blocks. You can read more about it in the [plugin guidelines]. Stick to being as clear as you can. The Block Directory will provide metrics to let users know how awesome your block is!
 -->
**ヒント**: ここはブロックのマーケティングの場所ではありません。実際、ブロック内でのマーケティングは避けるべきです。詳細については「プラグインガイドブック」を参照してください。説明はできる限り明確に記述してください。あなたのブロックがどれだけ素晴らしいかは、ブロックディレクトリが指標を提供してくれるでしょう。

<!-- 
### Add Keywords for broader context
 -->
### 広範なコンテキストにキーワードを追加する

<!-- 
Keywords add extra context to your block and make it more likely to be found in the inserter.
 -->
キーワードはブロックにコンテキストを追加し、インサーター内でユーザーが発見しやすくなります。

<!-- 
Examples for an Image Slider block:
 -->
イメージスライダーブロックの場合の例です。

-   slider
-   carousel
-   gallery

<!-- 
[Read more about keywords.](/docs/reference-guides/block-api/block-metadata.md#keywords)
 -->
[キーワードの詳細についてはこちらを参照](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/#keywords)してください。

<!-- 
### Choose the right category
 -->
### 正しいカテゴリーを選択する

<!-- 
The Block Editor allows you to indicate the category your block belongs in, making it easier for users to locate your block in the menu.
 -->
ブロックエディターには、ブロックの属するカテゴリーを指示できます。ユーザーがメニュー内でブロックを配置しやすくなります。

<!-- 
**Possible Values**:
 -->
**可能な値**:

-   text
-   media
-   design
-   widgets
-   theme
-   embed
<!-- 
[Read more about categories.](/docs/reference-guides/block-api/block-metadata.md#category)
 -->
[カテゴリーについての詳細はこちら](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata#keywords)してください。

<!-- 
Wondering where to input all this information? Read the next section :)
 -->
これらすべての情報をどこに入力すればよいのだろう、と思案に暮れていませんか ? 次のセクションをお読みください :)

<!-- 
## Step 2: Analyze your plugin
 -->
## ステップ2: プラグインを解析する

<!-- 
Each block in your plugin should have a corresponding `block.json` file with the [block metadata](/docs/reference-guides/block-api/block-metadata.md). This file provides the Block Directory important information about your block. Along with being the place to store contextual information about your block like the: `name`, `description`, `keywords` and `category`, the `block.json` file stores the location of your block’s files.
 -->
プラグイン内の各ブロックは、対応する `block.json` ファイルと [ブロックメタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) を持つ必要があります。このファイルはブロックディレクトリに、ブロックに関する重要な情報を提供します。`block.json` ファイルは、ブロックに関するコンテキスト情報、たとえば `name`、`description`、`keywords`、`category`を保存する場所であり、ブロックのファイルの場所を格納します。

<!-- 
Block plugins submitted to the Block Directory can contain mutliple blocks only if they are children of a single parent/ancestor. There should only be one main block. For example, a list block can contain list-item blocks. Children blocks must set the `parent` property in their `block.json` file.
 -->
ブロックディレクトリにサブミットされたブロックプラグインは、単一の親や先祖を持つ場合にのみ複数のブロックを含むことができます。ブロックは、メインブロック1つのみでなければなりません。たとえば、リストブロックは複数のリスト項目ブロックを含むことができます。子ブロックは、`block.json` ファイルで `parent` プロパティを設定する必要があります。

<!-- 
Double check that the following is true for your block:
 -->
以下のルールを満たすことを再度、確認してください。

<!-- 
-   `editorScript` is pointing to the JavaScript bundle that includes all the code used in the **editor**.
-   `editorStyle` is pointing to the CSS bundle that includes all the css used in the **editor**.
-   `script` is pointing to the JavaScript bundle that includes all the code used on the **website**.
-   `style` is pointing to the CSS bundle that includes all the code used on the **website**.
 -->
-   `editorScript` は、**エディター** で使用されるすべてのコードを含む JavaScript バンドルを指している。
-   `editorStyle` は、**エディター** で使用されるすべての css を含む CSS バンドルを指している。
-   `script`  は、**Web サイト** で使用されるすべてのコードを含む JavaScript バンドルを指している。
-   `style` **Web サイト** で使用されるすべての css を含む CSS バンドルを指している。

<!-- 
We encourage the separation of code by using both editorScript/editorStyle and script/style files listed in your block.json to keep the backend and frontend interfaces running smoothly. Even though only one file is required.
 -->
block.json にリストした、editorScript/editorStyle および script/style ファイルの両方を使用して、コードを分離してください。これで、バックエンドインターフェースとフロントエンドインターフェースがスムーズに動作します。1つファイルが必要なだけですが。

<!-- 
Here is an example of a basic block.json file.
 -->
基本的な block.json ファイルの例です。

```json
{
	"name": "plugin-slug/image-slider",
	"title": "Responsive Image Slider",
	"description": "A responsive and easy to use image gallery block.",
	"keywords": [ "slider", "carousel", "gallery" ],
	"category": "media",
	"editorScript": "file:./dist/editor.js"
}
```
<!-- 
The `block.json` file also contains other important properties. Take a look at an [example block.json](/docs/reference-guides/block-api/block-metadata.md) for additional properties to be included in the block.json file.
 -->
また、`block.json` ファイルは他の重要なプロパティも含みます。block.json ファイルが含む追加プロパティの詳細については [block.json の例](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/) を参照してください。

<!-- 
## Step 3: Zip & Submit
 -->
## ステップ3: zip して、サブミットする

<!-- 
The community is thankful for your contribution. It is time to submit your plugin.
 -->
コミュニティは、あなたのコントリビューション (貢献) に感謝します。プラグインをサブミットしましょう。

<!-- 
Go through [the block guidelines](https://github.com/WordPress/wporg-plugin-guidelines/blob/block-guidelines/blocks.md). Create a zip file of your block and go to the [block plugin validator](https://wordpress.org/plugins/developers/block-plugin-validator/) and upload your plugin.
 -->
[ブロックガイドライン](https://github.com/WordPress/wporg-plugin-guidelines/blob/block-guidelines/blocks.md) をお読みください。ブロックの zip ファイルを作成し、[ブロックプラグインバリエーター](https://wordpress.org/plugins/developers/block-plugin-validator/) に移動し、プラグインをアップロードしてください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/tutorials/create-block/submitting-to-block-directory.md)
