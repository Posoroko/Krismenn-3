<script setup>
const router = useRouter();
const route = useRoute();
const appConfig = useAppConfig();
const appState = useAppState();

const localePath = useLocalePath()

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
        <picture class="noEvents">
            <source 
                v-for="source in backgroundImage.sources" 
                :key="source.id" 
                :media="`(${source.media})`" 
                :srcset="`${directusAssets}${backgroundImage.directusId.empty}?key=${source.key}`"
                :type="source.fileType">

                <img 
                    class="emptyBGI allEvents" 
                    :src="`${directusAssets}${backgroundImage.directusId.empty}?key=${backgroundImage.defaultSource.key}`" 
                    alt="Krismenn">
        </picture>

        <picture class="picture noEvents">
            <source 
                
                v-for="source in backgroundImage.sources" 
                :key="source.id" 
                :media="`(${source.media})`" 
                :srcset="`${directusAssets}${backgroundImage.directusId.full}?key=${source.key}`"
                :type="source.fileType">

                <img 
                    class="fullBGI allEvents" 
                    :class="{ 'active': appState.backgroundFaded }"
                    :src="`${directusAssets}${backgroundImage.directusId.full}?key=${backgroundImage.defaultSource.key}`" alt="Krismenn">
        </picture>
    </div>
</template>

<style scoped>
.frame {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    isolation: isolate;
    overflow: hidden;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: 600ms ease;
}

.emptyBGI {
    opacity: 1;
}
.fullBGI {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    filter: blur(0px);
    transition:  1000ms ease;
}
.fullBGI.active {
    transition: 1000ms ease;
    opacity: 0;
    filter: blur(5px);
}
</style>