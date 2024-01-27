<script setup>
const route = useRoute();

const props = defineProps({
    href: String,
})

function handleClick() {
    console.log(route.path);
}

</script>


<template>
    <NuxtLink :to="href">
        <svg viewBox="0 -960 960 960" class="pointer" @click="handleClick">
        	<path d="m276.846-460 231.693 231.692L480-200 200-480l280-280 28.539 28.308L276.846-500H760v40H276.846Z"/>
        </svg>
    </NuxtLink>
</template>

<style scoped>
svg {
    width: 48px;
    height: 48px;
    fill: white;
}
</style>