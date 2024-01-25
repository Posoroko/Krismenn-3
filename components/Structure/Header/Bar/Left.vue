<script setup>
import { useI18n } from '#imports';
const { t, locale } = useI18n();

const appConfig = useAppConfig();

const routes = appConfig.routes;
const route = useRoute();

const tabs = [
    { id: 0, key: 'bastard' },
    { id: 1, key: 'shows' },
];


</script>

<template>
    <li v-for="tab in tabs" :key="tab.id"
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
    rotate: 180deg;
}
</style>