<script setup>

</script>

<template>
  <div id="appBox" class="appBox">
    <StructureBackgroundImage />

    <StructureHeaderMain />

    <StructureMainMain />

    <StructureFooterMain />
  </div>
</template>

<style scoped>
#appBox {
    /* width: 400px;
    height: 600px; */
    width: 100%;
    height: 100%;
    position: relative;
    /* animation: grow 2s  2s ease forwards; */
}
@keyframes grow {
    0% {
        width: 400px;
        height: 600px;
    }
    100% {
        width: 100vw;
        height: 100vh;
    }
}
.backgroundImage {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    top: 0;
    left: 0;
}
</style>