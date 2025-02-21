<script setup>
import { directusGetItems } from '@/directus/directus.js';
const getItems = directusGetItems();
const { t, locale } = useI18n();

const props = defineProps({
    projectType: String
})

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
                    _eq: props.projectType
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
            if (item.translations.length > 1) {
                item.translations = item.translations.filter(t => t.languages_code === locale.value)
            }
        })

        return items
    },
    { server: true }
)

const pageRef = props.projectType
const ogUrl = computed(() => {
    let url = t(`pages.${props.projectType}.url`)

    return `https://krismenn.com/${locale.value}${url}`
})
const useHeadContent = useCreateUseHead(pageRef, ogUrl, t)
useHead(useHeadContent)
</script>

<template>
    <PanelMain :title="t('pages.live.title')" :showBackButton="false" v-if="shows">
        <template #contentContainer>
            <PanelContentBoxVerticalScroll stepScroll>
                <div class="h100 stepBox flex column justifyEnd">
                    <div class="frame grow relative">
                        <div class="absoluteFull">
                            <slot name="topImage" />
                        </div>
                    </div>

                    <p class="cardSubtitle_format lightText pad20">
                        <slot name="topSectionText" />
                    </p>
                </div>

                <ul class="h100 stepBox flex w100">
                    <PanelContentBoxHorizontalStepScrollerMain class="overflowHidden">
                        <PanelCardShows v-for="show in shows" :key="show.id" :show="show" />
                    </PanelContentBoxHorizontalStepScrollerMain>
                </ul>
            </PanelContentBoxVerticalScroll>
        </template>
    </PanelMain>
</template>

<style scoped>
.stepBox {
    height: 100%;
    padding: clamp(15px, 5vw, 50px);
}
</style>