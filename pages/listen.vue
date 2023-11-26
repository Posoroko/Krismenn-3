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
            <nav class="r w100">
                <ul class="w100 flex">
                    <li class="r">
                        <a href="https://open.spotify.com/artist/1Z4Z8QZ4Qx0Q8QZQZQZQZQ?si=8e2e9e9f0b5c4f9d" target="_blank">
                            spotify
                        </a>

                        <WidgetIcon name="spotify" type="homePageNavButton" size="24"/>
                    </li>
                </ul>
            </nav>
        </template>
    </PanelMain>
</template>

<style scoped>
p {
    /* max-width: 50%; */
}
</style>