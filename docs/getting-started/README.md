<!-- 
# Getting Started
 -->
# はじめに

<!-- 
Welcome to the Getting Started documentation. From setting up your development environment and building your first block to understanding the fundamentals, this section is the perfect starting point if you are new to block development or want to improve your skills.
 -->
「はじめに」へようこそ。開発環境のセットアップから、最初のブロックの構築、基礎の理解まで、このセクションはブロック開発の初心者やスキルアップを目指す方に最適な出発点です。

<!-- 
## Navigating this chapter
 -->
## この章について

<!-- 
Use the following links to locate a topic within this chapter. If you have never built a block before, consider reading through the documentation in the order listed.
 -->
この章のトピックを探すには、以下のリンクを使用してください。これまでにブロックを構築したことがなければ、記載された順序でドキュメントに目を通すことを検討してください。

<!-- 
- **[Block Development Environment](https://developer.wordpress.org/block-editor/getting-started/devenv/):** Set up the right development environment to create blocks and get introduced to basic tools for block development such as [`wp-env`](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-env/), [`create-block`](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-create-block/), and [`wp-scripts`](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-create-block/)
- **[Quick Start Guide](https://developer.wordpress.org/block-editor/getting-started/quick-start-guide/):** Get a custom block up and running in less than one minute.
- **[Tutorial: Build your first block](https://developer.wordpress.org/block-editor/getting-started/tutorial/):** Learn how to build a fully functional custom block from the ground up.
- **[Fundamentals of Block Development](https://developer.wordpress.org/block-editor/getting-started/fundamentals/):** Learn the most relevant concepts in block development.
- **[Glossary](https://developer.wordpress.org/block-editor/getting-started/glossary/):** A glossary of common terms you will encounter when working with the Block Editor.
- **[Frequently Asked Questions](https://developer.wordpress.org/block-editor/getting-started/faq/):** Common questions (and answers) that have come up from the last few years of Gutenberg's development. 
 -->
- **[ブロック開発環境](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/):** ブロックを作成するための適切な開発環境を設定し、ブロック開発のための基本的なツール、[`wp-env`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-env/)、[`create-block`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-create-block//)、[`wp-scripts`](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/get-started-with-wp-scripts/) などを紹介します。
- **[クイックスタートガイド](https://ja.wordpress.org/team/handbook/block-editor/getting-started/quick-start-guide/):** カスタムブロックを立ち上げて実行します、1分以内で。
- **[チュートリアル: はじめてのブロック作成](https://ja.wordpress.org/team/handbook/block-editor/getting-started/tutorial/):** 完全に機能するカスタムブロックをゼロから作成する方法を学びまます。
- **[ブロック開発の基本原理](https://ja.wordpress.org/team/handbook/block-editor/getting-started/fundamentals/):** ブロック開発に最も関連性の高い概念について学びます。
- **[用語集](https://ja.wordpress.org/team/handbook/block-editor/getting-started/glossary/):** ブロックエディターで使用される一般的な用語集です。
- **[よくある質問](https://ja.wordpress.org/team/handbook/block-editor/getting-started/faq/):** ここ数年の Gutenberg 開発で出てきた一般的な質問とその回答。

<!-- 
## Keeping up with the WordPress project
 -->
## WordPress プロジェクトをキャッチアップし続ける

<!-- 
Once you have finished reviewing this chapter, you will have a solid understanding of blocks and how to develop for the Block Editor, but what's next? 
 -->
この章を読み終えると、ブロックとブロックエディター用の開発方法について確かな理解を得られると思います。ではその次は何をすればよいのでしょう ?

<!-- 
The WordPress project, and Gutenberg in particular, iterates quickly. Staying up-to-date on all the changes can be challenging. So, here are a few essential developer resources you should be aware of. Each person will have their own unique needs in keeping up with a project of this scale, so choose what's right for you.
 -->
WordPress プロジェクト、特に Gutenberg は、急速に開発フェーズを繰り返していて、そのすべての変更に対して最新の状態を維持することは困難です。そこで、開発者が知っておくべき必須の情報源をいくつかご紹介します。このような規模のプロジェクトを追いかけるには人それぞれのニーズがありますから、自分に合ったものを選んでください。

<!-- 
- **[WordPress Roadmap](https://wordpress.org/about/roadmap/):** The high-level roadmap for WordPress and Gutenberg.
- **[Make Core](https://make.wordpress.org/core/):** The primary blog for WordPress Core where all major project updates are posted.
- **[WordPress Slack](https://make.wordpress.org/chat/):** The official Slack community for all WordPress contributors is the hub for team meetings, ongoing conversations, and more. Make sure to join the `#core` and `#core-editor` channels.
- **[Gutenberg GitHub repository](https://github.com/WordPress/gutenberg/):** This is where all Block Editor development happens. Keeping a close eye on the repository will give you a real-time understanding of what’s being worked on by fellow contributors.
- **[Keeping up with Gutenberg](https://make.wordpress.org/core/handbook/references/keeping-up-with-gutenberg-index/):** A compilation of Gutenberg-related posts from the many [Make teams](https://make.wordpress.org/), including Core, Design, Meta, and Themes.
- **["What's new in Gutenberg?"](https://make.wordpress.org/core/tag/gutenberg-new/):** Biweekly posts published on Make Core with each Gutenberg release. They are a great way to review the most relevant new features and the full changelog.
- **["What's new for developers?"](https://developer.wordpress.org/news/):** Monthly posts on the WordPress Developer Blog that showcase the most important developer-related changes that happened in WordPress the previous month.
 -->
- **[WordPress ロードマップ](https://wordpress.org/about/roadmap/):** WordPress と Gutenberg のハイレベルなロードマップ。
- **[Make Core](https://make.wordpress.org/core/):** WordPress コアのメインのブログ。すべての主要なプロジェクトの更新が投稿されます。
- **[WordPress Slack](https://make.wordpress.org/chat/):** すべての WordPress コントリビューターのための公式 Slack コミュニティ。チームミーティングや進行中の会話などのハブです。`#core` と `#core-editor` チャンネルに参加してください。
- **[Gutenberg GitHub リポジトリ](https://github.com/WordPress/gutenberg/):** ブロックエディターのすべての開発が行われている場所。リポジトリを注視すると、エキスパートのコントリビューターが取り組んでいることをリアルタイムで理解できます。
- **[Keeping up with Gutenberg](https://make.wordpress.org/core/handbook/references/keeping-up-with-gutenberg-index/):** 多くの [Make teams](https://make.wordpress.org/) からの Gutenberg 関連投稿を集めたページ。Core、Design、Meta、Themes が含まれます。
- **["What's new in Gutenberg?"](https://make.wordpress.org/core/tag/gutenberg-new/):** Gutenberg のリリースごとに隔週で Make Core に公開される投稿。最も関連性の高い新機能や、完全な変更履歴を確認するのに最適です。
- **["What's new for developers?"](https://developer.wordpress.org/news/):** WordPress Developer Blog の毎月の投稿。前月に WordPress 界隈で起きた最も重要な開発者関連の変更を紹介しています。

<!-- 
## Additional resources
 -->
## その他の情報

<!-- 
For more resources on block development and extending the Block Editor, review the additional sections here in the Block Editor Handbook. Further practical examples are also available in the [block-development-examples](https://github.com/wptrainingteam/block-development-examples) GitHub repository.
 -->
ブロック開発とブロックエディターの拡張に関するその他の情報は、このブロックエディターハンドブックの追加セクションを参照してください。さらに実用的なサンプルが [block-development-examples](https://github.com/wptrainingteam/block-development-examples) GitHub リポジトリにもあります。

<!-- 
If you are looking for more educational content, check out [Learn WordPress](https://learn.wordpress.org/), where you can find [tutorials](https://learn.wordpress.org/tutorials/), [courses](https://learn.wordpress.org/courses/), and [online workshops](https://learn.wordpress.org/online-workshops/). Here is a selection of current offerings:
 -->
もっと教育的なコンテンツを探しているなら、[Learn WordPress](https://learn.wordpress.org/) をご覧ください。[チュートリアル](https://learn.wordpress.org/tutorials/) や [コース](https://learn.wordpress.org/courses/) 、[オンラインワークショップ](https://learn.wordpress.org/online-workshops/) があります。現在提供されているコンテンツからいくつかを選びました。

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
