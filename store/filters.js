import { defineStore } from "pinia";

export const useFilterStore = defineStore({
  id: "filter-store",
  state: () => {
    return {
      filtersList: ["youtube", "twitch"],
    };
  },
  actions: {
    addValueToFiltersList(value) {
      this.filtersList.push(value);
    },
  },
  getters: {
    doubleCount: (state) => state.filtersList.length * 2,
  },
});
