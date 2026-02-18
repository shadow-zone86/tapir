<template>
  <span class="product-favorite" aria-hidden="true" @click.prevent="onClick">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  </span>
</template>

<script setup lang="ts">
import type { Product } from '@/entities/product'

interface ProductFavoriteProps {
  product: Product
}

interface ProductFavoriteEmits {
  click: [product: Product]
}

const props = defineProps<ProductFavoriteProps>()
const emit = defineEmits<ProductFavoriteEmits>()

function onClick(): void {
  emit('click', props.product)
}
</script>

<style lang="scss" scoped>
.product-favorite {
  display: inline-flex;
  line-height: 1;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: $color-accent;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @include media('sm') {
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
