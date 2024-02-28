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
            <p>

            </p>   

            <ul class="">
                <li v-for="show in shows" :key="show.id" class="block">
                    <NuxtLink :to="`/shows/${show.slug}`" class="card block full">
                        <PanelCardShows :show="show" :fullSize="false" />
                    </NuxtLink>
                </li>
            </ul>
        </PanelMain>
    </div>
</template>

<style scoped>
ul {
    display: flex;
    flex-direction: column;
}
@media (min-width: 900px) {
    ul {
        flex-direction: column;
        gap: 40px;
    }
}
@media (max-width: 899px) {
    ul {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        gap: 20px;
    }
    li {
        width: min(350px, 100%);
    }
}
</style>