import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    counter:  0,
    name: 'Eduardo',
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    doubleCountPlusOne(): number {
      return this.doubleCount * 2 + 1
    },
  },
  actions: {
    reset() {
      this.counter = 0;
    },
    increment() {
      this.counter++;
    }
  },
})