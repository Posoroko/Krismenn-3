<script setup>
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
</script>

<template>
    <main class="relative h100 noEvents">
        
    </main>
</template>

<style scoped>

</style>