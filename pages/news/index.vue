<script setup>
const { t, locale } = useI18n();

const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;

const fetchUrl = `${directusItems}News`;
const fetchOptions = {
    query: {
        fields: ["*, translations.*"]
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
        name: 'slideFromRight'
    }
})


</script>

<template>
    <PanelMain 
        v-if="news"
        page="news" 
        drawerPosition="right"  
        :stripeImageDirectusUrl="activeImageUrl"
        showIntroText>

        <template #content>
            <ul>
                <li v-for="n in news" :key="n.id">
                    <PanelCardMain>
                        <p class="cardTitle_format">{{ n.translations[locale].title }}</p>
                    </PanelCardMain>
                </li>
            </ul>
        </template>
    </PanelMain>
</template>

<style scoped>
p {
    font-family: 'Nimbus Mono PS', 'Courier New', monospace; 
    font-size: 16px;
    font-weight: 600;
    color: white;
}

</style>