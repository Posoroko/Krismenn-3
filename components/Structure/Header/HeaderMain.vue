<script setup>

</script>

<template>
    <header class="absoluteFull">
        <nav class="w100 h100">
            <ul class="w100 h100">
                <li class="box corner topLeftBox centered">
                    <NuxtLink to="/" class="full centered glass_corner pointer">
                        <WidgetIcon name="home" :size="24" type="homePageNavButton"/>
                    </NuxtLink>
                </li>
            
                <div class="box topCenterBox"></div>
            
                <div class="box corner topRightBox">
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