<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
  title: '404 | Страница не найдена',
})
</script>

<template>
  <div class="container">
    <h1 class="container__title">
      404 | Страница не найдена
    </h1>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  place-items: center;
  flex-grow: 1;

  &__title {
    font-size: 24px;
    font-weight: 800;
  }
}
</style>
