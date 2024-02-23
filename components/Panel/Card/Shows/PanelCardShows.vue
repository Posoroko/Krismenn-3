<script setup>
const { t, locale } = useI18n();

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

const props = defineProps({
    show: {
        type: Object,
        required: true
    },
    fullSize: Boolean
})
</script>

<template>
    <li class="">
        <NuxtLink :to="`/shows/${show.translations[0].slug}`" class="card block h100 flex">
            <div class="frame relative">
                <picture>
                    <source :srcset="`${directusAssets}${show.mainImage}?key=panel-head-800x400-webp`">
            
                    <img class="image" :src="`${directusAssets}${show.mainImage}?key=panel-head-800x400-jpg`" alt="">
                </picture>
            </div>

            <div class="contentBox grow flex column justifyBetween" v-if="show.translations[0]">
                <h1 v-if="!fullSize" class="cardTitle_format ">{{ show.translations[0].title }}</h1>

                <p class="cardSubtitle_format definition ktextFat">{{ show.translations[0].definition }}</p>


                <p v-if="fullSize" class="description cardText_format">{{ show.translations[0].description }}</p>

                <p v-else class="description cardText_format">{{ show.translations[0].description?.slice(0, 200) }}</p>

                <div class="marTop50" v-if="fullSize">
                    <PanelSection :title="t('global.videos')">
                        <template #content>
                            <PanelSectionVideos :showSlug="show.mainSlug" />
                        </template>
                    </PanelSection>

                    <PanelCardContactBox 
                        v-if="show.telephone || show.email || show.website" 
                        :email="show.email" 
                        :telephone="show.telephne" 
                        :website="show.website"/>
            
            
                </div>
                
                <div class="flex justifyEnd marTop20" v-else>
                    <PanelButtonReadMore :href="`/shows/${show.translations[0].slug}`" />
                </div>
            </div>
        </NuxtLink>
    </li>
    
</template>

<style scoped>
li {
    padding: 40px 20px;
    /* border-bottom: 1px solid rgba(255, 255, 255, 0.164); */
    
}
.card {
    border-radius: 1px;
    overflow: hidden;
}
.card  .frame {
    width: min(400px, 100%);
    aspect-ratio: 16/12;
    overflow: hidden;
    flex-shrink: 0;
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
h1, p {
    color: white;
}

.contentBox{
    padding: max(2vw, 40px);
    border: 1px solid #ffffff1f;
}

p.description {
    margin-top: 25px;
}
</style>