export default {
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



// modules: [
//         [
//             '@nuxtjs/i18n',
//         {
            
//             locales: [
//                 {
//                     code: 'en',
//                     name: 'English',
//                     iso: 'en-US',
//                 },
//                 {
//                     code: 'fr',
//                     name: 'Français',
//                     iso: 'fr-FR',
//                 },
//                 {
//                     code: 'bzh',
//                     name: 'Brezhoneg',
//                     iso: 'bzh-BZH',
//                 },
//             ],
//             defaultLocale: 'en',
//             vueI18n: {
//                 fallbackLocale: 'en',
//                 messages: {
//                     en: require('./locales/en.json'),
//                     fr: require('./locales/fr.json'),
//                     bzh: require('./locales/bzh.json')
//                 },
//             },
//             pages: {
//                 home: { en: '/', fr: '/', bzh: '/' },
//                 about: { en: '/about', fr: '/a-propos', bzh: '/diwar-benn' },
//                 contact: { en: '/contact', fr: '/contact', bzh: '/kevreañ' },
//                 teams: { en: '/teams', fr: '/equipes', bzh: '/skouerien' },
//                 projects: { en: '/projects', fr: '/projets', bzh: '/projedoù' },
//                 agenda: { en: '/agenda', fr: '/agenda', bzh: '/kalendar' },
//                 listen: { en: '/listen', fr: '/ecouter', bzh: '/selaou' },
//                 news: { en: '/news', fr: '/actualites', bzh: '/nevez-amzer' },
//             },
//             customRoutes: 'config',
//             vueI18nLoader: true,
//             strategy: 'prefix_and_default',
//             detectBrowserLanguage: {
//                 useCookie: true,
//                 cookieKey: 'kouingig',
//                 redirectOn: 'root',  // recommended
//             },
//         }
//         ]
//     ],