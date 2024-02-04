<script setup>
import { useI18n } from '#imports'
const { locale, locales } = useI18n()

const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
    console.log((locales.value).filter(i => i.code !== locale.value));
    return (locales.value).filter(i => i.code !== locale.value)
})

</script>

<template>
    <div class="languageBox full flex column alignCenter justifyEvenly glowing_onHover">
        <NuxtLink v-for="loc in availableLocales" :key="loc.code" :to="switchLocalePath(loc.code)" class="langBtn pointer">
            {{ loc.code }}
        </NuxtLink>
    </div>
</template>

<style scoped>

.langBtn {
    color: rgb(120, 120, 120);
    font-size: 12px;
}
</style>