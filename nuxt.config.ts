// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/assets/styles/overrides.scss"],
    modules: [
        "@vuestic/nuxt",
        "@pinia/nuxt",
    ],
    components: {
        global: true,
        dirs: [
            { path: '~/components/tooltips' },
            '~/components',
        ]
    },
})
