<template>
  <footer class="footer">
    <div class="footer__grid">
      <div class="footer__column">
        <h3 class="footer__heading">Каталог</h3>
        <nav class="footer__links">
          <a href="#" class="footer__link">Все бренды</a>
          <a href="#" class="footer__link">Nike</a>
          <a href="#" class="footer__link">Adidas</a>
          <a href="#" class="footer__link">Puma</a>
          <a href="#" class="footer__link">New Balance</a>
        </nav>
      </div>
      <div class="footer__column">
        <h3 class="footer__heading">Помощь</h3>
        <nav class="footer__links">
          <a href="#" class="footer__link">Доставка</a>
          <a href="#" class="footer__link">Заказ и оплата</a>
          <a href="#" class="footer__link">Обмен и Возврат</a>
          <a href="#" class="footer__link">F. A. Q.</a>
        </nav>
      </div>
      <div class="footer__column">
        <h3 class="footer__heading">Информация</h3>
        <nav class="footer__links">
          <a href="#" class="footer__link">Преимущества</a>
          <a href="#" class="footer__link">Гарантия и безопасность</a>
          <a href="#" class="footer__link">Индивидуальный заказ</a>
          <a href="#" class="footer__link">Акции</a>
        </nav>
      </div>
      <div class="footer__column">
        <h3 class="footer__heading">Компания</h3>
        <nav class="footer__links">
          <a href="#" class="footer__link">О нас</a>
          <a href="#" class="footer__link">Блог</a>
          <a href="#" class="footer__link">Отзывы</a>
          <a href="#" class="footer__link">Контакты</a>
        </nav>
      </div>
    </div>
  </footer>
</template>

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
