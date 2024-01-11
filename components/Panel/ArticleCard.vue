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
    <div class="card articleBox flex relative" :class="[{ 'active': active }, { 'fullPage': articlePage }]" >        
        <div class="tinyFrame" v-if="!articlePage">
            <!-- //two tinyFrames for animation to work. With only one, height problem occure in the flex container -->
        </div>
        
        <div class="contentBox">
            <h2 class="title kTitle">{{ article[locale].title }}</h2>

            <p class="date">{{ dateToLocale(locale, article.date) }}</p>

            <p class="content" v-if="articlePage">{{ article[locale].content}}</p>

            <p class="content" v-else>{{ article[locale].content.slice(0, 180) }} ...</p>

            <div class="flex justifyEnd marTop20">
                <NuxtLink v-if="!articlePage" :to="`/news/${article.id}`" class="readMore">{{ $t('global.readMore') }}</NuxtLink>
            </div>
        </div>
        
        <div class="tinyFrame centered absolute" v-if="!articlePage">
            <img class="objectFitCover" :src="`${directusAssets}${article.image}?key=500x500`">
        </div>
    </div>
</template>

<style scoped>
.articleBox {
    border: 1px solid rgba(0, 41, 63, 0.438);
    border-radius: 5px;
    margin: 40px 0;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.432);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 150ms ease-in-out;
}

.articleBox::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("/images/metal.webp");
    filter: brightness(0.4) contrast(1.4) blur(1px) saturate(1.2);
    /* opacity: 0.45; */
    mix-blend-mode: difference;
    background-size: cover;
    z-index: -1;
}
.articleBox.fullPage::before {
    background-image: url("/images/metal-large.webp");
}
.articleBox {
    --tinyFrameTransition: width 500ms cubic-bezier(.02,.99,.27,.98);
    --contenBoxLeftPAddingTransition: padding-left 2500ms ease-out;
}
.tinyFrame {
    width: 60%;
    flex-shrink: 0;
    transition: var(--tinyFrameTransition);
}
.tinyFrame.absolute {
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    filter:  contrast(1.2) blur(0.5px) brightness(0.7);
    overflow: hidden;
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
    transition: 300ms ease-out;
}
.articleBox.active .contentBox {
    color: rgb(212, 212, 212);
    transition: 300ms ease-out;
}

h2 {
    font-size: 3.7rem;
    font-weight: 700;
    filter: blur(0.5px);
    transition: all 320ms ease-out;
}

.date {
    font-size: 1.8rem;
    margin-top: 5px;
    font-weight: 400;
}
.content {
    width: 100%;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.4;
    margin-top: 10px;
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
    font-size: 1.4rem;
    font-weight: 600;
    background-color: #596568;
    padding: 8px 15px;
    border: 1px solid #757d86;
    border-radius: 6px;
    margin-top: 20px;
    /* translate: 50px; */
    /* transition: 300ms cubic-bezier(.3,1.01,.8,1.01); */
}

.readMore:hover {
    background-color: #4a5457;
    border: 1px solid #5e6974;
}
.articleBox.active .readMore {
    translate: 0px;
    /* transition: 500ms translate 100ms cubic-bezier(.3,1.01,.8,1.01); */
}
</style>