<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();
const localePath = useLocalePath()

const route = useRoute();

const tabs = [
    { id: 0, key: 'bastard' },
    { id: 1, key: 'live' },
    { id: 2, key: 'studio' },
];

</script>

<template>
    <li v-for="tab in tabs" :key="tab.id"
        class="box glowing_onHover" 
        :class="{ 'glowing': route.fullPath.includes(t(`pages.${tab.key}.title`).toLowerCase()) }">

        <NuxtLink 
        :to="localePath(tab.key)"
        class="tabLinkText">
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