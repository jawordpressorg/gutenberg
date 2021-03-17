<!-- 
# Block API Versions
 -->
# ブロック API バージョン

<!-- 
This document lists the changes made between the different API versions.
 -->
この文書では異なる API バージョン間での変更をまとめます。

## Version 2 (>= WordPress 5.6)

<!-- 
- To render the block element wrapper for the block's `edit` implementation, the block author must use the `useBlockProps()` hook.
- The generated class names and styles are no longer added automatically to the saved markup for static blocks when `save` is processed. To include them, the block author must explicitly use `useBlockProps.save()` and add to their block wrapper.
 -->
- ブロックの `edit` 実装のためにブロック要素ラッパーをレンダリングするには、`useBlockProps()` フックを使用する必要があります。
- `save` が処理された際、静的ブロックの保存されたマークアップに、生成されたクラス名とスタイルは自動で追加されなくなりました。これらを含めるには明示的に `useBlockProps.save()` を使用してブロックのラッパーに追加する必要があります。

## Version 1

<!-- 
Initial version.
 -->
最初のバージョン

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/block-api/versions.md)