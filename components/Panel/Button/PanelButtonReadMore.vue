
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
</style>