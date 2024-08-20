<template>
  <va-sidebar
    :minimized="!showSidebar"
    minimized-width="48px"
    color="backgroundPrimary"
  >
    <SidebarItem
      v-for="(item, idx) in sidebarItems"
      :key="idx"
      :item-list="item"
      :showSidebar="showSidebar"
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
console.log(loader.value);

watch(
  () => loader.value,
  (newValue, oldValue) => {
    newValue ? displayLoader() : destroyLoader();
  }
);

commonStore.getProjectsList();
</script>
