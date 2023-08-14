<script setup>

</script>

<template>
    <header class="absoluteFull">
        <nav class="w100 h100">
            <div class="box corner topLeftBox centered">
                <NuxtLink to="/" class="full centered glass_corner pointer">
                    <WidgetIcon name="home" :size="24" type="homePageNavButton"/>
                </NuxtLink>
            </div>
            
            <div class="box topCenterBox"></div>
            <div class="box corner topRightBox"></div>

            <div class="box centerLeftBox"></div>
        
            <div class="box centerCenterBox"></div>
            <div class="box centerRightBox"></div>
            <div class="box corner bottomLeftBox">

            </div>
            <div class="box bottomCenterBox"></div>
            <div class="box corner bottomRightBox"></div>
        </nav>
    </header>
</template>

<style scoped>
nav {
    display: grid;
    grid-template-columns: var(--gutter-thickness) auto var(--gutter-thickness);
    grid-template-rows: var(--gutter-thickness) auto var(--gutter-thickness);
    grid-template-areas: 
        "topLeftBox topCenterBox topRightBox"
        "centerLeftBox centerCenterBox centerRightBox"
        "bottomLeftBox bottomCenterBox bottomRightBox";
}


</style>