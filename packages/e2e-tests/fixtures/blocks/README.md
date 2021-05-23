# Full post content test fixtures

<!--
## Introduction
-->
## はじめに

<!--
This directory contains sets of fixture files that are used to test the parsing
and serialization logic.
-->
このディレクトリには、構文解析とシリアル化のロジックをテストするためのフィクスチャ・ファイルのセットが含まれています。

<!--
Each test is made up of four fixture files:
-->
各テストは4つのフィクスチャ・ファイルから構成されています:

<!--
1. `fixture-name.html`: The initial post content.
2. `fixture-name.parsed.json`: The **expected** output of the PEG parser for
   this content (checked against the **actual** output of both the JS and PHP
   versions of the parser).
3. `fixture-name.json`: The **expected** representation of the block(s) inside
   the post content, along with their attributes and any nested content. The
   contents of this file are compared against the **actual** block object(s).
4. `fixture-name.serialized.html`: The **expected** result of calling
   `serialize` on the parsed block object(s). The contents of this file are
   compared against the **actual** re-serialized post content. This final step
   simulates opening and re-saving a post.
-->
1. `fixture-name.html`: 元の投稿コンテンツ。
2. `fixture-name.parsed.json`: このコンテンツに対する PEG パーサーの **期待される** 出力（ JS と PHP の両方のバージョンのパーサーでの **実際の** 出力に対してチェックされる )。
3. `fixture-name.json`: 投稿コンテンツ内のブロックの **期待される** 表現と、その属性およびネストされたコンテンツ。このファイルのコンテンツは、 **実際の** ブロックオブジェクトと比較されます。
4. `fixture-name.serialized.html`: 解析されたブロックオブジェクトに対して `serialize` を呼び出したときの **期待される** 結果。このファイルの内容は、 **実際の** 再シリアライズされたポストの内容と比較されます。この最後のステップでは、記事を開いて保存し直すことをシミュレートします。

<!--
Every block is required to have at least one such set of fixture files to test
the parsing and serialization of that block. Additionally, each deprecation for
a block should also have a fixture.
-->
すべてのブロックは、そのブロックの解析とシリアライズをテストするために、少なくとも一つのフィクスチャファイルのセットを持つ必要があります。
フィクスチャファイルが必要です。さらに、ブロックの各非推奨プロセス（deprecation）もフィクスチャを持つ必要があります。

<!--
These fixtures must be named like
`core__blockname{__*,}.{html,json,serialized.html}`. For example, for the
`core/image` block, the following four fixture files must exist:
-->
これらのフィクスチャは以下のような名前にしなければなりません。`core__blockname{__*,}.{html,json,serialized.html}`
たとえば、`core/image`ブロックでは、以下の4つのフィクスチャファイルが存在しなければなりません:

1. `core__image.html` (or `core__image__specific-test-name.html`). Must
   contain a `<!-- wp:core/image -->` block.
2. `core__image.parsed.json` (or `core__image__specific-test-name.parsed.json`).
3. `core__image.json` (or `core__image__specific-test-name.json`).
4. `core__image.serialized.html` (or
   `core__image__specific-test-name.serialized.html`).

<!--
Ideally all important attributes and features of the block should be tested
this way. New contributions in the form of additional test cases are always
welcome - this is a great way for us to identify bugs and prevent them from
recurring in the future.
-->
理想的には、ブロックのすべての重要な属性や機能がこの方法でテストされるべきです。テストケースの追加という形での新たな貢献をいつでも歓迎します。これは、バグを特定し、将来の再発を防ぐための素晴らしい方法です。

## Creating Fixtures

When adding a new fixtures, only the first file above (1, e.g. `core__image.html`) needs
to be created manually, the other files are generated from this first file.

To create the first file:

1. Create a file with the correct name in this folder.
2. Add the block to an new post in the editor.
3. Toggle the block attributes to desired settings for the test.
4. Switch to the code editor view and copy the block markup.
5. Paste the markup into the file you created at step 1.

Next, to generate files (2) through (4) run the following command from the root of the
project:

```sh
npm run fixtures:regenerate test/integration/full-content/full-content.test.js
```

When using this command, please be sure to manually verify that the
contents of the `.json` and `.serialized.html` files are as expected.

In particular, check that the `isValid` property is `true`, and that
the attributes are serialized correctly.

## Updating Fixtures

The process for updating fixtures for existing tests is similar to that for creating them:

Run the command to regenerate the files:

```sh
npm run fixtures:regenerate test/integration/full-content/full-content.test.js
```

After regenerating fixtures, check the diff (using git/github) to check that the changes were expected
and the block is still valid (`isValid` is `true`).

## Related

See the
[`full-content.test.js`](../../../../test/integration/full-content/full-content.test.js)
test file for the code that runs these tests.
