<template>
  <a href="#" class="product-card">
    <div class="product-card__image-wrap">
      <div
        v-show="!imageLoaded"
        class="product-card__skeleton"
        aria-hidden="true"
      />
      <img
        ref="imgRef"
        :src="product.image"
        :alt="product.name"
        class="product-card__image"
        :class="{ 'product-card__image--loaded': imageLoaded }"
        loading="lazy"
        @load="imageLoaded = true"
        @error="imageLoaded = true"
      />
      <span class="product-card__favorite" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </span>
    </div>
    <div class="product-card__prices">
      <span class="product-card__price product-card__price--main">
        {{ formattedPrice }} ₽
      </span>
      <span class="product-card__price product-card__price--x2">
        {{ priceX2Value }} ₽ × 2
      </span>
    </div>
    <p class="product-card__name">{{ product.name }}</p>
  </a>
</template>

<script setup lang="ts">
import type { Product } from '~/composables/useProducts'

const props = defineProps<{
  product: Product
}>()

const { priceX2 } = useProducts()
const imageLoaded = ref(false)
const imgRef = ref<HTMLImageElement | null>(null)

watch(() => props.product.image, () => {
  imageLoaded.value = false
})

onMounted(() => {
  nextTick(() => {
    if (imgRef.value?.complete && imgRef.value.naturalHeight > 0) {
      imageLoaded.value = true
    }
  })
})

const priceX2Value = computed(() =>
  priceX2(props.product.price).toLocaleString('ru-RU')
)
const formattedPrice = computed(() =>
  props.product.price.toLocaleString('ru-RU')
)
</script>

<style lang="scss" scoped>
.product-card {
  display: block;
  max-width: $spacing-card-max;
  text-decoration: none;
  color: inherit;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-$spacing-xs);
    box-shadow: 0 $spacing-xs $spacing-md $color-overlay-medium;
  }

  &__image-wrap {
    width: $spacing-card-max;
    height: 11.25rem;
    position: relative;
    aspect-ratio: 1;
    border-radius: $spacing-card-radius;
    overflow: hidden;
    @include margin($bottom: $spacing-card-image);
    background: $color-bg-light;
  }

  &__skeleton {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      $color-bg-light 0%,
      $color-border 50%,
      $color-bg-light 100%
    );
    background-size: 200% 100%;
    animation: product-card-skeleton 1.5s ease-in-out infinite;
  }

  &__image {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    &--loaded {
      opacity: 1;
    }
  }

  &__favorite {
    position: absolute;
    top: $spacing-md;
    right: $spacing-md;
    @include flex-row;
    color: $color-black;
    line-height: 1;
    z-index: 1;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: $color-accent;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  &__prices {
    @include flex-row($align: center, $gap: $spacing-card-prices-gap);
    @include margin($bottom: $spacing-xs);
  }

  &__price {
    &--main {
      font-weight: $font-weight-medium;
      font-size: $font-size-md;
      line-height: 140%;
      letter-spacing: 0;
      vertical-align: middle;
      color: $color-black;
    }

    &--x2 {
      font-weight: $font-weight-medium;
      font-size: $font-size-sm;
      line-height: 100%;
      letter-spacing: -0.05em;
      vertical-align: bottom;
      @include padding($top: $spacing-xs, $right: $spacing-xs, $bottom: $spacing-xs, $left: $spacing-xs);
      background: $color-black;
      box-shadow: 0 $spacing-xs $spacing-xs 0 $color-shadow-black;
      color: $color-white;
    }
  }

  @keyframes product-card-skeleton {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  &__name {
    font-weight: $font-weight-regular;
    font-size: $font-size-base;
    line-height: $line-height-base;
    letter-spacing: 0;
    vertical-align: bottom;
    color: $color-black;
    margin: 0;
  }

  @include media('sm') {
    max-width: $spacing-card-mobile-max;
    width: 100%;
    min-width: 0;

    &__image-wrap {
      width: 100%;
      aspect-ratio: 1;
      height: auto;
      @include margin($bottom: $spacing-sm);
      overflow: hidden;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }

    &__favorite svg {
      width: 1rem;
      height: 1rem;
    }

    &__prices {
      @include flex-col($align: flex-start, $gap: $spacing-card-mobile-gap);
      @include margin($bottom: $spacing-xs);
    }

    &__price--main {
      font-weight: $font-weight-medium;
      font-size: $font-size-md;
      line-height: $line-height-base;
      letter-spacing: 0;
      vertical-align: middle;
      color: $color-black;
    }

    &__price--x2 {
      font-weight: $font-weight-medium;
      font-size: $font-size-sm;
      line-height: 100%;
      letter-spacing: -0.05em;
      vertical-align: bottom;
      @include padding($top: $spacing-xs, $right: $spacing-xs, $bottom: $spacing-xs, $left: $spacing-xs);
      background: $color-black;
      color: $color-white;
    }

    &__name {
      font-weight: $font-weight-regular;
      font-size: $font-size-xs;
      line-height: $line-height-base;
      letter-spacing: 0;
      vertical-align: bottom;
      color: $color-black;
    }
  }
}
</style>
