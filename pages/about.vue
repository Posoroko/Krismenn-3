<script setup>
import { directusGetItems, directusBaseUrl } from '@/directus/directus.js';
const { t, locale } = useI18n();

// data fetching
const getItems = directusGetItems();
const queryParams = {
    fields: ['*', '*.*'],
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
const { data: content } = await useAsyncData(
    'about',
    async () => {
        const items = await getItems('About', queryParams);
        return items
    },
    { server: true }
)

definePageMeta({
    pageTransition: {
    name: 'bottom'
    }
})

</script>

<template>
    <div class="absoluteFull centered">
        <PanelMain :title="t('pages.about.title')">
            <div class="bibBox">
                <div class="images aside">
                    <img class="aboutImage " v-for="image in content.images" :key="image.id" :src="`${directusBaseUrl}assets/${image.directus_files_id}`" alt="">
                </div>

                <PanelSectionScroller class="images scroller">
                    <img class="aboutImage " v-for="image in content.images" :key="image.id" :src="`${directusBaseUrl}assets/${image.directus_files_id}`" alt="">
                </PanelSectionScroller>

                <div class="textContent">
                    <h2 class="cardTitle_format fontColor_light">
                        {{ content.translations[0].title }}
                    </h2>

                    <p class="text cardText_format fontColor_light">
                        {{ content.translations[0].text }}
                    </p>
                </div>
            </div>
        </PanelMain>
    </div>
</template>

<style scoped>
.bibBox {
    width: 95vw;
    display: flex;
    flex-direction: row;
    flex-grow: 0;
    padding-bottom: 50px;
}
.images.scroller {
    width: 98%;
    margin: auto;
    display: none;
}

.images.aside {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.textContent {
    flex-grow: 1;
    padding: 0 min(2vw, 30px);
}
.text {
    white-space: pre-wrap;
    margin-top: 20px;
}
@media (max-width: 768px) {
    .bibBox {
        flex-direction: column;
        gap: 30px;
    }

    .images.aside {
        display: none;
    }
    .images.scroller {
        display: flex;
    }
    .aboutImage {
        width: auto;
        height: 200px;
        margin-inline: 10px;
        box-shadow: 0 0 5px rgba(0, 24, 44, 0.671);
    }
    .textContent {
        width: 100%;
    }
}
</style>