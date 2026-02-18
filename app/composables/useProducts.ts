const API_BASE = 'https://test-task-api.tapir.ws'

export interface Product {
  id: number
  name: string
  price: number
  image: string
}

export interface ProductsResponse {
  total: number
  totalPages: number
  currentPage: number
  limit: number
  products: Product[]
}

export function useProducts() {
  const fetchProducts = async (page: number, limit = 16) => {
    const data = await $fetch<ProductsResponse>(
      `${API_BASE}/products`,
      { params: { page, limit } }
    )
    return data
  }

  const priceX2 = (price: number) => Math.ceil(price / 2)

  return { fetchProducts, priceX2 }
}
