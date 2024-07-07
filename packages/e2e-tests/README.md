<!--
# E2E Tests
 -->
# @wordpress/e2e-tests

<!--
End-To-End (E2E) tests for WordPress.
 -->
WordPress の End-To-End (E2E) テスト

<!-- 
**Note that there's currently an ongoing [project](https://github.com/WordPress/gutenberg/issues/38851) to migrate E2E tests to Playwright instead. This package is deprecated and will only accept bug fixes until fully migrated.**
 -->
**注意: 現在進行中の [プロジェクト](https://github.com/WordPress/gutenberg/issues/38851) により、E2E テストは Playwright に移行します。このパッケージは非推奨で、完全に Playwright に移行するまで、バグフィックスのみを受け付けます。**

<!--
## Installation
 -->
## インストール

<!--
Install the module
 -->
モジュールのインストール

```bash
npm install @wordpress/e2e-tests --save-dev
```
<!--
## Running tests
 -->
## テストの実行

<!--
The following commands are available on the Gutenberg repo:
 -->
Gutenberg リポジトリでは、以下のコマンドを実行できます。

```json
{
	"test:e2e": "wp-scripts test-e2e --config packages/e2e-tests/jest.config.js",
	"test:e2e:debug": "wp-scripts --inspect-brk test-e2e --config packages/e2e-tests/jest.config.js --puppeteer-devtools",
	"test:e2e:watch": "npm run test:e2e -- --watch"
}
```
<!--
### Run all available tests
 -->
### すべての実行可能なテストを実行

```bash
npm run test:e2e
```
<!--
### Run all available tests and listen for changes.
 -->
### すべての実行可能なテストを実行し、変更を監視


```bash
npm run test:e2e:watch
```
<!--
### Run a specific test file
 -->
### 特定のテストファイルを実行

<!--
```bash
npm run test:e2e -- packages/e2e-test/<path_to_test_file>
# Or, in order to watch for changes:
npm run test:e2e:watch -- packages/e2e-test/<path_to_test_file>
```
 -->
```bash
npm run test-e2e -- packages/e2e-test/<path_to_test_file>
# または、変更を監視するには
npm run test-e2e:watch -- packages/e2e-test/<path_to_test_file>
```

<!--
### Debugging
 -->
### デバッグ

<!--
Makes e2e tests available to debug in a Chrome Browser.
 -->
e2e テストを Chrome ブラウザでデバッグできるようにします。

```bash
npm run test:e2e:debug
```

<!--
After running the command, tests will be available for debugging in Chrome by going to chrome://inspect/#devices and clicking `inspect` under the path to `/test-e2e.js`.
 -->
コマンドの実行後、chrome://inspect/#devices にアクセスし、パス `/test-e2e.js` の下にある `inspect` をクリックすると、テストがChromeでデバッグできるようになります。

<!--
#### Debugging in `vscode`
 -->
#### vscode でのデバッグ

<!--
Debugging in a Chrome browser can be replaced with `vscode`'s debugger by adding the following configuration to `.vscode/launch.json`:
 -->
以下の設定を`.vscode/launch.json` に追加することで、Chrome ブラウザでのデバッグを、`vscode` のデバッガに置き換えられます。

```json
{
	"type": "node",
	"request": "launch",
	"name": "Debug current e2e test",
	"program": "${workspaceFolder}/node_modules/@wordpress/scripts/bin/wp-scripts.js",
	"args": [
		"test-e2e",
		"--config=${workspaceFolder}/packages/e2e-tests/jest.config.js",
		"--verbose=true",
		"--runInBand",
		"--watch",
		"${file}"
	],
	"console": "integratedTerminal",
	"internalConsoleOptions": "neverOpen",
	"trace": "all"
}
```

<!--
This will run jest, targetting the spec file currently open in the editor. `vscode`'s debugger can now be used to add breakpoints and inspect tests as you would in Chrome DevTools.
 -->
これにより、エディタで現在開いている spec ファイルをターゲットにして、jest が実行されます。`vscode` デバッガーを使用して、Chrome DevTools のようにブレークポイントを追加したり、テストをチェックできます。

<!--
**Note**: This package requires Node.js version with long-term support status (check [Active LTS or Maintenance LTS releases](https://nodejs.org/en/about/previous-releases)). It is not compatible with older versions.
 -->
**注意**：このパッケージは、Node.js の LTS (long-term support 長期サポート) バージョンが必要です ([Active LTS or Maintenance LTS releases](https://nodejs.org/en/about/previous-releases) を確認してください)。古いバージョンとの互換性はありません。

<!-- 
## Contributing to this package
 -->
## このパッケージへのコントリビュート

<!-- 
This is an individual package that's part of the Gutenberg project. The project is organized as a monorepo. It's made up of multiple self-contained software packages, each with a specific purpose. The packages in this monorepo are published to [npm](https://www.npmjs.com/) and used by [WordPress](https://make.wordpress.org/core/) as well as other software projects.
 -->
これは、Gutenberg プロジェクトの一部である、個別パッケージです。このプロジェクトは、monorepo として構成されています。複数の自己完結型ソフトウェアパッケージで構成されており、それぞれが特定の目的を持ちます。この monorepo のパッケージは [npm](https://www.npmjs.com/) で公開され、[WordPress](https://make.wordpress.org/core/) や他のソフトウェアプロジェクトで利用されています。

<!-- 
To find out more about contributing to this package or Gutenberg as a whole, please read the project's main [contributor guide](https://github.com/WordPress/gutenberg/tree/HEAD/CONTRIBUTING.md).
 -->
このパッケージや Gutenberg 全体へのコントリビュートの詳細については、プロジェクトのメインの[コントリビューターガイド](https://ja.wordpress.org/team/handbook/block-editor/contributors/)を参照ください。

<br /><br /><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>

[原文](https://github.com/WordPress/gutenberg/tree/trunk/packages/e2e-tests#readme)
