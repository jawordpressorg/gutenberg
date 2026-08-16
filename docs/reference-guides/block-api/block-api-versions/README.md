<!--
# API Versions
 -->
# API バージョン

<!--
This document lists the changes made between the different API versions.
 -->
この文書では異なる API バージョン間での変更をまとめます。

## Version 3 (>= WordPress 6.3)

<!-- 
- The post editor will be iframed if all registered blocks have a Block API version 3 or higher. Adding version 3 support means that the block should work inside an iframe, though the block may still be rendered outside the iframe if not all blocks support version 3.
- **In WordPress 7.0, the post editor is planned to always work as an iframe, regardless of the `apiVersion` of registered blocks**.
 Please refer to [this migration guide](/docs/reference-guides/block-api/block-api-versions/block-migration-for-iframe-editor-compatibility.md) to test your blocks in the iframe editor beforehand.
 -->
- 登録されているすべてのブロックがブロック API バージョン3以上であれば、投稿エディターは iframe 化されます。バージョン3サポートの追加は、ブロックが iframe 内で動作することを意味しますが、すべてのブロックがバージョン3に対応していなければ、ブロックは iframe 外でレンダーされる可能性があります。
- **WordPress 7.0では、登録されたブロックの `apiVersion` に関係なく、投稿エディターは常に iframe として動作するようになる予定です。**
事前に iframe エディター内でブロックをテストするには、この[移行ガイド](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/block-api/block-api-versions/block-migration-for-iframe-editor-compatibility/)を参照してください。

## Version 2 (>= WordPress 5.6)

<!--
-   To render the block element wrapper for the block's `edit` implementation, the block author must use the `useBlockProps()` hook.
-   The generated class names and styles are no longer added automatically to the saved markup for static blocks when `save` is processed. To include them, the block author must explicitly use `useBlockProps.save()` and add to their block wrapper.
 -->
- ブロックの `edit` 実装のためにブロック要素ラッパーをレンダーするには、ブロック作成者は `useBlockProps()` フックを使用しなければなりません。
- `save` が処理される際、生成されたクラス名とスタイルは、静的ブロックの保存されたマークアップに自動で追加されなくなりました。これらを含めるには、ブロック作成者は明示的に `useBlockProps.save()` を使用してブロックのラッパーに追加しなければなりません。

## Version 1

<!--
Initial version.
 -->
最初のバージョン

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-api-versions.md)
