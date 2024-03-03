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
        transitions: {
            _filter: {
                languages_code: {
                    _eq: 'fr'
                }
            }
        }
    }
}
const { data: terms } = await useAsyncData(
    'albums',
    async () => {
        const items = await getItems('Legal_notes', queryParams);
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
    <PanelMain :title="t('pages.terms.title')">
        <div class="bigBox fontColor_light ">
            <div v-for="term in terms" :key="term.id">
                <h2 class="cardTitle_format marTop50">{{ term.translations[0].title }}</h2>

                <p class="cardText_format marTop20">{{ term.translations[0].text }}</p>
            </div>
        </div>
    </PanelMain>
</template>
