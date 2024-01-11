<script setup>


const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;

const { data: news } = await useAsyncData(
    "news",
    async () => {
        const items = await $fetch(`${directusItems}News?fields=id,date_published,image,translations.*`);
        let _items = items.data;
        let formatedItems = [];

        _items.forEach((item) => {
            let temp = {
                id: `${item.id}`,
                date: item.date_published,
                image: item.image,
                fr: {},
                en: {},
                bzh: {}
            }

            item.translations.forEach((translation) => {
                temp[translation.languages_code] = translation;
            })

            formatedItems.push(temp);
        })

        return formatedItems;
    }
    ,
    { server: true }
)

definePageMeta({
    pageTransition: {
        name: 'slideFromRight'
    }
})

const activeArticle_id = ref(null);
const activeImageUrl = ref(null);

onMounted(()=> {
    activeArticle_id.value = news.value[0].id;
    activeImageUrl.value = `${directusAssets}${news.value[0].image}`;
})

function handleArticleSelection(e) {
    if (activeArticle_id.value == e.currentTarget.dataset.id) {
        return;
    }
    activeArticle_id.value = e.currentTarget.dataset.id;
    activeImageUrl.value = `${directusAssets}${e.currentTarget.dataset.image}`;
}

</script>

<template>
    <PanelMain 
        v-if="news"
        page="news" 
        drawerPosition="right"  
        :stripeImageDirectusUrl="activeImageUrl"
        showIntroText>

        <template #content>
            <PanelArticleCard 
                v-for="article in news" :key="article.id" 
                :article="article"
                :class="{ 'active': activeArticle_id == article.id }"
                @click="handleArticleSelection" 
                :data-id="article.id" 
                :data-image="article.image"
                />
        </template>
    </PanelMain>
</template>

<style scoped>


</style>