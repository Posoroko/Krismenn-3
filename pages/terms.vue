<script setup>
import { directusGetItems } from '@/directus/directus.js';
const { t, locale } = useI18n();

// data fetching
const getItems = directusGetItems();
const queryParams = {
    fields: ['*', 'translations.*'],
    filter: {
        category: {
            _eq: 'legalTerms'
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

const { data: terms } = await useAsyncData(
    'legal',
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
    pageTransition: {
        name: 'fade'
    }
})

// SEO, meta tags, head content

const pageRef = "terms";
const ogUrl = computed(() => {
    let url = t(`pages.${pageRef}.url`);

    return `https://krismenn.com/${locale.value}${url}`
})
const useHeadContent = useCreateUseHead( pageRef, ogUrl, t);
useHead( useHeadContent );
</script>

<template>
    <PanelMain :title="t('pages.terms.title')" v-if="terms">
        <div class="bigBox fontColor_light ">
            <div v-for="term in terms" :key="term.id">
                <h2 class="cardTitle_format marTop50" v-if="term.translations[0]">{{ term.translations[0].title }}</h2>

                <p class="cardText_format marTop20" v-if="term.translations[0]">{{ term.translations[0].text }}</p>
            </div>
        </div>
    </PanelMain>
</template>
