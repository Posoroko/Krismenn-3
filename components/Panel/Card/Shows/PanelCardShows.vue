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
    <div class="card relative h100" :class="{ 'fullSize' : fullSize }" v-if="show">
        <div class="frame relative">
            <picture>
                <source :srcset="`${directusAssets}${show.mainImage}?key=panel-head-800x400-webp`">
        
                <img class="image block" :src="`${directusAssets}${show.mainImage}?key=panel-head-800x400-jpg`" alt="">
            </picture>
        </div>

        <div class="contentBox flex column justifyBetween" v-if="show.translations[0]">
            <div>
                <h2 class="cardTitle_format fontColor_light">{{ show.title }}</h2>

                <p class="cardSubtitle_format definition fontColor_light">{{ show.translations[0].definition }}</p>
            </div>

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
.card {
    width: 100%;
    display: flex;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.253);
    transition: 300ms ease; 
}
.frame {
    width: 350px;
    min-height: 300px;
    flex-shrink: 0;
    /* box-shadow: 2px 0px 5px rgb(0, 0, 0); */
}
.frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 899px) {
    .card {
        flex-direction: column;
    }
    .frame {
        width: 100%;
        height: 200px;
    }
}

.contentBox {
    flex-grow: 1;
    padding: min(4vw, 30px);    
}
.description {
    margin-top: min(3vw, 25px);
}

@media (hover : hover) {
    .moreButton {
        opacity: 0;
        transition: opacity 0.3s;
    }
    .card:hover {
        background-color: #ffffff0a;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.644);
    }
    .card:hover .moreButton {
        opacity: 1;
        transition: opacity 0.3s;
    }
}
</style>