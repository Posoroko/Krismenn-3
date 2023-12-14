<script setup>
const { locale } = useI18n();
const appConfig = useAppConfig();

const themes = useThemes();
const activeThemeId = useActiveThemeId();
const pageTitles = usePageTitles();

const props = defineProps({
    page: String,
    drawerPosition: String,
    pageName: String,
    stripeImageDirectusUrl: String,
})


</script>

<template>
    <div class="panel glassSurface allEvents relative flex" :class="drawerPosition">
        <div class="frame relative">
            <PanelStripeImage :fileName="appConfig.panelStripeImages[page]" :stripeImageDirectusUrl="stripeImageDirectusUrl" />
        </div>

        <div class="content relative grow flex column">
            <h1 class="panelTitle centered">
                {{ pageTitles[page].title[locale] }}
            </h1>

            <div class="scrollBox w100">
                <h2 class="panelSubtitle">
                    {{ pageTitles[page].subtitle[locale] }}
                </h2>
                <div class="panelTextContent">
                    <slot name="content"></slot>
                </div>
            </div>

            <PanelCloseButton />
        </div>
    </div>
</template>

<style scoped>
.panel.right {
    right: 0;
    flex-direction: row-reverse;
}
.panel.left {
    left: 0;
}
.panel {
    width: min(900px, 100% + 0.1px);

    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(255, 255, 255, 0.164);
    overflow: hidden;

    --frame-width: min(10vw, 100px);
}
@media (orientation: portrait) or (width < 850px) {
    .panel {
        width: 100%;
    }
}
.frame {
    width: min(10vw, 100px);
    height: 100%;
    overflow: hidden;
    align-content: flex-start;
    box-shadow: 
        v-bind("themes[activeThemeId].insetShadowColor");
}
.stripeImage {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
}
.content {
    width: calc(100% - var(--frame-width));
}
.content:before {
    content: "";
    width: 100%;
    border: 3px solid rgb(255, 255, 255);


    filter: blur(2px);
    box-shadow: v-bind("themes[activeThemeId].shadowColor");
    position: absolute;
    top: 1px;
    opacity: 0.9;
    transition: opacity 0.5s ease;
    
}

.panelTitle {
    height: 48px;
    font-size: clamp(2.4rem, 1.5vw + 1rem, 2.8rem);
     /* font-size: 28px; */
    font-family: 'Raleway', sans-serif;
    color: white;
    font-weight: 200;
    /* margin-top: 10px; */
    padding-top: 10px;
    background: v-bind("themes[activeThemeId].panelTitleBackgroundColor");
}
.panelSubtitle {
    font-size: clamp(2rem, 1.5vw + 1rem, 2.6rem);
    font-family: 'Raleway', sans-serif;
    color: white;
    font-weight: 100;
    letter-spacing: 4px;
    margin-top: 10px;
}
.scrollBox {
    overflow-y: scroll;
    padding: 0 min(3vw, 30px);
    margin-top: min(5vw, 40px);
    flex-grow: 1;
}
.panelTextContent {
    margin-top: 20px;
}
</style>