<!-- 
sizes: 
xxl: 2560px
xl: 1440px
l: 1080px
m: 720px
s: 400px

the folder structure for the image is as follows:
-name
    |-s
        |-name.webp
        |-name.fallbackFormat
    |-m
    |-l
    |-xl
    |-xxl
    |-fallback
 -->

<script setup>
const props = defineProps({
    folderUrl: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    fallbackFormat: {
        type: String,
        default: 'jpg'
    }
})



</script>

<template>
    <picture class="picture allEvents" v-if="folderUrl, fileName, fallbackFormat">
        <source media="(min-height: 1441px)" :srcset="`${folderUrl}/xxl/${fileName}.webp`" type="image/webp">
        <source media="(min-height: 1080px)" :srcset="`${folderUrl}/xl/${fileName}.webp`" type="image/webp">
        <source media="(min-height: 721px)" :srcset="`${folderUrl}/l/${fileName}.webp`" type="image/webp">
        <source media="(min-height: 401px)" :srcset="`${folderUrl}/m/${fileName}.webp`" type="image/webp">
        <source media="(max-height: 400px)" :srcset="`${folderUrl}/s/${fileName}.webp`" type="image/webp">

        <img :src="`${folderUrl}/fallback/${fileName}.${fallbackFormat}`" :alt="fileName">
    </picture>
</template>

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>