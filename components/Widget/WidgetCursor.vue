<script setup>

const x = ref(0);
const y = ref(0);

const updateCursorPosition = (e) => {
    // setTimeout(() => {
        x.value = e.clientX - 14;
        y.value = e.clientY - 14;
    // }, 40);
};

onMounted(() => {
    window.addEventListener('mousemove', updateCursorPosition);
});

onBeforeUnmount(() => {
    window.removeEventListener('mousemove', updateCursorPosition);
});
</script>

<template>
    <!-- <svg 
        viewBox="0 0 306.9 491.3" 
        id="cursor" 
        :style="{ top: y + 'px', left: x + 'px' }">

        <path class="frosty_bg" d="M239.6,462c-7.6,3.4-35.1,15.9-48.3,21.7c-12.5,5.5-22.1-6.7-25-13.3S104.6,327,104.6,327l-75,70
        c-1.7,3.3-5,5-10,5c-1.7,0-5,0-6.7-1.7c-5-1.7-10-8.3-10-15V18.7C3,12,6.3,5.3,13,3.7C14.6,2,18,2,19.6,2C23,2,28,3.7,31.3,7
        L298,257c5,5,6.7,11.7,5,18.3c-1.7,6.7-8.3,10-15,11.7l-105,10c0,0,61,132.9,65,141.7C252,447.5,247.2,458.6,239.6,462z"/>
    </svg> -->

    <div id="cursor" :style="{ top: y + 'px', left: x + 'px' }">

    </div>
</template>

<style scoped>
#cursor {
    width: 28px;
    height: 28px;
    background-color: rgba(255, 255, 255, 0.37);
    border-radius: 50%;
    border: 4px solid rgba(96, 191, 255, 0.459);
    position: fixed;
    filter: blur(3px);
}
#cursor path {
    fill: #b2d5f1;
    stroke: white;
    stroke-width: 10px;
}
</style>