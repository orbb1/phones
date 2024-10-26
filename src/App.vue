<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
</script>

<template>
  <div class="app-wrapper">
    <TheNavigation />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
}
</style>
