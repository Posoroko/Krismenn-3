<script setup>
import { useI18n } from '#imports';

const { t, locale } = useI18n();
const appConfig = useAppConfig();
const routes = appConfig.routes;

const route = useRoute();

const tabs = [
    { id: 0, key: 'agenda'},
    { id: 1, key: 'listen'},
    { id: 2, key: 'news'}
];

</script>

<template>
    <li v-for="tab in tabs" :key="tab.id"
        :data-test="tab.id"
        class="box glassSurface-onHover" 
        :class="{ 'glassSurface_selected': route.fullPath.includes(routes[tab.key][locale]) }">
        <NuxtLink :to="`/${tab.key}`" class="tabLinkText">
            {{ $t(`pages.${tab.key}.title`).toUpperCase() }}
        </NuxtLink>
    </li>
</template>

<style scoped>

li.box {
    writing-mode: vertical-lr;
    text-orientation: sideways-right;
}
.glassSurface-onHover:hover .linkIcon {
    opacity: 1;
    transition: opacity 150ms ease;
}
.linkIcon {
    opacity: 0;
    rotate: 180deg;
    transition: opacity 1500ms ease;
}
</style>