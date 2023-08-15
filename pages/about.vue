<script setup>
const pageTitle = usePageTitle();

pageTitle.value = "ABOUT";
</script>

<template>
    <div class="pageContent noEvents relative">
        <PanelMain />
    </div>
</template>

<style scoped>
.pageContent {
    
    width: 100%;
    height: 100%;
}
</style>