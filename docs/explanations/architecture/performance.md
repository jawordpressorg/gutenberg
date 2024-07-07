<!--
# Performance
 -->
# パフォーマンス

<!--
Performance is a key feature for editor applications and the Block editor is not an exception.
 -->
エディターアプリケーションにとってパフォーマンスは重要な要素です。ブロックエディターも例外ではありません。

<!--
## Metrics
 -->
## 指標

<!--
To ensure the block editor stays performant across releases and development, we monitor some key metrics using [performance testing](/docs/contributors/code/testing-overview.md#performance-testing).
To ensure the block editor stays performant across releases and development, we monitor some key metrics using [performance benchmark job](#the-performance-benchmark-job).
 -->
リリースと開発サイクルの中でブロックエディターのパフォーマンスを維持するため、後述する「パフォーマンスベンチマークジョブ」を実行して、いくつかの重要な指標を監視しています。

<!-- 
Some of the main important metrics are:
 -->
メインの重要な指標には次のようなものがあります。

<!--
- **Loading Time:** The time it takes to load an editor page. This includes time the server takes to respond, times to first paint, first contentful paint, DOM content load complete, load complete and first block render (both in post and site).
- **Typing Time:** The time it takes for the browser to respond while typing on the editor.
- **Block Selection Time:** The time it takes for the browser to respond after a user selects block. (Inserting a block is also equivalent to selecting a block. Monitoring the selection is sufficient to cover both metrics).
 -->
- **ロード時間:** エディターページの読み込み時間。これにはサーバーが応答するまでの時間、最初の描画までの時間 (FP)、最初の DOM コンテンツの描画 (FCP)、DOM コンテンツのロード完了、ロード完了、最初のブロックレンダリングが含まれます (投稿とサイトの両方)。
- **タイプ時間:** エディター上で文字を入力した際にブラウザが応答するまでの時間
- **ブロックの選択時間：** ユーザーがブロックを選択してから、ブラウザが反応するまでの時間。ちなみにブロックの挿入はブロックの選択と同等のため、ブロックの選択時間を監視することで両方の指標をカバーできます。

<!--
## Key performance decisions and solutions
 -->
## キーパフォーマンスの決定とソリューション

<!--
**Data Module Async Mode**
 -->
**データモジュールの非同期モード**

<!--
The Data Module of the WordPress Packages and the Block Editor is based on Redux. It means the state is kept globally and whenever a change happens, the components (UI) relying on that state may update.
 -->
WordPress パッケージのデータモジュールとブロックエディターは Redux をベースとしています。したがって、ステートはグローバルに保持され、変更があるたびに、ステートに依存するコンポーネント (UI) が更新される可能性があります。

<!--
As the number of rendered components grows (for example on long posts), the performance suffers because of the global state acting as an event dispatcher to all components. This is a common pitfall in Redux applications and the issue is solved on Gutenberg using the Data Modules Async Mode.
 -->
長い投稿記事のように、レンダーされるコンポーネントの数が増えると、グローバルステートがすべてのコンポーネントへのイベントディスパッチャとして機能するため、パフォーマンスが低下します。これは Redux アプリケーションではよくある落とし穴で、Gutenberg ではデータモジュールの非同期モードを使用することで、この問題を解決しています。

<!--
The Async mode is the idea that you can decide whether to refresh/rerender a part of the React component tree synchronously or asynchronously.
 -->
非同期モードでは、React コンポーネントツリーの一部の更新や再レンダーを、同期的に実行するか、非同期的に実行するかを決定できます。

<!--
Rendering asynchronously in this context means that if a change is triggered in the global state, the subscribers (components) are not called synchronously, instead, we wait for the browser to be idle and perform the updates to React Tree.
 -->
ここでいう非同期レンダリングとは、グローバルステートで変化が起きたた際、サブスクライバー（コンポーネント）が同期的に呼び出されるのではなく、ブラウザがアイドル状態になるのを待って、React ツリーの更新を実行することを意味します。

<!--
Based on the idea that **when editing a given block, it is very rare that an update to that block affects other parts of the content**, the block editor canvas only renders the selected block is synchronous mode, all the remaining blocks are rendered asynchronously. This ensures that the editor stays responsive as the post grows.
 -->
「**あるブロックを編集している場合、そのブロックの更新が、コンテンツの他の部分に影響を与えることは非常にまれである**」という考えに基づき、ブロックエディターキャンバスは、選択したブロックのみを同期モードでレンダリングし、残りのブロックはすべて非同期でレンダリングします。これにより、投稿記事が長くなってもエディターの応答パフォーマンスは保たれます。

<!-- 
## The performance benchmark job
 -->
## パフォーマンスベンチマークジョブ

<!-- 
A tool to compare performance across multiple branches/tags/commits is provided. You can run it locally like so: `./bin/plugin/cli.js perf [branches]`, example:
 -->
複数のブランチ、タグ、コミット間のパフォーマンスを比較するツールが提供されています。これは以下のようにローカルで実行できます: `./bin/plugin/cli.js perf [branches]`。たとえば、

```
./bin/plugin/cli.js perf trunk v8.1.0 v8.0.0
```
<!-- 
To get the most accurate results, it's is important to use the exact same version of the tests and environment (theme...) when running the tests, the only thing that need to be different between the branches is the Gutenberg plugin version (or branch used to build the plugin).
 -->
最も正確な結果を得るには、テストを実行する際に、まったく同じバージョンのテストとテーマなどの環境を使用することが重要です。ブランチ間で異なるのは、Gutenberg プラグインのバージョン (または、プラグインのビルドに使用するブランチ) だけであるべきです。

<!-- 
To achieve that the command first prepares the following folder structure:
 -->
そのため、コマンドはまず次のようなフォルダ構造を用意します。

<!-- 
    │
    ├── tests/packages/e2e-tests/specs/performance/*
    |   The actual performance tests to run
    │
    ├── tests/test/emptytheme
    |   The theme used for the tests environment. (site editor)
    │
    │── envs/branch1/.wp-env.json
    │   The wp-env config file for branch1 (similar to all other branches except the plugin folder).
    │── envs/branch1/plugin
    │   A built clone of the Gutenberg plugin for branch1 (git checkout branch1)
    │
    └── envs/branchX
        The structure of perf-envs/branch1 is duplicated for all other branches.
 -->
    │
    ├── tests/packages/e2e-tests/specs/performance/*
    |   実行される実際のパフォーマンステスト
    │
    ├── tests/test/emptytheme
    |   テスト環境で使用されるテーマ (サイトエディター)
    │
    │── envs/branch1/.wp-env.json
    │   branch1 の wp-env 構成ファイル (すべての他のブランチと、プラグインフォルダを除いて、同じ)
    │── envs/branch1/plugin
    │   branch1 の Gutenberg プラグインの構築されたクローン (git checkout branch1)
    │
    └── envs/branchX
        perf-envs/branch1 の構造は、すべての他のブランチのために重複している。

<!-- 
Once the directory above is in place, the performance command loop over the performance test suites (post editor and site editor) and does the following:
 -->
上のディレクトリ構造ができたら、パフォーマンス測定用のコマンドは、パフォーマンステストスイート（投稿エディターとサイトエディター）をループし、以下を実行します。

<!-- 
1. Start the environment for `branch1`
2. Run the performance test for the current suite
3. Stop the environment for `branch1`
4. Repeat the first 3 steps for all other branches
5. Compute medians for all the performance metrics of the current suite.
 -->
1. branch1 の環境を開始
2. 現行のスイートでパフォーマンステストを実行
3. branch1 の環境を停止
4. 1〜3のステップをすべての他のブランチで繰り返す
5. 現行スイートのすべてのパフォーマンス指標の中央地を算出

<!-- 
Once all the test suites are executed, a summary report is printed.
 -->
すべてのテストスイートの実行が完了すると、サマリーレポートが出力されます。

## Tracking performance using CodeVitals.

The performance results for each commit are pushed to codevitals and can be seen on the [Gutenberg dashboard there](https://www.codevitals.run/project/gutenberg). The graphs allow us to track the evolution of a given metric over time.

It's thus very important to ensure that the metric being computed is stable. Meaning, if you run the same test twice with the same code and environment, you'll get results that are close.

Our performance job runs Github CI which means that we can't trust the consistency of the numbers that we get between two similar job runs. Github CI may allocate different CPU and memory resources for us over time for instance. To alleviate this problem, each time we run the performance job on the trunk branch, we compare the current commit's performance to a fixed reference commit hash, which allows us to track the relative difference between the current commit and the reference commit consistently regardless of environment changes.

### Update the reference commit

Gutenberg supports only two WP versions, this impacts the performance job in two ways:

 - The base WP version used to run the performance job needs to be updated, when the minimum version supported by Gutenberg changes. In order to do that, we rely on the `Tested up to` flag of the plugin's `readme.txt` file. So each time that flag is changed, the version used for the performance job is changed as well.

 - Updating the WP version used for performance jobs means that there's a high chance that the reference commit used for performance test stability becomes incompatible with the WP version that is used. So every time, the `Tested up to` flag is updated in the `readme.txt` is changed, we also have to update the reference commit that is used in `.github/workflows/performance.yml`. 

The new reference commit hash that is chosen needs to meet the following requirements:

 - Be compatible with the new WP version used in the "Tested up to" flag.
 - Is already tracked on "codevitals.run" for all existing metrics.

**A simple way to choose commit is to pick a very recent commit on trunk with a passing performance job.**

<!--
## Going further
 -->
## さらに学習するには

<!--
-   [Journey towards a performant editor](https://riad.blog/2020/02/14/a-journey-towards-a-performant-web-editor/)
 -->
-   [Journey towards a performant editor (高性能エディターへの道)](https://riad.blog/2020/02/14/a-journey-towards-a-performant-web-editor/)

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/architecture/performance.md)
