<template>
    <va-tabs v-model="tabValue" grow color="backgroundPrimary">
        <template #tabs>
            <va-tab v-for="tab in ['Pending', 'Today', 'Upcoming']" :key="tab" color="textPrimary">
                {{ tab }}
            </va-tab>
        </template>
    </va-tabs>
    <div v-if="showSidebar && itemList" class="tabs-content">
        <SidebarChild :type="type" v-if="isPending" :child-list="itemList" />
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
const tabValue = ref(1);
const isPending = computed(() => tabValue.value === 0);
</script>
<style>
.tabs-content {
    height: 30vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    overflow-x: hidden;
}
</style>