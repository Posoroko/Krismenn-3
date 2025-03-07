export default defineAppConfig({
    directus: {
        items: "https://krismenn.monsieuredgar.com/items/",
        assets: "https://krismenn.monsieuredgar.com/assets/",
    },
    colorMode: {
        mode: 'black',
        backgroundImage: {
            full: {
                blue: 'b72e0ac4-d6a8-4e44-af20-1c362434e3e2',
                black:"758ab1b4-6e02-4798-83d3-f8db1c05cece",
                white: "26cace45-e0d1-4b27-b924-385fb92b88ed",
                cartoon: "44e53ba2-6a9f-44a0-a80b-10fe0af5aad0.png"
            },
            empty: {
                blue: "44959362-a309-49b2-a7ff-273393d2fd98",
                black: "0e9a1d15-6d76-4fae-8587-7fc2d06e5028",
                white: "ef8440f5-3764-4dbd-8a5c-f03ab1042725",
                cartoon: "daacee17-502d-4b74-8692-f1f737c96edc"
            }
        }
    },
    backgroundImage: {
        directusId: {
            // full: 'b72e0ac4-d6a8-4e44-af20-1c362434e3e2',,
            full: "758ab1b4-6e02-4798-83d3-f8db1c05cece.jpg",
            // empty: '44959362-a309-49b2-a7ff-273393d2fd98.png'
            empty: "0e9a1d15-6d76-4fae-8587-7fc2d06e5028.jpg"
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