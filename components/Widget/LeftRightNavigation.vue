<script setup>

const emit = defineEmits(['navigate'])

// function navigate(e) {
//     emit('navigate', e.currentTarget.dataset.direction)
// }
</script>

<template>
    <div class="absolute full top0 left0 noEvents_kidsEvents">
        <span class="icon chevron left" @click="$emit('navigate', 'left')" data-direction="left">chevron_left</span>

        <span class="icon chevron right" @click="$emit('navigate', 'right')" data-direction="right">chevron_right</span>
    </div>
</template>

<style scoped>
.chevron {
    width: 48px;
    height: 48px;
    color: white;
    font-size: 40px;
    line-height: 1;
    background-color: rgba(0, 0, 0, 0.419);
    display: grid;
    place-items: center;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.chevron.left {
    left: 10px;
}
.chevron.right {
    right: 10px;
}

</style>