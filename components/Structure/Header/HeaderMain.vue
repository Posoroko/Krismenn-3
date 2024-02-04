<script setup>
const route = useRoute();
</script>

<template>
    <header class="absoluteFull noEvents" :class="{ 'panelOpen': route.path.length > 4 }" >
        <nav class="w100 h100 noEvents">
            <ul class="w100 h100 noEvents">
                <li class="box corner topLeftBox centered allEvents glowing_onHover">
                    <NuxtLink to="/" class="full centered glass_corner pointer">
                        <WidgetIcon name="home" :size="24" type="homePageNavButton"/>
                    </NuxtLink>
                </li>
            
                <div class="box topCenterBox centered">
                    <StructureMainPageTitle />
                </div>
            
                <div class="box corner topRightBox centered">

                </div>

                <div class="box centerLeftBox flex column allEvents">
                    <StructureHeaderBarLeft />
                </div>
        
                <div class="box centerCenterBox noEvents"></div>

                <div class="box centerRightBox flex column allEvents">
                    <StructureHeaderBarRight />
                </div>
            
                <div class="box corner bottomLeftBox">

                </div>
                <div class="box bottomCenterBox flex allEvents">
                    <StructureHeaderBarBottom />
                </div>
                <div class="box corner bottomRightBox allEvents"></div>
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
    width: 100%;
    height: 100%;
    font-family: var(--kText);
    font-size: clamp(1.5rem, 0.9vw + 0.1rem, 2rem);
    color: rgb(225, 237, 245);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 150ms ease;
}

header.panelOpen .tabLinkText {
    color: rgba(225, 237, 245, 0.496);
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