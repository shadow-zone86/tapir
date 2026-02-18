<template>
  <div
    v-if="loading"
    class="page-loader"
    aria-hidden="true"
  >
    <div class="page-loader__content">
      <div class="page-loader__spinner" />
      <span class="page-loader__text">{{ text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PageLoaderProps {
  loading: boolean
  text?: string
}

withDefaults(defineProps<PageLoaderProps>(), {
  text: 'Загрузка',
})
</script>

<style lang="scss" scoped>
.page-loader {
  position: fixed;
  inset: 0;
  z-index: 100000;
  background: $color-bg;
  @include flex-col($justify: center, $align: center);
}

.page-loader__content {
  @include flex-col($align: center, $gap: $spacing-lg);
}

.page-loader__spinner {
  width: 2.5rem;
  height: 2.5rem;
  border: 3px solid $color-border;
  border-top-color: $color-accent;
  border-radius: 50%;
  animation: page-loader-spin 0.8s linear infinite;
}

.page-loader__text {
  font-family: $font-family-base;
  font-size: $font-size-sm;
  color: $color-text-muted;
}

@keyframes page-loader-spin {
  to { transform: rotate(360deg); }
}

</style>
