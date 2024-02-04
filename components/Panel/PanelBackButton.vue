<script setup>
const props = defineProps({
    href: String,
})
</script>


<template>
    <NuxtLink class="back frosty_font_hover" :to="href" :class="[props.href ? 'active' : 'inactive']">
        <svg viewBox="0 -960 960 960" class="pointer" @click="handleClick">
        	<path class="frosty_font" d="m276.846-460 231.693 231.692L480-200 200-480l280-280 28.539 28.308L276.846-500H760v40H276.846Z"/>
        </svg>
    </NuxtLink>
</template>

<style scoped>
.back {
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
.active {
    opacity: 1;
    pointer-events: all;
}
.inactive {
    opacity: 0;
    pointer-events: none;
}
</style>