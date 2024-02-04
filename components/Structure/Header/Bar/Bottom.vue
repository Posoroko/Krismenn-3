<script setup>
import { useI18n } from '#imports';
const { t, locale } = useI18n();
const appConfig = useAppConfig();

const routes = appConfig.routes;
const route = useRoute();

const tabs = [
    { id: 0, key: 'about' },
    { id: 1, key: 'contact' },
];

</script>

<template>
    <li v-for="tab in tabs" :key="tab.id"
        class="box glowing_onHover" 
        :class="{ 'glowing': route.fullPath.includes(routes[tab.key][locale]) }">
        <NuxtLink :to="`/${tab.key}`" class="tabLinkText">
            {{ $t(`pages.${tab.key}.title`).toUpperCase() }}
        </NuxtLink>
    </li>
</template>

<style scoped>
li {
    width: 50%;
}
</style>