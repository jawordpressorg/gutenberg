<!-- 
# Block Supports
 -->
# ブロックサポート
<!-- 
Block Supports is the API that allows a block to declare features used in the editor.
 -->
ブロックは「ブロックサポート」API を使用してエディター内で使用する機能を宣言できます。

<!-- 
Some block supports — for example, `anchor` or `className` — apply their attributes by adding additional props on the element returned by `save`. This will work automatically for default HTML tag elements (`div`, etc). However, if the return value of your `save` is a custom component element, you will need to ensure that your custom component handles these props in order for the attributes to be persisted.
 -->
`anchor` や `className` などいくつかのブロックサポートは属性を適用する場合に `save` から返される要素に追加の props を加えます。`div` などのデフォルトの HTML タグ要素であればこれは自動的に動作しますが、`save` の戻り値がカスタムコンポーネント要素の場合、属性が永続化されるようカスタムコンポーネントがこれらの props を処理する必要があります。

## anchor
<!-- 
- Type: `boolean`
- Default value: `false`
 -->
- タイプ: `boolean`
- デフォルト値: `false`

<!-- 
Anchors let you link directly to a specific block on a page. This property adds a field to define an id for the block and a button to copy the direct link.

```js
// Declare support for anchor links.
supports: {
    anchor: true
}
```
 -->
アンカーを使用するとページ上の特定のブロックに直接リンクできます。このプロパティはブロックの ID を定義するフィールドと、ダイレクトリンクをコピーするボタンをを追加します。

```js
// アンカーリンクのサポートを宣言
supports: {
    anchor: true
}
```

## align
<!-- 
- Type: `boolean` or `array`
- Default value: `false`
 -->
- タイプ: `boolean` または `array`
- デフォルト値: `false`
<!-- 
This property adds block controls which allow to change block's alignment. _Important: It doesn't work with dynamic blocks yet._
 -->
このプロパティはブロックの配置を変更するブロックコントロールを追加する。_重要: ダイナミックブロックとは、まだ、動作しない。_

<!-- 
```js
supports: {
    // Declare support for block's alignment.
    // This adds support for all the options:
    // left, center, right, wide, and full.
    align: true
}
```
 -->
```js
supports: {
    // ブロックの配置のサポートを宣言
    // すべてのオプションのサポートを追加
    // left (左寄せ), center (中央寄せ), right (右寄せ), wide (幅広), full (全幅)
    align: true
}
```

<!-- 
```js
supports: {
    // Declare support for specific alignment options.
    align: [ 'left', 'right', 'full' ]
}
```
 -->
```js
supports: {
    // 特定の配置のオプションのサポートを宣言
    align: [ 'left', 'right', 'full' ]
}
```
<!-- 
When the block declares support for `align`, the attributes definition is extended to include an align attribute with a `string` type. By default, no alignment is assigned. The block can apply a default alignment by specifying its own `align` attribute with a default e.g.:
 -->
ブロックが `align` サポートを宣言するとブロック属性定義が拡張され、`string` タイプの align 属性が含まれます。デフォルトでは配置は割り当てられません。ブロックにデフォルトの配置を適用するには、デフォルト値と共に `align` 属性を指定します。たとえば

```js
attributes: {
    align: {
        type: 'string',
        default: 'right'
    }
}
```

## alignWide
<!-- 
- Type: `boolean`
- Default value: `true`
 -->
- タイプ: `boolean`
- デフォルト値: `true`

<!-- 
This property allows to enable [wide alignment](/docs/designers-developers/developers/themes/theme-support.md#wide-alignment) for your theme. To disable this behavior for a single block, set this flag to `false`.
 -->
このプロパティを使用するとテーマの [幅広揃え](/docs/designers-developers/developers/themes/theme-support.md#wide-alignment) を有効化できます。単一ブロックに対してこの機能を無効化するにはこのフラグに `false` を設定してください。

<!-- 
```js
supports: {
    // Remove the support for wide alignment.
    alignWide: false
}
```
 -->
```js
supports: {
    // 幅広揃えサポートを除去
    alignWide: false
}
```

## className
<!-- 
- Type: `boolean`
- Default value: `true`
 -->
- タイプ: `boolean`
- デフォルト値: `true`
<!-- 
By default, the class `.wp-block-your-block-name` is added to the root element of your saved markup. This helps having a consistent mechanism for styling blocks that themes and plugins can rely on. If, for whatever reason, a class is not desired on the markup, this functionality can be disabled.
 -->
デフォルトでは保存したマークアップの root 要素にクラス `.wp-block-your-block-name` が追加されます。この結果、テーマやプラグインがブロックのスタイリングにあたって利用可能な一貫した機構が実現します。何らかの理由によりこのクラスをマークアップに負荷したくない場合、この機能を無効化できます。

<!-- 
```js
supports: {
    // Remove the support for the generated className.
    className: false
}
```
 -->
```js
supports: {
    // className 生成サポートを除去
    className: false
}
```

## customClassName

<!-- 
- Type: `boolean`
- Default value: `true`

This property adds a field to define a custom className for the block's wrapper.

```js
supports: {
    // Remove the support for the custom className.
    customClassName: false
}
```
 -->
- タイプ: `boolean`
- デフォルト値: `true`

このプロパティはブロックのラッパーのカスタム classsName を定義するフィールドを追加します。

```js
supports: {
    // カスタム className サポートを除去
    customClassName: false
}
```

## defaultStylePicker
<!-- 
- Type: `boolean`
- Default value: `true`

When the style picker is shown, a dropdown is displayed so the user can select a default style for this block type. If you prefer not to show the dropdown, set this property to `false`.

```js
supports: {
    // Remove the Default Style picker.
    defaultStylePicker: false
}
```
 -->
- タイプ: `boolean`
- デフォルト値: `true`

スタイルピッカーの表示の際、ユーザーがブロックタイプのデフォルトスタイルを選択できるようドロップダウンが表示されます。ドロップダウンを表示したくない場合にはこのプロパティを `false` に設定してください。

```js
supports: {
    // デフォルトのスタイルピッカーを除去
    defaultStylePicker: false
}
```

## html
<!-- 
- Type: `boolean`
- Default value: `true`

By default, a block's markup can be edited individually. To disable this behavior, set `html` to `false`.

```js
supports: {
    // Remove support for an HTML mode.
    html: false
}
```
 -->
- タイプ: `boolean`
- デフォルト値: `true`

デフォルトではブロックのマークアップは個別に編集できます。この動きを止めるには  `html` に  `false` を設定してください。

```js
supports: {
    // HTML モードサポートを除去
    html: false
}
```

## inserter
<!-- 
- Type: `boolean`
- Default value: `true`

By default, all blocks will appear in the inserter. To hide a block so that it can only be inserted programmatically, set `inserter` to `false`.

```js
supports: {
    // Hide this block from the inserter.
    inserter: false
}
```
 -->
- タイプ: `boolean`
- デフォルト値: `true`

デフォルトではすべてのブロックはインサーターに表示されます。ブロックをインサーターには表示せず、プログラム的にのみ挿入可能にするには `inserter` に `false` を設定してください。

```js
supports: {
    // このブロックをインサーターに表示しない
    inserter: false
}
```

## multiple
<!-- 
- Type: `boolean`
- Default value: `true`

A non-multiple block can be inserted into each post, one time only. For example, the built-in 'More' block cannot be inserted again if it already exists in the post being edited. A non-multiple block's icon is automatically dimmed (unclickable) to prevent multiple instances.

```js
supports: {
    // Use the block just once per post
    multiple: false
}
```
 -->
- タイプ: `boolean`
- デフォルト値: `true`

非 multiple ブロックは各投稿に1回だけ挿入できます。たとえば組み込みの「続きを読む」ブロックは、編集中の投稿にすでに存在する場合は挿入できません。非 multiple ブロックのアイコンクリックできないよう自動的にグレイアウトされ、複数インスタンスの作成を回避します。

```js
supports: {
    // ブロックは投稿ごとに1度だけ使用できる
    multiple: false
}
```

## reusable
<!-- 
- Type: `boolean`
- Default value: `true`

A block may want to disable the ability of being converted into a reusable block. By default all blocks can be converted to a reusable block. If supports reusable is set to false, the option to convert the block into a reusable block will not appear.

```js
supports: {
    // Don't allow the block to be converted into a reusable block.
    reusable: false
}
```
 -->
- タイプ: `boolean`
- デフォルト値: `true`

ブロックを再利用可能なブロックに変換する機能を無効化したい場合があります。デフォルトではすべてのブロックは再利用可能ブロックに変換できます。reusable サポートを false に設定すると、再利用可能ブロックするに変換するオプションが表示されません。

```js
supports: {
    // 再利用可能ブロックへの変換を許可しない
    reusable: false
}
```

[原文](https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/block-api/block-supports.md)