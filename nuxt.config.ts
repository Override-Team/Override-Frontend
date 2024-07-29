export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    "@nuxt/ui",
    "@nuxt/fonts",
    "nuxt-aos",
    "@nuxt/icon",
    '@nuxtjs/color-mode',
    '@formkit/nuxt',
    "nuxt-zod-i18n",
    "@nuxtjs/i18n",
    'nuxt-swiper'
  ],
  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2024-07-17'
})