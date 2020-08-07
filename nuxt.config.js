
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  * Runtime config
  * https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config/
  */
  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.CLIENT_URL || 'https://bil-cms.klement.dev'
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.SERVER_URL || 'http://strapi:1337'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/normalize.css',
    '~assets/styles/global.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast'
  ],
  /*
   * Toaster configuration
   */
  toast: {
    position: 'top-center'
  },
  /*
   * Router configuration
   */
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    middleware: ['mobile']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
