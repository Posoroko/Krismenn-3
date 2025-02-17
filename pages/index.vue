<script setup>
const { t, locale } = useI18n();
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
    enterFrom: 'fade'
})

// SEO, meta tags, head content

const pageRef = "home";
const ogUrl = computed(() => {
    let url = t(`pages.${pageRef}.url`);

    return `https://krismenn.com/${locale.value}${url}`
})
const useHeadContent = useCreateUseHead( pageRef, ogUrl, t);
useHead( useHeadContent );

</script>

<template>
    <main class="h100 relative noEvents">
        
    </main>
</template>