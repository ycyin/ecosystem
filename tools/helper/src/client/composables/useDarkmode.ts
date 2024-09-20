import { useMutationObserver } from '@vueuse/core'
import type { Ref } from 'vue'
import { onMounted, readonly, ref } from 'vue'

import { getDarkmode } from '../utils/index.js'

export const useDarkmode = (): Readonly<Ref<boolean>> => {
  const isDarkmode = ref(false)

  // Watch darkmode change
  useMutationObserver(
    document.documentElement,
    () => {
      isDarkmode.value = getDarkmode()
    },
    {
      attributeFilter: ['data-theme'],
      attributes: true,
    },
  )

  onMounted(() => {
    isDarkmode.value = getDarkmode()
  })

  return readonly(isDarkmode)
}
