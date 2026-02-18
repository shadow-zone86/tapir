<template>
  <div>
    <PageLoader :loading="isLoading" />
    <div
      class="app-content"
      :style="isLoading ? { visibility: 'hidden' } : undefined"
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
</script>

<style lang="scss" scoped></style>
