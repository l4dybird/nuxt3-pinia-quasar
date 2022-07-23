<script setup lang="ts">
import { useMainStore } from '~/store/main';

const main = useMainStore();

watch(main, () => {
  return sessionStorage.setItem('counter', main.counter.toString());
});

onMounted(() => {
  if(sessionStorage.getItem('counter')) {
    main.counter = Number(sessionStorage.getItem('counter'));
  }
});
</script>

<template>
  <q-page class="row items-center justify-evenly">
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
  </q-page>
</template>
