<script setup lang="ts">
import Tile from '../components/Tile/Tile.vue'
import NewPhoneForm from '../components/NewPhoneForm/NewPhoneForm.vue'
import BaseLayout from '../components/BaseLayout.vue'
import { usePhonesStore } from '../stores/phones'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const store = usePhonesStore()
const { phones } = storeToRefs(store)
onMounted(() => {
  store.fetchBrands()
})
</script>

<template>
  <BaseLayout title="Home page">
    <NewPhoneForm />
    <div class="phone-list">
      <Tile v-for="phone in phones.values()" :key="phone.id" :phone="phone" />
    </div>
  </BaseLayout>
</template>

<style scoped>
.phone-list {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem;
}
</style>
