import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export type PhoneModel = {
  id: number
  years: {
    start: string
    end: string
  }
  brand: {
    label: string
    value: string
  }
  model: {
    label: string
    value: string
  }
  picture: {
    url: string
  }
}

export const usePhonesStore = defineStore('phones', () => {
  const phones = ref<PhoneModel[]>([])

  function addPhone(phone: PhoneModel) {
    phones.value = [...phones.value, phone]
  }

  return { phones, addPhone }
})
