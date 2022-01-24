<script setup lang="ts">
type Props = {
    value?: string;
    rules?: any;
}

defineProps<Props>();

const textFieldRef = ref(null);

defineExpose({
  textFieldRef,
});
</script>

<template>
  <q-input
    ref="textFieldRef"
    filled
    v-model="value"
    label="Your text *"
    hint="Name and surname"
    lazy-rules
    :rules="rules"
  ></q-input>
</template>