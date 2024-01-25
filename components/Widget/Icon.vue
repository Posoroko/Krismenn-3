<script setup>
const props = defineProps({
    name: String,
    size: Number,
    type: String
})

const getIconString = useIconStrings();

</script>

<template>
    <svg :class="type" 
        :width="size" 
        :height="size" 
        x="0px" y="0px" 
        viewBox="0 0 24 24">
            <path :d="getIconString(name)"/>
    </svg>
</template>
 
<style scoped>

path {
    fill: rgba(255, 255, 255, 0.493);
}
.homePageNavButton {
    fill: rgba(255, 255, 255, 0.699);
}
.contactIcon {
    fill: white;
}
</style>