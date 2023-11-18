<!-- 
# Get started with wp-env
 -->
# wp-env 入門

<!-- 
The [@wordpress/env](https://www.npmjs.com/package/@wordpress/env) package (`wp-env`) lets you set up a local WordPress environment (site) for building and testing plugins and themes, without any additional configuration.

Before following this guide, install [Node.js development tools](/docs/getting-started/devenv#node-js-development-tools) if you have not already done so.
 -->
[@wordpress/env](https://www.npmjs.com/package/@wordpress/env) パッケージ (`wp-env`) を使用すると、追加の構成なしでプラグインやテーマのビルド用、テスト用のローカル WordPress 環境をセットアップできます。

このガイドに従って実行する前に、[Node.js 開発ツール](https://ja.wordpress.org/team/handbook/block-editor/getting-started/devenv/#node-js-development-tools) をインストールしてください。

<!-- 
![wp-env basics diagram](https://developer.wordpress.org/files/2023/10/wp-env-diagram.png)
 -->
![wp-env 基本ダイアグラム](https://developer.wordpress.org/files/2023/10/wp-env-diagram.png)

<!-- 
## Quick start
 -->
## クイックスタート

<!--  
1. Download, install, and start [Docker Desktop](https://www.docker.com/products/docker-desktop) following the instructions for your operating system.
2. Run `npm -g install @wordpress/env` in the terminal to install `wp-env` globally.
3. In the terminal, navigate to an existing plugin directory, theme directory, or a new working directory.
4. Run `wp-env start` in the terminal to start the local WordPress environment.
5. After the script runs, navigate to <code>http://localhost:8888/wp-admin</code> and log into the WordPress dashboard using username `admin` and password `password`.
 -->
1. オペレーティングシステムごとの説明に従って、[Docker Desktop](https://www.docker.com/products/docker-desktop) をダウンロードし、インストール、起動する。
2. ターミナルで `npm -g install @wordpress/env` を実行し、`wp-env` をグローバルにインストールする。
3. ターミナルで、既存のプラグインディレクトリ、テーマディレクトリ、または新しい作業ディレクトリに移動する。
4. ターミナルで `wp-env start` を実行して、ローカルの WordPress 環境を起動する。
5. スクリプトの実行後、<code>http://localhost:8888/wp-admin</code> にアクセスし、ユーザー名 `admin` とパスワード `password` を使用して WordPress ダッシュボードにログインする。

<!-- 
## Set up Docker Desktop
 -->
## Docker Desktop のセットアップ

<!-- 
The `wp-env` tool uses [Docker](https://www.docker.com/) to create a virtual machine that runs the local WordPress site. The Docker Desktop application is free for small businesses, personal use, education, and non-commercial open-source projects. See their [FAQ](https://docs.docker.com/desktop/faqs/general/#do-i-need-to-pay-to-use-docker-desktop) for more information.
 -->
`wp-env` ツールは [Docker](https://www.docker.com/) を使用して WordPress サイト実行用の仮想マシンを作成します。Docker Desktop アプリケーションは、中小企業、個人利用、教育、非商用のオープンソースプロジェクト向けに無料で提供されています。詳しくは [FAQ](https://docs.docker.com/desktop/faqs/general/#do-i-need-to-pay-to-use-docker-desktop) をご覧ください。

<!-- 
Use the links below to download and install Docker Desktop for your operating system.
 -->
以下のリンクから、使用中のオペレーティングシステム用の Docker Desktop をダウンロードして、インストールしてください。

- [Docker Desktop for Mac](https://docs.docker.com/desktop/install/mac-install/)
- [Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)
- [Docker Desktop for Linux](https://docs.docker.com/desktop/install/linux-install/)

<!-- 
If you are using a version of Ubuntu prior to 20.04.1, see the additional [troubleshooting notes](#ubuntu-docker-setup) below.
 -->
20.04.1より前のバージョンの Ubuntu を使用している場合は、後述する追加のトラブルシューティングノートを参照してください。

<!-- 
After successful installation, start the Docker Desktop application and follow the prompts to get set up. You should generally use the recommended (default) settings, and creating a Docker account is optional.
 -->
インストールに成功したら、Docker Desktop アプリケーションを起動し、プロンプトに従ってセットアップしてください。ほとんど推奨 (デフォルト) 設定を使うべきですが、Dockerアカウントの作成は任意です。

<!-- 
## Install and run `wp-env`
 -->
## wp-env のインストールと実行

<!-- 
The `wp-env` tool is used to create a local WordPress environment with Docker. So, after you have set up Docker Desktop, open the terminal and install the `wp-env` by running the command:
 -->
`wp-env` を使用すると、Docker で WordPress のローカル環境を構築できます。Docker Desktop のセットアップが完了したら、ターミナルを開いて `wp-env`をインストールしてください。以下のコマンドを実行します。

```sh
npm -g install @wordpress/env
```

<!-- 
This will install the `wp-env` globally, allowing the tool to be run from any directory. To confirm it's installed and available, run `wp-env --version`, and the version number should appear. 
 -->
このコマンドは `wp-env` をグローバルにインストールするため、任意のディレクトリからコマンドを実行できます。インストールが完了し、利用できることを確認するには `wp-env --version` を実行し、バージョン番号が表示されることを確認してください。

<!-- 
Next, navigate to an existing plugin directory, theme directory, or a new working directory in the terminal and run:
 -->
次に、ターミナルで既存のプラグインディレクトリ、テーマディレクトリ、または新しい作業ディレクトリに移動し、以下を実行します。

```sh
wp-env start
```
<!-- 
Once the script completes, you can access the local environment at: <code>http://localhost:8888</code>. Log into the WordPress dashboard using username `admin` and password `password`.
 -->
スクリプトの実行が完了したら、ローカル環境に <code>http://localhost:8888</code> でアクセスします。ユーザー名 `admin`、パスワード `password` で WordPress ダッシュボードにログインできます。

<!-- 
<div class="callout callout-tip">
    Some projects, like Gutenberg, include their own specific <code>wp-env</code> configurations, and the documentation might prompt you to run <code>npm run start wp-env</code> instead.
</div>
 -->
> Gutenberg を含むいくつかのプロジェクトには、独自の `wp-env` 設定が含まれています。ドキュメントを参照すると、代わりに `npm run start wp-env` を実行するよう指示しているかもしれません。

<!-- 
For more information on controlling the Docker environment, see the [@wordpress/env package](/packages/env/README.md) readme.
 -->
Docker 環境の制御に関する詳細については、[@wordpress/env パッケージ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) を参照してください。

<!-- 
### Where to run `wp-env`
 -->
### wp-env を実行する場所

<!-- 
The `wp-env` tool can run from practically anywhere. When using the script while developing a single plugin, `wp-env start` can mount and activate the plugin automatically when run from the directory containing the plugin. This also works for themes when run from the directory in which you are developing the theme.
 -->
`wp-env` ツールは実質的にどこからでも実行できます。1つのプラグインを開発する場合、開発中のプラグインのディレクトリから `wp-env start` を実行してください。自動的にプラグインディレクトリがマウントされ、プラグインが有効化されます。同じ方法はテーマでも動作します。開発中のテーマのディレクトリでコマンドを実行してください。

<!-- 
A generic WordPress environment will be created if you run `wp-env start` from a directory that is not a plugin or theme. The script will display the following warning, but ignore if this is your intention.
 -->
プラグインでもテーマでもないディレクトリから `wp-env start` を実行すると、汎用の WordPress 環境が作成されます。スクリプトは以下の警告を表示しますが、意図したものであれば無視してください。

```
!! Warning: could not find a .wp-env.json configuration file and could not determine if 'DIR' is a WordPress installation, a plugin, or a theme.
```
*!! 警告: .wp-env.json 構成ファイルが見つかりません。'DIR' が WordPress インストールか、プラグインか、テーマか判別できません。*

<!-- 
You can also use the `.wp-env.json` configuration file to create an environment that works with multiple plugins and/or themes. See the [@wordpress/env package](/packages/env/README.md#wp-envjson) readme for more configuration details.
 -->
また `.wp-env.json` 構成ファイルを使用すると、複数のプラグインやテーマと動作する環境を作成できます。構成の詳細については [@wordpress/env パッケージ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/#wp-envjson)を参照してください。

<!-- 
### Uninstall or reset `wp-env`
 -->
### wp-env のアンインストールやリセット

<!-- 
Here are a few instructions if you need to start over or want to remove what was installed.
 -->
最初からやり直したい場合や、アンインストールする場合の手順です。

<!-- 
-   If you just want to reset and clean the WordPress database, run `wp-env clean all`
-   To remove the local environment completely for a specific project, run `wp-env destroy`
-   To globally uninstall the `wp-env` tool, run `npm -g uninstall @wordpress/env`
 -->
- WordPress のデータベースをリセットして、クリーンにしたいだけであれば、`wp-env clean all` を実行する。
- 特定のプロジェクトのローカル環境を完全に削除するには、`wp-env destroy` を実行する。
- `wp-env` ツールをグローバルにアンインストールするには、 `npm -g uninstall @wordpress/env` を実行する。

<!-- 
## Troubleshooting
 -->
## トラブルシューティング

<!-- 
### Common errors
 -->
### 一般的なエラー

<!-- 
When using `wp-env`, it's common to get the error: `Error while running docker-compose command`
 -->
`wp-env`を使用すると、エラー `Error while running docker-compose command` (docker-compose コマンドの実行中にエラー) がよく発生します。

<!-- 
-   Check that Docker Desktop is started and running.
-   Check Docker Desktop dashboard for logs, restart, or remove existing virtual machines.
-   Then try rerunning `wp-env start`.
 -->
- Docker Desktop が開始され、実行されていることを確認する。
- Docker Desktop ダッシュボードでログを確認し、再起動するか、既存の仮想マシンを削除する。
- そして `wp-env start` を再実行する。

<!-- 
If you see the error: `Host is already in use by another container`
 -->
エラー `Host is already in use by another container` (ホストはすでに他のコンテナで使用中) が表示される場合は、

<!-- 
-   The container you are attempting to start is already running, or another container is. You can stop an existing container by running `wp-env stop` from the directory that you started it in.
-   If you do not remember the directory where you started `wp-env`, you can stop all containers by running `docker stop $(docker ps -q)`. This will stop all Docker containers, so use with caution.
-   Then try rerunning `wp-env start`.
 -->
- 開始したいコンテナが既に実行されている、または別のコンテナがすでに起動しています。コンテナを開始したディレクトリから `wp-env stop` を実行して、既存の実行中のコンテナを停止する。
- `wp-env` を起動したディレクトリが分からなければ、`docker stop $(docker ps -q)` ですべてのコンテナを停止する。ただし、これはすべての Docker コンテナを停止するため、注意して使用してください。
- そして `wp-env start` を再実行する。

<!-- 
### Ubuntu Docker setup
 -->
### Ubuntu での Docker セットアップ

<!-- 
If you are using a version of Ubuntu prior to 20.04.1, you may encounter errors when setting up a local WordPress environment with `wp-env`. 
 -->
20.04.1より前のバージョンの Ubuntu を使用していると、`wp-env` を使用してローカルの WordPress 環境をセットアップする際に、エラーが発生する可能性があります。

<!-- 
To resolve this, start by following the [installation guide](https://docs.docker.com/install/linux/docker-ce/ubuntu/) from Docker. `docker-compose` is also required, which you may need to install separately. Refer to the [Docker compose documentation](https://docs.docker.com/compose/install/).
 -->
これを解決するには、まず Docker の[インストールガイド](https://docs.docker.com/install/linux/docker-ce/ubuntu/)に従ってください。`docker-compose` も必要なため、別途インストールする必要があるかもしれません。[Docker compose ドキュメント](https://docs.docker.com/compose/install/)を参照してください。

<!-- 
Once Docker and `wp-env` are installed, and assuming `wp-env` is configured globally, try running `wp-env start` in a directory. If you run into this error:
 -->
Docker と `wp-env` をインストールできたら、`wp-env` がグローバルに設定されていると仮定して、ディレクトリで `wp-env start` を実行してみてください。以下のエラーが発生したら

```
ERROR: Couldn't connect to Docker daemon at http+docker://localhost - is it running?

If it's at a non-standard location, specify the URL with the DOCKER_HOST environment variable.
```
*エラー: http+docker://localhost で Docker デーモンに接続できませんでした。実行していますか ?<br />通常と異なる場所にある場合は、DOCKER_HOST 環境変数に URL を指定してください。*
<!-- 
First, make sure Docker is running. You can check by running `ps -ef | grep docker`, which should return something like:
 -->
まず、Docker が起動していることを確認してください。`ps -ef | grep docker` を実行して確認すると、次のように出力されるはずです。

```
/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
```

<!-- 
If Docker is not running, try starting the service by running `sudo systemctl start docker.service`.
 -->
Docker が起動していなければ、`sudo systemctl start docker.service` を実行して、サービスを起動してみてください。

<!-- 
If Docker is running, then it is not listening to how the WordPress environment is trying to communicate. Try adding the following service override file to include listening on `tcp`. See [this Docker documentation](https://docs.docker.com/config/daemon/remote-access/) on how to configure remote access for Docker daemon.
 -->
Docker が起動している場合は、WordPress 環境の通信の試みに対してリッスンしていません。以下のサービスの override ファイルを追加して、`tcp` でリッスンするようにします。Docker デーモンのリモートアクセスを設定する方法については、[この Docker ドキュメント](https://docs.docker.com/config/daemon/remote-access/)を参照してください。

```
# /etc/systemd/system/docker.service.d/override.conf
[Service]
ExecStart=
ExecStart=/usr/bin/dockerd -H fd:// -H tcp://0.0.0.0:2376
```
<!-- 
Restart the service from the command-line:
 -->
コマンドラインからサービスを再起動します。

```
sudo systemctl daemon-reload
sudo systemctl restart docker.service
```

<!-- 
After restarting the services, set the environment variable `DOCKER_HOST` and try starting `wp-env` with:
 -->
サービスを再起動した後、環境変数 `DOCKER_HOST` を設定し、`wp-env` を起動します。

```
export DOCKER_HOST=tcp://127.0.0.1:2376
wp-env start
```
<!-- 
Your environment should now be set up at <code>http://localhost:8888</code>.
 -->
これで環境が <code>http://localhost:8888</code> にセットアップされたはずです。


<!-- 
## Additional resources
 -->
## 追加のリソース

<!-- 
- [@wordpress/env](https://www.npmjs.com/package/@wordpress/env) (Official documentation)
- [Docker Desktop](https://docs.docker.com/desktop) (Official documentation)
- [Quick and easy local WordPress development with wp-env](https://developer.wordpress.org/news/2023/03/quick-and-easy-local-wordpress-development-with-wp-env/) (WordPress Developer Blog)
- [wp-env: Simple Local Environments for WordPress](https://make.wordpress.org/core/2020/03/03/wp-env-simple-local-environments-for-wordpress/) (Make WordPress Core Blog)
- [`wp-env` Basics diagram](https://excalidraw.com/#json=8Tp55B-R6Z6-pNGtmenU6,_DeBR1IBxuHNIKPTVEaseA) (Excalidraw)
 -->
- [@wordpress/env](https://www.npmjs.com/package/@wordpress/env) (公式ドキュメント)
- [Docker Desktop](https://docs.docker.com/desktop) (公式ドキュメント)
- [wp-env を使用した素早く、お手軽なローカル WordPress 開発](https://developer.wordpress.org/news/2023/03/quick-and-easy-local-wordpress-development-with-wp-env/) (WordPress Developer Blog)
- [wp-env: WordPress のシンプルなローカル環境](https://make.wordpress.org/core/2020/03/03/wp-env-simple-local-environments-for-wordpress/) (Make WordPress Core Blog)
- [`wp-env` 基本ダイアグラム](https://excalidraw.com/#json=8Tp55B-R6Z6-pNGtmenU6,_DeBR1IBxuHNIKPTVEaseA) (Excalidraw)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/devenv/get-started-with-wp-env.md)

