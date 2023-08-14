<script setup>
const props = defineProps({
    component: String
})
</script>

<template>
    <div class="appGrid">
        <div class="box corner topLeftBox">
            <slot name="topLeft"></slot>
        </div>

        <div class="box topCenterBox">
            <slot name="topCenter"></slot>
        </div>

        <div class="box corner topRightBox">
            <slot name="topRight"></slot>
        </div>

        <div class="box centerLeftBox">
            <slot name="centerLeft"></slot>
        </div>

        <div class="box centerCenterBox">
            <slot name="centerCenter"></slot>
        </div>

        <div class="box centerRightBox">
            <slot name="centerRight"></slot>
        </div>

        <div class="box corner bottomLeftBox">
            <slot name="bottomLeft"></slot>
        </div>

        <div class="box bottomCenterBox">
            <slot name="bottomCenter"></slot>
        </div>

        <div class="box corner bottomRightBox">
            <slot name="bottomRight"></slot>
        </div>
    </div>
</template>

<style scoped>
appGrid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: var(--gutter-thickness) auto var(--gutter-thickness);
    grid-template-rows: var(--gutter-thickness) auto var(--gutter-thickness);
    grid-template-areas:
        "topLeftBox topCenterBox topRightBox"
        "centerLeftBox centerCenterBox centerRightBox"
        "bottomLeftBox bottomCenterBox bottomRightBox";
}

.box {
    border: 1px solid red;
}
</style>