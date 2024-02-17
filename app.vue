<script setup>

</script>

<template>
  <div id="appBox" class="appBox" >
    <StructureBackgroundImage class="app_bgImage" />

    <StructureHeaderMain class="app_header" />

    <StructureMainMain class="app_main">
        <NuxtPage />
    </StructureMainMain>

    <StructureFooterMain class="app_footer" />

    
  </div>
</template>

<style>
#appBox {
    height: 100vh;
    height: 100dvh;
    height: 100svh;
    position: relative;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}


.slideFromRight-enter-from,
.slideFromRight-leave-to {
    filter: blur(10px);
    opacity: 0;
    transform: translateX(100%);
}
.slideFromRight-enter-to,
.slideFromRight-leave-from {
    filter: blur(0px);
    opacity: 1;
    transform: translateX(0%);
}


.slideFromLeft-enter-from,
.slideFromLeft-leave-to {
    filter: blur(10px);
    opacity: 0;
    transform: translateX(-100%);
}
.slideFromLeft-enter-to,
.slideFromLeft-leave-from {
    filter: blur(0px);
    opacity: 1;
    transform: translateX(0%);
}


.slideFromBottom-enter-from,
.slideFromBottom-leave-to {
    filter: blur(10px);
    opacity: 0;
    transform: translateY(100%);
}
.slideFromBottom-enter-to,
.slideFromBottom-leave-from {
    filter: blur(0px);
    opacity: 1;
    transform: translateX(0%);
}

.slideFromLeft-enter-active,
.slideFromBottom-enter-active,
.slideFromRight-enter-active
 {
    transition: 300ms ease;
}

.slideFromLeft-leave-active,
.slideFromBottom-leave-active,
.slideFromRight-leave-active {
    transition: 300ms ease;
}



</style>

<style scoped>
.app_bgImage {
    z-index: 0;
}
.app_header {
    z-index: 1;
}
.app_main {
    z-index: 2;
}
.app_footer {
    z-index: 3;
}
</style>