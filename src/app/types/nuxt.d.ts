import type { IGetProductsService } from '@/entities/product'

declare module '#app' {
  interface NuxtApp {
    $getProductsService: IGetProductsService
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $getProductsService: IGetProductsService
  }
}

export {}
