<script setup>
import { useI18n } from '#imports';
const { t, locale } = useI18n();

const pageTitles = usePageTitles();
const route = useRoute();
</script>

<template>
    <li class="box glassSurface-onHover" >
        <a href="https://bastard.krismenn.com" class="tabLinkText gap20 ">
            <span>BASTARD</span>
            <WidgetIcon class="linkIcon" name="externalLink" type="homePageNavButton" size="24"/>
        </a>
    </li>

    <li class="box glassSurface-onHover" :class="{ 'glassSurface_selected': route.fullPath == `/${pageTitles.teams.title[locale].toLowerCase()}` }">
        <NuxtLink to="/teams" class="tabLinkText">
            {{ $t('pages.teams.title').toUpperCase() }}
        </NuxtLink>
    </li>

    <li class="box glassSurface-onHover" :class="{ 'glassSurface_selected': route.fullPath == `/${pageTitles.projects.title[locale].toLowerCase()}` }">
        <NuxtLink to="/projects" class="tabLinkText">
            {{ $t('pages.projects.title').toUpperCase() }}
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