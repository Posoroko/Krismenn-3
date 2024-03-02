<script setup>
const { t } = useI18n();
const appState = useAppState();

setTimeout(() => {
    appState.value.backgroundFaded = false;
}, 500);

onBeforeRouteLeave((to, from, next) => {
    if (!appState.value.homepageUrls.includes(to.fullPath)) {
        appState.value.backgroundFaded = true;
    }
    setTimeout(() => {
        next();
    }, 500);
})

definePageMeta({
    pageTransition: {
        name: 'fade'
    }
})

const pageRef = "home";
useHead({
    title: t(`pages.${pageRef}.ogTitle`),
    description: t(`pages.${pageRef}.ogDescription`),
    meta: [
        {
            property: 'og:title',
            content: t(`pages.${pageRef}.ogTitle`)
        },
        {
            property: 'og:description',
            content: t(`pages.${pageRef}.ogDescription`)
        }
    ]
})

</script>

<template>
    <main class="h100 relative noEvents">
        
    </main>
</template>