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
    <div class="frame background" @click="handleClick" :class="{ 
            'faded': appState.backgroundFaded 
        }">

        <img class="faded allEvents"
            :src="`${directusAssets}${appConfig.colorMode.backgroundImage.empty[appState.colorMode]}?key=${backgroundImage.defaultSource.key}`"
            alt="Krismenn">

        <img 
        class="notFaded allEvents"
            :src="`${directusAssets}${appConfig.colorMode.backgroundImage.full[appState.colorMode]}?key=${backgroundImage.defaultSource.key}`"
            alt="Krismenn">
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
    height: 100%;
    width: 100%;
    position: absolute;
    
    object-fit: cover;
    object-position: center;
}
img.notFaded {
    z-index: 1;
    width:  100%;

    /* No delay */
    transition: scale 500ms ease; 
}
.background.faded img.notFaded {

    /* with delay */
    transition: scale 500ms ease 800ms;
}
img.faded {
    width: 100%;
    z-index: 2;
    filter: brightness(0.4);
    opacity: 0;
    /* No delay for scale transition*/
    transition: opacity var(--panel-transition-duration) ease, scale 500ms ease;
}
.background.faded img.faded {
    /* width: 100%; */

    opacity: 1;
    /* with delay for scale transition*/
    transition: opacity var(--panel-transition-duration) ease, scale 500ms ease 800ms;
}
</style>