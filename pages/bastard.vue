<script setup>
const { t, locale } = useI18n();

</script>

<template>
    <PanelMain :title="t('pages.bastard.title')" :showBackButton="false" drawerPosition="left" :showStripeImage="false" >
        <template #content>
            <div class="cardBox flex column gap50">    
                <PanelCardBastard />
            </div>
        </template>
    </PanelMain>
</template>

<style scoped>

</style>