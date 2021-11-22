<template>
  <div>
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
      <div class="q-gutter-sm">
        <q-btn color="primary" @click="main.increment()" label="add"/>
        <q-btn outline color="primary" @click="main.reset()" label="reset"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '~/store/main'

const main = useMainStore();
const text = ref<string>("pinia exsample pages");
</script>