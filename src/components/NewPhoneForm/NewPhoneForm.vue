<script setup lang="ts">
  import { storeToRefs } from 'pinia';
import { usePhonesStore} from '../../stores/phones'
  import { onMounted, ref} from 'vue'

  const store = usePhonesStore()
  const { brands, models, newPhone } = storeToRefs(store)
  const pictureUrl = ref<string | undefined>('');
  onMounted(() => {
  store.fetchBrands()
})

  const onChangeBrand = (event :any) => {
    const brand = brands.value.find(b => `${b.brand_id}` === event.target.value)
    if (brand) {
      const {brand_id, brand_name} = brand;
      store.fetchModelsbyBrand({ brand_id, brand_name })
      store.updateNewPhone('brand', { brand_id, brand_name, key: brand_id })
    }
  }

  const onChangeModel = (event: any) => {
    const model = models.value.find(b => `${b.key}` === event.target.value)
    pictureUrl.value = model?.device_image;
    store.updateNewPhone('model', { label :model?.device_name, value: model?.device_name })
    store.updateNewPhone('picture', { url :model?.device_image })
  }
  const onChangeStartYear = (event: any) => {
    store.updateNewPhone('startDate', event.target.value)
  }
  const onChangeEndYear = (event: any) => {
    store.updateNewPhone('endDate', event.target.value )
  }
</script>

<template>
  <form>
    <label>
      From: 
      <input type="number" @change="onChangeStartYear($event)" />
    </label>
    <label>
      To: 
      <input type="number" @change="onChangeEndYear($event)" />
    </label>
    <label>
      Select brand
      <select @change="onChangeBrand($event)">
        <option v-for="brand in brands" :value="brand.brand_id">{{ brand.brand_name }}</option>
      </select>
    </label>
    <label>
      Select model
      <select  @change="onChangeModel($event)">
        <option v-for="model in models" :value="model.key">{{ model.device_name }}</option>
      </select>
    </label>
    <img :src="newPhone?.picture?.url" />
  </form>
</template>
<style>
  form {
    border: 1px solid;
  }

</style>