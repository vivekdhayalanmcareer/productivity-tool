<template>
  <h1>Index page</h1>
</template>
<script setup>
import { useTitle } from "@vueuse/core";
const title = computed(() => "A");
useTitle(title);
</script>
