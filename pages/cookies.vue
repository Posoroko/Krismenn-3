<script setup>
import { directusGetItems } from '@/directus/directus.js';
const { t, locale } = useI18n();

// data fetching
const getItems = directusGetItems();
const queryParams = {
    fields: ['*', 'translations.*'],
    filter: {
        category: {
            _eq: 'cookies'
        }
    },
    deep: {
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
const { data: items } = await useAsyncData(
    'cookies',
    async () => {
        const items = await getItems('Legal_notes', queryParams);

        items.forEach( item => {
            if(item.translations.length > 1) {
                item.translations = item.translations.filter( t => t.languages_code === locale.value)
            }
        })

        return items
    },
    { server: true }
)

definePageMeta({
    enterFrom: 'fade'
})

// SEO, meta tags, head content

const pageRef = "cookies";
const ogUrl = computed(() => {
    let url = t(`pages.${pageRef}.url`);

    return `https://krismenn.com/${locale.value}${url}`
})
const useHeadContent = useCreateUseHead( pageRef, ogUrl, t);
useHead( useHeadContent );
</script>

<template>
    <PanelMain :title="t('pages.cookies.title')">
        <template #scrollBox>
            <div class="bigBox fontColor_light ">
                <div v-for="item in items" :key="item.id">
                    <h2 class="cardTitle_format marTop50" v-if="item.translations[0]">{{ item.translations[0].title }}
                    </h2>

                    <p class="cardText_format marTop20" v-if="item.translations[0]">{{ item.translations[0].text }}</p>
                </div>
            </div>
        </template>
    </PanelMain>
</template>