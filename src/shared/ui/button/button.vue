<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="button"
    :class="`button--${variant}`"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    class="button"
    :class="`button--${variant}`"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    class="button"
    :class="`button--${variant}`"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  variant?: 'primary' | 'outline'
  type?: 'button' | 'submit' | 'reset'
  to?: string
  href?: string
}

interface ButtonEmits {
  click: [event: MouseEvent]
}

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  type: 'button',
  to: undefined,
  href: undefined,
})

defineEmits<ButtonEmits>()
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  font-family: $font-family-base;
  font-weight: $font-weight-regular;
  font-size: $font-size-sm;
  line-height: $line-height-sm;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: background-color 0.25s ease, opacity 0.25s ease;

  &--primary {
    @include padding($top: $spacing-nav-y, $right: $spacing-lg, $bottom: $spacing-nav-y, $left: $spacing-lg);
    background: $color-red;
    color: $color-white;

    &:hover {
      background-color: $color-red-hover;
      opacity: 0.95;
    }
  }

  &--outline {
    @include padding($top: $spacing-nav-y, $right: $spacing-lg, $bottom: $spacing-nav-y, $left: $spacing-lg);
    border: 1px solid $color-black;
    background: transparent;
    color: $color-black;

    &:hover {
      background: $color-overlay-light;
    }
  }
}
</style>
