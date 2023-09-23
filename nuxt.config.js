export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'huangchingchieh.github.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '嗨，我是阿傑。一名浮沈於前端汪洋的小碼農，主要使用的框架為Vue及其生態系。平常的興趣是喝飲料、玩手遊（鎖鏈戰記、歧路旅人：大陸的霸者）。',
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'ie=edge',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '~/assets/css/main.scss',
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
    componentPlugins: ['LayoutPlugin', 'ListGroupPlugin'],
    directivePlugins: [],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    // your settings here
    scss: ['~/assets/css/custom.scss'],
    // hoistUseStatements: true  // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    icon: {
      source: 'static/icon.png',
      fileName: 'icon.png',
      sizes: [32, 64, 120, 144, 152, 192, 384, 512],
      targetDir: 'icons',
      plugin: true,
      purpose: ['any', 'maskable'],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    babel: {
      // See: https://github.com/bootstrap-vue/bootstrap-vue/issues/5627
      compact: true,
    },
  },
}
