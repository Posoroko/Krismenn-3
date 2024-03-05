<script setup>
const props = defineProps({
    links: Array
})
</script>

<template>
    <nav class="link">
        <ul>
            <li v-for="link in links" :key="link.Links_id.id" >
                <p class=" cardText_format fontColor_light">{{ link.Links_id.title }}</p>

                <a class="link cardText_format fontColor_light underline" :href="link.Links_id.url">{{ link.Links_id.url }}</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.links .link {
    padding-left: 20px;
}
</style>