<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();

const appConfig = useAppConfig();
const route = useRoute();

const props = defineProps({
    page: String,
    title: String,
    drawerPosition: String,
    pageName: String,
    showStripeImage: Boolean,
    stripeImageDirectusUrl: String,
    showIntroText: Boolean,
    stripeImageSrc: String,
    backButtonURL: String,
})

</script>

<template>
    <div class="panel glassSurface allEvents relative flex" :class="[drawerPosition, { 'fullWidth': !showStripeImage }]">
        <div v-if="showStripeImage" class="frame relative">
            <PanelStripeImage :src="stripeImageSrc" />
        </div>

        <div class="content relative grow flex column">
            <div class="panelTitleBox relative w100 flex row justifyBetween alignCenter">
                <PanelBackButton :href="backButtonURL" v-if="backButtonURL" />

                <div v-else></div>

                <h1 v-if="page" class="panelTitle centered">
                
                    {{ $t(`pages.${page}.title`) }}

                    
                </h1>

                <h1 v-if="title" class="panelTitle centered">
                    {{ title }}
                </h1>

                <PanelCloseButton />
            </div>
            

            <div class="scrollBox w100 flex column">
                <p class="panelSubtitle" v-if="showIntroText">
                    {{ $t(`pages.${page}.introText`) }}
                </p>

                <div class="panelTextContent relative grow">
                    <slot name="content"></slot>
                </div>
            </div>

            
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
    width: min(900px, 100% - 0.1px);

    height: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;

    --frame-width: min(10vw, 100px);
}
@media (orientation: portrait) or (width < 850px) {
    /* Full with when on mobile.  Otherwize, the tabs make
    the UI overcrowded and confusing */
    .panel {
        width: 100vw;
        height: calc(100vh - var(--gutter-thickness));
    }
    .panel.left {
        translate: calc( var(--gutter-thickness) * -1 ) ;
    }
    .panel.right {
        translate: var(--gutter-thickness) ;
    }
}
@media (orientation: portrait) or (width < 599px) {
    .frame {
        display: none;
    }
}
.frame {
    width: min(10vw, 100px);
    height: 100%;
    overflow: hidden;
    align-content: flex-start;
    /* box-shadow:  */
        /* v-bind("activeTheme.insetShadowColor"); */
}

/* FOR HIGH RES SCREENS - NEDDS TESTING */
@media (screen) and (height > 2000) {
    .frame {
         width: 300px;
    }
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
    /* border: 3px solid rgba(255, 255, 255, 0.292); */


    filter: blur(2px);
    /* box-shadow: v-bind("activeTheme.shadowColor"); */
    position: absolute;
    top: 1px;
    opacity: 0.9;
    transition: opacity 0.5s ease;
    
}

.panelTitle {
    height: 75px;
    font-size: clamp(2.4rem, 1.5vw + 1rem, 2.8rem);
    color: rgb(205, 220, 222);
    font-weight: 700;
    flex-shrink: 0;
    position: relative;
}
.panelTitleBox:after {
    width: 100%;
    height: 20px;
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(25, 40, 44, 0.39) 100%);
    z-index: -1;
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
    margin-top: 20px;
}
.fullWidth .panelTextContent{
    margin-top: 0px;
}

</style>