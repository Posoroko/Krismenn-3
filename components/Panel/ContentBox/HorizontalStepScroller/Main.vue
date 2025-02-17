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
}

/* Allow vertical scrolling, but control horizontal behavior */
.horizontalScroller {
    padding-bottom: 10px;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;

}

/* Thin, non-expanding horizontal scrollbar */
.horizontalScroller::-webkit-scrollbar {
    height: 6px;
    /* Set the scrollbar thickness */
}

/* Scrollbar track */
.horizontalScroller::-webkit-scrollbar-track {
    background: transparent;
    /* Keeps it subtle */
}

/* Scrollbar thumb (the draggable part) */
.horizontalScroller::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    /* Light color for visibility */
    border-radius: 3px;
    min-height: 6px;
    /* Prevents expansion */
}

/* Prevent scrollbar from changing size on hover */
.horizontalScroller::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
    /* Slightly more visible on hover */
    height: 6px !important;
    /* Ensures it does NOT change size */
}

/* For Firefox */
.horizontalScroller {
    scrollbar-width: thin;
    /* Forces a thin scrollbar */
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}


</style>