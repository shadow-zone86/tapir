const VISIBLE_CLASS = 'is-visible'

export function useScrollAnimation(options?: IntersectionObserverInit) {
  const nuxtApp = useNuxtApp()
  const isClient = nuxtApp.ssrContext === undefined || import.meta.client
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px',
    ...options
  }

  let observer: IntersectionObserver | null = null

  const observe = (el: Element) => {
    if (!isClient || typeof document === 'undefined') return

    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(VISIBLE_CLASS)
          }
        })
      }, defaultOptions)
    }

    observer.observe(el)
  }

  const unobserve = (el: Element) => {
    observer?.unobserve(el)
  }

  const observeChildren = (container: Element) => {
    if (!isClient || typeof document === 'undefined') return

    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(VISIBLE_CLASS)
          }
        })
      }, defaultOptions)
    }

    Array.from(container.children).forEach((child) => observer!.observe(child))
  }

  const observeChildrenDynamic = (container: Element) => {
    const addNewChildren = () => {
      Array.from(container.children).forEach((child) => {
        if (!child.hasAttribute('data-scroll-observed')) {
          child.setAttribute('data-scroll-observed', 'true')
          observer?.observe(child)
        }
      })
    }

    if (!isClient || typeof document === 'undefined') return

    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(VISIBLE_CLASS)
          }
        })
      }, defaultOptions)
    }

    addNewChildren()

    const mutationObserver = new MutationObserver(() => {
      addNewChildren()
    })

    mutationObserver.observe(container, { childList: true, subtree: true })

    return () => mutationObserver.disconnect()
  }

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
  })

  return { observe, unobserve, observeChildren, observeChildrenDynamic }
}
