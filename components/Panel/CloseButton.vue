<script setup>

</script>

<template>
    <NuxtLink to="/" class="absolute close pointer">
        <svg xmlns="http://www.w3.org/2000/svg" :class="type" :height="48" viewBox="0 -960 960 960" :width="48">
            <!-- <path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Z"/> -->
            <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
        </svg>
    </NuxtLink>
</template>

<style scoped>
.close {
    width: 48px;
    height: 48px;
    padding: 5px;
    top: 10px;
    right: 0px;
    z-index: 5;
}
svg {
    width: 100%;
    height: 100%;
    filter: blur(0.5px);
}
svg:hover path {
    fill: rgba(255, 255, 255, 0.849);
    transition: fill 300ms ease;
}
path {
    fill: rgba(255, 255, 255, 0.349);
    transition: fill 600ms ease;
    
}
</style>