<template>
    <va-accordion v-model="accordionValue" class="accordion" aria-disabled="true">
        <va-collapse :class="{ expanded: accordionValue && itemList.children }">
            <template #header>
                <va-sidebar-item>
                    <va-sidebar-item-content style="border-bottom: 1px solid var(--va-shadow);">
                        <va-icon :name="itemList.icon" />
                        <va-sidebar-item-title>
                            {{ itemList.title }}
                        </va-sidebar-item-title>
                        <va-icon v-if="showSidebar && itemList.children"
                            :name="accordionValue[0] ? 'expand_less' : 'expand_more'" />
                    </va-sidebar-item-content>
                </va-sidebar-item>
            </template>

            <SidebarTasks v-if="isTasks" :showSidebar="showSidebar" :item-list="itemList.children" />
            <SidebarProjects v-if="isProjects" :showSidebar="showSidebar" :item-list="itemList.children" />
        </va-collapse>
    </va-accordion>
    <va-divider />
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
const accordionValue = ref([true, false]);
const isTasks = computed(() => props.itemList && props.itemList.type === "tasks");
const isProjects = computed(() => props.itemList && props.itemList.type === "projects");
</script>
<style lang="scss" scoped>
.accordion {
    height: 35vh;
    overflow: hidden;
}

.tabs-content {
    height: 30vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

.expanded {
    background-color: var(--va-background-primary);
}
</style>