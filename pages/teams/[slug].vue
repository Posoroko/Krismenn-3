<script setup>
const { t, locale } = useI18n();

const route = useRoute();


const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;

const searchParams = {
    fields: "id,name,slug,logo,image,translations.languages_code,translations.definition,translations.description,headerImage",
    filter: `[slug][_eq]=${route.params.slug}`
}

const { data: team } = await useAsyncData(
    "team",
    async () => {
        const items = await $fetch(`${directusItems}Teams?fields=${searchParams.fields}&filter${searchParams.filter}`);
        let item = items.data[0];

        let temp = {
            id: item.id,
            name: item.name,
            slug: item.slug,
            logo: item.logo,
            image: item.image,
            headerImage: `${directusAssets}${item.headerImage}`,
            fr: {},
            en: {},
            bzh: {}
        }
        item.translations.forEach((translation) => {
            temp[translation.languages_code] = translation;

        })

        return temp;
    }
    ,
    { server: true }
)



definePageMeta({
    pageTransition: {
        name: 'slideFromLeft'
    }
})
</script>

<template>
    <PanelMain v-if="team" page="teams" drawerPosition="left"
        :stripeImageDirectusUrl="team.image">

        <template #content>
            <PanelArticleMain>
                <PanelArticleTeam :team="team" />
            </PanelArticleMain>
        </template>
    </PanelMain>
</template>

<style scoped></style>