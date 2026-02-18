<template>
  <footer class="footer">
    <div class="footer__grid">
      <div
        v-for="column in FOOTER_COLUMNS"
        :key="column.heading"
        class="footer__column"
      >
        <h3 class="footer__heading">
          {{ column.heading }}
        </h3>
        <nav class="footer__links">
          <a
            v-for="link in column.links"
            :key="link.label"
            :href="link.href"
            class="footer__link"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FOOTER_COLUMNS } from '../config/constants'
</script>

<style lang="scss" scoped>
.footer {
  background: $color-bg-dark;
  @include padding($top: $spacing-footer-y, $right: $spacing-footer-x, $bottom: $spacing-footer-y, $left: $spacing-footer-x);
  @include margin($top: auto);

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @include gap($spacing-xl);
    margin: 0 auto;
  }

  &__heading {
    font-family: $font-family-base;
    font-weight: $font-weight-regular;
    font-size: $font-size-sm;
    line-height: $line-height-base;
    color: $color-footer-heading;
    @include margin($top: 0, $bottom: $font-size-sm);
  }

  &__links {
    @include flex-col($gap: $font-size-sm);
  }

  &__link {
    font-family: $font-family-base;
    font-weight: $font-weight-regular;
    font-size: $font-size-sm;
    line-height: $line-height-base;
    color: $color-white;
    text-decoration: none;
    transition: color 0.25s ease;
    width: fit-content;

    &:hover {
      color: $color-accent;
    }
  }

  @include media('md') {
    @include padding($top: $spacing-footer-y, $right: $spacing-mobile-x, $bottom: $spacing-footer-y, $left: $spacing-mobile-x);

    &__grid {
      grid-template-columns: repeat(2, 1fr);
      @include gap($spacing-footer-y);
    }
  }

  @include media('sm') {
    &__grid {
      grid-template-columns: 1fr;
      @include gap($spacing-footer-y);
    }
  }
}
</style>
