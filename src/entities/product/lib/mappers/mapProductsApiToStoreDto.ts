import type { ProductsResponseApi } from '../../model/types'
import type { ProductDto, ProductsResponseDto } from '../../model/types.dto'

function mapProductApiToDto(api: ProductsResponseApi['products'][number]): ProductDto {
  const priceX2: number = Math.ceil(api.price / 2)
  return {
    id: api.id,
    name: api.name,
    price: api.price,
    image: api.image,
    formattedPrice: `${api.price.toLocaleString('ru-RU')} ₽`,
    priceX2Formatted: `${priceX2.toLocaleString('ru-RU')} ₽ × 2`
  }
}

export function mapProductsApiToStoreDto(
  api: ProductsResponseApi | null | undefined
): ProductsResponseDto | null {
  if (!api) return null
  return {
    products: api.products.map(mapProductApiToDto),
    totalPages: api.totalPages,
    currentPage: api.currentPage
  }
}
