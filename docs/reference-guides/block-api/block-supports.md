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
このプロパティはブロックの配置を変更するブロックコントロールを追加します。_重要: ダイナミックブロックでは、まだ動作しません。_

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
This property allows to enable [wide alignment](/docs/how-to-guides/themes/theme-support.md#wide-alignment) for your theme. To disable this behavior for a single block, set this flag to `false`.
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
デフォルトでは保存したマークアップの root 要素にクラス `.wp-block-your-block-name` が追加されます。この結果、テーマやプラグインがブロックをスタイリングする際に利用可能な一貫した機構が実現します。何らかの理由によりこのクラスをマークアップに付加したくない場合、この機能を無効化できます。

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

## color

<!-- 
- Type: `Object`
- Default value: null
- Subproperties:
  - `background`: type `boolean`, default value `true`
  - `gradients`: type `boolean`, default value `false`
  - `text`: type `boolean`, default value `true`
 -->
- タイプ: `Object`
- デフォルト値: null
- サブプロパティ:
  - `background`: タイプ `boolean`, デフォルト値 `true`
  - `gradients`: タイプ `boolean`, デフォルト値 `false`
  - `text`: タイプ `boolean`, デフォルト値 `true`

<!-- 
This value signals that a block supports some of the CSS style properties related to color. When it does, the block editor will show UI controls for the user to set their values.
 -->
この値はブロックが色に関連する CSS スタイルプロパティをサポートすることを通知します。サポートする場合、ブロックエディターはユーザーがプロパティ値を設定できる UI コントロールを表示します。

<!-- 
The controls for background and text will source their colors from the `editor-color-palette` [theme support](https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-color-palettes), while the gradient's from `editor-gradient-presets` [theme support](https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-gradient-presets).
 -->
背景とテキストのコントロールは色を `editor-color-palette` [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/developers/themes/theme-support/#block-color-palettes) から、グラデーションは `editor-gradient-presets` [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/developers/themes/theme-support/#block-gradient-presets) から取得します。

<!-- 
Note that the `text` and `background` keys have a default value of `true`, so if the `color` property is present they'll also be considered enabled:
 -->
注意: `text` キーと `background` キーのデフォルト値は `true` です。`color` プロパティを宣言するとこれらも有効化されます。

<!-- 
```js
supports: {
    color: { // This also enables text and background UI controls.
        gradients: true // Enable gradients UI control.
    }
}
```
 -->
```js
supports: {
    color: { // 同時にテキスト UI コントロールと背景 UI コントロールも有効化
        gradients: true // グラデーション UI コントロールを有効化
    }
}
```
<!-- 
It's possible to disable them individually:
 -->
これらは個別に無効化できます。

<!-- 
```js
supports: {
    color: { // Text UI control is enabled.
        background: false, // Disable background UI control.
        gradients: true // Enable gradients UI control.
    }
}
```
 -->
```js
supports: {
    color: { // テキスト UI コントロールは有効
        background: false, // 背景 UI コントロールを無効化
        gradients: true // グラデーション UI コントロールを有効化
    }
}
```
<!-- 
When the block has support for a specific color property, the attributes definition is extended to include some attributes.
 -->
ブロックが color プロパティをサポートすると、attributes の定義もいくつかの属性を含むよう拡張されます。

<!-- 
- `style`: attribute of `object` type with no default assigned. This is added when any of support color properties are declared. It stores the custom values set by the user. The block can apply a default style by specifying its own `style` attribute with a default e.g.:
 -->
- `style`: デフォルトの割り当てのない `object` タイプの属性。任意の color プロパティのサポートを宣言すると追加されます。ユーザーによるカスタム値のセットを保存します。ブロックは自身の `style` 属性とデフォルトを指定することで、デフォルトスタイルを適用できます。

```js
attributes: {
    style: {
        type: 'object',
        default: {
            color: {
                background: 'value',
                gradient: 'value',
                text: 'value'
            }
        }
    }
}
```
<!-- 
- When `background` support is declared: it'll be added a new `backgroundColor` attribute of type `string` with no default assigned. It stores the preset values set by the user. The block can apply a default background color by specifying its own attribute with a default e.g.:
 -->
- `background` サポートを宣言すると、新しく `string` タイプの `backgroundColor` 属性がデフォルトの割り当てなしで追加されます。ユーザーによるプリセットした値のセットを保存します。ブロックは自身の属性とデフォルトを指定することで、デフォルトの背景色を適用できます。

```js
attributes: {
    backgroundColor: {
        type: 'string',
        default: 'some-value',
    }
}
```
<!-- 
- When `gradients` support is declared: it'll be added a new `gradient` attribute of type `string` with no default assigned. It stores the preset values set by the user. The block can apply a default text color by specifying its own attribute with a default e.g.:
 -->
- `gradients` サポートを宣言すると、新しく `string` タイプの `gradients` 属性がデフォルトの割り当てなしで追加されます。ユーザーによるプリセットした値のセットを保存します。ブロックは自身の属性とデフォルトを指定することで、デフォルトのグラデーションを適用できます。


```js
attributes: {
    gradient: {
        type: 'string',
        default: 'some-value',
    }
}
```
<!-- 
- When `text` support is declared: it'll be added a new `textColor` attribute of type `string` with no default assigned. It stores the preset values set by the user. The block can apply a default text color by specifying its own attribute with a default e.g.:
 -->
- `text` サポートを宣言すると、新しく `string` タイプの `textColor` 属性がデフォルトの割り当てなしで追加されます。ユーザーによるプリセットした値のセットを保存します。ブロックは自身の属性とデフォルトを指定することで、デフォルトのテキスト色を適用できます。

```js
attributes: {
    textColor: {
        type: 'string',
        default: 'some-value',
    }
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

## fontSize

<!-- 
- Type: `boolean`
- Default value: `false`

This value signals that a block supports the font-size CSS style property. When it does, the block editor will show an UI control for the user to set its value.

The values shown in this control are the ones declared by the theme via the `editor-font-sizes` [theme support](https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-font-sizes), or the default ones if none is provided.
 -->
- タイプ: `boolean`
- デフォルト値: `false`

この値はブロックが font-size CSS スタイルプロパティをサポートすることを通知します。サポートする場合、ブロックエディターはユーザーがプロパティ値を設定できる UI コントロールを表示します。

このコントロール内に表示される値は `editor-font-sizes` [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/developers/themes/theme-support/#block-font-sizes) でテーマが宣言したもの、または指定がなければデフォルトのものになります。

<!-- 
```js
supports: {
    // Enable UI control for font-size.
    fontSize: true,
}
```
 -->
```js
supports: {
    // font-size UI コントールの有効化
    fontSize: true,
}
```

<!-- 
When the block declares support for `fontSize`, the attributes definition is extended to include two new attributes: `fontSize` and `style`:

- `fontSize`: attribute of `string` type with no default assigned. It stores the preset values set by the user. The block can apply a default fontSize by specifying its own `fontSize` attribute with a default e.g.:
 -->
ブロックが `fontSize` サポートを宣言すると、attributes の定義も新しい属性 `fontSize` と `style` を含むよう拡張されます。

- `fontSize`: `string` タイプの属性で、デフォルトの割り当てはありません。ユーザーによるプリセットした値のセットを保存します。ブロックは自身の `fontSize` 属性とデフォルトを指定することで、デフォルトの fontSize を適用できます。

```js
attributes: {
    fontSize: {
        type: 'string',
        default: 'some-value',
    }
}
```
<!-- 
- `style`: attribute of `object` type with no default assigned. It stores the custom values set by the user. The block can apply a default style by specifying its own `style` attribute with a default e.g.:
 -->
- `style`: `object` タイプの属性で、デフォルトの割り当てはありません。ユーザーによるプリセットした値のセットを保存します。ブロックは自身の `style` 属性とデフォルトを指定することで、デフォルトのスタイルを適用できます。

```js
attributes: {
    style: {
        type: 'object',
        default: {
            typography: {
                fontSize: 'value'
            }
        }
    }
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

## lineHeight

<!-- 
- Type: `boolean`
- Default value: `false`

This value signals that a block supports the line-height CSS style property. When it does, the block editor will show an UI control for the user to set its value if [the theme declares support](/docs/how-to-guides/themes/theme-support.md#supporting-custom-line-heights).

```js
supports: {
    // Enable UI control for line-height.
    lineHeight: true,
}
```
 -->
- タイプ: `boolean`
- デフォルト値: `false`

この値はブロックが line-height CSS スタイルプロパティをサポートすることを通知します。サポートする場合、[テーマがサポートを宣言する](https://ja.wordpress.org/team/handbook/block-editor/developers/themes/theme-support/#supporting-custom-line-heights)なら、ブロックエディターはユーザーがプロパティ値を設定できる UI コントロールを表示します。

```js
supports: {
    // line-height の UI コントロールを有効化
    lineHeight: true,
}
```

<!-- 
When the block declares support for `lineHeight`, the attributes definition is extended to include a new attribute `style` of `object` type with no default assigned. It stores the custom value set by the user. The block can apply a default style by specifying its own `style` attribute with a default e.g.:
 -->
When the block declares support for `lineHeight`, the attributes definition is extended to include a new attribute `style` of `object` type with no default assigned. It stores the custom value set by the user. The block can apply a default style by specifying its own `style` attribute with a default e.g.:

ブロックが `lineHeight` プロパティのサポートを宣言すると、attributes の定義も新しい属性 `style` を含むよう拡張されます。`style` は `obuject` タイプの属性で、デフォルトの割り当てはありません。ユーザーによるプリセットした値のセットを保存します。ブロックは自身の `style` 属性とデフォルトを指定することで、デフォルトの style を適用できます。

```js
attributes: {
    style: {
        type: 'object',
        default: {
            typography: {
                lineHeight: 'value'
            }
        }
    }
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

非 multiple ブロックは各投稿に1回だけ挿入できます。たとえば組み込みの「続きを読む」ブロックは、編集中の投稿にすでに存在する場合は挿入できません。非 multiple ブロックのアイコンはクリックできないよう自動的にグレイアウトされ、複数インスタンスの作成を回避します。

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
## spacing

<!-- 
- Type: `Object`
- Default value: null
- Subproperties:
  - `padding`: type `boolean`, default value `false`

This value signals that a block supports some of the CSS style properties related to spacing. When it does, the block editor will show UI controls for the user to set their values, if [the theme declares support](/docs/how-to-guides/themes/theme-support.md##cover-block-padding).

```js
supports: {
    padding: true, // Enable padding color UI control.
}
```
 -->
- タイプ: `Object`
- デフォルト値: null
- サブプロパティ:
  - `padding`: タイプ `boolean`, デフォルト値 `false`

この値はブロックがスペースに関連する CSS スタイルプロパティをサポートすることを通知します。[テーマがサポートを宣言する](https://ja.wordpress.org/team/handbook/block-editor/developers/themes/theme-support/#cover-block-padding)なら、ブロックエディターはユーザーがプロパティ値を設定できる UI コントロールを表示します。

```js
supports: {
    spacing: {
        padding: true, // padding 色 UI コントロールを有効化
}
```

<!-- 
When the block declares support for a specific spacing property, the attributes definition is extended to include the `style` attribute.

- `style`: attribute of `object` type with no default assigned. This is added when `padding` support is declared. It stores the custom values set by the user.
 -->
ブロックが spacing プロパティのサポートを宣言すると、attributes の定義も `style` 属性を含むよう拡張されます。

- `style`: デフォルトの割り当てのない `object` タイプの属性。`padding` サポートを宣言すると追加されます。ユーザーによるカスタム値のセットを保存します。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/designers-developers/developers/block-api/block-supports.md)

