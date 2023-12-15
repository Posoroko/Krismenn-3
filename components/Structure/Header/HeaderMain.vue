<script setup>
const route = useRoute();
</script>

<template>
    <header class="absoluteFull" :class="{ 'panelOpen': route.path.length > 4 }" >
        <nav class="w100 h100">
            <ul class="w100 h100">
                <li class="box corner topLeftBox centered">
                    <NuxtLink to="/" class="full centered glass_corner pointer">
                        <WidgetIcon name="home" :size="24" type="homePageNavButton"/>
                    </NuxtLink>
                </li>
            
                <div class="box topCenterBox"></div>
            
                <div class="box corner topRightBox centered">
                    <WidgetLanguageSelectorBzhButton />
                </div>

                <div class="box centerLeftBox flex column">
                    <StructureHeaderBarLeft />
                </div>
        
                <div class="box centerCenterBox"></div>

                <div class="box centerRightBox flex column">
                    <StructureHeaderBarRight />
                </div>
            
                <div class="box corner bottomLeftBox">

                </div>
                <div class="box bottomCenterBox flex">
                    <StructureHeaderBarBottom />
                </div>
                <div class="box corner bottomRightBox"></div>
            </ul>
        </nav>
    </header>
</template>

<style>
header li.box {
    flex-grow: 1;
    display: grid;
    place-items: center;
    cursor: pointer;
}

header .tabLinkText {
    font-family: var(--kText);
    font-size: clamp(1.5rem, 0.9vw + 0.1rem, 2rem);
    color: rgb(225, 237, 245);
    transition: 150ms ease;
}

header.panelOpen .tabLinkText {
    color: black;
    transition: 300ms ease;
}

header.panelOpen .tabLinkText:hover {
    color: rgb(225, 237, 245);
    transition: 150ms ease;
}

</style>

<style scoped>
ul {

    display: grid;
    grid-template-columns: var(--gutter-thickness) auto var(--gutter-thickness);
    grid-template-rows: var(--gutter-thickness) auto var(--gutter-thickness);
    grid-template-areas: 
        "topLeftBox topCenterBox topRightBox"
        "centerLeftBox centerCenterBox centerRightBox"
        "bottomLeftBox bottomCenterBox bottomRightBox";
}

</style>