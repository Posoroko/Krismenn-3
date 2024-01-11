<script setup>
const props = defineProps({
    url: String
})
</script>

<template>

    <NuxtLink :to="url"></NuxtLink>

</template>