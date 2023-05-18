import { defineStore } from "pinia";

export const useProjectStore = defineStore({
  id: "project-store",
  state: () => {
    return {
      selectedProject: {
        id: "",
      },
    };
  },
  actions: {
    /**
     * Set selected project ID
     */
    setId(id) {
      this.selectedProject.id = id;
    },
  },
  getters:{
  }
});
