<!-- 
# Getting Started
 -->
# はじめに

<!-- 
Welcome! Let's get started building with blocks. Blocks are at the core of extending WordPress. You can create custom blocks, your own block patterns, or combine them together to build a block theme. 
 -->
ようこそ ! さっそくブロックを作っていきましょう。ブロックは、WordPress の拡張における中核です。カスタムブロックや独自のブロックパターンを作成したり、ブロックを組み合わせてブロックテーマを構築できます。

<!-- 
## Navigating this chapter
 -->
## この章について

<!-- 
For those starting with block development, this section is the perfect starting point as it provides the knowledge you need to start creating your own custom blocks.
 -->
ブロック開発を始める人にとって、このセクションは完璧なスタート地点です。ここにはカスタムブロック作成に必要な知識が詰まっています。

<!-- 
- [**Block Development Environment**](https://developer.wordpress.org/block-editor/getting-started/devenv/) - Set up the right development environment to create blocks and get introduced to basic tools for block development such as [`wp-env`](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-env/), [`create-block`](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-create-block/) and [`wp-scripts`](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-create-block/)
- [**Quick Start Guide**](https://developer.wordpress.org/block-editor/getting-started/quick-start-guide/) - Get a block up and running in less than 1 min.
- [**Tutorial: Build your first block**](https://developer.wordpress.org/block-editor/getting-started/tutorial/) - The tutorial will guide you, step by step, through the complete process of creating a fully functional custom block.
- [**Fundamentals of Block Development**](https://developer.wordpress.org/block-editor/getting-started/fundamentals/) - This section provides an introduction to the most relevant concepts in Block Development.
- [**Glossary**](https://developer.wordpress.org/block-editor/getting-started/glossary/) - Glossary of terms related to the Block Editor and Full Site Editing
- [**Frequently Asked Questions**](https://developer.wordpress.org/block-editor/getting-started/faq/) - Set of questions (and answers) that have come up from the last few years of Gutenberg development. 
 -->
- [**ブロック開発環境**](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/) - ブロックを作成するための適切な開発環境を設定し、ブロック開発のための基本的なツール、[`wp-env`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-env/)、[`create-block`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-create-block//)、[`wp-scripts`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/) などを紹介します。
- [**クイックスタートガイド**](https://ja.wordpress.org/team/handbook/block-editor/getting-started/quick-start-guide/) - ブロックを立ち上げて実行します、1分以内で。
- [**チュートリアル: はじめてのブロック作成**](https://ja.wordpress.org/team/handbook/block-editor/getting-started/tutorial/) - このチュートリアルでは、完全に機能するカスタムブロック作成のための完全なプロセスをステップバイステップで説明します。
- [**ブロック開発の基本原理**](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/) - このセクションでは、ブロック開発に最も関連性の高い概念について紹介します。
- [**用語集**](https://ja.wordpress.org/team/handbook/block-editor/getting-started/glossary/) - ブロックエディターとフルサイト編集に関する用語集
- [**よくある質問**](https://ja.wordpress.org/team/handbook/block-editor/getting-started/faq/) - ここ数年の Gutenberg 開発で出てきた質問とその回答 

<!-- 
## Getting Started on the WordPress project and Gutenberg
 -->
## WordPress プロジェクトと Gutenberg を始める

<!-- 
At a high level, here are a few ways to begin your journey but read on to explore more:
 -->
旅を始める最初のステップをいくつか紹介します。詳細を知るには更に読み進めてください。

<!-- 
- Learn more about where this work is going by [reviewing the long term roadmap](https://wordpress.org/about/roadmap/).
- Explore the [GitHub repo](https://github.com/WordPress/gutenberg/) to see the latest issues and PRs folks are working on, especially [Good First Issues](https://github.com/WordPress/gutenberg/issues?q=is%3Aopen+is%3Aissue+label%3A%22Good+First+Issue%22).
- Join the [Slack community](https://make.wordpress.org/chat/) to join meetings, ongoing conversations, and more. 
- Take courses on how to use the block editor and more on [Learn WordPress](https://learn.wordpress.org/). 
- Expand your knowledge by reviewing more developer docs at the overall [developer.wordpress.org resource](https://developer.wordpress.org/).
- Subscribe to [updates on Make Core](https://make.wordpress.org/core/), the main site where ongoing project updates happen.
 -->
- この Gutenberg プロジェクトがどこに向かっているのか、[長期ロードマップを参照](https://wordpress.org/about/roadmap/)してください。
- [GitHub リポジトリ](https://github.com/WordPress/gutenberg/)を探索し、最新の issue とプルリクを参照してください。特に、[Good First Issues](https://github.com/WordPress/gutenberg/issues?q=is%3Aopen+is%3Aissue+label%3A%22Good+First+Issue%22) は良いスタート地点です。
- [Slack コミュニティ](https://make.wordpress.org/chat/)にアクセスし、ミーティングや進行中の会話に参加してください。
- [Learn WordPress](https://learn.wordpress.org/) で、ブロックエディターに関するコースを受講してください。 
- [developer.wordpress.org リソース](https://developer.wordpress.org/) 全体の開発者ドキュメントを参照し、知識を拡げてください。
- 実施中のプロジェクトの更新が掲載される、[Make Core の更新](https://make.wordpress.org/core/) を購読してください。

<!-- 
### Ways to Stay Informed
 -->
### 最新情報を得るには

<!-- 
New features and changes are important to keep up to date on as the Gutenberg project continues. Each person will have their own unique needs in keeping up with a project of this scale. What follows is more of a catalogue of ways to keep up rather than a recommendation for how to do so. 
 -->
Gutenberg プロジェクトが継続する中、常に新機能や変更点を入手することは重要です。しかし、このような規模のプロジェクトを追いかけるにも、人それぞれのニーズがあります。以下は、継続的に最新情報を得るための方法を、推奨と言うよりもカタログ的に挙げたものです。

<!-- 
- [Keeping up with Gutenberg](https://make.wordpress.org/core/handbook/references/keeping-up-with-gutenberg-index/) - compilation of Gutenberg-related team posts of Core, Core-Editor, Core-js, Core-css, Design, Meta, and Themes, and other teams.
- [“What’s New In Gutenberg?” release posts](https://make.wordpress.org/core/tag/gutenberg-new/). These updates are wrangled by the Core Editor team and focus on what’s been released in each biweekly Gutenberg release. They include the most relevant features released and a full changelog.
- [Core Editor meetings](https://make.wordpress.org/core/tag/core-editor-summary/). These meetings are wrangled by volunteer members in the #core-editor Slack channel. [Agendas](https://make.wordpress.org/core/tag/core-editor-summary/) and [summaries](https://make.wordpress.org/core/tag/core-editor-summary/) are shared on the [Make Core blog](https://make.wordpress.org/core/). They focus on task coordination and relevant discussions around Gutenberg releases. There is an Open Floor period in each chat where people can suggest topics to discuss.
- Checking in on [issues](https://github.com/WordPress/gutenberg/issues) and [PRs](https://github.com/WordPress/gutenberg/pulls) on GitHub. This will give you a nearly real-time understanding of what’s being worked on by the developers and designers. 
 -->
- [Keeping up with Gutenberg](https://make.wordpress.org/core/handbook/references/keeping-up-with-gutenberg-index/) - Gutenberg 関連チームの投稿を集めたもの。Core、Core-Editor、Core-js、Core-css、Design、Meta、Themes など。 
- [“What’s New In Gutenberg?” リリース記事](https://make.wordpress.org/core/tag/gutenberg-new/) - この記事はコアエディターチームによって管理され、隔週でリリースされる Gutenberg の新版にフォーカスします。記事にはリリースの中で最も顕著な機能や、完全な変更履歴が含まれます。
- [コアエディターミーティング](https://make.wordpress.org/core/tag/core-editor-summary/) -  #core-editor Slackチャンネルのボランティアメンバーが運営しています。[アジェンダ](https://make.wordpress.org/core/tag/core-editor-summary/) と [サマリー](https://make.wordpress.org/core/tag/core-editor-summary/) は、[Make Core ブログ](https://make.wordpress.org/core/) で共有されます。タスクの調整や Gutenberg のリリースに関連した議論が中心となります。各チャットには、議論するトピックを提案できる「オープンフロア」の時間があります。
- GitHub 上の [issue](https://github.com/WordPress/gutenberg/issues) と [PR](https://github.com/WordPress/gutenberg/pulls) をチェックしてください。開発者やデザイナーが何に取り組んでいるかをほぼリアルタイムで把握できます。 

<!-- 
## Additional Resources
 -->
## その他の情報

<!-- 
The [block-development-examples](https://github.com/wptrainingteam/block-development-examples) repo is the central hub of examples for block development referenced from this handbook.
 -->
[block-development-examples](https://github.com/wptrainingteam/block-development-examples) リポジトリは、このハンドブックで参照されるブロック開発のサンプルプログラムの中心的なハブです。

<!-- 
At [Learn WordPress](https://learn.wordpress.org/), you can find [tutorials](https://learn.wordpress.org/tutorials/), [courses](https://learn.wordpress.org/courses/), and [online workshops](https://learn.wordpress.org/online-workshops/) to learn more about developing for the Block Editor. Here is a selection of current offerings:
 -->
[Learn WordPress](https://learn.wordpress.org/) には、ブロックエディター開発学習用の[チュートリアル](https://learn.wordpress.org/tutorials/)、[コース](https://learn.wordpress.org/courses/)、[オンラインワークショップ](https://learn.wordpress.org/online-workshops/) があります。現在のコースからいくつかを選びました。

<!-- 
-   [Intro to Block Development: Build Your First Custom Block](https://learn.wordpress.org/course/introduction-to-block-development-build-your-first-custom-block/)
-   [Converting a Shortcode to a Block](https://learn.wordpress.org/course/converting-a-shortcode-to-a-block/)
-   [Using the WordPress Data Layer](https://learn.wordpress.org/course/using-the-wordpress-data-layer/)
-   [Registering Block Patterns](https://learn.wordpress.org/workshop/registering-block-patterns/)
-   [Intro to Gutenberg Block Development](https://learn.wordpress.org/workshop/intro-to-gutenberg-block-development/)
-   [Intro to Publishing with the Block Editor](https://learn.wordpress.org/workshop/intro-to-publishing-with-the-block-editor/)
 -->
-   [Intro to Block Development: Build Your First Custom Block (ブロック開発入門: 最初のカスタムブロック作成)](https://learn.wordpress.org/course/introduction-to-block-development-build-your-first-custom-block/)
-   [Converting a Shortcode to a Block (ショートカットのブロックへの変換)](https://learn.wordpress.org/course/converting-a-shortcode-to-a-block/)
-   [Using the WordPress Data Layer (WordPress データレイヤの利用)](https://learn.wordpress.org/course/using-the-wordpress-data-layer/)
-   [Registering Block Patterns (ブロックパターンの登録)](https://learn.wordpress.org/workshop/registering-block-patterns/)
-   [Intro to Gutenberg Block Development (Gutenberg ブロック開発入門)](https://learn.wordpress.org/workshop/intro-to-gutenberg-block-development/)
-   [Intro to Publishing with the Block Editor (ブロックエディターでの公開入門)](https://learn.wordpress.org/workshop/intro-to-publishing-with-the-block-editor/)


[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/README.md)
