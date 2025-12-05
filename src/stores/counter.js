import { defineStores } from 'pinia'

export const useCounterStore = defineStores('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {    increment() {
      this.count++
    }
  },
})