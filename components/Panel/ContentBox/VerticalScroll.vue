<script setup>
const props = defineProps({
    stepScroll: Boolean
});

const stepScroller = ref(null);
let lastScrollTop = 0; // Store the previous scroll position

let touchStartY = 0;
let touchEndY = 0;

const handleScroll = (e) => {
    console.log(touchStartY, touchEndY)
    
    const swipeDistance = touchStartY - touchEndY;
    const swipeThreshold = 50;

    if(e.type === 'touchend') {
        if (swipeDistance < swipeThreshold || swipeDistance > -swipeThreshold) {
            return
        }
    }

    if (!stepScroller.value) return;

    const steps = [...stepScroller.value.children];
    const stepHeight = steps[0].offsetHeight; // Assume all steps have the same height

    if (!stepHeight) return;

    const currentScroll = stepScroller.value.scrollTop;
    let targetIndex = Math.round(currentScroll / stepHeight);

    // Determine scroll direction
    const isScrollingDown = currentScroll > lastScrollTop;

    if (isScrollingDown) {
        targetIndex++; // Move to the next step
    } else {
        targetIndex--; // Move to the previous step
    }

    // Ensure the target index is within valid bounds
    targetIndex = Math.max(0, Math.min(steps.length - 1, targetIndex));

    // Snap to the next or previous step
    steps[targetIndex].scrollIntoView({ behavior: "smooth", block: "start" });

    // Update lastScrollTop for the next scroll event
    lastScrollTop = currentScroll;
};
</script>

<template>
  <div v-if="!stepScroll" class="scroller allEvents h100">
    <slot />
  </div>

  <div v-else ref="stepScroller" 
    class="stepScroller h100 allEvents"
    @scrollend="handleScroll" 
    @touchstart="(event) => touchStartY = event.touches[0].clientY"
    @touchmove="(event) => touchEndY = event.touches[0].clientY"
    @touchend="handleScroll"
>
    <slot />
  </div>
</template>

<style scoped>
.scroller {
  flex-grow: 0;
  padding: 20px 30px 150px 20px;
  overflow-y: scroll;
}

.stepScroller {
  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.stepScroller::-webkit-scrollbar {
  display: none;
}
</style>

<style>
.stepScroller .stepBox {
  height: 100%; /* Uses full parent height, NOT vh */
  padding: 50px;
}
</style>




<!-- <script setup>
const props = defineProps({
    stepScroll: Boolean
})
</script>

<template>
    <div v-if="!stepScroll" class="scroller allEvents h100">
        <slot />
    </div>

    <div v-else class="stepScroller h100 allEvents">
        <slot />
    </div>
</template>

<style scoped>
.scroller {
    flex-grow: 0;
    padding: 20px 30px 150px 20px;
    overflow-y: scroll;
}
.stepScroller {
    overflow: scroll;
}

</style>

<style>
.stepScroller .stepBox {
    height: 100%;
    padding: 50px;
}
</style> -->