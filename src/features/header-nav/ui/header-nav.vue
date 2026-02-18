<template>
  <nav class="header-nav">
    <template
      v-for="link in HEADER_NAV_LINKS"
      :key="link.label"
    >
      <a
        :href="link.href"
        class="header-nav__link"
      >
        {{ link.label }}
      </a>
    </template>
  </nav>
</template>

<script setup lang="ts">
import { HEADER_NAV_LINKS } from '../config/constants'
</script>

<style lang="scss" scoped>
.header-nav {
  @include flex-row($gap: $spacing-nav-gap);
  @include padding($top: $spacing-nav-y, $right: $spacing-lg, $bottom: $spacing-nav-y, $left: $spacing-lg);
  background: $color-bg-light;
  @include backdrop-blur(100px);

  &__link {
    position: relative;
    font-family: $font-family-base;
    font-weight: $font-weight-regular;
    font-size: $font-size-sm;
    line-height: $line-height-sm;
    color: $color-black;
    text-decoration: none;
    transition: color 0.25s ease;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 1px;
      background: $color-accent;
      transform: scaleX(0);
      transition: transform 0.25s ease;
    }

    &:hover {
      color: $color-text-primary;

      &::after {
        transform: scaleX(1);
      }
    }
  }
}
</style>
