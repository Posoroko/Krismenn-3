<script setup>
import { directusGetItems, directusBaseUrl } from '@/directus/directus.js';
const { t, locale } = useI18n();

// data fetching
const getItems = directusGetItems();
const queryParams = {
    fields: [
            '*', 
            'translations.*',
            'images.*'
    ],
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
                    },
                    
                ]
            }
        }
    }
}
const { data: content } = await useAsyncData(
    'about',
    async () => {
        const item = await getItems('About', queryParams);

        if(item.translations.length > 1) {
            item.translations = item.translations.filter( t => t.languages_code === locale.value)
        }
        
        return item
    },
    { server: true }
)

definePageMeta({
    pageTransition: {
    name: 'bottom'
    }
})
// SEO, meta tags, head content

const pageRef = "about";
const ogUrl = computed(() => {
    let url = t(`pages.${pageRef}.url`);

    return `https://krismenn.com/${locale.value}${url}`
})
const useHeadContent = useCreateUseHead( pageRef, ogUrl, t);
useHead( useHeadContent );
</script>

<template>
    <div class="absoluteFull centered">
        <PanelMain :title="t('pages.about.title')">
            <div class="bigBox">
                <div class="images">
                    <img class="aboutImage " v-for="image in content.images" :key="image.id" :src="`${directusBaseUrl}assets/${image.directus_files_id}`" alt="">
                </div>

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
.bigBox {
    /* width: 95vw; */
    display: flex;
    flex-direction: row;
    padding-bottom: 50px;
}
.images.scroller {
    width: 98%;
    margin: auto;
    display: none;
}

.images {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.aboutImage {
    width: 400px;

}
.textContent {
    /* flex-grow: 1; */
    padding: 0 min(3vw, 40px);
}
.text {
    white-space: pre-wrap;
    margin-top: 20px;
}
@media (max-width: 850px) {
    .bigBox {
        flex-direction: column;
        gap: 30px;
    }

    .images {
        flex-direction: row;
        padding: 10px;
        border: 2px solid rgba(0, 37, 54, 0.582);
        box-shadow: inset 0 0 10px 0 rgb(0, 37, 54);
        overflow-x: scroll;
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