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
                _eq: route.params.id
            }
        },
        fields: ["*, translations.*"]
    }
}

const { data: article } = await useAsyncData(
    "newsById",
    async () => {
        const items = await $fetch(fetchUrl, fetchOptions);

        let temp = {
            id: `${items.data[0].id}`,
            date: items.data[0].date_published,
            image: items.data[0].image,
            fr: {},
            en: {},
            bzh: {}
        }

        items.data[0].translations.forEach((translation) => {
            temp[translation.languages_code] = translation;
        })

        return temp;
    }
    ,
    { server: true }
)

</script>
<template>
    <PanelMain page="news" drawerPosition="right" v-if="article" :stripeImageDirectusUrl="`${directusAssets}${article.image}`">
        <template #content>
            <!-- {{article}} -->
            <PanelArticleCard 
                :articlePage="true"
                :article="article"
                :class="{ 'active': activeArticle_id == article.id }"
                :data-id="article.id" 
                :data-image="article.image"/>
        </template>
    </PanelMain>
</template>