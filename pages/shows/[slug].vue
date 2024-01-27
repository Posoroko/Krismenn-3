<script setup>
const { t, locale } = useI18n();

const route = useRoute();

const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;

const fetchUrl = `${directusItems}Shows`;
const fetchOptions = {
    query: {
        fields: ["*, translations.*,youtubes.*"],
        filter: {
            id: {
                _eq: route.query.id
            }
        }
    }
}

const { data: show } = await useAsyncData(
    `show-${route.params.slug}`,
    async () => {
        const _items = await $fetch(fetchUrl, fetchOptions)
        let items = _items.data;

        items.forEach(item => {

            let _translations = {};

            item.translations.forEach(obj => {
                _translations[obj.languages_code] = obj;

            })
            item.translations = _translations;

        })

        return items[0];
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
    <PanelMain :title="show.translations[locale].title" backButtonURL="/shows" drawerPosition="left" stripeImageSrc="/images/stripes/xl/brown.webp">
        <template #content>
            <p>

            </p>

            <div class="cardBox flex column gap50">
                <PanelCardMain class="card" showStripeImage="false">
                    <PanelCardShows :show="show" fullSize />
                </PanelCardMain>
            </div>
        </template>
    </PanelMain>
</template>

<style scoped>
cardBox {
    padding-bottom: 30px;

}
/* fullWidth is set in <PanelMain /> for a full page effect in the panel */
.fullWidth .cardBox {
    padding-bottom: 0;
}
</style>