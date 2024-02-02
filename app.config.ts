import bzh from './locales/bzh.json';
import en from './locales/en.json';
import fr from './locales/fr.json';

export default defineAppConfig({
    directus: {
        items: "https://krismenn.monsieuredgar.com/items/",
        assets: "https://krismenn.monsieuredgar.com/assets/",
    },
    panelStripeImages: {
        teams: "louise.webp",
        projects: "brown2.webp",
        agenda: "scene-god-rays.webp",
        listen: "folklore.webp",
        contact: "brown.webp"
    },
    themes: {
        available: ['blue'],
        blue: {
            backgroundImage: {
                fileName: "blue.webp",
                folderUrl: "/images/background/blue",
                fallbackFormat: "jpg"
            }
        }
    },
    routes: {
        index: {
            en: "/",
            fr: "/",
            bzh: "/"
        },
        about: {
            en: "/about",
            fr: "/a-propos",
            bzh: "/diwar-benn"
        },
        bastard: {
            en: "/bastard",
            fr: "/bastard",
            bzh: "/bastard"
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
    }
})