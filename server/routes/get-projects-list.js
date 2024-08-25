import { setResponseStatus } from "h3";
import { StatusCodes } from "http-status-codes";
export default defineEventHandler((event) => {
  setResponseStatus(event, StatusCodes.OK);
  const response = {
    content: [
      {
        title: "Tasks",
        icon: "task_alt",
        type: "tasks",
        children: [],
        // children: [
        //   {
        //     title: "Work on Unity game",
        //     icon: "dashboard",
        //     id: 1,
        //   },
        //   {
        //     title: "Make a video on second test between india and australia",
        //     icon: "dashboard",
        //     id: 109,
        //   },
        //   {
        //     title: "Tasks 3",
        //     icon: "dashboard",
        //     id: 1676,
        //   },
        //   {
        //     title: "Tasks 3",
        //     icon: "dashboard",
        //     id: 12158,
        //   },
        //   {
        //     title: "Tasks 3",
        //     icon: "dashboard",
        //     id: 198,
        //   },
        //   {
        //     title: "Tasks 3",
        //     icon: "dashboard",
        //     id: 126,
        //   },
        //   {
        //     title: "Tasks 3",
        //     icon: "dashboard",
        //     id: 16,
        //   },
        //   {
        //     title: "Tasks 3",
        //     icon: "dashboard",
        //     id: 128,
        //   },
        //   {
        //     title: "Tasks 3",
        //     icon: "dashboard",
        //     id: 158,
        //   },
        //   {
        //     title: "Tasks 3",
        //     icon: "dashboard",
        //     id: 1443,
        //   },
        //   {
        //     title: "Tasks 3",
        //     icon: "dashboard",
        //     id: 167648,
        //   },
        //   {
        //     title: "Tasks 11",
        //     icon: "dashboard",
        //     id: 1242215,
        //   },
        //   {
        //     title: "Tasks 12",
        //     icon: "dashboard",
        //     id: 12334,
        //   },
        // ],
      },
      {
        title: "Projects",
        icon: "build",
        type: "projects",
        children: [],
        // children: [
        //   {
        //     title: "First project",
        //     id: 1,
        //     icon: "dashboard",
        //   },
        //   {
        //     title: "Cricket Hero",
        //     id: 2,
        //     icon: "dashboard",
        //   },
        //   {
        //     title: "Football Game project",
        //     id: 3,
        //     icon: "dashboard",
        //   },
        //   {
        //     title: "Prso",
        //     id: 4,
        //     icon: "dashboard",
        //   },
        //   {
        //     title: "Aero project",
        //     id: 5,
        //     icon: "dashboard",
        //   },
        //   {
        //     title: "Satelite Hero",
        //     id: 6,
        //     icon: "dashboard",
        //   },
        //   {
        //     title: "Aero project",
        //     id: 7,
        //     icon: "dashboard",
        //   },
        // ],
      },
    ],
  };
  return JSON.stringify(response);
});
