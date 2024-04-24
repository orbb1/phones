<script setup lang="ts">
import Tile from '../components/Tile/Tile.vue'
import NewPhoneForm from '../components/NewPhoneForm/NewPhoneForm.vue'
import { usePhonesStore } from '../stores/phones'
import type { PhoneModel } from '../stores/phones'
import { storeToRefs } from 'pinia';

const store = usePhonesStore()
const { phones, newPhone } = storeToRefs(store)

</script>

<template>
  <header>
    <h1>Home page</h1>
  </header>
  <main>
    <NewPhoneForm />
    <Tile v-for="phone in phones" :phone="phone" />
    <button @click="store.addPhone(newPhone)">Add phone</button>
  </main>
</template>
