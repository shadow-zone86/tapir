export interface ProductDto {
  id: number
  name: string
  price: number
  image: string
  formattedPrice: string
  priceX2Formatted: string
}

export interface ProductsResponseDto {
  products: ProductDto[]
  totalPages: number
  currentPage: number
}
