<script setup>
const { t, locale } = useI18n();

definePageMeta({
    pageTransition: {
        name: 'right'
    }
})

</script>

<template>
    <div class="absoluteFull centered">
        <PanelMain class="panel" :title="t('pages.agenda.title')" drawerPosition="right" showIntroText>
            <template #content>
                <PanelSectionAgenda />
            </template>
        </PanelMain>
    </div>
</template>

<style scoped>


</style>