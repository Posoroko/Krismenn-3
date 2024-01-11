<script setup>
const { t, locale } = useI18n();

const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;

const { data: teams } = await useAsyncData(
    "teams",
    async () => {
        const items = await $fetch(`${directusItems}Teams?fields=id,name,slug,logo,image,translations.languages_code,translations.definition,translations.description`);
        let _items = items.data;
        let formatedItems = [];

        _items.forEach((item) => {
            let temp = {
                id: item.id,
                name: item.name,
                slug: item.slug,
                logo: item.logo,
                image: item.image,
                fr: {},
                en: {},
                bzh: {}
            }

            item.translations.forEach((translation) => {
                temp[translation.languages_code] = translation;

            })

            formatedItems.push(temp);
        })

        return formatedItems;
    }
    ,
    { server: true }
)
const activeCardId = ref("");
const activeStripeImageUrl = ref(null);

function handleCardClick(e) {
    activeCardId.value = e.currentTarget.dataset.id;
    activeStripeImageUrl.value = `${directusAssets}${e.currentTarget.dataset.image}`;
}

onMounted(() => {
    activeCardId.value = teams.value[0].id;
    activeStripeImageUrl.value = `${directusAssets}${teams.value[0].image}`;
})


definePageMeta({
    pageTransition: {
        name: 'slideFromLeft'
    }
})
</script>

<template>
    <PanelMain v-if="activeStripeImageUrl" page="teams" drawerPosition="left"
        :stripeImageDirectusUrl="activeStripeImageUrl">

        <template #content>

            <PanelCardMain v-for="team in teams" :key="team.id" class="teamCard" :hasImage="true" :data-id="team.id"
                :data-image="team.image" :activeCardId="activeCardId" :class="{ 'isActive': activeCardId == team.id }"
                @click="handleCardClick">

                <template #contentBox>
                    <PanelCardTeamContentBox :team="team" />
                </template>

                <template #tinyFrame>
                    <img class="objectFitCover" v-if="team.image" :src="`${directusAssets}${team.image}`" />
                </template>
            </PanelCardMain>
        </template>
    </PanelMain>
</template>

<style scoped></style>