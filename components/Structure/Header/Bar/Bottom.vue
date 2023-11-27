<script setup>
const pageTitles = usePageTitles();
const { locale } = useI18n();
const route = useRoute();
</script>

<template>
    <li class="header_tab_about tabTitle centered pointer glassSurface-onHover" :class="{ 'glassSurface_selected' : route.fullPath == `/${pageTitles.about.title[locale].toLowerCase()}` }">
        <NuxtLink to="/about" class="full centered">
            {{ pageTitles.about.title[locale].toUpperCase() }}
        </NuxtLink>
    </li>

    <li class="header_tab_about tabTitle centered pointer glassSurface-onHover" :class="{ 'glassSurface_selected': route.fullPath == `/${pageTitles.contact.title[locale].toLowerCase()}` }">
        <NuxtLink to="/contact" class="full centered">
            {{ pageTitles.contact.title[locale].toUpperCase() }}
        </NuxtLink>
    </li>
</template>

<style scoped>
li {
    width: 50%;
}
</style>