<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePhonesStore } from '../../stores/phones'
import { ref, computed } from 'vue'

const store = usePhonesStore()
const { brands, models, newPhone, isLoading } = storeToRefs(store)

const pictureUrl = computed(() => newPhone.value?.picture?.url || '')

const onChangeBrand = (event: Event) => {
  const brandId = (event.target as HTMLSelectElement).value
  const brand = brands.value.find((b) => `${b.brand_id}` === brandId)
  if (brand) {
    store.fetchModelsByBrand({ brand_id: brand.brand_id, brand_name: brand.brand_name })
    store.updateNewPhone('brand', { label: brand.brand_name, value: brand.brand_id })
  }
}

const onChangeModel = (event: Event) => {
  const modelKey = (event.target as HTMLSelectElement).value
  const model = models.value.find((m) => m.key === modelKey)
  if (model) {
    store.updateNewPhone('model', { label: model.device_name, value: model.key })
    store.updateNewPhone('picture', { url: model.device_image })
  }
}

const onChangeStartDate = (event: Event) => {
  store.updateNewPhone('startDate', (event.target as HTMLInputElement).value)
}

const onChangeEndDate = (event: Event) => {
  store.updateNewPhone('endDate', (event.target as HTMLInputElement).value)
}

const onSubmit = () => {
  store.submitPhone(newPhone.value)
}
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <form @submit.prevent="onSubmit">
    <div class="form-wrapper">
      <div class="form-input-wrapper">
        <label>
          From:
          <input
            :disabled="isLoading"
            :value="newPhone.startDate"
            type="date"
            @input="onChangeStartDate"
          />
        </label>
      </div>
      <div class="form-input-wrapper">
        <label>
          To:
          <input
            :disabled="isLoading"
            :value="newPhone.endDate"
            type="date"
            @input="onChangeEndDate"
          />
        </label>
      </div>
      <div class="form-input-wrapper">
        <label>
          Select brand
          <select :disabled="isLoading" @change="onChangeBrand">
            <option
              v-for="brand in brands"
              :key="brand.brand_id"
              :selected="brand.brand_id === newPhone?.brand?.value"
              :value="brand.brand_id"
            >
              {{ brand.brand_name }}
            </option>
          </select>
        </label>
      </div>
      <div class="form-input-wrapper">
        <label>
          Select model
          <select :disabled="isLoading" @change="onChangeModel">
            <option
              v-for="model in models"
              :key="model.key"
              :selected="model.key === newPhone.model?.value"
              :value="model.key"
            >
              {{ model.device_name }}
            </option>
          </select>
        </label>
      </div>
      <img v-if="pictureUrl" :src="pictureUrl" alt="Selected phone model" />
    </div>
  </form>
  <button class="submit-button" :disabled="isLoading" @click="onSubmit">Add phone</button>
</template>

<style scoped>
form {
  border: 1px solid;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.form-input-wrapper {
  border: 1px solid #ccc;
  padding: 1rem;
  flex-grow: 1;
}

.submit-button {
  margin: 1rem auto;
}

label {
  display: flex;
  font-weight: bold;
  flex-direction: column;
}

img {
  max-width: 200px;
  margin-top: 1rem;
}
</style>
