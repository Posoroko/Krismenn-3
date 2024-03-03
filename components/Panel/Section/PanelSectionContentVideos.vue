<script setup>

import { directusGetItems } from '@/directus/directus.js';

const getItems = directusGetItems();
const { t } = useI18n();

const dialog = ref(null);
const video = ref(null);
const props = defineProps({
    showSlug: {
        type: String
    }
})
const queryParams = {
    fields: ["*", "show.mainSlug"],
    filter: props.showSlug ? {
        show: {
            slug: {
                _contains: props.showSlug
            }
        }
    } : {}
}
const { data: youtubes } = await useAsyncData(
    `youtube-${props.showSlug}`,
    async () => {
        const items = await getItems('Youtube', queryParams)

        return items
    },
    { server: true }
)


function openMediaInDialog(e) {
    let url = e.currentTarget.dataset.url;
    let youtubeEmberUrl = url.replace("watch?v=", "embed/");
    video.value.src = youtubeEmberUrl;
    dialog.value.showModal();
}
function stopVideo() {
    video.value.src = '';
}

</script>

<template>
    <nav class="w100">
        <ul class="w100">
            <li class="youtube relative" v-for="video in youtubes" :key="video.id">
                <img :src="`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`" :alt="video.title" :data-url="video.url" @click="openMediaInDialog">

                <svg class="playIcon" viewBox="0 -960 960 960">
                    <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                </svg>
            </li>
        </ul>
    </nav>

    <dialog ref="dialog" class="dialog" @close="stopVideo">
        <div class="flex justifyEnd" @click="dialog.close()">
            <svg class="closeButton pointer" viewBox="0 -960 960 960">
                <path d="M256-227.692 227.692-256l224-224-224-224L256-732.308l224 224 224-224L732.308-704l-224 224 224 224L704-227.692l-224-224-224 224Z"/>
            </svg>
        </div>

        <iframe ref="video" src="" allowfullscreen></iframe>
    </dialog>
</template>

<style scoped>


ul {
    --spacing: 10px;
    --perLine: 4;

    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding: var(--spacing);
    gap: var(--spacing);
}
@media (max-width:799px) {
    ul {
        --perLine: 3;
    }
}
.youtube {
    flex-shrink: 0;
    width: calc(
        (100% - 
            (var(--perLine) - 1) 
            * var(--spacing)
        ) 
        / var(--perLine)
    );
    aspect-ratio: 16/9;
    background-color: gray;
    cursor: pointer;
    transition: all 50ms ease-in-out;
}
@media (max-width: 499px) {
    ul {
        flex-wrap: nowrap;
        overflow-x: scroll;
        border: 2px solid rgba(0, 37, 54, 0.582);
        box-shadow: inset 0 0 10px 0 rgb(0, 37, 54);
    }
    .youtube {
        width: 250px;
    }
}


@media (min-width: 650px) {
}
li.youtube img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.playIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 40%;
    fill: white;
    opacity: 0.7;
    transition: all 50ms ease-in-out;
    pointer-events: none;
}
.youtube:hover {
    transform: scale(1.01);
    box-shadow: 0 0 10px 0 rgba(0, 37, 54, 0.582);
}
.youtube:hover .playIcon{
    opacity: 1;
}
.dialog {
    width: min(98vw, 800px);
    background-color: transparent;
    margin: auto;
    border: none;
    top: 0;
    left: 0;
    
}
.closeButton {
    width: 32px;
    height: 32px;
    fill: white;
}
.dialog::backdrop {
    background-color: rgba(13, 23, 27, 0.89);
}
iframe {
    width: 100%;
    aspect-ratio: 16/9;
    border: none;
    display: block;
}

</style>