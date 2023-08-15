<script setup>

</script>

<template>
    <li class="leftBarTop tabTitle glassSurface-onHover">
        <a href="https://bastard.krismenn.com">BASTARD</a>
    </li>

    <li class="leftBarTop tabTitle glassSurface-onHover">
        <NuxtLink to="/teams">
            TEAMS
        </NuxtLink>
    </li>

    <li class="leftBarBottom tabTitle glassSurface-onHover">
        <NuxtLink to="/projects">
            PROJECTS
        </NuxtLink>
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
    rotate: 180deg;
    cursor: pointer;
}
</style>