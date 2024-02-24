<script setup>
import { directusGetItems, directusBaseUrl } from '@/directus/directus.js';

const getItems = directusGetItems();
const appState = useAppState();

const { t, locale } = useI18n();

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
                <img class="objectFitCover" :src="`${directusBaseUrl}assets/${content.mainImage}`" alt="">
            </div>

            <div class="contentBox">
                <PanelSection title="" :showTopBorder="false">
                    <template #content>
                        <p class="cardText_format fontColor_light">
                            {{ content.translations[0].text }}
                        </p>
                    </template>
                </PanelSection>

                <PanelSection title="En savoir plus" class="marTop50">
                    <template #content>
                        <p class=" cardText_format fontColor_light flex gap20 alignEnd">
                            <span>Sur le site de Teatr Piba: </span>

                            <a class="cardSubtitle_format underline" href="https://www.teatrpiba.bzh/project/bastard-2025/">
                                www.teatrpiba.bzh
                            </a>
                        </p>
                    </template>
                </PanelSection>

                <PanelSection title="Bastard Player" class="marTop50">
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
    aspect-ratio: 8/3;
}

</style>