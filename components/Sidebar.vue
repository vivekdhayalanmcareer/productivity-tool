<template>
  <va-sidebar :minimized="!showSidebar" minimized-width="48px" color="backgroundPrimary">
    <SidebarItem v-for="(item, idx) in sidebarItems" :key="idx" :item-list="item" :showSidebar="showSidebar" />
  </va-sidebar>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useNavigationStore } from "~~/store/navigation";
const navigationStore = useNavigationStore();
const { sidebarItems, showSidebar } = storeToRefs(navigationStore);
</script>
