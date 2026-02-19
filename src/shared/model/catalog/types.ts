import type { Product } from '@/entities/product'
import type { Ref } from 'vue'

export interface CatalogState {
  products: Ref<Product[]>
  currentPage: Ref<number>
  totalPages: Ref<number>
  error: Ref<boolean>
  fetchProducts: (page: number, limit: number) => Promise<void>
  limit: number
  fetchError: Ref<unknown>
  pending?: Ref<boolean>
}
