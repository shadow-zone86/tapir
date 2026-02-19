<template>
  <div v-if="hasError" class="catalog-retry">
    <p class="catalog-retry__text">
      Произошла ошибка, попробуйте позже
    </p>
    <Button variant="outline" @click="retry">
      Повторить
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/shared/ui/button'
import { LOADING_DELAY_MS } from '@/shared/config'
import type { CatalogState } from '@/shared/model/catalog/types'

interface CatalogRetryProps {
  catalogState: CatalogState
}

const props = defineProps<CatalogRetryProps>()

const state = toRef(props, 'catalogState')

const hasError = computed(() => state.value.error.value || !!state.value.fetchError.value)

async function retry(): Promise<void> {
  state.value.error.value = false
  try {
    const pageToFetch = state.value.products.value.length > 0 ? state.value.currentPage.value + 1 : 1
    await Promise.all([
      state.value.fetchProducts(pageToFetch, state.value.limit),
      new Promise(resolve => setTimeout(resolve, LOADING_DELAY_MS))
    ])
  } catch {
    state.value.error.value = true
  } finally {
    nextTick(() => useNuxtApp().$refreshAos?.())
  }
}
</script>

<style lang="scss" scoped>
.catalog-retry {
  @include flex-col($align: center, $gap: $spacing-base);
  @include padding($top: $spacing-xl, $right: $spacing-xl, $bottom: $spacing-xl, $left: $spacing-xl);

  &__text {
    margin: 0;
    font-family: $font-family-base;
    font-size: $font-size-lg;
    font-weight: $font-weight-regular;
    color: $color-black;
    text-align: center;
  }
}
</style>
