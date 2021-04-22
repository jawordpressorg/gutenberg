<!--
# Animation
 -->
# アニメーション
<!--
Animation can help reinforce a sense of hierarchy and spatial orientation. This document goes into principles you should follow when you add animation.
 -->
アニメーションは、階層や空間的な方向に対する感覚の強調を支援します。このドキュメントは、アニメーションを追加する際の原則について説明します。
<!--
## Principles
 -->
## 原則

<!--
### Point of Origin
 -->
### 原点

<!--
-   Animation can help anchor an interface element. For example a menu can scale up from the button that opened it.
-   Animation can help give a sense of place; for example a sidebar can animate in from the side, implying it was always hidden off-screen.
-   Design your animations as if you're working with real-world materials. Imagine your user interface elements are made of real materials — when not on screen, where are they? Use animation to help express that.
 -->
- アニメーションは、インターフェース要素の固定を支援します。例えばメニューは、メニューを開くボタンから拡大することができます。
- アニメーションは、場所の概念の付与を支援します。例えばサイドバーが横からスライドインしてくると、メニューが画面の横に隠れているイメージを与えます。
- アニメーションは、実世界の素材を操作しているようにデザインしてください。ユーザーインターフェースの対象とする要素がリアルな素材でできていると想像してください。画面上に表示されていないのであれば、どこにあるのか考えてみてください。この疑問を説明するためにアニメーションを使用します。

<!--
### Speed
 -->
### スピード

<!--
-   Animations should never block a user interaction. They should be fast, almost always complete in less than 0.2 seconds.
-   A user should not have to wait for an animation to finish before they can interact.
-   Animations should be performant. Use `transform` CSS properties when you can, these render elements on the GPU, making them smooth.
-   If an animation can't be made fast & performant, leave it out.
 -->
- ユーザーのインタラクションを、アニメーションで邪魔しないでください。アニメーションは素早く、常に 0.2 秒以下で完了してください。
- ユーザーのインタラクションを、アニメーションの完了を待たせないでください。
- アニメーションは効率的でなければなりません。可能なら `transform` CSS プロパティを使用してください。要素は GPU でレンダーされスムーズになります。
- アニメーションが遅く、非効率な場合は、使用しないでください。

<!--
### Simple
 -->
### シンプル

<!--
-   Don't bounce if the material isn't made of rubber.
-   Don't rotate, fold, or animate on a curved path. Keep it simple.
 -->
- 素材がゴムでなければ、バウンドしないでください。
- 回転したり、折りたたまれたり、曲がりながら動いたりしないでください。シンプルさを保ってください。

<!--
### Consistency
 -->
### 一貫性

<!--
In creating consistent animations, we have to establish physical rules for how elements behave when animated. When all animations follow these rules, they feel consistent, related, and predictable. An animation should match user expectations, if it doesn't, it's probably not the right animation for the job.

Reuse animations if one already exists for your task.
 -->
一貫性のあるアニメーションを作成するため、要素がどのような動きをするか、物理的なルールを設定する必要があります。すべてのアニメーションがこのルールに従えば、ユーザーは一貫性や関連性を感じ、動きを予想できます。アニメーションはユーザーの期待に合わせなければなりません。合わせられないのであれば、それは恐らく作業に対する正しいアニメーションではありません。

タスクに対してすでにアニメーションが存在していれば再利用してください。

<!--
## Accessibility Considerations
 -->
## アクセシビリティへの考慮

<!--
-   Animations should be subtle. Be cognizant of users with [vestibular disorders triggered by motion](https://www.ncbi.nlm.nih.gov/pubmed/29017000).
-   Don't animate elements that are currently reporting content to adaptive technology (e.g., an `aria-live` region that's receiving updates). This can cause confusion wherein the technology tries to parse a region that's actively changing.
-   Avoid animations that aren't directly triggered by user behaviors.
-   Whenever possible, ensure that animations respect the OS-level "Reduce Motion" settings. This can be done by utilizing the [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) media query. Gutenberg includes a `@reduce-motion` mixin for this, to be used alongside rules that include a CSS `animate` property.
 -->
- アニメーションの使用には注意を払ってください。[視覚効果によって前庭障害を起こす](https://www.ncbi.nlm.nih.gov/pubmed/29017000)ユーザーに配慮してください。
- 現在、アダプティブ技術にコンテンツを報告中の要素をアニメーションしないでください (例: 更新を受信している `aria-live` リージョン)。変更中のリージョンをパースするアダプティブ技術が混乱します。
- ユーザーの操作を引き金としないアニメーションは避けてください。
- 可能であれば常に、アニメーションは OS レベルの「Reduce Motion (視覚効果を減らす)」設定を意識してください。これは [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) メディアクエリを活用することで実現できます。Gutenberg にはこのための `@reduce-motion` mixin があり、CSS `animate` プロパティを含むルールと一緒に使用できます。

<!--
## Inventory of Reused Animations
 -->
## 再利用アニメーションのカタログ

<!--
The generic `Animate` component is used to animate different parts of the interface. See [the component documentation](/packages/components/src/animate/README.md) for more details about the available animations.
 -->
汎用的な `Animate` コンポーネントを使用すると、インターフェースの異なる部分をアニメーションできます。利用可能なアニメーションの詳細については [コンポーネントのドキュメント](https://developer.wordpress.org/block-editor/components/animate/) を参照してください。

[原文](https://github.com/WordPress/gutenberg/blob/trunk/docs/designers-developers/designers/animation.md)
