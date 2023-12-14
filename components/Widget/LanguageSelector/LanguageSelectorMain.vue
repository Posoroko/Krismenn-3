<script setup>
import { useI18n, useLocalePath } from '#imports'
const { locale, locales } = useI18n()

const props = defineProps({
    bzhButton: {
        type: Boolean,
        default: false
    }
})

const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
})

function toggleLanguage(e) {
    language.value = e.currentTarget.innerText
}
</script>

<template>
    <div class="languageBox flex gap10" v-if="!bzhButton">
        <NuxtLink v-for="loc in availableLocales" :key="loc.code" :to="switchLocalePath(loc.code)" class="langBtn pointer"
            :class="{ activeLangBtn: locale == loc.code }">
            {{ loc.code }}
        </NuxtLink>
    </div>

    <div class="languageBox flex gap10" v-else>
        <NuxtLink :to="switchLocalePath('bzh')" class="langBtn pointer">
            bzh
        </NuxtLink>
    </div>
</template>

<style scoped>

.langBtn {
    color: rgb(120, 120, 120);
    font-size: 12px;
}

.activeLangBtn {
    color: white;
    /* border-bottom: 1px solid white; */
}
</style>