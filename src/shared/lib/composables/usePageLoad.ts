import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useStringNormalization } from '@/shared/lib/normalization/useStringNormalization'

export function usePageLoad() {
  const isLoading = ref<boolean>(true)

  const hide = (): void => {
    setTimeout(() => { isLoading.value = false }, 150)
  }

  onMounted(() => {
    if (typeof document !== 'undefined') {
      const readyState = useStringNormalization(document.readyState)
      if (readyState === 'complete') {
        hide()
      } else {
        window.addEventListener('load', hide)
      }

      const timeout = setTimeout(() => { isLoading.value = false }, 5000)

      onBeforeUnmount(() => {
        window.removeEventListener('load', hide)
        clearTimeout(timeout)
      })
    }
  })

  return { isLoading }
}
