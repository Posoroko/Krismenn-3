<script setup>
import { directusGetItems } from '@/directus/directus.js';


const getItems = directusGetItems();

const { t, locale } = useI18n();

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
                languages_code: {
                    _eq: locale.value
                }
            }
        }
    }
}

const { data : contacts } = await useAsyncData(
    'contacts',
    async () => {
        const items = await getItems('Contact', queryParams)

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
    <div class="bogBox absoluteFull centered">
        <PanelMain :title="t('pages.contact.title')" drawerPosition="right">
            <ul class="flex column justifyCenter gap20 h100">
                <li v-for="contact in contacts" :key="contact.id" class="flex column">
                    <h3 class="cardTitle_format fontColor_light">{{ contact.translations[0].title }}</h3>

                    <span class="flex column alignStart gap10">
                        <span v-if="contact.telephone" class="infoLine flex alignCenter gap20 frosty_border glowing_onHover">
                            <span class="iconBox">
                                <WidgetIconsCall />
                            </span>
                            <a class="cardSubtitle_format fontColor_light" :href="`call:${contact.telephone}`">{{ contact.telephone }}</a>
                        </span >

                        <span v-if="contact.email" class="infoLine flex alignCenter gap20 frosty_border glowing_onHover">
                            <span class="iconBox">
                                <WidgetIconsEmail />
                            </span>

                            <a class="cardSubtitle_format fontColor_light" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
                        </span >

                        <span v-if="contact.website" class="infoLine flex alignCenter gap20 frosty_border glowing_onHover">
                            <span class="iconBox">
                                <WidgetIconsWebsite />
                            </span>

                            <a class="cardSubtitle_format fontColor_light" :href="contact.website">{{ contact.website }}</a>
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
    padding: 10px 15px;
    /* margin-left: 10px; */
}
</style>