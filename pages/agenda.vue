<script setup>
const dateToFrench = useDateToFrench();
const { locale } = useI18n();
const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;


const { data: dates } = await useAsyncData(
    "agendaDates",
    async () => {
        const items = await $fetch(`${directusItems}Agenda?fields=id,date,city.name,project.name,id,city&sort=-date`)

        return items.data;
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
    <PanelMain class="panel" page="agenda" drawerPosition="right">
        <template #content>
            <div v-if="dates">
                <div v-for="date in dates" :key="date.id" class="card">
                    <p>{{ dateToFrench(date.date) }}</p>
                    <p>{{ date.city.name }}</p>
                    <p>{{ date.project.name }}</p>
                </div>
            </div>
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

</style>