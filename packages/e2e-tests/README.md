<!--
# E2E Tests
 -->
# @wordpress/e2e-tests

<!--
End-To-End (E2E) tests for WordPress.
 -->
WordPress の End-To-End (E2E) テスト

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
	"test-e2e": "wp-scripts test-e2e --config packages/e2e-tests/jest.config.js",
	"test-e2e:debug": "wp-scripts --inspect-brk test-e2e --config packages/e2e-tests/jest.config.js --puppeteer-devtools",
	"test-e2e:watch": "npm run test-e2e -- --watch",
}
```
<!--
### Run all available tests
 -->
### すべての実行可能なテストを実行

```bash
npm run test-e2e
```
<!--
### Run all available tests and listen for changes.
 -->
### すべての実行可能なテストを実行し、変更を監視

```bash
npm run test-e2e:watch
```
<!--
### Run a specific test file
 -->
### 特定のテストファイルを実行

<!--
```bash
npm run test-e2e -- packages/e2e-test/<path_to_test_file>
# Or, in order to watch for changes:
npm run test-e2e:watch -- packages/e2e-test/<path_to_test_file>
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
npm run test-e2e:debug
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
			"program": "${workspaceRoot}/node_modules/@wordpress/scripts/bin/wp-scripts.js",
			"args": [
				"test-e2e",
				"--config=${workspaceRoot}/packages/e2e-tests/jest.config.js",
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
**Note**: This package requires Node.js 12.0.0 or later. It is not compatible with older versions.
 -->
**注意**: このパッケージは Node.js 12.0.0 以降が必要です。古いバージョンと互換性はありません。

[原文](https://github.com/WordPress/gutenberg/tree/trunk/packages/e2e-tests#readme)

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
