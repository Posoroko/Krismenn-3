<script setup>
const props = defineProps({
    locCode: String,
    activeLocale: String
})
</script>


<template>

    <!-- to do : transform into real radio buttons -->
    <div class="radio" :class="{'selected': locCode === activeLocale }">

    </div>
</template>

<style scoped>
.radio {
    height: 24px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.473);
    position: relative;
}

.radio.selected::after{
    content: '';
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.753);
    position: absolute;
    inset: 3px;
}
</style>