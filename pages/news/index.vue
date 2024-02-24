<script setup>
const { t, locale } = useI18n();
const appState = useAppState();
const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;


const fetchUrl = `${directusItems}News`;
const fetchOptions = {
    query: {
        fields: ["*, translations.*"],
        sort: "-date_published"
    }
}

const { data: news } = await useAsyncData(
    "news",
    async () => {
        const _items = await $fetch(fetchUrl, fetchOptions)
        let items = _items.data;

        items.forEach(item => {

            let _translations = {};

            item.translations.forEach(obj => {
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
        name: 'right'
    },
    // middleware(to, from) {
    //     console.log(this.pageTransition.name);
    //     // if(to.meta.pageTransition === 'right') {

    //     // }
    // }
})

</script>

<template>
    <div class="absoluteFull centered">
        <PanelMain 
            v-if="news"
            :title="t('pages.news.title')" 
            drawerPosition="right"  
            :stripeImageDirectusUrl="activeImageUrl"
            showIntroText>

            <template #content>            
                <ul class="flex column gap20">
                    <li v-for="n in news" :key="n.id" class="block frosty_border frosty_bg">
                        <PanelCardNews :article="n"  summary />
                    </li>
                </ul>
            </template>
        </PanelMain>
    </div>
</template>

<style scoped>
ul {
    padding: 3vw;
}

</style>