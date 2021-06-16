<!--
# Performance
 -->
# パフォーマンス

<!--
Performance is a key feature for editor applications and the Block editor is not an exception.
 -->
エディターアプリケーションにとってパフォーマンスはキーとなる機能です。ブロックエディターも例外ではありません。

<!--
## Metrics
 -->
## 指標

<!--
To ensure the block editor stays performant across releases and development, we monitor some key metrics using [performance testing](/docs/contributors/code/testing-overview.md#performance-testing).
 -->
リリースと開発のサイクルの中でブロックエディタのパフォーマンスを維持するため、[パフォーマンステスト](https://ja.wordpress.org/team/handbook/block-editor/contributors/develop/testing-overview/#performance-testing)を実行して、いくつかの重要な指標を監視しています。

<!--
**Loading Time:** The time it takes to load an editor page.
**Typing Time:** The time it takes for the browser to respond while typing on the editor.
**Block Selection Time:** The time it takes for the browser to respond after a user selects block. (Inserting a block is also equivalent to selecting a block. Monitoring the selection is sufficient to cover both metrics).
 -->
**ロード時間:** エディターページの読み込み時間
**タイプ時間:** エディター上で文字を入力した際にブラウザが応答するまでの時間
**ブロックの選択時間：**ユーザーがブロックを選択してから、ブラウザが反応するまでの時間。ちなみに、ブロックの挿入はブロックの選択と同等のため、ブロックの選択時間を監視することで、両方の指標をカバーできます。

<!--
## Key Performance Decisions and Solutions
 -->
## キーパフォーマンスの決定とソリューション

<!--
**Data Module Async Mode**
 -->
**データモジュールの非同期モード**

<!--
The Data Module of the WordPress Packages and the Block Editor is based on Redux. It means the state is kept globally and whenever a change happens, the components (UI) relying on that state may update.
 -->
WordPress パッケージのデータモジュールとブロックエディターは Reduxをベースとしています。したがって、state (状態) はグローバルに保持され、変更があるたびに、state に依存するコンポーネント (UI) が更新される可能性があります。

<!--
As the number of rendered components grows (for example on long posts), the performance suffers because of the global state acting as an event dispatcher to all components. This is a common pitfall in Redux applications and the issue is solved on Gutenberg using the Data Modules Async Mode.
 -->
長い投稿記事のように、レンダーされるコンポーネントの数が増えると、グローバル state がすべてのコンポーネントへのイベントディスパッチャとして機能するため、パフォーマンスが低下します。これは Redux アプリケーションではよくある落とし穴で、Gutenberg ではデータモジュールの非同期モードを使用することで、この問題を解決しています。

<!--
The Async mode is the idea that you can decide whether to refresh/rerender a part of the React component tree synchronously or asynchronously.
 -->
非同期モードでは、React  コンポーネントツリーの一部の更新や再レンダーを同期的に実行するか、非同期的に実行するかを決定できます。

<!--
Rendering asynchronously in this context means that if a change is triggered in the global state, the subscribers (components) are not called synchronously, instead, we wait for the browser to be idle and perform the updates to React Tree.
 -->
ここでいう非同期レンダリングとは、グローバル state で変化が起きたた際、サブスクライバー（コンポーネント）が同期的に呼び出されるのではなく、ブラウザがアイドル状態になるのを待って、React ツリーの更新を実行することを意味します。

<!--
Based on the idea that **when editing a given block, it is very rare that an update to that block affects other parts of the content**, the block editor canvas only renders the selected block is synchronous mode, all the remaining blocks are rendered asynchronously. This ensures that the editor stays responsive as the post grows.
 -->
「**あるブロックを編集している場合、そのブロックの更新が、コンテンツの他の部分に影響を与えることは非常にまれである**」という考えに基づき、ブロックエディターキャンバスは、選択したブロックのみを同期モードでレンダリングし、残りのブロックはすべて非同期でレンダリングします。これにより、投稿記事が長くなってもエディタの応答パフォーマンスは保たれます。

<!--
## Going further
 -->
## さらに学習するには

<!--
-   [Journey towards a performant editor](https://riad.blog/2020/02/14/a-journey-towards-a-performant-web-editor/)
 -->
-   [Journey towards a performant editor (高性能エディターへの道)](https://riad.blog/2020/02/14/a-journey-towards-a-performant-web-editor/)

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/architecture/performance.md)
