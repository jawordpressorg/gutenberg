<!--
# Automated Testing
 -->
# 自動化テスト

<!--
## Why is Puppeteer the tool of choice for end-to-end tests?
 -->
## なぜ Puppeteer はエンドツーエンドテストに適したツールなのか ?

<!--
There exists a rich ecosystem of tooling available for web-based end-to-end automated testing. Thus, it's a common question: "Why does Gutenberg use [Puppeteer](https://developers.google.com/web/tools/puppeteer/) instead of ([Cypress](https://cypress.io/), [Selenium](https://www.selenium.dev/), [Playwright](https://github.com/microsoft/playwright), etc)?". Given some historical unreliability of the build results associated with end-to-end tests, it's especially natural to weigh this question in considering whether our tools are providing more value than the effort required in maintaining them. While we should always be comfortable in reevaluating earlier decisions, there were and continue to be many reasons that Puppeteer is the best compromise of the options available for end-to-end testing.
 -->
ウェブベースの自動エンドツーエンドテストには豊富なエコシステムが存在します。したがって、「なぜ Gutenberg は([Cypress](https://cypress.io/) でも [Selenium](https://www.selenium.dev/) でも [Playwright](https://github.com/microsoft/playwright) でもなく、[Puppeteer](https://developers.google.com/web/tools/puppeteer/) を使うのか ?」はよくある質問です。 エンドツーエンドテストのビルド結果に対する、歴史的な信頼性の低さを考えると、この質問に答える場合、そのツールがテストの維持に必要な労力よりも多くの価値を提供するかどうかで検討することが自然でしょう。最初に下した決定を変更することに何の抵抗もありませんが、エンドツーエンドテストで利用可能な選択肢の中で、Puppeteer が最適解である理由はこれまでもこれからも数多くあります。

<!--
These include:
 -->

<!--
-   **Interoperability with existing testing framework**. Puppeteer is "just" a tool for controlling a Chrome browser, and makes no assumptions about how it's integrated into a testing environment. While this requires some additional effort in ensuring the test environment is available, it also allows for cohesion in how it integrates with an existing setup. Gutenberg is able to consistently use Jest for both unit testing and end-to-end testing. This is contrasted with other solutions like Cypress, which provide their own testing framework and assertion library as part of an all-in-one solution.
 -->
-   **既存のテストフレームワークとの相互運用性**: Puppeteer は Chromeブラウザを制御する「単なる」ツールに過ぎず、テスト環境への統合に前提を置きません。したがって、テスト環境の構築には追加の労力が必要になる一方で、既存のセットアップとの統合には一貫性を持たせられます。例えば Gutenbergは、ユニットテストとエンドツーエンドテストの両方に Jest を一貫して使用できます。これは、Cypress のような独自のテストフレームワークやアサーションライブラリをオールインワンで提供するソリューションとは対照的です。
<!--
-   **An expressive but predictable API**. Puppeteer strikes a nice balance between low-level access to browser behavior, while retaining an expressive API for issuing and awaiting responses to those commands using modern JavaScript [`async` and `await` syntax](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await). This is contrasted with other solutions, which either don't support or leverage native language async functionality, don't expose direct access to the browser, or leverage custom domain-specific language syntaxes for expressing browser commands and assertions. The fact that Puppeteer largely targets the Chrome browser is non-ideal in how it does not provide full browser coverage. On the other hand, the limited set of browser targets offers more consistent results and stronger guarantees about how code is evaluated in the browser environment.
 -->
-   **表現力がありながら、予測可能なAPI**: Puppeteer はバランスに優れます。ブラウザの動作への低レベルアクセスと、最新のJavaScript 構文 [`async` と `await`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) を使用してコマンドを発行し、応答を待機する、表現力豊かなAPIの両方を提供します。これは、ネイティブ言語の非同期機能をサポートしないか活用しなかったり、ブラウザへの直接アクセスを公開しなかったり、ブラウザのコマンドやアサーションの表現に独自のカスタム言語構文を使用する他のソリューションとは対照的です。Puppeteer がほぼ Chrome ブラウザのみを対象としていることは、サポートするブラウザの種類という点で理想的ではありません。しかし一方、対象のブラウザを限定することで、より一貫した結果が得られ、ブラウザ環境でコードがどのように評価されるかをより強く保証できます。
<!--
-   **Surfacing bugs, not obscuring them**. Many alternative solutions offer options to automatically await settled network requests or asynchronous appearance of elements on the page. While this can serve as a convenience in accounting for unpredictable delays, it can also unknowingly cause oversight of legitimate user-facing issues. For example, if an element will only appear on the page after some network request or computation has completed, it may be easy to overlook that these delays can cause unpredictable and frustrating behavior for users ([example](https://github.com/WordPress/gutenberg/pull/11287)). Given that developers often test on high-end hardware and stable network connections, consideration of resiliency on low-end hardware or spotty network availability is not always on the forefront of one's considerations. Puppeteer forces us to acknowledge these delays with explicit `waitFor*` expressions, putting us in much greater alignment with the real-world experience of an end-user.
 -->
-   **バグの隠蔽ではなく表出化**: 多くの代替ソリューションでは、ネットワーク要求の解決や、ページ上の要素の非同期な表示に対して、自動で待機するオプションを提供します。これは、予期しない遅延に対処する便利な機能ですが、知らず知らずのうちに、ユーザーの正当な問題を見落とすことがあります。例えば、ネットワーク要求や計算の完了した後でのみページに要素が表示される場合、これがユーザーにとって予測不可能で苛立たしい遅延ある事実を見落とすかもしれません ([例](https://github.com/WordPress/gutenberg/pull/11287))。また、開発者は多くの場合、ハイエンドのハードウェアと、安定したネットワーク接続環境でテストを行うため、ローエンドのハードウェアや不安定なネットワーク状況への考慮は最優先事項ではありません。Puppeteer では、この遅延を明示的な `waitFor*` 表現で認識させることで、エンドユーザーの実体験との整合性を高めます。
<!--
-   **Debugging**. It's important that in that case that a test fails, there should be straight-forward means to diagnose and resolve the issue. While its offerings are rather simplistic relative to the competition, Puppeteer does expose options to run tests as "headful" (with the browser visible) and with delayed actions. Combined with the fact that it interoperates well with native language / runtime features (e.g. debugger statements or breakpoints), this provides developers with sufficient debugging access.
 -->
-   **デバッグ**。テストが失敗した際、問題を診断し、解決するわかりやすい手段があることは重要です。Puppeteer は競合に比べて、かなりシンプルなサービスを提供していて、テストを「ヘッドフル」(ブラウザが見える状態) で実行したり、遅延アクションを実行するオプションを公開しています。また、ネイティブ言語やランタイム機能 (デバッガーステートメントやブレークポイントなど) との相互運用性も高く、開発者にとって十分なデバッグ環境を提供します。

<!--
For more context, refer to the following resources:
 -->
詳細は以下の資料を参照ください。
<!--
-   [Testing Overview: End-to-End Testing](/docs/contributors/code/testing-overview.md#end-to-end-testing)
-   [Testing: Experiment with Puppeteer for E2E testing](https://github.com/WordPress/gutenberg/pull/5618)
    -   In early iterations, the contributing team opted to use Cypress for end-to-end testing. This pull request outlines problems with the approach, and proposed the initial transition to Puppeteer.
-   [JavaScript Chat Summary: January 28, 2020](https://make.wordpress.org/core/2020/02/04/javascript-chat-summary-january-28-2020/)
    -   Playwright is a new offering created by many of the original contributors to Puppeteer. It offers increased browser coverage and improved reliability of tests. While still early in development at the time of this writing, there has been some interest in evaluating it for future use as an end-to-end testing solution.
 -->
-   [テスト概要: エンドツーエンドテスト](https://ja.wordpress.org/team/handbook/block-editor/contributors/develop/testing-overview/#end-to-end-testing)
-   [テスト: 実験 - Puppeteer と E2E テスト](https://github.com/WordPress/gutenberg/pull/5618)
    -   初期のイテレーションで、コントリビューションチームはエンドツーエンドテストに Cypress の使用を選択しました。この pull request では、このアプローチの問題点を説明し、Puppeteer への最初の移行を提案しています。
-   [JavaScript Chat Summary: January 28, 2020](https://make.wordpress.org/core/2020/02/04/javascript-chat-summary-january-28-2020/)
    -   Playwright は、 Puppeteerのオリジナルのコントリビューターの多くによって作られた新しい製品です。ブラウザのサポート率を増やし、テストの信頼性を向上しています。この記事の執筆時点ではまだ開発の初期段階ですが、将来的にエンドツーエンドテストのソリューションとして使用できるか評価への興味が持たれています。

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/architecture/automated-testing.md)
