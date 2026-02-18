<template>
  <div class="app">
    <PageLoader :loading="isLoading" />
    <div
      class="app__content"
      :style="contentStyle"
    >
      <NuxtLayout>
        <NuxtRouteAnnouncer />
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PageLoader } from '@/shared/ui/page-loader'
import { usePageLoad } from '@/shared/lib/composables/usePageLoad'

const { isLoading } = usePageLoad()

const contentStyle = computed(() =>
  isLoading.value ? { visibility: 'hidden' as const } : undefined
)
</script>

<style lang="scss" scoped></style>
