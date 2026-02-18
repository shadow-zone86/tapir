<template>
  <section class="home-hero" data-aos="fade-up">
    <h1 class="home-hero__title">
      {{ title }}
    </h1>
    <Button variant="primary" to="/catalog">
      В каталог
    </Button>
  </section>
</template>

<script setup lang="ts">
import { Button } from '@/shared/ui/button'

interface HomeHeroProps {
  title?: string
}

withDefaults(defineProps<HomeHeroProps>(), {
  title: 'ТЕСТОВОЕ ЗАДАНИЕ',
})
</script>

<style lang="scss" scoped>
.home-hero {
  @include flex-col($align: flex-start);
  padding: $spacing-3xl 0;

  &__title {
    font-family: $font-family-base;
    font-weight: $font-weight-medium;
    font-size: $font-size-2xl;
    line-height: $line-height-tight;
    text-transform: uppercase;
    margin: 0 0 $spacing-nav-gap;
    color: $color-black;

    @include media('md') {
      font-size: clamp(1rem, 6.5vw, $font-size-title-mobile);
      line-height: $line-height-tight;
      max-width: 6.5em;
    }
  }
}
</style>
