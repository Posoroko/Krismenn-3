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
</style>