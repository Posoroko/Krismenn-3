<script setup>
const appState = useAppState();

const homePaths = [ '/en', '/fr', '/bzh', '/'];

setTimeout(() => {
    appState.value.backgroundFaded = false;
}, 500); // Delay for 2 seconds

onBeforeRouteLeave((to, from, next) => {

    if (homePaths.includes(to.fullPath)) {
        return;
    }
    appState.value.backgroundFaded = true;
    
    setTimeout(() => {
        next();
    }, 500); // Delay for 2 seconds
})

</script>

<template>
    <main class="relative h100 noEvents">
        
    </main>
</template>

<style scoped>

</style>