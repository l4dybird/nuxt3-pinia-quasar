import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        counter: window.sessionStorage.getItem('count') ? Number(window.sessionStorage.getItem('count')) : 0,
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
            window.sessionStorage.setItem('count', this.counter);
        },
        increment() {
            this.counter++;
            window.sessionStorage.setItem('count', this.counter);
        }
    },
})