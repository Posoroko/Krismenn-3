<script setup>
console.log("news/[id].vue");
const route = useRoute();

const { locale } = useI18n();
const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;
const dateToLocale = useDateToLocale();
const { data: article } = await useAsyncData(
    "newsById",
    async () => {
        const items = await $fetch(`${directusItems}News?filter[id][_eq]=${route.params.id}&fields=id,date_published,image,translations.*`);

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