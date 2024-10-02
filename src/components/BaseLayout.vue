<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="base-layout">
    <h1>{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<style scoped>
.base-layout {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 1rem;
}
</style>
