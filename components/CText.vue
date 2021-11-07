<template>
  <div>
    {{ props.text }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String
})
</script>