<script setup>
const theme = useState('theme', '');
const folder = ref('');

const width = window.innerWidth;
const height = window.innerHeight

const  image = computed(() => {
    switch(theme.value) {
        case 1:
            return 'blue';
        case 2:
            return 'orange';
    }
    console.log('in image', theme.value)
})

function setFolder() {

    switch(height) {
        case height > 1440:
            folder.value = 'xx-large';
            break;
        case height > 1080:
            folder.value = 'x-large';
            break;
        case height > 720:
            folder.value = 'large';
            break;
        default:
            folder.value = 'medium';
    }
}

onMounted(() => {
    setFolder();
    console.log('in mounted', theme.value)
});



</script>

<template>
    <div class="frame">
        <img class="" :src="`/images/background/${folder}/${image}.webp`" alt="Krismenn">
    </div>
</template>

<style scoped>
.frame {

    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
img {
 
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>