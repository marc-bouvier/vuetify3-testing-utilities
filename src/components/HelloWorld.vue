<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <p>Hello {{ msg }}</p>
</template>
