<script setup>
const { t, locale } = useI18n();

const appConfig = useAppConfig();
const links = appConfig.listeningPlatforms;

definePageMeta({
    pageTransition: {
        name: 'slideFromRight'
    }
})

</script>

<template>
    <PanelMain :title="t('pages.listen.title')" drawerPosition="right">
        <template #content>
            <div class="fullBox h100 flex column">
                <p class="introText cardSubtitle_format fontColor_light">
                    {{ t('pages.listen.introText') }}
                </p>

                <nav class="w100 grow">
                    <ul class="w100 container" >
                        <li class="full-width-row r">.ALBUM</li>

                        <li class="card flex alignCenter frosty_border frosty_bg" v-for="link in links" :key="link.id">
                            <a class="full flex column justifyCenter alignCenter" :href="link.href">
                                <WidgetIcon :name="link.ref" type="homePageNavButton" size="75"/>
                                <span class="cardText_format frosty_font">{{ link.displayName }}</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </template>
    </PanelMain>
</template>

<style scoped>
.fullBox {
    padding: max(20px, 5vw);
    gap: 5vh;
}

/* .box {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
} */
.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
}

.full-width-row {
    grid-column: 1 / -1;
}
.card {
    padding: 10px;
}
</style>