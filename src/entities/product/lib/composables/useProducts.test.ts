import { describe, it, expect } from 'vitest'
import { useProducts } from './useProducts'

describe('useProducts', () => {
  it('priceX2 возвращает половину цены, округлённую вверх', () => {
    const { priceX2 } = useProducts()
    expect(priceX2(100)).toBe(50)
    expect(priceX2(101)).toBe(51)
    expect(priceX2(99)).toBe(50)
  })

  it('priceX2 для нуля возвращает 0', () => {
    const { priceX2 } = useProducts()
    expect(priceX2(0)).toBe(0)
  })

  it('priceX2 для нечётной цены округляет вверх', () => {
    const { priceX2 } = useProducts()
    expect(priceX2(1)).toBe(1)
    expect(priceX2(3)).toBe(2)
    expect(priceX2(199)).toBe(100)
  })
})
