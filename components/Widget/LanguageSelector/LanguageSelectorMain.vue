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
    <div class="languageBox full flex column alignCenter justifyEvenly glowing_onHover pointer">
        <!-- <NuxtLink v-for="loc in availableLocales" :key="loc.code" :to="switchLocalePath(loc.code)" class="langBtn pointer">
            {{ loc.code }}
        </NuxtLink> -->

        <svg class="translateIcon" viewBox="0 -960 960 960">
            <path class="frosty_font" d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z"/>
        </svg>
    </div>
</template>

<style scoped>

.translateIcon {
    width: 48%;
    height: 48%;
}
.langBtn {
    color: rgb(120, 120, 120);
    font-size: 12px;
}
</style>