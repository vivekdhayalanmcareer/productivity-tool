import { defineStore } from "pinia";

export const useNavigationStore = defineStore({
  id: "navigatoin-store",
  state: () => {
    return {
      sidebarItems: [
        {
          title: "Tasks",
          icon: "task_alt",
          type: "tasks",
          children: [
            {
              title: "Work on Unity game",
              icon: "dashboard",
            },
            {
              title: "Make a video on second test between india and australia",
              icon: "dashboard",
            },
            {
              title: "Tasks 3",
              icon: "dashboard",
            },
            {
              title: "Tasks 3",
              icon: "dashboard",
            },
            {
              title: "Tasks 3",
              icon: "dashboard",
            },
            {
              title: "Tasks 3",
              icon: "dashboard",
            },
            {
              title: "Tasks 3",
              icon: "dashboard",
            },
            {
              title: "Tasks 3",
              icon: "dashboard",
            },
            {
              title: "Tasks 3",
              icon: "dashboard",
            },
            {
              title: "Tasks 3",
              icon: "dashboard",
            },
            {
              title: "Tasks 3",
              icon: "dashboard",
            },
            {
              title: "Tasks 11",
              icon: "dashboard",
            },
            {
              title: "Tasks 12",
              icon: "dashboard",
            },
          ],
        },
        {
          title: "Projects",
          icon: "build",
          type: "projects",
          children: [
            {
              title: "Aero project",
              icon: "dashboard",
            },
            {
              title: "Satelite Hero",
              icon: "dashboard",
            },
            {
              title: "Aero project",
              icon: "dashboard",
            },
            {
              title: "Satelite Hero",
              icon: "dashboard",
            },
            {
              title: "Aero project",
              icon: "dashboard",
            },
            {
              title: "Satelite Hero",
              icon: "dashboard",
            },
            {
              title: "Aero project",
              icon: "dashboard",
            },
            {
              title: "Satelite Hero",
              icon: "dashboard",
            },
            {
              title: "Aero project",
              icon: "dashboard",
            },
            {
              title: "Satelite Hero",
              icon: "dashboard",
            },
            {
              title: "Aero project",
              icon: "dashboard",
            },
            {
              title: "Satelite Hero",
              icon: "dashboard",
            },
            {
              title: "Aero project",
              icon: "dashboard",
            },
            {
              title: "Satelite Hero 13",
              icon: "dashboard",
            },
          ],
        },
      ],
      showSidebar: true,
    };
  },
  actions: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
});
