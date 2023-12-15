// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    devtools: { enabled: true },
    css: ['@/assets/css/main.css'],
    ssr: false,
    modules: [
        '@nuxtjs/i18n'
    ],
    i18n: {
        lazy: true,
        // legacy: false,
        // locale: 'en',
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
        defaultLocale: 'en',
        langDir: 'locales',
        // vueI18n: {
        //     fallbackLocale: 'en'
        // },
        pages: {
            home: { en: '/', fr: '/', bzh: '/' },
            about: { en: '/about', fr: '/a-propos', bzh: '/diwar-benn' },
            contact: { en: '/contact', fr: '/contact', bzh: '/kevreañ' },
            teams: { en: '/teams', fr: '/equipes', bzh: '/skouerien' },
            projects: { en: '/projects', fr: '/projets', bzh: '/projedoù' },
            agenda: { en: '/agenda', fr: '/agenda', bzh: '/kalendar' },
            listen: { en: '/listen', fr: '/ecouter', bzh: '/selaou' },
            news: { en: '/news', fr: '/actualites', bzh: '/nevez-amzer' },
        },
        customRoutes: 'config',
        strategy: 'prefix_and_default',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'kouingig',
            redirectOn: 'root',  // recommended
        },
    }
})
