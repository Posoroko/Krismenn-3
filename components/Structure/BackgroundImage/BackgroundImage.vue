<script setup>
const route = useRoute();

console.log(route.path);
const themes = useThemes();

const activeTheme = useActiveTheme();


const image = computed(() => {
    return themes.value[activeTheme.value].backgroundImage;
});


</script>

<template>
    <div class="frame">
        <!-- <img class="" :src="`/images/background/${folder}/${image}.webp`" alt="Krismenn"> -->
        <img class="" :src="`/images/background/x-large/${image}`" alt="Krismenn" :class="{ 'dark' : route.path.length > 4}">
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
/* img.dark {
    filter: brightness(0.6) contrast(1.4) saturate(0.5);
    transition: 600ms ease;
} */
</style>