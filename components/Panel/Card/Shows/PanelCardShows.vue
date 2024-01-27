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
    <div class="frame relative">
        <img class="image" :src="`${directusAssets}${show.mainImage}`" alt="">
    </div>

    <div class="contentBox">
        <h1 v-if="!fullSize" class="cardTitle_format ">{{ show.translations[locale].title }}</h1>

        <p class="cardSubtitle_format definition ktextFat">{{ show.translations[locale].definition }}</p>

        <p v-if="fullSize" class="description cardText_format">{{ show.translations[locale].description }}</p>
        <!-- <p v-else class="description cardText_format">{{ show.translations[locale].synopsis }}</p> -->

        <div class="marTop50" v-if="fullSize">
            <PanelCardShowsMediaBox 
                v-if="show.youtubes.length" 
                :youtubes="show.youtubes" />

            <PanelCardContactBox 
                v-if="show.telephone || show.email || show.website" 
                :email="show.email" 
                :telephone="show.telephne" 
                :website="show.website"/>
            
            
        </div>

        <div class="flex justifyEnd" v-else>
            <NuxtLink :to="`/shows/${show.translations[locale].slug}?id=${show.id}`" class="glass_button cardText_format glassSurface-onHover">{{ t('global.readMore') }}</NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.card  .frame {
    width: 100%;
    height: 200px;
    overflow: hidden;
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
h1, p, a {
    color: white;
}

.contentBox{
    padding: 3vw;
   
    border-top: none;
    background-color: #ffffff0b;
}

p.description {
    margin-top: 25px;
}
</style>