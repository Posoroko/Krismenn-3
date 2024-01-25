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
                fr: "/a-propos",
                bzh: "/diwar-benn"
            },
            contact: {
                en: "/contact",
                fr: "/contact",
                bzh: "/darempred"
            },
            shows: {
                en: "/shows",
                fr: "/spectacles",
                bzh: "/abadennou"
            },
            agenda: {
                en: "/agenda",
                fr: "/agenda",
                bzh: "/deiziataer"
            },
            listen: {
                en: "/listen",
                fr: "/ecouter",
                bzh: "/selaou"
            },
            news: {
                en: "/news",
                fr: "/actualites",
                bzh: "/keleier"
            }
        },
        customRoutes: 'config',
        strategy: 'prefix_and_default',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'kouingig',
            redirectOn: 'root'
        }
    }
})
