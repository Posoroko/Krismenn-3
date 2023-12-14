<script setup>
const { locale } = useI18n();
const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;
const dateToLocale = useDateToLocale();

const props = defineProps({
    article: {
        type: Object,
        required: true
    },
    active: {
        type: Boolean,
        required: false,
        default: false
    },
    articlePage : {
        type: Boolean,
        required: false,
        default: false
    }
})


</script>

<template>
    <div class="articleBox flex relative" :class="[{ 'active': active }, { 'fullPage': articlePage }]" >

        
        <div class="tinyFrame" v-if="!articlePage">
            //two tinyFrames for animation to work. With only one, height problem occure in the flex container
        </div>
        

        <div class="contentBox">
            <h2 class="title kTitle">{{ article[locale].title }}</h2>
            <p class="date">{{ dateToLocale(locale, article.date) }}</p>
            <p class="content" v-if="articlePage">{{ article[locale].content}}</p>
            <p class="content" v-else>{{ article[locale].content.slice(0, 180) }} ...</p>
            <div class="flex justifyEnd marTop20">
                <NuxtLink v-if="!articlePage" :to="`/news/${article.id}`" class="readMore">Lire la suite</NuxtLink>
            </div>
        </div>
        
        <div class="tinyFrame centered absolute" v-if="!articlePage">
            <img class="objectFitCover" :src="`${directusAssets}${article.image}`" alt="">
        </div>
    </div>
</template>

<style scoped>
.articleBox {
    border: 1px solid rgba(0, 41, 63, 0.438);
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(27, 1, 88, 0.253);
    background-color: #ffffff09;
    margin: 40px 0;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 150ms ease-in-out;
}

.articleBox:hover {
    background-color: #ffffff15;
    box-shadow: 0px 0px 10px 0px rgba(27, 1, 88, 0.753);
    transition: all 50ms ease-in-out;
}

.articleBox::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("/images/metal.webp");
    filter: brightness(0.6) contrast(1.4) blur(1.5px) saturate(1.2);
    opacity: 0.45;
    mix-blend-mode: difference;
    background-size: cover;
    z-index: -1;
}
.articleBox.fullPage::before {
    background-image: url("/images/metal-large.webp");
}
.articleBox {
    --tinyFrameTransition: width 500ms cubic-bezier(.07,1.17,1,.99);
    --contenBoxLeftPAddingTransition: padding-left 2500ms ease-out;
}
.tinyFrame {
    width: 60%;
    flex-shrink: 0;
    filter:  contrast(1.1) blur(0.5px) brightness(0.7);
    transition: var(--tinyFrameTransition);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tinyFrame.absolute {
    height: 100%;
    top: 0;
    left: 0;
}

.articleBox.active .tinyFrame {
    width: 0px;
    transition: var(--tinyFrameTransition);
}
@media (orientation: portrait) or (width < 599px) {
    .articleBox.active .tinyFrame {
    width: 10%;
    transition: var(--tinyFrameTransition);
}
}
.articleBox:nth-child(1){
    margin-top: 0px;
}

.contentBox {
    width: 100%;
    flex-shrink: 0;
    color: rgba(212, 212, 212, 0.493);
    padding: 30px;
    transition: var(--contenBoxLeftPAddingTransition);
}
.articleBox.active .contentBox {
    color: rgb(212, 212, 212);
    transition: var(--contenBoxLeftPAddingTransition);
}

h2 {
    font-size: 3.7rem;
    font-weight: 700;
    filter: blur(0.5px);
    transition: all 320ms ease-out;
}
.date {
    font-size: 1.8rem;
    margin-top: 10px;
    font-weight: 400;
}
.content {
    width: 100%;
    height: 4.5em;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.5;
    margin-top: 20px;
    transition: color 120ms ease-out;
    overflow: hidden;
    white-space: pre-wrap;
}
@media (orientation: portrait) or (width < 599px) {
    .articleBox.active .tinyFrame {
        width: 10%;
        /* transition: var(--tinyFrameTransition); */
    }
    .contentBox {
        width: 90%;
    }
}
.articleBox.fullPage .content {
    height: auto;
    transition: color 120ms ease-out;
}
.readMore {
    font-size: 1.8rem;
    font-weight: 600;
    background-color: #b0efff25;
    padding: 10px 20px;
    border: 1px solid rgba(255, 255, 255, 0.185);
    border-radius: 5px;
    margin-top: 20px;
    translate: 50px;
    transition: transition 300ms cubic-bezier(.3,1.01,.8,1.01);
}

.readMore:hover {
    background-color: #b0efff41;
    border: 1px solid rgba(255, 255, 255, 0.411);
}
.articleBox.active .readMore {
    translate: 0px;
    transition: 500ms translate 100ms cubic-bezier(.3,1.01,.8,1.01);
}
</style>