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
    },
    fullSize: Boolean,
    showSlug: String
})
</script>

<template>
    <div class="card block h100 flex grow relative" :class="{ 'fullSize' : fullSize }" v-if="show">
        <div class="frame relative">
            <picture>
                <source :srcset="`${directusAssets}${show.mainImage}?key=panel-head-800x400-webp`">
        
                <img class="image" :src="`${directusAssets}${show.mainImage}?key=panel-head-800x400-jpg`" alt="">
            </picture>
        </div>

        <div class="contentBox grow flex column justifyBetween" v-if="show.translations[0]">
            <h1 class="cardTitle_format fontColor_light">{{ show.translations[0].title }}</h1>

            <p class="cardSubtitle_format definition fontColor_light">{{ show.translations[0].definition }}</p>

            <p v-if="fullSize" class="description cardText_format fontColor_light">{{ show.translations[0].description }}</p>

            <p v-else class="description cardText_format fontColor_light">{{ show.translations[0].description?.slice(0, 200) }}</p>

            <div class="marTop50" v-if="fullSize">
                <PanelSection :title="t('global.videos')" v-if="show.youtubes.length">
                    <template #content>
                        <PanelSectionVideos :showSlug="show.slug" />
                    </template>
                </PanelSection>

                <PanelCardContactBox 
                    v-if="show.telephone || show.email || show.website" 
                    :email="show.email" 
                    :telephone="show.telephne" 
                    :website="show.website"/>
                
                <PanelSection v-if="fullSize && showSlug" :title="t('pages.agenda.title')">
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
            
            <div class="flex justifyEnd marTop20" v-else >
                <PanelButtonReadMore :href="`/shows/${show.slug}`" class="moreButton" />
            </div>
        </div>
    </div>
    
</template>

<style scoped>
.fullSize {
    flex-direction: column;
    gap: 40px;
}
li {
    padding: 40px 20px;    
}
.card {
    border-radius: 1px;
    overflow: hidden;
}
.frame {
    width: min(400px, 100%);
    aspect-ratio: 16/12;
    overflow: hidden;
    flex-shrink: 0;
}
.fullSize .frame {
    width: 60%;
    margin: auto;
    height: 300px;
}

.card .frame .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    animation: zoom 1500ms ease-in-out forwards;
}
@keyframes zoom {
    from {
        scale: 1;
    }
    to {
        scale: 1.1;
    }
}

.contentBox{
    padding: max(2vw, 40px);
    border: 1px solid rgba(255, 255, 255, 0.171);
}

p.description {
    margin-top: 25px;
}

@media (hover : hover) {
    .moreButton {
    opacity: 0;
    transition: opacity 300ms;
}
.card:hover .moreButton{
    opacity: 1;

}
}
</style>