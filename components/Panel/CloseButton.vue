<template>
    <NuxtLink :to="`${$t('pages.home.url')}`" class="close frosty_font_hover pointer">
        <svg xmlns="http://www.w3.org/2000/svg" :height="48" viewBox="0 -960 960 960" :width="48">
            <path class="frosty_font" d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
        </svg>
    </NuxtLink>
</template>

<style scoped>
.close {
    width: 48px;
    height: 48px;
    padding: 5px;
    z-index: 5;
}
svg {
    width: 100%;
    height: 100%;
    filter: blur(0.5px);
}

</style>