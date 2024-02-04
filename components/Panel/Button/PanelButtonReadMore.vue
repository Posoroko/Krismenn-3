
import { Style } from '.nuxt/components';
<script setup>
const { t, locale } = useI18n();

const props = defineProps({
    href: String,
})
</script>


<template>
    <div class="flex justifyEnd">
            <NuxtLink :to="href" class="glass_button cardText_format glassSurface-onHover">{{ t('global.readMore') }}</NuxtLink>
    </div>
</template>

<style scoped>
div {
    margin-top: 20px;
}
.glass_button {
    fill: white;
    color: white;
    background-color: rgba(255, 255, 255, 0.055);
    padding: 5px 20px;
    border-radius: 1px;
    border: 2px solid hsla(0, 0%, 97%, 0.096);
}
.glass_button:hover {
    color: rgb(255, 255, 255);
    border: 2px solid hsla(0, 0%, 97%, 0.226);
    transition: 300ms ease;
}
</style>