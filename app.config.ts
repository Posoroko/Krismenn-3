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
    },
    listeningPlatforms: [{
            id: 0,
            ref: 'spotify',
            displayName: 'Spotify',
            text: '',
            href: 'spotify:artist:6PljAdsbh8lLwACcYLn8M8?si=4oLqxv3hTFypljo_8EBdHQ'
        },
        {
            id: 1,
            ref: 'deezer',
            displayName: 'Deezer',
            text: '',
            href: 'https://www.deezer.com/fr/artist/123456'
        },
        {
            id: 2,
            ref: 'apple',
            displayName: 'Apple Music',
            text: '',
            href: 'https://music.apple.com/fr/artist/123456'
        },
        // {
        //     id: 3,
        //     ref: 'amazonMusic',
        //     displayName: 'Amazon Music',
        //     text: '',
        //     href: 'https://music.amazon.fr/artists/B08BZ3Z3Z3'
        // },
        // {
        //     id: 4,
        //     ref: 'youtubeMusic',
        //     displayName: 'YouTube Music',
        //     text: '',
        //     href: 'https://music.youtube.com/channel/UC6PljAdsbh8lLwACcYLn8M8'
        // },
        {
            id: 7,
            ref: 'youtube',
            displayName: 'YouTube',
            text: '',
            href: 'https://www.youtube.com/channel/UC6PljAdsbh8lLwACcYLn8M8'
        }
    ]
})