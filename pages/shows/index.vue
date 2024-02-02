<script setup>
const { t, locale } = useI18n();

const icons = useIconStrings();

const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;

const fetchUrl = `${directusItems}Shows`;
const fetchOptions = {
    query: {
        fields: ["*, translations.*"]
    }
}

const { data: shows } = await useAsyncData(
    "shows",
    async () => {
        const _items = await $fetch(fetchUrl, fetchOptions)
        let items = _items.data;

        items.forEach(item => {

            let _translations = {};

            item.translations.forEach( obj => {
                _translations[obj.languages_code] = obj;

            })
            item.translations = _translations;

        })

        return items;
    }
    ,
    { server: true }
)

definePageMeta({
    pageTransition: {
        name: 'slideFromLeft'
    }
})
</script>

<template>
    <PanelMain :title="t('pages.shows.title')" :showBackButton="false" drawerPosition="left" showStripeImage stripeImageSrc="/images/stripes/xl/brown.webp">
        <template #content>
            <p>

            </p>   

            <ul class="flex column gap50">
                <li class="card" v-for="show in shows" :key="show.id">
                    <PanelCardShows :show="show" :fullSize="false" />
                </li>
            </ul>
        </template>
    </PanelMain>
</template>

<style scoped>
ul {
    padding-bottom: 30px;
     
}
li.card {
    border-radius: 1px;
    overflow: hidden;
}
</style>