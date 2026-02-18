<template>
  <div class="home">
    <section class="home__hero" data-aos="fade-up">
      <h1 class="home__title">ТЕСТОВОЕ ЗАДАНИЕ</h1>
      <NuxtLink to="/catalog" class="home__btn home__btn--catalog">
        В каталог
      </NuxtLink>
    </section>
  </div>
</template>


<style lang="scss" scoped>
.home {
  min-height: 44.8125rem;
  @include padding($top: $spacing-catalog-x, $right: $spacing-catalog-x, $bottom: $spacing-catalog-x, $left: $spacing-catalog-x);
  @include flex-col($justify: center);

  @include media('md') {
    @include padding($top: $spacing-catalog-x, $right: $spacing-mobile-x, $bottom: $spacing-catalog-x, $left: $spacing-mobile-x);
  }

  &__hero {
    @include flex-col($align: flex-start);
    padding: $spacing-3xl 0;
  }

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

  &__btn {
    display: inline-block;
    text-decoration: none;
    font-weight: $font-weight-medium;

    &--catalog {
      font-family: $font-family-base;
      font-weight: $font-weight-regular;
      font-size: $font-size-sm;
      line-height: $line-height-sm;
      padding: $spacing-nav-y $spacing-lg;
      background: $color-red;
      color: $color-white;
      transition: background-color 0.25s ease, opacity 0.25s ease;

      &:hover {
        background-color: $color-red-hover;
        opacity: 0.95;
      }
    }
  }
}
</style>
