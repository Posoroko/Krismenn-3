<script setup>
const pageTitles = usePageTitles();

console.log(pageTitles.value)
</script>

<template>
    <li class="header_tab_about tabTitle centered pointer glassSurface-onHover">
        <NuxtLink to="/about">
            ABOUT
        </NuxtLink>
    </li>

    <li class="header_tab_about tabTitle centered pointer glassSurface-onHover">
        <NuxtLink to="/contact">
            CONTACT
        </NuxtLink>
    </li>
</template>

<style scoped>
li {
    width: 50%;
}
</style>