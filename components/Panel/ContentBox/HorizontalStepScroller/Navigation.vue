<script setup>
import { WidgetIconsLeftCheveron } from '#components';

const props = defineProps({
    totalItems: Number,
    currentIndex: Number
})
const emit = defineEmits(['next', 'previous'])

function handleClick(e, direction) {
    e.stopPropagation()
    emit(direction)
}

const currentIndex = defineModel()
</script>

<template>
    <div class="navBox flex gap20">
        <button class="arrow frosty_surface glow_on_hover frosty_border box left" @click.stop.prevent="handleClick($event, 'previous')">
            <WidgetIconsLeftCheveron />
        </button>

        <div class="pagination flex alignEnd ">
            <span v-for="(dot, index) in totalItems" :key="index" class="dot centered"
                :class="{ active: index == currentIndex }">
                {{ dot }}
            </span>
        </div>

        <button class="arrow frosty_surface glow_on_hover frosty_border box  right" @click.stop.prevent="handleClick($event, 'next')">
            <WidgetIconsLeftCheveron />
        </button>
    </div>
</template>

<style scoped>
.arrow {
    width: 48px;
    aspect-ratio: 1;
    font-size: 32px;
    cursor: pointer;
    display: block;
}
.arrow * {
    fill: white;
}
.arrow.right {
    transform: rotate(180deg);
}

/* Pagination dots */
.navBox {
    padding-top: 30px;
    margin: 0 3px;
    pointer-events: none;
}

.navBox .arrow {
    pointer-events: all;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.dot {
    width: 15px;
    color: rgb(162, 162, 162);
    padding-bottom: 5px;
    border-bottom: 2px solid transparent;
    transition: 300ms ease;
}

.dot.active {
    color: white;
    margin-bottom: 7px;
    border-bottom: 2px solid white;
    transition: 300ms ease;
}
</style>