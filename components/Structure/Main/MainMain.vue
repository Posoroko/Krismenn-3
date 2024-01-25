<script setup>


</script>

<template>
    <main class="absoluteFull noEvents flex column ">
        <!-- <div class="topBar centered noEvents_kidsEvents">
            <StructureMainPageTitle />
        </div> -->

        <div class="nuxtPageContainer relative noEvents grow">
           <slot></slot>
        </div>
    </main>
</template>

<style scoped>
main {
    margin: var(--gutter-thickness);
    margin-top: 0;
    /* padding: 5px; */
}
.topBar {
    height: var(--gutter-thickness);
    margin: 0 var(--gutter-thickness);
}


</style>