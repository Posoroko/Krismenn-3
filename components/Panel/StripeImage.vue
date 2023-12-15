<script setup>
const props = defineProps({
    fileName: String,
    stripeImageDirectusUrl: String
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
    <div class="full" >
        <div 
            v-if="stripeImageDirectusUrl" 
            class="image directusImage full" 
            :style="{ backgroundImage: `url(${stripeImageDirectusUrl}?key=${imageTransformKey})` }">
        </div>
        
        <div class="image localImage full" v-if="fileName">{{ `stripeImageDirectusUrl` }}</div>
    </div>
    
</template>

<style scoped>

.image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-width: 1px;
    border-style: solid;
    filter: blur(1px) brightness(0.8) saturate(1.05) contrast(1.2);
}
@media screen and (max-height: 600px) {
    .localImage {
        background-image: v-bind("`url('/images/stripes/sm/${fileName}')`");
    }
}

@media screen and (max-height: 1100px) {
    .localImage {
        background-image: v-bind("stripeImageDirectusUrl || `url('/images/stripes/md/${fileName}')`");
    }
}

@media screen and (max-height: 2200px) {
    .localImage {
        background-image: v-bind("stripeImageDirectusUrl || `url('/images/stripes/xl/${fileName}')`");
    }
}
</style>