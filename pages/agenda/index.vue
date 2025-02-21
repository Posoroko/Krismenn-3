<script setup>
const { t, locale } = useI18n();

definePageMeta({
    enterFrom: 'right'
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
    <PanelMain :title="t('pages.agenda.title')">
        <template #contentContainer>
            <PanelSectionAgenda />
        </template>
    </PanelMain>
</template>