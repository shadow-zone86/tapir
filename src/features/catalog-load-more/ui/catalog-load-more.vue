<template>
  <div v-if="showMoreVisible || loadingMore" class="catalog-load-more">
    <Button
      v-if="!loadingMore"
      variant="outline"
      @click="loadMore"
    >
      Показать ещё
    </Button>
    <p v-else class="catalog-load-more__loading">
      Загрузка<span class="catalog-load-more__loading-dots">{{ loadingDots }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/entities/product'
import { Button } from '@/shared/ui/button'
import type { Ref } from 'vue'
import { LOADING_DELAY_MS } from '../config/constants'

interface CatalogState {
  products: Ref<Product[]>
  currentPage: Ref<number>
  totalPages: Ref<number>
  error: Ref<boolean>
  fetchProducts: (page: number, limit: number) => Promise<void>
  limit: number
  pending: Ref<boolean>
  fetchError: Ref<unknown>
}

const props = defineProps<{ catalogState: CatalogState }>()

const state = toRef(props, 'catalogState')

const loadingMore = ref<boolean>(false)
const loadingDots = ref<string>('.')

let dotsInterval: ReturnType<typeof setInterval> | null = null

const hasError = computed(() => state.value.error.value || !!state.value.fetchError.value)

const showMoreVisible = computed(
  () =>
    !state.value.pending.value &&
    state.value.products.value.length > 0 &&
    state.value.currentPage.value < state.value.totalPages.value &&
    !loadingMore.value &&
    !hasError.value
)

async function loadMore(): Promise<void> {
  loadingMore.value = true
  state.value.error.value = false
  try {
    const nextPage = state.value.currentPage.value + 1
    await Promise.all([
      state.value.fetchProducts(nextPage, state.value.limit),
      new Promise(resolve => setTimeout(resolve, LOADING_DELAY_MS))
    ])
  } catch {
    state.value.error.value = true
  } finally {
    loadingMore.value = false
    nextTick(() => useNuxtApp().$refreshAos?.())
  }
}

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
</script>

<style lang="scss" scoped>
.catalog-load-more {
  @include flex-row($justify: center);
  @include padding($top: $spacing-base, $bottom: $spacing-base);

  &__loading {
    margin: 0;
    color: $color-text-muted;
  }

  &__loading-dots {
    display: inline-block;
    min-width: 1.5em;
    text-align: left;
  }
}
</style>
