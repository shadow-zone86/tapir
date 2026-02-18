<template>
  <div class="layout">
    <AppHeader />
    <main class="layout__main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { AppHeader } from '@/widgets/header'
import { AppFooter } from '@/widgets/footer'
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  @include flex-col;

  &__main {
    flex: 1;
  }
}
</style>
