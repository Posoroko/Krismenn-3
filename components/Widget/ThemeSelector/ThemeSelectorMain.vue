<script setup>

const themes = useThemes();
const activeThemeId = useActiveThemeId();

function handleThemeChange(themeId) {
    activeThemeId.value = themeId;
}

</script>

<template>
    <div class="flex gap20">
        <button 
            v-for="theme in themes" 
            :key="theme.id" 
            class="themeButton" 
            @click="handleThemeChange(theme.id)"
            :style="{ 'background-color': theme.buttonColor }">
        </button>
    </div>
</template>

<style scoped>
.themeButton {
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.648), 0 0 10px rgba(0, 0, 0, 0.314);
    border-radius: 50%;
    cursor: pointer;
}
</style>
