
import { Style } from '.nuxt/components';
<script setup>
const { t, locale } = useI18n();

const props = defineProps({
    href: String,
})
</script>


<template>
    <div class="flex justifyEnd absolute">
        <NuxtLink :to="href" class="text">{{ t('global.readMore') }}</NuxtLink>
    </div>
</template>

<style scoped>
div {
    margin-top: 20px;
    bottom: 20px;
    right: 20px;
}
.text {
    font-size: 18px;
    font-weight: 700;
    line-height: 1em;
    color: rgba(255, 255, 255, 0.397);
}
</style>