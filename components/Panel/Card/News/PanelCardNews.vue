<script setup>
const { t, locale } = useI18n();
const localePath = useLocalePath()
const dateToLacale = useDateToLocale();

const props = defineProps({
    article: Object,
    summary: Boolean
})
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

</script>

<template>
    <article class="card flex relative" v-if="article">
        <div class="frame" :class="{ 'stripe' : summary === true }">
            <img :src="`${directusAssets}${article.image}?key=stripe-h400`" alt="">
        </div>

        <div class="contentBox">
            <p class="date cardSubtitle_format fontColor_light">
                <span class="cardSubtitle_format">{{ new Date(article.date_published).toLocaleDateString(0) }} </span>
                <span  v-if="article.city !== null">, {{ article.city.translations[0].name }}</span>
            </p>

            <h1 class="title cardTitle_format fontColor_light">{{ article.translations[0].title }}</h1>

            <p v-if="summary" class="content cardText_format fontColor_light summary">{{ article.translations[0].content.slice(0, 200) }} ...</p>
            <p v-else class="content cardText_format fontColor_light">{{ article.translations[0].content }}</p>

            <nav class="links" v-if="!summary && article.links">
                <ul>
                    <li v-for="link in article.links" :key="link.Links_id.id" >
                        <p class=" cardSubtitle_format fontColor_light">{{ link.Links_id.title }}</p>
                        <a class="link cardText_format fontColor_light underline" :href="link.Links_id.url">{{ link.Links_id.url }}</a>
                    </li>
                </ul>
            </nav>

            <PanelButtonReadMore class="readMore" v-if="summary" />
        </div>
    </article>
</template>

<style scoped>
.links {
    padding: min(2vw, 20px);
    border-top: 1px solid rgba(255, 255, 255, 0.233);
    margin-top: 50px;
}
.links .link {
    padding-left: 20px;
}
.card {
    width: 100%;
    /* height: 100%; */
}
@media (hover : hover) {
    .readMore {
        opacity: 0;
        transition: 300ms ease; 
    }
    .card:hover .readMore {
        opacity: 1;
        transition: 300ms ease; 
    }
}
.frame {
    width: 350px;
    height: 500px;
    flex-shrink: 0;
}
.frame.stripe {
    width: clamp(50px, 8vw, 100px);
    height: auto;
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