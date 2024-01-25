<script setup>
const route = useRoute();
</script>

<template>
    <h1 class="topBarTitle pointer" :class="{ 'dimmed': route.path.length > 4 }">KRISMENN</h1>
</template>

<style scoped>
.topBar {
    height: var(--gutter-thickness);
    margin: 0 var(--gutter-thickness);
}
.topBarTitle {
    font-family: var(--kTitle);
    font-size: clamp(2.4rem, 4vw + 0.1rem, 3rem);
    color: var(--tabs-text-color);
    opacity: 1;
    transition: 600ms ease;
}
.topBarTitle.dimmed {
    opacity: 0;
}
</style>