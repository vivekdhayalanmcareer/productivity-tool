// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  css: ["@/assets/styles/overrides.scss"],
  modules: [
    "@vuestic/nuxt",
    "@pinia/nuxt",
    "vue-global-loader/nuxt",
    "@vueuse/nuxt",
  ],
  components: {
    global: true,
    dirs: [
      { path: "~/pages/dashboards" },
      { path: "~/components/tooltips" },
      "~/components",
    ],
  },
  alias: {
    "@client-lib": resolve(__dirname, "./client-lib"),
  },
  globalLoader: {
    background: "#000",
    foreground: "#fff",
    backgroundOpacity: "0.25",
    backgroundBlur: "1",
  },
  nitro: {},

  pages: true,
});
