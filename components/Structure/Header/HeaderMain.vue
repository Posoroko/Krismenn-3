<script setup>
const route = useRoute();
const appState = useAppState();

const colorModeEffects = ref(['blue', 'black', 'white']);
const colorModeEffectsIndex = ref(0);



function changeColorMode() {
    colorModeEffectsIndex.value = (colorModeEffectsIndex.value + 1) % colorModeEffects.value.length;
    appState.value.colorMode = colorModeEffects.value[colorModeEffectsIndex.value];
}

let shakeCount = 0;
let lastShakeTime = 0;
const SHAKE_THRESHOLD = 25; // Adjust sensitivity
const SHAKE_TIMEOUT = 1000; // Maximum time between shakes (1 second)
const REQUIRED_SHAKES = 5;

function handleShake(event) {
    const { accelerationIncludingGravity } = event;
    if (!accelerationIncludingGravity) return;

    const acceleration = Math.abs(accelerationIncludingGravity.x) +
        Math.abs(accelerationIncludingGravity.y) +
        Math.abs(accelerationIncludingGravity.z);

    if (acceleration > SHAKE_THRESHOLD) {
        const now = Date.now();
        if (now - lastShakeTime > SHAKE_TIMEOUT) {
            shakeCount = 0; // Reset if too much time has passed
        }

        lastShakeTime = now;
        shakeCount++;

        if (shakeCount >= REQUIRED_SHAKES) {
            console.log("Phone shaken 5 times!");
            changeColorMode()
        }
    }
}

onMounted(() => {
    // Add event listener for device motion
    window.addEventListener("devicemotion", handleShake);
})

</script>

<template>
    <header class="absoluteFull noEvents" 
        :class="{ 'panelOpen': route.path.length > 4 }" >
        <nav class="w100 h100 noEvents">
            <ul class="w100 h100 noEvents">
                <div class="box corner topLeftBox centered allEvents frosty_surface glow_on_hover">

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
    font-weight: 600;
    color: rgb(210, 199, 212);
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