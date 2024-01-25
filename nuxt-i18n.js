import bzh from './locales/bzh.json';
import en from './locales/en.json';
import fr from './locales/fr.json';

export default {
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
    pages: {
        index: { en: '/', fr: '/', bzh: '/' },
        about: { 
            en: en.pages.about.url, 
            fr: fr.pages.about.url, 
            bzh: bzh.pages.about.url 
        },
        contact: { 
            en: en.pages.contact.url, 
            fr: fr.pages.contact.url, 
            bzh: bzh.pages.contact.url 
        },
        shows: { 
            en: en.pages.shows.url, 
            fr: fr.pages.shows.url, 
            bzh: bzh.pages.shows.url 
        },
        agenda: { 
            en: en.pages.agenda.url, 
            fr: fr.pages.agenda.url, 
            bzh: bzh.pages.agenda.url 
        },
        listen: { 
            en: en.pages.listen.url, 
            fr: fr.pages.listen.url, 
            bzh: bzh.pages.listen.url 
        },
        news: { 
            en: en.pages.news.url, 
            fr: fr.pages.news.url, 
            bzh: bzh.pages.news.url
            }
    },
    customRoutes: 'config',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'kouingig',
        redirectOn: 'root'
    },
}