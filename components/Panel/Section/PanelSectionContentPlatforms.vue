<script setup>
const appConfig = useAppConfig();
const links = appConfig.listeningPlatforms;

</script>

<template>
    <nav class="w100 centered">
        <ul class="">
            <li 
                v-for="link in links" :key="link.id" 
                class="platformCard flex alignCenter frosty_surface frosty_base glow_on_hover"
            >
                <a class="full flex column justifyCenter alignCenter" :href="link.href">
                    <WidgetIcon :name="link.ref" type="homePageNavButton" :size="75"/>

                    <span class="cardText_format frosty_font">{{ link.displayName }}</span>
                </a>
            </li>

            <li class=" platformCard 
                        frosty_surface frosty_base glow_on_hover
                        flex alignCenter">
                <a class="full flex column justifyCenter alignCenter" href="https://soundcloud.com/krismenn">
                    <svg class="soundcloud" viewBox="0 0 24 24" width="75" height="75" x="0px" y="0px">
                        <path d="M4.81,9.71c-0.37-0.01-0.7,0.32-0.69,0.69v6.36c0,0.39,0.32,0.54,0.69,0.55c0.37,0,0.7-0.15,0.7-0.55V10.4 C5.51,10.03,5.18,9.7,4.81,9.71z"/>
                        <path d="M21.11,12.19c-0.89-0.92-2.31-1.18-3.48-0.69c-0.19-2.83-2.74-5.16-5.58-5.11c-0.41,0-0.83,0.05-1.25,0.15 C10.6,6.6,10.5,6.8,10.5,7.12v10.24c0,0.08,0.07,0.21,0.17,0.24l8.19,0.01C21.65,17.64,23.13,14.14,21.11,12.19z"/>
                        <path d="M3.34,12.87c-0.02-0.92-1.36-0.92-1.38,0v2.73c-0.03,0.92,1.49,0.99,1.38,0C3.34,15.59,3.34,12.87,3.34,12.87z"/>
                        <path d="M9,6.79c-0.49,0-0.7,0.37-0.7,0.89v9.41c0,0.34,0.23,0.52,0.7,0.52c0.46,0,0.7-0.17,0.7-0.52V7.68 C9.7,7.15,9.52,6.79,9,6.79z"/>
                        <path d="M6.98,10.55c-0.38-0.01-0.72,0.33-0.71,0.71v5.81c0,0.18,0.07,0.32,0.2,0.41c0.37,0.25,1.22,0.18,1.2-0.41 v-5.81C7.68,10.88,7.35,10.54,6.98,10.55z"/>
                    </svg>

                    <span class="cardText_format frosty_font">Soundcloud</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>

ul {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
}
@media (max-width : 855px) {
    ul {
        width: min(100%, 500px);
    }
}
@media (max-width : 500px) {
    ul {
        width: 100%;
        justify-content: flex-start;
        flex-wrap: nowrap;
        overflow-x: scroll;
        border: 2px solid rgba(0, 37, 54, 0.582);
        box-shadow: inset 0 0 10px 0 rgb(0, 37, 54);
    }
}
.platformCard {
    width: 100px;
    padding: 10px;
    flex-shrink: 0;
}
.soundcloud {
    /* the svg is not made the same way as the others */
    fill: var(--frosty-font-color);
}
</style>