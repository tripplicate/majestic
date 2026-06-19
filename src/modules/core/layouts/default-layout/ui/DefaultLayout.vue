<template>
  <div class="default-layout">
    <RouterView />
  </div>
</template>

<style scoped>
.default-layout {
  display: flex;
  flex-flow: column;
  background: var(--color-background) url('/src/app/assets/img/patterns/majestic-pattern.png') repeat;
  min-height: 100dvh;
}
</style>
