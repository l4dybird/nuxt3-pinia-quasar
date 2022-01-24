<script setup lang="ts">
const text = ref(null);
const textFieldRef = ref(null);

const accept = ref(false);

const textRules = [
  val => (val && val.length > 0) || 'Please type something'
];

const onSubmit = () => {
  textFieldRef.value.refs.validate();

  if (textFieldRef.value.refs.hasError) {
    // form has error
  }
};

const onReset = () => {
  text.value = null;
  textFieldRef.value.textFieldRef.resetValidation();
};
onMounted(() => {
  console.log(textFieldRef.value);
})
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <div id="q-app" style="min-height: 100vh;">
      <div class="q-pa-md" style="max-width: 300px">
        <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
          <text-field
            ref="textFieldRef"
            v-model="text"
            :rules="textRules"
          ></text-field>

          <q-toggle v-model="accept" label="I accept the license and terms"></q-toggle>

          <div>
            <q-btn label="Submit" type="submit" color="primary"></q-btn>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
          </div>
        </form>
      </div>
    </div>
  </q-page>
</template>
