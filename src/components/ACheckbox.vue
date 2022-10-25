<script setup lang="ts">
import { ref } from "vue";

const testValue = ref(true)
</script>

<template>
  <div>
    <v-checkbox
      data-selector="test-selector"
      label="testLabel"
        v-model="testValue"
    ></v-checkbox>
  </div>
</template>