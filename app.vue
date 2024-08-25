<template>
  <GlobalLoader>
    <RingBarsSpinner style="width: 30px" />
  </GlobalLoader>
  <Notivue v-slot="item">
    <Notification :item="item" />
  </Notivue>
  <NuxtPage />
</template>
<script setup>
import GlobalLoader from "vue-global-loader/GlobalLoader.vue";
import RingBarsSpinner from "vue-global-loader/RingBarsSpinner.vue";
import { Notivue, Notification, push } from "notivue";
</script>
