<script setup>
const props = defineProps({
    fileName: String,
    stripeImageDirectusUrl: String,
    src: String
})

const imageTransformKey=  computed(() => {
    switch (window.innerHeight) {

        case window.innerHeight <= 999 :
            return 'stripe-300x1000';        
        default: 
            return 'stripe-300x1000';
    }
})

</script>

<template>
    <div class="h100" v-if="src">        
        <img class="image" :src="src" alt="">
    </div>
    
</template>

<style scoped>

.image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    -webkit-filter: 
        hue-rotate(90deg)
        /* grayscale(100%)   */
        contrast(1.5) 
        brightness(1.5);
    filter: 
        grayscale(100%)          
        contrast(1.2) 
        brightness(1.4);
    opacity: 0.5;
}
</style>