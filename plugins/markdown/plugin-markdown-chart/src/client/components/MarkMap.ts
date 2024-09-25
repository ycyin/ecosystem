import { LoadingIcon, decodeData } from '@vuepress/helper/client'
import { useDebounceFn, useEventListener } from '@vueuse/core'
import type { Markmap } from 'markmap-view'
import type { VNode } from 'vue'
import {
  defineComponent,
  h,
  onMounted,
  onUnmounted,
  ref,
  shallowRef,
} from 'vue'

import '../styles/markmap.css'

declare const __MC_DELAY__: number

export default defineComponent({
  name: 'MarkMap',

  props: {
    /**
     * Chart id
     *
     * 图表 id
     */
    id: { type: String, required: true },

    /**
     * Markmap content
     *
     * Markmap
     */
    content: { type: String, required: true },
  },

  setup(props) {
    const loading = ref(true)
    const markupWrapper = shallowRef<HTMLElement>()
    const markmapSvg = shallowRef<SVGElement>()

    let markmap: Markmap | null = null

    useEventListener(
      'resize',
      useDebounceFn(() => {
        void markmap?.fit()
      }, 100),
    )

    onMounted(() => {
      void Promise.all([
        import(/* webpackChunkName: "markmap" */ 'markmap-lib'),
        import(/* webpackChunkName: "markmap" */ 'markmap-toolbar'),
        import(/* webpackChunkName: "markmap" */ 'markmap-view'),
        // Delay
        new Promise<void>((resolve) => {
          setTimeout(resolve, __MC_DELAY__)
        }),
      ]).then(
        async ([
          { Transformer, builtInPlugins },
          { Toolbar },
          { Markmap, deriveOptions, loadCSS, loadJS },
        ]) => {
          const transformer = new Transformer([...builtInPlugins])
          const { scripts, styles } = transformer.getAssets()

          const { frontmatter, root } = transformer.transform(
            decodeData(props.content),
          )

          markmap = Markmap.create(
            markmapSvg.value!,
            deriveOptions({
              maxWidth: 240,
              ...frontmatter?.markmap,
            }),
          )

          if (styles) await loadCSS(styles)
          if (scripts) await loadJS(scripts, { getMarkmap: () => markmap })

          const { el } = Toolbar.create(markmap)

          markmap.setData(root)
          await markmap.fit()

          el.style.position = 'absolute'
          el.style.bottom = '0.5rem'
          el.style.right = '0.5rem'

          markupWrapper.value!.append(el)

          loading.value = false
        },
      )
    })

    onUnmounted(() => {
      markmap?.destroy()
    })

    return (): VNode =>
      h('div', { class: 'markmap-wrapper', ref: markupWrapper }, [
        h('svg', {
          ref: markmapSvg,
          class: 'markmap-svg',
          id: props.id,
        }),
        loading.value
          ? h(LoadingIcon, { class: 'markmap-loading', height: 360 })
          : null,
      ])
  },
})