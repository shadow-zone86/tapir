<template>
  <div class="catalog">
    <h1 class="catalog__title" data-aos="fade-up">КАТАЛОГ</h1>
    <div v-if="products.length" class="catalog__grid">
      <div
        v-for="(product, index) in products"
        :key="product.id"
        class="catalog__card"
        data-aos="fade-up"
        :data-aos-delay="(index % 2) * 80 + Math.floor(index / 2) * 40"
      >
        <ProductCard :product="product" />
      </div>
    </div>
    <div v-else-if="!pending && !error" class="catalog__empty">
      Нет товаров
    </div>

    <div v-if="showMoreVisible || loadingMore" class="catalog__load-more">
      <button
        v-if="!loadingMore"
        type="button"
        class="catalog__btn catalog__btn--show-more"
        @click="loadMore"
      >
        Показать ещё
      </button>
      <p v-else class="catalog__loading">
        Загрузка<span class="catalog__loading-dots">{{ loadingDots }}</span>
      </p>
    </div>

    <div v-if="hasError" class="catalog__error">
      <p class="catalog__error-text">Произошла ошибка, попробуйте позже</p>
      <button
        type="button"
        class="catalog__btn catalog__btn--retry"
        @click="retry"
      >
        Повторить
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/composables/useProducts'

definePageMeta({
  layout: 'default'
})

const { fetchProducts } = useProducts()
const limit = 16

const products = ref<Product[]>([])
const currentPage = ref(1)
const totalPages = ref(1)
const loadingMore = ref(false)
const error = ref(false)
const loadingDots = ref('.')

let dotsInterval: ReturnType<typeof setInterval> | null = null

watch(loadingMore, (isLoading) => {
  if (isLoading) {
    let count = 1
    loadingDots.value = '.'
    dotsInterval = setInterval(() => {
      count = (count % 3) + 1
      loadingDots.value = '.'.repeat(count)
    }, 400)
  } else if (dotsInterval) {
    clearInterval(dotsInterval)
    dotsInterval = null
  }
})

onBeforeUnmount(() => {
  if (dotsInterval) {
    clearInterval(dotsInterval)
  }
})

const { data, pending, error: fetchError } = await useAsyncData(
  'catalog-products',
  () => fetchProducts(1, limit),
  { server: true }
)

const hasError = computed(() => error.value || !!fetchError.value)

watch(
  data,
  (result) => {
    if (result?.products) {
      products.value = result.products
      totalPages.value = result.totalPages
      currentPage.value = 1
      error.value = false
    }
  },
  { immediate: true }
)

watch(fetchError, (err) => {
  if (err) error.value = true
})

const showMoreVisible = computed(
  () => !pending.value && products.value.length > 0 && currentPage.value < totalPages.value && !loadingMore.value && !hasError.value
)

const LOADING_DELAY_MS = 800

async function loadMore(): Promise<void> {
  loadingMore.value = true
  error.value = false
  try {
    const nextPage = currentPage.value + 1
    const [result] = await Promise.all([
      fetchProducts(nextPage, limit),
      new Promise(resolve => setTimeout(resolve, LOADING_DELAY_MS))
    ])
    products.value = [...products.value, ...result.products]
    currentPage.value = nextPage
  } catch {
    error.value = true
  } finally {
    loadingMore.value = false
    nextTick(() => useNuxtApp().$refreshAos?.())
  }
}

async function retry(): Promise<void> {
  error.value = false
  loadingMore.value = true
  try {
    const pageToFetch = products.value.length > 0 ? currentPage.value + 1 : 1
    const [result] = await Promise.all([
      fetchProducts(pageToFetch, limit),
      new Promise(resolve => setTimeout(resolve, LOADING_DELAY_MS))
    ])
    if (products.value.length > 0) {
      products.value = [...products.value, ...result.products]
      currentPage.value = pageToFetch
    } else {
      products.value = result.products
      totalPages.value = result.totalPages
      currentPage.value = 1
    }
  } catch {
    error.value = true
  } finally {
    loadingMore.value = false
    nextTick(() => useNuxtApp().$refreshAos?.())
  }
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

  &__load-more {
    @include flex-row($justify: center);
    @include padding($top: $spacing-base, $bottom: $spacing-base);
  }

  &__loading {
    margin: 0;
    color: $color-text-muted;
  }

  &__loading-dots {
    display: inline-block;
    min-width: 1.5em;
    text-align: left;
  }

  &__btn {
    padding: $spacing-md $spacing-xl;
    border: none;
    font-weight: $font-weight-medium;
    cursor: pointer;

    &--show-more {
      @include padding($top: $spacing-nav-y, $right: $spacing-lg, $bottom: $spacing-nav-y, $left: $spacing-lg);
      border: 1px solid $color-black;
      font-weight: $font-weight-regular;
      font-size: $font-size-sm;
      line-height: $line-height-sm;
      letter-spacing: 0;
      vertical-align: bottom;
      color: $color-black;
      background: transparent;

      &:hover {
        background: $color-overlay-light;
      }
    }

    &--retry {
      @include padding($top: $spacing-nav-y, $right: $spacing-lg, $bottom: $spacing-nav-y, $left: $spacing-lg);
      border: 1px solid $color-black;
      background: transparent;
      color: $color-black;
      font-weight: $font-weight-regular;
      font-size: $font-size-sm;

      &:hover {
        background: $color-overlay-light;
      }
    }
  }

  &__error {
    @include flex-col($align: center, $gap: $spacing-base);
    @include padding($top: $spacing-xl, $right: $spacing-xl, $bottom: $spacing-xl, $left: $spacing-xl);
  }

  &__error-text {
    margin: 0;
    font-family: $font-family-base;
    font-size: $font-size-lg;
    font-weight: $font-weight-regular;
    color: $color-black;
    text-align: center;
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
