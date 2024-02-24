<script setup>
const route = useRoute();
const appState = useAppState();
const { t, locale } = useI18n();
const localePath = useLocalePath();

const colorModes = ref(['blue', 'gray', 'sepia']);
const colorModeIndex = ref(0);

function changeColorMode() {
    
    colorModeIndex.value = (colorModeIndex.value + 1) % colorModes.value.length;
    appState.value.colorMode = colorModes.value[colorModeIndex.value];
}

</script>

<template>
    <header class="absoluteFull noEvents" :class="{ 'panelOpen': route.path.length > 4 }" >
        <nav class="w100 h100 noEvents">
            <ul class="w100 h100 noEvents">
                <div class="box corner topLeftBox centered allEvents glowing_onHover">

                </div>
            
                <div class="box topCenterBox centered">
                    <StructureMainPageTitle />
                </div>
            
                <div class="fontColor_light box corner topRightBox centered pointer allEvents" @click="changeColorMode">

                </div>

                <div class="box centerLeftBox flex column allEvents">
                    <StructureHeaderBarLeft />
                </div>
        
                <div class="box centerCenterBox noEvents"></div>

                <div class="box centerRightBox flex column allEvents">
                    <StructureHeaderBarRight />
                </div>
            
                <div class="box corner bottomLeftBox">

                </div>
                <div class="box bottomCenterBox flex allEvents">
                    <StructureHeaderBarBottom />
                </div>
                <div class="box corner bottomRightBox allEvents"></div>
            </ul>
        </nav>
    </header>
</template>

<style>
header li.box {
    flex-grow: 1;
    display: grid;
    place-items: center;
    cursor: pointer;
    overflow: hidden;
}

header .tabLinkText {
    width: 100%;
    height: 100%;
    font-family: var(--kText);
    font-size: clamp(1.5rem, 0.9vw + 0.1rem, 2rem);
    color: rgb(225, 237, 245);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 150ms ease;
}

header.panelOpen .tabLinkText {
    color: rgba(225, 237, 245, 0.496);
    transition: 300ms ease;
}

header.panelOpen .tabLinkText:hover {
    color: rgb(225, 237, 245);
    transition: 150ms ease;
}

</style>

<style scoped>
ul {

    display: grid;
    grid-template-columns: var(--gutter-thickness) auto var(--gutter-thickness);
    grid-template-rows: 48px auto var(--gutter-thickness);
    grid-template-areas: 
        "topLeftBox topCenterBox topRightBox"
        "centerLeftBox centerCenterBox centerRightBox"
        "bottomLeftBox bottomCenterBox bottomRightBox";
}
</style>