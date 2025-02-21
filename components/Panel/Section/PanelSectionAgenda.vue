<script setup>
import { directusGetItems } from '@/directus/directus.js';

const props = defineProps({
    filter: {
        type: Object
    }
})

const getItems = directusGetItems();

const { t, locale } = useI18n();

const queryParams = {
    fields: ['*', 'category.*, category.translations.*, show.*, show.translations.*, city.*, city.translations.*, city.region.*, city.region.translations.*, city.region.country.*, city.region.country.translations.*'],
    sort: ['date'],
    filter: props.filter ? props.filter : {},
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

const { data: dates } = await useAsyncData(
    'dates',
    async () => {
        const items = await getItems('Agenda', queryParams)

        items.forEach( item => {
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
        })

        let reformatedItems = {};

        items.forEach(item => {
            let date = new Date(item.date);
            let year = date.getFullYear();
            let month = date.toLocaleString('default', { month: 'numeric' });

            if (!reformatedItems[year]) {
                reformatedItems[year] = [];
            }

            let monthObject = reformatedItems[year].find(m => m.month === month);
            if (!monthObject) {
                monthObject = { month: month, dates: [] };
                reformatedItems[year].push(monthObject);
            }

            monthObject.dates.push(item);
        });

        // Convert the reformatedItems object to an array
        reformatedItems = Object.keys(reformatedItems).map(year => ({
            year: parseInt(year, 10),
            months: reformatedItems[year]
        }));

        

        return reformatedItems;
        // return items;
    },
    { server: true }
)

definePageMeta({
    pageTransition: {
        name: 'right'
    }
})

</script>

<template>
    <div class="box">
        <ul v-if="dates?.length > 0"
            v-for="year in dates" :key="year.year" 
            class="years" 
            :aria-label="t('pages.agenda.dateList')">
            <!-- <li>
                <h2 class="flex justifyCenter year cardTitle_format fontColor_light">{{ year.year }}</h2>
            </li> -->

            <li>
                <ul class="months" v-for="month in year.months" :key="month.month">
                    <li class="month">
                        <h3 class="month cardTitle_S_format fontColor_light">
                            {{ t(`dates.months[${month.month - 1}]`) }} {{ year.year }}
                        </h3>
                    </li>

                    <ul class="dates">
                        <li v-for="date in month.dates" :key="date.id" class="">
                            <PanelCardAgenda :date="date" v-if="date.show.translations[0]"/>
                        </li>
                    </ul>
                </ul>
            </li>
        </ul>

        <div v-else class="full centered">
            <p class="frosty_font cardSubtitle_format">
                aucune date prévue pour l'instant. <br>
                Consultez <NuxtLink to="/agenda" class="link underline fontColor_light">l'agenda</NuxtLink> pour voir les dates des autres spectacles.
            </p>
        </div>
    </div>
</template>

<style scoped>
/* .box {
    padding: min(3vw, 30px)
} */

.test {
    color: #6e76811a;
}

h2.year {
    padding: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.24);
}

ul.months {
    margin-block: 30px;
}

h3.month {
    padding-bottom: 10px;
    text-align: center;
}

ul.dates {
    padding: min(10px, 3vw);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    align-items: stretch;
}
@media (max-width: 750px) {
    ul.dates {
        grid-template-columns: 1fr;
    }
}
</style>