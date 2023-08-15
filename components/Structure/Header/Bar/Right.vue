<template>
    <li class="rightBarTop tabTitle glassSurface-onHover">
        <NuxtLink to="/agenda">AGENDA</NuxtLink>
    </li>

    <li class="rightBarTop tabTitle glassSurface-onHover">
        <NuxtLink to="/listen">LISTEN</NuxtLink>
    </li>

    <li class="rightBarBottom tabTitle glassSurface-onHover">
        <NuxtLink to="/news">NEWS</NuxtLink>
    </li>
</template>

<style scoped>
li {
    flex-grow: 1;
    display: grid;
    place-items: center;
}

.tabTitle {
    writing-mode: vertical-lr;
    text-orientation: sideways-right;
    cursor: pointer;
}
</style>