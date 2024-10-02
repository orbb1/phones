<script setup lang="ts">
import { ref } from 'vue'
import BaseLayout from '@/components/BaseLayout.vue'

const title = ref('About Us')
const content = ref('We are a team dedicated to creating amazing Vue.js applications.')
</script>

<template>
  <BaseLayout :title="title">
    <p>{{ content }}</p>
  </BaseLayout>
</template>

<style scoped>
.about {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}
</style>
