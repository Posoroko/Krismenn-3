<script setup>
const { t, locale } = useI18n();

const dateToLocale = useDateToLocale();
const props = defineProps({
    date: {
        type: Object,
        required: true
    }
})
</script>


<template>
    <h2>{{ date.showTemp }}</h2>
    
    <time :datetime="date.date">{{ new Date(date.date).toLocaleString(locale).split(',')[0] }}</time>

    <address>
        <p>{{ date.venue }}</p>
        <p>{{ date.city.name }}</p>
        <p>{{ date.city.country }}</p>
    </address>

</template>