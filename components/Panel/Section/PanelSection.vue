<script setup>
const props = defineProps({
    title: String,
    showTopBorder: {
        type: Boolean,
        default: false
    },
    showBottomBorder: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <section class="w100"
            :class="[
                { 'showTopBorder': showTopBorder }, 
                { 'showBottomBorder': showBottomBorder }
            ]">
        <h1 class="sectionTitle">{{ title }}</h1>
        
        <div class="contentBox w100">
            <slot name="content">

            </slot>
        </div>
    </section>
</template>

<style scoped>
section {
    padding: min(2vw, 10px);
}

section.showTopBorder,
section.showBottomBorder {
    padding-top: 0.8rem;
    border-top: 1px solid var(--frosty-color);
    margin-top: min(5vw, 50px);
}

.sectionTitle {
    font-size: clamp(1.8rem, 2.8vw + 0.1rem, 2.8rem);
    line-height: 1.8;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.773);
    /* padding-left: 0.8rem; */
}

.contentBox {
    margin-top: min(2vw, 20px);
}
</style>