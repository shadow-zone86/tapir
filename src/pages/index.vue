<template>
  <div class="home">
    <HomeHero />
  </div>
</template>

<script setup lang="ts">
import { HomeHero } from '@/widgets/home-hero'

useSeoMeta({
  title: 'Главная — Tapir'
})
</script>

<style lang="scss" scoped>
.home {
  min-height: 44.8125rem;
  @include padding($top: $spacing-catalog-x, $right: $spacing-catalog-x, $bottom: $spacing-catalog-x, $left: $spacing-catalog-x);
  @include flex-col($justify: center);

  @include media('md') {
    @include padding($top: $spacing-catalog-x, $right: $spacing-mobile-x, $bottom: $spacing-catalog-x, $left: $spacing-mobile-x);
  }
}
</style>
