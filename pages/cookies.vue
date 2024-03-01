<script setup>
import { directusGetItems } from '@/directus/directus.js';
const { t } = useI18n();

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
        transitions: {
            _filter: {
                languages_code: {
                    _eq: 'fr'
                }
            }
        }
    }
}
const { data: items } = await useAsyncData(
    'cookies',
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
</script>

<template>
    <PanelMain :title="t('pages.cookies.title')">
        <div class="bigBox fontColor_light ">
            <div v-for="item in items" :key="item.id">
                <h2 class="cardTitle_format marTop50">{{ item.translations[0].title }}</h2>

                <p class="cardText_format marTop20">{{ item.translations[0].text }}</p>
            </div>
        </div>
    </PanelMain>
</template>