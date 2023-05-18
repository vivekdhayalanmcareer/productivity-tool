<template>
    <div v-if="showSidebar && itemList" class="tabs-content">

        <SidebarChild :type="type" :child-list="itemList" />

    </div>
</template>
<script setup>
const props = defineProps({
    itemList: {
        type: Object,
        default: {}
    },

    type: {
        type: String,
        default: ''
    },

    showSidebar: {
        type: Boolean,
        default: false
    }
})

const { type } = props;

</script>
<style>
.tabs-content {
    height: 30vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    overflow-x: hidden;
}
</style>