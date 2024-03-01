<script setup>
import { directusGetItems } from '@/directus/directus.js';
const { t, locale } = useI18n();
const localePath = useLocalePath()

const getItems = directusGetItems();
const queryParams = {
    fields: ['*', 'translations.*', 'city.translations.*'],
    filter: {
        status: {
            _eq: 'published'
        },
    },
    sort: '-date_published',
    deep: {
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
                                defaultLocale: {
                                    _eq: 'noDefault'
                                }
                            }
                        ]
                    }
                ]
            }
        },
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
}

const { data: news } = await useAsyncData(
    'News',
    async () => {
        const items = await getItems('News', queryParams)

        return items
    },
    { server: true }
)

definePageMeta({
    pageTransition: {
        name: 'right'
    }
})

</script>

<template>
    <div class="absoluteFull centered">
        <PanelMain 
            v-if="news"
            :title="t('pages.news.title')" 
            drawerPosition="right"  
            :stripeImageDirectusUrl="activeImageUrl"
            showIntroText>

            <ul class="flex column gap20">
                <li v-for="article in news" :key="article.id" 
                    class="block frosty_border frosty_bg">

                    <NuxtLink class="block" :to="localePath(`/news/${article.translations[0].slug}`)">
                        <PanelCardNews :article="article"  summary />
                    </NuxtLink>
                </li>
            </ul>
        </PanelMain>
    </div>
</template>

<style scoped>
ul {
    padding: 3vw;
}

</style>