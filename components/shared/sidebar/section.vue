<template>
  <va-accordion v-model="accordionValue" aria-disabled="true">
    <va-collapse :class="{ expanded: accordionValue }">
      <template #header>
        <va-sidebar-item>
          <va-sidebar-item-content>
            <va-icon :name="itemList.icon" />
            <va-sidebar-item-title>
              {{ itemList.title }}
            </va-sidebar-item-title>
            <va-icon
              v-if="showSidebar && itemList.children"
              :name="accordionValue[0] ? 'expand_less' : 'expand_more'"
            />
          </va-sidebar-item-content>
        </va-sidebar-item>
      </template>

      <List />
      <!-- <List v-if="isTasks" /> -->

      <!-- <SidebarTasks
        v-if="isTasks"
        :type="type"
        :showSidebar="showSidebar"
        :item-list="itemList.children"
      />
      <SidebarProjects
        v-if="isProjects"
        :type="type"
        :showSidebar="showSidebar"
        :item-list="itemList.children"
      /> -->
    </va-collapse>
  </va-accordion>
  <!-- <va-divider /> -->
</template>
<script setup>
import { TYPE_TASKS, TYPE_PROJECTS } from "~~/constants/types";

const props = defineProps({
  itemList: {
    type: Object,
    default: {},
  },
  showSidebar: {
    type: Boolean,
    default: false,
  },
});

const accordionValue = ref([false, true]);
const { type } = props.itemList;
const isTasks = computed(() => type === TYPE_TASKS);
const isProjects = computed(() => type === TYPE_PROJECTS);

onMounted(() => {
  accordionValue.value = [true, false];
});
</script>
<style lang="scss" scoped>
.accordion {
  height: 33vh;
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
.sidebar-item-content {
  border-top: 1px solid var(--va-shadow);
}
</style>
