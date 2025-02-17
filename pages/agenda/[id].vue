<script setup>
import { directusBaseUrl, directusGetItems } from '@/directus/directus.js';
const getItems = directusGetItems();
const { t, locale } = useI18n();

const route = useRoute();

const queryParams = {
    fields: [ 
        "*",
        "show.*",
        "category.*",
        "category.translations.*",
        "show.translations.*",
        "city.*", "city.translations.*",
        "city.region.*", "city.region.translations.*",
        "city.region.country.*", "city.region.country.translations.*"
    ],
    filter: {
        id: {
            _eq: route.params.id
        }
    },
    deep: [
        {
            show: {
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
        },
        {
            category: {
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
        },
        {
            city: {
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
            },
        },
        {
            city: {
                region: {
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
            },
        },
        {
            city: {
                region: {
                    country: {
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
            }
        }        
    ]
}

const { data: date } = await useAsyncData(
    "`date-${route.params.id}`",
    async () => {
        const items = await getItems("Agenda", queryParams)
        let item = items[0];

        if(item.show.translations.length > 1) {
            item.show.translations = item.show.translations.filter( t => t.languages_code === locale.value)
        }
        if(item.category.translations.length > 1) {
            item.category.translations = item.category.translations.filter( t => t.languages_code === locale.value)
        }
        if(item.city.translations.length > 1) {
            item.city.translations = item.city.translations.filter( t => t.languages_code === locale.value)
        }
        if(item.city.region.translations.length > 1) {
            item.city.region.translations = item.city.region.translations.filter( t => t.languages_code === locale.value)
        }
        if(item.city.region.country.translations.length > 1) {
            item.city.region.country.translations = item.city.region.country.translations.filter( t => t.languages_code === locale.value)
        }

        return item;
    }
    ,
    { server: true }
)

definePageMeta({
    enterFrom: 'fade'
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

                        <PanelCardAgendaCategory :categoryId="date.category.id" />

                        <p v-if="date.event" class="cardTitle_format">
                            {{ date.event }}
                        </p>

                        <p v-if="date.event_website">
                            {{ date.event_website }}
                        </p>

                        <address class="cardSubtitle_format fontColor_light">
                            <p v-if="date.venue">
                                {{ date.venue }}
                            </p>

                            <p>
                                <span>{{ date.city.translations[0].name }}, </span>
                                <span>{{ date.city.region.depNumber }}, </span>
                                <span>{{ date.city.region.country.translations[0].name }}</span>
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