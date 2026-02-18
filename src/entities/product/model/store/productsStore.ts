import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { ProductDto } from '../types.dto'
import { mapProductsApiToStoreDto } from '../../lib/mappers'

export const useProductsStore = defineStore('products', () => {
  const products = ref<ProductDto[]>([])
  const currentPage = ref<number>(1)
  const totalPages = ref<number>(1)
  const error = ref<boolean>(false)
  const isLoading = ref<boolean>(false)

  const hasError = computed(() => error.value)

  function setError(value: boolean): void {
    error.value = value
  }

  async function fetch(page: number, limit: number): Promise<void> {
    const service = useNuxtApp().$getProductsService
    isLoading.value = true
    error.value = false
    try {
      const response = await service.get(page, limit)
      const mapped = mapProductsApiToStoreDto(response)
      if (!mapped) return
      if (page === 1) {
        products.value = mapped.products
        currentPage.value = mapped.currentPage
        totalPages.value = mapped.totalPages
      } else {
        products.value = [...products.value, ...mapped.products]
        currentPage.value = mapped.currentPage
        totalPages.value = mapped.totalPages
      }
    } catch {
      error.value = true
    } finally {
      isLoading.value = false
    }
  }

  return {
    products,
    currentPage,
    totalPages,
    error,
    isLoading,
    hasError,
    setError,
    fetch
  }
})
