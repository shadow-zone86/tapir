import { describe, it, expect, vi } from 'vitest'
import { createGetProductsService } from './getProductsService'
import type { ProductsResponseApi } from '../model/types'

describe('createGetProductsService', () => {
  it('get вызывает fetchFn с верным URL и params', async () => {
    const mockResponse: ProductsResponseApi = {
      total: 1,
      totalPages: 1,
      currentPage: 1,
      limit: 16,
      products: [{ id: 1, name: 'A', price: 100, image: '' }]
    }
    const fetchFn = vi.fn().mockResolvedValue(mockResponse)
    const service = createGetProductsService(fetchFn, 'https://api.example.com')

    const result = await service.get(2, 10)

    expect(fetchFn).toHaveBeenCalledTimes(1)
    expect(fetchFn).toHaveBeenCalledWith('https://api.example.com/products', {
      params: { page: 2, limit: 10 }
    })
    expect(result).toEqual(mockResponse)
  })

  it('get возвращает данные от fetchFn', async () => {
    const mockResponse: ProductsResponseApi = {
      total: 0,
      totalPages: 0,
      currentPage: 1,
      limit: 16,
      products: []
    }
    const fetchFn = vi.fn().mockResolvedValue(mockResponse)
    const service = createGetProductsService(fetchFn, 'https://test.api')

    const result = await service.get(1, 16)

    expect(result).toEqual(mockResponse)
    expect(result.products).toHaveLength(0)
  })

  it('get пробрасывает ошибку при reject fetchFn', async () => {
    const fetchFn = vi.fn().mockRejectedValue(new Error('Network error'))
    const service = createGetProductsService(fetchFn, 'https://api.example.com')

    await expect(service.get(1, 16)).rejects.toThrow('Network error')
  })
})
