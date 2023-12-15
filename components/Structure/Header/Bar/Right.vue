<script setup>
import { useI18n } from '#imports';
const { t, locale } = useI18n();

const pageTitles = usePageTitles();
const route = useRoute();
</script>

<template>
    <li class="box glassSurface-onHover" :class="{ 'glassSurface_selected': route.fullPath == `/${pageTitles.agenda.title[locale].toLowerCase()}` }">
        <NuxtLink to="/agenda" class="tabLinkText full centered">
            {{ $t('pages.agenda.title').toUpperCase() }}
        </NuxtLink>
    </li>

    <li class="box glassSurface-onHover" :class="{ 'glassSurface_selected': route.fullPath == `/$t{pageTitles.listen.title[locale].toLowerCase()}` }">
        <NuxtLink to="/listen" class="tabLinkText full centered">
            {{ $t('pages.contact.title').toUpperCase() }}
        </NuxtLink>
    </li>

    <li class="box glassSurface-onHover" :class="{ 'glassSurface_selected': route.fullPath == `/${pageTitles.news.title[locale].toLowerCase()}` }">
        <NuxtLink to="/news" class="tabLinkText full centered">
            {{ $t('pages.news.title').toUpperCase() }}
        </NuxtLink>
    </li>
</template>

<style scoped>

li.box {
    writing-mode: vertical-lr;
    text-orientation: sideways-right;
}

</style>