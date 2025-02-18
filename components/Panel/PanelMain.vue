<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();
const localePath = useLocalePath()

const appConfig = useAppConfig();
const route = useRoute();

const props = defineProps({
    title: String,
    backButtonURL: String,
})
</script>

<template>
    <div class="panel noEvents flex relative w100">
        <div class="content relative grow flex column w100">
            <div class="panelTitleBox relative w100 flex row justifyBetween alignCenter">
                <h1 v-if="title" class="w100 panelTitle centered">
                    {{ title }}
                </h1>

                <NuxtLink :to="localePath('/')"
                    class="homeButton absolute centered pointer centered allEvents frosty_surface glow_on_hover">
                    <WidgetIcon name="home" :size="24" type="homePageNavButton" />
                </NuxtLink>
            </div>

            <div class="scrollBox w100 h100 flex column relative allEvents" v-if="$slots.scrollBox">
                <slot name="scrollBox">

                </slot>
            </div>

            <div class="contentContainer grow" v-if="$slots.contentContainer">
                <slot name="contentContainer">

                </slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.slideFromLeft-enter-from {
    opacity: 0;
}
.slideFromLeft-enter-to {
    opacity: 1;
}
.slideFromLeft-enter-active {
    transition: 500ms ease;
}
.slideFromLeft-leave-from {
    opacity: 1;
}

.slideFromLeft-leave-to {
    opacity: 0;
}

.slideFromLeft-leave-active {
    transition: 500ms ease;
}
.panel {
    width: 1200px;
    height: 100%;
    
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
   
}
@media (max-width: 1296px) {
    /* 
    Based on panel-width and gutter-thickness declared in /css/architecture/main.css
    this prevent the gutters from being only half visible
    */
    .panel {
        width: 100%;
    }
}
.panelTitleBox {
    height: 48px
}
@media (orientation: portrait) and (width < 500px) {
    .panel {
        width: 100vw;
        height: 100vh;
        height: 100dvh;
        height: 100svh;
    }
}

.homeButton {
    height: 100%;
    aspect-ratio: 1/1;
}

.panelTitle {
    font-size: clamp(2.4rem, 4vw + 0.1rem, 3rem);
    color: var(--tabs-text-color);
    flex-shrink: 0;
    position: relative;
}

.contentContainer {
    background-color: #ffffff09;
    backdrop-filter: blur(10px);
    overflow: hidden;
}
.scrollBox {
    background-color: #ffffff09;
    backdrop-filter: blur(10px);
    padding: 0 min(2vw, 30px);
    padding-top: 30px;
    padding-bottom: 80px;
    border: 1px solid rgba(255, 255, 255, 0.055);
    box-shadow: 
        0 0 3px 2px rgba(0, 33, 48, 0.103),
        0 0 3px 0px rgba(255, 255, 255, 0.055) inset;
    margin-bottom: var(--gutter-thickness);
    overflow-y: scroll;
    box-shadow: inset ;
    flex-grow: 1;
    position: relative;
}
/* .paddingBot {
    display: block;
    flex-shrink: 0;
    width: 100%;
    height: 400px;
} */
@media (max-width: 1296px) {
    .scrollBox {
        margin-bottom: 0;
    }
}

</style>