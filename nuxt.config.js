export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '書道,習字,ペン字,筆文字,習い事,シンガポール,リバーバレー',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'canonical',
        href: process.env.BASE_URL,
      },
    ],
    script: [
      {
        src: `//typesquare.com/3/tsst/script/ja/typesquare.js?${process.env.TYPESQUARE_TOKEN}&fadein=100`,
        body: true,
      },
    ],
  },

  env: {
    SITE_NAME: process.env.SITE_NAME,
    BASE_URL: process.env.BASE_URL,
    TYPESQUARE_TOKEN: process.env.TYPESQUARE_TOKEN,
    CLOUDINARY_ID: process.env.CLOUDINARY_ID,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/click-outside.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/cloudinary',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      // html-minifier strips `type=text` which causes an issue with @tailwindcss/forms plugin
      // https://github.com/nuxt/nuxt.js/issues/1760
      // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build#htmlminify
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: false,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
  },

  // Cloudinary module configuration: https://cloudinary.nuxtjs.org/options
  cloudinary: {
    cloudName: process.env.CLOUDINARY_ID,
    useComponent: true,
  },
}
