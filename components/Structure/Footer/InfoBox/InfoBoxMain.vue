<script setup>
import { useI18n } from '#imports';
const { t, locale } = useI18n();
const localePath = useLocalePath()
const appState = useAppState();

const menuIsOpen = ref(false);
</script>

<template>
    <div class="full relative" :class="[ appState.infoBoxOpen ? 'glowing' : 'glowing_onHover']">
        <button @click="appState.infoBoxOpen = !appState.infoBoxOpen" class="centered full pointer ">
            <WidgetIcon name="info" type="homePageNavButton" size="24"/>
        </button>

        <div class="menuBox glowing flex justifyEnd alignEnd" :class="{ 'open': appState.infoBoxOpen }">
            <div class="content flex column gap10">
                <NuxtLink class="cardText_format fontColor_light" :to="localePath('terms')">{{ $t('pages.terms.link') }}</NuxtLink>

                <NuxtLink class="cardText_format fontColor_light" :to="localePath('cookies')">{{ $t('pages.cookies.link') }}</NuxtLink>
                
                <a class="cardText_format fontColor_light" href="https://posoroko.com">posoroko.com</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.menuBox {    
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: scale(0);
    filter: blur(5px);
    translate: -50% 50%;
    transition: 500ms ease;
}
.menuBox.open {
    bottom: 100%;
    left: 100%;
    filter: blur(0px);
    translate: 0% 0%;
    transform: scale(1);
    transition: 500ms ease;
}
.content {
    padding: 20px;
    font-weight: 500;
    white-space: nowrap;
}
</style>