<script setup>
import { directusGetItems } from '@/directus/directus.js';
const getItems = directusGetItems();
const { t, locale } = useI18n();

const queryParams = {
    fields: ['*', 'translations.*'],
    filter: {
        _or: [
            {
                state: {
                    _eq: 'permanent'
                }
            },
            {
                state: {
                    _eq: 'occasional'
                }
            }
        ]
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

const { data: shows } = await useAsyncData(
    'shows',
    async () => {
        const items = await getItems('Shows', queryParams)

        items.forEach((item) => {
            if(item.translations.length > 1) {
                item.translations = item.translations.filter( t => t.languages_code === locale.value)
            }
        })

        return items
    },
    { server: true }
)


definePageMeta({
    pageTransition: {
        name: 'left'
    }
})

// SEO, meta tags, head content

const pageRef = "shows";
const ogUrl = computed(() => {
    let url = t(`pages.${pageRef}.url`);

    return `https://krismenn.com/${locale.value}${url}`
})
const useHeadContent = useCreateUseHead( pageRef, ogUrl, t);
useHead( useHeadContent );
</script>

<template>
    <div class="absoluteFull centered">
        <PanelMain :title="t('pages.shows.title')" :showBackButton="false" v-if="shows">
            <p>

            </p>   

            <ul class="">
                <li v-for="show in shows" :key="show.id" class="block">
                    <NuxtLink :to="`/shows/${show.slug}`" class="card block full">
                        <PanelCardShows :show="show" :fullSize="false" />
                    </NuxtLink>
                </li>
            </ul>
        </PanelMain>
    </div>
</template>

<style scoped>
ul {
    display: flex;
    flex-direction: column;
}
@media (min-width: 900px) {
    ul {
        flex-direction: column;
        gap: 40px;
    }
}
@media (max-width: 899px) {
    ul {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        gap: 20px;
    }
    li {
        width: min(350px, 100%);
    }
}
</style>