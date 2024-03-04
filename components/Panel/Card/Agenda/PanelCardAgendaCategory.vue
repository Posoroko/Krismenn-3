<script setup>
import { directusBaseUrl, directusGetItems } from '~/directus/directus';
const { t, locale } = useI18n();

const props = defineProps({
    categoryId: {
        type: String,
        required: true
    }
})

const getItems = directusGetItems();
const queryParams = {
    fields: ['*', 'translations.*'],
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

const { data: cats } = await useAsyncData(
    'categories',
    async () => {
        const items = await getItems('date_categories', queryParams)

        return items
    },
    { server: true }
)

</script>

<template>
    <div class="box flex wrap">
        <p v-for="cat in cats" :key="cat.id" 
            class="tag"
            :class="{ 'active' : categoryId === cat.id }">
            {{ cat.translations[0].displayName }}
        </p>
    </div>
</template>

<style scoped>
.box {
    gap: 20px;
}
.tag {
    font-size: 1.5rem;
    padding: 5px 20px;
    color: #ffffff3b;
    background-color: #ffffff11;
    white-space: nowrap;
}

.tag.active {
    font-weight: 700;
    color: #00526b;
    background-color: #ffffffdc;
}
@media (max-width: 768px) {
    .box {
        gap: 10px;
    }
    .tag {
        font-size: 1.2rem;
        padding: 5px 10px;
    }
}
</style>