<script setup>
const route = useRoute();
const appConfig = useAppConfig();

const { folderUrl, fileName, fallbackFormat } = appConfig.themes.blue.backgroundImage;

</script>

<template>
    <div class="frame allEvents">
        <picture class="picture allEvents" v-if="folderUrl, fileName, fallbackFormat">
            <source media="(min-height: 1441px)" :srcset="`${folderUrl}/xxl/${fileName}`" type="image/webp">
            <source media="(min-height: 1080px)" :srcset="`${folderUrl}/xl/${fileName}`" type="image/webp">
            <source media="(min-height: 721px)" :srcset="`${folderUrl}/l/${fileName}`" type="image/webp">
            <source media="(min-height: 401px)" :srcset="`${folderUrl}/m/${fileName}`" type="image/webp">
            <source media="(max-height: 400px)" :srcset="`${folderUrl}/s/${fileName}`" type="image/webp">

            <img :src="`${folderUrl}/fallback/${fileName}.${fallbackFormat}`" :alt="fileName">
        </picture>
        
        <img 
            class="emptyBGI noEvents" 
            :class="{ 'active': route.path.length > 4 }"
            src="/images/background/blue-empty/fallback/blue-empty.jpg" 
            alt="">
    </div>
</template>

<style scoped>
.frame {
    /* z-index: -1; */
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: 600ms ease;
}

img.emptyBGI {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 600ms ease;
}
.emptyBGI.active {
    /* filter: brightness(0.6) contrast(1) saturate(1); */
    transition: 600ms ease;
    opacity: 1;
    transition: 600ms ease;
}
</style>