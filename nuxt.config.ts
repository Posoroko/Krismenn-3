import i18n from './i18n.config';

export default defineNuxtConfig({
  vite: {
      server: {
          allowedHosts: true
      }
  },

  ssr: true,
  spaLoadingTemplate: false,
  devtools: { enabled: false },

  css: [
      '~/assets/css/base/reset.css',
      '~/assets/css/main.css',
      '~/assets/css/base/utility.css',
      '~/assets/css/brand/colors.css',
      '~/assets/css/brand/fonts.css',
      '~/assets/css/brand/glass.css',
    //   '~/assets/css/pageTransition.css'
  ],

  modules: [
      '@nuxtjs/i18n',
      '@nuxtjs/sitemap',
      // 'nuxt-simple-robots',
      // 'nuxt-schema-org',
      // 'nuxt-og-image',
      
  ],

  i18n,

  site: {
      url: 'https://krismenn.com',
      name: 'Krismenn',
  },

  app: {
      head: {
          charset: 'utf-8', // default
          viewport: 'width=device-width, initial-scale=1', // default
          // base: { target: '_blank', href: 'https://bastardprod.com' }, // default
          link: [
              { rel: 'icon', type: 'image/x-icon', href: '/images/webContent/favicon.ico' },
              { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/webContent/apple-touch-icon.png' },
              { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/webContent/favicon-32x32.png' },
              { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/webContent/favicon-16x16.png' },
              { rel: 'manifest', href: '/images/webContent/site.webmanifest' },
              { rel: 'mask-icon', href: '/images/webContent/safari-pinned-tab.svg', color: '#5bbad5' },
              { rel: 'shortcut icon', href: '/images/webContent/favicon.ico' }
          ],
          meta: [
              
              // { name: 'og:image' , property: 'og:image', content: '/seo-assets/og-banner.jpg' },
              // { name: 'og:image:width' , property: 'og:image:width', content: '1200' },
              // { name: 'og:image:height' , property: 'og:image:height', content: '630' },
              // { name: 'og:image:alt' , property: 'og:image:alt', content: 'Krismenn' },
              // { name: 'og:image:type' , property: 'og:image:type', content: 'image/jpg' },
              // { name: 'og:image:secure_url' , property: 'og:image:secure_url', content: 'https://krismenn.com/images/webContent/og-banner.jpg' },
              { name: 'og:type' , property: 'og:type', content: 'website' },
              { name: 'fb:app_id' , property: 'fb:app_id', content: '3436291' },
          ]
      }
  },

  compatibilityDate: '2025-02-14'
})