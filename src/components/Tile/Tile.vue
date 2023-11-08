<script setup lang="ts">
  const props = defineProps(['phone'])
  const { years, model, brand, picture } = props.phone;
</script>

<template>
  <div>
    
    <p>Years: {{ years.start }} - {{ years.end }}</p>
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