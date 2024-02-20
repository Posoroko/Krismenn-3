<script setup>
import { directusGetItems  } from '@/directus/directus.js';

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
    <Section class="playerBox centered">
        <iframe style="border: 0; width: 75%; height: 472px; margin: auto;" src="https://bandcamp.com/EmbeddedPlayer/album=4116606029/size=large/bgcol=333333/linkcol=4ec5ec/artwork=small/transparent=true/" seamless><a href="https://krismenn.bandcamp.com/album/n-om-gustumi-deus-an-de-valijenn">&#39;N om gustumiñ deus an deñvalijenn de Krismenn</a></iframe>
    </Section>
</template>

<style scoped>
iframe {
    box-shadow: 0px 0px 5px 0px #002c46;
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