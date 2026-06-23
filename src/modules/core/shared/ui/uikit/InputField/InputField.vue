<script setup lang="ts">
import type { InputFieldProps } from './types'
import { computed, useSlots } from 'vue'

const { placeholder, readonly, disabled } = defineProps<InputFieldProps>()

const fieldValue = defineModel<string>()

const slots = useSlots()

const classes = computed(() => ({
  'input-field--has-value': fieldValue.value,
  'input-field--readonly': readonly,
  'input-field--disabled': disabled,
}))
</script>

<template>
  <component
    :is="readonly || disabled ? 'div' : 'label'"
    class="input-field" :class="classes"
    :tabindex="readonly || disabled ? 0 : undefined"
  >
    <div
      v-if="slots['icon-left']"
      class="input-field__left-icon"
    >
      <slot name="icon-left" />
    </div>

    <input
      v-model.trim="fieldValue"
      :placeholder
      :disabled="disabled || readonly"
      class="input-field__input"
    >

    <div
      v-if="slots['icon-right']"
      class="input-field__right-icon"
    >
      <slot name="icon-right" />
    </div>
  </component>
</template>

<style>
.input-field {
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  height: 2.75rem;
  font-weight: 500;
  gap: .5rem;
  color: var(--color-foreground);
  background-color: #181818;
  padding: 0.875rem;
  cursor: text;
  border: .0625rem solid var(--color-outline);

  &:hover {
    background: #1F1F1F;
  }

  &:focus-within &__left-icon,
  &--has-value &__left-icon {
    opacity: 1;
  }

  &__input {
    all: unset;
    height: 100%;
    font-size: 1rem;
    font-weight: 500;
    flex-grow: 1;
  }

  &__left-icon {
    color: var(--color-brand);
    opacity: 0.5;
  }

  &--disabled {
    background: #1F1F1F;
    cursor: not-allowed;
  }

  &--disabled &__icon-left,
  &--disabled &__icon-right {
    opacity: 0.5;
    color: #1F1F1F;
  }

  &--readonly &__input {
    pointer-events: none;
  }
}
</style>
