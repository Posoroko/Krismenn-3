<script setup>
import { directusGetItems } from '@/directus/directus.js';
const getItems = directusGetItems();

const { t, locale } = useI18n();

const route = useRoute();

const queryParams = {
    fields: ['*', 'translations.*'],
    filter: {
        published: {
            _eq: true
        },
        translations: {
            slug: {
                _eq: route.params.slug
            }
        }
    },
    deep: {
        translations: {
            _filter: {
                languages_code: {
                    _eq: locale.value
                }
            }
        }
    }
}

const { data: show } = await useAsyncData(
    `show/${route.params.slug}`,
    async () => {
        const items = await getItems('Shows', queryParams)

        return items[0]
    },
    { server: true }
)

definePageMeta({
    pageTransition: {
        name: 'slideFromLeft'
    }
})
</script>

<template>
    <PanelMain :title="show.translations[0].title" backButtonURL="/shows" drawerPosition="left" stripeImageSrc="/images/stripes/xl/brown.webp">
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