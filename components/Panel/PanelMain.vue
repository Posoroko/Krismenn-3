<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();
const localePath = useLocalePath()

const appConfig = useAppConfig();
const route = useRoute();

const props = defineProps({
    title: String,
    drawerPosition: String,
    showStripeImage: Boolean,
    stripeImageDirectusUrl: String,
    showIntroText: Boolean,
    stripeImageSrc: String,
    backButtonURL: String,
})

</script>

<template>
    <div class="panel   allEvents flex relative" :class="[drawerPosition, { 'fullWidth': !showStripeImage }]">
        <div class="content relative grow flex column">
            <div class="panelTitleBox relative w100 flex row justifyBetween alignCenter ">
                <h1 v-if="title" class="w100 panelTitle centered">
                    {{ title }}
                </h1>
            </div>
            
            <div class="scrollBox w100 h100 flex column relative">
                <div class="panelTextContent relative grow">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>

        <NuxtLink :to="localePath('/')"  class="homeButton absolute centered glass_corner pointer centered allEvents glowing_onHover">
            <WidgetIcon name="home" :size="24" type="homePageNavButton"/>
        </NuxtLink>

        
    </div>
</template>

<style scoped>

.panel {
    width: min(1200px, 100%);
    height: 100%;
    overflow: hidden;

    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}
@media (orientation: portrait) and (width < 500px) {
    .panel {
        width: 100vw;
        height: 100vh;
    }
}

.homeButton {
    width: var(--gutter-thickness);
    height: var(--gutter-thickness);
}

.content {
    width: calc(100% - var(--frame-width));
}
.content:before {
    content: "";
    width: 100%;
    /* border: 3px solid rgba(255, 255, 255, 0.292); */


    filter: blur(2px);
    /* box-shadow: v-bind("activeTheme.shadowColor"); */
    position: absolute;
    top: 1px;
    opacity: 0.9;
    transition: opacity 0.5s ease;
    
}

.panelTitle {
    font-family: var(--kTitle);
    font-size: clamp(2.4rem, 4vw + 0.1rem, 3rem);
    color: var(--tabs-text-color);
    
    flex-shrink: 0;
    position: relative;
}
.panelTitleBox {
    height: var(--gutter-thickness);
}

.panelSubtitle {
    font-size: clamp(1.4rem, 1vw + 1rem, 1.6rem);

    color: white;
    font-weight: 500;
    line-height: 2.4rem;
    letter-spacing: 1px;
    padding: 10px 40px;
    width: min(50ch, 100%);
    margin: auto;
    margin-top: 10px;
}
.scrollBox {
    background-color: #ffffff09;
    overflow-y: scroll;
    padding: 0 min(3vw, 30px);
    flex-grow: 1;
    position: relative;
    box-shadow: inset ;
}
.fullWidth .scrollBox {
    padding: 0;
}
.panelTextContent {
    padding: 30px;
    margin-top: 20px;
}
.fullWidth .panelTextContent{
    margin-top: 0px;
}

</style>