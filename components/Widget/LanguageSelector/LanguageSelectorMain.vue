<script setup>
const { t, locale, locales } = useI18n();
const appState = useAppState();

const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
    console.log((locales.value).filter(i => i.code !== locale.value));
    return (locales.value).filter(i => i.code !== locale.value)
})

const cursorPosition = computed(() => {
    switch (locale.value) {
        case 'en':
            return 'alignStart'
        case 'fr':
            return 'alignCenter'
        case 'bzh':
            return 'alignEnd'
    }
})

function handleClick(e) {
    console.log(e.target)
    if(e.target.dataset.target === 'languageBox') {
        appState.value.languageSelectorOpen = !appState.value.languageSelectorOpen;
    }
}

</script>

<template>
    <div class="languageBox  full flex column alignCenter justifyEvenly  pointer relative" 
            :class="[ appState.languageSelectorOpen ? 'glowing' : 'glowing_onHover' ]" 
            @click="handleClick" data-target="languageBox"
    >
        <div class="window glowing" :class="{ 'open' : appState.languageSelectorOpen }">
            <NuxtLink @click.prevent v-for="loc in locales" :key="loc.code" :to="switchLocalePath(loc.code)" class="language flex alignCenter gap10">
                <WidgetLanguageSelectorRadioButton :locCode="loc.code" :activeLocale="locale"  />

                <div class="grow flex alignCenter localeName frosty_font">
                    {{ loc.name }}
                </div>
            </NuxtLink>
        </div>

        <svg class="translateIcon noEvents" viewBox="0 -960 960 960">
            <path class="frosty_font" d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z"/>
        </svg>
    </div>
</template>

<style scoped>
.window {
    position: absolute;
    bottom: 0%;
    right: 0%;
    translate: 100% 100%;
    padding: 15px 30px;
    overflow: hidden;
    opacity: 0;
    filter: blur(5px);
    scale: 0;
    transition: 500ms ease;
    pointer-events: none;
}
.window.open {
    bottom: 100%;
    right: 100%;
    translate: 0% 0%;
    pointer-events: all;
    opacity: 1;
    filter: blur(0px);
    scale: 1;
    transition: 500ms ease;
}
.language {
    height: 36px;
}
.localeName {
    font-size: 1.6rem;
    font-weight: 600;
}
.translateIcon {
    width: 48%;
    height: 48%;
}
</style>