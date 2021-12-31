import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        counter: localStorage.getItem('count') ? Number(localStorage.getItem('count')) : 0,
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
            localStorage.setItem('count', this.counter);
        },
        increment() {
            this.counter++;
            localStorage.setItem('count', this.counter);
        }
    },
})