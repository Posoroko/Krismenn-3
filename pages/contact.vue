<script setup>
import { directusGetItems } from '@/directus/directus.js';
const { t, locale } = useI18n();

const getItems = directusGetItems();
const queryParams = {
    fields: [ '*', 'translations.*'],
    filter: {
        published: {
            _eq: true
        }, 
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
                    },
                    
                ]
            }
        }
    }
}

const { data : contacts } = await useAsyncData(
    'contacts',
    async () => {
        const items = await getItems('Contact', queryParams)

        items.forEach( item => {
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
        name: 'bottom'
    }
})
// SEO, meta tags, head content

const pageRef = "contact";
const ogUrl = computed(() => {
    let url = t(`pages.${pageRef}.url`);

    return `https://krismenn.com/${locale.value}${url}`
})
const useHeadContent = useCreateUseHead( pageRef, ogUrl, t);
useHead( useHeadContent );
</script>

<template>
    <div class="bigBox 
                absoluteFull centered">
        <PanelMain :title="t('pages.contact.title')" drawerPosition="right">
            <ul class="h100 flex column justifyCenter gap20">
                <li v-for="contact in contacts" :key="contact.id" 
                    class="flex column">
                    <h3 class="cardTitle_format fontColor_light">
                        {{ contact.translations[0].title }}
                    </h3>

                    <span class="flex column alignStart gap10">
                        <span v-if="contact.telephone" 
                                class=" infoLine 
                                frosty_border glowing_onHover
                                flex alignCenter gap20">

                            <span class="iconBox">
                                <WidgetIconsCall />
                            </span>

                            <a  :href="`call:${contact.telephone}`"
                                class="cardSubtitle_format fontColor_light">
                                {{ contact.telephone }}
                            </a>
                        </span >

                        <span v-if="contact.email" 
                                    class=" infoLine 
                                            frosty_border glowing_onHover
                                            flex alignCenter gap20">
                            <span class="iconBox">
                                <WidgetIconsEmail />
                            </span>

                            <a :href="`mailto:${contact.email}`" 
                                class="cardSubtitle_format fontColor_light" >
                                {{ contact.email }}
                            </a>
                        </span >

                        <span v-if="contact.website" 
                            class=" infoLine 
                                    frosty_border glowing_onHover
                                    flex alignCenter gap20 ">

                            <span class="iconBox">
                                <WidgetIconsWebsite />
                            </span>

                            <a :href="contact.website" 
                                class="cardSubtitle_format fontColor_light" >
                                {{ contact.website }}
                            </a>
                        </span >
                    </span>
                </li>
            </ul>
        </PanelMain>
    </div>
</template>

<style scoped>
.bigBox {
    padding-bottom: var(--gutter-thickness)
}

ul {
    padding: 30px;
}

li {
    padding: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.288);
}

li:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.288);
}

h3 {
    margin-bottom: 30px;
}

.iconBox {
    width: 30px;
    height: 30px;
}

.iconBox:deep(svg) {
    fill: white;
    opacity: 0.5;
}

.infoLine {
    padding: 10px 15px;}
</style>