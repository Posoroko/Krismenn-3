<script setup>
const { t, locale } = useI18n();
const dateToLacale = useDateToLocale();

const props = defineProps({
    article: Object,
    summary: Boolean
})
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

</script>

<template>
    <div class="card glassSurface flex" :class="{'absolute' : !summary }" v-if="article">
        <div class="frame">
            <img :src="`${directusAssets}${article.image}`" alt="">
        </div>

        <div class="contentBox">
            <p class="date cardSubtitle_format fontColor_light">
                <span class="cardSubtitle_format">{{ new Date(article.date_published).toLocaleDateString(locale) }}, </span>
                <span>{{ article.translations[locale].city }}</span>
            </p>
            <h1 v-if="summary" class="title cardTitle_format fontColor_light">{{ article.translations[locale].title }}</h1>
            <p v-if="summary" class="content cardText_format fontColor_light summary">{{ article.translations[locale].content.slice(0, 200) }} ...</p>
            <p v-else class="content cardText_format fontColor_light">{{ article.translations[locale].content }}</p>

            <PanelButtonReadMore v-if="summary" :href="`/news/${article.translations[locale].slug}?id=${article.id}`" />
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 100%;
    height: 100%;
}
.frame {
    width: clamp(50px, 8vw, 100px);
    flex-shrink: 0;
}
.frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

}
.contentBox{
    height: 100%;
    padding: max(3vw, 30px);
    flex-grow: 1;
    overflow: scroll;
}

.title {
    margin-top: 5px;
}
.content {
    margin-top: 20px;
    white-space: pre-wrap;
}
</style>