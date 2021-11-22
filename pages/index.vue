<template>
  <div>
    <CText :text="text" />
    <div>
      <div>
        counter:{{ main.counter }}
      </div>
      <div>
        doubleCount:{{ main.doubleCount }}
      </div>
      <div>
        doubleCountPlusOne:{{ main.doubleCountPlusOne }}
      </div>
      <div>
        <button @click="main.increment()">add</button>
        <button @click="main.reset()">reset</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '~/store/main'

const main = useMainStore();
const text = ref<string>("pinia exsample pages");
</script>