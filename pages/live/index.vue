<script setup>
import { directusGetItems } from '@/directus/directus.js';
const getItems = directusGetItems();
const { t, locale } = useI18n();

const queryParams = {
    fields: ['*', 'translations.*'],
    filter: {
        _and: [
            {
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
            {
                type: {
                    _eq: "live"
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
            console.log(t.languages_code)
            if(item.translations.length > 1) {
                item.translations = item.translations.filter( t => t.languages_code === locale.value)
            }
        })

        return items
    },
    { server: true }
)

definePageMeta({
    enterFrom: 'left'
})

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
        <PanelMain :title="t('pages.live.title')" :showBackButton="false" v-if="shows">
            <template #contentContainer>
                <PanelContentBoxVerticalScroll stepScroll>
                    <div class="stepBox flex column justifyEnd">
                        <div class="frame grow relative">
                            <div class="absoluteFull">
                                <img class="objectFitCover" src="/images/live/Krismenn_Nicolas_Joubard-2-1024x683.jpg"
                                    alt="">
                            </div>
                        </div>

                        <p class="cardSubtitle_format lightText pad20">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet cupiditate dolor
                            voluptatibus reiciendis maiores ipsam dolorem tempore velit corporis voluptas et, voluptates
                            sapiente ut doloremque dolorum, impedit quas commodi?
                        </p>
                    </div>

                    <ul class="stepBox cardBox flex w100">
                        <PanelContentBoxHorizontalStepScrollerMain class="overflowHidden">
                            <PanelCardShows v-for="show in shows" :key="show.id" :show="show" />
                        </PanelContentBoxHorizontalStepScrollerMain>
                    </ul>
                </PanelContentBoxVerticalScroll>
            </template>
        </PanelMain>
    </div>
</template>

<style scoped>
.stapBox {
    overflow-y: scroll;
}

</style>