<script setup>

</script>

<template>
    <button class="btn48 icon pointer" @click="$emit('clicked')" >
        <slot name="iconName"></slot>
    </button>
</template>

<style scoped>
.btn48 {
    width: 48px;
    height: 48px;
    font-size: 24px;
    color: white;
    border-radius: 5px;
    display: grid;
    place-items: center;

    font-variation-settings:
        'FILL' 0,
        'wght' 300,
        'GRAD' 0,
        'opsz' 48
}

</style>