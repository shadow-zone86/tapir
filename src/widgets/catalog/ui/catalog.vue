<template>
  <div class="catalog">
    <h1 class="catalog__title" data-aos="fade-up">
      {{ title }}
    </h1>
    <div v-if="store.products.length" class="catalog__grid">
      <div
        v-for="(product, index) in store.products"
        :key="product.id"
        class="catalog__card"
        data-aos="fade-up"
        :data-aos-delay="(index % 2) * 80 + Math.floor(index / 2) * 40"
      >
        <ProductCard :product="product">
          <template #favorite>
            <ProductFavorite :product="product" />
          </template>
        </ProductCard>
      </div>
    </div>
    <div v-else-if="!store.isLoading && !store.error" class="catalog__empty">
      Нет товаров
    </div>

    <CatalogLoadMore :catalog-state="catalogLoadMoreState" />

    <CatalogRetry :catalog-state="catalogRetryState" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProductsStore, ProductCard } from '@/entities/product'
import { ProductFavorite } from '@/features/product-favorite'
import { CatalogLoadMore } from '@/features/catalog-load-more'
import { CatalogRetry } from '@/features/catalog-retry'
import { CATALOG_PAGE_LIMIT } from '../config/constants'
import type { CatalogLoadMoreState, CatalogRetryState } from '../model/types'

interface CatalogProps {
  title?: string
}

withDefaults(defineProps<CatalogProps>(), {
  title: 'КАТАЛОГ',
})

const store = useProductsStore()
const { products, currentPage, totalPages, error, isLoading } = storeToRefs(store)
const limit = CATALOG_PAGE_LIMIT

const fetchError = ref<unknown>(null)

await useAsyncData('catalog-products', () => store.fetch(1, limit), {
  server: true
})

const catalogLoadMoreState: CatalogLoadMoreState = {
  products,
  currentPage,
  totalPages,
  error,
  fetchProducts: (page, lim) => store.fetch(page, lim),
  limit,
  pending: isLoading,
  fetchError
}

const catalogRetryState: CatalogRetryState = {
  products,
  currentPage,
  totalPages,
  error,
  fetchProducts: (page, lim) => store.fetch(page, lim),
  limit,
  fetchError
}
</script>

<style lang="scss" scoped>
.catalog {
  @include flex-col($gap: $spacing-catalog-gap);
  @include padding($top: $spacing-catalog-y, $right: $spacing-catalog-x, $bottom: $spacing-catalog-y, $left: $spacing-catalog-x);
  min-width: 0;
  width: 100%;

  &__title {
    font-family: $font-family-base;
    font-weight: $font-weight-medium;
    font-size: $font-size-catalog-title;
    line-height: $line-height-tight;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    color: $color-black;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax($spacing-card-max, 1fr));
    @include gap($spacing-grid-gap);
  }

  &__empty {
    text-align: center;
    padding: $spacing-2xl;
    color: $color-text-muted;
  }

  @include media('sm') {
    @include padding($top: $spacing-mobile-x, $right: $spacing-mobile-x, $bottom: $spacing-mobile-x, $left: $spacing-mobile-x);
    @include gap($spacing-grid-gap);

    &__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      @include gap($spacing-mobile-x);
      max-width: $spacing-catalog-grid-max;
      margin: 0 auto;
    }
  }
}
</style>
