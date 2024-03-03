<script setup>
import { directusGetItems } from '@/directus/directus.js';
const getItems = directusGetItems();

const { t, locale } = useI18n();

const route = useRoute();

const queryParams = {
    fields: ['*', 'translations.*'],
    filter: {
        slug: {
            _eq: route.params.slug
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
        name: 'fade'
    }
})
</script>

<template>
    <div class="absoluteFull centered" v-if="show">
        <PanelMain :title="show.translations[0].title" backButtonURL="/shows">
            <div class="cardBox flex column gap50">
                <PanelCardShows :show="show" :fullSize="true" />
            </div>
        </PanelMain>
    </div>
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