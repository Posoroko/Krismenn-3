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
    <div class="fullScreenContainer noEvents flex column alignCenter">
        <div class="panelTitleBox relative w100 flex row justifyBetween alignCenter">
            <h1 v-if="title" class="w100 panelTitle centered">
                {{ title }}
            </h1>

            <NuxtLink :to="localePath('/')"
                class="homeButton absolute centered pointer centered allEvents frosty_surface glow_on_hover">
                <WidgetIcon name="home" :size="24" type="homePageNavButton" />
            </NuxtLink>
        </div>

        <div class="panel frosty_base h100 w100">
            <div class="scrollBox h100 flex column relative allEvents" v-if="$slots.scrollBox">
                <slot name="scrollBox">

                </slot>
            </div>

            <div class="contentContainer h100 h100" v-if="$slots.contentContainer">
                <slot name="contentContainer">

                </slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fullScreenContainer {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    padding-top: 0;
    padding-left: var(--gutter-thickness);
    padding-right: var(--gutter-thickness);
    padding-bottom: var(--gutter-thickness);
}
.panel {
    backdrop-filter: blur(10px);
    overflow-x: scroll;
}
@media (max-width: 1296px) {

    /* 
    Based on panel-width and gutter-thickness declared in /css/architecture/main.css
    this prevent the gutters from being only half visible
    */
    .fullScreenContainer {
        padding: 0;
    }
}

.panelTitleBox {
    height: 48px
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
    overflow: hidden;
}
.scrollBox {
    background-color: #ffffff09;
    padding: 0 min(2vw, 30px);
    padding-top: 30px;
    padding-bottom: 80px;
    border: 1px solid rgba(255, 255, 255, 0.055);
    box-shadow: 
        0 0 3px 2px rgba(0, 33, 48, 0.103),
        0 0 3px 0px rgba(255, 255, 255, 0.055) inset;
    overflow-y: scroll;
    box-shadow: inset ;
    flex-grow: 1;
    position: relative;
}

</style>