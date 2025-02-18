<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();
const localePath = useLocalePath()
const route = useRoute();

const tabs = [
    { id: 0, key: 'agenda'},
    { id: 1, key: 'listen'},
    { id: 2, key: 'news'},

];

</script>

<template>
    <li v-for="tab in tabs" :key="tab.id"
        :data-test="tab.id"
        class="box frosty_surface glow_on_hover" 
        :class="{ 'glow_always': route.fullPath.includes(t(`pages.${tab.key}.title`).toLowerCase()) }">
        <NuxtLink :to="localePath(tab.key)" 
        class="tabLinkText">
            {{ $t(`pages.${tab.key}.title`).toUpperCase() }}
        </NuxtLink>
    </li>
</template>

<style scoped>

li.box {
    writing-mode: vertical-lr;
    text-orientation: sideways-right;
}
</style>