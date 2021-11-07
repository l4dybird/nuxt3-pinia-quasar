<template>
  <div>
    <CText :text="text" />
  </div>
</template>

<script setup lang="ts">
const text = ref<string>("pages");
</script>