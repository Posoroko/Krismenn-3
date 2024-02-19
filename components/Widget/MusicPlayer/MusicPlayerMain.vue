<script setup>
import { directusBaseUrl, directusGetItems  } from '@/directus/directus.js';

const { t } = useI18n();

const getItems = directusGetItems();

const queryParams = {
    fields: ['*']
}

const { data: tracks } = await useAsyncData(
    'audioTracks',
    async () => {
        const items = await getItems('Audio_tracks', queryParams );

        return items
    },
    { server: true }
)


</script>

<template>
    <Section class="playerBox allEvents frosty_border glowing">
        <iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=4116606029/size=small/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="https://krismenn.bandcamp.com/album/n-om-gustumi-deus-an-de-valijenn">&#39;N om gustumiñ deus an deñvalijenn de Krismenn</a></iframe>

        <!-- <ul class="flex column">
            <li v-for="track in tracks" :key="track.id">
                <h2 class="cardText_format">
                    {{ track.title }}
                </h2>
                <audio controls class="">          
                    <source :src="`https://krismenn-audio-tracks.netlify.app/${track.netlifyFileName}`" type="audio/mpeg">
                    {{ t('audioPlayer.notSupported') }}
                </audio>
            </li>
        </ul> -->
    </Section>
</template>

<style scoped>
.playerBox {
    max-width: 100%;
    padding: 20px;
    position: absolute;
    bottom: 25%;
    right: 3vw;
}
h1 {
    margin-bottom: 20px;
}
h1, h2 {
    color: white;
}
audio {
    width: min(300px, 50vw);
    height: 25px;
    margin-top: 5px;
    opacity: 0.8;
}
li {
    margin-top: 10px;
}
li:first-child {
    margin-top: 0px;
}
</style>