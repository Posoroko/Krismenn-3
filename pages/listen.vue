<script setup>
import { PanelSectionScroller } from '#components';
import { directusGetItems, directusBaseUrl } from '@/directus/directus.js';
const { t } = useI18n();

const appConfig = useAppConfig();
const links = appConfig.listeningPlatforms;

// data fetching
const getItems = directusGetItems();
const queryParams = {
    fields: ['*', 'quotes.*']
}
const { data: albums } = await useAsyncData(
    'albums',
    async () => {
        const items = await getItems('Albums', queryParams);
        return items
    },
    { server: true }
)

// keep track of the viewport width for the horizonal scrollers
const viewPortWidth = ref(window.innerWidth);
const horizontalcrollerBreakpoint = 750;

definePageMeta({
    pageTransition: {
        name: 'right'
    }
})
</script>

<template>
    <div class="absoluteFull centered">
        <PanelMain :title="t('pages.listen.title')">
            <div class="fullBox 
                        full flex column ">
                <PanelSection :title="t('pages.listen.sections.discography.title')">
                    <template #content>
                        <ul class="flex column">
                            <li v-for="album in albums" :key="album.id" class="albumCard">
                                <div class="contentBox">
                                    <div class="coverBox flex column">
                                        <img class="w100" :src="`${directusBaseUrl}assets/${album.cover}`" alt="">
                                    </div>

                                    <div class="playerBox">
                                        <iframe class="player" style="border: 0; width: 100%; height: 100%;" src="https://bandcamp.com/EmbeddedPlayer/album=4116606029/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/" seamless>
                                            <a href="https://krismenn.bandcamp.com/album/n-om-gustumi-deus-an-de-valijenn">&#39;N om gustumiñ deus an deñvalijenn de Krismenn</a>
                                        </iframe>
                                    </div>
                                </div>

                                <ul class="quotes centered marTop50">
                                    <li v-for="quote in album.quotes" :key="quote.ids" class="quote">
                                        <img :src="`${directusBaseUrl}assets/${quote.logo}`" alt="">

                                        <p class="text fontColor_light">{{ quote.text }}</p>

                                        <p class="author fontColor_light">- {{ quote.author }}</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </template>
                </PanelSection>

                <PanelSection :title="t('pages.listen.sections.platforms.title')" class="" showTopBorder>
                    <template #content>
                        <nav class="w100 centered">
                            <component 
                                :is=" viewPortWidth < horizontalcrollerBreakpoint ? PanelSectionScroller : 'ul'" 
                                class="platforms" 
                                :class="viewPortWidth < horizontalcrollerBreakpoint ? 'scroller_platforms' : 'noScroll_platforms'">

                                <li class="platformCard flex alignCenter frosty_border frosty_bg" v-for="link in links" :key="link.id">
                                    <a class="full flex column justifyCenter alignCenter" :href="link.href">
                                        <WidgetIcon :name="link.ref" type="homePageNavButton" size="75"/>
                                        <span class="cardText_format frosty_font">{{ link.displayName }}</span>
                                    </a>
                                </li>

                                <li class=" platformCard 
                                            frosty_border frosty_bg
                                            flex alignCenter">
                                    <a class="full flex column justifyCenter alignCenter" href="https://soundcloud.com/krismenn">
                                        <svg class="soundcloud" viewBox="0 0 24 24" width="75" height="75" x="0px" y="0px">
                                            <path d="M4.81,9.71c-0.37-0.01-0.7,0.32-0.69,0.69v6.36c0,0.39,0.32,0.54,0.69,0.55c0.37,0,0.7-0.15,0.7-0.55V10.4 C5.51,10.03,5.18,9.7,4.81,9.71z"/>
                                            <path d="M21.11,12.19c-0.89-0.92-2.31-1.18-3.48-0.69c-0.19-2.83-2.74-5.16-5.58-5.11c-0.41,0-0.83,0.05-1.25,0.15 C10.6,6.6,10.5,6.8,10.5,7.12v10.24c0,0.08,0.07,0.21,0.17,0.24l8.19,0.01C21.65,17.64,23.13,14.14,21.11,12.19z"/>
                                            <path d="M3.34,12.87c-0.02-0.92-1.36-0.92-1.38,0v2.73c-0.03,0.92,1.49,0.99,1.38,0C3.34,15.59,3.34,12.87,3.34,12.87z"/>
                                            <path d="M9,6.79c-0.49,0-0.7,0.37-0.7,0.89v9.41c0,0.34,0.23,0.52,0.7,0.52c0.46,0,0.7-0.17,0.7-0.52V7.68 C9.7,7.15,9.52,6.79,9,6.79z"/>
                                            <path d="M6.98,10.55c-0.38-0.01-0.72,0.33-0.71,0.71v5.81c0,0.18,0.07,0.32,0.2,0.41c0.37,0.25,1.22,0.18,1.2-0.41 v-5.81C7.68,10.88,7.35,10.54,6.98,10.55z"/>
                                        </svg>

                                        <span class="cardText_format frosty_font">Soundcloud</span>
                                    </a>
                                </li>
                
                            </component>
                        </nav>
                    </template>
                </PanelSection>

                <PanelSection :title="t('global.videos')" showBottomBorder>
                    <template #content>
                        <PanelSectionVideos />
                    </template>
                </PanelSection>
            </div>
        </PanelMain>
    </div>
</template>

<style scoped>
.contentBox {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 15px;
}

.coverBox {
    width: 35%;
}
.playerBox {
    width: 35%;
    height: 510px;
    flex-grow: 1;
}
@media(max-width: 700px) {
    .coverBox {
        width: min(450px, 90%);
    }
    .contentBox {
        flex-direction: column;
        align-items: center;
    }
    .playerBox {
        width: min(450px, 90%);
    }
}
.noScroll_platforms {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
}

.scroller_platforms {
    width: 100%;
}

.noScroll_quotes {
    display: flex;
    justify-content: center;
    gap: 20px;
    overflow-x: auto;
    padding: 20px;
    margin: 20px 0;
}

.platformCard {
    width: 100px;
    padding: 10px;
    margin-inline: 10px;
    flex-shrink: 0;
}

.quote {
    width: min(500px, 90%);
    padding: min(5vw, 30px);
    border-color:  rgba(255, 255, 255, 0.219);
    border-bottom: 1px solid rgba(255, 255, 255, 0.219);
    margin-inline: 10px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column ;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
}
.quote:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.219);
}

.quote img {
    width: 50px;
    height: 50px;
    object-fit: contain;
}

.quote .text {
    font-size: 1.6rem;
    font-weight: 500;
}

.quote .author {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 300;
    text-align: right;
}

.fullBox {
    gap: 5vh;
}


.soundcloud {
    /* the svg is not made the same way as the others */
    fill: var(--frosty-font-color);
}

/* @media (min-width: 751px) {
    .noScroll.quotes {
        display: flex;
    }
    .scroller_quotes {
        display: none;
    }
}

@media (max-width: 750px) {
    .noScroll.quotes {
        display: none;
    }
    .scroller_quotes {
        display: flex;
    }
} */

</style>