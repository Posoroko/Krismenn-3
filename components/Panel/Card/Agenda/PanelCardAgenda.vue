<script setup>
const { t, locale } = useI18n();
const localePath = useLocalePath()

const props = defineProps({
    date: {
        type: Object,
        required: true
    }
})

// Deep filters are not working for city, region and country, so we need to use computed properties to filter the translations
const city = computed(() => {
    return props.date.city.translations.find(item => item['languages_code'] === locale.value)
})
const region = computed(() => {
    return props.date.city.region.translations.find(item => item['languages_code'] === locale.value)
})
const country = computed(() => {
    return props.date.city.region.country.translations.find(item => item['languages_code'] === locale.value)
})
</script>

<template>
    <NuxtLink :to="localePath(`/agenda/${date.id}`)" class="card frosty_base flex gap10 relative h100">
        <time class=" date fontColor_light" :datetime="date.date">{{ new Date(date.date).getUTCDate()
            }}</time>

        <div class="infoBox  flex column justifyCenter alignStart">
            <p class="category frosty_base fontColor_light">
                {{ date.category.translations[0].displayName }}
            </p>

            <h2 v-if="date.show" class="cardSubtitle_format fontColor_light">{{ date.show.title }}</h2>

            <address class="w100 flex wrap" v-if="date">
                <span class="cardText_format fontColor_light">
                    {{ city ? `${city.name},&nbsp` : '' }}
                </span>

                <span class="cardText_format fontColor_light">
                    {{ region ? `${region.name},&nbsp`: '' }}
                </span>

                <span class="cardText_format fontColor_light">
                    {{ country ? country.name : '' }}
                </span>
            </address>
        </div>

        <div class="moreBtn absolute top0 right0 flex justifyEvenly alignCenter">
            <svg viewBox="0 0 24 24" class="pointer">
                <path
                    d="M11,17h2v-6h-2V17zM12,9c0.3,0,0.5-0.1,0.7-0.3S13,8.3,13,8c0-0.3-0.1-0.5-0.3-0.7C12.5,7.1,12.3,7,12,7s-0.5,0.1-0.7,0.3C11.1,7.5,11,7.7,11,8c0,0.3,0.1,0.5,0.3,0.7S11.7,9,12,9zM12,22c-1.4,0-2.7-0.3-3.9-0.8S5.8,20,4.9,19.1s-1.6-2-2.1-3.2S2,13.4,2,12s0.3-2.7,0.8-3.9S4,5.8,4.9,4.9s2-1.6,3.2-2.1S10.6,2,12,2s2.7,0.3,3.9,0.8s2.3,1.2,3.2,2.1c0.9,0.9,1.6,2,2.1,3.2S22,10.6,22,12s-0.3,2.7-0.8,3.9c-0.5,1.2-1.2,2.3-2.1,3.2c-0.9,0.9-2,1.6-3.2,2.1S13.4,22,12,22z" />
            </svg>

            <svg viewBox="0 -960 960 960" class="more pointer">
                <path
                    d="m276.846-460 231.693 231.692L480-200 200-480l280-280 28.539 28.308L276.846-500H760v40H276.846Z" />
            </svg>
        </div>
    </NuxtLink>
</template>

<style scoped>
h2 {
    font-weight: 500;
}
.card:hover {
    filter: brightness(0.8);
}

time.date {
    font-size: 30px;
    letter-spacing: -0.1em;
    width: 50px;
    display: grid;
    place-items: center;
}
.infoBox {
    padding: 10px;
}
.category {
    padding: 3px 5px;
}
.moreBtn {
    width: 60px;
    height: 30px;
    font-size: 1.6rem;
    color: white;
    background-color: #ffffff21;
    opacity: 0;
    transition: 300ms  ease;
}
.card:hover .moreBtn {
    opacity: 1;
    transition: 150ms ease;
}
.moreBtn svg {
    height: 20px;
    fill: white;
}
svg.more {
    rotate: 180deg;
}
</style>