import CommentProvider from '@vuepress/plugin-comment/service'
import type { VNode } from 'vue'
import { computed, defineComponent, h } from 'vue'
import { usePageData, usePageFrontmatter } from 'vuepress/client'
import type { CommentPluginFrontmatter } from '../../shared/index.js'
import { useCommentOptions } from '../helpers/index.js'

export default defineComponent({
  name: 'CommentService',

  props: {
    /**
     * Whether the component is in darkmode
     *
     * 组件是否处于夜间模式
     */
    darkmode: Boolean,
  },

  setup(props) {
    const commentOptions = useCommentOptions()
    const page = usePageData()
    const frontmatter = usePageFrontmatter<CommentPluginFrontmatter>()

    const enabled = computed(
      () => frontmatter.value.comment ?? commentOptions.value.comment !== false,
    )

    return (): VNode | null =>
      h(CommentProvider, {
        id: 'vp-comment',
        identifier: frontmatter.value.commentID ?? page.value.path,
        darkmode: props.darkmode,
        style: { display: enabled.value ? 'block' : 'none' },
      })
  },
})
