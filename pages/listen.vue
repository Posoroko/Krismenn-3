<script setup>
import { directusGetItems, directusBaseUrl } from '@/directus/directus.js';
const { t, locale } = useI18n();

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

definePageMeta({
    pageTransition: {
        name: 'right'
    }
})

//SEO, meta tags, head content

const pageRef = "listen";
const ogUrl = computed(() => {
    let url = t(`pages.${pageRef}.url`);

    return `https://krismenn.com/${locale.value}${url}`
})
const useHeadContent = useCreateUseHead( pageRef, ogUrl, t);
useHead( useHeadContent );

</script>

<template>
    <div class="absoluteFull centered">
        <PanelMain :title="t('pages.listen.title')">
            <div class="fullBox w100
                         flex column ">
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
                        <PanelSectionContentPlatforms />
                    </template>
                </PanelSection>

                <PanelSection :title="t('global.videos')" showBottomBorder>
                    <template #content>
                        <PanelSectionContentVideos />
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
    aspect-ratio: 1/1;
}
.playerBox {
    width: 35%;
    /* height: 510px; */
    flex-grow: 1;
}
@media(max-width: 700px) {
    .coverBox {
        width: min(200px, 90%);
    }
    .contentBox {
        flex-direction: column;
        align-items: center;
    }
    .playerBox {
        width: min(450px, 90%);
        height: 400px;
    }
}
.quote {
    width: min(500px, 90%);
    padding: min(5vw, 30px);
    border-color:  rgba(255, 255, 255, 0.219);
    border-top: 1px solid rgba(255, 255, 255, 0.219);
    margin-inline: 10px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column ;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
}
.quote:first-child {
    border-top: none;
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






</style>