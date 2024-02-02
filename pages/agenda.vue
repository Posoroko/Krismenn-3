<script setup>
const { t, locale } = useI18n();

const dateToLocale = useDateToLocale();

const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;

const fetchUrl = `${directusItems}Agenda`;
const fetchOptions = {
    query: {
        fields: ["*, city.*"]
    }
}

const { data: dates } = await useAsyncData(
    "agendaDAtes",
    async () => {
        const _items = await $fetch(fetchUrl, fetchOptions)
        let items = _items.data;

        items.forEach(item => {

            let _translations = {};

            item.city.translations.forEach(obj => {
                _translations[obj.languages_code] = obj;

            })
            item.city.translations = _translations;
        })

        return items;
    }
    ,
    { server: true }
)

definePageMeta({
    pageTransition: {
        name: 'slideFromRight',
    }
})
</script>

<template>
    <PanelMain class="panel" page="agenda" drawerPosition="right" showIntroText>
        <template #content>
            <ul :aria-label="t('pages.agenda.dateList')">
                <li v-for="date in dates" :key="date.id" >
                    <PanelCardAgenda :date="date" />
                </li>
            </ul>
        </template>
    </PanelMain>
</template>

<style scoped>
.card {
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
}
.test {
    color: #6e76811a;
}

</style>