<script setup>
const themes = useThemes();

const activeTheme = useActiveTheme();


const image = computed(() => {
    return themes.value[activeTheme.value].backgroundImage;
});


</script>

<template>
    <div class="frame">
        <!-- <img class="" :src="`/images/background/${folder}/${image}.webp`" alt="Krismenn"> -->
        <img class="" :src="`/images/background/x-large/${image}`" alt="Krismenn">
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
}
</style>