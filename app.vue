<script setup>

</script>

<template>
  <div id="appBox" class="appBox">
    <StructureBackgroundImage />

    <StructureHeaderMain />

    <StructureMainMain>
         <NuxtPage :transition="{
             name: 'fade',
             mode: 'out-in'
         }" />
    </StructureMainMain>

    <StructureFooterMain />
  </div>
</template>

<style scoped>
#appBox {
    height: 100vh;
    position: relative;
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

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
</style>