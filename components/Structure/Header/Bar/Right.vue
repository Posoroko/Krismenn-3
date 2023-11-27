<script setup>
const pageTitles = usePageTitles();
const { locale } = useI18n();
const route = useRoute();
</script>


<template>
    <li class="rightBarTop tabTitle glassSurface-onHover" :class="{ 'glassSurface_selected': route.fullPath == `/${pageTitles.agenda.title[locale].toLowerCase()}` }">
        <NuxtLink to="/agenda" class="full centered">
            {{ pageTitles.agenda.title[locale].toUpperCase() }}
        </NuxtLink>
    </li>

    <li class="rightBarTop tabTitle glassSurface-onHover" :class="{ 'glassSurface_selected': route.fullPath == `/${pageTitles.listen.title[locale].toLowerCase()}` }">
        <NuxtLink to="/listen" class="full centered">
            {{ pageTitles.listen.title[locale].toUpperCase() }}
        </NuxtLink>
    </li>

    <li class="rightBarBottom tabTitle glassSurface-onHover" :class="{ 'glassSurface_selected': route.fullPath == `/${pageTitles.news.title[locale].toLowerCase()}` }">
        <NuxtLink to="/news" class="full centered">
            {{ pageTitles.news.title[locale].toUpperCase() }}
        </NuxtLink>
    </li>
</template>

<style scoped>
li {
    flex-grow: 1;
    display: grid;
    place-items: center;
}

.tabTitle {
    writing-mode: vertical-lr;
    text-orientation: sideways-right;
    cursor: pointer;
}
</style>