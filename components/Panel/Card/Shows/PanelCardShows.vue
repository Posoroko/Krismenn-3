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
    <div class="card relative h100" :class="[ fullSize ? 'fullSize' : 'small']" v-if="show">
        <div class="frame relative r">
            <!-- <picture>
                <source :srcset="`${directusAssets}${show.mainImage}?key=panel-head-800x400-webp`">
        
                <img class="image block" :src="`${directusAssets}${show.mainImage}?key=panel-head-800x400-jpg`" alt="">
            </picture> -->

            <img class="image block" :src="`${directusAssets}${show.mainImage}?key=panel-head-800x400-jpg`" alt="">

            <div class="imagesFrame flex column gap20" v-if="fullSize">
                <img class="image" v-for="img in show.images" :key="img.id" :src="`${directusAssets}${img.directus_files_id}`" alt="">
            </div>
        </div>

        <div class="contentBox flex column justifyBetween" v-if="show.translations[0]">
            <div>
                <h2 class="cardTitle_format fontColor_light">{{ show.title }}</h2>

                <p class="cardSubtitle_format definition fontColor_light">{{ show.translations[0].definition }}</p>
            </div>

            <p v-if="fullSize" class="description cardText_format fontColor_light">{{ show.translations[0].description }}</p>

            <p v-else class="description cardText_format fontColor_light">{{ show.translations[0].description?.slice(0, 200) }}</p>

            <div class="marTop50" v-if="fullSize">
                <PanelSection :title="t('global.videos')" v-if="show.youtubes.length" showTopBorder>
                    <template #content>
                        <PanelSectionContentVideos :showSlug="show.slug" />
                    </template>
                </PanelSection>

                <PanelCardContactBox 
                    v-if="show.telephone || show.email || show.website" 
                    :email="show.email" 
                    :telephone="show.telephone" 
                    :website="show.website"/>
                
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
    transition: 300ms ease; 
}
.card.small {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.253);
}
.card.fullSize {
    box-shadow: none;
}

.card.small .frame {
    width: 350px;
    min-height: 250px;
    flex-shrink: 0;
}

.card.fullSize .frame {
    width: 400px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.imagesFrame {
    width: 100%;
}
.card.small .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.card.fullSize .image {
    width: 100%;
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
    .card.small:hover {
        background-color: #ffffff0a;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.644);
    }
    .card.small:hover .moreButton {
        opacity: 1;
        transition: opacity 0.3s;
    }
}
@media (max-width: 899px) {
    .card.small {
        margin-bottom: 20px;
    }
}
@media (max-width: 900px) {
    .image {
        width: 350px;
    }
    .card.fullSize .frame {
        width: 100%;
        flex-direction: row;
        overflow-x: scroll;
    }
    .card.fullSize .imagesFrame {
        flex-direction: row;
        flex-shrink: 0;
    }
}
</style>