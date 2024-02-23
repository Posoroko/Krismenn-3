export default defineNuxtConfig({
    spaLoadingTemplate: false,
    app: {
        pageTransition: { name: 'page', mode: 'in-out' }
    },
    devtools: { enabled: true },
    css: ['@/assets/css/main.css'],
    ssr: false,
    modules: [
        '@nuxtjs/i18n'
    ],
    i18n: {
        lazy: true,
        locales: [
            {
                code: 'en',
                name: 'English',
                iso: 'en-US',
                file: 'en.json'
            },
            {
                code: 'fr',
                name: 'Français',
                iso: 'fr-FR',
                file: 'fr.json'
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
            "shows/index/[slug]": {
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
            }
        },
        strategy: 'prefix',
        detectBrowserLanguage: false
    }
})
