<script setup>
import { directusGetItems } from '@/directus/directus.js';
const getItems = directusGetItems();
const { t, locale } = useI18n();

const queryParams = {
    fields: ['*', 'translations.*'],
    filter: {
        state: {
            _eq: 'permanent'
        },
    },
    deep: {
        translations: {
            _filter: {
                languages_code: {
                    _eq: locale.value
                }
            }
        }
    }
}

const { data: shows } = await useAsyncData(
    'shows',
    async () => {
        const items = await getItems('Shows', queryParams)

        return items
    },
    { server: true }
)


definePageMeta({
    pageTransition: {
        name: 'left'
    }
})
</script>

<template>
    <div class="absoluteFull centered">
        <PanelMain :title="t('pages.shows.title')" :showBackButton="false" drawerPosition="left" showStripeImage stripeImageSrc="/images/stripes/xl/brown.webp">
            <template #content>
                <p>

                </p>   

                <ul class="flex column gap50">
                    <li v-for="show in shows" :key="show.id" class="">
                        <NuxtLink :to="`/shows/${show.slug}`" class="card block h100 flex">
                            <PanelCardShows :show="show" :fullSize="false" />
                        </NuxtLink>
                    </li>
                </ul>
            </template>
        </PanelMain>
    </div>
</template>

<style scoped>
ul {
    padding-bottom: 30px;
    /* display: grid; */
    /* grid-template-columns: repeat(2, 1fr); */
    /* gap: 20px; */
}

/* @media (max-width: 768px) {
    ul {
        grid-template-columns: 1fr;
    }
} */

li.card {
    border-radius: 1px;
    overflow: hidden;
}
/* .card {
    box-shadow: 0 1px 3px 0 rgba(0, 32, 51, 0.473);
} */
</style>