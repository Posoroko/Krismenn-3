<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

const props = defineProps({
    imageId: {
        type: String,
        required: true
    },
    imageAlt: {
        type: String,
        required: false
    },
    objectFit: {
        type: String,
        required: true
    }
})

const modalIsOpen = ref(false)

function handleImageclick() {
    modalIsOpen.value = true
}
function closeModal() {
    modalIsOpen.value = false
}
</script>

<template>
    <div class="frame centered">
        <img class="smallImage" :src="`${directusAssets}${imageId}`" :alt="imageAlt" @click="handleImageclick">
    </div>

    <div class="modal" v-if="modalIsOpen">
        <div class="modalContent centered pad20">
            <span class="close textColor" @click="closeModal">&times;</span>

            <img class="objectFitContain" :src="`${directusAssets}${imageId}?key=800px`"
                :alt="imageAlt || 'Carine Leduc, thérapeute énergétitienne en Centre-Bretagne'">
        </div>
    </div>
</template>

<style scoped>
.frame {
    width: 100%;
    height: 100%;
}
.smallImage {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #00000097;
    object-fit: v-bind(objectFit);
    object-position: center;
    cursor: pointer;
    transition: 300ms ease;
}
.smallImage:hover {
    transform: scale(1.01);
    box-shadow: 2px 2px 10px #000000d6;
    transition: 300ms ease;
}
.modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    padding: max(5vw, 10px);
    background-color: #0000005d;
    backdrop-filter: blur(5px);
}

.modalContent {
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    border-radius: 10px;
    box-shadow: 1px 1px 10px #00000097;
    position: relative;
}

.close {
    width: 48px;
    height: 48px;
    font-size: 40px;
    line-height: 1;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    display: grid;
    place-items: center;
}

.close:hover {
    rotate: 360deg;
    transition: 300ms ease;
}
</style>