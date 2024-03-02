export default defineNuxtConfig({
    ssr: true,
    spaLoadingTemplate: false,
    devtools: { enabled: false },
    css: [
        '~/assets/css/main.css',
        '~/assets/css/base/utility.css',
        '~/assets/css/base/reset.css',
        '~/assets/css/brand/colors.css',
        '~/assets/css/brand/fonts.css',
        '~/assets/css/brand/glass.css'
    ],
    
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/sitemap',
        'nuxt-simple-robots',
        'nuxt-schema-org'
    ],
    i18n: {
        lazy: true,
        locales: [
            {
                code: 'fr',
                name: 'Français',
                iso: 'fr-FR',
                file: 'fr.json'
            },
            {
                code: 'en',
                name: 'English',
                iso: 'en-US',
                file: 'en.json'
            },
            {
                code: 'bzh',
                name: 'Brezhoneg',
                iso: 'bzh-BZH',
                file: 'bzh.json'
            },
        ],
        defaultLocale: 'fr',
        langDir: 'locales',
        customRoutes: 'config',
        pages: {
            index: {
                en: "/",
                fr: "/",
                bzh: "/"
            },
            bastard: {
                en: "/bastard",
                fr: "/bastard",
                bzh: "/bastard"
            },
            about: {
                en: "/about",
                fr: "/bio",
                bzh: "/diwar-benn"
            },
            contact: {
                en: "/contact",
                fr: "/contact",
                bzh: "/kontakt"
            },
            "shows/index": {
                en: "/shows",
                fr: "/spectacles",
                bzh: "/abadennou"
            },
            "agenda/index": {
                en: "/agenda",
                fr: "/agenda",
                bzh: "/deiziataer"
            },
            listen: {
                en: "/listen",
                fr: "/ecouter",
                bzh: "/selaou"
            },
            "news/index": {
                en: "/news",
                fr: "/actualites",
                bzh: "/kelou"
            },
            "news/index/[slug]": {
                en: "/news",
                fr: "/actualites",
                bzh: "/kelou"
            },
            terms: {
                en: "/legal-terms",
                fr: "/mentions-legales",
                bzh: "/kemennadennou-lezennel"
            },
            cookies: {
                en: "/cookies",
                fr: "/cookies",
                bzh: "/cookies"
            }
        },
        strategy: 'prefix',
        detectBrowserLanguage: false
    },
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
    }
})
