import { describe, it, expect, vi, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProductsStore } from './productsStore'
import type { ProductsResponseApi } from '../../model/types'

const mockApiResponse: ProductsResponseApi = {
  total: 1,
  totalPages: 1,
  currentPage: 1,
  limit: 16,
  products: [{ id: 1, name: 'A', price: 100, image: '' }]
}

describe('productsStore', () => {
  let mockFetch: ReturnType<typeof vi.fn>

  beforeEach(() => {
    setActivePinia(createPinia())
    mockFetch = vi.fn()
    vi.stubGlobal('useRequestFetch', () => mockFetch)
  })

  it('имеет начальное состояние', () => {
    const store = useProductsStore()
    expect(store.products).toEqual([])
    expect(store.currentPage).toBe(1)
    expect(store.totalPages).toBe(1)
    expect(store.error).toBe(false)
    expect(store.isLoading).toBe(false)
    expect(store.hasError).toBe(false)
  })

  it('setError устанавливает error', () => {
    const store = useProductsStore()
    store.setError(true)
    expect(store.error).toBe(true)
    expect(store.hasError).toBe(true)
  })

  it('fetch при page 1 заменяет products и обновляет пагинацию', async () => {
    const store = useProductsStore()
    mockFetch.mockResolvedValue(mockApiResponse)
    await store.fetch(1, 16)
    expect(store.products).toHaveLength(1)
    expect(store.products[0]!.id).toBe(1)
    expect(store.products[0]!.name).toBe('A')
    expect(store.currentPage).toBe(1)
    expect(store.totalPages).toBe(1)
    expect(store.isLoading).toBe(false)
    expect(store.error).toBe(false)
  })

  it('fetch при page > 1 дополняет products', async () => {
    const store = useProductsStore()
    mockFetch
      .mockResolvedValueOnce({
        ...mockApiResponse,
        products: [{ id: 1, name: 'A', price: 100, image: '' }],
        currentPage: 1,
        totalPages: 2
      })
      .mockResolvedValueOnce({
        ...mockApiResponse,
        products: [{ id: 2, name: 'B', price: 200, image: '' }],
        currentPage: 2,
        totalPages: 2
      })
    await store.fetch(1, 16)
    expect(store.products).toHaveLength(1)
    await store.fetch(2, 16)
    expect(store.products).toHaveLength(2)
    expect(store.products[1]!.name).toBe('B')
    expect(store.currentPage).toBe(2)
  })

  it('fetch устанавливает error при ошибке', async () => {
    const store = useProductsStore()
    mockFetch.mockRejectedValue(new Error('Network error'))
    await store.fetch(1, 16)
    expect(store.error).toBe(true)
    expect(store.products).toEqual([])
    expect(store.isLoading).toBe(false)
  })
})
