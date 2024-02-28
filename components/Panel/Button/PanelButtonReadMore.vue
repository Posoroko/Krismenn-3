
import { Style } from '.nuxt/components';
<script setup>
const { t, locale } = useI18n();

const props = defineProps({
    href: String,
})
</script>


<template>
    <div class="flex justifyEnd">
        <p class="text centered">{{ t('global.readMore') }}</p>
    </div>
</template>

<style scoped>
div {
    margin-top: 20px;
}
.text {
    font-size: 16px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.397);
}
</style>