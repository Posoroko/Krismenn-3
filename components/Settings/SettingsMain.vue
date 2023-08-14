<script setup>
const menuIsOpen = ref(false);


</script>

<template>
    <div class="full relative">
        <Button48Icon class="wheel" :class="{ 'spinning' : menuIsOpen}" @click="menuIsOpen = !menuIsOpen">
            <template #iconName>settings</template>
        </Button48Icon>

        <div class="menuBox glass flex justifyEnd alignEnd" :class="{ 'open': menuIsOpen }">
            <div class="content">
                <WidgetThemeSelectorMain />
            </div>
        </div>
    </div>
</template>

<style scoped>
.wheel {
    opacity: 0.5;
}
.wheel:hover,
.wheel.spinning {
    animation: spin 10s linear infinite;
}
@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}
.menuBox {    
    position: absolute;
    bottom: 50%;
    right: 50%;
    transform: scale(0);
    filter: blur(5px);
    translate: 50% 50%;
    transition: 500ms ease;
}
.menuBox.open {
    bottom: 100%;
    right: 100%;
    filter: blur(0px);
    translate: 0% 0%;
    transform: scale(1);
    transition: 500ms ease;
}
.content {

    padding: 20px;
}


</style>