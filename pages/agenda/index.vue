<script setup>
import { directusGetItems } from '@/directus/directus.js';
const getItems = directusGetItems();

const { t, locale } = useI18n();

const queryParams = {
    fields: ['*', 'category.*, category.translations.*, show.*, show.translations.*, city.*, city.translations.*, city.region.*, city.region.translation.*, city.region.country.*, city.region.country.translations.*'],
    sort: ['date'],
    deep: {
        show: {
            translations: {
                _filter: {
                    languages_code: {
                        _eq: locale.value
                    }
                }
            }
        },
        category: {
            translations: {
                _filter: {
                    languages_code: {
                        _eq: locale.value
                    }
                }
            }
        },
        city: {
            translations: {
                _filter: {
                    languages_code: {
                        _eq: locale.value
                    }
                }
            }
        },
        city: {
            region: {
                translations: {
                    _filter: {
                        languages_code: {
                            _eq: locale.value
                        }
                    }
                }
            }
        },
        city: {
            region: {
                country: {
                    translations: {
                        _filter: {
                            languages_code: {
                                _eq: locale.value
                            }
                        }
                    }
                }
            }
        }
    }
}

const { data: dates } = await useAsyncData(
    'dates',
    async () => {
        const items = await getItems('Agenda', queryParams)

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
    },
    { server: true }
)

definePageMeta({
    pageTransition: {
        name: 'pageSlide'
    }
})


</script>

<template>
    <div class="absoluteFull centered">
        <PanelMain class="panel" :title="t('pages.agenda.title')" drawerPosition="right" showIntroText>
            <template #content>
                <div class="box">
                    <ul class="years" v-for="year in dates" :key="year.year" :aria-label="t('pages.agenda.dateList')" >
                        <li>
                            <h2 class="flex justifyCenter year cardTitle_format fontColor_light">{{ year.year }}</h2>
                        </li>
                    
                        <li>
                            <ul class="months" v-for="month in year.months" :key="month.month">
                                <li class="month"><h3 class="month cardTitle_S_format fontColor_light">{{ t(`dates.months[${month.month - 1}]`) }}</h3></li>

                                <ul class="dates">
                                    <li v-for="date in month.dates" :key="date.id" class="">
                                        <PanelCardAgenda :date="date" />
                                    </li>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>
            </template>
        </PanelMain>
    </div>
</template>

<style scoped>
.box {
    padding: min(3vw, 30px)
}
.test {
    color: #6e76811a;
}
h2.year {
    padding: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.24);
}
ul.years {
    margin-block: 30px;
}
ul.months {
    margin-block: 30px;
}

h3.month {
    padding-left: 10vw;
    padding-bottom: 10px;
}
ul.dates {
    padding: min(10px, 3vw);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px;
    align-items: stretch;
}

</style>