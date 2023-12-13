<script setup>
const { locale } = useI18n();
</script>

<template>
    <div class="glassSurface-onHover pointer centered" v-if="locale !== 'bzh'">
        <WidgetLanguageSelectorMain bzhButton />
    </div>
</template>