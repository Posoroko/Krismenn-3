<script setup>
const { locale } = useI18n();
const appState = useAppState();

watch(locale, () => {
    console.log('locale changed: ', locale.value);
})

</script>

<template>
  <div id="appBox" class="appBox" :class="appState.colorMode">
    <StructureBackgroundImage class="app_bgImage" />

    <StructureHeaderMain class="app_header" />

    <StructureMainMain class="app_main">
        <NuxtPage />
    </StructureMainMain>

    <StructureFooterMain class="app_footer" />

    <WidgetCookiePromptMain class="app_cookie" />

    <!-- <WidgetCursor /> -->
  </div>
</template>

<style>
#appBox {
    height: 100vh;
    height: 100dvh;
    height: 100svh;
    position: relative;
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
.left-enter-active,
.left-leave-active,
.right-enter-active,
.right-leave-active,
.bottom-enter-active,
.bottom-leave-active,
.fade-enter-active,
.fade-leave-active,
.top-enter-active,
.top-leave-active {
    transition: all 1.1s cubic-bezier(1,0,.35,1);
}

/* out of frame state */

/* .bottom-leave-to,
.bottom-enter-from,
.left-enter-from,
.left-leave-to,
.right-leave-to,
.right-enter-from {
    filter: blur(5px);
} */

/* in frame state */
/* .bottom-leave-from,
.bottom-enter-to,
.left-enter-to,
.left-leave-from,
.right-leave-from,
.right-enter-to {
    filter: blur(0px);
} */


/* VErtical */

/* bottom */
.bottom-leave-to,
.bottom-enter-from {
    transform: translateY(100%);
}
/* center */
.bottom-leave-from,
.bottom-enter-to {
    transform: translateY(0%);
}




/* horizontal */

/* center */
.left-enter-to,
.left-leave-from,
.right-enter-to,
.right-leave-from {
    transform: translateX(0%);
}

/* left */
.left-enter-from,
.left-leave-to {
    transform: translateX(-100%);
}
/* right */
.right-leave-to,
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