<script setup>


</script>

<template>
    <div class="flex gap20">
        <div class="theme one" @click="theme = 1"></div>
        <div class="theme two" @click="theme = 2"></div>
    </div>
</template>

<style scoped>
.theme {
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.648), 0 0 10px rgba(0, 0, 0, 0.314);
    border-radius: 50%;
    cursor: pointer;
}
.theme.one {
    background-color: blue;

}
.theme.two {
    background-color: orange;
}
</style>
