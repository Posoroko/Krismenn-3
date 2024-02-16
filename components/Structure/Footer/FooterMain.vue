<script setup>

</script>
 
<template>
    <div class="absoluteFull flex alignEnd noEvents">
        <footer class="noEvents">
            <div class="leftBox box glassSurface-onHover allEvents pointer">
                <StructureFooterInfoBoxMain />
            </div>

            <div class="centerBox box noEvents">

            </div>

            <div class="rightBox box glassSurface-onHover allEvents">
                <WidgetLanguageSelectorMain />
            </div>
        </footer>
    </div>
</template>
 
<style scoped>

footer {
    width: 100%;
    height: var(--gutter-thickness);
    display: grid;
    grid-template-columns: var(--gutter-thickness) auto var(--gutter-thickness);
    z-index: 1000;
}
</style>