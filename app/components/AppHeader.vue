<template>
  <header class="header">
    <a href="/" class="header__logo" aria-label="Логотип" />
    <nav class="header__nav">
      <a href="#" class="header__link">Мужчинам</a>
      <a href="#" class="header__link">Женщинам</a>
      <NuxtLink to="/catalog" class="header__link">Каталог</NuxtLink>
      <a href="#" class="header__link">Доставка</a>
      <a href="#" class="header__link">Блог</a>
      <a href="#" class="header__link">О нас</a>
    </nav>
    <button type="button" class="header__burger" aria-label="Меню">
      <span class="header__burger-line" />
      <span class="header__burger-line" />
      <span class="header__burger-line" />
    </button>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  @include padding($top: $spacing-header-y, $right: $spacing-catalog-x, $bottom: $spacing-header-y, $left: $spacing-catalog-x);
  background: $color-bg;

  &__logo {
    width: 2.5rem;
    height: 2.5rem;
    background: $color-accent;
    flex-shrink: 0;
  }

  &__nav {
    @include flex-row($gap: $spacing-nav-gap);
    @include padding($top: $spacing-nav-y, $right: $spacing-lg, $bottom: $spacing-nav-y, $left: $spacing-lg);
    background: $color-bg-light;
    @include backdrop-blur(100px);
  }

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

  &__burger {
    display: none;
    justify-self: end;
    @include flex-col($gap: $spacing-xs);
    background: $color-bg-light;
    border: none;
    cursor: pointer;
    @include padding($top: 0.71875rem, $right: 0.8984375rem, $bottom: 0.71875rem, $left: 0.8984375rem);
  }

  &__burger-line {
    width: 1.0625rem;
    height: 0.125rem;
    background: $color-text-primary;
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
