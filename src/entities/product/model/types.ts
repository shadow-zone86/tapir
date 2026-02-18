export interface ProductApi {
  id: number
  name: string
  price: number
  image: string
}

export interface ProductsResponseApi {
  total: number
  totalPages: number
  currentPage: number
  limit: number
  products: ProductApi[]
}

export interface IGetProductsService {
  get(page: number, limit: number): Promise<ProductsResponseApi>
}
