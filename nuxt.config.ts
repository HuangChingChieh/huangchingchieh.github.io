// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/eslint"],
  features: {
    inlineStyles: false,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-Hant-TW",
        class: ["h-full", "w-full"],
      },
      bodyAttrs: {
        class: ["h-full", "w-full"],
      },
    },
    rootAttrs: {
      class: "h-full w-full",
    },
  },
});
