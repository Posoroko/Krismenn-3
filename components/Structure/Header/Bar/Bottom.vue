<script setup>
import { useI18n } from '#imports';
const { t } = useI18n();
const { locale } = useI18n();

const pageTitles = usePageTitles();
const route = useRoute();
</script>

<template>
    <li class="box glassSurface-onHover" :class="{ 'glassSurface_selected' : route.fullPath == `/${pageTitles.about.title[locale].toLowerCase()}` }">
        <NuxtLink to="/about" class="tabLinkText">
            {{ $t('pages.about.title').toUpperCase() }}
        </NuxtLink>
    </li>

    <li class="box glassSurface-onHover" :class="{ 'glassSurface_selected': route.fullPath == `/${pageTitles.contact.title[locale].toLowerCase()}` }">
        <NuxtLink to="/contact" class="tabLinkText">
            {{ $t('pages.contact.title').toUpperCase() }}
        </NuxtLink>
    </li>
</template>

<style scoped>
li {
    width: 50%;
}
</style>