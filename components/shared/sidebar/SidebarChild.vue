<template>
  <va-sidebar-item
    v-for="(child, index) in childList"
    :key="index"
    class="sidebar-child"
    :to="getPath(child.id)"
  >
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
    default: [],
  },
  type: {
    type: String,
    default: "",
  },
});
const { type } = props;
let getPath = (id) => `/dashboards/${type}/${id}`;
</script>
<style>
.sidebar-child {
  background-color: red;
  /* border-bottom: 1px solid var(--va-shadow); */
  /* overflow-x: hidden; */
}
</style>
