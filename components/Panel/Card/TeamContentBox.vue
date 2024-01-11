<script setup>
const { t, locale } = useI18n();

const props = defineProps({
    team: Object
})
</script>


<template>
    <div class="teamBox flex column justifyBetween h100">
        <div>
            <h2 class="title">{{ team.name }}</h2>
            <p class="definition">{{ team[locale].definition }}</p>
            <p class="content">{{ team[locale].description.slice(0, 150) }}</p>
        </div>

        <div class="flex justifyEnd">
            <PanelCardMoreButton :url="`/teams/${team.slug}`"/>
        </div>
    </div>  
</template>