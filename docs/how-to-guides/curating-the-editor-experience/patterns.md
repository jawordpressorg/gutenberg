<!-- 
# Patterns
 -->
# パターン

<!-- 
Block [patterns](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/) are one of the best ways to provide users with unique and curated editing experiences. 
 -->
ブロック[パターン](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-patterns/)は、ユーザーにユニークでカスタマイズされた編集体験を提供する、最良の方法の一つです。

<!-- 
## Prioritize starter patterns for any post type
 -->
## 任意の投稿タイプのスターターパターンの優先付け

<!-- 
When a user creates new content, regardless of post type, they are met with an empty canvas. However, that experience can be improved thanks to the option to have patterns from a specific type prioritized upon creation of a new piece of content. The modal appears each time the user creates a new item when there are patterns on their website that declare support for the `core/post-content` block types. By default, WordPress does not include any of these patterns, so the modal will not appear without at least two of these post content patterns being added. 
 -->
ユーザーが新しいコンテンツを作成すると、投稿タイプに関係なく空のキャンバスが表示されます。しかしこのユーザー体験は改善できます。新しいコンテンツの作成時に、特定の投稿タイプでパターンを優先付けするオプションがあります。`core/post-content` ブロックタイプのサポートを宣言するパターンがウェブサイトにあると、ユーザーが新しいアイテムを作成するたびにモーダル画面が表示されます。デフォルトでは WordPress にはこれらのパターンが含まれていないため、こうした投稿コンテンツパターンが少なくとも2つ追加されていなければ、モーダル画面は表示されません。

<!-- 
To opt into this, include `core/post-content` in the Block Types for your pattern. From there, you can control which post types the pattern should show up for via the Post Types option. Here's an example of a pattern that would appear when creating a new post. 
 -->
オプトインするには、パターンの「Block Types」に `core/post-content` を含めます。これで「Post Types」オプションを使用して、パターンが表示される投稿タイプを制御できます。以下の新しい投稿を作成すると表示されるパターンの例を参照してください。

```php
<?php
 /**
  * Title: New Event Announcement
  * Slug: twentytwentytwo/new-event-announcement
  * Block Types: core/post-content
  * Post Types: post
  * Categories: featured, text
  */
?>

<!-- wp:heading {"lock":{"move":false,"remove":true}} -->
<h2>Details</h2>
<!-- /wp:heading -->

<!-- wp:heading {"lock":{"move":false,"remove":true}} -->
<h2>Directions</h2>
<!-- /wp:heading -->

<!-- wp:heading {"lock":{"move":false,"remove":true}} -->
<h2>RSVP</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"lock":{"move":true,"remove":true}} -->
<p>To RSVP, please join the #fse-outreach-experiment in Make Slack. </p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"lock":{"move":true,"remove":false}} -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">Learn more</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:cover {"useFeaturedImage":true,"dimRatio":80,"overlayColor":"primary","contentPosition":"center center","align":"full"} -->
<div class="wp-block-cover alignfull"><span aria-hidden="true" class="wp-block-cover__background has-primary-background-color has-background-dim-80 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"align":"center","placeholder":"Write titleā¦","fontSize":"large"} -->
<p class="has-text-align-center has-large-font-size">We hope to see you there!</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:cover -->
```

<!-- 
Read more about this functionality in the [Page creation patterns in WordPress 6.0 dev note](https://make.wordpress.org/core/2022/05/03/page-creation-patterns-in-wordpress-6-0/) and [note that WordPress 6.1 brought this functionality to all post types](https://make.wordpress.org/core/2022/10/10/miscellaneous-editor-changes-for-wordpress-6-1/#start-content-patterns-for-all-post-types).  
 -->
この機能の詳細については、[WordPress 6.0 Dev Note のページ作成パターン](https://make.wordpress.org/core/2022/05/03/page-creation-patterns-in-wordpress-6-0/)を参照してください。ただし、[WordPress 6.1ではすべての投稿タイプにこの機能が追加された](https://make.wordpress.org/core/2022/10/10/miscellaneous-editor-changes-for-wordpress-6-1/#start-content-patterns-for-all-post-types)ことに注意してください。

<!-- 
## Prioritize starter patterns for template creation
 -->
## テンプレート作成時のスターターパターンの優先付け

<!-- 
In the same way patterns can be prioritized for new posts or pages, the same experience can be added to the template creation process. When patterns declare support for the 'templateTypes' property, the patterns will appear anytime a template that matches the designation is created, along with the options to start from a blank state or use the current fallback of the template. By default, WordPress does not include any of these patterns. 
 -->
新しい投稿やページに対してパターンを優先付けできるのと同じようなユーザー体験を、テンプレート作成プロセスにも追加できます。パターンが `templateTypes` プロパティのサポートを宣言すると、指定に一致するテンプレートが作成されるたびに、空白の状態から開始するか、テンプレートの現在のフォールバックを使用するかのオプションとともに、パターンが表示されます。デフォルトの WordPress にはこれらのパターンは含まれません。

<!-- 
To opt into this, a pattern needs to specify a property called `templateTypes`, which is an array containing the templates where the patterns can be used as the full content. Here's an example of a pattern that would appear when creating a 404 template:
 -->
これをオプトインするには、パターンに `templateTypes` プロパティを指定する必要があります。ここには、テンプレートを含む配列を指定し、パターンは完全なコンテンツとして使用されます。以下は404テンプレートの作成時に表示されるパターンの例です。

```php
register_block_pattern(
  'wp-my-theme/404-template-pattern',
  array(
      'title'         => __( '404 Only template pattern', 'wp-my-theme' ),
      'templateTypes' => array( '404' ),
      'content'       => '<!-- wp:paragraph {"align":"center","fontSize":"x-large"} --><p class="has-text-align-center has-x-large-font-size">404 pattern</p><!-- /wp:paragraph -->',
  )
);
```

<!-- 
Read more about this functionality in the [Patterns on the create a new template modal in the WordPress 6.3 dev note](https://make.wordpress.org/core/2023/07/18/miscellaneous-editor-changes-in-wordpress-6-3/#patterns-on-the-create-a-new-template-modal).
 -->
この機能の詳細については、[WordPress 6.3開発ノートの新規テンプレート作成モーダル上のパターン](https://make.wordpress.org/core/2023/07/18/miscellaneous-editor-changes-in-wordpress-6-3/#patterns-on-the-create-a-new-template-modal) を参照してください。

<!-- 
## Lock patterns
 -->
## パターンのロック

<!-- 
As mentioned in the prior section on Locking APIs, aspects of patterns themselves can be locked so that the important aspects of the design can be preserved. [Here’s an example of a pattern](https://gist.github.com/annezazu/acee30f8b6e8995e1b1a52796e6ef805) with various blocks locked in different ways. You can build these patterns in the editor itself, including adding locking options, before [following the documentation to register them](/docs/reference-guides/block-api/block-patterns.md). 
 -->
上の Locking API セクションで述べたように、パターン自体の領域をロックして、設計の重要な部分を保持できます。[こちら](https://gist.github.com/annezazu/acee30f8b6e8995e1b1a52796e6ef805)は、さまざまなブロックがさまざまな方法でロックされた例です。これらのパターンはロックオプションの追加も含め、エディターそのものの中で構築でき、[ドキュメントに従って登録します](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-patterns/)。

<!-- 
## Prioritize specific patterns from the Pattern Directory
 -->
## パターンディレクトリからの特定のパターンの優先付け

<!-- 
With WordPress 6.0 themes can register patterns from [Pattern Directory](https://wordpress.org/patterns/) through theme.json. To accomplish this, themes should use the new patterns top level key in theme.json. Within this field, themes can list patterns to register from the Pattern Directory. The patterns field is an array of pattern slugs from the Pattern Directory. Pattern slugs can be extracted by the url in a single pattern view at the Pattern Directory. Example: This url https://wordpress.org/patterns/pattern/partner-logos the slug is partner-logos.
 -->
WordPress 6.0からテーマは、theme.json を通して[パターンディレクトリ](https://wordpress.org/patterns/)からパターンを登録できます。このためにテーマは theme.json の新しい patterns トップレベルキーを使用する必要があります。このフィールドで、テーマはパターンディレクトリから登録するパターンを列挙できます。patterns フィールドはパターンディレクトリからのパターンスラッグの配列です。パターンスラッグは、パターンディレクトリの単一のパターンビューの URL から抽出できます。例: URL https://wordpress.org/patterns/pattern/partner-logos のスラッグは partner-logos です。

```json
{
    "patterns": [ "short-text-surrounded-by-round-images", "partner-logos" ]
}
```

<!-- 
The content creator will then find the respective Pattern in the inserter “Patterns” tab in the categories that match the categories from the Pattern Directory.
 -->
コンテンツ作成者は、インサーターの「パターン」タブ内の、パターンディレクトリのカテゴリと一致するカテゴリ内でそれぞれのパターンを見つけられます。

<!-- 
## Additional resources
 -->
## その他の情報
<!-- 
- [Using template patterns to build multiple homepage designs](https://developer.wordpress.org/news/2023/04/13/using-template-patterns-to-build-multiple-homepage-designs/) (WordPress Developer Blog)
 -->
- [Using template patterns to build multiple homepage designs](https://developer.wordpress.org/news/2023/04/13/using-template-patterns-to-build-multiple-homepage-designs/) (テンプレートパターンを使用して複数のホームページデザインを構築する) (WordPress Developer Blog)

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/curating-the-editor-experience/patterns.md)