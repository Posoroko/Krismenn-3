<script setup>
const { t, locale } = useI18n();

definePageMeta({
    pageTransition: {
        name: 'right'
    }
})
// SEO, meta tags, head content

const pageRef = "agenda";
const ogUrl = computed(() => {
    let url = t(`pages.${pageRef}.url`);

    return `https://krismenn.com/${locale.value}${url}`
})
const useHeadContent = useCreateUseHead( pageRef, ogUrl, t);
useHead( useHeadContent );
</script>

<template>
    <div class="absoluteFull centered">
        <PanelMain class="panel" :title="t('pages.agenda.title')" drawerPosition="right" showIntroText>
            <PanelSectionAgenda />
        </PanelMain>
    </div>
</template>

<style scoped>


</style>