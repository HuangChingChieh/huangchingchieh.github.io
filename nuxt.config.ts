// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint", "@nuxt/icon", "@nuxt/image"],
  features: {
    inlineStyles: false,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-Hant-TW",
        class: ["md:h-full", "w-full"],
      },
      bodyAttrs: {
        class: ["md:h-full", "w-full"],
      },
    },
    rootAttrs: {
      class: "md:h-full w-full",
    },
  },
});
