<template>
  <GlobalLoader>
    <RingBarsSpinner style="width: 30px" />
  </GlobalLoader>
  <NuxtPage />
</template>
<script setup>
import GlobalLoader from "vue-global-loader/GlobalLoader.vue";
import RingBarsSpinner from "vue-global-loader/RingBarsSpinner.vue";
</script>
