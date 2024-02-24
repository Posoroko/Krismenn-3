<script setup>
const router = useRouter();
const route = useRoute();
const appConfig = useAppConfig();
const appState = useAppState();

const { t, locale } = useI18n();
const localePath = useLocalePath()

const { folderUrl, fileName, fallbackFormat } = appConfig.themes.blue.backgroundImage;


function handleClick() {

    if(route.value !== '/') {
        router.push({ path: localePath("/") });
    }
    if(appState.value.languageSelectorOpen) {
        appState.value.languageSelectorOpen = false;
    }
    if(appState.value.infoBoxOpen) {
        appState.value.infoBoxOpen = false;
    }
}

const backgroundImage = appConfig.backgroundImage;
const directusAssets = appConfig.directus.assets;

onMounted(() => {
    if(!appState.value.homepageUrls.includes(route.fullPath)) {
        appState.value.backgroundFaded = true;
    }
})
</script>

<template>
    <div class="frame" @click="handleClick">
        <picture class="picture noEvents">
            <source 
                v-for="source in backgroundImage.sources" 
                :key="source.id" 
                :media="`(${source.media})`" 
                :srcset="`${directusAssets}${backgroundImage.directusId.full}?key=${source.key}`"
                :type="source.fileType">

                <img :src="`${directusAssets}${backgroundImage.directusId.full}?key=${backgroundImage.defaultSource.key}`" :alt="fileName">
        </picture>
        
        <div class="full">
            <picture class="noEvents">
                <source 
                    v-for="source in backgroundImage.sources" 
                    :key="source.id" 
                    :media="`(${source.media})`" 
                    :srcset="`${directusAssets}${backgroundImage.directusId.empty}?key=${source.key}`"
                    :type="source.fileType">

                    <img 
                        class="emptyBGI noEvents" 
                        :class="{ 'active': appState.backgroundFaded }" 
                        :src="`${directusAssets}${backgroundImage.directusId.empty}?key=${backgroundImage.defaultSource.key}`" 
                        :alt="fileName">
            </picture>
        </div>
    </div>
</template>

<style scoped>
.homeLink img {
    pointer-events: all;
    cursor: default;
}
.frame {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    isolation: isolate;
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