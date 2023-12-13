<script setup>
const { locale } = useI18n();

definePageMeta({
    pageTransition: {
        name: 'slideFromRight'
    }
})
</script>

<template>
    <PanelMain page="listen" drawerPosition="right">
        <template #content>
            <p>
                Vous pouvez écouter les albums de Krismenn sur les plateformes de streaming suivantes :
            </p>
            <nav class="w100">
                <ul class="w100 flex">
                    <li class="flex alignCenter">
                        <WidgetIcon name="spotify" type="homePageNavButton" size="24"/>
                        <WidgetIcon name="deezer" type="homePageNavButton" size="24"/>
                        <WidgetIcon name="youtube" type="homePageNavButton" size="24"/>
                        <WidgetIcon name="apple" type="homePageNavButton" size="24"/>
                    </li>
                </ul>
            </nav>
        </template>
    </PanelMain>
</template>

<style scoped>

</style>