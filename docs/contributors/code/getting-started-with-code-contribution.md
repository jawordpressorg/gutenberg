<!--
# Getting Started With Code Contribution
-->
# コードによるコントリビューション入門

<!--
The following guide is for setting up your local environment to contribute to the Gutenberg project. There is significant overlap between an environment to contribute and an environment used to extend the WordPress block editor. You can review the [Development Environment tutorial](/docs/getting-started/tutorials/devenv/README.md) for additional setup information.
-->
このガイドでは、Gutenbergプロジェクトにコントリビュートするための、ローカル環境の設定方法について説明します。コントリビューション用環境のほとんどは、WordPress ブロックエディター拡張用の環境と同じです。設定の追加情報については、[開発環境のチュートリアル](https://ja.wordpress.org/team/handbook/block-editor/getting-started/tutorials/devenv/)を参照してください。
<!--
## Prerequisites
-->
## 前提条件

<!--
-   Node.js
    Gutenberg is a JavaScript project and requires [Node.js](https://nodejs.org/). The project is built using the latest active LTS release of node, and the latest version of NPM. See the [LTS release schedule](https://github.com/nodejs/Release#release-schedule) for details.
-->
-   Node.js:
    Gutenbergは JavaScript のプロジェクトで、[Node.js](https://nodejs.org/) を必要とします。Gutenberg プロジェクトは、最新のアクティブ な LTS リリースの node と、最新バージョンの NPM を使用して構築されています。詳細は [LTS release schedule](https://github.com/nodejs/Release#release-schedule) を参照してください。

<!--
We recommend using the [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm) since it is the easiest way to install and manage node for macOS, Linux, and Windows 10 using WSL2. See [our Development Tools guide](/docs/getting-started/tutorials/devenv/README.md#development-tools) or the Nodejs site for additional installation instructions.
-->
[Node Version Manager](https://github.com/nvm-sh/nvm) (nvm) を使用してください。nvm は、macOS、Linux、WSL2 を使用した Windows 10 において最も簡単に node をインストール、管理できます。追加のインストール方法については、[このハンドブックの開発ツールガイド](https://ja.wordpress.org/team/handbook/block-editor/getting-started/tutorials/devenv/#development-tools)、またはNodejs のサイトを参照してください。

<!--
-   Git
    Gutenberg is using git for source control. Make sure you have an updated version of git installed on your computer, as well as a GitHub account. You can read the [Git Workflow](/docs/contributors/code/git-workflow.md) to learn more about using git and GitHub with Gutenberg
-->
-   Git:
    Gutenberg はソースコントロールに git を使用しています。コンピュータに最新版の git がインストールされていること、GitHub のアカウントを持っていることを確認してください。Gutenberg での git と GitHub の使用については、[Git ワークフロー](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/git-workflow)を参照してください。

<!--
-   [Recommended] Docker Desktop
    We recommend using the [wp-env package](/packages/env/README.md) for setting WordPress environment locally. You'll need to install Docker to use `wp-env`. See the [Development Environment tutorial for additional details](/docs/getting-started/tutorials/devenv/README.md).
    > Note: To install Docker on Windows 10 Home Edition, follow the [install instructions from Docker for Windows with WSL2](https://docs.docker.com/docker-for-windows/wsl/).
-->
-   [推奨] Docker Desktop:
    ローカルでの WordPress 環境の設定には、[wp-env パッケージ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/)の使用を推奨します。「wp-env」を使用するには、Docker のインストールが必要です。詳細については [開発環境チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/getting-started/tutorials/devenv/) を参照してください。
    > 注意: Windows 10 Home Edition に Docker をインストールするには、[install instructions from Docker for Windows with WSL2](https://docs.docker.com/docker-for-windows/wsl/) に従ってください。

<!--
As an alternative to Docker setup, you can use [Local by Flywheel](https://localbyflywheel.com/), [WampServer](http://www.wampserver.com/en/), or [MAMP](https://www.mamp.info/), or even use a remote server.
-->
Docker セットアップの代替としては、[Local by Flywheel](https://localbyflywheel.com/)、[WampServer](http://www.wampserver.com/en/)、[MAMP](https://www.mamp.info/)を利用できます。また、リモートサーバーでも構いません。
<!--
## Getting the Gutenberg code
-->
## Gutenberg のコードの取得

<!--
Fork the Gutenberg repository, clone it to your computer and add the WordPress repository as upstream.
-->
Gutenberg リポジトリをフォークし、コンピュータにクローンして、WordPress リポジトリを upstream として追加します。

```bash
$ git clone https://github.com/YOUR_GITHUB_USERNAME/gutenberg.git
$ cd gutenberg
$ git remote add upstream https://github.com/WordPress/gutenberg.git
```

<!--
## Building Gutenberg as a plugin
-->
## プラグインとしての Gutenberg のビルド

<!--
Install the Gutenberg dependencies and build your code in development mode:
-->
Gutenberg の依存をインストールし、開発モードでコードをビルドします。

```bash
npm ci
npm run dev
```

<!--
> Note: The install scripts require [Python](https://www.python.org/) to be installed and in the path of the local system. This might be installed by default for your operating system, or require downloading and installing.
-->
> 注意: インストールスクリプトを実行するには、[Python](https://www.python.org/)がインストールされ、ローカルシステムのパスにあることが必要です。Python は、使用中のOSにデフォルトでインストールされているか、ダウンロードしてインストールする必要があります。

<!--
There are two ways to build your code. While developing, you probably will want to use `npm run dev` to run continuous builds automatically as source files change. The dev build also includes additional warnings and errors to help troubleshoot while developing. Once you are happy with your changes, you can run `npm build` to create optimized production build.
-->
コードのビルドには2つの方法があります。開発中は、おそらく `npm run dev` を使用して、ソースファイルを変更するたびに自動的に継続してビルドを実行したいでしょう。dev ビルドには、開発中のトラブルシューティングに役立つ警告やエラーが追加されます。変更内容に満足したら、`npm build` を実行して、最適化された production ビルドを作成できます。

<!--
Once built, Gutenberg is ready to be used as a WordPress plugin!
-->
構築した Gutenberg は、WordPress のプラグインとして使用できます。

<!--
## Local WordPress Environment
-->
## ローカルの WordPress 環境

<!--
To test a WordPress plugin, you need to have WordPress itself installed. If you already have a WordPress environment setup, use the above Gutenberg build as a standard WordPress plugin by putting the gutenberg directory in your wp-content/plugins/ directory.
-->
WordPress プラグインをテストするには、WordPress 本体がインストールされている必要があります。すでに WordPress の環境がある場合は、上の Gutenberg ビルドを通常のWordPress プラグインとして使用できます。wp-content/plugins/ ディレクトリにgutenberg ディレクトリをコピーしてください。

<!--
If you do not have a local WordPress environment setup, follow the steps in the rest of this section to create one.
-->
ローカルにWordPress環境を構築していない場合は、このセクションの以下の手順に従って環境を構築してください。

<!--
### Using Docker and wp-env
-->
### Docker と wp-env

<!--
The [wp-env package](/packages/env/README.md) was developed with the Gutenberg project as a quick way to create a standard WordPress environment using Docker. It is also published as the `@wordpress/env` npm package.
-->
 [wp-env パッケージ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) は、Docker を使用した標準的な WordPress 環境を素早く構築する方法として Gutenberg プロジェクトとともに開発されました。また、npm パッケージ `@wordpress/env` として公開されています。

<!--
By default, `wp-env` can run in a plugin directory to create and run a WordPress environment, mounting and activating the plugin automatically. You can also configure `wp-env` to use existing installs, multiple plugins, or themes. See the [wp-env package](/packages/env/README.md#wp-envjson) for complete documentation.
-->
デフォルトでは、`wp-env` は、プラグインのディレクトリで実行されます。WordPress の環境を作成して実行し、プラグインを自動的にマウントして有効化します。また、 `wp-env` を構成すると、既存のインストールや、複数のプラグイン、テーマを使用できます。完全なドキュメントは、[wp-envパッケージ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/#wp-envjson)を参照してください。

<!--
Make sure Docker is running, and start `wp-env` from within the gutenberg directory:
-->
Docker が起動していることを確認し、gutenberg ディレクトリ内から `wp-env` を起動します。

```bash
npm run wp-env start
```

<!--
This script will create a Docker instance behind the scenes with the latest WordPress Docker image, and then will map the Gutenberg plugin code from your local copy to the environment as a Docker volume. This way, any changes you make to the code locally are reflected immediately in the WordPress instance.
-->
このスクリプトは、裏で最新の WordPress Docker イメージから Docker インスタンスを作成し、ローカルコピーの Gutenbergプラグインコードを Docker ボリュームとして環境にマッピングします。これにより、ローカルでコードを変更しても、すぐにWordPress インスタンスに反映されます。

<!--
> Note: `npm run` will use the `wp-env` / `WordPress`?? version specified within the Gutenberg project, making sure you are running the latest wp-env version.
-->
> 注意: `npm run` は Gutenberg プロジェクト内で指定された `wp-env` / `WordPress`?? バージョンを使用するため、最新の wp-env バージョンを実行していることを確認してください。

<!--
To stop the running environment:
-->
実行中の環境を停止するには、

```bash
npm run wp-env stop
```

<!--
If everyting went well, you should see the following message in your terminal:
-->
正常に実行されると、ターミナルに次のようなメッセージが表示されます。

```bash
WordPress development site started at http://localhost:8888/
WordPress test site started at http://localhost:8889/
MySQL is listening on port 51220

 ✔ Done! (in 261s 898ms)
```

<!--
And if you open Docker dashboard by rightclicking the icon in the menu bar(on Mac) or system tray (on Linux and Windows) and selecting 'Dashboard', you will see that the script has downloaded some Docker Images, and is running a Docker Container with fully functional WordPress installation:
![Screenshot of the WordPress Docker Container Running](https://cldup.com/mt9cKES-YZ.png)
![Screenshot of the Downloaded Docker Images for WordPress Development Environment](https://cldup.com/bNpgaRSkcG.png)
-->
メニューバー (Mac) またはシステムトレイ (Linux と Windows) にあるアイコンを右クリックして「ダッシュボード」を選択し、Dockerダッシュボードを開きます。スクリプトがいくつかの Docker イメージをダウンロードし、完全に機能する WordPress をインストールした Docker コンテナが実行中であることがわかります。
![実行中の WordPress Docker コンテナ](https://cldup.com/mt9cKES-YZ.png)
![WordPress 開発環境用のダウンロードされた Docker イメージ](https://cldup.com/bNpgaRSkcG.png)

<!--
To destroy the install completely:
-->
インストールを完全に破壊するには、

```bash
npm run wp-env destroy
```

<!--
Explore the [package documentation](/packages/env/README.md) for additional commands.
-->
その他のコマンドについては、[パッケージのドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/)を参照してください。

<!--
#### Accessing the Local WordPress Install
-->
#### ローカルの WordPress へのアクセス

<!--
The WordPress installation should now be available at `http://localhost:8888`
-->
インストールされた WordPress は `http://localhost:8888` で利用できます。

<!--
You can access the Dashboard at: `http://localhost:8888/wp-admin/` using **Username**: `admin`, **Password**: `password`. You'll notice the Gutenberg plugin installed and activated, this is your local build.
-->
管理画面にアクセスするには、`http://localhost:8888/wp-admin/` に、 **ユーザー名**: `admin`, **パスワード**: password` を入力します。管理画面からは、Gutenbergプラグインがインストールされ、有効化されていることがわかります。

<!--
#### Accessing the MySQL Database
-->
#### MySQL データベースへのアクセス

<!--
To access the MySQL database on the `wp-env` instance you will first need the connection details. To do this:
-->
`wp-env` のインスタンスで MySQL データベースにアクセスするには、まず接続情報が必要です。

<!--
1. In a terminal, navigate to your local Gutenberg repo.
2. Run `npm run wp-env start` - various information about the `wp-env` environment should be logged into the terminal.
3. In the output from step 2, look for information about the _MySQL_ port:
   For example:
-->
1. ターミナルで、ローカルの Gutenberg ディレクトリに移動します。
2. `npm run wp-env start` を実行します。`wp-env` 環境に関する様々な情報がターミナルに出力されます。
3. 出力から、_MySQL_のポートに関する情報を探します。例えば、以下のようになります。

<!--
> MySQL is listening on port {MYSQL_PORT_NUMBER}
-->
```
MySQL is listening on port {MYSQL_PORT_NUMBER}
```

<!--
4. Copy / make a note of this port number (note this will change each time `wp-env` restarts).
5. You can now connect to the MySQL instance using the following details (being sure to replace `{MYSQL_PORT_NUMBER}` with the port number from step three):
-->
4. このポート番号をコピーしてメモしてください (`wp-env` は、再起動のたびに番号が変わることに注意してください)。
5. これで、以下の情報から MySQL インスタンスに接続できるようになりました。ここで `{MYSQL_PORT_NUMBER}` は手順3のポート番号で置き換えてください。

```
Host: 127.0.0.1
Username: root
Database: wordpress
Port: {MYSQL_PORT_NUMBER}
```

<!--
**Please note**: the MySQL port number will change each time `wp-env` restarts. If you find you can no longer access your database, simply repeat the steps above to find the new port number and restore your connection.
-->
**注意してください**: MySQL のポート番号は、`wp-env` を再起動するたびに変わります。もしデータベースにアクセスできなくなった場合は、上の手順を繰り返して新しいポート番号を見つけ、接続を回復してください。

<!--
**Tip**: [Sequel Ace](https://sequel-ace.com/) is a useful GUI tool for accessing a MySQL database. Other tools are available and documented in this [article on accessing the WordPress database](https://wordpress.org/support/article/creating-database-for-wordpress/).
-->
**ヒント**: [Sequel Ace](https://sequel-ace.com/)は、MySQLデータベースにアクセスする便利な GUI ツールです。その他の利用可能なツールについては、WordPressデータベースへのアクセスに関する[こちらの記事](https://ja.wordpress.org/support/article/creating-database-for-wordpress/)を参照してください。

<!--
#### Troubleshooting
-->
#### トラブルシューティング

<!--
If you run into an issue, check the [troubleshooting section in `wp-env` documentation](/packages/env/README.md#troubleshooting-common-problems).
-->
問題が発生した場合は、[`wp-env` のドキュメントの「トラブルシューティング」セクション](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/#troubleshooting-common-problems)を参照してください。

<!--
### Using Local or MAMP
-->
### Local または MAMP

<!--
As an alternative to Docker and `wp-env`, you can also use [Local by Flywheel](https://localbyflywheel.com/), [WampServer](http://www.wampserver.com/en/), or [MAMP](https://www.mamp.info/) to run a local WordPress environment. To do so clone and install Gutenberg as a regular plugin in your installation by creating a symlink or copying the directory to the proper `wp-content/plugins` directory.
-->
Docker と `wp-env` の代わりに、[Local by Flywheel](https://localbyflywheel.com/)、[WampServer](http://www.wampserver.com/en/)、または [MAMP](https://www.mamp.info/) を使用して、ローカルの WordPress 環境を実行できます。それには、Gutenberg のディレクトリにシンボリックリンクを作成するか、`wp-content/plugins` ディレクトリにコピーして、 通常のプラグインとしてインストールしてください。

<!--
You will also need some extra configuration to be able to run the e2e tests.
-->
また、e2e テストを実行するには、いくつかの追加設定が必要です。

<!--
Change the current directory to the plugins folder and symlink all e2e test plugins:
-->
カレントディレクトリを plugins フォルダに変更し、すべての e2e test plugins をシンボリックリンクします。

```bash
ln -s gutenberg/packages/e2e-tests/plugins/* .
```

<!--
You'll need to run this again if new plugins are added. To run e2e tests:
-->
新しいプラグインが追加された場合は、この手順を再度実行する必要があります。e2e テストを実行するには以下を実行します。

```bash
WP_BASE_URL=http://localhost:8888/gutenberg npm run test-e2e
```

<!--
#### Caching of PHP files
-->
#### PHP ファイルのキャッシュ

<!--
You'll need to disable OPCache in order to correctly work on PHP files. To fix:
-->
PHP ファイルが正しく動作するには、OPcache を無効にする必要があります。

<!--
-   Go to **MAMP > Preferences > PHP**
-   Under **Cache**, select **off**
-   Confirm with **OK**
-->
-   **MAMP > Preferences > PHP** に移動する。
-   **Cache** で **off** を選択する。
-   **OK** で確認する。

<!--
#### Incoming connections
-->
#### 接続の要求

<!--
By default, the web server (Apache) launched by MAMP will listen to all incoming connections, not just local ones. This means that anyone on the same local network (and, in certain cases, anyone on the Internet) can access your web server. This may be intentional and useful for testing sites on other devices, but most often this can be a privacy or security issue. Keep this in mind and don't store sensitive information in this server.
-->
デフォルトでは MAMP で起動される Web サーバー (Apache) は、ローカル接続だけでなく、すべての接続要求を待ちます。これは、同じローカルネットワーク上の誰もが (場合によってはインターネット上の誰もが) Web サーバーにアクセスできることを意味します。これは意図的な動きで、他のデバイスでサイトをテストする際には便利ですが、多くの場合、プライバシーやセキュリティの問題になります。したがって、このサーバーには機密情報を保存しないでください。

<!--
While it is possible to fix this, you should fix it at your own risk, since it breaks MAMP's ability to parse web server configurations and, as a result, makes MAMP think that Apache is listening to the wrong port. Consider switching away from MAMP. Otherwise, you can use the following:
-->
この問題の修正は可能ですが、自己責任で実施ください。なぜなら、修正することで MAMP の Web サーバー設定の解析機能を制限し、結果として、MAMP に対して Apache が間違ったポートで待ち受けていると認識させるためです。MAMP からの乗り換えも検討してください。修正する場合の手順は以下のとおりです。

<!--
-   Edit `/Applications/MAMP/conf/apache/httpd.conf`
-   Change `Listen 8888` to `Listen 127.0.0.1:8888`
-->
-   `/Applications/MAMP/conf/apache/httpd.conf` を編集する。
-   `Listen 8888` を `Listen 127.0.0.1:8888` に変更する

<!--
#### Linking to other directories
-->
#### 他のディレクトリへのリンク

<!--
You may like to create links in your `plugins` and `themes` directories to other folders, e.g.
-->
`plugins` や `themes` ディレクトリから他のフォルダへリンクを作成すると便利です。

<!--
-   wp-content/plugins/gutenberg -> ~/projects/gutenberg
-   wp-content/themes/twentytwenty -> ~/projects/twentytwenty
-->
-   wp-content/plugins/gutenberg -> ~/projects/gutenberg
-   wp-content/themes/twentytwenty -> ~/projects/twentytwenty

<!--
If so, you need to instruct Apache to allow following such links:
-->
この場合、リンクをたどることを Apache に許可する必要があります。

<!--
-   Open or start a new file at `/Applications/MAMP/htdocs/.htaccess`
-   Add the following line: `Options +SymLinksIfOwnerMatch`
-->
-   `/Applications/MAMP/htdocs/.htaccess` を開くか、新規に作成する。
-   次の行を追加する。`Options +SymLinksIfOwnerMatch`

<!--
#### Using WP-CLI
-->
#### WP-CLI の使用

<!--
Tools like MAMP tend to configure MySQL to use ports other than the default 3306, often preferring 8889. This may throw off WP-CLI, which will fail after trying to connect to the database. To remedy this, edit `wp-config.php` and change the `DB_HOST` constant from `define( 'DB_HOST', 'localhost' )` to `define( 'DB_HOST', '127.0.0.1:8889' )`.
-->
MAMP のようなツールでは、MySQL のポートをデフォルトの3306以外に、多くの場合8889を使用するように設定します。これにより、WP-CLI がデータベースへの接続に失敗する場合があります。この問題を解決するには、`wp-config.php` を編集して、`DB_HOST` 定数を `define( 'DB_HOST', 'localhost' )` から `define( 'DB_HOST', '127.0.0.1:8889' )` に変更します。

<!--
### On A Remote Server
-->
### リモートサーバー

<!--
You can use a remote server in development by building locally and then uploading the built files as a plugin to the remote server.
-->
リモートサーバーを開発に利用できます。ローカルでビルドし、ビルドしたファイルをプラグインとしてリモートサーバーにアップロードします。

<!--
To build: open a terminal (or if on Windows, a command prompt) and navigate to the repository you cloned. Now type `npm ci` to get the dependencies all set up. Once that finishes, you can type `npm run build`.
-->
ビルドするには、ターミナル (Windows の場合はコマンドプロンプト) を開き、クローンしたリポジトリに移動します。ここで `npm ci` と入力して、依存関係をすべて設定します。次に、`npm run build` を実行してください。

<!--
After building the cloned gutenberg directory contains the complete plugin, you can upload the entire repository to your `wp-content/plugins` directory and activate the plugin from the WordPress admin.
-->
ビルドすると、クローンした gutenberg ディレクトリに完全なプラグインが作成されます。リポジトリ全体を `wp-content/plugins` ディレクトリにアップロードして、WordPress 管理画面からプラグインを有効化します。

<!--
Another way to upload after building is to run `npm run build:plugin-zip` to create a plugin zip file — this requires `bash` and `php` to run. The script creates `gutenberg.zip` that you can use to install Gutenberg through the WordPress admin.
-->
構築後にアップロードする別の方法として、`npm run build:plugin-zip` を実行してプラグインの zip ファイルを作成する方法があります。この実行には `bash` と `php` が必要です。スクリプトで作成された `gutenberg.zip` を使用して、WordPress 管理画面から Gutenberg をインストールできます。

<!--
## Storybook
-->
## Storybook

<!--
> Storybook is an open source tool for developing UI components in isolation for React, React Native and more. It makes building stunning UIs organized and efficient.
-->
> Storybookは、React や React Native などから離れて UI コンポーネントを開発するためのオープンソースツールです。組織的かつ効率的に魅力的な UI を構築できます。

<!--
The Gutenberg repository also includes [Storybook](https://storybook.js.org/) integration that allows testing and developing in a WordPress-agnostic context. This is very helpful for developing reusable components and trying generic JavaScript modules without any backend dependency.
-->
Gutenberg リポジトリには、WordPress に依存せずにテストや開発ができる [Storybook](https://storybook.js.org/) との統合も含まれています。これは、再利用可能なコンポーネントの開発や、バックエンドに依存しない汎用的な JavaScript モジュールを試すために非常に役立ちます。

<!--
You can launch Storybook by running `npm run storybook:dev` locally. It will open in your browser automatically.
-->
Storybook を起動するには、ローカルで `npm run storybook:dev` を実行します。自動的にブラウザ内で開かれます。

<!--
You can also test Storybook for the current `trunk` branch on GitHub Pages: [https://wordpress.github.io/gutenberg/](https://wordpress.github.io/gutenberg/)
-->
また、GitHub Pages [https://wordpress.github.io/gutenberg/](https://wordpress.github.io/gutenberg/) では、現在の `trunk` ブランチで Storybook をテストできます。

<!--
## Developer Tools
-->
## 開発者向けのツール

<!--
We recommend configuring your editor to automatically check for syntax and lint errors. This will help you save time as you develop by automatically fixing minor formatting issues. Here are some directions for setting up Visual Studio Code, a popular editor used by many of the core developers, these tools are also available for other editors.
-->
エディターを構成して、自動的に構文エラーや lint エラーをチェックしてください。マイナーな整形上のエラーを自動的に修正でき、開発時間の短縮につながります。ここでは、コアデベロッパーの多くも使用している人気のエディター、Visual Studio Code の設定方法について紹介します。なお、以下のツールはその他のエディターでも使用できます。

<!--
### EditorConfig
-->
### EditorConfig

<!--
[EditorConfig](https://editorconfig.org/) defines a standard configuration for setting up your editor, for example using tabs instead of spaces. You should install the [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig) extension and it will automatically configure your editor to match the rules defined in [.editorconfig](https://github.com/WordPress/gutenberg/blob/HEAD/.editorconfig).
-->
[EditorConfig](https://editorconfig.org/) は、スペースの代わりにタブを使用するなど、エディター設定の標準構成を定義します。エクステンション [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig) をインストールすると、[.editorconfig](https://github.com/WordPress/gutenberg/blob/HEAD/.editorconfig) で定義されたルールに合わせて、自動的にエディタを設定できます。

<!--
### ESLint
-->
### ESLint

<!--
[ESLint](https://eslint.org/) statically analyzes the code to find problems. The lint rules are integrated in the continuous integration process and must pass to be able to commit. You should install the [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for Visual Studio Code, see eslint docs for [more editor integrations](https://eslint.org/docs/user-guide/integrations).
-->
[ESLint](https://eslint.org/) は、静的にコードを解析して、問題点を発見します。lint のルールは、継続的インテグレーションプロセスに統合されているため、コミットするには、これにパスする必要があります。[ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for Visual Studio Code をインストールしてください。エディターの統合については、[eslint のドキュメント](https://eslint.org/docs/user-guide/integrations)を参照してください。

<!--
With the extension installed, ESLint will use the [.eslintrc.js](https://github.com/WordPress/gutenberg/blob/HEAD/.eslintrc.js) file in the root of the Gutenberg repository for formatting rules. It will highlight issues as you develop, you can also set the following preference to fix lint rules on save.
-->
この拡張機能をインストールすると、ESLint はGutenberg リポジトリのルートにある [.eslintrc.js](https://github.com/WordPress/gutenberg/blob/HEAD/.eslintrc.js) ファイルを整形ルールとして使用し、開発中に問題点をハイライトしてくれます。また、以下を設定すると、保存時に lint エラーを修正できます。


```json
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
```

<!--
### Prettier
-->
### Prettier

<!--
[Prettier](https://prettier.io/) is a tool that allows you to define an opinionated format, and automate fixing the code to match that format. Prettier and ESlint are similar, Prettier is more about formatting and style, while ESlint is for detecting coding errors.
-->
[Prettier](https://prettier.io/) は、絶対的なフォーマットを定義し、そのフォーマットに適合するよう自動的にコードを修正するツールです。Prettier は ESlint に似ていますが、Prettier はフォーマットやスタイルに重きを置いているのに対し、ESlint はコーディングエラーを検出します。

<!--
To use Prettier with Visual Studio Code, you should install the [Prettier - Code formatter extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). You can then configure it to be the default formatter and to automatically fix issues on save, by adding the following to your settings. **_Note_: depending on where you are viewing this document, the brackets may show as double, the proper format is just a single bracket.**
-->

Visual Studio Code で Prettier を使用するには、[Prettier - Code formatter extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) をインストールする必要があります。次に、設定を追加して、Prettier をデフォルトのフォーマッターとして、保存時に自動的に問題を修正します。**_注意_: このドキュメントの表示佳境によっては、ブラケットが二重に表示されるかもしれませんが、実際は一つです。**

```json
"[[javascript]]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
},
"[[markdown]]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
},
```

<!--
This will use the `.prettierrc.js` file included in the root of the Gutenberg repository. The config is included from the [@wordpress/prettier-config](/packages/prettier-config/README.md) package.
-->
これにより、Gutenberg リポジトリのルートにある `.prettierrc.js` ファイルが使用されます。この構成は、[@wordpress/prettier-config](https://github.com/WordPress/gutenberg/tree/trunk/packages/prettier-config) パッケージに含まれています。

<!--
If you only want to use this configuration with the Gutenberg project, create a directory called .vscode at the top-level of Gutenberg, and place your settings in a settings.json there. Visual Studio Code refers to this as Workplace Settings, and only apply to the project.
-->
この設定を Gutenberg プロジェクトでのみ使用したい場合は、Gutenberg のトップレベルにディレクトリ .vscode を作成し、設定をその下の settings.json に置きます。Visual Studio Codeは、これを「ワークスペース設定」と呼び、プロジェクトにのみ適用します。

<!--
For other editors, see [Prettier's Editor Integration docs](https://prettier.io/docs/en/editors.html)
-->
その他のエディターについては、[Prettier のエディターとの統合に関するドキュメント](https://prettier.io/docs/en/editors.html) を参照してください。

<!--
### TypeScript
-->
### TypeScript

<!--
**TypeScript** is a typed superset of JavaScript language. The Gutenberg project uses TypeScript via JSDoc to [type check JavaScript files](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html). If you use Visual Studio Code, TypeScript support is built-in, otherwise see [TypeScript Editor Support](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support) for editor integrations.
-->
**TypeScript** は、JavaScript 言語の型付きの上位セットです。Gutenberg プロジェクトでは、JSDoc を通じて TypeScript を使用して [JavaScript ファイルの型チェック](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html) を行います。Visual Studio Code を使用している場合は、TypeScript サポートが組み込まれています。その他のエディターの場合は、エディタとの統合について [TypeScript Editor Support](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support) を参照してください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/contributors/code/getting-started-with-code-contribution.md)
