import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { usePageLoad } from './usePageLoad'

const TestWrapper = defineComponent({
  setup() {
    const { isLoading } = usePageLoad()
    return () => h('div', { 'data-loading': isLoading.value })
  }
})

describe('usePageLoad', () => {
  let addEventListenerSpy: ReturnType<typeof vi.spyOn>
  let removeEventListenerSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    vi.useFakeTimers()
    addEventListenerSpy = vi.spyOn(window, 'addEventListener')
    removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
  })

  afterEach(() => {
    vi.useRealTimers()
    addEventListenerSpy?.mockRestore()
    removeEventListenerSpy?.mockRestore()
  })

  it('возвращает isLoading true изначально', () => {
    Object.defineProperty(document, 'readyState', { value: 'loading', configurable: true })
    const wrapper = mount(TestWrapper)
    expect(wrapper.attributes('data-loading')).toBe('true')
    wrapper.unmount()
  })

  it('при readyState complete выставляет isLoading false через 150ms', async () => {
    Object.defineProperty(document, 'readyState', { value: 'complete', configurable: true })
    const wrapper = mount(TestWrapper)
    expect(wrapper.attributes('data-loading')).toBe('true')
    await vi.advanceTimersByTimeAsync(150)
    expect(wrapper.attributes('data-loading')).toBe('false')
    wrapper.unmount()
  })

  it('при readyState не complete вешает listener на load и по load выставляет false через 150ms', async () => {
    Object.defineProperty(document, 'readyState', { value: 'loading', configurable: true })
    const wrapper = mount(TestWrapper)
    const loadHandler = addEventListenerSpy.mock.calls.find(
      (c) => c[0] === 'load'
    )?.[1] as () => void
    expect(loadHandler).toBeDefined()
    loadHandler()
    await vi.advanceTimersByTimeAsync(150)
    expect(wrapper.attributes('data-loading')).toBe('false')
    wrapper.unmount()
  })

  it('при отсутствии load через 5000ms выставляет isLoading false', async () => {
    Object.defineProperty(document, 'readyState', { value: 'loading', configurable: true })
    const wrapper = mount(TestWrapper)
    await vi.advanceTimersByTimeAsync(5000)
    expect(wrapper.attributes('data-loading')).toBe('false')
    wrapper.unmount()
  })

  it('при unmount снимает listener load и очищает таймаут', () => {
    Object.defineProperty(document, 'readyState', { value: 'loading', configurable: true })
    const wrapper = mount(TestWrapper)
    wrapper.unmount()
    expect(removeEventListenerSpy).toHaveBeenCalledWith('load', expect.any(Function))
  })
})
