<!-- 
# Migrating Theme.json to Newer Versions
 -->
# theme.json の新しいバージョンへの移行

<!-- 
This guide documents the changes between different `theme.json` versions and how to upgrade. Using older versions will continue to be supported. Upgrading is recommended because new development will continue in the newer versions.
 -->
このガイドでは、異なる `theme.json` のバージョン間の変更点と、アップグレード方法を説明します。古いバージョンは引き続きサポートされますが、新しい開発は新しいバージョンでのみ継続されるため、アップグレードを推奨します。

<!-- 
## Migrating from v1 to v2
 -->
## v1 から v2 への移行

<!-- 
Upgrading to v2 enables some new features and adjusts the naming of some old features to be more consistent with one another.
 -->
v2 へアップグレードすると、いくつかの新機能が有効になり、いくつかの古い機能名称が、統一した形式に調整されます。

<!-- 
### How to migrate from v1 to v2:
 -->
### v1 から v2 への移行方法

<!-- 
1. Update `version` to `2`.
2. Rename the properties that were updated (see below) if you're using them.
 -->
1. `version` を `2` に更新する。
2. 以下のプロパティを使用している場合は、名前を変更する。

<!-- 
Refer to the [dev note for the release](https://make.wordpress.org/core/2022/01/08/updates-for-settings-styles-and-theme-json/) and the [reference documents](/docs/reference-guides/theme-json-reference/README.md) for the respective v1 and v2 versions.
 -->
v1、v2 それぞれのバージョンについては、[リリースに際しての dev note](https://make.wordpress.org/core/2022/01/08/updates-for-settings-styles-and-theme-json/) と、[リファレンスドキュメント](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/theme-json-reference/) を参照してください。

<!-- 
### Renamed properties
 -->
### 名前の変わったプロパティ

| v1                                         | v2                                   |
| ------------------------------------------ | ------------------------------------ |
| `settings.border.customRadius`             | `settings.border.radius`             |
| `settings.spacing.customMargin`            | `settings.spacing.margin`            |
| `settings.spacing.customPadding`           | `settings.spacing.padding`           |
| `settings.typography.customLineHeight`     | `settings.typography.lineHeight`     |

<!-- 
### New properties
 -->
### 新しいプロパティ
<!-- 
New top-level properties: `customTemplates`, `templateParts`.
 -->
新しいトップレベルのプロパティ: `customTemplates`、`templateParts`

<!-- 
Additions to settings:
 -->
settings への追加:

- `settings.appearanceTools`
- `settings.border.color`
- `settings.border.style`
- `settings.border.width`
- `settings.color.background`
- `settings.color.defaultGradients`
- `settings.color.defaultPalette`
- `settings.color.text`
- `settings.spacing.blockGap`
- `settings.typography.fontFamilies`
- `settings.typography.fontStyle`
- `settings.typography.fontWeight`
- `settings.typography.letterSpacing`
- `settings.typography.textColumns`
- `settings.typography.textDecoration`
- `settings.typography.textTransform`
<!-- 
Additions to styles:
 -->
styles への追加:

- `styles.border.color`
- `styles.border.style`
- `styles.border.width`
- `styles.filter.duotone`
- `styles.spacing.blockGap`
- `styles.typography.fontFamily`
- `styles.typography.fontStyle`
- `styles.typography.fontWeight`
- `styles.typography.letterSpacing`
- `styles.typography.textColumns`
- `styles.typography.textDecoration`
- `styles.typography.textTransform`
<!-- 
### Changes to property values
 -->
### プロパティ値の変更
<!-- 
The default font sizes provided by core (`settings.typography.fontSizes`) have been updated. The Normal and Huge sizes (with `normal` and `huge` slugs) have been removed from the list, and Extra Large (`x-large` slug) has been added. When the UI controls show the default values provided by core, Normal and Huge will no longer be present. However, their CSS classes and CSS Custom Properties are still enqueued to make sure existing content that uses them still works as expected.
 -->
コア (`settings.typography.fontSizes`) が提供するデフォルトフォントサイズが更新されました。Normal (標準) と Huge (超特大) サイズ (`normal` と `huge` スラッグ) がリストから削除され、Extra Large (特大) (`x-large` スラッグ) が追加されました。コアが提供するデフォルト値を UI コントロールが表示する場合、Normal と Huge は存在しません。しかし、それらを使用している既存のコンテンツが期待通りに動作することを確認するために、それらの CSS クラスと CSS カスタムプロパティは引き続きキューに入れられます。

<!-- 
## Migrating from v2 to v3
 -->
## v2 から v3 への移行

<!-- 
Upgrading to v3 adjusts preset defaults to be more consistent with one another.
 -->
v3 へアップグレードすると、プリセットのデフォルトが一貫性のあるものに調整されます。

<!-- 
### How to migrate from v2 to v3:
 -->
### v2 から v3 への移行方法

<!-- 
1. Update `version` to `3`.
2. Configure the changed defaults (see below).
 -->
1. `version` を `2` に更新する。
2. 変更されたデフォルトを構成する (以下を参照)。

<!-- 
### Changed defaults
 -->
### 変更されたデフォルト

#### `settings.typography.defaultFontSizes`

<!-- 
In theme.json v2, the default font sizes were only shown when theme sizes were not defined. A theme providing font sizes with the same slugs as the defaults would always override them.
 -->
theme.json v2 では、デフォルトのフォントサイズはテーマでサイズが定義されていない場合にのみ表示されていました。テーマがデフォルトと同じスラッグを持つフォントサイズを提供する場合は、常にデフォルトを上書きしました。

<!-- 
The default `fontSizes` slugs are: `small`, `medium`, `large`, `x-large`, and `xx-large`.
 -->
デフォルトの `fontSizes` スラッグは、`small`、`medium`、`large`、`x-large`、`xx-large`です。

<!-- 
The new `defaultFontSizes` option gives control over showing default font sizes and preventing those defaults from being overridden.
 -->
新しい`defaultFontSizes`オプションでは、デフォルトのフォントサイズの上書きを無効にして、これを表示できます。

<!-- 
- When set to `true` it will show the default font sizes and prevent them from being overridden by the theme.
- When set to `false` it will hide the default font sizes and allow the theme to use the default slugs.
 -->
- `true` に設定すると、デフォルトのフォントサイズは表示され、テーマは上書きできません。
- `false` に設定すると、デフォルトのフォントサイズは表示されず、テーマはデフォルトのスラッグを使用できます。

<!-- 
It is `true` by default when switching to v3. This is to be consistent with how other `default*` options work such as `settings.color.defaultPalette`, but differs from the behavior in v2.
 -->
v3 に切り替えるとデフォルトで `true` になります。これにより `settings.color.defaultPalette` のような他の `default*` オプションの動作と一貫性が保たれますが、v2 の動作とは異なります。

<!-- 
In theme.json v2, the default font sizes were only shown when theme sizes were not defined. A theme providing font sizes with the same slugs as the defaults would always override the default ones.
 -->
<!-- 
theme.json v2 では、テーマでサイズが定義されていない場合にのみ、デフォルトのフォントサイズが表示されていました。デフォルトと同じスラッグを持つフォントサイズを提供するテーマは、常にデフォルトのフォントサイズを上書きしていました。
 -->
<!-- 
To keep behavior similar to v2 with a v3 theme.json:
* If you do not have any `fontSizes` defined, `defaultFontSizes` can be left out or set to `true`.
* If you have some `fontSizes` defined, set `defaultFontSizes` to `false`.
 -->
v3 の theme.json で v2 と同じ動作にするには、
* もし `fontSizes` が定義されていない場合は、`defaultFontSizes` を省略するか `true` に設定してください。
* もし `fontSizes` が定義されている場合は、`defaultFontSizes` を `false` に設定してください。

#### `settings.spacing.defaultSpacingSizes`

<!-- 
In theme.json v2, there are two settings that could be used to set theme level spacing sizes: `settings.spacing.spacingSizes` and `settings.spacing.spacingScale`. Setting both `spacingSizes` _and_ `spacingScale` would only use the values from `spacingSizes`. And setting either of them would always replace the entire set of default spacing sizes provided by WordPress.
 -->
theme.json v2には、テーマレベルのスペースサイズの設定に使用可能な2つの設定があります。`settings.spacing.spacingSizes` と `settings.spacing.spacingScale` です。`spacingSizes` と `spacingScale` の _両方_ を設定すると、`spacingSizes` の値のみが使用されます。またこのどちらかを設定すると常に、WordPress が提供するデフォルトのスペースサイズのセット全体が置き換えられます。

<!-- 
The default `spacingSizes` slugs provided by WordPress are: `20`, `30`, `40`, `50`, `60`, `70`, and `80`.
 -->
WordPress が提供するデフォルトの `spacingSizes` スラッグは、`20`, `30`, `40`, `50`, `60`, `70`, `80` です。

<!-- 
The new `defaultSpacingSizes` option gives control over showing default spacing sizes and preventing those defaults from being overridden.
 -->
新しい `defaultSpacingSizes` オプションを使用すると、デフォルトのスペースサイズを表示したり、デフォルトのスペースサイズが上書きされないように制御できます。

<!-- 
- When set to `true` it will show the default spacing sizes and prevent them from being overridden by the theme.
- When set to `false` it will hide the default spacing sizes and allow the theme to use the default slugs.
 -->
- `true` に設定すると、デフォルトのスペースサイズが表示され、テーマによって上書きされるのを防ぎます。
- `false` に設定すると、デフォルトのスペースサイズが非表示になり、テーマはデフォルトのスラッグを使用できます。

<!-- 
`defaultSpacingSizes` is `true` by default when switching to v3. This is to be consistent with how other `default*` options work such as `settings.color.defaultPalette`, but differs from the behavior in v2.
 -->
v3 に切り替えると、デフォルトで `defaultSpacingSizes` は `true` です。これは、`settings.color.defaultPalette` のような他の `default*` オプションの動作と一致しますが、v2 の動作とは異なります。

<!-- 
Additionally, in v3 both `spacingSizes` and `spacingScale` can be set at the same time. Presets defined in `spacingSizes` with slugs matching the generated presets from `spacingSizes` will override the generated ones.
 -->
さらに、v3では `spacingSizes` と `spacingScale` の両方を同時に設定できるようになりました。`spacingSizes` から生成されたプリセットとマッチするスラッグを持つ、`spacingSizes` 内で定義されたプリセットは、生成されたプリセットを上書きします。

<!-- 
To keep behavior similar to v2 with a v3 theme.json:
* If you do not have any `spacingSizes` presets or `spacingScale` config defined, `defaultSpacingSizes` can be left out or set to `true`.
* If you disabled default spacing sizes by setting `spacingScale` to `{ "steps": 0 }`, remove the `spacingScale` config and set `defaultSpacingSizes` to `false`.
* If you defined only one of either `spacingScale` or `spacingSizes` for your presets, set `defaultSpacingSizes` to `false`.
* If you defined both `spacingScale` and `spacingSizes`, remove the `spacingSizes` config _and_ set `defaultSpacingSizes` to `false`.
 -->
v3 の theme.json で v2 と同じ動作にするには、
* もし `spacingSizes` プリセットを持たず、または `spacingScale` の設定を定義していなければ、`defaultSpacingSizes` を省略するか、`true` に設定してください。
* もし `spacingScale` を `{ "steps": 0 }` に設定してデフォルトのスペースサイズを無効にしている場合は、 `spacingScale` の設定を削除して `defaultSpacingSizes` を `false` に設定してください。
* プリセットに `spacingScale` または `spacingSizes` のどちらか一方しか定義していない場合は、 `defaultSpacingSizes` を `false` に設定してください。
* もし `spacingScale` と `spacingSizes` の両方を定義している場合は、 `spacingSizes` の設定を削除し、_かつ_、`defaultSpacingSizes` を `false` に設定してください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/theme-json-reference/theme-json-migrations.md)

