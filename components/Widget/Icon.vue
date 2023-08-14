<script setup>
const props = defineProps({
    name: String,
    size: Number,
    type: String
})

</script>
 
<template>
    <svg v-if="name === 'settings'" xmlns="http://www.w3.org/2000/svg" :class="type" :height="size" viewBox="0 -960 960 960" :width="size">
        <!-- settings -->
        <path d="m388-80-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185-480q0-9 .5-20.5T188-521L80-600l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669-710l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592-206L572-80H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z" />
    </svg>

    <svg v-if="name === 'home'" xmlns="http://www.w3.org/2000/svg" :class="type" :height="size" viewBox="0 -960 960 960" :width="size">
        <!-- home -->
        <path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/>
    </svg>
</template>
 
<style scoped>

path {
    fill: rgba(255, 255, 255, 0.493);
}
.homePageNavButton {
    fill: rgba(255, 255, 255, 0.699);
}
</style>