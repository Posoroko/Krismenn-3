<script setup>
import { directusGetItems } from '@/directus/directus.js';

const { t, locale } = useI18n();

const route = useRoute();
console.log(route.params.slug);

const getItems = directusGetItems();
const queryParams = {
    fields: ['*', 'translations.*', 'city.translations.*'],
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
                            defaultLocale: {
                                _eq: 'default'
                            }
                        },
                        {
                            _and: [
                                {
                                    languages_code: {
                                        _eq: locale.value
                                    }
                                },
                                {
                                    _or: [
                                        {
                                            defaultLocale: {
                                                _eq: 'noDefault'
                                            }
                                        },
                                        {
                                            defaultLocale: {
                                                _eq: null
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        },
        {
            city: {
                translations: {
                    _filter: {
                        languages_code: {
                            _eq: locale.value
                        }
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

        return items[0]
    },
    { server: true }
)

definePageMeta({
    pageTransition: {
        name: 'fade'
    }
})
</script>
<template>
    <div class="absoluteFull centered" v-if="article">
        <PanelMain :title="t('pages.news.title')" backButtonURL="/news">
            <PanelCardNews :article="article"  :summary="false" />
        </PanelMain>
    </div>
</template>