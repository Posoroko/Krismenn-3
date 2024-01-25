<script setup>
const route = useRoute();

</script>

<template>
    <div class="frame">
        <img class="" src="/images/background/xx-large/blue.webp" alt="Krismenn">
        <img 
            class="emptyBGI" 
            :class="{ 'active': route.path.length > 4 }"
            src="/images/background/empty-blue.png" 
            alt="">
    </div>
</template>

<style scoped>
.frame {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: 600ms ease;
}

img.emptyBGI {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 600ms ease;
}
.emptyBGI.active {
    /* filter: brightness(0.6) contrast(1) saturate(1); */
    transition: 600ms ease;
    opacity: 1;
    transition: 600ms ease;
}
</style>