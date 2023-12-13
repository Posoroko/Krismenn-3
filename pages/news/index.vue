<script setup>
const { locale } = useI18n();

const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;
const dateToLocale = useDateToLocale();

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
    <PanelMain page="news" drawerPosition="right" v-if="activeImageUrl" :stripeImageDirectusUrl="activeImageUrl">
        <template #content>
            <div class=" articleBox flex" 
                :class="{ 'active' : activeArticle_id == article.id }"
                :data-id="article.id"
                :data-image="article.image"
                v-for="article in news" :key="article.id" 
                @click="handleArticleSelection">

                <div class="tinyFrame">
                    <img class="objectFitCover" :src="`${directusAssets}${article.image}`" alt="">
                </div>

                <div class="contentBox">
                    <h2 class="title">{{ article[locale].title }}</h2>
                    <p class="date">{{ dateToLocale(locale, article.date) }}</p>
                    <p class="content">{{ article[locale].content }}</p>
                </div>
            </div>
        </template>
    </PanelMain>
</template>

<style scoped>
.articleBox {
    border: 1px solid rgba(0, 41, 63, 0.438);
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(27, 1, 88, 0.253);
    background-color: #ffffff09;
    margin-top: 40px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 150ms ease-in-out;
}
.articleBox:hover {
    background-color: #ffffff15;
    box-shadow: 0px 0px 10px 0px rgba(27, 1, 88, 0.753);
    transition: all 50ms ease-in-out;
}

.articleBox::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("/images/metal.webp");
    filter: brightness(0.6) contrast(1.4) blur(1.5px) saturate(1.2);
    opacity: 0.45;
    mix-blend-mode: difference;
    background-size: cover;
    z-index: -1;
}
.tinyFrame {
    width: 100px;
    flex-shrink: 0;
    filter:  contrast(1.3) blur(0.5px) brightness(0.5);
    transition: width 300ms ease-in-out;
}
.articleBox.active .tinyFrame {
    width: 0;
    transition: width 300ms ease-out;
}
.articleBox:nth-child(1){
    margin-top: 0px;
}
.articleBox.active .contentBox {
    padding-left: 60px;
    transition: all 180ms ease-out;
}
.contentBox {
    padding: 40px;
    transition: all 150ms ease-out;
}
h2 {
    font-size: 3.5rem;
    font-weight: 700;
}
.articleBox.active .contentBox h2{
    font-size: 3.7rem;
    transition: all 120ms ease-out;
}
.date {
    font-size: 1.8rem;
    line-height: 1.5em;
    margin-top: 10px;
}
.content {
    color: rgba(255, 255, 255, 0.26);
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.5em;
    margin-top: 10px;
    transition: color 120ms ease-out;
}
.articleBox.active .contentBox .content{
    color: rgba(255, 255, 255, 0.822);
    transition: color 120ms ease-out;
}
</style>