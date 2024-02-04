<script setup>
const { t, locale } = useI18n();

const route = useRoute();
console.log(route.path)

const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;

const fetchUrl = `${directusItems}Agenda`;
const fetchOptions = {
    query: {
        fields: ["*,city.*,category.*,category.translations.*,city.translations.*,city.region.isFrenchDepartment,city.region.depNumber,city.region.country.translations.*,show.*,show.translations.*"],
        filter: {
            id: {
                _eq: route.params.id
            }
        }
    }
}

const { data: date } = await useAsyncData(
    "`date-${route.params.id}`",
    async () => {
        const _items = await $fetch(fetchUrl, fetchOptions)
        let item = _items.data[0];

        const propsWithTranslations = [item.show, item.category, item.city, item.city.region.country];

        propsWithTranslations.forEach(prop => {

            let _translations = {};
            prop.translations.forEach(obj => {
                _translations[obj.languages_code] = obj;
            })
            prop.translations = _translations;
        })

        // let _translations = {};
        // item.show.translations.forEach(obj => {
        //     _translations[obj.languages_code] = obj;
        // })
        // item.show.translations = _translations;

        // _translations = {};
        // item.city.translations.forEach(obj => {
        //     _translations[obj.languages_code] = obj;
        // })
        // item.city.translations = _translations;

        // if(!item.city.region.isFrenchDepartment ) {
        //     _translations = {};
        //     item.city.region.translations.forEach(obj => {
        //         _translations[obj.languages_code] = obj;
        //     })
        //     item.city.region.translations = _translations;
        // }

        // _translations = {};
        // item.city.region.country.translations.forEach(obj => {
        //     _translations[obj.languages_code] = obj;
        // })
        // item.city.region.country.translations = _translations;

        return item;
    }
    ,
    { server: true }
)

definePageMeta({
    pageTransition: {
        name: 'slideFromRight'
    }
})
</script>

<template>
    <PanelMain v-if="date" class="panel" :title="t('pages.agenda.title')" backButtonURL="/agenda" drawerPosition="right">
        <template #content>
            <div class="card glassSurface h100">
                <p class="category">
                    {{ date.category.translations[locale].displayName }}
                </p>

                <div class="infoBox">
                    <h2 class="cardTitle_format fontColor_light">
                        {{ date.show.translations[locale].title }}
                    </h2>

                    <address class="cardSubtitle_format fontColor_light">
                        <span>{{ date.city.translations[locale].name }}, </span>
                        <span>{{ date.city.region.depNumber }}, </span>
                        <span>{{ date.city.region.country.translations[locale].name }}</span>
                    </address>
                </div>
            </div>
            
            
        </template>
    </PanelMain>
</template>

<style scoped>
.card {
    margin: min(3vw, 30px);
}
.category {
    text-align: center;
    line-height: 0.8;
    font-size: min(20vw, 20rem);
    font-weight: 900;
    color: rgba(255, 255, 255, 0.103);
}
.infoBox {
    margin: min(5vw, 50px);
}
</style>