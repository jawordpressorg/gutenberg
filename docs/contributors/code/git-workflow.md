<!--
# Git Workflow
-->
# Git ワークフロー

<!--
This documentation is intended to help you get started using git with Gutenberg. Git is a powerful source code management tool; to learn git deeply, check out the [Pro Git book](https://git-scm.com/book/en/v2) available free online under CC BY-NC-SA 3.0 license.
-->
このドキュメントは Gutenberg で git を使うためのガイドです。git は強力なソースコード管理ツールです。git を深く学ぶには、[Pro Git book (日本語版)](https://git-scm.com/book/ja/v2) を参照してください。CC BY-NC-SA 3.0 ライセンスの下、オンラインで無料で入手できます。

<!--
If you are unfamiliar with using git, it is worthwhile to explore and play with it. Try out the [git tutorial](https://git-scm.com/docs/gittutorial) as well as the [git user manual](https://git-scm.com/docs/user-manual) for help getting started.
-->
もし git の使用に慣れていなければ、しばらく遊んでみると良いでしょう。[git tutorial](https://git-scm.com/docs/gittutorial) や [git user manual](https://git-scm.com/docs/user-manual) などを参考にしてください。

<!--
The Gutenberg project follows a standard pull request process for contributions. See GitHub's documentation for [additional details about pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests).
-->
Gutenbergプロジェクトでは、コントリビューションに標準的なプルリクエストプロセスを採用しています。プルリクエストに関する詳細については、[GitHubのドキュメント](https://docs.github.com/ja/github/collaborating-with-pull-requests) を参照してください。

<!--
## Overview
-->
## 概要

<!--
An overview of the process for contributors is:
-->
コントリビューションプロセスの概要は次のとおりです。

<!--
-   Fork the Gutenberg repository.
-   Clone the forked repository.
-   Create a new branch.
-   Make code changes.
-   Confirm tests pass.
-   Commit the code changes within the newly created branch.
-   Push the branch to the forked repository.
-   Submit a pull request to the Gutenberg repository.
-->
- Gutenberg リポジトリをフォークします。
- フォークしたリポジトリをクローンします。
- 新しいブランチを作成します。
- コードを変更します。
- テストにパスすることを確認します。
- 新しく作成したブランチでコードの変更をコミットします。
- ブランチをフォークしたリポジトリにプッシュします。
- Gutenberg リポジトリへプルリクエストを送信します。

<!--
See the [repository management document](/docs/contributors/repository-management.md) for additional information on how the Gutenberg project uses GitHub.
-->
Gutenberg プロジェクトにおける GitHub の使用に関する追加情報は、ドキュメント「[リポジトリ管理](https://ja.wordpress.org/team/handbook/block-editor/contributors/repository-management)」を参照してください。

<!--
## Git Workflow Walkthrough
-->
## Git ワークフローの概要

<!--
The workflow for code and documentation is the same, since both are managed in GitHub. You can watch a [video walk-through of contributing documentation](https://wordpress.tv/2020/09/02/marcus-kazmierczak-contribute-developer-documentation-to-gutenberg/) and the accompanying [slides for contributing to Gutenberg](https://mkaz.blog/wordpress/contribute-documentation-to-gutenberg/).
-->
コードもドキュメントもどちらも GitHub で管理されているため、ワークフローも共通です。[ドキュメントのコントリビューションに関するビデオチュートリアル](https://wordpress.tv/2020/09/02/marcus-kazmierczak-contribute-developer-documentation-to-gutenberg/)や、付属のスライド「[Gutenbergへのコントリビューション](https://mkaz.blog/wordpress/contribute-documentation-to-gutenberg/)」を参照してください。

<!--
Here is a visual overview of the Git workflow:
-->
Git ワークフローのビジュアルな概要を示します。

<!--
![Visual Overview of Git Workflow](https://developer.wordpress.org/files/2020/09/git-workflow.png)
-->
![Git ワークフローのビジュアルな概要](https://developer.wordpress.org/files/2020/09/git-workflow.png)

<!--
**Step 1**: Go to the Gutenberg repository on GitHub and click Fork. This creates a copy of the main Gutenberg repository to your account.
-->
**手順1**: GitHub 上の Gutenberg リポジトリにアクセスし、「Fork」をクリックします。あなたのアカウントに Gutenberg のメインリポジトリのコピーが作成されます。
<!--
![Screenshot showing fork button on GitHub](https://developer.wordpress.org/files/2020/09/gutenberg-fork.png)
-->
![GitHub の Fork ボタン](https://developer.wordpress.org/files/2020/09/gutenberg-fork.png)

<!--
**Step 2**: Clone your forked repository locally. It is located at: `https://github.com/YOUR-USER-NAME/gutenberg`. Cloning copies all the files to your computer. Open a terminal and run:
-->
**手順2**: フォークしたリポジトリをローカルにクローンします。リポジトリは `https://github.com/YOUR-USER-NAME/gutenberg` です。クローンはコンピュータにすべてのファイルをコピーします。ターミナルを開いて、次のコマンドを実行します。

```bash
git clone https://github.com/YOUR-USER-NAME/gutenberg
```

<!--
This will create a directory called `gutenberg` with all the files for the project. It might take a couple of minutes because it is downloading the entire history of the Gutenberg project.
-->
ディレクトリ `gutenberg` が作成され、プロジェクトのすべてのファイルがコピーされます。Gutenberg プロジェクトの全履歴をダウンロードするため、数分かかるかもしれません。

<!--
**Step 3**: Create a branch for your change (see below for branch naming). For this example, the branch name is the complete string: `update/my-branch`
-->
**手順3**: 変更に応じたブランチを作成します (ブランチの命名については以下を参照)。この例では、ブランチ名は完全な文字列 `update/my-branch` です。

```bash
git switch -c update/my-branch
```

<!--
**Step 4**: Make the code changes. Build, confirm, and test your change thoroughly. See [coding guidelines](/docs/contributors/code/coding-guidelines.md) and [testing overview](/docs/contributors/code/testing-overview.md) for guidance.
-->
**手順4**: コードを変更し、変更したコードをビルド、確認、テストします。ガイドとして、[コーディング規約](https://ja.wordpress.org/team/handbook/block-editor/contributors/code/coding-guidelines.md) と [テストの概要](/docs/contributors/code/testing-overview) を参照してください。

<!--
**Step 5**: Commit your change with a [good commit message](https://make.wordpress.org/core/handbook/best-practices/commit-messages/). This will commit your change to your local copy of the repository.
-->
**手順5**: 変更を[適切なコミットメッセージ](https://make.wordpress.org/core/handbook/best-practices/commit-messages/)と共にコミットします。変更がリポジトリのローカルコピーにコミットされます。

```bash
git commit -m "Your Good Commit Message" path/to/FILE
```

<!--
**Step 6**: Push your change up to GitHub. The change will be pushed to your fork of the repository on the GitHub
-->
**手順6**: 変更を GitHub にプッシュします。変更は、GitHub 上のレポジトリのフォークにプッシュされます。

```bash
git push -u origin update/my-branch
```

<!--
**Step 7**: Go to your forked repository on GitHub -- it will automatically detect the change and give you a link to create a pull request.
-->
**手順7**: GitHub のフォークしたリポジトリにアクセスすると、変更が自動的に検出され、プルリクエストを作成するリンクが表示されます。

<!--
![Screenshot showing pull request link](https://developer.wordpress.org/files/2020/09/pull-request-create.png)
-->
![プルリクエストのリンク](https://developer.wordpress.org/files/2020/09/pull-request-create.png)

<!--
**Step 8**: Create the pull request. This will create the request on the WordPress Gutenberg repository to integrate the change from your forked repository.
-->
**手順8**: プルリクエストを作成します。フォークしたリポジトリからの変更を統合するために、WordPress Gutenberg リポジトリにリクエストを作成します。

<!--
**Step 9**: Keep up with new activity on the pull request. If any additional changes or updates are requested, then make the changes locally and push them up, following Steps 4-6.
-->
**手順9**: プルリクエストに対する新しいアクティビティを確認します。追加の変更や更新が要求された場合は、手順4～6に従って、ローカルで変更を行い、プッシュしてください。

<!--
Do not make a new pull request for updates; by pushing your change to your repository it will update the same PR. In this sense, the PR is a pointer on the WordPress Gutenberg repository to your copy. So when you update your copy, the PR is also updated.
-->
更新に新しいプルリクエストを作成しないでください。変更をリポジトリにプッシュすれば、同じプルリクエストが更新されます。この意味で、プルリクエストは、WordPress Gutenberg リポジトリ上のコピーへのポインタです。コピーを更新すれば、プルリクエストも更新されます。

<!--
That’s it! Once approved and merged, your change will be incorporated into the main repository. 🎉
-->
これで完了です。承認されてマージされると、変更がメインのリポジトリに組み込まれます。 🎉

<!--
## Branch Naming
-->
## ブランチの名前付け

<!--
You should name your branches using a prefixes and short description, like this: `[type]/[change]`.
-->
ブランチの名前は、接頭辞と短い説明を使用して `[タイプ]/[変更]` のように命名してください。

<!--
Suggested prefixes:
-->
推奨される接頭辞

<!--
-   `add/` = add a new feature
-   `try/` = experimental feature, "tentatively add"
-   `update/` = update an existing feature
-   `remove/` = remove an existing feature
-   `fix/` = fix an existing issue
-->
-   `add/` = 新機能の追加
-   `try/` = 実験的な機能、一時的な追加
-   `update/` = 既存機能の更新
-   `remove/` = 既存機能の削除
-   `fix/` = 既存の問題の修正

<!--
For example, `add/gallery-block` means you're working on adding a new gallery block.
-->
例えば、`add/gallery-block` は、新しいギャラリーブロックの追加を意味します。

<!--
## Keeping Your Branch Up To Date
-->
## ブランチを最新に保つ

<!--
When many different people are working on a project simultaneously, pull requests can go stale quickly. A "stale" pull request is one that is no longer up to date with the main line of development, and it needs to be updated before it can be merged into the project.
-->
さまざまな人が同時にプロジェクトで作業すると、プルリクエストがすぐに古くなります。「古い」プルリクエストとは、開発のメインラインの最新版から遅れたものに対する変更を指し、これはプロジェクトにマージする前に更新する必要があります。

<!--
There are two ways to do this: merging and rebasing. In Gutenberg, the recommendation is to rebase. Rebasing means rewriting your changes as if they're happening on top of the main line of development. This ensures the commit history is always clean and linear. Rebasing can be performed as many times as needed while you're working on a pull request. **Do share your work early on** by opening a pull request and keeping your history rebase as you progress.
-->
これには、マージとリベースの2つの方法があります。Gutenberg では、リベースを推奨しています。リベースとは、あたかも開発のメインラインの最新版に対して変更したかのように、あなたの変更を書き換える方法です。リベースではコミットの履歴が常に美しく、直線的です。リベースは、プルリクエストでの作業中に何度でも実行できます。**作業内容はできる限り早い段階で共有してください**。それにはプルリクエストを作成し、履歴をリベースしながら作業を進めていきます。

<!--
The main line of development is known as the `trunk` branch. If you have a pull-request branch that cannot be merged into `trunk` due to a conflict (this can happen for long-running pull requests), then in the course of rebasing you'll have to manually resolve any conflicts in your local copy. Learn more in [section _Perform a rebase_](https://github.com/edx/edx-platform/wiki/How-to-Rebase-a-Pull-Request#perform-a-rebase) of _How to Rebase a Pull Request_.
-->
開発のメインラインは `trunk` ブランチとして知られています。競合のために `trunk` にマージできないプルリクエストブランチがある場合 (これは、長期間作業中のプルリクエストで起こります)、リベースの過程でローカルコピーの競合を手動で解決する必要があります。詳細については _How to Rebase a Pull Request_ の [_Perform a rebase_](https://github.com/edx/edx-platform/wiki/How-to-Rebase-a-Pull-Request#perform-a-rebase) セクションを参照してください。

<!--
Once you have resolved any conflicts locally you can update the pull request with `git push --force-with-lease`. Using the `--force-with-lease` parameter is important to guarantee that you don't accidentally overwrite someone else's work.
-->
ローカルでの競合の解決跡は、`git push --force-with-lease` で、プルリクエストを更新できます。force-with-lease`パラメータは、他の人の作業を誤って上書きしないようにするために重要です。

<!--
To sum it up, you need to fetch any new changes in the repository, rebase your branch on top of `trunk`, and push the result back to the repository. These are the corresponding commands:
-->
まとめると、リポジトリの新しい変更を取得し、`trunk` の上に自分のブランチをリベースし、結果をリポジトリにプッシュする必要があります。対応するコマンドは以下のとおりです。

```sh
git fetch
git rebase trunk
git push --force-with-lease origin your-branch-name
```

<!--
## Keeping Your Fork Up To Date
-->
## フォークを最新に保つ

<!--
Working on pull request starts with forking the Gutenberg repository, your separate working copy. Which can easily go out of sync as new pull requests are merged into the main repository. Here your working repository is a `fork` and the main Gutenberg repository is `upstream`. When working on new pull request you should always update your fork before you do `git checkout -b my-new-branch` to work on a feature or fix.
-->
プルリクエストの作業は、まず Gutenberg リポジトリのフォークから始まります。これが作業用コピーですが、メインリポジトリで新しいプルリクエストがマージされると、簡単に同期が失われます。ここで、作業用リポジトリをフォーク、Gutenberg のメインリポジトリを `upstream` とします。新しいプルリクエストで、機能や修正を行うための `git checkout -b my-new-branch` を実行する前に、必ずフォークを更新してください。

<!--
You will need to add an `upstream` remote in order to keep your fork updated.
-->
自分のフォークを最新に保つには、リモート `upstream` を追加する必要があります。

```sh
git remote add upstream https://github.com/WordPress/gutenberg.git
git remote -v
origin	git@github.com:your-account/gutenberg.git (fetch)
origin	git@github.com:your-account/gutenberg.git (push)
upstream	https://github.com/WordPress/gutenberg.git (fetch)
upstream	https://github.com/WordPress/gutenberg.git (push)
```

<!--
To sync your fork, you first need to fetch the upstream changes and merge them into your local copy:
-->
フォークを同期するには、まず upstream の変更を取得し、ローカルコピーにマージする必要があります。

```sh
git fetch upstream
git checkout trunk
git merge upstream/trunk
```

<!--
Once your local copy is updated, push your changes to update your fork on GitHub:
-->
ローカルコピーが更新されたら、変更をプッシュしてGitHub上のフォークを更新します。

```
git push
```

<!--
The above commands will update your `trunk` branch from _upstream_. To update any other branch replace `trunk` with the respective branch name.
-->
上のコマンドは、_upstream_ の `trunk` ブランチを更新します。他のブランチを更新するには、`trunk` をそれぞれのブランチ名で置き換えてください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/contributors/git-workflow.md)
