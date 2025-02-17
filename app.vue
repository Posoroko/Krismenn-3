<script setup>
const { t, locale } = useI18n();
const appState = useAppState();

useHead({
    htmlAttrs: {
        lang: locale.value
    },
    // pageTitle === title defined in useHead in other pages
    titleTemplate: (pageTitle) => {
        return pageTitle ? `${pageTitle} - ${t('app.ogTitle')}` : t('app.ogTitle');
    }
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

        <ClientOnly>
            <WidgetCookiePromptMain class="app_cookie" />
        </ClientOnly>

        <WidgetSocialMedia />
    </div>
</template>

<style>
.left-enter-from,
.left-leave-to {
    transform: translateX(-100%);
}
.left-enter-to,
.left-leave-from,
.right-enter-to,
.right-leave-from {
    transform: translateX(0%);
}

.right-enter-from,
.right-leave-to {
    transform: translateX(100%);
}
.bottom-enter-to,
.bottom-leave-from {
    transform: translateY(0%);
}
.bottom-enter-from,
.bottom-leave-to {
    transform: translateY(100%);
}
.top-enter-to,
.top-leave-from {
    transform: translateY(0%);
}

.top-enter-from,
.top-leave-to {
    transform: translateY(-100%);
}


.left-enter-active,
.left-leave-active,
.right-leave-active,
.right-enter-active,
.fade-leave-active,
.fade-enter-active,
.top-enter-active,
.top-leave-active,
.bottom-enter-active,
.bottom-leave-active {
    transition: 500ms ease;
}

.left-enter-from,
.left-leave-to,
.right-enter-from,
.right-leave-to,
.bottom-enter-from,
.bottom-leave-to,
.top-enter-from,
.top-leave-to,
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.left-enter-to,
.left-leave-from,
.right-enter-to,
.right-leave-from,
.bottom-enter-to,
.bottom-leave-from,
.top-enter-to,
.top-leave-from,
.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}


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