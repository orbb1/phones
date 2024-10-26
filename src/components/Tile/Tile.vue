<script setup lang="ts">
const props = defineProps(['phone'])
const { startDate, endDate, model, brand, picture } = props.phone
</script>

<template>
  <div class="tile">
    <p class="dates">Dates: {{ startDate }} - {{ endDate }}</p>
    <p class="brand">Brand: {{ brand.label }}</p>
    <p class="model">Model: {{ model.label }}</p>
    <img :src="picture.url" />
  </div>
</template>

<style scoped>
.tile {
  border: 2px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
  min-width: 200px;
}
.dates,
.brand,
.model {
  font-size: 0.8rem;
  font-weight: bold;
}
img {
  width: 100px;
  height: 100px;
}
</style>
