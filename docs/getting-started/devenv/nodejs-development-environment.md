<!-- 
# Node.js development environment
 -->
# Node.js 開発環境

<!-- 
When developing for the Block Editor, you will need [Node.js](https://nodejs.org/en) development tools along with a code editor and a local WordPress environment (see [Block Development Environment](/docs/getting-started/devenv/README.md)). Node.js (`node`) is an open-source runtime environment that allows you to execute JavaScript code from the terminal (also known as a command-line interface, CLI, or shell)
 -->
ブロックエディター用の開発を行うには、[Node.js](https://nodejs.org/en) 開発ツールとコードエディター、そしてローカルの WordPress 環境が必要です ([ブロック開発環境](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/) を参照してください)。Node.js (`node`) はオープンソースの実行環境で、ターミナル (コマンドラインインターフェース、CLI、またはシェルとも呼ばれる) から JavaScript コードを実行できます。

<!-- 
Installing `node` will automatically include the Node Package Manager (`npm`) and the Node Package eXecute (`npx`), two tools you will frequently use in block and plugin development.
 -->
`node` をインストールすると、Node Package Manager (`npm`) と Node Package eXecute (`npx`) が自動的にインストールされます。

<!-- 
Node Package Manager ([`npm`](https://docs.npmjs.com/cli/v10/commands/npm)) serves multiple purposes, including dependency management and script execution. It's the recommended package manager and is extensively featured in all documentation.
 -->
Node Package Manager ([`npm`](https://docs.npmjs.com/cli/v10/commands/npm)) は、依存関係の管理やスクリプトの実行など、複数の役割を果たします。推奨のパッケージマネージャであり、すべてのドキュメントで広く使用されています。

<!-- 
The Node Package eXecute ([`npx`](https://docs.npmjs.com/cli/v10/commands/npx)) tool is used to run commands from packages without installing them globally and is commonly used when scaffolding blocks with the [`create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) package.
 -->
Node Package eXecute ([`npx`](https://docs.npmjs.com/cli/v10/commands/npx)) ツールは、パッケージからコマンドを、グローバルにインストールすることなく実行するために使用され、[`create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)パッケージでブロックの雛形を作成する際によく使用されます。

<!-- 
## Node.js installation on Mac and Linux (with `nvm`)
 -->
## Mac や Linux での nvm を使用した Node.js のインストール

<!-- 
It's recommended that you use [Node Version Manager](https://github.com/nvm-sh/nvm) (`nvm`) to install Node.js. This allows you to install and manage specific versions of `node`, which are installed locally in your home directory, avoiding any global permission issues.
 -->
Node.js のインストールには、[Node Version Manager](https://github.com/nvm-sh/nvm) (`nvm`) の使用を推奨します。特定のバージョンの `node` をインストール、管理でき、ホームディレクトリにローカルにインストールされるため、グローバルなパーミッションの問題を回避できます。

<!-- 
Here are the quick instructions for installing `node` using `nvm` and setting the recommended Node.js version for block development. See the [complete installation guide](https://github.com/nvm-sh/nvm#installing-and-updating) for more details.
 -->
以下は `nvm` を使用して `node` をインストールし、ブロック開発に推奨される Node.js のバージョンを設定する簡単な手順です。詳細については、[完全なインストールガイド](https://github.com/nvm-sh/nvm#installing-and-updating) を参照してください。

<!-- 
1. Open the terminal and run the following to install `nvm`. On macOS, the required developer tools are not installed by default. Install them if prompted.
 -->
1. ターミナルを開き、次のコマンドを実行して `nvm` をインストールする。macOS にはデフォルトでは必要な開発ツールがインストールされていません。もしもプロンプトが表示されたら、そちらをインストールしてください。

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

<!-- 
2. Quit and restart the terminal.
3. Run `nvm install --lts` in the terminal to install the latest [LTS](https://nodejs.dev/en/about/releases/) (Long Term Support) version of Node.js.
4. Run `node -v` and `npm -v` in the terminal to verify the installed `node` and `npm` versions.
 -->
2. ターミナルを終了し、再起動する。
3. ターミナルで `nvm install --lts` を実行し、最新の [LTS](https://nodejs.dev/en/about/releases/) (Long Term Support) バージョンの Node.js をインストールする。
4. ターミナルで `node -v` と `npm -v` を実行して、インストールされた `node` と `npm` のバージョンを確認する。

<!-- 
If needed, you can also install specific versions of `node`. For example, install version 18 by running `nvm install 18`, and switch between different versions by running `nvm use [version-number]`. See the `nvm` [usage guide](https://github.com/nvm-sh/nvm#usage) for more details.
 -->
必要であれば、特定のバージョンの `node` もインストールできます。例えば、`nvm install 18` を実行してバージョン 18 をインストールし、`nvm use [バージョン番号]` を実行して異なるバージョンに切り替えられます。詳しくは `nvm` [利用ガイド](https://github.com/nvm-sh/nvm#usage) を参照してください。

<!-- 
Some projects, like Gutenberg, include an [`.nvmrc`](https://github.com/WordPress/gutenberg/blob/trunk/.nvmrc) file which specifies the version of `node` that should be used. In this case, running `nvm use` will automatically select the correct version. If the version is not yet installed, you will get an error that tells you what version needs to be added. Run `nvm install [version-number]` followed by `nvm use`.
 -->
Gutenberg を含むいくつかのプロジェクトでは、[`.nvmrc`](https://github.com/WordPress/gutenberg/blob/trunk/.nvmrc) ファイルを利用して、使用する `node` のバージョンを指定します。このとき `nvm use` を実行すると、自動的に正しいバージョンが選択されます。そのバージョンがまだインストールされていなければ、どのバージョンを追加する必要があるかを示すエラーが表示されます。`nvm install [version-number]` を実行したあとで、`nvm use` を実行してください。

<!-- 
## Node.js installation on Windows and others
 -->
## Windows やその他の OS での Node.js のインストール

<!-- 
You can [download a Node.js installer](https://nodejs.org/en/download/) directly from the main Node.js website. The latest version is recommended. Installers are available for Windows and Mac, and binaries are available for Linux. 
 -->
Node.js のメインの Web サイトから直接 [Nodejs インストールプログラムをダウンロード](https://nodejs.org/en/download/) できます。最新バージョンのインストールを推奨します。Windows と Mac ではインストールプログラムを、Linux ではバイナリーモジュールを利用できます。

<!-- 
Microsoft also provides a [detailed guide](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows#install-nvm-windows-nodejs-and-npm) on how to install `nvm` and Node.js on Windows and WSL.
 -->
Windows と WSL 上に `nvm` と Node.js をインストールする方法についての[詳細なガイド](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows#install-nvm-windows-nodejs-and-npm)が Microsoft から提供されています。

<!-- 
## Troubleshooting
 -->
## トラブルシューティング

<!-- 
If you encounter the error `zsh: command not found: nvm` when attempting to install `node`, you might need to create the default profile file. 
 -->
もし `node` のインストールで、エラー `zsh: command not found: nvm` が発生したら、デフォルトのプロファイルファイルを作成する必要があるかもしれません。

<!--  
The default shell is `zsh` on macOS, so create the profile file by running `touch ~/.zshrc` in the terminal. It's fine to run if the file already exists. The default profile is `bash` for Ubuntu, including WSL, so use `touch ~/.bashrc` instead. Then repeat steps 2-4.
 -->
macOS のデフォルトシェルは `zsh` です。プロファイルファイルを作成するにはターミナルで `touch ~/.zshrc` を実行してください。すでに同じファイルがあっても構いません。WSL を含む Ubuntu のデフォルトシェルは `bash` です。作成には `touch ~/.bashrc` を使用してください。その後で、手順2〜4を繰り返します。

<!-- 
The latest `node` version should work for most development projects, but be aware that some packages and tools have specific requirements. If you encounter issues, you might need to install and use a previous `node` version. Also, make sure to check if the project has an `.nvmrc` and use the `node` version indicated.
 -->
最新の `node` バージョンであれば、ほとんどの開発プロジェクトで動作するはずです。しかしパッケージやツールによっては特定の要件があることに注意してください。問題が発生する場合は、以前のバージョンの `node` をインストールし、使用する必要があるかもしれません。また、プロジェクトに `.nvmrc` があるかどうかを確認し、指定された `node` バージョンを使用してください。

<!-- 
## Additional resources
 -->
## 追加のリソース

<!-- 
-   [Node.js](https://nodejs.org/en) (Official documentation)
-   [Node Version Manager](https://github.com/nvm-sh/nvm) (Official documentation)
-   [Installing Node.js and npm for local WordPress development](https://learn.wordpress.org/tutorial/installing-node-js-and-npm-for-local-wordpress-development/) (Learn WordPress tutorial)
 -->
-   [Node.js](https://nodejs.org/en) (公式ドキュメント)
-   [Node Version Manager](https://github.com/nvm-sh/nvm) (公式ドキュメント)
-   [ローカルでの WordPress 開発用の Node.js と npm のインストール](https://learn.wordpress.org/tutorial/installing-node-js-and-npm-for-local-wordpress-development/) (Learn WordPress チュートリアル)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/devenv/nodejs-development-environment.md)
