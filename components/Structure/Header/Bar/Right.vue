<script setup>
const pageTitles = usePageTitles();
const { locale } = useI18n();
</script>


<template>
    <li class="rightBarTop tabTitle glassSurface-onHover">
        <NuxtLink to="/agenda">
            {{ pageTitles.agenda.title[locale].toUpperCase() }}
        </NuxtLink>
    </li>

    <li class="rightBarTop tabTitle glassSurface-onHover">
        <NuxtLink to="/listen">
            {{ pageTitles.listen.title[locale].toUpperCase() }}
        </NuxtLink>
    </li>

    <li class="rightBarBottom tabTitle glassSurface-onHover">
        <NuxtLink to="/news">
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