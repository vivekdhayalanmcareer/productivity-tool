<template>
  <va-sidebar
    :minimized="!showSidebar"
    minimized-width="48px"
    color="backgroundPrimary"
  >
    <Section
      v-for="(item, idx) in sidebarItems"
      :key="idx"
      :item-list="item"
      :showSidebar="showSidebar"
      style="border-bottom: 1px solid var(--va-shadow)"
    />
  </va-sidebar>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useCommonStore } from "~~/store/common";
import { useGlobalLoader } from "vue-global-loader";
const { displayLoader, destroyLoader } = useGlobalLoader();
const commonStore = useCommonStore();
const { sidebarItems, showSidebar } = storeToRefs(commonStore);
const loader = computed(() => commonStore.loader);
console.log(loader.value, 2);

watch(
  () => loader.value,
  (newValue, oldValue) => {
    console.log(1);
    newValue ? displayLoader() : destroyLoader();
  }
);

commonStore.getProjectsList();
</script>
