<!-- 
# Curating the Editor Experience
 -->
# ユーザーインターフェースのカスタマイズ

<!-- 
Curating the editing experience in WordPress is important because it allows you to streamline the editing process, ensuring consistency and alignment with the site's style and branding guidelines. It also makes it easier for users to create and manage content effectively without accidental modifications or layout changes. This leads to a more efficient and personalized experience.
 -->
WordPress におけるユーザーインターフェースのカスタマイズ、あるいは編集体験のキュレーションは、編集プロセスを効率化し、サイトのスタイルとブランディングガイドラインとの整合性と一貫性の確保する重要な機能です。ユーザーは意図しない修正やレイアウトの乱れを気にせず、効率的にコンテンツを作成し、管理できます。これは効率的でパーソナライズされた編集体験につながります。

<!-- 
The purpose of this guide is to offer various ways you can lock down and curate the experience of using WordPress, especially with the introduction of more design tools and the Site Editor. 
 -->
このガイドではブロックのロックやユーザーインターフェースの制限など WordPress 使用体験におけるさまざまなカスタマイズ方法、特に多くのデザインツールやサイトエディターを紹介します。

<!-- 
In this section, you will learn:
 -->
このセクションでは以下を学習します。

<!-- 
1. [**Block locking**](https://developer.wordpress.org/block-editor/how-to-guides/curating-the-editor-experience/block-locking): how to restrict user interactions with specific blocks in the Editor for better content control
1. [**Patterns**](https://developer.wordpress.org/block-editor/how-to-guides/curating-the-editor-experience/patterns): about creating and implementing predefined block layouts to ensure design and content uniformity
1. [**theme.json**](https://developer.wordpress.org/block-editor/how-to-guides/curating-the-editor-experience/theme-json): to configure global styles and settings for your theme using the theme.json file
1. [**Filters and hooks**](https://developer.wordpress.org/block-editor/how-to-guides/curating-the-editor-experience/filters-and-hooks): about the essential filters and hooks used to modify the Editor
1. [**Disabling Editor functionality**](https://developer.wordpress.org/block-editor/how-to-guides/curating-the-editor-experience/disable-editor-functionality): about additional ways to selectively disable features or components in the Editor to streamline the user experience
 -->
1. [**ブロックのロック**](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/block-locking): より良いコンテンツコントロールのため、エディターで特定のブロックに対するユーザーとのやり取りを制限する方法
1. [**パターン**](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/patterns): デザインとコンテンツの統一性を確保する、定義済みブロックレイアウトの作成と実装
1. [**theme.json**](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/theme-json): theme.json ファイルを使用した、テーマのグローバルスタイルと設定の構成
1. [**フィルターとフック**](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/filters-and-hooks): エディターの修正に必須のフィルターとフック
1. [**エディター機能の無効化**](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/curating-the-editor-experience/disable-editor-functionality): ユーザー体験の効率化のため、エディターの機能やコンポーネントを選択的に無効にする追加方法

<!-- 
## Combining approaches
 -->
## アプローチの組み合わせ

<!-- 
Remember that the approaches provided in the documentation above can be combined as you see fit. For example, you can provide custom patterns to use when creating a new page while also limiting the amount of customization that can be done to aspects of them, like only allowing specific preset colors to be used for the background of a Cover block or locking down what blocks can be deleted. 
 -->
上のドキュメントで紹介するアプローチは、自由に組み合わせられることを忘れないでください。例えば、新しいページを作成するときに使用するカスタムパターンを提供しつつ、カスタマイズ可能な部分を制限できます。例えば、カバーブロックの背景に特定のプリセット色の使用のみを許可するとか、削除できるブロックを制限する等。

<!-- 
When considering the approaches to take, think about the specific ways you might want to both open up the experience and curate it. 
 -->
どのようなアプローチを取るべきかを検討する際には、ユーザー体験とカスタマイズの両方を広げる具体的な方法を検討してください。

<!-- 
## Additional resources
 -->
## その他の情報

<!-- 
- [Builder Basics – Working with Templates in Full Site Editing (Part 3)](https://wordpress.tv/2022/05/24/nick-diego-builder-basics-working-with-templates-in-full-site-editing-part-3/)
- [Core Editor Improvement: Curated experiences with locking APIs & theme.json](https://make.wordpress.org/core/2022/02/09/core-editor-improvement-curated-experiences-with-locking-apis-theme-json/)
- [Learn WordPress session on Curating the Editor Experience](https://wordpress.tv/2022/07/22/nick-diego-curating-the-editor-experience/)
 -->
- [Builder Basics – Working with Templates in Full Site Editing (Part 3)](https://wordpress.tv/2022/05/24/nick-diego-builder-basics-working-with-templates-in-full-site-editing-part-3/) (ビルダーの基本 - フルサイト編集でテンプレートを操作する (パート3))
- [Core Editor Improvement: Curated experiences with locking APIs & theme.json](https://make.wordpress.org/core/2022/02/09/core-editor-improvement-curated-experiences-with-locking-apis-theme-json/) (コアエディターの改善: Locking API と theme.json によるキュレーション体験)
- [Learn WordPress session on Curating the Editor Experience](https://wordpress.tv/2022/07/22/nick-diego-curating-the-editor-experience/) (Learn WordPress セッション。エディター体験のキュレーション)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/curating-the-editor-experience/README.md)