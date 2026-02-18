import type { Product } from '@/entities/product'
import type { Ref } from 'vue'

export interface CatalogLoadMoreState {
  products: Ref<Product[]>
  currentPage: Ref<number>
  totalPages: Ref<number>
  error: Ref<boolean>
  fetchProducts: (page: number, limit: number) => Promise<void>
  limit: number
  pending: Ref<boolean>
  fetchError: Ref<unknown>
}

export interface CatalogRetryState {
  products: Ref<Product[]>
  currentPage: Ref<number>
  totalPages: Ref<number>
  error: Ref<boolean>
  fetchProducts: (page: number, limit: number) => Promise<void>
  limit: number
  fetchError: Ref<unknown>
}
