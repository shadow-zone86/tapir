import { createGetProductsService } from '@/entities/product/api/getProductsService'
import { API_BASE } from '@/shared/config'

export default defineNuxtPlugin(() => {
  const fetch = useRequestFetch()
  const service = createGetProductsService(fetch, API_BASE)
  return {
    provide: {
      getProductsService: service
    }
  }
})
