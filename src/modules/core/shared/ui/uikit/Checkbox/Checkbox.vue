<script setup lang="ts">
import IconMark from '../../icons/IconMark.vue'

const { label } = defineProps<{
  disabled?: boolean
  label?: string
}>()

const fieldValue = defineModel<boolean>({
  required: false,
})
</script>

<template>
  <label>
    <input v-model="fieldValue" type="checkbox" class="sr-only">
    <div>
      <IconMark />
    </div>

    <slot>
      <span>{{ label }}</span>
    </slot>
  </label>
</template>

<style scoped>
.sr-only {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

div {
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  width: 1rem;
  border-radius: 0.25rem;
  background: #252525;
}

div svg {
  width: 65%;
  visibility: hidden;
}

input:checked + div {
  background: var(--color-brand);
}

input:checked + div svg {
  visibility: visible;
}

label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

label span {
  user-select: none;
  font-size: 1rem;
}

label input {
  position: relative;
  aspect-ratio: 1/1;
  width: 1rem;
  background: #252525;
  border-radius: 4px;
  color: white;
  border-radius: 0.25rem;
  cursor: pointer;

  &:not(:disabled):not(:checked):hover {
    background-color: blue;
  }

  &:not(:disabled):checked {
    background-color: orange;
  }
}
</style>
