<!-- 
# Development Environment
 -->
# 開発環境

<!-- 
This guide is for setting up your local environment for JavaScript development for creating plugins and tools to extend WordPress and the block editor. If you are looking to contribute to Gutenberg project itself, see additional documentation in the [Getting Started guide](/docs/contributors/code/getting-started-with-code-contribution.md).

A development environment is a catch-all term for what you need setup on your computer to work. The three main pieces needed for our development environment are:
 -->
このガイドでは WordPress やブロックエディターを拡張するプラグインやツールを作成可能な ローカル JavaScript 開発環境の構築方法について説明します。Gutenberg プロジェクトへのコントリビューションを検討している場合は、[開発入門ガイド](https://ja.wordpress.org/team/handbook/block-editor/contributors/develop/getting-started/) 内の追加のドキュメントも参照してください。

「開発環境」とはコンピュータでの動作に必要セットアップ全体を指します。この開発環境では大きく3つのセットアップが必要です。

<!-- 
1. Node/NPM Development Tools
2. WordPress Development Site
3. Code Editor
 -->
1. Node/NPM 開発ツール
2. WordPress 開発サイト
3. コードエディター

<!-- 
## Quick Start
 -->
## クイックスタート

<!-- 
Here is a summary of the guide. See each section for additional details and explanations.
 -->
このガイドの要約です。追加の詳細と説明については各セクションを参照してください。

<!--  
**1. Install Node development tools**

Download and install [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm)
 --> 
**1. Node 開発ツールのインストール**

[Node Version Manager](https://github.com/nvm-sh/nvm) (nvm) をダウンロードし、インストールします。

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```
<!-- 
Quit and restart terminal
Install the long-term support (lts) version of node.
 -->
ターミナルを終了し、再起動します。
node の 長期サポート版 (Long Term Support, LTS) をインストールします。

```
nvm install --lts
```
<!-- 
**2. WordPress Development Site**

First download, install, and start [Docker Desktop](https://www.docker.com/products/docker-desktop) following the instructions for your OS.

- Install WordPress environment tool
 -->
**2. WordPress 開発サイト**

まずはじめに OS ごとの手順にしたがって [Docker Desktop](https://www.docker.com/products/docker-desktop) をダウンロード、インストール、開始します。

- WordPress environment ツールのインストール

```
npm -g install @wordpress/env
```
<!-- 
Start the environment from an existing plugin or theme directory, or a new working directory:
 -->
既存のプラグインディレクトリ、またはテーマディレクトリ、または新しい作業用ディレクトリから環境を開始します。

 ```
 wp-env start
 ```
<!-- 
You will have a full WordPress site installed, navigate to: http://localhost:8888/ using your browser, log in to the WordPress dashboard at http://localhost:8888/wp-admin/ using Username "admin" and Password "password", without the quotes.
 -->
これでインストール済みの完全な WordPress サイトが作成されます。ブラウザを使用して http://localhost:8888/ にアクセスできます。WordPress ダッシュボードには http://localhost:8888/wp-admin/ からユーザー名「admin」、パスワード「password」でログインできます。

<!-- 
**3. Code Editor**

You can use any text editor to write code. For example, Visual Studio Code](https://code.visualstudio.com/) is a popular open-source editor. You can follow instructions on their site to install it for your OS.
 -->
**3. コードエディター**

コードはどのテキストエディターでも書くことができます。たとえば Visual Studio Code](https://code.visualstudio.com/) は人気のオープンソースエディターです。インストールする場合はサイト上の OS ごとの説明に従ってください。

<!-- 
## Node Development Tools
 -->
## Node 開発ツール

<!-- 
The tools needed for development are **Node** and **NPM**. **Nodejs** is a runtime environment that allows running JavaScript outside of the browser. NPM is the Node Package Manager, it is used for installing dependencies and running scripts. The script `npx` is also installed with Nodejs—this script is used to run packages not yet installed—we will use `npx` to bootstrap a block.
 -->
開発に必要なツールが **Node** と **NPM** です。**Nodejs** はブラウザの外で JavaScript を動かす際に必要な実行環境です。NPM は Node Package Manager の略で、依存関係にあるスクリプトのインストールと実行に使用されます。`npx` も Nodejs と一緒にインストールされますが、このスクリプトはまだインストールされていないパッケージの実行に使用されます。このサンプルでも `npx` を使用してブロックをゼロから作成します。

<!-- 
The tools are used to convert the JavaScript we are going to write into a format that browsers can run. This is called transpiling or the build step.

For Mac and Linux, it is recommended to use the [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm). Using `nvm` to install node allows installing specific versions, plus installs locally in your home directory and avoids any global permission issues.
 -->
作成した JavaScript はツールを使用してブラウザーが実行可能な形式に変換します。この変換はトランスパイリングまたはビルドステップと呼ばれます。

Mac や Linux では [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm) の使用を推奨します。node のインストールに `nvm` を使用すると、特定のバージョンをインストールしたり、ホームディレクトリにローカルにインストールしてグローバルな権限問題を回避値することができます。

<!-- 
For Windows, or alternative installs, you can [download a Nodejs installer](https://nodejs.org/en/download/) directly from the main Node.js website, the long term support (LTS) version is recommended. Installers are available for Windows and Mac, and binaries available for Linux. See Node.js site for additional installation methods.

Here are the quick instructions to install using nvm, see the [full installation instructions](https://github.com/nvm-sh/nvm#installing-and-updating) for additional details.
 -->
Windows やその他の OS では Node.js の Web サイトから直接 [Nodejs インストールプログラムをダウンロード](https://nodejs.org/en/download/) できます。LTS (long term support、長期間サポート) 版を推奨します。インストールプログラムは Windows と Mac、バイナリーモジュールは Linux で利用可能です。インストール方法の詳細については Node.js のサイトを参照してください。

nvm を使用した簡単なインストール方法を説明します。詳細については[完全なインストール手順](https://github.com/nvm-sh/nvm#installing-and-updating)を参照してください。

<!-- 
Run the following on the command-line to install nvm:
 -->
nvm をインストールするには次のコマンドを実行します。

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
<!-- 
Note: On macOS, the required developer tools are not installed by default, if not already installed you may be prompted to download the install.
 -->
注意: macOS にはデフォルトでは必要な開発ツールがインストールされていません。この場合、開発ツールをインストールするよう以下のダイアログが表示されます。

<img src="https://developer.wordpress.org/files/2020/07/git-install-prompt.png" alt="Mac git command requies command line developer tools" width="400" height="195"/>

<!-- 
After installing nvm, you need to use it to install node, to install the LTS version of node, run:
 -->
nvm をインストール後はこれを使用して node をインストールします。次のコマンドを使用して node の LTS バージョンをインストールします。

```sh
nvm install --lts
```
<!-- 
If there is an error running the above command, for example a common error that occurs is:
 -->
上のコマンドを実行すると次のようなエラーが発生する場合があります。

```sh
$ nvm install --lts
zsh: command not found: nvm
```
<!-- 
First, try quitting and restarting your terminal to pick up the installed config.

If restarting did not resolve the problem, you might need to create the default profile file.

On macOS Catalina, the default shell is zsh, to create the profile file type `touch ~/.zshrc` on the command-line. It is fine to run if the file already exists. Note, `~/` is a shortcut to your home directory. For Ubuntu, including WSL, the default profile is bash, use `touch ~/.bashrc` to create.
 -->
解決するにはまず、ターミナルを終了して再起動し、導入されている構成を取り込んでからコマンドを再実行してください。

問題が続くようであれば、デフォルトのプロファイルファイルを作成する必要があるかもしれません。

macOS Catalina のデフォルトのシェルは zsh です。プロファイルファイルを作成するにはコマンドラインで `touch ~/.zshrc` を実行してください。すでに同じファイルがあっても構いません。`~/` はホームディレクトリーのショートカットであることに注意してください。WSL を含む Ubuntu ではデフォルトプロファイルは bash です。作成には `touch ~/.bashrc` を使用してください。 

<!-- 
After creating the profile file, re-run the install command:
 -->
プロファイルファイルの作成後はインストールコマンドを再実行してください。

```sh
nvm install --lts
```
<!-- 
The important part after installing is being able to use them in your terminal. Open a terminal command-line and type `node -v` and `npm -v` to confirm they are installed.
 -->

インストール後はターミナルからコマンドが実行できることを確認してください。ターミナルを開き `node -v` と `npm -v` を実行してインストールを確認します。

```sh
> node -v
v12.18.0

> npm -v
6.14.4
```
<!-- 
Your versions may not match exactly, that is fine. The minimum version for node is >= 10.x and for npm >= 6.9x, using the current LTS version will always be supported.
 -->
必ずしもバージョンは同じでないかもしれませんが、問題ありません。node の最低要件はバージョン 10.x 以上、npm は 6.9x 以上です。現行の LTS 版を使用すれば常にこの要件を満たします。

<!-- 
## WordPress Development Site
 -->
## WordPress 開発サイト

<!-- 
There are several ways to run WordPress locally on your own computer, or you could even develop on a cloud hosted computer, though this may be slower.

The WordPress [wp-env package](https://www.npmjs.com/package/@wordpress/env) lets you set up a local WordPress environment for building and testing plugins and themes, without any additional configuration.
 -->
コンピュータ上でローカルに WordPress を実行する方法にはいくつかあります。多少遅くはなりますが、クラウド上のコンピュータで開発することもできます。

WordPress [wp-env パッケージ](https://ja.wordpress.org/team/handbook/block-editor/packages/packages-env/) を使用すると、追加の構成なしでプラグインやテーマのビルド用、テスト用のローカル WordPress 環境をセットアップできます。

<!-- 
The `wp-env` tool uses Docker to create a virtual machine to that runs the WordPress site. There are instructions available for installing Docker on [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/), [all other versions of Windows](https://docs.docker.com/toolbox/toolbox_install_windows/), [macOS](https://docs.docker.com/docker-for-mac/install/), and [Linux](https://docs.docker.com/v17.12/install/linux/docker-ce/ubuntu/#install-using-the-convenience-script). If using Ubuntu, see our additional notes for [help installing Docker on Ubuntu](/docs/getting-started/tutorials/devenv/docker-ubuntu.md).
 -->
`wp-env` ツールは Docker を使用して WordPress サイト実行用の仮想マシンを作成します。OS ごとのインストール手順は以下のリンクを参照してください。[Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/)、[その他のバージョンの Windows](https://docs.docker.com/toolbox/toolbox_install_windows/), [macOS](https://docs.docker.com/docker-for-mac/install/)、[Linux](https://docs.docker.com/v17.12/install/linux/docker-ce/ubuntu/#install-using-the-convenience-script)。Ubuntu を使用している場合は補足のドキュメント「[Ubuntu への Docker インストールヘルプ](https://ja.wordpress.org/team/handbook/block-editor/tutorials/devenv/docker-ubuntu)」を参照してください。

<!-- 
After you have installed Docker, go ahead and install the `wp-env` tool. This command will install the tool globally, which means you can run it from any directory:
 -->
Docker のインストールに続けて `wp-env` ツールをインストールしてください。このコマンドはグローバルにツールをインストールするため、任意のディレクトリからコマンドを実行できます。

```sh
npm -g install @wordpress/env
```
<!-- 
To confirm it is installed and available, run:
 -->
以下を実行して、インストールが成功し、正しく動作することを確認します。

```sh
wp-env --version
> 1.6.0
```
<!-- 
The `wp-env` script is used to create a Docker WordPress environment. You can use this script to start an environment with your plugin activated by running it from the directory containing your plugin. For example if you are following the create block tutorial, this would be in the generated directory like so:
 -->
`wp-env` スクリプトを使用して Docker WordPress 環境を作成できます。プラグインを含むディレクトリからこのスクリプトを実行すると、プラグインを有効化した状態で環境を開始できます。たとえば「[ブロックの作成 チュートリアル](https://ja.wordpress.org/team/handbook/block-editor/tutorials/create-block/)」を試している場合、このディレクトリは以下のような生成されたディレクトリになります。

```sh
npx @wordpress/create-block starter-block
cd starter-block
wp-env start
```
<!-- 
You can access your environment in your browser at: [http://localhost:8888/](http://localhost:8888/), the default username is `admin` and default password is `password`. For more information controlling the Docker environment see the [@wordpress/env package readme](/packages/env/README.md).
 -->
環境にはブラウザから [http://localhost:8888/](http://localhost:8888/) でアクセスできます。デフォルトのユーザー名は `admin`、パスワードは `password` です。Docker 環境の操作の詳細については [@wordpress/env パッケージドキュメント](https://ja.wordpress.org/team/handbook/block-editor/packages/packages-env/)を参照してください。

<!-- 
When using the script while developing a single plugin, `wp-env start` can mount and activate the plugin automatically when run from the directory containing the plugin. Note: This also works for themes when run from the directory in which you are developing the theme.
 -->
1つのプラグインを開発する場合、開発中のプラグインのディレクトリから `wp-env start` を実行してください。自動的にプラグインディレクトリがマウントされ、プラグインが有効化されます。注意: 同じ方法はテーマでも動作します。開発中のテーマのディレクトリでコマンドを実行してください。

<!-- 
If you run `wp-env start` from a directory that is not a plugin or theme, a generic WordPress environment will be created. The script will display the following warning, it is fine if this is your intention.
 -->
プラグインでもテーマでもないディレクトリから `wp-env start` を開始すると通常の WordPress 環境が作成されます。スクリプトは以下の警告表示しますが、意図したものであれば無視して構いません。

<!-- 
```
!! Warning: could not find a .wp-env.json configuration file and could not determine if 'DIR' is a WordPress installation, a plugin, or a theme.
```
 -->
```
!! Warning: could not find a .wp-env.json configuration file and could not determine if 'DIR' is a WordPress installation, a plugin, or a theme.
```
*!! 警告: .wp-env.json 構成ファイルが見つかりません。'DIR' が WordPress インストールか、プラグインか、テーマか判別できません。*

<!-- 
You can use the `.wp-env.json` configuration file to create an environment that works with multiple plugins and/or themes. See the [@wordpress/env package for additional details](/packages/env/README.md#wp-envjson).
 -->
`.wp-env.json` 構成ファイルを使用すると複数のプラグインやテーマと動作する環境を作成できます。詳細については [@wordpress/env パッケージ](https://ja.wordpress.org/team/handbook/block-editor/packages/packages-env/#wp-envjson)を参照してください。

<!-- 
#### Troubleshooting
 -->
#### トラブルシューティング
<!-- 
A common issue when running `wp-env` is `Error while running docker-compose command.`

- Check that Docker Desktop is started and running.
- Check Docker Desktop dashboard for logs, restart, or remove existing VMs.
 -->
`wp-env` を実行する際によくあるエラーは「`Error while running docker-compose command.`」(docker-compose コマンドの実行中にエラー)です。 

- Docker Desktop が開始され、実行されていることを確認してください。
- Docker Desktop ダッシュボードでログを確認し、再起動し、既存の VM を削除してください。

<!-- 
If you see the error: `Host is already in use by another container`

- The container is already running, or another one is. You can stop an existing container running use `wp-env stop` from the directory you started it.
 -->
エラー「`Host is already in use by another container`」(ホストはすでに他のコンテナで使用中) が表示される場合は、

- 該当のコンテナ、または別のコンテナがすでに起動しています。コンテナは開始したディレクトリから `wp-env stop` を実行して、既存の実行中のコンテナを停止してください。

<!-- 
### Alternative to Docker
 -->
### Docker の代替

<!-- 
A block is just a plugin, so any WordPress environment can be used for development. A couple of alternatives that might be easier, since they do not require Docker install and setup.
ブロックは通常のプラグインです。開発にはどのような WordPress 環境でも使用できます。Docker のインストールやセットアップが必要ない簡便な代替もいつくかあります。
 -->

<!-- 
Docker is just one method to run a local WordPress environment. Block development and extending WordPress is done using normal plugins, so any WordPress environment can be used. Here are some alternatives that you can consider which do not require installing Docker.
 -->
Docker はローカルで WordPress 環境を稼働する1つの手段です。ブロック開発や WordPress の拡張は通常のプラグインを使用して可能なため任意の WordPress 環境を使用することができます。以下に Docker のインストールが不要ないくつかの代替の環境を挙げます。

<!-- 
-   [Local by Flywheel](https://localbyflywheel.com/) - Local is a single application you download and install. You will need to know where the plugin directory is located after install. If you create a site called `mywp` typically the plugin directory is installed at `~\Local Sites\mywp\app\public\wp-content\plugins`

-   [WampServer](http://www.wampserver.com/en/) or [MAMP](https://www.mamp.info/) environments, both are quite similar to Local, combining a web server, PHP, and database. However these tools are not WordPress specific, so if you are not already using them, Local might be an easier option.
-->
-   [Local by Flywheel](https://localbyflywheel.com/) - 「Local」はダウンロード、インストール可能な単一アプリケーションです。インストール後、どこにプラグインディレクトリがあるかは知っておく必要があります。`mywp` というサイトを作った場合、プラグインディレクトリは通常  `~\Local Sites\mywp\app\public\wp-content\plugins` になります。

-   [WampServer](http://www.wampserver.com/en/) または [MAMP](https://www.mamp.info/) 環境は両方とも Local によく似ていて Web サーバー、PHP、データベースを一体化しています。ただしこれらのツールは WordPress 固有ではありません。すでに使っているのでなければ Local が一番簡単な選択肢かもしれません。

<!-- -   Remote server - you can work on a remote server, most hosts provide a quick WordPress setup. However, this will require additional time thorughout development syncing to the server, or working directly on the remote server.
 -->
-   リモートサーバー - リモートサーバー上で作業することもできます。ほとんどのレンタルサーバーには簡便な WordPress セットアップメニューがあります。しかし、サーバーとの同期やリモートサーバー上の作業ディレクトリなどで開発中には追加の作業時間が必要になります。

<!-- 
The important part is having a WordPress site installed, and know where and how to update files in the plugins directory.
 -->
重要な点は WordPress がインストールされた環境があること、そして、プラグインディレクトリ内のどこをどのように更新するか知っていることです。

<!-- 
## Code Editor
 -->
## コードエディター

<!-- 
[Visual Studio Code](https://code.visualstudio.com/) is a popular code editor for JavaScript development. It works quite well across the three major platforms (Windows, Linux, and Mac), it is open-source and actively maintained by Microsoft. Plus Visual Studio Code has a vibrant community providing plugins and extensions; it is becoming the defacto standard for web development.

Alternative editors include [Sublime Text](https://www.sublimetext.com/) that is also available across platforms, though is a commercial product; or other free alternatives include [Vim](https://www.vim.org/), [Atom](https://atom.io/), and [Notepad++](https://notepad-plus-plus.org/) all support standard JavaScript style development.

You can use any editor you're comfortable with, it is more a personal preference. The development setup for WordPress block editor is a common JavaScript environment and most editors have plugins and suppport. The key is having a way to open, edit, and save text files.
 -->
[Visual Studio Code](https://code.visualstudio.com/) は JavaScript 開発で人気のあるコードエディターです。3つのメジャーなプラットフォーム Windows、Linux、Mac で完全に動作し、オープンソースであり、Microsoft がアクティブに開発しています。加えて Visual Studio Code には活発なコミュニティがあります。プラグインやエクステンションが提供され Web 開発におけるデファクトスタンダードになっています。

代替のエディターには、これもマルチプラットフォームで利用可能な [Sublime Text](https://www.sublimetext.com/) がありますが、こちらは有償の製品です。その他の無料の代替としては [Vim](https://www.vim.org/)、[Atom](https://atom.io/)、[Notepad++](https://notepad-plus-plus.org/) があります。これらはすべて標準の JavaScript スタイルの開発をサポートします。

開発には好きなエディターを使うことができます。これは個人の好みです。WordPress ブロックエディターの開発環境セットアップは一般的な JavaScript 環境であり、ほとんどのエディターにはプラグインやサポートがあります。重要なことはテキストファイルを開き、編集し、保存できることです。
<!-- 
## Uninstall - Start Over
 -->
## アンインストール - やり直し
<!-- 
Here are a few instructions if you need to start over, or want to remove what was installed.
 -->
最初からやり直したり、インストールしたものを削除する場合の手順です。

<!-- 
### Local Environment
 -->
### ローカル環境
<!-- 
* If you just want to reset and clean the WordPress database:
 -->
* WordPress データベースをリセットしてクリーンにしたいだけの場合

```
wp-env clean all
```
<!-- 
* To remove the local environment completely for a specific project:
 -->
* ローカルのプロジェクト艦橋を完全に削除する場合

```
wp-env destroy
```
<!-- 
* To completely uninstall wp-env tool:
 -->
* wp-env ツールを完全に削除する場合

```
npm -g uninstall @wordpress/env
```
<!-- 
* To uninstall Docker, or Visual Studio Code use your OS method to remove packages. For example, on Windows run "Add or remove programs". You can additionally uninstall from the Docker Desktop app, click the bug icon at the top to switch to this Troubleshoot screen. Click Uninstall or remove.

![Docker Troubleshoot Screenshot](https://developer.wordpress.org/files/2020/08/docker-uninstall-screen.png)
 -->
* Docker や Visual Studio Code をアンインストールするには OS で準備された方法を使用してパッケージを削除してください。たとえば Windows であれば「プログラムの追加と削除」で実行します。Docker は Docker Desktop アプリからアンインストールすることもできます。右上の虫のアイコンをクリックして「Troubleshoot」の画面に切り替え、「Uninstall」をクリックして削除してください。

![Docker Troubleshoot スクリーンショット](https://developer.wordpress.org/files/2020/08/docker-uninstall-screen.png)

<!-- 
### Uninstall Node/NVM
 -->
### Node/NVM のアンインストール

<!-- 
To uninstall Node/NVM, delete the NVM directory, this is typically installed at `$HOME/.nvm`, delete using
 -->

Node/NVM をアンインストールするには NVM ディレクトリを削除してください。通常は `$HOME/.nvm` にインストールされています, 以下のコマンドを使用して削除してください。

```
rm -rf "$HOME/.nvm"
```
<!-- 
If this does not work and the `$NVM_DIR` environment variable is set you can remove using `rm -rf "$NVM_DIR"`

To clean up any installed JavaScript packages remove the global `.npm` directory at `$HOME/.npm`,
 -->
もしもこれでうまくいかず `$NVM_DIR` 環境変数が設定されている場合は、 `rm -rf "$NVM_DIR"` で削除できます。

インストールされた JavaScript パッケージを削除するには、`$HOME/.npm` のグローバル `.npm` ディレクトリを削除してください。

```
rm -rf "$HOME/.npm"
```
<!-- 
Just as you confirmed the installation worked, you can confirm the uninstall worked. First quit and restart terminal and then try to run `npm -v`, `node -v`, and `nvm -v` you should then see a "command not found" error in the terminal.
 -->
インストール時と同じ手順で、アンインストールが正しく完了したことを確認できます。ターミナルを終了して再起動し、`npm -v`、`node -v`、`nvm -v` を実行してください。ターミナルにはエラー「command not found」(コマンドが見つかりません) が表示されます。

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/tutorials/devenv/readme.md)
