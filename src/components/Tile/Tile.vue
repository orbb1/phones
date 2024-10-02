<script setup lang="ts">
const props = defineProps(['phone'])
const { startDate, endDate, model, brand, picture } = props.phone
</script>

<template>
  <div>
    <p>Years: {{ startDate }} - {{ endDate }}</p>
    <p>Brand: {{ brand.label }}</p>
    <p>Model: {{ model.label }}</p>
    <img :src="picture.url" />
  </div>
</template>

<style>
img {
  width: 100px;
  height: 100px;
}
</style>
