// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/ui", "@nuxt/fonts", "nuxt-aos", "@nuxt/icon", '@nuxtjs/color-mode', '@nuxtjs/tailwindcss'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectionPosition: 0,
    viewer: true,
  },

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2024-07-17'
})