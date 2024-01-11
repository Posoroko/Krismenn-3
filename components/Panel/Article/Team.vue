<script setup>
const { locale, t } = useI18n();

const props = defineProps({
    team: Object
})

</script>

<template>
    <div class="">

        <img class="headerImage panelArticle" :src="team.headerImage" alt="">

        <h1 class="panelArticle">{{ team.name }}</h1>

        <h2 class="panelArticle">{{ team[locale].definition }}</h2>

        <p class="panelArticle content">{{ team[locale].description }}</p>
    </div>
</template>

<style scoped>


</style>  