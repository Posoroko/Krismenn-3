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
    // activeTheme: 'blue',
    // themes: {
    //     blue: {
    //         id: 0,
    //         name: "blue",
    //         backgroundImage: "blue.webp",
    //         buttonColor: "#0a2d51",
    //         shadowColor: "0 0 10px 5px rgba(112, 248, 255, 0.569)",
    //         insetShadowColor: "inset 0 0 20px 5px rgba(211, 253, 255, 0.164)",
    //         borderColor: "rgb(255, 255, 255)",
    //         panelTitleBackgroundColor: "linear-gradient(0deg, transparent 0%, rgba(70, 180, 253, 0.274) 100%)"
    //     }
    // },
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