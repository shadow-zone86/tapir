import { useStringNormalization } from '@/shared/lib/normalization/useStringNormalization'

export default defineNuxtPlugin(() => {
  if (import.meta.server) return

  const originalReplaceState = history.replaceState.bind(history)
  const originalPushState = history.pushState.bind(history)

  history.replaceState = function (state: unknown, title: string, url?: string | URL | null) {
    const currentState = history.state
    const typeCurrent = useStringNormalization(typeof currentState)
    const typeState = useStringNormalization(typeof state)
    const mergedState = currentState && typeCurrent === 'object' && state && typeState === 'object'
      ? { ...currentState, ...state }
      : state ?? currentState
    originalReplaceState(mergedState, title, url ?? '')
  }

  history.pushState = function (state: unknown, title: string, url?: string | URL | null) {
    const currentState = history.state
    const typeCurrent = useStringNormalization(typeof currentState)
    const typeState = useStringNormalization(typeof state)
    const mergedState = currentState && typeCurrent === 'object' && state && typeState === 'object'
      ? { ...currentState, ...state }
      : state ?? currentState
    originalPushState(mergedState, title, url ?? '')
  }
})
