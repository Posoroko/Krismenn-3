<script setup>
const route = useRoute();

const { t, locale } = useI18n();
const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;

const fetchUrl = `${directusItems}News`;
const fetchOptions = {
    query: {
        filter: {
            id: {
                _eq: route.query.id
            }
        },
        fields: ["*, translations.*,city.translations.name,city.translations.languages_code"]
    }
}

const { data: article } = await useAsyncData(
    "newsById",
    async () => {
        const items = await $fetch(fetchUrl, fetchOptions)
        let item = items.data[0];

        let _translations = {};

        item.translations.forEach(obj => {
            _translations[obj.languages_code] = obj;
        })
        item.city.translations.forEach(obj => {
            _translations[obj.languages_code].city = obj.name;
        })
        item.translations = _translations;

        return item;
    }
    ,
    { server: true }
)

</script>
<template>
    <PanelMain :title="article.translations[locale].title" backButtonURL="/news" drawerPosition="right">
        <template #content>
            <PanelCardNews :article="article"  :summary="false" />
        </template>
    </PanelMain>
</template>