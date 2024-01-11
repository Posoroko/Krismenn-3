<script setup>
const { t, locale } = useI18n();

const props = defineProps({
    url: String,
    externalLink: Boolean
})
</script>

<template>
    <NuxtLink class="moreButton glassSurface-onHover" :to="url">
        {{ $t('global.readMore') }}
    </NuxtLink>
</template>

<style scoped>
.moreButton {
    font-size: 1.4rem;
    font-weight: 600;
    /* background-color: #59656841; */
    padding: 8px 15px;
    /* border: 1px solid #757d86; */
    border-radius: 6px;
    margin-top: 20px;
    background-color: hsla(0, 0%, 100%, 0.159);
    border: 1px solid hsla(0, 0%, 97%, 0.207);
}

</style>