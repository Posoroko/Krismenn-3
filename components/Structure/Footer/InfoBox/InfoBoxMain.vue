<script setup>
import { useI18n } from '#imports';
const { t, locale } = useI18n();
const localePath = useLocalePath()
const appState = useAppState();

const links = [
    {
        id: 0,
        ref: 'terms',
    },
    {
        id: 1,
        ref: 'cookies'
    }
]

function toggleColorMode(mode) {
    appState.value.colorMode = mode
}
</script>

<template>
    <div 
        class="full relative frosty_surface" 
        :class="[appState.infoBoxOpen ? 'glow_always' : 'glow_on_hover']">

        <button @click="appState.infoBoxOpen = !appState.infoBoxOpen" class="centered full pointer ">
            <WidgetIcon name="info" type="homePageNavButton" :size="24"/>
        </button>

        <div class="menuBox frosty_surface glow_always flex justifyEnd alignEnd" :class="{ 'open': appState.infoBoxOpen }">
            <div class="content flex column gap10">
                <NuxtLink 
                    v-for="link in links" :key="link.id"
                    @click="appState.infoBoxOpen = false"
                    :to="localePath(link.ref)" 
                    class="cardText_format fontColor_light">
                        {{ $t(`pages.${link.ref}.link`) }}
                </NuxtLink>
                
                <a class="cardText_format fontColor_light" href="https://posoroko.com">posoroko.com</a>

                <div class="colorModeBox flex column">
                    <button @click="toggleColorMode('blue')"
                        class="frosty_surface pointer"
                        :class="[appState.colorMode === 'blue' ? 'glow_always' : 'glow_on_hover']"
                    >
                        blue
                    </button>

                    <button @click="toggleColorMode('black')"
                        class="frosty_surface pointer"
                        :class="[appState.colorMode === 'black' ? 'glow_always' : 'glow_on_hover']"
                    >
                        black
                    </button>

                    <button @click="toggleColorMode('white')"
                        class="frosty_surface pointer"
                        :class="[appState.colorMode === 'white' ? 'glow_always' : 'glow_on_hover']"
                    >
                        white
                    </button>
                </div>
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