<script setup>
import { directusGetItems } from '@/directus/directus.js';
const getItems = directusGetItems();

const { t, locale } = useI18n();

const route = useRoute();

const queryParams = {
    fields: [
        '*', 
        'links.*',
        'translations.*',
        'images.*'
    ],
    filter: {
        slug: {
            _eq: route.params.slug
        }
    },
    deep: {
        translations: {
            _filter: {
                _or: [
                    {
                        languages_code: {
                            _eq: locale.value
                        }
                    },
                    {
                        isDefault: {
                            _eq: true
                        }
                    }
                ]
            }
        }
    }
}

const { data: show } = await useAsyncData(
    `show/${route.params.slug}`,
    async () => {
        const items = await getItems('Shows', queryParams)
        let item = items[0];

        if(item.translations.length > 1) {
                item.translations = item.translations.filter( t => t.languages_code === locale.value)
            }

        return item
    },
    { server: true }
)

definePageMeta({
    pageTransition: {
        name: 'fade'
    }
})

// SEO, meta tags, head content

const pageRef = ref( show.title);
const ogUrl = computed(() => {
    let url = t(`pages.${pageRef}.url`);

    return `https://krismenn.com/${locale.value}${url}`
})
const useHeadContent = useCreateUseHead( pageRef, ogUrl, t);
useHead( useHeadContent );
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
/* fullWidth is set in <PanelMain /> for a full page effect in the panel */
.fullWidth .cardBox {
    padding-bottom: 0;
}

</style>