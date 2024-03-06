export default {
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
};