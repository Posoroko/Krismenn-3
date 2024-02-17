// This file uses the Directus SDK to connect to the Directus 
// API and fetch data from the Directus database. 

import { createDirectus, rest, readItems } from '@directus/sdk';

const directusBaseUrl = 'https://krismenn.monsieuredgar.com/';

const directus = createDirectus(directusBaseUrl).with(rest());


const directusGetItems = () => {
    return async (collection, queryParams) => {
        const items = await directus.request(
            readItems(collection, queryParams)
        )
        return items;
    }
}

export { directusBaseUrl,  directusGetItems};