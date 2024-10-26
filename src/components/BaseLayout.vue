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
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
  border: 1ps solid black;
}

h1 {
  margin-bottom: 1rem;
}
</style>
