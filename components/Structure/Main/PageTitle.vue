<script setup>
const appState = useAppState();
</script>

<template>
    <h1 class="topBarTitle pointer" :class="{ 'dimmed': appState.backgroundFaded }">KRISMENN</h1>
</template>

<style scoped>
.topBarTitle {
    font-size: clamp(2.4rem, 4vw + 0.1rem, 3rem);
    color: var(--tabs-text-color);
    opacity: 1;
    transition: 600ms ease;
}
.topBarTitle.dimmed {
    opacity: 0;
}
</style>