<script setup>
const { t, locale } = useI18n();

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

const route = useRoute();
const showSlug = ref(route.params.slug);

const props = defineProps({
    show: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <li class="card">
        <NuxtLink :to="`/live/${show.slug}`" class="flex nuxtLink column full">
            <div class="frame relative">
                <img class="objectFitCover" :src="`${directusAssets}${show.mainImage}?key=panel-head-800x400-jpg`"
                    alt="">
            </div>

            <div class="grow contentBox flex column justifyBetween" v-if="show.translations[0]">
                <div>
                    <h2 class="cardTitle_format fontColor_light">{{ show.title }}</h2>

                    <p class="cardSubtitle_format definition fontColor_light">{{ show.translations[0].definition }}</p>
                </div>

                <p class="description cardText_format fontColor_light marTop20">
                    {{ show.translations[0].description}}
                </p>

                <div class="marTop50" v-if="fullSize">
                    <PanelSection :title="t('global.videos')" v-if="show.youtubes.length" showTopBorder>
                        <template #content>
                            <PanelSectionContentVideos :showSlug="show.slug" />
                        </template>
                    </PanelSection>

                    <PanelSection :title="t('global.links')" v-if="fullSize && show.links" showTopBorder>
                        <template #content>
                            <PanelCardLinks :links="show.links" />
                        </template>
                    </PanelSection>

                    <PanelCardContactBox v-if="show.telephone || show.email || show.website" :email="show.email"
                        :telephone="show.telephone" :website="show.website" />

                    <PanelSection v-if="fullSize && showSlug" :title="t('pages.agenda.title')" showTopBorder>
                        <template #content>
                            <PanelSectionAgenda :filter="{ 
                                show: {
                                    slug: {
                                        _eq: showSlug
                                    }
                                }
                            }" />
                        </template>
                    </PanelSection>

                </div>

                <div class="flex justifyEnd marTop20" v-else>
                    <PanelButtonReadMore :href="`/shows/${show.slug}`" class="moreButton" />
                </div>

            </div>
        </NuxtLink>
    </li>
</template>

<style scoped>

.card {
    width: min(650px, 100%);
    flex-shrink: 0;
    padding-right: 100px;
    pointer-events: all;
    user-select: none;
}
.card img {
    pointer-events: none;
    user-select: none;
}
.card .nuxtLink {
    border-left: 1px solid rgba(255, 255, 255, 0.182);
    /* border-right: 1px solid rgba(255, 255, 255, 0.182); */
    padding: 20px;
}
.card .nuxtLink:hover {
    background-color: #ffffff03;
}
.frame {
    height: 30%;
}
.contentBox {
    
    padding: 30px 0;
}
</style>