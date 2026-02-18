import { describe, it, expect } from 'vitest'
import { mapProductsApiToStoreDto } from './mapProductsApiToStoreDto'
import type { ProductsResponseApi } from '../../model/types'

describe('mapProductsApiToStoreDto', () => {
  it('возвращает null для null', () => {
    expect(mapProductsApiToStoreDto(null)).toBe(null)
  })

  it('возвращает null для undefined', () => {
    expect(mapProductsApiToStoreDto(undefined)).toBe(null)
  })

  it('маппит ответ API в DTO с formattedPrice и priceX2Formatted', () => {
    const api: ProductsResponseApi = {
      total: 2,
      totalPages: 1,
      currentPage: 1,
      limit: 16,
      products: [
        { id: 1, name: 'Товар 1', price: 1234, image: '/1.jpg' },
        { id: 2, name: 'Товар 2', price: 99, image: '/2.jpg' }
      ]
    }
    const result = mapProductsApiToStoreDto(api)
    expect(result).not.toBe(null)
    expect(result!.totalPages).toBe(1)
    expect(result!.currentPage).toBe(1)
    expect(result!.products).toHaveLength(2)

    const product0 = result!.products[0]!
    const product1 = result!.products[1]!
    expect(product0.id).toBe(1)
    expect(product0.name).toBe('Товар 1')
    expect(product0.price).toBe(1234)
    expect(product0.image).toBe('/1.jpg')
    expect(product0.formattedPrice).toBe(`${(1234).toLocaleString('ru-RU')} ₽`)
    expect(product0.priceX2Formatted).toBe(`${Math.ceil(1234 / 2).toLocaleString('ru-RU')} ₽ × 2`)

    expect(product1.formattedPrice).toBe(`${(99).toLocaleString('ru-RU')} ₽`)
    expect(product1.priceX2Formatted).toBe(`${Math.ceil(99 / 2).toLocaleString('ru-RU')} ₽ × 2`)
  })

  it('возвращает пустой массив products при пустом списке в API', () => {
    const api: ProductsResponseApi = {
      total: 0,
      totalPages: 0,
      currentPage: 1,
      limit: 16,
      products: []
    }
    const result = mapProductsApiToStoreDto(api)
    expect(result).not.toBe(null)
    expect(result!.products).toEqual([])
    expect(result!.totalPages).toBe(0)
    expect(result!.currentPage).toBe(1)
  })
})
