<!--
# Supports
 -->
# サポート

<!--
Block Supports is the API that allows a block to declare support for certain features.
 -->
ブロックは「ブロックサポート」API を使用して、特定の機能のサポートを宣言できます。

<!--
Some block supports — for example, `anchor` or `className` — apply their attributes by adding additional props on the element returned by `save`. This will work automatically for default HTML tag elements (`div`, etc). However, if the return value of your `save` is a custom component element, you will need to ensure that your custom component handles these props in order for the attributes to be persisted.
 -->
<!-- 
`anchor` や `className` などいくつかのブロックサポートは属性を適用する場合に `save` から返される要素に追加の props を加えます。`div` などのデフォルトの HTML タグ要素であればこれは自動的に動作しますが、`save` の戻り値がカスタムコンポーネント要素の場合、属性が永続化されるようカスタムコンポーネントがこれらの props を処理する必要があります。
 -->

<!-- 
Opting into any of these features will register additional attributes on the block and provide the UI to manipulate that attribute.
 -->
任意の機能をオプトインすると、ブロックに追加の属性が登録され、属性を操作する UI が提供されます。

<!-- 
In order for the attribute to get applied to the block the generated properties get added to the wrapping element of the block. They get added to the object you get returned from the `useBlockProps` hook.
 -->
ブロックに属性を適用するために、生成されたプロパティがブロックのラッパー要素に追加されます。これらのプロパティは `useBlockProps` フックから返されるオブジェクトに追加されます。

<!-- 
`BlockEdit` function:
 -->
`BlockEdit` 関数:

```js
function BlockEdit() {
	const blockProps = useBlockProps();

	return <div { ...blockProps }>Hello World!</div>;
}
```
<!-- 
`save` function:
 -->
`save` 関数:

```js
function BlockEdit() {
	const blockProps = useBlockProps.save();

	return <div { ...blockProps }>Hello World!</div>;
}
```
<!-- 
For dynamic blocks that get rendered via a `render_callback` in PHP you can use the `get_block_wrapper_attributes()` function. It returns a string containing all the generated properties and needs to get output in the opening tag of the wrapping block element.
 -->
PHP の `render_callback` でレンダーされるダイナミックブロックでは、`get_block_wrapper_attributes()` 関数を使用できます。生成されたすべてのプロパティを含む文字列が返されます。これをラップするブロック要素の開始タグに出力する必要があります。

<!-- 
`render_callback` function:
 -->
`render_callback` 関数:

```php
function render_block() {
	$wrapper_attributes = get_block_wrapper_attributes();

	return sprintf(
		'<div %1$s>%2$s</div>',
		$wrapper_attributes,
		'Hello World!'
	);
}
```

## anchor
<!--
-   Type: `boolean`
-   Default value: `false`
 -->
- タイプ: `boolean`
- デフォルト値: `false`

<!--
Anchors let you link directly to a specific block on a page. This property adds a field to define an id for the block and a button to copy the direct link. _Important: It doesn't work with dynamic blocks yet._

```js
// Declare support for anchor links.
supports: {
	anchor: true
}
```
 -->
anchor を使用するとページ上の特定のブロックに直接リンクできます。このプロパティはブロックの ID を定義するフィールドと、ダイレクトリンクをコピーするボタンをを追加します。_重要: ダイナミックブロックでは、まだ動作しません。_

```js
// anchor リンクのサポートを宣言
supports: {
    anchor: true
}
```

## align
<!--
-   Type: `boolean` or `array`
-   Default value: `false`
 -->
- タイプ: `boolean` または `array`
- デフォルト値: `false`

<!-- 
This property adds block controls, which enable changes to a block's alignment.
 -->
 このプロパティはブロックの配置を変更するブロックコントロールを追加します。
 
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
When the block declares support for `align`, the attributes definition is extended to include an align attribute with a `string` type. By default, no alignment is assigned. The block can apply a default alignment by specifying its own `align` attribute with a default. For example:
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
-   Type: `boolean`
-   Default value: `true`
 -->
- タイプ: `boolean`
- デフォルト値: `true`

<!--
This property allows to enable [wide alignment](/docs/how-to-guides/themes/theme-support.md#wide-alignment) for your theme. To disable this behavior for a single block, set this flag to `false`.
 -->
このプロパティを使用するとテーマの [幅広揃え](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#wide-alignment) を有効化できます。単一ブロックに対してこの機能を無効化するにはこのフラグに `false` を設定してください。

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

## ariaLabel

<!-- 
-   Type: `boolean`
-   Default value: `false`
 -->
-   タイプ: `boolean`
-   デフォルト値: `false`

<!-- 
ARIA-labels let you define an accessible label for elements. This property allows enabling the definition of an aria-label for the block, without exposing a UI field.
 -->
要素にアクセス可能なラベルを定義できます。このプロパティを使用すると、UI フィールドを公開せずに、ブロックの aria-label を定義できます。

<!-- 
```js
supports: {
	// Add support for an aria label.
	ariaLabel: true
}
```
 -->
```js
supports: {
	// aria ラベルのサポートを追加
	ariaLabel: true
}
```

## background

_**Note:** Since WordPress 6.5._

-   Type: `Object`
-   Default value: `null`
-   Subproperties
    -   `backgroundImage`: type `boolean`, default value `false`
    -   `backgroundSize`: type `boolean`, default value `false`

This value signals that a block supports some of the CSS style properties related to background. When it does, the block editor will show UI controls for the user to set their values if [the theme declares support](/docs/how-to-guides/themes/global-settings-and-styles.md#opt-in-into-ui-controls).

`backgroundImage` adds UI controls which allow the user to select a background image.
`backgroundSize` adds the FocalPointPicker to pick the position of the background image and allow the user to select the background size (cover, contain, fixed).

```js
supports: {
	background: {
		backgroundImage: true // Enable background image control.
		backgroundSize: true // Enable background image + size control.
	}
}
```

When a block declares support for a specific background property, its attributes definition is extended to include the `style` attribute.

When a background image is selected, the image data is stored in the `style.background.backgroundImage`.

When a background images is selected and its position or size are changed, the background-position is stored in the `style.background.backgroundPosition` and its background-size in `style.background.backgroundSize` attribute.

-   `style`: an attribute of `object` type with no default assigned. This is added when `backgroundImage` or `backgroundSize` support is declared. It stores the custom values set by the user.
    -   `background`: an attribute of `object` type.
        - `backgroundImage`: an attribute of `object` type, containing information about the selected image
            - `url`: type `string`, URL to the image
            - `id`: type `int`, media attachment ID
            - `source`: type `string`, at the moment the only value is `file`
            - `title`: type `string`, title of the media attachment
        - `backgroundPosition`: an attribute of `string` type, defining the background images position, selected by FocalPointPicker and used in CSS as the [`background-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) value.
        - `backgroundSize`: an attribute of `string` type. defining the CSS [`background-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) value.

The block can apply a default background image, position and size by specifying its own attribute with a default. For example:

```js
attributes: {
    style: {
        background: {
            backgroundImage: {
				"url":"IMAGE_URL"
			}
			backgroundPosition:"50% 50%",
            backgroundSize: "cover"
        }
    }
}
```

## className

<!--
-   Type: `boolean`
-   Default value: `true`
 -->
- タイプ: `boolean`
- デフォルト値: `true`

<!--
By default, the class `.wp-block-your-block-name` is added to the root element of your saved markup. This helps by providing a consistent mechanism for styling blocks that themes and plugins can rely on. If, for whatever reason, a class is not desired on the markup, this functionality can be disabled.
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
-   Type: `Object`
-   Default value: null
-   Subproperties:
    -   `background`: type `boolean`, default value `true`
    -   `button`: type `boolean`, default value `false`
    -   `enableContrastChecker`: type `boolean`, default value `true`
    -   `gradients`: type `boolean`, default value `false`
    -   `heading`: type `boolean`, default value `false`
    -   `link`: type `boolean`, default value `false`
    -   `text`: type `boolean`, default value `true`
 -->
- タイプ: `Object`
- デフォルト値: null
- サブプロパティ:
    -   `background`: タイプ `boolean`, デフォルト値 `true`
    -   `button`: タイプ `boolean`, デフォルト値 `false`
    -   `enableContrastChecker`: タイプ `boolean`, デフォルト値 `true`
    -   `gradients`: タイプ `boolean`, デフォルト値 `false`
    -   `heading`: タイプ `boolean`, デフォルト値 `false`
    -   `link`: タイプ `boolean`, デフォルト値 `false`
    -   `text`: タイプ `boolean`, デフォルト値 `true`

<!--
This value signals that a block supports some of the properties related to color. When this value is present, the block editor will show UI controls for the user to set their values.
 -->
この値はブロックが色に関連するプロパティをサポートすることを通知します。この値があると、ブロックエディターはユーザーがプロパティ値を設定できる UI コントロールを表示します。

<!--
Note that the `background` and `text` keys have a default value of `true`, so if the `color` property is present they will also be considered enabled:
 -->
注意: `background` キーと`text` キーのデフォルト値は `true` です。`color` プロパティを宣言するとこれらも有効化されます。


<!--
```js
supports: {
	color: {
		// This also enables text and background UI controls.
		gradients: true // Enables the gradients UI control.
	}
}
```
 -->
```js
supports: {
    color: {
		// 同時にテキスト UI コントロールと背景 UI コントロールも有効化
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
        background: false, // Disables the background UI control.
        gradients: true // Enables the gradients UI control.
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

### color.background

<!--
This property adds UI controls which allow the user to apply a solid background color to a block.
 -->
このプロパティは UI コントロールを追加します。ユーザーは UI コントロールを使用してブロックに背景色を適用できます。

<!--
When color support is declared, this property is enabled by default (along with text), so simply setting color will enable background color.
 -->
color サポートを宣言すると、background プロパティは text プロパティと共に自動で有効化されます。このため単に color を設定すれば、背景色は有効化されます。

<!--
```js
supports: {
    color: true // Enables background and text color support.
}
```
 -->
```js
supports: {
    color: true // background と text の両方を有効化
}
```

<!--
To disable background support while keeping other color supports enabled, set to `false`.
 -->
他の color サポートは有効化しながら background サポートを無効化するには、`false` を設定します。

<!--
```js
supports: {
    color: {
        // Disables background support. Text color support is still enabled.
        background: false
    }
}
```
 -->
```js
supports: {
    color: {
        // background サポートを無効化。テキスト色のサポートは引き続き有効
        background: false
    }
}
```

<!--
When the block declares support for `color.background`, the attributes definition is extended to include two new attributes: `backgroundColor` and `style`:
 -->
ブロックが `color.background` のサポートを宣言すると、属性定義が拡張され、2つの新しい属性 `backgroundColor` と `style` が含まれます。

<!--
-   `backgroundColor`: an attribute of `string` type with no default assigned.
 -->
-   `backgroundColor`: タイプ `string` の属性。デフォルト値なし。

<!--
    When a user chooses from the list of preset background colors, the preset slug is stored in the `backgroundColor` attribute.

 -->
    プリセットのリストからユーザーが背景色を選択すると、プリセットのスラッグが `backgroundColor` 属性に保存されます。

<!--
    Background color presets are sourced from the `editor-color-palette` [theme support](/docs/how-to-guides/themes/theme-support.md#block-color-palettes).

 -->
    背景色プリセットは `editor-color-palette` [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#block-color-palettes) がソースです。

<!--
    The block can apply a default preset background color by specifying its own attribute with a default. For example:
 -->
    ブロックはデフォルトのプリセット背景色を適用できます。これには 自身の属性に default で指定します。

    ```js
    attributes: {
        backgroundColor: {
            type: 'string',
            default: 'some-preset-background-slug',
        }
    }
    ```

<!--
-   `style`: attribute of `object` type with no default assigned.
 -->
-   `style`: タイプ `object` の属性。デフォルト値なし。

<!--
    When a custom background color is selected (i.e. using the custom color picker), the custom color value is stored in the `style.color.background` attribute.

 -->
    カスタムカラーピッカーを使用するなどして、カスタム背景色を選択すると、カスタムカラー値が `style.color.background` 属性に保存されます。

<!--
    The block can apply a default custom background color by specifying its own attribute with a default. For example:
 -->
    ブロックはデフォルトのカスタム背景色を適用できます。これには 自身の属性に default で指定します。

    ```js
    attributes: {
        style: {
            type: 'object',
            default: {
                color: {
                    background: '#aabbcc',
                }
            }
        }
    }
    ```

### color.button

_**Note:** Since WordPress 6.5._

This property adds block controls which allow the user to set button colors (text, background) in a block. Button colors are disabled by default.

To enable button color support, set `color.button` to `true`.

```js
supports: {
	color: {
		button: true
	}
}
```

Button color presets are sourced from the `editor-color-palette` [theme support](/docs/how-to-guides/themes/theme-support.md#block-color-palettes).

When the block declares support for `color.button`, the attributes definition is extended to include the `style` attribute:

-   `style`: an attribute of `object` type with no default assigned.

    When a button color is selected, the color value is stored in the `style.elements.button.color.text` and `style.elements.button.color.background` attribute.

    The block can apply a default button colors by specifying its own attribute with a default. For example:

    ```js
    attributes: {
        style: {
            type: 'object',
            default: {
                elements: {
                    button: {
                        color: {
                            text: 'var:preset|color|contrast',
    					    background: '#000000',
                        }
                    }
                }
            }
        }
    }
    ```

### color.enableContrastChecker

_**Note:** Since WordPress 6.5._

Determines whether the contrast checker widget displays in the block editor UI.

The contrast checker appears only if the block declares support for color. It tests the readability of color combinations and warns if there is a potential issue. The property is enabled by default. Set to `false` to explicitly disable:

```js
supports: {
	color: {
		enableContrastChecker: false
	}
}
```

### color.\_\_experimentalDuotone

<!-- 
_**Note:** Deprecated since WordPress 6.3._

This property has been replaced by [`filter.duotone`](#filterduotone).
 -->
_**注意:** WordPress 6.3から非推奨となりました。_

このプロパティは `filter.duotone` で置換されました。 

### color.gradients

<!--
This property adds UI controls which allow the user to apply a gradient background to a block.
 -->
このプロパティは UI コントロールを追加します。ユーザーは UI コントロールを使用して、ブロックにグラデーション背景を適用できます。

<!--
```js
supports: {
    color: {
        gradients: true,
        // Default values must be disabled if you don't want to use them with gradients.
        background: false,
        text: false
    }
}
```
 -->
```js
supports: {
    color: {
        gradients: true,
        // グラデーションと一緒にデフォルト値を使いたくない場合は、無効化する必要がある
        background: false,
        text: false
    }
}
```

<!--
Gradient presets are sourced from `editor-gradient-presets` [theme support](/docs/how-to-guides/themes/theme-support.md#block-gradient-presets).
 -->
グラデーションプリセットは `editor-gradient-presets` [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#block-gradient-presets) がソースです。

<!--
When the block declares support for `color.gradient`, the attributes definition is extended to include two new attributes: `gradient` and `style`:
 -->
ブロックが `color.gradient` のサポートを宣言すると、属性定義が拡張され、2つの新しい属性 `gradient` と `style` が含まれます。

<!--
-   `gradient`: an attribute of `string` type with no default assigned.
 -->
-   `gradient`: タイプ `string` の属性。デフォルト値なし。

<!--
    When a user chooses from the list of preset gradients, the preset slug is stored in the `gradient` attribute.
 -->
    プリセットのリストからユーザーがグラデーションを選択すると、プリセットのスラッグが `gradient` 属性に保存されます。

<!--
    The block can apply a default preset gradient by specifying its own attribute with a default. For example:
 -->
    ブロックはデフォルトのグラデーションプリセットを適用できます。これには 自身の属性に default で指定します。

    ```js
    attributes: {
        gradient: {
            type: 'string',
            default: 'some-preset-gradient-slug',
        }
    }
    ```

<!--
-   `style`: an attribute of `object` type with no default assigned.
 -->
-   `style`: タイプ `object` の属性。デフォルト値なし。

<!--
    When a custom gradient is selected (i.e. using the custom gradient picker), the custom gradient value is stored in the `style.color.gradient` attribute.
 -->
    カスタムグラデーションピッカーを使用するなどして、カスタムグラデーションを選択すると、カスタムグラデーション値が `style.color.gradient` 属性に保存されます。

<!--
    The block can apply a default custom gradient by specifying its own attribute with a default. For example:
 -->
    ブロックはデフォルトのカスタムグラデーションを適用できます。これには 自身の属性に default で指定します。

    ```js
    attributes: {
        style: {
            type: 'object',
            default: {
                color: {
                    gradient: 'linear-gradient(135deg,rgb(170,187,204) 0%,rgb(17,34,51) 100%)',
                }
            }
        }
    }
    ```

### color.heading
<!-- 
_**Note:** Since WordPress 6.5._
 -->
_**注意:** WordPress 6.5以降_

This property adds block controls which allow the user to set heading colors in a block. Heading colors are disabled by default.

To enable heading color support, set `color.heading` to `true`.

```js
supports: {
	color: {
		// Enable heading color support.
		heading: true
	}
}
```
 -->
```js
supports: {
    color: true // background と text のみを有効化
}
```

Heading color presets are sourced from the `editor-color-palette` [theme support](/docs/how-to-guides/themes/theme-support.md#block-color-palettes).

When the block declares support for `color.heading`, the attributes definition is extended to include the `style` attribute:

-   `style`: an attribute of `object` type with no default assigned.

    When a heading color is selected, the color value is stored in the `style.elements.heading.color.text` and `style.elements.heading.color.background` attribute.

    The block can apply default heading colors by specifying its own attribute with a default. For example:

    ```js
    attributes: {
        style: {
            type: 'object',
            default: {
                elements: {
                    heading: {
                        color: {
                            text: 'var:preset|color|contrast',
    					    background: '#000000',
                        }
                    }
                }
            }
        }
    }
    ```

### color.link

<!--
This property adds block controls which allow the user to set link colors in a block. Link colors are disabled by default.
 -->
このプロパティは、ユーザーがブロック内のリンクの色を設定できるブロックコントロールを追加します。デフォルトではリンクの色は無効です。

<!--
To enable link color support, set `color.link` to `true`.
 -->
リンクの色のサポートを有効にするには、`color.link` を `true` に設定します。

```js
supports: {
	color: {
		link: true
	}
}
```
<!--
Link color presets are sourced from the `editor-color-palette` [theme support](/docs/how-to-guides/themes/theme-support.md#block-color-palettes).
 -->
リンクの色のプリセットは、`editor-color-palette` [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#block-color-palettes)をソースとしています。

<!-- 
When the block declares support for `color.link`, the attributes definition is extended to include the `style` attribute:
 -->
ブロックが `color.link` のサポートを宣言すると、属性定義が拡張され、`style` が追加されます。

<!--
-   `style`: an attribute of `object` type with no default assigned.
 -->
-   `style`: `object` 型の属性で、デフォルトは割り当てられていません。

  <!-- 
    When a link color is selected, the color value is stored in the `style.elements.link.color.text` and `style.elements.link.:hover.color.text` attribute.

    The block can apply default link colors by specifying its own attribute with a default. For example:
 -->
    リンクの色が選択されると、色の値が `style.elements.link.color.text` 属性と `style.elements.link.:hover.color.text` 属性に格納されます。

    ブロックにデフォルトのリンクの色を適用するには、自身の属性をデフォルトで指定します。

    ```js
    attributes: {
        style: {
            type: 'object',
            default: {
                elements: {
                    link: {
                        color: {
                            text: 'var:preset|color|contrast',
                        },
						":hover": {
							color: {
								text: "#000000"
							}
						}
                    }
                }
            }
        }
    }
    ```

### color.text

<!--
This property adds block controls which allow the user to set text color in a block.
 -->
このプロパティはブロックコントロールを追加します。ユーザーはブロックコントロールを使用してブロックのテキスト色を設定できます。

<!--
When color support is declared, this property is enabled by default (along with background), so simply setting color will enable text color.
 -->
color サポートを宣言すると、text プロパティは background プロパティと共に自動で有効化されます。このため単に color を設定すれば、テキスト色は有効化されます。

<!--
```js
supports: {
	color: true // Enables background and text, but not link.
}
```
 -->
```js
supports: {
    color: true // background と text を有効化。link は有効化しない。
}
```

<!--
To disable text color support while keeping other color supports enabled, set `color.text` to `false`.
 -->
他の color サポートは有効化しながら text サポートを無効化するには、`color.text` に `false` を設定します。

<!--
```js
supports: {
	color: {
		// Disable text color support.
		text: false
	}
}
```
 -->
```js
supports: {
    color: {
        // text color サポートを無効化。
        text: false
    }
}
```

<!--
Text color presets are sourced from the `editor-color-palette` [theme support](/docs/how-to-guides/themes/theme-support.md#block-color-palettes).
 -->
テキスト色プリセットは `editor-color-palette` [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#block-gradient-presets) がソースです。

<!--
When the block declares support for `color.text`, the attributes definition is extended to include two new attributes: `textColor` and `style`:
 -->
ブロックが `color.text` のサポートを宣言すると、属性定義が拡張され、2つの新しい属性 `textColor` と `style` が含まれます。

<!--
-   `textColor`: an attribute of `string` type with no default assigned.
 -->
-   `textColor`: タイプ `string` の属性。デフォルト値なし。

<!--
    When a user chooses from the list of preset text colors, the preset slug is stored in the `textColor` attribute.
 -->
    プリセットのリストからユーザーがテキスト色を選択すると、プリセットのスラッグが `textColor` 属性に保存されます。

<!--
    The block can apply a default preset text color by specifying its own attribute with a default. For example:
 -->
    ブロックはデフォルトのプリセットテキスト色を適用できます。これには 自身の属性に default で指定します。

    ```js
    attributes: {
        textColor: {
            type: 'string',
            default: 'some-preset-text-color-slug',
        }
    }
    ```

<!--
-   `style`: an attribute of `object` type with no default assigned.
 -->
-   `style`: タイプ `object` の属性。デフォルト値なし。

<!--
    When a custom text color is selected (i.e. using the custom color picker), the custom color value is stored in the `style.color.text` attribute.
 -->
    カスタムカラーピッカーを使用するなどして、カスタムテキスト色を選択すると、カスタムカラー値が `style.color.gradient` 属性に保存されます。

<!--
    The block can apply a default custom text color by specifying its own attribute with a default. For example:
 -->
    ブロックはデフォルトのカスタムテキスト色を適用できます。これには 自身の属性に default で指定します。

    ```js
    attributes: {
        style: {
            type: 'object',
            default: {
                color: {
                    text: '#aabbcc',
                }
            }
        }
    }
    ```

## customClassName

<!--
-   Type: `boolean`
-   Default value: `true`

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
<!-- 
## defaultStylePicker
 -->
<!--
-   Type: `boolean`
-   Default value: `true`

When the style picker is shown, the user can set a default style for a block type based on the block's currently active style. If you prefer not to make this option available, set this property to `false`.

```js
supports: {
	// Remove the Default Style picker.
	defaultStylePicker: false;
}
```
 -->
<!-- 
- タイプ: `boolean`
- デフォルト値: `true`

スタイルピッカーの表示の際、ブロックの現在のアクティブなスタイルに基づいてブロックタイプのデフォルトのスタイルを設定できます。このオプションを有効にしたくない場合は、`false` に設定してください。

```js
supports: {
    // デフォルトのスタイルピッカーを除去
    defaultStylePicker: false
}
```
 -->

<!-- 
## fontSize
 -->
<!--
-   Type: `boolean`
-   Default value: `false`

This value signals that a block supports the font-size CSS style property. When it does, the block editor will show an UI control for the user to set its value.

The values shown in this control are the ones declared by the theme via the `editor-font-sizes` [theme support](/docs/how-to-guides/themes/theme-support.md#block-font-sizes), or the default ones if none is provided.
 -->
<!-- 
- タイプ: `boolean`
- デフォルト値: `false`

この値はブロックが font-size CSS スタイルプロパティをサポートすることを通知します。サポートする場合、ブロックエディターはユーザーがプロパティ値を設定できる UI コントロールを表示します。

このコントロール内に表示される値は `editor-font-sizes` [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#block-font-sizes) でテーマが宣言したもの、または指定がなければデフォルトのものになります。
 -->
<!--
```js
supports: {
    // Enable UI control for font-size.
    fontSize: true,
}
```
 -->
<!-- 
```js
supports: {
    // font-size UI コントールの有効化
    fontSize: true,
}
```
 -->
<!--
When the block declares support for `fontSize`, the attributes definition is extended to include two new attributes: `fontSize` and `style`:

-   `fontSize`: attribute of `string` type with no default assigned. It stores the preset values set by the user. The block can apply a default fontSize by specifying its own `fontSize` attribute with a default e.g.:
 -->
<!-- 
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
 -->
<!--
-   `style`: attribute of `object` type with no default assigned. It stores the custom values set by the user. The block can apply a default style by specifying its own `style` attribute with a default e.g.:
 -->
<!-- 
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
	defaultStylePicker: false
}
```
 -->

## dimensions

<!-- 
_**Note:** Since WordPress 6.2._
 -->
_**注意:** WordPress 6.2以降_

<!-- 
-   Type: `Object`
-   Default value: null
-   Subproperties:
    -   `minHeight`: type `boolean`, default value `false`
 -->
-   タイプ: `Object`
-   デフォルト値: null
-   サブプロパティ:
    -   `minHeight`: タイプ `boolean`, デフォルト値 `false`

<!-- 
This value signals that a block supports some of the CSS style properties related to dimensions. When it does, the block editor will show UI controls for the user to set their values if [the theme declares support](/docs/how-to-guides/themes/global-settings-and-styles.md#opt-in-into-ui-controls).
 -->
この値は、ブロックが寸法に関連する CSS スタイルプロパティのいくつかをサポートすることを通知します。通知すると、[テーマがサポートを宣言していれば](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/global-settings-and-styles/#ui-%e3%82%b3%e3%83%b3%e3%83%88%e3%83%ad%e3%83%bc%e3%83%ab%e3%81%b8%e3%81%ae%e3%82%aa%e3%83%97%e3%83%88%e3%82%a4%e3%83%b3)、ブロックエディターはユーザーが値を設定できる UI コントロールを表示します。

<!-- 
```js
supports: {
	dimensions: {
		aspectRatio: true // Enable aspect ratio control.
		minHeight: true // Enable min height control.
	}
}
```
 -->
```js
supports: {
    dimensions: {
        minHeight: true // 最小高コントロールを有効化
    }
}
```
<!-- 
When a block declares support for a specific dimensions property, its attributes definition is extended to include the `style` attribute.

-   `style`: an attribute of `object` type with no default assigned. This is added when `aspectRatio` or `minHeight` support is declared. It stores the custom values set by the user. For example:
 -->
ブロックが特定の dimensions プロパティのサポートを宣言すると、その属性定義は `style` 属性を含むように拡張されます。

-   `style`: デフォルトの割り当てのない `object` タイプの属性。`aspectRatio` または `minHeight` のサポートが宣言されると追加され、ユーザーが設定したカスタム値を格納します。例:

```js
attributes: {
    style: {
        dimensions: {
            aspectRatio: "16/9",
            minHeight: "50vh"
        }
    }
}
```

## filter

<!-- 
-   Type: `Object`
-   Default value: null
-   Subproperties:
    -   `duotone`: type `boolean`, default value `false`
 -->
-   タイプ: `Object`
-   デフォルト値: null
-   サブプロパティ:
    -   `duotone`: タイプ `boolean`, デフォルト値 `false`

<!-- 
This value signals that a block supports some of the properties related to filters. When it does, the block editor will show UI controls for the user to set their values.
 -->
この値はブロックがフィルターに関連するプロパティのいくつかをサポートすることを通知します。サポートする場合、ブロックエディターはユーザーがプロパティ値を設定できる UI コントロールを表示します。

### filter.duotone

<!-- 
This property adds UI controls which allow the user to apply a duotone filter to
a block or part of a block.
 -->
このプロパティは、ユーザーがブロックまたはブロックの一部にデュオトーンフィルタを適用できる、UIコントロールを追加します。

<!-- 
```js
supports: {
    filter: {
        // Enable duotone support
        duotone: true
    }
},
selectors: {
    filter: {
        // Apply the filter to img elements inside the image block
        duotone: '.wp-block-image img'
    }
}
```
 -->
```js
supports: {
    filter: {
        // デュオトーンサポートを有効化
        duotone: true
    }
},
selectors: {
    filter: {
        // 画像ブロック内の img 要素にフィルターを適用
        duotone: '.wp-block-image img'
    }
}
```

<!-- 
The filter can be applied to an element inside the block by setting the `selectors.filter.duotone` selector.

Duotone presets are sourced from `color.duotone` in [theme.json](/docs/how-to-guides/themes/global-settings-and-styles.md).
 -->
セレクタ `selectors.filter.duotone` を設定することで、ブロック内の要素にフィルタを適用できます。

デュオトーンプリセットは、[theme.json](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/global-settings-and-styles/) の `color.duotone` がソースです。
<!-- 
When the block declares support for `filter.duotone`, the attributes definition is extended to include the attribute `style`:
 -->
ブロックが `filter.duotone` のサポートを宣言すると、属性定義が拡張され、属性 `style` が含まれます。
<!--  
-   `style`: an attribute of `object` type with no default assigned.
 -->
-   `style`: タイプ `object` の属性。デフォルト値なし。
<!-- 
    The block can apply a default duotone color by specifying its own attribute with a default. For example:
 -->
    ブロックはデフォルトのデュオトーンカラーを適用できます。これには 自身の属性に default で指定します。

    ```js
    attributes: {
        style: {
            type: 'object',
            default: {
                color: {
                    duotone: [
                        '#FFF',
                        '#000'
                    ]
                }
            }
        }
    }
    ```

## html
<!--
-   Type: `boolean`
-   Default value: `true`

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
-   Type: `boolean`
-   Default value: `true`

By default, all blocks will appear in the inserter, block transforms menu, Style Book, etc. To hide a block from all parts of the user interface so that it can only be inserted programmatically, set `inserter` to `false`.

```js
supports: {
	// Hide this block from the inserter.
	inserter: false;
}
```
 -->
- タイプ: `boolean`
- デフォルト値: `true`

デフォルトではすべてのブロックはインサーター、ブロック変換メニュー、スタイルブック等に表示されます。ブロックをすべてのユーザインターフェースの部品に表示せず、プログラム的にのみ挿入可能にするには `inserter` に `false` を設定してください。

```js
supports: {
    // このブロックをインサーターに表示しない
    inserter: false
}
```

## interactivity

-   Type: `boolean` or `object`
-   Default value: `false`
-   Subproperties:
    -   `clientNavigation`: type `boolean`, default value `false`
    -   `interactive`: type `boolean`, default value `false`

Indicates if the block is using Interactivity API features.

The `clientNavigation` sub-property indicates whether a block is compatible with the Interactivity API client-side navigation.
Set it to true only if the block is not interactive or if it is interactive using the Interactivity API. Set it to false if the block is interactive but uses vanilla JS, jQuery or another JS framework/library other than the Interactivity API.

The `interactive` sub-property indicates whether the block is using the Interactivity API directives.

## layout

<!-- 
-   Type: `boolean` or `Object`
-   Default value: null
-   Subproperties:
    -   `default`: type `Object`, default value null
    -   `allowSwitching`: type `boolean`, default value `false`
    -   `allowEditing`: type `boolean`, default value `true`
    -   `allowInheriting`: type `boolean`, default value `true`
    -   `allowSizingOnChildren`: type `boolean`, default value `false`
    -   `allowVerticalAlignment`: type `boolean`, default value `true`
    -   `allowJustification`: type `boolean`, default value `true`
    -   `allowOrientation`: type `boolean`, default value `true`
    -   `allowCustomContentAndWideSize`: type `boolean`, default value `true`

This value only applies to blocks that are containers for inner blocks. If set to `true` the layout type will be `flow`. For other layout types it's necessary to set the `type` explicitly inside the `default` object.
 -->
-   タイプ: `boolean` または `Object`
-   デフォルト値: null
-   サブプロパティ:
    -   `default`: タイプ `Object`, デフォルト値 null
    -   `allowSwitching`: タイプ `boolean`, デフォルト値 `false`
    -   `allowEditing`: タイプ `boolean`, デフォルト値 `true`
    -   `allowInheriting`: タイプ `boolean`, デフォルト値 `true`
    -   `allowSizingOnChildren`: タイプ `boolean`, デフォルト値 `false`
    -   `allowVerticalAlignment`: タイプ `boolean`, デフォルト値 `true`
    -   `allowJustification`: タイプ `boolean`, デフォルト値 `true`
    -   `allowOrientation`: タイプ `boolean`, デフォルト値 `true`
    -   `allowCustomContentAndWideSize`: タイプ `boolean`, デフォルト値 `true`

この値は内部ブロックのコンテナとなるブロックにのみ適用されます。`true` に設定するとレイアウトタイプは `flow` になります。その他のレイアウトタイプでは、`default` オブジェクト内で明示的に `type` を設定する必要があります。

### layout.default
<!-- 
-   Type: `Object`
-   Default value: null

Allows setting the `type` property to define what layout type is default for the block, and also default values for any properties inherent to that layout type. For example, for a `flex` layout, a default value can be set for `flexWrap`.
 -->
-   タイプ: `Object`
-   デフォルト値: null

`type` プロパティを設定することで、ブロックのデフォルトのレイアウトタイプを定義できます。また、そのレイアウトタイプに固有のプロパティのデフォルト値も定義できます。たとえば、`flex` レイアウトに対してデフォルト値に `flexWrap` を設定できます。

### layout.allowSwitching
<!-- 
-   Type: `boolean`
-   Default value: `false`

Exposes a switcher control that allows toggling between all existing layout types.
 -->
-   タイプ: `boolean`
-   デフォルト値: `false`

既存のすべてのレイアウトタイプを切り替えられるスイッチャーコントロールを公開します。

### layout.allowEditing
<!-- 
-   Type: `boolean`
-   Default value: `true`

Determines display of layout controls in the block sidebar. If set to false, layout controls will be hidden.
 -->
-   タイプ: `boolean`
-   デフォルト値: `true`

ブロックサイドバーのレイアウトコントロールの表示を決定できます。false に設定すると、レイアウトコントロールは表示されません。

### layout.allowInheriting
<!-- 
-   Type: `boolean`
-   Default value: `true`

For the `flow` layout type only, determines display of the "Inner blocks use content width" toggle.
 -->
-   タイプ: `boolean`
-   デフォルト値: `true`

`flow` レイアウトタイプのみ。「コンテンツ幅を使用するインナーブロック」トグルの表示を決定します。

### layout.allowSizingOnChildren
<!-- 
-   Type: `boolean`
-   Default value: `false`

For the `flex` layout type only, determines display of sizing controls (Fit/Fill/Fixed) on all child blocks of the flex block.
 -->
-   タイプ: `boolean`
-   デフォルト値: `false`

`flex` レイアウトタイプのみ。フレックスブロックのすべての子ブロックのサイズコントロール (Fit/Fill/Fixed) の表示を決定します。

### layout.allowVerticalAlignment
<!-- 
-   Type: `boolean`
-   Default value: `true`

For the `flex` layout type only, determines display of the vertical alignment control in the block toolbar.
 -->
-   タイプ: `boolean`
-   デフォルト値: `true`

`flex` レイアウトタイプのみ。ブロックツールバーの縦方向の位置揃えコントロールの表示を決定します。

### layout.allowJustification
<!-- 
-   Type: `boolean`
-   Default value: `true`

For the `flex` layout type, determines display of the justification control in the block toolbar and block sidebar. For the `constrained` layout type, determines display of justification control in the block sidebar.
 -->
-   タイプ: `boolean`
-   デフォルト値: `true`

`flex` レイアウトタイプのみ。ブロックツールバーとブロックサイドバーの配置コントロールの表示を決定します。`制約`レイアウトタイプでは、ブロックサイドバーの配置コントロールの表示を決定します。

### layout.allowOrientation
<!-- 
-   Type: `boolean`
-   Default value: `true`

For the `flex` layout type only, determines display of the orientation control in the block toolbar.
 -->
-   タイプ: `boolean`
-   デフォルト値: `true`

`flex` レイアウトタイプのみ。ブロックツールバーの方向コントロールの表示を決定します。

### layout.allowCustomContentAndWideSize
<!-- 
-   Type: `boolean`
-   Default value: `true`

For the `constrained` layout type only, determines display of the custom content and wide size controls in the block sidebar.
 -->
-   タイプ: `boolean`
-   デフォルト値: `true`

`constrained` レイアウトタイプのみ。ブロックサイドバーのカスタムコンテンツとワイドサイズコントロールの表示を決定します。

## lock

<!-- 
-   Type: `boolean`
-   Default value: `true`
 -->
-   タイプ: `boolean`
-   デフォルト値: `true`

<!-- 
A block may want to disable the ability to toggle the lock state. It can be locked/unlocked by a user from the block "Options" dropdown by default. To disable this behavior, set `lock` to `false`.
 -->
ブロックは、ロック状態を切り替える機能を無効化したい場合があります。デフォルトでは、ブロックの「オプション」ドロップダウンから、ユーザーによるロック、ロック解除が可能です。この動作を無効にするには、`lock` を `false` に設定します。

<!-- 
```js
supports: {
	// Remove support for locking UI.
	lock: false
}
```
 -->
```js
supports: {
	// ロック UI のサポートを削除。
	lock: false
}
```

## multiple
<!--
-   Type: `boolean`
-   Default value: `true`

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



## position
<!-- 
_**Note:** Since WordPress 6.2._
 -->
_**注意:** WordPress 6.2以降_

<!-- 
-   Type: `Object`
-   Default value: null
-   Subproperties:
    -   `sticky`: type `boolean`, default value `false`
 -->
-   タイプ: `Object`
-   デフォルト値: null
-   サブプロパティ:
    -   `sticky`: タイプ `boolean`, デフォルト値 `false`

<!-- 
This value signals that a block supports some of the CSS style properties related to position. When it does, the block editor will show UI controls for the user to set their values if [the theme declares support](/docs/how-to-guides/themes/global-settings-and-styles.md#opt-in-into-ui-controls).
 -->
この値は、ブロックが位置に関連する CSS スタイルプロパティのいくつかをサポートすることを通知します。通知すると、[テーマがサポートを宣言していれば](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/global-settings-and-styles/#ui-%e3%82%b3%e3%83%b3%e3%83%88%e3%83%ad%e3%83%bc%e3%83%ab%e3%81%b8%e3%81%ae%e3%82%aa%e3%83%97%e3%83%88%e3%82%a4%e3%83%b3)、ブロックエディタはユーザーが値を設定できる UI コントロールを表示します。

<!-- 
Note that sticky position controls are currently only available for blocks set at the root level of the document. Setting a block to the `sticky` position will stick the block to its most immediate parent when the user scrolls the page.
 -->
注意: sticky 位置コントロールは、現在のところ、ドキュメントのルートレベルに設定されたブロックに対してのみ有効です。ブロックを `sticky` 位置に設定すると、ユーザがページをスクロールしたときに、ブロックは最も近い親に張り付きます。

<!-- 
```js
supports: {
	position: {
		sticky: true // Enable selecting sticky position.
	}
}
```
 -->
```js
supports: {
    position: {
        sticky: true // sticky 位置の選択を有効化
    }
}
```
<!-- 
When the block declares support for a specific position property, its attributes definition is extended to include the `style` attribute.

-   `style`: an attribute of `object` type with no default assigned. This is added when `sticky` support is declared. It stores the custom values set by the user. For example:
 -->
ブロックが特定の position プロパティのサポートを宣言すると、その属性定義は `style` 属性を含むように拡張されます。

-   `style`: デフォルトの割り当てのない `object` タイプの属性。これは `sticky` サポートが宣言されると追加されます。ユーザーが設定したカスタム値が格納されます。例:

```js
attributes: {
    style: {
        position: {
            type: "sticky",
            top: "0px"
        }
    }
}
```

## renaming

_**Note:** Since WordPress 6.5._

-   Type: `boolean`
-   Default value: `true`

By default, a block can be renamed by a user from the block 'Options' dropdown or the 'Advanced' panel. To disable this behavior, set renaming to false.

```js
supports: {
	// Don't allow the block to be renamed in the editor.
	renaming: false,
}
```

## reusable

<!--
-   Type: `boolean`
-   Default value: `true`

A block may want to disable the ability of being converted into a reusable block. By default all blocks can be converted to a reusable block. If supports reusable is set to false, the option to convert the block into a reusable block will not appear.

```js
supports: {
	// Don't allow the block to be converted into a reusable block.
	reusable: false,
}
```
 -->
- タイプ: `boolean`
- デフォルト値: `true`

ブロックを再利用可能なブロックに変換する機能を無効化したい場合があります。デフォルトではすべてのブロックは再利用可能ブロックに変換できます。reusable サポートを false に設定すると、再利用可能ブロックするに変換するオプションが表示されません。

```js
supports: {
    // 再利用可能ブロックへの変換を許可しない
    reusable: false,
}
```

## shadow

_**Note:** Since WordPress 6.5._

-   Type: `boolean`
-   Default value: `false`

This property adds block controls which allow the user to set a box shadow for a block. Shadows are disabled by default.

```js
supports: {
	shadow: true // Enable the box-shadow picker.
}
```

Shadow presets are sourced from the shadow presets defined in `theme.json`.

When the block declares support for `shadow`, the attributes definition is extended to include the `style` attribute:

-   `style`: an attribute of `object` type with no default assigned.

    When a shadow is selected, the color value is stored in the `style.shadow`.

    The block can apply a default shadow by specifying its own attribute with a default. For example:

    ```js
    attributes: {
        style: {
            type: 'object',
            default: {
    			shadow: "var:preset|shadow|deep"
            }
        }
    }
    ```

## spacing

<!--
-   Type: `Object`
-   Default value: null
-   Subproperties:
    -   `margin`: type `boolean` or `array`, default value `false`
    -   `padding`: type `boolean` or `array`, default value `false`
    -   `blockGap`: type `boolean` or `array`, default value `false`

This value signals that a block supports some of the CSS style properties related to spacing. When it does, the block editor will show UI controls for the user to set their values if [the theme declares support](/docs/how-to-guides/themes/theme-support.md#cover-block-padding).

```js
supports: {
    spacing: {
        margin: true,  // Enable margin UI control.
        padding: true, // Enable padding UI control.
        blockGap: true,  // Enables block spacing UI control for blocks that also use `layout`.
    }
}
```
 -->
- タイプ: `Object`
- デフォルト値: null
- サブプロパティ:
    -   `margin`: タイプ `boolean` または `array`, デフォルト値 `false`
    -   `padding`: タイプ `boolean` または `array`, デフォルト値 `false`
    -   `blockGap`: タイプ `boolean` または `array`, デフォルト値 `false`

この値はブロックがスペースに関連する CSS スタイルプロパティをサポートすることを通知します。[テーマがサポートを宣言する](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#cover-block-padding)なら、ブロックエディターはユーザーがプロパティ値を設定できる UI コントロールを表示します。

```js
supports: {
    spacing: {
        margin: true,  // margin UI コントロールを有効化
        padding: true, // padding UI コントロールを有効化
        blockGap: true,  // `layout` を使用するブロックに対して block spacing UI コントロールを有効化
}
```

<!--
When the block declares support for a specific spacing property, its attributes definition is extended to include the `style` attribute.

-   `style`: an attribute of `object` type with no default assigned. This is added when `margin` or `padding` support is declared. It stores the custom values set by the user. For example:
 -->
ブロックが特定の spacing プロパティのサポートを宣言すると、その attributes の定義も `style` 属性を含むよう拡張されます。

-   `style`: デフォルトの割り当てのない `object` タイプの属性。`margin` または `padding` サポートを宣言すると追加されます。ユーザーが設定したカスタム値が格納されます。例:

```js
attributes: {
    style: {
        margin: 'value',
        padding: {
            top: 'value',
        }
    }
}
```

<!-- 
A spacing property may define an array of allowable sides – 'top', 'right', 'bottom', 'left' – that can be configured. When such arbitrary sides are defined, only UI controls for those sides are displayed.
 -->
spacing プロパティは構成可能なサイド、'top'、'right'、'bottom'、'left' の配列を定義することもできます。任意のサイドが UI コントロールに定義されると、そのサイドが表示されます。

<!-- 
Axial sides are defined with the `vertical` and `horizontal` terms, and display a single UI control for each axial pair (for example, `vertical` controls both the top and bottom sides). A spacing property may support arbitrary individual sides **or** axial sides, but not a mix of both.
 -->
軸方向のサイドは `vertical` と `horizontal` で定義され、軸方向のペアごとに1つの UI コントロールが表示されます (例えば、`vertical` は上辺と下辺の両方を制御します)。spacing プロパティは、任意の個別のサイド、**または**、軸方向のサイドをサポートできますが、両方を混ぜることはできません。

<!-- 
Note: `blockGap` accepts `vertical` and `horizontal` axial sides, which adjust gap column and row values. `blockGap` doesn't support arbitrary sides.
 -->
注意: `blockGap` は軸方向のサイド `vertical` と `horizontal` を取り、列値と行値のスペースを調整します。`blockGap` は任意方向のサイドをサポートしません。

<!-- 
```js
supports: {
    spacing: {
        margin: [ 'top', 'bottom' ],             // Enable margin for arbitrary sides.
        padding: true,                           // Enable padding for all sides.
        blockGap: [ 'horizontal', 'vertical' ],  // Enables axial (column/row) block spacing controls
    }
}
```
 -->
```js
supports: {
    spacing: {
        margin: [ 'top', 'bottom' ],             // 任意のサイドのマージンを有効化する。
        padding: true,                           // すべてのサイドのパディングを有効化する。
        blockGap: [ 'horizontal', 'vertical' ],  // 軸方向 (列/行) のブロックのスペース制御を有効化する。
    }
}
```

## typography

<!-- 
-   Type: `Object`
-   Default value: `null`
-   Subproperties:
    -   `fontSize`: type `boolean`, default value `false`
    -   `lineHeight`: type `boolean`, default value `false`
    -   `textAlign`: type `boolean` or `array`, default value `false`

The presence of this object signals that a block supports some typography related properties. When it does, the block editor will show a typography UI allowing the user to control their values.
 -->
-   タイプ: `Object`
-   デフォルト値: `null`
-   サブプロパティ:
    - `fontSize`: タイプ `boolean`、デフォルト値 `false`
    - `lineHeight`: タイプ `boolean`、デフォルト値 `false`

このオブジェクトが存在すると、ブロックがいくつかのタイポグラフィ関連のプロパティをサポートすることを通知します。サポートする場合、ブロックエディタにはタイポグラフィのUIが表示され、ユーザーは値を制御できます。

<!-- 
```js
supports: {
    typography: {
        // Enable support and UI control for font-size.
        fontSize: true,
        // Enable support and UI control for line-height.
        lineHeight: true,
        // Enable support and UI control for text alignment.
        textAlign: true,
    },
}
```
 -->
```js
supports: {
    typography: {
        // font-size のサポートと UI コントロールを有効化
        fontSize: true,
        // line-height のサポートと UI コントロールを有効化
        lineHeight: true,
    },
}
```

### typography.fontSize

<!--
-   Type: `boolean`
-   Default value: `false`

This value signals that a block supports the font-size CSS style property. When it does, the block editor will show an UI control for the user to set its value.

The values shown in this control are the ones declared by the theme via the `editor-font-sizes` [theme support](/docs/how-to-guides/themes/theme-support.md#block-font-sizes), or the default ones if none are provided.
 -->
- タイプ: `boolean`
- デフォルト値: `false`

この値はブロックが font-size CSS スタイルプロパティをサポートすることを通知します。サポートする場合、ブロックエディターはユーザーがプロパティ値を設定できる UI コントロールを表示します。

このコントロール内に表示される値は `editor-font-sizes` [テーマサポート](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#block-font-sizes) でテーマが宣言したもの、または指定がなければデフォルトのものになります。

<!-- 
```js
supports: {
    typography: {
        // Enable support and UI control for font-size.
        fontSize: true,
    },
}
```
 -->
```js
supports: {
    typography: {
        // font-size のサポートと UI コントールの有効化
        fontSize: true,
    },
}
```
<!-- 
When the block declares support for `fontSize`, the attributes definition is extended to include two new attributes: `fontSize` and `style`:

-   `fontSize`: an attribute of `string` type with no default assigned. It stores any preset value selected by the user. The block can apply a default fontSize by specifying its own `fontSize` attribute with a default. For example:
 -->
ブロックが `fontSize` サポートを宣言すると、attributes の定義も新しい属性 `fontSize` と `style` を含むよう拡張されます。

-    `fontSize`: `string` タイプの属性で、デフォルトの割り当てはありません。ユーザーが選択したプリセット値のセットを保存します。ブロックは自身の `fontSize` 属性とデフォルトを指定することで、デフォルトの fontSize を適用できます。

```js
attributes: {
    fontSize: {
        type: 'string',
        default: 'some-value',
    }
}
```

<!-- 
-   `style`: an attribute of `object` type with no default assigned. It stores the custom values set by the user and is shared with other block supports such as color. The block can apply a default style by specifying its own `style` attribute with a default. For example:
 -->
-   `style`: `object` タイプの属性で、デフォルトの割り当てはありません。ユーザーが設定したカスタム値が格納され、色などの他のブロックサポートと共有されます。ブロックは自身の `style` 属性とデフォルトを指定することで、デフォルトのスタイルを適用できます。

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

### typography.lineHeight

<!-- 
-   Type: `boolean`
-   Default value: `false`

This value signals that a block supports the line-height CSS style property. When it does, the block editor will show an UI control for the user to set its value if [the theme declares support](/docs/how-to-guides/themes/theme-support.md#supporting-custom-line-heights).
 -->
- タイプ: `boolean`
- デフォルト値: `false`

この値はブロックが line-height CSS スタイルプロパティをサポートすることを通知します。サポートする場合、[テーマがサポートを宣言する](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/theme-support/#supporting-custom-line-heights)なら、ブロックエディターはユーザーがプロパティ値を設定できる UI コントロールを表示します。

<!-- 
```js
supports: {
    typography: {
        // Enable support and UI control for line-height.
        lineHeight: true,
    },
}
```
 -->
```js
supports: {
    typography: {
        // line-height のサポートと UI コントロールを有効化
        lineHeight: true,
    },
}
```

<!-- 
When the block declares support for `lineHeight`, the attributes definition is extended to include a new attribute `style` of `object` type with no default assigned. It stores the custom value set by the user. The block can apply a default style by specifying its own `style` attribute with a default. For example:
 -->
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

### typography.textAlign

_**Note:** Since WordPress 6.6._

-   Type: `boolean` or `array`
-   Default value: `false`

This property adds block toolbar controls which allow to change block's text alignment.

```js
supports: {
    typography: {
        // Declare support for block's text alignment.
        // This adds support for all the options:
        // left, center, right.
        textAlign: true
    }
}
```

```js
supports: {
    typography: {
        // Declare support for specific text alignment options.
        textAlign: [ 'left', 'right' ]
    }
}
```

When the block declares support for `textAlign`, the attributes definition is extended to include a new attribute `style` of `object` type with no default assigned. It stores the custom value set by the user. The block can apply a default style by specifying its own `style` attribute with a default. For example:

```js
attributes: {
    style: {
        type: 'object',
        default: {
            typography: {
                textAlign: 'value'
            }
        }
    }
}
```

## splitting

When set to `true`, `Enter` will split the block into two blocks. Note that this
is only meant for simple text blocks such as paragraphs and headings with a
single `RichText` field. RichText in the `edit` function _must_ have an
`identifier` prop that matches the attribute key of the text, so that it updates
the selection correctly and we know where to split.

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-supports.md)
