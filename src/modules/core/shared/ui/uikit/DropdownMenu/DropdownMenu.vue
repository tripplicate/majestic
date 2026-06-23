<script setup lang="ts" generic="T = string">
import type { DropdownMenuProps } from './types.ts'
import { autoUpdate, size, useFloating } from '@floating-ui/vue'
import { onClickOutside, useToggle } from '@vueuse/core'
import { computed, useSlots, useTemplateRef } from 'vue'
import IconChevronDown from '../../icons/IconChevronDown.vue'
import { InputField } from '../InputField'

const { options, optionLabel, ...props } = defineProps<DropdownMenuProps<T>>()
const [isDropdownMenuVisible, toggleIsDropdownMenuVisible] = useToggle()

const fieldValue = defineModel<T>({
  required: true,
})

function setFieldValue(value: T) {
  fieldValue.value = value
  toggleIsDropdownMenuVisible(false)
}

const containerRef = useTemplateRef('container')
const fieldRef = useTemplateRef('field')
const dropdownMenuRef = useTemplateRef('dropdownMenu')

const { floatingStyles } = useFloating(fieldRef, dropdownMenuRef, {
  placement: 'bottom-start',
  middleware: [
    size({
      apply({ rects, elements }) {
        Object.assign(elements.floating.style, {
          width: `${rects.reference.width}px`,
        })
      },
    }),
  ],
  whileElementsMounted: autoUpdate,
})

const slots = useSlots()

const classes = computed(() => ({
  'app-field-dropdown--is-opened': isDropdownMenuVisible.value,
}))

onClickOutside(containerRef, () => toggleIsDropdownMenuVisible(false))
</script>

<template>
  <div ref="container">
    <InputField
      ref="field"
      :model-value="fieldValue"
      v-bind="props"
      readonly
      class="app-field-dropdown"
      :class="classes"
      @click="toggleIsDropdownMenuVisible()"
    >
      <template v-if="slots['icon-left']" #icon-left>
        <slot name="icon-left" />
      </template>

      <template #icon-right>
        <IconChevronDown class="app-field-dropdown__icon-chevron" />
      </template>
    </InputField>

    <ul
      v-show="isDropdownMenuVisible"
      ref="dropdownMenu"
      :style="floatingStyles"
      class="dropdown-menu"
    >
      <li
        v-for="(option, idx) in options"
        :key="idx"
        class="dropdown-menu__element"
        @click="setFieldValue(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.app-field-dropdown {
  cursor: pointer;

  &--is-opened &__icon-chevron {
    rotate: 180deg;
  }

  &__icon-chevron {
    transition: rotate .25s;
  }
}

.dropdown-menu {
    background: #181818;
    z-index: 10;
    height: 176px;
    overflow-y: auto;
    box-shadow: 0 .5rem 1.25rem rgba(14, 14, 14, 1);

    &__element {
      padding: 0.875rem;
      font-size: 1rem;
      background: #181818;
      color: #8c8c8c;
      cursor: pointer;
      transition: all .25s;

      &:nth-child(n+2) {
        border-top: 0.0625rem solid var(--color-outline);
      }

      &:hover {
        background: #1F1F1F;
        color: #ffffff;
      }
    }
}
</style>
