<template>
  <a href="/" class="header-logo" aria-label="Логотип" />
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header-logo {
  width: 2.5rem;
  height: 2.5rem;
  background: $color-red;
  flex-shrink: 0;
  transition: transform 0.5s ease;

  &:hover {
    transform: rotate(360deg);
  }
}
</style>
