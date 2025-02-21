<script setup>
import { directusGetItems } from '@/directus/directus.js';

const { t, locale } = useI18n();

const route = useRoute();
console.log(route.params.slug);

const getItems = directusGetItems();
const queryParams = {
    fields: [
        '*', 
        'links.*',
        'links.Links_id.*',
        'translations.*', 
        'city.translations.*'
    ],
    filter: {
        status: {
            _eq: 'published'
        },
        translations: {
            slug: {
                _eq: route.params.slug
            }
        }
    },
    sort: '-date_published',
    deep: [
        {
            translations: {
                _filter: {
                    _or: [
                        {
                            languages_code: {
                                _eq: locale.value
                            }
                        },
                        {
                            isDefault: {
                                _eq: true
                            }
                        },
                        
                    ]
                }
            }
        },
        {
            city: {
                translations: {
                    _filter: {
                        _or: [
                            {
                                languages_code: {
                                    _eq: locale.value
                                }
                            },
                            {
                                isDefault: {
                                    _eq: true
                                }
                            },
                            
                        ]
                    }
                }
            }
        }
    ]
}

const { data: article } = await useAsyncData(
    route.params.slug,
    async () => {
        const items = await getItems('News', queryParams)

        items.forEach( item => {
            if(item.translations.length > 1) {
                item.translations = item.translations.filter( t => t.languages_code === locale.value)
            }

            if(item.city && item.city.translations.length > 1) {
                item.city.translations = item.city.translations.filter( t => t.languages_code === locale.value)
                }
            })
        
        return items[0]
    },
    { server: true }
)

definePageMeta({
    enterFrom: 'fade'
})
</script>

<template>
    <PanelMain :title="t('pages.news.title')" backButtonURL="/news" v-if="article">
        <PanelCardNews :article="article"  fullSize />
    </PanelMain>
</template>