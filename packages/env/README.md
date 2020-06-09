<!-- 
# `wp-env`

`wp-env` lets you easily set up a local WordPress environment for building and testing plugins and themes. It's simple to install and requires no configuration.

## Quick (tl;dr) instructions

Ensure that Docker is running, then:
 -->
# `@wordpress/env`

`wp-env` を使用してプラグインやテーマのビルド用とテスト用の WordPress ローカル環境を簡単にセットアップできます。シンプルにインストールできて構成する必要もありません。

## クイック (tl;dr) インストラクション

Docker が動作していることを確認し、以下のコマンドを実行してください。

```sh
$ cd /path/to/a/wordpress/plugin
$ npm -g i @wordpress/env
$ wp-env start
```

<!-- 
The local environment will be available at http://localhost:8888.

## Prerequisites

`wp-env` requires Docker to be installed. There are instructions available for installing Docker on [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/), [all other versions of Windows](https://docs.docker.com/toolbox/toolbox_install_windows/), [macOS](https://docs.docker.com/docker-for-mac/install/), and [Linux](https://docs.docker.com/v17.12/install/linux/docker-ce/ubuntu/#install-using-the-convenience-script).

After confirming that Docker is installed, you can install `wp-env` globally like so:
Node.js and NPM are required. The latest LTS version of Node.js is used to develop `wp-env` and is recommended.
 -->
http://localhost:8888 でローカル環境が利用できます。

## 前提ソフトウエア

`wp-env` を使用するにはまず Docker をインストールしてください。インストールの詳細については以下の OS ごとのドキュメントを参照してください。[Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/)、[Windows の他のバージョン](https://docs.docker.com/toolbox/toolbox_install_windows/), [macOS](https://docs.docker.com/docker-for-mac/install/)、[Linux](https://docs.docker.com/v17.12/install/linux/docker-ce/ubuntu/#install-using-the-convenience-script)

Node.js と NPM も必要です。`wp-env` の開発には最新の LTS バージョンの Node.js を使用しているため、これを推奨します。

<!-- 
## Installation

### Installation as a global package

After confirming that the prerequisites are installed, you can install `wp-env` globally like so:
 -->
## インストール

### グローバルパッケージとしてのインストール

前提ソフトウエアをインストールを確認できたら、グローバルに `wp-env` をインストールできます。

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
Then modify your package.json and add an extra command to npm `scripts` (https://docs.npmjs.com/misc/scripts):
 -->
次に package.json を変更し、npm `scripts` (https://docs.npmjs.com/misc/scripts) にコマンドを追加します。

```json
"scripts": {
	"wp-env": "wp-env"
}
```
<!-- 
When installing `wp-env` in this way, all `wp-env` commands detailed in these docs must be prefixed with `npm run`, for example:
 -->
この方法で `wp-env` をインストールした場合、この文書で説明するすべての `wp-env` コマンドの前に `npm run` を追加してください。たとえば

```sh
$ npm run wp-env start
```
<!-- 
instead of:
 -->
と実行します。以後は次のような形式のみ記述します。

```sh
$ wp-env start
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
Web ブラウザーで http://localhost:8888 を開きます。ローカルのプラグインやテーマがインストール、有効化された状態で WordPress が表示されます。デフォルトのログインアカウントはユーザー名 `admin`、パスワード `password` です。

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

以下のトラブルシューティングを順に実行することで多くの一般的な問題を解決できます。

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
リストに3つのエントリーが表示されます。ポート 8888 の `wordpress`、ポート 8889 の `tests-wordpress`、ポート 3306 の `mariadb` です。

### 2. ポート番号の確認

デフォルトでは `wp-env` はポート 8888 を使用し、ローカル環境が http://localhost:8888 で利用可能になります。

別のサーバーと衝突しないように `wp-env` の使用するポートを構成できます。`wp-env` を開始する際に `WP_ENV_PORT` 環境変数を指定してください。

```sh
$ WP_ENV_PORT=3333 wp-env start
```

<!-- 
Running `docker ps` and inspecting the `PORTS` column allows you to determine which port `wp-env` is currently using.

You may also specify the port numbers in your `.wp-env.json` file, but the environment variables take precedent.

### 3. Restart `wp-env`

Restarting `wp-env` will restart the underlying Docker containers which can fix many issues.

To restart `wp-env`:
 -->
`docker ps` を実行し `PORTS` 列を参照すると、現在 `wp-env` がどのポートを使用しているかを調べることができます。

`.wp-env.json` ファイル内にポート番号を指定することもできますが、環境変数が指定されるとそちらが優先されます。

### 3. `wp-env` の再起動

`wp-env` を再起動すると、内部で使用される Docker コンテナが再起動され、多くの問題を解消します。

`wp-env` を再起動するには、

```sh
$ wp-env stop
$ wp-env start
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
### 6. Nuke everything and start again 🔥

When all else fails, you can use `wp-env destroy` to forcibly remove all of the underlying Docker containers and volumes. This will allow you to start from scratch.

To nuke everything:

**⚠️ WARNING: This will permanently delete any posts, pages, media, etc. in the local WordPress installation.**
 -->
### 6. すべてを破壊して、最初からやり直す 🔥

上のすべてがうまくいかない場合、ローカルの Docker コンテナとボリューム、WordPress ディレクトリーを強制的に削除して、ゼロからやり直してみてください。

すべてを破壊するには

**⚠️ 警告: 次のコマンドは、ローカル WordPress 環境内の投稿、ページ、メディア等を完全に削除します。**

```sh
$ wp-env destroy
$ wp-env start
```

<!-- 
## Command reference

`wp-env` creates generated files in the `wp-env` home directory. By default, this is `~/.wp-env`. The exception is Linux, where files are placed at `~/wp-env` [for compatibility with Snap Packages](https://github.com/WordPress/gutenberg/issues/20180#issuecomment-587046325). The `wp-env` home directory contains a subdirectory for each project named `/$md5_of_project_path`. To change the `wp-env` home directory, set the `WP_ENV_HOME` environment variable. For example, running `WP_ENV_HOME="something" wp-env start` will download the project files to the directory `./something/$md5_of_project_path` (relative to the current directory).
 -->
## コマンドリファレンス

`wp-env` は生成したファイルを `wp-env` ホームディレクトリー、デフォルトでは `~/.wp-env` に置きます。例外は Linux で [Snap パッケージの互換性のため](https://github.com/WordPress/gutenberg/issues/20180#issuecomment-587046325)、ファイルは `~/wp-env` に置かれます。`wp-env` ホームディレクトリーには各プロジェクトのサブディレクトリーが `/$md5_of_project_path` として作成されます。`wp-env` ホームディレクトリーを変更するには、`WP_ENV_HOME` 環境変数を設定してください。例えば `WP_ENV_HOME="something" wp-env start` と実行すると、プロジェクトファイルは現行ディレクトリーからの相対パスでディレクトリー `./something/$md5_of_project_path` にダウンロードされます。

<!-- 
### `wp-env start [ref]`

```sh
wp-env start

Starts WordPress for development on port 8888 (​http://localhost:8888​)
(override with WP_ENV_PORT) and tests on port 8889 (​http://localhost:8889​)
(override with WP_ENV_TESTS_PORT). The current working directory must be a
WordPress installation, a plugin, a theme, or contain a .wp-env.json file.


Positionals:
  ref  A `https://github.com/WordPress/WordPress` git repo branch or commit for
       choosing a specific version.                 [string] [default: "master"]
```
 -->
### wp-env start

```sh
wp-env start [ref]

WordPress 開発環境をポート 8888 (​http://localhost:8888​) で (ポートは WP_ENV_PORT で指定可)、
テスト環境を 8889 (​http://localhost:8889​) で (ポートは WP_ENV_TESTS_PORT で指定化) 開始します。
コマンドは WordPress インストールディレクトリー、プラグインやテーマのディレクトリー、
または .wp-env.json ファイルのあるディレクトリーで実行する必要があります。


引数:
  ref  git リポジトリー `https://github.com/WordPress/WordPress` のブランチ、またはコミット
       特定のバージョンを指定できる                 [string] [デフォルト: "master"]
```

<!-- 
### `wp-env stop`

```sh
wp-env stop

Stops running WordPress for development and tests and frees the ports.
```
 -->
### wp-env stop

```sh
wp-env stop

実行中の WordPress 開発環境、テスト環境を停止し、ポートを解放します。
```

<!-- 
### `wp-env clean [environment]`

```sh
wp-env clean [environment]

Cleans the WordPress databases.

Positionals:
  environment  Which environments' databases to clean.
            [string] [choices: "all", "development", "tests"] [default: "tests"]
```
 -->
### wp-env clean

```sh
wp-env clean [environment]

WordPress データベースをクリアします。

引数:
  environment  どの環境のデータベースをクリアするか。
            [string] [選択: "all", "development", "tests"] [デフォルト: "tests"]
```

<!-- 
### `wp-env run [container] [command]`

```sh
wp-env run <container> [command..]

Runs an arbitrary command in one of the underlying Docker containers. For
example, it can be useful for running wp cli commands. You can also use it to
open shell sessions like bash and the WordPress shell in the WordPress instance.
For example, `wp-env run cli bash` will open bash in the development WordPress
instance.

Positionals:
  container  The container to run the command on.            [string] [required]
  command    The command to run.                           [array] [default: []]

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --debug    Enable debug output.                     [boolean] [default: false]
```

For example:
 -->
### wp-env run

```sh
wp-env run <container> [command..]

動作している Docker コンテナの任意のコマンドを実行します。たとえば wp cli コマンドを実行する際に便利です。


引数:
  container  コマンドを実行するコンテナ        [string] [必須]
  command    実行するコマンド                [array] [デフォルト: []]
```

例:
```sh
wp-env run cli wp user list
⠏ Running `wp user list` in 'cli'.

ID      user_login      display_name    user_email      user_registered roles
1       admin   admin   wordpress@example.com   2020-03-05 10:45:14     administrator

✔ Ran `wp user list` in 'cli'. (in 2s 374ms)
```

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
### `wp-env destroy`

```sh
wp-env destroy

Destroy the WordPress environment. Delete docker containers and remove local files.
```
 -->
### wp-env destroy

```sh
wp-env destroy

WordPress 環境を破壊します。Docker コンテナを削除し、ローカルファイルを削除します。
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
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
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
  --help     ヘルプの表示                [boolean]
  --version  バージョン番号の表示         [boolean]
  --debug    デバッグ出力の有効化         [boolean] [デフォルト: false]
  --watch    ログをウオッチする          [boolean] [デフォルト: true]
```

<!--
## .wp-env.json

You can customize the WordPress installation, plugins and themes that the development environment will use by specifying a `.wp-env.json` file in the directory that you run `wp-env` from.

`.wp-env.json` supports five fields:
 -->
## .wp-env.json

WordPress のインストールや開発環境で使用するプラグインやテーマをカスタマイズできます。`.wp-env.json` ファイルに指定し、同じディレクトリーで `wp-env` を実行してください。

`.wp-env.json` には5つのフィールドがあります。

<!-- 
| Field         | Type           | Default                                    | Description                                                                                                               |
| ------------- | -------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `"core"`      | `string\|null` | `null`                                     | The WordPress installation to use. If `null` is specified, `wp-env` will use the latest production release of WordPress.  |
| `"plugins"`   | `string[]`     | `[]`                                       | A list of plugins to install and activate in the environment.                                                             |
| `"themes"`    | `string[]`     | `[]`                                       | A list of themes to install in the environment. The first theme in the list will be activated.                            |
| `"port"`      | `integer`      | `8888`                                     | The primary port number to use for the insallation. You'll access the instance through the port: 'http://localhost:8888'. |
| `"testsPort"` | `integer`      | `8889`                                     | The port number to use for the tests instance.                                                                            |
| `"config"`    | `Object`       | `"{ WP_DEBUG: true, SCRIPT_DEBUG: true }"` | Mapping of wp-config.php constants to their desired values.                                                               |
| `"mappings"`  | `Object`       | `"{}"`                                     | Mapping of WordPress directories to local directories to be mounted in the WordPress instance.                            |
 -->
| フィールド      | タイプ         | デフォルト                                   | 説明                                                                                                               |
| ------------- | ------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `"core"`      | `string|null` | `null`                                     | 使用する WordPress のバージョンまたはビルド。`null` の場合、最新リリース版 |
| `"plugins"`   | `string[]`    | `[]`                                       | 環境にインストール、有効化するプラグインのリスト                                                             |
| `"themes"`    | `string[]`    | `[]`                                       | 環境にインストールするテーマのリスト。最初のテーマが有効化される                            |
| `"port"`      | `integer`      | `8888`                                   | インストールに使用するポート番号。インスタンスには 'http://localhost:8888' でアクセスできる |
| `"testsPort"` | `integer`      | `8889`                                   | テストインスタンスに使用するポート番号                                                                            |
| `"config"`    | `Object`      | `"{ WP_DEBUG: true, SCRIPT_DEBUG: true }"` | wp-config.php の定数とその値                                                               |
| `"mappings"`  | `Object`       | `"{}"`                                     | WordPress インスタンス内にマウントされるローカルディレクトリと WordPress ディレクトリのマッピング                                      |

<!-- 
_Note: the port number environment variables (`WP_ENV_PORT` and `WP_ENV_TESTS_PORT`) take precedent over the .wp-env.json values._

Several types of strings can be passed into the `core`, `plugins`, `themes`, and `mappings` fields.
 -->
_注意: ポート番号に関する環境変数 (`WP_ENV_PORT` と `WP_ENV_TESTS_PORT`) は .wp-env.json の値に優先します。_

`core`、`plugins`、`themes`、`mappings` フィールドに指定できる文字列のタイプを以下に示します。

<!-- 
| Type              | Format                        | Example(s)                                               |
| ----------------- | ----------------------------- | -------------------------------------------------------- |
| Relative path     | `.<path>\|~<path>`            | `"./a/directory"`, `"../a/directory"`, `"~/a/directory"` |
| Absolute path     | `/<path>\|<letter>:\<path>`   | `"/a/directory"`, `"C:\\a\\directory"`                   |
| GitHub repository | `<owner>/<repo>[#<ref>]`      | `"WordPress/WordPress"`, `"WordPress/gutenberg#master"`  |
| ZIP File          | `http[s]://<host>/<path>.zip` | `"https://wordpress.org/wordpress-5.4-beta2.zip"`        |
 -->
| タイプ             | 形式                           | 例                                                       |
| ----------------- | ----------------------------- | -------------------------------------------------------- |
| 相対パス     | `.<path>|~<path>`             | `"./a/directory"`, `"../a/directory"`, `"~/a/directory"` |
| 絶対パス     | `/<path>|<letter>:\<path>`    | `"/a/directory"`, `"C:\\a\\directory"`                   |
| GitHub リポジトリ | `<owner>/<repo>[#<ref>]`      | `"WordPress/WordPress"`, `"WordPress/gutenberg#master"`  |
| ZIP ファイル          | `http[s]://<host>/<path>.zip` | `"https://wordpress.org/wordpress-5.4-beta2.zip"`        |

<!-- 
Remote sources will be downloaded into a temporary directory located in `~/.wp-env`.

## .wp-env.override.json

Any fields here will take precedence over .wp-env.json. This file is useful, when ignored from version control, to persist local development overrides.

### Examples

#### Latest production WordPress + current directory as a plugin

This is useful for plugin development.
 -->
リモートのソースは `~/.wp-env` の一時ディレクトリーにダウンロードされます。

## .wp-env.override.json

このファイルのフィールド値は、.wp-env.json の値を上書きします。このファイルをバージョンコントロールの対象外とすると、常に希望のローカル環境で上書きできて便利です。

### 例

#### 最新のリリース版 WordPress + 現行ディレクトリーのプラグインをインストールし有効化

この設定はプラグイン開発時に便利です。

```json
{
	"core": null,
	"plugins": [ "." ]
}
```

<!-- 
#### Latest development WordPress + current directory as a plugin

This is useful for plugin development when upstream Core changes need to be tested.
 -->
#### 最新の開発版 WordPress + 現行ディレクトリーのプラグインをインストール

この設定はプラグイン開発時に、最新のコアの変更の影響を見る上で便利です。

```json
{
	"core": "WordPress/WordPress#master",
	"plugins": [ "." ]
}
```
<!-- 
#### Local `wordpress-develop` + current directory as a plugin

This is useful for working on plugins and WordPress Core at the same time.
 -->
#### ローカルの `wordpress-develop` + 現行ディレクトリーのプラグインをインストール

プラグインと WordPress コアで同時に作業する場合に便利です。

```json
{
	"core": "../wordpress-develop/build",
	"plugins": [ "." ]
}
```
<!-- 
#### A complete testing environment

This is useful for integration testing: that is, testing how old versions of WordPress and different combinations of plugins and themes impact each other.
 -->
#### 完全なテスト環境

いんてグレショーンテストで便利です。古いバージョンの WordPress と異なるプラグインの組み合わせで互いに与える影響をテストできます。

```json
{
	"core": "WordPress/WordPress#5.2.0",
	"plugins": [ "WordPress/wp-lazy-loading", "WordPress/classic-editor" ],
	"themes": [ "WordPress/theme-experiments" ]
}
```
<!-- 
#### Add mu-plugins and other mapped directories

You can add mu-plugins via the mapping config. The mapping config also allows you to mount a directory to any location in the wordpress install, so you could even mount a subdirectory. Note here that theme-1, will not be activated, despite being the "first" mapped theme.
 -->
#### mu-plugins とマッピングディレクトリの追加

マッピング構成を使用して mu-plugins を追加できます。マッピング構成を使用すると、WordPress インストール内の任意の場所にディレクトリをマウントできます。サブディレクトリにマウントすることも可能です。ただし以下の例で theme-1 は「最初」のマップされたテーマですが、有効化されないことに注意してください。

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
#### Avoid activating plugins or themes on the instance

Since all plugins in the `plugins` key are activated by default, you should use the `mappings` key to avoid this behavior. This might be helpful if you have a test plugin that should not be activated all the time. The same applies for a theme which should not be activated.
 -->
#### インスタンスのプラグインやテーマを有効化しない

デフォルトでは `plugins` キーのすべてのプラグインは有効化されます。この動きを避けるには `mappings` キーを使用してください。この方法は常には有効化すべきでない、テスト用のプラグインがある場合に便利です。同じことは有効化すべきでないテーマにも当てはまります。

```json
{
	"plugins": [ "." ],
	"mappings": {
		"wp-content/plugins/my-test-plugin": "./path/to/test/plugin"
	}
}
```

<!-- 
#### Custom Port Numbers

You can tell `wp-env` to use a custom port number so that your instance does not conflict with other `wp-env` instances.
 -->
#### カスタムポート番号

`wp-env` にカスタムポート番号を指定することで、他の `wp-env` インスタンスとの衝突を避けられます。

```json
{
	"plugins": [ "." ],
	"port": 4013,
	"testsPort": 4012
}
```

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
