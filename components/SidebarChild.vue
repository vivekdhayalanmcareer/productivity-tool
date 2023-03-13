<template>
    <va-sidebar-item v-for="(child, index) in childList" :key="index" class="sidebar-child">
        <va-sidebar-item-content>
            <va-sidebar-item-title>
                {{ child.title }}
            </va-sidebar-item-title>
        </va-sidebar-item-content>
    </va-sidebar-item>
</template>
<script setup>
const props = defineProps({
    childList: {
        type: Array,
        default: []
    }
})
</script>
<style>
.sidebar-child {
    border-bottom: 1px solid var(--va-shadow);
    /* overflow-x: hidden; */
}
</style>