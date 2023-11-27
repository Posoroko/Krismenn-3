<script setup>
const pageTitles = usePageTitles();
const { locale } = useI18n();
const route = useRoute();
</script>

<template>
    <li class="leftBarTop tabTitle glassSurface-onHover" >
        <a href="https://bastard.krismenn.com" class="full flex justifyCenter alignCenter gap20 ">
            <span>BASTARD</span>
            <WidgetIcon class="linkIcon" name="externalLink" type="homePageNavButton" size="24"/>
        </a>
    </li>

    <li class="leftBarTop tabTitle glassSurface-onHover" :class="{ 'glassSurface_selected': route.fullPath == `/${pageTitles.teams.title[locale].toLowerCase()}` }">
        <NuxtLink to="/teams" class="full centered">
            {{ pageTitles.teams.title[locale].toUpperCase() }}
        </NuxtLink>
    </li>

    <li class="leftBarBottom tabTitle glassSurface-onHover" :class="{ 'glassSurface_selected': route.fullPath == `/${pageTitles.projects.title[locale].toLowerCase()}` }">
        <NuxtLink to="/projects" class="full centered">
            {{ pageTitles.projects.title[locale].toUpperCase() }}
        </NuxtLink>
    </li>
</template>

<style scoped>
.glassSurface-onHover:hover .linkIcon {
    opacity: 1;
    transition: opacity 150ms ease;
}
.linkIcon {
    opacity: 0;
    rotate: 180deg;
    transition: opacity 1500ms ease;
}
li {
    flex-grow: 1;
    display: grid;
    place-items: center;
}
.tabTitle {
    writing-mode: vertical-lr;
    text-orientation: sideways-right;
    rotate: 180deg;
    cursor: pointer;
}
</style>