// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    devtools: { enabled: true },
    css: ['@/assets/css/main.css'],
    ssr: false,
    modules: [
        '@nuxtjs/i18n',
    ],
    
    i18n: {
        baseUrl: 'https://krismenn.netlify.app',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'kouingig',
            redirectOn: 'root',  // recommended
        },
        strategy: 'prefix_and_default',
        defaultLocale: 'en',
        locale: 'En',
        locales: [
            {
                code: 'en',
                name: 'English',
                iso: 'en-US',
            },
            {
                code: 'fr',
                name: 'Français',
                iso: 'fr-FR',
            },
            {
                code: 'bzh',
                name: 'Brezhoneg',
                iso: 'bzh-BZH',
            },
        ],
        customRoutes: 'config',
        vueI18nLoader: true,
        pages: {
            home: { en: '/', fr: '/', bzh: '/' },
            about: { en: '/about', fr: '/a-propos', bzh: '/diwar-benn' },
            contact: { en: '/contact', fr: '/contact', bzh: '/kevreañ' },
            teams: { en: '/teams', fr: '/equipes', bzh: '/skouerien' },
            projects: { en: '/projects', fr: '/projets', bzh: '/projedoù' },
            agenda: { en: '/agenda', fr: '/agenda', bzh: '/kalendar' },
            listen: { en: '/listen', fr: '/ecouter', bzh: '/selaou' },
            news: { en: '/news', fr: '/actualites', bzh: '/nevez-amzer' },
        }
    },
    
})
