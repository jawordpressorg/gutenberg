# theme.json

<!-- 
A theme's theme.json file is one of the best ways to curate the Editor experience and will likely be the first tool you use before reaching for more sophisticated solutions. 
 -->
テーマの theme.json ファイルは、編集体験をキュレートする最良の方法の一つであり、より洗練されたソリューションに手を伸ばす前に最初に使用するツールになるでしょう。

<!-- 
## Providing default controls/options
 -->
## デフォルトのコントロールやオプションの提供

<!-- 
Since theme.json acts as a configuration tool, there are numerous ways to define at a granular level what options are available. This section will use duotone as an example since it showcases a feature that cuts across a few blocks and allows for varying levels of access.   
 -->
theme.json は構成ツールとして機能し、どのオプションが利用可能かをきめ細かいレベルで定義する多くの方法があります。このセクションではデュオトーンを例にとって説明します。これはデュオトーンが、複数のブロックにまたがり、さまざまなレベルのアクセスを可能にする機能を持つためです。

<!-- 
*Duotone with Core options and customization available for each image related block:*
 -->
*画像に関連するブロックで、コアのオプションとカスタマイズが可能なデュオトーン:*

```json
{
	"version": 3,
	"settings": {
		"color": {
			"customDuotone": true,
			"duotone": [
			]
		}
	}
}
```

<!-- 
*Duotone with theme defined color options, Core options, and customization available for each image related block:*
 -->
*画像に関連するブロックで、テーマ定義の色オプション、コアオプション、カスタマイズが可能なデュオトーン:*。


```json
{
	"version": 3,
	"settings": {
		"color": {
			"duotone": [
				{
					"colors": [ "#000000", "#ffffff" ],
					"slug": "foreground-and-background",
					"name": "Foreground and background"
				},
				{
					"colors": [ "#000000", "#ff0200" ],
					"slug": "foreground-and-secondary",
					"name": "Foreground and secondary"
				},
				{
					"colors": [ "#000000", "#7f5dee" ],
					"slug": "foreground-and-tertiary",
					"name": "Foreground and tertiary"
				},
			]
		}
	}
}
```

<!-- 
*Duotone with defined default options and all customization available for the Post Featured Image block:*
 -->
*投稿のアイキャッチ画像ブロックでは、定義済みのデフォルトオプションとすべてのカスタマイズが可能なデュオトーン*


```json
{
	"version": 3,
	"settings": {
		"color": {
			"custom": true,
			"customDuotone": true
		},
		"blocks": {
			"core/post-featured-image": {
				"color": {
					"duotone": [
						{
							"colors": [ "#282828", "#ff5837" ],
							"slug": "black-and-orange",
							"name": "Black and Orange"
						},
						{
							"colors": [ "#282828", "#0288d1" ],
							"slug": "black-and-blue", 
							"name": "Black and Blue"
						}
					],
					"customDuotone": true,
					"custom": true
				}
			}
		}
	}
}
```

<!-- 
*Duotone with only defined default options and core options available for the Post Featured Image block (no customization):*
 -->
*投稿のアイキャッチ画像ブロックでは、定義済みのデフォルトオプションとコアのオプションのみが利用可能なデュオトーン (カスタマイズはなし)*

```json
{
	"version": 3,
	"settings": {
		"color": {
			"custom": true,
			"customDuotone": true
		},	
		"blocks": {
			"core/post-featured-image": {
				"color": {
					"duotone": [
						{
							"colors": [ "#282828", "#ff5837" ],
							"slug": "black-and-orange",
							"name": "Black and Orange"
						},
						{
							"colors": [ "#282828", "#0288d1" ],
							"slug": "black-and-blue",
							"name": "Black and Blue"
						}
					],
					"customDuotone": false,
					"custom": false
				}
			}
		} 
	}
}
```

<!-- 
## Limiting interface options with theme.json
 -->
## theme.json によるインターフェースオプションの制限

<!-- 
### Limit options on a per-block basis
 -->
### ブロックベースでのオプションの制限

<!-- 
Beyond defining default values, using theme.json allows you to also remove options entirely and instead rely on what the theme has set in place. Below is a visual showing two extremes with the same paragraph block: 
 -->
theme.jsonを使用すると、デフォルト値を定義するだけでなく、オプションを完全に削除し、代わりにテーマが設定したオプションを提供できます。以下は同じ段落ブロックで、2つの極端な設定を示した例です。

<!-- 
![Image of restricted interface](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/Locking%20comparison%20visual.png?raw=true)
 -->
![制限されたインターフェースの図](https://raw.githubusercontent.com/WordPress/gutenberg/HEAD/docs/assets/Locking%20comparison%20visual.png?raw=true)

<!-- 
Continuing the examples with duotone, this means you could allow full access to all Duotone functionality for Image blocks and only limit the Post Featured Image block like so:
 -->
デュオトーンの例を続けると、画像ブロックにはデュオトーンの全機能へのアクセスを許可し、投稿のアイキャッチ画像ブロックだけには制限するように設定できます。

```json
{
	"version": 3,
	"settings": {
		"color": {
			"custom": true,
			"customDuotone": true
		},
		"blocks": {
			"core/image": {
				"color": {
					"duotone": [],
					"customDuotone": true,
					"custom": true
				}
			},
			"core/post-featured-image": {
				"color": {
					"duotone": [],
					"customDuotone": false,
					"custom": false
				}
			}
		}
	}
}
```
<!-- 
You can read more about how best to [turn on/off options with theme.json here](/docs/how-to-guides/themes/global-settings-and-styles.md). 
 -->
[theme.json でオプションのオン、オフを切り替える](https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/themes/global-settings-and-styles/)方法の詳細を参照してください。

<!-- 
### Disable inherit default layout
 -->
### デフォルトレイアウトの継承の無効化

<!-- 
To disable the “Inherit default layout” setting for container blocks like the Group block, remove the following section: 
 -->
グループブロックのようなコンテナブロックの「デフォルトレイアウトの継承」設定を無効にするには、以下のセクションを削除してください。

```json
"layout": {
	"contentSize": null,
	"wideSize": null
},
```
<!-- 
### Limit options globally
 -->
### グローバルなオプションの制限

<!-- 
When using theme.json in a block or classic theme, these settings will stop the default color and typography controls from being enabled globally, greatly limiting what’s possible:
 -->
ブロックテーマまたはクラシックテーマで theme.json を使用する際、以下の設定を行うと、グローバルに、デフォルトの色やタイポグラフィのコントロールを無効化し、機能を大きく制限します。

```json
{
	"version": 3,
	"settings": {
		"layout": {
			"contentSize": "750px"
		},
		"color": {
			"background": false,
			"custom": false,
			"customDuotone": false,
			"customGradient": false,
			"defaultGradients": false,
			"defaultPalette": false,
			"text": false
		},
		"typography": {
			"customFontSize": false,
			"dropCap": false,
			"fontStyle": false,
			"fontWeight": false,
			"letterSpacing": false,
			"lineHeight": false,
			"textDecoration": false,
			"textTransform": false
		}
	}
}
```

<!-- 
To enable something from the above, just set whatever value you want to change to `true` for more granularity.
 -->
ここから何かを有効にするには、変更したい値を `true` に設定するだけで、より詳細な設定が可能です。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/curating-the-editor-experience/theme-json.md)
