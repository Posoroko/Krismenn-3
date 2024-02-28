<script setup>
import { directusGetItems, directusBaseUrl } from '@/directus/directus.js';
const { t, locale } = useI18n();

//  fetching items from directus
const getItems = directusGetItems();
const queryParams = {
    fields: ['*', 'translations.*'],
    deep: {
        translations: {
            _filter: {
                _or: [
                    {
                        state: {
                            _eq: 'default'
                        }
                    },
                    {
                        _and: [
                            {
                                state: {
                                    _eq: 'active'
                                }
                            },
                            {
                                languages_code: {
                                    _eq: locale.value
                                }
                            }
                        ]
                    }
                ]
            }
        }
    }
}

const { data: content } = await useAsyncData(
    'bastard',
    async () => {
        const item = await getItems('Bastard_page', queryParams)

        return item
    },
    { server: true }
)

definePageMeta({
    pageTransition: {
        name: 'left'
    }
})

</script>

<template>
    <div class="absoluteFull centered">
        <PanelMain :title="t('pages.bastard.title')" :showBackButton="false" drawerPosition="left" :showStripeImage="false">
            <div class="frame">
                <img :src="`${directusBaseUrl}assets/${content.mainImage}`"
                    class="objectFitCover"  alt="Bastard, de Krismenn">
            </div>

            <div class="contentBox">
                <PanelSection title="" :showTopBorder="false">
                    <template #content>
                        <p class="cardText_format fontColor_light">
                            {{ content.translations[0].text }}
                        </p>
                    </template>
                </PanelSection>

                <PanelSection :title="t('global.moreInfo')" class="marTop50" showTopBorder>
                    <template #content>
                        <p class=" cardText_format fontColor_light flex gap20 alignEnd">
                            <span>Sur le site de Teatr Piba: </span>

                            <a class="cardSubtitle_format underline" href="https://www.teatrpiba.bzh/project/bastard-2025/">
                                www.teatrpiba.bzh
                            </a>
                        </p>
                    </template>
                </PanelSection>

                <PanelSection title="Bastard Player" class="marTop50" showTopBorder>
                    <template #content>
                        <PanelCardBastard />
                    </template>
                </PanelSection>
            </div>
        </PanelMain>
    </div>
</template>

<style scoped>
.contentBox {
    padding: 3vw;
    padding-bottom: 10vh;
}
.frame {
    height: 450px;
}
.frame img {
    object-position: center;
}
</style>