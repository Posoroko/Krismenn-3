export default defineAppConfig({
    directus: {
        items: "https://krismenn.monsieuredgar.com/items/",
        assets: "https://krismenn.monsieuredgar.com/assets/",
    },
    backgroundImage: {
        directusId: {
            full: 'b72e0ac4-d6a8-4e44-af20-1c362434e3e2',
            empty: '44959362-a309-49b2-a7ff-273393d2fd98.png'
        },
        defaultSource: {
                key: 'bgi-1080-jpg',
                fileType: 'image/jpeg'
            },
        sources: [
            {   
                id: 2,
                media: 'min-height: 1081px',
                key: 'bgi-1440-webp',
                fileType: 'image/webp'
            },
            {
                id: 1,
                media: 'min-height: 1081px',
                key: 'bgi-1440-jpg',
                fileType: 'image/jpeg'
            },
            
            {
                id: 4,
                media: 'min-height: 721px',
                key: 'bgi-1080-webp',
                fileType: 'image/webp'
            },
            {
                id: 3,
                media: 'min-height: 721px',
                key: 'bgi-1080-jpg',
                fileType: 'image/jpeg'
            },
            
            {
                id: 6,
                media: 'min-height: 481px',
                key: 'bgi-720-webp',
                fileType: 'image/webp'
            },
            {
                id: 5,
                media: 'min-height: 481px',
                key: 'bgi-720-jpg',
                fileType: 'image/jpeg'
            },
            
            {
                id: 8,
                media: 'max-height: 480px',
                key: 'bgi-480-webp',
                fileType: 'image/webp'
            },
            {
                id: 7,
                media: 'max-height: 480px',
                key: 'bgi-480-jpg',
                fileType: 'image/jpeg'
            },
            
        ]
    },
    listeningPlatforms: [
        {
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
            displayName: 'Apple',
            text: '',
            href: 'https://music.apple.com/fr/artist/123456'
        },
        {
            id: 7,
            ref: 'youtube',
            displayName: 'YouTube',
            text: '',
            href: 'https://www.youtube.com/channel/UC6PljAdsbh8lLwACcYLn8M8'
        },
        {
            id: 8,
            ref: 'bandcamp',
            displayName: 'Bandcamp',
            text: '',
            href: 'https://krismenn.bandcamp.com/album/n-om-gustumi-deus-an-de-valijenn'
        },
        
    ]
})