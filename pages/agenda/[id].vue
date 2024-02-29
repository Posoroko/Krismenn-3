<script setup>
import { directusBaseUrl, directusGetItems } from '@/directus/directus.js';

const { t, locale } = useI18n();

const route = useRoute();
console.log(route.path)

const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;

const fetchUrl = `${directusItems}Agenda`;
const fetchOptions = {
    query: {
        fields: ["*,city.*,category.*,category.translations.*,city.translations.*,city.region.isFrenchDepartment,city.region.depNumber,city.region.country.translations.*,show.*,show.translations.*, show.mainImage"],
        filter: {
            id: {
                _eq: route.params.id
            }
        }
    }
}

const { data: date } = await useAsyncData(
    "`date-${route.params.id}`",
    async () => {
        const _items = await $fetch(fetchUrl, fetchOptions)
        let item = _items.data[0];

        const propsWithTranslations = [item.show, item.category, item.city, item.city.region.country];

        propsWithTranslations.forEach(prop => {

            let _translations = {};
            prop.translations.forEach(obj => {
                _translations[obj.languages_code] = obj;
            })
            prop.translations = _translations;
        })

        return item;
    }
    ,
    { server: true }
)

definePageMeta({
    pageTransition: {
        name: 'fade'
    }
})
</script>

<template>
    <div class="absoluteFull centered">
        <PanelMain v-if="date" class="panel " :title="t('pages.agenda.title')" backButtonURL="/agenda" drawerPosition="right">
            <div class="h100 flex alignCenter">
                <div class="card grow">
                    <div class="dateBox frosty_bg flex alignCenter justifyCenter" >
                        <p class="date">
                            {{ new Date(date.date).getDate() }}
                            {{ t(`dates.months[${new Date(date.date).getMonth()}]`) }}
                            {{ new Date(date.date).getFullYear() }}
                        </p>
                    </div>

                    <div class="infoBox fontColor_light grow
                            flex column justifyBetween gap20">
                        <div class="frame">
                            <img :src="`${directusBaseUrl}assets/${date.show.mainImage}?key=fit-content-300-jpg`" 
                                class="objectFitContain"
                                :alt="`Krismenn | ${date.show.title}`">
                        </div>
                    
                        <p class="cardTitle_format">
                            {{ date.show.title }}
                        </p>

                        <PanelCardAgendaCategory :categorySlug="date.category.slug" />

                        <p v-if="date.event" class="cardTitle_format">
                            {{ date.event }}
                        </p>

                        <p v-if="date.event_website">
                            {{ date.event_Website }}
                        </p>

                        <address class="cardSubtitle_format fontColor_light">
                            <p v-if="date.venue">
                                {{ date.venue }}
                            </p>

                            <p>
                                <span>{{ date.city.translations[locale].name }}, </span>
                                <span>{{ date.city.region.depNumber }}, </span>
                                <span>{{ date.city.region.country.translations[locale].name }}</span>
                            </p>
                        </address>
                    </div>
                </div>
            </div>
        </PanelMain>
    </div>
</template>

<style scoped>
.card {
    margin: min(3vw, 30px);
    border: 4px solid var(--frosty-bg-color);
    display: flex;
    box-shadow: 0 0 10px 0 rgba(0, 30, 49, 0.226);
}

.dateBox {
    width: clamp(80px, 7vw, 120px);
    overflow: visible;
}
.date {
    font-size: clamp(3rem, 5vw, 5rem);
    font-weight: 900;
    color: rgba(255, 255, 255, 0.705);
    transform: rotate(-90deg);
    white-space: nowrap;
}

.frame {
    width: 250px;
    height: 250px;
}
.frame img {
    object-position: left;
}
.infoBox {
    padding: min(4vw, 40px);
}
@media (max-width: 600px) {
    .card {
        height: 100%;
        flex-direction: column;
    }
    .dateBox {
        width: 100%;
        height: 80px;
        display: grid;
        place-items: center;
    }

    .date {
        transform: rotate(0deg);
        white-space: nowrap;
    }
    
    .frame {
        width: 200px;
        height: 200px;
    }
}
@media (max-width : 800px) and (orientation: landscape) {
        .card {
            height: 100%;
        }
        .date {
            font-size: 2rem;
        }
    }
</style>