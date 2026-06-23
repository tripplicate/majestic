<script setup lang="ts">
import type { ButtonProps } from './types'
import { computed } from 'vue'

const {
  variant = 'primary',
} = defineProps<ButtonProps>()

const classes = computed(() => ({
  'btn--primary': variant === 'primary',
  'btn--secondary': variant === 'secondary',
}))
</script>

<template>
  <button class="btn" :class="classes">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  border-radius: 6px;
  min-width: 186px;
  height: 48px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all .125s;
  cursor: pointer;
  color: var(--color-foreground);

  &:active {
    scale: 0.95;
  }

  &--primary {
    background-color: var(--color-brand);

    &:hover {
      background-color: #ED3E73;
    }
  }

  &--secondary {
    background-color: #101010;

    &:hover {
      background-color: #1D1D1D;
    }
  }
}
</style>
