<template>
  <Catalog />
</template>

<script setup lang="ts">
import { Catalog } from '@/widgets/catalog'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Каталог — Tapir',
  description: 'Каталог товаров Tapir'
})
</script>

<style lang="scss" scoped></style>
