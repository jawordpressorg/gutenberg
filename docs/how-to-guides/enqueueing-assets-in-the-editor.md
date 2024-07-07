<!-- 
# Enqueueing assets in the Editor
 -->
# エディターでのアセットのエンキュー

<!-- 
This guide is designed to be the definitive reference for enqueueing assets (scripts and styles) in the Editor. The approaches outlined here represent the recommended practices but keep in mind that this resource will evolve as WordPress does. Updates are encouraged.
 -->
このページはエディターにアセット (スクリプトとスタイル) をエンキューする際の、完全なリファレンスガイドとなることを目標としています。したがってここに紹介するアプローチは、推奨されるベストプラクティスです。ただし、WordPress 同様、この情報も進化します。定期的な情報の更新を心がけてください。

<!-- 
As of WordPress 6.3, the Post Editor is iframed if all registered blocks have a [`Block API version 3`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/) or higher and no traditional metaboxes are registered. The Site Editor has always been iframed. This guide assumes you are looking to enqueue assets for the iframed Editor, but refer to the backward compatibility section below for additional considerations.
 -->
WordPress 6.3では、登録されたすべてのブロックが [`Block API version 3`](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/)以上であり、かつ、旧来のメタボックスが登録されていなければ、投稿エディターは iframe 化されます。サイトエディターは常に iframe 化されます。このガイドでは、iframe エディターへのアセットのエンキューを想定します。その他の考慮事項については後方互換性のセクションを参照してください。

<!-- 
For more information about why the Editor is iframed, please revisit the post [Blocks in an iframed (template) editor](https://make.wordpress.org/core/2021/06/29/blocks-in-an-iframed-template-editor/).
 -->
エディターが iframe 化された理由については、[iframe 化 (テンプレート) エディターにおけるブロック](https://make.wordpress.org/core/2021/06/29/blocks-in-an-iframed-template-editor/)を参照してください。

<!-- 
## The Editor versus Editor content
 -->
## 「エディター」と「エディターコンテンツ」

<!-- 
Before enqueueing assets in the Editor, you must first identify what you are trying to target.
 -->
エディターでアセットをエンキューする前に、まず何に対してエンキューしようとしているのかをクリアにする必要があります。

<!-- 
Do you want to add styling or JavaScript to the user-generated content (blocks) in the Editor? Or do you want to modify the Editor user interface (UI) components or interact with Editor APIs? This could include everything from creating custom block controls to registering block variations.
 -->
エディターのユーザー生成コンテンツ (ブロック) に、スタイルや JavaScript を追加しようとしていますか ? あるいは、エディターのユーザーインターフェース (UI) コンポーネントを変更したり、エディターの API を操作しようとしていますか ? 後者にはカスタムブロックコントロールの作成から、ブロックバリエーションの登録までが含まれます。

<!-- 
There are different hooks to use depending on the answers to these questions, and if you are building a block or a theme, there are additional approaches to consider. Refer to the designated sections below.
 -->
質問への答えによって使用するフックが異なります。またブロックやテーマを作成する場合は、さらに検討しなければならないアプローチがあります。以下の該当するセクションを参照してください。

<!-- 
## Scenarios for enqueuing assets
 -->
## アセットをエンキューするシナリオ

<!-- 
### Editor scripts and styles
 -->
### エディタースクリプトとスタイル

<!-- 
Whenever you need to enqueue assets for the Editor itself (i.e. not the user-generated content), you should use the [`enqueue_block_editor_assets`](https://developer.wordpress.org/reference/hooks/enqueue_block_editor_assets/) hook coupled with the standard [`wp_enqueue_script`](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) and [`wp_enqueue_style`](https://developer.wordpress.org/reference/functions/wp_enqueue_style/) functions.
 -->
エディター自身にアセットをエンキューする場合 (逆に言えば、ユーザー生成コンテンツ (ブロック) のエンキューでない場合)、[`enqueue_block_editor_assets`](https://developer.wordpress.org/reference/hooks/enqueue_block_editor_assets/) フックと、関連する標準の [`wp_enqueue_script`](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) 関数と [`wp_enqueue_style`](https://developer.wordpress.org/reference/functions/wp_enqueue_style/) 関数を使用します。

<!-- 
Examples might be adding custom inspector or toolbar controls, registering block styles and variations in Javascript, registering Editor plugins, etc.
 -->
例としては、カスタムインスペクタやツールバーコントロールの追加、ブロックスタイルや JavaScript のバリエーションの登録、エディタ ープラグインの登録などが考えられます。

<!-- 
```php
/**
 * Enqueue Editor assets.
 */
function example_enqueue_editor_assets() {
    wp_enqueue_script(
        'example-editor-scripts',
        plugins_url( 'editor-scripts.js', __FILE__ )
    );
    wp_enqueue_style(
        'example-editor-styles',
        plugins_url( 'editor-styles.css', __FILE__ ) 
    );
}
add_action( 'enqueue_block_editor_assets', 'example_enqueue_editor_assets' );
```
 -->
```php
/**
 * エディターアセットのエンキュー
 */
function example_enqueue_editor_assets() {
    wp_enqueue_script(
        'example-editor-scripts',
        plugins_url( 'editor-scripts.js', __FILE__ )
    );
    wp_enqueue_style(
        'example-editor-styles',
        plugins_url( 'editor-styles.css', __FILE__ ) 
    );
}
add_action( 'enqueue_block_editor_assets', 'example_enqueue_editor_assets' );
```

<!-- 
While not the recommended approach, it's important to note that `enqueue_block_editor_assets` can be used to style Editor content for backward compatibility. See below for more details.
 -->
推奨される方法ではありませんが、後方互換性のため、`enqueue_block_editor_assets` を使用して、エディターコンテンツのスタイルを設定できることに注意してください。詳細は以下を参照してください。

<!-- 
### Editor content scripts and styles
 -->
### エディターコンテンツのスクリプトとスタイル

<!-- 
As of WordPress 6.3, all assets added through the [`enqueue_block_assets`](https://developer.wordpress.org/reference/hooks/enqueue_block_assets/) PHP action will also be enqueued in the iframed Editor. See [#48286](https://github.com/WordPress/gutenberg/pull/48286) for more details.
 -->
WordPress 6.3から、[`enqueue_block_assets`](https://developer.wordpress.org/reference/hooks/enqueue_block_assets/) PHP アクションによって追加されたすべてのアセットは、iframe エディターでもキューに追加されるようになりました。詳しくは [#48286](https://github.com/WordPress/gutenberg/pull/48286)を参照してください。

<!-- 
This is the primary method you should use to enqueue assets for user-generated content (blocks), and this hook fires both in the Editor and on the front end of your site. It should not be used to add assets intended for the Editor UI or to interact with Editor APIs. See below for a note on backward compatibility.
 -->
この方法はユーザー生成コンテンツ (ブロック) にアセットをエンキューする主要な方法で、フックはエディターとサイトフロントエンドの両方で発火します。エディター UI 用のアセットの追加や、エディター API とのやり取りでは使用しないでください。後方互換性については以下を参照してください。

<!-- 
There are instances where you may only want to add assets in the Editor and not on the front end. You can achieve this by using an [`is_admin()`](https://developer.wordpress.org/reference/functions/is_admin/) check.
 -->
場合によってはエディターにのみアセットを追加し、フロントエンドにはアセットを追加したくない場合もあります。このときは [`is_admin()`](https://developer.wordpress.org/reference/functions/is_admin/) をチェックします。

<!-- 
```php
/**
 * Enqueue content assets but only in the Editor.
 */
function example_enqueue_editor_content_assets() {
    if ( is_admin() ) {
        wp_enqueue_script(
            'example-editor-content-scripts',
            plugins_url( 'content-scripts.js', __FILE__ )
        );
        wp_enqueue_style(
            'example-editor-content-styles',
            plugins_url( 'content-styles.css', __FILE__ )
        );
    }
}
add_action( 'enqueue_block_assets', 'example_enqueue_editor_content_assets' );
```
 -->
```php
/**
 * コンテンツアセットのエンキュー。ただし、エディター内のみ
 */
function example_enqueue_editor_content_assets() {
    if ( is_admin() ) {
        wp_enqueue_script(
            'example-editor-content-scripts',
            plugins_url( 'constent-scripts.css', __FILE__ )
        );
        wp_enqueue_style(
            'example-editor-content-styles',
            plugins_url( 'constent-styles.css', __FILE__ )
        );
    }
}
add_action( 'enqueue_block_assets', 'example_enqueue_editor_content_assets' );
```

<!-- 
You can also use the hook [`block_editor_settings_all`](https://developer.wordpress.org/reference/hooks/block_editor_settings_all/) to modify Editor settings directly. This method is a bit more complicated to implement but provides greater flexibility. It should only be used if `enqueue_block_assets` does not meet your needs.
 -->
[`block_editor_settings_all`](https://developer.wordpress.org/reference/hooks/block_editor_settings_all/) フックを使用しても、エディターの設定を直接変更できます。実装は少し複雑になりますが、柔軟性は高くなります。`enqueue_block_assets` がニーズを満たさない場合にのみ使用してください。

<!-- 
The following example sets the default text color for all paragraphs to `green`.
 -->
以下の例では、すべての段落のデフォルトのテキスト色を `green` に設定します。

<!-- 
```php
/**
 * Modify the Editor settings by adding custom styles.
 *
 * @param array  $editor_settings An array containing the current Editor settings.
 * @param string $editor_context  The context of the editor.
 *
 * @return array Modified editor settings with the added custom CSS style.
 */
function example_modify_editor_settings( $editor_settings, $editor_context ) {
    $editor_settings["styles"][] = array(
        "css" => 'p { color: green }'
    );

    return $editor_settings;
}
add_filter( 'block_editor_settings_all', 'example_modify_editor_settings', 10,2 );
```
 -->
```php
/**
 * カスタムスタイルを追加してエディター設定を変更する
 *
 * @param array  $editor_settings 現在のエディター設定を含む配列
 * @param string $editor_context  エディターのコンテキスト
 *
 * @return array カスタム CSS スタイルの追加で変更されたエディター設定
 */
function example_modify_editor_settings( $editor_settings, $editor_context ) {
    $editor_settings["styles"][] = array(
        "css" => 'p { color: green }'
    );

    return $editor_settings;
}
add_filter( 'block_editor_settings_all', 'example_modify_editor_settings', 10,2 );
```

<!-- 
These styles are inlined in the `body` of the iframed Editor and prefixed by `.editor-styles-wrapper`. The resulting markup will look like this:
 -->
このスタイルは iframe エディターの `body` にインライン化され、プレフィックス `.editor-styles-wrapper` が付きます。結果のマークアップは次のようになります。

```css
<style>.editor-styles-wrapper p { color: green; }</style>
```

<!-- 
Beginning in WordPress 6.3, you can also use this method of modifying Editor settings to change styles dynamically with JavaScript. See [#52767](https://github.com/WordPress/gutenberg/pull/52767#top) for more details.
 -->
WordPress 6.3以降では、このエディター設定の変更方法を使用して JavaScript で、動的にスタイルを変更できます。詳細は [#52767](https://github.com/WordPress/gutenberg/pull/52767#top) を参照してください。

<!-- 
### Block scripts and styles
 -->
### ブロックのスクリプトとスタイル

<!-- 
When building a block, `block.json` is the recommended way to enqueue all scripts and styles that are specifically required for the block itself. You are able to enqueue assets for the Editor, the front end, or both. See the [Block Metadata](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/) article for more details.
 -->
ブロックをビルドする際は `block.json` が、ブロック自体に必要なすべてのスクリプトとスタイルをエンキューする推奨の方法です。エディター用、フロントエンド用、またはその両方のアセットをエンキューできます。詳細については[ブロックのメタデータ](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-metadata/)を参照してください。

<!-- 
### Theme scripts and styles
 -->
### テーマのスクリプトとスタイル

<!-- 
If you need to enqueue Editor JavaScript in a theme, you can use either `enqueue_block_assets` or `enqueue_block_editor_assets` as outlined above. Editor-specific stylesheets should almost always be added with [`add_editor_style()`](https://developer.wordpress.org/reference/functions/add_editor_style/) or [`wp_enqueue_block_style()`](https://developer.wordpress.org/reference/functions/wp_enqueue_block_style/).
 -->
テーマ内でエディター JavaScript をエンキューするには、前述のように `enqueue_block_assets` または `enqueue_block_editor_assets` を使用します。エディター固有のスタイルシートは、ほとんど常に [`add_editor_style()`](https://developer.wordpress.org/reference/functions/add_editor_style/) または [`wp_enqueue_block_style()`](https://developer.wordpress.org/reference/functions/wp_enqueue_block_style/) で追加してください。

<!-- 
The `wp_enqueue_block_style()` function allows you to load per-block stylesheets in the Editor and on the front end. Coupled with `theme.json`, this is one of the best methods of styling blocks. See the WordPress Developer Blog article [Leveraging theme.json and per-block styles for more performant themes](https://developer.wordpress.org/news/2022/12/leveraging-theme-json-and-per-block-styles-for-more-performant-themes/) for more details.
 -->
`wp_enqueue_block_style()` 関数を使用すると、エディター内とフロントエンドで、ブロック単位にスタイルシートを読み込めます。`theme.json` との組み合わせはブロックをスタイリングする最良の方法の1つです。詳細は WordPress Developer Blogの記事 [Leveraging theme.json and per-block styles for more performant themes](https://developer.wordpress.org/news/2022/12/leveraging-theme-json-and-per-block-styles-for-more-performant-themes/) (theme.json とブロック単位のスタイルを活用したパフォーマンスの高いテーマの実現) を参照してください。

<!-- 
## Backward compatibility and known issues
 -->
## 後方互換性と既知の問題

<!-- 
As a general rule, when you enqueue assets in the iframed Editor, they will also be enqueued when the Editor is not iframed so long as you are using WordPress 6.3+. The opposite is not always true.
 -->
一般的なルールとして、WordPress 6.3以上を使用している限り、iframe エディターでアセットをエンキューすると、iframe 化されていないエディターでもエンキューされます。しかし、その逆が常に正しいとは限りません。

<!-- 
Suppose you are building a plugin or theme that requires backward compatibility to 6.2 or lower while maintaining compatibility with WordPress 6.3. In that case, you will not be able to use `enqueue_block_assets` since this hook does not enqueue assets in the content of the iframed Editor prior to 6.3.
 -->
今ここで、WordPress 6.3との互換性を維持しながら、6.2以下との後方互換性が必要なプラグインやテーマを構築するとします。このとき `enqueue_block_assets` は使えません。このフックは6.3より前の iframe エディターのコンテンツにアセットをエンキューしないためです。

<!-- 
As an alternative, you can use `enqueue_block_editor_assets` so long as the enqueued stylesheet contains at least one of the following selectors: `.editor-styles-wrapper`, `.wp-block`, or `.wp-block-*`. A warning message will be logged in the console, but the hook will apply the styles to the content of the Editor.
 -->
代わりに、エンキューされるスタイルシートがセレクタ `.editor-styles-wrapper`、`.wp-block`、`.wp-block-*` のうち少なくとも1つを含むなら、`enqueue_block_editor_assets`を使用できます。コンソールに警告メッセージが記録されますが、フックはエディターのコンテンツにスタイルを適用します。

<!-- 
It’s also important to note that as of WordPress 6.3, assets enqueued by `enqueue_block_assets` are loaded both inside and outside Editor's iframe for backward compatibility. Depending on the script libraries that you are trying to enqueue, this might cause problems. An ongoing discussion about this approach is happening in the Gutenberg [GitHub repository](https://github.com/WordPress/gutenberg/issues/53590).
 -->
重要な注意として WordPress 6.3では、後方互換性のため、`enqueue_block_assets` によってエンキューされたアセットは、エディターの iframe の内側と外側の両方に読み込まれます。これによりエンキューするスクリプトライブラリによっては、問題が発生する可能性があります。このアプローチについては、Gutenberg [GitHub リポジトリ](https://github.com/WordPress/gutenberg/issues/53590) で議論が行われています。

<!-- 
If you experience issues using any of the methods outlined in this guide that have not been previously reported, please [submit an issue](https://github.com/WordPress/gutenberg/issues/new/choose) on GitHub.
 -->
このガイドで説明した方法により、これまでに報告されていない問題が発生した場合は、GitHub で [issue を送信](https://github.com/WordPress/gutenberg/issues/new/choose) してください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/enqueueing-assets-in-the-editor.md)