<template>
  <div class="layout">
    <AppHeader />
    <main class="layout__main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  @include flex-col;

  &__main {
    flex: 1;
  }
}
</style>
