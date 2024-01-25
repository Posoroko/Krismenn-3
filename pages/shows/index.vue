<script setup>
const { t, locale } = useI18n();

const icons = useIconStrings();

const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;

const fetchOptions = {
    query: {
        fields: ["*, translations.*"]
    }
}

const { data: shows } = await useAsyncData(
    "shows",
    async () => {
        const _items = await $fetch(`${directusItems}Shows`, fetchOptions)
        let items = _items.data;

        items.forEach(item => {

            let _translations = {};

            item.translations.forEach( obj => {
                _translations[obj.languages_code] = obj;

            })
            item.translations = _translations;

        })

        return items;
    }
    ,
    { server: true }
)

definePageMeta({
    pageTransition: {
        name: 'slideFromLeft'
    }
})
</script>

<template>
    <PanelMain page="shows" drawerPosition="left"
        stripeImageDirectusUrl="/images/stripes/xl/brown.webp">

        <template #content>
            <p>

            </p>   

            <ul class="flex column gap50">
                <PanelCardMain class="card" v-for="show in shows" :key="show.id">
                    <div class="frame relative">
                        <img class="image" :src="`${directusAssets}${show.mainImage}`" alt="">
                    </div>

                    <div class="contentBox">
                        <h1 class="cardTitle_format ">{{ show.translations[locale].title }}</h1>
                    
                        <p class="cardSubtitle_format definition ktextFat">{{ show.translations[locale].definition }}</p>

                        <p class="description cardText_format">{{ show.translations[locale].description }}</p>

                        <PanelCardContactBox 
                            v-if="show.telephone || show.email || show.website" 
                            :email="show.email" 
                            :telephone="show.telephne" 
                            :website="show.website"/>
                    </div>
                </PanelCardMain>
            </ul>
        </template>
    </PanelMain>
</template>

<style scoped>
ul {
    padding-bottom: 30px;
     
}
.card  .frame {
    width: 100%;
    height: 200px;
    overflow: hidden;
}
.card .frame .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    animation: zoom 1500ms ease-in-out forwards;
}
@keyframes zoom {
    from {
        scale: 1;
    }
    to {
        scale: 1.1;
    }
}
h1, p, a {
    color: white;
}

.contentBox{
    padding: 3vw;
   
    border-top: none;
    background-color: #ffffff0b;
}

p.description {
    margin-top: 25px;
}
</style>