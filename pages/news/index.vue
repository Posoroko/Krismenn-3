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
    deep:  [
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
                        }
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

const { data: news } = await useAsyncData(
    'News',
    async () => {
        const items = await getItems('News', queryParams)

        items.forEach((item) => {
            if(item.translations.length > 1) {
                item.translations = item.translations.filter( t => t.languages_code === locale.value)
            }

            if(item.city && item.city.translations.length > 1) {
                item.city.translations = item.city.translations.filter( t => t.languages_code === locale.value)
            }
        })

        return items
    },
    { server: true }
)

definePageMeta({
    pageTransition: {
        name: 'right'
    }
})
// SEO, meta tags, head content

const pageRef = "news";
const ogUrl = computed(() => {
    let url = t(`pages.${pageRef}.url`);

    return `https://krismenn.com/${locale.value}${url}`
})
const useHeadContent = useCreateUseHead( pageRef, ogUrl, t);
useHead( useHeadContent );
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

                    <NuxtLink class="block" :to="localePath(`/news/${article.translations[0].slug}`)" v-if="article.translations[0]">
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