<script setup>
const { t, locale } = useI18n();

const props = defineProps({
    article: Object,
    fullSize: Boolean
})
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

</script>

<template>
    <article class="card relative" :class="{ 'smallSize' : !fullSize }" v-if="article">
        <div class="frame">
            <img :src="`${directusAssets}${article.image}?key=stripe-h400`" alt="">
        </div>

        <div class="contentBox">
            <p class="date cardSubtitle_format fontColor_light">
                <span class="cardSubtitle_format">{{ new Date(article.date_published).toLocaleDateString(0) }} </span>
                <span  v-if="article.city !== null">, {{ article.city.translations[0].name }}</span>
            </p>

            <h1 class="title cardTitle_format fontColor_light">{{ article.translations[0].title }}</h1>

            <p v-if="!fullSize" class="content cardText_format fontColor_light summary">
                {{ article.translations[0].content.slice(0, 200) }} ... 
                <span class="boxShadow italic underline">lire la suite</span>
            </p>
            <p v-else class="content cardText_format fontColor_light">{{ article.translations[0].content }}</p>

            <PanelSection 
                :title="t('global.links')" 
                showTopBorder 
                v-if="fullSize && article.links.length">
                
                <template #content>
                    <PanelCardLinks :links="article.links" />
                </template>
            </PanelSection>

            <!-- <PanelButtonReadMore class="readMore" v-if="!fullSize" /> -->
        </div>
    </article>
</template>

<style scoped>
.card {
    width: 100%;
    display: flex;
}

.card.smallSize {
    box-shadow: var(--card-shadow);
}
.card.smallSize:hover {
    box-shadow: var(--card-shadow-hover);
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
    height: 300px;
    flex-shrink: 0;
}

.frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

}
.card.smallSize .contentBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.contentBox{
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
.boxShadow {
    white-space: nowrap;
}
@media (max-width: 899px) {
    .frame {
        width: min(300px, 100%);
        height: 250px;
    }

    .card {
        padding: 20px;
        flex-direction: column;
    }
    .contentBox {
        padding-left: 0;
    }
}
</style>