<template>
  <header class="header">
    <HeaderLogo class="header__logo" />
    <HeaderNav class="header__nav" />
    <HeaderBurger class="header__burger" />
  </header>
</template>

<script setup lang="ts">
import { HeaderLogo } from '@/features/header-logo'
import { HeaderNav } from '@/features/header-nav'
import { HeaderBurger } from '@/features/header-burger'
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  @include padding($top: $spacing-header-y, $right: $spacing-catalog-x, $bottom: $spacing-header-y, $left: $spacing-catalog-x);
  background: $color-bg;

  &__burger {
    justify-self: end;
    display: none;
  }

  @include media('md') {
    grid-template-columns: 1fr auto;
    padding: $spacing-header-mobile-y $spacing-mobile-x;

    &__nav {
      display: none;
    }

    &__burger {
      display: flex;
    }
  }
}
</style>
