<!-- 
# Filter Reference
 -->
# フィルターリファレンス
<!-- 
[Hooks](https://developer.wordpress.org/plugins/hooks/) are a way for one piece of code to interact/modify another piece of code. They provide one way for plugins and themes to interact with the editor, but they’re also used extensively by WordPress Core itself.

There are two types of hooks: [Actions](https://developer.wordpress.org/plugins/hooks/actions/) and [Filters](https://developer.wordpress.org/plugins/hooks/filters/). In addition to PHP actions and filters, WordPress also provides a mechanism for registering and executing hooks in JavaScript. This functionality is also available on npm as the [@wordpress/hooks](https://www.npmjs.com/package/@wordpress/hooks) package, for general purpose use.

You can also learn more about both APIs: [PHP](https://codex.wordpress.org/Plugin_API/) and [JavaScript](/packages/hooks/README.md).
 -->

[フック](https://developer.wordpress.org/plugins/hooks/)とは、あるコードが別のコードと通信したり、別のコードを変更する方法です。プラグインやテーマはフックを使用してエディターと通信します。WordPress コア自身も広範囲でフックを利用しています。

フックには、[アクション](https://developer.wordpress.org/plugins/hooks/actions/) と [フィルター](https://developer.wordpress.org/plugins/hooks/filters/) の2種類があります。WordPress ではフックの登録と実行を PHP だけでなく、JavaScript からも実行できる手段を提供します。またこの機能は npm でも [@wordpress/hooks](https://www.npmjs.com/package/@wordpress/hooks) パッケージとして汎用的に利用できます。

両方の API の詳細については [PHP](https://codex.wordpress.org/Plugin_API/) と [JavaScript](https://developer.wordpress.org/block-editor/packages/packages-hooks/) を参照してください。

## 目次

- [Block Filters](https://developer.wordpress.org/block-editor/developers/filters/block-filters/)
- [Editor Filters (Experimental)](https://developer.wordpress.org/block-editor/developers/filters/editor-filters/)
- [Parser Filters](https://developer.wordpress.org/block-editor/developers/filters/parser-filters/)
- [Autocomplete](https://developer.wordpress.org/block-editor/developers/filters/autocomplete-filters/)
