import { defineStore } from "pinia";
import { TYPE_NONE } from "~~/constants/types";
import ProjectsClient from "~~/client-lib/projects/projects-client";

export const useCommonStore = defineStore({
  id: "common-store",
  state: () => {
    return {
      sidebarItems: [],
      showSidebar: true,
      selectedType: TYPE_NONE,
      loader: false,
    };
  },
  actions: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },

    setSelectedType(type) {
      this.selectedType = type;
    },
    async getProjectsList() {
      const projectsClient = new ProjectsClient();
      return new Promise((resolve, reject) => {
        return projectsClient
          .getProjectsList()
          .then((data) => this.setSidebarItems(data?.content));
      });
    },
    setLoader(status) {
      this.loader = status;
    },
    setSidebarItems(content) {
      this.sidebarItems = content;
    },
  },
});
