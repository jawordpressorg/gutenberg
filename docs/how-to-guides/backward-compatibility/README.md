<!-- 
# Backward Compatibility
 -->
# 後方互換性

<!-- 
Historically, WordPress has been known for preserving backward compatibility across versions. Gutenberg follows this example wherever possible in its production public APIs. There are rare occasions where breaking backward compatibility is unavoidable and in those cases the breakage:

* Should be constrained as much as possible to a small surface area of the API.
* Should be documented as clearly as possible to third-party developers using Dev Notes.
 -->
歴史的に WordPress はバージョン間の後方互換性を維持することで知られてきました。Gutenberg でも可能な限り製品版の公開 API に対してこの先例に従います。後方互換性を維持しない稀なケースはそれが避けられず、かつ、後方互換性の破壊が以下の場合に限ります。

* 破壊が、API 表面のできる限り小さな部分に限定されること
* 破壊が、サードパーティの開発者に対して明確に、Dev Notes (開発ノート) としてドキュメントされること

<!-- 
## What qualifies as a production public API
 -->
## 製品版公開 API の範囲

<!-- 
The Gutenberg code base is composed of two different types of packages: 
 - **production packages**: these are packages that are shipped as WordPress scripts (example: wp-components, wp-editor...).
 - **development packages**: these are made up of developer tools that can be used by third-party developers to lint, test, format and build their themes and plugins (example: @wordpress/scrips, @wordpress/env...). Typically, these are consumed as npm dependencies in third-party projects.

Backward compatibility guarantees only apply to the production packages, as updates happen through WordPress upgrades.
 
Production packages use the `wp` global variable to provide APIs to third-party developers. These APIs can be JavaScript functions, variables and React components.
 -->
Gutenberg のコードベースは、異なるタイプの2つのパッケージから構成されます。

 - **製品版パッケージ**: WordPress スクリプトとしてリリースされるパッケージ (例: wp-components、wp-editor 等)
 - **開発版パッケージ**: 開発ツールを構成するパッケージ。サードパーティー開発者はこの開発ツールを使用してテーマやプラグインのコードを lint、テスト、整形、ビルドします (例: @wordpress/scrips、@wordpress/env 等)。一般にサードパーティプロジェクトでは npm の依存として使用します。

後方互換性は製品版パッケージにのみ維持され、更新は WordPress の更新を通して行われます。

製品版パッケージは `wp` グローバル変数を使用してサードパーティ開発者に API を提供します。API には JavaScript 関数、変数、React コンポーネントが含まれます。

<!-- 
### How to preserve backward compatibility for a JavaScript function
 -->
### 後方互換性を保つには - JavaScript 関数

<!-- 
* The name of the function should not change.
* The order of the arguments of the function should not change.
* The function's returned value type should not change.
* Changes to arguments (new arguments, modification of semantics) is possible if we guarantee that all previous calls are still possible.
 -->
* 関数名を変えないでください。
* 関数の引数の順番を変えないでください。
* 関数の戻り値の型を変えないでください。
* 新規の引数や引数の意味の変更などの引数の変更は、以前の呼び出しがすべて可能であることを保証できる場合において、可能です。

<!-- 
### How to preserve backward compatibility for a React Component
 -->
### 後方互換性を保つには - React コンポーネント

<!-- 
* The name of the component should not change.
* The props of the component should not be removed.
* Existing prop values should continue to be supported. If a component accepts a function as a prop, we can update the component to accept a new type for the same prop, but it shouldn't break existing usage.
* Adding new props is allowed.
* React Context dependencies can only be added or removed if we ensure the previous context contract is not breaking.
 -->
* コンポーネント名を変えないでください。
* コンポーネントの props を削除しないでください。
* 既存の prop 値のサポートは続けてください。コンポーネントが prop に関数を取る場合には、その prop で新しいタイプを受け入れる形でコンポーネントを更新できます。ただし現在の利用を妨げる変更はできません。
* 新しい props の追加は認められます。
* React のコンテキストの依存性は、以前のコンテキストの契約が破られない限りにおいて、追加、削除できます。

<!-- 
### How to preserve backward compatibility for a Block
 -->
### 後方互換性を保つには - ブロック
<!-- 
* Existing usage of the block should not break or be marked as invalid when the editor is loaded.
* The styling of the existing blocks should be guaranteed.
* Markup changes should be limited to the minimum possible, but if a block needs to change its saved markup, making previous versions invalid, a [**deprecated version**](/docs/reference-guides/block-api/block-deprecation.md) of the block should be added.
 -->
* 既存のブロックの利用を妨げないでください。あるいは、エディターがロードされた際に「invalid (不正)」としてマークしてください。
* 既存のブロックのスタイルを保証してください。
* マークアップの変更は可能な限り最小に留めてください。ブロックの保存したマークアップの変更が必要な場合には、以前のバージョンのブロックを不正とし、ブロックの [**非推薦バージョン**](https://developer.wordpress.org/block-editor/developers/block-api/block-deprecation/) に追加してください。

<!-- 
## Class names and DOM updates
 -->
## クラス名と DOM の更新
<!-- 
Class names and DOM nodes used inside the tree of React components are not considered part of the public API and can be modified. 

Changes to these should be done with caution as it can affect the styling and behavior of third-party code (Even if they should not rely on these in the first place). Keep the old ones if possible. If not, document the changes and write a dev note.
 -->
React コンポーネントツリー内のクラス名や DOM ノードは、公開 API の一部とみなさないため変更できます。

変更する場合、本来サードパーティはツリー内のクラス名や DOM ノードに依存してはならないのですが、それでもサードパーティコードのスタイルや動作に影響を与えないよう注意してください。影響を与える場合は変更をドキュメントし、Dev Notes を書いてください。

<!-- 
## Deprecations
 -->
## 非推奨
<!-- 
As the project evolves, flaws of existing APIs are discovered, or updates are required to support new features. When this happens, we try to guarantee that existing APIs don't break and build new alternative APIs.

To encourage third-party developers to adopt the new APIs instead, we can use the [**deprecated**](/packages/deprecated/README.md) helper to show a message explaining the deprecation and propose the alternative whenever the old API is used.
 -->
プロジェクトが進むと既存の API の欠点が見つかったり、新機能のサポートのために更新が必要になります。このような場合、既存の API が壊れないことを保証するため新しい代替 API を構築します。

サードパーティの開発者が古い API を使用した場合には、[**deprecated**](https://developer.wordpress.org/block-editor/packages/packages-deprecated/) ヘルパーを使用して非推奨を伝えるメッセージを表示し代替の API を提案できます。

<!-- 
Make it more clear when the feature was deprecated. Use the `since` and `plugin` options of the helper method.
 -->
機能が非推奨になった時期をよりクリアにできます。支援メソッドの `since` と `plugin` オプションを使用してください。

<!-- 
Example:
 -->
例:

```js
deprecated( 'wp.components.ClipboardButton', {
	since: '10.3',
	plugin: 'Gutenberg',
	alternative: 'wp.compose.useCopyToClipboard',
} );
```

<!-- 
## Dev Notes
 -->
## Dev Notes (開発ノート)
<!-- 
Dev notes are [posts published on the make/core site](https://make.wordpress.org/core/tag/dev-notes/) prior to WordPress releases to inform third-party developers about important changes to the developer APIs, these changes can include:
* New APIs.
* Changes to existing APIs that might affect existing plugins and themes. (Example: classname changes...)
* Unavoidable backward compatibility breakage, with reasoning and migration flows.
* Important deprecations (even without breakage), with reasoning and migration flows.
 -->
Dev Notes (開発ノート) とは WordPress のリリースに先立ち [make/core サイトに投稿される記事](https://make.wordpress.org/core/tag/dev-notes/) のことで、サードパーティ開発者に API の重要な変更を伝えます。変更には以下が含まれます。
* 新しい API
* 既存のプラグインやテーマに影響を与える可能性のある API の変更 (例: クラス名の変更等)
* 避けられなかった後方互換性の破壊。理由と移行フローを付記する。
* 重要な非推奨 (破壊がない場合も)。理由と移行フローを付記する。
<!-- 
### Dev Note Workflow
 -->
### Dev Notes ワークフロー
<!-- 
* When working on a pull request and the need for a dev note is discovered, add the **Needs Dev Note** label to the PR.
* If possible, add a comment to the PR explaining why the dev note is needed.
* When the first beta of the upcoming WordPress release is shipped, go through the list of merged PRs included in the release that are tagged with the **Needs Dev Note** label.
* For each one of these PRs, write a dev note and coordinate with the WordPress release leads to publish the dev note.
* Once the dev note for a PR is published, remove the **Needs Dev Note** label from the PR.
 -->
* プルリクエスト (PR) での作業の際に Dev Notes の必要性が出てきた場合、PR にラベル **Needs Dev Note** を追加する。
* 可能であれば、なぜ Dev Notes が必要かを説明するコメントを PR に追加する。
* WordPress 次期リリースの最初のベータが公開される際に、そのリリースのコードにマージされた PR のうちラベル **Needs Dev Note** の付いた PR のリストを作成する。
* PR ごとに Dev Notes を書き、WordPress リリースリードと協調して Dev Notes を公開する。
* PR の Dev Notes が公開されたら、ラベル **Needs Dev Note** を PR から削除する。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/backward-compatibility/README.md)
