<template>
  <a href="#" class="header-burger" aria-label="Меню">
    <span
      v-for="n in 3"
      :key="n"
      class="header-burger__line"
    />
  </a>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header-burger {
  @include flex-col($gap: $spacing-xs);
  background: $color-bg-light;
  border: none;
  cursor: pointer;
  text-decoration: none;
  @include padding($top: 0.71875rem, $right: 0.8984375rem, $bottom: 0.71875rem, $left: 0.8984375rem);

  &__line {
    width: 1.0625rem;
    height: 0.125rem;
    background: $color-text-primary;
  }
}
</style>
