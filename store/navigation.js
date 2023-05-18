import { defineStore } from "pinia";
import { TYPE_NONE } from "~~/constants/types";
import sidebar from "~~/server/get-sidebar";

export const useNavigationStore = defineStore({
  id: "navigatoin-store",
  state: () => {
    return {
      sidebarItems: sidebar.data,
      showSidebar: true,
      selectedType: TYPE_NONE,
    };
  },
  actions: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    setSelectedType(type) {
      this.selectedType = type;
    },
  },
});
