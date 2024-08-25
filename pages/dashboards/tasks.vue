<template>
  <Container />
</template>
<script setup>
import { useProjectStore } from "~~/store/projects";
const projectStore = useProjectStore();
const route = useRoute();
onMounted(() => {
  // projectStore.setId(route.params.id);
});
</script>
