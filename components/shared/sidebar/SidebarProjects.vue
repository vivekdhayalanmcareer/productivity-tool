<template>
  <div v-if="showSidebar" class="tabs-content">
    <SidebarChild
      v-if="itemList.length > 0"
      :type="type"
      :child-list="itemList"
    />
    <p v-else>No tasks available. {Show create a project button}</p>
  </div>
</template>
<script setup>
const props = defineProps({
  itemList: {
    type: Object,
    default: [],
  },

  type: {
    type: String,
    default: "",
  },

  showSidebar: {
    type: Boolean,
    default: false,
  },
});

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
