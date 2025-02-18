<script setup>
import { ref, computed } from "vue";

const horizontalScroller = ref(null);
const currentIndex = ref(0);
let touchStartX = 0;
let touchEndX = 0;

// Compute number of items based on slot content
const totalItems = computed(() => {
    return horizontalScroller.value ? horizontalScroller.value.children.length : 0;
});

// Scroll to the correct position based on current index
const scrollToIndex = () => {
    if (!horizontalScroller.value) return;

    const cards = [...horizontalScroller.value.children];
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth;
    const targetScroll = cardWidth * currentIndex.value;

    horizontalScroller.value.scrollTo({
        left: targetScroll,
        behavior: "smooth"
    });
};

// Move to the next card
const next = (e) => {
    if (currentIndex.value < totalItems.value - 1) {
        currentIndex.value++;
        scrollToIndex();
    }
};

// Move to the previous card
const prev = (e) => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
        scrollToIndex();
    }
};

// Prevent **horizontal scrolling** but allow **vertical scrolling**
const preventScroll = (event) => {
    if (event.deltaX !== 0) {
        event.preventDefault(); // Prevent left-right scroll
    }
};

// Handle touch gestures directly in Vue template
const handleTouchEnd = (e) => {
    e.stopPropagation()
    const swipeDistance = touchStartX - touchEndX;
    const swipeThreshold = 50; // Minimum swipe distance to trigger navigation

    if (swipeDistance > swipeThreshold) {
        next(); // Swipe left → Next card
    } else if (swipeDistance < -swipeThreshold) {
        prev(); // Swipe right → Previous card
    }
};

</script>

<template>
    <div class="scrollerContainer flex column full">

        <div ref="horizontalScroller" class="horizontalScroller full flex" @wheel="preventScroll"
            @touchstart="(event) => touchStartX = event.touches[0].clientX"
            @touchmove="(event) => touchEndX = event.touches[0].clientX" @touchend="handleTouchEnd">
            <slot />
        </div>

        <PanelContentBoxHorizontalStepScrollerNavigation
            :totalItems="totalItems"
            v-model="currentIndex"
            @next="next"
            @previous="prev"
        />
    </div>
</template>

<style scoped>
.scrollerContainer {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: visible;
}

.horizontalScroller {
    padding-bottom: 10px;
    display: flex;
    overflow-x: auto;
    overflow-y: visible;
    scroll-behavior: smooth;

}


.horizontalScroller::-webkit-scrollbar {
    height: 6px;
}

.horizontalScroller::-webkit-scrollbar-track {
    background: transparent;
}

.horizontalScroller::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
    min-height: 6px;
}

.horizontalScroller::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
    height: 6px !important;
}

/* For Firefox */
.horizontalScroller {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}


</style>