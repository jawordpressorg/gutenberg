<!-- 
# Block Design
 -->
# ブロックのデザイン

<!-- 
The following are best practices for designing a new block, with recommendations and detailed descriptions of existing blocks to illustrate our approach to creating blocks.
 -->
この記事では新しいブロックをデザインする際のベストプラクティスを紹介します。既存のブロックの詳細な説明とお勧め、ブロックを作成する際の私たちのアプローチを示します。

<!-- 
## Best Practices
 -->
## ベストプラクティス

<!-- 
### The primary interface for a block is the content area of the block
 -->
### ブロックのメインのインターフェースは「コンテンツ領域」

<!-- 
Since the block itself represents what will actually appear on the site, interaction here hews closest to the principle of direct manipulation and will be most intuitive to the user. This should be thought of as the primary interface for adding and manipulating content and adjusting how it is displayed. There are two ways of interacting here:
 -->
ブロックはそれ自身でサイトでの実際の見え方を表します。このためブロックでのインタラクションが「直接操作」の原則に最も近く、ユーザーにとって最も直感的です。コンテンツの追加や操作、表示の調整においては、ブロックのコンテンツ領域をメインのインターフェースと考えてください。ブロックでのインタラクションには2種類あります。

<!-- 
1. The placeholder content in the content area of the block can be thought of as a guide or interface for users to follow a set of instructions or “fill in the blanks”. For example, a block that embeds content from a 3rd-party service might contain controls for signing in to that service in the placeholder.
2. After the user has added content, selecting the block can reveal additional controls to adjust or edit that content. For example, a signup block might reveal a control for hiding/showing subscriber count. However, this should be done in minimal ways, so as to avoid dramatically changing the size and display of a block when a user selects it (this could be disorienting or annoying).
 -->
1. ブロックコンテンツ領域内のプレースホルダーコンテンツは、ユーザー向けのガイドまたはインターフェースです。ユーザーは一連の手順や「ここに入力してください」という指示に従います。たとえばサードパーティサービスからのコンテンツを埋め込むブロックであれば、プレースホルダーにはサービスへのサインイン用コントロールを配置できます。
2. ユーザーがコンテンツを追加し、ブロックを選択すると、コンテンツを調整したり編集するコントロールを表示できます。たとえばサインアップブロックであればサブスクライブ数を表示、非表示できるコントロールを配置したいでしょう。ただし、これは最小限の方法で行うべきです。ユーザーがブロックを選択するたびにブロックのサイズや見た目を大きく変えるとユーザーは混乱したり、うるさく感じます。

<!-- 
### The Block Toolbar is a secondary place for required options & controls
 -->
### 必要なオプションやコントール用には「ブロックツールバー」が2番目の候補

<!-- 
Basic block settings won’t always make sense in the context of the placeholder/content UI. As a secondary option, options that are critical to the functionality of a block can live in the block toolbar. The Block Toolbar is still highly contextual and visible on all screen sizes. One notable constraint with the Block Toolbar is that it is icon-based UI, so any controls that live in the Block Toolbar need to be ones that can effectively be communicated via an icon or icon group.
 -->
常にプレースホルダー / コンテンツ UI のコンテキストが基本のブロック設定で有効とは限りません。ブロックの機能に対して2番目に重要と思われるオプションは、ブロックツールバーに配置してください。ブロックツールバーもまた非常にコンテキスト指向であり、すべての画像サイズで表示されます。1点、ブロックツールバーで注意すべき制約はアイコンベースの UI であることです。ブロックツールバーに挿入するコントロールは、アイコンやアイコングループを通して効果的にコミュニケーションする必要があります。

### Group Block Toolbar controls with related items

The Block Toolbar groups controls in segments, hierarchically. The first segment contains block type controls, such as the block switcher, the drag handle, and the mover control. The second group contains common and specific block tools that affect the entire block, followed by inline formatting, and the "More" menu. Optionally "Meta" or "Other" groups can separate some tools in their own segment.

![A screenshot showing examples of block toolbar segment groupings.](https://make.wordpress.org/design/files/2021/03/docs_block-toolbar-structure.png)

<!-- 
### The Settings Sidebar should only be used for advanced, tertiary controls
 -->
### 詳細なオプションを設定する「設定サイドバー」は3番目のコントロール

<!-- 
The Settings Sidebar is not visible by default on a small / mobile screen, and may also be collapsed in a desktop view. Therefore, it should not be relied on for anything that is necessary for the basic operation of the block. Pick good defaults, make important actions available in the block toolbar, and think of the Settings Sidebar as something that most users should not need to open.
 -->
設定サイドバーは、幅の小さな画面やモバイル画面ではデフォルトで表示されず、またデスクトップビューでも折りたたまれている場合があります。したがって設定サイドバーにはブロックの基本操作に必要なオプションを配置しないでください。まず、最適なデフォルト値を設定し、重要なアクションをブロックツールバーに配置した上で、ほとんどのユーザーは開く必要さえないオプションを設定サイドバーに置くことを考えてください。

<!-- 
In addition, use sections and headers in the Settings Sidebar if there are more than a handful of options, in order to allow users to easily scan and understand the options available.

Each Settings Sidebar comes with an "Advanced" section by default. This area houses an "Additional CSS Class" field, and should be used to house other power user controls.
 -->
また多くのオプションがある場合は、ユーザーが簡単に検索でき、利用可能なオプションを把握できるよう、設定サイドバーのセクションやヘッダーを使用してください。

設定サイドバーにはデフォルトで「高度な設定」セクションがあり、「追加 CSS クラス」フィールドが含まれています。ここにはパワーユーザー向けのコントロールを配置してください。

<!-- 
## Setup state vs. live preview state
 -->
## セットアップ状態とライブプレビュー状態の対比

<!-- 
Setup states, sometimes referred to as "placeholders", can be used to walk users through an initial process before showing the live preview state of the block. The setup process gathers information from the user that is needed to render the block. A block’s setup state is indicated with a grey background to provide clear differentiation for the user. Not all blocks have setup states — for example, the Paragraph block.
 -->
「セットアップ状態」は「プレースホルダー」とも呼ばれ、ユーザーにブロックの「ライブプレビュー状態」を表示する前に、最初のセットアッププロセスを実行します。セットアッププロセスではブロックのレンダーに必要な情報をユーザーから集めます。ブロックのセットアップ状態は、ユーザーに明確な意識させるために灰色の背景で表示されます。セットアップ状態のないブロックもあり、たとえば「段落」ブロックにセットアップ状態はありません。

<!-- 
![An example of an image block’s setup state on a grey background](https://make.wordpress.org/design/files/2021/03/docs__gallery-setup-state.png)
 -->
![「画像」ブロックの例。セットアップ状態が灰色の背景で表示されている。](https://make.wordpress.org/design/files/2018/12/gallery-setup.png)

<!-- 
A setup state is **not** necessary if:

- You can provide good default content in the block that will meet most people’s needs.
- That default content is easy to edit and customize.
 -->
セットアップ状態が **必要ない** 場合:

- ほとんどのユーザーに必要な、適切なコンテンツをブロック内に提供できる。
- デフォルトのコンテンツが簡単に編集したり、カスタマイズできる。
<!-- 
Use a setup state if:

- There isn’t a clear default state that would work for most users.
- You need to gather input from the user that doesn’t have a 1-1 relationship with the live preview of the block (for example, if you need the user to input an API key to render content).
- You need more information from the user in order to render useful default content.
 -->
セットアップ状態が必要な場合:

- ほとんどのユーザーに当てはまる明確なデフォルト状態がない。
- ユーザーからブロックのライブプレビュー状態とは1対1で対応しない入力を集める必要がある。たとえば、コンテンツのレンダーにユーザーからの API キーの入力が必要な場合など。
- 有用なデフォルトコンテンツのレンダーには、複数の情報が必要である。

<!-- 
For blocks that do have setup states, once the user has gone through the setup process, the placeholder is replaced with the live preview state of that block.
 -->
セットアップ状態のブロックはセットアッププロセスを抜けると、プレースホルダーがライブプレビュー状態で置き換えられます。

<!-- 
![An example of the image gallery’s live preview state](https://make.wordpress.org/design/files/2018/12/gallery-live-preview.png)
 -->
![例: 画像ギャラリーのライブプレビュー状態](https://make.wordpress.org/design/files/2018/12/gallery-live-preview.png)

<!-- 
When the block is selected, additional controls may be revealed to customize the block’s contents. For example, when the image gallery is selected, it reveals controls to remove or add images.
 -->
ブロックを選択すると、ブロックのコンテンツをカスタマイズする追加のコントロールが表示される場合があります。たとえば画像ギャラリーを選択すると、画像を削除、追加するコントロールが表示されます。

<!-- 
![An example of additional controls being revealed on selection of a block.](https://make.wordpress.org/design/files/2018/12/gallery-additional-controls.png)
 -->
![ブロックを選択すると追加コントールが表示される例](https://make.wordpress.org/design/files/2018/12/gallery-additional-controls.png)

<!-- 
In most cases, a block’s setup state is only shown once and then further customization is done via the live preview state. However, in some cases it might be desirable to allow the user to return to the setup state — for example, if all the block content has been deleted or via a link from the block’s toolbar or sidebar.
 -->
多くの場合、ブロックのセットアップ状態は1度だけ表示され、その後のカスタマイズはライブプレビュー状態で行われます。しかし、ユーザーをセットアップ状態に戻したい場合もいくつかあります。たとえば、すべてのブロックコンテンツが削除されたり、ブロックのツールバーやサイドバーからリンクを張っている場合です。

<!-- 
## Do's and Don'ts
 -->
## Do (推奨) と Don't (非推奨)

### Block Toolbar

Group toolbar controls in logical segments. Don't add a segment for each.

![A screenshot comparing a block toolbar with good vs. bad toolbar segment groupings.](https://make.wordpress.org/design/files/2021/03/docs__block-toolbar-do-dont.png)

<!-- 
### Block Identification
 -->
### ブロックの識別

<!-- 
A block should have a straightforward, short name so users can easily find it in the block library. A block named "YouTube" is easy to find and understand. The same block, named "Embedded Video (YouTube)", would be less clear and harder to find in the block library.
 -->
ブロックにはわかりやすい短い名前をつけてください。ユーザーがブロックライブラリー内で簡単に見つけられます。「YouTube」という名前のブロックは簡単に見つけられますし、動作も理解できます。同じブロックでも「埋め込み動画 (YouTube)」になると曖昧ですし、ブロックライブラリー内での検索も難しくなります。

<!-- 
When referring to a block in documentation or UI, use title case for the block title and lowercase for the "block" descriptor. For example:
 -->
ドキュメントや UI でブロックを参照する場合、ブロックのタイトルは先頭大文字、「block」には小文字を使用してください。

<!-- 
- Paragraph block
- Latest Posts block
- Media & Text block
 -->
- Paragraph block
- Latest Posts block
- Media & Text block

<!-- 
Blocks should have an identifying icon, ideally using a single color. Try to avoid using the same icon used by an existing block. The core block icons are based on [Material Design Icons](https://material.io/tools/icons/). Look to that icon set, or to [Dashicons](https://developer.wordpress.org/resource/dashicons/) for style inspiration.
 -->
ブロックには認知しやすいアイコン、できれば単一色のアイコンを準備してください。既存のブロックで使用されているものと同じアイコンは避けてください。コアのブロックのアイコンは [マテリアルデザインアイコン](https://material.io/tools/icons/) に基づいています。 [Dashicons](https://developer.wordpress.org/resource/dashicons/) と共にスタイルのインスピレーションとして参考にしてください。

<!-- 
![A screenshot of the block library with concise block names](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/designers/assets/blocks-do.png)
 -->
![簡潔なブロック名を持つブロックライブラリーのスクリーンショット](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/designers-developers/designers/assets/blocks-do.png)

**Do:**
<!-- 
Use concise block names.
 -->
簡潔なブロック名を使用してください。

<!-- 
![A screenshot of the block library with long, multi-line block names](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/designers/assets/blocks-dont.png)
 -->
![長く、複数行に渡るブロック名を持つブロックライブラリーのスクリーンショット](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/designers-developers/designers/assets/blocks-dont.png)

**Don't:**
<!-- 
Avoid long, multi-line block names.
 -->
長く、複数行に渡るブロック名は避けてください。

<!-- 
### Block Description
 -->
### ブロックの説明

<!-- 
Every block should include a description that clearly explains the block's function. The description will display in the Settings Sidebar.
 -->
すべてのブロックに明白にブロックの機能を説明する記述を付けてください。説明は設定サイドバーに表示されます。

<!-- 
You can add a description by using the description attribute in the [registerBlockType function](/docs/reference-guides/block-api/block-registration.md). 
 -->
説明は [registerBlockType 関数](/docs/designers-developers/developers/block-api/block-registration.md) の description 属性を使用して追加できます。

<!-- 
Stick to a single imperative sentence with an action + subject format. Examples:

- Start with the building block of all narrative.
- Introduce new sections and organize content to help visitors (and search engines) understand the structure of your content.
- Create a bulleted or numbered list.
 -->
「アクション + 主語」の形で単一の命令的な文章にしてください (英語の場合)

- Start with the building block of all narrative. (すべての物語の構成要素から始めます)
- Introduce new sections and organize content to help visitors (and search engines) understand the structure of your content. (新しいセクションを導入し、コンテンツを編成して、訪問者と検索エンジンがコンテンツの構造を理解できるようにします)
- Create a bulleted or numbered list. (番号無しリスト、または番号付きリストを作成します)

<!-- 
![A screenshot of a short block description](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/designers/assets/block-descriptions-do.png)
 -->
![スクリーンショット: ブロックの短い説明の例](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/designers-developers/designers/assets/block-descriptions-do.png)

**Do:**
<!-- 
Use a short, simple block description.
 -->
ブロックの説明には短く、シンプルな文章を使用してください。

<!-- 
![A screenshot of a long block description that includes branding](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/designers/assets/block-descriptions-dont.png)
 -->
![スクリーンショット: ブランドの紹介を含むブロックの長い説明の例](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/designers-developers/designers/assets/block-descriptions-dont.png)

**Don't:**
<!-- 
Avoid long descriptions and branding.
 -->
長い説明やブランドの宣伝は避けてください。

<!-- 
### Placeholders
 -->
### プレースホルダー

<!-- 
If your block requires a user to configure some options before you can display it, you should provide an instructive placeholder state.
 -->
ブロックで何かを表示する前にユーザーによるオプションの構成が必要な場合、手順を指示するプレースホルダー状態を提供してください。

<!-- 
![A screenshot of the Gallery block's placeholder](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/designers/assets/placeholder-do.png)
 -->
![ギャラリーブロックのプレースホルダーのスクリーンショット](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/designers-developers/designers/assets/placeholder-do.png)

**Do:**
<!-- 
Provide an instructive placeholder state.
 -->
手順を指示するプレースホルダー状態を提供してください。

<!-- 
![An example Gallery block placeholder but with intense, distracting colors and no instructions](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/designers/assets/placeholder-dont.png)
 -->
![著しく目障りな色使いの上に説明のないギャラリーブロックプレースホルダーの例](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/designers-developers/designers/assets/placeholder-dont.png)

**Don't:**
<!-- 
Avoid branding and relying on the title alone to convey instructions.
 -->
ブランドを宣伝したり、手順の説明をタイトルだけに頼るのは避けてください。
<!-- 
### Selected and Unselected States
 -->
### 選択済みの状態と、未選択の状態
<!-- 
When unselected, your block should preview its content as closely to the front-end output as possible.

When selected, your block may surface additional options like input fields or buttons to configure the block directly, especially when they are necessary for basic operation.
 -->
ブロックの選択が解除された場合、できる限りフロントエンドの出力に近い形で、コンテンツをプレビュー表示してください。

ブロックが選択された場合、基本的な操作が必要な場合などでは特に、直接ブロックを構成する入力フィールドやボタンなどの追加オプションを表示できます。

<!-- 
![A Google Maps block with inline, always-accessible controls required for the block to function](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/designers/assets/block-controls-do.png)
 -->
![Google Maps ブロック。ブロックの機能に必要なコントロールがインラインで常にアクセス可能](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/designers-developers/designers/assets/block-controls-do.png)

**Do:**
<!-- 
For controls that are essential for the operation of the block, provide them directly inside the block edit view.
 -->
ブロックの操作に必須のコントロールについてはブロックの編集ビュー内に直接、配置してください。

<!-- 
![A Google Maps block with essential controls moved to the sidebar where they can be contextually hidden](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/designers/assets/block-controls-dont.png)
 -->
![Google Maps ブロック。ブロックに必須のコントロールが、隠れる可能性のあるサイドバーに移動している。](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/designers-developers/designers/assets/block-controls-dont.png)

**Don't:**
<!-- 
Do not put controls that are essential to the block in the sidebar, otherwise the block will appear non-functional to mobile users or desktop users who have dismissed the sidebar.
 -->
サイドバーにブロックの必須のコントロールを配置しないでください。モバイルユーザーや、サイドバーを折りたたんだデスクトップユーザーには、ブロックに必須の機能がないまま表示されます。

<!-- 
### Advanced Block Settings
 -->
### 高度なブロック設定

<!-- 
The “Block” tab of the Settings Sidebar can contain additional block options and configuration. Keep in mind that a user can dismiss the sidebar and never use it. You should not put critical options in the Sidebar.
 -->
設定サイドバーの「ブロック」タブには、追加のオプションや構成を配置できます。ただしユーザーはこのサイドバーを折り畳めること、そして決して使わないことを覚えておいてください。重要なオプションはサイドバーに配置すべきではありません。

<!-- 
![A screenshot of the Paragraph block's advanced settings in the sidebar](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/how-to-guides/designers/assets/advanced-settings-do.png)
 -->
![スクリーンショット: 段落ブロックのサイドバー内の高度な設定](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/designers-developers/designers/assets/advanced-settings-do.png)

**Do:**
<!-- 
Because the Drop Cap feature is not necessary for the basic operation of the block, you can put it to the Block tab as optional configuration.
 -->
ドロップキャップ (先頭の文字を大きくする) 機能はブロックの基本操作に必要ないため、オプションの構成としてブロックタブに配置しています。

<!-- 
### Consider mobile
 -->
### モバイル環境への配慮
<!-- 
Check how your block looks, feels, and works on as many devices and screen sizes as you can.
 -->
ブロックの見た目、感じ、操作を見るため、できるだけ多くのデバイス、画面サイズで確認してください。

<!-- 
### Support Gutenberg's dark background editor scheme
 -->
### Gutenberg のダークモードのエディタースキーマのサポート

<!-- 
Check how your block looks with [dark backgrounds](/docs/how-to-guides/themes/theme-support.md#dark-backgrounds) in the editor.
 -->
ブロックがエディターの [ダークモード](/docs/designers-developers/developers/themes/theme-support.md#dark-backgrounds) でどのように見えるか確認してください。

<!-- 
## Examples
 -->
## 例

<!-- 
To demonstrate some of these practices, here are a few annotated examples of default Gutenberg blocks:
 -->
ベストプラクティスを紹介するために、デフォルトの Gutenberg ブロックにコメントを付けて説明します。

<!-- 
### Paragraph
 -->
### 段落

<!-- 
The most basic unit of the editor. The Paragraph block is a simple input field.
 -->
エディターのもっとも基本のユニットです。段落ブロックはシンプルな入力フィールドです。

<!-- 
![Paragraph block](https://cldup.com/HVJe5bGZ8H-3000x3000.png)
 -->
![段落ブロック](https://cldup.com/HVJe5bGZ8H-3000x3000.png)

<!-- 
### Placeholder:
 -->
### プレースホルダー:

<!-- 
- Simple placeholder text that reads “Start writing or type / to choose a block”. The placeholder disappears when the block is selected.
 -->
- シンプルなプレースホルダーテキスト「文章を入力、または / でブロックを選択」が表示されます。ブロックを選択するとプレースホルダーは消えます。

<!-- 
### Selected state:
 -->
### 選択した状態:

<!-- 
- Block Toolbar: Has a switcher to perform transformations to headings, etc.
- Block Toolbar: Has basic text alignments
- Block Toolbar: Has inline formatting options, bold, italic, strikethrough, and link
 -->
- ブロックツールバー: 見出し等への切り替えを実行するスイッチャー
- ブロックツールバー: 基本的なテキスト配置
- ブロックツールバー: インラインのフォーマットオプション、太字、斜体、打ち消し、リンク

<!-- 
### Image
 -->
### 画像
<!-- 
Basic image block.
 -->
基本の画像ブロック

<!-- 
![Image block placeholder](https://cldup.com/w6FNywNsj1-3000x3000.png)
 -->
![画像ブロックのプレースホルダー](https://cldup.com/w6FNywNsj1-3000x3000.png)
<!-- 
### Placeholder:
 -->
### プレースホルダー:
<!-- 
- A generic gray placeholder block with options to upload an image, drag and drop an image directly on it, or pick an image from the media library.
 -->
- 汎用的な灰色のプレースホルダーブロック。オプションには動画のアップロード、この領域への直接のドラッグアンドドロップ、メディアライブラリからの選択があります。
<!-- 
### Selected state:
 -->
### 選択した状態:

<!-- 
- Block Toolbar: Alignments, including wide and full-width if the theme supports it.
- Block Toolbar: Edit Image, to open the Media Library
- Block Toolbar: Link button
- When an image is uploaded, a caption input field appears with a “Write caption…” placeholder text below the image:
 -->
- ブロックツールバー: 配置。テーマがサポートすれば幅広、全幅も
- ブロックツールバー: 画像の編集。メディアライブラリを開く
- ブロックツールバー: リンクボタン
- 画像をアップロードすると、キャプション入力フィールドが、画像の下のプレースホルダーテキスト「キャプションを入力…」とともに表示されます。

<!-- 
![Image Block](https://cldup.com/6YYXstl_xX-3000x3000.png)
 -->
![画像ブロック](https://cldup.com/6YYXstl_xX-3000x3000.png)

<!-- 
### Block settings:
 -->
### ブロック設定
<!-- 
- Has description: “They're worth 1,000 words! Insert a single image.”
- Has options for changing or adding alt text and adding additional custom CSS classes.
 -->
- 説明: 「画像を挿入し、視覚に訴えます。」
- オプション: alt テキストの変更や追加、カスタム CSS クラスの追加
<!-- 
_Future improvements to the Image block could include getting rid of the media modal in place of letting users select images directly from the placeholder itself. In general, try to avoid modals._
 -->
_将来の拡張案: 画像ブロックからメディアモーダルを取り除き、代わりにプレースホルダーから直接、ユーザーが画像を選択できるようにします。一般に、モーダルは避けるべきです。_
<!-- 
### Latest Post
 -->
### 最新の投稿
<!-- 
![Latest Post Block](https://cldup.com/8lyAByDpy_-3000x3000.png)
 -->
![最新の投稿ブロック](https://cldup.com/8lyAByDpy_-3000x3000.png)
<!-- 
### Placeholder:
 -->
### プレースホルダー
<!-- 
Has no placeholder as it works immediately upon insertion. The default inserted state shows the last 5 posts.
 -->
挿入と同時に動作するためプレースホルダーはありません。デフォルトの挿入状態では最新の5つの投稿が表示されます。

<!-- 
### Selected state:
 -->

### 選択した状態:
<!-- 
- Block Toolbar: Alignments
- Block Toolbar: Options for picking list view or grid view
 -->
- ブロックツールバー: 配置
- ブロックツールバー: リストビュー、グリッドビューを選択するオプション
<!-- 
_Note that the Block Toolbar does not include the Block Chip in this case, since there are no similar blocks to switch to._
 -->
_注意: このケースではブロックツールバーにブロックチップはありません。これは切り替えの対象となる類似のブロックがないためです。_

<!-- 
### Block settings:
 -->
### ブロック設定

<!-- 
- Has description: “Display a list of your most recent posts.”
- Has options for post order, narrowing the list by category, changing the default number of posts to show, and showing the post date.
 -->
- 説明: 「最近の投稿の一覧を表示します。」
- オプション: 投稿の順序、カテゴリーの追加と削除、表示する投稿のデフォルトの数、投稿の日付の表示。
<!-- 
_Latest Posts is fully functional as soon as it’s inserted because it comes with good defaults._
 -->
_最新の投稿は挿入すると完全に機能します。これはこの動作がデフォルトの正しい動作と考えられるためです。_

[原文](https://github.com/WordPress/gutenberg/blob/HEAD/docs/designers-developers/designers/block-design.md)
