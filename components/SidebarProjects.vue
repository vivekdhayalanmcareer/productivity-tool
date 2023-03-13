<template>
    <div v-if="showSidebar && itemList" class="tabs-content">
        <SidebarChild :child-list="itemList" />
    </div>
</template>
<script setup>
const props = defineProps({
    itemList: {
        type: Object,
        default: {}
    },
    showSidebar: {
        type: Boolean,
        default: false
    }
})
</script>
<style>
.tabs-content {
    height: 30vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    overflow-x: hidden;
}
</style>