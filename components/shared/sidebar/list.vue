<template>
  <div class="tabs-content">
    <ListItems v-if="itemList.length > 0" :type="type" :child-list="itemList" />
    <p v-else>No tasks available 1]2. {Show create a project/task button}</p>
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

  // showSidebar: {
  //   type: Boolean,
  //   default: false,
  // },
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
