<script setup lang="ts">
import Tile from '../components/Tile/Tile.vue'
import NewPhoneForm from '../components/NewPhoneForm/NewPhoneForm.vue'
import { usePhonesStore } from '../stores/phones'
import type { PhoneModel } from '../stores/phones'

const { phones, addPhone } = usePhonesStore()
const newPhone: PhoneModel = {
  id: 1,
  brand: {
    key: 'nokia',
    brand_name: 'Nokia',
    brand_id: 1,
  },
  model: {
    value: '3100',
    label: '3100',
  },
  years: {
    start: '2004',
    end: '2005'
  },
  picture:{
    url: 'https://fdn2.gsmarena.com/vv/pics/nokia/no3100_00.jpg'
  }
}
</script>

<template>
  <header>
    <h1>Home page</h1>
  </header>
  <main>
    <NewPhoneForm />
    <Tile v-for="phone in phones" :phone="phone" />
    <button @click="addPhone(newPhone)">Add phone</button>
  </main>
</template>
