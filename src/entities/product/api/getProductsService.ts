import type { ProductsResponseApi, IGetProductsService } from '../model/types'

export type GetProductsFetchFn = (
  url: string,
  options?: { params?: { page: number; limit: number } }
) => Promise<ProductsResponseApi>

export function createGetProductsService(
  fetchFn: GetProductsFetchFn,
  baseUrl: string
): IGetProductsService {
  return {
    async get(page: number, limit: number): Promise<ProductsResponseApi> {
      const data = await fetchFn(`${baseUrl}/products`, { params: { page, limit } })
      return data
    }
  }
}
