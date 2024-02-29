<script setup>
const { locale } = useI18n();
const appState = useAppState();

</script>

<template>
  <div id="appBox" class="appBox" :class="appState.colorMode">
    <StructureBackgroundImage class="app_bgImage" />

    <StructureHeaderMain class="app_header" />

    <StructureMainMain class="app_main">
        <NuxtPage />
    </StructureMainMain>

    <StructureFooterMain class="app_footer" />
    
    <ClientOnly>
        <WidgetCookiePromptMain class="app_cookie" />
    </ClientOnly>
    
  </div>
</template>

<style>
#appBox {
    height: 100vh;
    height: 100dvh;
    height: 100svh;
    position: relative;
    overflow: hidden;
}
#appBox.blue {
    filter: saturate(1) contrast(1) brightness(1) hue-rotate(0deg);
    transition: all 300ms ease-in-out;
}
#appBox.gray {
    filter: saturate(0) contrast(1.1) brightness(1.3) hue-rotate(0deg);
    transition: all 300ms ease-in-out;
}
#appBox.sepia {
    filter: saturate(1) contrast(1.1) brightness(1.1) hue-rotate(60deg);
    transition: all 300ms ease-in-out;
}

/* entering transition */
.left-enter-active,
.right-enter-active,
.bottom-enter-active,
.fade-enter-active,
.top-enter-active {
    transition: all 1.1s cubic-bezier(1,0,.35,1);
}

/* leaving transition */
.left-leave-active,
.right-leave-active,
.bottom-leave-active,
.fade-leave-active,
.top-leave-active {
    transition: all 0.5s cubic-bezier(1,0,.35,1);
}

/* leave in fade out */
.bottom-leave-to,
.left-leave-to,
.right-leave-to,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-from {
    opacity: 0;
}
.fade-enter-to {
    opacity: 1;
}

/* Vertical slide in */

/* bottom */

.bottom-enter-from {
    transform: translateY(100%);
}
/* center */
.bottom-leave-from,
.bottom-enter-to {
    transform: translateY(0%);
}


/* horizontal slide in */

/* center */
.left-enter-to,
.left-leave-from,
.right-enter-to,
.right-leave-from {
    transform: translateX(0%);
}

/* left */
.left-enter-from {
    transform: translateX(-100%);
}
/* right */

.right-enter-from {
    transform: translateX(100%);
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
.app_cookie {
    z-index: 4;
}
</style>