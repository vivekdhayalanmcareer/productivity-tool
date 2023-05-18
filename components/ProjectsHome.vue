<template>
    <p>{{ selectedProject.id }}</p>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useProjectStore } from '~~/store/projects';
const projectStore = useProjectStore();
const { selectedProject } = storeToRefs(projectStore);

</script>