<!--
# `wp-env`

`wp-env` lets you easily set up a local WordPress environment for building and testing plugins and themes. It's simple to install and requires no configuration.

## Quick (tl;dr) instructions

Ensure that Docker is running, then:
 -->
# `@wordpress/env`

`wp-env` を使用してプラグインやテーマのビルド用とテスト用の WordPress ローカル環境を簡単にセットアップできます。簡単にインストールできて構成する必要もありません。

## クイック (tl;dr) インストラクション

Docker が動作していることを確認し、以下のコマンドを実行してください。

```sh
$ cd /path/to/a/wordpress/plugin
$ npm -g i @wordpress/env
$ wp-env start
```

<!--
The local environment will be available at http://localhost:8888 (Username: `admin`, Password: `password`).

The database credentials are: user `root`, password `password`. For a comprehensive guide on connecting directly to the database, refer to [Accessing the MySQL Database](https://github.com/WordPress/gutenberg/blob/trunk/docs/contributors/code/getting-started-with-code-contribution.md#accessing-the-mysql-database).
 -->
http://localhost:8888 (ユーザー名: `admin`、パスワード: `password`) でローカル環境が利用できます。

データベースの認証情報は、ユーザー `root`、パスワード `password` です。データベースに直接接続するための完全なガイドは「[Accessing the MySQL Database](https://github.com/WordPress/gutenberg/blob/trunk/docs/contributors/code/getting-started-with-code-contribution.md#accessing-the-mysql-database)」を参照してください。

<!-- 
## Prerequisites
 -->
## 前提ソフトウエア
<!-- 
`wp-env` を使用するにはまず Docker をインストールしてください。インストールの詳細については以下の OS ごとのドキュメントを参照してください。[Windows](https://docs.docker.com/desktop/install/windows-install/)、[macOS](https://docs.docker.com/docker-for-mac/install/)、[Linux](https://docs.docker.com/desktop/install/linux-install/)
 -->
<!-- 
Node.js and npm are required. The latest LTS version of Node.js is used to develop `wp-env` and is recommended.
 -->
<!-- 
Node.js と npm も必要です。`wp-env` の開発には最新の LTS バージョンの Node.js を使用しているため、これを推奨します。
 -->

<!-- 
`wp-env` relies on a few commonly used developer tools:
 -->
`wp-env` は以下の一般に使用される開発ツールを必要とします。

<!-- 
-   **Docker**. `wp-env` is powered by Docker. There are instructions available for installing Docker on [Windows](https://docs.docker.com/desktop/install/windows-install/) (we recommend the WSL2 backend), [macOS](https://docs.docker.com/docker-for-mac/install/), and [Linux](https://docs.docker.com/desktop/install/linux-install/).
-   **Node.js**. `wp-env` is written as a Node script. We recommend using a Node version manager like [nvm](https://github.com/nvm-sh/nvm) to install the latest LTS version. Alternatively, you can [download it directly here](https://nodejs.org/en/download).
-   **git**. Git is used for downloading software from source control, such as WordPress, plugins, and themes. [You can find the installation instructions here.](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
 -->
-   **Docker**: `wp-env` は Docker を利用します。OS ごとの Docker のインストール手順を参照してください。[Windows](https://docs.docker.com/desktop/install/windows-install/) (WSL2 バックエンドを推奨)、[macOS](https://docs.docker.com/docker-for-mac/install/)、[Linux](https://docs.docker.com/desktop/install/linux-install/)。
-   **Node.js**: `wp-env` は Node スクリプトとして書かれています。最新の LTS バージョンのインストールには [nvm](https://github.com/nvm-sh/nvm) のような Node バージョンマネージャを使用してください。代替として、[ここから直接ダウンロード](https://nodejs.org/en/download)もできます。
-   **git**: Git は、WordPress、プラグイン、テーマなどのソース管理からのソフトウエアのダウンロードに使用されます。[ここにインストール手順があります](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)。

<!--
## Installation

### Installation as a global package

After confirming that the prerequisites are installed, you can install `wp-env` globally like so:
 -->
## インストール

### グローバルパッケージとしてのインストール

前提ソフトウエアのインストールを確認できたら、グローバルに `wp-env` をインストールできます。

```sh
$ npm -g i @wordpress/env
```
<!--
You're now ready to use `wp-env`!
-->
これで `wp-env` を使うことができます !

<!--
### Installation as a local package

If your project already has a package.json, it's also possible to use `wp-env` as a local package. First install `wp-env` locally as a dev dependency:
 -->
### ローカルパッケージとしてのインストール

プロジェクトにすでに package.json がある場合、`wp-env` をローカルパッケージとして使用することもできます。まず `wp-env` を開発依存としてローカルにインストールします。

```sh
$ npm i @wordpress/env --save-dev
```

<!-- 
If you have also installed `wp-env` globally, running it will automatically execute the local, project-level package. Alternatively, you can execute `wp-env` via [`npx`](https://www.npmjs.com/package/npx), a utility automatically installed with `npm`.`npx` finds binaries like `wp-env` installed through node modules. As an example: `npx wp-env start --update`.
 -->
グローバルに `wp-env` をインストールしている場合、これを実行すると、自動的にローカルのプロジェクトレベルのパッケージが実行されます。代替として `wp-env` を、[`npx`](https://www.npmjs.com/package/npx) で実行できます。`npx` は `npm` とともに自動的にインストールされるユーティリティです。`npx` は node モジュールを通してインストールされた `wp-env` などのバイナリを見つけます。例: `npx wp-env start --update`。

<!-- 
If you don't wish to use the global installation or `npx`, modify your `package.json` and add an extra command to npm `scripts` (https://docs.npmjs.com/misc/scripts):
 -->
グローバルインストールや `npx` を使いたくなければ、`package.json` を変更し、npm `scripts` (https://docs.npmjs.com/misc/scripts) にコマンドを追加してください。

```json
"scripts": {
	"wp-env": "wp-env"
}
```
<!--
When installing `wp-env` in this way, all `wp-env` commands detailed in these docs must be prefixed with `npm run`, for example:
 -->
この方法で `wp-env` をインストールした場合、この文書で説明するすべての `wp-env` コマンドの前に `npm run` を追加してください。たとえば

<!--
```sh
# You must add another double dash to pass flags to the script (wp-env) rather than to npm itself
$ npm run wp-env start -- --update
```
 -->
```sh
# npm に対してではなく、スクリプト (wp-env) にフラグを渡すには、別の二重ダッシュ(--)を追加する必要があります。
$ npm run wp-env start -- --update
```

<!--
instead of:
 -->
と実行します。以後は次のような形式のみ記述します。

```sh
$ wp-env start --update
```
<!--
## Usage

### Starting the environment

First, ensure that Docker is running. You can do this by clicking on the Docker icon in the system tray or menu bar.

Then, change to a directory that contains a WordPress plugin or theme:
 -->
## 使用方法

### 環境の開始

まず Docker が実行されていることを確認してください。確認するにはシステムトレイ、またはメニューバーの Docker アイコンをクリックします。

次に WordPress プラグインやテーマを含むディレクトリーに移動してください。

```sh
$ cd ~/gutenberg
```
<!--
Then, start the local environment:
 -->
ローカル環境を開始します。

```sh
$ wp-env start
```
<!--
Finally, navigate to http://localhost:8888 in your web browser to see WordPress running with the local WordPress plugin or theme running and activated. Default login credentials are username: `admin` password: `password`.

### Stopping the environment

To stop the local environment:
 -->
Web ブラウザで http://localhost:8888 を開きます。ローカルのプラグインやテーマがインストール、有効化された状態で WordPress が表示されます。デフォルトのログインアカウントはユーザー名 `admin`、パスワード `password` です。

### 環境の停止

ローカル環境を停止するには以下を実行します。

```sh
$ wp-env stop
```

<!--
## Troubleshooting common problems

Many common problems can be fixed by running through the following troubleshooting steps in order:

### 1. Check that `wp-env` is running

First, check that `wp-env` is running. One way to do this is to have Docker print a table with the currently running containers:
 -->
## 一般的な問題のトラブルシューティング

以下のトラブルシューティングを順に実行することで、多くの一般的な問題を解決できます。

### 1. `wp-env` が動作していることの確認

まず `wp-env` が動作していることを確認します。現在実行中の Docker コンテナ一覧を出力します。

```sh
$ docker ps
```
<!--
In this table, by default, you should see three entries: `wordpress` with port 8888, `tests-wordpress` with port 8889 and `mariadb` with port 3306.

### 2. Check the port number

By default `wp-env` uses port 8888, meaning that the local environment will be available at http://localhost:8888.

You can configure the port that `wp-env` uses so that it doesn't clash with another server by specifying the `WP_ENV_PORT` environment variable when starting `wp-env`:
 -->
リストにはデフォルトで3つのエントリーが表示されます。ポート 8888 の `wordpress`、ポート 8889 の `tests-wordpress`、ポート 3306 の `mariadb` です。

### 2. ポート番号の確認

デフォルトでは `wp-env` はポート 8888 を使用し、ローカル環境が http://localhost:8888 で利用可能になります。

別のサーバーと衝突しないように `wp-env` の使用するポートを構成できます。`wp-env` を開始する際に `WP_ENV_PORT` 環境変数を指定してください。

```sh
$ WP_ENV_PORT=3333 wp-env start
```

<!--
Running `docker ps` and inspecting the `PORTS` column allows you to determine which port `wp-env` is currently using.

You may also specify the port numbers in your `.wp-env.json` file, but the environment variables will take precedence.

### 3. Restart `wp-env` with updates

Restarting `wp-env` will restart the underlying Docker containers which can fix many issues.

To restart `wp-env`, just run `wp-env start` again. It will automatically stop and start the container. If you also pass the `--update` argument, it will download updates and configure WordPress again.
 -->
`docker ps` を実行し `PORTS` 列を参照すると、現在 `wp-env` がどのポートを使用しているかを調べることができます。

`.wp-env.json` ファイル内にポート番号を指定することもできますが、環境変数が指定されるとそちらが優先されます。

### 3. 更新と `wp-env` の再起動

`wp-env` を再起動すると、内部で使用される Docker コンテナが再起動され、多くの問題を解消します。

`wp-env` を再起動するには、`wp-env start` を再実行するだけです。自動的にコンテナを停止し、起動します。引数に `--update` を渡すと、更新をダウンロードし、WordPress を再設定します。

```sh
$ wp-env start --update
```

<!--
### 4. Restart Docker

Restarting Docker will restart the underlying Docker containers and volumes which can fix many issues.

To restart Docker:

1. Click on the Docker icon in the system tray or menu bar.
2. Select _Restart_.

Once restarted, start `wp-env` again:
 -->
### 4. Docker の再起動

Docker を再起動すると、内部で使用する Docker コンテナとボリュームが再起動され、多くの問題を解消します。

Docker を再起動するには

1. システムトレイ、または、メニューバーの Docker アイコンをクリックする。
2. _Restart_ を選択する。

Docker の再起動後、`wp-env` を起動します。

```sh
$ wp-env start
```

<!--
### 5. Reset the database

Resetting the database which the local environment uses can fix many issues, especially when they are related to the WordPress installation.

To reset the database:

**⚠️ WARNING: This will permanently delete any posts, pages, media, etc. in the local WordPress installation.**
 -->
### 5. データベースのリセット

ローカル環境の使用するデータベースをリセットすると、多くの問題、特に WordPress のインストールに関する問題が解消します。

データベースをリセットするには

**⚠️ 警告: 次のコマンドは、ローカル WordPress 環境内の投稿、ページ、メディア等を完全に削除します。**

```sh
$ wp-env clean all
$ wp-env start
```
<!--
### 6. Destroy everything and start again 🔥

When all else fails, you can use `wp-env destroy` to forcibly remove all of the underlying Docker containers, volumes, and files. This will allow you to start from scratch.

To do so:

**⚠️ WARNING: This will permanently delete any posts, pages, media, etc. in the local WordPress installation.**
 -->
### 6. すべてを破壊して、最初からやり直す 🔥

上のすべてがうまくいかない場合、`wp-env destroy` を使用してローカルの Docker コンテナ、ボリューム、ファイルを強制的に削除できます。ゼロからやり直すことができます。

すべてを破壊するには

**⚠️ 警告: 次のコマンドは、ローカル WordPress 環境内の投稿、ページ、メディア等を完全に削除します。**

<!-- 
```sh
$ wp-env destroy
# This new instance is a fresh start with no existing data:
$ wp-env start
```
 -->
```sh
$ wp-env destroy
# この新しいインスタンスは、既存データのないクリーンなものです。
$ wp-env start
```


<!--
### 7. Debug mode and inspecting the generated dockerfile.
 -->
<!-- 
### 7. デバッグモードと生成された docker ファイルの確認
 -->
<!--
`wp-env` uses docker behind the scenes. Inspecting the generated docker-compose file can help to understand what's going on.

Start `wp-env` in debug mode
 -->
<!-- 
`wp-env` は裏側で docker を使用しています。生成された docker-compose ファイルを調べると何が起きているかを理解できます。

`wp-env` をデバッグモードで開始します。

```sh
wp-env start --debug
```
 -->
<!--
`wp-env` will output its config which includes `dockerComposeConfigPath`.
 -->
<!-- 
`wp-env` `dockerComposeConfigPath` を含む構成情報を出力します。

```sh
ℹ Config:
	...
	"dockerComposeConfigPath": "/Users/$USERNAME/.wp-env/5a619d332a92377cd89feb339c67b833/docker-compose.yml",
	...
```
 -->
<!-- 

## Using included WordPress PHPUnit test files
 -->
## 同梱された WordPress PHPUnit テストファイルの使用

<!-- 
Out of the box `wp-env` includes the [WordPress' PHPUnit test files](https://develop.svn.wordpress.org/trunk/tests/phpunit/) corresponding to the version of WordPress installed. There is an environment variable, `WP_TESTS_DIR`, which points to the location of these files within each container. By including these files in the environment, we remove the need for you to use a package or install and mount them yourself. If you do not want to use these files, you should ignore the `WP_TESTS_DIR` environment variable and load them from the location of your choosing.
 -->
`wp-env` にはデフォルトで、インストールされる WordPress のバージョンに対応した [WordPress の PHPUnit テストファイル](https://develop.svn.wordpress.org/trunk/tests/phpunit/) が含まれます。環境変数 `WP_TESTS_DIR` は、各コンテナ内のこれらのファイルの場所を指定します。これらのファイルが環境に含まれるため、パッケージを使用したり、自分でインストールしてマウントしたりする必要はありません。これらのファイルを使用したくない場合は、環境変数 `WP_TESTS_DIR` を無視して、好きな場所から読み込めます。

<!-- 
### Customizing the `wp-tests-config.php` file
 -->
### `wp-tests-config.php` ファイルのカスタマイズ

<!-- 
While we do provide a default `wp-tests-config.php` file within the environment, there may be cases where you want to use your own. WordPress provides a `WP_TESTS_CONFIG_FILE_PATH` constant that you can use to change the `wp-config.php` file used for testing. Set this to a desired path in your `bootstrap.php` file and the file you've chosen will be used instead of the one included in the environment.
 -->
環境内にはデフォルトで `wp-tests-config.php` ファイルがありますが、独自のファイルを使いたい場合もあります。WordPress の `WP_TESTS_CONFIG_FILE_PATH` 定数を使用すると、テストで使用する `wp-config.php` ファイルを変更できます。これを `bootstrap.php` ファイル内の任意のパスに設定すると、環境に含まれるファイルの代わりに選択したファイルを使用できます。

<!-- 
## Using `composer`, `phpunit`, and `wp-cli` tools.
 -->
## composer、phpunit、wp-cli ツールの使用

<!-- 
For ease of use, Composer, PHPUnit, and wp-cli are available for in the environment. To run these executables, use `wp-env run <env> <tool> <command>`. For example, `wp-env run cli composer install`, or `wp-env run tests-cli phpunit`. You can also access various shells like `wp-env run cli bash` or `wp-env run cli wp shell`.

For the `env` part, `cli` and `wordpress` share a database and mapped volumes, but more tools are available in the cli environment. You should use the `tests-cli` / `tests-wordpress` environments for a separate testing database.
 -->
環境内では利便性のため Composer、PHPUnit、wp-cli を利用できます。これらの実行ファイルを実行するには、`wp-env run <env> <tool> <command>` を使用してください。例えば、`wp-env run cli composer install`、`wp-env run tests-cli phpunit` などです。また、`wp-env run cli bash` や `wp-env run cli wp shell` のように様々なシェルにアクセスできます。

`env` では、`cli` と `wordpress` はデータベースとマップされたボリュームを共有しますが、cli 環境ではより多くのツールを使用できます。別個のテスト用データベースには `tests-cli` または `tests-wordpress` 環境を使用する必要があります。

<!-- 
By default, the cwd of the run command is the root of the WordPress install. If you're working on a plugin, you likely need to pass `--env-cwd` to make sure composer/phpunit commands are executed relative to the plugin you're working on. For example, `wp-env run cli --env-cwd=wp-content/plugins/gutenberg composer install`.

To make this easier, it's often helpful to add scripts in your `package.json` file:
 -->
デフォルトでは、run コマンドの cwd (ワークディレクトリ) は、WordPress のインストールルートです。プラグインで作業している場合、composer や phpunit コマンドが、作業中のプラグインに関連して実行するよう、`--env-cwd` を渡す必要があります。例えば、`wp-env run cli --env-cwd=wp-content/plugins/gutenberg composer install` です。

これを簡単に実行するには、`package.json` ファイルにスクリプトを追加します。

```json
{
	"scripts": {
		"composer": "wp-env run cli --env-cwd=wp-content/plugins/gutenberg composer"
	}
}
```
<!-- 
Then, `npm run composer install` would run composer install in the environment. You could also do this for phpunit, wp-cli, etc.
 -->
`npm run composer install` を実行すると、その環境で composer install が実行されます。これは phpunit や wp-cli などでも同様です。

<!--
## Using Xdebug
 -->
## Xdebug の使用

<!--
Xdebug is installed in the wp-env environment, but it is turned off by default. To enable Xdebug, you can use the `--xdebug` flag with the `wp-env start` command. Here is a reference to how the flag works:
 -->
wp-env 環境には Xdebug がインストールされていますが、デフォルトではオフになっています。Xdebug を有効にするには `wp-env start` コマンドの `--xdebug` フラグを使用します。以下ではフラグの動作について説明します。

<!--
```sh
# Sets the Xdebug mode to "debug" (for step debugging):
wp-env start --xdebug

# Sets the Xdebug mode to "off":
wp-env start

# Enables each of the Xdebug modes listed:
wp-env start --xdebug=profile,trace,debug
```
 -->

```sh
# Xdebug モードを "debug" に設定 (ステップデバッグ用)
wp-env start --xdebug

# Xdebug モードを "off" に設定
wp-env start

# リストしたそれぞれの Xdebug モードを有効
wp-env start --xdebug=profile,trace,debug
```
<!-- 
When you're running `wp-env` using `npm run`, like when working in the Gutenberg repo or when `wp-env` is a local project dependency, don't forget to add an extra double dash before the `--xdebug` command:
 -->
`npm run` を使って `wp-env` を実行する場合、たとえば、Gutenberg リポジトリで作業する場合や、`wp-env` にプロジェクトのローカルな依存関係がある場合、`--xdebug` コマンドの前に、忘れずに二重ダッシュを追加してください。

```sh
npm run wp-env start -- --xdebug
# Alternatively, use npx:
npx wp-env start --xdebug
```
<!-- 
If you forget about that, the `--xdebug` parameter will be passed to npm instead of the `wp-env start` command and it will be ignored.
 -->
これを忘れると、`wp-env start` コマンドの代わりに `--xdebug` パラメータが npm に渡され、無視されます。


<!--
You can see a reference on each of the Xdebug modes and what they do in the [Xdebug documentation](https://xdebug.org/docs/all_settings#mode).
 -->
Xdebgu のモードと定義については [Xdebug ドキュメント](https://xdebug.org/docs/all_settings#mode) を参照してください。

<!--
_Since we are only installing Xdebug 3, Xdebug is only supported for PHP versions greater than or equal to 7.2 (the default). Xdebug won't be installed if `phpVersion` is set to a legacy version._
 -->
_Xdebug 3 のみをインストールするため、Xdebug としては PHP 7.2 (デフォルト) 以上が必要です。`phpVersion` に古いバージョンに設定されている場合、Xdebug はインストールできません。_

<!--
### Xdebug IDE support
 -->
### Xdebug の IDE サポート

<!--
To connect to Xdebug from your IDE, you can use these IDE settings. This bit of JSON was tested for VS Code's `launch.json` format (which you can [learn more about here](https://code.visualstudio.com/docs/editor/debugging#_launchjson-attributes)) along with [this PHP Debug extension](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug). Its path mapping also points to a specific plugin -- you should update this to point to the source you are working with inside of the wp-env instance.

You should only have to translate `port` and `pathMappings` to the format used by your own IDE.
 -->
IDE から Xdebug に接続するには以下の IDE 設定を使用できます。この JSON は VS Code の `launch.json` 形式 ([詳細についてはこちら](https://code.visualstudio.com/docs/editor/debugging#_launchjson-attributes)) と [PHP デバッグエクステンション](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug) でテストされました。なお、パスマッピングは特定のプラグインを指しています。これを wp-env インスタンス内の作業中のソースコードを指すよう更新してください。

`port` と `pathMappings` のみを IDE で使用する形式に変換する必要があります。

```json
{
	"name": "Listen for XDebug",
	"type": "php",
	"request": "launch",
	"port": 9003,
	"pathMappings": {
		"/var/www/html/wp-content/plugins/gutenberg": "${workspaceFolder}/"
	}
}
```
<!-- 
After you create a `.vscode/launch.json` file in your repository, you probably want to add it to your [global gitignore file](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files#configuring-ignored-files-for-all-repositories-on-your-computer) so that it stays private for you and is not committed to the repository.
 -->
リポジトリに `.vscode/launch.json` ファイルを作成したら、それを [グローバル gitignore ファイル](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files#configuring-ignored-files-for-all-repositories-on-your-computer) に追加すると良いでしょう。ファイルはプライベートになり、リポジトリにはコミットされません。

<!--
Once your IDEs Xdebug settings have been enabled, you should just have to launch the debugger, put a breakpoint on any line of PHP code, and then refresh your browser!
 -->
IDE Xdebug 設定が有効になればあとはデバッガを起動し、PHP コードの任意の行にブレークポイントを置き、ブラウザをリフレッシュするだけです。

<!--
Here is a summary:

1. Start wp-env with xdebug enabled: `wp-env start --xdebug`
2. Install a suitable Xdebug extension for your IDE if it does not include one already.
3. Configure the IDE debugger to use port `9003` and the correct source files in wp-env.
4. Launch the debugger and put a breakpoint on any line of PHP code.
5. Refresh the URL wp-env is running at and the breakpoint should trigger.
 -->
まとめ:

1. Xdebug を有効化して wp-env を起動する: `wp-env start --xdebug`
2. もしまだなら IDE 用に適切な Xdebug エクステンションをインストールする。
3. IDE デバッガーがポート `9003` と wp-env 内の正しいソースファイルを使用するよう構成する。
4. デバッガーを起動し、PHP コードの任意の行にブレークポイントを置く。
5. wp-env の稼働する URL をリフレッシュすれば、ブレークポイントに達する。

<!--
## Command reference

`wp-env` creates generated files in the `wp-env` home directory. By default, this is `~/.wp-env`. The exception is Linux, where files are placed at `~/wp-env` [for compatibility with Snap Packages](https://github.com/WordPress/gutenberg/issues/20180#issuecomment-587046325). The `wp-env` home directory contains a subdirectory for each project named `/$md5_of_project_path`. To change the `wp-env` home directory, set the `WP_ENV_HOME` environment variable. For example, running `WP_ENV_HOME="something" wp-env start` will download the project files to the directory `./something/$md5_of_project_path` (relative to the current directory).
 -->
## コマンドリファレンス

`wp-env` は生成したファイルを `wp-env` ホームディレクトリ、デフォルトでは `~/.wp-env` に置きます。例外は Linux で、[Snap パッケージの互換性のため](https://github.com/WordPress/gutenberg/issues/20180#issuecomment-587046325)、ファイルは `~/wp-env` に置かれます。`wp-env` ホームディレクトリには各プロジェクトのサブディレクトリが `/$md5_of_project_path` として作成されます。`wp-env` ホームディレクトリを変更するには、`WP_ENV_HOME` 環境変数を設定してください。例えば `WP_ENV_HOME="something" wp-env start` と実行すると、プロジェクトファイルは現行ディレクトリからの相対パスでディレクトリ `./something/$md5_of_project_path` にダウンロードされます。

<!--
### `wp-env start`

The start command installs and initializes the WordPress environment, which includes downloading any specified remote sources. By default, `wp-env` will not update or re-configure the environment except when the configuration file changes. Tell `wp-env` to update sources and apply the configuration options again with `wp-env start --update`. This will not overwrite any existing content.
 -->
### wp-env start

start コマンドは WordPress 環境をインストールし、初期化します。これには指定された任意のリモートのソースのダウンロードも含まれます。`wp-env` はデフォルトでは構成ファイルが変更されない限り、環境を更新も再構成もしません。ソースを更新し、構成オプションを再度適用するには `wp-env start --update` を使用してください。既存のコンテンツは上書きされません。

<!--
```sh
wp-env start

Starts WordPress for development on port 8888 (​http://localhost:8888​)
(override with WP_ENV_PORT) and tests on port 8889 (​http://localhost:8889​)
(override with WP_ENV_TESTS_PORT). The current working directory must be a
WordPress installation, a plugin, a theme, or contain a .wp-env.json file. After
first install, use the '--update' flag to download updates to mapped sources and
to re-apply WordPress configuration options.

Options:
  --debug    Enable debug output.                     [boolean] [default: false]
  --update   Download source updates and apply WordPress configuration.
                                                      [boolean] [default: false]
  --xdebug   Enables Xdebug. If not passed, Xdebug is turned off. If no modes
             are set, uses "debug". You may set multiple Xdebug modes by passing
             them in a comma-separated list: `--xdebug=develop,coverage`. See
             https://xdebug.org/docs/all_settings#mode for information about
             Xdebug modes.                                              [string]
  --scripts  Execute any configured lifecycle scripts. [boolean] [default: true]
```
 -->
```sh
wp-env start

WordPress 開発環境をポート 8888 (​http://localhost:8888​) で (ポートは WP_ENV_PORT で指定可)、
テスト環境を 8889 (​http://localhost:8889​) で (ポートは WP_ENV_TESTS_PORT で指定可) 開始します。
コマンドは WordPress インストールディレクトリ、プラグインやテーマのディレクトリ、
または .wp-env.json ファイルのあるディレクトリで実行する必要があります。最初のインストール後、
'--update' フラグを使用して更新をマップされたソースにダウンロードし、WordPress 構成オプションに
再適用します。

オプション:
  --debug    デバッグ出力の有効化                         [boolean] [デフォルト: false]
  --update   ソースの更新をダウンロードし、WordPress 構成に適用する
                                                      [boolean] [デフォルト: false]
  --xdebug   Xdebug を有効化する。指定しなければ Xdebug はオフ。モードがセットされていなければ、
             "debug" を使用する。複数の Xdebug モードを設定でき、コンマで区切る。
			 `--xdebug=develop,coverage`. Xdebug モードの情報については、
             https://xdebug.org/docs/all_settings#mode 参照        [string]
  --scripts  構成済みのライフサイクルスクリプトを実行        [boolean] [デフォルト: true]
```

<!--
### `wp-env stop`

```sh
wp-env stop

Stops running WordPress for development and tests and frees the ports.

Options:
  --debug            Enable debug output.             [boolean] [default: false]
```
 -->
### wp-env stop

```sh
wp-env stop

実行中の WordPress 開発環境、テスト環境を停止し、ポートを解放します。

オプション:
  --debug    デバッグ出力の有効化                         [boolean] [デフォルト: false]
```

<!--
### `wp-env clean [environment]`

```sh
wp-env clean [environment]

Cleans the WordPress databases.

Positionals:
  environment  Which environments' databases to clean.
            [string] [choices: "all", "development", "tests"] [default: "tests"]

Options:
  --debug    Enable debug output.                     [boolean] [default: false]
  --scripts  Execute any configured lifecycle scripts. [boolean] [default: true]
```
 -->
### wp-env clean

```sh
wp-env clean [environment]

WordPress データベースをクリアします。

引数:
  environment  どの環境のデータベースをクリアするか。
            [string] [選択: "all", "development", "tests"] [デフォルト: "tests"]

オプション:
  --debug    デバッグ出力の有効化                         [boolean] [デフォルト: false]
  --scripts  構成済みのライフサイクルスクリプトを実行        [boolean] [デフォルト: true]
```

<!--
### `wp-env run [container] [command]`
 -->
<!-- 
### wp-env run [container] [command]
 -->
<!-- 
The run command can be used to open shell sessions or invoke WP-CLI commands.
 -->
<!-- 
run コマンドは、シェルセッションを開いたり、WP-CLI コマンドの呼び出しに使用できます。
 -->

<!-- 
<div class="callout callout-alert">
To run a WP-CLI command that includes optional arguments, enclose the WP-CLI command in quotation marks; otherwise, the optional arguments are ignored. This is because flags are normally passed to `wp-env` itself, meaning that the flags are not considered part of the argument that specifies the WP-CLI command. With quotation marks, `wp-env` considers everything inside quotation marks the WP-CLI command argument.
 -->
<!--  
オプションの引数を含む WP-CLI コマンドを実行するには、WP-CLI コマンドを引用符 (`'`) で囲みます。囲まない場合、オプションの引数は無視されます。フラグは通常 WP-CLI コマンドを指定する引数の一部とはみなされず、`wp-env` 自身に渡されるためです。引用符を使用すると、 `wp-env` は引用符の中のすべてを WP-CLI コマンドの引数と見なします。
 -->
<!-- 
In some cases, `wp-env` may consume options that you are attempting to pass to
the container. This happens with options that `wp-env` has already declared,
such as `--debug`, `--help`, and `--version`. When this happens, you should fall
back to using quotation marks; `wp-env` considers everything inside the
 -->
<!--
<div class="callout callout-alert">In some cases, <code>wp-env</code> may consume options that you are attempting to pass to
the container. This happens with options that <code>wp-env</code> has already declared,
such as <code>--env-cwd</code>, <code>--debug</code>, <code>--help</code>, and <code>--version</code>. When this happens, you should fall
back to using quotation marks; <code>wp-env</code> considers everything inside the
quotation marks to be command argument.
 -->
<!-- 
いくつかのケースでは、コンテナに渡したいオプションを `wp-env` が奪ってしまう場合があります。これは、`wp-env` が同じオプションを宣言する場合、例えば、`--env-cwd`、`--debug`、`--help`、`--version` などで発生します。これを防ぐには引用符 (`"`) を使用してください。`wp-env` は、引用符内のすべてをコマンド引数とみなします。
 -->
<!-- 
For example, to list cron schedules with optional arguments that specify the fields returned and the format of the output:
 -->
<!--  
たとえば、cron のスケジュールをリストし、オプションに返すフィールドと出力フォーマットを指定するには、
 -->

<!-- 
For example, to ask <code>WP-CLI</code> for its help text:
 -->
<!-- 
たとえば、`WP-CLI` のヘルプメッセージを表示するには、
 -->
<!-- 
<pre>sh
<code class="language-sh">wp-env run cli "wp --help"</code></pre>
 -->
<!-- 
```sh
wp-env run cli "wp --help"
```
 -->
<!-- 
Without the quotation marks, WP-CLI lists the schedule in its default format, ignoring the `fields` and `format` arguments.
 -->
<!-- 
引用符がない場合、WP-CLI は `fields` と `format` の引数を無視して、デフォルトのフォーマットでスケジュールをリストします。
 -->

<!-- 
Without the quotation marks, <code>wp-env</code> will print its own help text instead of
passing it to the container. If you experience any problems where the command
is not being passed correctly, fall back to using quotation marks.
 -->
<!-- 
引用符がない場合、`wp-env` は、コンテナにオプションを渡す代わりに、自身のヘルプメッセージを表示します。コマンドが正しく渡らない問題が発生した場合は、引用符を使用してください。
 --> 

<!-- 
### `wp-env run <container> [command...]`
 -->
### wp-env run <container> [command...]

<!-- 
The run command can be used to open shell sessions, invoke WP-CLI commands, or run any arbitrary commands inside of a container.
 -->
run コマンドを使用して、シェルセッションを開いたり、WP-CLI コマンドを呼び出したり、コンテナ内で任意の代替コマンドを実行できます。

<!-- 
<div class="callout callout-alert">
<p>
In some cases <code class="language-sh">wp-env run</code> may conflict with options that you are passing to the container.
When this happens, <code class="language-sh">wp-env</code> will treat the option as its own and take action accordingly.
For example, if you try <code class="language-sh">wp-env run cli php --help</code>, you will receive the <code class="language-sh">wp-env</code> help text.
</p>
<p>
You can get around this by passing any conflicting options after a double dash. <code class="language-sh">wp-env</code> will not process anything after
the double dash and will simply pass it on to the container. To get the PHP help text you would use <code class="language-sh">wp-env run cli php -- --help</code>.
</p>
</div>
 -->
> いくつかのケースでは、`wp-env run` は、コンテナに渡すオプションと競合します。
> このとき `wp-env` は自身のオプションとして扱い、応じた処理を行います。
> 例えば、`wp-env run cli php --help` を実行すると、 `wp-env run` のヘルプが表示されます。
> 
> こレを回避するには、競合するオプションをダッシュ2つ (`--`) の後に渡します。`wp-env` は、ダッシュ2つ以降を処理せず、単純にコンテナに渡します。例えば、PHP のヘルプを表示するには、`wp-env run cli php -- --help` を使用します。

<!-- 
Note that quotation marks are not required for a WP-CLI command that excludes optional arguments, although it does not hurt to include them. For example, the following command syntaxes return identical results: `wp-env run cli "wp cron schedule list"` or `wp-env run cli wp cron schedule list`.
 -->
<!-- 
注意: オプションの引数を除外する WP-CLI コマンドでは引用符は必要ありませんが、引用符を含めても問題ありません。たとえば、次のコマンド構文`wp-env run cli "wp cron schedule list"` と `wp-env run cli wp cron schedule list` は、同一の結果を返します。
 -->
<!-- 
For more information about all the available commands, see [WP-CLI Commands](https://developer.wordpress.org/cli/commands/).
 -->
<!-- 
利用可能なコマンドの詳細については、[WP-CLI コマンド](https://developer.wordpress.org/cli/commands/)を参照してください。
 -->

<!--
```sh
wp-env run <container> [command...]

Runs an arbitrary command in one of the underlying Docker containers. A double
dash can be used to pass arguments to the container without parsing them. This
is necessary if you are using an option that is defined below. You can use
`bash` to open a shell session and both `composer` and `phpunit` are available
in all WordPress and CLI containers. WP-CLI is also available in the CLI
containers.

Positionals:
  container  The Docker service to run the command on.
              [string] [required] [choices: "mysql", "tests-mysql", "wordpress",
                   "tests-wordpress", "cli", "tests-cli", "composer", "phpunit"]
  command    The command to run.                                      [required]

Options:
  --debug    Enable debug output.                     [boolean] [default: false]
  --env-cwd  The command's working directory inside of the container. Paths
             without a leading slash are relative to the WordPress root.
                                                         [string] [default: "."]
```

For example:
 -->
```sh
wp-env run <container> [command...]

動作している Docker コンテナ内で任意のコマンドを実行します。ダッシュ2つ (`--`) を使用すると、
引数をパースせずにコンテナに渡します。これは、以下で定義されるオプションを使用する際に必要です。
シェルセッションを開くには `bash` を使用します。`composer` と `phpunit` の両方は、
すべての WordPress と CLI コンテナで利用可能です。WP-CLI も CLI コンテナで利用可能です。

引数:
  container  コマンドを実行する Docker サービス                     [string] [必須]
             [選択: "mysql", "tests-mysql", "wordpress",
                   "tests-wordpress", "cli", "tests-cli", "composer", "phpunit"]
  command    実行するコマンド                                      [必須]

オプション:
  --debug    デバッグ出力の有効化                     [boolean] [デフォルト: false]
  --env-cwd  コマンドのコンテナ内でのワークディレクトリ。先頭にスラッシュのないパスは、
             WordPress のルートからの相対パス         [string] [デフォルト: "."]
```

例:

<!--
#### Displaying the users on the development instance:
 -->
#### development インスタンス上のユーザーの表示

```sh
wp-env run cli wp user list
⠏ Running `wp user list` in 'cli'.

ID      user_login      display_name    user_email      user_registered roles
1       admin   admin   wordpress@example.com   2020-03-05 10:45:14     administrator

✔ Ran `wp user list` in 'cli'. (in 2s 374ms)
```
<!--
#### Creating a post on the tests instance:
 -->
#### tests インスタンスで投稿を作成

```sh
wp-env run tests-cli "wp post create --post_type=page --post_title='Ready'"

ℹ Starting 'wp post create --post_type=page --post_title='Ready'' on the tests-cli container.

Success: Created post 5.
✔ Ran `wp post create --post_type=page --post_title='Ready'` in 'tests-cli'. (in 3s 293ms)
```
<!--
#### Opening the WordPress shell on the tests instance and running PHP commands:
 -->
#### tests インスタンスで WordPress シェルを開き、PHP コマンドを実行

```sh
wp-env run tests-cli wp shell
ℹ Starting 'wp shell' on the tests-cli container. Exit the WordPress shell with ctrl-c.

Starting 31911d623e75f345e9ed328b9f48cff6_mysql_1 ... done
Starting 31911d623e75f345e9ed328b9f48cff6_tests-wordpress_1 ... done
wp> echo( 'hello world!' );
hello world!
wp> ^C
✔ Ran `wp shell` in 'tests-cli'. (in 16s 400ms)
```
<!--
#### Installing a plugin or theme on the development instance
 -->
#### development インスタンスでのプラグインやテーマのインストール

```sh
wp-env run cli wp plugin install custom-post-type-ui

Creating 500cd328b649d63e882d5c4695871d04_cli_run ... done
Installing Custom Post Type UI (1.9.2)
Downloading installation package from https://downloads.wordpress.org/plugin/custom-post-type-ui.zip...
The authenticity of custom-post-type-ui.zip could not be verified as no signature was found.
Unpacking the package...
Installing the plugin...
Plugin installed successfully.
Success: Installed 1 of 1 plugins.
✔ Ran `plugin install custom-post-type-ui` in 'cli'. (in 6s 483ms)
```

<!--
**NOTE**: Depending on your host OS, you may experience errors when trying to install plugins or themes (e.g. `Warning: Could not create directory.`). This is typically because the user ID used within the container does not have write access to the mounted directories created by `wp-env`. To resolve this, run the `docker-compose` command directly from the directory created by `wp-env` and add `-u $(id -u)` and `-e HOME=/tmp` the `run` command as options:
 -->
<!-- 
**注意**: ホスト OS によっては、プラグインやテーマをインストールしようとすると、エラーが発生する場合があります (例: `Warning: Could not create directory.`）。これは通常、コンテナ内で使用されているユーザー ID が、`wp-env` で作成、マウントしたディレクトリへの書き込み権限を持っていないことが原因です。この問題を解決するには、`wp-env` で作成したディレクトリから直接 `docker-compose` コマンドを使用します。`run`コマンドに、`-u $(id -u)` と `-e HOME=/tmp` オプションを追加してください。
 -->
<!-- 
#### Changing the permalink structure
 -->
#### パーマリンク構造の変更

<!-- 
You might want to do this to enable access to the REST API (`wp-env/wp/v2/`) endpoint in your wp-env environment. The endpoint is not available with plain permalinks.
 -->
wp-env 環境で REST API (`wp-env/wp/v2/`) のエンドポイントにアクセスするには、この操作を行います。プレーンなパーマリンクでは、エンドポイントは利用できません。

<!-- 
**Examples**
 -->
**例**
<!-- 
To set the permalink to just the post name:
 -->
パーマリンクを投稿名だけに設定する

```
wp-env run cli "wp rewrite structure /%postname%/"
```
<!-- 
To set the permalink to the year, month, and post name:
 -->
パーマリンクを年、月、投稿名に設定する

```
wp-env run cli "wp rewrite structure /%year%/%monthnum%/%postname%/"
```

<!--
### `wp-env destroy`

```sh
wp-env destroy

Destroy the WordPress environment. Deletes docker containers, volumes, and
networks associated with the WordPress environment and removes local files.

Options:
  --debug    Enable debug output.                     [boolean] [default: false]
  --scripts  Execute any configured lifecycle scripts. [boolean] [default: true]
```
 -->
### wp-env destroy

```sh
wp-env destroy

WordPress 環境を破壊します。WordPress 環境と関連する Docker コンテナ、ボリューム、
ネットワークを削除し、ローカルファイルを削除します。

オプション:
  --debug    デバッグ出力の有効化                         [boolean] [デフォルト: false]
  --scripts  構成済みのライフサイクルスクリプトを実行        [boolean] [デフォルト: true]

```
<!--
### `wp-env logs [environment]`

```sh
wp-env logs

displays PHP and Docker logs for given WordPress environment.

Positionals:
  environment  Which environment to display the logs from.
      [string] [choices: "development", "tests", "all"] [default: "development"]

Options:
  --debug    Enable debug output.                     [boolean] [default: false]
  --watch    Watch for logs as they happen.            [boolean] [default: true]
```
 -->
### wp-env logs

```sh
wp-env logs [environment]

指定した WordPress 環境の PHP と Docker のログを表示します。

引数:
  environment  どの環境のログを出力するか
      [string] [選択: "development", "tests", "all"] [デフォルト: "development"]

オプション:
  --debug    デバッグ出力の有効化         [boolean] [デフォルト: false]
  --watch    ログをウオッチする          [boolean] [デフォルト: true]
```
<!-- 
### `wp-env install-path`
 -->
### wp-env install-path

<!-- 
Get the path where all of the environment files are stored. This includes the Docker files, WordPress, PHPUnit files, and any sources that were downloaded.

Example:
 -->
すべての環境ファイルが格納されているパスを取得します。これには、Docker ファイル、WordPress、PHPUnit ファイル、ダウンロードしたソースが含まれます。

例:

```sh
$ wp-env install-path

/home/user/.wp-env/63263e6506becb7b8613b02d42280a49
```

<!--
## .wp-env.json

You can customize the WordPress installation, plugins and themes that the development environment will use by specifying a `.wp-env.json` file in the directory that you run `wp-env` from.

`.wp-env.json` supports fields for options applicable to both the tests and development instances.
 -->
## .wp-env.json

WordPress のインストールや開発環境で使用するプラグインやテーマをカスタマイズできます。`.wp-env.json` ファイルに指定し、同じディレクトリーで `wp-env` を実行してください。

`.wp-env.json` はテストと開発の両方のインスタンスに適用可能なオプションとしてフィールドをサポートします。

<!--
| Field          | Type           | Default                                | Description                                                                                                                      |
|----------------|----------------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| `"core"`       | `string\|null` | `null`                                 | The WordPress installation to use. If `null` is specified, `wp-env` will use the latest production release of WordPress.         |
| `"phpVersion"` | `string\|null` | `null`                                 | The PHP version to use. If `null` is specified, `wp-env` will use the default version used with production release of WordPress. |
| `"plugins"`    | `string[]`     | `[]`                                   | A list of plugins to install and activate in the environment.                                                                    |
| `"themes"`     | `string[]`     | `[]`                                   | A list of themes to install in the environment.                                                                                  |
| `"port"`       | `integer`      | `8888` (`8889` for the tests instance) | The primary port number to use for the installation. You'll access the instance through the port: 'http://localhost:8888'.       |
| `"testsPort"`  | `integer`      | `8889`                                 | The port number for the test site. You'll access the instance through the port: 'http://localhost:8889'.                         |
| `"config"`     | `Object`       | See below.                             | Mapping of wp-config.php constants to their desired values.                                                                      |
| `"mappings"`   | `Object`       | `"{}"`                                 | Mapping of WordPress directories to local directories to be mounted in the WordPress instance.                                   |
| `"mysqlPort"`  | `integer`      | `null` (randomly assigned)             | The MySQL port number to expose. The setting is only available in the `env.development` and `env.tests` objects.                 |
 -->
| フィールド      | タイプ         | デフォルト                                   | 説明                                                                                                               |
| ------------- | ------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `"core"`      | `string\|null` | `null`                                     | 使用する WordPress のバージョンまたはビルド。`null` の場合、最新リリース版 |
| `"phpVersion"` | `string\|null` | `null`                                 | 使用する PHP のバージョン。`null` が指定されると `wp-env` は WordPress の製品版リリースで使用されるデフォルトバージョンを使用する。|
| `"plugins"`   | `string[]`    | `[]`                                       | 環境にインストール、有効化するプラグインのリスト                                                             |
| `"themes"`    | `string[]`    | `[]`                                       | 環境にインストールするテーマのリスト                            |
| `"port"`      | `integer`      | `8888` (テストインスタンスでは `8889`)        | インストールに使用するポート番号。インスタンスには 'http://localhost:8888' でアクセスできる |
| `"testsPort"`  | `integer`      | `8889`                                 | テストサイトのポート番号。インスタンスにはこのポート、'http://localhost:8889' でアクセスできる                         |
| `"config"`    | `Object`      | 以下を参照                                    | wp-config.php の定数とその値のマッピング                                                               |
| `"mappings"`  | `Object`       | `"{}"`                                     | WordPress インスタンス内にマウントされるローカルディレクトリと WordPress ディレクトリのマッピング                                      |
| `"mysqlPort"`  | `integer`      | `null` (ランダムに割り当て)             | MySQL ポート番号。設定は `env.development` と `env.tests` オブジェクト内でのみ可能                 |

<!--
_Note: the port number environment variables (`WP_ENV_PORT` and `WP_ENV_TESTS_PORT`) take precedent over the .wp-env.json values._

Several types of strings can be passed into the `core`, `plugins`, `themes`, and `mappings` fields.
 -->
_注意: ポート番号に関する環境変数 (`WP_ENV_PORT` と `WP_ENV_TESTS_PORT`) は .wp-env.json の値に優先します。_

`core`、`plugins`、`themes`、`mappings` フィールドに指定できる文字列のタイプを以下に示します。

<!-- 
| Type              | Format                                       | Example(s)                                                                                                                         |
| ----------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Relative path     | `.<path>\|~<path>`                           | `"./a/directory"`, `"../a/directory"`, `"~/a/directory"`                                                                           |
| Absolute path     | `/<path>\|<letter>:\<path>`                  | `"/a/directory"`, `"C:\\a\\directory"`                                                                                             |
| GitHub repository | `<owner>/<repo>[#<ref>]`                     | `"WordPress/WordPress"`, `"WordPress/gutenberg#trunk"`, if no branch is provided wp-env will fall back to the repos default branch |
| SSH repository    | `ssh://user@host/<owner>/<repo>.git[#<ref>]` | `"ssh://git@github.com/WordPress/WordPress.git"`                                                                                   |
| ZIP File          | `http[s]://<host>/<path>.zip`                | `"https://wordpress.org/wordpress-5.4-beta2.zip"`                                                                                  |
 -->
| タイプ              | 形式                                       | 例(s)                                                                                                                         |
| ----------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 相対パス     | `.<path>\|~<path>`                           | `"./a/directory"`, `"../a/directory"`, `"~/a/directory"`                                                                           |
| 絶対パス     | `/<path>\|<letter>:\<path>`                  | `"/a/directory"`, `"C:\\a\\directory"`                                                                                             |
| GitHub リポジトリ | `<owner>/<repo>[#<ref>]`                     | `"WordPress/WordPress"`, `"WordPress/gutenberg#trunk"`, ブランチが指定されない場合、wp-env はリポジトリのデフォルトブランチを使用する |
| SSH リポジトリ    | `ssh://user@host/<owner>/<repo>.git[#<ref>]` | `"ssh://git@github.com/WordPress/WordPress.git"`                                                                                   |
| ZIP ファイル          | `http[s]://<host>/<path>.zip`                | `"https://wordpress.org/wordpress-5.4-beta2.zip"`                                                                                  |

<!--
Remote sources will be downloaded into a temporary directory located in `~/.wp-env`.
 -->
リモートのソースは `~/.wp-env` 内の一時ディレクトリーにダウンロードされます。

<!--
Additionally, the key `env` is available to override any of the above options on an individual-environment basis. For example, take the following `.wp-env.json` file:
 -->
さらにキー `env` は上の任意のオプションを個々の環境ごとに上書きできます。たとえば次の `.wp-env.json` ファイルでは

```json
{
	"plugins": [ "." ],
	"config": {
		"KEY_1": true,
		"KEY_2": false
	},
	"env": {
		"development": {
			"themes": [ "./one-theme" ]
		},
		"tests": {
			"config": {
				"KEY_1": false
			},
			"port": 3000,
			"mysqlPort": 13306
		}
	}
}
```
<!--
On the development instance, `cwd` will be mapped as a plugin, `one-theme` will be mapped as a theme, KEY_1 will be set to true, and KEY_2 will be set to false. Also note that the default port, 8888, will be used as well.
 -->
development インスタンスでは、`cwd` がプラグインに、`one-theme` がテーマにマップされ、KEY_1 が true に、KEY_2 が false に設定されます。デフォルトのポートは引き続き 8888 が使用されます。



<!--
On the tests instance, `cwd` is still mapped as a plugin, but no theme is mapped. Additionally, while KEY_2 is still set to false, KEY_1 is overridden and set to false. 3000 overrides the default port as well.

This gives you a lot of power to change the options applicable to each environment.
 -->
tests インスタンスでは、`cwd` がプラグインマップされますがテーマのマップはありません。また KEY_2 は false のままですが、KEY_1 は false で、デフォルトのポートは 3000 で上書きされます。

この強力な機能により環境ごとにオプションを変更できます。

## .wp-env.override.json
<!--
Any fields here will take precedence over .wp-env.json. This file is useful when ignored from version control, to persist local development overrides. Note that options like `plugins` and `themes` are not merged. As a result, if you set `plugins` in your override file, this will override all of the plugins listed in the base-level config. The only keys which are merged are `config` and `mappings`. This means that you can set your own wp-config values without losing any of the default values.
 -->
このファイルのフィールド値は、.wp-env.json の値よりも優先されます。このファイルをバージョンコントロールの対象外とすると、常に希望のローカル環境で上書きできて便利です。注意: `plugins` や `themes` などのオプションはマージされません。結果として .wp-env.override.json ファイル内で `plugins` を設定すると、ベースレベルの構成でリストされたすべてのプラグインを上書きします。マージされるキーは `config` と `mappings` のみです。すなわちデフォルト値を失うこと無く自身の wp-config 値を設定できます。

<!--
## Default wp-config values.
 -->
## デフォルト wp-config 値

<!--
On the development instance, these wp-config values are defined by default:
 -->
development インスタンスでは次の wp-config 値がデフォルトとして定義されます。

```
WP_DEBUG: true,
SCRIPT_DEBUG: true,
WP_PHP_BINARY: 'php',
WP_TESTS_EMAIL: 'admin@example.org',
WP_TESTS_TITLE: 'Test Blog',
WP_TESTS_DOMAIN: 'localhost',
WP_SITEURL: 'http://localhost',
WP_HOME: 'http://localhost',
```
<!--
On the test instance, all of the above are still defined, but `WP_DEBUG` and `SCRIPT_DEBUG` are set to false.

These can be overridden by setting a value within the `config` configuration. Setting it to `null` will prevent the constant being defined entirely.

Additionally, the values referencing a URL include the specified port for the given environment. So if you set `testsPort: 3000, port: 2000`, `WP_HOME` (for example) will be `http://localhost:3000` on the tests instance and `http://localhost:2000` on the development instance.
 -->
tests インスタンスでは同じすべての値が定義されますが、`WP_DEBUG` と `SCRIPT_DEBUG` は false に設定されます。

これらは `config` 設定内に値を設定することで上書きできます。この値を `null` に設定すると、定数を完全に定義できなくなります。

また URL を参照する値には環境で指定されたポート番号が含まれます。たとえば `testsPort: 3000, port: 2000` を設定すると、`WP_HOME` は tests インスタンスでは `http://localhost:3000`、development インスタンスでは `http://localhost:2000` になります。

<!--
## Lifecycle Hooks
 -->
<!-- 
## ライフサイクルフック
 -->
<!-- 
These hooks are executed at certain points during the lifecycle of a command's execution. Keep in mind that these will be executed on both fresh and existing
environments, so, ensure any commands you build won't break on subsequent executions.
 -->
<!--  
これらのフックは、コマンドの実行ライフサイクル中の特定の時点で実行されます。これらのフックは、新規環境でも、既存環境でも実行されることに注意してください。したがってビルドしたコマンドが連続した実行で環境を壊さないようにしてください。
 -->
<!-- 
### After Setup
 -->
<!-- 
Using the `afterSetup` option in `.wp-env.json` files will allow you to configure an arbitrary command to execute after the environment's setup is complete:
 -->
<!-- 
`.wp-env.json` ファイルで `afterSetup` オプションを使用すると、環境のセットアップが完了した後に実行する任意のコマンドを設定できます。
 -->
<!-- 
-   `wp-env start`: Runs when the config changes, WordPress updates, or you pass the `--update` flag.
-   `wp-env clean`: Runs after the selected environments have been cleaned.
 -->
<!-- 
- `wp-env start`: 設定が変更されたとき、WordPress が更新されたとき、`--update` フラグを渡したときに実行されます。
- `wp-env clean`: 選択した環境がクリアされた後に実行されます。
 -->
<!-- 
You can override the `afterSetup` option using the `WP_ENV_AFTER_SETUP` environment variable.
 -->
<!-- 
`afterSetup` オプションは、環境変数 `WP_ENV_AFTER_SETUP` を使用して上書きできます。
 -->

<!-- 
## Lifecycle Scripts
 -->
## ライフサイクルスクリプト

<!-- 
Using the `lifecycleScripts` option in `.wp-env.json` will allow you to set arbitrary commands to be executed at certain points in the lifecycle. This configuration
can also be overridden using `WP_ENV_LIFECYCLE_SCRIPT_{LIFECYCLE_EVENT}` environment variables, with the remainder being the all-caps snake_case name of the option, for
example, `WP_ENV_LIFECYCLE_SCRIPT_AFTER_START`. Keep in mind that these will be executed on both fresh and existing environments, so, ensure any commands you
build won't break on subsequent executions.
 -->
`.wp-env.json` の `lifecycleScripts` オプションを使用すると、ライフサイクルの特定の時点で実行される任意のコマンドを設定できます。この設定は `WP_ENV_LIFECYCLE_SCRIPT_{LIFECYCLE_EVENT}` 環境変数を使用して上書きできます。このとき、残りは例えば `WP_ENV_LIFECYCLE_SCRIPT_AFTER_START` のように、オプション名をすべて大文字の snake_case で指定します。これらは新しい環境でも、既存の環境でも、実行されることに注意してください。ビルドしたコマンドが連続した実行で環境を壊さないようにしてください。

<!-- 
* `afterStart`: Runs after `wp-env start` has finished setting up the environment.
* `afterClean`: Runs after `wp-env clean` has finished cleaning the environment.
* `afterDestroy`: Runs after `wp-env destroy` has destroyed the environment.
 -->
* `afterStart`: `wp-env start` が完了し、環境がセットアップされた後で実行されます。
* `afterClean`: `wp-env clean` が完了し、環境がクリーンアップされた後で実行されます。
* `afterDestroy`: `wp-env destroy` が環境を破壊した後で、実行されます。
<!-- 
## Examples
 -->
## 例

<!-- 
### Latest stable WordPress + current directory as a plugin
 -->
### 最新の安定版 WordPress + 現行ディレクトリーのプラグインをインストールし有効化

<!-- 
This is useful for plugin development.
 -->
この設定はプラグイン開発時に便利です。

```json
{
	"core": null,
	"plugins": [ "." ]
}
```

<!--
### Latest development WordPress + current directory as a plugin

This is useful for plugin development when upstream Core changes need to be tested. This can also be set via the environment variable `WP_ENV_CORE`.
 -->
### 最新の開発版 WordPress + 現行ディレクトリーのプラグインをインストール

この設定はプラグイン開発時に、最新のコアの変更の影響を見る上で便利です。これは、環境変数 `WP_ENV_CORE` からも設定できます。

```json
{
	"core": "WordPress/WordPress#master",
	"plugins": [ "." ]
}
```
<!--
### Local `wordpress-develop` + current directory as a plugin

This is useful for working on plugins and WordPress Core at the same time.
 -->
### ローカルの `wordpress-develop` + 現行ディレクトリーのプラグインをインストール

プラグインと WordPress コアで同時に作業する場合に便利です。

<!-- 
If you are running a _build_ of `wordpress-develop`, point `core` to the `build` directory.
 -->
`wordpress-develop` の _build_ を実行している場合は、`core` を `build` ディレクトリに指定します。

```json
{
	"core": "../wordpress-develop/build",
	"plugins": [ "." ]
}
```
<!-- 
If you are running `wordpress-develop` in a dev mode (e.g. the watch command `dev` or the dev build `build:dev`), then point `core` to the `src` directory.
 -->
もし、`wordpress-develop` を dev モード（例: watch コマンド `dev` や dev ビルド `build:dev`）で実行している場合は、`core` を `src` ディレクトリに指定します。

```json
{
	"core": "../wordpress-develop/src",
	"plugins": [ "." ]
}
```

<!--
### A complete testing environment

This is useful for integration testing: that is, testing how old versions of WordPress and different combinations of plugins and themes impact each other.
 -->
### 完全なテスト環境

インテグレショーンテストで便利です。古いバージョンの WordPress と異なるプラグインの組み合わせで互いに与える影響をテストできます。

```json
{
	"core": "WordPress/WordPress#5.2.0",
	"plugins": [ "WordPress/wp-lazy-loading", "WordPress/classic-editor" ],
	"themes": [ "WordPress/theme-experiments" ]
}
```
<!--
### Add mu-plugins and other mapped directories

You can add mu-plugins via the mapping config. The mapping config also allows you to mount a directory to any location in the wordpress install, so you could even mount a subdirectory. Note here that theme-1, will not be activated.
 -->
### mu-plugins とマッピングディレクトリの追加

マッピング構成を使用して mu-plugins を追加できます。マッピング構成を使用すると、WordPress インストール内の任意の場所にディレクトリをマウントできます。サブディレクトリにマウントすることも可能です。ただし theme-1 は有効化されないことに注意してください。

```json
{
	"plugins": [ "." ],
	"mappings": {
		"wp-content/mu-plugins": "./path/to/local/mu-plugins",
		"wp-content/themes": "./path/to/local/themes",
		"wp-content/themes/specific-theme": "./path/to/local/theme-1"
	}
}
```
<!--
### Avoid activating plugins or themes on the instance

Since all plugins in the `plugins` key are activated by default, you should use the `mappings` key to avoid this behavior. This might be helpful if you have a test plugin that should not be activated all the time.
 -->
### インスタンスのプラグインやテーマを有効化しない

デフォルトでは `plugins` キーのすべてのプラグインは有効化されます。この動きを避けるには `mappings` キーを使用してください。この方法は常には有効化すべきでない、テスト用のプラグインがある場合に便利です。

```json
{
	"plugins": [ "." ],
	"mappings": {
		"wp-content/plugins/my-test-plugin": "./path/to/test/plugin"
	}
}
```

<!--
### Map a plugin only in the tests environment

If you need a plugin active in one environment but not the other, you can use `env.<envName>` to set options specific to one environment. Here, we activate cwd and a test plugin on the tests instance. This plugin is not activated on any other instances.
 -->
### テスト環境にのみプラグインをマップする

1つの環境でのみプラグインを有効化し、他の環境では有効化しない場合、`env.<envName>` を使用して1つの環境でのみオプションを設定できます。ここではテストインスタンスでのみ現行ディレクトリとテストプラグインを有効化しています。他のインスタンスではプラグインは有効化されません。

```json
{
	"plugins": [ "." ],
	"env": {
		"tests": {
			"plugins": [ ".", "path/to/test/plugin" ]
		}
	}
}
```

<!--
### Custom Port Numbers

You can tell `wp-env` to use a custom port number so that your instance does not conflict with other `wp-env` instances.
 -->
### カスタムポート番号

`wp-env` にカスタムポート番号を指定することで、他の `wp-env` インスタンスとの衝突を避けられます。

```json
{
	"plugins": [ "." ],
	"port": 4013,
	"env": {
		"tests": {
			"port": 4012
		}
	}
}
```
<<<<<<< HEAD
<!--
=======

These can also be set via the environment variables `WP_ENV_PORT`, `WP_ENV_TESTS_PORT`, `WP_ENV_MYSQL_PORT` and `WP_ENV_TESTS_MYSQL_PORT`.

>>>>>>> upstream/trunk
### Specific PHP Version
 -->
### PHP バージョンの指定


<!--
You can tell `wp-env` to use a specific PHP version for compatibility and testing. This can also be set via the environment variable `WP_ENV_PHP_VERSION`.
 -->
互換性やテストのため、`wp-env` では特定の PHP バージョンを使用できます。これは環境変数 `WP_ENV_PHP_VERSION` からでも設定できます。

```json
{
	"phpVersion": "7.2",
	"plugins": [ "." ]
}
```
<!-- 
### Node Lifecycle Script
 -->
### Node ライフサイクルスクリプト

<!-- 
This is useful for performing some actions after setting up the environment, such as bootstrapping an E2E test environment.
 -->
環境設定後にいくつかのアクションを実行する際に便利です。例えば E2E テスト環境のブートストラップなど。

```json
{
	"lifecycleScripts": {
		"afterStart": "node tests/e2e/bin/setup-env.js"
	}
}
```
<!-- 
### Advanced PHP settings
 -->
### 高度な PHP 設定

<!-- 
You can set PHP settings by mapping an `.htaccess` file. This maps an `.htaccess` file to the WordPress root (`/var/www/html`) from the directory in which you run `wp-env`.
 -->
PHP の設定は、`.htaccess` ファイルをマッピングすることで可能です。`.htaccess` ファイルは、`wp-env` を実行したディレクトリから、WordPressのルート (`/var/www/html`) にマップされます。

```json
{
	"mappings": {
		".htaccess": ".htaccess"
	}
}
```

<!-- 
Then, your .htaccess file can contain various settings like this:
 -->
.htaccess ファイルには、次のような様々な設定を記入できます。

```
# Note: the default upload value is 1G.
php_value post_max_size 2G
php_value upload_max_filesize 2G
php_value memory_limit 2G
```
<!-- 
This is useful if there are options you'd like to add to `php.ini`, which is difficult to access in this environment.
 -->
これは、この環境ではアクセスが難しい `php.ini` に追加したいオプションがある場合に便利です。

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

[原文](https://github.com/WordPress/gutenberg/blob/trunk/packages/env/README.md)
