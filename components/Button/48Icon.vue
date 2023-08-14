<template>
    <button class="btn48 icon pointer" @click="$emit('clicked')">
        <slot name="icon" />
    </button>
</template>

<style scoped>
.btn48 {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
}

</style>