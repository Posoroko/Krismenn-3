<script setup>
const pageTitles = usePageTitles();
const { locale } = useI18n();
</script>

<template>
    <li class="header_tab_about tabTitle centered pointer glassSurface-onHover">
        <NuxtLink to="/about">
            {{ pageTitles.about.title[locale].toUpperCase() }}
        </NuxtLink>
    </li>

    <li class="header_tab_about tabTitle centered pointer glassSurface-onHover">
        <NuxtLink to="/contact">
            {{ pageTitles.contact.title[locale].toUpperCase() }}
        </NuxtLink>
    </li>
</template>

<style scoped>
li {
    width: 50%;
}
</style>