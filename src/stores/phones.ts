import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export type PhoneModel = {
  id: number
  years: {
    start: string
    end: string
  }
  brand: {
    brand_id: number
    brand_name: string
    key: string
  }
  model: {
    label: string
    value: string
  }
  picture: {
    url: string
  }
}

const formatModels = (rawModel: { device_image: string; device_name: string; key: string }) => {}

const brandsUrl =
  'https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec?route=brand-list'

/*
    curl --location 'https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec' \
  --data '{
      "route": "device-list-by-brand",
      "brand_id": 48,
      "brand_name": "apple",
      "page": 1
    }'
*/
const deviceByBrandUrl =
  'https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec'
const data = {
  route: 'device-list-by-brand',
  brand_id: 48,
  brand_name: 'apple',
  page: 1
}

export const usePhonesStore = defineStore('phones', {
  state: () => ({
    phones: [] as PhoneModel[],
    brands: [] as {
      brand_id: number
      brand_name: string
      key: string
    }[],
    models: [] as {
      device_image: string
      device_name: string
      key: string
    }[]
  }),
  actions: {
    addPhone(phone: PhoneModel) {
      this.phones = [...this.phones, phone]
    },
    async fetchBrands([, onFail]: Function[] = []) {
      fetch(brandsUrl)
        .then((res) => res.json())
        .then((res) => {
          this.brands = res.data
        })
        .catch((error) => {
          if (onFail) {
            onFail(error)
          }
        })
    },
    async fetchModelsbyBrand(
      brand: { brand_id: number; brand_name: string },
      [, onFail]: Function[] = []
    ) {
      fetch(deviceByBrandUrl, {
        method: 'POST',
        body: JSON.stringify({
          route: 'device-list-by-brand',
          brand_id: brand.brand_id,
          brand_name: brand.brand_name,
          page: 1
        })
      })
        .then((res) => res.json())
        .then(({ data }) => {
          if (data?.device_list) {
            console.log(data?.device_list)
            this.models = data?.device_list
          }
        })
        .catch((error) => {
          if (onFail) {
            onFail(error)
          }
        })
    }
  }
})
