// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/styles/overrides.scss",
    "notivue/notification.css", // Only needed if using built-in <Notification />
    "notivue/animations.css", // Only needed if using default animations
  ],

  modules: [
    "@vuestic/nuxt",
    "@pinia/nuxt",
    "vue-global-loader/nuxt",
    "@vueuse/nuxt",
    "notivue/nuxt",
  ],

  components: {
    global: true,
    dirs: [
      { path: "~/pages/dashboards" },
      { path: "~/components/shared/tooltips" },
      { path: "~/components/shared/sidebar" },
      { path: "~/components/shared/navbar" },
      "~/components",
      "~/client-lib",
    ],
  },

  globalLoader: {
    background: "#000",
    foreground: "#fff",
    backgroundOpacity: "0.25",
    backgroundBlur: "1",
  },

  nitro: {},
  pages: true,

  notivue: {
    // Options
  },
  vite: {
    server: {
      host: "localhost",
      watch: {
        usePolling: false,
      },
    },
  },
});
